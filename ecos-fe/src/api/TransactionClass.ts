import { APPResponse, oType } from "../typeDefs/api";
import { Fun, errFun, loadFun } from "../typeDefs/helpers";
import APIClient from "./APIClient";
import { LFClient } from "./LFClient";

export default class Transaction {
  #parameters: oType = {};
  #mock: boolean;
  #path: string = "";
  #apiClient: APIClient;
  #response: APPResponse = { data: null, success: false, message: "" };

  // post execute action handlers
  #onError: errFun | null = null;
  #onSuccess: Fun | null = null;
  #loading: loadFun = () => {
    throw new Error("No transaction loading function found");
  };

  async #delegateToLFClient() {
    if (!(await LFClient.isActiveAsync())) {
      // Pre load check is failed, then data is not available in the localForage. add the data into it
      if (!(await LFClient.buildAsync())) {
        return false;
      }
    }
    this.#response = await LFClient.getAsync(this.#path);
    return true;
  }

  addParameter(key: string, value: oType) {
    this.#parameters[key] = value;
  }

  async execute(multiple?: boolean) {
    this.#loading({
      loadVal: true,
      label: this.#parameters["loadLabel"] as string,
    });
    this.#apiClient = new APIClient(this.#mock);
    // mock is enabled delegate the task to LFClient for all transactions
    if (this.#mock) {
      if (!(await this.#delegateToLFClient())) {
        this.#response.message = "Server failed to fulfill the response";
      }
    } else {
      this.#response = await this.#apiClient.request({
        requestType: "get",
        path: this.#path,
        payload: this.#parameters["payload"] as oType,
      });
    }
    if (this.#response.success && this.#onSuccess) {
      this.#onSuccess(this.#response.data as oType);
    } else if (this.#onError) {
      this.#onError(this.#response.message);
    }
    if (!multiple) {
      this.#loading({
        loadVal: false,
        label: this.#parameters["loadLabel"] as string,
      });
    }
  }

  set onSuccess(ref: Fun) {
    this.#onSuccess = ref;
  }
  set onError(ref: errFun) {
    this.#onError = ref;
  }
  set loading(ref: loadFun) {
    this.#loading = ref;
  }
  set mock(isMock: boolean) {
    this.#mock = isMock;
  }
  set path(url: string) {
    this.#path = url;
  }
}

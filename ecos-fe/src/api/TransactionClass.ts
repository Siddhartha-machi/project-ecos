import {
  APPResponse,
  oType,
  requestType,
  storageType,
  transactionConfig,
  transactionType,
} from "../typeDefs/api";
import { Fun, errFun, loadFun } from "../typeDefs/helpers";
import APIClient from "./APIClient";
import { LFClient } from "./LFClient";

export default class Transaction {
  private parameters: oType = {};
  private config: transactionConfig = { path: "", type: "get" };
  private actions: Array<string> = [];
  private response: APPResponse = { data: null, success: false, message: "" };
  private LFReponse: APPResponse;
  private ORTransaction = false;
  private tLock = false;

  // post execute action handlers
  private errorHandler: errFun | null = null;
  private successHandler: Fun | null = null;
  private setLoading: loadFun = () => {};

  private async makeTransaction(type: requestType | storageType) {
    console.log("Found request :", type);

    switch (type) {
      case "load":
        {
          const client = await LFClient.build(this.config);
          this.LFReponse = await client.getAsync(this.config.path);
        }
        break;
      case "remove":
      case "modify":
      case "save":
        {
          const client = await LFClient.build(this.config);
          this.LFReponse = await client.setAsync(
            this.config.memoPath || this.config.path,
            this.parameters["data"] || this.response.data
          );
        }
        break;
      default:
        // default to API request
        this.response = await new APIClient(this.config.mock).request({
          requestType: type as requestType,
          path: this.config.path,
          payload: this.parameters["payload"] as oType,
        });
        break;
    }
  }

  private geneateActionTypes() {
    const actionType = this.config.type;
    this.actions = [actionType];
    if (actionType.length > 6) {
      let i: number;
      for (i = 0; i < actionType.length; i++) {
        if (actionType[i] === "|" || actionType[i] === "&") {
          this.ORTransaction = actionType[i] === "|";
          break;
        }
      }
      this.actions[0] = actionType.substring(0, i);
      this.actions[1] = actionType.substring(i + 1);
    }
  }

  private resolveTransaction(action: requestType | storageType) {
    if (["load", "save", "remove", "modify"].includes(action)) {
      this.response = this.LFReponse;
    }
    // Handling response and calling transaction bound event callers
    if (this.response.success && this.successHandler) {
      this.successHandler(this.response.data as oType);
    } else if (this.errorHandler) {
      this.errorHandler(this.response.message);
    } else {
      console.log({ res: this.response, config: this.config });
    }
  }

  async execute(multiple?: boolean) {
    this.setLoading({
      loadVal: true,
      label: this.parameters["loadLabel"] as string,
    });

    this.geneateActionTypes();

    for (const action of this.actions) {
      //   if (!this.tLock) {
      // this.tLock = true;
      await this.makeTransaction(action as requestType | storageType);
      this.resolveTransaction(action as requestType | storageType);
      if (this.ORTransaction) {
        if (this.response.success) {
          break;
        } else {
          this.actions.push(this.actions[0]);
        }
        this.ORTransaction = false;
      }
      // this.tLock = false;
      //   }
    }

    if (!multiple) {
      this.setLoading({
        loadVal: false,
        label: this.parameters["loadLabel"] as string,
      });
    }
  }

  addParameter(key: string, value: oType | boolean | string) {
    this.parameters[key] = value;
  }
  set onSuccess(ref: Fun) {
    this.successHandler = ref;
  }
  set onError(ref: errFun) {
    this.errorHandler = ref;
  }
  set loading(ref: loadFun) {
    this.setLoading = ref;
  }
  set mock(isMock: boolean) {
    this.config.mock = isMock;
  }
  set path(url: string) {
    this.config.path = url;
  }
  set transactionType(type: transactionType) {
    this.config.type = type;
  }
}

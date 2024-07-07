import { apiClientParams } from "../typeDefs/api";
import HTTPClient from "./HTTPClient";

export default class APIClient {
  #client: HTTPClient;
  #baseURL = "";
  #requestHandler = this.#clientRequest;
  #mock = false;
  #requestParams;

  constructor(mock?: boolean) {
    if (mock) {
      this.#mock = mock;
      this.#baseURL = "mocks/";
      this.#requestHandler = this.#mockClient;
    }

    this.#client = new HTTPClient(this.#baseURL);
  }

  async #mockClient() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return await this.#clientRequest();
  }

  async #clientRequest() {
    const { requestType, ...payload } = this.#requestParams;
    const path = this.#requestParams.path;
    payload.path = this.#mock ? path + ".json" : path;

    switch (requestType) {
      case "post":
        return await this.#client.post(payload);
      case "delete":
        return await this.#client.delete(payload);
      case "update":
        return await this.#client.patch(payload);
      default:
        return await this.#client.get(payload);
    }
  }

  async request(params: apiClientParams) {
    this.#requestParams = params;
    return this.#requestHandler();
  }
}

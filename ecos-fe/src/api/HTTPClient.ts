import { APPResponse, requestArgs } from "../typeDefs/api";

export default class HTTPClient {
  #url = "";
  #headers: RequestInit = {};
  #response: APPResponse = { data: {}, success: false, message: "" };
  #fetchURL = "";

  constructor(url: string) {
    this.#url = url;
    this.#headers = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
  }

  #sanitiseResponse(res: Response | null, data: unknown) {
    if (!res) {
      this.#response.success = false;
      this.#response.message = "Unexpected error occured!";
    } else {
      this.#response.success = res.status >= 200 && res.status < 300;
      this.#response.data = data;
    }
  }

  async #sendRequest() {
    try {
      const response = await fetch(this.#fetchURL, this.#headers);
      const data = await response.json();
      this.#sanitiseResponse(response, data);
    } catch (e) {
      this.#sanitiseResponse(null, null);
    }

    return this.#response;
  }

  async get(args: requestArgs) {
    this.#fetchURL = this.#url + args.path;
    return await this.#sendRequest();
  }

  async post(args: requestArgs) {
    this.#headers.method = "post";
    this.#fetchURL = this.#url + args.path;
    this.#headers.body = JSON.stringify(args.payload);

    return await this.#sendRequest();
  }

  async delete(args: requestArgs) {
    this.#fetchURL = this.#url + args.path;
    this.#headers.method = "delete";

    return await this.#sendRequest();
  }

  async patch(data: object) {
    this.#headers.method = "patch";
    this.#headers.body = JSON.stringify(data);

    return await this.#sendRequest();
  }
}

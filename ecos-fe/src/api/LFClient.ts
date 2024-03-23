/* eslint-disable @typescript-eslint/no-explicit-any */

import localforage from "localforage";
import { isArray } from "../global/helpers";
import APIClient from "./APIClient";
import { APPResponse } from "../typeDefs/api";

export class LFClient {
  static #config = {
    name: "ecos",
    version: 1.0,
    storeName: "ecos-db",
    description: "Storage for Ecos application",
  };
  static #storagePaths = ["extensions", "user", "userExtensions"];

  static async #initialLoad() {
    const mockAPIClient = new APIClient(true);
    const stored: Array<string> = [];

    for (const path of this.#storagePaths) {
      const response = await mockAPIClient.request({
        requestType: "get",
        path,
      });

      await LFClient.setAsync(path, response?.data);
      stored.push(path);
    }

    await LFClient.setAsync("tables", stored);
  }

  // Methods

  constructor() {
    throw new Error("Static class cannot be instantiated");
  }

  static async buildAsync() {
    let success = true;
    try {
      localforage.config(this.#config); // docs suggest to set config first before doing any kind of ops
      await this.#deepClean();
      await this.clean();
      await this.#initialLoad();
    } catch {
      success = false;
    }
    return success;
  }

  static async #deepClean() {
    const garbage = [
      "ecos",
      "mock-extensions",
      "ecos-db",
      "test",
      "mock-user",
      "localforage",
    ];
    let success = true;
    try {
      for (const name of garbage) {
        await localforage.dropInstance({
          name,
        });
      }
    } catch {
      success = false;
    }
    return success;
  }

  static async isActiveAsync() {
    let isActive = true;
    try {
      const res = await localforage.getItem("tables");
      if (!res) isActive = false;
    } catch {
      isActive = false;
    }
    return isActive;
  }

  static async clean() {
    let success = true;
    try {
      await localforage.clear();
      await localforage.dropInstance({ name: this.#config.name });
    } catch {
      success = false;
    }
    return success;
  }

  static async setAsync(path: string, value: unknown): Promise<APPResponse> {
    const paths = path.split(".");
    const end = paths[paths.length - 1];
    const response: APPResponse = {
      success: false,
      data: null,
      message: "",
    };

    if (path.length === 0) {
      response.message = "URL path cannot be empty";
      return response;
    }

    let { data }: any = await this.getAsync(paths[0]);

    data = paths.slice(1, -1).reduce((prev, key) => {
      const cPath = paths[key];
      let cObj = prev?.[cPath];

      if (!cObj) {
        cObj = parseInt(cPath) ? [] : {};
      }

      return cObj;
    }, data);

    if (!data) {
      data = value;
    } else if (isArray(data)) {
      if (parseInt(end)) {
        data[parseInt(end)] = value;
      } else {
        data.push({ [end]: value });
      }
    } else {
      data[end] = value;
    }

    try {
      response.success = (await localforage.setItem(paths[0], data))
        ? true
        : false;
    } catch {
      response.message = "Server couldn't complete update request";
    }

    return response;
  }

  static async getAsync(path: string): Promise<APPResponse> {
    const paths = path.split(".");
    const response: APPResponse = {
      success: false,
      data: null,
      message: "Resource not found",
    };
    try {
      let data = await localforage.getItem(paths[0]);

      if (data) {
        for (let i = 1; i < paths.length - 1; i++) {
          data = data[paths[i]];
          if (!data) {
            break;
          }
        }
        response.success = true;
        response.data = data;
        response.message = "";
      }
    } catch {
      response.message = "Server couldn't get requested resource";
    }

    return response;
  }
}

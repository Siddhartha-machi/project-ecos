/* eslint-disable @typescript-eslint/no-explicit-any */

import localforage from "localforage";
import { NullOrUndefined, isArray } from "../global/helpers";
import { APPResponse, LFCBuildConfig, LFCState } from "../typeDefs/api";

export class LFClient {
  private static config = {
    name: "ecos",
    version: 1.0,
    storeName: "ecos-db",
    description: "Storage for Ecos application",
  };

  private state: LFCState;
  private active = true;

  // Methods

  constructor(config: LFCState) {
    if (!config) {
      throw new Error(
        "Constructor can't be called directly, call build static method"
      );
    }
    this.active = true;
    this.state = config;
  }

  private async destructor() {
    await this.clean();
    this.active = false;
  }

  static async build(config: LFCBuildConfig) {
    localforage.config(LFClient.config); // docs suggest to set config first before doing any kind of ops
    const state: LFCState = {
      mock: false,
      currentPaths: ["user", "token"],
      ...config,
    };
    if (state.mock) {
      state.currentPaths.concat(["extensions", "user", "userExtensions"]);
    }
    const instance = new LFClient(state);
    const initial = await instance.#isInitial();
    if (initial) {
      await instance.clean();
      await localforage.setItem("config", { initial: true, mock: state.mock });
      await instance.#updateIndex("config");
    }
    return instance;
  }

  private async clean() {
    try {
      await localforage.clear();
      await localforage.dropInstance({ name: LFClient.config.name });
      await localforage.dropInstance({ name: "localforage" });
    } catch {
      /* empty */
    }
  }

  async #isInitial() {
    return NullOrUndefined(await localforage.getItem("config"));
  }

  private isInstanceActive() {
    if (!this.active) {
      throw new Error(
        "Object is destroyed, recreate a new object with build method"
      );
    }
  }

  async #updateIndex(index: string) {
    let res = await localforage.getItem("tables");
    let exists: string | undefined;
    if (res) {
      exists = (res as Array<string>).find((item) => item === index);
      if (exists) {
        return;
      }
    } else {
      res = [];
    }

    (res as Array<string>).push(index);
    await localforage.setItem("tables", res);
  }

  async findResource(rName: string) {
    const rList = await localforage.getItem("tables");
    let result = false;
    if (rList) {
      result = !NullOrUndefined(
        (rList as Array<string>).find((item) => item === rName)
      );
    }
    return result;
  }

  async setAsync(path: string, value: unknown): Promise<APPResponse> {
    this.isInstanceActive();
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
      response.success = !NullOrUndefined(
        await localforage.setItem(paths[0], data)
      );
      await this.#updateIndex(paths[0]);
    } catch {
      response.message = "Server couldn't complete update request";
    }

    return response;
  }

  async getAsync(path: string): Promise<APPResponse> {
    this.isInstanceActive();
    const paths = path.split(".");
    const response: APPResponse = {
      success: false,
      data: null,
      message: `Resource ${path} not found`,
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

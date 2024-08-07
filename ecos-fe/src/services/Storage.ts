import localforage from "localforage";

import { NullOrUndefined } from "../global/helpers";
import {
  storageMethod,
  DBState,
  storageParams,
  APPResponse,
} from "../typeDefs/api";
import { request } from "../global/constants";
import _ from "lodash";

const defaultStorageOptions = Object.freeze({
  name: "ecos",
  version: 1.0,
  size: 4980736,
  storeName: "ecos-db",
  description: "Ecos cache storage",
});

const dbIndex: string = Object.freeze("tables");

export default class Storage {
  private _store: DBState = {
    storeName: "",
    resource: undefined,
    wasInactive: false,
    tables: [],
  };

  private state: storageParams = {
    payload: undefined,
    bypass: false,
    method: "load",
    paths: [],
  };

  private response: APPResponse = {
    success: true,
    data: null,
    message: "LFClient : " + request.SUCCESS,
  };

  // setters
  private set method(val: storageMethod) {
    this.state.method = val;
    this.state.bypass = val === "save";
  }

  constructor(storeName: string = defaultStorageOptions.storeName) {
    this._store.storeName = storeName;
    localforage.config({ ...defaultStorageOptions, storeName });
  }

  // Methods
  private throwError(msg: string) {
    this.response.message = "LFClient : " + msg;
    this.response.success = false;
    this.response.data = null;
    throw new Error("LFClient : " + msg);
  }

  private async build() {
    await this.clean();
    localforage.createInstance({
      ...defaultStorageOptions,
      storeName: this._store.storeName,
    });
    await localforage.setItem(dbIndex, []);
    this._store.wasInactive = true;
  }

  private async clean() {
    try {
      await localforage.clear();
      await localforage.dropInstance({ name: defaultStorageOptions.name });
    } catch {
      throw new Error(request.REQUEST_FAILED);
    }
  }

  private async getOrSetDbConfig() {
    const active = await localforage.getItem(dbIndex);
    if (NullOrUndefined(active)) {
      await this.build();
    }
  }

  private async loadResource() {
    const pk = this.state.paths[0];
    if (!NullOrUndefined(pk) && pk.length) {
      await this.getOrSetDbConfig();
      if (!this._store.wasInactive) {
        this._store.resource = await localforage.getItem(pk);
      }
    } else {
      this.throwError(request.INVALID_DATA);
    }
  }

  private async saveResource() {
    if (this.state.method !== "load") {
      try {
        this._store.resource = await localforage.setItem(
          this.state.paths[0],
          this._store.resource
        );
      } catch {
        this.throwError(request.REQUEST_FAILED);
      }
    }
  }

  private selectAction() {
    switch (this.state.method) {
      case "load":
        this._getVal();
        break;
      case "save":
      case "modify":
        this._setVal();
        break;
      case "remove":
        this._removeVal();
        break;
      default:
        this.throwError(request.INVALID_DATA);
    }
  }

  async request(type: storageMethod, path: string = "", data: unknown = null) {
    try {
      this.method = type;
      this.state.payload = data;
      // clean the path and split into list of keys
      path = path.replace(/[&/\\#,+()$~%'":;*?^@<>{}]/g, "");
      this.state.paths = path.split(".");

      await this.loadResource();
      this.selectAction();
      await this.saveResource();
    } catch (e) {
      console.error((e as Error).message);
    }
    return this.response;
  }

  private _getVal() {
    const result = _.get(this._store.resource, _.slice(this.state.paths), null);
    if (NullOrUndefined(result)) this.throwError(request.NOT_FOUND);
    this.response.data = result;
  }

  private _setVal() {
    try {
      this._store.resource = _.set(
        this._store.resource as object,
        _.slice(this.state.paths, 1),
        this.state.payload
      );
    } catch {
      this.throwError(request.REQUEST_FAILED);
    }
  }

  private _removeVal() {
    const result = _.unset(
      this._store.resource as object,
      _.slice(this.state.paths, 1)
    );
    if (!result) this.throwError(request.NOT_FOUND);
  }
}

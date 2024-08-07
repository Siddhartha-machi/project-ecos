import { Fun, errFun, loadFun } from "./helpers";

export type HTTPMethod = "get" | "post" | "update" | "delete";

export type storageMethod = "load" | "save" | "modify" | "remove";

export type transactionType = HTTPMethod | storageMethod;

export interface requestArgs {
  path: string;
  payload?: oType;
}

export interface apiClientParams extends requestArgs {
  requestType: requestType;
}

export interface APPResponse {
  data: unknown;
  success: boolean;
  message: string;
}

export interface oType {
  [key: string]:
    | string
    | boolean
    | number
    | Array<string | boolean | number | oType>
    | oType;
}

// Transaction class type definitions

export type transactionType = HTTPMethod | storageMethod;
export interface requestParametersType {
  type: transactionType;
  url: string;
  payload?: oType;
  queryParams?: oType;
  noCacheUpdate?: boolean;
}

export interface transactionState {
  mode: transactionMode;
}
export interface transactionActions {
  onSuccess?: Fun;
  onError?: errFun;
  loading: loadFun;
}

export interface multipleTransactionsType extends transactionActions {
  path: string;
  type?: transactionType;
}

export interface transactionConfig {
  path: string;
  type: transactionType;
  isCacheRequest: boolean;
  isCacheFail: boolean;
  actions: Array<string>;
  payload: unknown;
  loadLabel: string;
  mock?: boolean;
}

// Local forage client type definitions
export interface DBState {
  storeName: string;
  tables: Array<string>;
  wasInactive: boolean;
  resource: unknown;
}

export interface storageParams {
  bypass: boolean;
  method: storageMethod;
  paths: Array<string>;
  payload: unknown;
}

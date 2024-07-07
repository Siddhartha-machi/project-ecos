import { Fun, errFun, loadFun } from "./helpers";

export type requestType = "get" | "post" | "update" | "delete";

export type storageType = "load" | "save" | "modify" | "remove";

export type compoundRequestType<R extends requestType, S extends storageType> =
  | `${R}&${S}`
  | `${S}|${R}`;

export type r =
  | "get&save"
  | "post&save"
  | "update&modify"
  | "delete&remove"
  | "load|get"
  | "remove|delete";

export type transactionType =
  | requestType
  | storageType
  | compoundRequestType<requestType, storageType>;

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
  memoPath?: string;
  mock?: boolean;
  memorize?: boolean;
}

export interface LFCState extends transactionConfig {
  currentPaths: Array<string>;
}
export interface LFCBuildConfig extends transactionConfig {}

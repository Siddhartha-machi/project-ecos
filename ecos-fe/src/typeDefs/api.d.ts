import { Fun, errFun, loadFun } from "./helpers";

export interface requestArgs {
  path: string;
  payload?: oType;
}

export interface apiClientParams extends requestArgs {
  requestType: "get" | "post" | "update" | "delete";
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

export interface transactionType {
  onSuccess?: Fun;
  onError?: errFun;
  loading: loadFun;
}

export interface multipleTransactionsType extends transactionType {
  path: string;
}

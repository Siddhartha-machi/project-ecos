import { transactionMode } from "../global/constants";
import { requestParametersType, transactionState } from "../typeDefs/api";

export default class Transaction {
  title = "Transaction : ";
  private _transactions: { [key: string]: requestParametersType } = {};

  private config = {
    mock: false,
    cacheTable: "",
  };

  private state: transactionState = {
    mode: transactionMode.EXTERNAL_RESOURCE_REQ,
  };

  // request parameters setters
  addTransaction(params: requestParametersType) {
    const key = params.type + "-" + params.url;
    if (this._transactions[key]) {
      console.warn(this.title + "Duplicate transaction found");
    } else {
      this._transactions[key] = { ...params };
    }
  }

  set cacheTable(name: string) {
    this.config.cacheTable = name;
  }
  // set url(_url: string) {
  //   this.requestParameters.url = _url;
  // }
  // set payload(_pay: oType) {
  //   this.requestParameters.payload = _pay;
  // }
  // set loadLabel(_label: string) {
  //   this.requestParameters.loadLabel = _label;
  // }
  // set queryParams(_params: oType) {
  //   this.requestParameters.queryParams = _params;
  // }

  // Transaction Handlers
  private makeTransaction() {}

  async excute() {}
}

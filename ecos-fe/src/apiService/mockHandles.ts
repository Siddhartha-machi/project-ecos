import { multipleTransactionsType } from "../typeDefs/api";
import { Fun } from "../typeDefs/helpers";
import Transaction from "./TransactionClass";

export const initialLoad = async (args: multipleTransactionsType[]) => {
  const request = new Transaction();
  request.transactionType = "load";
  for (let index = 0; index < args.length; index++) {
    request.path = args[index].path;
    request.loading = args[index].loading;
    request.onSuccess = args[index].onSuccess as Fun;
    await request.execute(index !== args.length - 1);
  }
};

// state loaders
export const loadMockExtensions = async (args: multipleTransactionsType[]) => {
  const request = new Transaction();
  request.mock = true;
  request.transactionType = "load|get";
  for (let index = 0; index < args.length; index++) {
    request.addParameter("loadLabel", args[index].path);
    request.path = args[index].path;
    request.loading = args[index].loading;
    request.onSuccess = args[index].onSuccess as Fun;
    await request.execute(index !== args.length - 1);
  }
};

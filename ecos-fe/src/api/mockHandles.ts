import { multipleTransactionsType, transactionType } from "../typeDefs/api";
import { Fun, errFun } from "../typeDefs/helpers";
import Transaction from "./TransactionClass";

export const loadMockData = async (args: transactionType) => {
  const request = new Transaction();
  request.mock = true;
  request.path = "user";
  request.onSuccess = args.onSuccess as Fun;
  request.loading = args.loading;
  await request.execute();
};

// state loaders
export const loadMockExtensions = async (args: multipleTransactionsType[]) => {
  const request = new Transaction();
  request.mock = true;

  for (let index = 0; index < args.length; index++) {
    request.path = args[index].path;
    request.loading = args[index].loading;
    request.onError = args[index].onError as errFun;
    request.onSuccess = args[index].onSuccess as Fun;
    await request.execute(index !== args.length - 1);
  }
};

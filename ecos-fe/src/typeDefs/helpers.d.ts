import { oType } from "./api";

export type stylesFuncProps = {
  check?: boolean;
  value?: string | number;
};

export type strFormatArgsType = {
  str: string;
  replace: string;
  replacement: string;
};

export type loadFunArgs = {
  loadVal: boolean;
  label: string;
};

export type argFun = (args: oType) => void;
export type optionalArgFun = (args?: oType) => void;
export type voidFun = () => void;

export type errFun = (m: string) => void;
export type loadFun = (args: loadFunArgs) => void;

export type Fun = argFun | optionalArgFun | voidFun;

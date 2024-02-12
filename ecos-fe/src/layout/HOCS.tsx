import * as React from "react";
import { Suspense } from "react";

import { ELHOCProps, errorFallbackProps } from "../typeDefs/hoc";
import GlobalLoader from "../atoms/GlobalLoader";
import ErrorContainer from "./ErrorContainer";

export const AppErrorFallback = (props: errorFallbackProps) => {
  const { error, overrideErrorMessage, genericError } = props;
  const message = React.useMemo(
    () =>
      genericError
        ? "Unknown error occured! please contact dev team"
        : error?.message,
    [genericError, error?.message]
  );
  return <div style={{ color: "#fff" }}>{overrideErrorMessage || message}</div>;
};

export const ELHOC = (props: ELHOCProps) => {
  const { loadingLabel, children, genericError, overrideErrorMessage } = props;
  return (
    <ErrorContainer
      genericError={genericError}
      overrideErrorMessage={overrideErrorMessage}
    >
      <Suspense fallback={<GlobalLoader loadLabel={loadingLabel} />}>
        {children}
      </Suspense>
    </ErrorContainer>
  );
};

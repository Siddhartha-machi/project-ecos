import * as React from "react";

import { AppErrorFallback } from "./HOCS";
import { errorContainerStateType, errorOverrideProps } from "../typeDefs/hoc";

interface errorContainerProps extends errorOverrideProps {
  children: React.ReactNode;
}

class ErrorContainer extends React.Component<
  errorContainerProps,
  errorContainerStateType
> {
  constructor(props: errorContainerProps) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log the error to an error reporting service
    console.log("ErrorBoundary caught an error: ", error, errorInfo);
    this.setState({ error, errorInfo });
  }

  render() {
    const { state, props } = this;
    if (state.error) {
      // Render any custom fallback UI
      return (
        <AppErrorFallback
          {...state}
          overrideErrorMessage={props.overrideErrorMessage}
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorContainer;

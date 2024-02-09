import { SxProps } from "@mui/system";

export interface errorInterface {
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

export interface errorOverrideProps {
  overrideErrorMessage?: string;
  genericError?: boolean;
}

export interface errorFallbackProps
  extends errorInterface,
    errorOverrideProps {}

export interface errorContainerStateType extends errorInterface {}

export interface ELHOCProps extends errorOverrideProps {
  loadingLabel: string;
  children: React.ReactNode;
  errorfallbackStyles?: SxProps;
}

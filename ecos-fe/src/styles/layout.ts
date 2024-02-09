import { createStyles } from "../global/helpers";

export const layout = createStyles({});

export const gLoader = createStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    gap: 1,
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
  loadLabel: {
    fontSize: "14px",
    fontWeight: "bold",
  },
});

export const pageNotFound = createStyles({
  container: {
    display: "flex",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
});

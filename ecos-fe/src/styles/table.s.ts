import { APP_CONSTATNTS } from "../global/constants";
import { createStyles } from "../global/helpers";
import theme from "../global/theme";
import { stylesFuncProps } from "../typeDefs/helpers";

export const userStyles = createStyles({
  cellWrapper: {
    display: "flex",
    py: 2,
    alignItems: "center",
    justifyContent: "center",
    gap: 1,
    fontWeight: "bold",
  },
  headerCell: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 1,
    fontWeight: "bold",
  },
  userActive: ({ check }: stylesFuncProps) => ({
    bgcolor: check ? "success.light" : "error.light",
    fontWeight: "bold",
    height: "8px",
    m: "auto",
    borderRadius: "3px",
  }),
  role: ({ value }: stylesFuncProps) => ({
    fontSize: "13px",
    fontWeight: "bold",
    color: value as string,
  }),
});

export const tableStyles = createStyles({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    // overflowY: "scroll",
  },

  // Table styles
  tableWrapper: {
    display: "flex",
    flexDirection: "column",
    // flexGrow: 1,
    // position: "relative",
    // height: "100%",
    overflowY: "scroll",
    // mb: 2,

    // mt: 0.8,
  },
  tableContainer: {
    height: "100%",
    // bgcolor: theme.primaryBgc,
    // p: 1,
    // overflowY: "scroll",
    // height: "calc(100% - 0px)",
    bgcolor: "transparent",
    color: "#fff",
    table: {
      position: "relative",
      borderCollapse: "separate",
      borderSpacing: "0px 10px",
      ".table td, .table th, .table tr, .table thead, .table tbody ": {
        border: "none",
        position: "relative",
      },
      ".table thead th": {
        border: "none",
        pt: 0,
        pb: 0,
      },
      // tbody tr::after {
      //   content: '';
      //   width: 100%;
      //   position: absolute;
      //   left: 0;
      //   right: 0;
      //   background-color: #fff;
      //   height: 48px;
      //   z-index: 0;
      //   border-radius: 8px;
      // }
      tbody: {
        position: "relative",
      },
      "tbody tr": {
        position: "relative",
        borderRadius: theme.borderRadius,
        mb: "20px",
      },
      "tbody tr::after": {
        content: "''",
        position: "absolute",
        right: 0,
        left: 0,
        width: "100%",
        height: "48px",
        bgcolor: APP_CONSTATNTS.backGround,
        borderRadius: theme.borderRadius,
        zIndex: -1,
      },
      "tbody td": {
        zIndex: 1000,
      },
    },
  },
  // Book image styles
  cellWrapper: {
    height: "120px",
    display: "flex",
    // py: 1.2,
    alignItems: "center",
    justifyContent: "center",
  },
  bookImage: {
    maxWidth: "120px",
    borderRadius: theme.borderRadius,
  },
  bookTitle: {
    fontWeight: 700,
    letterSpacing: 1,
    fontSize: "16px",
    maxWidth: "120px",
  },
  bookAuthorsWrapper: {
    display: "flex",
    flexDirection: "column",
    maxHeight: "120px",
    gap: 1.2,
    overflow: "scroll",
  },
  bookAuthorChip: {
    width: "120px",
    color: theme.white10,
    borderRadius: theme.borderRadius,
  },
  bookDescription: ({ check }: stylesFuncProps) => ({
    color: theme.white9,
    fontSize: "14px",
    display: "span",
    ...(check
      ? {
          height: "90px",
          overflow: "scroll",
        }
      : {
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: "2",
          WebkitBoxOrient: "vertical",
        }),
  }),
  showMore: {
    fontSize: "10px",
    display: "inline-flex",
    textTransform: "none",
    ml: "auto",
    p: 0,
  },
  descriptionWrapper: {
    flexDirection: "column",
    display: "inline-flex",
  },
  bookActionsWrapper: {
    flexDirection: "column",
    gap: 1,
    mx: 1,
  },
  actionButton: ({ value, check }: stylesFuncProps) => ({
    textTransform: "none",
    fontWeight: "bold",
    fontSize: "12px",
    textWrap: "nowrap",
    color: value || "primary.main",
    border: "1px solid transparent",
    ...(check && {
      bgcolor: value || "primary.main",
      color: "#fff",
    }),
    "&:Hover": {
      bgcolor: value || "primary.main",
      color: "#fff",
      border: "1px solid #fff",
    },
  }),
  bookCheckout: {
    flexDirection: "column",
    gap: 1,
  },
  bookCheckoutText: {
    fontSize: "13px",
  },
  bookCommentWrapper: {
    flexDirection: "column",
    gap: 1,
  },
  bookComment: {
    fontSize: "14px",
    fontStyle: "italic",
  },
  commentBy: {
    fontSize: "10px",
    color: theme.white3,
  },
});

import { createStyles } from "../global/helpers";
import theme, { customTheme } from "../global/theme";
import { stylesFuncProps } from "../typeDefs/helpers";

const PADDING = 1.5;
const BORDER_RADIUS = { xs: 0, sm: `${customTheme.shape.borderRadius}px` };

export const extensions = createStyles({
  container: {
    overflow: "scroll",
    height: "100%",
    borderRadius: BORDER_RADIUS,
  },
  content: {
    display: "flex",
    overflowY: "scroll",
  },
  item: ({ check }: stylesFuncProps) => ({
    display: "flex",
    overflow: "hidden",
    gap: 1,
    color: check ? theme.inactive : theme.white10,
    p: 1.5,
    zIndex: 0,
    transition: "0.3s ease",
    "&:Hover": {
      bgcolor: check ? "none" : theme.primaryDark,
    },
  }),
  img: ({ check }: stylesFuncProps) => ({
    borderRadius: BORDER_RADIUS,
    width: "50px",
    height: "50px",
    opacity: check ? 0.3 : 1,
  }),
  fallBackIcon: {
    fontSize: "30px",
    p: "9px",
    borderRadius: BORDER_RADIUS,
    border: "1px solid",
    borderColor: "inherit",
  },
  rightTop: {
    display: "flex",
    justifyContent: "space-between",
  },
  right: {
    display: "flex",
    flexDirection: "column",
    gap: 1.5,
  },
  title: {
    fontSize: "16px",
    fontWeight: "bold",
    letterSpacing: 1,
  },
  description: {
    fontSize: "12px",
    color: "inherit",
  },
  actionsContainer: {
    display: "flex",
    alignItems: "center",
    gap: 1,
  },
  actionButton: {
    color: theme.white10,
    p: 0,
    "&:Hover": {
      bgcolor: "transparent",
    },
  },
  seeMore: {
    fontSize: "10px",
  },
  gridContainer: {
    direction: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    overflow: "scroll",
  },
  skGridItem: {
    display: "flex",
    p: 1.5,
    borderRadius: BORDER_RADIUS,
    border: `1px solid ${theme.white1}`,
  },
  skGridItemRight: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    gap: 1,
    pl: 1,
  },
});

export const extensionDetail = createStyles({
  //--------- Common styles ----------//
  container: {
    display: "flex",
    flexDirection: "column",
    mt: theme.spacing,
    overflowY: "scroll",
    gap: theme.spacing,
    borderRadius: BORDER_RADIUS,
    p: theme.spacing,
    bgcolor: theme.black1,
  },
  sectionTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    color: theme.white8,
    p: 0,
    border: 0,
  },
  thumb: {
    borderRadius: BORDER_RADIUS,
    width: "120px",
    height: "120px",
  },
  //--------- First section ----------//
  header: {
    display: "flex",
    gap: theme.spacing,
  },
  headerInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    fontSize: "20px",
    fontWeight: "bolder",
    color: theme.white10,
    letterSpacing: "1px",
  },
  caption: {
    fontSize: "13px",
    color: theme.white5,
    mb: "15px",
  },
  actionContainer: {
    display: "flex",
    gap: theme.spacing,
  },
  actionIcon: {
    fontSize: "32px",
  },
  //--------- Meta data section ----------//
  metaDataContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    py: PADDING,
    // borderTop: "1.2px solid",
    // borderBottom: "1.2px solid",
    borderColor: theme.white2,
  },
  metaItem: {
    display: "flex",
    flexDirection: "column",
    gap: 0.5,
    textAlign: "center",
  },
  metaItemTitle: {
    fontSize: "12px",
    fontWeight: "bold",
    color: theme.white3,
  },
  metaItemValue: {
    fontSize: "14px",
    fontWeight: "bold",
    color: theme.white5,
  },
  //--------- Features section ----------//
  featContainer: {
    display: "flex",
    flexDirection: "column",
    // borderBottom: "1.2px solid",
    borderColor: theme.white2,
    pb: theme.spacing,
    gap: 0.8,
  },
  featList: {
    display: "flex",
    flexDirection: "column",
    gap: 1,
  },
  featItem: {
    display: "flex",
    alignItems: "flex-start",
    pl: 2,
    gap: 1,
    color: theme.white6,
    fontSize: "12px",
  },
  bulletIcon: {
    fontSize: "inherit",
    pt: 0.3,
  },
  featItemText: {
    fontSize: "inherit",
  },
  //--------- Preview section ----------//
  previewContainer: {
    display: "flex",
    flexDirection: "column",
  },
  img: {
    borderRadius: BORDER_RADIUS,
    height: "400px",
  },
  imgsContainer: {
    display: "flex",
    gap: theme.spacing,
    overflowX: "scroll",
  },
  //--------- Ratings section ----------//
  reviewsReviewsContainer: {
    display: "flex",
    justifyContent: "space-between",

    pt: theme.spacing,
    borderColor: theme.white2,
    color: theme.white6,
  },
  ratingTextContainer: {
    display: "flex",
    alignItems: "baseline",
    gap: 1,
    color: theme.white4,
  },
  ratingText: {
    fontSize: "50px",
    fontWeight: "bold",
  },
  ratingStaticText: {
    fontSize: "13px",
    fontWeight: "bold",
  },
  ratingBarContainer: {
    display: "flex",
    flexGrow: 0.6,
    alignItems: "center",
    gap: 1,
  },
  ratingIconContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 0.3,
    alignItems: "flex-end",
    color: theme.secondary,
  },
  ratingBarsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 1.8,
    flexGrow: 2,
  },
  ratingBar: {
    display: "flex",
    height: "3px",
    position: "relative",
    borderRadius: BORDER_RADIUS,
    bgcolor: theme.white2,
  },
  ratingBarValue: {
    position: "absolute",
    inset: 0,
    bgcolor: theme.white6,
    borderRadius: BORDER_RADIUS,
  },
  //--------- Reviews section ----------//
  reviewsContainer: {
    display: "flex",
    flex: 1,
    gap: 2,
    flexDirection: { xs: "column-reverse", sm: "row" },
  },
  userReviewsContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    width: { xs: "100%", sm: "50%" },
    gap: 1.5,
    position: "relative",
    boxSizing: "border-box",
  },
  reviewFormContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    width: "100%",
    gap: 2.5,
  },
  userReviewsList: {
    display: "flex",
    flex: 1,
    overflowX: "scroll",
    gap: theme.spacing,
  },
  commentItem: {
    display: "flex",
    flexDirection: "column",
    gap: 1,
    height: { xs: "100%", sm: "323px" },
    overflowY: "scroll",
    minWidth: { xs: "100%", sm: "calc(100% - 8px)" },
    p: theme.spacing,
    boxSizing: "border-box",
  },
  commentTitle: {
    fontSize: "18px",
    color: "text.primary",
  },
  commentTopItems: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "rgba(255, 255, 255, 0.4)",
  },
});

// import { MRT_ColumnDef } from "material-react-table";
import BookmarkAddedRoundedIcon from "@mui/icons-material/BookmarkAddedRounded";
import BookmarkAddRoundedIcon from "@mui/icons-material/BookmarkAddRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import AutoStoriesRoundedIcon from "@mui/icons-material/AutoStoriesRounded";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import { rowActionType } from "../typeDefs/table";
// import ReplayRoundedIcon from "@mui/icons-material/ReplayRounded";
// import SettingsBackupRestoreRoundedIcon from "@mui/icons-material/SettingsBackupRestoreRounded";
// import LibraryAddRoundedIcon from "@mui/icons-material/LibraryAddRounded";
// import LibraryAddCheckRoundedIcon from "@mui/icons-material/LibraryAddCheckRounded";
// import { APP_CONSTATNTS } from "../global/constants";

export const userActions: rowActionType[] = [
  {
    label: "Like",
    activeLabel: "Liked",
    Icon: FavoriteBorderRoundedIcon,
    ActiveIcon: FavoriteRoundedIcon,
    color: "#e0488f",
    key: "liked",
    type: "DD",
  },
  {
    label: "Add to read list",
    activeLabel: "In reading list",
    Icon: BookmarkAddRoundedIcon,
    ActiveIcon: BookmarkAddedRoundedIcon,
    key: "in_reading_list",
    type: "DD",
  },
  {
    label: "Read now",
    activeLabel: "Reading now",
    Icon: AutoStoriesOutlinedIcon,
    ActiveIcon: AutoStoriesRoundedIcon,
    color: "#43c437",
    key: "reading",
    type: "AD",
  },
];
export const adminActions: rowActionType[] = [
  {
    label: "Edit",
    activeLabel: "Save",
    Icon: EditRoundedIcon,
    ActiveIcon: SaveRoundedIcon,
    key: "edit",
    type: "CD",
  },
  {
    label: "Delete",
    activeLabel: "Deleted",
    Icon: DeleteOutlinedIcon,
    ActiveIcon: DeleteRoundedIcon,
    color: "#e64e53",
    key: "delete",
    type: "AD",
  },
  // {
  //   label: "Revoke all",
  //   activeLabel: "Restore all",
  //   Icon: ReplayRoundedIcon,
  //   ActiveIcon: SettingsBackupRestoreRoundedIcon,
  //   color: "#ed9c32",
  //   key: "revoke",
  // },
];
// const clubAdminActions: bookActionType[] = [
//   {
//     label: "Add to club collection",
//     activeLabel: "In club collection",
//     Icon: LibraryAddRoundedIcon,
//     ActiveIcon: LibraryAddCheckRoundedIcon,
//     key: "in_club_collection",
//     type: "DD",
//   },
// ];

// const booksTableConfig: MRT_ColumnDef<Book>[] = [
//   {
//     accessorKey: "image",
//     header: "Book Cover",
//     maxSize: APP_CONSTATNTS.cellWidth,
//     Cell: (props) => <BookImage {...props} />,
//   },
//   {
//     accessorKey: "title",
//     header: "Book Title",
//     maxSize: APP_CONSTATNTS.cellWidth,
//     Cell: (props) => <BookTitle {...props} />,
//   },
//   {
//     accessorKey: "description",
//     header: "Description",
//     maxSize: APP_CONSTATNTS.cellWidth + 120,
//     Cell: (props) => <BookDescription {...props} />,
//   },
//   {
//     accessorKey: "author",
//     header: "Author(s)",
//     maxSize: APP_CONSTATNTS.cellWidth,
//     Cell: (props) => <BookAuthors {...props} />,
//   },
//   {
//     accessorKey: "checkedCount",
//     header: "Checked out by",
//     maxSize: 25,
//     Cell: (props) => <BookCheckout {...props} />,
//   },

//   {
//     accessorKey: "comment",
//     header: "Comment",
//     maxSize: APP_CONSTATNTS.cellWidth + 120,
//     Cell: (props) => <BookComment {...props} />,
//   },
//   {
//     accessorKey: "user",
//     header: "Actions",
//     maxSize: APP_CONSTATNTS.cellWidth,
//     Cell: (props) => <BookActions tableProps={props} actions={userActions} />,
//   },
//   {
//     accessorKey: "admin",
//     header: "Admin actions",
//     maxSize: APP_CONSTATNTS.cellWidth,
//     Cell: (props) => <BookActions tableProps={props} actions={adminActions} />,
//   },
//   {
//     accessorKey: "club_admin",
//     header: "Club admin actions",
//     maxSize: APP_CONSTATNTS.cellWidth,
//     Cell: (props) => (
//       <BookActions tableProps={props} actions={clubAdminActions} />
//     ),
//   },
// ];

// export default booksTableConfig;

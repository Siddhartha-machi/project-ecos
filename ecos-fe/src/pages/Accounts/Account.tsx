import React from "react";

import { Avatar, Badge, Box, IconButton, Typography } from "@mui/material";
import PhotoCameraRoundedIcon from "@mui/icons-material/PhotoCameraRounded";
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import MaleRoundedIcon from "@mui/icons-material/MaleRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";

import blankProfile from "../../Assets/img5.jpeg";
import { ROLES } from "../../global/constants";
import { useAppSelector } from "../../redux/hooks";
import { EditableTypography, LocalHeader, RBox } from "../../atoms/AppAtoms";
import { account, notifs, profile } from "../../styles/account.s";

const Account = () => {
  const user = useAppSelector((store) => store.user.currentUser);
  const [enableEditing, setenableEditing] = React.useState<boolean>(false);

  const [notifications, setNotifications] = React.useState([]);

  const toggleEditing = () => {
    setenableEditing((prev) => !prev);
  };

  return (
    <Box sx={account.container}>
      <LocalHeader
        pageTitle={"Account"}
        pageCaption={"View and modify your personal info and more"}
      />
      <Box sx={account.content}>
        <RBox breakPoint="xs" sx={profile.container}>
          <Box sx={profile.header}>
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              badgeContent={
                <IconButton sx={profile.changeImgIcon}>
                  <PhotoCameraRoundedIcon fontSize="small" />
                </IconButton>
              }
            >
              <Avatar
                src={blankProfile}
                sx={{ width: 100, height: 100, position: "relative" }}
              />
            </Badge>
            <Box sx={profile.details}>
              <Typography sx={profile.fullName}>
                {user.first_name} {user.last_name}
              </Typography>
              {user.role !== ROLES.user && (
                <Typography sx={profile.userRole}>Role: {user.role}</Typography>
              )}
              <Typography sx={profile.joinDate}>
                Joined on {user.joined_date}
              </Typography>
            </Box>
          </Box>
          <Box sx={profile.detailsFields}>
            <Box sx={account.accountContainer}>
              <Box sx={profile.detailsHeader}>
                <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
                  Account Details
                </Typography>

                <IconButton onClick={toggleEditing} sx={profile.editIconButton}>
                  {enableEditing ? (
                    <SaveRoundedIcon color="inherit" />
                  ) : (
                    <EditNoteRoundedIcon color="inherit" />
                  )}
                </IconButton>
              </Box>

              <EditableTypography
                value={"Siddhartha Reddy"}
                valueType={"text"}
                action={(newValue: string) => console.log(newValue)}
                label={"First Name"}
                enableEditing={enableEditing}
              />

              <EditableTypography
                value={"Machi"}
                valueType={"text"}
                action={(newValue: string) => console.log(newValue)}
                label={"Last Name"}
                enableEditing={enableEditing}
              />

              <EditableTypography
                value={"bookeryadmin@bookery.com"}
                valueType={"email"}
                action={(newValue: string) => console.log(newValue)}
                label={"Email"}
                enableEditing={enableEditing}
                Icon={EmailRoundedIcon}
              />

              <EditableTypography
                value={"Male"}
                valueType={"text"}
                action={(newValue: string) => console.log(newValue)}
                label={"Gender"}
                enableEditing={enableEditing}
                Icon={MaleRoundedIcon}
              />
            </Box>
            <Box sx={account.accountContainer}>
              <Box sx={profile.detailsHeader}>
                <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
                  Change Password
                </Typography>

                <IconButton onClick={toggleEditing} sx={profile.editIconButton}>
                  {enableEditing ? (
                    <SaveRoundedIcon color="inherit" />
                  ) : (
                    <EditNoteRoundedIcon color="inherit" />
                  )}
                </IconButton>
              </Box>
              <EditableTypography
                value={"* * * * * * * *"}
                valueType={"text"}
                action={(newValue: string) => console.log(newValue)}
                label={"Current password"}
                enableEditing={enableEditing}
              />
              {enableEditing && (
                <EditableTypography
                  value={""}
                  valueType={"text"}
                  action={(newValue: string) => console.log(newValue)}
                  label={"New password"}
                  enableEditing={true}
                />
              )}
              {enableEditing && (
                <EditableTypography
                  value={""}
                  valueType={"text"}
                  action={(newValue: string) => console.log(newValue)}
                  label={"Confirm new password"}
                  enableEditing={true}
                />
              )}
            </Box>
          </Box>
        </RBox>
        <RBox breakPoint="sm" sx={account.inContainer}>
          <Typography sx={account.inHeader}>Notifications</Typography>
          {notifications.length > 0 ? (
            <Box></Box>
          ) : (
            <Box sx={notifs.emptyNotifs}>
              <NotificationsNoneRoundedIcon />
              <Typography sx={notifs.messageText}>
                You're all caught up! you've no unread notifications
              </Typography>
            </Box>
          )}
        </RBox>
        <RBox breakPoint="md" sx={account.inContainer}>
          <Typography sx={account.inHeader}>Notifications</Typography>
          <Box sx={notifs.emptyNotifs}>
            <NotificationsNoneRoundedIcon />
            <Typography sx={notifs.messageText}>
              You're all caught up! you've no unread notifications
            </Typography>
          </Box>
        </RBox>
        <RBox breakPoint="lg" sx={account.inContainer}>
          <Typography sx={account.inHeader}>Notifications</Typography>
          <Box sx={notifs.emptyNotifs}>
            <NotificationsNoneRoundedIcon />
            <Typography sx={notifs.messageText}>
              You're all caught up! you've no unread notifications
            </Typography>
          </Box>
        </RBox>
        <RBox breakPoint="lg" sx={account.inContainer}>
          <Typography sx={account.inHeader}>Notifications</Typography>
          <Box sx={notifs.emptyNotifs}>
            <NotificationsNoneRoundedIcon />
            <Typography sx={notifs.messageText}>
              You're all caught up! you've no unread notifications
            </Typography>
          </Box>
        </RBox>
      </Box>
    </Box>
  );
};

export default Account;

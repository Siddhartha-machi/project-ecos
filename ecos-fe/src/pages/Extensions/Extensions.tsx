import * as React from "react";

import { Box, Button, Divider, Grid, Paper, Stack, Typography } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import FilterAltRoundedIcon from "@mui/icons-material/FilterAltRounded";
import ReorderRoundedIcon from "@mui/icons-material/ReorderRounded";
import ExtensionRoundedIcon from "@mui/icons-material/ExtensionRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ExtensionOffRoundedIcon from "@mui/icons-material/ExtensionOffRounded";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { isEmpty } from "lodash";

import { AppChips, AppSkeletons, ExtensionActions, LocalHeader, RatingStatic, TTIconButton, TextDivider } from "../../atoms/AppAtoms";
import { extensionDetail, extensions } from "../../styles/extensions.s";
import { extensionType } from "../../typeDefs/extension";
// import { ExtensionAPI } from "../../redux/services/APIService"; --- API fix
import img from "../../assets/c14.jpg";
import APIMock from "../../../public/mocks/api.json";
import GenericForm from "../../atoms/GenericForm";
import { inputConfigType } from "../../typeDefs/formAtoms";

// const dataFetcher = ExtensionAPI.useGetExtensionsQuery; --- API fix

const reviewFormConfig: inputConfigType[] = [
  {
    type: "text",
    label: "Title",
    value: "",
    placeholder: "Your review in a single sentence",
    size: "small",
    inputProps: { style: { fontWeight: "normal" } },
  },
  {
    type: "text",
    label: "Description",
    value: "",
    placeholder: "Add some details as to why you like or dislike the extension",
    multiline: true,
    minRows: 4,
    maxRows: 4,
    inputProps: { style: { fontWeight: "normal" } },
  },
];

const Extensions = () => {
  const [detail, setDetail] = React.useState("");
  const options = React.useMemo(
    () => [
      {
        label: "Filter",
        Icon: FilterAltRoundedIcon,
      },
      {
        label: "Your extensions",
        Icon: ReorderRoundedIcon,
      },
      {
        label: "Add new extension",
        Icon: AddRoundedIcon,
      },
    ],
    []
  );
  const navigate = useNavigate();
  const params = useParams();
  const admin = true;
  const { isLoading, isError, data } = { isLoading: false, isError: false, data: APIMock.extensions };

  // private components
  const _Skeleton = React.useMemo(() => {
    return Array.from(Array(5)).map((_, i) => (
      <Grid item xs={12} sm={6} md={4} lg={3} key={`data-skel-${i}`}>
        <Box sx={extensions.skGridItem}>
          <AppSkeletons type={"avatar"} />
          <Box sx={extensions.skGridItemRight}>
            <AppSkeletons type={"title"} />
            <AppSkeletons type={"text"} />
            <Box sx={{ display: "flex", gap: 1 }}>
              <AppSkeletons type={"chip"} />
              <AppSkeletons type={"chip"} />
              <AppSkeletons type={"chip"} />
            </Box>
            <AppSkeletons type={"textButton"} />
          </Box>
        </Box>
      </Grid>
    ));
  }, []);

  const navigateToDetail = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    let title = "";
    if (e.target instanceof HTMLButtonElement) {
      title = e.target.title;
    } else if (e.target instanceof SVGElement) {
      title = e.target.parentElement?.parentElement?.title || "";
    }
    if (title) {
      navigate("/extensions/" + title);
    }
  };
  // --- API fix
  // const status = React.useMemo(() => {
  //   let _status;
  //   if (error && 'data' in error) {
  //     _status = statusCodeToMessage(error.status, "extension");
  //   }
  //   return _status;
  // }, [error]);

  React.useEffect(() => {
    if (params) {
      setDetail(params["string"] || "");
    }
  }, [params]);

  if (!isEmpty(detail)) {
    const data = APIMock.extensionDetail;
    return (
      <Paper sx={extensionDetail.container}>
        <Box sx={extensionDetail.header}>
          <Box component={"img"} src={img} sx={extensionDetail.thumb} />
          <Box sx={extensionDetail.headerInfo}>
            <Typography sx={extensionDetail.title}>
              {data.title} - {detail}
            </Typography>
            <Typography sx={extensionDetail.caption}>{data.caption}</Typography>
            <Box sx={extensionDetail.actionContainer}>
              {[1, 2, 3, 4].map((i) => (
                <TTIconButton key={`detail-action-${i}`} itemType="icon" title="Extension action">
                  <AddCircleIcon sx={extensionDetail.actionIcon} />
                </TTIconButton>
              ))}
            </Box>
          </Box>
        </Box>

        <Stack sx={extensionDetail.metaDataContainer} divider={<Divider orientation="vertical" flexItem variant="middle" />}>
          <Box sx={extensionDetail.metaItem}>
            <Typography sx={extensionDetail.metaItemTitle}>Ratings</Typography>
            <Typography sx={extensionDetail.metaItemValue}>{data.meta.ratings}</Typography>
          </Box>
          <Box sx={extensionDetail.metaItem}>
            <Typography sx={extensionDetail.metaItemTitle}>Chart</Typography>
            <Typography sx={extensionDetail.metaItemValue}>No.{data.meta.chart}</Typography>
          </Box>
          <Box sx={extensionDetail.metaItem}>
            <Typography sx={extensionDetail.metaItemTitle}>Developer</Typography>
            <Typography sx={extensionDetail.metaItemValue}>{data.meta.developer}</Typography>
          </Box>
          <Box sx={extensionDetail.metaItem}>
            <Typography sx={extensionDetail.metaItemTitle}>Language</Typography>
            <Typography sx={extensionDetail.metaItemValue}>{data.meta.language}</Typography>
          </Box>
        </Stack>

        <TextDivider label={"Description & Features"} />

        <Box sx={extensionDetail.featContainer}>
          <Box sx={extensionDetail.featList}>
            {data.features.map((feature, key) => (
              <Box sx={extensionDetail.featItem} key={`extension-feat-${key}`}>
                <LabelImportantIcon sx={extensionDetail.bulletIcon} />
                <Typography sx={extensionDetail.featItemText}> {feature}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <TextDivider label={"Preview"} />

        <Box sx={extensionDetail.previewContainer}>
          <Box sx={extensionDetail.imgsContainer}>
            {Array.from(Array(6)).map((_, i) => (
              <Box key={`thumb-${i}`} component={"img"} src={img} sx={extensionDetail.img} />
            ))}
          </Box>
        </Box>

        <TextDivider label={"Ratings & Reviews"} />

        {/* Ratings */}
        <Box sx={extensionDetail.reviewsReviewsContainer}>
          <Box sx={extensionDetail.ratingTextContainer}>
            <Typography sx={extensionDetail.ratingText}>{data.meta.ratings}</Typography>
            <Typography sx={extensionDetail.ratingStaticText}>out of 5</Typography>
          </Box>
          <Box sx={extensionDetail.ratingBarContainer}>
            <Box sx={extensionDetail.ratingIconContainer}>
              {Array.from(Array(5)).map((_, index) => {
                const key = 5 - index;
                return <RatingStatic key={`static-rating-${key}`} size={15} count={5} filled={key} />;
              })}
            </Box>
            <Box sx={extensionDetail.ratingBarsContainer}>
              {Array.from(Array(5)).map((_, index) => {
                const key = 5 - index;
                return (
                  <Box sx={extensionDetail.ratingBar} key={`rating-bar-${index}`}>
                    <Box sx={{ ...extensionDetail.ratingBarValue, right: `${key * 10}%` }} />
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>

        {/* User rating and reviews */}
        <Box sx={extensionDetail.reviewsContainer}>
          <Box sx={extensionDetail.userReviewsContainer}>
            <TextDivider label="User reviews" />
            <Box sx={extensionDetail.userReviewsList}>
              {data.comments.map((comment, index) => (
                <Paper key={`comment-${index}`} sx={extensionDetail.commentItem}>
                  <Box sx={extensionDetail.commentTopItems}>
                    <Typography sx={extensionDetail.commentTitle}>{comment.title}</Typography>
                    <Typography>{comment.created_date}</Typography>
                  </Box>
                  <Box sx={extensionDetail.commentTopItems}>
                    <RatingStatic filled={comment.rating} size={18} color="gold" />
                    <Typography>{comment.author}</Typography>
                  </Box>
                  <Typography>{comment.description}</Typography>
                </Paper>
              ))}
            </Box>
          </Box>

          <Box sx={extensionDetail.userReviewsContainer}>
            <TextDivider label="Write a review" />
            <GenericForm formFields={reviewFormConfig} formContainerSx={extensionDetail.reviewFormContainer} submitHandler={() => new Promise<string>(() => {})} />
          </Box>
        </Box>
      </Paper>
    );
  }
  return (
    <Stack sx={extensions.container}>
      <LocalHeader pageTitle={"Extensions"} pageCaption={"Add any extension that suits or remove that doesn't suits your requirements!"} options={options} />
      <Box sx={extensions.content}>
        {isLoading ? (
          <Grid container spacing={{ xs: 1, md: "12px" }} sx={extensions.gridContainer}>
            {_Skeleton}
          </Grid>
        ) : isError ? (
          <Box sx={{}}>
            <Typography>Something went wrong...</Typography>
          </Box>
        ) : (
          <Grid container spacing={{ xs: 1, md: "12px" }} sx={extensions.gridContainer} onClick={navigateToDetail}>
            {(data as extensionType[]).map((item, index) => {
              const disabled = item.meta.disabled;
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} key={`extension-${index}}`}>
                  <Paper sx={extensions.item({ check: disabled })}>
                    {item.image ? (
                      <Box component={"img"} sx={extensions.img({ check: disabled })} src={item.image} />
                    ) : item.meta.disabled ? (
                      <ExtensionOffRoundedIcon sx={extensions.fallBackIcon} />
                    ) : (
                      <ExtensionRoundedIcon sx={extensions.fallBackIcon} />
                    )}
                    <Box sx={extensions.right}>
                      <Box sx={extensions.rightTop}>
                        <Typography sx={extensions.title}>{item.title}</Typography>
                        <ExtensionActions data={item} privileged={admin} />
                      </Box>
                      <Typography sx={extensions.description}>{item.description}</Typography>
                      <AppChips data={item.tags} maxChips={2} />
                      <Button title={item.title} variant="text" disabled={disabled} sx={extensions.seeMore} endIcon={<ArrowForwardRoundedIcon />}>
                        See more
                      </Button>
                    </Box>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        )}
      </Box>
      <Outlet />
    </Stack>
  );
};

export default Extensions;

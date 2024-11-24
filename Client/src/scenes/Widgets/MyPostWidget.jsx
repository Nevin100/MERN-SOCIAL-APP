import {
  EditOutlined,
  Deleteoutlined,
  AttachOutlined,
  GifBoxOutlined,
  ImageOutlined,
  MicOutlined,
  MoreHorizOutlined,
} from "@mui/material";
import {
  Box,
  Typography,
  Divider,
  InputBase,
  useTheme,
  Button,
  IconButton,
  useMediaQuery,
} from "@mui/material";

import Dropzone from "react-dropzone/.";
import FlexBetween from "Components/Flexbetween";
import UserImage from "Components/UserImage";
import WidgetWrapper from "Components/WidgetWrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "states";

const MyPostWidget = ({ picturePath }) => {
  const dispatch = useDispatch();
  const [IsImage, setIsImage] = useState(false);
  const [image, setimage] = useState(null);
  const [Post, setPost] = useState("");
  const { palette } = useTheme();
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const mediumMain = palette.neutral.mediumMain;
  const medium = palette.neutral.medium;
  const handlePost = async () => {
    const formData = new FormData();
    formData.append();
  };
};

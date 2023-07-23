import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../index";
import axios from "axios";
import { YOUTUBE_API_URL } from "../../utils/constants";
import { HomePagesVideo } from "../../Types";

const API_KEY = process.env.REACT_APP_API_KEY;
export const getHomePageVideos = createAsyncThunk(
  "youtubeApp/homePageVidoes",
  async (isNext: boolean, { getState }) => {
    const {
      youtube: { nextPageToken: nextPageTokenFromState, videos },
    } = getState() as RootState;
    const {
      data: { items, nextPageToken },
    } = await axios.get(
      `${YOUTUBE_API_URL}/search?maxResults=20&q="reactjs projects"&key=${API_KEY}&part=snippet&type=video&${
        isNext ? `pageToken=${nextPageTokenFromState}` : ""
      }`
    );
    console.log({ items, nextPageTokenFromState, nextPageToken });
  }
);

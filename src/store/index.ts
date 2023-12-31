import { InitialState } from "../Types";
import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialState: InitialState = {
  videos: [],
  currentPlaying: null,
  searchTerm: "",
  searchResults: [],
  nextPageToken: null,
  recommendedVideos: [],
};
const YoutubeSlice = createSlice({
  name: "youtube",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});
export const store = configureStore({
  reducer: {
    youtube: YoutubeSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

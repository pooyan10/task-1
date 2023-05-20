import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: "",
  images: [],
};

const fetchMovies = createAsyncThunk("movie/fetchMovies", () => {
  return axios
    .get("https://moviesapi.ir/api/v1/movies?page={page}")
    .then((res) => res.data.map((movie) => movie.poster));
});

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.images = action.payload;
    });
    builder.addCase(fetchMovies.rejected, (state) => {
      state.loading = false;
      state.images = "";
    });
  },
});

export { fetchMovies };

export default movieSlice.reducer;

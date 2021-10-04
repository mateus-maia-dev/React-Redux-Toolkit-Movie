import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APIKey } from "../../common/api/MovieApiKey"
import movieApi from "../../common/api/MovieApi"

// Middleware thunk para requisições ASSÍNCRONAS
export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (target) => {

    const response = await movieApi.get(`?apiKey=${APIKey}&s=${target}&type=movie`)

    return response.data;
});

export const fetchAsyncShows = createAsyncThunk('shows/fetchAsyncShows', async (target) => {
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${target}&type=series`)

    return response.data;
});

export const fetchAsyncShowsOrMoviesDetails = createAsyncThunk('movies/fetchAsyncShowsOrMoviesDetails', async (id) => {
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`)

    return response.data;
}
);


const initialState = {
    movies: {},
    series: {},
    selectMovieOrShow: {}
};

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        // addMovies: (state, { payload }) => {
        //     state.movies = payload;
        // },
        removeMovieOrShow: (state) => {
            state.selectMovieOrShow = {}
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("Pending")
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully!");
            return { ...state, movies: payload };
        },
        [fetchAsyncMovies.rejected]: (state, { payload }) => {
            console.log("Rejected");
            return { ...state, movies: payload };
        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully!");
            return { ...state, series: payload };
        },
        [fetchAsyncShowsOrMoviesDetails.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully!");
            return { ...state, selectMovieOrShow: payload };
        },
    }
});

export const { removeMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllSeries = (state) => state.movies.series;
export const getMovieOrShow = (state) => state.movies.selectMovieOrShow;
export default movieSlice.reducer;
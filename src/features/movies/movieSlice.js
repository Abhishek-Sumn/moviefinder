import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi"
import { APIKey } from "../../common/apis/movieApiKey"

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {

    const movieText = "Harry";
    const response = await movieApi
        .get(`?apikey=${APIKey}&s=${movieText}&type=movie`)

    return (response.data);
})

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async () => {

    const seriesText = "friends";
    const response = await movieApi
        .get(`?apikey=${APIKey}&s=${seriesText}&type=series`)

    return (response.data);
})
const initialState = {
    movies: {},
    shows:{}
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, { payload }) => {
            state.movies = payload;
        },
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log('pending')
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log('fulfilled');
            return { ...state, movies: payload }
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log('rejected')
        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log('fulfilled');
            return { ...state, shows: payload }
        },
    }
})

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;
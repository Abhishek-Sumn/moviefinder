import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi"
import { APIKey } from "../../common/apis/movieApiKey"

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (term) => {

    
    const response = await movieApi
        .get(`?apikey=${APIKey}&s=${term}&type=movie`)

    return (response.data);
})

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async (term) => {

    const seriesText = "friends";
    const response = await movieApi
        .get(`?apikey=${APIKey}&s=${term}&type=series`)

    return (response.data);
})




export const fetchAsyncMoviesOrShowDetail = createAsyncThunk('movies/fetchAsyncMoviesOrShowDetail', async (id) => {
    const response = await movieApi
        .get(`?apikey=${APIKey}&i=${id}&plot=full`)

    return (response.data);
})


const initialState = {
    movies: {},
    shows: {},
    selctedMovieOrShow: {},
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        removeSelectedMovieOrShow: (state) => {
            state.selctedMovieOrShow = {};
        }
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
        [fetchAsyncMoviesOrShowDetail.fulfilled]: (state, { payload }) => {
            console.log('fulfilled');
            return { ...state, selctedMovieOrShow: payload }
        },
    }
})

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selctedMovieOrShow;

export default movieSlice.reducer;
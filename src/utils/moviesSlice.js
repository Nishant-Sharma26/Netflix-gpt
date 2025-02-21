import { createSlice } from "@reduxjs/toolkit";

const moviesSlices = createSlice({
    name: "movies",
    initialState:{
        nowPlayingMovies:null,
        PopularMovies: null,
        TrailerVideo:null,
    },
    reducers:{
        addNowPlayingMovies :(state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies :(state,action)=>{
            state.PopularMovies = action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.TrailerVideo = action.payload;
        }
    }
});

export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies} = moviesSlices.actions;


export default moviesSlices.reducer
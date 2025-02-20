import { createSlice } from "@reduxjs/toolkit";

const moviesSlices = createSlice({
    name: "movies",
    initialState:{
        nowPlayingMovies:null,
        TrailerVideo:null,
    },
    reducers:{
        addNowPlayingMovies :(state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.TrailerVideo = action.payload;
        }
    }
});

export const {addNowPlayingMovies,addTrailerVideo} = moviesSlices.actions;


export default moviesSlices.reducer
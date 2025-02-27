import { createSlice } from "@reduxjs/toolkit";
const gptSlice = createSlice({
    name: 'gpt',
    initialState:{
        showGptSearch:false,
       movieResults:null,
       moviesNames:null,

    },
    reducers:{
        toggleGptSearchView: (state) =>{
            state.showGptSearch = !state.showGptSearch;
        },
        addgptMovieResult:(state,action)=>{
            const {moviesNames,movieResults} = action.payload;
            state.moviesNames = moviesNames;
            state.movieResults = movieResults;
        },
        clearAllMovies:(state)=>{
             state.moviesNames = null;
             state.movieResults = null;
        },
    },
});

export const {toggleGptSearchView,addgptMovieResult,clearAllMovies} = gptSlice.actions;

export default gptSlice.reducer;
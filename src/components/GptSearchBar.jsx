import React from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { API_OPTIONS, GEMINIAPI_KEY } from "../utils/constant";
import {addgptMovieResult} from "../utils/gptSlice"

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config?.lang);
  const searchText = useRef(null);
const dispatch = useDispatch();
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query="+
      movie+"&include_adult=false&language=en-US&page=1",
     API_OPTIONS
    );
        const json = await data.json();

        return json.results;

  };

  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      ". Only give me the names of 5 movies, comma-separated, like this example: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const GEMINI_API_KEY = GEMINIAPI_KEY;
    const GEMINI_API_URL =
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

    try {
      const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: gptQuery }],
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch movie recommendations");
      }

      const data = await response.json();
      const movieList = data.candidates[0].content.parts[0].text.split(",");

      console.log("Recommended Movies:", movieList);

      const promiseArray =  movieList.map(movie => searchMovieTMDB(movie));

      const tmdbResults = await Promise.all(promiseArray);
      console.log(tmdbResults);
      dispatch(addgptMovieResult({moviesNames: movieList, movieResults:tmdbResults}))

    } catch (error) {
      console.error("Error fetching movie recommendations:", error);
    }
    
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-2 m-4 bg-red-700 text-white rounded-lg col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

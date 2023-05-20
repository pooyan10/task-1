import React from "react";
import { useEffect } from "react";
import { fetchMovies } from "../src/features/movieSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { StarIcon } from "@heroicons/react/24/outline";

function Home() {
  // const movie = useSelector((state) => state?.movie?.images);
  // const dispatch = useDispatch();

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const res = await axios.get(
        "https://moviesapi.ir/api/v1/movies?page={page}"
      );
      setMovies(res.data.data);
      return res;
    }
    fetchMovies();
  }, []);

  console.log(movies);

  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:flex flex-wrap gap-x-16 justify-center">
      {movies?.map((movie) => (
        <div
          key={movie.id}
          className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg"
        >
          <img
            className="h-48 w-full object-cover object-center"
            src={movie.poster}
            alt="Product Image"
          />
          <div className="p-4">
            <div className="flex flex-col justify-between">
              <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
                {movie.title}
              </h2>
              <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
                <span className="px-2">IMDB Rating</span>
                {movie.imdb_rating}
                <StarIcon className="h-8 text-yellow-500 rounded-full text-black p-2 justify-end" />
              </p>
            </div>

            <div className="flex items-center">
              <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                $20.00
              </p>
              <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
                $25.00
              </p>
              <p className="ml-auto text-base font-medium text-green-500">
                20% off
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;

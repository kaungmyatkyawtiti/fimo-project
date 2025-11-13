"use client";

import { useGetAllMovies } from "@/hooks/movieHook";
import MovieEntry from "./components/MovieEntry";
import MovieList from "./components/MovieList";
import MovieSelection from "./components/MovieSelection";
import MovieSorting from "./components/MovieSorting";

export default function MoviePage() {
  const { data: movies, isSuccess, isError, isPending, refetch } = useGetAllMovies();

  console.log("data from movie page", movies);

  if (isError) return <div>Error</div>

  if (!movies) return <div>idk</div>

  return (
    <div className="py-4 px-5 md:px-12 lg:px-20">
      <MovieEntry />
      <MovieSelection />
      <MovieSorting />
      <MovieList movies={movies} />
    </div>
  )
}


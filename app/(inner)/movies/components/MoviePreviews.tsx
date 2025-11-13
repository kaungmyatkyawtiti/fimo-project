"use client";

import MovieCard from "@/components/MovieCard";
import { useMutationDeleteMovieById } from "@/hooks/movieHook";
import { Movie } from "@/types/movie"
import { useRouter } from "next/navigation";

interface MoviePreviewsProps {
  movie: Movie;
}

export default function MoviePreviews({ movie }: MoviePreviewsProps) {
  const router = useRouter();

  const { mutate: deleteMovieById, isSuccess } = useMutationDeleteMovieById();

  const handleDetailClick = (movie: Movie) => {
    console.log("detail click");
    router.push(`/movies/${movie._id}`);
  }

  const handleDeleteClick = () => {
    console.log("delete click");
    deleteMovieById(movie)
  }

  return (
    <MovieCard
      movie={movie}
      onDetail={() => handleDetailClick(movie)}
      onDelete={handleDeleteClick}
    />
  )
}

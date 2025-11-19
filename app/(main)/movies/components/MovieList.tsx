import { Movie } from "@/types/movie";
import MoviePreviews from "./MoviePreviews";

interface MovieListProps {
  movies: Movie[];
}

export default function MovieList({ movies }: MovieListProps) {
  return (
    <div
      className="grid gap-4
      grid-cols-2 sm:grid-cols-[repeat(auto-fit,190px)] mb-10"
    >
      {
        movies.map((movie) =>
          <MoviePreviews
            key={movie._id}
            movie={movie}
          />
        )
      }
    </div>
  );
}

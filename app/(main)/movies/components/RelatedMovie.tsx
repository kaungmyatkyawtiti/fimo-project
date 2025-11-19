import MovieCard from "@/components/MovieCard";
import { SubTitle } from "@/components/ui/text";
import { movies } from "@/data/dummy";

export default function RelatedMovie() {
  return (
    <div >
      <SubTitle className="mb-4">
        More like this
      </SubTitle>
      <div className="grid grid-cols-2 gap-4">
        {
          movies.map(movie =>
            <MovieCard
              key={movie._id}
              movie={movie}
            />
          )
        }
      </div>
    </div>
  )
}

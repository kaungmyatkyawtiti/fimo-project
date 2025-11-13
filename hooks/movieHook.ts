import { useMutation, useQuery } from "@tanstack/react-query"
import { deleteMovieApi, getAllMoviesApi } from "./api/movieApi"

import { QueryCache } from '@tanstack/react-query'
import { Movie } from "@/types/movie"
import { queryClient } from "@/components/Providers"

const queryCache = new QueryCache({
  onError: (error) => {
    console.log(error)
  },
  onSuccess: (data) => {
    console.log(data)
  },
  onSettled: (data, error) => {
    console.log(data, error)
  },
})


export const useGetAllMovies = () => {
  return useQuery({
    queryKey: ['movies'],
    queryFn: getAllMoviesApi,
    refetchOnWindowFocus: false,
  })
}

// export const useMovieById = (movieId: string) => {
//   return useQuery({
//     queryKey: ['movie', movieId],
//     queryFn: getAllMoviesApi,
//     select: data => data.find(movie => movie._id === movieId),
//   })
// }

// export const useMovieById = (movieId: string) => {
//   const { data: movies, isSuccess } = useGetAllMovies();
//
//   const movie = isSuccess
//     ? movies.find(movie => movie._id === movieId)
//     : undefined;
//
//   return { movie, isSuccess };
// };

export const useMovieById = (movieId: string) => {
  const data = queryClient.getQueryData<Movie[]>(["movies"])
  return data?.find(movie => movie._id === movieId)
};

export const useMutationDeleteMovieById = () => {
  return useMutation({
    mutationFn: (movie) => deleteMovieApi(movie._id),

    onMutate: async (movie: Movie) => {
      await queryClient.cancelQueries({ queryKey: ['movies'] });

      const previous = queryClient.getQueryData(['movies']);

      queryClient.setQueryData(
        ["movies"],
        (oldState: Movie[]) => oldState.filter(m => m._id != movie._id)
      )

      return { previous };
    },
    // promise then(success case)
    onSuccess: (movie, variables, onMutateResult) => {
      console.log("movie delete onSuccess", movie);
    },
    // promise catch(error case)
    onError: (err, movie, onMutateResult) => {
      console.log("movie delete onError", err);
      queryClient.setQueryData(
        ['movies'],
        onMutateResult?.previous
      )
    },
    // promise finally(do whatever case)
    onSettled: (movie, error, variables, onMutateResult) => {
      console.log("movie delete onSettled", movie)
      // queryClient.invalidateQueries({ queryKey: ['movies'] })
    },
  });
}

import { Movie, NewMovie } from "@/types/movie";
import { axiosInstance } from "@/utils/axiosInstance";
import { AxiosResponse } from "axios";

export const getAllMoviesApi = async (): Promise<Movie[]> => {
  const { data } = await axiosInstance.get<AxiosResponse<Movie[]>>("api/movies");
  console.log("data from movieApi", data);
  return data.data;
}

export const saveMovieApi = async (movie: NewMovie): Promise<Movie> => {
  const { data } = await axiosInstance.post<AxiosResponse<Movie>>(`api/movies`, movie);
  return data.data;
}

export const updateMovieApi = async (movie: Movie): Promise<Movie> => {
  const { data } = await axiosInstance.put<AxiosResponse<Movie>>(`api/movies/${movie._id}`, movie);
  return data.data;
}

export const deleteMovieApi = async (id: string): Promise<Movie> => {
  const { data } = await axiosInstance.delete<AxiosResponse<Movie>>(`api/movies/${id}`);
  return data.data;
}

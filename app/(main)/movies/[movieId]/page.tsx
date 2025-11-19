'use client'

import { useMovieById } from '@/hooks/movieHook';
import { use } from 'react'
import DetailPart from '../components/DetailPart';
import TopCast from '../components/TopCast';
import UserComment from '../components/UserComment';
import RelatedMovie from '../components/RelatedMovie';

export default function MovieDetailPage({
  params,
}: {
  params: Promise<{ movieId: string }>
}) {
  const { movieId } = use(params);

  const movie = useMovieById(movieId);

  if (!movie) return <div>Product not found</div>;

  console.log("movie", movie);

  return (
    <div className='p-6'>
      <DetailPart movie={movie} />
      <div className="flex gap-4">
        <div className='flex-1'>
          <TopCast />
          <UserComment />
        </div>
        <RelatedMovie />
      </div>
    </div>
  )
}

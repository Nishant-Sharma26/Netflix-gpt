import React from 'react';
import { IMG_CDN_URL } from '../utils/constant';

export default function MovieCard({ posterPath }) {
  const imageUrl = posterPath
    ? `${IMG_CDN_URL}${posterPath}`
    : 'https://via.placeholder.com/200x300?text=No+Image';

  return (
    <div className="w-40 flex-shrink-0 hover:scale-105 transition-transform duration-200">
      <img
        alt="Movie poster"
        src={imageUrl}
        loading="lazy"
        className="rounded-lg shadow-md object-cover w-full h-60"
      />
    </div>
  );
}


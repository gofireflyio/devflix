import React from 'react';

const MovieList = ({ movies, onMovieClick }) => {
    return (
        <div className="movie-list">
        {movies.map((movie) => (
            <div key={movie.id} className="movie-item" onClick={() => onMovieClick(movie)}>
                <img src={movie.poster} alt={movie.title} />
                <div className="details-wrapper">
                    <div className="movie-details-hedaer">{movie.title}</div>
                    {movie.contributor && (
                        <div className="contributor">Contributed by: {movie.contributor}</div>
                    )}
                </div>
            </div>
        ))}
        </div>
  );
};

export default MovieList;
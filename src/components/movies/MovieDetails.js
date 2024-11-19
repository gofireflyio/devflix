import React from 'react';

const MovieDetails = ({ movie, onClose }) => {
  const renderDescription = (description) => {
    const parts = description.split(/(\[.*?\]\(.*?\))/g);
    return parts.map((part, index) => {
      const match = part.match(/\[(.*?)\]\((.*?)\)/);
      if (match) {
        return <a key={index} href={match[2]} target="_blank" rel="noopener noreferrer">{match[1]}</a>;
      }
      return <span key={index}>{part}</span>;
    });
  };

  const handlePlayClick = () => {
    window.open(movie.videoUrl, '_blank');
  };

  return (
    <div className="movie-details">
      <div alt="Close" className="close-button" onClick={onClose}>X</div>
      <div className="movie-content">
        <div className="poster-container">
          <img src={movie.poster} alt={movie.title} className="poster" />
          {movie.videoUrl && (
              <img src={`${process.env.PUBLIC_URL}/play-button-white.png`} alt="Play" className="play-icon" onClick={handlePlayClick} />
          )}
        </div>
        <div className="info">
          <h2>{movie.title}</h2>
          <p>{renderDescription(movie.description)}</p>
          {movie.contributor && (
            <p className="contributor">
              Contributed by: <a href={`https://github.com/${movie.contributor}`} target="_blank" rel="noopener noreferrer">{movie.contributor}</a>
            </p>
          )}
        </div>
      </div>
      {movie.thumbnails && movie.thumbnails.length > 0 && (
        <div className="thumbnails">
          {movie.thumbnails.map((thumbnail, index) => (
            <div key={index} className="thumbnail-wrapper">
              <img src={thumbnail} alt={`${movie.title} thumbnail ${index + 1}`} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
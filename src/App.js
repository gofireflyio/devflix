import React, { useState, useEffect } from 'react';
import MovieList from './components/movies/MovieList';
import MovieDetails from './components/movies/MovieDetails';
import { movies } from './data/movies';
import './App.css';

const GitHubButton = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://buttons.github.io/buttons.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div 
      dangerouslySetInnerHTML={{
        __html: `
          <a class="github-button" href="https://github.com/infralight/devflix" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star infralight/devflix on GitHub">Star</a>
        `
      }}
    />
  );
};

const App = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  document.title = "Devflix";

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="app" style={{
      backgroundImage: `url(${process.env.PUBLIC_URL}/cloud-background2.jpg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      minHeight: '100vh'
    }}>
      <div className="content">
        <div className="header">
          <div className="logo-container">
            <img 
              src={`${process.env.PUBLIC_URL}/devflix_logo.png`} 
              alt="DEVFLIX" 
              className="devflix-logo"
            />
          </div>
          <div className="github-info">
            <GitHubButton />
          </div>
        </div>
        
        {selectedMovie ? (
          <MovieDetails movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
        ) : (
          <MovieList movies={movies} onMovieClick={handleMovieClick} />
        )}
      </div>
    </div>
  );
};

export default App;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const FilmPage = () => {
  const location = useLocation();

  return (
    <div className="film-background position-relative">
      <div className="layer position-absolute"></div>
      <img
        className="img-fluid w-100 h-100"
        src={
          "https://image.tmdb.org/t/p/w1280/" +
          location.state.item.backdrop_path
        }
      ></img>
      <div className="container  position-relative bg-dark text-light">
        <img
          className="img-fluid rounded-3 film-img"
          src={
            "https://image.tmdb.org/t/p/w780/" + location.state.item.poster_path
          }
        ></img>
        <div className="position-absolute film-page-content">
          <h1 className="fs-1 title-isis">
            <strong>{location.state.item.title}</strong>
          </h1>
          <h4>{location.state.item.release_date}</h4>
          <div className="fs-4">
            Rating : {location.state.item.vote_average.toFixed(2)} (
            {location.state.item.vote_count})
          </div>
        </div>
        <div className="position-absolute film-page-story">
          <h2>Over View</h2>
          <p>{location.state.item.overview}</p>
          <div className="d-flex justify-content-between align-items-center mt-4">
            {location.state.item.homepage ? (
              <a
                target="_blank"
                href={location.state.item.homepage}
                className="btn custom-btn"
              >
                Watch
              </a>
            ) : (
              <a
                target="_blank"
                href="https://www.google.com"
                className="btn custom-btn"
              >
                Watch
              </a>
            )}
          </div>
        </div>
        <div className="hello"></div>
      </div>
    </div>
  );
};

export default FilmPage;

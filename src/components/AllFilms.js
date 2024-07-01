import axios from "axios";
import React, { useState, useEffect } from "react";
import Pagination from "react-bootstrap/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getTheMoviesList } from "../redux/actions/getMoviesList";

const AllFilms = () => {
  const pageState = useSelector((state) => state.ChangePage);
  const films = useSelector((state) => state.MoviesList.movies);
  const totalState = useSelector((state) => state.MoviesList.pageCount);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getTheMoviesList(
        "https://api.themoviedb.org/3/discover/movie?api_key=52ef927bbeb21980cd91386a29403c78&language=en&with_genres=16,10751&include_video=true&include_adult=true&page=1"
      )
    );
  }, []);
  const navigation = useNavigate();

  function hundleClickNP(w) {
    if (w == "n" && pageState.page < totalState) {
      dispatch(
        getTheMoviesList(
          "https://api.themoviedb.org/3/discover/movie?api_key=52ef927bbeb21980cd91386a29403c78&language=en&with_genres=16,10751&include_video=true&include_adult=true&page=" +
            pageState.page +
            1
        )
      );

      dispatch({ type: "NEXT PAGE" });
    } else if (w == "p" && pageState.page > 1) {
      dispatch(
        getTheMoviesList(
          "https://api.themoviedb.org/3/discover/movie?api_key=52ef927bbeb21980cd91386a29403c78&language=en&with_genres=16,10751&include_video=true&include_adult=true&page=" +
            (pageState.page - 1)
        )
      );

      dispatch({ type: "PREV PAGE" });
    }
  }

  function hundleClickfilm(id) {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          id +
          "?api_key=52ef927bbeb21980cd91386a29403c78&language=en"
      )
      .then((res) => {
        navigation("/film_details", { state: { item: res.data } });
      });
  }
  if (films?.length < 1) {
    return (
      <div className="mt-5 text-light pt-4  container fs-1">
        <div className="d-flex mt-3 text-shodow align-items-center justify-content-center">
          <strong>No Film Found</strong>
        </div>
      </div>
    );
  }
  return (
    <div className="text-light container fs-1">
      <div className="d-flex mt-3 text-shodow align-items-center justify-content-between">
        <strong>All Films</strong>
      </div>
      <div className="row mt-5">
        {films.map((item) => {
          return (
            <div
              onClick={() => {
                /*filmDetails(item.id);*/ hundleClickfilm(item.id);
              }}
              key={item.id}
              className="col-12 film-item col-sm-6 col-md-4 col-lg-3 rounded-3 mb-4 position-relative"
            >
              <img
                className="img-fluid rounded-1"
                src={"https://image.tmdb.org/t/p/w780/" + item.poster_path}
              ></img>
              <div className="film-item-content d-flex justify-content-center align-items-center position-absolute w-100 h-100">
                <div className="fs-5">
                  <div className="text-center fw-bold px-4 text-light">
                    {item.title}
                  </div>
                  <div className="text-center text-light">
                    {item.release_date}
                  </div>
                  <div className="line"></div>
                  <div className="text-center text-light">
                    <span className="fw-semibold">Rating :</span>{" "}
                    {item.vote_average.toFixed(2)}
                  </div>
                  <div className="text-center text-light">
                    <span className="fw-semibold">Views :</span>{" "}
                    {item.popularity}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {totalState < 2 ? (
        ""
      ) : (
        <Pagination
          bg="dark"
          data-bs-theme="dark"
          className="justify-content-center"
        >
          <Pagination.Prev
            onClick={() => {
              hundleClickNP("p");
            }}
          />
          <Pagination.Ellipsis />
          <Pagination.Item>{pageState.page}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Next
            onClick={() => {
              hundleClickNP("n");
            }}
          />
        </Pagination>
      )}
    </div>
  );
};

export default AllFilms;

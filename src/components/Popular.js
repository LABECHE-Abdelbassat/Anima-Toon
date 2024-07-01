import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUpComingMoviesList } from "../redux/actions/getMoviesList";

const Popular = () => {
  const navigation = useNavigate();
  const upComingMovies = useSelector((state) => state.UpComingList.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getUpComingMoviesList(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=52ef927bbeb21980cd91386a29403c78&language=en&with_genres=16,10751&include_video=true&include_adult=false&page=1"
      )
    );
  }, []);

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
  if (upComingMovies?.length < 1) {
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
        <strong>Upcoming</strong>
      </div>
      <div className="row mt-5">
        {upComingMovies.map((item, i) => {
          if (i < 4) {
            return (
              <div
                onClick={() => {
                  /*filmDetails(item.id);*/ hundleClickfilm(item.id);
                }}
                key={item.id}
                className="col-6 film-item col-sm-6 col-md-3 col-lg-3 rounded-3 mb-4 position-relative"
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
          }
        })}
      </div>
    </div>
  );
};

export default Popular;

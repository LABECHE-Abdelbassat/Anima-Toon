import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getNowPlayingMoviesList } from "../redux/actions/getMoviesList";

const Landing = () => {
  const nowPlayingFilm = useSelector((state) => state.NowPlayingList.movies);
  const dispatch = useDispatch();
  const navigation = useNavigate(null);

  useEffect(() => {
    dispatch(
      getNowPlayingMoviesList(
        "https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&language=en&with_genres=16,10751&include_video=true&include_adult=false&query=dragon ball z&page=1"
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
  return (
    <div className="landing position-relative bg-dark text-light">
      <div className=" position-absolute"></div>
      <Carousel className="carouselthe" fade>
        {/* <Carousel.Item className='position-relative'>
        <div  className='container row mt-5'>
            {data.map((item)=>{
                return (
                    <div className='col-12 film-item col-sm-6 col-md-4 col-lg-3 rounded-3 mb-4 position-relative'>
                    <img className='img-fluid rounded-1' src='galery.jpg'></img>
                    <div className='film-item-content d-flex justify-content-center align-items-center position-absolute w-100 h-100'>
                        <div className='fs-5'>
                        <div className='text-center text-light'>hjejl elllo</div>
                        <div className='text-center text-light'>helllo</div>
                        <div className='text-center text-light'>helllo</div>
                        <div className='text-center text-light'>helllo</div>
                        </div>
                    </div>
                </div>
                )
            })}



            
            
        </div>
      </Carousel.Item> */}
        {nowPlayingFilm.map((item, i) => {
          if (i === 2 || i === 5) {
            return "";
          }
          return (
            <Carousel.Item key={item.id} className="position-relative">
              <img
                className="img-fluid"
                alt={item.title}
                src={"https://image.tmdb.org/t/p/w1280/" + item.backdrop_path}
              ></img>
              <Carousel.Caption className=" container position-absolute carouselis-item">
                <h1 onClick={() => hundleClickfilm(item.id)}>{item.title}</h1>
                <h4 className="">{item.release_date}</h4>
                <p>{item.overview}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Landing;

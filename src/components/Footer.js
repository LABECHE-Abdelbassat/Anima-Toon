import userEvent from "@testing-library/user-event";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getResultMoviesList } from "../redux/actions/getMoviesList";

const Footer = ({ modifyType }) => {
  const dispatch = useDispatch();

  const navigation = useNavigate();

  function hundleClickComing() {
    dispatch(
      getResultMoviesList(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=52ef927bbeb21980cd91386a29403c78&language=en&with_genres=16,10751&include_video=true&include_adult=false"
      )
    );
    dispatch({ type: "RESET PAGE" });
    modifyType("Up Coming");
    navigation("/films");
  }
  function hundleClickRated() {
    dispatch(
      getResultMoviesList(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=52ef927bbeb21980cd91386a29403c78&language=en&with_genres=16,10751&include_video=true&include_adult=false"
      )
    );
    dispatch({ type: "RESET PAGE" });
    modifyType("Top Rated");
    navigation("/films");
  }

  return (
    <Container className="footer py-3 bg-transparent text-light border-top border-dark mt-5">
      <div className="text-center">
        <div className="text-center fs-5 my-2">
          <a className="text-decoration-none text-white" href="/anima-toon/">
            <strong>ANIMA TOON</strong>
          </a>
        </div>
        <Nav className="justify-content-center text-white">
          <Nav.Link
            className="text-light"
            onClick={() => hundleClickRated()}
            eventKey="2"
          >
            Top Rated
          </Nav.Link>
          <Nav.Link
            className="text-light"
            onClick={() => hundleClickComing()}
            eventKey="3"
          >
            Up Coming
          </Nav.Link>
        </Nav>
      </div>

      <div className="text-center mt-3">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </Container>
  );
};

export default Footer;

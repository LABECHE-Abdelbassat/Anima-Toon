import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getResultMoviesList } from "../redux/actions/getMoviesList";

const NavBar = ({ modifyType }) => {
  const pageState = useSelector((state) => state.ChangePage);
  const totalState = useSelector((state) => state.TotalPage);
  const dispatch = useDispatch();

  const inputSearch = useRef(null);
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

  function hundleClickSearch(e) {
    e.preventDefault();
    dispatch(
      getResultMoviesList(
        "https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&region=US&language=en&page=1&query=" +
          inputSearch.current.value +
          "&with_genres=16,10751"
      )
    );
    localStorage.setItem("searchValue", inputSearch.current.value);
    dispatch({ type: "RESET PAGE" });
    inputSearch.current.value = "";
    modifyType("Search Result");
    navigation("/films");
  }
  return (
    <div className="position-absolute w-100 top-0 left-0 nav-bar">
      <Navbar data-bs-theme="dark" expand="lg" className="">
        <Container>
          <Navbar.Brand href="/anima-toon/">
            <strong>ANIMA TOON</strong>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="me-auto my-2 my-lg-0">
              <Nav.Link onClick={() => hundleClickRated()} eventKey="2">
                Top Rated
              </Nav.Link>
              <Nav.Link onClick={() => hundleClickComing()} eventKey="3">
                Up Coming
              </Nav.Link>
            </Nav>
            <Form className="d-flex form-search position-relative">
              <Form.Control
                ref={inputSearch}
                placeholder="Search"
                className="search-input"
                aria-label="Search"
              />
              <button
                onClick={(e) => hundleClickSearch(e)}
                className="position-absolute btn btn-search"
              >
                <Icon icon="ic:outline-search" className="icon-search" />
              </button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;

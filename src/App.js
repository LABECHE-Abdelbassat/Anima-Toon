import { useEffect, useState } from "react";
import AllFilms from "./components/AllFilms";
import FilmPage from "./components/FilmPage";
import Landing from "./components/Landing";
import NavBar from "./components/NavBar";
import Popular from "./components/Popular";
import TopRated from "./components/TopRated";
import "./css/global.css";
import { Route, Routes, HashRouter } from "react-router-dom";
import axios from "axios";
import ResultPage from "./components/ResultPage";
import Footer from "./components/Footer";

function App() {
  const [type, setType] = useState("");

  function modifyType(type) {
    setType(type);
  }

  return (
    <div className="">
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <NavBar modifyType={modifyType} />
                <Landing />
                <Popular />
                <TopRated />
                <AllFilms />
                <Footer modifyType={modifyType} />
              </div>
            }
          />
          <Route
            path="films"
            element={
              <div className="nav-bg">
                <NavBar modifyType={modifyType} />
                <ResultPage type={type} />
                <Footer modifyType={modifyType} />
              </div>
            }
          />
          <Route
            path="film_details"
            element={
              <div>
                <NavBar modifyType={modifyType} />
                <FilmPage />
              </div>
            }
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

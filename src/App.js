import { useEffect, useState } from "react";
import AllFilms from "./components/AllFilms";
import FilmPage from "./components/FilmPage";
import Landing from "./components/Landing";
import NavBar from "./components/NavBar";
import Popular from "./components/Popular";
import TopRated from "./components/TopRated";
import "./css/global.css"
import {Route,Routes , BrowserRouter} from "react-router-dom"
import  axios  from 'axios';
import ResultPage from "./components/ResultPage";


function App() {

  const [type, settype] = useState("")
  function modifyType(type){
    settype(type)
  }

  return (
    <div className="">
    <BrowserRouter>

      <Routes>
        <Route path="/" element={
          <div>
            <NavBar modifyType={modifyType} />
            <Landing/>
            <Popular/>
            <TopRated/>
            <AllFilms/>
            </div>
        }/>
        <Route path="films" element={
          <div className="nav-bg">
            <NavBar modifyType={modifyType} />
            <ResultPage type={type}/>
          </div>
        }/>
        <Route path="film_details" element={
          <div>
            <NavBar modifyType={modifyType}/>
            <FilmPage/>
          </div>}/>
      </Routes>
    </BrowserRouter>
     


    </div>
  );
}

export default App;

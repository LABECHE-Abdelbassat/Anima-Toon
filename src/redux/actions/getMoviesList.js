import axios from "axios";

export const getTheMoviesList = (url) => {
  return async (dispatch) => {
    dispatch({ type: "MOVIES_LIST_LOADING" });
    try {
      const ress = await axios.get(url);
      dispatch({ type: "MOVIES_LIST_SUCCESS", payload: ress.data });
    } catch (error) {
      dispatch({ type: "MOVIES_LIST_ERROR", payload: error });
    }
  };
};

export const getTopRatedMoviesList = (url) => {
  return async (dispatch) => {
    dispatch({ type: "TOPRATED_LIST_LOADING" });
    try {
      const ress = await axios.get(url);
      dispatch({ type: "TOPRATED_LIST_SUCCESS", payload: ress.data });
    } catch (error) {
      dispatch({ type: "TOPRATED_LIST_ERROR", payload: error });
    }
  };
};

export const getUpComingMoviesList = (url) => {
  return async (dispatch) => {
    dispatch({ type: "UPCOMING_LIST_LOADING" });
    try {
      const ress = await axios.get(url);
      dispatch({ type: "UPCOMING_LIST_SUCCESS", payload: ress.data });
    } catch (error) {
      dispatch({ type: "UPCOMING_LIST_ERROR", payload: error });
    }
  };
};

export const getNowPlayingMoviesList = (url) => {
  return async (dispatch) => {
    dispatch({ type: "NOWPLAYING_LIST_LOADING" });
    try {
      const ress = await axios.get(url);
      dispatch({ type: "NOWPLAYING_LIST_SUCCESS", payload: ress.data });
    } catch (error) {
      dispatch({ type: "NOWPLAYING_LIST_ERROR", payload: error });
    }
  };
};

export const getResultMoviesList = (url) => {
  return async (dispatch) => {
    dispatch({ type: "RESULT_LIST_LOADING" });
    try {
      const ress = await axios.get(url);
      dispatch({ type: "RESULT_LIST_SUCCESS", payload: ress.data });
    } catch (error) {
      dispatch({ type: "RESULT_LIST_ERROR", payload: error });
    }
  };
};

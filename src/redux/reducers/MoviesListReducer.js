const initialState = {
  movies: [],
  pageCount: 1,
  loading: false,
  error: null,
};

export const MoviesListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MOVIES_LIST_LOADING":
      return { ...state, loading: true, error: null };
    case "MOVIES_LIST_SUCCESS":
      return {
        ...state,
        movies: action.payload.results,
        pageCount: action.payload.total_pages,
        loading: false,
      };
    case "MOVIES_LIST_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const TopRatedListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOPRATED_LIST_LOADING":
      return { ...state, loading: true, error: null };
    case "TOPRATED_LIST_SUCCESS":
      return {
        ...state,
        movies: action.payload.results,
        pageCount: action.payload.total_pages,
        loading: false,
      };
    case "TOPRATED_LIST_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const NowPlayingListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NOWPLAYING_LIST_LOADING":
      return { ...state, loading: true, error: null };
    case "NOWPLAYING_LIST_SUCCESS":
      return {
        ...state,
        movies: action.payload.results,
        pageCount: action.payload.total_pages,
        loading: false,
      };
    case "NOWPLAYING_LIST_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const UpComingListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPCOMING_LIST_LOADING":
      return { ...state, loading: true, error: null };
    case "UPCOMING_LIST_SUCCESS":
      return {
        ...state,
        movies: action.payload.results,
        pageCount: action.payload.total_pages,
        loading: false,
      };
    case "UPCOMING_LIST_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const ResultListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RESULT_LIST_LOADING":
      return { ...state, loading: true, error: null };
    case "RESULT_LIST_SUCCESS":
      return {
        ...state,
        movies: action.payload.results,
        pageCount: action.payload.total_pages,
        loading: false,
      };
    case "RESULT_LIST_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

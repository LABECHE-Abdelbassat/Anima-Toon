import { combineReducers } from "redux"
import { PageReducer } from "./PageReducer"
import { MoviesListReducer, NowPlayingListReducer, ResultItemReducer, ResultListReducer, TopRatedListReducer, UpComingListReducer } from "./MoviesListReducer"
export const RootReducer = combineReducers({
    ChangePage : PageReducer,
    MoviesList : MoviesListReducer,
    UpComingList : UpComingListReducer,
    TopRatedList : TopRatedListReducer,
    NowPlayingList : NowPlayingListReducer,
    ResultList : ResultListReducer
})
import {createStore} from "redux"
import { RootReducer } from "./reducers/RootReducer"
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"
import { applyMiddleware } from "redux"
export const filmsStore = createStore(RootReducer,applyMiddleware(thunk))
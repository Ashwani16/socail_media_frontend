import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {reducer as userReducer} from "./user/reducer";
import {reducer as postsReducer} from "./posts/reducer";
import thunk from "redux-thunk";

const allreducer=combineReducers({userReducer:userReducer,postsReducer:postsReducer})

const store=legacy_createStore(allreducer,applyMiddleware(thunk))

export default store;

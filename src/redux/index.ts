import { applyMiddleware, combineReducers, createStore } from "redux";
import { menuReducer } from "./menu/reducer";
import { authorizationReducer } from "./authorization/reducer"
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  menu: menuReducer,
  auth:authorizationReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>
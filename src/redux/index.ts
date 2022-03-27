import { applyMiddleware, combineReducers, createStore } from "redux";
import { menuReducer } from "./menu/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  menu: menuReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>
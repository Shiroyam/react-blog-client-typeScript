import { applyMiddleware, combineReducers, createStore } from "redux";
import { menuReducer } from "./menu/reducer";
import { authorizationReducer } from "./authorization/reducer"
import { postsReducer } from "./posts/reducer"
import { postReducer } from "./post/reducer"
import { commentsReducer } from "./comments/reducer"
import { regReducer } from "./registration/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  menu: menuReducer,
  auth: authorizationReducer,
  reg: regReducer,
  posts: postsReducer,
  post: postReducer,
  comments: commentsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>
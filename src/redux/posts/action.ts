import { Dispatch } from "react";
import axios from "axios";

export const getPosts =
  (text: string | undefined, num: number) =>
  async (dispatch: Dispatch<any>) => {
    try {
      const response = await axios.get(
        `http://localhost:5656/posts?limit=4&query=${text}&page=${num}`
      );
      dispatch({
        type: "GET_POSTS",
        payload: response.data,
      });
    } catch (error) {
      alert(error);
    }
  };

  export const getPostsProfile = () => async (dispatch: Dispatch<any>) => {
    try {
        const response = await axios.get(
          `http://localhost:5656/posts`
        );
        dispatch({
          type: "GET_POSTS_PROFILE",
          payload: response.data,
        });
      } catch (error) {
        alert(error);
      }
  }

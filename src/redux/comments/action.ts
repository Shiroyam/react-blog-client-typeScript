import { Dispatch } from "react";
import axios from "axios";

export const getCommentsPost =
  (id: string | undefined) => async (dispatch: Dispatch<any>) => {
    try {
      const response = await axios.get(
        `http://localhost:5656/comments/post/${id}`
      );
      dispatch({
        type: "GET_COMMENTS_POST",
        payload: response.data,
      });
    } catch (error) {
      alert(error);
    }
  };

export const getCommentsAll = () => async (dispatch: Dispatch<any>) => {
  try {
    const response = await axios.get(`http://localhost:5656/comments`);
    dispatch({
      type: "GET_COMMENTS_ALL",
      payload: response.data.items,
    });
  } catch (error) {
    alert(error);
  }
};

export const postComments =
  (data: any, id: string | undefined) => async (dispatch: Dispatch<any>) => {
    try {
      await axios.post(
        "http://localhost:5656/comments",
        {
          text: `${data.comment}`,
          postId: `${id}`,
        },
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch({
        type: "POST_COMMENTS",
      });
    } catch (error) {
      alert(error);
    }
  };

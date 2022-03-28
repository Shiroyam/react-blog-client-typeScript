import { Dispatch } from "react";
import axios from "axios";

export const getCommentsPost = (id:string | undefined) => async (dispatch: Dispatch<any>) => {
    try {
     const response = await axios.get(`http://localhost:5656/comments/post/${id}`)
     dispatch({
         type:"GET_COMMENTS_POST",
         payload: response.data
     })
    } catch (error) {
        alert(error)
    }
}
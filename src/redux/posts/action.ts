import { Dispatch } from "react"
import axios from "axios"

export const getPosts = () => async (dispatch: Dispatch<any>) => {
    try {
        const response = axios.get("http://localhost:5656/posts")
        dispatch({
            type:"GET_POSTS",
            payload: response,
        })
    } catch (error) {
        alert(error)
    }
}
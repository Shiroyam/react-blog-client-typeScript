import { Dispatch } from "react"
import axios from "axios"

export const getPosts = (text: string | undefined) => async (dispatch: Dispatch<any>) => {
    try {
        const response = await axios.get(`http://localhost:5656/posts?limit=4&query=${text}`)
        dispatch({
            type: "GET_POSTS",
            payload: response.data.items,
        })
    } catch (error) {
        alert(error)
    }
}
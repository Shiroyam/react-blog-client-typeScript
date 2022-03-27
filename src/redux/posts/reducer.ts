interface PostsAction {
    type: string;
    payload: {}
}

export const postsReducer = (state = [], action:PostsAction) => {    
    switch (action.type) {
        case"GET_POSTS":
            return {...state, payload: action.payload}
        default:
            return state;
    }
}
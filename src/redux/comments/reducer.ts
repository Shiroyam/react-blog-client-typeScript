interface CommentsAction {
  type: string;
  payload: any[];
}

interface CommentsState {
  comment: any[];
}

const initialState: CommentsState = {
  comment: [],
};

export const commentsReducer = (
  state = initialState,
  action: CommentsAction
): CommentsState => {
  switch (action.type) {
    case "GET_COMMENTS_POST":
        return {...state, comment: action.payload}
    default:
      return state;
  }
};

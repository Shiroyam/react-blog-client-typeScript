interface MenuState {
  flag:boolean;
}

interface MenuAction {
  type: string;
  payload?: any;
}

const initialState: MenuState = {
  flag: false,
};

export const menuReducer = (
  state = initialState,
  action: MenuAction
): MenuState => {
  switch (action.type) {
    case "CLOSE_MENU":
      return { ...state, flag: false };
    case "OPEN_MENU":
      return { ...state, flag: true };
    default:
      return state;
  }
};

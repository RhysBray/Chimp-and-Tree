//action type
export const CHECK_KEY_PRESSED = "CHECK_KEY_PRESSED";

// action creators
export const checkKeyPressed = (
  keyPressed: number
): ICheckKeyPressedAction => ({
  type: CHECK_KEY_PRESSED,
  keyPressed
});

export interface ICheckKeyPressedAction {
  type: typeof CHECK_KEY_PRESSED;
  keyPressed: number;
}

type IGeneralActions = ICheckKeyPressedAction;

export interface IGeneralState {
  keyPressed: number;
}

// reducer with initial state
const initialState: IGeneralState = {
  keyPressed: 39
};

const generalReducer = (state = initialState, action: IGeneralActions) => {
  switch (action.type) {
    case CHECK_KEY_PRESSED:
      return { ...state, keyPressed: action.keyPressed };
    default:
      return state;
  }
};

export default generalReducer;

//action type
export const SET_SEARCH_TEXT = "SET_SEARCH_TEXT";

// action creators
export const setSearchText = (searchText: string): ISetSearchTextAction => ({
  type: SET_SEARCH_TEXT,
  searchText
});

export interface ISetSearchTextAction {
  type: typeof SET_SEARCH_TEXT;
  searchText: string;
}

type IGeneralActions = ISetSearchTextAction;

export interface IGeneralState {
  searchText: string;
}

// reducer with initial state
const initialState: IGeneralState = {
  searchText: ""
};

const generalReducer = (state = initialState, action: IGeneralActions) => {
  switch (action.type) {
    case SET_SEARCH_TEXT:
      return { ...state, searchText: action.searchText };
    default:
      return state;
  }
};

export default generalReducer;

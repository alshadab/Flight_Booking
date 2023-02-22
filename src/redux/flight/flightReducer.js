import { BOOK, DELETE } from "./actionTypes";

const initialState = [];

const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK:
      return [...state, action.payload];

    case DELETE:
      const deleteData = state.filter((todo) => todo.id !== action.payload);
      return deleteData;

    default:
      return state;
  }
};

export default flightReducer;

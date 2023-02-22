import { BOOK, DELETE } from "./actionTypes";

export const book = (value) => {
  return {
    type: BOOK,
    payload: value,
  };
};

export const reset = (id) => {
  return {
    type: DELETE,
    payload: id,
  };
};

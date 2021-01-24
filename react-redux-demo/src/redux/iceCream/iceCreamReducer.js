import { BUY_ICECREAM } from "./iceCreamType";

export const initialState = {
  numOfIceCreams: 20,
};

export const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams:
          state.numOfIceCreams > 0
            ? state.numOfIceCreams - 1
            : state.numOfIceCreams,
      };

    default:
      return state;
  }
};

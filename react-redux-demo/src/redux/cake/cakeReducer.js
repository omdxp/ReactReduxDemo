import { BUY_CAKE } from "./cakeTypes";

export const initialState = {
  numOfCakes: 10,
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes:
          state.numOfCakes > 0 ? state.numOfCakes - 1 : state.numOfCakes,
      };

    default:
      return state;
  }
};

export default cakeReducer;

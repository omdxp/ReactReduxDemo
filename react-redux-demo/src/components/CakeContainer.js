import React, { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";
import cakeReducer, { initialState } from "../redux/cake/cakeReducer";

export default function CakeContainer() {
  //   const numOfCakes = useSelector((state) => state.numOfCakes);
  //   const dispatch = useDispatch();
  const [state, dispatch] = useReducer(cakeReducer, initialState);
  return (
    <div>
      <h2>Number of cakes: {state.numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
}

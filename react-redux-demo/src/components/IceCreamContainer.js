import React, { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyIceCream } from "../redux/iceCream/iceCreamActions";
import {
  iceCreamReducer,
  initialState,
} from "../redux/iceCream/iceCreamReducer";

export default function IceCreamContainer() {
  //   const numOfCakes = useSelector((state) => state.numOfCakes);
  //   const dispatch = useDispatch();
  const [state, dispatch] = useReducer(iceCreamReducer, initialState);
  return (
    <div>
      <h2>Number of icecreams: {state.numOfIceCreams}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy IceCream</button>
    </div>
  );
}

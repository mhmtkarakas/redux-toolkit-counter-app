import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counter/counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const bgColor = count < 0 ? "red" : "blue";
  return (
    <div className="main-buttons">
      <div className="buttons">
        <h3>Counter</h3>
        <button
          id="button1"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span style={{ color: bgColor }}>{count}</span>
        <button
          id="button2"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

import React from "react";
import { useReducer } from "react";
import { Link } from "react-router-dom";

const initialCount = { count: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: (state.count = 0) };
    default:
      return { count: state.count };
  }
};

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialCount);
  return (
    <div>
      <h2>Count: {state.count}</h2>
      <div className="counter">
        <button className="inc" onClick={() => dispatch({ type: "increment" })}>
          Increment
        </button>
        <button className="dec" onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>
      </div>
      <button className="reset" onClick={() => dispatch({ type: "reset" })}>
        Reset
      </button>
      <div className="back">
        <Link to="/counter">
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
}
export default UseReducer;

import { useReducer, useState } from "react";
import "./App.css";
import reduser, { initialState, COUNT_TYPES } from "./components/Count";

function App() {
  const [state, dispatch] = useReducer(reduser, initialState);
  const [number, setNumber] = useState(1);
  const [color, setColor] = useState("");
  const [bgColor, setBGColor] = useState("");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleChange = (e) => {
    setBGColor(e.target.value);
  };

  const style = {
    color: color,
    backgroundColor: bgColor,
  };

  return (
    <>
      <div style={style}>
        <h1>{state.count}</h1>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
        />
        <button
          onClick={() =>
            dispatch({ type: COUNT_TYPES.INCREMENT, payload: number })
          }
        >
          increment
        </button>
        <button
          onClick={() =>
            dispatch({ type: COUNT_TYPES.DECREMENT, payload: number })
          }
        >
          decrement
        </button>
        <button onClick={() => dispatch({ type: COUNT_TYPES.RESET })}>
          reset
        </button>
        <h1>Rang kiriting</h1>
        <input type="text" value={color} onChange={handleColorChange} />
        <h1>BG ozgartirish uchun rang kiriting</h1>
        <input type="text" value={bgColor} onChange={handleChange} />
      </div>
    </>
  );
}

export default App;

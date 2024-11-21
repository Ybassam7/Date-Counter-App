import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date("November 21 2024");
  date.setDate(date.getDate() + count);

  return (
    <div className="container">
      <div className="counter-section">
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <p>Step : {step}</p>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>

      <div className="counter-section">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <p>Count : {count}</p>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <span>
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was `}
        {date.toDateString()}
      </span>
    </div>
  );
}

export default App;

import React, {useState} from "react";

const App = () => {
  const [value, setValue] = useState(0);
  function decrement() {
    setValue((prev) => prev - 1);
  }
  function increment() {
    setValue((prev) => prev + 1);
  }
  function reset() {
    setValue(0);
  }
  
  return (
    <>
      <h1 className="title">The Gills counter App</h1>
      <div className="App">
        <div className="counter-container">
          <button onClick={increment}>+</button>
          <h1 className="value">{value}</h1>
          <button onClick={decrement}>-</button>
        </div>
        <button className="reset" onClick={reset}>RESET</button>
      </div>
    </>
  );
}

export default App;
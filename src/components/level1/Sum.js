import { useState } from "react";
import { Link } from "react-router-dom";
function Sum() {
  const [numberOne, setNumberOne] = useState();
  const [numberTwo, setNumberTwo] = useState();
  const [result, setResult] = useState();
  const handleCalculate = () => {
    let tong = parseFloat(numberOne) + parseFloat(numberTwo);
    setResult(tong);
  };
  const handleReset = () => {
    setNumberOne();
    setNumberTwo();
    setResult();
  };
  return (
    <div
      style={{
        margin: "0 auto",
        paddingTop: "100px",
        width: "80%",
        height: "80%",
        textAlign: "center",
      }}
    >
      <h1 className="text-2xl font-semibold">
        <Link to="/">Home</Link>
      </h1>
      <p>
        Đề bài : Write a program that takes two numbers as inputs and displays
        their sum.
      </p>
      <div className="p-2 mt-5">
        <div className="pb-2">
          <label>Number 1: </label>
          <input
            className="outline-0 border-solid border-2 border-stone-400 rounded p-1"
            type="text"
            onChange={(e) => setNumberOne(e.target.value)}
            value={numberOne ? numberOne : ""}
          />
        </div>

        <div class="pb-2">
          <label>Number 2: </label>
          <input
            className="outline-0 border-solid border-2 border-stone-400 rounded p-1"
            type="text"
            value={numberTwo ? numberTwo : ""}
            onChange={(e) => setNumberTwo(e.target.value)}
          />
        </div>
      </div>

      <div class="wrap mt-2">
        <button
          style={{ width: "10%", height: "35px" }}
          className="bg-cyan-400 rounded"
          onClick={handleCalculate}
        >
          Calculate{" "}
        </button>
        <button
          className="bg-emerald-400 rounded"
          onClick={handleReset}
          style={{ marginLeft: "20px", height: "35px", width: "10%" }}
        >
          Reset
        </button>
      </div>
      <h3 className="pt-2">Result : {result ? result : ""}</h3>
    </div>
  );
}
export default Sum;

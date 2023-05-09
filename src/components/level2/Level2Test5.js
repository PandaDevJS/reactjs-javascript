import { Link } from "react-router-dom";
import { useState } from "react";
function Level2Test5() {
  const [string, setString] = useState("");
  const [number, setNumber] = useState("");
  const handleChange = () => {
    let arr = string.trim().split(" ");
    let sumMax = 0;
    let currSum = 0;
    for (let j = 0; j < arr.length; j++) {
      currSum = Math.max(0, (currSum += parseInt(arr[j])));
      sumMax = Math.max(sumMax, currSum);
    }
    setNumber(sumMax);
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
        <Link to="/">Home </Link>
      </h1>
      <br />
      <p className="p-2">
        Đề bài : Write a program that takes a list of integers as input and
        returns the maximum sum of any contiguous subarray within the list.{" "}
      </p>
      <p className="p-2">Nhập vào dãy số : </p>
      <input
        type="text"
        style={{ width: "25vw" }}
        className="outline-0 border-solid border-2 border-stone-400 rounded p-1"
        placeholder="Nhập vào dãy số cách nhau bằng một dấu cách"
        onChange={(e) => setString(e.target.value)}
      />
      <button className="bg-cyan-400 rounded ml-2 p-1.5" onClick={handleChange}>
        Tìm số
      </button>
      <p className="p-2" style={{ marginTop: "25px" }}>
        Kết quả : {number}
      </p>
    </div>
  );
}
export default Level2Test5;

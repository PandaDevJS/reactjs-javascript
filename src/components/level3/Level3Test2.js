import { Link } from "react-router-dom";
import { useState } from "react";
function Level3Test2() {
  const [string, setString] = useState("");
  const [number, setNumber] = useState("");
  const handleChange = () => {
    let arr = string.trim().split(" ");
    let newArr = arr.sort((a, b) => a - b);
    let m = newArr.length;
    let diff = Number(newArr[m - 1]) - Number(newArr[0]);
    setNumber(diff);
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
      <p className="p-2">
        Write a program that takes a list of integers as input and returns the
        maximum difference between any two elements in the list. <br />
        VD: [1, 2, 91, 9, 100] 👉 99 ( ket qua cua 100 - 1 ){" "}
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
        Kết quả: {number}{" "}
      </p>
    </div>
  );
}
export default Level3Test2;

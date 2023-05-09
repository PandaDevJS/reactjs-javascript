import { Link } from "react-router-dom";
import { useState } from "react";
function Level2Test4() {
  const [string, setString] = useState("");
  const [number, setNumber] = useState("");
  const handleChange = () => {
    let arr = string.trim().split(" ");
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 3 === 0 && arr[i] % 5 === 0 && arr[i] > 0) {
        total += parseInt(arr[i]);
      }
    }
    setNumber(total);
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
        Đề bài : Write a program that takes a list of numbers as input and
        returns the sum of the numbers that are divisible by both 3 and 5.{" "}
      </p>
      <p className="p-2">Nhập dãy số : </p>
      <input
        type="text"
        style={{ width: "25vw" }}
        className="outline-0 border-solid border-2 border-stone-400 rounded p-1"
        placeholder="Nhập vào dãy số cách nhau bằng một dấu cách"
        onChange={(e) => setString(e.target.value)}
      />
      <button className="bg-cyan-400 rounded ml-2 p-1.5" onClick={handleChange}>
        Tổng số chia hết cho 3 và 5
      </button>
      <p className="p-2" style={{ marginTop: "25px" }}>
        Kết quả: {number}
      </p>
    </div>
  );
}
export default Level2Test4;

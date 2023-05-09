import { Link } from "react-router-dom";
import { useState } from "react";
function Level4Test9() {
  const [string, setString] = useState([]);
  const [result, setResult] = useState("");
  const handleChange = () => {
    let arr = JSON.parse(string);
    let sum = 1;
    let max = [];
    arr.reduce((total, cur, index) => {
      if (arr[index + 1] - arr[index] === 1) {
        sum++;
        max.push(sum);
      } else if (arr[index + 1] - arr[index] !== 1) {
        sum = 1;
      }
    }, 0);

    setResult(Math.max(...max));
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
        Đề bài : Write a program that takes a list of integers as input and
        returns the length of the longest increasing subsequence of the numbers,
        with the additional constraint that no two adjacent elements in the
        subsequence can differ by more than 1. ( Khuyến khích dùng reduce )
        <br />
        VD: Đầu vào: [1, 2, 3, 8, 6, 3] kết quả 3{" "}
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
        Kết quả : {result}{" "}
      </p>
    </div>
  );
}
export default Level4Test9;

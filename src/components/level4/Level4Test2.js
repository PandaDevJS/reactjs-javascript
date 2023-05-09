import { Link } from "react-router-dom";
import { useState } from "react";
function Level4Test2() {
  const [string, setString] = useState("");
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");
  const handleChange = () => {
    let arr = string.trim().split(" ");
    let target = Number(number);
    const n = arr.length;
    const dp = new Array(target + 1).fill(0);
    dp[0] = 1;

    for (let i = 0; i < n; i++) {
      for (let j = target; j >= arr[i]; j--) {
        dp[j] += dp[j - arr[i]];
      }
    }

    setResult(dp[target]);
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
        returns the number of distinct subsequences of the list that sum up to a
        target value.
        <br />
        VD: Đầu vào [1, 2, 3, 4, 5] và 5 👉 3 ( vì 2 + 3 và 1 + 4 bằng 5 )
      </p>
      <p className="p-2">Nhập vào dãy số : </p>
      <input
        type="text"
        style={{ width: "25vw" }}
        className="outline-0 border-solid border-2 border-stone-400 rounded p-1"
        placeholder="Nhập vào dãy số cách nhau bằng một dấu cách"
        onChange={(e) => setString(e.target.value)}
      />
      <p className="p-2">Nhập số: </p>
      <input
        type="text"
        style={{ width: "25vw" }}
        placeholder="Số kỳ vọng"
        className="outline-0 border-solid border-2 border-stone-400 rounded p-1"
        onChange={(e) => setNumber(e.target.value)}
      />
      <br />
      <button
        className="bg-cyan-400 rounded ml-2 p-1.5 m-2"
        onClick={handleChange}
      >
        Tìm số{" "}
      </button>
      <p className="p-2" style={{ marginTop: "25px" }}>
        Kết quả : {result}{" "}
      </p>
    </div>
  );
}
export default Level4Test2;

import { Link } from "react-router-dom";
import { useState } from "react";
function Level4Test3() {
  const [string, setString] = useState("");
  const [result, setResult] = useState("");
  const handleChange = () => {
    let arr = string.trim().split(" ");
    console.log(arr);
    if (!arr.length) {
      return "";
    }
    let commonStr = "";
    const m = arr[0].length;
    for (let i = 0; i < m; i++) {
      for (let j = i + 1; j < m + 1; j++) {
        const substring = arr[0].substring(i, j);
        if (arr.every((string) => string.includes(substring))) {
          if (substring.length > commonStr.length) {
            commonStr = substring;
          }
        }
      }
    }
    setResult(commonStr);
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
        Đề bài : Write a program that takes a list of strings as input and
        returns the length of the longest substring that appears in every string
        in the list.
        <br /> VD: ["abcdefg", "abcde", "abcdef", "ab", "abc"] kết quả : 2
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
        Tìm số{" "}
      </button>
      <p className="p-2" style={{ marginTop: "25px" }}>
        Kết quả : {result.length}{" "}
      </p>
    </div>
  );
}
export default Level4Test3;

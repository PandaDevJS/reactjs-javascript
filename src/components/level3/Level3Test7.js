import { Link } from "react-router-dom";
import { useState } from "react";
function Level3Test7() {
  const [string, setString] = useState("");
  const [result, setResult] = useState("");
  const printSubStr = (newStr, low, high) => {
    let string = [];
    for (let i = low; i <= high; ++i) {
      string.push(newStr[i]);
    }
    return string.join("");
  };
  const handleChange = () => {
    let newStr = string.replace(/\s/g, "").toLowerCase();

    let maxLength = 1,
      start = 0;
    for (let i = 0; i < newStr.length; i++) {
      for (let j = i; j < newStr.length; j++) {
        let flag = 1;

        for (let k = 0; k < (j - i + 1) / 2; k++)
          if (newStr[i + k] !== newStr[j - k]) flag = 0;

        if (flag !== 0 && j - i + 1 > maxLength) {
          start = i;
          maxLength = j - i + 1;
        }
      }
    }
    setResult(printSubStr(newStr, start, start + maxLength - 1));
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
        Đề bài : Write a program that takes a string as input and returns the
        length of the longest palindrome that can be formed by rearranging the
        characters in the string.
        <br />
        Giải thích : palindrome : Chuỗi ký tự mà đọc xuôi hay ngược đều giống
        nhau, vd: aba, uwu{" "}
      </p>
      <p className="p-2">Nhập vào chuỗi : </p>
      <input
        type="text"
        style={{ width: "25vw" }}
        className="outline-0 border-solid border-2 border-stone-400 rounded p-1"
        placeholder="Nhập vào chuỗi cách nhau bằng một dấu cách"
        onChange={(e) => setString(e.target.value)}
      />
      <button className="bg-cyan-400 rounded ml-2 p-1.5" onClick={handleChange}>
        Tìm ký tự{" "}
      </button>
      <p className="p-2" style={{ marginTop: "25px" }}>
        Kết quả : {result.length}
      </p>
    </div>
  );
}
export default Level3Test7;

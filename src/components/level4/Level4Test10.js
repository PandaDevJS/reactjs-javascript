import { Link } from "react-router-dom";
import { useState } from "react";
function Level4Test10() {
  const [string, setString] = useState([]);
  const [result, setResult] = useState("");
  const handleChange = () => {
    let arr = JSON.parse(string);
    let maxOverlap = 0;
    let newArr = "";
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        let overlap = 0;
        for (let k = 0; k < arr[i].length; k++) {
          if (arr[j].includes(arr[i][k])) {
            overlap++;
          }
        }
        if (overlap > maxOverlap) {
          maxOverlap = overlap;
          newArr = [arr[i], arr[j]];
        }
      }
    }
    let m = newArr[0].length;
    let n = newArr[1].length;
    let longest = 0;
    let endIndex = 0;
    let matrix = Array(m + 1)
      .fill(null)
      .map(() => Array(n + 1).fill(0));
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (newArr[0][i - 1] === newArr[1][j - 1]) {
          matrix[i][j] = matrix[i - 1][j - 1] + 1;
          if (matrix[i][j] > longest) {
            longest = matrix[i][j];
            endIndex = i - 1;
          }
        } else {
          matrix[i][j] = 0;
        }
      }
    }
    let stringOverlap = newArr[0].substring(
      endIndex - longest + 1,
      endIndex + 1
    );

    setResult([stringOverlap, longest]);
  };
  console.log(result);
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
        returns the two strings with the largest overlap of substrings, where
        the substrings must be at least k characters long (where k is a
        parameter to the function).
        <br /> VD : [“abcdef", “abczyzcdef”] kết quả : ["cdef",4]
      </p>
      <p className="p-2">Nhập vào chuỗi : </p>
      <input
        type="text"
        style={{ width: "25vw" }}
        className="outline-0 border-solid border-2 border-stone-400 rounded p-1"
        placeholder="Nhập vào mảng"
        onChange={(e) => setString(e.target.value)}
      />
      <button className="bg-cyan-400 rounded ml-2 p-1.5" onClick={handleChange}>
        Tìm số
      </button>
      <p className="p-2" style={{ marginTop: "25px" }}>
        Kết quả : {result !== "" ? JSON.stringify(result) : ""}
      </p>
    </div>
  );
}
export default Level4Test10;

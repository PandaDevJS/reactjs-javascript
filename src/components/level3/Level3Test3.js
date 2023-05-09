import { Link } from "react-router-dom";
import { useState } from "react";
function Level3Test3() {
  const [string, setString] = useState("");
  const [number, setNumber] = useState("");
  const handleChange = () => {
    let arr = string.trim().split(" ");
    let index = 1;
    let length = arr.length;
    for (let i = 0; i < length; i++) {
      if (Number(arr[i]) < Number(arr[i + 1])) {
        index = index + 1;
      }
    }
    setNumber(index);
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
        returns the longest increasing subsequence of the numbers. ( Tìm độ dài
        của chuỗi con tịnh tiến dài nhất ) <br /> VD: [3, 10, 2, 1, 20] 👉 3 (
        The longest increasing subsequence is [3, 10, 20] ) <br /> [50, 3, 10,
        7, 40, 80 ] kết quả : 4 ( the longest increasing subsequence is (3, 7,
        40, 80) )
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
        Kết quả : {number}{" "}
      </p>
    </div>
  );
}
export default Level3Test3;

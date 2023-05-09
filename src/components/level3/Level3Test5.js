import { Link } from "react-router-dom";
import { useState } from "react";
function Level3Test5() {
  const [string, setString] = useState("");
  const [number, setNumber] = useState("");
  const handleChange = () => {
    let arr = string.trim().split(" ");
    let res = 1;
    for (let ind = 0; ind < arr.length && Number(arr[ind]) <= res; ind++) {
      res += Number(arr[ind]);
    }
    setNumber(res);
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
        returns the smallest positive integer that cannot be represented as the
        sum of any subset of the list.
        <br />
        VD: [1, 2, 3, 7, 8, 20] kết quả: 42
      </p>
      <p className="p-2">Nhập vào dãy số : </p>
      <input
        type="text"
        style={{ width: "25vw" }}
        placeholder="Nhập vào dãy số cách nhau bằng một dấu cách"
        className="outline-0 border-solid border-2 border-stone-400 rounded p-1"
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
export default Level3Test5;

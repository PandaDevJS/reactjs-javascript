import { Link } from "react-router-dom";
import { useState } from "react";
function Findstring() {
  const [string, setString] = useState("");
  const [number, setNumber] = useState(0);
  const handleChange = () => {
    let arr = string.trim().split(" ");
    let i = 0;
    arr.map((value) => {
      if (value.includes("a")) {
        i++;
      }
      return i;
    });
    setNumber(i);
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
        returns the number of strings that contain the letter 'a'.{" "}
      </p>
      <p className="p-2">Nhập dãy chuỗi số : </p>
      <input
        type="text"
        style={{ width: "25vw" }}
        className="outline-0 border-solid border-2 border-stone-400 rounded p-1"
        placeholder="Nhập vào dãy số cách nhau bằng một dấu cách"
        onChange={(e) => setString(e.target.value)}
      />
      <button className="bg-cyan-400 rounded ml-2 p-1.5" onClick={handleChange}>
        Tìm số từ chứa ký tự 'a'
      </button>
      <p className="p-2" style={{ marginTop: "25px" }}>
        Số từ: {number !== 0 ? number : ""}{" "}
      </p>
    </div>
  );
}
export default Findstring;

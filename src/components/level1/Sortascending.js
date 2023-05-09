import { useState } from "react";
import { Link } from "react-router-dom";
function Sortascending() {
  const [string, setString] = useState("");
  const [arrSort, setArrSort] = useState("");
  const handleChange = () => {
    let arr = string.split(" ");
    setArrSort(arr.sort((a, b) => a - b).join(" "));
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
        Đề bài : Write a program that takes a list of numbers as input and sorts
        the list in ascending order.{" "}
      </p>
      <p className="p-2">Nhập vào dãy số : </p>
      <input
        className="outline-0 border-solid border-2 border-stone-400 rounded p-1"
        type="text"
        style={{ width: "25vw" }}
        placeholder="Nhập vào dãy số cách nhau bằng một dấu cách"
        onChange={(e) => setString(e.target.value)}
      />
      <button className="bg-cyan-400 rounded ml-2 p-1.5" onClick={handleChange}>
        Sắp xếp dãy số tăng dần
      </button>
      <p className="p-2" style={{ marginTop: "25px" }}>
        Dãy số: {arrSort}{" "}
      </p>
    </div>
  );
}
export default Sortascending;

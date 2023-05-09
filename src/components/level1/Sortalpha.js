import { useState } from "react";
import { Link } from "react-router-dom";
function Sortalpha() {
  const [string, setString] = useState("");
  const [stringSort, setStringSort] = useState("");
  const handleChange = () => {
    let arr = string.split(" ");

    setStringSort(arr.sort().join(" "));
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
        Đề bài : Write a program that takes a list of strings as input and sorts
        the list in alphabetical order.{" "}
      </p>
      <p className="p-2">Nhập vào dãy số : </p>
      <input
        type="text"
        style={{ width: "25vw" }}
        className="outline-0 border-solid border-2 border-stone-400 rounded p-1"
        placeholder="Nhập vào chuỗi cách nhau bằng một dấu cách"
        onChange={(e) => setString(e.target.value)}
      />
      <button className="bg-cyan-400 rounded ml-2 p-1.5" onClick={handleChange}>
        Sắp xếp chuỗi số
      </button>
      <p className="p-2" style={{ marginTop: "25px" }}>
        Chuỗi số: {stringSort}{" "}
      </p>
    </div>
  );
}
export default Sortalpha;

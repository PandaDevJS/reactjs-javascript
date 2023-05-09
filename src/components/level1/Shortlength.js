import { Link } from "react-router-dom";
import { useState } from "react";
function Shortlength() {
  const [string, setString] = useState("");
  const [shorest, setShorest] = useState("");

  const handleChange = () => {
    let arr = string.split(" ");
    let short = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i].length < short.length) {
        short = arr[i];
      }
    }
    return setShorest(short);
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
        displays the shortest string in the list.
      </p>
      <p className="p-2">Nhập vào chuỗi : </p>
      <input
        className="outline-0 border-solid border-2 border-stone-400 rounded p-1"
        type="text"
        style={{ width: "50vw" }}
        placeholder="Nhập vào danh sách chuỗi cách nhau bằng một dấu cách"
        onChange={(e) => setString(e.target.value)}
      />

      <button className="bg-cyan-400 rounded ml-2 p-2" onClick={handleChange}>
        Tìm ký tự ngắn nhất{" "}
      </button>
      <p className="p-2">Chuỗi ký tự: {string} </p>
      <p className="p-2"> Ký tự ngắn nhất: {shorest} </p>
    </div>
  );
}
export default Shortlength;

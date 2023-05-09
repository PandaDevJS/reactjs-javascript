import { useState } from "react";
import { Link } from "react-router-dom";
function Numberstring() {
  const [string, setString] = useState("");
  const [length, setLength] = useState(0);
  const handleChange = () => {
    console.log(string);
    let arr = string.trim().split(" ");
    console.log(arr);
    setLength(arr.length);
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
        number of words in the string. ( tìm số từ trong một chuỗi, VD: “Hello
        world" kết quả : 2 ){" "}
      </p>
      <p className="p-2">Nhập vào chuỗi số : </p>
      <input
        type="text"
        style={{ width: "25vw" }}
        className="outline-0 border-solid border-2 border-stone-400 rounded p-1"
        placeholder="Nhập vào chuỗi cách nhau bằng một dấu cách"
        onChange={(e) => setString(e.target.value)}
      />
      <button className="bg-cyan-400 rounded ml-2 p-1.5" onClick={handleChange}>
        Tìm số từ trong chuỗi
      </button>
      <p className="p-2" style={{ marginTop: "25px" }}>
        Số từ: {length !== 0 ? length : ""}{" "}
      </p>
    </div>
  );
}
export default Numberstring;

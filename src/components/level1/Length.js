import { useState } from "react";
import { Link } from "react-router-dom";

function Length() {
  const [string, setString] = useState("");
  const handleChange = (e) => {
    setString(e.target.value);
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
      <h1>
        <Link className="text-2xl font-semibold" to="/">
          Home
        </Link>
      </h1>
      <p className="p-2">
        Đề bài : Write a program that takes a string as input and displays the
        length of the string.{" "}
      </p>
      <p className="p-2">Nhập vào chuỗi : </p>
      <input
        className="outline-0 border-solid border-2 border-stone-400 rounded p-1"
        type="text"
        onChange={(e) => handleChange(e)}
      />

      <p className="p-2"> Độ dài của chuỗi là : {string.trim().length} </p>
    </div>
  );
}
export default Length;

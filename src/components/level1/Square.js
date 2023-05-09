import { useState } from "react";
import { Link } from "react-router-dom";

function Square() {
  const [number, setNumber] = useState(0);
  const handleChange = (e) => {
    setNumber(e.target.value);
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
      <p>
        Đề bài : Write a program that takes a number as input and displays its
        square. ( Tính bình phương )
      </p>
      <p className="p-2">Nhập vào số cần tình bình phương : </p>

      <input
        className="outline-0 border-solid border-2 border-stone-400 rounded p-1"
        type="text"
        onChange={(e) => handleChange(e)}
      />

      <p className="p-2">
        Bình phương của số {number !== 0 ? number : " "} là :{" "}
        {Math.pow(number, 2) !== 0 ? Math.pow(number, 2) : ""}
      </p>
    </div>
  );
}
export default Square;

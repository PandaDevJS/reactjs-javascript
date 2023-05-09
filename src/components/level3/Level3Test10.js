import { Link } from "react-router-dom";
import { useState } from "react";
function Level3Test10() {
  const [string, setString] = useState([]);
  const [result, setResult] = useState("");
  const handleChange = () => {
    let arr = JSON.parse(string);
    let newArr = [];
    newArr = arr.sort((a, b) => a.length - b.length);

    setResult(newArr);
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
        returns the list sorted by the number of distinct characters in each
        string, with the shortest strings appearing first.
        <br />
        VD: ["apple", "banana", "orange", "kiwi", "strawberry"] kết quả ["kiwi",
        "apple", "orange", "banana", "strawberry"]
      </p>
      <p className="p-2">Nhập vào chuỗi : </p>
      <input
        type="text"
        style={{ width: "25vw" }}
        className="outline-0 border-solid border-2 border-stone-400 rounded p-1"
        placeholder="Nhập vào dãy số cách nhau bằng một dấu cách"
        onChange={(e) => setString(e.target.value)}
      />
      <button className="bg-cyan-400 rounded ml-2 p-1.5" onClick={handleChange}>
        Tìm chuỗi
      </button>
      <p className="p-2" style={{ marginTop: "25px" }}>
        Kết quả : {result !== "" ? JSON.stringify(result) : ""}
      </p>
    </div>
  );
}
export default Level3Test10;

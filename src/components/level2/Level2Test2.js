import { Link } from "react-router-dom";
import { useState } from "react";
function Level2Test2() {
  const [string, setString] = useState("");
  const [word, setWord] = useState("");
  const handleChange = () => {
    let arr = string.trim().split(" ");
    let longStr = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i].length > longStr.length) {
        longStr = arr[i];
      }
    }
    setWord(longStr);
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
        Để bào : Write a program that takes a list of strings as input and
        returns the longest word in the list.
      </p>
      <p className="p-2">Nhập vào chuỗi: </p>
      <input
        type="text"
        style={{ width: "25vw" }}
        className="outline-0 border-solid border-2 border-stone-400 rounded p-1"
        placeholder="Nhập vào chuỗi cách nhau bằng một dấu cách"
        onChange={(e) => setString(e.target.value)}
      />
      <button className="bg-cyan-400 rounded ml-2 p-1.5" onClick={handleChange}>
        Tìm từ dài nhất
      </button>
      <p className="p-2" style={{ marginTop: "25px" }}>
        Kết quả: {word}{" "}
      </p>
    </div>
  );
}
export default Level2Test2;

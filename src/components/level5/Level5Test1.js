import { Link } from "react-router-dom";
import { useState } from "react";
function Level5Test1() {
  const [string, setString] = useState("");
  const [result, setResult] = useState("");
  const handleChange = () => {
    let arr = JSON.parse(string);
    let newArr = [];
    arr.forEach((item) => {
      newArr.unshift(item);
    });
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
        Đề bài : Reverses: Cho đầu vào là 1 mảng, Viết một function để đảo ngược
        thứ tự phần tử trong mảng , yêu cầu không dùng hàm Reverses có sẵn của
        javascript ( dùng forEach hoặc reduce ){" "}
      </p>
      <p className="p-2">Nhập vào chuỗi : </p>
      <input
        type="text"
        style={{ width: "25vw" }}
        className="outline-0 border-solid border-2 border-stone-400 rounded p-1"
        placeholder="Nhập vào mảng"
        onChange={(e) => setString(e.target.value)}
      />
      <button className="bg-cyan-400 rounded ml-2 p-1.5" onClick={handleChange}>
        Đảo ngược
      </button>
      <p className="p-2" style={{ marginTop: "25px" }}>
        Kết quả: {result !== "" ? JSON.stringify(result) : " "}{" "}
      </p>
    </div>
  );
}
export default Level5Test1;

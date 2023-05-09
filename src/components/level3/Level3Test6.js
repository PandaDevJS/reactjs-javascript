import { Link } from "react-router-dom";
import { useState } from "react";
function Level3Test6() {
  const [string1, setString1] = useState("");
  const [string2, setString2] = useState("");
  const [result, setResult] = useState("");
  const handleChange = () => {
    let arr1 = string1.trim().split(" ");
    let arr2 = string2.trim().split(" ");
    let newArr = arr1.concat(arr2).sort((a, b) => a - b);
    let n = newArr.length;
    let median;
    if (n % 2 === 0) {
      let m = n / 2;
      median = (Number(newArr[m - 1]) + Number(newArr[m])) / 2;
    } else {
      let m = Math.floor(n / 2);
      median = newArr[m];
    }
    setResult(median);
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
        Đề bài : Write a program that takes two lists of integers as input and
        returns the median of the combined list.{" "}
      </p>
      <p className="p-2">Nhập dãy chuỗi số : </p>
      <div class="p-2">
        <label>Chuỗi số 1 </label>
        <input
          type="text"
          style={{ width: "25vw" }}
          className="outline-0 border-solid border-2 border-stone-400 rounded p-1"
          placeholder="Nhập vào dãy số cách nhau bằng một dấu cách"
          onChange={(e) => setString1(e.target.value)}
        />
      </div>

      <div class="p-2">
        <label>Chuỗi số 2 </label>
        <input
          type="text"
          style={{ width: "25vw" }}
          className="outline-0 border-solid border-2 border-stone-400 rounded p-1"
          placeholder="Nhập vào dãy số cách nhau bằng một dấu cách"
          onChange={(e) => setString2(e.target.value)}
        />
      </div>

      <button className="bg-cyan-400 rounded ml-2 p-1.5" onClick={handleChange}>
        Tìm số
      </button>
      <p className="p-2" style={{ marginTop: "25px" }}>
        Kết quả : {result}{" "}
      </p>
    </div>
  );
}
export default Level3Test6;

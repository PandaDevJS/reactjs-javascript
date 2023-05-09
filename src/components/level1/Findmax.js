import { useState } from "react";
import { Link } from "react-router-dom";
function Findmax() {
  const [string, setString] = useState("");
  const [largest, setLargest] = useState();
  const handleChange = () => {
    let arr = string.split(" ");
    let largest = Number(arr[0]);
    for (let i = 1; i < arr.length; i++) {
      if (Number(arr[i]) > largest) {
        largest = arr[i];
      } else {
        continue;
      }
    }
    return setLargest(largest);
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
        Đề bài : Write a program that takes a list of numbers as input and
        displays the largest number in the list.{" "}
      </p>

      <p className="p-2">Nhập vào chuỗi số : </p>
      <input
        className="outline-0 border-solid border-2 border-stone-400 rounded p-1"
        type="text"
        onChange={(e) => setString(e.target.value)}
      />
      <button
        style={{ height: "36px", width: "10%" }}
        className="ml-2 bg-emerald-600 rounded "
        onClick={handleChange}
      >
        Tìm số lớn nhất
      </button>

      <p className="p-2">Chuỗi số : {string} </p>
      <p className="p-2">Số lớn nhất là : {largest}</p>
    </div>
  );
}
export default Findmax;

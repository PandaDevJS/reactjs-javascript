import { Link } from "react-router-dom";
import { useState } from "react";
function Level4Test1() {
  const [string, setString] = useState("");
  const [result, setResult] = useState("");
  const handleChange = () => {
    let arr = string.trim().split(" ");
    let sortTimes = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          var location = arr[i];
          arr[i] = arr[j];
          arr[j] = location;
          sortTimes++;
        }
      }
    }

    setResult(sortTimes);
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
        Đề bài : Write a program that takes a list of integers as input and
        returns the minimum number of moves required to sort the list in
        ascending order using bubble sort. Đầu vào 1 dãy số bất kỳ Đầu ra là số
        lần lặp để hoàn thành việc sắp xếp nổi bọt <br />
        Gợi ý: Tìm hiểu về sắp xếp nổi bọt ( bubble sort ). Tìm số lần sắp xếp
        nổi bọt cần để hoàn thành việc sắp xếp với mảng đầu vào <br /> VD: [3,
        1, 4, 2, 6, 5] cần 4 lần sắp xếp để hoàn thành{" "}
      </p>
      <p className="p-2">Nhập vào dãy số : </p>
      <input
        type="text"
        style={{ width: "25vw" }}
        className="outline-0 border-solid border-2 border-stone-400 rounded p-1"
        placeholder="Nhập vào dãy số cách nhau bằng một dấu cách"
        onChange={(e) => setString(e.target.value)}
      />
      <button className="bg-cyan-400 rounded ml-2 p-1.5" onClick={handleChange}>
        Tìm số
      </button>
      <p className="p-2" style={{ marginTop: "25px" }}>
        Kết quả : {result}{" "}
      </p>
    </div>
  );
}
export default Level4Test1;

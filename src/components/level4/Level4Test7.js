import { Link } from "react-router-dom";
import { useState } from "react";
function Level4Test7() {
  const [string, setString] = useState([]);
  const [result, setResult] = useState("");
  const handleChange = () => {
    let arr = JSON.parse(string);
    let m = arr.length;
    for (let i = 0; i < m; i++) {
      for (let j = i + 1; j < m; j++) {
        if (arr[i].length < arr[j].length) {
          let location = arr[i];
          arr[i] = arr[j];
          arr[j] = location;
        }
        if (arr[i].length === arr[j].length) {
          if (arr[i].localeCompare(arr[j]) > 0) {
            let location1 = arr[i];
            arr[i] = arr[j];
            arr[j] = location1;
          }
        }
      }
    }

    setResult(arr);
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
        returns the list sorted by the number of distinct words in each string,
        with the longest strings appearing first.
        <br /> Sắp xếp từ chuỗi dài nhất đến ngắn nhất, trong trường hợp có 2
        chuỗi cùng độ dài thì sắp xếp theo thứ tự bảng chữ cái Ví dụ: ["the
        quick brown fox", "the lazy dog jumps over the fence", "the cat in the
        hat"] Kết quả: ["the lazy dog jumps over the fence", "the quick brown
        fox", "the cat in the hat"]
      </p>
      <p className="p-2">Nhập vào chuỗi : </p>
      <input
        type="text"
        style={{ width: "25vw" }}
        placeholder="Nhập vào mảng"
        className="outline-0 border-solid border-2 border-stone-400 rounded p-1"
        onChange={(e) => setString(e.target.value)}
      />
      <button className="bg-cyan-400 rounded ml-2 p-1.5" onClick={handleChange}>
        Sắp xếp chuỗi
      </button>
      <p className="p-2" style={{ marginTop: "25px" }}>
        Kết quả : {result !== "" ? JSON.stringify(result) : ""}
      </p>
    </div>
  );
}
export default Level4Test7;

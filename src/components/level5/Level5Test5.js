import { Link } from "react-router-dom";
import { useState } from "react";
function Level5Test5() {
  const [string, setString] = useState("");
  const [key, setKey] = useState("");
  const [result, setResult] = useState("");
  const handleChange = () => {
    let collect = JSON.parse(string);
    let obj = {};
    let arr = [];
    if (key === "a") {
      arr = [1, 2];
      arr.forEach((value) => {
        return (obj[value] = collect.filter(
          (current) => current[key] === value
        ));
      });
    } else if (key === "b") {
      arr = [2, 3];
      arr.forEach((value) => {
        return (obj[value] = collect.filter(
          (current) => current[key] === value
        ));
      });
    }

    setResult(obj);
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
        Đề bài : Group by: Cho đầu vào là 1 collection ( array of object ), Viết
        một function để trả ra 1 OBJECT mới chứa dữ liệu được group theo trường
        chỉ định.
        <br /> const collect ={" "}
        {
          '[{"a": 1, "b": 2}, {"a": 1, "b": 3}, {"a": 2, "b": 2}]; groupBy(collect, "a"); kết quả:  output {1: [{"a": 1, "b": 2}, {"a": 1, "b": 3}], 2: [{"a": 2, "b": 5}]}'
        }
      </p>

      <div class="p-2">
        <p className="p-2">Nhập collection: </p>
        <input
          type="text"
          style={{ width: "25vw" }}
          className="outline-0 border-solid border-2 border-stone-400 rounded p-1"
          onChange={(e) => setString(e.target.value)}
        />
      </div>
      <div class="p-2">
        <p className="p-2">Nhập key : </p>
        <input
          type="text"
          style={{ width: "25vw" }}
          className="outline-0 border-solid border-2 border-stone-400 rounded p-1"
          onChange={(e) => setKey(e.target.value)}
        />
      </div>

      <button className="bg-cyan-400 rounded ml-2 p-1.5" onClick={handleChange}>
        Tạo Objecj
      </button>
      <p className="p-2" style={{ marginTop: "25px" }}>
        Kết quả: {result !== "" ? JSON.stringify(result) : ""}
      </p>
    </div>
  );
}
export default Level5Test5;

// [{"a": 1, "b": 2}, {"a": 1, "b": 3}, {"a": 2, "b": 2}]

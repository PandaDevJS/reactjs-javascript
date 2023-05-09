import { Link } from "react-router-dom";
import { useState } from "react";
function Level2Test5() {
  const [string, setString] = useState([]);
  const [key, setKey] = useState([]);
  const [result, setResult] = useState("");
  const handleChange = () => {
    let order = JSON.parse(key);
    let array = JSON.parse(string);
    console.log(order);
    console.log(array);

    let newArr = array.map((obj) => {
      const newObj = {};
      order.forEach((key) => {
        newObj[key] = obj[key];
      });
      return newObj;
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
        Đề bài : MapKey: Cho 1 mảng các key, vào 1 mảng các object , Viết một
        function để trả ra một mảng các object theo thứ tự mảng các key. ( Yêu
        cầu dùng hàm map )
        <br /> Ví dụ keys = ["b", "a", "c"]
        <br />
        collections ={" "}
        {
          '[{"a": 1, "b": 1, "c": 2, "d": 4, "e": 5}, {"a": 2, "b":1, "c": 5, "d": 4, "e": 5}, {"d": 4, "e": 5, "a": 22, "b":11, "c": 51}]'
        }
        <br /> Kết quả
        {
          '[{"b": 1, "a": 1, "c": 2}, {"b": 1, "a": 2, "c": 5}, {"b": 11, "a": 22, "c": 51}]'
        }
      </p>
      <div className="p-2">
        <p className="p-2">Nhập Collection : </p>
        <input
          type="text"
          style={{ width: "25vw" }}
          placeholder="Nhập vào collection"
          className="outline-0 border-solid border-2 border-stone-400 rounded p-1"
          onChange={(e) => setString(e.target.value)}
        />
      </div>
      <div className="p-2">
        <p className="p-2">Nhập key : </p>
        <input
          type="text"
          style={{ width: "25vw" }}
          placeholder="Nhập vào key "
          className="outline-0 border-solid border-2 border-stone-400 rounded p-1"
          onChange={(e) => setKey(e.target.value)}
        />
      </div>
      <button className="bg-cyan-400 rounded ml-2 p-1.5" onClick={handleChange}>
        Tìm số từ chứa ký tự 'a'
      </button>
      <p className="p-2" style={{ marginTop: "25px" }}>
        Object: {result !== "" ? JSON.stringify(result) : ""}
      </p>
    </div>
  );
}
export default Level2Test5;

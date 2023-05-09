import { Link } from "react-router-dom";
import { useState } from "react";
function Level2Test5() {
  const [string, setString] = useState("");
  const [result, setResult] = useState("");
  const handleChange = () => {
    let newStr = string.trim().split(" ");
    let strTrim = "";
    strTrim = newStr.filter((value) => {
      return value !== "";
    });
    setResult(strTrim.join(" "));
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
        Đề bài : TrimAll: Viết function loại bỏ tất cả khoảng trắng đầu và cuối
        của một chuỗi bất kỳ, nếu có khoảng trắng ở giữa chuỗi đó thì chỉ giữ
        lại một khoảng trắng.
        <br />
        VD: " hello world " kết quả "hello world"
      </p>
      <p className="p-2">Nhập vào chuỗi : </p>
      <input
        type="text"
        style={{ width: "25vw" }}
        placeholder="Nhập vào chuỗi cách nhau bằng một dấu cách"
        className="outline-0 border-solid border-2 border-stone-400 rounded p-1"
        onChange={(e) => setString(e.target.value)}
      />
      <button className="bg-cyan-400 rounded ml-2 p-1.5" onClick={handleChange}>
        Loại bỏ khoảng trắng
      </button>
      <p className="p-2" style={{ marginTop: "25px" }}>
        Kết quả : {result}{" "}
      </p>
    </div>
  );
}
export default Level2Test5;

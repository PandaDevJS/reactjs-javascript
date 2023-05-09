import { Link } from "react-router-dom";
import { useState } from "react";
function Level5Test3() {
  const [string, setString] = useState("");
  const [result, setResult] = useState("");
  const handleChange = () => {
    let arr = JSON.parse(string);
    const unique = arr.filter((value, index, selfArr) => {
      return selfArr.indexOf(value) === index;
    });
    setResult(unique);
  };
  console.log(result);
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
        Đề bài : Uniq: Cho một mảng đầu vào, viết một function để loại bỏ các
        phần tử bị lặp trong mảng.
        <br /> VD : [1, 2, 3, 2, 4] 👉 [1, 2, 3, 4]
      </p>
      <p className="p-2">Nhập dãy chuỗi số : </p>
      <input
        type="text"
        style={{ width: "25vw" }}
        className="outline-0 border-solid border-2 border-stone-400 rounded p-1"
        placeholder="Nhập vào mảng"
        onChange={(e) => setString(e.target.value)}
      />
      <button className="bg-cyan-400 rounded ml-2 p-1.5" onClick={handleChange}>
        Loại bỏ phần tử lặp
      </button>
      <p className="p-2" style={{ marginTop: "25px" }}>
        Kết quả :{result !== "" ? JSON.stringify(result) : ""}
      </p>
    </div>
  );
}
export default Level5Test3;

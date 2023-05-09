import { Link } from "react-router-dom";
import { useState } from "react";
function Level5Test4() {
  const [string, setString] = useState("");
  const [result, setResult] = useState("");
  const handleChange = () => {
    let array = JSON.parse(string);
    const unique = array.filter(
      (value, index, self) =>
        self.findIndex((m) => m.x === value.x && m.y === value.y) === index
    );
    setResult(unique);
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
        Đề bài : Uniq ArrayObject: Giống Uniq nhưng mở rộng cho 1 collection,
        loại bỏ nhưng phần tử trùng nhau. <br />
        Ví dụ: {
          '[{ "x": 1, "y": 2 }, { "x": 2, "y": 1 }, { "x": 1, "y": 2 }]'
        }{" "}
        kết quả {'[{ "x": 1, "y": 2 }, { "x": 2, "y": 1 }]'}
      </p>
      <p className="p-2">Nhập vào Collection : </p>
      <input
        type="text"
        style={{ width: "25vw" }}
        placeholder="Nhập vào collection"
        className="outline-0 border-solid border-2 border-stone-400 rounded p-1"
        onChange={(e) => setString(e.target.value)}
      />

      <button className="bg-cyan-400 rounded ml-2 p-1.5" onClick={handleChange}>
        Loại bỏ phần thử lặp
      </button>
      <p className="p-2" style={{ marginTop: "25px" }}>
        Kết quả : {result !== "" ? JSON.stringify(result) : " "}
      </p>
    </div>
  );
}
export default Level5Test4;

// [{ "x": 1, "y": 2 }, { "x": 2, "y": 1 }, { "x": 1, "y": 2 }]

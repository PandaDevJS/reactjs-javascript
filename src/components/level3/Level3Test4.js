import { Link } from "react-router-dom";
import { useState } from "react";
function Level3Test4() {
  const [string, setString] = useState("");
  const [result, setResult] = useState(null);
  const handleChange = () => {
    let arr = string.trim().split(" ");
    var maxOverlap = 0;
    var twoStringMaxOverlap = "";
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        var overlap = 0;
        for (let k = 0; k < arr[i].length; k++) {
          if (arr[j].includes(arr[i][k])) {
            overlap++;
          }
        }
        if (overlap > maxOverlap) {
          maxOverlap = overlap;
          twoStringMaxOverlap = [arr[i], arr[j]];
        }
      }
    }

    setResult(twoStringMaxOverlap.join(", "));
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
        returns the two strings with the largest overlap of characters.
        <br /> Tìm 2 chuỗi có nhiều số ký tự trùng nhau nhất. <br /> VD:
        ["abcdefg", "cdefghijklm", "ghijklmnopqr"] 👉 ["abcdefg", "cdefghijklm"]
      </p>
      <p className="p-2">Nhập vào chuỗi : </p>
      <input
        type="text"
        style={{ width: "25vw" }}
        className="outline-0 border-solid border-2 border-stone-400 rounded p-1"
        placeholder="Nhập vào dãy số cách nhau bằng một dấu cách"
        onChange={(e) => setString(e.target.value)}
      />
      <button className="bg-cyan-400 rounded ml-2 p-1.5" onClick={handleChange}>
        Tìm ký tự trùng nhau{" "}
      </button>
      <p className="p-2" style={{ marginTop: "25px" }}>
        Kết quả : {result}
      </p>
    </div>
  );
}
export default Level3Test4;

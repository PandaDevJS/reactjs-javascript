import { Link } from "react-router-dom";
import { useState } from "react";
function Level2Test3() {
  const [string, setString] = useState([]);
  const [common, setCommon] = useState("");
  const handleChange = () => {
    let arr = string.trim().split(" ");
    let commonChars = "";
    let str1 = arr[0];
    console.log(str1);
    let str2 = arr[1];
    console.log(str2);

    var m = str1.length;
    var n = str2.length;
    var longest = 0;
    var endIndex = 0;
    var matrix = Array(m + 1)
      .fill(null)
      .map(() => Array(n + 1).fill(0));
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (str1[i - 1] === str2[j - 1]) {
          matrix[i][j] = matrix[i - 1][j - 1] + 1;
          if (matrix[i][j] > longest) {
            longest = matrix[i][j];
            endIndex = i - 1;
          }
        } else {
          matrix[i][j] = 0;
        }
      }
    }
    commonChars = str1.substring(endIndex - longest + 1, endIndex + 1);
    console.log(commonChars);
    setCommon(commonChars);
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
        Đề bài : Write a program that takes two strings as input and returns the
        longest common subsequence of the two strings.
        <br /> VD: đầu vào [“abcdef", “abczyzcdef”] kết quả : “cdef"{" "}
      </p>
      <p className="p-2">Nhập vào chuỗi : </p>
      <input
        type="text"
        style={{ width: "25vw" }}
        className="outline-0 border-solid border-2 border-stone-400 rounded p-1"
        placeholder="Nhập vào chuỗi cách nhau bằng một dấu cách"
        onChange={(e) => setString(e.target.value)}
      />
      <button className="bg-cyan-400 rounded ml-2 p-1.5" onClick={handleChange}>
        Tìm số từ trùng nhau
      </button>
      <p className="p-2" style={{ marginTop: "25px" }}>
        Kết quả : {common}{" "}
      </p>
    </div>
  );
}
export default Level2Test3;

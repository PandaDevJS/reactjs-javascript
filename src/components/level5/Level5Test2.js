import { Link } from "react-router-dom";
import { useState } from "react";
function Level5Test2() {
  const [string, setString] = useState("");
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");
  const handleChange = () => {
    let arr = JSON.parse(string);
    let perChunk = Number(number);
    const chunk = arr.reduce((resultArray, item, index) => {
      const chunkIndex = Math.floor(index / perChunk);

      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = [];
      }

      resultArray[chunkIndex].push(item);

      return resultArray;
    }, []);

    setResult(chunk);
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
      <p>
        {" "}
        Chunk: Cho một mảng đầu vào, viết một function để chia đều mảng theo số
        phần chỉ định.
        <br />
        VD: ["a", "b", "c", "d"] chunk (['a', 'b', 'c', 'd'], 2); 👉 [['a',
        'b'], ['c', 'd']]
      </p>
      <div class="p-2">
        <p>Nhập vào chuỗi : </p>
        <input
          type="text"
          style={{ width: "25vw" }}
          className="outline-0 border-solid border-2 border-stone-400 rounded p-1"
          placeholder="Nhập vào dãy số cách nhau bằng một dấu cách "
          onChange={(e) => setString(e.target.value)}
        />
      </div>

      <div class="p-2">
        <p>Nhập vào số</p>
        <input
          type="text"
          style={{ width: "25vw" }}
          className="outline-0 border-solid border-2 border-stone-400 rounded p-1"
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <button className="bg-cyan-400 rounded ml-2 p-1.5" onClick={handleChange}>
        Chunk
      </button>
      <p style={{ marginTop: "25px" }}>
        Kết quả: {result !== "" ? JSON.stringify(result) : ""}{" "}
      </p>
    </div>
  );
}
export default Level5Test2;

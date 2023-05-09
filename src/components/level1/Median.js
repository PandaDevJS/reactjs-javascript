import { useState } from "react";
import { Link } from "react-router-dom";
function Median() {
  const [input, setInput] = useState("");
  const [median, setMedian] = useState();
  const handleChange = () => {
    let arr = input.split(" ");
    let newArr = arr.sort((a, b) => a - b);
    console.log(newArr);
    let n = newArr.length;
    let med;
    if (n % 2 === 0) {
      let m = n / 2;
      console.log(m);
      console.log(newArr[m - 1]);
      console.log(newArr[m]);
      med = (Number(newArr[m - 1]) + Number(newArr[m])) / 2;
      console.log(med);
    } else {
      let m = Math.floor(n / 2);
      med = newArr[m];
    }
    setMedian(med);
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
        Đề bài : Write a program that takes a list of numbers as input and
        returns the median of the numbers.( Tìm số trung vị ( số trung vị không
        phải số trung bình cộng )){" "}
      </p>
      <p className="p-2">Nhập vào dãy số : </p>
      <input
        type="text"
        style={{ width: "25vw" }}
        className="outline-0 border-solid border-2 border-stone-400 rounded p-1"
        placeholder="Nhập vào dãy số cách nhau bằng một dấu cách"
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="bg-cyan-400 rounded ml-2 p-1.5" onClick={handleChange}>
        Tìm số trung vị
      </button>
      <p className="p-2" style={{ marginTop: "25px" }}>
        Số trung vị: {median}{" "}
      </p>
    </div>
  );
}
export default Median;

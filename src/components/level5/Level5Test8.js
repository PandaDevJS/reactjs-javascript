import { Link } from "react-router-dom";
import { useState } from "react";
function Level2Test5() {
  const [list, setList] = useState([
    { id: 10, order: 0 },
    { id: 12, order: 1 },
    { id: 9, order: 2 },
    { id: 11, order: 3 },
  ]);
  const [id, setId] = useState("");

  const [newOrder, setNewOrder] = useState("");
  const handleChange = () => {
    let indexFrom = list.findIndex((obj) => obj.id === Number(id));
    let indexTo = list.findIndex((obj) => obj.order === Number(newOrder));
    let objFrom = list[indexFrom];
    let objTo = list[indexTo];
    list.splice(indexTo, 1, objFrom);
    list.splice(indexFrom, 1, objTo);
    list.forEach((obj, i) => {
      obj.order = i;
    });
    setList([...list]);
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
      <p>
        Đề bài : Switch Order: Viết function để thay đổi thứ tự order của các
        object.
        <br /> VD arr ={" "}
        {
          '[{"id" : 10, "order": 0}, {"id" : 12, "order": 1}, {"id" : 9, "order": 2}, {"id" : 11, "order": 3}]'
        }
        switchOrder(9, 1) // ( chuyển object có id bằng 9 lên vị trí order = 1 )
        <br />
        Kết quả{" "}
        {
          '[{"id" : 10, "order": 0}, {"id" : 9, "order": 1}, {"id" : 12, "order": 2}, {"id" : 11, "order": 3}]'
        }
      </p>
      <p className="p-2">Thay đổi vị trí order : </p>
      <div class="p-2">
        <label>ID</label>
        <br />
        <input
          type="text"
          style={{ width: "25vw" }}
          placeholder="Nhập vào ID cần thay đổi"
          className="outline-0 border-solid border-2 border-stone-400 rounded p-1"
          onChange={(e) => setId(e.target.value)}
        />
      </div>

      <div class="p-2">
        <label>Order</label>
        <br />
        <input
          type="text"
          style={{ width: "25vw" }}
          placeholder="Nhập vào vị trí Order"
          className="outline-0 border-solid border-2 border-stone-400 rounded p-1"
          onChange={(e) => setNewOrder(e.target.value)}
        />
      </div>

      <button className="bg-cyan-400 rounded ml-2 p-1.5" onClick={handleChange}>
        Thay đổi vị trí
      </button>
      <h3 className="p-2">List Order : </h3>
      {list.map((item, index) => {
        return (
          <p key={index}>
            {" "}
            Order : {item.order} <span> ID : {item.id} </span>
          </p>
        );
      })}
    </div>
  );
}
export default Level2Test5;

import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="p-10" style={{ paddingTop: "50px", textAlign: "center" }}>
      <h1
        style={{ color: "red" }}
        className="text-center text-2xl py-10 font-semibold rounded-lg bg-stone-300 "
      >
        Hello Javascript
      </h1>
      <div class="flex flex-row flex-wrap pt-10">
        <div className="basis-full sm:basis-1/2 lg:basis-1/5 px-10 mb-10">
          <h2 className="py-5 text-lg bg-neutral-500 rounded-lg text-white  text-lg bg-neutral-500 rounded-lg text-white font-semibold mb-2">
            Level 1
          </h2>
          <Link
            className="py-3 bg-stone-200 rounded-lg hover:bg-stone-300"
            to="/sum"
            style={{ display: "block", marginTop: "5px" }}
          >
            Bài 1
          </Link>
          <Link
            className="py-3 bg-stone-200 rounded-lg hover:bg-stone-300"
            to="/length"
            style={{ display: "block", marginTop: "5px" }}
          >
            Bài 2
          </Link>
          <Link
            className="py-3 bg-stone-200 rounded-lg hover:bg-stone-300"
            to="/square"
            style={{ display: "block", marginTop: "5px" }}
          >
            Bài 3
          </Link>
          <Link
            className="py-3 bg-stone-200 rounded-lg hover:bg-stone-300"
            to="/findmax"
            style={{ display: "block", marginTop: "5px" }}
          >
            Bài 4
          </Link>
          <Link
            className="py-3 bg-stone-200 rounded-lg hover:bg-stone-300"
            to="/shortlength"
            style={{ display: "block", marginTop: "5px" }}
          >
            Bài 5
          </Link>
          <Link
            className="py-3 bg-stone-200 rounded-lg hover:bg-stone-300"
            to="/sortascending"
            style={{ display: "block", marginTop: "5px" }}
          >
            Bài 6
          </Link>
          <Link
            className="py-3 bg-stone-200 rounded-lg hover:bg-stone-300"
            to="/sortalpha"
            style={{ display: "block", marginTop: "5px" }}
          >
            Bài 7
          </Link>
          <Link
            className="py-3 bg-stone-200 rounded-lg hover:bg-stone-300"
            to="/median"
            style={{ display: "block", marginTop: "5px" }}
          >
            Bài 8
          </Link>
          <Link
            className="py-3 bg-stone-200 rounded-lg hover:bg-stone-300"
            to="/numberstring"
            style={{ display: "block", marginTop: "5px" }}
          >
            Bài 9
          </Link>
          <Link
            className="py-3 bg-stone-200 rounded-lg hover:bg-stone-300"
            to="/findstring"
            style={{ display: "block", marginTop: "5px" }}
          >
            Bài 10
          </Link>
        </div>
        <div className="basis-full sm:basis-1/2 lg:basis-1/5 px-10 mb-10 ">
          <h2 className="py-5 text-lg bg-slate-500 rounded-lg text-white font-semibold mb-2">
            Level 2
          </h2>
          <Link
            className="py-3 bg-slate-200 rounded-lg hover:bg-slate-300"
            to="/level2_1"
            style={{ display: "block", marginTop: "5px" }}
          >
            Bài 1
          </Link>
          <Link
            className="py-3 bg-slate-200 rounded-lg hover:bg-slate-300"
            to="/level2_2"
            style={{ display: "block", marginTop: "5px" }}
          >
            Bài 2
          </Link>
          <Link
            className="py-3 bg-slate-200 rounded-lg hover:bg-slate-300"
            to="/level2_3"
            style={{ display: "block", marginTop: "5px" }}
          >
            Bài 3
          </Link>
          <Link
            className="py-3 bg-slate-200 rounded-lg hover:bg-slate-300"
            to="/level2_4"
            style={{ display: "block", marginTop: "5px" }}
          >
            Bài 4
          </Link>
          <Link
            className="py-3 bg-slate-200 rounded-lg hover:bg-slate-300"
            to="/level2_5"
            style={{ display: "block", marginTop: "5px" }}
          >
            Bài 5
          </Link>
        </div>
        <div className="basis-full sm:basis-1/2 lg:basis-1/5 px-10 mb-10">
          <h2 className="py-5 text-lg bg-gray-500 rounded-lg text-white text-lg font-semibold mb-2">
            Level 3
          </h2>
          <Link
            className="py-3 bg-gray-200 rounded-lg hover:bg-gray-300 "
            to="/level3_1"
            style={{ display: "block", marginTop: "5px" }}
          >
            Bài 1
          </Link>
          <Link
            className="py-3 bg-gray-200 rounded-lg hover:bg-gray-300 "
            to="/level3_2"
            style={{ display: "block", marginTop: "5px" }}
          >
            Bài 2
          </Link>
          <Link
            className="py-3 bg-gray-200 rounded-lg hover:bg-gray-300 "
            to="/level3_3"
            style={{ display: "block", marginTop: "5px" }}
          >
            Bài 3
          </Link>
          <Link
            className="py-3 bg-gray-200 rounded-lg hover:bg-gray-300 "
            to="/level3_4"
            style={{ display: "block", marginTop: "5px" }}
          >
            Bài 4
          </Link>
          <Link
            className="py-3 bg-gray-200 rounded-lg hover:bg-gray-300 "
            to="/level3_5"
            style={{ display: "block", marginTop: "5px" }}
          >
            Bài 5
          </Link>
          <Link
            className="py-3 bg-gray-200 rounded-lg hover:bg-gray-300 "
            to="/level3_6"
            style={{ display: "block", marginTop: "5px" }}
          >
            Bài 6
          </Link>
          <Link
            className="py-3 bg-gray-200 rounded-lg hover:bg-gray-300 "
            to="/level3_7"
            style={{ display: "block", marginTop: "5px" }}
          >
            Bài 7
          </Link>
          <Link
            className="py-3 bg-gray-200 rounded-lg hover:bg-gray-300 "
            to="/level3_10"
            style={{ display: "block", marginTop: "5px" }}
          >
            Bài 10
          </Link>
        </div>
        <div className="basis-full sm:basis-1/2 lg:basis-1/5 px-10 mb-10">
          <h2 className="py-5 text-lg bg-amber-500 rounded-lg text-white font-semibold mb-2">
            Level 4
          </h2>
          <Link
            className="py-3 bg-amber-200 rounded-lg hover:bg-amber-300 "
            to="/level4_1"
            style={{ display: "block", marginTop: "5px" }}
          >
            Bài 1
          </Link>
          <Link
            className="py-3 bg-amber-200 rounded-lg hover:bg-amber-300"
            to="/level4_2"
            style={{ display: "block", marginTop: "5px" }}
          >
            Bài 2
          </Link>
          <Link
            className="py-3 bg-amber-200 rounded-lg hover:bg-amber-300"
            to="/level4_3"
            style={{ display: "block", marginTop: "5px" }}
          >
            Bài 3
          </Link>
          <Link
            className="py-3 bg-amber-200 rounded-lg hover:bg-amber-300"
            to="/level4_6"
            style={{ display: "block", marginTop: "5px" }}
          >
            Bài 6
          </Link>
          <Link
            className="py-3 bg-amber-200 rounded-lg hover:bg-amber-300"
            to="/level4_7"
            style={{ display: "block", marginTop: "5px" }}
          >
            Bài 7
          </Link>
          <Link
            className="py-3 bg-amber-200 rounded-lg hover:bg-amber-300"
            to="/level4_9"
            style={{ display: "block", marginTop: "5px" }}
          >
            Bài 9
          </Link>
          <Link
            className="py-3 bg-amber-200 rounded-lg hover:bg-amber-300"
            to="/level4_10"
            style={{ display: "block", marginTop: "5px" }}
          >
            Bài 10
          </Link>
        </div>
        <div className="level5 basis-full sm:basis-1/2 lg:basis-1/5  px-10">
          <h2 className="py-5 text-lg bg-orange-500 rounded-lg text-white font-semibold mb-2 ">
            Level 5
          </h2>
          <Link
            className="py-3 bg-orange-200 rounded-lg hover:bg-orange-300"
            to="/level5_1"
            style={{ display: "block", marginTop: "5px" }}
          >
            Bài 1
          </Link>
          <Link
            className="py-3 bg-orange-200 rounded-lg hover:bg-orange-300"
            to="/level5_2"
            style={{ display: "block", marginTop: "5px" }}
          >
            Bài 2
          </Link>
          <Link
            className="py-3 bg-orange-200 rounded-lg hover:bg-orange-300"
            to="/level5_3"
            style={{ display: "block", marginTop: "5px" }}
          >
            Bài 3
          </Link>
          <Link
            className="py-3 bg-orange-200 rounded-lg hover:bg-orange-300"
            to="/level5_4"
            style={{ display: "block", marginTop: "5px" }}
          >
            Bài 4
          </Link>
          <Link
            className="py-3 bg-orange-200 rounded-lg hover:bg-orange-300"
            to="/level5_5"
            style={{ display: "block", marginTop: "5px" }}
          >
            Bài 5
          </Link>
          <Link
            className="py-3 bg-orange-200 rounded-lg hover:bg-orange-300"
            to="/level5_6"
            style={{ display: "block", marginTop: "5px" }}
          >
            Bài 6
          </Link>
          <Link
            className="py-3 bg-orange-200 rounded-lg hover:bg-orange-300"
            to="/level5_7"
            style={{ display: "block", marginTop: "5px" }}
          >
            Bài 7
          </Link>
          <Link
            className="py-3 bg-orange-200 rounded-lg hover:bg-orange-300"
            to="/level5_8"
            style={{ display: "block", marginTop: "5px" }}
          >
            Bài 8
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Home;

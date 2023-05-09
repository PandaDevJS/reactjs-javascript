import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
// Level1
import Sum from "./components/level1/Sum";
import Length from "./components/level1/Length";
import Square from "./components/level1/Square";
import Findmax from "./components/level1/Findmax";
import Shortlength from "./components/level1/Shortlength";
import Sortascending from "./components/level1/Sortascending";
import Sortalpha from "./components/level1/Sortalpha";
import Median from "./components/level1/Median";
import Numberstring from "./components/level1/Numberstring";
import Findstring from "./components/level1/Findstring";
//level2
import Level2Test1 from "./components/level2/Level2Test1";
import Level2Test2 from "./components/level2/Level2Test2";
import Level2Test3 from "./components/level2/Level2Test3";
import Level2Test4 from "./components/level2/Level2Test4";
import Level2Test5 from "./components/level2/Level2Test5";
import Level3Test1 from "./components/level3/Level3Test1";
import Level3Test2 from "./components/level3/Level3Test2";
import Level3Test3 from "./components/level3/Level3Test3";
import Level3Test4 from "./components/level3/Level3Test4";
import Level3Test5 from "./components/level3/Level3Test5";
import Level3Test6 from "./components/level3/Level3Test6";
import Level3Test7 from "./components/level3/Level3Test7";
import Level3Test10 from "./components/level3/Level3Test10";
//level4
import Level4Test1 from "./components/level4/Level4Test1";
import Level4Test2 from "./components/level4/Level4Test2";
import Level4Test3 from "./components/level4/Level4Test3";
import Level4Test6 from "./components/level4/Level4Test6";
import Level4Test7 from "./components/level4/Level4Test7";
import Level4Test9 from "./components/level4/Level4Test9";
import Level4Test10 from "./components/level4/Level4Test10";
//level5
import Level5Test1 from "./components/level5/Level5Test1";
import Level5Test2 from "./components/level5/Level5Test2";
import Level5Test3 from "./components/level5/Level5Test3";
import Level5Test4 from "./components/level5/Level5Test4";
import Level5Test5 from "./components/level5/Level5Test5";
import Level5Test6 from "./components/level5/Level5Test6";
import Level5Test7 from "./components/level5/Level5Test7";
import Level5Test8 from "./components/level5/Level5Test8";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sum" element={<Sum />} />
        <Route path="/length" element={<Length />} />
        <Route path="/square" element={<Square />} />
        <Route path="/findmax" element={<Findmax />} />
        <Route path="/shortlength" element={<Shortlength />} />
        <Route path="/sortascending" element={<Sortascending />} />
        <Route path="/sortalpha" element={<Sortalpha />} />
        <Route path="/median" element={<Median />} />
        <Route path="/numberstring" element={<Numberstring />} />
        <Route path="/findstring" element={<Findstring />} />
        <Route path="/level2_1" element={<Level2Test1 />} />
        <Route path="/level2_2" element={<Level2Test2 />} />
        <Route path="/level2_3" element={<Level2Test3 />} />
        <Route path="/level2_4" element={<Level2Test4 />} />
        <Route path="/level2_5" element={<Level2Test5 />} />
        <Route path="/level3_1" element={<Level3Test1 />} />
        <Route path="/level3_2" element={<Level3Test2 />} />
        <Route path="/level3_3" element={<Level3Test3 />} />
        <Route path="/level3_4" element={<Level3Test4 />} />
        <Route path="/level3_5" element={<Level3Test5 />} />
        <Route path="/level3_6" element={<Level3Test6 />} />
        <Route path="/level3_7" element={<Level3Test7 />} />
        <Route path="/level3_10" element={<Level3Test10 />} />
        <Route path="/level4_1" element={<Level4Test1 />} />
        <Route path="/level4_2" element={<Level4Test2 />} />
        <Route path="/level4_3" element={<Level4Test3 />} />
        <Route path="/level4_6" element={<Level4Test6 />} />
        <Route path="/level4_7" element={<Level4Test7 />} />
        <Route path="/level4_9" element={<Level4Test9 />} />
        <Route path="/level4_10" element={<Level4Test10 />} />
        <Route path="/level5_1" element={<Level5Test1 />} />
        <Route path="/level5_2" element={<Level5Test2 />} />
        <Route path="/level5_3" element={<Level5Test3 />} />
        <Route path="/level5_4" element={<Level5Test4 />} />
        <Route path="/level5_5" element={<Level5Test5 />} />
        <Route path="/level5_6" element={<Level5Test6 />} />
        <Route path="/level5_7" element={<Level5Test7 />} />
        <Route path="/level5_8" element={<Level5Test8 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

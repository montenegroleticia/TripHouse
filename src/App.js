import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import Destinations from "./pages/Destinations";
import Tickets from "./pages/Tickets";
import Lodges from "./pages/Lodges/Lodges";
import Lodge from "./pages/Lodges/Lodge";
import { lodgesContext } from "./hook/context";
import { useState } from "react";

function App() {
  const [lodges, setLodges] = useState(null);

  return (
    <lodgesContext.Provider value={{ lodges, setLodges }}>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/destinations" element={<Destinations />}></Route>
        <Route path="/tickets" element={<Tickets />}></Route>
        <Route path="/lodges" element={<Lodges />}></Route>
        <Route path="/lodge/:id" element={<Lodge />}></Route>
      </Routes>
    </lodgesContext.Provider>
  );
}

export default App;

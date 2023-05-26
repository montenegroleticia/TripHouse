import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import Destinations from "./pages/Destinations";
import Tickets from "./pages/Tickets";
import Lodges from "./pages/Lodges";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/destinations" element={<Destinations />}></Route>
      <Route path="/tickets" element={<Tickets />}></Route>
      <Route path="/lodges" element={<Lodges />}></Route>
    </Routes>
  );
}

export default App;

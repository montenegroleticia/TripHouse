import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import Destinations from "./pages/Destinations";
import Tickets from "./pages/Tickets";
import Lodge from "./pages/Lodge";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/destinations" element={<Destinations />}></Route>
      <Route path="/tickets" element={<Tickets />}></Route>
      <Route path="/lodge" element={<Lodge />}></Route>
    </Routes>
  );
}

export default App;

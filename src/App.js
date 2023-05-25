import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
    </Routes>
  );
}

export default App;

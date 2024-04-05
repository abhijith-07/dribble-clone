import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import GetStarted from "./pages/GetStarted";
import Describe from "./pages/Describe";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/get-started" element={<GetStarted/>} />
        <Route path="/describe" element={<Describe/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

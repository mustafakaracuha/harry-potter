import { BrowserRouter, Routes, Route } from "react-router-dom";
import Character from "./components/Character";
import Home from "./components/Home";
import "./assets/scss/Reset.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Character />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

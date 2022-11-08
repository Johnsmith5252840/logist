
import Home from "./page/Home";
import {useMediaQuery} from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const desktop = useMediaQuery("(min-width: 1024px)");
  return (
    <div className="App" >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

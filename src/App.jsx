import { Routes, Route } from "react-router-dom";
import "./App.css";
import WinGo from "./games/wingo/WinGo";
import HomeLanding from "./components/pages/HomeLanding";

export default function App() {
  return (
    <div className="App">
      {/* Logged In */}
      <Routes>
        <Route path="/" element={<HomeLanding/>}/>

        <Route path="/games">
          {/* <Route index element={<WinGo />} /> */}
          <Route path="win-go" element={<WinGo />} />
        </Route>

        <Route path="*" element={<>Not Found</>} />
      </Routes>
    </div>
  );
}

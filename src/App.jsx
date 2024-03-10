import { Routes, Route } from "react-router-dom";
import "./App.css";
import WinGo from "./games/wingo/WinGo";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage";

export default function App() {
  return (
    <div className="App">
      {/* Logged In */}
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>

        <Route path="/games">
          {/* <Route index element={<WinGo />} /> */}
          <Route path="win-go" element={<WinGo />} />
        </Route>

        <Route path="*" element={<>Not Found</>} />
      </Routes>
    </div>
  );
}

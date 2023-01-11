import "./App.css";
import MenuBar from "./components/menu/MenuBar.component";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<MenuBar />} />
      </Routes>
    </div>
  );
}

export default App;

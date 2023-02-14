import { Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./Layout/Sidebar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Database from "./Pages/Database/Database";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="database" element={<Database/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

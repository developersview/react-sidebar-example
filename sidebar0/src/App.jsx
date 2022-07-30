import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Mailbox from "./pages/Mailbox";
import Analytics from "./pages/Analytics";
import Dashboard from "./pages/Dashboard";
import Group from "./pages/Group";
import Settings from "./pages/Settings";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Mailbox" element={<Mailbox />} />
          <Route path="/Analytics" element={<Analytics />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Group" element={<Group />} />
          <Route path="/Settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

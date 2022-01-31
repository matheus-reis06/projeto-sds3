import Dashboard from "pages/Dashboard";
import Home from "pages/Home";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route} from "react-router-dom";

function AppRoutes() {
    return (
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
      </BrowserRouter>
    );
}

export default AppRoutes;
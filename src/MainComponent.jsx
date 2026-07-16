import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import Home from "./Home";
import App from "./App";
import Login_page from "./demo";

function MainComponent() {
  return (
    <BrowserRouter>
      <div className="m-3">
        <Link to="/">
          <button className="btn btn-primary m-2">Home</button>
        </Link>

        <Link to="/app">
          <button className="btn btn-primary m-2">App</button>
        </Link>

        <Link to="/demo">
          <button className="btn btn-primary m-2">Login</button>
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<App />} />
        <Route path="/demo" element={<demo/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainComponent;
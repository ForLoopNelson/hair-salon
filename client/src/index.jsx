import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Landing from "./Landing"
import App from "./App" // Import the new MainApp component
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/*" element={<App />} />
    </Routes>
  </Router>
)

// Not used but don't delete just in case

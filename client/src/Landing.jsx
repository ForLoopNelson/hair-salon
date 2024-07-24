import React from "react"
import { Outlet } from "react-router-dom"

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-nav">
        <h1>Great Lakes Salon</h1>
        <nav>
          <a href="/home">
            <span>Home</span>
          </a>{" "}
          |{" "}
          <a href="/staff">
            <span>Staff</span>
          </a>{" "}
          |{" "}
          <a href="/services">
            <span>Services</span>
          </a>{" "}
          |{" "}
          <a href="/booking">
            <span>Booking</span>
          </a>{" "}
          |{" "}
          <a href="/admin">
            <span>Admin</span>
          </a>
        </nav>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Landing

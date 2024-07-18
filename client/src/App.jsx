import React from "react"
import { Outlet } from "react-router-dom"

//Create a global header for all pages on the site, and render the target of the clicked route as the body of the page.

const App = () => {
  return (
    <div>
      <header className="img-fit">
        <h1 id="title">Holland Hair Salon</h1>
        <nav>
          <a href="/">
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
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App

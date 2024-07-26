import React from "react"
import { Outlet } from "react-router-dom"
import Footer from "./Footer"

//Create a global header for all pages on the site, and render the target of the clicked route as the body of the page.

const App = () => {
  return (
    <div>
      <header className="img-fit">
        <h1 id="title">Great Lakes Hair Salon</h1>
        <nav>
          <a href="/">
            <span>Home</span>
          </a>{" "}
          |{" "}
          <a href="/app/staff">
            <span>Staff</span>
          </a>{" "}
          |{" "}
          <a href="/app/services">
            <span>Services</span>
          </a>{" "}
          |{" "}
          <a href="/app/booking">
            <span>Booking</span>
          </a>{" "}
          |{" "}
          <a href="/app/admin">
            <span>Admin</span>
          </a>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App

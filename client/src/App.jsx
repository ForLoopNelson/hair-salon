import React from "react"
import { Outlet } from "react-router-dom"
import background from "../public/salon1.jpg"

//Create a global header for all pages on the site, and render the target of the clicked route as the body of the page.

const App = () => {
  return (
    <div>
      <header
        className="img-fit"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <h1 id="title">Holland Hair Salon</h1>
        <nav>
          <a href="/">Home</a> | <a href="/staff">Staff</a> |{" "}
          <a href="/services">Services</a> | <a href="/booking">Booking</a> |{" "}
          <a href="/admin">Admin</a>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App

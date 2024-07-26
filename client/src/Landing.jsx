import React from "react"
import { Link } from "react-router-dom"

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-nav">
        <h1>Great Lakes Salon</h1>
        <div className="btn-class">
          <Link to="/app/home">
            <span className="btn-text-one">Welcome!</span>
            <span className="btn-text-two">Enter</span>
          </Link>
        </div>
      </div>
      <main></main>
    </div>
  )
}

export default Landing

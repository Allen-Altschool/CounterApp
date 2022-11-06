import React from "react";

function Home() {
  return (
    <div className="home-container">
      <nav className="active">
        <a href="/" className="main">
          Home
        </a>
      </nav>
      <ul className="nav-list">
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/counter">Counter</a>
        </li>
        <li>
          <a href="/errorboundary">ErrorBoundary</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
export default Home;

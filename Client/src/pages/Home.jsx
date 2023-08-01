import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/landingpage">Landingpage</Link>
        </li>
        <li>
          <Link to="/aboutpage">Aboutpage</Link>
        </li>
        <li>
          <Link to="/contactpage">Contactpage</Link>
        </li>
        <li>
          <Link to="/servicespage">Servicespage</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
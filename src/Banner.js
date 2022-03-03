import React from 'react';
import { Link } from "react-router-dom";
import {NavLink} from 'react-router-dom'
import './Banner.scss';

class Banner extends React.Component {
  render() {
    return (
        <nav class="navbar navbar-expand sticky-top bg-white d-flex flex-direction--column">
          <div class="page-title underground">
            Caitlin & Christopher
          </div>
          <div class="" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link link-dark" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link link-dark" href="/events">Events</a>
              </li>
              <li class="nav-item">
                <a class="nav-link link-dark" href="/accommodations">Accommodations</a>
              </li>
              <li class="nav-item">
                <a class="nav-link link-dark" href="/registry">Registry</a>
              </li>
            </ul>
          </div>
        </nav>
    )
  }
}
export default Banner;


// <div class="banner sticky-top bg-white">
//   <div class="justify-content-center">
//     <div class="page-title underground">
//       Caitlin & Christopher
//     </div>
//   </div>
//   <nav
//     style={{ paddingBottom: "0.5rem" }}
//   >
//     <Link to="/">Home</Link> |{" "}
//     <Link to="/events">Events</Link> |{" "}
//     <Link to="/accommodations">Accommodations</Link> |{" "}
//     <Link to="/registry">Registry</Link>
//   </nav>
// </div>

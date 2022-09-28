import React from 'react';
import {NavLink} from 'react-router-dom'
import './Banner.scss';

class Banner extends React.Component {
  render() {
    return (
        <nav className="navbar navbar-expand sticky-top bg-white d-flex flex-direction--column">
          <div className="page-title underground">
            Caitlin & Christopher
          </div>
          <div className="" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link link-dark underground" to="/" activeclassname="active">Home</NavLink>
              </li>
              {
                <li className="nav-item">
                  <NavLink className="nav-link link-dark underground" to="/events" activeclassname="active">Events</NavLink>
                </li>
              }
                <li className="nav-item">
                  <NavLink className="nav-link link-dark underground" to="/accommodations" activeclassname="active">Accommodations</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link link-dark underground" to="/afterparty" activeclassname="active">Afterparty</NavLink>
                </li>
                {
                  /*
                    <li className="nav-item">
                      <NavLink className="nav-link link-dark underground" to="/registry" activeclassname="active">Registry</NavLink>
                    </li>
                  */
                }
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

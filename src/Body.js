import React from 'react';
import './Body.scss';

class Body extends React.Component {
  render() {
    return (
      <div className="container">
        {/*
        <div class="row">
          <div class="col">
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#accommodations">Accommodations</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#registry">Registry</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Events</a>
            </li>
          </ul>
          </div>
        </div>
        */}

        <div className="row d-flex justify-content-center py-4">
          <div className="col-12 col-md-7 col-lg-5">
            <img
              src={process.env.PUBLIC_URL + '/chris_and_cait_no_text.jpg'}
              alt="<3"
              className="w-100 framed-image"
            />
            <div className="invite-header underground py-3">
              Caitlin Courtois & Christopher Lyver
            </div>
            <div className="eaves is-20">
              Audrey's Farmhouse + The Greenhouses
            </div>
            <div className="eaves is-20">
              October 1, 2022 | Wallkill, NY
            </div>
          </div>
        </div>
        {/*

          <div class="row mt-5 pt-5 border-top" id="registry">
            <div class="col">
              <h2>Gift Registry</h2>
              <div class="text-left">
                Please know that your presence at our wedding is a present enough. However,
                for friends and family who have been asking for gift ideas, we've created
                some online registries here:
              </div>
              <div class="pt-3">
                <button type="button" class="btn btn-outline-secondary">Zola</button>
              </div>
            </div>
          </div>
        */}

        {/*

        */
        }


      </div>
    )
  }
}
export default Body;

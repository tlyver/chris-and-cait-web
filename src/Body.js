import React from 'react';
import './Body.css';

class Body extends React.Component {
  render() {
    return (
      <div class="container">
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

        <div class="row mt-4 ">
          <div class="col">
            <img
              src={process.env.PUBLIC_URL + '/chris_cait_color.jpg'}
              alt="<3"
              class="w-100 framed-image"
            />
          </div>
        </div>
        {/*
          <div class="row row-cols-1 row-cols-xl-2 mt-4 mb-5">
            <div class="col d-flex align-items-center justify-content-center border-right">
              <h2>Oct. 01 2022</h2>
            </div>
            <div class="col d-flex flex-column align-items-center justify-content-center">
              <h3>Audry's Farmhouse + The Greenhouses</h3>
              <div class="d-flex flex-column address">
                <div>
                  2187 Bruynswick Rd,
                </div>
                <div>
                  Wallkill, NY 12589
                </div>
              </div>
            </div>
          </div>

          <div class="row mt-5 pt-5 border-top" id="accommodations">
            <div class="col">
              <h2>Accommodations</h2>
              <div class="text-left">
                Our wedding will be in Wallkill, NY which is about 15 miles north west of Newburgh.
                Although there is limited availability at Audry's Farmhouse + The Greenhouses,
                if you decide to spend the night after the reception, we have visited and recommend
                the hotels listed below. We were unable to secure blocks at each of these hotels,
                but booking a room online or over the phone would be the best option.
              </div>
              <div class="text-left pt-3">
                <h5>Tin Brook Bed & Breakfast</h5>
                <div>
                  The Tin Brook Bed and Breakfast provides beautiful rooms and reasonable rates for
                  all travelers. Set in a historic 1790s home we offer six private rooms all with
                  private bathrooms. There is a country gift store on site and a hot breakfast
                  is available daily.
                </div>
                <div>
                  <div>Phone: 914.826.7720</div>
                  <div>Address: 190 Read Ave</div>
                </div>
              </div>
            </div>
          </div>

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

        <div class="row" id="registry">
          <div class="col">
            <h2 class="d-flex justify-content-center">Coming Soon</h2>
            <div class="pt-2">
              Please check back soon for updates on accommodation info and our registry!
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Body;

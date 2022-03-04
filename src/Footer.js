import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer container pt-4">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-md-7 col-lg-5">
            <img
              src={process.env.PUBLIC_URL + '/city.jpg'}
              alt="<3"
              className="w-100 framed-image"
            />
          </div>
        </div>
      </div>
    )
  }
}
export default Footer;

/*<div className="footer-details is-flex flex-justify--center is-12">
<div className="footer-details--keys is-flex flex-align--end flex-direction--column">
<div>Date:</div>
<div>Location:</div>
</div>
<div className="footer-details--value is-flex flex-align--start flex-direction--column">
<div>Oct. 01 2022</div>
<div>Audry's Farmhouse</div>
</div>
</div>*/

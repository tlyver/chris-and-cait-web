import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <div class="footer">
        <div class="footer-name">
          <div>
            Caitlin Courtois
          </div>
          <div>
            &
          </div>
          <div>
            Christopher Lyver
          </div>
        </div>
      </div>
    )
  }
}
export default Footer;

/*<div class="footer-details is-flex flex-justify--center is-12">
<div class="footer-details--keys is-flex flex-align--end flex-direction--column">
<div>Date:</div>
<div>Location:</div>
</div>
<div class="footer-details--value is-flex flex-align--start flex-direction--column">
<div>Oct. 01 2022</div>
<div>Audry's Farmhouse</div>
</div>
</div>*/

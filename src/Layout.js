import './Layout.scss';

import React from 'react';
import Banner from './Banner';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
      <React.Fragment>
        <div className="layout">
          <div class="alert alert-info text-center" role="alert">
            Please note, the Welcome Drinks will start at 8:00 pm on Friday, September 30.
          </div>
          <Banner />
          <div className="navigationWrapper">
              <main className="container">{children}</main>
          </div>
          <Footer className="footer"/>
        </div>
      </React.Fragment>
    );
};
export default Layout;

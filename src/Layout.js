import './Layout.scss';

import React from 'react';
import Banner from './Banner';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
      <React.Fragment>
        <div className="layout">
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

import React from 'react';
import Banner from './Banner';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
      <React.Fragment>
          <Banner />
          <div className="navigationWrapper">
              <main class="container">{children}</main>
          </div>
          <Footer />
      </React.Fragment>
    );
};
export default Layout;

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Site from './Site';
import Header from './Header';

const Layout = ({ children }) => (
  <Site>
    <Header />
    { children }
  </Site>
);

Layout.propTypes = {
  children: PropTypes.func,
};

Layout.defaultProps = {
  children: () => console.log('default'),
};

export default Layout;

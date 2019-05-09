import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import Layout from './layouts/Layout';
import Home from './pages/Home';
import Post from './pages/Post';

const App = () => {
  return (
    <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/posts" component={Post} />
        </Switch>
    </Layout>
  );
}

export default App;

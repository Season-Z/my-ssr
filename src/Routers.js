import React from 'react';
import { Route, Link } from 'react-router-dom';

import Home from '@/page/Home';
import Login from '@/page/Login';

export default () => {
  return (
    <div>
      <Link to="/">home</Link>
      <br />
      <Link to="/login">login</Link>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} />
    </div>
  );
};

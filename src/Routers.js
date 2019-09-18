import React from 'react';
import { Route } from 'react-router-dom';

import Home from '@/page/Home';
import Login from '@/page/Login';

export default () => {
  return (
    <div>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} />
    </div>
  );
};

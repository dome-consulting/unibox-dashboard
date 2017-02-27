import React, { Component } from 'react';

import createLayout from './createLayout';

const Template1C = ({ placeholders }) => {
  return (
    <div>
        {placeholders[0]}
    </div>
  );
};

const Layout1C = createLayout(Template1C, 1);

export default Layout1C;
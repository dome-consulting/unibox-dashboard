import React, { Component } from 'react';

import createLayout from './createLayout';

const Template1C2C = ({ placeholders }) => {
  const row = { display : 'flex' };
  const col = { 
    flexFlow: 'row wrap',
    display: 'flex',
    flex: '1 1 0', 
    alignItems: 'flex-start',
    alignContent: 'flex-start',
  };

  return (
    <div>
      <div style={ row }>
        <div style={ col }>
          {placeholders[0]}
        </div>
      </div>
      <div style={ row }>
        <div style={ col }>
          {placeholders[1]}
        </div>
        <div style={ col }>
          {placeholders[2]}
        </div>
      </div>
    </div>
  );
};

const Layout1C2C = createLayout(Template1C2C, 3);

export default Layout1C2C;
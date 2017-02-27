import React from 'react';

import DefaultLayout from './layouts/Layout1C';

const Dashboard = ({ layout = DefaultLayout, widgets }) => {

    const Layout = layout;

    return (
      <div>
        {<Layout placeholders={ widgets } />}
      </div>
    );
};

export default Dashboard;
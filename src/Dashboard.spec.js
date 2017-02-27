import React from 'react';

import { expect } from 'chai';
import { shallow } from 'enzyme';

import Dashboard from './Dashboard';
import { Layout1C, Layout1C2C } from './layouts';

describe('<Dashboard>', function () {

  it('Should render', function () {
    shallow(<Dashboard />);
  });

  it('Should render with default layout Layout1C', function () {
    const wrapper = shallow(<Dashboard />);

    expect(wrapper.find(Layout1C)).to.have.length(1);
  });

  it('Should render with layout Layout1C2C', function () {
    const wrapper = shallow(<Dashboard layout={ Layout1C2C } />);

    expect(wrapper.find(Layout1C2C)).to.have.length(1);
  });

  it('Should pass the widgets to the layout', function () {
    const widgets = [ <widget /> ];
    const wrapper = shallow(
      <Dashboard 
        layout={ Layout1C2C } 
        widgets={ widgets }/>
    );

    expect(wrapper.find(Layout1C2C).prop('placeholders')).to.be.equals(widgets);
  });

});


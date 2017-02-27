import React from 'react';

import { expect } from 'chai';
import { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme'

import asWidget from './asWidget';

describe('asWidget()', function () {

  const Component = () => <span>I'm a component</span>;

  it('Should render the wrapped component', function () {
    const WComponent = asWidget(Component);

    const wrapper = shallow(<WComponent />);
    
    expect(wrapper.find(Component)).to.have.length(1);
  });

  it('Should render the widgetTitle', function () {
    const WComponent = asWidget(Component);

    const wrapper = shallow(<WComponent widgetTitle="The Title" />);
    
    expect(wrapper.findWhere(n => n.text() == 'The Title')).to.exist;
  });

  it('Should pass all props except widgetTitle to the wrapped component', function () {
    const WComponent = asWidget(Component);

    const wrapper = shallow(<WComponent widgetTitle="The title" a="xyz" b={1000} />);
    
    expect(wrapper.find(Component).props()).to.have.eqls({ a : 'xyz', b : 1000 });
  });

});

import React from 'react';

import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import chaiEnzyme from 'chai-enzyme'

import { Card, CardHeader, CardText } from 'material-ui/Card';

import { buildContext } from '../../test/helpers';

import asWidget from './asWidget';

describe('#asWidget()', function () {

  const Component = () => <span>I'm a component</span>;

  it('Should render the wrapped component', function () {
    const WComponent = asWidget(Component);

    const wrapper = mount(<WComponent />, buildContext());
    
    expect(wrapper.find(Component)).to.have.length(1);
  });

  it('Should render the wgTitle', function () {
    const WComponent = asWidget(Component);

    const wrapper = shallow(<WComponent wgTitle="The Title" />, buildContext());
    
    expect(wrapper.findWhere(n => n.text() == 'The Title')).to.exist;
  });

  it('Should pass all props except wgTitle to the wrapped component', function () {
    const WComponent = asWidget(Component);

    const wrapper = mount(<WComponent wgTitle="The title" a="xyz" b={1000} />, buildContext());
    const props = wrapper.find(Component).props();

    expect(props).to.have.property('a', 'xyz');
    expect(props).to.have.property('b', 1000 );
    expect(props).not.to.have.property('wgTitle');
  });

});

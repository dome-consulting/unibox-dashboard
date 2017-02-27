import React from 'react';

import { expect } from 'chai';

import * as All from './';

describe('layouts', function () {

  it('Should export createLayout()', function () {
    expect(All.createLayout).to.exist;
  });

  it('Should export Layout1C', function () {
    expect(All.Layout1C).to.exist;
  });

  it('Should export Layout1C2C', function () {
    expect(All.Layout1C2C).to.exist;
  });

});

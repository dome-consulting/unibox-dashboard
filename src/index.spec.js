import React from 'react';

import { expect } from 'chai';

import * as All from './';

describe('main: index.js', function () {

  it('Should export Dashboard as default', function () {
    expect(All.default).to.exist;
  });

});

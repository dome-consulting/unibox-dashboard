import React from 'react';

import { expect } from 'chai';

import * as All from './';

describe('index', function () {

  it('Should export Dashboard as default', function () {
    expect(All.default).to.exist;
  });

});

import React from 'react';

import { expect } from 'chai';

import * as All from './';

describe('widgets', function () {

  it('Should export asWidget()', function () {
    expect(All.asWidget).to.exist;
  });

});

import React, { Component } from 'react';

import wrapDisplayName from 'recompose/wrapDisplayName';

const createLayout = (Template, placeholders, uid, name, icon) => {

  class Layout extends Component {

    static getIcon() { return icon; }
    static getUid() { return uid; }
    static getName() { return name; }

    render() {
      return <Template wrap={4} {...this.props} />
    }

  }

  Layout.displayName = wrapDisplayName(Layout, "layout");

  return Layout;
};


export default createLayout;
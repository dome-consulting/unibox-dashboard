import React, { Component } from 'react';

import wrapDisplayName from 'recompose/wrapDisplayName';

export default (WrappedComponent) => {

  class Widget extends Component {

    render() {
      const { widgetTitle, ...passThroughProps } = this.props; 

      return (
        <div style={{ margin: '0 4px 5px' }}>
          <div>{widgetTitle}</div>
          <WrappedComponent {...passThroughProps} />
        </div>
      );
    }

  }

  Widget.displayName = wrapDisplayName(WrappedComponent, "widget");

  return Widget;
};
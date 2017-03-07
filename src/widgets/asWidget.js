import React, { Component } from 'react';

import wrapDisplayName from 'recompose/wrapDisplayName';

import { Card, CardHeader, CardText } from 'material-ui/Card';
import muiThemeable from 'material-ui/styles/muiThemeable';

export default (WrappedComponent) => {

  class Widget extends Component {

    static defaultProps = {
      wgExpandable : true
    }

    render() {
      const { 
        wgTitle,
        wgHideHeader,
        wgExpandable, 
        wgInline, 
        wgFill, 
        ...passThroughProps 
      } = this.props;

      const style = {
        margin: '8px 6px',
        flex: '1 1 auto'
      };

      if (wgInline) {
        style.display = 'inline-block';
        if (wgFill === false) {
          style.flexGrow = 0;
        }
      } else {
        style.width = '100%';
      }

      return (
        <div style={ style }>
          <Card initiallyExpanded={true} style={{ paddingBottom: 0 }}>
            {!wgHideHeader && <CardHeader title={wgTitle}
              showExpandableButton={wgExpandable}
              titleColor={null && this.props.muiTheme.palette.alternateTextColor}
              style={{ 
                background: null && this.props.muiTheme.palette.primary1Color,
                padding: '4px 8px', 
                fontWeigth: 500 }} />
            }
            <CardText expandable={wgExpandable} style={{ padding: '8px 8px 0' }}>
              <WrappedComponent {...passThroughProps} />
            </CardText>
          </Card>
        </div>
      );
    }

  }

  Widget.displayName = wrapDisplayName(WrappedComponent, 'widget');

  return muiThemeable()(Widget);
};
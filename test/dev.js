import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Dashboard from '../src/index.js';
import { asWidget } from '../src/widgets';
import { Layout1C2C as Layout } from '../src/layouts';

const WA = asWidget(({ txt }) => <div style={{ width: '200px', height: 50, background: 'red' }}>{txt}</div>);
const WB = asWidget(({ txt }) => <div style={{ width: '300px', height: 50, background: 'green' }}>{txt}</div>);
const WC = asWidget(({ txt }) => <div style={{ height: 50, background: 'blue' }}>{txt}</div>);
const WD = asWidget(({ txt }) => <div style={{ height: 50, background: 'yellow' }}>{txt}</div>);


ReactDOM.render(
  <MuiThemeProvider >
    <Dashboard
      layout={Layout}
      widgets={[
        [
          <WA key={0} wgTitle="Widget A" wgInline={true} />,
          <WB key={1} wgTitle="Widget B" wgInline={true} wgExpandable={false} />,
          <WB key={2} wgTitle="Widget B" wgInline={true} wgExpandable={false} />,
          <WB key={3} wgTitle="Widget B" wgInline={true} wgFill={false}  wgHideHeader={true} />,
          <WD key={100} wgTitle="Widget D" />
        ],
        [
          <WC wgTitle="Widget C" />,
          <WC wgTitle="Widget C" />
        ],
        [
          <WD wgTitle="Widget D" txt="I'm D" />,
          <WD wgTitle="Widget D" txt="I'm D" />,
          <WC wgTitle="Widget C" />
        ]
      ]}
    />
  </MuiThemeProvider>,
  document.body
);


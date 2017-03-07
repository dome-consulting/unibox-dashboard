import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

// import { IntlProvider, intlShape } from 'react-intl';
//import * as messages from '../src/i18n/messages';

try { injectTapEventPlugin(); } catch (e) { 
  // Do nothing, just preventing error when wathcing
}


/*
 * Adds ReactIntl context
 * 
 * @param {Object} current - current context
 * 
 * @return {Object} the context, or a new one, with Intl support
 *//*
export const withIntl = (current = {}) => {

  const { intl } = new IntlProvider({ locale: 'en', messages: messages.en }, {}).getChildContext();

  return {
    context: {
      ...(current.context),
      intl
    },
    childContextTypes: {
      ...(current.childContextTypes),
      intl: intlShape
    }
  };

};*/

/**
 * Adds MuiTheme context
 * 
 * @param {Object} current - current context
 * 
 * @return {Object} a context with MuiTheme support
 */
export const withMuiTheme = (current = {}) => {

  const muiTheme = getMuiTheme();

  return {
    context: {
      ...(current.context),
      muiTheme
    },
    childContextTypes: {
      ...(current.childContextTypes),
      muiTheme: React.PropTypes.object
    }
  };

};

/**
 * Builds a context with Intl and MuiTheme.
 * 
 * @return {Object} a context with //Intl and// MuiTheme support
 */
export const buildContext = () => {
  return withMuiTheme();
};

/** No-operation function */
export const noop = () => { };
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { t } from '@basepath/utils/appUtils';

// TODO: Remove history prop.
export const GoBack = ({ history, children }) =>
  (<a href="#" onClick={history.goBack}>{ children }</a>);

GoBack.propTypes = {
  children: PropTypes.node,
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }),
};

export const GoHome = () => (<Link to="/">{ t('goback') }</Link>);

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { t } from '@basepath/utils/appUtils';
import { GoBack } from '@basepath/components/router';


const Page1 = ({ history }) => (
  <div>
    <p>{ t('welcome.time', { date: new Date() }) }</p>
    <GoBack history={history}>{ t('goback') }</GoBack>
  </div>
);
Page1.propTypes = {
  history: PropTypes.object.isRequired //eslint-disable-line
};

function mapStateToProps() {
  return {
  };
}
function mapDispatchToProps() {
  return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(Page1);

import React from 'react';
import { connect } from 'react-redux';
import { t } from '@basepath/utils/appUtils';
import { GoBack } from '@basepath/components/router';


const Page1 = () => (
  <div>
    <p>{ t('welcome.time', { date: new Date() }) }</p>
    <GoBack history={this.props.history}>{ t('goback') }</GoBack>
  </div>
);
function mapStateToProps() {
  return {
  };
}
function mapDispatchToProps() {
  return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(Page1);

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { HashRouter as Router, Switch, Route, browserHistory } from 'react-router-dom';

import {
  selectLanguage,
  t,
} from '@basepath/utils/appUtils';
import Header from '../../components/header/header';
import Sidebar from '../../components/sidebar/sidebar';
import Footer from '../../components/footer/footer';
import { NotFound } from '@basepath/components/router/errors';

class Home extends React.Component {


  render() {
    const { language } = this.props;
    return (<div>
      <Sidebar />
      <Header language={language} t={t} />
      <Switch>
        <Route path="about" component={<div>About</div>} />
        <Route path="contact" component={<div>Contact</div>} />
        <Route path="tech" component={<div>Technologies</div>} />
      </Switch>
      <Footer />
    </div>);
  }
}

Home.propTypes = {
  language: PropTypes.string.isRequired,
};


function mapStateToProps(state) {
  return {
    language: selectLanguage(state),
  };
}
function mapDispatchToProps() {
  return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);

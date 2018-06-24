import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  selectLanguage,
  t,
} from '@basepath/utils/appUtils';
import Header from '../../components/header/header';
import Sidebar from '../../components/sidebar/sidebar';
import Footer from '../../components/footer/footer';

class Home extends React.Component {


  render() {
    const { language } = this.props;
    return (<div>
      <Header language={language} t={t} />
      <Sidebar />
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

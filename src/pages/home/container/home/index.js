import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  selectLanguage,
  t,
} from '@basepath/utils/appUtils';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';


const Home = ({
  language
}) => (
  <div>
    <Header language={language} t={t} />
    <Footer />
  </div>
);

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

import React, { Component} from "react";
import {
  connect
} from 'react-redux';
import {
  selectLanguage,
  selectTranslator
} from '@basepath/utils/appUtils';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';


export class Home extends Component {
  render(){
    return(<div>
      <Header language={this.props.language} t={this.props.t} />
     <Footer />  
    </div>
    );
  }
}
function mapStateToProps (state){
  return {
    language: selectLanguage(state),
    t: selectTranslator()
  };
}
function mapDispatchToProps (state){
  return {};
}
export default connect(mapStateToProps, mapDispatchToProps) (Home);
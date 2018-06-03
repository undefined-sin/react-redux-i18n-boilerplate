import React, { Component} from "react";
import {
  connect
} from 'react-redux';
import {
  selectLanguage,
  selectTranslator
} from '@basepath/utils/appUtils';


export class Page1 extends Component {
  render(){
    return(<div>
      This is page 1
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
export default connect(mapStateToProps, mapDispatchToProps) (Page1);
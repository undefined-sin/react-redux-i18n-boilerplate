import React, { Component} from "react";
import {
  connect
} from 'react-redux';
import { Link } from 'react-router-dom';
import {
  selectTranslator
} from '@basepath/utils/appUtils';
import {
  GoBack
} from '@basepath/components/router';


export class Page1 extends Component {
  render(){
    return(<div>
      <p>{ this.props.t('welcome.time', { date: new Date() }) }</p>
      <GoBack history={this.props.history}>{ this.props.t('goback') }</GoBack>
    </div>
    );
  }
}
function mapStateToProps (state){
  return {
    t: selectTranslator()
  };
}
function mapDispatchToProps (state){
  return {};
}
export default connect(mapStateToProps, mapDispatchToProps) (Page1);
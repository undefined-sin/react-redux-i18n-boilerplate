import React, { Component} from "react";
import {
  connect
} from 'react-redux';
import { Link } from 'react-router-dom';
import {
  selectTranslator
} from '@basepath/utils/appUtils';


export class Page1 extends Component {
  render(){
    return(<div>
      <p>
        {
          this.props.t('page1:title')
        }
      </p>
      <Link to="/">{ this.props.t('goback') }</Link>
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
import React, {Component} from 'react';
import Home from './home/Home';

export default class Me extends Component {
  render() {
    return (
      <Home navigation={this.props.navigation}/>
    );
  }
}

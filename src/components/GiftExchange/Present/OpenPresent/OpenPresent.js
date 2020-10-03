import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

import classes from '../Present.scss';

class OpenPresent extends Component {
  render() {
    return (
      <Card
        className={classes.OpenPresent}
        onClick={this.props.onClick}>
        {this.props.present.thumbnail}
      </Card>
    );
  }
}

export default OpenPresent;
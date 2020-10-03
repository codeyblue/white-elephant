import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

import classes from '../Present.scss';

class UnopenPresent extends Component {
  render() {
    return (
      <Card
        className={classes.UnopenPresent}
        onClick={this.props.onClick}>
        {this.props.present.thumbnail}
      </Card>
    );
  }
}

export default UnopenPresent;
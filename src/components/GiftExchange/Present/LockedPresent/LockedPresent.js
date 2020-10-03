import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

import classes from '../Present.scss';

class LockedPresent extends Component {
  render() {
    return (
      <Card
        className={classes.LockedPresent}
        onClick={this.props.onClick}>
        {this.props.present.thumbnail}
      </Card>
    )
  }
}

export default LockedPresent;
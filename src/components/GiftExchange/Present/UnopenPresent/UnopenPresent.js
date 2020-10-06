import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

import classes from '../Present.scss';
import unopenPresent from '../../../../assests/icons/present.svg';

class UnopenPresent extends Component {
  render() {
    return (
      <Card
        className={classes.UnopenPresent}
        onClick={this.props.onClick}>
        <Card.Img variant="top" src={unopenPresent} />
      </Card>
    );
  }
}

export default UnopenPresent;
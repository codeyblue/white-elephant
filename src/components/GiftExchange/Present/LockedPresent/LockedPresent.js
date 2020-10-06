import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import classes from '../Present.scss';
import openGift from '../../../../assests/icons/gift-box.svg';

class LockedPresent extends Component {
  render() {
    let transformedItems;
    if (this.props.present.items.length === 0) {
      transformedItems = <p>There are no unopened presents</p>
    } else {
      transformedItems = this.props.present.items.map((item, i) => {
        return <ListGroup.Item>{item.title}</ListGroup.Item>
      })
    }

    return (
      <Card
        className={classes.LockedPresent}
        onClick={this.props.onClick}>
        <Card.Img variant="top" src={openGift} />
        <ListGroup variant="flush">
          {transformedItems}
        </ListGroup>
      </Card>
    )
  }
}

export default LockedPresent;
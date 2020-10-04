import React from 'react';
import Card from 'react-bootstrap/Card';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

import classes from './Players.css';
import { ListGroup } from 'react-bootstrap';

const Players = (props) => {
  const playerList = [{
    userId: 'U000000',
    username: 'username 1',
    firstName: 'First',
    lastName: 'Last',
    icon: 'icon'
  }, {
    userId: 'U000001',
    username: 'username 2',
    firstName: 'First',
    lastName: 'Last',
    icon: 'icon'
  }, {
    userId: 'U000002',
    username: 'username 3',
    firstName: 'First',
    lastName: 'Last',
    icon: 'icon'
  }, {
    userId: 'U000003',
    username: 'username 4',
    firstName: 'First',
    lastName: 'Last',
    icon: 'icon'
  }];

  const popover = (player) => (
    <Popover id="popover-basic">
      <Popover.Title as="h3">{player.username}</Popover.Title>
      <Popover.Content>
        <p>{player.icon}</p>
        <p>{player.firstName} {player.lastName}</p>
      </Popover.Content>
    </Popover>
  );

  let transformedPlayerList;
  if (playerList.length === 0) {
    transformedPlayerList = <p>No Players</p>;
  } else {
    transformedPlayerList = playerList.map((player) => {
      let variant = null;
      if (props.currentPlayer === player.userId) {
        variant = 'primary';
      } else if (props.previousPlayer === player.userId) {
        variant = 'secondary';
      }
      return (
        <OverlayTrigger key={player.userId} trigger="click" placement="right" overlay={popover(player)}>
        <ListGroup.Item action key={player.userId} variant={variant}>{player.username}</ListGroup.Item>
        </OverlayTrigger>
      );
    });
  }

  return (
    <Card className={classes.Panel}>
      <Card.Header as="h5">Players</Card.Header>
      <ListGroup variant="flush" className={classes.List}>
        {transformedPlayerList}
      </ListGroup>
    </Card>
  );
}

export default Players;
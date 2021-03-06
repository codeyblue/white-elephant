import React from 'react';
import Card from 'react-bootstrap/Card';

import classes from './UserInfo.css';
import PresentSummary from '../GiftExchange/PresentSummary/PresentSummary';
import userIcon from '../../assests/icons/user.svg';

const userInfo = (props) => {
  const presents = props.presents;
  const userInfo = {
    userId: 'U000003',
    username: 'username 4',
    firstName: 'First',
    lastName: 'Last',
    icon: 'icon'
  };

  const currentPresent = Object.keys(presents)
    .map(key =>
      presents[key].filter(e => e.currentOwner === userInfo.userId))
    .filter(e => e.length !== 0)[0][0];

  const givenPresent = Object.keys(presents)
    .map(key =>
      presents[key].filter(e => e.giftGiver === userInfo.userId))
    .filter(e => e.length !== 0)[0][0];

  return (
    <Card className={classes.Panel}>
      <Card.Header as="h5">Info</Card.Header>
      <Card.Body>
        <img src={userIcon} alt="" width="100%" />
        <p align="center">{userInfo.firstName} {userInfo.lastName}</p>
        <p align="center"><strong>{userInfo.username}</strong></p>
        <hr />
        <h6>Current Present</h6>
        <PresentSummary present={currentPresent} />
        <hr />
        <h6>Gift Contribution</h6>
        <PresentSummary present={givenPresent} />
      </Card.Body>
    </Card>
  );
}

export default userInfo;
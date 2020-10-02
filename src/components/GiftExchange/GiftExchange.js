import React from 'react';
import { Jumbotron } from 'react-bootstrap'

import classes from './GiftExchange.scss';
import Present from './Present/Present';

const GiftExchange = (props) => {
  const unopenPresents = props.presents['unopen'];
  let transformedUnopenPresents;
  if (unopenPresents.length === 0) {
    transformedUnopenPresents = <p>There are no unopened presents</p>
  } else {
    transformedUnopenPresents = unopenPresents.map((present, i) => {
      return <Present key={'unopen' + i} type='unopen' present={present} />
    })
  }
  
  const openPresents = props.presents['open'];
  let transformedOpenPresents;
  if (openPresents.length === 0) {
    transformedOpenPresents = <p>There are no opened presents</p>
  } else {
    transformedOpenPresents = openPresents.map((present, i) => {
      return <Present key={'open' + i} type='open' present={present} />
    })
  }
  
  const lockedPresents = props.presents['locked'];
  let transformedLockedPresents;
  if (lockedPresents.length === 0) {
    transformedLockedPresents = <p>There are no locked presents</p>
  } else {
    transformedLockedPresents = lockedPresents.map((present, i) => {
      return <Present key={'locked' + i} type='locked' present={present} />
    })
  }

  return (
    <div className={classes.GiftExchange}>
      <div className={classes.Unopen}>
        {transformedUnopenPresents}
      </div>
      <div className={classes.Open}>
        {transformedOpenPresents}
      </div>
      <div className={classes.Locked}>
        {transformedLockedPresents}
      </div>
    </div>
  );
}

export default GiftExchange;
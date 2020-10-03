import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import classes from './GiftExchange.scss';
import Present from './Present/Present';

const GiftExchange = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  const unopenPresents = props.presents['unopen'];
  let transformedUnopenPresents;
  if (unopenPresents.length === 0) {
    transformedUnopenPresents = <p>There are no unopened presents</p>
  } else {
    transformedUnopenPresents = unopenPresents.map((present, i) => {
      return <Present key={'unopen' + i} type='unopen' present={present} onClick={showModal} />
    })
  }
  
  const openPresents = props.presents['open'];
  let transformedOpenPresents;
  if (openPresents.length === 0) {
    transformedOpenPresents = <p>There are no opened presents</p>
  } else {
    transformedOpenPresents = openPresents.map((present, i) => {
      return <Present key={'open' + i} type='open' present={present} onClick={showModal} />
    })
  }
  
  const lockedPresents = props.presents['locked'];
  let transformedLockedPresents;
  if (lockedPresents.length === 0) {
    transformedLockedPresents = <p>There are no locked presents</p>
  } else {
    transformedLockedPresents = lockedPresents.map((present, i) => {
      return <Present key={'locked' + i} type='locked' present={present} onClick={showModal} />
    })
  }

  return (
    <div className={classes.GiftExchange}>
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title>Hi</Modal.Title>
        </Modal.Header>
        <Modal.Body>The body</Modal.Body>
        <Modal.Footer>
          <Button onClick={hideModal}>Cancel</Button>
        </Modal.Footer>
      </Modal>
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
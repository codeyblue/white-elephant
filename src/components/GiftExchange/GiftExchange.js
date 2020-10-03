import React from 'react';
import { Button, Card, CardDeck, Modal} from 'react-bootstrap';

import classes from './GiftExchange.scss';
import Present from './Present/Present';
import PresentSummary from './PresentSummary/PresentSummary';

const GiftExchange = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [summary, setSummary] = React.useState(null);

  const showModal = (present) => {
    setSummary(present);
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
      return <Present key={'unopen' + i} type='unopen' present={present} onClick={() => showModal(present)} />
    })
  }
  
  const openPresents = props.presents['open'];
  let transformedOpenPresents;
  if (openPresents.length === 0) {
    transformedOpenPresents = <p>There are no opened presents</p>
  } else {
    transformedOpenPresents = openPresents.map((present, i) => {
      return <Present key={'open' + i} type='open' present={present} onClick={() => showModal(present)} />
    })
  }
  
  const lockedPresents = props.presents['locked'];
  let transformedLockedPresents;
  if (lockedPresents.length === 0) {
    transformedLockedPresents = <p>There are no locked presents</p>
  } else {
    transformedLockedPresents = lockedPresents.map((present, i) => {
      return <Present key={'locked' + i} type='locked' present={present} onClick={() => showModal(present)} />
    })
  }

  return (
    <div className={classes.GiftExchange}>
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title>Present Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PresentSummary present={summary}/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={hideModal}>Cancel</Button>
        </Modal.Footer>
      </Modal>

      <Card>
        <Card.Header as="h5">Unopen Presents</Card.Header>
        <CardDeck>
          {transformedUnopenPresents}
        </CardDeck>
      </Card>
      <Card>
        <Card.Header as="h5">Open Presents</Card.Header>
        <CardDeck>
          {transformedOpenPresents}
        </CardDeck>
      </Card>
      <Card>
        <Card.Header as="h5">Locked Presents</Card.Header>
        <CardDeck>
          {transformedLockedPresents}
        </CardDeck>
      </Card>
    </div>
  );
}

export default GiftExchange;
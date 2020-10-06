import React from 'react';
import { Button, Card, CardDeck, Modal} from 'react-bootstrap';

import classes from './GiftExchange.scss';
import Present from './Present/Present';
import PresentSummary from './PresentSummary/PresentSummary';

const GiftExchange = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [summary, setSummary] = React.useState(null);
  const [buttons, setButtons] = React.useState(null);

  const showModal = (present) => {
    let button = <Button variant="outline-success" size="lg" block>Open</Button>;
    if (present.locked) {
      button = <Button variant="secondary" size="lg" block disabled>Steal</Button>;
    } else if (present.open) {
      button = <Button variant="outline-danger" size="lg" block>Steal</Button>;
    }

    setSummary(present);
    setButtons(button);
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
      <Modal show={isOpen} onHide={hideModal} className={classes.Modal}>
        <Modal.Header>
          <Modal.Title>Present Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PresentSummary present={summary}/>
          <p />
          {buttons}
        </Modal.Body>
      </Modal>

      <Card>
        <Card.Header as="h5">Unopen Presents</Card.Header>
        <Card.Body>
          <CardDeck className={classes.Deck}>
            {transformedUnopenPresents}
          </CardDeck>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header as="h5">Open Presents</Card.Header>
        <Card.Body>
          <CardDeck className={classes.Deck}>
            {transformedOpenPresents}
          </CardDeck>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header as="h5">Locked Presents</Card.Header>
        <Card.Body>
          <CardDeck className={classes.Deck}>
            {transformedLockedPresents}
          </CardDeck>
        </Card.Body>
      </Card>
    </div>
  );
}

export default GiftExchange;
import React from 'react';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

import Aux from '../../../hoc/_Aux';
import unopenPresent from '../../../assests/icons/present.svg';

const presentSummary = (props) => {
  const presentInfo = props.present;

  if (presentInfo.open) {
    const items = presentInfo.items
      .map((item, i) => {
        let img;
        if (item.pictures) {
          img = (
            <>
            <img src={unopenPresent} alt="" width="100%" />
            <hr />
            </>
            );
        }
        return (
          <Accordion key={item.title + i}>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  {item.title}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  {img}
                  <p>{item.description}</p>
                  <hr />
                  <a href={item.links}>Item Link</a>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        );
      });
      return (
        <Aux>
          {items}
          <p>Round Steals: {presentInfo.roundSteals}, Game Steals: {presentInfo.gameSteals}</p>
        </Aux>
      );
  } else {
    return (
      <Aux>
        <img src={unopenPresent} alt="" width="100%" padding="200px" />
      </Aux>
    );
  }
};

export default presentSummary;
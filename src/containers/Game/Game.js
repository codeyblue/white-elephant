import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Aux from '../../hoc/_Aux';
import GiftExchange from '../../components/GiftExchange/GiftExchange';
import Players from '../../components/Players/Players';

class Game extends Component {
  state = {
    presents: {
      unopen: [{
        id: 'P0',
        thumbnail: 'thumbnail',
        items: [
          {
            title: 'unopen 0',
            description: 'string',
            pictures: ['array', 'of', 'strings'],
            links: ['array', 'of', 'strings']
          }, {
            title: 'unopen 1',
            description: 'string',
            pictures: ['array', 'of', 'strings'],
            links: ['array', 'of', 'strings']
        }],
        open: false,
        locked: false,
        roundSteals: 0,
        gameSteals: 0
      }, {
        id: 'P1',
        thumbnail: 'thumbnail',
        items: [
          {
            title: 'unopen 2',
            description: 'string',
            pictures: ['array', 'of', 'strings'],
            links: ['array', 'of', 'strings']
        }],
        open: false,
        locked: false,
        roundSteals: 0,
        gameSteals: 0
      }],
      open: [{
        id: 'P2',
        thumbnail: 'thumbnail',
        items: [
          {
            title: 'open',
            description: 'string',
            pictures: ['array', 'of', 'strings'],
            links: ['array', 'of', 'strings']
        }],
        open: true,
        locked: false,
        roundSteals: 0,
        gameSteals: 0
      }],
      locked: [{
        id: 'P3',
        thumbnail: 'thumbnail',
        items: [
          {
            title: 'locked',
            description: 'string',
            pictures: ['array', 'of', 'strings'],
            links: ['array', 'of', 'strings']
        }],
        open: true,
        locked: true,
        roundSteals: 0,
        gameSteals: 0
      }]
    },
    previousPlayer: 'U000002',
    currentPlayer: 'U000001'
  }

  render () {
    return (
      <Aux>
        <Row>
          <Col md={2}>
            <Players
              previousPlayer={this.state.previousPlayer}
              currentPlayer={this.state.currentPlayer} />
          </Col>
          <Col>
            <GiftExchange
              presents={this.state.presents} />
          </Col>
          <Col md={2}>
            <Card><Card.Header as="h5">User Info</Card.Header></Card>
          </Col>
        </Row>
      </Aux>
    );
  }
}

export default Game;
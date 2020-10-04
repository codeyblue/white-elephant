import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Aux from '../../hoc/_Aux';
import GiftExchange from '../../components/GiftExchange/GiftExchange';
import Players from '../../components/Players/Players';
import UserInfo from '../../components/UserInfo/UserInfo';

class Game extends Component {
  state = {
    presents: {
      unopen: [{
        id: 'P1',
        thumbnail: 'thumbnail',
        items: [
          {
            title: 'item 0',
            description: 'item description',
            pictures: ['array', 'of', 'strings'],
            links: ['array', 'of', 'strings']
        }],
        currentOwner: null,
        giftGiver: 'U000002',
        open: false,
        locked: false,
        roundSteals: 0,
        gameSteals: 0
      }],
      open: [{
        id: 'P0',
        thumbnail: 'thumbnail',
        items: [
          {
            title: 'item 0',
            description: 'item description',
            pictures: ['array', 'of', 'strings'],
            links: ['array', 'of', 'strings']
          }, {
            title: 'item 1',
            description: 'item description',
            pictures: ['array', 'of', 'strings'],
            links: ['array', 'of', 'strings']
        }],
        currentOwner: 'U000001',
        giftGiver: 'U000000',
        open: true,
        locked: false,
        roundSteals: 0,
        gameSteals: 0
      }, {
        id: 'P2',
        thumbnail: 'thumbnail',
        items: [
          {
            title: 'open',
            description: 'Item description that may have a bunch of information in it. Blah blah blah',
            links: ['array', 'of', 'strings']
        }],
        currentOwner: 'U000003',
        giftGiver: 'U000001',
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
            title: 'item 0',
            description: 'item description',
            pictures: ['array', 'of', 'strings'],
            links: ['array', 'of', 'strings']
        }],
        currentOwner: 'U000002',
        giftGiver: 'U000003',
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
            <UserInfo
              presents={this.state.presents} />
          </Col>
        </Row>
      </Aux>
    );
  }
}

export default Game;
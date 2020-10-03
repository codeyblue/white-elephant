import React, { Component } from 'react';

import Aux from '../../hoc/_Aux';
import GiftExchange from '../../components/GiftExchange/GiftExchange';

class Game extends Component {
  state = {
    presents: {
      unopen: [{
        thumbnail: 'thumbnail',
        items: [{
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
        thumbnail: 'thumbnail',
        items: [{
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
        thumbnail: 'thumbnail',
        items: [{
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
        thumbnail: 'thumbnail',
        items: [{
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
    }
  }

  render () {
    return (
      <Aux>
        <GiftExchange
          presents={this.state.presents} />
      </Aux>
    );
  }
}

export default Game;
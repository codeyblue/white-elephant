import React, { Component } from 'react';

import classes from '../Present.scss';

class UnopenPresent extends Component {
  render() {
    return (
      <button
        className={classes.UnopenPresent}
        onClick={this.props.onClick}>
        {this.props.present.thumbnail}
      </button>
    );
  }
}

export default UnopenPresent;
import React, { Component } from 'react';

import classes from '../Present.scss';

class OpenPresent extends Component {
  render() {
    return (
      <button
        className={classes.OpenPresent}
        onClick={this.props.onClick}>
        {this.props.present.thumbnail}
      </button>
    );
  }
}

export default OpenPresent;
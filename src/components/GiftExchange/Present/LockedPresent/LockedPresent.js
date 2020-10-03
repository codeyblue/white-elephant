import React, { Component } from 'react';

import classes from '../Present.scss';

class LockedPresent extends Component {
  render() {
    return (
      <button
        className={classes.LockedPresent}
        onClick={this.props.onClick}>
        {this.props.present.thumbnail}
      </button>
    )
  }
}

export default LockedPresent;
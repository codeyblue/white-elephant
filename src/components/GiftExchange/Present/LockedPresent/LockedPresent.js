import React, { Component } from 'react';

import classes from '../Present.scss';
import PresentSummary from '../../PresentSummary/PresentSummary';

class LockedPresent extends Component {
  render() {
    return (
      <button
        className={classes.LockedPresent}
        onClick={this.props.onClick}>
        <PresentSummary present={this.props.present} />
      </button>
    )
  }
}

export default LockedPresent;
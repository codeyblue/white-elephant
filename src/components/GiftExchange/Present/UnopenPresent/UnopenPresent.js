import React, { Component } from 'react';

import classes from '../Present.scss';

class UnopenPresent extends Component {
  render() {
    return (
      <button className={classes.UnopenPresent}>
        {this.props.present.thumbnail}
      </button>
    );
  }
}

export default UnopenPresent;
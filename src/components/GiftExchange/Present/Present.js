import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LockedPresent from './LockedPresent/LockedPresent';
import OpenPresent from './OpenPresent/OpenPresent';
import UnopenPresent from './UnopenPresent/UnopenPresent';

class Present extends Component {
  render () {
    let p = null;

    switch (this.props.type) {
      case ('unopen'):
        p = <UnopenPresent
          present={this.props.present} />
        break;
      case ('open'):
        p = <OpenPresent
          present={this.props.present} />
        break;
      case ('locked'):
        p = <LockedPresent
          present={this.props.present} />
        break;
      default:
        p = null;
    }

    return p;
  }
};

Present.propTypes = {
  type: PropTypes.string.isRequired
}

export default Present;
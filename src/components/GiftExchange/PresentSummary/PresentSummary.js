import React from 'react';

import Aux from '../../../hoc/_Aux';

const presentSummary = (props) => {
  const presentInfo = props.present;
  const items = presentInfo.items
    .map((item, i) => {
      return (
        <div key={item.title + i}>
          Title: {item.title}
          <ul>
            <li>Description: {item.description}</li>
            <li>Pictures: {item.pictures}</li>
            <li>Links: {item.links}</li>
          </ul>
        </div>
      );
    });
  
  if (presentInfo.open) {
    return (
      <Aux>
        <h3>Items</h3>
        <p>{items}</p>
        <p>Round Steals: {presentInfo.roundSteals}, Game Steals: {presentInfo.gameSteals}</p>
      </Aux>
    );
  } else {
    return (
      <Aux>
        <p>{presentInfo.thumbnail}</p>
      </Aux>
    );
  }
};

export default presentSummary;
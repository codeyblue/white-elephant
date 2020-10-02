import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import Game from './containers/Game/Game';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Game />
        </Layout>
      </div>
    );
  }
}

export default App;

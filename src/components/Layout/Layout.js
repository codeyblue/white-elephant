import React from 'react';

import Aux from '../../hoc/_Aux';
import classes from './Layout.css';
import NavBar from './NavBar/NavBar';

const layout = ( props ) => (
  <Aux>
    <NavBar />
    <div>Players, Presents, Person Status</div>
    <main className={classes.Content}>
      {props.children}
    </main>
  </Aux>
);

export default layout;
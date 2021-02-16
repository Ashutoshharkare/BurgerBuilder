import React from 'react';
import classes from './DrawerToggle.css';
//import Aux from '../../../hoc/AuxComponent';

const drawerToggle = (props) => (
    <div onClick={props.clicked} className={classes.DrawerToggle}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToggle;
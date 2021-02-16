import React from 'react';
import classes from './NavigationItem.css';
//import Aux from '../../../hoc/AuxComponent';

const NavigationItem = (props) => (
<li className={classes.NavigationItem}>
    <a href={props.link}
        className={props.active ? classes.active : null}>{props.children}
    </a>
</li>
);

export default NavigationItem;
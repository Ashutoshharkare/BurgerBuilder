import React from 'react';
import classes from './Logo.css';
import BurgerLogo from '../../assests/images/burger-logo.png';
//import Aux from '../../../hoc/AuxComponent';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={BurgerLogo} alt="MyBurger"></img>
    </div>
);

export default logo;
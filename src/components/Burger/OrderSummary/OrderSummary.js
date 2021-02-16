import React from 'react';
import classes from './OrderSummary.css';
import Aux from '../../../hoc/AuxComponent';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).
                              map((igkey) => {
                              return <li key = {igkey}><span style={{textTransform : 'capitalize'}}>{igkey}</span> : {props.ingredients[igkey]}</li>
                              }) 
    return (
        <Aux>
            <h3>Your Orders</h3>
            <p>A delicious burger with following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price : {props.price}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancel}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
        </Aux>
    );
    
};

export default orderSummary;
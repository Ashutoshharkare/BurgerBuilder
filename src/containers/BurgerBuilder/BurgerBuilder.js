import React, {Component} from 'react';
import Aux from '../../hoc/AuxComponent';
import Burger from '../../components/Burger/Burger';
import BurgerControl from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICE = {
    salad : 0.3,
    bacon : 0.8,
    meat : 0.6,
    cheese : 0.4,
}

class BurgerBuilder extends Component {

    state = {
        ingredients : {
            salad : 0,
            cheese : 0,
            bacon : 0,
            meat : 0,
        },
        totalPrice : 4,
        purchasable : false,
        purchasing : false,
    }

    updatePurchashing = () => {
        this.setState({
            purchasing : true,
        });
    }

    hideModalHandler = () => {
        this.setState({
            purchasing : false,
        });
    }

    continuePurchaseHandler = () => {
        alert('You Continue!');
    }

    updatePurchasable = (ingredients) => {
    
        const sum = Object.keys(ingredients).
        map((key) => ingredients[key]).
        reduce((sum, el) => {
            return (sum + el)
        }, 0)

        this.setState({
            purchasable : (sum > 0),
        })
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredient = {...this.state.ingredients};
        updatedIngredient[type] = updatedCount;
        const PriceAddition = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice + PriceAddition;
        this.setState({
            totalPrice : updatedPrice,
            ingredients : updatedIngredient,
        });
        this.updatePurchasable(updatedIngredient);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0)
        {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredient = {...this.state.ingredients};
        updatedIngredient[type] = updatedCount;
        const PriceDeduction = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice - PriceDeduction;
        this.setState({
            totalPrice : updatedPrice,
            ingredients : updatedIngredient,
        });
        this.updatePurchasable(updatedIngredient);
    }

    render() {
        const disabledInfo = {...this.state.ingredients}
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed = {this.hideModalHandler}>
                    <OrderSummary ingredients = {this.state.ingredients} purchaseCancel = {this.hideModalHandler}
                     purchaseContinue = {this.continuePurchaseHandler}
                     price = {this.state.totalPrice.toFixed(2)} />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BurgerControl ingredientAdded = {this.addIngredientHandler} ingredientDeducted = {this.removeIngredientHandler}
                disabled = {disabledInfo} price={this.state.totalPrice}
                purchasable={this.state.purchasable}
                purchasing={this.updatePurchashing}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;
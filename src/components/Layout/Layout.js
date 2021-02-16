import React, { Component } from 'react';
import Aux from '../../hoc/AuxComponent';
import classes from './Layout.css';
import ToolBar from '../../components/Navigation/ToolBar/ToolBar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer : false,
    }

    closeSideDrawerHandler = () => {
        this.setState({
            showSideDrawer : false,
        })
    }

    openSideDrawerHandler = () => {
        this.setState((prevState) => {
           return {showSideDrawer : !prevState.showSideDrawer};
        });
    }

    render(){
        return(<Aux>
            <ToolBar displaySideDrawer={this.openSideDrawerHandler}/>
            <SideDrawer 
                closed = {this.closeSideDrawerHandler}
                open = {this.state.showSideDrawer}    
            />
            <main className={classes.Content}>
                {this.props.children}
            </main>    
        </Aux>);
    }
};

export default Layout;
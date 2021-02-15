import React from 'react';
import Aux from '../../hoc/AuxComponent';

const Layout = (props) => {
    <Aux>
        <div>
            Toolbar, sidedrop, backdrop
        </div>
        <main>
            {props.children}
        </main>    
    </Aux>
}

export default Layout;
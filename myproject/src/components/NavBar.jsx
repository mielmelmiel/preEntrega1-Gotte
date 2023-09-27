/*import React from 'react';*/
import CartWidget from './CartWidget';
const NavBar = (props) => {

    //Vista
    return (
        <header className="header">
            <div>
            <h1>NavBar</h1>
            <CartWidget icon="icono" number={5} />
            </div>
            <p>{props.nombre}</p>
            <nav className="navbar">
                <a href="#">link</a>
                <a href="#">link</a>
                <a href="#">link</a>
            </nav>
            
        </header>
    )
}

export default NavBar



/*const NavBar = () => {
    return (
    <div>
        <h1>NavBar</h1>
        <CartWidget icon="icono" number={5} />
    </div>
    );
};

export default NavBar;*/

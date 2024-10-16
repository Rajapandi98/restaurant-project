import { Fragment } from "react";
import meals from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (
        <Fragment>
        <header className={classes.header}>
            <h1>Order Now!</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>    
            <img src= {meals} alt ="Table of foods"/>
        </div>

        </Fragment>
    )
}
export default Header;
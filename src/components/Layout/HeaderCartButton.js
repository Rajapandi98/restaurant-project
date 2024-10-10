import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css'
import {useContext} from 'react'
import cartContext from '../../Store/cart-context'
const HeaderCartButton =(props) => {
   const cartcCtx= useContext (cartContext)
   const numberOfCartItems= cartcCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount},0)
   
    return <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}><CartIcon/></span>
        <span> Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
};
export default HeaderCartButton
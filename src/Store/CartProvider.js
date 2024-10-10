import cartContext from './cart-context';
import { useReducer } from 'react';

const defaultCartState = {
    items:[],
    totalAmount: 0
}

const cartReducer = (state, action ) => {
    if(action.type==="add") {
        const updatedItems=state.items.concat(action.item)
        const updatedTotalAmount =state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
         }
    } 
    return defaultCartState
}



const CartProvider = (props) => {
   const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemtoCartHandler = item => {
      dispatchCartItem ({type:"add", item: item})
    }

    const removeItemFromCartHandler = id => {
        dispatchCartItem ({type:"remove", item: item})
    }

const cartContext =  {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemtoCartHandler,
    removeItem:removeItemFromCartHandler
}

return <cartContext.Provider value ={cartContext}>
    {props.children}
</cartContext.Provider>

}
export default CartProvider;
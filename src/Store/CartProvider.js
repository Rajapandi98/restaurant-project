import CartContext from './cart-context';
import { useReducer } from 'react';

const defaultCartState = {
    items:[],
    totalAmount: 0
}

const cartReducer = (state, action ) => {
    if(action.type==="add") {

     //   const updatedItems=state.items.concat(action.item)
        const updatedTotalAmount =state.totalAmount + action.item.price * action.item.amount;
        const existingCartItemIdex = state.items.findIndex (
            (item) => item.id === action.item.id
        )
       const existingCartItem= state.items[existingCartItemIdex]
      
       let updatedItems;
       if (existingCartItem){
       const updatedItem = {
            ...existingCartItem, 
            amount: existingCartItem.amount + action.item.amount
        }
        updatedItems = [...state.items] 
        updatedItems[existingCartItemIdex]=updatedItem;
       }
       else {
        updatedItems = state.items.concat(action.item);
       }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
         }
    }  
    if (action.type==='remove'){
        const existingCartItemIdex = state.items.findIndex (
            (item) => item.id === action.id
        )
        const existingItem= state.items[existingCartItemIdex]
        const updatedTotalAmount=state.totalAmount - existingItem.price;
        let updatedItems;
        if(existingItem.amount === 1){
            updatedItems = state.items.filter( item => item.id!==action.id)
        }
        else{
          const updatedItem={...existingItem, amount:existingItem.amount - 1}
            updatedItems=[...state.items]
            updatedItems[existingCartItemIdex]=updatedItem;
        }
        return {
            items: updatedItems,
            totalAmount:updatedTotalAmount
        }
    }
    return defaultCartState
}



const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemtoCartHandler = item => {
        dispatchCartAction ({type:"add", item: item})
    }

    const removeItemFromCartHandler = id => {
        dispatchCartAction ({type:"remove", id: id})
    }

    const contextValue =  {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemtoCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return (
        <CartContext.Provider value ={contextValue}>
            {props.children}
        </CartContext.Provider>
    ) 

}
export default CartProvider;
import classes from "./MealItemForm.module.css"
import Input from '../../../UI/Input';
import {useRef, useState} from 'react'


const MealItemForm = (props) => {
   const [amountisValid, setAmountIsValid] = useState(true)
   const  amountInputRef= useRef();

   const submitHandler =(event) =>{
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value
      const enteredAmountNumber =+enteredAmount;
      if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5 ){
        setAmountIsValid(false);
        return
      }

      props.onAddToCart(enteredAmountNumber)
   }
    return <form className ={classes.form} onSubmit={submitHandler}>
        <Input  ref={amountInputRef}
         label="Amount"
          input={{
           
            id:"Amount",
            type:"Number",
            min: "1",
            max:"1",
            step:"1",
            defaultValue:"1"

        }}/>
        <button>+ Add</button>
        {!amountisValid && <p> Please enter a valid number </p>}
    </form>
}
export default MealItemForm;
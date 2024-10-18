import { Fragment } from "react"
import AvailableMeals from "./AvailableMeals"
import MealsSummary from "./MealsSummary"
import Footer from './Footer'

const Meals = () => {
    return (
        <Fragment>
            <AvailableMeals/>
            <MealsSummary/>
            <Footer/>
        </Fragment>
    )
}
export default Meals
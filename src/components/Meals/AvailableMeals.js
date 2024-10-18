import classes from './AvailableMeals.module.css';
import Card from '../../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Sushi is a Japanese dish of vinegared rice and seafood, vegetables, or eggs',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty,  Its crispy coating and tender meat make it a flavorful and satisfying meal',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty, The combination of smoky, sweet, and tangy elements makes the barbecue burger a flavorful, hearty indulgence perfect for grilling season or casual dining.',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl,',
    description: 'Healthy...and green, A green bowl is usually finished with a light, tangy dressing, like lemon vinaigrette or a creamy avocado sauce, making it a refreshing, healthy, and flavorful option for lunch or dinner.',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
    key= {meal.id}
    id={meal.id}
    name= {meal.name}
    description= {meal.description}
    price= {meal.price}

    />
  )
);

  return (
    <section className={classes.meals}>
    <Card>
      <ul>{mealsList}</ul>
    </Card>
    </section>
  );
};

export default AvailableMeals;
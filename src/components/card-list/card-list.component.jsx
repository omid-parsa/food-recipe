import React from 'react';
import './card-list.styles.css';
import { Card} from '../card/card.component';

export const CardList = props => {
    
    return  <div className='card-list'>
        {
            props.foods.map( food => <Card key={food.id} food={food}/>)
        }
    </div>;
};
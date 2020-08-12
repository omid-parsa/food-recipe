import React from 'react';
import './card.styles.css'

export const Card = props => {
    return (
        <div className='card-container'>
            <img src={props.food.image} />
            <h2>{props.food.title}</h2>
        </div>        
    );
}
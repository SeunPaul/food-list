import React from 'react';
import { ReactComponent as Plus } from '../../svg/plus.svg';
import { ReactComponent as Star } from '../../svg/star.svg';
import "./Card.css";

const Card = ({meal})=>{
    let ratings = {
        star: [],
        noStar: []
    }
    
    for(let i = 0; i < meal.ratings; i++){ 
        ratings = {
            ...ratings, 
            star: [
                ...ratings.star, 
                <Star key = {`${meal.id}star${i}`} className="rating-icon star"/>
            ]
        }
    }
    for(let i = 0; i < 5-(meal.ratings); i++){ 
        ratings = {
            ...ratings, 
            noStar: [
                ...ratings.noStar, 
                <Star key = {`${meal.id}noStar${i}`} className="rating-icon no-star"/>
            ]
        }
    }
    
    

    return(
        <div className="Card">
            <div className="card-top">
                <img className="meal-img" src={meal.strMealThumb} alt=""></img>
            </div>
            <div className="card-bottom">
                <div className="card-bottom-header">
                    <h3 className="title">{meal.title}</h3>
                    <h3 className="price">{meal.price}</h3>
                </div>
                <p className="str-meal">{meal.strMeal}</p>
                <p className="description">{meal.description}</p>
                <div className="card-footer">
                    <div className="ratings">
                    {
                        ratings.star
                    }
                    {
                        ratings.noStar
                    }

                    </div>
                    <div className="card-footer-plus"><Plus className="plus-icon"/></div>
                </div>
            </div>
        </div>
    )
}

export default Card;
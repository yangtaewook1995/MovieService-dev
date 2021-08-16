import React from 'react';
import PropTypes from "prop-types";

const foodLike = [
    {
        id : 1,
        name : "kimchi", 
        image : "http://img.danawa.com/prod_img/500000/830/590/img/5590830_1.jpg?shrink=360:360&_v=20210111143615",
        rating : 4.0,
    },
    {
        id : 2,
        name : "ramen", 
        image : "",
        rating : 5.0,

    },    
    {
        id : 3,
        name : "meat", 
        image : "",
        rating : 3.5,

    },    
    {
        id : 4,
        name : "milk", 
        image : "",
        rating : 4.0,

    }
]

function Food(props) {
    return (
        <div>
            <h2>I love {props.name}</h2>
            <h4>{props.rating}/5</h4>
            <img src={props.picture} />
        </div>
    )
}

function renderFood(dish) {
    return(
        <Food name={dish.name} picture={dish.image} id={dish.id} rating={dish.rating}/>
    )
}

Food.propTypes = {
    name : PropTypes.string.isRequired,
    picture : PropTypes.string.isRequired,
    rating : PropTypes.number
}

function App() {
    return (
        <div>
            {foodLike.map(renderFood)}
        </div>
    );
}

export default App;

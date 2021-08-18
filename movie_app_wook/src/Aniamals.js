import React from "react";
import PropTypes from "prop-types";

function Animals ({year, title, summary, poster, genres}) {
    return (
        <div className="animal">
            <img src={poster} alt={title} title={title} />
            <div className="animal__data">
                <h3 className="animal__title">{title}</h3>
                <h5 className="animal__year">{year}</h5>
                <ul className="genres">
                    {genres.map(genre => (
                    <li className="genres__genre">{genre}</li>))}
                </ul>
                <p className="animal__summary">{summary.slice(0, 180)}...</p>
            </div>
        </div>
    )
}

animals.prototypes = {
    id : PropTypes.number.isRequired,
    year : PropTypes.node.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
};

export default animals;
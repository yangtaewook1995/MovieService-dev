import React from "react";
import Animal from "./Animals.json";

function Animals ({name, image, description}) {
    return (
        <div className="animal">
            <img src={image} alt={name} title={name} />
            <div className="animals">
                <h3 className="animal__name">{name}</h3>
                <h5 className="animal__image">{image}</h5>
                <p className="animal__description">{description}</p>
            </div>
        </div>
    )
}

export default Animals;
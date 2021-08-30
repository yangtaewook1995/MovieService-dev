import { any } from 'prop-types';
import React from 'react';
import Wilson from "./wilson";
import Data from "./wilson.json";

class App extends React.Component {
    state = {
        characters : []
    }

    getCharacters = async () => {
        let wilson_json = await Data;
        await this.setState({characters : wilson_json});
    };

    componentDidMount() {
        this.getCharacters();
    }

    // renderMovies = (animal) => {
    //     return (
    //         <Animals 
    //             name={animal.name}
    //             image={animal.image}
    //             description={animal.description}
    //         />
    //     )
    // }

    render() {
        const {character} = this.state;

        return (
            <div>
                <h1>Animals</h1>
                {character.map(characters => {
                    return <Wilson name={characters.name} image={characters.image} tokenId={characters.tokenId} />
                })}
            </div>
        )
    }
}

export default App;

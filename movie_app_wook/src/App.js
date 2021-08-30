import React from 'react';
import PropTypes from "prop-types";
import axios from "axios";
import Animals from "./Animals";
import Animal from "./Animals.json";

class App extends React.Component {
    state = {
        aninamls : []
    }

    getMovies = async () => {
        // const { data : { data : { movies }}} = await axios.get("https://yts-proxy.now.sh/list_movies.json");
        const aninaml_json = Animal;
        await this.setState({aninamls : aninaml_json});
    };

    componentDidMount() {
        this.getMovies();
    }

    renderMovies = (animal) => {
        return (
            <Animals 
                name={animal.name}
                image={animal.image}
                description={animal.description}
            />
        )
    }

    render() {
        const { animals } = this.state;
        return (
            <section className="container">
                {
                    <div className="animals">
                        {animals.map(this.renderMovies)}
                    </div>
                }
            </section>
        )
    }
}

export default App;

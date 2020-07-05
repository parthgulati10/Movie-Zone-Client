import { flowRight as compose } from 'lodash';
import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import { getDirectorsQuery, addMovieMutation, getMoviesQuery } from '../queries/queries';

class AddMovie extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            genre: '',
            directorId: ''
        };
    }
    displayDirectors(){
        var data = this.props.getDirectorsQuery;
        if(data.loading){
            return( <option disabled>Loading directors</option> );
        } else {
            return data.directors.map(director => {
                return( <option key={ director.id } value={director.id}>{ director.name }</option> );
            });
        }
    }
    submitForm(e){
        e.preventDefault()
        // use the addMovieMutation
        this.props.addMovieMutation({
            variables: {
                name: this.state.name,
                genre: this.state.genre,
                directorId: this.state.directorId
            },
            refetchQueries: [{ query: getMoviesQuery }]
        });
    }
    render(){
        return(
            <form id="add-movie" onSubmit={ this.submitForm.bind(this) } >
                <div className="field">
                    <label>Movie name:</label>
                    <input type="text" onChange={ (e) => this.setState({ name: e.target.value }) } />
                </div>
                <div className="field">
                    <label>Genre:</label>
                    <input type="text" onChange={ (e) => this.setState({ genre: e.target.value }) } />
                </div>
                <div className="field">
                    <label>Director:</label>
                    <select onChange={ (e) => this.setState({ directorId: e.target.value }) } >
                        <option>Select director</option>
                        { this.displayDirectors() }
                    </select>
                </div>
                <button>+</button>
            </form>
        );
    }
}

export default compose(
    graphql(getDirectorsQuery, { name: "getDirectorsQuery" }),
    graphql(addMovieMutation, { name: "addMovieMutation" })
)(AddMovie);

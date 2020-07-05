import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// components
import MovieList from './components/MovieList';
import AddMovie from './components/addMovie';

// apollo client setup
const client = new ApolloClient({
    uri: 'https://movie-zone-server.herokuapp.com/'
});

class App extends Component {
  render() {
    return (
        <ApolloProvider client={client}>
            <div id="main">
                <h1>Movie-Zone</h1>
                <MovieList />
                <AddMovie />
            </div>
        </ApolloProvider>
    );
  }
}

export default App;

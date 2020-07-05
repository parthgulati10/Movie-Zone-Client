import { gql } from 'apollo-boost';

const getDirectorsQuery = gql`
    {
        directors {
            name
            id
        }
    }
`;

const getMoviesQuery = gql`
    {
        movies {
            name
            id
        }
    }
`;

const addMovieMutation = gql`
    mutation AddMovie($name: String!, $genre: String!, $directorId: String!){
        addMovie(name: $name, genre: $genre, directorId: $directorId){
            name
            id
        }
    }
`;

const getMovieQuery = gql`
    query GetMovie($id: ID){
        movie(id: $id) {
            id
            name
            genre
            director {
                id
                name
                age
                movie {
                    name
                    id
                }
            }
        }
    }
`;

export { getDirectorsQuery, getMoviesQuery, addMovieMutation, getMovieQuery };

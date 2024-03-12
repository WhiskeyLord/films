import React from 'react';
import { Search } from '../components/search';
import { Preloader } from '../components/preloader';
import { Movies } from '../components/Movies';


class Main extends React.Component {
    state = {
        movies: [],
        loding: true
    };
    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=cede46c0&s=matrix')
            .then((response) => response.json())
            .then((data) => this.setState({ movies: data.Search , loading: false}));
    }

    searchMovies = (str, type="all") => {
        fetch(`http://www.omdbapi.com/?apikey=cede46c0&s=${str}${type !== "all" ? `&type=${type}` : ""}`
        )
            .then((response) => response.json())
            .then((data) => this.setState({ movies: data.Search}));
    };
    render() {
        const { movies, loading } = this.state;
        return (
            <main className="container content">
            <Search searchMovies={this.searchMovies}/>
            
            {loading ? <Preloader/> : <Movies movies={this.state.movies}/>}
        
        </main>
        );
    }
}




export { Main };
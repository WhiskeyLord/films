import { Movie } from './Movie'

function Movies(props) {
    const { movies = [] } = props;

    return(
    <div className="movies">
    {movies.length ? (
    movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
    ) : (
        <h4 className="blue-text text-darken-2 long-text">Мы ничего не нашли(</h4>
    )}
    </div>
    );
}
export { Movies };
import React, {Component, Fragment} from 'react';
import Pagination from "./common/pagination";
import {getMovies} from "../services/fakeMovieService";
import {getGenres} from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import ListGroup from "./common/listGroup";
import { paginate } from "./utils/paginate";

class Movies extends Component {
	state = {
		movies: [],
		currentPage: 1,
		pageSize: 4,
		genres: []
	}

	componentDidMount() {
		const genres = [{ name: 'All Genres' }, ...getGenres()];
		this.setState({ movies: getMovies(), genres: genres });
	}

	handleDelete = (movie) => {
		// create new movie array with movies minus deleted one
		const movies = this.state.movies.filter(m => m._id !== movie._id);
		this.setState({movies: movies});
	}

	handleLike = (movie) => {
		const movies = [...this.state.movies];
		const index = movies.indexOf(movie);
		movies[index] = { ...movies[index] };
		movies[index].liked = !movies[index].liked;
		this.setState({ movies });
	}

	handlePageChange = (page) => {
		this.setState({ currentPage: page })
	}

	handleGenreSelect = genre => {
		this.setState({ selectedGenre: genre, currentPage: 1});
	}

	render() {
		const {length: count} = this.state.movies;
		const { pageSize, currentPage, movies: allMovies, genres, selectedGenre} = this.state;

		if (count === 0)
			return <p>There are no movies inf the database.</p>

		const filtered = selectedGenre && selectedGenre._id
			? allMovies.filter(m => m.genre._id === selectedGenre._id)
			: allMovies;

		const movies = paginate(filtered, currentPage, pageSize);

		return (
			<Fragment>
				<div className="container">
				<div className="row">
				<div className="col-4">
					<ListGroup
						items={this.state.genres}
						selectedItem={this.state.selectedGenre}
						onItemSelect={this.handleGenreSelect}
					/>
				</div>
				<div className="col-8">
				<p>Showing {filtered.length} movies in the database</p>
				<MoviesTable movies={movies} onLike={this.handleLike} onDelete={this.handleDelete} />
				<Pagination
					itemsCount={filtered.length}
					pageSize={pageSize}
					currentPage={currentPage}
					onPageChange={this.handlePageChange}
				/>
				</div>
				</div>
				</div>
			</Fragment>
		);
	}
}

export default Movies;

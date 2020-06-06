import React, {Component, Fragment} from 'react';
import Pagination from "./common/pagination";
import {getMovies} from "../services/fakeMovieService";
import {getGenres} from "../services/fakeGenreService";
import ListGroup from "./common/listGroup";
import Like from "./common/like";
import { paginate } from "./utils/paginate";

class Movies extends Component {
	state = {
		movies: [],
		currentPage: 1,
		pageSize: 4,
		genres: []
	}

	componentDidMount() {
		this.setState({ movies: getMovies(), genres: getGenres() });
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
		console.log("handleGenreSelect...");
	}

	render() {
		const {length: count} = this.state.movies;
		const { pageSize, currentPage, movies, genres } = this.state;

		if (count === 0)
			return <p>There are no movies inf the database.</p>

		const allMovies = paginate(movies, currentPage, pageSize);

		return (
			<Fragment>
				<div className="container">
				<div className="row">
				<div className="col-4">
					<ListGroup
						items={this.state.genres}
						onItemSelect={this.handleGenreSelect}
					/>
				</div>
				<div className="col-8">
				<p>Showing {count} movies in the database</p>
				<table className="table table-striped">
					<thead>
						<tr>
							<th>Title</th>
							<th>Genre</th>
							<th>Stock</th>
							<th>Rate</th>
							<th/>
							<th/>
						</tr>
					</thead>
					<tbody>
					{allMovies.map(movie => (
						<tr key={movie._id}>
							<td>{movie.title}</td>
							<td>{movie.genre.name}</td>
							<td>{movie.numberInStock}</td>
							<td>{movie.dailyRentalRate}</td>
							<td>
								<Like
									liked={movie.liked}
									onClick={() => this.handleLike(movie)}
								/>
							</td>
							<td>
								<button
									onClick={() => this.handleDelete(movie)}
									className="btn btn-danger btn-sm"
								>Delete</button>
							</td>
						</tr>
					))}
					</tbody>
				</table>
				<Pagination
					itemsCount={count}
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

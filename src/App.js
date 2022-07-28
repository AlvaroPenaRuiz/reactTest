import { Component } from 'react';
import './App.css';
import { getMovies } from './services/fakeMovieService'

class App extends Component {
	
	state = {
		movies: getMovies()
	}
	
	render() {
		return (
			<main className='container'>
				{this.recount()}
				{this.generateTable()}
			</main>
		)
	};

	recount(){
		if (this.state.movies.length === 0) return <span>There are no movies in the database.</span>
		return <span>Showing {this.state.movies.length} movies in the database.</span>
	}

	generateTable() {
		if (this.state.movies.length !== 0) return (
			<table className='table'>
				<thead>
					<tr>
						<th>Title</th>
						<th>Genre</th>
						<th>Stock</th>
						<th>Rate</th>
					</tr>
				</thead>
				<tbody>
					{
						this.state.movies.map(movie => (
						<tr key={movie["_id"]}>
							<td>{movie["title"]}</td>
							<td>{movie["genre"]["name"]}</td>
							<td>{movie["numberInStock"]}</td>
							<td>{movie["dailyRentalRate"]}</td>
							<td>
								<button className='btn btn-danger' onClick={() => this.handlerClickDelete(movie)}>DELETE</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		)
	}

	handlerClickDelete(movie){
		this.state.movies.forEach((posibility) => {

				if (posibility["_id"] === movie["_id"]){
					let index = this.state.movies.indexOf(movie)
					console.log(this.state.movies.splice(index, 1)[0])
				}

			}
		)
		this.setState({ movies: this.state.movies})
	}
}

export default App;

import React, {Component} from 'react';
import Counter from "./counter";

class Counters extends Component {
	state = {
		counters: [
			{id: 1, value: 3},
			{id: 2, value: 0},
			{id: 3, value: 0},
			{id: 4, value: 0},
		]
	};

	handleIncrement = (counter) => {
		console.log(counter);
		const counters = [...this.state.counters]; // clone state array, make copy
		const index = counters.indexOf(counter); // find the index of the counter being click or incremented
		counters[index] = {...counter};
		counters[index].value++;
		this.setState(
			{counters}
		)
	}

	handleDelete = (counterId) => {
		const counters = this.state.counters.filter(c => c.id !== counterId);
		this.setState({counters: counters});
	}

	handleReset = () => {
		const counters = this.state.counters.map(c => {
			c.value = 0;
			return c;
		});
		this.setState({counters: counters});
	}

	render() {
		return (
			<div>
				<button
					onClick={this.handleReset}
					className="btn btn-primary btn-sm m-2"
				>Reset
				</button>

				{this.state.counters.map(counter =>
					<Counter
						key={counter.id}
						onDelete={this.handleDelete}
						onIncrement={this.handleIncrement}
						counter={counter}
					/>)}
			</div>
		);
	}
}

export default Counters;

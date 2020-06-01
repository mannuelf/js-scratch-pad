import React, {Fragment,Component} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Counters from './components/Counters';

class App extends Component {
	state = {
		counters: [
			{id: 1, value: 3},
			{id: 2, value: 0},
			{id: 3, value: 0},
			{id: 4, value: 0},
		]
	};

	handleIncrement = (counter) => {
		const counters = [...this.state.counters]; // clone state array, make copy
		const index = counters.indexOf(counter); // find the index of the counter being click or incremented
		counters[index] = {...counter};
		counters[index].value++;
		this.setState({counters}); // new modified array
	}

	handleDelete = (counterId) => {
		const counters = this.state.counters.filter(c => c.id !== counterId);
		this.setState({counters: counters}); // new modified array
	}

	handleReset = () => {
		const counters = this.state.counters.map(c => {
			c.value = 0;
			return c;
		});
		this.setState({counters: counters}); // new modified array
	}

	render() {
		return (<Fragment>
			<NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
			<div className="container">
				<Counters
					counters={this.state.counters}
					onIncrement={this.handleIncrement}
					onDelete={this.handleDelete}
					onReset={this.handleReset}
				/>
			</div>
		</Fragment>
  );
	}
}

export default App;

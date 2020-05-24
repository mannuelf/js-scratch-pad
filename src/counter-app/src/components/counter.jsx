import React, {Component, Fragment} from "react";

class Counter extends Component {
	state = {
		value: this.props.value,
		tags: [],
		imageUrl: "https://picsum.photos/200"
	};

	//constructor() {
	//	super();
	//	this.handleIncrement = this.handleIncrement().bind(this);
	//}

	renderTags() {
		if (this.state.tags.length === 0) return <p>There are no tags</p>;
		return <ul>{this.state.tags.map((tag, index) => <li key={index}>{tag}</li>)}</ul>
	}

	handleIncrement = () => {
		this.setState({count: this.state.value + 1});
	}

	doHandleIncrement = (product) => {
		// dont build wrapper functions, rather do inline ones L38
		console.log(product)
		this.handleIncrement({id: 1});
	}

	render() {
		console.log(this.props);
		return (
			<div>
				{this.props.children}
				<span className={this.getBadgeClasses()}>
					{this.formatCount()}
				</span>

				<button
					onClick={(e) => this.handleIncrement()}
					className="btn btn-secondary btn-sm"
				>
					Increment
				</button>
			</div>
		);
	}

	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += this.state.value === 0 ? "warning" : "primary";
		return classes;
	}

	formatCount() {
		const {value} = this.state;
		return value === 0 ? "Zero" : value;
	}
}

export default Counter;

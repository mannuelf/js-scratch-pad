import React, {Component, Fragment} from "react";

class Counter extends Component {
	state = {
		count: 0,
		tags: ["tag1", "tag2"],
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
		this.setState({count: this.state.count + 1});
	}

	doHandleIncrement = (product) => {
		// dont build wrapper functions, rather do inline ones L38
		console.log(product)
		this.handleIncrement({id: 1});
	}

	render() {
		return (
			<div>
				<span className={this.getBadgeClasses()}>
					{this.formatCount()}
				</span>

				<button
					onClick={(e) => this.handleIncrement(product)}
					className="btn btn-secondary btn-sm"
				>
					Increment
				</button>

				{this.state.tags.length === 0 && 'Please create a new tag'}

				{this.renderTags()}
			</div>
		);
	}

	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += this.state.count === 0 ? "warning" : "primary";
		return classes;
	}

	formatCount() {
		const {count} = this.state;
		return count === 0 ? "Zero" : count;
	}
}

export default Counter;

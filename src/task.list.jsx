var React = require('react');
var ReactDOM = require('react-dom');

var TaskList = React.createClass({

		render: function () {

			// alsow with arrow functions
			var displayTask = (task) => <li>{task}</li>

			return (
				<div>
					<ul>
						{ this.props.items.map(displayTask) }
					</ul>
    		</div>
			);

    }

});

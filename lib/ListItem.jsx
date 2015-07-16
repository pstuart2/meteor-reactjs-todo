ListItem = React.createClass({
	removeTodo(event) {
		event.preventDefault();
		Todos.remove({_id: this.props.todo._id});
	},

	render() {
		return (
			<li className="collection-item">
				<div>{this.props.todo.content}
					<a onClick={this.removeTodo} href="#!"
					   className="secondary-content red-text text-darken-4">
						<i className="fa fa-remove"></i></a>
				</div>
			</li>
		);
	}
});

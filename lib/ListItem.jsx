ListItem = React.createClass({
	render() {
		return (
			<li className="collection-item">{this.props.todo.content}</li>
		);
	}
});

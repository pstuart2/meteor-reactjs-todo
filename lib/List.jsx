List = React.createClass({
	mixins: [ReactMeteorData],
	getMeteorData() {
		return {
			// Returns an array with all items in the collection
			todos: Todos.find({}, {sort: {createdAt: -1}}).fetch()
		}
	},
	render() {
		return (
			<ul className="collection with-header">
				<li className="collection-header"><h4>Todos</h4></li>
				{this.data.todos.map(function (todo) {
					return <ListItem key={todo._id} todo={todo}/>;
				})}
			</ul>
		);
	}
});

App = React.createClass({
	render() {
		return (
			<div>
				<Nav />
				<div className="container">
					<NewTodoForm />
					<List />
				</div>
			</div>
		);
	}
});

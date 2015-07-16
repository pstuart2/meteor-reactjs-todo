NewTodoForm = React.createClass({
	onSubmit(event) {
		event.preventDefault();

		var todoContent = React.findDOMNode(this.refs.content).value;

		Todos.insert({
			content: todoContent,
			createdAt: new Date()
		});

		React.findDOMNode(this.refs.content).value = "";
	},
	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<div className="row">
					<div className="input-field col s12">
						<input id="todo" type="text" ref="content" className="validate"/>
						<label htmlFor="todo">Enter a todo...</label>
					</div>
				</div>
			</form>
		);
	}
});

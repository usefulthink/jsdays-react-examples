var React = require('react');

var TodoInput = React.createClass({
    onChange: function(ev) {
        if(ev.keyCode === 13) {
            this.props.onTodoCreate(ev.target.value);
            ev.target.value = '';
        }

        this.setState({text: ev.target.value});
    },

    render: function() {
        return <input
            placeholder="was gibts zu tun?"
            onKeyDown={this.onChange} />;
    }
});

var TodoList = React.createClass({
    render: function() {
        return (
            <ul>
                { this.props.todos.map(function(todo, index) {
                    return <li key={index}>{todo}</li>;
                }) }
            </ul>
        );
    }
});

var TodoApp = React.createClass({
    getInitialState: function() {
        return {
            todos: [ 'Vortrag machen', 'Nach Salzburg fahren' ]
        };
    },

    onTodoCreate: function(text) {
        this.setState({
            todos: this.state.todos.concat([text])
        });
    },

    render: function() {
        return (
            <div>
                <h1>Todo</h1>

                <TodoInput onTodoCreate={this.onTodoCreate} />
                <TodoList todos={this.state.todos} />
            </div>
        );
    }
});

app.get('/', function(req, res) {
    res.send(React.renderToString(
        <TodoApp />
    ))
})

console.log();
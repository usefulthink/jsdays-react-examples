var React = require('react');

var InputWithLabel = React.createClass({
    getInitialState: function() {
        return {
            name: 'Ich'
        };
    },

    onInputChange: function(event) {
        this.setState({name: event.target.value});
    },

    render: function() {
        return (
            <div>
                <label htmlfor="name">Name:</label>
                <input value={this.state.name} onChange={this.onInputChange} />
            </div>
        );
    }
});


React.render(
    <InputWithLabel />,

    document.body
);
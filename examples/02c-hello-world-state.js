var React = require('react');


var Greeter = React.createClass({
    propTypes: {
        name: React.PropTypes.string
    },


    getInitialState: function() {
        return {
            isToggled: false
        }
    },


    render: function() {
        return (
            <div>
                <h1>Hello {this.props.name || 'World'}!</h1>
                <p>The state of this component is
                    {this.state.isToggled? 'on' : 'off'}</p>
            </div>
        );
    }
});


React.render(
    // Unsere Component ist automatisch als JSX-Element verfügbar.
    // Entscheidend der Variablenname
    <Greeter name="Javascript-Days" />,

    document.body
);
var React = require('react');

var Greeter = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired
    },

    /**
     * a components state must never be undefined.
     * getInitialState() is used to provide a state for initial
     * rendering.
     */
    getInitialState: function() {
        return {
            isToggled: false
        };
    },

    handleLinkClick: function(ev) {
        ev.stopPropagation();
        ev.preventDefault();

        // updating a components state automatically triggers
        // a re-rendering of the component, state-updates may be partial.
        this.setState({
            isToggled: !this.state.isToggled
        });

        // replaceState() would be an alternative which deletes keys that are not in the new state
    },

    render: function() {
        var stateName = this.state.isToggled? 'active' : 'inactive';

        return (
            <div>
                <h1>Hello {this.props.name || 'World'}</h1>
                <p>
                    The state of this component is {stateName},
                    click <a href="#" onClick={this.handleLinkClick}>here</a> to
                    change it.
                </p>
            </div>
        );
    }
});

React.render(
    <Greeter name="JSDays" />,
    document.body
);
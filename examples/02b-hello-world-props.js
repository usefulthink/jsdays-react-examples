var React = require('react');


var Greeter = React.createClass({
    propTypes: {
        name: React.PropTypes.string
        //name: React.PropTypes.string.isRequired
        //name: function(props, propName, componentName) {
        //    var value = props[propName];
        //
        //    if(!/^[a-z]+$/i.test(value)) {
        //        console.log('foo');
        //
        //        return new Error(
        //            'Expected only characters for ' + propName +
        //            ' in component ' + componentName);
        //    }
        //}
    },

    render: function() {
        return (
            <div>
                <h1>Hello {this.props.name || 'World'}!</h1>
                <p>Und ein bisschen Text..</p>
            </div>
        );
    }
});


React.render(
    // Unsere Component ist automatisch als JSX-Element verfügbar.
    // Entscheidend der Variablenname
    <Greeter name="Martin" />,

    document.body
);
var React = require('react');


var Greeter = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Hello World!</h1>
                <p>Und ein bisschen Text..</p>
            </div>
        );
    }
});


React.render(
    // Unsere Component ist automatisch als JSX-Element verfügbar.
    // Entscheidend der Variablenname
    <Greeter />,

    document.body
);
var React = require('react');

var listItems = ['Eins', 'Zwei', 'Drei'];
var list = (
    <ul>
        { listItems.map(function(item, index) {
            return <li key={index}>{item}</li>;
        }) }
    </ul>
);


React.render(
    <div>
        <h1>Hello World</h1>
        <p>Hier steht ein bisschen Text</p>

        // übergeben der JS-Variable list als child
        {list}
    </div>,

    document.body
);
'use strict';

console.log('app.js is running');

//JSX - JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'This is some info'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        )
    )
);

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Sam'
    ),
    React.createElement(
        'p',
        null,
        'Age: 34'
    ),
    React.createElement(
        'p',
        null,
        'Location: West Palm Beach, FL'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);

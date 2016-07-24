var React = require('react');

// var About = React.createClass({
//     render: function() {
//         return (
//            <h2>About component</h2>
//         )
//     }

// });

//this is a 'stateless function' (same as above's function)
var About = (props) => {
    return (
        <h2>About component</h2>
    )
};


module.exports = About;
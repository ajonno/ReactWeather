var React = require('react');

import RaisedButton from 'material-ui/RaisedButton';
import {deepOrange500} from 'material-ui/styles/colors';
import {indigoA400} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiTheme = getMuiTheme({
  palette: {
    // accent1Color: deepOrange500,
    // accent2Color: indigoA400
  },
});

var WeatherForm = React.createClass({
    
    onFormSubmit: function(e) {
        e.preventDefault(); //prevents entire page from reloading

        var location = this.refs.location.value;

        if (location.length > 0) {  //user entered some input data
            this.refs.location.value = ''; //clear input field
            this.props.onSearch(location);
        }
    },
    render: function() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <form onSubmit={this.onFormSubmit}>
                        <input type="text" ref="location"/>
                        <button className="button expanded">Get Weather</button>
                        <RaisedButton label="Get Weather" primary={true} fullWidth={true} />
                    </form>
                </div>
           </MuiThemeProvider>
        )
    }

});

module.exports = WeatherForm;

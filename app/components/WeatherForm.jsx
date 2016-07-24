var React = require('react');

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
           <div>
            <form onSubmit={this.onFormSubmit}>
               <input type="text" ref="location"/>
              <button className="button expanded">Get Weather</button>

            </form>
           </div>
        )
    }

});

module.exports = WeatherForm;

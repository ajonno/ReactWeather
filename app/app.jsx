var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');
var WeatherForm = require('WeatherForm');

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//load Foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <MuiThemeProvider>
      <Route path="/" component={Main}>
          <Route path="about" component={About}/>
          <Route path="examples" component={Examples}/>
          <IndexRoute component={Weather}/>

      </Route>
    </MuiThemeProvider>
  </Router>,
  document.getElementById('app')
);


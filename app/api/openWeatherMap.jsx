var axios = require('axios');

//generate the base url (to use as a template)
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=ed946478203a6feafce4992ab72bdd5f&units=metric';

module.exports = {
    getTemp: function(location) {
        //build the url
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
   
        return axios.get(requestUrl).then(function (res) {
            if (res.data.cod && res.data.message){
                throw new Error(res.data.message);            
            } else {
                return res.data.main.temp;
            }
        }, function (res) {
            throw new Error(res.data.message);
        });
    }
}


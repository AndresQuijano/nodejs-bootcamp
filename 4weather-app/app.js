const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

if (!address) {
    return console.log('Please enter a location');
}

geocode(address, (error, {latitude, longitud, location}={}) => {
    if (error) {
        return console.log(error);
    }

    forecast(latitude, longitud, (error, data) => {
        if (error) {
            return console.log(error);
        }
        console.log(location);
        console.log(data);
    })
});


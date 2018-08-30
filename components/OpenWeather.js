var axios = require ('axios')

const API_KEY = process.env.OPEN_WEATHER_API_KEY;

module.exports = {

  getWeather : (city, state) => {
    var url = "https://api.openweathermap.org/data/2.5/forecast?units=Imperial&q="
    if(city)
    url = url + city;

    if(state)
    url = url + ',' + state;


    url = url + '&APPID=' + API_KEY

    return (
      axios.get(url)
      .then((res) => {
        return { data: res.data }
      })
      .catch((error) => {
        console.log('Error:', error.message);
        return { error: error.message }
      })
      // testData
    )
  }
}

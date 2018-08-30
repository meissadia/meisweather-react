import testData from '../testData'
import Nav from '../components/Nav'
import TempDisplay from '../components/TempDisplay'
import OWeather from '../components/OpenWeather'


class Forecast extends React.Component {
  render(){
    var props = this.props;
    if(props.error){
      return (
        <div>
          <Nav />
          {props.error}
        </div>
      )
    }

    var cityName = props.data.city.name;
    var country = props.data.city.country

    return (
      <div>
      <Nav />
      <h2 className='forecast-title'>5-Day Forecast
        <style jsx>{`
          .forecast-title {
            text-align: center;
            background: #D0A037;
            margin: 0;
            padding: 20px 0 0 0;
          }
        `}</style>
      </h2>
      <div className='container'>
        {props.data.list.reduce((result, city, index) => {
          if (index%4 !== 0) { return result };
          result.push(
            <TempDisplay
              key={index}
              data={city}
              city={cityName}
              country={country}/>
          )
          return result;
        }, [])}
        <style jsx>{`
          .container {
            display: flex;
            flex-flow: row wrap;
            justify-content: space-between;
            align-content: center;
            height: 100vh;
            background: linear-gradient(#D0A037,#8B2112);
            color: white;
          }
        `}</style>
      </div>
    </div>
    )
  }
}

Forecast.getInitialProps = async ({req, query}) => {
  var params = query.input.split(',');
  var [city, state] = query.input.split(',').map((el) => (el.trim()));
  return OWeather.getWeather(city,state)
}

export default Forecast;

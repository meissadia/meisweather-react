const moment = require('moment');

function formatTimestamp(dt_txt) {
  var m = moment(dt_txt);

  return (
    <div>
      <div>{m.format('dddd MMMM Do')}</div>
      <div>{m.format('h:mm a')}</div>
    </div>
  )
}

var TempDisplay = (props) => {

  var base = 'http://openweathermap.org/img/w/'
  var data = props.data;
  const deg_f = <span class='degrees'>&#176;F</span>

  return (
    <div className="temp">
      <img src={base + data.weather[0].icon + '.png'} alt={data.weather[0].main + ' icon'} />
      <div>{props.city}{props.country === 'none' ? null : ', ' + props.country}</div>
      <div>{formatTimestamp(data.dt_txt)}</div>
      <p>{data.main.temp}{deg_f}</p>
      <style jsx>{`
        .temp {
          display: flex;
          flex-flow: column wrap;
          justify-content: space-around;
          align-items: center;
          width: 200px;
          margin: 0 50px;
        }
        .degrees {
          color: #3C7E9A;
        }
        p {
          padding: 10px 0;
          margin: 0;
        }
      `}</style>
    </div>
  )
}

export default TempDisplay;

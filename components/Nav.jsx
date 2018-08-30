import CityInput from './CityInput'

class Nav extends React.Component {
  render() {
    var props = this.props;
    return (
      <div className='container nav'>
        <p className='title'><a href='/'>{props.title}</a></p>
        <CityInput />
        <style jsx global>{`
            .container {
              display: flex;
              flex-flow: row wrap;
              justify-content: space-between;
              align-items: center;
            }

            .main {
              display: flex;
              flex-flow: column wrap;
              justify-content: center;
              align-content: center;
              height: 100vh;
              background-size: cover;
              background:
              url('http://artist-submarine-48713.netlify.com/app/images/pattern.svg')
              no-repeat
              center top;

            }

            .main p {
              align-self: center;
              text-align: center;
              font-size: 3em;
              color: white;
              font-weight: 100;
            }

            .cityInput {
              display: flex;
              flex-flow: row wrap;
              align-content: center;
            }

            .cityInput input {
              width: 200px;
              height: 50px;
              align-self: center;
              font-size: 1.1em;
              text-align: center;
              margin-right: 10px;
              border-radius: 10px;
              border: none;
            }

            a.button {
              background: #1CA229;
              color: white;
              border-radius: 10px;
              align-self: center;
              margin-right: 10px;
              font-size: 1.1em;
              padding: 10px;
              cursor: pointer;
              border: none;
              font-weight: 100;
              text-decoration: none;
            }

            a:hover{
              background: #1C72A2;
            }

            .title {
              font-size: 30px;
              font-weight: bold;
              color: white;
              margin-left: 10px;
            }

            .title a {
              text-decoration: none;
              color: white;

            }

            .title a:hover {
              background: none;
            }

            .columns {
              flex-flow: column wrap;
            }

            .columns input {
              margin-bottom: 15px;
            }

            .nav {
              background-color: #FC5A2C;
            }

            .temp {
              width: 100%;
              text-align: center;
              margin-top: 20px
            }

            body {
              margin: 0;
              font-family: -apple-system, system-ui, BlinkMacSystemFont ,Segoe UI ,Roboto ,Oxygen-Sans ,Ubuntu ,Cantarell ,Helvetica Neue , sans-serif;
            }
            `}
          </style>
        </div>
      )
    }
  }

  Nav.defaultProps = { title: 'MeisWeather' }

  export default Nav;

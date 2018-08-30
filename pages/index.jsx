import Nav from '../components/Nav'
import CityInput from '../components/CityInput'

class Index extends React.Component {
  constructor(props){
    super(props);
    this.updateInput = this.updateInput.bind(this);
    this.state = { userValue: '' }
  }

  updateInput(event){
    var string = event.target.value;
    this.setState(() => ({
      userValue: string
    }))
  }

  render(){
    return (
      <div>
        <Nav
          updateInput={this.updateInput}
          inputValue={this.state.userValue} />
        <div className="main">
          <p>Enter a City</p>
          <CityInput
            columns={true}
            updateInput={this.updateInput}
            inputValue={this.state.userValue} />
        </div>
      </div>
    )
  }
}

export default Index;

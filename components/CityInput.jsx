class CityInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '' }
    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(event){
    var val = event.target.value;
    this.setState(() => ({ inputValue: val }));
  }

  render(){
    var props = this.props;
    return (
      <div className={'cityInput' + (props.columns ? ' columns' : '')}>
        <input
          type="text"
          name={props.inputName}
          placeholder='Seattle'
          onChange={this.updateInput}
          value={this.state.inputValue}
          />
        
        <a className='button' href={encodeURI('/forecast?input=' + this.state.inputValue)}>{props.text}</a>
      </div>
    )
  }
}

CityInput.defaultProps = ({
  text: 'Get Weather',
  inputName: 'navInput',
  columns: false
});

export default CityInput;

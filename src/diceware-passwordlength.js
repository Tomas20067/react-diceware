import React, {Component} from 'react';

class DicewarePasswordLength extends Component {
  constructor(props) {
    super(props);
    this.handleChange= this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.updatePasswordLength(e.target.value);
  }

  render() {
    return <div>
      <label  className="column-left"
              htmlFor="passwordLengthInput"
              >password length: </label>
      <input  name="passwordLengthInput" 
              className="column-right"
              value={this.props.passwordLength}
              onChange={this.handleChange}
              type={"number"}
              min={4}
              max={10}
              ></input>
    </div>;
  }
}

export default DicewarePasswordLength;
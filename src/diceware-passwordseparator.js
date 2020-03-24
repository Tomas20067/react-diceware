import React, {Component} from 'react';

class DicewarePasswordSeparator extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.updateSeparator(e.target.value);
  }

  render() {
    return <div>
      <label className="column-left"
              htmlFor="separatorInput"
              >separator: </label>
      <input  name="separatorInput" 
              className="column-right"
              value={this.props.separator}
              onChange={this.handleChange}
              ></input>
    </div>
  }
}

export default DicewarePasswordSeparator;
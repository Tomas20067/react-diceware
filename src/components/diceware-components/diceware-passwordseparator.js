import React, { Component } from "react";
import PropTypes from "prop-types";
import DpgDiv from "./ui/dpgdiv";

class DicewarePasswordSeparator extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.updateSeparator(e.target.value);
  }

  render() {
    return (
      <DpgDiv>
        <label className="column-left" htmlFor="separatorInput">
          separator:{" "}
        </label>
        <input
          name="separatorInput"
          className="column-right"
          value={this.props.separator}
          onChange={this.handleChange}
        />
      </DpgDiv>
    );
  }
}

DicewarePasswordSeparator.propTypes = {
  updateSeparator: PropTypes.func.isRequired,
  separator: PropTypes.string.isRequired,
};

export default DicewarePasswordSeparator;

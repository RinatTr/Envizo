import React, { Component } from 'react';
import { Modal, Button } from 'react-materialize';
import M from 'materialize-css';

class Prediction extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentGoal: "",
      input_a: "",
      input_b: "",
      calcResult: "",
      frequency: "month",
      isSubmitted: false,
      isInvalid: ""
    }
  }

  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('select');
      M.FormSelect.init(elems);
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let { input_a, input_b } = this.state;
    let input_a_parse = parseInt(input_a);
    let input_b_parse = parseInt(input_b);
    let result = input_a_parse * input_b_parse;
    if (!isNaN(result)) {
      this.setState({
        calcResult: result,
        isSubmitted: true,
        isInvalid: ""
      })
    } else {
      this.setState({
        isSubmitted: true,
        isInvalid: "please submit a valid number",
        calcResult: ""
      })
    }
  }

  componentDidMount() {
    this.setState({
      currentGoal: this.props.currentGoal
    })
  }

  render() {
    let { input_a, input_b, calcResult, frequency, currentGoal, isSubmitted, isInvalid } = this.state;
    return (
      <>
        <Modal header={currentGoal} trigger={<Button small>Prediction</Button>}>
          <form onSubmit={this.handleSubmit}>
          <p>I shop for groceries <input placeholder="number of times" type="text" name="input_a" value={input_a} onChange={this.handleChange} />
          times per week, and use <input placeholder="number of bags" type="text" name="input_b" value={input_b} onChange={this.handleChange} />
          plastic bags on average each time.
          </p>
            {isSubmitted ? isInvalid : null}
          <button className="btn-small">CALC</button>
            {isSubmitted
              ? <> {calcResult}
                <div className='input-field col s6'>
                  <select defaultValue="1" onChange={this.handleChange}>
                    <option value="1">month</option>
                    <option value="2">year</option>
                  </select>
                </div>
                </>
              : null
            }
          </form>
        </Modal>
      </>
    )
  }
}

export default Prediction;

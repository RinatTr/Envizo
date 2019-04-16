import React, { Component } from 'react';
import { Modal, Button } from 'react-materialize';


class Prediction extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentGoal: "",
      input_a: "",
      input_b: "",
      calcResult: "",
      frequency: "month",
      isSubmitted: false
    }
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
    console.log(typeof input_a_parse, input_b_parse);
    if (input_a_parse !== "NaN" && input_b_parse !== "NaN") {
    let result = input_a_parse * input_b_parse;
        this.setState({
          calcResult: result,
          isSubmitted: true
        })
      }
  }


  componentDidMount() {
    this.setState({
      currentGoal: this.props.currentGoal
    })
  }

  render() {
    let { input_a, input_b, calcResult, frequency, currentGoal, isSubmitted } = this.state;
    return (
      <>
        <Modal header={currentGoal} trigger={<Button small>Prediction</Button>}>
          <form onSubmit={this.handleSubmit}>
          <p>I shop for groceries <input placeholder="number of times" type="text" name="input_a" value={input_a} onChange={this.handleChange} />
          times per week, and use <input placeholder="number of bags" type="text" name="input_b" value={input_b} onChange={this.handleChange} />
          plastic bags on average each time.
          </p>
          <button className="btn-small">CALC</button>
          {isSubmitted ? calcResult : null}
          </form>
        </Modal>
      </>
    )
  }
}

export default Prediction;

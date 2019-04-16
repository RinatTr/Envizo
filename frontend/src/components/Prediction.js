import React, { Component } from 'react';
import { Modal, Button, Select } from 'react-materialize';
import M from 'materialize-css';

//change the prediction text according to goal type.
class Prediction extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentGoal: "",
      currentStory: "",
      input_a: "",
      input_b: "",
      calcResult: "",
      frequency: "month",
      isSubmitted: false,
      isInvalid: ""
    }
  }

  componentDidMount() {
    let { currentGoal } = this.props;
    this.setState({
      currentGoal: currentGoal,
      currentStory: this.setStory(currentGoal)
    })
  }

  setStory = (currentGoal) => {
    let stories = { ["Reusable Grocery Bag"]: ["I shop for groceries","times per week, and use","plastic bags on average each time.","plastic bags"],
                    ["Drink Tap Water"]: ["I drink a bottled or canned beverage","times per week.","bottles and/or cans"],
                    ["Recyle"]: ["I recycle","times per week","all the paper, metal, plastic and glass I generate",""] }
    return stories[currentGoal];
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e = null) => {
    if (e) { e.preventDefault() }
    let { input_a, input_b, frequency } = this.state;
    let input_a_parse = parseInt(input_a);
    let input_b_parse = input_b ? parseInt(input_b) : 1;
    let weeks = (frequency === "month") ? 4.345 : 52.142
    let result = (input_a_parse * input_b_parse * weeks).toFixed(1);

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

  handleSelect = (e) => {
    this.setState({
      frequency: e.target.value
    }, this.handleSubmit)
  }

  render() {
    let { input_a, input_b, calcResult, frequency, currentGoal, currentStory, isSubmitted, isInvalid } = this.state;
    console.log(currentStory, currentGoal);
    return (
      <>
        <Modal header={currentGoal} trigger={<Button small>Prediction</Button>}>
          <form className="input-field col s6 FormContainer" onSubmit={this.handleSubmit}>
          {currentStory[0]}
            <div className='input-field col s6'>
              <input placeholder="input number of times" type="text" name="input_a" value={input_a} onChange={this.handleChange} />
            </div>
          {currentStory[1]}
          {!currentStory[2] ? null :
            <div className='input-field col s6'>
              <input placeholder="input number of bags" type="text" name="input_b" value={input_b} onChange={this.handleChange} />
            </div>
          }
            {currentStory[2]}
            {isSubmitted ? isInvalid : null}
          <button className="btn-small">CALC</button>
            {isSubmitted
              ? <>
              <div className='input-field col s6'>
                {/*Select materialize component does not accept "name" attribute*/}
                <Select onChange={this.handleSelect}>
                  <option value="month">month</option>
                  <option value="year">year</option>
                </Select>
              </div>
                You are polluting your community with <b>{calcResult}</b> {currentStory[3]} on average per {frequency}.
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

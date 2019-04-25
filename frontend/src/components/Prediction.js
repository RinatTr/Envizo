import React, { Component } from 'react';
import { Modal, Button, Select } from 'react-materialize';
// import M from 'materialize-css';
import { VisualPrediction } from  './VisualPrediction.js'

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
                    ["Drink Tap Water"]: ["I drink a bottled or canned beverage","times per week.","","bottles and/or cans"],

                    ["Recycle"]: ["I dispose about","paper, metal, plastic and glass items per week, and recycle about","precentage of it.","paper, metal, plastic and glass items"] }

    return stories[currentGoal];
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e = null) => {
    if (e) { e.preventDefault() }
    let { input_a, input_b, frequency, currentGoal } = this.state;
    let input_a_parse = parseInt(input_a);
    let input_b_parse = input_b ? parseInt(input_b) : 1;
    //b - precentage 0.5
    let weeks = (frequency === "month") ? 4.345 : 52.142
    let result = (currentGoal === "Recycle")
      ? input_a_parse - (input_a_parse * input_b_parse/100)
      : (input_a_parse * input_b_parse * weeks).toFixed(1)

    if (!isNaN(result)) {
      this.setState({
        calcResult: result,
        isSubmitted: true,
        isInvalid: ""
      })
    } else {
      this.setState({
        isSubmitted: true,
        isInvalid: "*Please submit a valid number",
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
    return (
      <>
        <Modal header={currentGoal} trigger={<Button small>Prediction</Button>}>
          <form className="input-field col s6 FormContainer" onSubmit={this.handleSubmit}>
          {currentStory[0]}
            <div className='input-field col s6'>
              <input placeholder="input number" type="text" name="input_a" value={input_a} onChange={this.handleChange} />
            </div>
          {currentStory[1]}
          {!currentStory[2] ? null :
            <div className='input-field col s6'>
              <input placeholder="input number" type="text" name="input_b" value={input_b} onChange={this.handleChange} />
            </div>
          }
            {currentStory[2]}
            {isSubmitted ? <p style={{color:'red'}}>{isInvalid}</p> : null}
            <p><button className="btn-small">SHOW MY IMPACT</button></p>
            {isSubmitted && !isInvalid
              ? <>
              <div className='input-field col s6'>
                {/*Select materialize component does not accept "name" attribute*/}
                <Select onChange={this.handleSelect}>
                  <option value="month">month</option>
                  <option value="year">year</option>
                </Select>
              </div>
                You are polluting your community with <b>{calcResult}</b> {currentStory[3]} on average each {frequency}.
              <VisualPrediction
                  result={calcResult}
                  type={currentGoal}/>
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

import React, { Component } from 'react'

export default class Item extends Component {

  constructor(props) {
    super(props);
    this.state = {
      "answer": false,
      "question": false,
      "selectedQusetion": '',
      "selectedAnswer": '',
      "selected": false
    }
  }

  componentDidMount() {

  }

  chooseItem = (props) => {
    console.log("click");
    this.setState(
      {
        "selected": !this.state.selected
      }
    );
    console.log(this.state.selected);
    if (this.props.type === "question") {
      this.setState({
        "question": true,
        "selectedQusetion": this.props.id
      });

      //console.log(this.state.question + " " + this.state.selectedQusetion);
    }
    if (this.props.type === "answer") {
      this.setState({
        "answer": true,
        "selectedAnswer": this.props.id
      });
      //console.log(this.state.answer + " " + this.state.selectedAnswer);
    }
    //console.log((this.state.question === true))
    if ((this.state.answer === true) && (this.state.question === true)) {
      console.log("add to array");
    }
  }
  render() {
    return (
      <div onClick={this.chooseItem} className="item-wrapper">
        <div className={this.state.selected ? 'selected' : 'not'} dangerouslySetInnerHTML={{ __html: this.props.content }} />
      </div>
    )
  }
}

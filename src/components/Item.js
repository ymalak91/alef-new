import React, { Component } from 'react'

export default class Item extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status: true,
      statusClass: "not-set"
    }

    const col1 = localStorage.getItem("col1");
    if (!(col1 == null)) {
      if (col1.includes(this.props.num) && this.props.col === "1") {
        this.state = {
          status: true,
          statusClass: "selected"
        }
      }
    }
    const col2 = localStorage.getItem("col2");
    if (!(col2 == null)) {
      if (col2.includes(this.props.num) && this.props.col === "2") {
        this.state = {
          status: true,
          statusClass: "selected"
        }
      }
    }

  }

  componentDidMount() {

  }

  componentDidUpdate() {

  }

  shouldComponentUpdate(nextProps, nextState) {
    const col1 = localStorage.getItem("col1");
    const col2 = localStorage.getItem("col2");
    const savedItemsCol1 = [col1];
    const savedItemsCol2 = [col2];
    if (nextState.status === true) {
      return false
    }
    if (savedItemsCol1.length === savedItemsCol2.length) {
      //console.log("they are equal");
      if (this.props.col === "1") {
        savedItemsCol1.push(this.props.num);
        localStorage.setItem("col1", savedItemsCol1);
        //console.log("add to col1");
        return true
      }
      if (this.props.col === "2") {
        savedItemsCol2.push(this.props.num);
        localStorage.setItem("col2", savedItemsCol2);
        //console.log("add to col2");
        return true
      }
    } else {
      //console.log("they are not equal");
      if (this.props.col === "1") {
        if (savedItemsCol1.length < savedItemsCol2.length) {
          //console.log("col1 < col2");
          savedItemsCol1.push(this.props.num);
          localStorage.setItem("col1", savedItemsCol1);
          //console.log("add to col1");
          return true
        } else {
          //console.log("do nothing because col1 > col2");
          return false
        }
      }
      if (this.props.col === "2") {
        if (savedItemsCol1.length > savedItemsCol2.length) {
          //console.log("col1 > col2");
          savedItemsCol2.push(this.props.num);
          localStorage.setItem("col2", savedItemsCol2);
          //console.log("add to col2");
          return true
        } else {
          //console.log("do nothing because col1 < col2");
          return false
        }
      }
    }


  }

  changeStatus = () => {
    this.setState(
      { status: !this.state.status }
    );
    if (this.state.status === true) {
      this.setState(
        { statusClass: "selected" }
      );
    } else {
      this.setState(
        { statusClass: "not-set" }
      );
    }

  }

  render() {
    return (
      <div id={this.props.num} className={"item-wrapper " + this.state.statusClass} onClick={this.changeStatus}>
        <div className="item-element"
          dangerouslySetInnerHTML={{ __html: this.props.content }} />
      </div>
    )
  }
}

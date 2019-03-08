import React, { Component } from 'react';
import Data from '../data/data.json';
import Item from './Item';

function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function makeArray(object) {
    var arr = [];
    const myObject = object;
    for (var key in myObject) {
        arr.push(myObject[key]);
    }
    return arr;
}


const contentArr = makeArray(Data.questions);
const contentArrSuff = shuffleArray(contentArr);
function printQuestions() {
    const questions =
        contentArrSuff.map((contentArrSuff, index) =>
            <Item
                col="1"
                num={contentArrSuff.id}
                key={index}
                content={contentArrSuff.text} />
        )



    return questions
}

const contentArr2 = makeArray(Data.answers);
const contentArrSuff2 = shuffleArray(contentArr2);
function printAnswers() {
    const answers =
        contentArrSuff2.map((contentArrSuff2, index) =>
            <Item
                col="2"
                num={contentArrSuff2.id}
                key={index}
                content={contentArrSuff2.text} />
        )

    return answers
}


export default class Col extends Component {

    constructor(props) {
        super(props);
        this.state = {
            col1: false,
            col2: false,
            selected: []
        }
    }

    componentDidUpdate() {
        console.log("Col Update");
    }

    clickedSameCol = (e) => {
        // e.preventDefault();
        if (e.currentTarget.id === "col1") {
            console.log(e.currentTarget.id);
            this.setState({
                col1: true
            });
        }
        if (e.currentTarget.id === "col2") {
            this.setState({
                col2: true
            });
        }
    }

    setStatus = () => {
        console.log("setStatus");
    }

    showResult() {

        const col1 = localStorage.getItem("col1");
        const col2 = localStorage.getItem("col2");
        if (!(col1 === null) && !(col2 === null)) {

            console.log(col1);
            console.log(col2);
            let corrextAnswers = 0;
            let wrongAnswers = 0;
            for (var i = col1.length; i--;) {
                //console.log(col1[i]);
                //console.log(col2[i]);
                if (col1[i] !== col2[i]) {
                    //console.log("false answer");
                    wrongAnswers = wrongAnswers + 1;
                } else {
                    if (col1[i] === ",") {
                        console.log("coma");
                    } else {
                        //console.log("correct answer");
                        corrextAnswers = corrextAnswers + 1;
                    }

                }
            }

             alert("Corrext answers = " + corrextAnswers + " / " + "Wrong answers = " + wrongAnswers);
        } else {
            alert("please answer at least one question ");
        }

    }


    render() {
        function horizontal() {
            const horizontal =
                <div className="row horizontal">
                    <div id="col1" className="col">
                        {printQuestions()}
                    </div>

                    <div id="col2" className="col">
                        {printAnswers()}
                    </div>
                </div>

            return horizontal
        }
        function vertical() {
            const vertical =
                <div className="row vertical">
                    <div id="col1" className="row">
                        {printQuestions()}
                    </div>

                    <div id="col2" className="row">
                        {printAnswers()}
                    </div>
                </div>
            return vertical
        }

        return (
            <React.Fragment>
                {this.props.layout === "h" ? horizontal() : vertical()}
                <button onClick={this.showResult} className="btn btn-primary show-result">result</button>
            </React.Fragment>

        )
    }
}

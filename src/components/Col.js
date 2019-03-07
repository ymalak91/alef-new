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


const contentArr = makeArray(Data.col1);
const contentArrSuff = shuffleArray(contentArr);
const listItems = contentArrSuff.map((contentArrSuff, index) =>
    <Item key={index} content={contentArrSuff.text} id={contentArrSuff.id} type="question" />
);

const contentArr2 = makeArray(Data.col2);
const contentArrSuff2 = shuffleArray(contentArr2);
const listItems2 = contentArrSuff2.map((contentArrSuff2, index) =>
    <Item key={index} content={contentArrSuff2.text} id={contentArrSuff2.id} type="answer" />
);


export default class Col extends Component {
    constructor(props) {
        super(props);

        this.state = {
            qusetions: listItems,
            answers: listItems2,
            selected: ""
        }
    }

    componentDidMount() {


    }
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col">
                    <h2>Question</h2>
                        {this.state.qusetions}
                    </div>
                    <div className="col">
                    <h2>Answer</h2>
                        {this.state.answers}
                    </div>
                </div>
            </React.Fragment>

        )
    }
}

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


export default class Col extends Component {

    constructor(props) {
        super(props);
        this.state = {
            col1: false,
            col2: false,
            selected: []
        }
    }
    componentDidMount() {


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


    render() {

        const contentArr = makeArray(Data.questions);
        const contentArrSuff = shuffleArray(contentArr);

        const contentArr2 = makeArray(Data.answers);
        const contentArrSuff2 = shuffleArray(contentArr2);

        return (
            <React.Fragment>
                <div className="row">
                    <div id="col1" className="col">
                        {contentArrSuff.map((contentArrSuff, index) =>
                            <Item
                                col="1"
                                num={contentArrSuff.id}
                                key={index}
                                content={contentArrSuff.text} />
                        )}
                    </div>

                    <div id="col2" className="col" >
                        {contentArrSuff2.map((contentArrSuff2, index) =>
                            <Item
                                col="2"
                                num={contentArrSuff2.id}
                                key={index}
                                content={contentArrSuff2.text} />
                        )}
                    </div>
                </div>
            </React.Fragment>

        )
    }
}

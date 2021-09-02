import React, { Component } from "react";

var result = "";

class RaffleBtn extends Component {
    constructor(props) {
        super(props);
        this.state = {result: ""};
      }

    getLists() {
        var lists = document.querySelectorAll('ul');
        var ready = lists[1].children;
        var added = lists[0].children;
        

        var readyList = Array.from(ready, li => li.textContent);
        var addedList = Array.from(added, li => li.textContent);

        var raffleList = readyList.concat(addedList);

        var x = Math.floor(Math.random() * raffleList.length);

        var result = raffleList[x];

        console.log(x, result);

        return result;

    }

    render() {
        return (
            <div>
                <button onClick={this.getLists}>Arvo</button>
                <p>{ result }</p>
            </div>
        )
    }
}

export default RaffleBtn;
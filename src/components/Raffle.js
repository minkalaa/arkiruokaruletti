import React, { Component, useState } from "react";

const initResult = "";

const RaffleBtn = () => {
    const [result, setResult] = useState(initResult);

    function startRaffle() {
        rotateWheel();

        setTimeout(function () { 
            getLists() }, 6000);
    }

    function rotateWheel() {
        var a = 1024;
        var b = 9999;
        var dgre = Math.floor(Math.random()*(a-b))+b;
        document.getElementById("inner-wheel").style.transform="rotate("+dgre+"deg)";
    }

    function getLists() {

        var lists = document.querySelectorAll('ul');
        var ready = lists[1].children;
        var added = lists[0].children;
        

        var readyList = Array.from(ready, li => li.textContent);
        var addedList = Array.from(added, li => li.textContent);

        var raffleList = readyList.concat(addedList);

        var x = Math.floor(Math.random() * raffleList.length);

        var newResult = raffleList[x];

        console.log(x, newResult);

        setResult(newResult);

    }
        return (
            <div>
                <button onClick={()=> startRaffle()}>Arvo</button>
                <p>{result}</p>
            </div>
        )
    }

export default RaffleBtn;
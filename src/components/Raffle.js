import React, { useState } from "react";
import './RaffleStyles.css';
import 'animate.css';

const initResult = "";

const RaffleBtn = () => {
    const [result, setResult] = useState(initResult);
    const resultBox = document.getElementById("resultBox");

    function startRaffle() {
        setResult("");
        document.getElementById("resultBox").style="visibility: hidden";
        if (resultBox.classList.contains('animate__animated')) {
            resultBox.classList.remove('animate__animated', 'animate__bounceIn');
        }
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

        resultBox.style="visibility: visible";
        resultBox.classList.add('animate__animated', 'animate__bounceIn');

    }
        return (
            <div>
                <button className="raffleBtn"
                 onClick={()=> startRaffle()}>Arvo</button>
                <div id="resultBox" className="resultBox">{result}</div>
            </div>
        )
    }

export default RaffleBtn;
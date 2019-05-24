import React from "react";
import "./style.css";


function Instructions(){
    return (
        <div className="jumbotron jumbotron-fluid mt-5" id='jtron'>
            <div className="container">
                <h4 className="display-4">Welcome to my React.js memory game</h4>
               <h3>How to Play:</h3>
               <ul>
                   <li>Each card contains a set score</li>
                   <li>The goal is to click the correct sequence of cards in order to reach the High Score</li>
                   <li>Some cards will knock your score back down to 0 so watch out!</li>
                   <li>The deck will reshuffle after each click so keep your memeory sharp</li>
               </ul>
            </div>
        </div>
    )
}

export default Instructions; 
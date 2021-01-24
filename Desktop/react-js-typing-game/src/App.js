import React from "react";
import "./App.css";
import { sentenceList } from "./sentences.js";
var senlislen = sentenceList().length;
let sentence;
sentence = sentenceList()[Math.floor(Math.random() * senlislen)];
//sentence = "happy birthday to you my dear friend";
let typingStarted = false;
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noOfWords: 0,
      timethen: new Date(),
      errorcount: 0,
      wordList: sentence.split(' '),
      wpm: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    // the starting timer to calculate the words per minute
    const {value} = event.target;
    if (!typingStarted) {
      this.setState({
        timethen: new Date(),
      });
      typingStarted = !typingStarted;
    }
    let {wordList,noOfWords,timethen} = this.state;
    let currentElement = document.getElementById(noOfWords);
    var presentWord = wordList[noOfWords];
    if(!`${presentWord} `.startsWith(value) ){
      this.handleTooManyErrors();
    } else {
      this.handleCorrection();
      if(!value.endsWith(' ')){
        currentElement.innerHTML = '';
        currentElement.innerHTML = `<span style="color:yellow">${value}</span><span class="shadow">${presentWord.replace(value,'')} </span>`;
      }
    }
    let comparedWord = '';
    (noOfWords === wordList.length-1)?comparedWord=presentWord:comparedWord=`${presentWord} `;
    if (comparedWord === value) {
      // We have typed a valid character
      event.target.value = '';
      currentElement.innerHTML = currentElement.innerHTML.replace('class="shadow"','');
      if(noOfWords === wordList.length-1){
        alert("Your WPM is: "+this.state.wpm);
        window.location.reload();
      } else {
        var timenow = new Date();
        let wordsByFive = wordList.slice(0,noOfWords).reduce((prev,present)=> {return prev+present.length},0)/4;
        this.setState({
          wpm: Math.floor(
            (wordsByFive) /
              ((timenow - timethen) / 60000)
          ),
        noOfWords: noOfWords+1,
        });
      }
    }
  }
  handleTooManyErrors() {
    var element = document.getElementById("inputBox");
    element.setAttribute("class", "errorclass");
  }
  handleCorrection(){
    var element = document.getElementById("inputBox");
    element.removeAttribute("class", "errorclass");
  }
  render() {
    return (
      <div id="container">
        <div className="paragraph">{
            this.state.wordList.map((word,index)=>{
              if(index!==this.state.wordList.length-1)
              return <span key={index} id={index}>{word} </span>
              else 
              return <span key={index} id={index}>{word}</span>
            })
       } 
       </div>
        <input
          type="text"
          autoFocus="autofocus"
          
          id="inputBox"
          value={this.state.userInput}
          onChange={this.handleChange}
          style={{ height: 50, fontSize: 30, fontWeight: "bold" }}
        />
        <div>WPM:{this.state.wpm}</div>
      </div>
    );
  }
}

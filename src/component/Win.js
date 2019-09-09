import React from "react";
import "./Win.css";

const Random = () => {  
  // array for the things to be displayed when clicked 
  var array = ["You lose 😥","You Win 😄"];
  // randomize the outcome 
  var randomOutcome = array[Math.floor(Math.random() * array.length)];
  return randomOutcome
}

class Win extends React.Component{
  render(){
    // when card is clicked the page will reset
    function refreshPage() {
      window.location.reload(false);
    }
  return(
    <div id="full">
      <h1>Pick a Card to Win!!!!!!!!!</h1>
      <br/>
      <p>Note** Click and Hold to select a card</p>
      <br/>
      {/* used the function to refeash when clicked  */}
      <div className="middle" onClick={refreshPage}>
      <div className="word" >
        {/* random outcome is displayed within the card */}
        <Random className="word"/>
        </div>
      </div>
      <div className="middle" onClick={refreshPage}>
        <div className="word" >
        <Random className="word"/>
      </div>
      </div>
      <div className="middle" onClick={refreshPage}>
        <div className="word" >
        <Random/>
        </div>
      </div>
    </div>
  )
  }
}

  export default Win;


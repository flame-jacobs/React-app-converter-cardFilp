import React, {Component} from "react";


class CurCun extends Component {
    constructor(props) {
      super(props);
  // setting the state to 0 
      this.state = {
        amount: 0,
      };
    }
    // setting the amopunt to the state
    cal(e){
       
       this.setState({
           amount: e
       })
    }
  
    render() {
      return (
        <div>
          

        <p>Dollar: ${this.state.amount} </p>
        {/* when input a number the other currencies changes */}
        <input type="text" onChange={(e) => this.cal(e.target.value)}/>
        <p>Rands: R ${this.state.Ran} </p>
        {/*  the state amount is times by the amount diffences of the currencies*/}
        <input value={(this.state.amount * 15.30).toFixed(2)}/>
        <p>Euros: €</p>
        <input value={(this.state.amount * 0.90).toFixed(2)}/>
        <p>Pounds: £</p>
        <input value={(this.state.amount * 0.83).toFixed(2)}/>
        </div>
      );
    }
  }
  
 

export default CurCun;
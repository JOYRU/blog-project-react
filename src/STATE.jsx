import React, { Component } from 'react'



export default class STATE extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count : 1
    }
  }

  handleIncrement= ()=>{
     this.setState({
      count: this.state.count + 1
     })
  }
  handleDecrement= ()=>{
    this.setState({
     count: this.state.count - 1
    })
 }

 handleReset= ()=>{
  this.setState({
   count: 0
  })
}

  
  render() {
    const {count} = this.state

    const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial",
      width:"30px"
    };


    return (
      <div>
        <h1>
          Count : {count} 
          
        </h1>
        <button style={mystyle}  onClick={this.handleIncrement} disabled={count == +5  ? true:false}>
          +
        </button>
        <button  style={mystyle}  onClick={this.handleDecrement} disabled={count == -5  ? true:false}>
          -
        </button>

        <button  style={mystyle}  onClick={this.handleReset}>
          0
        </button>
      </div>
    )
  }
}

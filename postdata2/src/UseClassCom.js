import React, { Component } from "react";

 class UseClassCom extends Component{
   
    handleClick(){
      alert('Button Click')
    }

    render(){
      return <button onClick={this.handleClick.bind(this)}>Click me</button>
    }

 }

 export default UseClassCom;
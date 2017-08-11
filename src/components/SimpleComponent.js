// Code SimpleComponentHere Here
import React from 'react';

export default class SimpleComponentHere extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      mood:"happy"
    }
  }

  changeMood = () => {
    if (this.state.mood === "happy") {
      this.setState({
        mood:"sad"
      })
    } else {
      this.setState({
        mood:"happy"
      })
    }
  }



  render(){
    return (
      <div onClick={this.changeMood}>
        <p>{this.state.mood}</p>
      </div>
    )
  }
}

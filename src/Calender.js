import React from 'react'
import moment from 'moment'
import November from './november'
import October from './October'
class Calender extends React.Component{
  constructor(){
    super()
    this.state={
      year:2020,
      month:10,
      montharr:['jan','feb','mar','apr','may','june','july','aug','sep','oct','nov','dec']
    }
  }

  goprev=()=>{
    if(this.state.month == 0){
      this.setState({
        month: 12
      }) 
      this.setState({
        year:this.state.year -1
      })
    }
    else{
       this.setState({
        month: this.state.month -1 
      }) 
    }
  
  }
  gonext=()=>{
   if(this.state.month == 12){
      this.setState({
        month: 1
      }) 
      this.setState({
        year:this.state.year + 1
      })
    }
    else{
       this.setState({
        month: this.state.month + 1 
      }) 
    }
  }
  todays = () =>{
    this.setState({
      month:10
    })
    this.setState({
      year:2020
    })
  }
  render(){

    return (
      <div>
      <div className="header">
        <div>
          {this.state.montharr[this.state.month-1]} {this.state.year}</div>
      
        <div>
          <button onClick={this.goprev}>prev</button>
          <button onClick={this.todays}>today</button>
          <button onClick={this.gonext}>next</button>
        </div>
      </div>

      {
        this.state.month % 12==10? <October/>:<November/>
      }
      
    </div>
    )
  }
}

export default Calender
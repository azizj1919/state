import React from 'react';
import './App.css';
import Person from './Components/Person';

class App extends React.Component{
  
state={
      person : { 
        fullName : "e36",
        bio : "drift car", 
        imgSrc : "https://i0.wp.com/livetooffend.com/wp-content/uploads/e36n-6.jpg?fit=1000%2C1143&ssl=1",
        profession : "Student at GOMYCODE"
      },
      show : false
    }
  
  render(){
    return(
      <div>
        <h1>dream car</h1>
        <button onClick={()=> this.setState({show : !this.state.show})}>{this.state.show ? 'Hide' : 'Show'}</button>
        {
          this.state.show &&  <Person person={this.state.person}/>
        }
        
      </div>
    )
  }
}

export default App;
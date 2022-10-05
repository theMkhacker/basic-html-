import React, {Component} from 'react';
import './App.css';
import Search from './placeholder';
import Particles from 'react-particles-js';
import Image from './Image';
class App extends Component {
  constructor(){
    super()
    this.state ={
      Searchfield: '',
      Searchtype : ''
    }
  }

  change=(event)=>{
   // console.log(event.target.value);
   this.setState({Searchfield:event.target.value})
    }
    anotherchange=(event)=>{
      //console.log(event.target.value);
      this.setState({Searchtype:event.target.value})
       }
  
render() {
  console.log(this.change);
  return (
    <div className='APP tc'>
       <Particles className='particles'
              params={{
            		particles: {
            		number:{
                  value:70,
                  density :{
                      enable:true,
                      value_area:500
                  }
                }
            		}
            	}}
                />
      <h1>RANDOM</h1><h2>IMAGE GENERATOR</h2>
      <div className='Blur'>
      <Search SearchChange={this.change} AnotherChange={this.anotherchange} SetValue={this.state.Searchtype} SearchValue={this.state.Searchfield} />
      </div>
      Created by - Mohit Kourav(M.K)
      <Image SearchValue={this.state.Searchfield} SetValue={this.state.Searchtype}/>   
    </div>
  );
}
}
export default App;
import React ,{Component} from 'react';
import './App.css';
import Navbar from './components/NavBar/NavBar';
import { BrowserRouter as Router} from "react-router-dom";
import SideBar from './components/SlideBar/sideBar';
import Banner from './components/Banner/Banner'
import About from './components/About/About';
import {AboutInfo,Anncounment} from './components/About/infoAbout'

import TeamMain from './components/Teams/TeamMain'

class App extends Component 
{ 
  state ={ isOpen :false}

  toggle =()=>{
    this.setState({isOpen :!(this.state.isOpen)});
  }
  render(){
  return (
    <Router>
    <div className="App">
      <SideBar isOpen={this.state.isOpen} toggle ={this.toggle}/>
      <Navbar toggle ={this.toggle}/>
      <Banner/>
       <About {...AboutInfo}/>
       <About {...Anncounment}/>
       <TeamMain/>
    </div>
    </Router>
  );
  }
}

export default App;

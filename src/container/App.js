import Navbar from "../components/navbar/Navbar";
import Card from "../components/Card/Card";
import "./App.css";
import {fetchData} from "../api/Api";
import React, { Component } from "react";
import Result from '../components/Result/Result'
import District from "../components/District/District";

export default class App extends Component {
  state = {
    cases: {},
    
  };
  async componentDidMount() {
    const result = await fetchData();
    this.setState({
      cases: result,
    });
  }


  
 
  render() {
    const { cases } = this.state;
    return (
      <div className="app__body">
        <Navbar />
        
        <Card data={cases} />
        
      
      </div>
    );
  }
}

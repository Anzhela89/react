import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
          <div className="wrapper">
      <SayFullName name="ivan" surname="petrov" link="vk.com" />
      <SayFullName name="iv" surname="petv" link="kjreshg.com" />
      <SayFullName name="an" surname="petov" link="erferg.com" />
      </div>
    );
  }
}

function SayFullName(props){
  
  return(
    <div>
      <h1> name is {props.name} surname is {props.surname}</h1>
      <a href={props.link}> link </a>
      </div>
    )
}


export default App;

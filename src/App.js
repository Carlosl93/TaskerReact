import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

// ----- Import Components ----- //
import SelectCurrency from './components/SelectCurrency/index.js';
import TaskList       from './components/index.js';
// ----- ----------------- ----- //

// This container should be eliminated when passing to electron
const BodyContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 50px;
`;

const MasterContainer = styled.div`
  height: 780px;
  width: 420px;
  background: linear-gradient(45grad, #5BBABE, #5BBABE, #93D3D2);
  border-radius: 20px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

class App extends Component {
  render() {
    return (
      <BodyContainer>
        <MasterContainer>
          <TaskList/>
        </MasterContainer>
      </BodyContainer>
    );
  }
}

export default App;

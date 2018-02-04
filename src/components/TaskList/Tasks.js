import React from 'react';
import styled from 'styled-components';

import TaskOrder from './TaskOrder.js';
import ToDo from './ToDo.js';
import Doing from './Doing.js';
import Done from './Done.js';

const TasksContainer = styled.div`
    width: calc(100% - 20px);
    height: 600px;
    margin: 10px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
`;

class Tasks extends React.Component{
    constructor(){
        super();

        this.state = {
            active: 1
        }
    }

    checkActive = (active) => this.setState({ active: active })

    renderActive = () => {
        switch(this.state.active){
            case 0:                
                return <ToDo checkActive={this.checkActive}/> 
            case 1: 
                return <Doing checkActive={this.checkActive} /> 
            case 2:
                return <Done checkActive={this.checkActive} /> 
        }
    }

    render(){
        return(
            <TasksContainer>
                <TaskOrder active={this.state.active} checkActive={this.checkActive}/>
                {
                    this.renderActive()
                }
            </TasksContainer>
        )
    }
}

export default Tasks;
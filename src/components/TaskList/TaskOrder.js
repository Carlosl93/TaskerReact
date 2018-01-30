import React from 'react';
import styled from 'styled-components';

// ----- Import Components ----- //
import ToDo from './ToDo.js';
// ----- ----------------- ----- //

const TasksOrderContainer = styled.div`
    width: calc(100% - 20px);
    height: 40px;
    margin: 10px;

    border-top: 2px solid rgba(72, 71, 95, 0.5);
    border-bottom: 2px solid rgba(72, 71, 95, 0.5);

    font-family: 'Open Sans Condensed', sans-serif;
    letter-spacing: 3px;
    text-transform: uppercase;
    
    display: flex;
    justify-content: center;
    align-items: center;

    color: #48475F;
`;

const TaskButton = styled.div`
    width: 100px;
    height: 10px;
    margin: 0px 5px;
    font-weight: 900;
    text-align: center;

    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 5px;

    font-size: ${props => props.active ? '18px' : '14px'};
    transition: 0.2s ease all;

    padding: 10px;

    cursor: pointer;

    &:hover {
        font-size: 16px;
        transition: 0.1s ease all;
    }
`;

class TaskOrder extends React.Component{
    render(){
        return(
            <TasksOrderContainer>
                <TaskButton active={this.props.active === 0} onClick={() => this.props.checkActive(0)}>
                    Today
                </TaskButton>
                <TaskButton active={this.props.active === 1} style={{borderRight: "1px solid rgba(72, 71, 95, 0.5)", borderLeft: "1px solid rgba(72, 71, 95, 0.5)" }} onClick={() => this.props.checkActive(1)}>
                    Doing
                </TaskButton>
                <TaskButton active={this.props.active === 2} onClick={() => this.props.checkActive(2)}>
                    Done
                </TaskButton>            
            </TasksOrderContainer>
        )
    }
}

export default TaskOrder;
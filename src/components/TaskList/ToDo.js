import React from 'react';
import styled from 'styled-components';
import ToDoItem from './Todo/ToDoItem.js';

const ToDoContainer = styled.div`
    width: calc(100% - 20px);
    height: 500px;    
    font-family: 'Open Sans Condensed', sans-serif;
    border-bottom: 1px solid rgba(72, 71, 95, 0.5);
`;

class ToDo extends React.Component {
    render() {
        return (
            <ToDoContainer>
                <ToDoItem />
                <ToDoItem />
                <ToDoItem />
                <ToDoItem />
                <ToDoItem />
            </ToDoContainer>
        )
    }
}

export default ToDo;
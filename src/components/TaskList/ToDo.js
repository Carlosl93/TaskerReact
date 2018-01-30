import React from 'react';
import styled from 'styled-components';
import ToDoItem from './Todo/ToDoItem.js';

const ToDoContainer = styled.div`
    width: calc(100% - 20px);
    height: 500px;    
    font-family: 'Open Sans Condensed', sans-serif;
    border-bottom: 2px solid rgba(72, 71, 95, 0.5);
    overflow-y: scroll;
    overflow-x: hidden;
`;

class ToDo extends React.Component {
    render() {
        return (
            <ToDoContainer>
                <ToDoItem 
                    title={'Make Stuff'}
                    tag={'TVC'} 
                />
                <ToDoItem 
                    title={'Work'}
                    tag={'TVC'} 
                />
                <ToDoItem 
                    title={'Finish your projects today motherfuckerr or you will die and one day you will be killed by a giant'}
                    tag={'TVC'} 
                />
                <ToDoItem 
                    title={'Marketing'}
                    tag={'TVC'} 
                />
                <ToDoItem 
                    title={'Make Stuff'}
                    tag={'TVC'} 
                />
                <ToDoItem 
                    title={'Make Stuff'}
                    tag={'TVC'} 
                />
                <ToDoItem 
                    title={'Make Stuff'}
                    tag={'TVC'} 
                />
                <ToDoItem 
                    title={'Make Stuff'}
                    tag={'TVC'} 
                />
                <ToDoItem 
                    title={'Make Stuff'}
                    tag={'TVC'} 
                />
                <ToDoItem 
                    title={'Make Stuff'}
                    tag={'TVC'} 
                />
            </ToDoContainer>
        )
    }
}

export default ToDo;
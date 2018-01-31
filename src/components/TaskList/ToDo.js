import React from 'react';
import styled from 'styled-components';
import ToDoItem from './Todo/ToDoItem.js';
import { map } from 'lodash';

const data = {
    items: [
        {
            title: 'Make Stuff',
            tag: 'TVC',
            description: [
                'Just do it!'
            ]
        },
        {
            title: 'fuck off',
            tag: 'FAN',
            description: [
                'Debe estar listo antes de las 6',
                'Debe tener alguna de las cosas propuestas ayer'
            ]
        }
    ]    
}

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
                {
                    map(
                        data.items, 
                        (item) => 
                            <ToDoItem 
                                title={item.title}
                                tag={item.tag}
                                description={item.description}
                            />                         
                    )
                }            
            </ToDoContainer>
        )
    }
}

export default ToDo;
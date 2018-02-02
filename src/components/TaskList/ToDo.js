import React from 'react';
import styled from 'styled-components';
import { map } from 'lodash';

import ToDoItem from './Todo/ToDoItem.js';
import ModalAddTask from './Todo/ModalAddTask.js';

const data = {
    items: [
        {
            title: 'Make Stuff',
            tag: 'TVC',
            description: 'Just do it!',
            active: false
            
        },
        {
            title: 'fuck off',
            tag: 'FAN',
            description: 'Debe tener alguna de las cosas propuestas ayer porque a veces las cosas son una real mierda porque no entiendo que coño',
            active: true
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

const IconAdd = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #48475F;
    height: 50px;
    opacity: 0.3;
    transition: 0.4s ease all;    

    &:hover {
        opacity: 1;
        transition: 0.1s ease all;
    }
`;


class ToDo extends React.Component {
    constructor(){
        super();
        this.state = { modal: false }
    }

    showModal = () => {
        this.setState({ modal: true });
    }

    closeModal = () => {
        this.setState({ modal: false });
    }

    render() {
        let { modal } = this.state;

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
                                active={item.active}
                            />                         
                    )
                }
                <IconAdd onClick={this.showModal}>
                    <i class="fas fa-plus-circle fa-2x" style={{cursor: "pointer"}}></i>      
                </IconAdd>            
                <ModalAddTask active={modal} closeModal={this.closeModal}/>
            </ToDoContainer>
        )
    }
}

export default ToDo;
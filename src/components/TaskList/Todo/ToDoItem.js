import React from 'react';
import styled from 'styled-components';

const ToDoItemContainer = styled.div`
    padding: 10px;
    padding-bottom: 10px;
    border-bottom: 1px dotted rgba(72, 71, 95, 0.5);
    font-size: 20px;
    color: #48475F;
    transition: 0.2s ease all;
    width: 320px;

    display: flex;
    flex-direction: column;

    &:hover {
        transition: 0.1s ease all;
        border-bottom: 1px solid rgba(72, 71, 95, 0.5);
    }
`;

const TaskContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Check = styled.div`
    width: 16px;
    height: 16px;
    border: 1px dotted #F0DA9B;
    border-radius: 50%;
    transition: 0.1s ease all;

    &:hover {
        width: 20px;
        height: 20px;
        transition: 0.2s ease all;
        border: 2px solid #F0DA9B;
        background: rgba(240, 218, 155, 0.4)
    }
`;

const Task = styled.div`
    margin-left: 10px;
`;

const Tag = styled.div`
    opacity: 0.7;
    background: #F0DA9B;
    width: 50px;
    height: 30px;
    text-align: center;

    &:hover {
        opacity: 1;        
    }
`;

const Icons = styled.div`
    
`;

const Description = styled.div`
    display: ${props => props.active ? 'flex' : 'none'};
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-left: 8px;

    width: 95%;
    
    border-left: 2px solid #F0DA9B;

    margin-top: 10px;
`;

const DescriptionInput = styled.input`
    width: 100%;
    height: 20px;
    border: none;
    margin: 0px 10px;
    background: transparent;
    font-family: 'Open Sans Condensed', sans-serif;
    color: rgba(72,71,95, 0.8);
    font-size: 16px;
`;

class ToDoItem extends React.Component {
    constructor() {
        super();
        this.state = {
            active: false
        }
    }

    checkToggle = () => {
        this.setState({ active: !this.state.active });
    }

    render() {
        let { active } = this.state;

        return (
            <ToDoItemContainer
                onClick={this.checkToggle}
            >
                <TaskContainer>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <Check />
                        <Task>Make stuff</Task>
                    </div>
                    {
                        active ?
                            <Icons>
                                <i className="fa fa-trash fa-1x" style={{ margin: "0px 5px" }} aria-hidden="true"></i>
                                <i className="fa fa-check-circle fa-1x" style={{ margin: "0px 5px" }} aria-hidden="true"></i>
                            </Icons>
                            :
                            <Tag>TVC</Tag>
                    }
                </TaskContainer>
                <div>
                    {
                        active ?
                            <Description active={active}>
                                <DescriptionInput placeholder='Description' type='text' autoFocus={true} />
                            </Description>
                            :
                            <div></div>
                    }
                </div>

            </ToDoItemContainer>
        )
    }
}

export default ToDoItem;
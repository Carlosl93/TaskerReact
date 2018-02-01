import React from 'react';
import styled from 'styled-components';
import { map } from 'lodash';

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

const Title = styled.div`
    margin-left: 10px;
    max-width: 235px;
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

const Icon = styled.div`
    width: 60px;
    height: 30px;
`;

const DescriptionContainer = styled.div`

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

const DescriptionText = styled.div`
    width: 100%;
    height: 20px;
    border: none;
    margin: 0px 10px;
    background: transparent;
    font-family: 'Open Sans Condensed', sans-serif;
    color: #48475F;
    font-size: 16px;
`;

const DescriptionInput = styled.div`
    width: 100%;
    border: none;
    height: auto;
    margin: 0px 10px;
    background: transparent;
    font-family: 'Open Sans Condensed', sans-serif;
    color: rgba(72,71,95, 1);
    font-size: 16px;
`;

class ToDoItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active: props.active,
            textArea: props.description,
            rows: 1,
            tagActive: false
        };
    }

    componentDidMount() {
        this.checkRows();
    }

    checkToggle = () => {
        this.setState({ active: !this.state.active });
    }

    checkRows = () => {
        if (this.state.textArea.length > this.state.rows * 50) {
            this.setState({ rows: Math.ceil(this.state.textArea.length / 50) });
        }
    }

    textAreaChange = (e) => {
        this.checkRows();
        this.setState({ textArea: e.target.value });
    }

    checkTagActive = () => {
        console.log(this.state.tagActive);
        this.setState({ tagActive: !this.state.tagActive });
    }

    render() {
        let { active, tagActive } = this.state;
        let { title, tag, description } = this.props;

        return (
            <ToDoItemContainer
                onClick={this.checkToggle}
                onMouseEnter={this.checkTagActive}
                onMouseLeave={this.checkTagActive}
            >
                <TaskContainer>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <Check />
                        <Title>{title}</Title>
                    </div>
                    {
                        tagActive && active ?
                            <Icon>
                                <i className="fa fa-trash-alt fa-1x" style={{ margin: "0px 5px" }} aria-hidden="true"></i>
                                <i className="fa fa-check-circle fa-1x" style={{ margin: "0px 5px" }} aria-hidden="true"></i>
                            </Icon>
                            :
                            <Tag>{tag}</Tag>
                    }
                </TaskContainer>
                <div>
                    {
                        active ?
                            <DescriptionContainer>
                                <Description active={active}>
                                    <DescriptionInput placeholder='Description' type='text'>
                                        <textarea style={{ paddingBottom: "5px" }} value={this.state.textArea} rows={this.state.rows} cols="50" onChange={this.textAreaChange} autoFocus={true}></textarea>
                                    </DescriptionInput>
                                </Description>
                            </DescriptionContainer>
                            :
                            <div></div>
                    }
                </div>

            </ToDoItemContainer>
        )
    }
}

export default ToDoItem;
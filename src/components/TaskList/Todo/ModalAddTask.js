import React from 'react';
import styled from 'styled-components';
import { Motion, spring } from 'react-motion';

const ModalContainer = styled.div`
    position: absolute;
    height: 780px;
    width: 420px;
    top: 20px;
    left: 20px;

    border-radius: 20px;
    z-index: 99;
    background: linear-gradient(45grad, #5BBABE, #5BBABE, #93D3D2);
    opacity: 0.9;
    transition: 0.2s ease all;
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`; 

const BoxContainer = styled.div`
    border: 1px dotted #48475F;
    border-radius: 20px;
`;

const InputContainer = styled.div`
    width: 90%;
    height: 80px;
    margin: 5px 0px;
    padding: 5px 60px;
    opacity: 1;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

const Label = styled.label`
    font-size: 20px;
`;

const Input = styled.input`
    outline: none;
    border: none;
    border-bottom: 1px solid #F0DA9B;
    background: transparent;
    font-family: 'Open Sans Condensed', sans-serif;
    color: rgba(72,71,95, 1);
    font-size: 24px;
    &:focus {
        outline: none;
        border: none;
        border-bottom: 1px solid #F0DA9B;
        background: transparent;
        font-family: 'Open Sans Condensed', sans-serif;
        color: rgba(72,71,95, 1);
        font-size: 24px; 
    }
`;

class ModalAddTask extends React.Component{
    render(){
        const { active, closeModal } = this.props;
        
        return(
            <div>
                {
                    active ? 
                        <ModalContainer>
                            <BoxContainer>
                                <InputContainer>
                                    <Label>Title</Label>
                                    <Input></Input>
                                </InputContainer>
                                <InputContainer>
                                    <Label>Project Tag</Label>
                                    <Input></Input>
                                </InputContainer>
                            </BoxContainer>
                        </ModalContainer>
                        :
                        <div></div>
                }
                </div>
            );
        }
    }

export default ModalAddTask;
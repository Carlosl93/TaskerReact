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
    opacity: ${props => props.alpha};
    transition: 0.2s ease all;
    
    display: flex;
    justify-content: center;
    align-items: center;
`;

class ModalAddTask extends React.Component{
    render(){
        const { active, closeModal } = this.props;
        
        return(
            <div>
                {
                    active ? 
                        <Motion defaultStyle={{opacity: 0}} style={{opacity: spring(0.8)}}>
                            {   value => 
                                {   
                                    console.log('value', value);
                                    return <ModalContainer alpha={value.opacity}>
                                        <div onClick={() => closeModal()}>x</div>
                                    </ModalContainer>
                                }                                
                            }
                        </Motion>
                        :
                        <Motion defaultStyle={{opacity: 0.8}} style={{opacity: spring(0)}}>
                            {
                                value => <div style={{opacity: `${value.opacity}`}}></div>
                            }
                            
                        </Motion>
                }
            </div>
        );
    }
}

export default ModalAddTask;
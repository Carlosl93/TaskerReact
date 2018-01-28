import React from 'react';
import styled from 'styled-components';

const DoneContainer = styled.div`
    width: calc(100% - 20px);
    height: 500px;
    border-bottom: 1px solid rgba(72, 71, 95, 0.5);
`;

class Done extends React.Component{
    render(){
        return(
            <DoneContainer>
            </DoneContainer>
        )
    }
}

export default Done;
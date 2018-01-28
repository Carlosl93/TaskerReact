import React from 'react';
import styled from 'styled-components';

const DoingContainer = styled.div`
    width: calc(100% - 20px);
    height: 500px;
    border-bottom: 1px solid rgba(72, 71, 95, 0.5);
`;

class Doing extends React.Component{
    render(){
        return(
            <DoingContainer>
            </DoingContainer>
        )
    }
}

export default Doing;
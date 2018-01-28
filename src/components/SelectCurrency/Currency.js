import React from 'react';
import styled from 'styled-components';
import { get } from 'lodash';

const CurrencyItem = styled.div`
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
    padding: auto;
    text-align: center;
    font-size: 34px;
    border-top: ${props => props.isActive ? "2px solid white" : "1px solid white"};
    border-bottom: ${props => props.isActive ? "2px solid white" : "1px solid white"};
    border-left: ${props => props.isActive ? "2px solid white" : "0"};
    border-right: ${props => props.isActive ? "2px solid white" : "0"};
    border-radius: 50%;
    transition: 0.5s ease all;
    &:hover {
        font-size: 38px;
        transition: 0.1s ease all;
    }

`;

const Text = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
    color: white;
    padding-top: 25px;
`;

class Currency extends React.Component{
    render(){
        return(
            <CurrencyItem isActive={this.props.isActive} onClick={this.props.checkActive}>
                <Text>{this.props.text}</Text>
            </CurrencyItem>
        )
    }
}
export default Currency;
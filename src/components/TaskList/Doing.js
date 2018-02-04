import React from 'react';
import styled from 'styled-components';
import { PieChart, Pie } from 'recharts';

const data = [{name: 'Group A', value: 400}, {name: 'Group A', value: 100}];

const DoingContainer = styled.div`
    width: calc(100% - 20px);
    height: 500px;
    border-bottom: 1px solid rgba(72, 71, 95, 0.5);
`;

const TimerContainer = styled.div`
    width: 100%;
    height: 300px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const Timer = styled.div`
    width: 72%;
    height: 80%;
    border-radius: 50%;
    border: 4px dashed #F0DA9B;
`;

class Doing extends React.Component{
    render(){
        return(
            <DoingContainer>
                <TimerContainer>
                    <PieChart width={300} height={300}>
                        <Pie fill="#F0DA9B" data={data} innerRadius={60} outerRadius={80} />
                    </PieChart>
                </TimerContainer>
            </DoingContainer>
        )
    }
}

export default Doing;
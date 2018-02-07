import React from 'react';
import styled from 'styled-components';
import { PieChart, Pie } from 'recharts';

const red = '#e27e8d';
const yellow = '#F0DA9B';
const blue = '#48475F';

const data = [{ name: 'Group A', value: 400 }, { name: 'Group A', value: 100 }];

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

    margin-top: 30px;
`;

const TimerLine = styled.div`
    width: ${props => `${props.size}px`};
    height: ${props => `${props.size}px`};

    border: 1px dashed #48475F;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
    transform: ${props => `rotate(${props.rotation}deg)`};
    transition: 1s ease all;
`

const Timer = styled.div`
    width: ${props => `${props.size}px`};
    height: ${props => `${props.size}px`};
    position: absolute;
    border-radius: 50%;
    background: ${props => props.color};
    transition: 0.8s ease all;
    color: #48475F;
`;

const Tag = styled.div`
    position: absolute;
    font-family: 'Open Sans Condensed', sans-serif;
    font-size: 48px;
    font-weight: 500;
    color: #48475F;

    z-index: 999;
`;

const CounterContainer = styled.div`
    width: 100%;
    height: 150px;
    font-family: 'Open Sans Condensed', sans-serif;
    color: #48475F;

    margin: 10px;

    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.div`
    margin: 10px 0px;
    font-size: 24px;
    border-bottom: 1px solid #48475F;
    opacity: 0.8;
`;

const Label = styled.p`
    font-size: 12px;
    opacity: 0.7;
`;

class Doing extends React.Component {
    constructor() {
        super();

        this.state = {
            rotation: 0,
            size: 270,
            timerSize: 260,
            color: blue,
            isPlay: false
        }
    }

    timerCheck = () => {
        let { rotation, size } = this.state;

        this.setState({
            rotation: rotation + 10,
            size: size >= 260 ? size - 20 : size + 20
        });
    }

    changeColor = () => {
        this.setState({
            color: red
        });
    };

    startTime = () => {
        this.setState(
            {
                color: yellow,
                timerSize: 300,
                isPlay: true
            },
            () => setInterval(
                this.timerCheck, 1000
            )
        )
    };

    renderTag = () => {
        if (this.state.isPlay) {
            return 'TVC';
        } else {
            return <i
                className="fas fa-play fa-1x"
                style={{ color: yellow, marginLeft: '10px' }}
            ></i>;
        }
    }

    render() {
        let { rotation, size, color, timerSize, isPlay } = this.state;

        console.log(this.state);
        return (
            <DoingContainer>
                <TimerContainer>
                    <TimerLine size={timerSize} rotation={rotation} />
                    <Timer size={size} color={color} />
                    <Tag onClick={this.startTime}>
                        <div>
                            {
                                this.renderTag()
                            }
                        </div>
                    </Tag>
                </TimerContainer>
                <CounterContainer>
                    <Title>Change the fonts of the title</Title>
                </CounterContainer>
            </DoingContainer>
        )
    }
}

export default Doing;
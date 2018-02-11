import React from 'react';
import styled from 'styled-components';
import { PieChart, Pie } from 'recharts';

const red = '#e27e8d';
const yellow = '#F0DA9B';
const blue = '#48475F';
let timer;

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
    text-align: center;
    width: 150px;

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

const PauseContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    margin-left: 10px;
`

class Doing extends React.Component {
    constructor() {
        super();

        this.state = {
            rotation: 0,
            size: 270,
            isPlay: false,
            hover: false,
        }
    }

    componentDidMount() {
        this.checkState('INITIAL');
    }

    startTime = () => {
        timer = setInterval(
            this.intervalCheck, 1000
        );
    }

    endTime = () => {
        clearInterval(timer);
    }

    intervalCheck = () => {
        let { rotation, size } = this.state;
        this.setState({
            rotation: rotation + 5,
            size: size >= 260 ? size - 20 : size + 20
        });
    }

    checkState = (nextState) => {
        switch (nextState) {
            case 'INITIAL':
                this.setState({
                    color: blue,
                    timerSize: 260,
                    onState: 'INITIAL'
                });
                return;
            case 'PLAY':
                this.setState({
                    color: yellow,
                    timerSize: 300,
                    onState: 'PLAY'
                });
                this.startTime();
                return;
            case 'PAUSE':
                this.setState({
                    color: red,
                    size: 270,
                    timerSize: 260,
                    onState: 'PAUSE'
                });
                this.endTime();
                return;
        }
    }

    checkRender = () => {
        switch (this.state.onState) {
            case 'INITIAL':
                return <i
                    onClick={() => this.checkState('PLAY')}
                    className="fas fa-play fa-1x"
                    style={{ color: yellow, marginLeft: '10px' }}
                ></i>;
            case 'PLAY':
                if (!this.state.hover) {
                    return <div>
                        00:00:00
                    </div>
                } else {
                    return <i
                        onClick={() => this.checkState('PAUSE')}
                        className="fas fa-pause"
                        style={{ color: blue, cursor: 'pointer' }}
                    ></i>
                };
            case 'PAUSE':
                if (!this.state.hover) {
                    return <div>
                        00:00:00
                    </div>
                } else {
                    return <PauseContainer>
                        <i
                            onClick={() => this.checkState('PLAY')}
                            className="fas fa-play"
                            style={{ margin: "0px 5px", color: blue, cursor: 'pointer' }}
                        ></i>
                        <i
                            onClick={() => this.checkState('INITIAL')}
                            className="fas fa-check-circle"
                            style={{ margin: "0px 5px", color: blue, cursor: 'pointer' }}
                        ></i>
                    </PauseContainer>
                };
                return;
        }
    }

    checkHover = () => {

        this.setState({ hover: !this.state.hover })
        console.log(this.state.hover);
    }

    render() {
        let { rotation, size, color, timerSize, isPlay, render } = this.state;

        return (
            <DoingContainer>
                <TimerContainer>
                    <TimerLine size={timerSize} rotation={rotation} />
                    <Timer size={size} color={color} />
                    <Tag onMouseEnter={this.checkHover} onMouseLeave={this.checkHover}>
                        <div>
                            {
                                this.checkRender()
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
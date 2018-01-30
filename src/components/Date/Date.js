import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { map } from 'lodash';

const DateContainer = styled.div`
    width: calc(100% - 20px);
    height: 100px;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    margin: 0;
    margin-bottom: -20px;
    margin-top: 30px;
    color: #48475F;
`;

const CurrentDay = styled.div`
    width: 70%;
    height: 100px;
    font-size: 72px;
    font-weight: 500;
    letter-spacing: 3px;
    text-align: center;
    opacity: 0.9;
    transition: 0.1s ease all;
    margin-bottom: 18px; 

    &:hover {
        opacity: 1;
        transition: 0.2s ease all;
    }
`;

const TimeContainer = styled.div`
    width: 30%;
    height: 100px;

    display: flex;
    flex-direction: column;
`;

const Hour = styled.div`
    width: 100%;
    height: 50px;
    letter-spacing: 3px;
    font-size: 38px;
    text-align: center;
`;

const IconTime = styled.div`
    width: 100%;
    height: 50px;
    text-align: center;
`;

let interval = '';

class Date extends React.Component {

    constructor(){
        super();
        this.state = { 
            active: true,
            hour: this.formatString( moment().hour() ),
            minute:  this.formatString( moment().minute() ),
            day: moment().date(),
            month: moment().month(0).format('MM')
        };
    }

    componentDidMount() {
        this.startTimer();
    }

    componentWillUnmount() {
        clearInterval(interval);
    }

    ///Starts the timers when the component is mounted
    startTimer = () => {
        interval = setInterval(
            () => {
                this.setState({ 
                    active: !this.state.active,
                    hour: this.formatString( moment().hour() ),
                    minute: this.formatString(moment().minute()),             
                });                
            },
            1000
        );
    }
    ///Render position of the sun/moon based on the checkSunPosition returned array
    renderSun = () => {
        return map(
            this.checkSunPosition(), 
            (item) => {
                let hour = moment().hour();
                if(item == 'a'){
                    return <i className="fa fa-sun-o fa-2x" style={{"textAlign": "center"}} aria-hidden="true"></i>; 
                } else if(item == 'n'){
                    return <i className="fa fa-moon-o fa-2x" style={{"textAlign": "center"}}aria-hidden="true"></i>;
                } else {
                    return '-';
                }
            }
        )
    }
    ///Checks the sun/moon position and returns an array with '-', 'n' for the moon or 'a' for the sun
    checkSunPosition = () => {
        let currentHour = moment().hour();
        let arraySun = [];

        if(currentHour >= 6 && currentHour < 18){
            let sunPosition = (currentHour - 6);            
            for(let i = 0; i <= 10; i++){
                sunPosition == i ? arraySun.push('a') : arraySun.push('-');
            }            
        } else if((currentHour >= 18 && currentHour <= 24) || (currentHour >= 1 && currentHour < 6)){
            let sunPosition = 0;
            if(currentHour >= 1 && currentHour < 6){
                sunPosition = currentHour + 4;
            } else if(currentHour >= 18 && currentHour <= 24){
                sunPosition = currentHour - 18;
            }
            for(let i = 0; i <= 10; i++){             
                sunPosition == i ? arraySun.push('n') : arraySun.push('-');
            }   
        }
        console.log('arraySun', arraySun);
        return arraySun;
    }
    ///Checks if the time argument is less than 1 and return '0+time'
    formatString = (time) => {
        if(time.toString().length <= 1){
            return `0${time}`;
        } else {
            return time.toString();
        }
    }

    render() {
        let { active, hour, minute, day, month } = this.state;

        return (
            <DateContainer>
                <CurrentDay>
                    {`${day}/${month}`}
                </CurrentDay>
                <TimeContainer>
                    <Hour>
                        {`${hour}${active ? ':' : '.'}${minute}`}
                    </Hour>
                    <IconTime>
                        {
                            this.renderSun()
                        }
                    </IconTime>
                </TimeContainer>
            </DateContainer>
        )
    }
}

export default Date;
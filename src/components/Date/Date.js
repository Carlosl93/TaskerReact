import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const DateContainer = styled.div`
    width: calc(100% - 20px);
    height: 100px;
    margin: 10px;
    display: flex;
    font-family: 'Quicksand', sans-serif;
    margin: 0;
    margin-bottom: -20px;
    margin-top: 30px;
    color: #48475F;
`;

const CurrentDay = styled.div`
    width: 70%;
    height: 100px;
    font-size: 72px;
    font-weight: 300;
    letter-spacing: 3px;
    text-align: center;
    opacity: 0.9;
    transition: 0.1s ease all;

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
    font-family: 'Open Sans Condensed', sans-serif;
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
            hour: moment().hour(),
            minute:  moment().minute(0).format('MM'),
            day: moment().date(),
            month: moment().month(0).format('MM')
        };
    }

    componentDidMount() {
        interval = setInterval(
            () => {
                this.setState({ 
                    active: !this.state.active,
                    hour: moment().hour(),
                    minute: moment().minute(0).format('MM')                  
                });                
            },
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(interval);
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
                        {`${hour}${active ? ':' : ' '}${minute}`}
                    </Hour>
                    <IconTime>
                        ----------
                        <i class="fa fa-sun-o fa-2x" style={{"textAlign": "center"}} aria-hidden="true"></i>
                        -
                    </IconTime>
                </TimeContainer>
            </DateContainer>
        )
    }
}

export default Date;
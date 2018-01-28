import React from 'react';
import styled from 'styled-components';

// ----- Import Components ----- //
import Date from './Date/Date.js';
import Tasks from './TaskList/Tasks.js';
// ----- ----------------- ----- //

const TaskContainer = styled.div`
    width: 90%;
    height: 95%;
`;

class TaskList extends React.Component{
    render(){
        return(
            <TaskContainer>
                <Date /> 
                <Tasks />
            </TaskContainer>
        )
    }
}

export default TaskList;
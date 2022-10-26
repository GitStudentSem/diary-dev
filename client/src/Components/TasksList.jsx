import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import TaskItem from './TaskItem';

const StyledTasksList = styled.ul`
    list-style-type: none;
    padding: 0 5px 0 0;
    height: calc(100% - 75px); // Высота зависит от шапки
    overflow-y: auto;
`;

const TasksList = ({ taskOnDay }) => {
    return (
        <StyledTasksList>
            {taskOnDay.length > 0 &&
                taskOnDay[0].tasksOnDay.map((taskItem, index) => {
                    return (
                        <TaskItem
                            key={taskItem.text + index}
                            taskItem={taskItem}
                            index={index}
                        />
                    );
                })}
        </StyledTasksList>
    );
};

export default TasksList;

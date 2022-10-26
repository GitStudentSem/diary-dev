import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { AiFillDelete } from 'react-icons/ai';
import Star from './Star';

const StyledTask = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    width: 100%;
    transition: 0.3s;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
`;
const StyledTaskText = styled.p`
    flex-grow: 1;
    text-align: start;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-right: 10px;
    overflow: hidden;
    margin-left: 5px;
`;
const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
    margin: 0;
    padding: 0;
    transition: all 0.3s;
    padding: 2px 5px;
    margin-left: 5px;
    border-radius: 5px;
    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
`;

const TaskItem = ({ taskItem, index }) => {
    // date.toISOString().slice(0, 10)
    const [isImportant, setIsImportant] = useState(false);

    const deleteTask = (index) => {
        // const reducedArr = [...currentTasks];
        // reducedArr.splice(index, 1);
        // setCurrentTasks(reducedArr);
    };

    return (
        <StyledTask>
            <Star setValue={setIsImportant} value={isImportant} />

            <StyledTaskText>{taskItem.text}</StyledTaskText>
            <StyledButton
                onClick={() => {
                    deleteTask(index);
                }}
            >
                <AiFillDelete size={20} fill='rgba(255, 255, 255, 0.8)' />
            </StyledButton>
        </StyledTask>
    );
};

export default TaskItem;

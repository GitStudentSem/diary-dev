import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { AiFillCheckCircle, AiFillDelete } from 'react-icons/ai';
import Star from './Star';

const StyledDay = styled.div`
    position: relative;
    width: 24%;
    border-radius: 10px;
    height: 50%;
    max-height: 48%;
    background-color: rgba(255, 255, 255, 0.2);
    padding: 5px;
    overflow: hidden;
`;

const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;
`;

const StyledHeaderDay = styled.p`
    font-weight: 500;
    font-size: 18px;
    color: rgba(255, 255, 255, 0.8);
`;
const StyledHeaderDayOfWeek = styled(StyledHeaderDay)`
    color: rgba(255, 255, 255, 0.6);
`;
const StyledTaskList = styled.ul`
    list-style-type: none;
    padding: 0 5px 0 0;
    height: calc(100% - 75px); // Высота зависит от шапки
    overflow-y: auto;
`;

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

const StyledForm = styled.form`
    display: flex;
`;
const StyledInput = styled.input`
    outline: none;
    border: none;
    flex: 1;
    background-color: rgba(255, 255, 255, 0.2);
    padding: 2px 5px;
    border-radius: 5px;
    &::placeholder {
        color: rgb(255, 255, 255);
    }
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

const Day = ({ date, monthNames, weekDays }) => {
    const [text, setText] = useState('');
    const [isImportant, setIsImportant] = useState(false);
    const [currentTasks, setCurrentTasks] = useState([]);

    return (
        <StyledDay>
            <StyledHeader>
                {date ? (
                    <>
                        <StyledHeaderDay>
                            {monthNames[date.getMonth()]} {date.getDate()}
                        </StyledHeaderDay>

                        <StyledHeaderDayOfWeek>
                            {weekDays[date.getDay()]}
                        </StyledHeaderDayOfWeek>
                    </>
                ) : (
                    <StyledHeaderDay>Другие задачи</StyledHeaderDay>
                )}
            </StyledHeader>

            <StyledForm>
                <StyledInput
                    type='text'
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                    placeholder='Какие планы?'
                />
                <Star setValue={setIsImportant} value={isImportant} />

                <StyledButton
                    onClick={(e) => {
                        e.preventDefault();
                        setCurrentTasks([
                            ...currentTasks,
                            { text, isImportant },
                        ]);
                        setText('');
                        setIsImportant(false);
                    }}
                    disabled={!text}
                >
                    <AiFillCheckCircle
                        size={20}
                        fill={
                            text
                                ? 'rgba(255, 255, 255)'
                                : 'rgba(255, 255, 255, 0.6)'
                        }
                    />
                </StyledButton>
            </StyledForm>

            <StyledTaskList>
                {currentTasks.map((taskItem, index) => {
                    return (
                        <StyledTask key={taskItem.text + index}>
                            <Star
                                setValue={setIsImportant}
                                value={isImportant}
                            />

                            <StyledTaskText>{taskItem.text}</StyledTaskText>
                            <StyledButton>
                                <AiFillDelete
                                    size={20}
                                    fill='rgba(255, 255, 255, 0.8)'
                                />
                            </StyledButton>
                        </StyledTask>
                    );
                })}
            </StyledTaskList>
        </StyledDay>
    );
};

export default Day;

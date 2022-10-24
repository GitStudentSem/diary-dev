import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { AiFillCheckCircle, AiFillStar } from 'react-icons/ai';

const StyledDay = styled.div`
    position: relative;
    width: 24%;
    border-radius: 10px;
    height: 50%;
    max-height: 48%;
    background-color: #fff;
    padding: 10px;
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
`;
const StyledHeaderDayOfWeek = styled(StyledHeaderDay)`
    opacity: 0.5;
`;
const StyledTaskList = styled.ul`
    list-style-type: none;
    padding: 0;
    height: calc(100% - 50px);
    /* height: 200px; */
    /* max-height: 250px; */
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 8px; /* ширина scrollbar */
    }
    &::-webkit-scrollbar-track {
        background: #ccc; /* цвет дорожки */
        border-radius: 20px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: darkcyan; /* цвет плашки */
        border-radius: 20px; /* закругления плашки */
        border: 3px solid #ccc; /* padding вокруг плашки */
    }
`;

const StyledTask = styled.li`
    display: flex;
    align-items: center;
    padding: 5px 0 5px 5px;
    width: 100%;
    transition: 0.3s;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
        background-color: rgba(0, 139, 139, 0.7);
    }
`;
const StyledTaskText = styled.p`
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-right: 10px;
    overflow: hidden;
    margin-left: 5px;
`;

const StyledForm = styled.form`
    display: flex;
    margin-bottom: 5px;
`;
const StyledInput = styled.input`
    outline: none;
    border: none;
    flex: 1;
`;
const StyledButton = styled.button`
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
        background-color: #ccc;
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
                <StyledButton
                    onClick={(e) => {
                        e.preventDefault();
                        setIsImportant(!isImportant);
                    }}
                >
                    <AiFillStar
                        size={20}
                        fill={isImportant ? 'orange' : 'grey'}
                    />
                </StyledButton>

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
                        fill={text ? 'darkcyan' : 'gray'}
                    />
                </StyledButton>
            </StyledForm>

            <StyledTaskList>
                {currentTasks.map((taskItem, index) => {
                    return (
                        <StyledTask key={taskItem.text + index}>
                            <AiFillStar
                                size={20}
                                fill={isImportant ? 'orange' : 'grey'}
                                style={{ flexShrink: 0 }}
                            />
                            <StyledTaskText>{taskItem.text}</StyledTaskText>
                        </StyledTask>
                    );
                })}
            </StyledTaskList>
        </StyledDay>
    );
};

export default Day;

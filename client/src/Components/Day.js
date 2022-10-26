import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { AiFillCheckCircle } from 'react-icons/ai';
import Star from './Star';
import TasksList from './TasksList';

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

    const transformDateToString = (dateToString) => {
        if (typeof dateToString === 'string') {
            return dateToString.slice(0, 10);
        }

        return dateToString.toISOString().slice(0, 10);
    };

    const getTaskOnDay = () => {
        const copyDB = JSON.parse(localStorage.getItem('DB') || '[]');

        let filter = copyDB.filter((calendarDay) => {
            if (!calendarDay.date || !date) return false;
            // console.log('date', date);
            // console.log('date', transformDateToString(date));
            // console.log('data', transformDateToString(calendarDay.date));
            // console.log('-------------------------------');
            return (
                transformDateToString(calendarDay.date) ===
                transformDateToString(date)
            );
        });
        return filter;
    };

    return (
        <StyledDay>
            <StyledHeader onClick={getTaskOnDay}>
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
                        // console.log(date.toISOString().slice(0, 10));

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

            <TasksList taskOnDay={getTaskOnDay()} />
        </StyledDay>
    );
};

export default Day;

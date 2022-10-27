import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import TasksList from './TasksList';
import CreateTasksForm from './CreateTasksForm';
import DayHeader from '../DayHeader';

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

const Day = ({
    date,
    monthNames,
    weekDays,
    updateLocalStorageDB,
    loadLocalStorageDB,
}) => {
    const transformDateToString = (dateToString) => {
        if (typeof dateToString === 'string') {
            return dateToString.slice(0, 10);
        }

        return dateToString.toISOString().slice(0, 10);
    };

    const getTaskOnDay = () => {
        if (!loadLocalStorageDB) return;
        const currentDBInStorage = loadLocalStorageDB();

        let filter = currentDBInStorage.filter((calendarDay) => {
            if (!calendarDay.date || !date) return false;

            return (
                transformDateToString(calendarDay.date) ===
                transformDateToString(date)
            );
        });

        // console.log(filter[0]);
        if (filter[0]) return filter[0];
        return;
    };
    const [tasksOnDayState, setTaskOnDay] = useState(getTaskOnDay());

    const addTaskInStorage = (newTask) => {
        const currentDBInStorage = loadLocalStorageDB();

        for (let i = 0; i < currentDBInStorage.length; i++) {
            const calendarDay = currentDBInStorage[i];
            if (
                transformDateToString(calendarDay.date) ===
                transformDateToString(date)
            ) {
                let copyTasks = [...currentDBInStorage[i]?.tasksOnDay, newTask];
                currentDBInStorage[i] = {
                    date,
                    tasksOnDay: copyTasks,
                };

                updateLocalStorageDB(currentDBInStorage);
                setTaskOnDay({
                    date,
                    tasksOnDay: copyTasks,
                });
            }
        }
    };

    return (
        <StyledDay>
            <DayHeader
                date={date}
                monthNames={monthNames}
                weekDays={weekDays}
            />

            <CreateTasksForm addTaskInStorage={addTaskInStorage} />

            <TasksList
                tasksOnDayState={getTaskOnDay()}
                transformDateToString={transformDateToString}
                setTaskOnDay={setTaskOnDay}
                date={date}
                updateLocalStorageDB={updateLocalStorageDB}
                loadLocalStorageDB={loadLocalStorageDB}
            />
        </StyledDay>
    );
};

export default Day;

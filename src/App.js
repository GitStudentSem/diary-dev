import './App.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import React, { useState } from 'react';
import styled from 'styled-components/macro';
import useSetColor from './Hooks/useSetColor';

const StyledApp = styled.div`
    background: #fff;
    height: 100vh;
    background: radial-gradient(
        circle,
        ${(props) => props.from} 10%,
        ${(props) => props.to} 100%
    );
`;

function App() {
    const [date, setDate] = useState(new Date());
    const [colorsTheme, setcolorsTheme] = useState(useSetColor());

    const [task, setTask] = useState({
        text: 'полное описание задачи пригодится нам потом',
        isImportant: true,
    });
    const [allTasks, setAllTasks] = useState([
        {
            dateObj: { year: 2022, day: 24 },
            tasks: [task, task, task, task],
        },
        {
            dateObj: { year: 2022, day: 25 },
            tasks: [task, task, task, task, task, task],
        },
    ]);

    let days = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота',
    ];
    let monthNames = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
    ];

    return (
        <StyledApp from={colorsTheme.from} to={colorsTheme.to}>
            <Navbar monthNames={monthNames} date={date} />
            <Main
                monthNames={monthNames}
                date={date}
                days={days}
                allTasks={allTasks}
            />
        </StyledApp>
    );
}

export default App;

import './App.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import React, { useState, useEffect } from 'react';
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
    const [tasks, setTasks] = useState([task]);
    const [allTasks, setAllTasks] = useState([{ date: new Date(), tasks }]);

    useEffect(() => {
        console.log('changed', tasks);
    }, [allTasks, tasks]);

    let weekDays = [
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
            <Navbar monthNames={monthNames} date={date} setDate={setDate} />
            <Main monthNames={monthNames} date={date} weekDays={weekDays} />
        </StyledApp>
    );
}

export default App;

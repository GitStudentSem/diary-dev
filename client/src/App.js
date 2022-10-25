import Main from './Components/Main';
import React, { useState } from 'react';
import styled from 'styled-components/macro';
import useSetColor from './Hooks/useSetColor';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './Components/LoginPage';

const StyledApp = styled.div`
    background: #fff;
    padding: 5px;
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
        <BrowserRouter>
            <StyledApp from={colorsTheme.from} to={colorsTheme.to}>
                <Routes>
                    <Route
                        path='/'
                        element={
                            <Main
                                monthNames={monthNames}
                                date={date}
                                weekDays={weekDays}
                                setDate={setDate}
                            />
                        }
                    />
                    <Route path='/login' element={<LoginPage />} />
                </Routes>
            </StyledApp>
        </BrowserRouter>
    );
}

export default App;

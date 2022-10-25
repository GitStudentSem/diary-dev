import Main from './Components/Main';
import React, { useState } from 'react';
import styled from 'styled-components/macro';
import useSetColor from './Hooks/useSetColor';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import AccountPage from './Components/AccountPage';
import PrivateRoute from './Components/PrivateRoute';

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
    const generateColor = () => {
        const getRandomColor = () => {
            let letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        };
        return {
            from: getRandomColor(),
            to: getRandomColor(),
            // from: `#${Math.floor(Math.random() * 0xffffff).toString(16)}`,
            // to: `#${Math.floor(Math.random() * 0xffffff).toString(16)}`,
        };
    };
    const [colorsTheme, setColorsTheme] = useState(generateColor());

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
                    <Route
                        path='/account'
                        element={
                            <AccountPage
                                setColorsTheme={setColorsTheme}
                                colorsTheme={colorsTheme}
                                generateColor={generateColor}
                            />
                        }
                    />
                    {/* <Route
                        path='/account'
                        element={
                            <PrivateRoute hasAccess={true}>
                                <AccountPage
                                    setColorsTheme={setColorsTheme}
                                    colorsTheme={colorsTheme}
                                    setColor={setColor}
                                />
                            </PrivateRoute>
                        }
                    /> */}
                    <Route path='/login' element={<LoginPage />} />
                </Routes>
            </StyledApp>
        </BrowserRouter>
    );
}

export default App;

import Main from './Components/Main';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { BrowserRouter, Routes, Route, json } from 'react-router-dom';
import AccountPage from './Components/AccountPage';
// import PrivateRoute from './Components/PrivateRoute';
import NotFoundPage from './Components/NotFoundPage';

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

    const generateBD = (monthAgo) => {
        let dateDiapasone = [];
        for (let i = 0; i < 30 * monthAgo * 2; i++) {
            dateDiapasone.push({
                date: new Date(
                    date.getFullYear(),
                    date.getMonth() - monthAgo,
                    date.getDate() + i
                ),
                tasksOnDay: [
                    {
                        text: 'asdasdad',
                        isImportant: true,
                    },
                ],
            });
        }
        localStorage.setItem('DB', JSON.stringify(dateDiapasone));
        // const saved = JSON.parse(localStorage.getItem('DB') || '[]');
        // setCurrentTasks(saved);
    };

    const checkSizeLocalStorage = () => {
        let _lsTotal = 0,
            _xLen,
            _x;
        for (_x in localStorage) {
            if (!localStorage.hasOwnProperty(_x)) {
                continue;
            }
            _xLen = (localStorage[_x].length + _x.length) * 2;
            _lsTotal += _xLen;
            // console.log(
            //     _x.substr(0, 50) + ' = ' + (_xLen / 1024).toFixed(2) + ' KB'
            // );
        }
        console.log('Всего занято = ' + (_lsTotal / 1024).toFixed(2) + ' KB');
        return _lsTotal / 1024;
    };

    useEffect(() => {
        generateBD(1);
        checkSizeLocalStorage();
    }, []);

    const generateColor = () => {
        // setTheArray((oldArray) => [...oldArray, newElement]);
        const getRandomColor = () => {
            let letters = '0123456789ABCD';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * letters.length)];
            }
            return color;
        };

        return {
            from: getRandomColor(),
            to: getRandomColor(),
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
                    <Route path='*' element={<NotFoundPage />} />
                    {/* <Route path='/login' element={<Login />} /> */}
                </Routes>
            </StyledApp>
        </BrowserRouter>
    );
}

export default App;

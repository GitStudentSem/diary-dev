import React from 'react';
import styled from 'styled-components/macro';
import NavigationFromDate from './NavigatonFromDate';

const StyledNavbar = styled.div`
    /* 
        Изменение высоты данного блока требует 
        изменения высоты StyledMain в /Components/Main.js 
    */
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 0 20px;
    margin-bottom: 10px;
`;

const Navbar = ({ monthNames, date, setDate }) => {
    return (
        <StyledNavbar>
            <NavigationFromDate
                setPrevDate={() => {
                    setDate(
                        new Date(
                            date.getFullYear(),
                            date.getMonth() - 1,
                            date.getDate()
                        )
                    );
                }}
                setNextDate={() => {
                    setDate(
                        new Date(
                            date.getFullYear(),
                            date.getMonth() + 1,
                            date.getDate()
                        )
                    );
                }}
            >
                <p>
                    {monthNames[date.getMonth()]} {date.getFullYear()}
                </p>
            </NavigationFromDate>

            <NavigationFromDate
                setPrevDate={() => {
                    setDate(
                        new Date(
                            date.getFullYear(),
                            date.getMonth(),
                            date.getDate() - 7
                        )
                    );
                }}
                setNextDate={() => {
                    setDate(
                        new Date(
                            date.getFullYear(),
                            date.getMonth(),
                            date.getDate() + 7
                        )
                    );
                }}
            >
                <p>неделя</p>
            </NavigationFromDate>
        </StyledNavbar>
    );
};

export default Navbar;

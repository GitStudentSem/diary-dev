import React from 'react';
import styled from 'styled-components/macro';

import Day from './Day';

const StyledMain = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;
    padding: 0 20px;
    height: calc(100% - 55px); // 45px - это высота шапки margin + padding
`;

const Main = ({ date, monthNames, weekDays, allTasks, setTasks }) => {
    return (
        <StyledMain>
            {weekDays.map((day, index) => (
                <Day
                    key={index}
                    monthNames={monthNames}
                    date={
                        new Date(
                            date.getFullYear(),
                            date.getMonth(),
                            date.getDate() + index
                        )
                    }
                    weekDays={weekDays}
                    allTasks={allTasks}
                    setTasks={setTasks}
                />
            ))}
            <Day />
        </StyledMain>
    );
};

export default Main;

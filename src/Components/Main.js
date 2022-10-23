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

const Main = ({ date, monthNames, days, allTasks }) => {
    return (
        <StyledMain>
            {days.map((day, index) => (
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
                    days={days}
                    allTasks={allTasks}
                    indexItem={index}
                />
            ))}
            <Day />
        </StyledMain>
    );
};

export default Main;

import React from 'react';
import styled from 'styled-components/macro';

import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    font-weight: 900;
    color: black;
    width: 225px;
`;

const StyledButton = styled.button`
    margin: 0 5px;
`;

const NavigationFromDate = ({ setPrevDate, setNextDate, children }) => {
    return (
        <StyledWrapper>
            <StyledButton onClick={setPrevDate}>
                <AiFillCaretLeft size={30} fill='#000' />
            </StyledButton>

            {children}

            <StyledButton onClick={setNextDate}>
                <AiFillCaretRight size={30} fill='#000' />
            </StyledButton>
        </StyledWrapper>
    );
};

export default NavigationFromDate;

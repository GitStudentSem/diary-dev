import React from 'react';
import styled from 'styled-components/macro';

import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

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

const StyledDataHeader = styled.div`
    font-size: 36px;
    color: white;
    font-weight: 900;
    color: black;
    cursor: pointer;
`;

const StyledNavContainer = styled.div`
    display: flex;
`;

const Navbar = ({ monthNames, date }) => {
    return (
        <StyledNavbar>
            <StyledDataHeader>
                {monthNames[date.getMonth()]} {date.getFullYear()}
            </StyledDataHeader>

            <StyledNavContainer>
                <AiFillCaretLeft />
                <AiFillCaretRight />
            </StyledNavContainer>
        </StyledNavbar>
    );
};

export default Navbar;

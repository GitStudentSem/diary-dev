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
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 34px;
    font-weight: 900;
    color: black;
    width: 350px;
`;

const StyledNavContainer = styled.div`
    display: flex;
    align-items: center;
`;
const StyledButton = styled.button`
    margin: 0 5px;
`;

const Navbar = ({ monthNames, date, setDate }) => {
    return (
        <StyledNavbar>
            <StyledDataHeader>
                <StyledButton
                    onClick={() => {
                        setDate(
                            new Date(
                                date.getFullYear(),
                                date.getMonth() - 1,
                                date.getDate()
                            )
                        );
                    }}
                >
                    <AiFillCaretLeft size={30} fill='#000' />
                </StyledButton>
                <p>
                    {monthNames[date.getMonth()]} {date.getFullYear()}
                </p>
                <StyledButton
                    onClick={() => {
                        setDate(
                            new Date(
                                date.getFullYear(),
                                date.getMonth() + 1,
                                date.getDate()
                            )
                        );
                    }}
                >
                    <AiFillCaretRight size={30} fill='#000' />
                </StyledButton>
            </StyledDataHeader>

            <StyledNavContainer>
                <StyledButton
                    onClick={() => {
                        setDate(
                            new Date(
                                date.getFullYear(),
                                date.getMonth(),
                                date.getDate() - 7
                            )
                        );
                    }}
                >
                    <AiFillCaretLeft size={30} fill='#000' />
                </StyledButton>
                <p>неделя</p>
                <StyledButton
                    onClick={() => {
                        setDate(
                            new Date(
                                date.getFullYear(),
                                date.getMonth(),
                                date.getDate() + 7
                            )
                        );
                    }}
                >
                    <AiFillCaretRight size={30} fill='#000' />
                </StyledButton>
            </StyledNavContainer>
        </StyledNavbar>
    );
};

export default Navbar;

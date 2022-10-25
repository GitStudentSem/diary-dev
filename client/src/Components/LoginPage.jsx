import styled from 'styled-components/macro';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoTodaySharp } from 'react-icons/io5';
import { RiLoginCircleFill } from 'react-icons/ri';

const StyledLoginPage = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const StyledHeader = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;
const StyledDescriptionWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;
const StyledDescription = styled.p`
    text-align: center;
    color: rgba(255, 255, 255, 0.6);
    font-size: 24px;
    width: 100%;
`;
const StyledMain = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
`;
const StyledLoginForm = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 20%;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    padding: 10px;
`;
const StyledTitle = styled.p`
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
    font-size: 20px;
`;
const StyledInput = styled.input`
    outline: none;
    border: none;
    background-color: rgba(255, 255, 255, 0.2);
    padding: 5px;
    border-radius: 5px;
    margin-bottom: 10px;
    width: 100%;
    &::placeholder {
        color: rgb(255, 255, 255);
    }
`;
const StyledSendBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;
const StyledStatus = styled.p`
    color: rgba(255, 255, 255, 0.8);
`;
const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    border: none;
    cursor: pointer;
    margin: 0;
    padding: 0;
    transition: all 0.3s;
    padding: 5px;
    border-radius: 5px;
    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
`;
const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);

    const [password, setPassword] = useState('');
    const [isValidPassword, setIsValidPassword] = useState(true);

    const validateEmail = () => {
        if (email.length > 5) {
            return setIsValidEmail(true);
        }
        return setIsValidEmail(false);
    };

    const validatePassword = () => {
        if (password.length > 5) {
            return setIsValidPassword(true);
        }
        return setIsValidPassword(false);
    };

    const onChangeHandler = (e, setValue, validateValue) => {
        e.preventDefault();
        setValue(e.target.value);
        validateValue(e.target.value);
    };

    return (
        <StyledLoginPage>
            <StyledHeader>
                <StyledButton disabled>
                    <Link to='/'>
                        <IoTodaySharp
                            size={20}
                            fill='rgba(255, 255, 255, 0.8)'
                        />
                    </Link>
                </StyledButton>
            </StyledHeader>

            <StyledMain>
                <StyledLoginForm>
                    <StyledTitle>Форма для входа</StyledTitle>
                    <StyledInput
                        type='text'
                        value={email}
                        onFocus={(e) => {
                            onChangeHandler(e, setEmail, validateEmail);
                        }}
                        onChange={(e) => {
                            onChangeHandler(e, setEmail, validateEmail);
                        }}
                        placeholder='почта'
                    />
                    <StyledInput
                        type='text'
                        value={password}
                        onFocus={(e) => {
                            onChangeHandler(e, setPassword, validatePassword);
                        }}
                        onChange={(e) => {
                            onChangeHandler(e, setPassword, validatePassword);
                        }}
                        placeholder='пароль'
                    />
                    <StyledSendBlock>
                        <StyledStatus>
                            {isValidEmail && isValidPassword
                                ? ''
                                : 'В данных есть ошибка'}
                        </StyledStatus>
                        <StyledButton>
                            <RiLoginCircleFill
                                size={20}
                                fill='rgba(255, 255, 255, 0.8)'
                            />
                        </StyledButton>
                    </StyledSendBlock>
                </StyledLoginForm>
            </StyledMain>

            <StyledDescriptionWrapper>
                <StyledDescription>
                    Внимание! Вы можете пользоваться приложением и без логина.
                </StyledDescription>
                <StyledDescription>
                    Но в таком случае все данные будут сохранятся у вас в
                    браузере.
                </StyledDescription>
                <StyledDescription>
                    Вы не сможете получить их с другого устройства или браузера.
                </StyledDescription>
            </StyledDescriptionWrapper>
        </StyledLoginPage>
    );
};
export default LoginPage;

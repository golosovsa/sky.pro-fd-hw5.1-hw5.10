import { useState } from "react";
import LoginForm from "../styled/LoginForm/LoginForm";
import LoginInput from "../styled/LoginInput/LoginInput";
import LoginButton from "../styled/LoginButton/LoginButton";
import Logo from "../styled/Logo/Logo";
import Flex from "../styled/Flex/Flex";

const AUTHENTICATION = "Authentication";
const REGISTRATION = "Registration";

function Login() {
    const [action, setAction] = useState(AUTHENTICATION);

    const onRegistrationClick = () => {
        setAction(REGISTRATION);
    };

    return (
        <LoginForm>
            <Flex rowGap="35" stretch>
                <Logo />
                <LoginInput type="text" placeholder="Логин" />
                <LoginInput type="password" placeholder="Пароль" />
                {action === REGISTRATION && (
                    <LoginInput
                        type="password"
                        placeholder="Повторите пароль"
                    />
                )}
            </Flex>
            <Flex rowGap="20" stretch>
                {action === AUTHENTICATION && (
                    <LoginButton type="submit">Войти</LoginButton>
                )}
                {action === AUTHENTICATION && (
                    <LoginButton onClick={onRegistrationClick}>
                        Регистрация
                    </LoginButton>
                )}
                {action === REGISTRATION && (
                    <LoginButton type="submit">Зарегистрироваться</LoginButton>
                )}
            </Flex>
        </LoginForm>
    );
}

export default Login;

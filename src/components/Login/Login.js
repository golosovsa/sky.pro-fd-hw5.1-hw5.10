import { useState } from "react";
import LoginForm from "../styled/LoginForm/LoginForm";
import LoginInput from "../styled/LoginInput/LoginInput";
import LoginButton from "../styled/LoginButton/LoginButton";

const AUTHENTICATION = "Authentication";
const REGISTRATION = "Registration";

function Login() {
    const [action, setAction] = useState(AUTHENTICATION);

    const onRegistrationClick = () => {
        setAction(REGISTRATION);
    };

    return (
        <LoginForm>
            <LoginInput type="text" placeholder="Логин" />
            <LoginInput type="password" placeholder="Пароль" />
            <LoginInput type="password" placeholder="Повторите пароль">
                {action === REGISTRATION}
            </LoginInput>
            <LoginButton type="submit">
                {action === AUTHENTICATION && "Войти"}
            </LoginButton>
            <LoginButton onClick={onRegistrationClick}>
                {action === AUTHENTICATION && "Регистрация"}
            </LoginButton>
            <LoginButton type="submit">
                {action === REGISTRATION && "Зарегистрироваться"}
            </LoginButton>
        </LoginForm>
    );
}

export default Login;

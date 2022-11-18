import StyledForm from "./Form/styles";
import Logo from "../common/Logo";
import Input from "./Input";
import Button from "./Button";
import Submit from "./Submit";

function Form() {
    return (
        <StyledForm>
            <Logo color="black" />
            
                <Input type="text" name="login" placeholder="Логин" />
                <Input type="password" name="password" placeholder="Пароль" />
            
            
                <Submit>Войти</Submit>
                <Button>Зарегестрироваться</Button>
            
        </StyledForm>
    );
}

export default Form;

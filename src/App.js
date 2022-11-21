import GlobalReset from "./globals/reset/index";
import { GlobalFonts } from "./globals/fonts/index";
import { GlobalLayout } from "./globals/layout/index";
import { GlobalTheme } from "./globals/theme/index";
import Logo from "./components/styled/Logo/Logo";
import LoginInput from "./components/styled/LoginInput/LoginInput";
import LoginButton from "./components/styled/LoginButton/LoginButton";
import LoginForm from "./components/styled/LoginForm/LoginForm";
import Login from "./components/styled/LoginContainer/LoginContainer";

function App() {
    return (
        <>
            <GlobalReset />
            <GlobalFonts />
            <GlobalLayout />
            <GlobalTheme />
            <Login>
                <LoginForm>
                    <Logo />

                    <LoginInput type="text" placeholder="placeholder" />
                    <LoginButton>nhfnfnf</LoginButton>
                    <LoginButton>nhfnfnf</LoginButton>
                    <LoginButton type="submit">nhfnfnf</LoginButton>
                </LoginForm>
            </Login>
        </>
    );
}

export default App;

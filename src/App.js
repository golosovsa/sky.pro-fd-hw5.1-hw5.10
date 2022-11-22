import { useState } from "react";
import GlobalReset from "./globals/reset/index";
import { GlobalFonts } from "./globals/fonts/index";
import { GlobalLayout } from "./globals/layout/index";
import { GlobalTheme } from "./globals/theme/index";
import Login from "./pages/Login";
import UserContext from "./globals/states/UserContext";
import Main from "./pages/Main";

function App() {
    const userState = useState(null);

    // userState[1](1);

    return (
        <>
            <GlobalReset />
            <GlobalFonts />
            <GlobalLayout />
            <GlobalTheme />

            <UserContext.Provider value={userState} >
                {!userState[0] && <Login />}
                {userState[0] && <Main />}
                <Main />
            </UserContext.Provider>
        </>
    );
}

export default App;

import { useState } from "react";
import GlobalReset from "./globals/reset/index";
import { GlobalFonts } from "./globals/fonts/index";
import { GlobalLayout } from "./globals/layout/index";
import { GlobalTheme } from "./globals/theme/index";
import Login from "./pages/Login";
import UserContext from "./globals/states/UserContext";

function App() {
    const [user, setUser] = useState(null);

    return (
        <>
            <GlobalReset />
            <GlobalFonts />
            <GlobalLayout />
            <GlobalTheme />

            <UserContext.Provider value={user}>
                {!user && <Login />}
            </UserContext.Provider>
        </>
    );
}

export default App;

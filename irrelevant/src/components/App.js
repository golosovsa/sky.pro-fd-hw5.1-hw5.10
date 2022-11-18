
import {GlobalColorThemeDefault} from "./globals/theme";
import GlobalReset from "./globals/reset";
import GlobalFonts from "./globals/fonts";
import GlobalLayout from "./globals/layout";
import PageLogin from "./PageLogin";

function App() {
    return (
        <>
            <GlobalReset/>
            <GlobalFonts/>
            <GlobalColorThemeDefault/>
            <GlobalLayout/>
            <PageLogin/>
        </>
    );
}

export default App;

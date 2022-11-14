
import {GlobalColorThemeDefault} from "./globals/theme";
import GlobalReset from "./globals/reset";
import GlobalFonts from "./globals/fonts";
import GlobalLayout from "./globals/layout";

function App() {
    return (
        <>
            <GlobalReset/>
            <GlobalFonts/>
            <GlobalColorThemeDefault/>
            <GlobalLayout/>
            <h1>ПРивет</h1>
        </>
    );
}

export default App;

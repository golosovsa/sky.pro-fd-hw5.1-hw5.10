import React from "react";

const defaultTheme = {
    required: "theme",
    themes: ["", "light"],
    current: 0,
    next() {
        this.current = (this.current + 1) % this.themes.length;
        return this.className
    },
    get className() {
        return `${this.required} ${this.themes[this.current]}`;
    },
};
const globalThemeState = React.createContext(defaultTheme);

export default globalThemeState;

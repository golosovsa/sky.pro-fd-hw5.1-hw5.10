import React from "react";

const defaultPage = {
    pages: ["login", "main"],
    current: 0,
    next() {
        this.current = (this.current + 1) % this.pages.length;
        return this.name;
    },
    first() {
        this.current = 0;
        return this.name;
    },
    get name() {
        return this.pages[this.current];
    },
};
const globalPageState = React.createContext(defaultPage);

export default globalPageState;

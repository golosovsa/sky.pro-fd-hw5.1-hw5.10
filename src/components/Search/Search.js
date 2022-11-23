import { useEffect, useState } from "react";
import SearchContainer from "../styled/SearchContainer/SearchContainer";
import Icons from "../styled/icons/Icons";
import Input from "../styled/Input/Input";

function Search({ setTextFilter }) {
    const [text, setText] = useState("");

    useEffect(() => {
        if (setTextFilter) setTextFilter(text);
    }, [text]);

    return (
        <SearchContainer>
            <SearchContainer.Icon>
                <Icons.Search />
            </SearchContainer.Icon>
            <Input
                placeholder="Поиск"
                value={text}
                onChange={(event) => setText(event.target.value)}
            />
        </SearchContainer>
    );
}

export default Search;

import { useEffect, useState } from "react";
import MainContainer from "../components/styled/MainContainer/MainContainer";
import Header from "../components/styled/Header/Header";
import Search from "../components/Search/Search";
import { MainLogo } from "../components/styled/Logo/Logo";
import Icons from "../components/styled/icons/Icons";
import Menu from "../components/Menu/Menu";
import Filter from "../components/Filter/Filter";

function Main() {

    // const [isDataReceived, setDataReceived] = useState(false);
    const [isMenuShown, setMenuShown] = useState(false);
    const [textFilter, setTextFilter] = useState("");

    useEffect(() => {
        console.log("text filter: ", textFilter);
    }, [textFilter]);

    return (
        <MainContainer>
            <MainContainer.Nav isMenuShown={isMenuShown}>
                <MainLogo />
                <Icons.Burger onClick={() => setMenuShown(!isMenuShown)}/>
                <Menu isMenuShown={isMenuShown}>
                    <p>Главное</p>
                    <p>Мои треки</p>
                    <p>Выйти</p>
                    <Icons.ThemeDark/>
                </Menu>
            </MainContainer.Nav>
            <MainContainer.Content>
                <Search setTextFilter={setTextFilter}/>
                <Header>Треки</Header>
                <Filter />
            </MainContainer.Content>
            <MainContainer.ASide>1</MainContainer.ASide>
        </MainContainer>
    );
}

export default Main;

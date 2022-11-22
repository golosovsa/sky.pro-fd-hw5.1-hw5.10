import MainContainer from "../components/styled/MainContainer/MainContainer";
import Header from "../components/styled/Header/Header";
import { MainLogo } from "../components/styled/Logo/Logo";
import IconSearch from "../components/styled/icons/IconSearch";
import IconBurger from "../components/styled/icons/IconBurger";
import IconMelody from "../components/styled/icons/IconMelody";
import IconVolume from "../components/styled/icons/IconVolume";
import IconDuration from "../components/styled/icons/IconDuration";

function Main() {
    return (
        <MainContainer>
            <Header>Header</Header>
            <MainLogo/>
            <IconSearch />
            <IconBurger />
            <IconMelody />
            <IconVolume />
            <IconDuration />
        </MainContainer>
    );
}

export default Main;

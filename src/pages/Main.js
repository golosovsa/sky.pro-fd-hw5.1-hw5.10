import MainContainer from "../components/styled/MainContainer/MainContainer";
import Header from "../components/styled/Header/Header";
import { MainLogo } from "../components/styled/Logo/Logo";
import IconSearch from "../components/styled/icons/IconSearch";
import IconBurger from "../components/styled/icons/IconBurger";
import IconMelody from "../components/styled/icons/IconMelody";
import IconVolume from "../components/styled/icons/IconVolume";
import IconDuration from "../components/styled/icons/IconDuration";
import IconHeart from "../components/styled/icons/IconHeart";
import IconReplay from "../components/styled/icons/IconReplay";
import IconShuffle from "../components/styled/icons/IconShuffle";
import IconBrokenHeart from "../components/styled/icons/IconBrokenHeart";
import IconPlay from "../components/styled/icons/IconPlay";
import IconStop from "../components/styled/icons/IconStop";
import Sceleton from "../components/styled/Sceleton/Sceleton";
import Flex from "../components/styled/Flex/Flex";
import Button from "../components/styled/Button/Button";
import Tab from "../components/styled/Tab/Tab";

function Main() {
    return (
        <MainContainer>
            <Header>Header</Header>
            <MainLogo />
            <IconSearch />
            <IconBurger />
            <IconMelody />
            <IconVolume />
            <IconDuration />
            <IconHeart />
            <IconHeart selected />
            <IconReplay />
            <IconReplay selected />
            <IconShuffle />
            <IconShuffle selected />
            <IconBrokenHeart />
            <IconBrokenHeart selected />
            <IconPlay />
            <IconStop />
            <Sceleton width="400" />
            <div>!!!</div>
            <Flex direction="row" justifyContent="flex-start" columnGap="32">
                <Sceleton width="400" />
                <Sceleton width="400" height="400" animationOffset="432" />
                <Sceleton width="400" animationOffset="864" />
            </Flex>
            <Button>ИсПоЛнИтЕлЮ</Button>
            <Button>ИсПоЛнИтЕлЮ</Button>
            <Button selected>ИсПоЛнИтЕлЮ</Button>
            <Button>ИсПоЛнИтЕлЮ</Button>
            <Tab>5</Tab>
            <Tab>6</Tab>
            <Tab>7</Tab>
            <Tab>8</Tab>
            <Tab>99</Tab>
        </MainContainer>
    );
}

export default Main;

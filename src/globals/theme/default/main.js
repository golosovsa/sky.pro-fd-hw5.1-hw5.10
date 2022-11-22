import PALLETTE from "../pallette";

const activeIcon = {
    color: PALLETTE.cloudyGrey,
    fill: PALLETTE.transparent,
    hover: {
        color: PALLETTE.silverChalice,
        fill: PALLETTE.transparent,
    },
    active: {
        color: PALLETTE.white,
        fill: PALLETTE.cloudyGrey,
    },
};

const activeIconSelected = {
    color: PALLETTE.white,
    fill: PALLETTE.cloudyGrey,
    hover: {
        color: PALLETTE.silverChalice,
        fill: PALLETTE.transparent,
    },
    active: {
        color: PALLETTE.cloudyGrey,
        fill: PALLETTE.transparent,
    },
};

const switcherIcon = {
    color: PALLETTE.lightGrey,
    hover: {
        color: PALLETTE.cloudyGrey,
    },
};

const MAIN = {
    background: PALLETTE.rangoonGreen,

    logo: {
        color: PALLETTE.white,
    },

    iconSearch: {
        color: PALLETTE.white,
    },

    iconBurger: {
        color: PALLETTE.quillGrey,
        hover: {
            color: PALLETTE.white,
        },
        active: {
            color: PALLETTE.white,
        },
    },

    iconMelody: {
        color: PALLETTE.liver,
    },

    iconVolume: {
        color: PALLETTE.white,
    },

    iconDuration: {
        color: PALLETTE.liver,
    },

    iconReplay: activeIcon,
    iconReplaySelected: activeIconSelected,
    iconShuffle: activeIcon,
    iconShuffleSelected: activeIconSelected,
    iconHeart: activeIcon,
    iconHeartSelected: activeIconSelected,
    iconBrokenHeart: activeIcon,
    iconBrokenHeartSelected: activeIconSelected,

    iconPlay: switcherIcon,
    iconStop: switcherIcon,

    sceleton: {
        background: PALLETTE.shineSceleton,
    },

    button: {
        background: PALLETTE.transparent,
        "border-color": PALLETTE.white,
        color: PALLETTE.white,

        hover: {
            "border-color": PALLETTE.lightViolet,
            color: PALLETTE.lightViolet,
        },

        active: {
            "border-color": PALLETTE.tyrianPurple,
            color: PALLETTE.tyrianPurple,
        },
    },

    buttonSelected: {
        background: PALLETTE.transparent,
        "border-color": PALLETTE.tyrianPurple,
        color: PALLETTE.tyrianPurple,

        hover: {
            "border-color": PALLETTE.lightViolet,
            color: PALLETTE.lightViolet,
        },

        active: {
            "border-color": PALLETTE.white,
            color: PALLETTE.white,
        },
    },

    tab: {
        color: PALLETTE.white,
        background: PALLETTE.tyrianPurple,
    },

    header: {
        color: PALLETTE.white,
    },
};

export default MAIN;

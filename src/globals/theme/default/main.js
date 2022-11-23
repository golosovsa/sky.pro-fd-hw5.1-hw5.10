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

const likeButtonIcon = {
    fill: PALLETTE.transparent,
    color: PALLETTE.white,

    hover: {
        color: PALLETTE.lightViolet,
    },

    active: {
        color: PALLETTE.tyrianPurple,
    },
};

const likeButtonLink = {
    background: PALLETTE.transparent,
    color: PALLETTE.white,

    hover: {
        color: PALLETTE.lightViolet,
    },

    active: {
        color: PALLETTE.tyrianPurple,
    },
}

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

    iconThemeDark: likeButtonIcon,

    skeleton: {
        background: PALLETTE.shineSkeleton,
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

    input: {
        background: PALLETTE.transparent,
        color: PALLETTE.white,

        placeholder: {
            color: PALLETTE.white,
        },

        selection: {
            background: PALLETTE.dune,
        },
    },

    header: {
        color: PALLETTE.white,
    },

    search: {
        "border-color": PALLETTE.liver,
    },

    activeMenu: {
        background: PALLETTE.rangoonGreenLighter,
    },

    filter: {
        color: PALLETTE.white,
    },

    menuItem: likeButtonLink,
};

export default MAIN;

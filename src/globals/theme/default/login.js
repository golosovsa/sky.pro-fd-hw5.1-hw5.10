import PALLETTE from "../pallette";

const LOGIN = {
    background: PALLETTE.balticSea,

    form: {
        background: PALLETTE.white,
    },

    logo: {
        color: PALLETTE.black,
    },

    input: {
        color: PALLETTE.black,
        "border-color": PALLETTE.greyGoose,

        placeholder: {
            color: PALLETTE.lavenderPinocchio,
        },
    },

    button: {
        color: PALLETTE.black,
        background: PALLETTE.transparent,
        "border-color": PALLETTE.greyGoose,

        hover: {
            background: PALLETTE.whiteSmoke,
        },

        active: {
            background: PALLETTE.lightGrey,
        },
    },

    submit: {
        color: PALLETTE.white,
        background: PALLETTE.daisyBush,

        hover: {
            background: PALLETTE.kingfisherDaisy,
        },

        active: {
            background: PALLETTE.violentViolet,
        },
    },
};

export default LOGIN;

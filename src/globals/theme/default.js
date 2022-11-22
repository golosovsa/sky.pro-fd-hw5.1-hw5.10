import PALLETTE from "./pallette";
import LOGIN from "./default/login";
import MAIN from "./default/main";

// all color values and states

// background
// color
// border-color

// hover
// active
// focus
// link
// visited

// const theme = {

//     "background": ...,    // for unknown
//     "color": ...,         //
//     "border-color": ...,  //
//                         //
//     "hover": {...},       //
//     "active": {...},      //
//     "focus": {...),       //
//     "link": {...},        //
//     "visited": {...},     //

//     "page": {             // for specific page

//         "background": ...,
//         "color": ...,
//         ...,
//         "component-1": {
//             "color": ...,
//             "border-color": ...,
//             "hover": {
//                 "background": ...,
//                 ...,
//             },
//             ...,
//         },
//         "component-2": {
//             ...,
//         },
//         ...,
//     },
//     ...
// }

const COLOR_THEME_ATTRIBUTES = ["background", "color", "border-color", "fill"];
const EFFECT_THEME_ATTRIBUTES = ["hover", "focus", "active", "link", "visited"];
const PSEUDO_THEME_ATTRIBUTES = ["placeholder"];

const DEFAULT = {
    background: PALLETTE.rangoonGreen,
    color: PALLETTE.white,
    "border-color": PALLETTE.white,

    hover: {
        background: PALLETTE.whiteSmoke,
        "border-color": PALLETTE.greyGoose,
        color: PALLETTE.white,
    },

    focus: {
        background: PALLETTE.whiteSmoke,
        "border-color": PALLETTE.greyGoose,
        color: PALLETTE.white,
    },

    active: {
        background: PALLETTE.lightGrey,
        "border-color": PALLETTE.greyGoose,
        color: PALLETTE.white,
    },

    link: {
        color: PALLETTE.white,
    },

    visited: {
        color: PALLETTE.white,
    },
};

DEFAULT.login = LOGIN;
DEFAULT.main = MAIN;

export {
    DEFAULT, 
    COLOR_THEME_ATTRIBUTES,
    EFFECT_THEME_ATTRIBUTES,
    PSEUDO_THEME_ATTRIBUTES
};

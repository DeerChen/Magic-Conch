import { Options } from "$fresh/plugins/twind.ts";

export default {
    selfURL: import.meta.url,
    theme: {
        boxShadow: {
            neu: "4px 4px 8px #bebebe, -4px -4px 8px #ffffff",
            "neu-inner":
                "inset 4px 4px 8px #bebebe, inset -4px -4px 8px #ffffff",
            "neu-inner-sm":
                "inset 1px 1px 2px #bebebe, inset -1px -1px 2px #ffffff",
            "neu-bottom": "0px 4px 8px #bebebe",
            "neu-top": "4px -4px 8px #ffffff",
            sider: "4px 4px 8px #b1b1b1, -4px -4px 8px #efefef",
            "sider-inner":
                "inset 4px 4px 8px #b1b1b1, inset -4px -4px 8px #efefef",
        },
        borderColor: {
            "light-gray": "#bebebe",
        },
        backgroundColor: {
            neu: "#e0e0e0",
            sider: "#d0d0d0",
        },
        minWidth: {
            xs: "320px",
            fit: "fit-content",
        },
        maxHeight: {
            "17/24": "70.833334vh",
        },
    },
    plugins: {
        "flex-center": "flex justify-center items-center",
        "flex-sper": "flex justify-between items-center",
        "flex-evenly": "flex justify-evenly items-center",
    },
} as Options;

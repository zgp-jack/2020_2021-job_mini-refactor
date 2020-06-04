/**
 * Default styles
 * @type {StyleSheetPropType}
 */
declare const _default: {
    container: import("react-native").RegisteredStyle<{
        backgroundColor: string;
        position: "relative";
        flex: number;
    }>;
    wrapper: import("react-native").RegisteredStyle<{
        backgroundColor: string;
    }>;
    slide: import("react-native").RegisteredStyle<{
        backgroundColor: string;
        overflow: "hidden";
    }>;
    pagination_x: import("react-native").RegisteredStyle<{
        position: "absolute";
        bottom: number;
        left: number;
        right: number;
        flexDirection: "row";
        flex: number;
        justifyContent: "center";
        alignItems: "center";
        backgroundColor: string;
    }>;
    pagination_y: import("react-native").RegisteredStyle<{
        position: "absolute";
        right: number;
        top: number;
        bottom: number;
        flexDirection: "column";
        flex: number;
        justifyContent: "center";
        alignItems: "center";
        backgroundColor: string;
    }>;
};
export default _default;

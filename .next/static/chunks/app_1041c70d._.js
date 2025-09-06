(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/styles/TitleBar.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "closeButton": "TitleBar-module__zm9PcG__closeButton",
  "closeIcon": "TitleBar-module__zm9PcG__closeIcon",
  "closeIconLine": "TitleBar-module__zm9PcG__closeIconLine",
  "closeIconLine1": "TitleBar-module__zm9PcG__closeIconLine1",
  "closeIconLine2": "TitleBar-module__zm9PcG__closeIconLine2",
  "controlButton": "TitleBar-module__zm9PcG__controlButton",
  "controls": "TitleBar-module__zm9PcG__controls",
  "dark": "TitleBar-module__zm9PcG__dark",
  "logo": "TitleBar-module__zm9PcG__logo",
  "logoImage": "TitleBar-module__zm9PcG__logoImage",
  "logoText": "TitleBar-module__zm9PcG__logoText",
  "maximizeIcon": "TitleBar-module__zm9PcG__maximizeIcon",
  "minimizeIcon": "TitleBar-module__zm9PcG__minimizeIcon",
  "subtitleText": "TitleBar-module__zm9PcG__subtitleText",
  "titleBar": "TitleBar-module__zm9PcG__titleBar",
  "titleBarContent": "TitleBar-module__zm9PcG__titleBarContent",
  "titleText": "TitleBar-module__zm9PcG__titleText",
});
}),
"[project]/app/components/TitleBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TitleBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$TitleBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/components/styles/TitleBar.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function TitleBar() {
    _s();
    const handleClose = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TitleBar.useCallback[handleClose]": ()=>{
            if ("object" !== 'undefined' && window.electronAPI) {
                window.electronAPI.closeWindow();
            } else {
                console.log('Fechar janela');
            }
        }
    }["TitleBar.useCallback[handleClose]"], []);
    const handleMinimize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TitleBar.useCallback[handleMinimize]": ()=>{
            if ("object" !== 'undefined' && window.electronAPI) {
                window.electronAPI.minimizeWindow();
            } else {
                console.log('Minimizar janela');
            }
        }
    }["TitleBar.useCallback[handleMinimize]"], []);
    const handleMaximize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TitleBar.useCallback[handleMaximize]": ()=>{
            if ("object" !== 'undefined' && window.electronAPI) {
                window.electronAPI.maximizeWindow();
            } else {
                if (document.documentElement.requestFullscreen) {
                    document.documentElement.requestFullscreen();
                }
            }
        }
    }["TitleBar.useCallback[handleMaximize]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$TitleBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titleBar,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$TitleBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titleBarContent,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$TitleBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logo,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/Frame 15.png",
                            alt: "TriviD Logo",
                            width: 168,
                            height: 168,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$TitleBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoImage,
                            priority: true,
                            quality: 100,
                            sizes: "168px"
                        }, void 0, false, {
                            fileName: "[project]/app/components/TitleBar.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/TitleBar.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                        fileName: "[project]/app/components/TitleBar.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/TitleBar.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$TitleBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controls,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleMinimize,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$TitleBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controlButton,
                        title: "Minimizar",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$TitleBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].minimizeIcon
                        }, void 0, false, {
                            fileName: "[project]/app/components/TitleBar.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/TitleBar.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleMaximize,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$TitleBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controlButton,
                        title: "Maximizar",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$TitleBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].maximizeIcon
                        }, void 0, false, {
                            fileName: "[project]/app/components/TitleBar.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/TitleBar.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleClose,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$TitleBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeButton,
                        title: "Fechar",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$TitleBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeIcon,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$TitleBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeIconLine, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$TitleBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeIconLine1)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/TitleBar.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$TitleBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeIconLine, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$TitleBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeIconLine2)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/TitleBar.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/TitleBar.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/TitleBar.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/TitleBar.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/TitleBar.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(TitleBar, "AVf/wAvZLTLescqeZ+MkqSVw5Kw=");
_c = TitleBar;
var _c;
__turbopack_context__.k.register(_c, "TitleBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/styles/Tabs.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "container": "Tabs-module__zQxafG__container",
  "tab": "Tabs-module__zQxafG__tab",
  "tabActive": "Tabs-module__zQxafG__tabActive",
  "tabInactive": "Tabs-module__zQxafG__tabInactive",
});
}),
"[project]/app/components/Tabs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Tabs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$Tabs$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/components/styles/Tabs.module.css [app-client] (css module)");
;
;
function Tabs(param) {
    let { activeTab, onTabChange } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$Tabs$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$Tabs$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tab, " ").concat(activeTab === 'home' ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$Tabs$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabActive : __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$Tabs$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabInactive),
                onClick: ()=>onTabChange('home'),
                children: "Home"
            }, void 0, false, {
                fileName: "[project]/app/components/Tabs.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$Tabs$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tab, " ").concat(activeTab === 'settings' ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$Tabs$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabActive : __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$Tabs$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabInactive),
                onClick: ()=>onTabChange('settings'),
                children: "Settings"
            }, void 0, false, {
                fileName: "[project]/app/components/Tabs.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Tabs.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = Tabs;
var _c;
__turbopack_context__.k.register(_c, "Tabs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/VideoDownloader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VideoDownloader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const API_BASE_URL = 'http://localhost:8000';
function VideoDownloader() {
    _s();
    const [url, setUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [videoInfo, setVideoInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedFormat, setSelectedFormat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [downloadStatus, setDownloadStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [polling, setPolling] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Função para obter informações do vídeo
    const getVideoInfo = async ()=>{
        if (!url.trim()) {
            setError('Por favor, insira uma URL válida');
            return;
        }
        setLoading(true);
        setError(null);
        setVideoInfo(null);
        try {
            const response = await fetch("".concat(API_BASE_URL, "/video/info"), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    url: url,
                    format_type: 'video_with_audio'
                })
            });
            if (!response.ok) {
                throw new Error('Erro ao carregar informações do vídeo');
            }
            const data = await response.json();
            setVideoInfo(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Erro desconhecido');
        } finally{
            setLoading(false);
        }
    };
    // Função para iniciar download
    const startDownload = async ()=>{
        if (!selectedFormat || !videoInfo) return;
        const format = videoInfo.available_formats.find((f)=>f.itag === selectedFormat);
        if (!format) return;
        try {
            const response = await fetch("".concat(API_BASE_URL, "/video/download"), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    url: url,
                    format_type: format.type,
                    quality: format.quality
                })
            });
            if (!response.ok) {
                throw new Error('Erro ao iniciar download');
            }
            const data = await response.json();
            setDownloadStatus({
                task_id: data.task_id,
                status: 'pending',
                progress: 0,
                message: 'Iniciando download...'
            });
            setPolling(true);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Erro ao iniciar download');
        }
    };
    // Polling para verificar status do download
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VideoDownloader.useEffect": ()=>{
            if (!polling || !downloadStatus) return;
            const interval = setInterval({
                "VideoDownloader.useEffect.interval": async ()=>{
                    try {
                        const response = await fetch("".concat(API_BASE_URL, "/video/status/").concat(downloadStatus.task_id));
                        if (!response.ok) return;
                        const status = await response.json();
                        setDownloadStatus(status);
                        if (status.status === 'completed' || status.status === 'error') {
                            setPolling(false);
                        }
                    } catch (err) {
                        console.error('Erro ao verificar status:', err);
                    }
                }
            }["VideoDownloader.useEffect.interval"], 2000);
            return ({
                "VideoDownloader.useEffect": ()=>clearInterval(interval)
            })["VideoDownloader.useEffect"];
        }
    }["VideoDownloader.useEffect"], [
        polling,
        downloadStatus === null || downloadStatus === void 0 ? void 0 : downloadStatus.task_id
    ]);
    // Função para formatar duração
    const formatDuration = (seconds)=>{
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor(seconds % 3600 / 60);
        const secs = seconds % 60;
        if (hours > 0) {
            return "".concat(hours, ":").concat(minutes.toString().padStart(2, '0'), ":").concat(secs.toString().padStart(2, '0'));
        }
        return "".concat(minutes, ":").concat(secs.toString().padStart(2, '0'));
    };
    // Função para formatar tamanho do arquivo
    const formatFileSize = (bytes)=>{
        if (bytes >= 1024 * 1024 * 1024) {
            return "".concat((bytes / (1024 * 1024 * 1024)).toFixed(2), " GB");
        } else if (bytes >= 1024 * 1024) {
            return "".concat((bytes / (1024 * 1024)).toFixed(2), " MB");
        }
        return "".concat((bytes / 1024).toFixed(2), " KB");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-4xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Cole a URL do YouTube aqui...",
                                value: url,
                                onChange: (e)=>setUrl(e.target.value),
                                className: "flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                            }, void 0, false, {
                                fileName: "[project]/app/components/VideoDownloader.tsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: getVideoInfo,
                                disabled: loading,
                                className: "px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg font-medium transition-colors",
                                children: loading ? 'Carregando...' : 'Buscar Vídeo'
                            }, void 0, false, {
                                fileName: "[project]/app/components/VideoDownloader.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/VideoDownloader.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 p-4 bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-lg",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/app/components/VideoDownloader.tsx",
                        lineNumber: 177,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/VideoDownloader.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this),
            videoInfo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:w-1/3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: videoInfo.thumbnail,
                                alt: "Thumbnail",
                                className: "w-full rounded-lg"
                            }, void 0, false, {
                                fileName: "[project]/app/components/VideoDownloader.tsx",
                                lineNumber: 188,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/VideoDownloader.tsx",
                            lineNumber: 187,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:w-2/3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold text-gray-800 dark:text-white mb-2",
                                    children: videoInfo.title
                                }, void 0, false, {
                                    fileName: "[project]/app/components/VideoDownloader.tsx",
                                    lineNumber: 195,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 dark:text-gray-400 mb-4",
                                    children: [
                                        "Duração: ",
                                        formatDuration(videoInfo.duration)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/VideoDownloader.tsx",
                                    lineNumber: 198,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                            children: "Escolha o formato:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/VideoDownloader.tsx",
                                            lineNumber: 204,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: selectedFormat,
                                            onChange: (e)=>setSelectedFormat(e.target.value),
                                            className: "w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Selecione um formato"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/VideoDownloader.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 19
                                                }, this),
                                                videoInfo.available_formats.map((format, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: format.itag,
                                                        children: [
                                                            format.type === 'video_with_audio' && '🎥 Vídeo + Áudio',
                                                            format.type === 'video_only' && '📹 Vídeo HD',
                                                            format.type === 'audio_only' && '🎵 Apenas Áudio',
                                                            "- ",
                                                            format.quality,
                                                            " (",
                                                            format.size,
                                                            " MB)"
                                                        ]
                                                    }, format.itag, true, {
                                                        fileName: "[project]/app/components/VideoDownloader.tsx",
                                                        lineNumber: 214,
                                                        columnNumber: 21
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/VideoDownloader.tsx",
                                            lineNumber: 207,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/VideoDownloader.tsx",
                                    lineNumber: 203,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: startDownload,
                                    disabled: !selectedFormat || polling,
                                    className: "px-6 py-3 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white rounded-lg font-medium transition-colors",
                                    children: polling ? 'Baixando...' : 'Iniciar Download'
                                }, void 0, false, {
                                    fileName: "[project]/app/components/VideoDownloader.tsx",
                                    lineNumber: 224,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/VideoDownloader.tsx",
                            lineNumber: 194,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/VideoDownloader.tsx",
                    lineNumber: 186,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/VideoDownloader.tsx",
                lineNumber: 185,
                columnNumber: 9
            }, this),
            downloadStatus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-gray-800 dark:text-white mb-4",
                        children: "Status do Download"
                    }, void 0, false, {
                        fileName: "[project]/app/components/VideoDownloader.tsx",
                        lineNumber: 239,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: downloadStatus.message
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/VideoDownloader.tsx",
                                        lineNumber: 246,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            downloadStatus.progress,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/VideoDownloader.tsx",
                                        lineNumber: 247,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/VideoDownloader.tsx",
                                lineNumber: 245,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-2 rounded-full transition-all duration-300 ".concat(downloadStatus.status === 'error' ? 'bg-red-500' : downloadStatus.status === 'completed' ? 'bg-green-500' : 'bg-blue-500'),
                                    style: {
                                        width: "".concat(downloadStatus.progress, "%")
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/VideoDownloader.tsx",
                                    lineNumber: 250,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/VideoDownloader.tsx",
                                lineNumber: 249,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/VideoDownloader.tsx",
                        lineNumber: 244,
                        columnNumber: 11
                    }, this),
                    downloadStatus.status === 'completed' && downloadStatus.download_url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 p-4 bg-green-100 dark:bg-green-900/20 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-green-700 dark:text-green-400 font-medium mb-2",
                                children: "✅ Download concluído!"
                            }, void 0, false, {
                                fileName: "[project]/app/components/VideoDownloader.tsx",
                                lineNumber: 266,
                                columnNumber: 15
                            }, this),
                            downloadStatus.file_size && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-green-600 dark:text-green-400 mb-3",
                                children: [
                                    "Tamanho: ",
                                    formatFileSize(downloadStatus.file_size)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/VideoDownloader.tsx",
                                lineNumber: 270,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "".concat(API_BASE_URL).concat(downloadStatus.download_url),
                                download: true,
                                className: "inline-block px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors",
                                children: "📥 Baixar Arquivo"
                            }, void 0, false, {
                                fileName: "[project]/app/components/VideoDownloader.tsx",
                                lineNumber: 274,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/VideoDownloader.tsx",
                        lineNumber: 265,
                        columnNumber: 13
                    }, this),
                    downloadStatus.status === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 p-4 bg-red-100 dark:bg-red-900/20 rounded-lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-red-700 dark:text-red-400 font-medium",
                            children: [
                                "❌ ",
                                downloadStatus.message
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/VideoDownloader.tsx",
                            lineNumber: 287,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/VideoDownloader.tsx",
                        lineNumber: 286,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/VideoDownloader.tsx",
                lineNumber: 238,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/VideoDownloader.tsx",
        lineNumber: 156,
        columnNumber: 5
    }, this);
}
_s(VideoDownloader, "kp+T2EwMshKwOI9QB2/YQ7Q6CUk=");
_c = VideoDownloader;
var _c;
__turbopack_context__.k.register(_c, "VideoDownloader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/styles/HomeTab.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "container": "HomeTab-module__pAb1IG__container",
  "dark": "HomeTab-module__pAb1IG__dark",
  "fadeInUp": "HomeTab-module__pAb1IG__fadeInUp",
  "featureCard": "HomeTab-module__pAb1IG__featureCard",
  "featureDescription": "HomeTab-module__pAb1IG__featureDescription",
  "featureIcon": "HomeTab-module__pAb1IG__featureIcon",
  "featureTitle": "HomeTab-module__pAb1IG__featureTitle",
  "featuresGrid": "HomeTab-module__pAb1IG__featuresGrid",
  "featuresSection": "HomeTab-module__pAb1IG__featuresSection",
  "featuresTitle": "HomeTab-module__pAb1IG__featuresTitle",
  "messageBox": "HomeTab-module__pAb1IG__messageBox",
  "messageText": "HomeTab-module__pAb1IG__messageText",
  "pasteButton": "HomeTab-module__pAb1IG__pasteButton",
  "pasteContent": "HomeTab-module__pAb1IG__pasteContent",
  "pasteIcon": "HomeTab-module__pAb1IG__pasteIcon",
  "pasteSection": "HomeTab-module__pAb1IG__pasteSection",
  "pasteTitle": "HomeTab-module__pAb1IG__pasteTitle",
  "spotifyCard": "HomeTab-module__pAb1IG__spotifyCard",
  "twitchCard": "HomeTab-module__pAb1IG__twitchCard",
  "youtubeCard": "HomeTab-module__pAb1IG__youtubeCard",
});
}),
"[project]/app/components/HomeTab.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomeTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$VideoDownloader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/VideoDownloader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HomeTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/components/styles/HomeTab.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function HomeTab() {
    _s();
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handlePaste = async ()=>{
        try {
            const text = await navigator.clipboard.readText();
            if (!text) {
                setMessage('Nenhum link encontrado na área de transferência.');
                return;
            }
            setMessage("Link detectado: ".concat(text));
        // Aqui você pode chamar uma função para detectar a plataforma
        } catch (e) {
            setMessage('Não foi possível acessar a área de transferência.');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HomeTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HomeTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pasteSection,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HomeTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pasteContent,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HomeTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pasteTitle,
                            children: "Click and paste the link here"
                        }, void 0, false, {
                            fileName: "[project]/app/components/HomeTab.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handlePaste,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HomeTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pasteButton,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HomeTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pasteIcon,
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/HomeTab.tsx",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/HomeTab.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this),
                                "Paste Here"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/HomeTab.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HomeTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].messageBox,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HomeTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].messageText,
                                children: message
                            }, void 0, false, {
                                fileName: "[project]/app/components/HomeTab.tsx",
                                lineNumber: 45,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/HomeTab.tsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/HomeTab.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/HomeTab.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$VideoDownloader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/components/HomeTab.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HomeTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featuresSection,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HomeTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featuresTitle,
                        children: "Recursos Disponíveis"
                    }, void 0, false, {
                        fileName: "[project]/app/components/HomeTab.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HomeTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featuresGrid,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HomeTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featureCard, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HomeTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].youtubeCard),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HomeTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featureIcon,
                                        children: "🎥"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/HomeTab.tsx",
                                        lineNumber: 62,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HomeTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featureTitle,
                                        children: "YouTube"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/HomeTab.tsx",
                                        lineNumber: 63,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HomeTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featureDescription,
                                        children: "Downloads até 4K"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/HomeTab.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/HomeTab.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HomeTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featureCard, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HomeTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].twitchCard),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HomeTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featureIcon,
                                        children: "🎮"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/HomeTab.tsx",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HomeTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featureTitle,
                                        children: "Twitch"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/HomeTab.tsx",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HomeTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featureDescription,
                                        children: "VODs e streams"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/HomeTab.tsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/HomeTab.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HomeTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featureCard, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HomeTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].spotifyCard),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HomeTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featureIcon,
                                        children: "🎵"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/HomeTab.tsx",
                                        lineNumber: 74,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HomeTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featureTitle,
                                        children: "Spotify"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/HomeTab.tsx",
                                        lineNumber: 75,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HomeTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featureDescription,
                                        children: "Áudio de alta qualidade"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/HomeTab.tsx",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/HomeTab.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/HomeTab.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/HomeTab.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/HomeTab.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(HomeTab, "oxT8SEz5FIjvFP5ix50Ku0sapH4=");
_c = HomeTab;
var _c;
__turbopack_context__.k.register(_c, "HomeTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/styles/SettingsTab.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "accountGrid": "SettingsTab-module__nPAEPq__accountGrid",
  "accountItem": "SettingsTab-module__nPAEPq__accountItem",
  "accountLabel": "SettingsTab-module__nPAEPq__accountLabel",
  "accountValue": "SettingsTab-module__nPAEPq__accountValue",
  "actionButton": "SettingsTab-module__nPAEPq__actionButton",
  "benefitDescription": "SettingsTab-module__nPAEPq__benefitDescription",
  "benefitIcon": "SettingsTab-module__nPAEPq__benefitIcon",
  "benefitItem": "SettingsTab-module__nPAEPq__benefitItem",
  "benefitTitle": "SettingsTab-module__nPAEPq__benefitTitle",
  "benefitsGrid": "SettingsTab-module__nPAEPq__benefitsGrid",
  "container": "SettingsTab-module__nPAEPq__container",
  "section": "SettingsTab-module__nPAEPq__section",
  "sectionTitle": "SettingsTab-module__nPAEPq__sectionTitle",
  "statusBadge": "SettingsTab-module__nPAEPq__statusBadge",
});
}),
"[project]/app/components/SettingsTab.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SettingsTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/components/styles/SettingsTab.module.css [app-client] (css module)");
;
;
function SettingsTab() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].accountSection,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                        children: "Informações da Conta"
                    }, void 0, false, {
                        fileName: "[project]/app/components/SettingsTab.tsx",
                        lineNumber: 8,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].accountGrid,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].accountItem,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].accountLabel,
                                        children: "Username:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/SettingsTab.tsx",
                                        lineNumber: 14,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].accountValue,
                                        children: "johndoe"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/SettingsTab.tsx",
                                        lineNumber: 15,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/SettingsTab.tsx",
                                lineNumber: 13,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].accountItem,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].accountLabel,
                                        children: "Email:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/SettingsTab.tsx",
                                        lineNumber: 19,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].accountValue,
                                        children: "john.doe@example.com"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/SettingsTab.tsx",
                                        lineNumber: 20,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/SettingsTab.tsx",
                                lineNumber: 18,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].accountItem,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].accountLabel,
                                        children: "Account Status:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/SettingsTab.tsx",
                                        lineNumber: 24,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusBadge,
                                        children: "Premium"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/SettingsTab.tsx",
                                        lineNumber: 25,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/SettingsTab.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].accountItem,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].accountLabel,
                                        children: "Renewal Date:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/SettingsTab.tsx",
                                        lineNumber: 31,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].accountValue,
                                        children: "December 15, 2023"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/SettingsTab.tsx",
                                        lineNumber: 32,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/SettingsTab.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/SettingsTab.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].manageButton,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button,
                            children: "Manage Subscription"
                        }, void 0, false, {
                            fileName: "[project]/app/components/SettingsTab.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/SettingsTab.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/SettingsTab.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].benefitsSection,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                        children: "Benefícios do Plano Premium"
                    }, void 0, false, {
                        fileName: "[project]/app/components/SettingsTab.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].benefitsGrid,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].benefitsList,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].benefitItem,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].benefitIcon,
                                                children: "✅"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/SettingsTab.tsx",
                                                lineNumber: 52,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].benefitTitle,
                                                        children: "Unlimited Downloads"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/SettingsTab.tsx",
                                                        lineNumber: 54,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].benefitDescription,
                                                        children: "No daily limits"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/SettingsTab.tsx",
                                                        lineNumber: 55,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/SettingsTab.tsx",
                                                lineNumber: 53,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/SettingsTab.tsx",
                                        lineNumber: 51,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].benefitItem,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].benefitIcon,
                                                children: "✅"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/SettingsTab.tsx",
                                                lineNumber: 60,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].benefitTitle,
                                                        children: "4K Resolution"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/SettingsTab.tsx",
                                                        lineNumber: 62,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].benefitDescription,
                                                        children: "Highest quality available"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/SettingsTab.tsx",
                                                        lineNumber: 63,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/SettingsTab.tsx",
                                                lineNumber: 61,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/SettingsTab.tsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/SettingsTab.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].benefitsList,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].benefitItem,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].benefitIcon,
                                                children: "✅"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/SettingsTab.tsx",
                                                lineNumber: 70,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].benefitTitle,
                                                        children: "Simultaneous Downloads"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/SettingsTab.tsx",
                                                        lineNumber: 72,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].benefitDescription,
                                                        children: "Up to 5 at once"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/SettingsTab.tsx",
                                                        lineNumber: 73,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/SettingsTab.tsx",
                                                lineNumber: 71,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/SettingsTab.tsx",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].benefitItem,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].benefitIcon,
                                                children: "✅"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/SettingsTab.tsx",
                                                lineNumber: 78,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].benefitTitle,
                                                        children: "Batch Processing"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/SettingsTab.tsx",
                                                        lineNumber: 80,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].benefitDescription,
                                                        children: "Process multiple links at once"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/SettingsTab.tsx",
                                                        lineNumber: 81,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/SettingsTab.tsx",
                                                lineNumber: 79,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/SettingsTab.tsx",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/SettingsTab.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/SettingsTab.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/SettingsTab.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/SettingsTab.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = SettingsTab;
var _c;
__turbopack_context__.k.register(_c, "SettingsTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/styles/HistoryPanel.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actionButton": "HistoryPanel-module__dLq40G__actionButton",
  "actionIcon": "HistoryPanel-module__dLq40G__actionIcon",
  "actions": "HistoryPanel-module__dLq40G__actions",
  "container": "HistoryPanel-module__dLq40G__container",
  "content": "HistoryPanel-module__dLq40G__content",
  "controlButton": "HistoryPanel-module__dLq40G__controlButton",
  "controlIcon": "HistoryPanel-module__dLq40G__controlIcon",
  "controls": "HistoryPanel-module__dLq40G__controls",
  "dark": "HistoryPanel-module__dLq40G__dark",
  "defaultPlatform": "HistoryPanel-module__dLq40G__defaultPlatform",
  "deleteButton": "HistoryPanel-module__dLq40G__deleteButton",
  "downloadButton": "HistoryPanel-module__dLq40G__downloadButton",
  "emptyState": "HistoryPanel-module__dLq40G__emptyState",
  "fileDate": "HistoryPanel-module__dLq40G__fileDate",
  "fileDetails": "HistoryPanel-module__dLq40G__fileDetails",
  "fileInfo": "HistoryPanel-module__dLq40G__fileInfo",
  "fileTitle": "HistoryPanel-module__dLq40G__fileTitle",
  "grid": "HistoryPanel-module__dLq40G__grid",
  "gridOneColumn": "HistoryPanel-module__dLq40G__gridOneColumn",
  "gridTwoColumns": "HistoryPanel-module__dLq40G__gridTwoColumns",
  "header": "HistoryPanel-module__dLq40G__header",
  "historyItem": "HistoryPanel-module__dLq40G__historyItem",
  "iconEmoji": "HistoryPanel-module__dLq40G__iconEmoji",
  "platformIcon": "HistoryPanel-module__dLq40G__platformIcon",
  "slideInUp": "HistoryPanel-module__dLq40G__slideInUp",
  "spotifyPlatform": "HistoryPanel-module__dLq40G__spotifyPlatform",
  "title": "HistoryPanel-module__dLq40G__title",
  "toggleIcon": "HistoryPanel-module__dLq40G__toggleIcon",
  "toggleIconOpen": "HistoryPanel-module__dLq40G__toggleIconOpen",
  "twitchPlatform": "HistoryPanel-module__dLq40G__twitchPlatform",
  "youtubePlatform": "HistoryPanel-module__dLq40G__youtubePlatform",
});
}),
"[project]/app/components/HistoryPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HistoryPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HistoryPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/components/styles/HistoryPanel.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function HistoryPanel(param) {
    let { open, onToggle } = param;
    _s();
    const [isTwoColumns, setIsTwoColumns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const mockHistoryData = [
        {
            id: 1,
            title: "Como programar em Python - Tutorial Completo",
            type: "MP4",
            quality: "1080p",
            duration: "15:30",
            size: "245MB",
            date: "2024-01-15",
            platform: "youtube"
        },
        {
            id: 2,
            title: "Tutorial Next.js - Aprenda do Zero",
            type: "MP3",
            quality: "320kbps",
            duration: "08:45",
            size: "12MB",
            date: "2024-01-14",
            platform: "youtube"
        },
        {
            id: 3,
            title: "Live Gaming Session - Apex Legends",
            type: "MP4",
            quality: "720p",
            duration: "2:15:30",
            size: "1.2GB",
            date: "2024-01-13",
            platform: "twitch"
        },
        {
            id: 4,
            title: "Música Relaxante para Estudar",
            type: "MP3",
            quality: "256kbps",
            duration: "1:30:00",
            size: "82MB",
            date: "2024-01-12",
            platform: "spotify"
        }
    ];
    const getPlatformColor = (platform)=>{
        switch(platform){
            case 'youtube':
                return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HistoryPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].youtubePlatform;
            case 'twitch':
                return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HistoryPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].twitchPlatform;
            case 'spotify':
                return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HistoryPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].spotifyPlatform;
            default:
                return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HistoryPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].defaultPlatform;
        }
    };
    const getPlatformIcon = (platform)=>{
        switch(platform){
            case 'youtube':
                return '🎥';
            case 'twitch':
                return '🎮';
            case 'spotify':
                return '🎵';
            default:
                return '📹';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HistoryPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HistoryPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HistoryPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                        children: "History"
                    }, void 0, false, {
                        fileName: "[project]/app/components/HistoryPanel.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HistoryPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controls,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsTwoColumns(!isTwoColumns),
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HistoryPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controlButton,
                                title: isTwoColumns ? "Uma coluna" : "Duas colunas",
                                children: isTwoColumns ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HistoryPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controlIcon,
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M4 6h16M4 12h16M4 18h16"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/HistoryPanel.tsx",
                                        lineNumber: 92,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/HistoryPanel.tsx",
                                    lineNumber: 91,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HistoryPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controlIcon,
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M4 6h7M4 12h7M4 18h7M15 6h5M15 12h5M15 18h5"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/HistoryPanel.tsx",
                                        lineNumber: 96,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/HistoryPanel.tsx",
                                    lineNumber: 95,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/HistoryPanel.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onToggle,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HistoryPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controlButton,
                                title: open ? "Recolher" : "Expandir",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HistoryPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toggleIcon, " ").concat(open ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HistoryPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toggleIconOpen : ''),
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M19 9l-7 7-7-7"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/HistoryPanel.tsx",
                                        lineNumber: 113,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/HistoryPanel.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/HistoryPanel.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/HistoryPanel.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/HistoryPanel.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HistoryPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HistoryPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid, " ").concat(isTwoColumns ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HistoryPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].gridTwoColumns : __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HistoryPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].gridOneColumn),
                        children: mockHistoryData.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HistoryPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].historyItem,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HistoryPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].platformIcon, " ").concat(getPlatformColor(item.platform)),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HistoryPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconEmoji,
                                            children: getPlatformIcon(item.platform)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/HistoryPanel.tsx",
                                            lineNumber: 130,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/HistoryPanel.tsx",
                                        lineNumber: 129,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HistoryPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileInfo,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HistoryPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileTitle,
                                                children: item.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/HistoryPanel.tsx",
                                                lineNumber: 135,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HistoryPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileDetails,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            item.type,
                                                            " - ",
                                                            item.quality
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/HistoryPanel.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "Time: ",
                                                            item.duration
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/HistoryPanel.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "Size: ",
                                                            item.size
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/HistoryPanel.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/HistoryPanel.tsx",
                                                lineNumber: 138,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HistoryPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileDate,
                                                children: item.date
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/HistoryPanel.tsx",
                                                lineNumber: 143,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/HistoryPanel.tsx",
                                        lineNumber: 134,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HistoryPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actions,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HistoryPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionButton, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HistoryPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].downloadButton, " group"),
                                                title: "Baixar novamente",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HistoryPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionIcon, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HistoryPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].downloadIcon),
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/HistoryPanel.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/HistoryPanel.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/HistoryPanel.tsx",
                                                lineNumber: 150,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HistoryPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionButton, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HistoryPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].deleteButton, " group"),
                                                title: "Deletar",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HistoryPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionIcon, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HistoryPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].deleteIcon),
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/HistoryPanel.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/HistoryPanel.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/HistoryPanel.tsx",
                                                lineNumber: 159,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/HistoryPanel.tsx",
                                        lineNumber: 149,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, item.id, true, {
                                fileName: "[project]/app/components/HistoryPanel.tsx",
                                lineNumber: 124,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/components/HistoryPanel.tsx",
                        lineNumber: 122,
                        columnNumber: 11
                    }, this),
                    mockHistoryData.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HistoryPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].emptyState,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Nenhum download no histórico"
                        }, void 0, false, {
                            fileName: "[project]/app/components/HistoryPanel.tsx",
                            lineNumber: 174,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/HistoryPanel.tsx",
                        lineNumber: 173,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/HistoryPanel.tsx",
                lineNumber: 121,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/HistoryPanel.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_s(HistoryPanel, "b3mjkaqWivikqZOGgKzr745X0cs=");
_c = HistoryPanel;
var _c;
__turbopack_context__.k.register(_c, "HistoryPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$TitleBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/TitleBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Tabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$HomeTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/HomeTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$SettingsTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/SettingsTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$HistoryPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/HistoryPanel.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function Home() {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('home');
    const [historyOpen, setHistoryOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 dark:bg-gray-900",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$TitleBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-[calc(100vh-8rem)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 border-b border-gray-200 dark:border-gray-700",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    activeTab: activeTab,
                                    onTabChange: setActiveTab
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 21,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 20,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 p-6 overflow-auto",
                                children: [
                                    activeTab === 'home' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$HomeTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 25,
                                        columnNumber: 38
                                    }, this),
                                    activeTab === 'settings' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$SettingsTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 26,
                                        columnNumber: 42
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-96 border-l border-gray-200 dark:border-gray-700",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$HistoryPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            open: historyOpen,
                            onToggle: ()=>setHistoryOpen(!historyOpen)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(Home, "AlMmtTXZSd16HLVdyHVuQf8/IxA=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_1041c70d._.js.map
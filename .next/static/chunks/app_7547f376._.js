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
"[project]/app/components/styles/VideoDownloader.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "analyzeButton": "VideoDownloader-module__ENrLMa__analyzeButton",
  "container": "VideoDownloader-module__ENrLMa__container",
  "dark": "VideoDownloader-module__ENrLMa__dark",
  "fadeInUp": "VideoDownloader-module__ENrLMa__fadeInUp",
  "inputGroup": "VideoDownloader-module__ENrLMa__inputGroup",
  "inputSection": "VideoDownloader-module__ENrLMa__inputSection",
  "loadingSpinner": "VideoDownloader-module__ENrLMa__loadingSpinner",
  "spin": "VideoDownloader-module__ENrLMa__spin",
  "thumbnail": "VideoDownloader-module__ENrLMa__thumbnail",
  "title": "VideoDownloader-module__ENrLMa__title",
  "urlInput": "VideoDownloader-module__ENrLMa__urlInput",
  "videoInfo": "VideoDownloader-module__ENrLMa__videoInfo",
  "videoMeta": "VideoDownloader-module__ENrLMa__videoMeta",
  "videoTitle": "VideoDownloader-module__ENrLMa__videoTitle",
});
}),
"[project]/app/components/VideoDownloader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$VideoDownloader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/components/styles/VideoDownloader.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const VideoDownloader = (param)=>{
    let { initialUrl } = param;
    _s();
    const [url, setUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialUrl);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [videoInfo, setVideoInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Sempre que initialUrl mudar → busca imediatamente
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VideoDownloader.useEffect": ()=>{
            if (initialUrl) {
                setUrl(initialUrl);
                getVideoInfo(initialUrl);
            }
        }
    }["VideoDownloader.useEffect"], [
        initialUrl
    ]);
    const getVideoInfo = async (finalUrl)=>{
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('/api/video/info', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    url: finalUrl,
                    format_type: 'video_with_audio',
                    quality: 'best'
                })
            });
            if (!response.ok) throw new Error("Erro: ".concat(response.status));
            const data = await response.json();
            setVideoInfo(data);
        } catch (error) {
            console.error('Erro ao buscar vídeo:', error);
            setError('Erro ao buscar informações do vídeo. Verifique se o backend está rodando.');
            setVideoInfo({
                title: 'Vídeo de Exemplo (Simulado)',
                thumbnail: '',
                duration: '5:30',
                channel: 'Canal Exemplo'
            });
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$VideoDownloader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: [
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "⏳ Buscando informações do vídeo..."
            }, void 0, false, {
                fileName: "[project]/app/components/VideoDownloader.tsx",
                lineNumber: 56,
                columnNumber: 19
            }, ("TURBOPACK compile-time value", void 0)),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$VideoDownloader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorMessage,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        "⚠️ ",
                        error
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/VideoDownloader.tsx",
                    lineNumber: 57,
                    columnNumber: 54
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/VideoDownloader.tsx",
                lineNumber: 57,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            videoInfo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$VideoDownloader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].videoInfo,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$VideoDownloader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].videoTitle,
                        children: videoInfo.title
                    }, void 0, false, {
                        fileName: "[project]/app/components/VideoDownloader.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$VideoDownloader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].videoMeta,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "📺 Canal: ",
                                    videoInfo.channel
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/VideoDownloader.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "⏱️ Duração: ",
                                    videoInfo.duration
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/VideoDownloader.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/VideoDownloader.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    videoInfo.thumbnail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$VideoDownloader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].thumbnailContainer,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: videoInfo.thumbnail,
                            alt: "Thumbnail do vídeo",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$VideoDownloader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].thumbnail,
                            onError: (e)=>{
                                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDMyMCAxODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMjAiIGhlaWdodD0iMTgwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNDcuNSA2Ny41TDE3Mi41IDgyLjVMMTQ3LjUgOTcuNVY2Ny41WiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K';
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/components/VideoDownloader.tsx",
                            lineNumber: 67,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/components/VideoDownloader.tsx",
                        lineNumber: 66,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$VideoDownloader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].downloadSection,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$VideoDownloader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].downloadButton,
                                children: "📥 Download MP4"
                            }, void 0, false, {
                                fileName: "[project]/app/components/VideoDownloader.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$VideoDownloader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].downloadButton,
                                children: "🎵 Download MP3"
                            }, void 0, false, {
                                fileName: "[project]/app/components/VideoDownloader.tsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/VideoDownloader.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/VideoDownloader.tsx",
                lineNumber: 59,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/VideoDownloader.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(VideoDownloader, "zcZIyIr6TfDOkfWpIvj2IgLV0Es=");
_c = VideoDownloader;
const __TURBOPACK__default__export__ = VideoDownloader;
var _c;
__turbopack_context__.k.register(_c, "VideoDownloader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/styles/HomeTab.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "container": "HomeTab-module__pAb1IG__container",
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
    const [videoUrl, setVideoUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handlePasteAndSearch = async ()=>{
        try {
            const text = await navigator.clipboard.readText();
            if (text) {
                setVideoUrl(text); // já dispara a busca automática no VideoDownloader
            }
        } catch (err) {
            console.error('Erro ao ler área de transferência:', err);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HomeTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HomeTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pasteSection,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HomeTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pasteContent,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handlePasteAndSearch,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HomeTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pasteButton,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HomeTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pasteIcon,
                                children: "📋"
                            }, void 0, false, {
                                fileName: "[project]/app/components/HomeTab.tsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this),
                            "Clique para colar a URL"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/HomeTab.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/HomeTab.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                videoUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$VideoDownloader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    initialUrl: videoUrl
                }, void 0, false, {
                    fileName: "[project]/app/components/HomeTab.tsx",
                    lineNumber: 32,
                    columnNumber: 22
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        padding: '20px'
                    }
                }, void 0, false, {
                    fileName: "[project]/app/components/HomeTab.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HomeTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featuresSection,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HomeTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featuresTitle,
                            children: "Plataformas Suportadas"
                        }, void 0, false, {
                            fileName: "[project]/app/components/HomeTab.tsx",
                            lineNumber: 36,
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
                                            children: "📺"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/HomeTab.tsx",
                                            lineNumber: 39,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HomeTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featureTitle,
                                            children: "YouTube"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/HomeTab.tsx",
                                            lineNumber: 40,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HomeTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featureDescription,
                                            children: "Baixe vídeos e áudios em alta qualidade"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/HomeTab.tsx",
                                            lineNumber: 41,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/HomeTab.tsx",
                                    lineNumber: 38,
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
                                            lineNumber: 47,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HomeTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featureTitle,
                                            children: "Twitch"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/HomeTab.tsx",
                                            lineNumber: 48,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HomeTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featureDescription,
                                            children: "Downloads de streams e clipes"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/HomeTab.tsx",
                                            lineNumber: 49,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/HomeTab.tsx",
                                    lineNumber: 46,
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
                                            lineNumber: 55,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HomeTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featureTitle,
                                            children: "Spotify"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/HomeTab.tsx",
                                            lineNumber: 56,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HomeTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featureDescription,
                                            children: "Extraia áudios de playlists"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/HomeTab.tsx",
                                            lineNumber: 57,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/HomeTab.tsx",
                                    lineNumber: 54,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/HomeTab.tsx",
                            lineNumber: 37,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/HomeTab.tsx",
                    lineNumber: 35,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/HomeTab.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/HomeTab.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(HomeTab, "KGPSeO3qMjQp+p4Rw4HKo+yDKlA=");
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
  "accountSection": "SettingsTab-module__nPAEPq__accountSection",
  "accountValue": "SettingsTab-module__nPAEPq__accountValue",
  "actionButton": "SettingsTab-module__nPAEPq__actionButton",
  "benefitDescription": "SettingsTab-module__nPAEPq__benefitDescription",
  "benefitIcon": "SettingsTab-module__nPAEPq__benefitIcon",
  "benefitItem": "SettingsTab-module__nPAEPq__benefitItem",
  "benefitTitle": "SettingsTab-module__nPAEPq__benefitTitle",
  "benefitsGrid": "SettingsTab-module__nPAEPq__benefitsGrid",
  "button": "SettingsTab-module__nPAEPq__button",
  "container": "SettingsTab-module__nPAEPq__container",
  "manageButton": "SettingsTab-module__nPAEPq__manageButton",
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/components/styles/SettingsTab.module.css [app-client] (css module)");
(()=>{
    const e = new Error("Cannot find module './conta'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function SettingsTab() {
    _s();
    const [openConta, setOpenConta] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
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
                        lineNumber: 13,
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
                                        children: "Username"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/SettingsTab.tsx",
                                        lineNumber: 17,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].accountValue,
                                        children: "johndoe"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/SettingsTab.tsx",
                                        lineNumber: 18,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/SettingsTab.tsx",
                                lineNumber: 16,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].accountItem,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].accountLabel,
                                        children: "Email"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/SettingsTab.tsx",
                                        lineNumber: 22,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].accountValue,
                                        children: "john.doe@example.com"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/SettingsTab.tsx",
                                        lineNumber: 23,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/SettingsTab.tsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].accountItem,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].accountLabel,
                                        children: "Account Status"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/SettingsTab.tsx",
                                        lineNumber: 27,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusBadge,
                                        children: "Premium"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/SettingsTab.tsx",
                                        lineNumber: 28,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/SettingsTab.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].accountItem,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].accountLabel,
                                        children: "Renewal Date"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/SettingsTab.tsx",
                                        lineNumber: 32,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].accountValue,
                                        children: "December 15, 2023"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/SettingsTab.tsx",
                                        lineNumber: 33,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/SettingsTab.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/SettingsTab.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].manageButton,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button,
                            onClick: ()=>setOpenConta(true),
                            children: "Manage Subscription"
                        }, void 0, false, {
                            fileName: "[project]/app/components/SettingsTab.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/SettingsTab.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/SettingsTab.tsx",
                lineNumber: 12,
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
                        lineNumber: 46,
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
                                                lineNumber: 51,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].benefitTitle,
                                                        children: "Unlimited Downloads"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/SettingsTab.tsx",
                                                        lineNumber: 53,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].benefitDescription,
                                                        children: "No daily limits"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/SettingsTab.tsx",
                                                        lineNumber: 54,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/SettingsTab.tsx",
                                                lineNumber: 52,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/SettingsTab.tsx",
                                        lineNumber: 50,
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
                                                lineNumber: 59,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].benefitTitle,
                                                        children: "4K Resolution"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/SettingsTab.tsx",
                                                        lineNumber: 61,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].benefitDescription,
                                                        children: "Highest quality available"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/SettingsTab.tsx",
                                                        lineNumber: 62,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/SettingsTab.tsx",
                                                lineNumber: 60,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/SettingsTab.tsx",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/SettingsTab.tsx",
                                lineNumber: 49,
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
                                                lineNumber: 69,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].benefitTitle,
                                                        children: "Simultaneous Downloads"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/SettingsTab.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].benefitDescription,
                                                        children: "Up to 5 at once"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/SettingsTab.tsx",
                                                        lineNumber: 72,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/SettingsTab.tsx",
                                                lineNumber: 70,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/SettingsTab.tsx",
                                        lineNumber: 68,
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
                                                lineNumber: 77,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].benefitTitle,
                                                        children: "Batch Processing"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/SettingsTab.tsx",
                                                        lineNumber: 79,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$SettingsTab$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].benefitDescription,
                                                        children: "Process multiple links at once"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/SettingsTab.tsx",
                                                        lineNumber: 80,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/SettingsTab.tsx",
                                                lineNumber: 78,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/SettingsTab.tsx",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/SettingsTab.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/SettingsTab.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/SettingsTab.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Conta, {
                open: openConta,
                onClose: ()=>setOpenConta(false)
            }, void 0, false, {
                fileName: "[project]/app/components/SettingsTab.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/SettingsTab.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_s(SettingsTab, "Vaq9sTLabNq7E1PcpbR0ci2XwTk=");
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
  "scrollContainer": "HistoryPanel-module__dLq40G__scrollContainer",
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
    const [shiftUp, setShiftUp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleToggle = ()=>{
        onToggle(); // mantém a função externa
        setShiftUp((prev)=>!prev); // alterna a margem
    };
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
        },
        {
            id: 5,
            title: "Vídeo 5",
            type: "MP4",
            quality: "1080p",
            duration: "55:30",
            size: "445MB",
            date: "2025-01-15",
            platform: "youtube"
        },
        {
            id: 6,
            title: "Vídeo 6",
            type: "MP3",
            quality: "220kbps",
            duration: "03:45",
            size: "19MB",
            date: "2024-02-14",
            platform: "youtube"
        },
        {
            id: 7,
            title: "Vídeo 7",
            type: "MP4",
            quality: "720p",
            duration: "5:15:30",
            size: "1.0GB",
            date: "2022-01-13",
            platform: "twitch"
        },
        {
            id: 8,
            title: "Vídeo 8",
            type: "MP3",
            quality: "352kbps",
            duration: "5:30:00",
            size: "722MB",
            date: "2020-01-12",
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
        style: {
            marginTop: shiftUp ? '-620px' : '0'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HistoryPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HistoryPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                        children: "History"
                    }, void 0, false, {
                        fileName: "[project]/app/components/HistoryPanel.tsx",
                        lineNumber: 125,
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
                                        lineNumber: 138,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/HistoryPanel.tsx",
                                    lineNumber: 137,
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
                                        lineNumber: 142,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/HistoryPanel.tsx",
                                    lineNumber: 141,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/HistoryPanel.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleToggle,
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
                                        lineNumber: 159,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/HistoryPanel.tsx",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/HistoryPanel.tsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "container"
                            }, void 0, false, {
                                fileName: "[project]/app/components/HistoryPanel.tsx",
                                lineNumber: 162,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/HistoryPanel.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/HistoryPanel.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HistoryPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HistoryPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrollContainer,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                lineNumber: 180,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/HistoryPanel.tsx",
                                            lineNumber: 179,
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
                                                    lineNumber: 185,
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
                                                            lineNumber: 189,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                "Time: ",
                                                                item.duration
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/HistoryPanel.tsx",
                                                            lineNumber: 190,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                "Size: ",
                                                                item.size
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/HistoryPanel.tsx",
                                                            lineNumber: 191,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/HistoryPanel.tsx",
                                                    lineNumber: 188,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HistoryPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileDate,
                                                    children: item.date
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/HistoryPanel.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/HistoryPanel.tsx",
                                            lineNumber: 184,
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
                                                            lineNumber: 205,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/HistoryPanel.tsx",
                                                        lineNumber: 204,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/HistoryPanel.tsx",
                                                    lineNumber: 200,
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
                                                            lineNumber: 214,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/HistoryPanel.tsx",
                                                        lineNumber: 213,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/HistoryPanel.tsx",
                                                    lineNumber: 209,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/HistoryPanel.tsx",
                                            lineNumber: 199,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, item.id, true, {
                                    fileName: "[project]/app/components/HistoryPanel.tsx",
                                    lineNumber: 174,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/components/HistoryPanel.tsx",
                            lineNumber: 172,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/HistoryPanel.tsx",
                        lineNumber: 171,
                        columnNumber: 11
                    }, this),
                    mockHistoryData.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$styles$2f$HistoryPanel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].emptyState,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Nenhum download no histórico"
                        }, void 0, false, {
                            fileName: "[project]/app/components/HistoryPanel.tsx",
                            lineNumber: 224,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/HistoryPanel.tsx",
                        lineNumber: 223,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/HistoryPanel.tsx",
                lineNumber: 170,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/HistoryPanel.tsx",
        lineNumber: 121,
        columnNumber: 5
    }, this);
}
_s(HistoryPanel, "GjS6md88gv8l+UaB9XmIEMpPEak=");
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

//# sourceMappingURL=app_7547f376._.js.map
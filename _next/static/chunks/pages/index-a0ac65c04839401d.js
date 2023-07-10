(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5405], {
        45728: function (e, o, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function () {
                return t(85065)
            }])
        },
        85065: function (e, o, t) {
            "use strict";
            t.r(o), t.d(o, {
                default: function () {
                    return Oe
                }
            });
            var r = t(85893),
                i = t(67294),
                n = t(45697),
                s = t.n(n),
                a = t(94184),
                d = t.n(a),
                l = t(48947),
                c = t.n(l);

            function u(e, o, t) {
                return o in e ? Object.defineProperty(e, o, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[o] = t, e
            }

            function f(e, o) {
                if (null == e) return {};
                var t, r, i = function (e, o) {
                    if (null == e) return {};
                    var t, r, i = {},
                        n = Object.keys(e);
                    for (r = 0; r < n.length; r++) t = n[r], o.indexOf(t) >= 0 || (i[t] = e[t]);
                    return i
                }(e, o);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < n.length; r++) t = n[r], o.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t])
                }
                return i
            }
            var h = function (e) {
                var o = e.className,
                    t = e.onChange,
                    i = e.id,
                    n = e.label,
                    s = e.checked,
                    a = f(e, ["className", "onChange", "id", "label", "checked"]),
                    l = d()(c()["form-check"], o);
                return (0, r.jsxs)("div", function (e) {
                    for (var o = 1; o < arguments.length; o++) {
                        var t = null != arguments[o] ? arguments[o] : {},
                            r = Object.keys(t);
                        "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })))), r.forEach((function (o) {
                            u(e, o, t[o])
                        }))
                    }
                    return e
                }({
                    className: l
                }, a, {
                    children: [(0, r.jsx)("input", {
                        className: c()["form-check-input"],
                        type: "checkbox",
                        onChange: function (e) {
                            return t(e.target.checked)
                        },
                        id: i,
                        checked: s
                    }), (0, r.jsx)("label", {
                        className: c()["form-check-label"],
                        htmlFor: i,
                        children: n
                    })]
                }))
            };
            h.propTypes = {
                className: s().string,
                onChange: s().func.isRequired,
                id: s().string.isRequired,
                label: s().string.isRequired,
                checked: s().bool
            }, h.defaultProps = {
                className: "",
                checked: !1
            };
            var b = h,
                x = t(96486),
                p = t(46187),
                g = t.n(p),
                m = function (e) {
                    var o = e.className,
                        t = e.min,
                        n = e.max,
                        s = e.value,
                        a = e.onChange,
                        l = d()(o, g().slider),
                        c = (0, x.clamp)(100 * ((0, x.toNumber)(s) - t) / (n - t), 0, 100),
                        u = (0, i.useRef)(null),
                        f = function (e) {
                            var o = u.current.getBoundingClientRect(),
                                r = e - o.left,
                                i = o.right - o.left,
                                s = t + (0, x.clamp)(r / i, 0, 1) * (n - t);
                            a(Math.round(s))
                        },
                        h = function (e) {
                            f(e.pageX)
                        },
                        b = function (e) {
                            f(e.pageX), window.removeEventListener("mousemove", h), window.removeEventListener("mouseup", b)
                        };
                    return (0, r.jsxs)("div", {
                        className: l,
                        onMouseDown: function (e) {
                            f(e.pageX), window.addEventListener("mousemove", h), window.addEventListener("mouseup", b)
                        },
                        role: "button",
                        tabIndex: "-1",
                        ref: u,
                        children: [(0, r.jsx)("div", {
                            className: g()["slider-range"],
                            style: {
                                width: "".concat(c, "%")
                            }
                        }), (0, r.jsx)("div", {
                            className: g()["slider-point"],
                            style: {
                                left: "".concat(c, "%")
                            }
                        })]
                    })
                };
            m.propTypes = {
                className: s().string,
                min: s().oneOfType([s().number, s().string]),
                max: s().oneOfType([s().number, s().string]),
                value: s().oneOfType([s().number, s().string]),
                onChange: s().func.isRequired
            }, m.defaultProps = {
                className: "",
                min: 0,
                max: 100,
                value: 0
            };
            var w = m,
                C = t(27010),
                v = t.n(C),
                R = function (e) {
                    var o = e.className,
                        t = e.label,
                        i = e.value,
                        n = e.onChange,
                        s = e.min,
                        a = e.max,
                        l = e.onRefresh,
                        c = e.unit,
                        u = d()(o);
                    return (0, r.jsx)("div", {
                        className: u,
                        children: (0, r.jsxs)("div", {
                            className: "flex flex-wrap",
                            children: [(0, r.jsx)("div", {
                                className: d()("w-auto", v().refresh),
                                children: (0, r.jsx)("img", {
                                    src: "static/images/refresh.png",
                                    alt: "refresh",
                                    className: v().refreshIcon,
                                    onClick: l
                                })
                            }), (0, r.jsxs)("div", {
                                className: "col",
                                children: [(0, r.jsxs)("div", {
                                    className: v().label,
                                    children: ["".concat(t, ": "), (0, r.jsx)("span", {
                                        className: v().value,
                                        children: "".concat(i).concat(c)
                                    })]
                                }), (0, r.jsx)(w, {
                                    className: v().silder,
                                    min: s,
                                    max: a,
                                    value: i,
                                    onChange: n
                                })]
                            })]
                        })
                    })
                };
            R.propTypes = {
                label: s().string.isRequired,
                className: s().string,
                value: s().oneOfType([s().string, s().number]).isRequired,
                onChange: s().func.isRequired,
                min: s().number,
                max: s().number,
                onRefresh: s().func.isRequired,
                unit: s().string
            }, R.defaultProps = {
                className: "",
                min: 0,
                max: 100,
                unit: "px"
            };
            var y = R,
                k = ["Arial", "Arial Black", "Comic Sans MS", "Courier New", "Georgia", "Impact", "Times New Roman", "Trebuchet MS", "Verdana"],
                j = function (e) {
                    var o = e.className,
                        t = e.text,
                        i = e.nameClass,
                        n = e.fontFamily,
                        s = e.fontSize,
                        a = e.isBold,
                        d = e.isItalic,
                        l = e.onRefresh,
                        c = e.onChange;
                    return console.log("text"), (0, r.jsxs)("div", {
                        className: o,
                        children: [(0, r.jsx)("div", {
                            className: "setting-title",
                            children: "Text"
                        }), (0, r.jsxs)("div", {
                            className: "flex flex-wrap",
                            children: [(0, r.jsxs)("div", {
                                className: "w-1/2 pr-4",
                                children: [(0, r.jsx)("div", {
                                    className: "form-group",
                                    children: (0, r.jsx)("input", {
                                        type: "text",
                                        className: "form-control",
                                        value: t,
                                        onChange: function (e) {
                                            return c("text", e.target.value)
                                        },
                                        placeholder: "text: button text"
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "form-group",
                                    children: (0, r.jsx)("input", {
                                        type: "text",
                                        className: "form-control",
                                        value: i,
                                        onChange: function (e) {
                                            return c("className", e.target.value)
                                        },
                                        placeholder: "classname: myButton"
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "form-group",
                                    children: (0, r.jsx)("select", {
                                        defaultValue: n,
                                        onChange: function (e) {
                                            return c("fontFamily", e.target.value)
                                        },
                                        children: k.map((function (e) {
                                            return (0, r.jsx)("option", {
                                                value: e,
                                                children: e
                                            }, e)
                                        }))
                                    })
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "w-1/2 pl-4",
                                children: [(0, r.jsx)(y, {
                                    className: "mb-4",
                                    value: s,
                                    label: "Font Size",
                                    min: 8,
                                    max: 60,
                                    onChange: function (e) {
                                        return c("fontSize", e)
                                    },
                                    onRefresh: function () {
                                        return l("fontSize")
                                    }
                                }), (0, r.jsxs)("div", {
                                    className: "flex flex-nowrap flex-row",
                                    children: [(0, r.jsx)("div", {
                                        className: "w-auto",
                                        children: (0, r.jsx)(b, {
                                            label: "Bold",
                                            id: "bold",
                                            checked: a,
                                            onChange: function (e) {
                                                return c("isBold", e)
                                            }
                                        })
                                    }), (0, r.jsx)("div", {
                                        className: "w-auto",
                                        children: (0, r.jsx)(b, {
                                            label: "Italic",
                                            id: "italic",
                                            style: {
                                                fontStyle: "italic"
                                            },
                                            checked: d,
                                            onChange: function (e) {
                                                return c("isItalic", e)
                                            }
                                        })
                                    })]
                                })]
                            })]
                        })]
                    })
                };
            j.propTypes = {
                className: s().string,
                text: s().string.isRequired,
                nameClass: s().string.isRequired,
                fontFamily: s().string.isRequired,
                isBold: s().bool.isRequired,
                isItalic: s().bool.isRequired,
                fontSize: s().number.isRequired,
                onRefresh: s().func.isRequired,
                onChange: s().func.isRequired
            }, j.defaultProps = {
                className: ""
            };
            var S = i.memo(j),
                B = function (e) {
                    var o = e.className,
                        t = e.width,
                        i = e.height,
                        n = e.onRefresh,
                        s = e.onChange;
                    return console.log("size"), (0, r.jsxs)("div", {
                        className: o,
                        children: [(0, r.jsx)("div", {
                            className: "setting-title",
                            children: "Size"
                        }), (0, r.jsxs)("div", {
                            className: "flex flex-wrap",
                            children: [(0, r.jsx)("div", {
                                className: "w-1/2 pr-4",
                                children: (0, r.jsx)(y, {
                                    className: "mb-4",
                                    value: i,
                                    label: "Vertical size",
                                    min: 0,
                                    max: 100,
                                    onChange: function (e) {
                                        return s("height", e)
                                    },
                                    onRefresh: function () {
                                        return n("height")
                                    }
                                })
                            }), (0, r.jsx)("div", {
                                className: "w-1/2 pl-4",
                                children: (0, r.jsx)(y, {
                                    className: "mb-4",
                                    value: t,
                                    label: "Horizontal size",
                                    min: 0,
                                    max: 200,
                                    onChange: function (e) {
                                        return s("width", e)
                                    },
                                    onRefresh: function () {
                                        return n("width")
                                    }
                                })
                            })]
                        })]
                    })
                };
            B.propTypes = {
                className: s().string,
                width: s().number.isRequired,
                height: s().number.isRequired,
                onRefresh: s().func.isRequired,
                onChange: s().func.isRequired
            }, B.defaultProps = {
                className: ""
            };
            var N = i.memo(B),
                H = function (e) {
                    var o = e.className,
                        t = e.isRadiusBottomLeft,
                        i = e.isRadiusBottomRight,
                        n = e.isRadiusTopLeft,
                        s = e.isRadiusTopRight,
                        a = e.borderRadius,
                        d = e.borderWidth,
                        l = e.onChange,
                        c = e.onRefresh;
                    return console.log("boder"), (0, r.jsxs)("div", {
                        className: o,
                        children: [(0, r.jsx)("div", {
                            className: "setting-title",
                            children: "Border"
                        }), (0, r.jsx)("div", {
                            className: "flex flex-wrap",
                            children: (0, r.jsxs)("div", {
                                className: "w-full mb-2",
                                children: [(0, r.jsx)("label", {
                                    htmlFor: "true",
                                    className: "inline-block mb-1",
                                    children: "Border Radius:"
                                }), (0, r.jsxs)("div", {
                                    className: "flex flex-wrap",
                                    children: [(0, r.jsx)("div", {
                                        className: "w-1/2",
                                        children: (0, r.jsx)(b, {
                                            id: "topleft",
                                            label: "Top Left",
                                            checked: n,
                                            onChange: function (e) {
                                                return l("isRadiusTopLeft", e)
                                            }
                                        })
                                    }), (0, r.jsx)("div", {
                                        className: "w-1/2",
                                        children: (0, r.jsx)(b, {
                                            id: "topright",
                                            label: "Top Right",
                                            checked: s,
                                            onChange: function (e) {
                                                return l("isRadiusTopRight", e)
                                            }
                                        })
                                    }), (0, r.jsx)("div", {
                                        className: "w-1/2",
                                        children: (0, r.jsx)(b, {
                                            id: "bottomleft",
                                            label: "Bottom Left",
                                            checked: t,
                                            onChange: function (e) {
                                                return l("isRadiusBottomLeft", e)
                                            }
                                        })
                                    }), (0, r.jsx)("div", {
                                        className: "w-1/2",
                                        children: (0, r.jsx)(b, {
                                            id: "bottomright",
                                            label: "Bottom Right",
                                            checked: i,
                                            onChange: function (e) {
                                                return l("isRadiusBottomRight", e)
                                            }
                                        })
                                    })]
                                })]
                            })
                        }), (0, r.jsxs)("div", {
                            className: "flex flex-wrap",
                            children: [(0, r.jsx)("div", {
                                className: "w-1/2 pr-4",
                                children: (0, r.jsx)(y, {
                                    className: "mb-4",
                                    value: a,
                                    label: "Border Radius",
                                    min: 0,
                                    max: 42,
                                    onChange: function (e) {
                                        return l("borderRadius", e)
                                    },
                                    onRefresh: function () {
                                        return c("borderRadius")
                                    }
                                })
                            }), (0, r.jsx)("div", {
                                className: "w-1/2 pl-4",
                                children: (0, r.jsx)(y, {
                                    className: "mb-4",
                                    value: d,
                                    label: "Border Size",
                                    min: 0,
                                    max: 12,
                                    onChange: function (e) {
                                        return l("borderWidth", e)
                                    },
                                    onRefresh: function () {
                                        return c("borderWidth")
                                    }
                                })
                            })]
                        })]
                    })
                };
            H.propTypes = {
                className: s().string,
                isRadiusTopLeft: s().bool.isRequired,
                isRadiusTopRight: s().bool.isRequired,
                isRadiusBottomLeft: s().bool.isRequired,
                isRadiusBottomRight: s().bool.isRequired,
                borderRadius: s().number.isRequired,
                borderWidth: s().number.isRequired,
                onChange: s().func.isRequired,
                onRefresh: s().func.isRequired
            }, H.defaultProps = {
                className: ""
            };
            var P = i.memo(H),
                _ = t(45172),
                W = t.n(_),
                T = function (e) {
                    var o = e.className,
                        t = e.isBoxShadow,
                        i = e.inset,
                        n = e.positionHeight,
                        s = e.positionWidth,
                        a = e.blurRadius,
                        l = e.spreadRadius,
                        c = e.onChange,
                        u = e.onRefresh;
                    return console.log("Box shadow", i), (0, r.jsxs)("div", {
                        className: o,
                        children: [(0, r.jsxs)("div", {
                            className: "setting-title flex items-center",
                            children: [(0, r.jsx)(b, {
                                id: "shadow",
                                className: W().checkbox,
                                label: "Box Shadow",
                                checked: t,
                                onChange: function (e) {
                                    return c("isBoxShadow", e)
                                }
                            }), t ? (0, r.jsxs)(r.Fragment, {
                                children: ["/", (0, r.jsx)(b, {
                                    id: "inset",
                                    className: W().checkbox,
                                    label: "inset",
                                    checked: i,
                                    onChange: function (e) {
                                        return c("inset", e)
                                    }
                                })]
                            }) : null]
                        }), (0, r.jsxs)("div", {
                            className: d()(t ? "flex" : "hidden", "flex-wrap"),
                            children: [(0, r.jsx)("div", {
                                className: "w-1/2 pr-4",
                                children: (0, r.jsx)(y, {
                                    className: "mb-4",
                                    value: n,
                                    label: "Vertical position",
                                    min: -50,
                                    max: 50,
                                    onChange: function (e) {
                                        return c("positionHeight", e)
                                    },
                                    onRefresh: function () {
                                        return u("positionHeight")
                                    }
                                })
                            }), (0, r.jsx)("div", {
                                className: "w-1/2 pl-4",
                                children: (0, r.jsx)(y, {
                                    className: "mb-4",
                                    value: s,
                                    label: "Horizontal position",
                                    min: -50,
                                    max: 50,
                                    onChange: function (e) {
                                        return c("positionWidth", e)
                                    },
                                    onRefresh: function () {
                                        return u("positionWidth")
                                    }
                                })
                            }), (0, r.jsx)("div", {
                                className: "w-1/2 pr-4",
                                children: (0, r.jsx)(y, {
                                    className: "mb-4",
                                    value: a,
                                    label: "Blur Radius",
                                    min: 0,
                                    max: 50,
                                    onChange: function (e) {
                                        return c("blurRadius", e)
                                    },
                                    onRefresh: function () {
                                        return u("blurRadius")
                                    }
                                })
                            }), (0, r.jsx)("div", {
                                className: "w-1/2 pl-4",
                                children: (0, r.jsx)(y, {
                                    className: "mb-4",
                                    value: l,
                                    label: "Spread Radius",
                                    min: -50,
                                    max: 50,
                                    onChange: function (e) {
                                        return c("spreadRadius", e)
                                    },
                                    onRefresh: function () {
                                        return u("spreadRadius")
                                    }
                                })
                            })]
                        })]
                    })
                };
            T.propTypes = {
                className: s().string,
                isBoxShadow: s().bool,
                inset: s().bool,
                positionWidth: s().number,
                positionHeight: s().number,
                blurRadius: s().number,
                spreadRadius: s().number,
                onChange: s().func.isRequired,
                onRefresh: s().func.isRequired
            }, T.defaultProps = {
                className: "",
                isBoxShadow: !1,
                inset: !1,
                positionWidth: 0,
                positionHeight: 0,
                blurRadius: 0,
                spreadRadius: 0
            };
            var O = i.memo(T),
                G = t(44558),
                z = t.n(G),
                q = function (e) {
                    var o = e.className,
                        t = e.isTextShadow,
                        i = e.positionWidth,
                        n = e.positionHeight,
                        s = e.blurRadius,
                        a = e.onChange,
                        l = e.onRefresh;
                    return console.log("Text Shadow"), (0, r.jsxs)("div", {
                        className: o,
                        children: [(0, r.jsx)("div", {
                            className: "setting-title flex items-center",
                            children: (0, r.jsx)(b, {
                                id: "textshadow",
                                className: z().checkbox,
                                label: "Text Shadow",
                                checked: t,
                                onChange: function (e) {
                                    return a("isTextShadow", e)
                                }
                            })
                        }), (0, r.jsxs)("div", {
                            className: d()(t ? "flex" : "hidden", "flex-wrap"),
                            children: [(0, r.jsx)("div", {
                                className: "w-1/2 pr-4",
                                children: (0, r.jsx)(y, {
                                    className: "mb-4",
                                    value: n,
                                    label: "Vertical position",
                                    min: -50,
                                    max: 50,
                                    onChange: function (e) {
                                        return a("textPositionHeight", e)
                                    },
                                    onRefresh: function () {
                                        return l("textPositionHeight")
                                    }
                                })
                            }), (0, r.jsx)("div", {
                                className: "w-1/2 pl-4",
                                children: (0, r.jsx)(y, {
                                    className: "mb-4",
                                    value: i,
                                    label: "Horizontal position",
                                    min: -50,
                                    max: 50,
                                    onChange: function (e) {
                                        return a("textPositionWidth", e)
                                    },
                                    onRefresh: function () {
                                        return l("textPositionWidth")
                                    }
                                })
                            }), (0, r.jsx)("div", {
                                className: "w-1/2 pr-4",
                                children: (0, r.jsx)(y, {
                                    className: "mb-4",
                                    value: s,
                                    label: "Blur Radius",
                                    min: 0,
                                    max: 50,
                                    onChange: function (e) {
                                        return a("textBlurRadius", e)
                                    },
                                    onRefresh: function () {
                                        return l("textBlurRadius")
                                    }
                                })
                            })]
                        })]
                    })
                };
            q.propTypes = {
                className: s().string,
                isTextShadow: s().bool,
                positionHeight: s().number,
                positionWidth: s().number,
                blurRadius: s().number,
                onChange: s().func.isRequired,
                onRefresh: s().func.isRequired
            }, q.defaultProps = {
                className: "",
                isTextShadow: !1,
                positionHeight: 0,
                positionWidth: 0,
                blurRadius: 0
            };
            var L = i.memo(q),
                E = t(99121),
                I = t(18322),
                A = t.n(I);
            var M = function (e) {
                var o = e.btnStyle,
                    t = e.onChange,
                    n = e.onRefresh,
                    s = e.onOpenTemplate,
                    a = d()("settings"),
                    l = (0, i.useCallback)((function (e, o) {
                        var r = function (e, o, t) {
                            return o in e ? Object.defineProperty(e, o, {
                                value: t,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[o] = t, e
                        }({}, e, o);
                        t(r)
                    }), [t]);
                return (0, r.jsx)("div", {
                    className: a,
                    children: (0, r.jsxs)("div", {
                        style: {
                            paddingBottom: "15px"
                        },
                        children: [(0, r.jsx)("div", {
                            className: d()(A()["wrap-trigger-btn"], "block lg:hidden"),
                            children: (0, r.jsx)("button", {
                                type: "button",
                                onClick: s,
                                className: d()(A()["trigger-btns-template"], "btn"),
                                children: "Open Template Buttons"
                            })
                        }), (0, r.jsx)(S, {
                            text: o.text,
                            nameClass: o.className,
                            fontFamily: o.fontFamily,
                            fontSize: o.fontSize,
                            isBold: o.isBold,
                            isItalic: o.isItalic,
                            onRefresh: n,
                            onChange: l
                        }), (0, r.jsx)(N, {
                            width: o.width,
                            height: o.height,
                            onRefresh: n,
                            onChange: l
                        }), (0, r.jsx)(P, {
                            isRadiusTopLeft: o.isRadiusTopLeft,
                            isRadiusTopRight: o.isRadiusTopRight,
                            isRadiusBottomLeft: o.isRadiusBottomLeft,
                            isRadiusBottomRight: o.isRadiusBottomRight,
                            borderRadius: o.borderRadius,
                            borderWidth: o.borderWidth,
                            onChange: l,
                            onRefresh: n
                        }), (0, r.jsx)(O, {
                            positionHeight: o.positionHeight,
                            positionWidth: o.positionWidth,
                            blurRadius: o.blurRadius,
                            spreadRadius: o.spreadRadius,
                            isBoxShadow: o.isBoxShadow,
                            inset: o.inset,
                            onChange: l,
                            onRefresh: n
                        }), (0, r.jsx)(L, {
                            positionHeight: o.textPositionHeight,
                            positionWidth: o.textPositionWidth,
                            blurRadius: o.textBlurRadius,
                            isTextShadow: o.isTextShadow,
                            onChange: l,
                            onRefresh: n
                        }), (0, r.jsx)("br", {}), (0, r.jsx)("br", {}), (0, r.jsx)("br", {}), (0, r.jsx)("p", {
                            className: "text-secondary mb-4",
                            children: (0, r.jsxs)("small", {
                                children: [(0, r.jsx)(E.QZ, {
                                    style: {
                                        height: 25,
                                        width: 25
                                    },
                                    url: "https://github.com/oathanrex"
                                }), "\xa0\xa0\xa0Github |\xa0", (0, r.jsx)("a", {
                                    href: "https://oathanrex.blogspot.com",
                                    children: "Support My Work"
                                }), "\xa0If you appreciate my efforts and would like to\xa0", (0, r.jsx)("a", {
                                    href: "http://www.buymeacoffee.com/oathanrex",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: "☕ Buy Me a Coffee"
                                }), "!"]
                            })
                        })]
                    })
                })
            };
            M.propTypes = {
                btnStyle: s().object.isRequired,
                onChange: s().func.isRequired,
                onRefresh: s().func.isRequired,
                onOpenTemplate: s().func.isRequired
            }, M.defaultProps = {};
            var F = M,
                V = t(74855),
                U = t(65394),
                Z = t(84283);

            function D(e, o, t) {
                return o in e ? Object.defineProperty(e, o, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[o] = t, e
            }

            function X(e) {
                for (var o = 1; o < arguments.length; o++) {
                    var t = null != arguments[o] ? arguments[o] : {},
                        r = Object.keys(t);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })))), r.forEach((function (o) {
                        D(e, o, t[o])
                    }))
                }
                return e
            }

            function Q(e, o) {
                if (null == e) return {};
                var t, r, i = function (e, o) {
                    if (null == e) return {};
                    var t, r, i = {},
                        n = Object.keys(e);
                    for (r = 0; r < n.length; r++) t = n[r], o.indexOf(t) >= 0 || (i[t] = e[t]);
                    return i
                }(e, o);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < n.length; r++) t = n[r], o.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t])
                }
                return i
            }
            var K = function (e) {
                var o = e.size,
                    t = e.color,
                    i = Q(e, ["size", "color"]);
                return (0, r.jsx)("svg", X({}, i, {
                    viewBox: "0 0 384 512",
                    width: o,
                    height: o,
                    fill: t,
                    children: (0, r.jsx)("path", {
                        d: "M280 240H168c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm0 96H168c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zM112 232c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zM336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 48c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm144 408c0 4.4-3.6 8-8 8H56c-4.4 0-8-3.6-8-8V120c0-4.4 3.6-8 8-8h40v32c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16v-32h40c4.4 0 8 3.6 8 8v336z"
                    })
                }))
            };
            K.propTypes = {
                size: s().oneOfType([s().string, s().number]),
                color: s().any
            }, K.defaultProps = {
                size: "16pt",
                color: "currentcolor"
            };
            var J = function (e) {
                var o = e.size,
                    t = e.color,
                    i = Q(e, ["size", "color"]);
                return (0, r.jsx)("svg", X({}, i, {
                    viewBox: "0 0 384 512",
                    width: o,
                    height: o,
                    fill: t,
                    children: (0, r.jsx)("path", {
                        d: "M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm121.2 231.8l-143 141.8c-4.7 4.7-12.3 4.6-17-.1l-82.6-83.3c-4.7-4.7-4.6-12.3.1-17L99.1 285c4.7-4.7 12.3-4.6 17 .1l46 46.4 106-105.2c4.7-4.7 12.3-4.6 17 .1l28.2 28.4c4.7 4.8 4.6 12.3-.1 17z"
                    })
                }))
            };

            function Y(e) {
                var o = e.size,
                    t = e.color,
                    i = e.copied,
                    n = Q(e, ["size", "color", "copied"]);
                return i ? (0, r.jsx)(J, X({
                    color: t,
                    size: o
                }, n)) : (0, r.jsx)(K, X({
                    color: t,
                    size: o
                }, n))
            }
            J.propTypes = {
                size: s().oneOfType([s().string, s().number]),
                color: s().any
            }, J.defaultProps = {
                size: "16pt",
                color: "currentcolor"
            }, Y.propTypes = {
                size: s().oneOfType([s().string, s().number]),
                color: s().any,
                copied: s().bool
            }, Y.defaultProps = {
                size: "16pt",
                color: "currentcolor",
                copied: !1
            };
            var $ = t(56082),
                ee = t.n($),
                oe = function (e) {
                    var o = e.code,
                        t = e.className,
                        n = e.language,
                        s = e.showLineNumbers,
                        a = e.theme,
                        l = d()(t, ee().codebox),
                        c = (0, i.useRef)(null),
                        u = (0, i.useState)(!1),
                        f = u[0],
                        h = u[1];
                    return (0, r.jsxs)("div", {
                        className: l,
                        children: [(0, r.jsx)(U.Z, {
                            language: n,
                            showLineNumbers: s,
                            style: a,
                            ref: c,
                            children: o
                        }), (0, r.jsx)(V.CopyToClipboard, {
                            text: o,
                            onCopy: function () {
                                return h(!f)
                            },
                            children: (0, r.jsx)("button", {
                                type: "button",
                                theme: a,
                                className: ee().button,
                                children: (0, r.jsx)(Y, {
                                    color: "#fff",
                                    copied: f,
                                    className: "icon",
                                    size: "16pt"
                                })
                            })
                        })]
                    })
                };
            oe.propTypes = {
                code: s().string,
                className: s().string,
                showLineNumbers: s().bool,
                language: s().string.isRequired,
                theme: s().object
            }, oe.defaultProps = {
                code: "",
                className: "",
                showLineNumbers: !0,
                theme: Z.cL
            };
            var te = oe,
                re = t(713),
                ie = t(85496),
                ne = t.n(ie);
            var se = function (e) {
                var o = e.className,
                    t = e.color,
                    n = e.onChange,
                    s = e.disabled,
                    a = e.width,
                    l = e.height,
                    c = (0, i.useState)(!1),
                    u = c[0],
                    f = c[1],
                    h = (0, i.useRef)(null);
                (0, i.useEffect)((function () {
                    var e = function (e) {
                        (null === h || void 0 === h ? void 0 : h.current) && !h.current.contains(e.target) && f(!1)
                    };
                    return document.addEventListener("mousedown", e),
                        function () {
                            document.removeEventListener("mousedown", e)
                        }
                }), [h]);
                var b, x, p;
                return (0, r.jsxs)("div", {
                    className: o,
                    ref: h,
                    children: [(0, r.jsx)("div", {
                        role: "button",
                        tabIndex: "-1",
                        className: d()(ne().swatch, (b = {}, x = ne().disabled, p = s, x in b ? Object.defineProperty(b, x, {
                            value: p,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : b[x] = p, b)),
                        onClick: function () {
                            s || f(!u)
                        },
                        style: {
                            backgroundColor: t,
                            width: a,
                            height: l
                        }
                    }), u ? (0, r.jsx)("div", {
                        className: ne().popover,
                        children: (0, r.jsx)(re.xS, {
                            color: t,
                            onChangeComplete: function (e) {
                                n(e)
                            }
                        })
                    }) : null]
                })
            };
            se.propTypes = {
                className: s().string,
                width: s().oneOfType([s().number, s().string]),
                height: s().oneOfType([s().number, s().string]),
                color: s().string.isRequired,
                onChange: s().func.isRequired,
                disabled: s().bool
            }, se.defaultProps = {
                className: "",
                disabled: !1,
                width: 20,
                height: 20
            };
            var ae = se,
                de = t(53333),
                le = t.n(de),
                ce = function (e) {
                    var o = e.content,
                        t = e.children,
                        n = (0, i.useRef)(null),
                        s = (0, i.useRef)(null);
                    return (0, i.useEffect)((function () {
                        ! function () {
                            if (n.current) {
                                var e = n.current.offsetHeight;
                                s.current.style.top = "-".concat(e + 12, "px"), s.current.style.transform = "translateX(-50%)", s.current.style.left = "50%"
                            }
                        }()
                    }), [n, s]), (0, r.jsxs)("div", {
                        className: le().tooltip,
                        ref: n,
                        children: [t, (0, r.jsx)("div", {
                            className: d()(le().text),
                            ref: s,
                            children: (0, r.jsx)("div", {
                                className: d()("text-white text-xs rounded py-2 px-4 right-0 bottom-full whitespace-nowrap relative", le().top),
                                children: o
                            })
                        })]
                    })
                };
            ce.propTypes = {
                content: s().string,
                children: s().node.isRequired
            }, ce.defaultProps = {
                content: ""
            };
            var ue = ce;

            function fe(e, o) {
                (null == o || o > e.length) && (o = e.length);
                for (var t = 0, r = new Array(o); t < o; t++) r[t] = e[t];
                return r
            }

            function he(e, o) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, o) {
                    var t = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, n = [],
                            s = !0,
                            a = !1;
                        try {
                            for (t = t.call(e); !(s = (r = t.next()).done) && (n.push(r.value), !o || n.length !== o); s = !0);
                        } catch (d) {
                            a = !0, i = d
                        } finally {
                            try {
                                s || null == t.return || t.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return n
                    }
                }(e, o) || function (e, o) {
                    if (!e) return;
                    if ("string" === typeof e) return fe(e, o);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return fe(e, o)
                }(e, o) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var be = function (e, o) {
                    var t = {
                        fontSize: "".concat(e.fontSize).concat(o),
                        fontFamily: e.fontFamily,
                        width: "".concat(e.width).concat(o),
                        height: "".concat(e.height).concat(o),
                        borderWidth: "".concat(e.borderWidth).concat(o),
                        color: e.fontColor,
                        borderColor: e.borderColor
                    };
                    if (e.isBold && (t.fontWeight = "bold"), e.isItalic && (t.fontStyle = "italic"), e.isRadiusTopLeft && (t.borderTopLeftRadius = "".concat(e.borderRadius).concat(o)), e.isRadiusTopRight && (t.borderTopRightRadius = "".concat(e.borderRadius).concat(o)), e.isRadiusBottomLeft && (t.borderBottomLeftRadius = "".concat(e.borderRadius).concat(o)), e.isRadiusBottomRight && (t.borderBottomRightRadius = "".concat(e.borderRadius).concat(o)), e.isBoxShadow) {
                        var r = "";
                        e.inset && (r += "inset"), r += " ".concat(e.positionWidth).concat(o, " ").concat(e.positionHeight).concat(o, " ").concat(e.blurRadius).concat(o, " ").concat(e.spreadRadius).concat(o, " ").concat(e.boxShadowColor), t.boxShadow = r
                    }
                    if (e.isTextShadow) {
                        var i = "";
                        e.inset && (i += "inset"), i += " ".concat(e.textPositionWidth).concat(o, " ").concat(e.textPositionHeight).concat(o, " ").concat(e.textBlurRadius).concat(o, " ").concat(e.textShadowColor), t.textShadow = i
                    }
                    return e.isTransparent ? t.backgroundColor = "transparent" : e.isGradient ? t.background = "linear-gradient(".concat(e.backgroundColor, ", ").concat(e.backgroundHover, ")") : t.background = e.backgroundColor, t
                },
                xe = "px",
                pe = t(25594),
                ge = t.n(pe);
            var me = function (e) {
                var o, t = e.btnStyle,
                    i = e.unit,
                    n = e.onChange,
                    s = be(t, i),
                    a = [{
                        color: t.previewBackgroundColor,
                        label: "Preview Background Color",
                        key: "previewBackgroundColor"
                    }, {
                        color: t.backgroundColor,
                        label: t.isGradient ? "Gradient Top Color" : "Background Color",
                        key: "backgroundColor",
                        disabled: t.isTransparent
                    }, {
                        color: t.backgroundHover,
                        label: t.isGradient ? "Gradient Bottom Color" : "Background Hover",
                        key: "backgroundHover",
                        disabled: t.isTransparent
                    }, {
                        color: t.fontColor,
                        label: "Font Color",
                        key: "fontColor"
                    }, {
                        color: t.borderColor,
                        label: "Border Color",
                        key: "borderColor"
                    }, {
                        color: t.boxShadowColor,
                        label: t.isBoxShadow ? "Box Shadow Color" : "Unavailable",
                        key: "boxShadowColor",
                        disabled: !t.isBoxShadow
                    }, {
                        color: t.textShadowColor,
                        label: t.isTextShadow ? "Text Shadow Color" : "Unavailable",
                        key: "textShadowColor",
                        disabled: !t.isTextShadow
                    }],
                    l = function (e, o) {
                        n(function (e, o, t) {
                            return o in e ? Object.defineProperty(e, o, {
                                value: t,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[o] = t, e
                        }({}, e, o))
                    },
                    c = function (e, o) {
                        var r;
                        r = o && !t.isTransparent ? t.isGradient ? "linear-gradient(".concat(t.backgroundHover, ", ").concat(t.backgroundColor, ")") : t.backgroundHover : s.background, e.target.style.background = r
                    };
                return (0, r.jsxs)("div", {
                    className: ge().preview,
                    children: [(0, r.jsx)("h1", {
                        className: ge().title,
                        children: "CSS Button Generator"
                    }), (0, r.jsx)("div", {
                        className: ge()["btn-preview"],
                        children: (0, r.jsx)("div", {
                            className: ge()["preview-area"],
                            style: {
                                backgroundColor: t.previewBackgroundColor
                            },
                            children: (0, r.jsxs)("div", {
                                className: "flex flex-wrap items-end justify-center h-full",
                                children: [(0, r.jsx)("div", {
                                    className: "w-auto",
                                    children: (0, r.jsx)("button", {
                                        type: "button",
                                        style: s,
                                        onMouseEnter: function (e) {
                                            return c(e, !0)
                                        },
                                        onMouseLeave: function (e) {
                                            return c(e, !1)
                                        },
                                        children: t.text
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "w-full self-end",
                                    children: (0, r.jsx)("div", {
                                        className: "flex flex-wrap",
                                        children: (0, r.jsx)("div", {
                                            className: "w-full",
                                            children: (0, r.jsx)("div", {
                                                className: ge()["color-container"],
                                                children: (0, r.jsxs)("div", {
                                                    className: "flex flex-wrap items-center justify-center",
                                                    children: [(0, r.jsx)("div", {
                                                        className: "w-auto",
                                                        children: (0, r.jsx)("div", {
                                                            className: d()(ge()["current-palette"]),
                                                            children: a.map((function (e) {
                                                                return (0, r.jsx)("div", {
                                                                    children: (0, r.jsx)(ue, {
                                                                        content: e.label,
                                                                        children: (0, r.jsx)(ae, {
                                                                            className: ge().color,
                                                                            color: e.color,
                                                                            width: 20,
                                                                            height: 20,
                                                                            disabled: e.disabled,
                                                                            onChange: function (o) {
                                                                                l(e.key, "rgba(".concat(o.rgb.r, ", ").concat(o.rgb.g, ", ").concat(o.rgb.b, ", ").concat(o.rgb.a, ")"))
                                                                            }
                                                                        })
                                                                    })
                                                                }, e.key)
                                                            }))
                                                        })
                                                    }), (0, r.jsx)("div", {
                                                        className: "w-auto ml-4 mt-2 xl:mt-0",
                                                        children: (0, r.jsx)(b, {
                                                            id: "isTransparent",
                                                            label: "Transparent",
                                                            checked: t.isTransparent,
                                                            onChange: function (e) {
                                                                l("isTransparent", e)
                                                            }
                                                        })
                                                    }), (0, r.jsx)("div", {
                                                        className: "w-auto mt-2 xl:mt-0",
                                                        children: (0, r.jsx)(b, {
                                                            id: "isGradient",
                                                            label: "No Gradient",
                                                            checked: !t.isGradient,
                                                            onChange: function (e) {
                                                                l("isGradient", !e)
                                                            }
                                                        })
                                                    })]
                                                })
                                            })
                                        })
                                    })
                                })]
                            })
                        })
                    }), (0, r.jsxs)("div", {
                        className: "codebox",
                        children: [(0, r.jsxs)("div", {
                            className: ge().step,
                            children: [(0, r.jsx)("h5", {
                                children: (0, r.jsxs)("small", {
                                    className: ge()["text-dark"],
                                    children: [(0, r.jsx)("strong", {
                                        children: "STEP 1:"
                                    }), "\xa0Copy this code into your HTML page"]
                                })
                            }), (0, r.jsx)("div", {
                                className: "form-group",
                                children: (0, r.jsx)(te, {
                                    language: "markup",
                                    code: '<a href="#" class="'.concat(t.className, '">').concat(t.text, "</a>"),
                                    showLineNumbers: !1
                                })
                            })]
                        }), (0, r.jsxs)("div", {
                            className: ge().step,
                            children: [(0, r.jsx)("h5", {
                                children: (0, r.jsxs)("small", {
                                    className: ge()["text-dark"],
                                    children: [(0, r.jsx)("strong", {
                                        children: "STEP 2:"
                                    }), "\xa0Copy this code into your CSS stylesheet"]
                                })
                            }), (0, r.jsx)("div", {
                                className: "form-group",
                                children: (0, r.jsx)(te, {
                                    language: "css",
                                    code: "\n.".concat(t.className, " ").concat((o = s, "{\n  ".concat(Object.entries(o).map((function (e) {
                                        var o = he(e, 2),
                                            t = o[0],
                                            r = o[1];
                                        return "".concat(t.replace(/[A-Z]/g, (function (e) {
                                            return "-".concat(e.toLowerCase())
                                        })), ":").concat(r)
                                    })).join(";\n  "), ";\n}")), "\n\n").concat(t.isTransparent ? "" : ".".concat(t.className, ":hover {\n  background: ").concat(t.isGradient ? "linear-gradient(".concat(t.backgroundHover, ", ").concat(t.backgroundColor, ");") : t.backgroundHover, "\n}"), "\n              "),
                                    showLineNumbers: !1
                                })
                            })]
                        })]
                    })]
                })
            };
            me.propTypes = {
                btnStyle: s().object.isRequired,
                unit: s().string,
                onChange: s().func.isRequired
            }, me.defaultProps = {
                unit: xe
            };
            var we = me,
                Ce = t(36004),
                ve = t.n(Ce);

            function Re(e, o, t) {
                return o in e ? Object.defineProperty(e, o, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[o] = t, e
            }

            function ye(e, o) {
                if (null == e) return {};
                var t, r, i = function (e, o) {
                    if (null == e) return {};
                    var t, r, i = {},
                        n = Object.keys(e);
                    for (r = 0; r < n.length; r++) t = n[r], o.indexOf(t) >= 0 || (i[t] = e[t]);
                    return i
                }(e, o);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < n.length; r++) t = n[r], o.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t])
                }
                return i
            }
            var ke = i.forwardRef((function (e, o) {
                var t = e.onClick,
                    i = e.data,
                    n = e.className,
                    s = e.unit,
                    a = ye(e, ["onClick", "data", "className", "unit"]);
                return console.log("Button Templates", o), (0, r.jsx)("div", function (e) {
                    for (var o = 1; o < arguments.length; o++) {
                        var t = null != arguments[o] ? arguments[o] : {},
                            r = Object.keys(t);
                        "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })))), r.forEach((function (o) {
                            Re(e, o, t[o])
                        }))
                    }
                    return e
                }({
                    className: d()(ve()["btn-templates"], n),
                    ref: o
                }, a, {
                    children: (0, r.jsx)("div", {
                        className: "flex flex-row flex-wrap justify-center",
                        children: i.map((function (e, o) {
                            return (0, r.jsx)("div", {
                                className: "w-auto",
                                children: (0, r.jsx)("div", {
                                    className: ve()["btn-template-container"],
                                    children: (0, r.jsx)("div", {
                                        className: ve()["btn-template"],
                                        style: {
                                            backgroundColor: e.previewBackgroundColor
                                        },
                                        children: (0, r.jsx)("div", {
                                            role: "button",
                                            tabIndex: "-1",
                                            className: ve()["btn-style"],
                                            style: be(e, s),
                                            onClick: function () {
                                                return t(e)
                                            },
                                            children: "css"
                                        })
                                    })
                                })
                            }, o.toString())
                        }))
                    })
                }))
            }));
            ke.displayName = "ButtonTemplates", ke.propTypes = {
                onClick: s().func.isRequired,
                data: s().array,
                className: s().string,
                unit: s().string
            }, ke.defaultProps = {
                data: [],
                className: "",
                unit: xe
            };
            var je = i.memo(ke),
                Se = t(50542),
                Be = {
                    text: "Button text",
                    className: "buttonClass",
                    fontFamily: "Arial",
                    fontSize: 15,
                    isBold: !0,
                    isItalic: !1,
                    height: 50,
                    width: 140,
                    isRadiusTopLeft: !0,
                    isRadiusTopRight: !0,
                    isRadiusBottomLeft: !0,
                    isRadiusBottomRight: !0,
                    borderRadius: 28,
                    borderWidth: 1,
                    isBoxShadow: !1,
                    inset: !1,
                    positionWidth: 1,
                    positionHeight: 1,
                    blurRadius: 0,
                    spreadRadius: 1,
                    isTextShadow: !0,
                    textPositionWidth: 1,
                    textPositionHeight: 1,
                    textBlurRadius: 0,
                    previewBackgroundColor: "#f5f5f5",
                    backgroundColor: "#44c767",
                    fontColor: "#fff",
                    backgroundHover: "#5cbf2a",
                    borderColor: "#18ab29",
                    textShadowColor: "#2f6627",
                    boxShadowColor: "#fff",
                    isTransparent: !1,
                    isGradient: !1
                };

            function Ne(e, o, t) {
                return o in e ? Object.defineProperty(e, o, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[o] = t, e
            }

            function He(e) {
                for (var o = 1; o < arguments.length; o++) {
                    var t = null != arguments[o] ? arguments[o] : {},
                        r = Object.keys(t);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })))), r.forEach((function (o) {
                        Ne(e, o, t[o])
                    }))
                }
                return e
            }
            var Pe = [He({
                name: "style 0"
            }, Be, {
                isBold: !1
            }), He({
                name: "style 1"
            }, Be, {
                borderRadius: 10,
                isBoxShadow: !0,
                positionWidth: 0,
                positionHeight: 0,
                blurRadius: 0,
                spreadRadius: 2,
                isBold: !1,
                textPositionWidth: 0,
                textPositionHeight: 1,
                textBlurRadius: 0,
                backgroundColor: "rgb(120, 146, 194)",
                fontColor: "#fff",
                backgroundHover: "#476e9e",
                borderColor: "#4e6096",
                textShadowColor: "#283966",
                boxShadowColor: "#9fb4f2",
                isGradient: !0
            }), He({
                name: "style 2"
            }, Be, {
                borderRadius: 8,
                isBoxShadow: !0,
                positionWidth: 0,
                positionHeight: 10,
                blurRadius: 14,
                spreadRadius: -7,
                textPositionWidth: 0,
                textPositionHeight: 1,
                textBlurRadius: 0,
                backgroundColor: "#599bb3",
                fontColor: "#fff",
                backgroundHover: "#408c99",
                borderColor: "#599bb3",
                textShadowColor: "#3d768a",
                boxShadowColor: "#276873",
                isGradient: !0
            }), He({
                name: "style 3"
            }, Be, {
                borderRadius: 5,
                isBoxShadow: !0,
                positionWidth: 0,
                positionHeight: 1,
                blurRadius: 3,
                spreadRadius: 0,
                textPositionWidth: 0,
                textPositionHeight: -1,
                textBlurRadius: 0,
                backgroundColor: "#768d87",
                fontColor: "#fff",
                inset: !0,
                backgroundHover: "#6c7c7c",
                borderColor: "#566963",
                textShadowColor: "#2b665e",
                boxShadowColor: "#91b8b3",
                isGradient: !0
            }), He({
                name: "style 4"
            }, Be, {
                borderRadius: 4,
                isBoxShadow: !0,
                positionWidth: 0,
                positionHeight: 10,
                blurRadius: 14,
                spreadRadius: -7,
                textPositionWidth: 0,
                textPositionHeight: 1,
                textBlurRadius: 0,
                backgroundColor: "#77b55a",
                fontColor: "#fff",
                backgroundHover: "#72b352",
                borderColor: "#4b8f29",
                textShadowColor: "#5b8a3c",
                boxShadowColor: "#3e7327",
                isGradient: !0
            }), He({
                name: "style 5"
            }, Be, {
                borderRadius: 4,
                isBoxShadow: !0,
                inset: !0,
                positionWidth: 0,
                positionHeight: 39,
                blurRadius: 0,
                spreadRadius: -24,
                textPositionWidth: 0,
                textPositionHeight: 1,
                isBold: !1,
                textBlurRadius: 0,
                backgroundColor: "#e4685d",
                fontColor: "#fff",
                backgroundHover: "#eb675e",
                borderColor: "#ffffff",
                textShadowColor: "#b23e35",
                boxShadowColor: "#e67a73"
            }), He({
                name: "style 6"
            }, Be, {
                borderRadius: 0,
                isBoxShadow: !0,
                inset: !0,
                positionWidth: 0,
                positionHeight: 34,
                blurRadius: 0,
                spreadRadius: -15,
                textPositionWidth: 0,
                textPositionHeight: -1,
                textBlurRadius: 0,
                backgroundColor: "#a73f2d",
                fontColor: "#fff",
                backgroundHover: "#b34332",
                borderColor: "#241d13",
                textShadowColor: "#7a2a1d",
                boxShadowColor: "#b54b3a",
                previewBackgroundColor: "#2a2218"
            }), He({
                name: "style 7"
            }, Be, {
                borderRadius: 3,
                isBoxShadow: !0,
                inset: !0,
                isGradient: !0,
                positionWidth: 0,
                positionHeight: -3,
                blurRadius: 7,
                spreadRadius: 0,
                textPositionWidth: 0,
                textPositionHeight: 1,
                textBlurRadius: 0,
                isBold: !1,
                backgroundColor: "#2dabf9",
                fontColor: "#fff",
                backgroundHover: "#0688fa",
                borderColor: "#0b0e07",
                textShadowColor: "#263666",
                boxShadowColor: "#29bbff",
                previewBackgroundColor: "#1c1c1e"
            }), He({
                name: "style 8"
            }, Be, {
                borderRadius: 17,
                isBoxShadow: !0,
                inset: !0,
                isGradient: !0,
                positionWidth: 0,
                positionHeight: 0,
                blurRadius: 15,
                spreadRadius: 3,
                isBold: !1,
                textPositionWidth: 0,
                textPositionHeight: 1,
                textBlurRadius: 0,
                backgroundColor: "#2e466e",
                fontColor: "#fff",
                backgroundHover: "#415989",
                borderColor: "#1f2f47",
                textShadowColor: "#263666",
                boxShadowColor: "#23395e",
                previewBackgroundColor: "#3f5c93"
            }), He({
                name: "style 9"
            }, Be, {
                borderRadius: 3,
                isBoxShadow: !0,
                inset: !0,
                isGradient: !0,
                positionWidth: 0,
                positionHeight: 1,
                blurRadius: 0,
                spreadRadius: 0,
                textPositionWidth: 0,
                isBold: !1,
                textPositionHeight: 1,
                textBlurRadius: 0,
                backgroundColor: "#d0451b",
                fontColor: "#fff",
                backgroundHover: "#d0451b",
                borderColor: "#d0451b",
                textShadowColor: "#854629",
                boxShadowColor: "#cf866c"
            }), He({
                name: "style 10"
            }, Be, {
                borderRadius: 15,
                borderWidth: 2,
                isBoxShadow: !0,
                isGradient: !0,
                positionWidth: 0,
                positionHeight: 1,
                blurRadius: 0,
                spreadRadius: 0,
                textPositionWidth: 0,
                textPositionHeight: 1,
                textBlurRadius: 0,
                backgroundColor: "#eae0c2",
                fontColor: "#505739",
                backgroundHover: "#ccc2a6",
                borderColor: "#333029",
                textShadowColor: "#ffffff",
                boxShadowColor: "#1c1b18",
                previewBackgroundColor: "#2d2e29"
            }), He({
                name: "style 11"
            }, Be, {
                borderRadius: 3,
                isBoxShadow: !0,
                isGradient: !0,
                inset: !0,
                positionWidth: 0,
                positionHeight: 1,
                blurRadius: 0,
                spreadRadius: 0,
                textPositionWidth: 0,
                isBold: !1,
                textPositionHeight: 1,
                textBlurRadius: 0,
                backgroundColor: "#7d5d3b",
                fontColor: "#ffffff",
                backgroundHover: "#634b30",
                borderColor: "#54381e",
                textShadowColor: "#54381e",
                boxShadowColor: "#a6827e"
            }), He({
                name: "style 12"
            }, Be, {
                borderRadius: 3,
                isBoxShadow: !0,
                isGradient: !0,
                inset: !0,
                positionWidth: 0,
                positionHeight: 1,
                isBold: !1,
                blurRadius: 0,
                spreadRadius: 0,
                textPositionWidth: 0,
                textPositionHeight: 1,
                textBlurRadius: 0,
                backgroundColor: "#007dc1",
                fontColor: "#ffffff",
                backgroundHover: "#0061a7",
                borderColor: "#124d77",
                textShadowColor: "#154682",
                boxShadowColor: "#54a3f7"
            }), He({
                name: "style 13"
            }, Be, {
                borderRadius: 6,
                isBoxShadow: !0,
                isGradient: !0,
                positionWidth: 0,
                positionHeight: 1,
                blurRadius: 0,
                spreadRadius: 0,
                textPositionWidth: 0,
                textPositionHeight: -1,
                textBlurRadius: 0,
                backgroundColor: "#33bdef",
                fontColor: "#ffffff",
                backgroundHover: "#019ad2",
                borderColor: "#057fd0",
                textShadowColor: "#5b6178",
                boxShadowColor: "#f0f7fa",
                previewBackgroundColor: "#e2e2e2"
            }), He({
                name: "style 14"
            }, Be, {
                borderRadius: 6,
                isBoxShadow: !0,
                isGradient: !0,
                positionWidth: 0,
                positionHeight: 1,
                blurRadius: 0,
                spreadRadius: 0,
                textPositionWidth: 0,
                textPositionHeight: 1,
                textBlurRadius: 0,
                backgroundColor: "#ffec64",
                fontColor: "#333333",
                backgroundHover: "#ffab23",
                borderColor: "#ffaa22",
                textShadowColor: "#ffee66",
                boxShadowColor: "#fff6af",
                previewBackgroundColor: "#e2e2e2"
            }), He({
                name: "style 15"
            }, Be, {
                borderRadius: 0,
                isBoxShadow: !0,
                isTextShadow: !1,
                inset: !0,
                isGradient: !0,
                positionWidth: 0,
                positionHeight: 1,
                blurRadius: 0,
                spreadRadius: 0,
                textPositionWidth: 0,
                textPositionHeight: 1,
                textBlurRadius: 0,
                backgroundColor: "#74ad5a",
                fontColor: "#fff",
                backgroundHover: "#68a54b",
                borderColor: "#3b6e22",
                textShadowColor: "#fff",
                boxShadowColor: "#9acc85",
                previewBackgroundColor: "#f5f5f5"
            }), He({
                name: "style 16"
            }, Be, {
                borderRadius: 0,
                isBoxShadow: !0,
                isTextShadow: !1,
                inset: !0,
                isGradient: !0,
                positionWidth: 0,
                positionHeight: 1,
                blurRadius: 0,
                spreadRadius: 0,
                textPositionWidth: 0,
                textPositionHeight: 1,
                textBlurRadius: 0,
                backgroundColor: "#637aad",
                fontColor: "#fff",
                backgroundHover: "#5972a7",
                borderColor: "#314179",
                textShadowColor: "#fff",
                boxShadowColor: "#7a8eb9",
                previewBackgroundColor: "#3b5898"
            }), He({
                name: "style 17"
            }, Be, {
                borderRadius: 15,
                isBoxShadow: !0,
                isGradient: !0,
                positionWidth: 3,
                positionHeight: 4,
                blurRadius: 0,
                spreadRadius: 0,
                textPositionWidth: 0,
                textPositionHeight: 1,
                textBlurRadius: 0,
                backgroundColor: "#ededed",
                fontColor: "#3a8a9e",
                backgroundHover: "#bab1ba",
                borderColor: "#d6bcd6",
                textShadowColor: "#e1e2ed",
                boxShadowColor: "#899599",
                previewBackgroundColor: "#f5f5f5"
            }), He({
                name: "style 18"
            }, Be, {
                borderRadius: 18,
                isBoxShadow: !0,
                isGradient: !0,
                positionWidth: 3,
                positionHeight: 4,
                blurRadius: 0,
                spreadRadius: 0,
                textPositionWidth: 0,
                textPositionHeight: 1,
                textBlurRadius: 0,
                backgroundColor: "#c62d1f",
                fontColor: "#fff",
                backgroundHover: "#f24437",
                borderColor: "#d02718",
                textShadowColor: "#810e05",
                boxShadowColor: "#8a2a21",
                previewBackgroundColor: "#f5f5f5"
            }), He({
                name: "style 19"
            }, Be, {
                borderRadius: 5,
                isBoxShadow: !0,
                isGradient: !0,
                positionWidth: 3,
                positionHeight: 4,
                blurRadius: 0,
                spreadRadius: 0,
                textPositionWidth: 0,
                textPositionHeight: 1,
                textBlurRadius: 0,
                backgroundColor: "#79bbff",
                fontColor: "#fff",
                backgroundHover: "#378de5",
                borderColor: "#337bc4",
                textShadowColor: "#528ecc",
                boxShadowColor: "#1564ad",
                previewBackgroundColor: "#f5f5f5"
            }), He({
                name: "style 20"
            }, Be, {
                borderRadius: 6,
                isBoxShadow: !0,
                isGradient: !0,
                inset: !0,
                positionWidth: 0,
                positionHeight: 0,
                blurRadius: 14,
                spreadRadius: -3,
                textPositionWidth: 0,
                textPositionHeight: 1,
                textBlurRadius: 0,
                backgroundColor: "#dbe6c4",
                fontColor: "#757d6f",
                backgroundHover: "#9ba892",
                borderColor: "#b2b8ad",
                textShadowColor: "#ced9bf",
                boxShadowColor: "#f2fadc",
                previewBackgroundColor: "#f5f5f5"
            }), He({
                name: "style 21"
            }, Be, {
                borderRadius: 6,
                isBoxShadow: !0,
                isGradient: !0,
                inset: !0,
                positionWidth: 0,
                positionHeight: 1,
                blurRadius: 0,
                spreadRadius: 0,
                textPositionWidth: 0,
                textPositionHeight: 1,
                textBlurRadius: 0,
                backgroundColor: "#dfbdfa",
                fontColor: "#fff",
                backgroundHover: "#bc80ea",
                borderColor: "#c584f3",
                textShadowColor: "#9752cc",
                boxShadowColor: "#efdcfb",
                previewBackgroundColor: "#f5f5f5"
            }), He({
                name: "style 22"
            }, Be, {
                borderRadius: 6,
                isBoxShadow: !0,
                isGradient: !0,
                inset: !0,
                positionWidth: 0,
                positionHeight: 1,
                blurRadius: 0,
                spreadRadius: 0,
                textPositionWidth: 0,
                textPositionHeight: 1,
                textBlurRadius: 0,
                backgroundColor: "#bddbfa",
                fontColor: "#fff",
                backgroundHover: "#80b5ea",
                borderColor: "#84bbf3",
                textShadowColor: "#528ecc",
                boxShadowColor: "#dcecfb",
                previewBackgroundColor: "#f5f5f5"
            }), He({
                name: "style 23"
            }, Be, {
                borderRadius: 6,
                isBoxShadow: !0,
                isGradient: !0,
                inset: !0,
                positionWidth: 0,
                positionHeight: 1,
                blurRadius: 0,
                spreadRadius: 0,
                textPositionWidth: 0,
                textPositionHeight: 1,
                textBlurRadius: 0,
                backgroundColor: "#ffffff",
                fontColor: "#666666",
                backgroundHover: "#f6f6f6",
                borderColor: "#dcdcdc",
                textShadowColor: "#ffffff",
                boxShadowColor: "#ffffff",
                previewBackgroundColor: "#f5f5f5"
            }), He({
                name: "style 24"
            }, Be, {
                borderRadius: 6,
                isBoxShadow: !0,
                isGradient: !0,
                inset: !0,
                positionWidth: 0,
                positionHeight: 1,
                blurRadius: 0,
                spreadRadius: 0,
                textPositionWidth: 0,
                textPositionHeight: 1,
                textBlurRadius: 0,
                backgroundColor: "#fc8d83",
                fontColor: "#ffffff",
                backgroundHover: "#e4685d",
                borderColor: "#d83526",
                textShadowColor: "#b23e35",
                boxShadowColor: "#f7c5c0",
                previewBackgroundColor: "#f5f5f5"
            }), He({
                name: "style 25"
            }, Be, {
                borderRadius: 6,
                isBoxShadow: !0,
                isGradient: !0,
                inset: !0,
                positionWidth: 0,
                positionHeight: 1,
                blurRadius: 0,
                spreadRadius: 0,
                textPositionWidth: 0,
                textPositionHeight: 1,
                textBlurRadius: 0,
                backgroundColor: "#63b8ee",
                fontColor: "#14396a",
                backgroundHover: "#468ccf",
                borderColor: "#3866a3",
                textShadowColor: "#7cacde",
                boxShadowColor: "#bee2f9",
                previewBackgroundColor: "#f5f5f5"
            }), He({
                name: "style 26"
            }, Be, {
                borderRadius: 6,
                isBoxShadow: !0,
                isGradient: !0,
                inset: !0,
                positionWidth: 0,
                positionHeight: 1,
                blurRadius: 0,
                spreadRadius: 0,
                textPositionWidth: 0,
                textPositionHeight: 1,
                textBlurRadius: 0,
                backgroundColor: "#ffec64",
                fontColor: "#14396a",
                backgroundHover: "#ffab23",
                borderColor: "#333333",
                textShadowColor: "#ffee66",
                boxShadowColor: "#fff6af",
                previewBackgroundColor: "#f5f5f5"
            }), He({
                name: "style 27"
            }, Be, {
                borderRadius: 6,
                isBoxShadow: !0,
                isGradient: !0,
                inset: !0,
                positionWidth: 0,
                positionHeight: 1,
                blurRadius: 0,
                spreadRadius: 0,
                textPositionWidth: 0,
                textPositionHeight: 1,
                textBlurRadius: 0,
                backgroundColor: "#89c403",
                fontColor: "#ffffff",
                backgroundHover: "#77a809",
                borderColor: "#74b807",
                textShadowColor: "#528009",
                boxShadowColor: "#a4e271",
                previewBackgroundColor: "#f5f5f5"
            }), He({
                name: "style 28"
            }, Be, {
                borderRadius: 6,
                isBoxShadow: !0,
                isGradient: !0,
                inset: !0,
                positionWidth: 0,
                positionHeight: 1,
                blurRadius: 0,
                spreadRadius: 0,
                textPositionWidth: 0,
                textPositionHeight: 1,
                textBlurRadius: 0,
                backgroundColor: "#f9f9f9",
                fontColor: "#666666",
                backgroundHover: "#e9e9e9",
                borderColor: "#dcdcdc",
                textShadowColor: "#ffffff",
                boxShadowColor: "#ffffff",
                previewBackgroundColor: "#f5f5f5"
            }), He({
                name: "style 29"
            }, Be, {
                borderRadius: 6,
                isBoxShadow: !0,
                isGradient: !0,
                inset: !0,
                positionWidth: 0,
                positionHeight: 1,
                blurRadius: 0,
                spreadRadius: 0,
                textPositionWidth: 0,
                textPositionHeight: 1,
                textBlurRadius: 0,
                backgroundColor: "#c123de",
                fontColor: "#ffffff",
                backgroundHover: "#a20dbd",
                borderColor: "#a511c0",
                textShadowColor: "#9b14b3",
                boxShadowColor: "#e184f3",
                previewBackgroundColor: "#f5f5f5"
            }), He({
                name: "style 30"
            }, Be, {
                borderRadius: 6,
                isBoxShadow: !0,
                isGradient: !0,
                inset: !0,
                positionWidth: 0,
                positionHeight: 1,
                blurRadius: 0,
                spreadRadius: 0,
                textPositionWidth: 0,
                textPositionHeight: 1,
                textBlurRadius: 0,
                backgroundColor: "#3d94f6",
                fontColor: "#ffffff",
                backgroundHover: "#1e62d0",
                borderColor: "#337fed",
                textShadowColor: "#1570cd",
                boxShadowColor: "#97c4fe",
                previewBackgroundColor: "#f5f5f5"
            }), He({
                name: "style 31"
            }, Be, {
                borderRadius: 6,
                isBoxShadow: !0,
                isGradient: !0,
                inset: !0,
                positionWidth: 0,
                positionHeight: 1,
                blurRadius: 0,
                spreadRadius: 0,
                textPositionWidth: 0,
                textPositionHeight: 1,
                textBlurRadius: 0,
                backgroundColor: "#ff5bb0",
                fontColor: "#ffffff",
                backgroundHover: "#ef027d",
                borderColor: "#ee1eb5",
                textShadowColor: "#c70067",
                boxShadowColor: "#fbafe3",
                previewBackgroundColor: "#f5f5f5"
            }), He({
                name: "style 32"
            }, Be, {
                borderRadius: 6,
                isBoxShadow: !0,
                isGradient: !0,
                inset: !0,
                positionWidth: 0,
                positionHeight: 1,
                blurRadius: 0,
                spreadRadius: 0,
                textPositionWidth: 0,
                textPositionHeight: 1,
                textBlurRadius: 0,
                backgroundColor: "#f0c911",
                fontColor: "#c92200",
                backgroundHover: "#f2ab1e",
                borderColor: "#e65f44",
                textShadowColor: "#ded17c",
                boxShadowColor: "#f9eca0",
                previewBackgroundColor: "#f5f5f5"
            }), He({
                name: "style 33"
            }, Be, {
                borderRadius: 6,
                isBoxShadow: !0,
                isGradient: !0,
                inset: !0,
                positionWidth: 0,
                positionHeight: 1,
                blurRadius: 0,
                spreadRadius: 0,
                textPositionWidth: 0,
                textPositionHeight: 1,
                textBlurRadius: 0,
                backgroundColor: "#f24537",
                fontColor: "#fff",
                backgroundHover: "#c62d1f",
                borderColor: "#d02718",
                textShadowColor: "#810e05",
                boxShadowColor: "#f5978e",
                previewBackgroundColor: "#f5f5f5"
            }), He({
                name: "style 34"
            }, Be, {
                borderRadius: 6,
                isBoxShadow: !0,
                isGradient: !0,
                inset: !0,
                positionWidth: 0,
                positionHeight: 1,
                blurRadius: 0,
                spreadRadius: 0,
                textPositionWidth: 0,
                textPositionHeight: 1,
                textBlurRadius: 0,
                backgroundColor: "#b8e356",
                fontColor: "#fff",
                backgroundHover: "#a5cc52",
                borderColor: "#83c41a",
                textShadowColor: "#86ae47",
                boxShadowColor: "#d9fbbe",
                previewBackgroundColor: "#f5f5f5"
            }), He({
                name: "style 35"
            }, Be, {
                borderRadius: 6,
                isBoxShadow: !0,
                isGradient: !0,
                inset: !0,
                positionWidth: 0,
                positionHeight: 1,
                blurRadius: 0,
                spreadRadius: 0,
                textPositionWidth: 0,
                textPositionHeight: 1,
                textBlurRadius: 0,
                backgroundColor: "#ffc477",
                fontColor: "#fff",
                backgroundHover: "#fb9e25",
                borderColor: "#eeb44f",
                textShadowColor: "#cc9f52",
                boxShadowColor: "#fce2c1",
                previewBackgroundColor: "#f5f5f5"
            }), He({
                name: "style 36"
            }, Be, {
                borderRadius: 6,
                isBoxShadow: !0,
                isGradient: !0,
                inset: !0,
                positionWidth: 0,
                positionHeight: 1,
                blurRadius: 0,
                spreadRadius: 0,
                textPositionWidth: 0,
                textPositionHeight: 1,
                textBlurRadius: 0,
                backgroundColor: "#ededed",
                fontColor: "#777777",
                backgroundHover: "#dfdfdf",
                borderColor: "#dcdcdc",
                textShadowColor: "#ffffff",
                boxShadowColor: "#ffffff",
                previewBackgroundColor: "#f5f5f5"
            }), He({
                name: "style 37"
            }, Be, {
                borderRadius: 6,
                isBoxShadow: !0,
                isGradient: !0,
                inset: !0,
                positionWidth: 0,
                positionHeight: 1,
                blurRadius: 0,
                spreadRadius: 0,
                textPositionWidth: 0,
                textPositionHeight: 1,
                textBlurRadius: 0,
                backgroundColor: "#79bbff",
                fontColor: "#fff",
                backgroundHover: "#378de5",
                borderColor: "#84bbf3",
                textShadowColor: "#528ecc",
                boxShadowColor: "#bbdaf7",
                previewBackgroundColor: "#f5f5f5"
            }), He({
                name: "style 38"
            }, Be, {
                borderRadius: 6,
                isBoxShadow: !0,
                isGradient: !0,
                inset: !0,
                positionWidth: 0,
                positionHeight: 1,
                blurRadius: 0,
                spreadRadius: 0,
                textPositionWidth: 0,
                textPositionHeight: 1,
                textBlurRadius: 0,
                backgroundColor: "#77d42a",
                fontColor: "#306108",
                backgroundHover: "#5cb811",
                borderColor: "#268a16",
                textShadowColor: "#aade7c",
                boxShadowColor: "#caefab",
                previewBackgroundColor: "#f5f5f5"
            }), He({
                name: "style 39"
            }, Be, {
                borderRadius: 6,
                isBoxShadow: !0,
                isGradient: !0,
                inset: !0,
                positionWidth: 0,
                positionHeight: 1,
                blurRadius: 0,
                spreadRadius: 0,
                textPositionWidth: 0,
                textPositionHeight: 1,
                textBlurRadius: 0,
                backgroundColor: "#fe1a00",
                fontColor: "#ffffff",
                backgroundHover: "#ce0100",
                borderColor: "#d83526",
                textShadowColor: "#b23e35",
                boxShadowColor: "#f29c93",
                previewBackgroundColor: "#f5f5f5"
            })];

            function _e(e, o, t) {
                return o in e ? Object.defineProperty(e, o, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[o] = t, e
            }

            function We(e) {
                for (var o = 1; o < arguments.length; o++) {
                    var t = null != arguments[o] ? arguments[o] : {},
                        r = Object.keys(t);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })))), r.forEach((function (o) {
                        _e(e, o, t[o])
                    }))
                }
                return e
            }
            var Te = function () {
                    var e = (0, i.useState)(Be),
                        o = e[0],
                        t = e[1],
                        n = (0, i.useRef)(null),
                        s = (0, i.useRef)(null),
                        a = (0, i.useRef)(null),
                        d = (0, i.useRef)(null),
                        l = (0, i.useRef)(null),
                        c = function () {
                            var e = window.innerWidth;
                            e > 991 ? (! function (e) {
                                var o = e - s.current.offsetWidth - a.current.offsetWidth - (e - d.current.offsetWidth) / 2;
                                n.current.style.width = "".concat(o, "px")
                            }(e), n.current.style.transform = "translate(0%)") : (n.current.style.width = "300px", n.current.style.transform = "translate(-100%)")
                        };
                    (0, i.useEffect)((function () {
                        n.current && s.current && a.current && c()
                    }), [n.current, s.current, a.current]), (0, i.useEffect)((function () {
                        return window.addEventListener("resize", c),
                            function () {
                                window.removeEventListener("resize", c)
                            }
                    }), []), (0, i.useEffect)((function () {
                        window.GA_INITIALIZED || (Se.ZP.initialize("UA-48117924-1"), window.GA_INITIALIZED = !0), Se.ZP.set({
                            page: window.location.pathname
                        }), Se.ZP.pageview(window.location.pathname)
                    }), []);
                    var u = (0, i.useCallback)((function (e) {
                            t((function (o) {
                                return We({}, o, e)
                            }))
                        }), []),
                        f = (0, i.useCallback)((function (e) {
                            t((function (o) {
                                return We({}, o, _e({}, e, Be[e]))
                            }))
                        }), []),
                        h = (0, i.useCallback)((function () {
                            window.innerWidth < 992 && (n.current.style.transform = "translate(0%)", l.current.style.transform = "translate(0%)")
                        }), []),
                        b = function () {
                            window.innerWidth < 992 && (n.current.style.transform = "translate(-100%)", l.current.style.transform = "translate(-100%)")
                        },
                        x = (0, i.useCallback)((function (e) {
                            t(e), b()
                        }), []);
                    return (0, r.jsxs)("div", {
                        children: [(0, r.jsx)("div", {
                            role: "button",
                            tabIndex: "-1",
                            className: "sidenav-overlay block md:none",
                            onClick: b,
                            ref: l
                        }), (0, r.jsx)(je, {
                            data: Pe,
                            ref: n,
                            onClick: x
                        }), (0, r.jsx)("div", {
                            className: "container h-auto",
                            ref: d,
                            children: (0, r.jsxs)("div", {
                                className: "flex flex-row flex-wrap",
                                children: [(0, r.jsx)("div", {
                                    className: "w-full lg:w-1/6"
                                }), (0, r.jsx)("div", {
                                    className: "w-full lg:w-1/2 md:w-7/12 md:order-none order-1",
                                    ref: s,
                                    children: (0, r.jsx)(we, {
                                        btnStyle: o,
                                        onChange: u
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "w-full lg:w-1/3 md:w-1/3 mb-3",
                                    ref: a,
                                    children: (0, r.jsx)(F, {
                                        btnStyle: o,
                                        onChange: u,
                                        onRefresh: f,
                                        onOpenTemplate: h
                                    })
                                })]
                            })
                        })]
                    })
                },
                Oe = function () {
                    return (0, r.jsx)(Te, {})
                }
        },
        48947: function (e) {
            e.exports = {
                "form-check": "styles_form-check__M8kkR",
                "form-check-input": "styles_form-check-input__oKqti",
                "form-check-label": "styles_form-check-label__ME49Q"
            }
        },
        56082: function (e) {
            e.exports = {
                codebox: "styles_codebox__SOFIw",
                button: "styles_button__5_UtZ",
                icon: "styles_icon__B_QTF"
            }
        },
        85496: function (e) {
            e.exports = {
                swatch: "styles_swatch__kLT4R",
                disabled: "styles_disabled__JxuhY",
                popover: "styles_popover__AUCdD"
            }
        },
        46187: function (e) {
            e.exports = {
                slider: "styles_slider__mGbT0",
                "slider-range": "styles_slider-range__oWUE_",
                "slider-point": "styles_slider-point__N0huO"
            }
        },
        27010: function (e) {
            e.exports = {
                refresh: "styles_refresh__sjVT_",
                refreshIcon: "styles_refreshIcon__KvMpD",
                label: "styles_label__GNhrB",
                value: "styles_value__IWmdd",
                silder: "styles_silder__lUk4w"
            }
        },
        53333: function (e) {
            e.exports = {
                tooltip: "styles_tooltip__BZ_lw",
                text: "styles_text__zRECU",
                top: "styles_top__7wmru"
            }
        },
        45172: function (e) {
            e.exports = {
                checkbox: "styles_checkbox__ci_5j"
            }
        },
        25594: function (e) {
            e.exports = {
                preview: "styles_preview__Y8H6_",
                title: "styles_title__xuljm",
                "btn-preview": "styles_btn-preview__hoOyW",
                "preview-area": "styles_preview-area__V5Enb",
                "color-container": "styles_color-container__br0oy",
                step: "styles_step__fhn3g",
                "text-dark": "styles_text-dark__njA2x",
                "current-palette": "styles_current-palette__UZicL",
                color: "styles_color__TWsN8"
            }
        },
        36004: function (e) {
            e.exports = {
                "btn-templates": "styles_btn-templates__aeuTf",
                "btn-template-container": "styles_btn-template-container__O_35A",
                "btn-template": "styles_btn-template__PoQKo",
                "btn-style": "styles_btn-style__yVTy9"
            }
        },
        18322: function (e) {
            e.exports = {
                "wrap-trigger-btn": "styles_wrap-trigger-btn__VR_l_",
                "trigger-btns-template": "styles_trigger-btns-template__UnnAv"
            }
        },
        44558: function (e) {
            e.exports = {
                checkbox: "styles_checkbox__TIJl8"
            }
        }
    },
    function (e) {
        e.O(0, [3662, 3642, 9774, 2888, 179], (function () {
            return o = 45728, e(e.s = o);
            var o
        }));
        var o = e.O();
        _N_E = o
    }
]);

(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        640: function(e, t, r) {
            "use strict";
            var n = r(1742),
                a = {
                    "text/plain": "Text",
                    "text/html": "Url",
                    default: "Text"
                };
            e.exports = function(e, t) {
                var r, s, o, l, i, c, d = !1;
                t || (t = {}), r = t.debug || !1;
                try {
                    if (o = n(), l = document.createRange(), i = document.getSelection(), (c = document.createElement("span")).textContent = e, c.ariaHidden = "true", c.style.all = "unset", c.style.position = "fixed", c.style.top = 0, c.style.clip = "rect(0, 0, 0, 0)", c.style.whiteSpace = "pre", c.style.webkitUserSelect = "text", c.style.MozUserSelect = "text", c.style.msUserSelect = "text", c.style.userSelect = "text", c.addEventListener("copy", (function(n) {
                            if (n.stopPropagation(), t.format)
                                if (n.preventDefault(), "undefined" === typeof n.clipboardData) {
                                    r && console.warn("unable to use e.clipboardData"), r && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
                                    var s = a[t.format] || a.default;
                                    window.clipboardData.setData(s, e)
                                } else n.clipboardData.clearData(), n.clipboardData.setData(t.format, e);
                            t.onCopy && (n.preventDefault(), t.onCopy(n.clipboardData))
                        })), document.body.appendChild(c), l.selectNodeContents(c), i.addRange(l), !document.execCommand("copy")) throw new Error("copy command was unsuccessful");
                    d = !0
                } catch (x) {
                    r && console.error("unable to copy using execCommand: ", x), r && console.warn("trying IE specific stuff");
                    try {
                        window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), d = !0
                    } catch (x) {
                        r && console.error("unable to copy using clipboardData: ", x), r && console.error("falling back to prompt"), s = function(e) {
                            var t = (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") + "+C";
                            return e.replace(/#{\s*key\s*}/g, t)
                        }("message" in t ? t.message : "Copy to clipboard: #{key}, Enter"), window.prompt(s, e)
                    }
                } finally {
                    i && ("function" == typeof i.removeRange ? i.removeRange(l) : i.removeAllRanges()), c && document.body.removeChild(c), o()
                }
                return d
            }
        },
        3685: function(e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return r(1143)
            }])
        },
        1143: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return u
                }
            });
            var n = r(5893),
                a = (r(7294), function() {
                    return (0, n.jsx)("section", {
                        className: "pb-16 lg:pb-24",
                        children: (0, n.jsx)("div", {
                            className: "container mx-auto px-6 max-w-[1280px]",
                            children: (0, n.jsxs)("div", {
                                className: " bg-[#1C1A27] w-full lg:w-[90%] mx-auto p-6 py-8 lg:p-12 box-shadow rounded-3xl lg:rounded-[60px]",
                                children: [(0, n.jsx)("h2", {
                                    className: "text-center",
                                    children: "What is KabosuCEO ?"
                                }), (0, n.jsx)("div", {
                                    className: "max-w-[800px] mt-6 mx-auto text-center w-full leading-8 text-xl text-[#B7B4C7]",
                                    children: "KabosuCEO is a low tax deflationary token, which aims to bring fourth the CEO hype and combine it with the greatest dog known in the crypto space."
                                }), (0, n.jsx)("div", {
                                    className: "max-w-[800px] mt-4 mx-auto text-center w-full leading-8 text-xl text-[#B7B4C7]",
                                    children: "KabosuCEO is a meme project that highlights and supports women in crypto while raising awareness for their under-representation. CZ recently tweeted about the lack of female crypto users motivating the project's mission to increase resources for all."
                                }), (0, n.jsx)("div", {
                                    className: "max-w-[800px] mt-4 mx-auto text-center w-full leading-8 text-xl text-[#B7B4C7]",
                                    children: "This project is inspired by Kabosu; the true female dog behind the viral meme."
                                })]
                            })
                        })
                    })
                }),
                s = r(9583),
                o = function() {
                    return (0, n.jsxs)("footer", {
                        className: "bg-[#1C1A27]",
                        children: [(0, n.jsx)("div", {
                            className: " py-6 container mx-auto max-w-[1280px] px-6",
                            children: (0, n.jsxs)("div", {
                                className: "flex justify-between flex-wrap gap-16",
                                children: [(0, n.jsx)("div", {
                                    children: (0, n.jsx)("img", {
                                        src: "/logo.png ",
                                        className: "w-16"
                                    })
                                }), (0, n.jsxs)("ul", {
                                    className: "flex gap-4 items-center",
                                    children: [(0, n.jsx)("li", {
                                        children: (0, n.jsx)("a", {
                                            href: "https://t.me/KabosuCEOPortal ",
                                            target: "_blank",
                                            className: "p-2 block rounded-full text-2xl bg-gradient-to-tr from-[#FE316F] to-[#D220FF]",
                                            children: (0, n.jsx)(s.AGi, {})
                                        })
                                    }), (0, n.jsx)("li", {
                                        children: (0, n.jsx)("a", {
                                            href: "https://t.me/KabosuCEONews ",
                                            target: "_blank",
                                            className: "p-2 block rounded-full text-2xl bg-gradient-to-tr from-[#FE316F] to-[#D220FF]",
                                            children: (0, n.jsx)(s.AGi, {})
                                        })
                                    }), (0, n.jsx)("li", {
                                        children: (0, n.jsx)("a", {
                                            href: "https://twitter.com/Kabosu_CEO",
                                            target: "_blank",
                                            className: "p-2 block rounded-full text-2xl bg-gradient-to-tr from-[#FE316F] to-[#D220FF]",
                                            children: (0, n.jsx)(s.fWC, {})
                                        })
                                    })]
                                })]
                            })
                        }), (0, n.jsx)("div", {
                            className: "border-t border-white/20 py-4",
                            children: (0, n.jsx)("div", {
                                className: "container mx-auto max-w-[1280px] px-6",
                                children: (0, n.jsxs)("div", {
                                    className: "flex items-center justify-between gap-6 flex-wrap",
                                    children: [(0, n.jsx)("span", {
                                        children: "Copyright 2023"
                                    }), (0, n.jsx)("span", {
                                        children: "contact@kabosuceo.com"
                                    })]
                                })
                            })
                        })]
                    })
                },
                l = function() {
                    return (0, n.jsx)("header", {
                        children: (0, n.jsx)("div", {
                            className: "container mx-auto px-6 max-w-[1280px] py-6",
                            children: (0, n.jsxs)("div", {
                                className: "flex justify-between items-center",
                                children: [(0, n.jsx)("img", {
                                    src: "/logo.png",
                                    className: "w-16"
                                }), (0, n.jsx)("nav", {
                                    children: (0, n.jsxs)("ul", {
                                        className: "flex gap-4 items-center",
                                        children: [(0, n.jsx)("li", {
                                            children: (0, n.jsx)("a", {
                                                href: "https://t.me/KabosuCEOPortal ",
                                                target: "_blank",
                                                className: "p-2 block rounded-full text-2xl bg-gradient-to-tr from-[#FE316F] to-[#D220FF]",
                                                children: (0, n.jsx)(s.AGi, {})
                                            })
                                        }), (0, n.jsx)("li", {
                                            children: (0, n.jsx)("a", {
                                                href: "https://t.me/KabosuCEONews ",
                                                target: "_blank",
                                                className: "p-2 block rounded-full text-2xl bg-gradient-to-tr from-[#FE316F] to-[#D220FF]",
                                                children: (0, n.jsx)(s.AGi, {})
                                            })
                                        }), (0, n.jsx)("li", {
                                            children: (0, n.jsx)("a", {
                                                href: "https://twitter.com/Kabosu_CEO",
                                                target: "_blank",
                                                className: "p-2 block rounded-full text-2xl bg-gradient-to-tr from-[#FE316F] to-[#D220FF]",
                                                children: (0, n.jsx)(s.fWC, {})
                                            })
                                        })]
                                    })
                                })]
                            })
                        })
                    })
                },
                i = r(4855),
                c = function() {
                    return (0, n.jsx)("section", {
                        children: (0, n.jsx)("div", {
                            className: "container mx-auto px-6 max-w-[1280px] pb-24 pt-8",
                            children: (0, n.jsxs)("div", {
                                className: "flex gap-8 justify-between flex-wrap-reverse lg:flex-nowrap",
                                children: [(0, n.jsxs)("div", {
                                    children: [(0, n.jsxs)("h1", {
                                        children: ["Supporting Women in the Crypto Space with", " ", (0, n.jsx)("span", {
                                            className: "text-[#FE316F]",
                                            children: "KabosuCEO"
                                        })]
                                    }), (0, n.jsxs)("ul", {
                                        className: "leading-6 sm:leading-8 text-sm sm:text-base",
                                        children: [(0, n.jsx)("li", {
                                            children: "\ud83d\udfe350% of Transaction Fees Rewarded back to Holders as Reflections"
                                        }), (0, n.jsx)("li", {
                                            children: "\ud83d\udfe3Reflections Earned every 15 minutes: 96 times daily"
                                        }), (0, n.jsx)("li", {
                                            children: "\ud83d\udfe3Daily Token Burn Mechanism Reducing Circulating Supply"
                                        }), (0, n.jsx)("li", {
                                            children: "\ud83d\udfe3Track Rewards and Burns via Easy-to-Use dApp"
                                        })]
                                    }), (0, n.jsxs)("div", {
                                        className: "mt-6 flex gap-4 items-center flex-wrap max-w-[600px] w-full",
                                        children: [(0, n.jsx)("a", {
                                            href: "https://www.pinksale.finance/launchpad/0x554e8d1ec79cfA871A120180b76a788cF8b83127?chain=BSC",
                                            target: "_blank",
                                            className: "bg-black py-3 px-6 lg:px-12 text-xl btn-gradient-2",
                                            children: (0, n.jsx)("span", {
                                                className: "-mb-1 inline-block",
                                                children: "Presale"
                                            })
                                        }), (0, n.jsx)("a", {
                                            href: " https://github.com/CFG-NINJA/audits/blob/464dff42b200a57a22124e029dff5e17709be41c/20230315_CFGNINJA_KabosuCEO_Audit.pdf ",
                                            target: "_blank",
                                            className: "bg-black py-3 px-6 lg:px-12 text-xl btn-gradient-2",
                                            children: (0, n.jsx)("span", {
                                                className: "-mb-1 inline-block",
                                                children: "Audit"
                                            })
                                        }), (0, n.jsx)("a", {
                                            href: "https://pinksale.notion.site/Kabosu-CEO-KYC-Verification-a0c9076da55740519e882d2ca0b6b9d8 ",
                                            target: "_blank",
                                            className: "bg-black py-3 px-6 lg:px-12 text-xl btn-gradient-2",
                                            children: (0, n.jsx)("span", {
                                                className: "-mb-1 inline-block",
                                                children: "KYC"
                                            })
                                        }), (0, n.jsx)("a", {
                                            href: "https://pancakeswap.finance/swap?outputCurrency=0x64e93084a4e539b7b60A1B247756373C8B4a1dB3&inputCurrency=BNB ",
                                            target: "_blank",
                                            className: "bg-black py-3 px-6 lg:px-12 text-xl btn-gradient-2",
                                            children: (0, n.jsx)("span", {
                                                className: "-mb-1 inline-block",
                                                children: "Buy"
                                            })
                                        }), (0, n.jsx)("a", {
                                            href: "https://www.dexview.com/bsc/0x64e93084a4e539b7b60A1B247756373C8B4a1dB3 ",
                                            target: "_blank",
                                            className: "bg-black py-3 px-6 lg:px-12 text-xl btn-gradient-2",
                                            children: (0, n.jsx)("span", {
                                                className: "-mb-1 inline-block",
                                                children: "Chart"
                                            })
                                        }), (0, n.jsx)("a", {
                                            target: "_blank",
                                            href: "https://kabusoceo.gitbook.io/kabusoceo-whitepaper/",
                                            className: "bg-black py-3 px-6 lg:px-12 text-xl btn-gradient-2",
                                            children: (0, n.jsx)("span", {
                                                className: "-mb-1 inline-block",
                                                children: "Whitepaper"
                                            })
                                        })]
                                    })]
                                }), (0, n.jsxs)("div", {
                                    children: [(0, n.jsx)("img", {
                                        src: "/hero.png",
                                        className: "max-w-[500px] w-full"
                                    }), (0, n.jsxs)("div", {
                                        className: "bg-[#101010] -mt-8 flex gap-4 drop-shadow border border-white/20 items-center justify-center w-full max-w-[500px] rounded-full py-2 px-6",
                                        children: [(0, n.jsx)("span", {
                                            className: "-mb-1 md:inline-block hidden ",
                                            children: "0x64e93084a4e539b7b60A1B247756373C8B4a1dB3"
                                        }), (0, n.jsx)("span", {
                                            className: "-mb-1 inline-block md:hidden",
                                            children: "0x64e930....B4a1dB3"
                                        }), (0, n.jsx)(i.CopyToClipboard, {
                                            text: "0x64e93084a4e539b7b60A1B247756373C8B4a1dB3",
                                            onCopy: function() {
                                                return alert("Copied")
                                            },
                                            children: (0, n.jsx)("button", {
                                                children: (0, n.jsxs)("svg", {
                                                    width: "24",
                                                    height: "24",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: [(0, n.jsx)("path", {
                                                        d: "M9 12H12.75M9 15H12.75M9 18H12.75M15.75 18.75H18C18.5967 18.75 19.169 18.5129 19.591 18.091C20.0129 17.669 20.25 17.0967 20.25 16.5V6.108C20.25 4.973 19.405 4.01 18.274 3.916C17.9 3.88498 17.5256 3.85831 17.151 3.836M17.151 3.836C17.2174 4.05109 17.2501 4.27491 17.25 4.5C17.25 4.69891 17.171 4.88968 17.0303 5.03033C16.8897 5.17098 16.6989 5.25 16.5 5.25H12C11.586 5.25 11.25 4.914 11.25 4.5C11.25 4.269 11.285 4.046 11.35 3.836M17.151 3.836C16.868 2.918 16.012 2.25 15 2.25H13.5C13.0192 2.25011 12.5511 2.40414 12.1643 2.68954C11.7774 2.97493 11.492 3.3767 11.35 3.836M11.35 3.836C10.974 3.859 10.6 3.886 10.226 3.916C9.095 4.01 8.25 4.973 8.25 6.108V8.25M8.25 8.25H4.875C4.254 8.25 3.75 8.754 3.75 9.375V20.625C3.75 21.246 4.254 21.75 4.875 21.75H14.625C15.246 21.75 15.75 21.246 15.75 20.625V9.375C15.75 8.754 15.246 8.25 14.625 8.25H8.25ZM6.75 12H6.758V12.008H6.75V12ZM6.75 15H6.758V15.008H6.75V15ZM6.75 18H6.758V18.008H6.75V18Z",
                                                        stroke: "white",
                                                        "stroke-width": "1.5",
                                                        "stroke-linecap": "round",
                                                        "stroke-linejoin": "round"
                                                    }), " "]
                                                })
                                            })
                                        })]
                                    })]
                                })]
                            })
                        })
                    })
                },
                d = function() {
                    return (0, n.jsx)("section", {
                        className: "pb-24",
                        children: (0, n.jsxs)("div", {
                            className: "container mx-auto max-w-[1280px] px-6",
                            children: [(0, n.jsx)("h2", {
                                className: "text-center",
                                children: "Partners"
                            }), (0, n.jsxs)("div", {
                                className: "grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8 lg:mt-16 max-w-[1100px] mx-auto items-center",
                                children: [(0, n.jsx)("a", {
                                    href: "#",
                                    target: "_blank",
                                    children: (0, n.jsx)("img", {
                                        src: "/partners/bscscan.png"
                                    })
                                }), (0, n.jsx)("a", {
                                    href: "#",
                                    target: "_blank",
                                    children: (0, n.jsx)("img", {
                                        src: "/partners/cmc.png"
                                    })
                                }), (0, n.jsx)("a", {
                                    href: "#",
                                    target: "_blank",
                                    children: (0, n.jsx)("img", {
                                        src: "/partners/cg.png"
                                    })
                                }), (0, n.jsx)("a", {
                                    href: "#",
                                    target: "_blank",
                                    children: (0, n.jsx)("img", {
                                        src: "/partners/ave.png"
                                    })
                                }), (0, n.jsx)("a", {
                                    href: "#",
                                    target: "_blank",
                                    children: (0, n.jsx)("img", {
                                        src: "/partners/dexview.png"
                                    })
                                }), (0, n.jsx)("a", {
                                    href: "#",
                                    target: "_blank",
                                    children: (0, n.jsx)("img", {
                                        src: "/partners/dextool.png"
                                    })
                                }), (0, n.jsx)("a", {
                                    href: "#",
                                    target: "_blank",
                                    children: (0, n.jsx)("img", {
                                        src: "/partners/pinksale.png"
                                    })
                                }), (0, n.jsx)("a", {
                                    href: "#",
                                    target: "_blank",
                                    children: (0, n.jsx)("img", {
                                        src: "/partners/pancakeswap.png"
                                    })
                                })]
                            })]
                        })
                    })
                },
                x = function() {
                    return (0, n.jsx)("section", {
                        id: "roadmap",
                        children: (0, n.jsxs)("div", {
                            className: "container mx-auto px-6 pb-16 lg:pb-24 max-w-[1280px]",
                            children: [(0, n.jsx)("h2", {
                                className: "text-center",
                                children: "Roadmap"
                            }), (0, n.jsx)("img", {
                                src: "/roadmap.svg",
                                className: "mx-auto mt-8 hidden md:block"
                            }), (0, n.jsx)("img", {
                                src: "/roadmap-mob.svg",
                                className: "mx-auto mt-8 block md:hidden"
                            })]
                        })
                    })
                },
                p = function() {
                    return (0, n.jsx)("section", {
                        children: (0, n.jsxs)("div", {
                            className: "container mx-auto px-6 pb-16 lg:pb-24 max-w-[1280px]",
                            children: [(0, n.jsx)("h2", {
                                className: "text-center",
                                children: "Tokenomics"
                            }), (0, n.jsx)("img", {
                                src: "/tax.png",
                                className: "mt-6 lg:mt-12 hidden md:block max-w-[900px] mx-auto"
                            }), (0, n.jsx)("img", {
                                src: "/tax-mob.png",
                                className: "mt-6 lg:mt-12 block md:hidden max-w-[200px] mx-auto"
                            }), (0, n.jsxs)("div", {
                                className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 md:gap-6 items-start mt-16",
                                children: [(0, n.jsxs)("div", {
                                    children: [(0, n.jsx)("img", {
                                        src: "/presale.svg",
                                        className: "mx-auto"
                                    }), (0, n.jsx)("div", {
                                        className: "text-lg sm:text-xl lg:text-2xl font-bold mt-4 text-center ",
                                        children: "Presale & Liquidity"
                                    })]
                                }), (0, n.jsxs)("div", {
                                    children: [(0, n.jsx)("img", {
                                        src: "/airdrop.svg",
                                        className: "mx-auto"
                                    }), (0, n.jsx)("div", {
                                        className: "text-lg sm:text-xl lg:text-2xl font-bold mt-4 text-center ",
                                        children: "Airdrops"
                                    })]
                                }), (0, n.jsxs)("div", {
                                    children: [(0, n.jsx)("img", {
                                        src: "/team.svg",
                                        className: "mx-auto"
                                    }), (0, n.jsx)("div", {
                                        className: "text-lg sm:text-xl lg:text-2xl font-bold mt-4 text-center ",
                                        children: "Team"
                                    })]
                                }), (0, n.jsxs)("div", {
                                    children: [(0, n.jsx)("img", {
                                        src: "/cex.svg",
                                        className: "mx-auto"
                                    }), (0, n.jsx)("div", {
                                        className: "text-lg sm:text-xl lg:text-2xl font-bold mt-4 text-center ",
                                        children: "CEX"
                                    })]
                                }), (0, n.jsxs)("div", {
                                    children: [(0, n.jsx)("img", {
                                        src: "/staking.svg",
                                        className: "mx-auto"
                                    }), (0, n.jsx)("div", {
                                        className: "text-lg sm:text-xl lg:text-2xl font-bold mt-4 text-center ",
                                        children: "Staking"
                                    })]
                                }), (0, n.jsxs)("div", {
                                    children: [(0, n.jsx)("img", {
                                        src: "/burn.svg",
                                        className: "mx-auto"
                                    }), (0, n.jsx)("div", {
                                        className: "text-lg sm:text-xl lg:text-2xl font-bold mt-4 text-center ",
                                        children: "Burn Mechanism"
                                    })]
                                })]
                            })]
                        })
                    })
                };
            r(9008);

            function u() {
                return (0, n.jsxs)("div", {
                    className: "overflow-hidden",
                    children: [(0, n.jsx)("img", {
                        src: "/gradient-l.png",
                        className: "fixed z-[-1] -bottom-96 -left-16"
                    }), (0, n.jsx)("img", {
                        src: "/gradient-r.png",
                        className: "fixed z-[-1] -bottom-96 -right-16"
                    }), (0, n.jsx)(l, {}), (0, n.jsx)(c, {}), (0, n.jsx)(a, {}), (0, n.jsx)(p, {}), (0, n.jsx)(x, {}), (0, n.jsx)(d, {}), (0, n.jsx)(o, {})]
                })
            }
        },
        9008: function(e, t, r) {
            r(5443)
        },
        4300: function(e, t, r) {
            "use strict";

            function n(e) {
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CopyToClipboard = void 0;
            var a = l(r(7294)),
                s = l(r(640)),
                o = ["text", "onCopy", "options", "children"];

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function i(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(r), !0).forEach((function(t) {
                        g(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function d(e, t) {
                if (null == e) return {};
                var r, n, a = function(e, t) {
                    if (null == e) return {};
                    var r, n, a = {},
                        s = Object.keys(e);
                    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
                }
                return a
            }

            function x(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function p(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function u(e, t) {
                return (u = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function m(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = b(e);
                    if (t) {
                        var a = b(this).constructor;
                        r = Reflect.construct(n, arguments, a)
                    } else r = n.apply(this, arguments);
                    return f(this, r)
                }
            }

            function f(e, t) {
                if (t && ("object" === n(t) || "function" === typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return h(e)
            }

            function h(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function b(e) {
                return (b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function g(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var j = function(e) {
                ! function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t && u(e, t)
                }(i, e);
                var t, r, n, l = m(i);

                function i() {
                    var e;
                    x(this, i);
                    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                    return g(h(e = l.call.apply(l, [this].concat(r))), "onClick", (function(t) {
                        var r = e.props,
                            n = r.text,
                            o = r.onCopy,
                            l = r.children,
                            i = r.options,
                            c = a.default.Children.only(l),
                            d = (0, s.default)(n, i);
                        o && o(n, d), c && c.props && "function" === typeof c.props.onClick && c.props.onClick(t)
                    })), e
                }
                return t = i, (r = [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = (e.text, e.onCopy, e.options, e.children),
                            r = d(e, o),
                            n = a.default.Children.only(t);
                        return a.default.cloneElement(n, c(c({}, r), {}, {
                            onClick: this.onClick
                        }))
                    }
                }]) && p(t.prototype, r), n && p(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), i
            }(a.default.PureComponent);
            t.CopyToClipboard = j, g(j, "defaultProps", {
                onCopy: void 0,
                options: void 0
            })
        },
        4855: function(e, t, r) {
            "use strict";
            var n = r(4300).CopyToClipboard;
            n.CopyToClipboard = n, e.exports = n
        },
        8357: function(e, t, r) {
            "use strict";
            r.d(t, {
                w_: function() {
                    return c
                }
            });
            var n = r(7294),
                a = {
                    color: void 0,
                    size: void 0,
                    className: void 0,
                    style: void 0,
                    attr: void 0
                },
                s = n.createContext && n.createContext(a),
                o = function() {
                    return (o = Object.assign || function(e) {
                        for (var t, r = 1, n = arguments.length; r < n; r++)
                            for (var a in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                l = function(e, t) {
                    var r = {};
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
                    if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                        var a = 0;
                        for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]])
                    }
                    return r
                };

            function i(e) {
                return e && e.map((function(e, t) {
                    return n.createElement(e.tag, o({
                        key: t
                    }, e.attr), i(e.child))
                }))
            }

            function c(e) {
                return function(t) {
                    return n.createElement(d, o({
                        attr: o({}, e.attr)
                    }, t), i(e.child))
                }
            }

            function d(e) {
                var t = function(t) {
                    var r, a = e.attr,
                        s = e.size,
                        i = e.title,
                        c = l(e, ["attr", "size", "title"]),
                        d = s || t.size || "1em";
                    return t.className && (r = t.className), e.className && (r = (r ? r + " " : "") + e.className), n.createElement("svg", o({
                        stroke: "currentColor",
                        fill: "currentColor",
                        strokeWidth: "0"
                    }, t.attr, a, c, {
                        className: r,
                        style: o(o({
                            color: e.color || t.color
                        }, t.style), e.style),
                        height: d,
                        width: d,
                        xmlns: "http://www.w3.org/2000/svg"
                    }), i && n.createElement("title", null, i), e.children)
                };
                return void 0 !== s ? n.createElement(s.Consumer, null, (function(e) {
                    return t(e)
                })) : t(a)
            }
        },
        1742: function(e) {
            e.exports = function() {
                var e = document.getSelection();
                if (!e.rangeCount) return function() {};
                for (var t = document.activeElement, r = [], n = 0; n < e.rangeCount; n++) r.push(e.getRangeAt(n));
                switch (t.tagName.toUpperCase()) {
                    case "INPUT":
                    case "TEXTAREA":
                        t.blur();
                        break;
                    default:
                        t = null
                }
                return e.removeAllRanges(),
                    function() {
                        "Caret" === e.type && e.removeAllRanges(), e.rangeCount || r.forEach((function(t) {
                            e.addRange(t)
                        })), t && t.focus()
                    }
            }
        }
    },
    function(e) {
        e.O(0, [445, 774, 888, 179], (function() {
            return t = 3685, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);
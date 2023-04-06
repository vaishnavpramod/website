(self.webpackChunkextract_css = self.webpackChunkextract_css || []).push([
    [89618], {
        870762: function(d, _, a) {
            "use strict";
            a.r(_);
            var c = a(104439),
                p = a.n(c),
                v = a(279644),
                z = a.n(v);
            YUI.add("squarespace-image-zoom", function(r) {
                r.namespace("Squarespace");
                var u = r.Squarespace.ImageZoom = r.Base.create("image-zoom", r.Base, [], {
                    initializer: function() {
                        !this._shouldInitialize() || !this.get("host") || this._initializeZoom()
                    },
                    destructor: function() {
                        if (!!this._shouldInitialize()) {
                            var e = this.get("zoomedNode");
                            e && e.remove(!0), this.get("host").removeClass(u.CSS_PREFIX).removeClass(u.CSS_PREFIX + "--behavior-" + this.get("behavior")), this.get("dropzone").setStyle("position", "").removeClass(u.CSS_PREFIX + "-dropzone"), this._zoomTriggerEvent && this._zoomTriggerEvent.detach(), this._mouseMoveEvent && this._mouseMoveEvent.detach(), this._mouseOutEvent && this._mouseOutEvent.detach(), this._resizeEvent && this._resizeEvent.detach(), this._zoomTriggerEvent = null, this._mouseMoveEvent = null, this._mouseOutEvent = null, this._resizeEvent = null
                        }
                    },
                    _bindUI: function() {
                        var e = this.get("host");
                        this._zoomTriggerEvent = e.on(this.get("behavior"), this._toggleZoom, this), this._mouseMoveEvent = e.on("mousemove", this._trackMovement, this), this._mouseOutEvent = e.on("mouseout", this._zoomOut, this), this._resizeEvent = r.one(window).on("resize", this._refresh, this)
                    },
                    _shouldInitialize: function() {
                        return !r.UA.mobile && window.Modernizr.csstransforms
                    },
                    _initializeZoom: function() {
                        var e = this.get("host"),
                            n = e.one("img"),
                            s = this.get("dropzone");
                        e.addClass(u.CSS_PREFIX), e.addClass(u.CSS_PREFIX + "--behavior-" + this.get("behavior")), s.addClass(u.CSS_PREFIX + "-dropzone"), s.getStyle("position") === "static" && s.setStyle("position", "relative"), n.getAttribute("src") ? (this._appendZoomedNode(), this._bindUI()) : n.once("load", function() {
                            this._appendZoomedNode(), this._bindUI()
                        }, this)
                    },
                    _appendZoomedNode: function() {
                        var e = this.get("host").one("img"),
                            n = e.getAttribute("data-src");
                        if (!n) return null;
                        var s = e.getAttribute("data-image-dimensions");
                        s || (s = e.get("clientWidth") + "x" + e.get("clientHeight"));
                        var m = e.getAttribute("data-image-focal-point");
                        m || (m = "0.5,0.5");
                        var l = r.Node.create('<div class="' + u.CSS_PREFIX + '-duplicate"><img src="' + n + "?format=" + this._getSquarespaceSizeForWidth() + '" data-image-dimensions="' + s + '" aria-hidden="true" data-image-focal-point="' + m + '"></div>');
                        l.setStyle("transform", "scale(" + this.get("zoom") + ")"), l.one("img").plug(r.Squarespace.Loader2, {
                            load: !0,
                            mode: "fill"
                        }), this.set("zoomedNode", l), this.get("dropzone").append(l)
                    },
                    _refresh: function() {
                        var e = this.get("host").one("img").getAttribute("data-src"),
                            n = this.get("zoomedNode").one("img");
                        n.setAttribute("src", e + "?format=" + this._getSquarespaceSizeForWidth()), n.fire("refresh")
                    },
                    _toggleZoom: function(e) {
                        this.get("_isZoomedIn") ? this._zoomOut() : this._zoomIn(e), e.stopPropagation()
                    },
                    _zoomIn: function(e) {
                        this.get("host").addClass("is-zoomed"), this.set("_isZoomedIn", !0), this._trackMovement(e)
                    },
                    _zoomOut: function() {
                        this.get("host").removeClass("is-zoomed"), this.set("_isZoomedIn", !1)
                    },
                    _trackMovement: function(e) {
                        if (!!this.get("_isZoomedIn")) {
                            var n = Math.max((e.pageX - this.get("host").getX()) / this.get("host").get("clientWidth") * 100, 0),
                                s = Math.max((e.pageY - this.get("host").getY()) / this.get("host").get("clientHeight") * 100, 0);
                            this.get("zoomedNode").setStyle("transformOrigin", n + "% " + s + "%")
                        }
                    },
                    _getSquarespaceSizeForWidth: function() {
                        var e = this.get("host").one("img").get("clientWidth");
                        return c.getSquarespaceSizeForWidth(e * this.get("zoom"))
                    }
                }, {
                    CSS_PREFIX: "sqs-image-zoom",
                    ATTRS: {
                        host: {
                            value: null,
                            validator: function(e) {
                                var n = r.one(e);
                                return r.instanceOf(n, r.Node) && n.one("img") && n.all("img").size() < 2
                            },
                            writeOnce: !0
                        },
                        dropzone: {
                            valueFn: function() {
                                return this.get("host")
                            },
                            validator: function(e) {
                                return r.instanceOf(r.one(e), r.Node)
                            },
                            writeOnce: !0
                        },
                        behavior: {
                            value: "hover",
                            validator: function(e) {
                                return !(e !== "hover" && e !== "click")
                            },
                            writeOnce: !0
                        },
                        zoom: {
                            value: 1.5,
                            validator: function(e) {
                                return typeof e != "number" || e <= 1 || e > 5, !0
                            },
                            writeOnce: !0
                        },
                        _isZoomedIn: {
                            value: !1
                        }
                    }
                })
            }, "1.0", {
                requires: ["base", "event", "node", "squarespace-image-loader", "yui-base"]
            })
        },
        877367: function(d, _, a) {
            "use strict";
            var c = a(870762)
        },
        279644: function(d) {
            d.exports = {}
        },
        104439: function(d, _) {
            "use strict";
            Object.defineProperty(_, "__esModule", {
                value: !0
            });

            function a(t, o) {
                for (var i in o) Object.defineProperty(t, i, {
                    enumerable: !0,
                    get: o[i]
                })
            }
            a(_, {
                getWidthForHeight: function() {
                    return e
                },
                getHeightForWidth: function() {
                    return n
                },
                getDimensionsFromNode: function() {
                    return s
                },
                getSquarespaceSizeForWidth: function() {
                    return m
                },
                getIconUrl: function() {
                    return l
                }
            });

            function c(t, o) {
                (o == null || o > t.length) && (o = t.length);
                for (var i = 0, h = new Array(o); i < o; i++) h[i] = t[i];
                return h
            }

            function p(t) {
                if (Array.isArray(t)) return t
            }

            function v(t, o) {
                var i = t == null ? null : typeof Symbol != "undefined" && t[Symbol.iterator] || t["@@iterator"];
                if (i != null) {
                    var h = [],
                        f = !0,
                        g = !1,
                        b, S;
                    try {
                        for (i = i.call(t); !(f = (b = i.next()).done) && (h.push(b.value), !(o && h.length === o)); f = !0);
                    } catch (E) {
                        g = !0, S = E
                    } finally {
                        try {
                            !f && i.return != null && i.return()
                        } finally {
                            if (g) throw S
                        }
                    }
                    return h
                }
            }

            function z() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function r(t, o) {
                return p(t) || v(t, o) || u(t, o) || z()
            }

            function u(t, o) {
                if (!!t) {
                    if (typeof t == "string") return c(t, o);
                    var i = Object.prototype.toString.call(t).slice(8, -1);
                    if (i === "Object" && t.constructor && (i = t.constructor.name), i === "Map" || i === "Set") return Array.from(i);
                    if (i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return c(t, o)
                }
            }

            function e(t, o, i) {
                return t / o * i
            }

            function n(t, o, i) {
                return o / t * i
            }

            function s(t) {
                var o = t.getAttribute("data-image-dimensions");
                if (typeof o == "string") {
                    var i = r(o.split("x").map(function(g) {
                            return Number(g)
                        }), 2),
                        h = i[0],
                        f = i[1];
                    return {
                        width: h,
                        height: f
                    }
                }
                return {
                    width: null,
                    height: null
                }
            }

            function m(t) {
                return window.devicePixelRatio && (t *= window.devicePixelRatio), t > 1500 ? "2500w" : t > 1e3 ? "1500w" : t > 750 ? "1000w" : t > 500 ? "750w" : t > 300 ? "500w" : t > 100 ? "300w" : "100w"
            }

            function l(t, o, i) {
                return "/universal/images-v6/icons/icon-".concat(t, "-").concat(o, "-").concat(i, ".png")
            }
        }
    },
    function(d) {
        var _ = function(c) {
                return d(d.s = c)
            },
            a = _(877367)
    }
]);
//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/image-zoom-7e9225cbd538867aaeeef-min.en-US.js.map
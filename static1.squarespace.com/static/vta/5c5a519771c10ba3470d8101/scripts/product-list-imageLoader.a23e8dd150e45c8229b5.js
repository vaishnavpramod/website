"use strict";
(self.webpackChunknew_bedford_framework = self.webpackChunknew_bedford_framework || []).push([
    [9639], {
        38615: function(e, n, o) {
            o.r(n);
            o(92338);
            var a = o(92651),
                r = o(6370),
                t = o(1678);
            n.default = function(e) {
                var n, o = function() {
                        a.Z.loadAllLazy({
                            load: !0,
                            mode: "cover",
                            useAdvancedPositioning: !0
                        }, e)
                    },
                    d = function n() {
                        var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        e.classList.add("is-loaded");
                        var a = o.target;
                        a && a.removeEventListener("load", n)
                    };
                return (n = e.querySelectorAll("img")).length <= 0 && d(), n.forEach((function(e) {
                    e.addEventListener("load", d)
                })), o(), r.Z.on(o, t.FY), {
                    loadImages: o,
                    destroy: function() {
                        r.Z.off(o)
                    }
                }
            }
        }
    }
]);
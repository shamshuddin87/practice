/*
 Highcharts JS v5.0.10 (2017-03-31)

 (c) 2009-2016 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(L, a) {
    "object" === typeof module && module.exports ? module.exports = L.document ? a(L) : a : L.Highcharts = a(L)
})("undefined" !== typeof window ? window : this, function(L) {
    L = function() {
        var a = window,
            B = a.document,
            A = a.navigator && a.navigator.userAgent || "",
            H = B && B.createElementNS && !!B.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
            G = /(edge|msie|trident)/i.test(A) && !window.opera,
            r = !H,
            f = /Firefox/.test(A),
            l = f && 4 > parseInt(A.split("Firefox/")[1], 10);
        return a.Highcharts ? a.Highcharts.error(16, !0) : {
            product: "Highcharts",
            version: "5.0.10",
            deg2rad: 2 * Math.PI / 360,
            doc: B,
            hasBidiBug: l,
            hasTouch: B && void 0 !== B.documentElement.ontouchstart,
            isMS: G,
            isWebKit: /AppleWebKit/.test(A),
            isFirefox: f,
            isTouchDevice: /(Mobile|Android|Windows Phone)/.test(A),
            SVG_NS: "http://www.w3.org/2000/svg",
            chartCount: 0,
            seriesTypes: {},
            symbolSizes: {},
            svg: H,
            vml: r,
            win: a,
            charts: [],
            marginNames: ["plotTop", "marginRight", "marginBottom", "plotLeft"],
            noop: function() {}
        }
    }();
    (function(a) {
        var B = [],
            A = a.charts,
            H = a.doc,
            G = a.win;
        a.error = function(r, f) {
            r = a.isNumber(r) ? "Highcharts error #" +
                r + ": www.highcharts.com/errors/" + r : r;
            if (f) throw Error(r);
            G.console && console.log(r)
        };
        a.Fx = function(a, f, l) {
            this.options = f;
            this.elem = a;
            this.prop = l
        };
        a.Fx.prototype = {
            dSetter: function() {
                var a = this.paths[0],
                    f = this.paths[1],
                    l = [],
                    q = this.now,
                    k = a.length,
                    u;
                if (1 === q) l = this.toD;
                else if (k === f.length && 1 > q)
                    for (; k--;) u = parseFloat(a[k]), l[k] = isNaN(u) ? a[k] : q * parseFloat(f[k] - u) + u;
                else l = f;
                this.elem.attr("d", l, null, !0)
            },
            update: function() {
                var a = this.elem,
                    f = this.prop,
                    l = this.now,
                    q = this.options.step;
                if (this[f + "Setter"]) this[f +
                    "Setter"]();
                else a.attr ? a.element && a.attr(f, l, null, !0) : a.style[f] = l + this.unit;
                q && q.call(a, l, this)
            },
            run: function(a, f, l) {
                var r = this,
                    k = function(a) {
                        return k.stopped ? !1 : r.step(a)
                    },
                    u;
                this.startTime = +new Date;
                this.start = a;
                this.end = f;
                this.unit = l;
                this.now = this.start;
                this.pos = 0;
                k.elem = this.elem;
                k.prop = this.prop;
                k() && 1 === B.push(k) && (k.timerId = setInterval(function() {
                    for (u = 0; u < B.length; u++) B[u]() || B.splice(u--, 1);
                    B.length || clearInterval(k.timerId)
                }, 13))
            },
            step: function(a) {
                var f = +new Date,
                    r, q = this.options;
                r = this.elem;
                var k = q.complete,
                    u = q.duration,
                    d = q.curAnim,
                    c;
                if (r.attr && !r.element) r = !1;
                else if (a || f >= u + this.startTime) {
                    this.now = this.end;
                    this.pos = 1;
                    this.update();
                    a = d[this.prop] = !0;
                    for (c in d) !0 !== d[c] && (a = !1);
                    a && k && k.call(r);
                    r = !1
                } else this.pos = q.easing((f - this.startTime) / u), this.now = this.start + (this.end - this.start) * this.pos, this.update(), r = !0;
                return r
            },
            initPath: function(r, f, l) {
                function q(a) {
                    var b, e;
                    for (t = a.length; t--;) b = "M" === a[t] || "L" === a[t], e = /[a-zA-Z]/.test(a[t + 3]), b && e && a.splice(t + 1, 0, a[t + 1], a[t + 2], a[t + 1], a[t +
                        2])
                }

                function k(a, e) {
                    for (; a.length < p;) {
                        a[0] = e[p - a.length];
                        var h = a.slice(0, b);
                        [].splice.apply(a, [0, 0].concat(h));
                        D && (h = a.slice(a.length - b), [].splice.apply(a, [a.length, 0].concat(h)), t--)
                    }
                    a[0] = "M"
                }

                function u(a, e) {
                    for (var c = (p - a.length) / b; 0 < c && c--;) h = a.slice().splice(a.length / w - b, b * w), h[0] = e[p - b - c * b], z && (h[b - 6] = h[b - 2], h[b - 5] = h[b - 1]), [].splice.apply(a, [a.length / w, 0].concat(h)), D && c--
                }
                f = f || "";
                var d, c = r.startX,
                    n = r.endX,
                    z = -1 < f.indexOf("C"),
                    b = z ? 7 : 3,
                    p, h, t;
                f = f.split(" ");
                l = l.slice();
                var D = r.isArea,
                    w = D ? 2 : 1,
                    e;
                z && (q(f), q(l));
                if (c && n) {
                    for (t = 0; t < c.length; t++)
                        if (c[t] === n[0]) {
                            d = t;
                            break
                        } else if (c[0] === n[n.length - c.length + t]) {
                        d = t;
                        e = !0;
                        break
                    }
                    void 0 === d && (f = [])
                }
                f.length && a.isNumber(d) && (p = l.length + d * w * b, e ? (k(f, l), u(l, f)) : (k(l, f), u(f, l)));
                return [f, l]
            }
        };
        a.extend = function(a, f) {
            var r;
            a || (a = {});
            for (r in f) a[r] = f[r];
            return a
        };
        a.merge = function() {
            var r, f = arguments,
                l, q = {},
                k = function(u, d) {
                    var c, n;
                    "object" !== typeof u && (u = {});
                    for (n in d) d.hasOwnProperty(n) && (c = d[n], a.isObject(c, !0) && "renderTo" !== n && "number" !== typeof c.nodeType ?
                        u[n] = k(u[n] || {}, c) : u[n] = d[n]);
                    return u
                };
            !0 === f[0] && (q = f[1], f = Array.prototype.slice.call(f, 2));
            l = f.length;
            for (r = 0; r < l; r++) q = k(q, f[r]);
            return q
        };
        a.pInt = function(a, f) {
            return parseInt(a, f || 10)
        };
        a.isString = function(a) {
            return "string" === typeof a
        };
        a.isArray = function(a) {
            a = Object.prototype.toString.call(a);
            return "[object Array]" === a || "[object Array Iterator]" === a
        };
        a.isObject = function(r, f) {
            return r && "object" === typeof r && (!f || !a.isArray(r))
        };
        a.isNumber = function(a) {
            return "number" === typeof a && !isNaN(a)
        };
        a.erase =
            function(a, f) {
                for (var r = a.length; r--;)
                    if (a[r] === f) {
                        a.splice(r, 1);
                        break
                    }
            };
        a.defined = function(a) {
            return void 0 !== a && null !== a
        };
        a.attr = function(r, f, l) {
            var q, k;
            if (a.isString(f)) a.defined(l) ? r.setAttribute(f, l) : r && r.getAttribute && (k = r.getAttribute(f));
            else if (a.defined(f) && a.isObject(f))
                for (q in f) r.setAttribute(q, f[q]);
            return k
        };
        a.splat = function(r) {
            return a.isArray(r) ? r : [r]
        };
        a.syncTimeout = function(a, f, l) {
            if (f) return setTimeout(a, f, l);
            a.call(0, l)
        };
        a.pick = function() {
            var a = arguments,
                f, l, q = a.length;
            for (f =
                0; f < q; f++)
                if (l = a[f], void 0 !== l && null !== l) return l
        };
        a.css = function(r, f) {
            a.isMS && !a.svg && f && void 0 !== f.opacity && (f.filter = "alpha(opacity\x3d" + 100 * f.opacity + ")");
            a.extend(r.style, f)
        };
        a.createElement = function(r, f, l, q, k) {
            r = H.createElement(r);
            var u = a.css;
            f && a.extend(r, f);
            k && u(r, {
                padding: 0,
                border: "none",
                margin: 0
            });
            l && u(r, l);
            q && q.appendChild(r);
            return r
        };
        a.extendClass = function(r, f) {
            var l = function() {};
            l.prototype = new r;
            a.extend(l.prototype, f);
            return l
        };
        a.pad = function(a, f, l) {
            return Array((f || 2) + 1 - String(a).length).join(l ||
                0) + a
        };
        a.relativeLength = function(a, f) {
            return /%$/.test(a) ? f * parseFloat(a) / 100 : parseFloat(a)
        };
        a.wrap = function(a, f, l) {
            var q = a[f];
            a[f] = function() {
                var a = Array.prototype.slice.call(arguments),
                    u = arguments,
                    d = this;
                d.proceed = function() {
                    q.apply(d, arguments.length ? arguments : u)
                };
                a.unshift(q);
                a = l.apply(this, a);
                d.proceed = null;
                return a
            }
        };
        a.getTZOffset = function(r) {
            var f = a.Date;
            return 6E4 * (f.hcGetTimezoneOffset && f.hcGetTimezoneOffset(r) || f.hcTimezoneOffset || 0)
        };
        a.dateFormat = function(r, f, l) {
            if (!a.defined(f) || isNaN(f)) return a.defaultOptions.lang.invalidDate ||
                "";
            r = a.pick(r, "%Y-%m-%d %H:%M:%S");
            var q = a.Date,
                k = new q(f - a.getTZOffset(f)),
                u, d = k[q.hcGetHours](),
                c = k[q.hcGetDay](),
                n = k[q.hcGetDate](),
                z = k[q.hcGetMonth](),
                b = k[q.hcGetFullYear](),
                p = a.defaultOptions.lang,
                h = p.weekdays,
                t = p.shortWeekdays,
                D = a.pad,
                q = a.extend({
                    a: t ? t[c] : h[c].substr(0, 3),
                    A: h[c],
                    d: D(n),
                    e: D(n, 2, " "),
                    w: c,
                    b: p.shortMonths[z],
                    B: p.months[z],
                    m: D(z + 1),
                    y: b.toString().substr(2, 2),
                    Y: b,
                    H: D(d),
                    k: d,
                    I: D(d % 12 || 12),
                    l: d % 12 || 12,
                    M: D(k[q.hcGetMinutes]()),
                    p: 12 > d ? "AM" : "PM",
                    P: 12 > d ? "am" : "pm",
                    S: D(k.getSeconds()),
                    L: D(Math.round(f %
                        1E3), 3)
                }, a.dateFormats);
            for (u in q)
                for (; - 1 !== r.indexOf("%" + u);) r = r.replace("%" + u, "function" === typeof q[u] ? q[u](f) : q[u]);
            return l ? r.substr(0, 1).toUpperCase() + r.substr(1) : r
        };
        a.formatSingle = function(r, f) {
            var l = /\.([0-9])/,
                q = a.defaultOptions.lang;
            /f$/.test(r) ? (l = (l = r.match(l)) ? l[1] : -1, null !== f && (f = a.numberFormat(f, l, q.decimalPoint, -1 < r.indexOf(",") ? q.thousandsSep : ""))) : f = a.dateFormat(r, f);
            return f
        };
        a.format = function(r, f) {
            for (var l = "{", q = !1, k, u, d, c, n = [], z; r;) {
                l = r.indexOf(l);
                if (-1 === l) break;
                k = r.slice(0,
                    l);
                if (q) {
                    k = k.split(":");
                    u = k.shift().split(".");
                    c = u.length;
                    z = f;
                    for (d = 0; d < c; d++) z = z[u[d]];
                    k.length && (z = a.formatSingle(k.join(":"), z));
                    n.push(z)
                } else n.push(k);
                r = r.slice(l + 1);
                l = (q = !q) ? "}" : "{"
            }
            n.push(r);
            return n.join("")
        };
        a.getMagnitude = function(a) {
            return Math.pow(10, Math.floor(Math.log(a) / Math.LN10))
        };
        a.normalizeTickInterval = function(r, f, l, q, k) {
            var u, d = r;
            l = a.pick(l, 1);
            u = r / l;
            f || (f = k ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10], !1 === q && (1 === l ? f = a.grep(f, function(a) {
                return 0 === a % 1
            }) : .1 >= l && (f = [1 / l])));
            for (q = 0; q < f.length && !(d = f[q], k && d * l >= r || !k && u <= (f[q] + (f[q + 1] || f[q])) / 2); q++);
            return d = a.correctFloat(d * l, -Math.round(Math.log(.001) / Math.LN10))
        };
        a.stableSort = function(a, f) {
            var l = a.length,
                q, k;
            for (k = 0; k < l; k++) a[k].safeI = k;
            a.sort(function(a, d) {
                q = f(a, d);
                return 0 === q ? a.safeI - d.safeI : q
            });
            for (k = 0; k < l; k++) delete a[k].safeI
        };
        a.arrayMin = function(a) {
            for (var f = a.length, l = a[0]; f--;) a[f] < l && (l = a[f]);
            return l
        };
        a.arrayMax = function(a) {
            for (var f = a.length, l = a[0]; f--;) a[f] > l && (l = a[f]);
            return l
        };
        a.destroyObjectProperties =
            function(a, f) {
                for (var l in a) a[l] && a[l] !== f && a[l].destroy && a[l].destroy(), delete a[l]
            };
        a.discardElement = function(r) {
            var f = a.garbageBin;
            f || (f = a.createElement("div"));
            r && f.appendChild(r);
            f.innerHTML = ""
        };
        a.correctFloat = function(a, f) {
            return parseFloat(a.toPrecision(f || 14))
        };
        a.setAnimation = function(r, f) {
            f.renderer.globalAnimation = a.pick(r, f.options.chart.animation, !0)
        };
        a.animObject = function(r) {
            return a.isObject(r) ? a.merge(r) : {
                duration: r ? 500 : 0
            }
        };
        a.timeUnits = {
            millisecond: 1,
            second: 1E3,
            minute: 6E4,
            hour: 36E5,
            day: 864E5,
            week: 6048E5,
            month: 24192E5,
            year: 314496E5
        };
        a.numberFormat = function(r, f, l, q) {
            r = +r || 0;
            f = +f;
            var k = a.defaultOptions.lang,
                u = (r.toString().split(".")[1] || "").length,
                d, c; - 1 === f ? f = Math.min(u, 20) : a.isNumber(f) || (f = 2);
            c = (Math.abs(r) + Math.pow(10, -Math.max(f, u) - 1)).toFixed(f);
            u = String(a.pInt(c));
            d = 3 < u.length ? u.length % 3 : 0;
            l = a.pick(l, k.decimalPoint);
            q = a.pick(q, k.thousandsSep);
            r = (0 > r ? "-" : "") + (d ? u.substr(0, d) + q : "");
            r += u.substr(d).replace(/(\d{3})(?=\d)/g, "$1" + q);
            f && (r += l + c.slice(-f));
            return r
        };
        Math.easeInOutSine =
            function(a) {
                return -.5 * (Math.cos(Math.PI * a) - 1)
            };
        a.getStyle = function(r, f) {
            return "width" === f ? Math.min(r.offsetWidth, r.scrollWidth) - a.getStyle(r, "padding-left") - a.getStyle(r, "padding-right") : "height" === f ? Math.min(r.offsetHeight, r.scrollHeight) - a.getStyle(r, "padding-top") - a.getStyle(r, "padding-bottom") : (r = G.getComputedStyle(r, void 0)) && a.pInt(r.getPropertyValue(f))
        };
        a.inArray = function(a, f) {
            return f.indexOf ? f.indexOf(a) : [].indexOf.call(f, a)
        };
        a.grep = function(a, f) {
            return [].filter.call(a, f)
        };
        a.find = function(a,
            f) {
            return [].find.call(a, f)
        };
        a.map = function(a, f) {
            for (var l = [], q = 0, k = a.length; q < k; q++) l[q] = f.call(a[q], a[q], q, a);
            return l
        };
        a.offset = function(a) {
            var f = H.documentElement;
            a = a.getBoundingClientRect();
            return {
                top: a.top + (G.pageYOffset || f.scrollTop) - (f.clientTop || 0),
                left: a.left + (G.pageXOffset || f.scrollLeft) - (f.clientLeft || 0)
            }
        };
        a.stop = function(a, f) {
            for (var l = B.length; l--;) B[l].elem !== a || f && f !== B[l].prop || (B[l].stopped = !0)
        };
        a.each = function(a, f, l) {
            return Array.prototype.forEach.call(a, f, l)
        };
        a.addEvent = function(r,
            f, l) {
            function q(a) {
                a.target = a.srcElement || G;
                l.call(r, a)
            }
            var k = r.hcEvents = r.hcEvents || {};
            r.addEventListener ? r.addEventListener(f, l, !1) : r.attachEvent && (r.hcEventsIE || (r.hcEventsIE = {}), r.hcEventsIE[l.toString()] = q, r.attachEvent("on" + f, q));
            k[f] || (k[f] = []);
            k[f].push(l);
            return function() {
                a.removeEvent(r, f, l)
            }
        };
        a.removeEvent = function(r, f, l) {
            function q(a, c) {
                r.removeEventListener ? r.removeEventListener(a, c, !1) : r.attachEvent && (c = r.hcEventsIE[c.toString()], r.detachEvent("on" + a, c))
            }

            function k() {
                var a, c;
                if (r.nodeName)
                    for (c in f ?
                        (a = {}, a[f] = !0) : a = d, a)
                        if (d[c])
                            for (a = d[c].length; a--;) q(c, d[c][a])
            }
            var u, d = r.hcEvents,
                c;
            d && (f ? (u = d[f] || [], l ? (c = a.inArray(l, u), -1 < c && (u.splice(c, 1), d[f] = u), q(f, l)) : (k(), d[f] = [])) : (k(), r.hcEvents = {}))
        };
        a.fireEvent = function(r, f, l, q) {
            var k;
            k = r.hcEvents;
            var u, d;
            l = l || {};
            if (H.createEvent && (r.dispatchEvent || r.fireEvent)) k = H.createEvent("Events"), k.initEvent(f, !0, !0), a.extend(k, l), r.dispatchEvent ? r.dispatchEvent(k) : r.fireEvent(f, k);
            else if (k)
                for (k = k[f] || [], u = k.length, l.target || a.extend(l, {
                        preventDefault: function() {
                            l.defaultPrevented = !0
                        },
                        target: r,
                        type: f
                    }), f = 0; f < u; f++)(d = k[f]) && !1 === d.call(r, l) && l.preventDefault();
            q && !l.defaultPrevented && q(l)
        };
        a.animate = function(r, f, l) {
            var q, k = "",
                u, d, c;
            a.isObject(l) || (q = arguments, l = {
                duration: q[2],
                easing: q[3],
                complete: q[4]
            });
            a.isNumber(l.duration) || (l.duration = 400);
            l.easing = "function" === typeof l.easing ? l.easing : Math[l.easing] || Math.easeInOutSine;
            l.curAnim = a.merge(f);
            for (c in f) a.stop(r, c), d = new a.Fx(r, l, c), u = null, "d" === c ? (d.paths = d.initPath(r, r.d, f.d), d.toD = f.d, q = 0, u = 1) : r.attr ? q = r.attr(c) : (q = parseFloat(a.getStyle(r,
                c)) || 0, "opacity" !== c && (k = "px")), u || (u = f[c]), u && u.match && u.match("px") && (u = u.replace(/px/g, "")), d.run(q, u, k)
        };
        a.seriesType = function(r, f, l, q, k) {
            var u = a.getOptions(),
                d = a.seriesTypes;
            u.plotOptions[r] = a.merge(u.plotOptions[f], l);
            d[r] = a.extendClass(d[f] || function() {}, q);
            d[r].prototype.type = r;
            k && (d[r].prototype.pointClass = a.extendClass(a.Point, k));
            return d[r]
        };
        a.uniqueKey = function() {
            var a = Math.random().toString(36).substring(2, 9),
                f = 0;
            return function() {
                return "highcharts-" + a + "-" + f++
            }
        }();
        G.jQuery && (G.jQuery.fn.highcharts =
            function() {
                var r = [].slice.call(arguments);
                if (this[0]) return r[0] ? (new(a[a.isString(r[0]) ? r.shift() : "Chart"])(this[0], r[0], r[1]), this) : A[a.attr(this[0], "data-highcharts-chart")]
            });
        H && !H.defaultView && (a.getStyle = function(r, f) {
            var l = {
                width: "clientWidth",
                height: "clientHeight"
            }[f];
            if (r.style[f]) return a.pInt(r.style[f]);
            "opacity" === f && (f = "filter");
            if (l) return r.style.zoom = 1, Math.max(r[l] - 2 * a.getStyle(r, "padding"), 0);
            r = r.currentStyle[f.replace(/\-(\w)/g, function(a, k) {
                return k.toUpperCase()
            })];
            "filter" ===
            f && (r = r.replace(/alpha\(opacity=([0-9]+)\)/, function(a, k) {
                return k / 100
            }));
            return "" === r ? 1 : a.pInt(r)
        });
        Array.prototype.forEach || (a.each = function(a, f, l) {
            for (var q = 0, k = a.length; q < k; q++)
                if (!1 === f.call(l, a[q], q, a)) return q
        });
        Array.prototype.indexOf || (a.inArray = function(a, f) {
            var l, q = 0;
            if (f)
                for (l = f.length; q < l; q++)
                    if (f[q] === a) return q;
            return -1
        });
        Array.prototype.filter || (a.grep = function(a, f) {
            for (var l = [], q = 0, k = a.length; q < k; q++) f(a[q], q) && l.push(a[q]);
            return l
        });
        Array.prototype.find || (a.find = function(a, f) {
            var l,
                q = a.length;
            for (l = 0; l < q; l++)
                if (f(a[l], l)) return a[l]
        })
    })(L);
    (function(a) {
        var B = a.each,
            A = a.isNumber,
            H = a.map,
            G = a.merge,
            r = a.pInt;
        a.Color = function(f) {
            if (!(this instanceof a.Color)) return new a.Color(f);
            this.init(f)
        };
        a.Color.prototype = {
            parsers: [{
                regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
                parse: function(a) {
                    return [r(a[1]), r(a[2]), r(a[3]), parseFloat(a[4], 10)]
                }
            }, {
                regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
                parse: function(a) {
                    return [r(a[1]),
                        r(a[2]), r(a[3]), 1
                    ]
                }
            }],
            names: {
                white: "#ffffff",
                black: "#000000"
            },
            init: function(f) {
                var l, q, k, u;
                if ((this.input = f = this.names[f && f.toLowerCase ? f.toLowerCase() : ""] || f) && f.stops) this.stops = H(f.stops, function(d) {
                    return new a.Color(d[1])
                });
                else if (f && "#" === f[0] && (l = f.length, f = parseInt(f.substr(1), 16), 7 === l ? q = [(f & 16711680) >> 16, (f & 65280) >> 8, f & 255, 1] : 4 === l && (q = [(f & 3840) >> 4 | (f & 3840) >> 8, (f & 240) >> 4 | f & 240, (f & 15) << 4 | f & 15, 1])), !q)
                    for (k = this.parsers.length; k-- && !q;) u = this.parsers[k], (l = u.regex.exec(f)) && (q = u.parse(l));
                this.rgba = q || []
            },
            get: function(a) {
                var f = this.input,
                    q = this.rgba,
                    k;
                this.stops ? (k = G(f), k.stops = [].concat(k.stops), B(this.stops, function(u, d) {
                    k.stops[d] = [k.stops[d][0], u.get(a)]
                })) : k = q && A(q[0]) ? "rgb" === a || !a && 1 === q[3] ? "rgb(" + q[0] + "," + q[1] + "," + q[2] + ")" : "a" === a ? q[3] : "rgba(" + q.join(",") + ")" : f;
                return k
            },
            brighten: function(a) {
                var f, q = this.rgba;
                if (this.stops) B(this.stops, function(k) {
                    k.brighten(a)
                });
                else if (A(a) && 0 !== a)
                    for (f = 0; 3 > f; f++) q[f] += r(255 * a), 0 > q[f] && (q[f] = 0), 255 < q[f] && (q[f] = 255);
                return this
            },
            setOpacity: function(a) {
                this.rgba[3] =
                    a;
                return this
            }
        };
        a.color = function(f) {
            return new a.Color(f)
        }
    })(L);
    (function(a) {
        var B, A, H = a.addEvent,
            G = a.animate,
            r = a.attr,
            f = a.charts,
            l = a.color,
            q = a.css,
            k = a.createElement,
            u = a.defined,
            d = a.deg2rad,
            c = a.destroyObjectProperties,
            n = a.doc,
            z = a.each,
            b = a.extend,
            p = a.erase,
            h = a.grep,
            t = a.hasTouch,
            D = a.inArray,
            w = a.isArray,
            e = a.isFirefox,
            x = a.isMS,
            C = a.isObject,
            E = a.isString,
            m = a.isWebKit,
            y = a.merge,
            I = a.noop,
            K = a.pick,
            J = a.pInt,
            g = a.removeEvent,
            F = a.stop,
            Q = a.svg,
            N = a.SVG_NS,
            P = a.symbolSizes,
            O = a.win;
        B = a.SVGElement = function() {
            return this
        };
        B.prototype = {
            opacity: 1,
            SVG_NS: N,
            textProps: "direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline".split(" "),
            init: function(a, g) {
                this.element = "span" === g ? k(g) : n.createElementNS(this.SVG_NS, g);
                this.renderer = a
            },
            animate: function(v, g, b) {
                g = a.animObject(K(g, this.renderer.globalAnimation, !0));
                0 !== g.duration ? (b && (g.complete = b), G(this, v, g)) : (this.attr(v, null, b), g.step && g.step.call(this));
                return this
            },
            colorGradient: function(v, g, b) {
                var e = this.renderer,
                    h, c, m, M, F, x, d, C, t, p, n, k = [],
                    R;
                v.radialGradient ? c = "radialGradient" : v.linearGradient && (c = "linearGradient");
                if (c) {
                    m = v[c];
                    F = e.gradients;
                    d = v.stops;
                    p = b.radialReference;
                    w(m) && (v[c] = m = {
                        x1: m[0],
                        y1: m[1],
                        x2: m[2],
                        y2: m[3],
                        gradientUnits: "userSpaceOnUse"
                    });
                    "radialGradient" === c && p && !u(m.gradientUnits) && (M = m, m = y(m, e.getRadialAttr(p, M), {
                        gradientUnits: "userSpaceOnUse"
                    }));
                    for (n in m) "id" !== n && k.push(n, m[n]);
                    for (n in d) k.push(d[n]);
                    k = k.join(",");
                    F[k] ? p = F[k].attr("id") : (m.id = p = a.uniqueKey(), F[k] = x = e.createElement(c).attr(m).add(e.defs),
                        x.radAttr = M, x.stops = [], z(d, function(v) {
                            0 === v[1].indexOf("rgba") ? (h = a.color(v[1]), C = h.get("rgb"), t = h.get("a")) : (C = v[1], t = 1);
                            v = e.createElement("stop").attr({
                                offset: v[0],
                                "stop-color": C,
                                "stop-opacity": t
                            }).add(x);
                            x.stops.push(v)
                        }));
                    R = "url(" + e.url + "#" + p + ")";
                    b.setAttribute(g, R);
                    b.gradient = k;
                    v.toString = function() {
                        return R
                    }
                }
            },
            applyTextOutline: function(v) {
                var g = this.element,
                    b, e, c, h, m; - 1 !== v.indexOf("contrast") && (v = v.replace(/contrast/g, this.renderer.getContrast(g.style.fill)));
                v = v.split(" ");
                e = v[v.length - 1];
                if ((c = v[0]) && "none" !== c && a.svg) {
                    this.fakeTS = !0;
                    v = [].slice.call(g.getElementsByTagName("tspan"));
                    this.ySetter = this.xSetter;
                    c = c.replace(/(^[\d\.]+)(.*?)$/g, function(a, v, g) {
                        return 2 * v + g
                    });
                    for (m = v.length; m--;) b = v[m], "highcharts-text-outline" === b.getAttribute("class") && p(v, g.removeChild(b));
                    h = g.firstChild;
                    z(v, function(a, v) {
                        0 === v && (a.setAttribute("x", g.getAttribute("x")), v = g.getAttribute("y"), a.setAttribute("y", v || 0), null === v && g.setAttribute("y", 0));
                        a = a.cloneNode(1);
                        r(a, {
                            "class": "highcharts-text-outline",
                            fill: e,
                            stroke: e,
                            "stroke-width": c,
                            "stroke-linejoin": "round"
                        });
                        g.insertBefore(a, h)
                    })
                }
            },
            attr: function(a, g, b, e) {
                var v, c = this.element,
                    h, m = this,
                    M;
                "string" === typeof a && void 0 !== g && (v = a, a = {}, a[v] = g);
                if ("string" === typeof a) m = (this[a + "Getter"] || this._defaultGetter).call(this, a, c);
                else {
                    for (v in a) g = a[v], M = !1, e || F(this, v), this.symbolName && /^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)$/.test(v) && (h || (this.symbolAttr(a), h = !0), M = !0), !this.rotation || "x" !== v && "y" !== v || (this.doTransform = !0), M || (M = this[v +
                        "Setter"] || this._defaultSetter, M.call(this, g, v, c), this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(v) && this.updateShadows(v, g, M));
                    this.doTransform && (this.updateTransform(), this.doTransform = !1)
                }
                b && b();
                return m
            },
            updateShadows: function(a, g, b) {
                for (var v = this.shadows, e = v.length; e--;) b.call(v[e], "height" === a ? Math.max(g - (v[e].cutHeight || 0), 0) : "d" === a ? this.d : g, a, v[e])
            },
            addClass: function(a, g) {
                var v = this.attr("class") || ""; - 1 === v.indexOf(a) && (g || (a = (v + (v ? " " : "") + a).replace("  ", " ")),
                    this.attr("class", a));
                return this
            },
            hasClass: function(a) {
                return -1 !== r(this.element, "class").indexOf(a)
            },
            removeClass: function(a) {
                r(this.element, "class", (r(this.element, "class") || "").replace(a, ""));
                return this
            },
            symbolAttr: function(a) {
                var v = this;
                z("x y r start end width height innerR anchorX anchorY".split(" "), function(g) {
                    v[g] = K(a[g], v[g])
                });
                v.attr({
                    d: v.renderer.symbols[v.symbolName](v.x, v.y, v.width, v.height, v)
                })
            },
            clip: function(a) {
                return this.attr("clip-path", a ? "url(" + this.renderer.url + "#" + a.id + ")" :
                    "none")
            },
            crisp: function(a, g) {
                var v, b = {},
                    e;
                g = g || a.strokeWidth || 0;
                e = Math.round(g) % 2 / 2;
                a.x = Math.floor(a.x || this.x || 0) + e;
                a.y = Math.floor(a.y || this.y || 0) + e;
                a.width = Math.floor((a.width || this.width || 0) - 2 * e);
                a.height = Math.floor((a.height || this.height || 0) - 2 * e);
                u(a.strokeWidth) && (a.strokeWidth = g);
                for (v in a) this[v] !== a[v] && (this[v] = b[v] = a[v]);
                return b
            },
            css: function(a) {
                var v = this.styles,
                    g = {},
                    e = this.element,
                    c, h = "",
                    m = !v,
                    F = ["textOutline", "textOverflow", "width"];
                a && a.color && (a.fill = a.color);
                if (v)
                    for (c in a) a[c] !==
                        v[c] && (g[c] = a[c], m = !0);
                if (m) {
                    v && (a = b(v, g));
                    v = this.textWidth = a && a.width && "auto" !== a.width && "text" === e.nodeName.toLowerCase() && J(a.width);
                    this.styles = a;
                    v && !Q && this.renderer.forExport && delete a.width;
                    if (x && !Q) q(this.element, a);
                    else {
                        v = function(a, v) {
                            return "-" + v.toLowerCase()
                        };
                        for (c in a) - 1 === D(c, F) && (h += c.replace(/([A-Z])/g, v) + ":" + a[c] + ";");
                        h && r(e, "style", h)
                    }
                    this.added && ("text" === this.element.nodeName && this.renderer.buildText(this), a && a.textOutline && this.applyTextOutline(a.textOutline))
                }
                return this
            },
            strokeWidth: function() {
                return this["stroke-width"] ||
                    0
            },
            on: function(a, g) {
                var v = this,
                    e = v.element;
                t && "click" === a ? (e.ontouchstart = function(a) {
                    v.touchEventFired = Date.now();
                    a.preventDefault();
                    g.call(e, a)
                }, e.onclick = function(a) {
                    (-1 === O.navigator.userAgent.indexOf("Android") || 1100 < Date.now() - (v.touchEventFired || 0)) && g.call(e, a)
                }) : e["on" + a] = g;
                return this
            },
            setRadialReference: function(a) {
                var v = this.renderer.gradients[this.element.gradient];
                this.element.radialReference = a;
                v && v.radAttr && v.animate(this.renderer.getRadialAttr(a, v.radAttr));
                return this
            },
            translate: function(a,
                g) {
                return this.attr({
                    translateX: a,
                    translateY: g
                })
            },
            invert: function(a) {
                this.inverted = a;
                this.updateTransform();
                return this
            },
            updateTransform: function() {
                var a = this.translateX || 0,
                    g = this.translateY || 0,
                    e = this.scaleX,
                    b = this.scaleY,
                    c = this.inverted,
                    h = this.rotation,
                    m = this.element;
                c && (a += this.width, g += this.height);
                a = ["translate(" + a + "," + g + ")"];
                c ? a.push("rotate(90) scale(-1,1)") : h && a.push("rotate(" + h + " " + (m.getAttribute("x") || 0) + " " + (m.getAttribute("y") || 0) + ")");
                (u(e) || u(b)) && a.push("scale(" + K(e, 1) + " " + K(b, 1) + ")");
                a.length && m.setAttribute("transform", a.join(" "))
            },
            toFront: function() {
                var a = this.element;
                a.parentNode.appendChild(a);
                return this
            },
            align: function(a, g, e) {
                var v, b, c, h, m = {};
                b = this.renderer;
                c = b.alignedObjects;
                var F, x;
                if (a) {
                    if (this.alignOptions = a, this.alignByTranslate = g, !e || E(e)) this.alignTo = v = e || "renderer", p(c, this), c.push(this), e = null
                } else a = this.alignOptions, g = this.alignByTranslate, v = this.alignTo;
                e = K(e, b[v], b);
                v = a.align;
                b = a.verticalAlign;
                c = (e.x || 0) + (a.x || 0);
                h = (e.y || 0) + (a.y || 0);
                "right" === v ? F = 1 : "center" ===
                    v && (F = 2);
                F && (c += (e.width - (a.width || 0)) / F);
                m[g ? "translateX" : "x"] = Math.round(c);
                "bottom" === b ? x = 1 : "middle" === b && (x = 2);
                x && (h += (e.height - (a.height || 0)) / x);
                m[g ? "translateY" : "y"] = Math.round(h);
                this[this.placed ? "animate" : "attr"](m);
                this.placed = !0;
                this.alignAttr = m;
                return this
            },
            getBBox: function(a, g) {
                var v, e = this.renderer,
                    c, h = this.element,
                    m = this.styles,
                    F, x = this.textStr,
                    y, M = e.cache,
                    C = e.cacheKeys,
                    t;
                g = K(g, this.rotation);
                c = g * d;
                F = m && m.fontSize;
                void 0 !== x && (t = x.toString(), -1 === t.indexOf("\x3c") && (t = t.replace(/[0-9]/g,
                    "0")), t += ["", g || 0, F, m && m.width, m && m.textOverflow].join());
                t && !a && (v = M[t]);
                if (!v) {
                    if (h.namespaceURI === this.SVG_NS || e.forExport) {
                        try {
                            (y = this.fakeTS && function(a) {
                                z(h.querySelectorAll(".highcharts-text-outline"), function(v) {
                                    v.style.display = a
                                })
                            }) && y("none"), v = h.getBBox ? b({}, h.getBBox()) : {
                                width: h.offsetWidth,
                                height: h.offsetHeight
                            }, y && y("")
                        } catch (X) {}
                        if (!v || 0 > v.width) v = {
                            width: 0,
                            height: 0
                        }
                    } else v = this.htmlGetBBox();
                    e.isSVG && (a = v.width, e = v.height, m && "11px" === m.fontSize && 17 === Math.round(e) && (v.height = e = 14),
                        g && (v.width = Math.abs(e * Math.sin(c)) + Math.abs(a * Math.cos(c)), v.height = Math.abs(e * Math.cos(c)) + Math.abs(a * Math.sin(c))));
                    if (t && 0 < v.height) {
                        for (; 250 < C.length;) delete M[C.shift()];
                        M[t] || C.push(t);
                        M[t] = v
                    }
                }
                return v
            },
            show: function(a) {
                return this.attr({
                    visibility: a ? "inherit" : "visible"
                })
            },
            hide: function() {
                return this.attr({
                    visibility: "hidden"
                })
            },
            fadeOut: function(a) {
                var v = this;
                v.animate({
                    opacity: 0
                }, {
                    duration: a || 150,
                    complete: function() {
                        v.attr({
                            y: -9999
                        })
                    }
                })
            },
            add: function(a) {
                var v = this.renderer,
                    g = this.element,
                    e;
                a && (this.parentGroup = a);
                this.parentInverted = a && a.inverted;
                void 0 !== this.textStr && v.buildText(this);
                this.added = !0;
                if (!a || a.handleZ || this.zIndex) e = this.zIndexSetter();
                e || (a ? a.element : v.box).appendChild(g);
                if (this.onAdd) this.onAdd();
                return this
            },
            safeRemoveChild: function(a) {
                var v = a.parentNode;
                v && v.removeChild(a)
            },
            destroy: function() {
                var a = this,
                    g = a.element || {},
                    e = a.renderer.isSVG && "SPAN" === g.nodeName && a.parentGroup,
                    b, c;
                g.onclick = g.onmouseout = g.onmouseover = g.onmousemove = g.point = null;
                F(a);
                a.clipPath && (z(a.element.ownerSVGElement.querySelectorAll("[clip-path]"),
                    function(v) {
                        -1 < v.getAttribute("clip-path").indexOf(a.clipPath.element.id) && v.removeAttribute("clip-path")
                    }), a.clipPath = a.clipPath.destroy());
                if (a.stops) {
                    for (c = 0; c < a.stops.length; c++) a.stops[c] = a.stops[c].destroy();
                    a.stops = null
                }
                a.safeRemoveChild(g);
                for (a.destroyShadows(); e && e.div && 0 === e.div.childNodes.length;) g = e.parentGroup, a.safeRemoveChild(e.div), delete e.div, e = g;
                a.alignTo && p(a.renderer.alignedObjects, a);
                for (b in a) delete a[b];
                return null
            },
            shadow: function(a, g, e) {
                var v = [],
                    b, c, h = this.element,
                    m, F,
                    x, y;
                if (!a) this.destroyShadows();
                else if (!this.shadows) {
                    F = K(a.width, 3);
                    x = (a.opacity || .15) / F;
                    y = this.parentInverted ? "(-1,-1)" : "(" + K(a.offsetX, 1) + ", " + K(a.offsetY, 1) + ")";
                    for (b = 1; b <= F; b++) c = h.cloneNode(0), m = 2 * F + 1 - 2 * b, r(c, {
                        isShadow: "true",
                        stroke: a.color || "#000000",
                        "stroke-opacity": x * b,
                        "stroke-width": m,
                        transform: "translate" + y,
                        fill: "none"
                    }), e && (r(c, "height", Math.max(r(c, "height") - m, 0)), c.cutHeight = m), g ? g.element.appendChild(c) : h.parentNode.insertBefore(c, h), v.push(c);
                    this.shadows = v
                }
                return this
            },
            destroyShadows: function() {
                z(this.shadows || [], function(a) {
                    this.safeRemoveChild(a)
                }, this);
                this.shadows = void 0
            },
            xGetter: function(a) {
                "circle" === this.element.nodeName && ("x" === a ? a = "cx" : "y" === a && (a = "cy"));
                return this._defaultGetter(a)
            },
            _defaultGetter: function(a) {
                a = K(this[a], this.element ? this.element.getAttribute(a) : null, 0);
                /^[\-0-9\.]+$/.test(a) && (a = parseFloat(a));
                return a
            },
            dSetter: function(a, g, e) {
                a && a.join && (a = a.join(" "));
                (/(NaN| {2}|^$)/.test(a) && (a = "M 0 0"));
                e.setAttribute(g, a);
                this[g] = a
            },
            dashstyleSetter: function(a) {
                var v, g = this["stroke-width"];
                "inherit" === g && (g = 1);
                if (a = a && a.toLowerCase()) {
                    a = a.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
                    for (v = a.length; v--;) a[v] = J(a[v]) * g;
                    a = a.join(",").replace(/NaN/g, "none");
                    this.element.setAttribute("stroke-dasharray", a)
                }
            },
            alignSetter: function(a) {
                this.element.setAttribute("text-anchor", {
                    left: "start",
                    center: "middle",
                    right: "end"
                }[a])
            },
            opacitySetter: function(a, g, e) {
                this[g] = a;
                e.setAttribute(g, a)
            },
            titleSetter: function(a) {
                var v = this.element.getElementsByTagName("title")[0];
                v || (v = n.createElementNS(this.SVG_NS, "title"), this.element.appendChild(v));
                v.firstChild && v.removeChild(v.firstChild);
                v.appendChild(n.createTextNode(String(K(a), "").replace(/<[^>]*>/g, "")))
            },
            textSetter: function(a) {
                a !== this.textStr && (delete this.bBox, this.textStr = a, this.added && this.renderer.buildText(this))
            },
            fillSetter: function(a, g, e) {
                "string" === typeof a ? e.setAttribute(g,
                    a) : a && this.colorGradient(a, g, e)
            },
            visibilitySetter: function(a, g, e) {
                "inherit" === a ? e.removeAttribute(g) : e.setAttribute(g, a)
            },
            zIndexSetter: function(a, g) {
                var v = this.renderer,
                    e = this.parentGroup,
                    b = (e || v).element || v.box,
                    c, h = this.element,
                    m;
                c = this.added;
                var F;
                u(a) && (h.zIndex = a, a = +a, this[g] === a && (c = !1), this[g] = a);
                if (c) {
                    (a = this.zIndex) && e && (e.handleZ = !0);
                    g = b.childNodes;
                    for (F = 0; F < g.length && !m; F++) e = g[F], c = e.zIndex, e !== h && (J(c) > a || !u(a) && u(c) || 0 > a && !u(c) && b !== v.box) && (b.insertBefore(h, e), m = !0);
                    m || b.appendChild(h)
                }
                return m
            },
            _defaultSetter: function(a, g, e) {
                e.setAttribute(g, a)
            }
        };
        B.prototype.yGetter = B.prototype.xGetter;
        B.prototype.translateXSetter = B.prototype.translateYSetter = B.prototype.rotationSetter = B.prototype.verticalAlignSetter = B.prototype.scaleXSetter = B.prototype.scaleYSetter = function(a, g) {
            this[g] = a;
            this.doTransform = !0
        };
        B.prototype["stroke-widthSetter"] = B.prototype.strokeSetter = function(a, g, e) {
            this[g] = a;
            this.stroke && this["stroke-width"] ? (B.prototype.fillSetter.call(this, this.stroke, "stroke", e), e.setAttribute("stroke-width",
                this["stroke-width"]), this.hasStroke = !0) : "stroke-width" === g && 0 === a && this.hasStroke && (e.removeAttribute("stroke"), this.hasStroke = !1)
        };
        A = a.SVGRenderer = function() {
            this.init.apply(this, arguments)
        };
        A.prototype = {
            Element: B,
            SVG_NS: N,
            init: function(a, g, b, c, h, F) {
                var v;
                c = this.createElement("svg").attr({
                    version: "1.1",
                    "class": "highcharts-root"
                }).css(this.getStyle(c));
                v = c.element;
                a.appendChild(v); - 1 === a.innerHTML.indexOf("xmlns") && r(v, "xmlns", this.SVG_NS);
                this.isSVG = !0;
                this.box = v;
                this.boxWrapper = c;
                this.alignedObjects = [];
                this.url = (e || m) && n.getElementsByTagName("base").length ? O.location.href.replace(/#.*?$/, "").replace(/<[^>]*>/g, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : "";
                this.createElement("desc").add().element.appendChild(n.createTextNode("Created with Highcharts 5.0.10"));
                this.defs = this.createElement("defs").add();
                this.allowHTML = F;
                this.forExport = h;
                this.gradients = {};
                this.cache = {};
                this.cacheKeys = [];
                this.imgCount = 0;
                this.setSize(g, b, !1);
                var x;
                e && a.getBoundingClientRect && (g = function() {
                    q(a, {
                        left: 0,
                        top: 0
                    });
                    x = a.getBoundingClientRect();
                    q(a, {
                        left: Math.ceil(x.left) - x.left + "px",
                        top: Math.ceil(x.top) - x.top + "px"
                    })
                }, g(), this.unSubPixelFix = H(O, "resize", g))
            },
            getStyle: function(a) {
                return this.style = b({
                    fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
                    fontSize: "12px"
                }, a)
            },
            setStyle: function(a) {
                this.boxWrapper.css(this.getStyle(a))
            },
            isHidden: function() {
                return !this.boxWrapper.getBBox().width
            },
            destroy: function() {
                var a = this.defs;
                this.box = null;
                this.boxWrapper = this.boxWrapper.destroy();
                c(this.gradients || {});
                this.gradients = null;
                a && (this.defs = a.destroy());
                this.unSubPixelFix && this.unSubPixelFix();
                return this.alignedObjects = null
            },
            createElement: function(a) {
                var g = new this.Element;
                g.init(this, a);
                return g
            },
            draw: I,
            getRadialAttr: function(a, g) {
                return {
                    cx: a[0] - a[2] / 2 + g.cx * a[2],
                    cy: a[1] - a[2] / 2 + g.cy * a[2],
                    r: g.r * a[2]
                }
            },
            getSpanWidth: function(a, g) {
                var v = a.getBBox(!0).width;
                !Q && this.forExport && (v = this.measureSpanWidth(g.firstChild.data, a.styles));
                return v
            },
            applyEllipsis: function(a, g, e, b) {
                var v = this.getSpanWidth(a, g),
                    c = v > b,
                    v = e,
                    h, m = 0,
                    F = e.length,
                    x = function(a) {
                        g.removeChild(g.firstChild);
                        a && g.appendChild(n.createTextNode(a))
                    };
                if (c) {
                    for (; m <= F;) h = Math.ceil((m + F) / 2), v = e.substring(0, h) + "\u2026", x(v), v = this.getSpanWidth(a, g), m === F ? m = F + 1 : v > b ? F = h - 1 : m = h;
                    0 === F && x("")
                }
                return c
            },
            buildText: function(a) {
                var g = a.element,
                    e = this,
                    v = e.forExport,
                    b = K(a.textStr, "").toString(),
                    c = -1 !== b.indexOf("\x3c"),
                    m = g.childNodes,
                    F, x, y, t, d = r(g, "x"),
                    C = a.styles,
                    p = a.textWidth,
                    k = C && C.lineHeight,
                    w = C && C.textOutline,
                    u = C && "ellipsis" === C.textOverflow,
                    f = C && "nowrap" ===
                    C.whiteSpace,
                    E = C && C.fontSize,
                    D, I, l = m.length,
                    C = p && !a.added && this.box,
                    P = function(a) {
                        var v;
                        v = /(px|em)$/.test(a && a.style.fontSize) ? a.style.fontSize : E || e.style.fontSize || 12;
                        return k ? J(k) : e.fontMetrics(v, a.getAttribute("style") ? a : g).h
                    };
                D = [b, u, f, k, w, E, p].join();
                if (D !== a.textCache) {
                    for (a.textCache = D; l--;) g.removeChild(m[l]);
                    c || w || u || p || -1 !== b.indexOf(" ") ? (F = /<.*class="([^"]+)".*>/, x = /<.*style="([^"]+)".*>/, y = /<.*href="(http[^"]+)".*>/, C && C.appendChild(g), b = c ? b.replace(/<(b|strong)>/g, '\x3cspan style\x3d"font-weight:bold"\x3e').replace(/<(i|em)>/g,
                        '\x3cspan style\x3d"font-style:italic"\x3e').replace(/<a/g, "\x3cspan").replace(/<\/(b|strong|i|em|a)>/g, "\x3c/span\x3e").split(/<br.*?>/g) : [b], b = h(b, function(a) {
                        return "" !== a
                    }), z(b, function(b, c) {
                        var m, h = 0;
                        b = b.replace(/^\s+|\s+$/g, "").replace(/<span/g, "|||\x3cspan").replace(/<\/span>/g, "\x3c/span\x3e|||");
                        m = b.split("|||");
                        z(m, function(b) {
                            if ("" !== b || 1 === m.length) {
                                var C = {},
                                    k = n.createElementNS(e.SVG_NS, "tspan"),
                                    w, E;
                                F.test(b) && (w = b.match(F)[1], r(k, "class", w));
                                x.test(b) && (E = b.match(x)[1].replace(/(;| |^)color([ :])/,
                                    "$1fill$2"), r(k, "style", E));
                                y.test(b) && !v && (r(k, "onclick", 'location.href\x3d"' + b.match(y)[1] + '"'), q(k, {
                                    cursor: "pointer"
                                }));
                                b = (b.replace(/<(.|\n)*?>/g, "") || " ").replace(/&lt;/g, "\x3c").replace(/&gt;/g, "\x3e");
                                if (" " !== b) {
                                    k.appendChild(n.createTextNode(b));
                                    h ? C.dx = 0 : c && null !== d && (C.x = d);
                                    r(k, C);
                                    g.appendChild(k);
                                    !h && I && (!Q && v && q(k, {
                                        display: "block"
                                    }), r(k, "dy", P(k)));
                                    if (p) {
                                        C = b.replace(/([^\^])-/g, "$1- ").split(" ");
                                        w = 1 < m.length || c || 1 < C.length && !f;
                                        var D = [],
                                            M, z = P(k),
                                            l = a.rotation;
                                        for (u && (t = e.applyEllipsis(a,
                                                k, b, p)); !u && w && (C.length || D.length);) a.rotation = 0, M = e.getSpanWidth(a, k), b = M > p, void 0 === t && (t = b), b && 1 !== C.length ? (k.removeChild(k.firstChild), D.unshift(C.pop())) : (C = D, D = [], C.length && !f && (k = n.createElementNS(N, "tspan"), r(k, {
                                            dy: z,
                                            x: d
                                        }), E && r(k, "style", E), g.appendChild(k)), M > p && (p = M)), C.length && k.appendChild(n.createTextNode(C.join(" ").replace(/- /g, "-")));
                                        a.rotation = l
                                    }
                                    h++
                                }
                            }
                        });
                        I = I || g.childNodes.length
                    }), t && a.attr("title", a.textStr), C && C.removeChild(g), w && a.applyTextOutline && a.applyTextOutline(w)) : g.appendChild(n.createTextNode(b.replace(/&lt;/g,
                        "\x3c").replace(/&gt;/g, "\x3e")))
                }
            },
            getContrast: function(a) {
                a = l(a).rgba;
                return 510 < a[0] + a[1] + a[2] ? "#000000" : "#FFFFFF"
            },
            button: function(a, g, e, c, m, h, F, C, t) {
                var v = this.label(a, g, e, t, null, null, null, null, "button"),
                    d = 0;
                v.attr(y({
                    padding: 8,
                    r: 2
                }, m));
                var p, n, k, w;
                m = y({
                    fill: "#f7f7f7",
                    stroke: "#cccccc",
                    "stroke-width": 1,
                    style: {
                        color: "#333333",
                        cursor: "pointer",
                        fontWeight: "normal"
                    }
                }, m);
                p = m.style;
                delete m.style;
                h = y(m, {
                    fill: "#e6e6e6"
                }, h);
                n = h.style;
                delete h.style;
                F = y(m, {
                        fill: "#e6ebf5",
                        style: {
                            color: "#000000",
                            fontWeight: "bold"
                        }
                    },
                    F);
                k = F.style;
                delete F.style;
                C = y(m, {
                    style: {
                        color: "#cccccc"
                    }
                }, C);
                w = C.style;
                delete C.style;
                H(v.element, x ? "mouseover" : "mouseenter", function() {
                    3 !== d && v.setState(1)
                });
                H(v.element, x ? "mouseout" : "mouseleave", function() {
                    3 !== d && v.setState(d)
                });
                v.setState = function(a) {
                    1 !== a && (v.state = d = a);
                    v.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + ["normal", "hover", "pressed", "disabled"][a || 0]);
                    v.attr([m, h, F, C][a || 0]).css([p, n, k, w][a || 0])
                };
                v.attr(m).css(b({
                        cursor: "default"
                    },
                    p));
                return v.on("click", function(a) {
                    3 !== d && c.call(v, a)
                })
            },
            crispLine: function(a, g) {
                a[1] === a[4] && (a[1] = a[4] = Math.round(a[1]) - g % 2 / 2);
                a[2] === a[5] && (a[2] = a[5] = Math.round(a[2]) + g % 2 / 2);
                return a
            },
            path: function(a) {
                var g = {
                    fill: "none"
                };
                w(a) ? g.d = a : C(a) && b(g, a);
                return this.createElement("path").attr(g)
            },
            circle: function(a, g, e) {
                a = C(a) ? a : {
                    x: a,
                    y: g,
                    r: e
                };
                g = this.createElement("circle");
                g.xSetter = g.ySetter = function(a, g, e) {
                    e.setAttribute("c" + g, a)
                };
                return g.attr(a)
            },
            arc: function(a, g, e, b, c, m) {
                C(a) ? (b = a, g = b.y, e = b.r, a = b.x) :
                    b = {
                        innerR: b,
                        start: c,
                        end: m
                    };
                a = this.symbol("arc", a, g, e, e, b);
                a.r = e;
                return a
            },
            rect: function(a, g, e, b, c, m) {
                c = C(a) ? a.r : c;
                var v = this.createElement("rect");
                a = C(a) ? a : void 0 === a ? {} : {
                    x: a,
                    y: g,
                    width: Math.max(e, 0),
                    height: Math.max(b, 0)
                };
                void 0 !== m && (a.strokeWidth = m, a = v.crisp(a));
                a.fill = "none";
                c && (a.r = c);
                v.rSetter = function(a, g, e) {
                    r(e, {
                        rx: a,
                        ry: a
                    })
                };
                return v.attr(a)
            },
            setSize: function(a, g, e) {
                var b = this.alignedObjects,
                    v = b.length;
                this.width = a;
                this.height = g;
                for (this.boxWrapper.animate({
                        width: a,
                        height: g
                    }, {
                        step: function() {
                            this.attr({
                                viewBox: "0 0 " +
                                    this.attr("width") + " " + this.attr("height")
                            })
                        },
                        duration: K(e, !0) ? void 0 : 0
                    }); v--;) b[v].align()
            },
            g: function(a) {
                var g = this.createElement("g");
                return a ? g.attr({
                    "class": "highcharts-" + a
                }) : g
            },
            image: function(a, g, e, c, m) {
                var v = {
                    preserveAspectRatio: "none"
                };
                1 < arguments.length && b(v, {
                    x: g,
                    y: e,
                    width: c,
                    height: m
                });
                v = this.createElement("image").attr(v);
                v.element.setAttributeNS ? v.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", a) : v.element.setAttribute("hc-svg-href", a);
                return v
            },
            symbol: function(a, g, e, c, m,
                h) {
                var v = this,
                    F, x = this.symbols[a],
                    y = u(g) && x && this.symbols[a](Math.round(g), Math.round(e), c, m, h),
                    C = /^url\((.*?)\)$/,
                    d, t;
                x ? (F = this.path(y), F.attr("fill", "none"), b(F, {
                    symbolName: a,
                    x: g,
                    y: e,
                    width: c,
                    height: m
                }), h && b(F, h)) : C.test(a) && (d = a.match(C)[1], F = this.image(d), F.imgwidth = K(P[d] && P[d].width, h && h.width), F.imgheight = K(P[d] && P[d].height, h && h.height), t = function() {
                    F.attr({
                        width: F.width,
                        height: F.height
                    })
                }, z(["width", "height"], function(a) {
                    F[a + "Setter"] = function(a, g) {
                        var e = {},
                            b = this["img" + g],
                            v = "width" === g ? "translateX" :
                            "translateY";
                        this[g] = a;
                        u(b) && (this.element && this.element.setAttribute(g, b), this.alignByTranslate || (e[v] = ((this[g] || 0) - b) / 2, this.attr(e)))
                    }
                }), u(g) && F.attr({
                    x: g,
                    y: e
                }), F.isImg = !0, u(F.imgwidth) && u(F.imgheight) ? t() : (F.attr({
                    width: 0,
                    height: 0
                }), k("img", {
                    onload: function() {
                        var a = f[v.chartIndex];
                        0 === this.width && (q(this, {
                            position: "absolute",
                            top: "-999em"
                        }), n.body.appendChild(this));
                        P[d] = {
                            width: this.width,
                            height: this.height
                        };
                        F.imgwidth = this.width;
                        F.imgheight = this.height;
                        F.element && t();
                        this.parentNode && this.parentNode.removeChild(this);
                        v.imgCount--;
                        if (!v.imgCount && a && a.onload) a.onload()
                    },
                    src: d
                }), this.imgCount++));
                return F
            },
            symbols: {
                circle: function(a, g, e, b) {
                    return this.arc(a + e / 2, g + b / 2, e / 2, b / 2, {
                        start: 0,
                        end: 2 * Math.PI,
                        open: !1
                    })
                },
                square: function(a, g, e, b) {
                    return ["M", a, g, "L", a + e, g, a + e, g + b, a, g + b, "Z"]
                },
                triangle: function(a, g, e, b) {
                    return ["M", a + e / 2, g, "L", a + e, g + b, a, g + b, "Z"]
                },
                "triangle-down": function(a, g, e, b) {
                    return ["M", a, g, "L", a + e, g, a + e / 2, g + b, "Z"]
                },
                diamond: function(a, g, e, b) {
                    return ["M", a + e / 2, g, "L", a + e, g + b / 2, a + e / 2, g + b, a, g + b / 2, "Z"]
                },
                arc: function(a,
                    g, e, b, c) {
                    var v = c.start,
                        m = c.r || e,
                        h = c.r || b || e,
                        F = c.end - .001;
                    e = c.innerR;
                    b = c.open;
                    var x = Math.cos(v),
                        y = Math.sin(v),
                        C = Math.cos(F),
                        F = Math.sin(F);
                    c = c.end - v < Math.PI ? 0 : 1;
                    m = ["M", a + m * x, g + h * y, "A", m, h, 0, c, 1, a + m * C, g + h * F];
                    u(e) && m.push(b ? "M" : "L", a + e * C, g + e * F, "A", e, e, 0, c, 0, a + e * x, g + e * y);
                    m.push(b ? "" : "Z");
                    return m
                },
                callout: function(a, g, e, b, c) {
                    var m = Math.min(c && c.r || 0, e, b),
                        h = m + 6,
                        v = c && c.anchorX;
                    c = c && c.anchorY;
                    var F;
                    F = ["M", a + m, g, "L", a + e - m, g, "C", a + e, g, a + e, g, a + e, g + m, "L", a + e, g + b - m, "C", a + e, g + b, a + e, g + b, a + e - m, g + b, "L", a + m, g + b, "C",
                        a, g + b, a, g + b, a, g + b - m, "L", a, g + m, "C", a, g, a, g, a + m, g
                    ];
                    v && v > e ? c > g + h && c < g + b - h ? F.splice(13, 3, "L", a + e, c - 6, a + e + 6, c, a + e, c + 6, a + e, g + b - m) : F.splice(13, 3, "L", a + e, b / 2, v, c, a + e, b / 2, a + e, g + b - m) : v && 0 > v ? c > g + h && c < g + b - h ? F.splice(33, 3, "L", a, c + 6, a - 6, c, a, c - 6, a, g + m) : F.splice(33, 3, "L", a, b / 2, v, c, a, b / 2, a, g + m) : c && c > b && v > a + h && v < a + e - h ? F.splice(23, 3, "L", v + 6, g + b, v, g + b + 6, v - 6, g + b, a + m, g + b) : c && 0 > c && v > a + h && v < a + e - h && F.splice(3, 3, "L", v - 6, g, v, g - 6, v + 6, g, e - m, g);
                    return F
                }
            },
            clipRect: function(g, e, b, c) {
                var m = a.uniqueKey(),
                    h = this.createElement("clipPath").attr({
                        id: m
                    }).add(this.defs);
                g = this.rect(g, e, b, c, 0).add(h);
                g.id = m;
                g.clipPath = h;
                g.count = 0;
                return g
            },
            text: function(a, g, e, b) {
                var c = !Q && this.forExport,
                    m = {};
                if (b && (this.allowHTML || !this.forExport)) return this.html(a, g, e);
                m.x = Math.round(g || 0);
                e && (m.y = Math.round(e));
                if (a || 0 === a) m.text = a;
                a = this.createElement("text").attr(m);
                c && a.css({
                    position: "absolute"
                });
                b || (a.xSetter = function(a, g, e) {
                    var b = e.getElementsByTagName("tspan"),
                        c, m = e.getAttribute(g),
                        h;
                    for (h = 0; h < b.length; h++) c = b[h], c.getAttribute(g) === m && c.setAttribute(g, a);
                    e.setAttribute(g,
                        a)
                });
                return a
            },
            fontMetrics: function(a, g) {
                a = a || g && g.style && g.style.fontSize || this.style && this.style.fontSize;
                a = /px/.test(a) ? J(a) : /em/.test(a) ? parseFloat(a) * (g ? this.fontMetrics(null, g.parentNode).f : 16) : 12;
                g = 24 > a ? a + 3 : Math.round(1.2 * a);
                return {
                    h: g,
                    b: Math.round(.8 * g),
                    f: a
                }
            },
            rotCorr: function(a, g, e) {
                var b = a;
                g && e && (b = Math.max(b * Math.cos(g * d), 4));
                return {
                    x: -a / 3 * Math.sin(g * d),
                    y: b
                }
            },
            label: function(e, c, m, h, F, x, C, d, t) {
                var v = this,
                    p = v.g("button" !== t && "label"),
                    n = p.text = v.text("", 0, 0, C).attr({
                        zIndex: 1
                    }),
                    k, w, E = 0,
                    f = 3,
                    D = 0,
                    I, q, l, Q, N, K = {},
                    J, r, M = /^url\((.*?)\)$/.test(h),
                    P = M,
                    R, S, O, U;
                t && p.addClass("highcharts-" + t);
                P = M;
                R = function() {
                    return (J || 0) % 2 / 2
                };
                S = function() {
                    var a = n.element.style,
                        g = {};
                    w = (void 0 === I || void 0 === q || N) && u(n.textStr) && n.getBBox();
                    p.width = (I || w.width || 0) + 2 * f + D;
                    p.height = (q || w.height || 0) + 2 * f;
                    r = f + v.fontMetrics(a && a.fontSize, n).b;
                    P && (k || (p.box = k = v.symbols[h] || M ? v.symbol(h) : v.rect(), k.addClass(("button" === t ? "" : "highcharts-label-box") + (t ? " highcharts-" + t + "-box" : "")), k.add(p), a = R(), g.x = a, g.y = (d ? -r : 0) + a), g.width =
                        Math.round(p.width), g.height = Math.round(p.height), k.attr(b(g, K)), K = {})
                };
                O = function() {
                    var a = D + f,
                        g;
                    g = d ? 0 : r;
                    u(I) && w && ("center" === N || "right" === N) && (a += {
                        center: .5,
                        right: 1
                    }[N] * (I - w.width));
                    if (a !== n.x || g !== n.y) n.attr("x", a), void 0 !== g && n.attr("y", g);
                    n.x = a;
                    n.y = g
                };
                U = function(a, g) {
                    k ? k.attr(a, g) : K[a] = g
                };
                p.onAdd = function() {
                    n.add(p);
                    p.attr({
                        text: e || 0 === e ? e : "",
                        x: c,
                        y: m
                    });
                    k && u(F) && p.attr({
                        anchorX: F,
                        anchorY: x
                    })
                };
                p.widthSetter = function(g) {
                    I = a.isNumber(g) ? g : null
                };
                p.heightSetter = function(a) {
                    q = a
                };
                p["text-alignSetter"] =
                    function(a) {
                        N = a
                    };
                p.paddingSetter = function(a) {
                    u(a) && a !== f && (f = p.padding = a, O())
                };
                p.paddingLeftSetter = function(a) {
                    u(a) && a !== D && (D = a, O())
                };
                p.alignSetter = function(a) {
                    a = {
                        left: 0,
                        center: .5,
                        right: 1
                    }[a];
                    a !== E && (E = a, w && p.attr({
                        x: l
                    }))
                };
                p.textSetter = function(a) {
                    void 0 !== a && n.textSetter(a);
                    S();
                    O()
                };
                p["stroke-widthSetter"] = function(a, g) {
                    a && (P = !0);
                    J = this["stroke-width"] = a;
                    U(g, a)
                };
                p.strokeSetter = p.fillSetter = p.rSetter = function(a, g) {
                    "fill" === g && a && (P = !0);
                    U(g, a)
                };
                p.anchorXSetter = function(a, g) {
                    F = a;
                    U(g, Math.round(a) -
                        R() - l)
                };
                p.anchorYSetter = function(a, g) {
                    x = a;
                    U(g, a - Q)
                };
                p.xSetter = function(a) {
                    p.x = a;
                    E && (a -= E * ((I || w.width) + 2 * f));
                    l = Math.round(a);
                    p.attr("translateX", l)
                };
                p.ySetter = function(a) {
                    Q = p.y = Math.round(a);
                    p.attr("translateY", Q)
                };
                var W = p.css;
                return b(p, {
                    css: function(a) {
                        if (a) {
                            var g = {};
                            a = y(a);
                            z(p.textProps, function(e) {
                                void 0 !== a[e] && (g[e] = a[e], delete a[e])
                            });
                            n.css(g)
                        }
                        return W.call(p, a)
                    },
                    getBBox: function() {
                        return {
                            width: w.width + 2 * f,
                            height: w.height + 2 * f,
                            x: w.x - f,
                            y: w.y - f
                        }
                    },
                    shadow: function(a) {
                        a && (S(), k && k.shadow(a));
                        return p
                    },
                    destroy: function() {
                        g(p.element, "mouseenter");
                        g(p.element, "mouseleave");
                        n && (n = n.destroy());
                        k && (k = k.destroy());
                        B.prototype.destroy.call(p);
                        p = v = S = O = U = null
                    }
                })
            }
        };
        a.Renderer = A
    })(L);
    (function(a) {
        var B = a.attr,
            A = a.createElement,
            H = a.css,
            G = a.defined,
            r = a.each,
            f = a.extend,
            l = a.isFirefox,
            q = a.isMS,
            k = a.isWebKit,
            u = a.pInt,
            d = a.SVGRenderer,
            c = a.win,
            n = a.wrap;
        f(a.SVGElement.prototype, {
            htmlCss: function(a) {
                var b = this.element;
                if (b = a && "SPAN" === b.tagName && a.width) delete a.width, this.textWidth = b, this.updateTransform();
                a && "ellipsis" ===
                    a.textOverflow && (a.whiteSpace = "nowrap", a.overflow = "hidden");
                this.styles = f(this.styles, a);
                H(this.element, a);
                return this
            },
            htmlGetBBox: function() {
                var a = this.element;
                "text" === a.nodeName && (a.style.position = "absolute");
                return {
                    x: a.offsetLeft,
                    y: a.offsetTop,
                    width: a.offsetWidth,
                    height: a.offsetHeight
                }
            },
            htmlUpdateTransform: function() {
                if (this.added) {
                    var a = this.renderer,
                        b = this.element,
                        c = this.translateX || 0,
                        h = this.translateY || 0,
                        d = this.x || 0,
                        n = this.y || 0,
                        w = this.textAlign || "left",
                        e = {
                            left: 0,
                            center: .5,
                            right: 1
                        }[w],
                        x = this.styles;
                    H(b, {
                        marginLeft: c,
                        marginTop: h
                    });
                    this.shadows && r(this.shadows, function(a) {
                        H(a, {
                            marginLeft: c + 1,
                            marginTop: h + 1
                        })
                    });
                    this.inverted && r(b.childNodes, function(e) {
                        a.invertChild(e, b)
                    });
                    if ("SPAN" === b.tagName) {
                        var C = this.rotation,
                            f = u(this.textWidth),
                            m = x && x.whiteSpace,
                            y = [C, w, b.innerHTML, this.textWidth, this.textAlign].join();
                        y !== this.cTT && (x = a.fontMetrics(b.style.fontSize).b, G(C) && this.setSpanRotation(C, e, x), H(b, {
                            width: "",
                            whiteSpace: m || "nowrap"
                        }), b.offsetWidth > f && /[ \-]/.test(b.textContent || b.innerText) && H(b, {
                            width: f +
                                "px",
                            display: "block",
                            whiteSpace: m || "normal"
                        }), this.getSpanCorrection(b.offsetWidth, x, e, C, w));
                        H(b, {
                            left: d + (this.xCorr || 0) + "px",
                            top: n + (this.yCorr || 0) + "px"
                        });
                        k && (x = b.offsetHeight);
                        this.cTT = y
                    }
                } else this.alignOnAdd = !0
            },
            setSpanRotation: function(a, b, p) {
                var h = {},
                    d = q ? "-ms-transform" : k ? "-webkit-transform" : l ? "MozTransform" : c.opera ? "-o-transform" : "";
                h[d] = h.transform = "rotate(" + a + "deg)";
                h[d + (l ? "Origin" : "-origin")] = h.transformOrigin = 100 * b + "% " + p + "px";
                H(this.element, h)
            },
            getSpanCorrection: function(a, b, c) {
                this.xCorr = -a * c;
                this.yCorr = -b
            }
        });
        f(d.prototype, {
            html: function(a, b, c) {
                var h = this.createElement("span"),
                    d = h.element,
                    p = h.renderer,
                    k = p.isSVG,
                    e = function(a, e) {
                        r(["opacity", "visibility"], function(b) {
                            n(a, b + "Setter", function(a, b, c, h) {
                                a.call(this, b, c, h);
                                e[c] = b
                            })
                        })
                    };
                h.textSetter = function(a) {
                    a !== d.innerHTML && delete this.bBox;
                    d.innerHTML = this.textStr = a;
                    h.htmlUpdateTransform()
                };
                k && e(h, h.element.style);
                h.xSetter = h.ySetter = h.alignSetter = h.rotationSetter = function(a, e) {
                    "align" === e && (e = "textAlign");
                    h[e] = a;
                    h.htmlUpdateTransform()
                };
                h.attr({
                    text: a,
                    x: Math.round(b),
                    y: Math.round(c)
                }).css({
                    fontFamily: this.style.fontFamily,
                    fontSize: this.style.fontSize,
                    position: "absolute"
                });
                d.style.whiteSpace = "nowrap";
                h.css = h.htmlCss;
                k && (h.add = function(a) {
                    var b, c = p.box.parentNode,
                        m = [];
                    if (this.parentGroup = a) {
                        if (b = a.div, !b) {
                            for (; a;) m.push(a), a = a.parentGroup;
                            r(m.reverse(), function(a) {
                                var x, d = B(a.element, "class");
                                d && (d = {
                                    className: d
                                });
                                b = a.div = a.div || A("div", d, {
                                    position: "absolute",
                                    left: (a.translateX || 0) + "px",
                                    top: (a.translateY || 0) + "px",
                                    display: a.display,
                                    opacity: a.opacity,
                                    pointerEvents: a.styles && a.styles.pointerEvents
                                }, b || c);
                                x = b.style;
                                f(a, {
                                    on: function() {
                                        h.on.apply({
                                            element: m[0].div
                                        }, arguments);
                                        return a
                                    },
                                    translateXSetter: function(e, g) {
                                        x.left = e + "px";
                                        a[g] = e;
                                        a.doTransform = !0
                                    },
                                    translateYSetter: function(e, g) {
                                        x.top = e + "px";
                                        a[g] = e;
                                        a.doTransform = !0
                                    }
                                });
                                e(a, x)
                            })
                        }
                    } else b = c;
                    b.appendChild(d);
                    h.added = !0;
                    h.alignOnAdd && h.htmlUpdateTransform();
                    return h
                });
                return h
            }
        })
    })(L);
    (function(a) {
        var B, A, H = a.createElement,
            G = a.css,
            r = a.defined,
            f = a.deg2rad,
            l = a.discardElement,
            q = a.doc,
            k = a.each,
            u = a.erase,
            d = a.extend;
        B = a.extendClass;
        var c = a.isArray,
            n = a.isNumber,
            z = a.isObject,
            b = a.merge;
        A = a.noop;
        var p = a.pick,
            h = a.pInt,
            t = a.SVGElement,
            D = a.SVGRenderer,
            w = a.win;
        a.svg || (A = {
            docMode8: q && 8 === q.documentMode,
            init: function(a, b) {
                var e = ["\x3c", b, ' filled\x3d"f" stroked\x3d"f"'],
                    c = ["position: ", "absolute", ";"],
                    m = "div" === b;
                ("shape" === b || m) && c.push("left:0;top:0;width:1px;height:1px;");
                c.push("visibility: ", m ? "hidden" : "visible");
                e.push(' style\x3d"', c.join(""), '"/\x3e');
                b && (e = m || "span" === b || "img" === b ?
                    e.join("") : a.prepVML(e), this.element = H(e));
                this.renderer = a
            },
            add: function(a) {
                var e = this.renderer,
                    b = this.element,
                    c = e.box,
                    m = a && a.inverted,
                    c = a ? a.element || a : c;
                a && (this.parentGroup = a);
                m && e.invertChild(b, c);
                c.appendChild(b);
                this.added = !0;
                this.alignOnAdd && !this.deferUpdateTransform && this.updateTransform();
                if (this.onAdd) this.onAdd();
                this.className && this.attr("class", this.className);
                return this
            },
            updateTransform: t.prototype.htmlUpdateTransform,
            setSpanRotation: function() {
                var a = this.rotation,
                    b = Math.cos(a * f),
                    c =
                    Math.sin(a * f);
                G(this.element, {
                    filter: a ? ["progid:DXImageTransform.Microsoft.Matrix(M11\x3d", b, ", M12\x3d", -c, ", M21\x3d", c, ", M22\x3d", b, ", sizingMethod\x3d'auto expand')"].join("") : "none"
                })
            },
            getSpanCorrection: function(a, b, c, h, m) {
                var e = h ? Math.cos(h * f) : 1,
                    x = h ? Math.sin(h * f) : 0,
                    d = p(this.elemHeight, this.element.offsetHeight),
                    t;
                this.xCorr = 0 > e && -a;
                this.yCorr = 0 > x && -d;
                t = 0 > e * x;
                this.xCorr += x * b * (t ? 1 - c : c);
                this.yCorr -= e * b * (h ? t ? c : 1 - c : 1);
                m && "left" !== m && (this.xCorr -= a * c * (0 > e ? -1 : 1), h && (this.yCorr -= d * c * (0 > x ? -1 : 1)), G(this.element, {
                    textAlign: m
                }))
            },
            pathToVML: function(a) {
                for (var e = a.length, b = []; e--;) n(a[e]) ? b[e] = Math.round(10 * a[e]) - 5 : "Z" === a[e] ? b[e] = "x" : (b[e] = a[e], !a.isArc || "wa" !== a[e] && "at" !== a[e] || (b[e + 5] === b[e + 7] && (b[e + 7] += a[e + 7] > a[e + 5] ? 1 : -1), b[e + 6] === b[e + 8] && (b[e + 8] += a[e + 8] > a[e + 6] ? 1 : -1)));
                return b.join(" ") || "x"
            },
            clip: function(a) {
                var e = this,
                    b;
                a ? (b = a.members, u(b, e), b.push(e), e.destroyClip = function() {
                    u(b, e)
                }, a = a.getCSS(e)) : (e.destroyClip && e.destroyClip(), a = {
                    clip: e.docMode8 ? "inherit" : "rect(auto)"
                });
                return e.css(a)
            },
            css: t.prototype.htmlCss,
            safeRemoveChild: function(a) {
                a.parentNode && l(a)
            },
            destroy: function() {
                this.destroyClip && this.destroyClip();
                return t.prototype.destroy.apply(this)
            },
            on: function(a, b) {
                this.element["on" + a] = function() {
                    var a = w.event;
                    a.target = a.srcElement;
                    b(a)
                };
                return this
            },
            cutOffPath: function(a, b) {
                var e;
                a = a.split(/[ ,]/);
                e = a.length;
                if (9 === e || 11 === e) a[e - 4] = a[e - 2] = h(a[e - 2]) - 10 * b;
                return a.join(" ")
            },
            shadow: function(a, b, c) {
                var e = [],
                    m, d = this.element,
                    t = this.renderer,
                    x, n = d.style,
                    g, F = d.path,
                    k, C, w, f;
                F && "string" !== typeof F.value && (F =
                    "x");
                C = F;
                if (a) {
                    w = p(a.width, 3);
                    f = (a.opacity || .15) / w;
                    for (m = 1; 3 >= m; m++) k = 2 * w + 1 - 2 * m, c && (C = this.cutOffPath(F.value, k + .5)), g = ['\x3cshape isShadow\x3d"true" strokeweight\x3d"', k, '" filled\x3d"false" path\x3d"', C, '" coordsize\x3d"10 10" style\x3d"', d.style.cssText, '" /\x3e'], x = H(t.prepVML(g), null, {
                            left: h(n.left) + p(a.offsetX, 1),
                            top: h(n.top) + p(a.offsetY, 1)
                        }), c && (x.cutOff = k + 1), g = ['\x3cstroke color\x3d"', a.color || "#000000", '" opacity\x3d"', f * m, '"/\x3e'], H(t.prepVML(g), null, null, x), b ? b.element.appendChild(x) :
                        d.parentNode.insertBefore(x, d), e.push(x);
                    this.shadows = e
                }
                return this
            },
            updateShadows: A,
            setAttr: function(a, b) {
                this.docMode8 ? this.element[a] = b : this.element.setAttribute(a, b)
            },
            classSetter: function(a) {
                (this.added ? this.element : this).className = a
            },
            dashstyleSetter: function(a, b, c) {
                (c.getElementsByTagName("stroke")[0] || H(this.renderer.prepVML(["\x3cstroke/\x3e"]), null, null, c))[b] = a || "solid";
                this[b] = a
            },
            dSetter: function(a, b, c) {
                var e = this.shadows;
                a = a || [];
                this.d = a.join && a.join(" ");
                c.path = a = this.pathToVML(a);
                if (e)
                    for (c =
                        e.length; c--;) e[c].path = e[c].cutOff ? this.cutOffPath(a, e[c].cutOff) : a;
                this.setAttr(b, a)
            },
            fillSetter: function(a, b, c) {
                var e = c.nodeName;
                "SPAN" === e ? c.style.color = a : "IMG" !== e && (c.filled = "none" !== a, this.setAttr("fillcolor", this.renderer.color(a, c, b, this)))
            },
            "fill-opacitySetter": function(a, b, c) {
                H(this.renderer.prepVML(["\x3c", b.split("-")[0], ' opacity\x3d"', a, '"/\x3e']), null, null, c)
            },
            opacitySetter: A,
            rotationSetter: function(a, b, c) {
                c = c.style;
                this[b] = c[b] = a;
                c.left = -Math.round(Math.sin(a * f) + 1) + "px";
                c.top = Math.round(Math.cos(a *
                    f)) + "px"
            },
            strokeSetter: function(a, b, c) {
                this.setAttr("strokecolor", this.renderer.color(a, c, b, this))
            },
            "stroke-widthSetter": function(a, b, c) {
                c.stroked = !!a;
                this[b] = a;
                n(a) && (a += "px");
                this.setAttr("strokeweight", a)
            },
            titleSetter: function(a, b) {
                this.setAttr(b, a)
            },
            visibilitySetter: function(a, b, c) {
                "inherit" === a && (a = "visible");
                this.shadows && k(this.shadows, function(e) {
                    e.style[b] = a
                });
                "DIV" === c.nodeName && (a = "hidden" === a ? "-999em" : 0, this.docMode8 || (c.style[b] = a ? "visible" : "hidden"), b = "top");
                c.style[b] = a
            },
            xSetter: function(a,
                b, c) {
                this[b] = a;
                "x" === b ? b = "left" : "y" === b && (b = "top");
                this.updateClipping ? (this[b] = a, this.updateClipping()) : c.style[b] = a
            },
            zIndexSetter: function(a, b, c) {
                c.style[b] = a
            }
        }, A["stroke-opacitySetter"] = A["fill-opacitySetter"], a.VMLElement = A = B(t, A), A.prototype.ySetter = A.prototype.widthSetter = A.prototype.heightSetter = A.prototype.xSetter, A = {
            Element: A,
            isIE8: -1 < w.navigator.userAgent.indexOf("MSIE 8.0"),
            init: function(a, b, c) {
                var e, m;
                this.alignedObjects = [];
                e = this.createElement("div").css({
                    position: "relative"
                });
                m = e.element;
                a.appendChild(e.element);
                this.isVML = !0;
                this.box = m;
                this.boxWrapper = e;
                this.gradients = {};
                this.cache = {};
                this.cacheKeys = [];
                this.imgCount = 0;
                this.setSize(b, c, !1);
                if (!q.namespaces.hcv) {
                    q.namespaces.add("hcv", "urn:schemas-microsoft-com:vml");
                    try {
                        q.createStyleSheet().cssText = "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "
                    } catch (y) {
                        q.styleSheets[0].cssText += "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "
                    }
                }
            },
            isHidden: function() {
                return !this.box.offsetWidth
            },
            clipRect: function(a, b, c, h) {
                var e = this.createElement(),
                    p = z(a);
                return d(e, {
                    members: [],
                    count: 0,
                    left: (p ? a.x : a) + 1,
                    top: (p ? a.y : b) + 1,
                    width: (p ? a.width : c) - 1,
                    height: (p ? a.height : h) - 1,
                    getCSS: function(a) {
                        var b = a.element,
                            c = b.nodeName,
                            g = a.inverted,
                            e = this.top - ("shape" === c ? b.offsetTop : 0),
                            m = this.left,
                            b = m + this.width,
                            h = e + this.height,
                            e = {
                                clip: "rect(" + Math.round(g ? m : e) + "px," + Math.round(g ? h : b) + "px," + Math.round(g ? b : h) + "px," + Math.round(g ? e : m) + "px)"
                            };
                        !g && a.docMode8 && "DIV" === c &&
                            d(e, {
                                width: b + "px",
                                height: h + "px"
                            });
                        return e
                    },
                    updateClipping: function() {
                        k(e.members, function(a) {
                            a.element && a.css(e.getCSS(a))
                        })
                    }
                })
            },
            color: function(b, c, h, d) {
                var e = this,
                    p, t = /^rgba/,
                    n, x, g = "none";
                b && b.linearGradient ? x = "gradient" : b && b.radialGradient && (x = "pattern");
                if (x) {
                    var F, w, f = b.linearGradient || b.radialGradient,
                        C, u, v, D, q, l = "";
                    b = b.stops;
                    var z, E = [],
                        r = function() {
                            n = ['\x3cfill colors\x3d"' + E.join(",") + '" opacity\x3d"', v, '" o:opacity2\x3d"', u, '" type\x3d"', x, '" ', l, 'focus\x3d"100%" method\x3d"any" /\x3e'];
                            H(e.prepVML(n), null, null, c)
                        };
                    C = b[0];
                    z = b[b.length - 1];
                    0 < C[0] && b.unshift([0, C[1]]);
                    1 > z[0] && b.push([1, z[1]]);
                    k(b, function(g, b) {
                        t.test(g[1]) ? (p = a.color(g[1]), F = p.get("rgb"), w = p.get("a")) : (F = g[1], w = 1);
                        E.push(100 * g[0] + "% " + F);
                        b ? (v = w, D = F) : (u = w, q = F)
                    });
                    if ("fill" === h)
                        if ("gradient" === x) h = f.x1 || f[0] || 0, b = f.y1 || f[1] || 0, C = f.x2 || f[2] || 0, f = f.y2 || f[3] || 0, l = 'angle\x3d"' + (90 - 180 * Math.atan((f - b) / (C - h)) / Math.PI) + '"', r();
                        else {
                            var g = f.r,
                                A = 2 * g,
                                B = 2 * g,
                                G = f.cx,
                                V = f.cy,
                                L = c.radialReference,
                                T, g = function() {
                                    L && (T = d.getBBox(), G += (L[0] -
                                        T.x) / T.width - .5, V += (L[1] - T.y) / T.height - .5, A *= L[2] / T.width, B *= L[2] / T.height);
                                    l = 'src\x3d"' + a.getOptions().global.VMLRadialGradientURL + '" size\x3d"' + A + "," + B + '" origin\x3d"0.5,0.5" position\x3d"' + G + "," + V + '" color2\x3d"' + q + '" ';
                                    r()
                                };
                            d.added ? g() : d.onAdd = g;
                            g = D
                        }
                    else g = F
                } else t.test(b) && "IMG" !== c.tagName ? (p = a.color(b), d[h + "-opacitySetter"](p.get("a"), h, c), g = p.get("rgb")) : (g = c.getElementsByTagName(h), g.length && (g[0].opacity = 1, g[0].type = "solid"), g = b);
                return g
            },
            prepVML: function(a) {
                var b = this.isIE8;
                a = a.join("");
                b ? (a = a.replace("/\x3e", ' xmlns\x3d"urn:schemas-microsoft-com:vml" /\x3e'), a = -1 === a.indexOf('style\x3d"') ? a.replace("/\x3e", ' style\x3d"display:inline-block;behavior:url(#default#VML);" /\x3e') : a.replace('style\x3d"', 'style\x3d"display:inline-block;behavior:url(#default#VML);')) : a = a.replace("\x3c", "\x3chcv:");
                return a
            },
            text: D.prototype.html,
            path: function(a) {
                var b = {
                    coordsize: "10 10"
                };
                c(a) ? b.d = a : z(a) && d(b, a);
                return this.createElement("shape").attr(b)
            },
            circle: function(a, b, c) {
                var e = this.symbol("circle");
                z(a) && (c = a.r, b = a.y, a = a.x);
                e.isCircle = !0;
                e.r = c;
                return e.attr({
                    x: a,
                    y: b
                })
            },
            g: function(a) {
                var b;
                a && (b = {
                    className: "highcharts-" + a,
                    "class": "highcharts-" + a
                });
                return this.createElement("div").attr(b)
            },
            image: function(a, b, c, h, m) {
                var e = this.createElement("img").attr({
                    src: a
                });
                1 < arguments.length && e.attr({
                    x: b,
                    y: c,
                    width: h,
                    height: m
                });
                return e
            },
            createElement: function(a) {
                return "rect" === a ? this.symbol(a) : D.prototype.createElement.call(this, a)
            },
            invertChild: function(a, b) {
                var c = this;
                b = b.style;
                var e = "IMG" === a.tagName && a.style;
                G(a, {
                    flip: "x",
                    left: h(b.width) - (e ? h(e.top) : 1),
                    top: h(b.height) - (e ? h(e.left) : 1),
                    rotation: -90
                });
                k(a.childNodes, function(b) {
                    c.invertChild(b, a)
                })
            },
            symbols: {
                arc: function(a, b, c, h, m) {
                    var e = m.start,
                        d = m.end,
                        p = m.r || c || h;
                    c = m.innerR;
                    h = Math.cos(e);
                    var t = Math.sin(e),
                        g = Math.cos(d),
                        F = Math.sin(d);
                    if (0 === d - e) return ["x"];
                    e = ["wa", a - p, b - p, a + p, b + p, a + p * h, b + p * t, a + p * g, b + p * F];
                    m.open && !c && e.push("e", "M", a, b);
                    e.push("at", a - c, b - c, a + c, b + c, a + c * g, b + c * F, a + c * h, b + c * t, "x", "e");
                    e.isArc = !0;
                    return e
                },
                circle: function(a, b, c, h, m) {
                    m && r(m.r) &&
                        (c = h = 2 * m.r);
                    m && m.isCircle && (a -= c / 2, b -= h / 2);
                    return ["wa", a, b, a + c, b + h, a + c, b + h / 2, a + c, b + h / 2, "e"]
                },
                rect: function(a, b, c, h, m) {
                    return D.prototype.symbols[r(m) && m.r ? "callout" : "square"].call(0, a, b, c, h, m)
                }
            }
        }, a.VMLRenderer = B = function() {
            this.init.apply(this, arguments)
        }, B.prototype = b(D.prototype, A), a.Renderer = B);
        D.prototype.measureSpanWidth = function(a, b) {
            var c = q.createElement("span");
            a = q.createTextNode(a);
            c.appendChild(a);
            G(c, b);
            this.box.appendChild(c);
            b = c.offsetWidth;
            l(c);
            return b
        }
    })(L);
    (function(a) {
        function B() {
            var k =
                a.defaultOptions.global,
                f = q.moment;
            if (k.timezone) {
                if (f) return function(a) {
                    return -f.tz(a, k.timezone).utcOffset()
                };
                a.error(25)
            }
            return k.useUTC && k.getTimezoneOffset
        }

        function A() {
            var k = a.defaultOptions.global,
                f, d = k.useUTC,
                c = d ? "getUTC" : "get",
                n = d ? "setUTC" : "set";
            a.Date = f = k.Date || q.Date;
            f.hcTimezoneOffset = d && k.timezoneOffset;
            f.hcGetTimezoneOffset = B();
            f.hcMakeTime = function(a, b, c, h, t, n) {
                var p;
                d ? (p = f.UTC.apply(0, arguments), p += r(p)) : p = (new f(a, b, l(c, 1), l(h, 0), l(t, 0), l(n, 0))).getTime();
                return p
            };
            G("Minutes Hours Day Date Month FullYear".split(" "),
                function(a) {
                    f["hcGet" + a] = c + a
                });
            G("Milliseconds Seconds Minutes Hours Date Month FullYear".split(" "), function(a) {
                f["hcSet" + a] = n + a
            })
        }
        var H = a.color,
            G = a.each,
            r = a.getTZOffset,
            f = a.merge,
            l = a.pick,
            q = a.win;
        a.defaultOptions = {
            colors: "#7cb5ec #434348 #b5a199 #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),
            symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
            lang: {
                loading: "Loading...",
                months: "January February March April May June July August September October November December".split(" "),
                shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                decimalPoint: ".",
                numericSymbols: "kMGTPE".split(""),
                resetZoom: "Reset zoom",
                resetZoomTitle: "Reset zoom level 1:1",
                thousandsSep: " "
            },
            global: {
                useUTC: !0,
                VMLRadialGradientURL: "http://code.highcharts.com/5.0.10/gfx/vml-radial-gradient.png"
            },
            chart: {
                borderRadius: 0,
                defaultSeriesType: "line",
                ignoreHiddenSeries: !0,
                spacing: [10, 10, 15, 10],
                resetZoomButton: {
                    theme: {
                        zIndex: 20
                    },
                    position: {
                        align: "right",
                        x: -10,
                        y: 10
                    }
                },
                width: null,
                height: null,
                borderColor: "#335cad",
                backgroundColor: "#ffffff",
                plotBorderColor: "#cccccc"
            },
            title: {
                text: "Chart title",
                align: "center",
                margin: 15,
                widthAdjust: -44
            },
            subtitle: {
                text: "",
                align: "center",
                widthAdjust: -44
            },
            plotOptions: {},
            labels: {
                style: {
                    position: "absolute",
                    color: "#333333"
                }
            },
            legend: {
                enabled: !0,
                align: "center",
                layout: "horizontal",
                labelFormatter: function() {
                    return this.name
                },
                borderColor: "#999999",
                borderRadius: 0,
                navigation: {
                    activeColor: "#003399",
                    inactiveColor: "#cccccc"
                },
                itemStyle: {
                    color: "#333333",
                    fontSize: "12px",
                    fontWeight: "bold"
                },
                itemHoverStyle: {
                    color: "#000000"
                },
                itemHiddenStyle: {
                    color: "#cccccc"
                },
                shadow: !1,
                itemCheckboxStyle: {
                    position: "absolute",
                    width: "13px",
                    height: "13px"
                },
                squareSymbol: !0,
                symbolPadding: 5,
                verticalAlign: "bottom",
                x: 0,
                y: 0,
                title: {
                    style: {
                        fontWeight: "bold"
                    }
                }
            },
            loading: {
                labelStyle: {
                    fontWeight: "bold",
                    position: "relative",
                    top: "45%"
                },
                style: {
                    position: "absolute",
                    backgroundColor: "#ffffff",
                    opacity: .5,
                    textAlign: "center"
                }
            },
            tooltip: {
                enabled: !0,
                animation: a.svg,
                borderRadius: 3,
                dateTimeLabelFormats: {
                    millisecond: "%A, %b %e, %H:%M:%S.%L",
                    second: "%A, %b %e, %H:%M:%S",
                    minute: "%A, %b %e, %H:%M",
                    hour: "%A, %b %e, %H:%M",
                    day: "%A, %b %e, %Y",
                    week: "Week from %A, %b %e, %Y",
                    month: "%B %Y",
                    year: "%Y"
                },
                footerFormat: "",
                padding: 8,
                snap: a.isTouchDevice ? 25 : 10,
                backgroundColor: H("#f7f7f7").setOpacity(.85).get(),
                borderWidth: 1,
                headerFormat: '\x3cspan style\x3d"font-size: 10px"\x3e{point.key}\x3c/span\x3e\x3cbr/\x3e',
                pointFormat: '\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e',
                shadow: !0,
                style: {
                    color: "#333333",
                    cursor: "default",
                    fontSize: "12px",
                    pointerEvents: "none",
                    whiteSpace: "nowrap"
                }
            },
            credits: {
                enabled: !0,
                href: "http://www.volody.com",
                position: {
                    align: "right",
                    x: -10,
                    verticalAlign: "bottom",
                    y: -5
                },
                style: {
                    cursor: "pointer",
                    color: "#999999",
                    fontSize: "9px"
                },
                text: ""
            }
        };
        a.setOptions = function(k) {
            a.defaultOptions = f(!0, a.defaultOptions, k);
            A();
            return a.defaultOptions
        };
        a.getOptions = function() {
            return a.defaultOptions
        };
        a.defaultPlotOptions = a.defaultOptions.plotOptions;
        A()
    })(L);
    (function(a) {
        var B = a.arrayMax,
            A = a.arrayMin,
            H = a.defined,
            G = a.destroyObjectProperties,
            r = a.each,
            f = a.erase,
            l = a.merge,
            q = a.pick;
        a.PlotLineOrBand = function(a, f) {
            this.axis = a;
            f && (this.options = f, this.id = f.id)
        };
        a.PlotLineOrBand.prototype = {
            render: function() {
                var a = this,
                    f = a.axis,
                    d = f.horiz,
                    c = a.options,
                    n = c.label,
                    z = a.label,
                    b = c.to,
                    p = c.from,
                    h = c.value,
                    t = H(p) && H(b),
                    D = H(h),
                    w = a.svgElem,
                    e = !w,
                    x = [],
                    C, E = c.color,
                    m = q(c.zIndex, 0),
                    y = c.events,
                    x = {
                        "class": "highcharts-plot-" + (t ? "band " : "line ") + (c.className || "")
                    },
                    I = {},
                    r = f.chart.renderer,
                    J = t ? "bands" : "lines",
                    g = f.log2lin;
                f.isLog && (p = g(p), b = g(b), h = g(h));
                D ? (x = {
                    stroke: E,
                    "stroke-width": c.width
                }, c.dashStyle && (x.dashstyle = c.dashStyle)) : t && (E && (x.fill = E), c.borderWidth && (x.stroke = c.borderColor, x["stroke-width"] = c.borderWidth));
                I.zIndex = m;
                J += "-" + m;
                (E = f.plotLinesAndBandsGroups[J]) || (f.plotLinesAndBandsGroups[J] = E = r.g("plot-" + J).attr(I).add());
                e && (a.svgElem = w = r.path().attr(x).add(E));
                if (D) x = f.getPlotLinePath(h, w.strokeWidth());
                else if (t) x = f.getPlotBandPath(p, b, c);
                else return;
                if (e && x && x.length) {
                    if (w.attr({
                            d: x
                        }),
                        y)
                        for (C in c = function(g) {
                                w.on(g, function(b) {
                                    y[g].apply(a, [b])
                                })
                            }, y) c(C)
                } else w && (x ? (w.show(), w.animate({
                    d: x
                })) : (w.hide(), z && (a.label = z = z.destroy())));
                n && H(n.text) && x && x.length && 0 < f.width && 0 < f.height && !x.flat ? (n = l({
                    align: d && t && "center",
                    x: d ? !t && 4 : 10,
                    verticalAlign: !d && t && "middle",
                    y: d ? t ? 16 : 10 : t ? 6 : -4,
                    rotation: d && !t && 90
                }, n), this.renderLabel(n, x, t, m)) : z && z.hide();
                return a
            },
            renderLabel: function(a, f, d, c) {
                var n = this.label,
                    k = this.axis.chart.renderer;
                n || (n = {
                    align: a.textAlign || a.align,
                    rotation: a.rotation,
                    "class": "highcharts-plot-" +
                        (d ? "band" : "line") + "-label " + (a.className || "")
                }, n.zIndex = c, this.label = n = k.text(a.text, 0, 0, a.useHTML).attr(n).add(), n.css(a.style));
                c = [f[1], f[4], d ? f[6] : f[1]];
                f = [f[2], f[5], d ? f[7] : f[2]];
                d = A(c);
                k = A(f);
                n.align(a, !1, {
                    x: d,
                    y: k,
                    width: B(c) - d,
                    height: B(f) - k
                });
                n.show()
            },
            destroy: function() {
                f(this.axis.plotLinesAndBands, this);
                delete this.axis;
                G(this)
            }
        };
        a.AxisPlotLineOrBandExtension = {
            getPlotBandPath: function(a, f) {
                var d = this.getPlotLinePath(f, null, null, !0),
                    c = this.getPlotLinePath(a, null, null, !0),
                    n = this.horiz,
                    k = 1;
                a =
                    a < this.min && f < this.min || a > this.max && f > this.max;
                c && d ? (a && (c.flat = c.toString() === d.toString(), k = 0), c.push(n && d[4] === c[4] ? d[4] + k : d[4], n || d[5] !== c[5] ? d[5] : d[5] + k, n && d[1] === c[1] ? d[1] + k : d[1], n || d[2] !== c[2] ? d[2] : d[2] + k)) : c = null;
                return c
            },
            addPlotBand: function(a) {
                return this.addPlotBandOrLine(a, "plotBands")
            },
            addPlotLine: function(a) {
                return this.addPlotBandOrLine(a, "plotLines")
            },
            addPlotBandOrLine: function(f, q) {
                var d = (new a.PlotLineOrBand(this, f)).render(),
                    c = this.userOptions;
                d && (q && (c[q] = c[q] || [], c[q].push(f)),
                    this.plotLinesAndBands.push(d));
                return d
            },
            removePlotBandOrLine: function(a) {
                for (var k = this.plotLinesAndBands, d = this.options, c = this.userOptions, n = k.length; n--;) k[n].id === a && k[n].destroy();
                r([d.plotLines || [], c.plotLines || [], d.plotBands || [], c.plotBands || []], function(c) {
                    for (n = c.length; n--;) c[n].id === a && f(c, c[n])
                })
            }
        }
    })(L);
    (function(a) {
        var B = a.correctFloat,
            A = a.defined,
            H = a.destroyObjectProperties,
            G = a.isNumber,
            r = a.merge,
            f = a.pick,
            l = a.deg2rad;
        a.Tick = function(a, f, l, d) {
            this.axis = a;
            this.pos = f;
            this.type = l || "";
            this.isNew = !0;
            l || d || this.addLabel()
        };
        a.Tick.prototype = {
            addLabel: function() {
                var a = this.axis,
                    k = a.options,
                    l = a.chart,
                    d = a.categories,
                    c = a.names,
                    n = this.pos,
                    z = k.labels,
                    b = a.tickPositions,
                    p = n === b[0],
                    h = n === b[b.length - 1],
                    c = d ? f(d[n], c[n], n) : n,
                    d = this.label,
                    b = b.info,
                    t;
                a.isDatetimeAxis && b && (t = k.dateTimeLabelFormats[b.higherRanks[n] || b.unitName]);
                this.isFirst = p;
                this.isLast = h;
                k = a.labelFormatter.call({
                    axis: a,
                    chart: l,
                    isFirst: p,
                    isLast: h,
                    dateTimeLabelFormat: t,
                    value: a.isLog ? B(a.lin2log(c)) : c
                });
                A(d) ? d && d.attr({
                    text: k
                }) : (this.labelLength =
                    (this.label = d = A(k) && z.enabled ? l.renderer.text(k, 0, 0, z.useHTML).css(r(z.style)).add(a.labelGroup) : null) && d.getBBox().width, this.rotation = 0)
            },
            getLabelSize: function() {
                return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0
            },
            handleOverflow: function(a) {
                var k = this.axis,
                    q = a.x,
                    d = k.chart.chartWidth,
                    c = k.chart.spacing,
                    n = f(k.labelLeft, Math.min(k.pos, c[3])),
                    c = f(k.labelRight, Math.max(k.pos + k.len, d - c[1])),
                    z = this.label,
                    b = this.rotation,
                    p = {
                        left: 0,
                        center: .5,
                        right: 1
                    }[k.labelAlign],
                    h = z.getBBox().width,
                    t = k.getSlotWidth(),
                    D = t,
                    w = 1,
                    e, x = {};
                if (b) 0 > b && q - p * h < n ? e = Math.round(q / Math.cos(b * l) - n) : 0 < b && q + p * h > c && (e = Math.round((d - q) / Math.cos(b * l)));
                else if (d = q + (1 - p) * h, q - p * h < n ? D = a.x + D * (1 - p) - n : d > c && (D = c - a.x + D * p, w = -1), D = Math.min(t, D), D < t && "center" === k.labelAlign && (a.x += w * (t - D - p * (t - Math.min(h, D)))), h > D || k.autoRotation && (z.styles || {}).width) e = D;
                e && (x.width = e, (k.options.labels.style || {}).textOverflow || (x.textOverflow = "ellipsis"), z.css(x))
            },
            getPosition: function(a, f, l, d) {
                var c = this.axis,
                    n = c.chart,
                    k = d && n.oldChartHeight ||
                    n.chartHeight;
                return {
                    x: a ? c.translate(f + l, null, null, d) + c.transB : c.left + c.offset + (c.opposite ? (d && n.oldChartWidth || n.chartWidth) - c.right - c.left : 0),
                    y: a ? k - c.bottom + c.offset - (c.opposite ? c.height : 0) : k - c.translate(f + l, null, null, d) - c.transB
                }
            },
            getLabelPosition: function(a, f, u, d, c, n, z, b) {
                var p = this.axis,
                    h = p.transA,
                    t = p.reversed,
                    k = p.staggerLines,
                    w = p.tickRotCorr || {
                        x: 0,
                        y: 0
                    },
                    e = c.y;
                A(e) || (e = 0 === p.side ? u.rotation ? -8 : -u.getBBox().height : 2 === p.side ? w.y + 8 : Math.cos(u.rotation * l) * (w.y - u.getBBox(!1, 0).height / 2));
                a = a + c.x +
                    w.x - (n && d ? n * h * (t ? -1 : 1) : 0);
                f = f + e - (n && !d ? n * h * (t ? 1 : -1) : 0);
                k && (u = z / (b || 1) % k, p.opposite && (u = k - u - 1), f += p.labelOffset / k * u);
                return {
                    x: a,
                    y: Math.round(f)
                }
            },
            getMarkPath: function(a, f, l, d, c, n) {
                return n.crispLine(["M", a, f, "L", a + (c ? 0 : -l), f + (c ? l : 0)], d)
            },
            renderGridLine: function(a, f, l) {
                var d = this.axis,
                    c = d.options,
                    n = this.gridLine,
                    k = {},
                    b = this.pos,
                    p = this.type,
                    h = d.tickmarkOffset,
                    t = d.chart.renderer,
                    D = p ? p + "Grid" : "grid",
                    w = c[D + "LineWidth"],
                    e = c[D + "LineColor"],
                    c = c[D + "LineDashStyle"];
                n || (k.stroke = e, k["stroke-width"] = w, c && (k.dashstyle =
                    c), p || (k.zIndex = 1), a && (k.opacity = 0), this.gridLine = n = t.path().attr(k).addClass("highcharts-" + (p ? p + "-" : "") + "grid-line").add(d.gridGroup));
                if (!a && n && (a = d.getPlotLinePath(b + h, n.strokeWidth() * l, a, !0))) n[this.isNew ? "attr" : "animate"]({
                    d: a,
                    opacity: f
                })
            },
            renderMark: function(a, k, l) {
                var d = this.axis,
                    c = d.options,
                    n = d.chart.renderer,
                    q = this.type,
                    b = q ? q + "Tick" : "tick",
                    p = d.tickSize(b),
                    h = this.mark,
                    t = !h,
                    D = a.x;
                a = a.y;
                var w = f(c[b + "Width"], !q && d.isXAxis ? 1 : 0),
                    c = c[b + "Color"];
                p && (d.opposite && (p[0] = -p[0]), t && (this.mark = h = n.path().addClass("highcharts-" +
                    (q ? q + "-" : "") + "tick").add(d.axisGroup), h.attr({
                    stroke: c,
                    "stroke-width": w
                })), h[t ? "attr" : "animate"]({
                    d: this.getMarkPath(D, a, p[0], h.strokeWidth() * l, d.horiz, n),
                    opacity: k
                }))
            },
            renderLabel: function(a, k, l, d) {
                var c = this.axis,
                    n = c.horiz,
                    q = c.options,
                    b = this.label,
                    p = q.labels,
                    h = p.step,
                    t = c.tickmarkOffset,
                    D = !0,
                    w = a.x;
                a = a.y;
                b && G(w) && (b.xy = a = this.getLabelPosition(w, a, b, n, p, t, d, h), this.isFirst && !this.isLast && !f(q.showFirstLabel, 1) || this.isLast && !this.isFirst && !f(q.showLastLabel, 1) ? D = !1 : !n || c.isRadial || p.step || p.rotation ||
                    k || 0 === l || this.handleOverflow(a), h && d % h && (D = !1), D && G(a.y) ? (a.opacity = l, b[this.isNew ? "attr" : "animate"](a)) : b.attr("y", -9999), this.isNew = !1)
            },
            render: function(a, k, l) {
                var d = this.axis,
                    c = d.horiz,
                    n = this.getPosition(c, this.pos, d.tickmarkOffset, k),
                    q = n.x,
                    b = n.y,
                    d = c && q === d.pos + d.len || !c && b === d.pos ? -1 : 1;
                l = f(l, 1);
                this.isActive = !0;
                this.renderGridLine(k, l, d);
                this.renderMark(n, l, d);
                this.renderLabel(n, k, l, a)
            },
            destroy: function() {
                H(this, this.axis)
            }
        }
    })(L);
    (function(a) {
        var B = a.addEvent,
            A = a.animObject,
            H = a.arrayMax,
            G = a.arrayMin,
            r = a.AxisPlotLineOrBandExtension,
            f = a.color,
            l = a.correctFloat,
            q = a.defaultOptions,
            k = a.defined,
            u = a.deg2rad,
            d = a.destroyObjectProperties,
            c = a.each,
            n = a.extend,
            z = a.fireEvent,
            b = a.format,
            p = a.getMagnitude,
            h = a.grep,
            t = a.inArray,
            D = a.isArray,
            w = a.isNumber,
            e = a.isString,
            x = a.merge,
            C = a.normalizeTickInterval,
            E = a.pick,
            m = a.PlotLineOrBand,
            y = a.removeEvent,
            I = a.splat,
            K = a.syncTimeout,
            J = a.Tick;
        a.Axis = function() {
            this.init.apply(this, arguments)
        };
        a.Axis.prototype = {
            defaultOptions: {
                dateTimeLabelFormats: {
                    millisecond: "%H:%M:%S.%L",
                    second: "%H:%M:%S",
                    minute: "%H:%M",
                    hour: "%H:%M",
                    day: "%e. %b",
                    week: "%e. %b",
                    month: "%b '%y",
                    year: "%Y"
                },
                endOnTick: !1,
                labels: {
                    enabled: !0,
                    style: {
                        color: "#666666",
                        cursor: "default",
                        fontSize: "11px"
                    },
                    x: 0
                },
                minPadding: .01,
                maxPadding: .01,
                minorTickLength: 2,
                minorTickPosition: "outside",
                startOfWeek: 1,
                startOnTick: !1,
                tickLength: 10,
                tickmarkPlacement: "between",
                tickPixelInterval: 100,
                tickPosition: "outside",
                title: {
                    align: "middle",
                    style: {
                        color: "#666666"
                    }
                },
                type: "linear",
                minorGridLineColor: "#f2f2f2",
                minorGridLineWidth: 1,
                minorTickColor: "#999999",
                lineColor: "#ccd6eb",
                lineWidth: 1,
                gridLineColor: "#e6e6e6",
                tickColor: "#ccd6eb"
            },
            defaultYAxisOptions: {
                endOnTick: !0,
                tickPixelInterval: 72,
                showLastLabel: !0,
                labels: {
                    x: -8
                },
                maxPadding: .05,
                minPadding: .05,
                startOnTick: !0,
                title: {
                    rotation: 270,
                    text: "Values"
                },
                stackLabels: {
                    enabled: !1,
                    formatter: function() {
                        return a.numberFormat(this.total, -1)
                    },
                    style: {
                        fontSize: "11px",
                        fontWeight: "bold",
                        color: "#000000",
                        textOutline: "1px contrast"
                    }
                },
                gridLineWidth: 1,
                lineWidth: 0
            },
            defaultLeftAxisOptions: {
                labels: {
                    x: -15
                },
                title: {
                    rotation: 270
                }
            },
            defaultRightAxisOptions: {
                labels: {
                    x: 15
                },
                title: {
                    rotation: 90
                }
            },
            defaultBottomAxisOptions: {
                labels: {
                    autoRotation: [-45],
                    x: 0
                },
                title: {
                    rotation: 0
                }
            },
            defaultTopAxisOptions: {
                labels: {
                    autoRotation: [-45],
                    x: 0
                },
                title: {
                    rotation: 0
                }
            },
            init: function(a, b) {
                var g = b.isX;
                this.chart = a;
                this.horiz = a.inverted ? !g : g;
                this.isXAxis = g;
                this.coll = this.coll || (g ? "xAxis" : "yAxis");
                this.opposite = b.opposite;
                this.side = b.side || (this.horiz ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3);
                this.setOptions(b);
                var c = this.options,
                    e = c.type;
                this.labelFormatter = c.labels.formatter ||
                    this.defaultLabelFormatter;
                this.userOptions = b;
                this.minPixelPadding = 0;
                this.reversed = c.reversed;
                this.visible = !1 !== c.visible;
                this.zoomEnabled = !1 !== c.zoomEnabled;
                this.hasNames = "category" === e || !0 === c.categories;
                this.categories = c.categories || this.hasNames;
                this.names = this.names || [];
                this.plotLinesAndBandsGroups = {};
                this.isLog = "logarithmic" === e;
                this.isDatetimeAxis = "datetime" === e;
                this.positiveValuesOnly = this.isLog && !this.allowNegativeLog;
                this.isLinked = k(c.linkedTo);
                this.ticks = {};
                this.labelEdge = [];
                this.minorTicks = {};
                this.plotLinesAndBands = [];
                this.alternateBands = {};
                this.len = 0;
                this.minRange = this.userMinRange = c.minRange || c.maxZoom;
                this.range = c.range;
                this.offset = c.offset || 0;
                this.stacks = {};
                this.oldStacks = {};
                this.stacksTouched = 0;
                this.min = this.max = null;
                this.crosshair = E(c.crosshair, I(a.options.tooltip.crosshairs)[g ? 0 : 1], !1);
                var h;
                b = this.options.events; - 1 === t(this, a.axes) && (g ? a.axes.splice(a.xAxis.length, 0, this) : a.axes.push(this), a[this.coll].push(this));
                this.series = this.series || [];
                a.inverted && g && void 0 === this.reversed &&
                    (this.reversed = !0);
                this.removePlotLine = this.removePlotBand = this.removePlotBandOrLine;
                for (h in b) B(this, h, b[h]);
                this.lin2log = c.linearToLogConverter || this.lin2log;
                this.isLog && (this.val2lin = this.log2lin, this.lin2val = this.lin2log)
            },
            setOptions: function(a) {
                this.options = x(this.defaultOptions, "yAxis" === this.coll && this.defaultYAxisOptions, [this.defaultTopAxisOptions, this.defaultRightAxisOptions, this.defaultBottomAxisOptions, this.defaultLeftAxisOptions][this.side], x(q[this.coll], a))
            },
            defaultLabelFormatter: function() {
                var g =
                    this.axis,
                    c = this.value,
                    e = g.categories,
                    h = this.dateTimeLabelFormat,
                    m = q.lang,
                    d = m.numericSymbols,
                    m = m.numericSymbolMagnitude || 1E3,
                    v = d && d.length,
                    p, t = g.options.labels.format,
                    g = g.isLog ? Math.abs(c) : g.tickInterval;
                if (t) p = b(t, this);
                else if (e) p = c;
                else if (h) p = a.dateFormat(h, c);
                else if (v && 1E3 <= g)
                    for (; v-- && void 0 === p;) e = Math.pow(m, v + 1), g >= e && 0 === 10 * c % e && null !== d[v] && 0 !== c && (p = a.numberFormat(c / e, -1) + d[v]);
                void 0 === p && (p = 1E4 <= Math.abs(c) ? a.numberFormat(c, -1) : a.numberFormat(c, -1, void 0, ""));
                return p
            },
            getSeriesExtremes: function() {
                var a =
                    this,
                    b = a.chart;
                a.hasVisibleSeries = !1;
                a.dataMin = a.dataMax = a.threshold = null;
                a.softThreshold = !a.isXAxis;
                a.buildStacks && a.buildStacks();
                c(a.series, function(g) {
                    if (g.visible || !b.options.chart.ignoreHiddenSeries) {
                        var c = g.options,
                            e = c.threshold,
                            m;
                        a.hasVisibleSeries = !0;
                        a.positiveValuesOnly && 0 >= e && (e = null);
                        if (a.isXAxis) c = g.xData, c.length && (g = G(c), w(g) || g instanceof Date || (c = h(c, function(a) {
                            return w(a)
                        }), g = G(c)), a.dataMin = Math.min(E(a.dataMin, c[0]), g), a.dataMax = Math.max(E(a.dataMax, c[0]), H(c)));
                        else if (g.getExtremes(),
                            m = g.dataMax, g = g.dataMin, k(g) && k(m) && (a.dataMin = Math.min(E(a.dataMin, g), g), a.dataMax = Math.max(E(a.dataMax, m), m)), k(e) && (a.threshold = e), !c.softThreshold || a.positiveValuesOnly) a.softThreshold = !1
                    }
                })
            },
            translate: function(a, b, c, e, h, m) {
                var g = this.linkedParent || this,
                    F = 1,
                    p = 0,
                    d = e ? g.oldTransA : g.transA;
                e = e ? g.oldMin : g.min;
                var t = g.minPixelPadding;
                h = (g.isOrdinal || g.isBroken || g.isLog && h) && g.lin2val;
                d || (d = g.transA);
                c && (F *= -1, p = g.len);
                g.reversed && (F *= -1, p -= F * (g.sector || g.len));
                b ? (a = (a * F + p - t) / d + e, h && (a = g.lin2val(a))) :
                    (h && (a = g.val2lin(a)), a = F * (a - e) * d + p + F * t + (w(m) ? d * m : 0));
                return a
            },
            toPixels: function(a, b) {
                return this.translate(a, !1, !this.horiz, null, !0) + (b ? 0 : this.pos)
            },
            toValue: function(a, b) {
                return this.translate(a - (b ? 0 : this.pos), !0, !this.horiz, null, !0)
            },
            getPlotLinePath: function(a, b, c, e, h) {
                var g = this.chart,
                    m = this.left,
                    F = this.top,
                    p, d, t = c && g.oldChartHeight || g.chartHeight,
                    f = c && g.oldChartWidth || g.chartWidth,
                    n;
                p = this.transB;
                var y = function(a, b, g) {
                    if (a < b || a > g) e ? a = Math.min(Math.max(b, a), g) : n = !0;
                    return a
                };
                h = E(h, this.translate(a,
                    null, null, c));
                a = c = Math.round(h + p);
                p = d = Math.round(t - h - p);
                w(h) ? this.horiz ? (p = F, d = t - this.bottom, a = c = y(a, m, m + this.width)) : (a = m, c = f - this.right, p = d = y(p, F, F + this.height)) : n = !0;
                return n && !e ? null : g.renderer.crispLine(["M", a, p, "L", c, d], b || 1)
            },
            getLinearTickPositions: function(a, b, c) {
                var g, e = l(Math.floor(b / a) * a);
                c = l(Math.ceil(c / a) * a);
                var h = [];
                if (this.single) return [b];
                for (b = e; b <= c;) {
                    h.push(b);
                    b = l(b + a);
                    if (b === g) break;
                    g = b
                }
                return h
            },
            getMinorTickPositions: function() {
                var a = this,
                    b = a.options,
                    e = a.tickPositions,
                    h = a.minorTickInterval,
                    m = [],
                    p = a.pointRangePadding || 0,
                    v = a.min - p,
                    p = a.max + p,
                    d = p - v;
                if (d && d / h < a.len / 3)
                    if (a.isLog) c(this.paddedTicks, function(b, g, c) {
                        g && m.push.apply(m, a.getLogTickPositions(h, c[g - 1], c[g], !0))
                    });
                    else if (a.isDatetimeAxis && "auto" === b.minorTickInterval) m = m.concat(a.getTimeTicks(a.normalizeTimeTickInterval(h), v, p, b.startOfWeek));
                else
                    for (b = v + (e[0] - v) % h; b <= p && b !== m[0]; b += h) m.push(b);
                0 !== m.length && a.trimTicks(m);
                return m
            },
            adjustForMinRange: function() {
                var a = this.options,
                    b = this.min,
                    e = this.max,
                    h, m = this.dataMax - this.dataMin >=
                    this.minRange,
                    p, v, d, t, f, n;
                this.isXAxis && void 0 === this.minRange && !this.isLog && (k(a.min) || k(a.max) ? this.minRange = null : (c(this.series, function(a) {
                    t = a.xData;
                    for (v = f = a.xIncrement ? 1 : t.length - 1; 0 < v; v--)
                        if (d = t[v] - t[v - 1], void 0 === p || d < p) p = d
                }), this.minRange = Math.min(5 * p, this.dataMax - this.dataMin)));
                e - b < this.minRange && (n = this.minRange, h = (n - e + b) / 2, h = [b - h, E(a.min, b - h)], m && (h[2] = this.isLog ? this.log2lin(this.dataMin) : this.dataMin), b = H(h), e = [b + n, E(a.max, b + n)], m && (e[2] = this.isLog ? this.log2lin(this.dataMax) : this.dataMax),
                    e = G(e), e - b < n && (h[0] = e - n, h[1] = E(a.min, e - n), b = H(h)));
                this.min = b;
                this.max = e
            },
            getClosest: function() {
                var a;
                this.categories ? a = 1 : c(this.series, function(b) {
                    var g = b.closestPointRange,
                        c = b.visible || !b.chart.options.chart.ignoreHiddenSeries;
                    !b.noSharedTooltip && k(g) && c && (a = k(a) ? Math.min(a, g) : g)
                });
                return a
            },
            nameToX: function(a) {
                var b = D(this.categories),
                    g = b ? this.categories : this.names,
                    c = a.options.x,
                    e;
                a.series.requireSorting = !1;
                k(c) || (c = !1 === this.options.uniqueNames ? a.series.autoIncrement() : t(a.name, g)); - 1 === c ? b ||
                    (e = g.length) : e = c;
                void 0 !== e && (this.names[e] = a.name);
                return e
            },
            updateNames: function() {
                var a = this;
                0 < this.names.length && (this.names.length = 0, this.minRange = void 0, c(this.series || [], function(b) {
                    b.xIncrement = null;
                    if (!b.points || b.isDirtyData) b.processData(), b.generatePoints();
                    c(b.points, function(g, c) {
                        var e;
                        g.options && (e = a.nameToX(g), void 0 !== e && e !== g.x && (g.x = e, b.xData[c] = e))
                    })
                }))
            },
            setAxisTranslation: function(a) {
                var b = this,
                    g = b.max - b.min,
                    h = b.axisPointRange || 0,
                    m, p = 0,
                    v = 0,
                    d = b.linkedParent,
                    t = !!b.categories,
                    f =
                    b.transA,
                    n = b.isXAxis;
                if (n || t || h) m = b.getClosest(), d ? (p = d.minPointOffset, v = d.pointRangePadding) : c(b.series, function(a) {
                    var g = t ? 1 : n ? E(a.options.pointRange, m, 0) : b.axisPointRange || 0;
                    a = a.options.pointPlacement;
                    h = Math.max(h, g);
                    b.single || (p = Math.max(p, e(a) ? 0 : g / 2), v = Math.max(v, "on" === a ? 0 : g))
                }), d = b.ordinalSlope && m ? b.ordinalSlope / m : 1, b.minPointOffset = p *= d, b.pointRangePadding = v *= d, b.pointRange = Math.min(h, g), n && (b.closestPointRange = m);
                a && (b.oldTransA = f);
                b.translationSlope = b.transA = f = b.options.staticScale || b.len /
                    (g + v || 1);
                b.transB = b.horiz ? b.left : b.bottom;
                b.minPixelPadding = f * p
            },
            minFromRange: function() {
                return this.max - this.range
            },
            setTickInterval: function(b) {
                var g = this,
                    e = g.chart,
                    h = g.options,
                    m = g.isLog,
                    d = g.log2lin,
                    v = g.isDatetimeAxis,
                    t = g.isXAxis,
                    f = g.isLinked,
                    n = h.maxPadding,
                    y = h.minPadding,
                    x = h.tickInterval,
                    D = h.tickPixelInterval,
                    I = g.categories,
                    q = g.threshold,
                    u = g.softThreshold,
                    r, K, J, A;
                v || I || f || this.getTickAmount();
                J = E(g.userMin, h.min);
                A = E(g.userMax, h.max);
                f ? (g.linkedParent = e[g.coll][h.linkedTo], e = g.linkedParent.getExtremes(),
                    g.min = E(e.min, e.dataMin), g.max = E(e.max, e.dataMax), h.type !== g.linkedParent.options.type && a.error(11, 1)) : (!u && k(q) && (g.dataMin >= q ? (r = q, y = 0) : g.dataMax <= q && (K = q, n = 0)), g.min = E(J, r, g.dataMin), g.max = E(A, K, g.dataMax));
                m && (g.positiveValuesOnly && !b && 0 >= Math.min(g.min, E(g.dataMin, g.min)) && a.error(10, 1), g.min = l(d(g.min), 15), g.max = l(d(g.max), 15));
                g.range && k(g.max) && (g.userMin = g.min = J = Math.max(g.min, g.minFromRange()), g.userMax = A = g.max, g.range = null);
                z(g, "foundExtremes");
                g.beforePadding && g.beforePadding();
                g.adjustForMinRange();
                !(I || g.axisPointRange || g.usePercentage || f) && k(g.min) && k(g.max) && (d = g.max - g.min) && (!k(J) && y && (g.min -= d * y), !k(A) && n && (g.max += d * n));
                w(h.softMin) && (g.min = Math.min(g.min, h.softMin));
                w(h.softMax) && (g.max = Math.max(g.max, h.softMax));
                w(h.floor) && (g.min = Math.max(g.min, h.floor));
                w(h.ceiling) && (g.max = Math.min(g.max, h.ceiling));
                u && k(g.dataMin) && (q = q || 0, !k(J) && g.min < q && g.dataMin >= q ? g.min = q : !k(A) && g.max > q && g.dataMax <= q && (g.max = q));
                g.tickInterval = g.min === g.max || void 0 === g.min || void 0 === g.max ? 1 : f && !x && D === g.linkedParent.options.tickPixelInterval ?
                    x = g.linkedParent.tickInterval : E(x, this.tickAmount ? (g.max - g.min) / Math.max(this.tickAmount - 1, 1) : void 0, I ? 1 : (g.max - g.min) * D / Math.max(g.len, D));
                t && !b && c(g.series, function(a) {
                    a.processData(g.min !== g.oldMin || g.max !== g.oldMax)
                });
                g.setAxisTranslation(!0);
                g.beforeSetTickPositions && g.beforeSetTickPositions();
                g.postProcessTickInterval && (g.tickInterval = g.postProcessTickInterval(g.tickInterval));
                g.pointRange && !x && (g.tickInterval = Math.max(g.pointRange, g.tickInterval));
                b = E(h.minTickInterval, g.isDatetimeAxis && g.closestPointRange);
                !x && g.tickInterval < b && (g.tickInterval = b);
                v || m || x || (g.tickInterval = C(g.tickInterval, null, p(g.tickInterval), E(h.allowDecimals, !(.5 < g.tickInterval && 5 > g.tickInterval && 1E3 < g.max && 9999 > g.max)), !!this.tickAmount));
                this.tickAmount || (g.tickInterval = g.unsquish());
                this.setTickPositions()
            },
            setTickPositions: function() {
                var a = this.options,
                    b, c = a.tickPositions,
                    e = a.tickPositioner,
                    h = a.startOnTick,
                    m = a.endOnTick;
                this.tickmarkOffset = this.categories && "between" === a.tickmarkPlacement && 1 === this.tickInterval ? .5 : 0;
                this.minorTickInterval =
                    "auto" === a.minorTickInterval && this.tickInterval ? this.tickInterval / 5 : a.minorTickInterval;
                this.single = this.min === this.max && k(this.min) && !this.tickAmount && !1 !== a.allowDecimals;
                this.tickPositions = b = c && c.slice();
                !b && (b = this.isDatetimeAxis ? this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval, a.units), this.min, this.max, a.startOfWeek, this.ordinalPositions, this.closestPointRange, !0) : this.isLog ? this.getLogTickPositions(this.tickInterval, this.min, this.max) : this.getLinearTickPositions(this.tickInterval,
                    this.min, this.max), b.length > this.len && (b = [b[0], b.pop()]), this.tickPositions = b, e && (e = e.apply(this, [this.min, this.max]))) && (this.tickPositions = b = e);
                this.paddedTicks = b.slice(0);
                this.trimTicks(b, h, m);
                this.isLinked || (this.single && (this.min -= .5, this.max += .5), c || e || this.adjustTickAmount())
            },
            trimTicks: function(a, b, c) {
                var g = a[0],
                    e = a[a.length - 1],
                    h = this.minPointOffset || 0;
                if (!this.isLinked) {
                    if (b && -Infinity !== g) this.min = g;
                    else
                        for (; this.min - h > a[0];) a.shift();
                    if (c) this.max = e;
                    else
                        for (; this.max + h < a[a.length - 1];) a.pop();
                    0 === a.length && k(g) && a.push((e + g) / 2)
                }
            },
            alignToOthers: function() {
                var a = {},
                    b, e = this.options;
                !1 === this.chart.options.chart.alignTicks || !1 === e.alignTicks || this.isLog || c(this.chart[this.coll], function(g) {
                    var c = g.options,
                        c = [g.horiz ? c.left : c.top, c.width, c.height, c.pane].join();
                    g.series.length && (a[c] ? b = !0 : a[c] = 1)
                });
                return b
            },
            getTickAmount: function() {
                var a = this.options,
                    b = a.tickAmount,
                    c = a.tickPixelInterval;
                !k(a.tickInterval) && this.len < c && !this.isRadial && !this.isLog && a.startOnTick && a.endOnTick && (b = 2);
                !b && this.alignToOthers() &&
                    (b = Math.ceil(this.len / c) + 1);
                4 > b && (this.finalTickAmt = b, b = 5);
                this.tickAmount = b
            },
            adjustTickAmount: function() {
                var a = this.tickInterval,
                    b = this.tickPositions,
                    c = this.tickAmount,
                    e = this.finalTickAmt,
                    h = b && b.length;
                if (h < c) {
                    for (; b.length < c;) b.push(l(b[b.length - 1] + a));
                    this.transA *= (h - 1) / (c - 1);
                    this.max = b[b.length - 1]
                } else h > c && (this.tickInterval *= 2, this.setTickPositions());
                if (k(e)) {
                    for (a = c = b.length; a--;)(3 === e && 1 === a % 2 || 2 >= e && 0 < a && a < c - 1) && b.splice(a, 1);
                    this.finalTickAmt = void 0
                }
            },
            setScale: function() {
                var a, b;
                this.oldMin =
                    this.min;
                this.oldMax = this.max;
                this.oldAxisLength = this.len;
                this.setAxisSize();
                b = this.len !== this.oldAxisLength;
                c(this.series, function(b) {
                    if (b.isDirtyData || b.isDirty || b.xAxis.isDirty) a = !0
                });
                b || a || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax || this.alignToOthers() ? (this.resetStacks && this.resetStacks(), this.forceRedraw = !1, this.getSeriesExtremes(), this.setTickInterval(), this.oldUserMin = this.userMin, this.oldUserMax = this.userMax, this.isDirty || (this.isDirty =
                    b || this.min !== this.oldMin || this.max !== this.oldMax)) : this.cleanStacks && this.cleanStacks()
            },
            setExtremes: function(a, b, e, h, m) {
                var g = this,
                    p = g.chart;
                e = E(e, !0);
                c(g.series, function(a) {
                    delete a.kdTree
                });
                m = n(m, {
                    min: a,
                    max: b
                });
                z(g, "setExtremes", m, function() {
                    g.userMin = a;
                    g.userMax = b;
                    g.eventArgs = m;
                    e && p.redraw(h)
                })
            },
            zoom: function(a, b) {
                var g = this.dataMin,
                    c = this.dataMax,
                    e = this.options,
                    h = Math.min(g, E(e.min, g)),
                    e = Math.max(c, E(e.max, c));
                if (a !== this.min || b !== this.max) this.allowZoomOutside || (k(g) && (a < h && (a = h), a > e && (a = e)),
                    k(c) && (b < h && (b = h), b > e && (b = e))), this.displayBtn = void 0 !== a || void 0 !== b, this.setExtremes(a, b, !1, void 0, {
                    trigger: "zoom"
                });
                return !0
            },
            setAxisSize: function() {
                var a = this.chart,
                    b = this.options,
                    c = b.offsets || [0, 0, 0, 0],
                    e = this.horiz,
                    h = E(b.width, a.plotWidth - c[3] + c[1]),
                    m = E(b.height, a.plotHeight - c[0] + c[2]),
                    p = E(b.top, a.plotTop + c[0]),
                    b = E(b.left, a.plotLeft + c[3]),
                    c = /%$/;
                c.test(m) && (m = Math.round(parseFloat(m) / 100 * a.plotHeight));
                c.test(p) && (p = Math.round(parseFloat(p) / 100 * a.plotHeight + a.plotTop));
                this.left = b;
                this.top = p;
                this.width = h;
                this.height = m;
                this.bottom = a.chartHeight - m - p;
                this.right = a.chartWidth - h - b;
                this.len = Math.max(e ? h : m, 0);
                this.pos = e ? b : p
            },
            getExtremes: function() {
                var a = this.isLog,
                    b = this.lin2log;
                return {
                    min: a ? l(b(this.min)) : this.min,
                    max: a ? l(b(this.max)) : this.max,
                    dataMin: this.dataMin,
                    dataMax: this.dataMax,
                    userMin: this.userMin,
                    userMax: this.userMax
                }
            },
            getThreshold: function(a) {
                var b = this.isLog,
                    g = this.lin2log,
                    c = b ? g(this.min) : this.min,
                    b = b ? g(this.max) : this.max;
                null === a ? a = c : c > a ? a = c : b < a && (a = b);
                return this.translate(a, 0,
                    1, 0, 1)
            },
            autoLabelAlign: function(a) {
                a = (E(a, 0) - 90 * this.side + 720) % 360;
                return 15 < a && 165 > a ? "right" : 195 < a && 345 > a ? "left" : "center"
            },
            tickSize: function(a) {
                var b = this.options,
                    g = b[a + "Length"],
                    c = E(b[a + "Width"], "tick" === a && this.isXAxis ? 1 : 0);
                if (c && g) return "inside" === b[a + "Position"] && (g = -g), [g, c]
            },
            labelMetrics: function() {
                return this.chart.renderer.fontMetrics(this.options.labels.style && this.options.labels.style.fontSize, this.ticks[0] && this.ticks[0].label)
            },
            unsquish: function() {
                var a = this.options.labels,
                    b = this.horiz,
                    e = this.tickInterval,
                    h = e,
                    m = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / e),
                    p, d = a.rotation,
                    t = this.labelMetrics(),
                    f, n = Number.MAX_VALUE,
                    y, w = function(a) {
                        a /= m || 1;
                        a = 1 < a ? Math.ceil(a) : 1;
                        return a * e
                    };
                b ? (y = !a.staggerLines && !a.step && (k(d) ? [d] : m < E(a.autoRotationLimit, 80) && a.autoRotation)) && c(y, function(a) {
                    var b;
                    if (a === d || a && -90 <= a && 90 >= a) f = w(Math.abs(t.h / Math.sin(u * a))), b = f + Math.abs(a / 360), b < n && (n = b, p = a, h = f)
                }) : a.step || (h = w(t.h));
                this.autoRotation = y;
                this.labelRotation = E(p, d);
                return h
            },
            getSlotWidth: function() {
                var a =
                    this.chart,
                    b = this.horiz,
                    c = this.options.labels,
                    e = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1),
                    h = a.margin[3];
                return b && 2 > (c.step || 0) && !c.rotation && (this.staggerLines || 1) * this.len / e || !b && (h && h - a.spacing[3] || .33 * a.chartWidth)
            },
            renderUnsquish: function() {
                var a = this.chart,
                    b = a.renderer,
                    h = this.tickPositions,
                    m = this.ticks,
                    p = this.options.labels,
                    d = this.horiz,
                    v = this.getSlotWidth(),
                    t = Math.max(1, Math.round(v - 2 * (p.padding || 5))),
                    f = {},
                    n = this.labelMetrics(),
                    y = p.style && p.style.textOverflow,
                    k, w = 0,
                    D, l;
                e(p.rotation) ||
                    (f.rotation = p.rotation || 0);
                c(h, function(a) {
                    (a = m[a]) && a.labelLength > w && (w = a.labelLength)
                });
                this.maxLabelLength = w;
                if (this.autoRotation) w > t && w > n.h ? f.rotation = this.labelRotation : this.labelRotation = 0;
                else if (v && (k = {
                        width: t + "px"
                    }, !y))
                    for (k.textOverflow = "clip", D = h.length; !d && D--;)
                        if (l = h[D], t = m[l].label) t.styles && "ellipsis" === t.styles.textOverflow ? t.css({
                            textOverflow: "clip"
                        }) : m[l].labelLength > v && t.css({
                            width: v + "px"
                        }), t.getBBox().height > this.len / h.length - (n.h - n.f) && (t.specCss = {
                            textOverflow: "ellipsis"
                        });
                f.rotation &&
                    (k = {
                        width: (w > .5 * a.chartHeight ? .33 * a.chartHeight : a.chartHeight) + "px"
                    }, y || (k.textOverflow = "ellipsis"));
                if (this.labelAlign = p.align || this.autoLabelAlign(this.labelRotation)) f.align = this.labelAlign;
                c(h, function(a) {
                    var b = (a = m[a]) && a.label;
                    b && (b.attr(f), k && b.css(x(k, b.specCss)), delete b.specCss, a.rotation = f.rotation)
                });
                this.tickRotCorr = b.rotCorr(n.b, this.labelRotation || 0, 0 !== this.side)
            },
            hasData: function() {
                return this.hasVisibleSeries || k(this.min) && k(this.max) && !!this.tickPositions
            },
            addTitle: function(a) {
                var b =
                    this.chart.renderer,
                    c = this.horiz,
                    g = this.opposite,
                    e = this.options.title,
                    h;
                this.axisTitle || ((h = e.textAlign) || (h = (c ? {
                    low: "left",
                    middle: "center",
                    high: "right"
                } : {
                    low: g ? "right" : "left",
                    middle: "center",
                    high: g ? "left" : "right"
                })[e.align]), this.axisTitle = b.text(e.text, 0, 0, e.useHTML).attr({
                    zIndex: 7,
                    rotation: e.rotation || 0,
                    align: h
                }).addClass("highcharts-axis-title").css(e.style).add(this.axisGroup), this.axisTitle.isNew = !0);
                this.axisTitle[a ? "show" : "hide"](!0)
            },
            generateTick: function(a) {
                var b = this.ticks;
                b[a] ? b[a].addLabel() :
                    b[a] = new J(this, a)
            },
            getOffset: function() {
                var a = this,
                    b = a.chart,
                    e = b.renderer,
                    h = a.options,
                    m = a.tickPositions,
                    p = a.ticks,
                    d = a.horiz,
                    t = a.side,
                    f = b.inverted ? [1, 0, 3, 2][t] : t,
                    n, y, w = 0,
                    x, D = 0,
                    l = h.title,
                    C = h.labels,
                    q = 0,
                    I = b.axisOffset,
                    b = b.clipOffset,
                    u = [-1, 1, 1, -1][t],
                    z, r = h.className,
                    K = a.axisParent,
                    J = this.tickSize("tick");
                n = a.hasData();
                a.showAxis = y = n || E(h.showEmpty, !0);
                a.staggerLines = a.horiz && C.staggerLines;
                a.axisGroup || (a.gridGroup = e.g("grid").attr({
                    zIndex: h.gridZIndex || 1
                }).addClass("highcharts-" + this.coll.toLowerCase() +
                    "-grid " + (r || "")).add(K), a.axisGroup = e.g("axis").attr({
                    zIndex: h.zIndex || 2
                }).addClass("highcharts-" + this.coll.toLowerCase() + " " + (r || "")).add(K), a.labelGroup = e.g("axis-labels").attr({
                    zIndex: C.zIndex || 7
                }).addClass("highcharts-" + a.coll.toLowerCase() + "-labels " + (r || "")).add(K));
                if (n || a.isLinked) c(m, function(b, c) {
                        a.generateTick(b, c)
                    }), a.renderUnsquish(), !1 === C.reserveSpace || 0 !== t && 2 !== t && {
                        1: "left",
                        3: "right"
                    }[t] !== a.labelAlign && "center" !== a.labelAlign || c(m, function(a) {
                        q = Math.max(p[a].getLabelSize(), q)
                    }),
                    a.staggerLines && (q *= a.staggerLines, a.labelOffset = q * (a.opposite ? -1 : 1));
                else
                    for (z in p) p[z].destroy(), delete p[z];
                l && l.text && !1 !== l.enabled && (a.addTitle(y), y && (w = a.axisTitle.getBBox()[d ? "height" : "width"], x = l.offset, D = k(x) ? 0 : E(l.margin, d ? 5 : 10)));
                a.renderLine();
                a.offset = u * E(h.offset, I[t]);
                a.tickRotCorr = a.tickRotCorr || {
                    x: 0,
                    y: 0
                };
                e = 0 === t ? -a.labelMetrics().h : 2 === t ? a.tickRotCorr.y : 0;
                D = Math.abs(q) + D;
                q && (D = D - e + u * (d ? E(C.y, a.tickRotCorr.y + 8 * u) : C.x));
                a.axisTitleMargin = E(x, D);
                I[t] = Math.max(I[t], a.axisTitleMargin +
                    w + u * a.offset, D, n && m.length && J ? J[0] + u * a.offset : 0);
                h = h.offset ? 0 : 2 * Math.floor(a.axisLine.strokeWidth() / 2);
                b[f] = Math.max(b[f], h)
            },
            getLinePath: function(a) {
                var b = this.chart,
                    c = this.opposite,
                    g = this.offset,
                    e = this.horiz,
                    h = this.left + (c ? this.width : 0) + g,
                    g = b.chartHeight - this.bottom - (c ? this.height : 0) + g;
                c && (a *= -1);
                return b.renderer.crispLine(["M", e ? this.left : h, e ? g : this.top, "L", e ? b.chartWidth - this.right : h, e ? g : b.chartHeight - this.bottom], a)
            },
            renderLine: function() {
                this.axisLine || (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup),
                    this.axisLine.attr({
                        stroke: this.options.lineColor,
                        "stroke-width": this.options.lineWidth,
                        zIndex: 7
                    }))
            },
            getTitlePosition: function() {
                var a = this.horiz,
                    b = this.left,
                    c = this.top,
                    e = this.len,
                    h = this.options.title,
                    m = a ? b : c,
                    p = this.opposite,
                    d = this.offset,
                    t = h.x || 0,
                    f = h.y || 0,
                    n = this.chart.renderer.fontMetrics(h.style && h.style.fontSize, this.axisTitle).f,
                    e = {
                        low: m + (a ? 0 : e),
                        middle: m + e / 2,
                        high: m + (a ? e : 0)
                    }[h.align],
                    b = (a ? c + this.height : b) + (a ? 1 : -1) * (p ? -1 : 1) * this.axisTitleMargin + (2 === this.side ? n : 0);
                return {
                    x: a ? e + t : b + (p ? this.width :
                        0) + d + t,
                    y: a ? b + f - (p ? this.height : 0) + d : e + f
                }
            },
            renderMinorTick: function(a) {
                var b = this.chart.hasRendered && w(this.oldMin),
                    c = this.minorTicks;
                c[a] || (c[a] = new J(this, a, "minor"));
                b && c[a].isNew && c[a].render(null, !0);
                c[a].render(null, !1, 1)
            },
            renderTick: function(a, b) {
                var c = this.isLinked,
                    g = this.ticks,
                    e = this.chart.hasRendered && w(this.oldMin);
                if (!c || a >= this.min && a <= this.max) g[a] || (g[a] = new J(this, a)), e && g[a].isNew && g[a].render(b, !0, .1), g[a].render(b)
            },
            render: function() {
                var a = this,
                    b = a.chart,
                    e = a.options,
                    h = a.isLog,
                    p = a.lin2log,
                    d = a.isLinked,
                    t = a.tickPositions,
                    f = a.axisTitle,
                    n = a.ticks,
                    y = a.minorTicks,
                    k = a.alternateBands,
                    w = e.stackLabels,
                    x = e.alternateGridColor,
                    D = a.tickmarkOffset,
                    l = a.axisLine,
                    C = a.showAxis,
                    q = A(b.renderer.globalAnimation),
                    I, E;
                a.labelEdge.length = 0;
                a.overlap = !1;
                c([n, y, k], function(a) {
                    for (var b in a) a[b].isActive = !1
                });
                if (a.hasData() || d) a.minorTickInterval && !a.categories && c(a.getMinorTickPositions(), function(b) {
                    a.renderMinorTick(b)
                }), t.length && (c(t, function(b, c) {
                    a.renderTick(b, c)
                }), D && (0 === a.min || a.single) && (n[-1] || (n[-1] =
                    new J(a, -1, null, !0)), n[-1].render(-1))), x && c(t, function(c, e) {
                    E = void 0 !== t[e + 1] ? t[e + 1] + D : a.max - D;
                    0 === e % 2 && c < a.max && E <= a.max + (b.polar ? -D : D) && (k[c] || (k[c] = new m(a)), I = c + D, k[c].options = {
                        from: h ? p(I) : I,
                        to: h ? p(E) : E,
                        color: x
                    }, k[c].render(), k[c].isActive = !0)
                }), a._addedPlotLB || (c((e.plotLines || []).concat(e.plotBands || []), function(b) {
                    a.addPlotBandOrLine(b)
                }), a._addedPlotLB = !0);
                c([n, y, k], function(a) {
                    var c, e, g = [],
                        h = q.duration;
                    for (c in a) a[c].isActive || (a[c].render(c, !1, 0), a[c].isActive = !1, g.push(c));
                    K(function() {
                        for (e =
                            g.length; e--;) a[g[e]] && !a[g[e]].isActive && (a[g[e]].destroy(), delete a[g[e]])
                    }, a !== k && b.hasRendered && h ? h : 0)
                });
                l && (l[l.isPlaced ? "animate" : "attr"]({
                    d: this.getLinePath(l.strokeWidth())
                }), l.isPlaced = !0, l[C ? "show" : "hide"](!0));
                f && C && (f[f.isNew ? "attr" : "animate"](a.getTitlePosition()), f.isNew = !1);
                w && w.enabled && a.renderStackTotals();
                a.isDirty = !1
            },
            redraw: function() {
                this.visible && (this.render(), c(this.plotLinesAndBands, function(a) {
                    a.render()
                }));
                c(this.series, function(a) {
                    a.isDirty = !0
                })
            },
            keepProps: "extKey hcEvents names series userMax userMin".split(" "),
            destroy: function(a) {
                var b = this,
                    e = b.stacks,
                    g, h = b.plotLinesAndBands,
                    m, p;
                a || y(b);
                for (g in e) d(e[g]), e[g] = null;
                c([b.ticks, b.minorTicks, b.alternateBands], function(a) {
                    d(a)
                });
                if (h)
                    for (a = h.length; a--;) h[a].destroy();
                c("stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross".split(" "), function(a) {
                    b[a] && (b[a] = b[a].destroy())
                });
                for (m in b.plotLinesAndBandsGroups) b.plotLinesAndBandsGroups[m] = b.plotLinesAndBandsGroups[m].destroy();
                for (p in b) b.hasOwnProperty(p) && -1 === t(p, b.keepProps) && delete b[p]
            },
            drawCrosshair: function(a, b) {
                var c, e = this.crosshair,
                    g = E(e.snap, !0),
                    h, m = this.cross;
                a || (a = this.cross && this.cross.e);
                this.crosshair && !1 !== (k(b) || !g) ? (g ? k(b) && (h = this.isXAxis ? b.plotX : this.len - b.plotY) : h = a && (this.horiz ? a.chartX - this.pos : this.len - a.chartY + this.pos), k(h) && (c = this.getPlotLinePath(b && (this.isXAxis ? b.x : E(b.stackY, b.y)), null, null, null, h) || null), k(c) ? (b = this.categories && !this.isRadial, m || (this.cross = m = this.chart.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (b ? "category " :
                    "thin ") + e.className).attr({
                    zIndex: E(e.zIndex, 2)
                }).add(), m.attr({
                    stroke: e.color || (b ? f("#ccd6eb").setOpacity(.25).get() : "#cccccc"),
                    "stroke-width": E(e.width, 1)
                }), e.dashStyle && m.attr({
                    dashstyle: e.dashStyle
                })), m.show().attr({
                    d: c
                }), b && !e.width && m.attr({
                    "stroke-width": this.transA
                }), this.cross.e = a) : this.hideCrosshair()) : this.hideCrosshair()
            },
            hideCrosshair: function() {
                this.cross && this.cross.hide()
            }
        };
        n(a.Axis.prototype, r)
    })(L);
    (function(a) {
        var B = a.Axis,
            A = a.Date,
            H = a.dateFormat,
            G = a.defaultOptions,
            r = a.defined,
            f = a.each,
            l = a.extend,
            q = a.getMagnitude,
            k = a.getTZOffset,
            u = a.normalizeTickInterval,
            d = a.pick,
            c = a.timeUnits;
        B.prototype.getTimeTicks = function(a, q, b, p) {
            var h = [],
                t = {},
                n = G.global.useUTC,
                w, e = new A(q - Math.abs(k(q))),
                x = A.hcMakeTime,
                C = a.unitRange,
                E = a.count,
                m;
            if (r(q)) {
                e[A.hcSetMilliseconds](C >= c.second ? 0 : E * Math.floor(e.getMilliseconds() / E));
                if (C >= c.second) e[A.hcSetSeconds](C >= c.minute ? 0 : E * Math.floor(e.getSeconds() / E));
                if (C >= c.minute) e[A.hcSetMinutes](C >= c.hour ? 0 : E * Math.floor(e[A.hcGetMinutes]() / E));
                if (C >= c.hour) e[A.hcSetHours](C >=
                    c.day ? 0 : E * Math.floor(e[A.hcGetHours]() / E));
                if (C >= c.day) e[A.hcSetDate](C >= c.month ? 1 : E * Math.floor(e[A.hcGetDate]() / E));
                C >= c.month && (e[A.hcSetMonth](C >= c.year ? 0 : E * Math.floor(e[A.hcGetMonth]() / E)), w = e[A.hcGetFullYear]());
                if (C >= c.year) e[A.hcSetFullYear](w - w % E);
                if (C === c.week) e[A.hcSetDate](e[A.hcGetDate]() - e[A.hcGetDay]() + d(p, 1));
                w = e[A.hcGetFullYear]();
                p = e[A.hcGetMonth]();
                var y = e[A.hcGetDate](),
                    I = e[A.hcGetHours]();
                if (A.hcTimezoneOffset || A.hcGetTimezoneOffset) m = (!n || !!A.hcGetTimezoneOffset) && (b - q > 4 * c.month ||
                    k(q) !== k(b)), e = e.getTime(), e = new A(e + k(e));
                n = e.getTime();
                for (q = 1; n < b;) h.push(n), n = C === c.year ? x(w + q * E, 0) : C === c.month ? x(w, p + q * E) : !m || C !== c.day && C !== c.week ? m && C === c.hour ? x(w, p, y, I + q * E) : n + C * E : x(w, p, y + q * E * (C === c.day ? 1 : 7)), q++;
                h.push(n);
                C <= c.hour && 1E4 > h.length && f(h, function(a) {
                    0 === a % 18E5 && "000000000" === H("%H%M%S%L", a) && (t[a] = "day")
                })
            }
            h.info = l(a, {
                higherRanks: t,
                totalRange: C * E
            });
            return h
        };
        B.prototype.normalizeTimeTickInterval = function(a, d) {
            var b = d || [
                ["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
                ["second", [1, 2, 5, 10, 15, 30]],
                ["minute", [1, 2, 5, 10, 15, 30]],
                ["hour", [1, 2, 3, 4, 6, 8, 12]],
                ["day", [1, 2]],
                ["week", [1, 2]],
                ["month", [1, 2, 3, 4, 6]],
                ["year", null]
            ];
            d = b[b.length - 1];
            var p = c[d[0]],
                h = d[1],
                t;
            for (t = 0; t < b.length && !(d = b[t], p = c[d[0]], h = d[1], b[t + 1] && a <= (p * h[h.length - 1] + c[b[t + 1][0]]) / 2); t++);
            p === c.year && a < 5 * p && (h = [1, 2, 5]);
            a = u(a / p, h, "year" === d[0] ? Math.max(q(a / p), 1) : 1);
            return {
                unitRange: p,
                count: a,
                unitName: d[0]
            }
        }
    })(L);
    (function(a) {
        var B = a.Axis,
            A = a.getMagnitude,
            H = a.map,
            G = a.normalizeTickInterval,
            r = a.pick;
        B.prototype.getLogTickPositions =
            function(a, l, q, k) {
                var f = this.options,
                    d = this.len,
                    c = this.lin2log,
                    n = this.log2lin,
                    z = [];
                k || (this._minorAutoInterval = null);
                if (.5 <= a) a = Math.round(a), z = this.getLinearTickPositions(a, l, q);
                else if (.08 <= a)
                    for (var d = Math.floor(l), b, p, h, t, D, f = .3 < a ? [1, 2, 4] : .15 < a ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; d < q + 1 && !D; d++)
                        for (p = f.length, b = 0; b < p && !D; b++) h = n(c(d) * f[b]), h > l && (!k || t <= q) && void 0 !== t && z.push(t), t > q && (D = !0), t = h;
                else l = c(l), q = c(q), a = f[k ? "minorTickInterval" : "tickInterval"], a = r("auto" === a ? null : a, this._minorAutoInterval,
                    f.tickPixelInterval / (k ? 5 : 1) * (q - l) / ((k ? d / this.tickPositions.length : d) || 1)), a = G(a, null, A(a)), z = H(this.getLinearTickPositions(a, l, q), n), k || (this._minorAutoInterval = a / 5);
                k || (this.tickInterval = a);
                return z
            };
        B.prototype.log2lin = function(a) {
            return Math.log(a) / Math.LN10
        };
        B.prototype.lin2log = function(a) {
            return Math.pow(10, a)
        }
    })(L);
    (function(a) {
        var B = a.dateFormat,
            A = a.each,
            H = a.extend,
            G = a.format,
            r = a.isNumber,
            f = a.map,
            l = a.merge,
            q = a.pick,
            k = a.splat,
            u = a.syncTimeout,
            d = a.timeUnits;
        a.Tooltip = function() {
            this.init.apply(this,
                arguments)
        };
        a.Tooltip.prototype = {
            init: function(a, d) {
                this.chart = a;
                this.options = d;
                this.crosshairs = [];
                this.now = {
                    x: 0,
                    y: 0
                };
                this.isHidden = !0;
                this.split = d.split && !a.inverted;
                this.shared = d.shared || this.split
            },
            cleanSplit: function(a) {
                A(this.chart.series, function(c) {
                    var d = c && c.tt;
                    d && (!d.isActive || a ? c.tt = d.destroy() : d.isActive = !1)
                })
            },
            getLabel: function() {
                var a = this.chart.renderer,
                    d = this.options;
                this.label || (this.split ? this.label = a.g("tooltip") : (this.label = a.label("", 0, 0, d.shape || "callout", null, null, d.useHTML,
                    null, "tooltip").attr({
                    padding: d.padding,
                    r: d.borderRadius
                }), this.label.attr({
                    fill: d.backgroundColor,
                    "stroke-width": d.borderWidth
                }).css(d.style).shadow(d.shadow)), this.label.attr({
                    zIndex: 8
                }).add());
                return this.label
            },
            update: function(a) {
                this.destroy();
                this.init(this.chart, l(!0, this.options, a))
            },
            destroy: function() {
                this.label && (this.label = this.label.destroy());
                this.split && this.tt && (this.cleanSplit(this.chart, !0), this.tt = this.tt.destroy());
                clearTimeout(this.hideTimer);
                clearTimeout(this.tooltipTimeout)
            },
            move: function(a, d, f, b) {
                var c = this,
                    h = c.now,
                    t = !1 !== c.options.animation && !c.isHidden && (1 < Math.abs(a - h.x) || 1 < Math.abs(d - h.y)),
                    n = c.followPointer || 1 < c.len;
                H(h, {
                    x: t ? (2 * h.x + a) / 3 : a,
                    y: t ? (h.y + d) / 2 : d,
                    anchorX: n ? void 0 : t ? (2 * h.anchorX + f) / 3 : f,
                    anchorY: n ? void 0 : t ? (h.anchorY + b) / 2 : b
                });
                c.getLabel().attr(h);
                t && (clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function() {
                    c && c.move(a, d, f, b)
                }, 32))
            },
            hide: function(a) {
                var c = this;
                clearTimeout(this.hideTimer);
                a = q(a, this.options.hideDelay, 500);
                this.isHidden || (this.hideTimer =
                    u(function() {
                        c.getLabel()[a ? "fadeOut" : "hide"]();
                        c.isHidden = !0
                    }, a))
            },
            getAnchor: function(a, d) {
                var c, b = this.chart,
                    p = b.inverted,
                    h = b.plotTop,
                    t = b.plotLeft,
                    n = 0,
                    w = 0,
                    e, x;
                a = k(a);
                c = a[0].tooltipPos;
                this.followPointer && d && (void 0 === d.chartX && (d = b.pointer.normalize(d)), c = [d.chartX - b.plotLeft, d.chartY - h]);
                c || (A(a, function(a) {
                    e = a.series.yAxis;
                    x = a.series.xAxis;
                    n += a.plotX + (!p && x ? x.left - t : 0);
                    w += (a.plotLow ? (a.plotLow + a.plotHigh) / 2 : a.plotY) + (!p && e ? e.top - h : 0)
                }), n /= a.length, w /= a.length, c = [p ? b.plotWidth - w : n, this.shared &&
                    !p && 1 < a.length && d ? d.chartY - h : p ? b.plotHeight - n : w
                ]);
                return f(c, Math.round)
            },
            getPosition: function(a, d, f) {
                var b = this.chart,
                    c = this.distance,
                    h = {},
                    t = f.h || 0,
                    n, k = ["y", b.chartHeight, d, f.plotY + b.plotTop, b.plotTop, b.plotTop + b.plotHeight],
                    e = ["x", b.chartWidth, a, f.plotX + b.plotLeft, b.plotLeft, b.plotLeft + b.plotWidth],
                    x = !this.followPointer && q(f.ttBelow, !b.inverted === !!f.negative),
                    l = function(a, b, e, g, m, d) {
                        var p = e < g - c,
                            f = g + c + e < b,
                            n = g - c - e;
                        g += c;
                        if (x && f) h[a] = g;
                        else if (!x && p) h[a] = n;
                        else if (p) h[a] = Math.min(d - e, 0 > n - t ? n : n - t);
                        else if (f) h[a] = Math.max(m, g + t + e > b ? g : g + t);
                        else return !1
                    },
                    E = function(a, b, e, g) {
                        var m;
                        g < c || g > b - c ? m = !1 : h[a] = g < e / 2 ? 1 : g > b - e / 2 ? b - e - 2 : g - e / 2;
                        return m
                    },
                    m = function(a) {
                        var b = k;
                        k = e;
                        e = b;
                        n = a
                    },
                    y = function() {
                        !1 !== l.apply(0, k) ? !1 !== E.apply(0, e) || n || (m(!0), y()) : n ? h.x = h.y = 0 : (m(!0), y())
                    };
                (b.inverted || 1 < this.len) && m();
                y();
                return h
            },
            defaultFormatter: function(a) {
                var c = this.points || k(this),
                    d;
                d = [a.tooltipFooterHeaderFormatter(c[0])];
                d = d.concat(a.bodyFormatter(c));
                d.push(a.tooltipFooterHeaderFormatter(c[0], !0));
                return d
            },
            refresh: function(a,
                d) {
                var c, b = this.options,
                    p, h = a,
                    t, f = {},
                    n = [];
                c = b.formatter || this.defaultFormatter;
                var f = this.shared,
                    e;
                clearTimeout(this.hideTimer);
                this.followPointer = k(h)[0].series.tooltipOptions.followPointer;
                t = this.getAnchor(h, d);
                d = t[0];
                p = t[1];
                !f || h.series && h.series.noSharedTooltip ? f = h.getLabelConfig() : (A(h, function(a) {
                    a.setState("hover");
                    n.push(a.getLabelConfig())
                }), f = {
                    x: h[0].category,
                    y: h[0].y
                }, f.points = n, h = h[0]);
                this.len = n.length;
                f = c.call(f, this);
                e = h.series;
                this.distance = q(e.tooltipOptions.distance, 16);
                !1 === f ? this.hide() :
                    (c = this.getLabel(), this.isHidden && c.attr({
                        opacity: 1
                    }).show(), this.split ? this.renderSplit(f, a) : (c.attr({
                        text: f && f.join ? f.join("") : f
                    }), c.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-" + q(h.colorIndex, e.colorIndex)), c.attr({
                        stroke: b.borderColor || h.color || e.color || "#666666"
                    }), this.updatePosition({
                        plotX: d,
                        plotY: p,
                        negative: h.negative,
                        ttBelow: h.ttBelow,
                        h: t[2] || 0
                    })), this.isHidden = !1)
            },
            renderSplit: function(c, d) {
                var f = this,
                    b = [],
                    p = this.chart,
                    h = p.renderer,
                    t = !0,
                    n = this.options,
                    k, e = this.getLabel();
                A(c.slice(0, d.length + 1), function(a, c) {
                    c = d[c - 1] || {
                        isHeader: !0,
                        plotX: d[0].plotX
                    };
                    var w = c.series || f,
                        m = w.tt,
                        y = c.series || {},
                        x = "highcharts-color-" + q(c.colorIndex, y.colorIndex, "none");
                    m || (w.tt = m = h.label(null, null, null, "callout").addClass("highcharts-tooltip-box " + x).attr({
                        padding: n.padding,
                        r: n.borderRadius,
                        fill: n.backgroundColor,
                        stroke: c.color || y.color || "#333333",
                        "stroke-width": n.borderWidth
                    }).add(e));
                    m.isActive = !0;
                    m.attr({
                        text: a
                    });
                    m.css(n.style);
                    a = m.getBBox();
                    y = a.width + m.strokeWidth();
                    c.isHeader ? (k = a.height,
                        y = Math.max(0, Math.min(c.plotX + p.plotLeft - y / 2, p.chartWidth - y))) : y = c.plotX + p.plotLeft - q(n.distance, 16) - y;
                    0 > y && (t = !1);
                    a = (c.series && c.series.yAxis && c.series.yAxis.pos) + (c.plotY || 0);
                    a -= p.plotTop;
                    b.push({
                        target: c.isHeader ? p.plotHeight + k : a,
                        rank: c.isHeader ? 1 : 0,
                        size: w.tt.getBBox().height + 1,
                        point: c,
                        x: y,
                        tt: m
                    })
                });
                this.cleanSplit();
                a.distribute(b, p.plotHeight + k);
                A(b, function(a) {
                    var b = a.point,
                        c = b.series;
                    a.tt.attr({
                        visibility: void 0 === a.pos ? "hidden" : "inherit",
                        x: t || b.isHeader ? a.x : b.plotX + p.plotLeft + q(n.distance,
                            16),
                        y: a.pos + p.plotTop,
                        anchorX: b.isHeader ? b.plotX + p.plotLeft : b.plotX + c.xAxis.pos,
                        anchorY: b.isHeader ? a.pos + p.plotTop - 15 : b.plotY + c.yAxis.pos
                    })
                })
            },
            updatePosition: function(a) {
                var c = this.chart,
                    d = this.getLabel(),
                    d = (this.options.positioner || this.getPosition).call(this, d.width, d.height, a);
                this.move(Math.round(d.x), Math.round(d.y || 0), a.plotX + c.plotLeft, a.plotY + c.plotTop)
            },
            getDateFormat: function(a, f, k, b) {
                var c = B("%m-%d %H:%M:%S.%L", f),
                    h, t, n = {
                        millisecond: 15,
                        second: 12,
                        minute: 9,
                        hour: 6,
                        day: 3
                    },
                    w = "millisecond";
                for (t in d) {
                    if (a ===
                        d.week && +B("%w", f) === k && "00:00:00.000" === c.substr(6)) {
                        t = "week";
                        break
                    }
                    if (d[t] > a) {
                        t = w;
                        break
                    }
                    if (n[t] && c.substr(n[t]) !== "01-01 00:00:00.000".substr(n[t])) break;
                    "week" !== t && (w = t)
                }
                t && (h = b[t]);
                return h
            },
            getXDateFormat: function(a, d, f) {
                d = d.dateTimeLabelFormats;
                var b = f && f.closestPointRange;
                return (b ? this.getDateFormat(b, a.x, f.options.startOfWeek, d) : d.day) || d.year
            },
            tooltipFooterHeaderFormatter: function(a, d) {
                var c = d ? "footer" : "header";
                d = a.series;
                var b = d.tooltipOptions,
                    p = b.xDateFormat,
                    h = d.xAxis,
                    t = h && "datetime" ===
                    h.options.type && r(a.key),
                    c = b[c + "Format"];
                t && !p && (p = this.getXDateFormat(a, b, h));
                t && p && (c = c.replace("{point.key}", "{point.key:" + p + "}"));
                return G(c, {
                    point: a,
                    series: d
                })
            },
            bodyFormatter: function(a) {
                return f(a, function(a) {
                    var c = a.series.tooltipOptions;
                    return (c.pointFormatter || a.point.tooltipFormatter).call(a.point, c.pointFormat)
                })
            }
        }
    })(L);
    (function(a) {
        var B = a.addEvent,
            A = a.attr,
            H = a.charts,
            G = a.color,
            r = a.css,
            f = a.defined,
            l = a.doc,
            q = a.each,
            k = a.extend,
            u = a.fireEvent,
            d = a.offset,
            c = a.pick,
            n = a.removeEvent,
            z = a.splat,
            b = a.Tooltip,
            p = a.win;
        a.Pointer = function(a, b) {
            this.init(a, b)
        };
        a.Pointer.prototype = {
            init: function(a, d) {
                this.options = d;
                this.chart = a;
                this.runChartClick = d.chart.events && !!d.chart.events.click;
                this.pinchDown = [];
                this.lastValidTouch = {};
                b && d.tooltip.enabled && (a.tooltip = new b(a, d.tooltip), this.followTouchMove = c(d.tooltip.followTouchMove, !0));
                this.setDOMEvents()
            },
            zoomOption: function(a) {
                var b = this.chart,
                    h = b.options.chart,
                    d = h.zoomType || "",
                    b = b.inverted;
                /touch/.test(a.type) && (d = c(h.pinchType, d));
                this.zoomX = a = /x/.test(d);
                this.zoomY = d = /y/.test(d);
                this.zoomHor = a && !b || d && b;
                this.zoomVert = d && !b || a && b;
                this.hasZoom = a || d
            },
            normalize: function(a, b) {
                var c, h;
                a = a || p.event;
                a.target || (a.target = a.srcElement);
                h = a.touches ? a.touches.length ? a.touches.item(0) : a.changedTouches[0] : a;
                b || (this.chartPosition = b = d(this.chart.container));
                void 0 === h.pageX ? (c = Math.max(a.x, a.clientX - b.left), b = a.y) : (c = h.pageX - b.left, b = h.pageY - b.top);
                return k(a, {
                    chartX: Math.round(c),
                    chartY: Math.round(b)
                })
            },
            getCoordinates: function(a) {
                var b = {
                    xAxis: [],
                    yAxis: []
                };
                q(this.chart.axes,
                    function(c) {
                        b[c.isXAxis ? "xAxis" : "yAxis"].push({
                            axis: c,
                            value: c.toValue(a[c.horiz ? "chartX" : "chartY"])
                        })
                    });
                return b
            },
            getKDPoints: function(a, b, d) {
                var h = [],
                    e, p, f;
                q(a, function(a) {
                    e = a.noSharedTooltip && b;
                    p = !b && a.directTouch;
                    a.visible && !p && c(a.options.enableMouseTracking, !0) && (f = a.searchPoint(d, !e && 0 > a.options.findNearestPointBy.indexOf("y"))) && f.series && h.push(f)
                });
                h.sort(function(a, c) {
                    var e = a.distX - c.distX,
                        h = a.dist - c.dist,
                        m = (c.series.group && c.series.group.zIndex) - (a.series.group && a.series.group.zIndex);
                    return 0 !== e && b ? e : 0 !== h ? h : 0 !== m ? m : a.series.index > c.series.index ? -1 : 1
                });
                if (b && h[0] && !h[0].series.noSharedTooltip)
                    for (a = h.length; a--;)(h[a].x !== h[0].x || h[a].series.noSharedTooltip) && h.splice(a, 1);
                return h
            },
            getPointFromEvent: function(a) {
                a = a.target;
                for (var b; a && !b;) b = a.point, a = a.parentNode;
                return b
            },
            getHoverData: function(b, d, p, f, e, n) {
                var h = b,
                    t = d,
                    m;
                f ? e ? (m = [], q(p, function(a) {
                    var b = a.noSharedTooltip && e,
                        d = !e && a.directTouch;
                    a.visible && !b && !d && c(a.options.enableMouseTracking, !0) && (a = a.searchKDTree({
                        clientX: h.clientX,
                        plotY: h.plotY
                    }, !b && 1 === a.kdDimensions)) && a.series && m.push(a)
                }), 0 === m.length && (m = [h])) : m = [h] : t && !t.stickyTracking ? (e || (p = [t]), m = this.getKDPoints(p, e, n), h = a.find(m, function(a) {
                    return a.series === t
                })) : (b = a.grep(p, function(a) {
                    return a.stickyTracking
                }), m = this.getKDPoints(b, e, n), t = (h = m[0]) && h.series, e && (m = this.getKDPoints(p, e, n)));
                m.sort(function(a, b) {
                    return a.series.index - b.series.index
                });
                return {
                    hoverPoint: h,
                    hoverSeries: t,
                    hoverPoints: m
                }
            },
            runPointActions: function(b, d) {
                var h = this.chart,
                    p = h.tooltip,
                    e = p ? p.shared :
                    !1,
                    f = d || h.hoverPoint,
                    t = f && f.series || h.hoverSeries;
                d = this.getHoverData(f, t, h.series, !!d || !e && t && t.directTouch, e, b);
                var n, m, f = d.hoverPoint;
                n = (t = d.hoverSeries) && t.tooltipOptions.followPointer;
                m = (e = e && f && !f.series.noSharedTooltip) ? d.hoverPoints : f ? [f] : [];
                if (f && (f !== h.hoverPoint || p && p.isHidden)) {
                    q(h.hoverPoints || [], function(b) {
                        -1 === a.inArray(b, m) && b.setState()
                    });
                    q(m || [], function(a) {
                        a.setState("hover")
                    });
                    if (h.hoverSeries !== t) t.onMouseOver();
                    t && !t.directTouch && (h.hoverPoint && h.hoverPoint.firePointEvent("mouseOut"),
                        f.firePointEvent("mouseOver"));
                    h.hoverPoints = m;
                    h.hoverPoint = f;
                    p && p.refresh(e ? m : f, b)
                } else n && p && !p.isHidden && (f = p.getAnchor([{}], b), p.updatePosition({
                    plotX: f[0],
                    plotY: f[1]
                }));
                this.unDocMouseMove || (this.unDocMouseMove = B(l, "mousemove", function(b) {
                    var c = H[a.hoverChartIndex];
                    if (c) c.pointer.onDocumentMouseMove(b)
                }));
                q(h.axes, function(a) {
                    c(a.crosshair.snap, !0) ? q(m, function(c) {
                        c.series[a.coll] === a && a.drawCrosshair(b, c)
                    }) : a.drawCrosshair(b)
                })
            },
            reset: function(a, b) {
                var c = this.chart,
                    h = c.hoverSeries,
                    e = c.hoverPoint,
                    d = c.hoverPoints,
                    p = c.tooltip,
                    f = p && p.shared ? d : e;
                a && f && q(z(f), function(b) {
                    b.series.isCartesian && void 0 === b.plotX && (a = !1)
                });
                if (a) p && f && (p.refresh(f), e && (e.setState(e.state, !0), q(c.axes, function(a) {
                    a.crosshair && a.drawCrosshair(null, e)
                })));
                else {
                    if (e) e.onMouseOut();
                    d && q(d, function(a) {
                        a.setState()
                    });
                    if (h) h.onMouseOut();
                    p && p.hide(b);
                    this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove());
                    q(c.axes, function(a) {
                        a.hideCrosshair()
                    });
                    this.hoverX = c.hoverPoints = c.hoverPoint = null
                }
            },
            scaleGroups: function(a,
                b) {
                var c = this.chart,
                    h;
                q(c.series, function(e) {
                    h = a || e.getPlotBox();
                    e.xAxis && e.xAxis.zoomEnabled && e.group && (e.group.attr(h), e.markerGroup && (e.markerGroup.attr(h), e.markerGroup.clip(b ? c.clipRect : null)), e.dataLabelsGroup && e.dataLabelsGroup.attr(h))
                });
                c.clipRect.attr(b || c.clipBox)
            },
            dragStart: function(a) {
                var b = this.chart;
                b.mouseIsDown = a.type;
                b.cancelClick = !1;
                b.mouseDownX = this.mouseDownX = a.chartX;
                b.mouseDownY = this.mouseDownY = a.chartY
            },
            drag: function(a) {
                var b = this.chart,
                    c = b.options.chart,
                    h = a.chartX,
                    e = a.chartY,
                    d = this.zoomHor,
                    p = this.zoomVert,
                    f = b.plotLeft,
                    m = b.plotTop,
                    n = b.plotWidth,
                    k = b.plotHeight,
                    l, q = this.selectionMarker,
                    g = this.mouseDownX,
                    u = this.mouseDownY,
                    r = c.panKey && a[c.panKey + "Key"];
                q && q.touch || (h < f ? h = f : h > f + n && (h = f + n), e < m ? e = m : e > m + k && (e = m + k), this.hasDragged = Math.sqrt(Math.pow(g - h, 2) + Math.pow(u - e, 2)), 10 < this.hasDragged && (l = b.isInsidePlot(g - f, u - m), b.hasCartesianSeries && (this.zoomX || this.zoomY) && l && !r && !q && (this.selectionMarker = q = b.renderer.rect(f, m, d ? 1 : n, p ? 1 : k, 0).attr({
                    fill: c.selectionMarkerFill || G("#335cad").setOpacity(.25).get(),
                    "class": "highcharts-selection-marker",
                    zIndex: 7
                }).add()), q && d && (h -= g, q.attr({
                    width: Math.abs(h),
                    x: (0 < h ? 0 : h) + g
                })), q && p && (h = e - u, q.attr({
                    height: Math.abs(h),
                    y: (0 < h ? 0 : h) + u
                })), l && !q && c.panning && b.pan(a, c.panning)))
            },
            drop: function(a) {
                var b = this,
                    c = this.chart,
                    h = this.hasPinched;
                if (this.selectionMarker) {
                    var e = {
                            originalEvent: a,
                            xAxis: [],
                            yAxis: []
                        },
                        d = this.selectionMarker,
                        p = d.attr ? d.attr("x") : d.x,
                        n = d.attr ? d.attr("y") : d.y,
                        m = d.attr ? d.attr("width") : d.width,
                        y = d.attr ? d.attr("height") : d.height,
                        l;
                    if (this.hasDragged || h) q(c.axes,
                        function(c) {
                            if (c.zoomEnabled && f(c.min) && (h || b[{
                                    xAxis: "zoomX",
                                    yAxis: "zoomY"
                                }[c.coll]])) {
                                var d = c.horiz,
                                    g = "touchend" === a.type ? c.minPixelPadding : 0,
                                    t = c.toValue((d ? p : n) + g),
                                    d = c.toValue((d ? p + m : n + y) - g);
                                e[c.coll].push({
                                    axis: c,
                                    min: Math.min(t, d),
                                    max: Math.max(t, d)
                                });
                                l = !0
                            }
                        }), l && u(c, "selection", e, function(a) {
                        c.zoom(k(a, h ? {
                            animation: !1
                        } : null))
                    });
                    this.selectionMarker = this.selectionMarker.destroy();
                    h && this.scaleGroups()
                }
                c && (r(c.container, {
                        cursor: c._cursor
                    }), c.cancelClick = 10 < this.hasDragged, c.mouseIsDown = this.hasDragged =
                    this.hasPinched = !1, this.pinchDown = [])
            },
            onContainerMouseDown: function(a) {
                a = this.normalize(a);
                this.zoomOption(a);
                a.preventDefault && a.preventDefault();
                this.dragStart(a)
            },
            onDocumentMouseUp: function(b) {
                H[a.hoverChartIndex] && H[a.hoverChartIndex].pointer.drop(b)
            },
            onDocumentMouseMove: function(a) {
                var b = this.chart,
                    c = this.chartPosition;
                a = this.normalize(a, c);
                !c || this.inClass(a.target, "highcharts-tracker") || b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop) || this.reset()
            },
            onContainerMouseLeave: function(b) {
                var c =
                    H[a.hoverChartIndex];
                c && (b.relatedTarget || b.toElement) && (c.pointer.reset(), c.pointer.chartPosition = null)
            },
            onContainerMouseMove: function(b) {
                var c = this.chart;
                f(a.hoverChartIndex) && H[a.hoverChartIndex] && H[a.hoverChartIndex].mouseIsDown || (a.hoverChartIndex = c.index);
                b = this.normalize(b);
                b.returnValue = !1;
                "mousedown" === c.mouseIsDown && this.drag(b);
                !this.inClass(b.target, "highcharts-tracker") && !c.isInsidePlot(b.chartX - c.plotLeft, b.chartY - c.plotTop) || c.openMenu || this.runPointActions(b)
            },
            inClass: function(a, b) {
                for (var c; a;) {
                    if (c =
                        A(a, "class")) {
                        if (-1 !== c.indexOf(b)) return !0;
                        if (-1 !== c.indexOf("highcharts-container")) return !1
                    }
                    a = a.parentNode
                }
            },
            onTrackerMouseOut: function(a) {
                var b = this.chart.hoverSeries;
                a = a.relatedTarget || a.toElement;
                if (!(!b || !a || b.stickyTracking || this.inClass(a, "highcharts-tooltip") || this.inClass(a, "highcharts-series-" + b.index) && this.inClass(a, "highcharts-tracker"))) b.onMouseOut()
            },
            onContainerClick: function(a) {
                var b = this.chart,
                    c = b.hoverPoint,
                    h = b.plotLeft,
                    e = b.plotTop;
                a = this.normalize(a);
                b.cancelClick || (c && this.inClass(a.target,
                    "highcharts-tracker") ? (u(c.series, "click", k(a, {
                    point: c
                })), b.hoverPoint && c.firePointEvent("click", a)) : (k(a, this.getCoordinates(a)), b.isInsidePlot(a.chartX - h, a.chartY - e) && u(b, "click", a)))
            },
            setDOMEvents: function() {
                var b = this,
                    c = b.chart.container;
                c.onmousedown = function(a) {
                    b.onContainerMouseDown(a)
                };
                c.onmousemove = function(a) {
                    b.onContainerMouseMove(a)
                };
                c.onclick = function(a) {
                    b.onContainerClick(a)
                };
                B(c, "mouseleave", b.onContainerMouseLeave);
                1 === a.chartCount && B(l, "mouseup", b.onDocumentMouseUp);
                a.hasTouch && (c.ontouchstart =
                    function(a) {
                        b.onContainerTouchStart(a)
                    }, c.ontouchmove = function(a) {
                        b.onContainerTouchMove(a)
                    }, 1 === a.chartCount && B(l, "touchend", b.onDocumentTouchEnd))
            },
            destroy: function() {
                var b;
                this.unDocMouseMove && this.unDocMouseMove();
                n(this.chart.container, "mouseleave", this.onContainerMouseLeave);
                a.chartCount || (n(l, "mouseup", this.onDocumentMouseUp), n(l, "touchend", this.onDocumentTouchEnd));
                clearInterval(this.tooltipTimeout);
                for (b in this) this[b] = null
            }
        }
    })(L);
    (function(a) {
        var B = a.charts,
            A = a.each,
            H = a.extend,
            G = a.map,
            r = a.noop,
            f = a.pick;
        H(a.Pointer.prototype, {
            pinchTranslate: function(a, f, k, u, d, c) {
                this.zoomHor && this.pinchTranslateDirection(!0, a, f, k, u, d, c);
                this.zoomVert && this.pinchTranslateDirection(!1, a, f, k, u, d, c)
            },
            pinchTranslateDirection: function(a, f, k, u, d, c, n, r) {
                var b = this.chart,
                    p = a ? "x" : "y",
                    h = a ? "X" : "Y",
                    t = "chart" + h,
                    l = a ? "width" : "height",
                    w = b["plot" + (a ? "Left" : "Top")],
                    e, q, C = r || 1,
                    E = b.inverted,
                    m = b.bounds[a ? "h" : "v"],
                    y = 1 === f.length,
                    I = f[0][t],
                    K = k[0][t],
                    J = !y && f[1][t],
                    g = !y && k[1][t],
                    z;
                k = function() {
                    !y && 20 < Math.abs(I - J) && (C = r ||
                        Math.abs(K - g) / Math.abs(I - J));
                    q = (w - K) / C + I;
                    e = b["plot" + (a ? "Width" : "Height")] / C
                };
                k();
                f = q;
                f < m.min ? (f = m.min, z = !0) : f + e > m.max && (f = m.max - e, z = !0);
                z ? (K -= .8 * (K - n[p][0]), y || (g -= .8 * (g - n[p][1])), k()) : n[p] = [K, g];
                E || (c[p] = q - w, c[l] = e);
                c = E ? 1 / C : C;
                d[l] = e;
                d[p] = f;
                u[E ? a ? "scaleY" : "scaleX" : "scale" + h] = C;
                u["translate" + h] = c * w + (K - c * I)
            },
            pinch: function(a) {
                var l = this,
                    k = l.chart,
                    u = l.pinchDown,
                    d = a.touches,
                    c = d.length,
                    n = l.lastValidTouch,
                    z = l.hasZoom,
                    b = l.selectionMarker,
                    p = {},
                    h = 1 === c && (l.inClass(a.target, "highcharts-tracker") && k.runTrackerClick ||
                        l.runChartClick),
                    t = {};
                1 < c && (l.initiated = !0);
                z && l.initiated && !h && a.preventDefault();
                G(d, function(a) {
                    return l.normalize(a)
                });
                "touchstart" === a.type ? (A(d, function(a, b) {
                    u[b] = {
                        chartX: a.chartX,
                        chartY: a.chartY
                    }
                }), n.x = [u[0].chartX, u[1] && u[1].chartX], n.y = [u[0].chartY, u[1] && u[1].chartY], A(k.axes, function(a) {
                    if (a.zoomEnabled) {
                        var b = k.bounds[a.horiz ? "h" : "v"],
                            c = a.minPixelPadding,
                            h = a.toPixels(f(a.options.min, a.dataMin)),
                            d = a.toPixels(f(a.options.max, a.dataMax)),
                            p = Math.max(h, d);
                        b.min = Math.min(a.pos, Math.min(h, d) -
                            c);
                        b.max = Math.max(a.pos + a.len, p + c)
                    }
                }), l.res = !0) : l.followTouchMove && 1 === c ? this.runPointActions(l.normalize(a)) : u.length && (b || (l.selectionMarker = b = H({
                    destroy: r,
                    touch: !0
                }, k.plotBox)), l.pinchTranslate(u, d, p, b, t, n), l.hasPinched = z, l.scaleGroups(p, t), l.res && (l.res = !1, this.reset(!1, 0)))
            },
            touch: function(l, q) {
                var k = this.chart,
                    u, d;
                if (k.index !== a.hoverChartIndex) this.onContainerMouseLeave({
                    relatedTarget: !0
                });
                a.hoverChartIndex = k.index;
                1 === l.touches.length ? (l = this.normalize(l), (d = k.isInsidePlot(l.chartX - k.plotLeft,
                    l.chartY - k.plotTop)) && !k.openMenu ? (q && this.runPointActions(l), "touchmove" === l.type && (q = this.pinchDown, u = q[0] ? 4 <= Math.sqrt(Math.pow(q[0].chartX - l.chartX, 2) + Math.pow(q[0].chartY - l.chartY, 2)) : !1), f(u, !0) && this.pinch(l)) : q && this.reset()) : 2 === l.touches.length && this.pinch(l)
            },
            onContainerTouchStart: function(a) {
                this.zoomOption(a);
                this.touch(a, !0)
            },
            onContainerTouchMove: function(a) {
                this.touch(a)
            },
            onDocumentTouchEnd: function(f) {
                B[a.hoverChartIndex] && B[a.hoverChartIndex].pointer.drop(f)
            }
        })
    })(L);
    (function(a) {
        var B =
            a.addEvent,
            A = a.charts,
            H = a.css,
            G = a.doc,
            r = a.extend,
            f = a.noop,
            l = a.Pointer,
            q = a.removeEvent,
            k = a.win,
            u = a.wrap;
        if (k.PointerEvent || k.MSPointerEvent) {
            var d = {},
                c = !!k.PointerEvent,
                n = function() {
                    var a, c = [];
                    c.item = function(a) {
                        return this[a]
                    };
                    for (a in d) d.hasOwnProperty(a) && c.push({
                        pageX: d[a].pageX,
                        pageY: d[a].pageY,
                        target: d[a].target
                    });
                    return c
                },
                z = function(b, c, h, d) {
                    "touch" !== b.pointerType && b.pointerType !== b.MSPOINTER_TYPE_TOUCH || !A[a.hoverChartIndex] || (d(b), d = A[a.hoverChartIndex].pointer, d[c]({
                        type: h,
                        target: b.currentTarget,
                        preventDefault: f,
                        touches: n()
                    }))
                };
            r(l.prototype, {
                onContainerPointerDown: function(a) {
                    z(a, "onContainerTouchStart", "touchstart", function(a) {
                        d[a.pointerId] = {
                            pageX: a.pageX,
                            pageY: a.pageY,
                            target: a.currentTarget
                        }
                    })
                },
                onContainerPointerMove: function(a) {
                    z(a, "onContainerTouchMove", "touchmove", function(a) {
                        d[a.pointerId] = {
                            pageX: a.pageX,
                            pageY: a.pageY
                        };
                        d[a.pointerId].target || (d[a.pointerId].target = a.currentTarget)
                    })
                },
                onDocumentPointerUp: function(a) {
                    z(a, "onDocumentTouchEnd", "touchend", function(a) {
                        delete d[a.pointerId]
                    })
                },
                batchMSEvents: function(a) {
                    a(this.chart.container, c ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown);
                    a(this.chart.container, c ? "pointermove" : "MSPointerMove", this.onContainerPointerMove);
                    a(G, c ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp)
                }
            });
            u(l.prototype, "init", function(a, c, h) {
                a.call(this, c, h);
                this.hasZoom && H(c.container, {
                    "-ms-touch-action": "none",
                    "touch-action": "none"
                })
            });
            u(l.prototype, "setDOMEvents", function(a) {
                a.apply(this);
                (this.hasZoom || this.followTouchMove) && this.batchMSEvents(B)
            });
            u(l.prototype, "destroy", function(a) {
                this.batchMSEvents(q);
                a.call(this)
            })
        }
    })(L);
    (function(a) {
        var B, A = a.addEvent,
            H = a.css,
            G = a.discardElement,
            r = a.defined,
            f = a.each,
            l = a.isFirefox,
            q = a.marginNames,
            k = a.merge,
            u = a.pick,
            d = a.setAnimation,
            c = a.stableSort,
            n = a.win,
            z = a.wrap;
        B = a.Legend = function(a, c) {
            this.init(a, c)
        };
        B.prototype = {
            init: function(a, c) {
                this.chart = a;
                this.setOptions(c);
                c.enabled && (this.render(), A(this.chart, "endResize", function() {
                    this.legend.positionCheckboxes()
                }))
            },
            setOptions: function(a) {
                var b = u(a.padding,
                    8);
                this.options = a;
                this.itemStyle = a.itemStyle;
                this.itemHiddenStyle = k(this.itemStyle, a.itemHiddenStyle);
                this.itemMarginTop = a.itemMarginTop || 0;
                this.padding = b;
                this.initialItemY = b - 5;
                this.itemHeight = this.maxItemWidth = 0;
                this.symbolWidth = u(a.symbolWidth, 16);
                this.pages = []
            },
            update: function(a, c) {
                var b = this.chart;
                this.setOptions(k(!0, this.options, a));
                this.destroy();
                b.isDirtyLegend = b.isDirtyBox = !0;
                u(c, !0) && b.redraw()
            },
            colorizeItem: function(a, c) {
                a.legendGroup[c ? "removeClass" : "addClass"]("highcharts-legend-item-hidden");
                var b = this.options,
                    d = a.legendItem,
                    f = a.legendLine,
                    p = a.legendSymbol,
                    e = this.itemHiddenStyle.color,
                    b = c ? b.itemStyle.color : e,
                    n = c ? a.color || e : e,
                    k = a.options && a.options.marker,
                    l = {
                        fill: n
                    },
                    m;
                d && d.css({
                    fill: b,
                    color: b
                });
                f && f.attr({
                    stroke: n
                });
                if (p) {
                    if (k && p.isMarker && (l = a.pointAttribs(), !c))
                        for (m in l) l[m] = e;
                    p.attr(l)
                }
            },
            positionItem: function(a) {
                var b = this.options,
                    c = b.symbolPadding,
                    b = !b.rtl,
                    d = a._legendItemPos,
                    f = d[0],
                    d = d[1],
                    n = a.checkbox;
                (a = a.legendGroup) && a.element && a.translate(b ? f : this.legendWidth - f - 2 * c - 4, d);
                n && (n.x =
                    f, n.y = d)
            },
            destroyItem: function(a) {
                var b = a.checkbox;
                f(["legendItem", "legendLine", "legendSymbol", "legendGroup"], function(b) {
                    a[b] && (a[b] = a[b].destroy())
                });
                b && G(a.checkbox)
            },
            destroy: function() {
                function a(a) {
                    this[a] && (this[a] = this[a].destroy())
                }
                f(this.getAllItems(), function(b) {
                    f(["legendItem", "legendGroup"], a, b)
                });
                f("clipRect up down pager nav box title group".split(" "), a, this);
                this.display = null
            },
            positionCheckboxes: function(a) {
                var b = this.group && this.group.alignAttr,
                    c, d = this.clipHeight || this.legendHeight,
                    n = this.titleHeight;
                b && (c = b.translateY, f(this.allItems, function(h) {
                    var e = h.checkbox,
                        f;
                    e && (f = c + n + e.y + (a || 0) + 3, H(e, {
                        left: b.translateX + h.checkboxOffset + e.x - 20 + "px",
                        top: f + "px",
                        display: f > c - 6 && f < c + d - 6 ? "" : "none"
                    }))
                }))
            },
            renderTitle: function() {
                var a = this.padding,
                    c = this.options.title,
                    h = 0;
                c.text && (this.title || (this.title = this.chart.renderer.label(c.text, a - 3, a - 4, null, null, null, null, null, "legend-title").attr({
                    zIndex: 1
                }).css(c.style).add(this.group)), a = this.title.getBBox(), h = a.height, this.offsetWidth = a.width, this.contentGroup.attr({
                    translateY: h
                }));
                this.titleHeight = h
            },
            setText: function(b) {
                var c = this.options;
                b.legendItem.attr({
                    text: c.labelFormat ? a.format(c.labelFormat, b) : c.labelFormatter.call(b)
                })
            },
            renderItem: function(a) {
                var b = this.chart,
                    c = b.renderer,
                    d = this.options,
                    f = "horizontal" === d.layout,
                    n = this.symbolWidth,
                    e = d.symbolPadding,
                    l = this.itemStyle,
                    q = this.itemHiddenStyle,
                    r = this.padding,
                    m = f ? u(d.itemDistance, 20) : 0,
                    y = !d.rtl,
                    I = d.width,
                    K = d.itemMarginBottom || 0,
                    J = this.itemMarginTop,
                    g = a.legendItem,
                    z = !a.series,
                    Q = !z && a.series.drawLegendSymbol ? a.series : a,
                    A = Q.options,
                    A = this.createCheckboxForItem && A && A.showCheckbox,
                    B = d.useHTML,
                    H = a.options.className;
                g || (a.legendGroup = c.g("legend-item").addClass("highcharts-" + Q.type + "-series highcharts-color-" + a.colorIndex + (H ? " " + H : "") + (z ? " highcharts-series-" + a.index : "")).attr({
                    zIndex: 1
                }).add(this.scrollGroup), a.legendItem = g = c.text("", y ? n + e : -e, this.baseline || 0, B).css(k(a.visible ? l : q)).attr({
                    align: y ? "left" : "right",
                    zIndex: 2
                }).add(a.legendGroup), this.baseline || (l = l.fontSize, this.fontMetrics = c.fontMetrics(l, g), this.baseline = this.fontMetrics.f +
                    3 + J, g.attr("y", this.baseline)), this.symbolHeight = d.symbolHeight || this.fontMetrics.f, Q.drawLegendSymbol(this, a), this.setItemEvents && this.setItemEvents(a, g, B), A && this.createCheckboxForItem(a));
                this.colorizeItem(a, a.visible);
                this.setText(a);
                c = g.getBBox();
                n = a.checkboxOffset = d.itemWidth || a.legendItemWidth || n + e + c.width + m + (A ? 20 : 0);
                this.itemHeight = e = Math.round(a.legendItemHeight || c.height || this.symbolHeight);
                f && this.itemX - r + n > (I || b.spacingBox.width - 2 * r - d.x) && (this.itemX = r, this.itemY += J + this.lastLineHeight +
                    K, this.lastLineHeight = 0);
                this.maxItemWidth = Math.max(this.maxItemWidth, n);
                this.lastItemY = J + this.itemY + K;
                this.lastLineHeight = Math.max(e, this.lastLineHeight);
                a._legendItemPos = [this.itemX, this.itemY];
                f ? this.itemX += n : (this.itemY += J + e + K, this.lastLineHeight = e);
                this.offsetWidth = I || Math.max((f ? this.itemX - r - m : n) + r, this.offsetWidth)
            },
            getAllItems: function() {
                var a = [];
                f(this.chart.series, function(b) {
                    var c = b && b.options;
                    b && u(c.showInLegend, r(c.linkedTo) ? !1 : void 0, !0) && (a = a.concat(b.legendItems || ("point" === c.legendType ?
                        b.data : b)))
                });
                return a
            },
            adjustMargins: function(a, c) {
                var b = this.chart,
                    d = this.options,
                    p = d.align.charAt(0) + d.verticalAlign.charAt(0) + d.layout.charAt(0);
                d.floating || f([/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/], function(h, e) {
                    h.test(p) && !r(a[e]) && (b[q[e]] = Math.max(b[q[e]], b.legend[(e + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][e] * d[e % 2 ? "x" : "y"] + u(d.margin, 12) + c[e]))
                })
            },
            render: function() {
                var a = this,
                    d = a.chart,
                    h = d.renderer,
                    n = a.group,
                    l, q, e, x, u = a.box,
                    r = a.options,
                    m = a.padding;
                a.itemX = m;
                a.itemY =
                    a.initialItemY;
                a.offsetWidth = 0;
                a.lastItemY = 0;
                n || (a.group = n = h.g("legend").attr({
                    zIndex: 7
                }).add(), a.contentGroup = h.g().attr({
                    zIndex: 1
                }).add(n), a.scrollGroup = h.g().add(a.contentGroup));
                a.renderTitle();
                l = a.getAllItems();
                c(l, function(a, b) {
                    return (a.options && a.options.legendIndex || 0) - (b.options && b.options.legendIndex || 0)
                });
                r.reversed && l.reverse();
                a.allItems = l;
                a.display = q = !!l.length;
                a.lastLineHeight = 0;
                f(l, function(b) {
                    a.renderItem(b)
                });
                e = (r.width || a.offsetWidth) + m;
                x = a.lastItemY + a.lastLineHeight + a.titleHeight;
                x = a.handleOverflow(x);
                x += m;
                u || (a.box = u = h.rect().addClass("highcharts-legend-box").attr({
                    r: r.borderRadius
                }).add(n), u.isNew = !0);
                u.attr({
                    stroke: r.borderColor,
                    "stroke-width": r.borderWidth || 0,
                    fill: r.backgroundColor || "none"
                }).shadow(r.shadow);
                0 < e && 0 < x && (u[u.isNew ? "attr" : "animate"](u.crisp({
                    x: 0,
                    y: 0,
                    width: e,
                    height: x
                }, u.strokeWidth())), u.isNew = !1);
                u[q ? "show" : "hide"]();
                a.legendWidth = e;
                a.legendHeight = x;
                f(l, function(b) {
                    a.positionItem(b)
                });
                q && n.align(k(r, {
                    width: e,
                    height: x
                }), !0, "spacingBox");
                d.isResizing || this.positionCheckboxes()
            },
            handleOverflow: function(a) {
                var b = this,
                    c = this.chart,
                    d = c.renderer,
                    n = this.options,
                    k = n.y,
                    e = this.padding,
                    c = c.spacingBox.height + ("top" === n.verticalAlign ? -k : k) - e,
                    k = n.maxHeight,
                    l, q = this.clipRect,
                    r = n.navigation,
                    m = u(r.animation, !0),
                    y = r.arrowSize || 12,
                    I = this.nav,
                    K = this.pages,
                    J, g = this.allItems,
                    z = function(a) {
                        a ? q.attr({
                            height: a
                        }) : q && (b.clipRect = q.destroy(), b.contentGroup.clip());
                        b.contentGroup.div && (b.contentGroup.div.style.clip = a ? "rect(" + e + "px,9999px," + (e + a) + "px,0)" : "auto")
                    };
                "horizontal" !== n.layout || "middle" ===
                    n.verticalAlign || n.floating || (c /= 2);
                k && (c = Math.min(c, k));
                K.length = 0;
                a > c && !1 !== r.enabled ? (this.clipHeight = l = Math.max(c - 20 - this.titleHeight - e, 0), this.currentPage = u(this.currentPage, 1), this.fullHeight = a, f(g, function(a, b) {
                    var c = a._legendItemPos[1];
                    a = Math.round(a.legendItem.getBBox().height);
                    var e = K.length;
                    if (!e || c - K[e - 1] > l && (J || c) !== K[e - 1]) K.push(J || c), e++;
                    b === g.length - 1 && c + a - K[e - 1] > l && K.push(c);
                    c !== J && (J = c)
                }), q || (q = b.clipRect = d.clipRect(0, e, 9999, 0), b.contentGroup.clip(q)), z(l), I || (this.nav = I = d.g().attr({
                        zIndex: 1
                    }).add(this.group),
                    this.up = d.symbol("triangle", 0, 0, y, y).on("click", function() {
                        b.scroll(-1, m)
                    }).add(I), this.pager = d.text("", 15, 10).addClass("highcharts-legend-navigation").css(r.style).add(I), this.down = d.symbol("triangle-down", 0, 0, y, y).on("click", function() {
                        b.scroll(1, m)
                    }).add(I)), b.scroll(0), a = c) : I && (z(), this.nav = I.destroy(), this.scrollGroup.attr({
                    translateY: 1
                }), this.clipHeight = 0);
                return a
            },
            scroll: function(a, c) {
                var b = this.pages,
                    f = b.length;
                a = this.currentPage + a;
                var p = this.clipHeight,
                    n = this.options.navigation,
                    e = this.pager,
                    k = this.padding;
                a > f && (a = f);
                0 < a && (void 0 !== c && d(c, this.chart), this.nav.attr({
                    translateX: k,
                    translateY: p + this.padding + 7 + this.titleHeight,
                    visibility: "visible"
                }), this.up.attr({
                    "class": 1 === a ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
                }), e.attr({
                    text: a + "/" + f
                }), this.down.attr({
                    x: 18 + this.pager.getBBox().width,
                    "class": a === f ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
                }), this.up.attr({
                    fill: 1 === a ? n.inactiveColor : n.activeColor
                }).css({
                    cursor: 1 === a ? "default" : "pointer"
                }), this.down.attr({
                    fill: a ===
                        f ? n.inactiveColor : n.activeColor
                }).css({
                    cursor: a === f ? "default" : "pointer"
                }), c = -b[a - 1] + this.initialItemY, this.scrollGroup.animate({
                    translateY: c
                }), this.currentPage = a, this.positionCheckboxes(c))
            }
        };
        a.LegendSymbolMixin = {
            drawRectangle: function(a, c) {
                var b = a.symbolHeight,
                    d = a.options.squareSymbol;
                c.legendSymbol = this.chart.renderer.rect(d ? (a.symbolWidth - b) / 2 : 0, a.baseline - b + 1, d ? b : a.symbolWidth, b, u(a.options.symbolRadius, b / 2)).addClass("highcharts-point").attr({
                    zIndex: 3
                }).add(c.legendGroup)
            },
            drawLineMarker: function(a) {
                var b =
                    this.options,
                    c = b.marker,
                    d = a.symbolWidth,
                    f = a.symbolHeight,
                    n = f / 2,
                    e = this.chart.renderer,
                    l = this.legendGroup;
                a = a.baseline - Math.round(.3 * a.fontMetrics.b);
                var q;
                q = {
                    "stroke-width": b.lineWidth || 0
                };
                b.dashStyle && (q.dashstyle = b.dashStyle);
                this.legendLine = e.path(["M", 0, a, "L", d, a]).addClass("highcharts-graph").attr(q).add(l);
                c && !1 !== c.enabled && (b = Math.min(u(c.radius, n), n), 0 === this.symbol.indexOf("url") && (c = k(c, {
                        width: f,
                        height: f
                    }), b = 0), this.legendSymbol = c = e.symbol(this.symbol, d / 2 - b, a - b, 2 * b, 2 * b, c).addClass("highcharts-point").add(l),
                    c.isMarker = !0)
            }
        };
        (/Trident\/7\.0/.test(n.navigator.userAgent) || l) && z(B.prototype, "positionItem", function(a, c) {
            var b = this,
                d = function() {
                    c._legendItemPos && a.call(b, c)
                };
            d();
            setTimeout(d)
        })
    })(L);
    (function(a) {
        var B = a.addEvent,
            A = a.animate,
            H = a.animObject,
            G = a.attr,
            r = a.doc,
            f = a.Axis,
            l = a.createElement,
            q = a.defaultOptions,
            k = a.discardElement,
            u = a.charts,
            d = a.css,
            c = a.defined,
            n = a.each,
            z = a.extend,
            b = a.find,
            p = a.fireEvent,
            h = a.getStyle,
            t = a.grep,
            D = a.isNumber,
            w = a.isObject,
            e = a.isString,
            x = a.Legend,
            C = a.marginNames,
            E = a.merge,
            m = a.Pointer,
            y = a.pick,
            I = a.pInt,
            K = a.removeEvent,
            J = a.seriesTypes,
            g = a.splat,
            F = a.svg,
            Q = a.syncTimeout,
            N = a.win,
            P = a.Renderer,
            O = a.Chart = function() {
                this.getArgs.apply(this, arguments)
            };
        a.chart = function(a, b, c) {
            return new O(a, b, c)
        };
        O.prototype = {
            callbacks: [],
            getArgs: function() {
                var a = [].slice.call(arguments);
                if (e(a[0]) || a[0].nodeName) this.renderTo = a.shift();
                this.init(a[0], a[1])
            },
            init: function(b, c) {
                var e, g = b.series;
                b.series = null;
                e = E(q, b);
                e.series = b.series = g;
                this.userOptions = b;
                b = e.chart;
                g = b.events;
                this.margin = [];
                this.spacing = [];
                this.bounds = {
                    h: {},
                    v: {}
                };
                this.callback = c;
                this.isResizing = 0;
                this.options = e;
                this.axes = [];
                this.series = [];
                this.hasCartesianSeries = b.showAxes;
                var d;
                this.index = u.length;
                u.push(this);
                a.chartCount++;
                if (g)
                    for (d in g) B(this, d, g[d]);
                this.xAxis = [];
                this.yAxis = [];
                this.pointCount = this.colorCounter = this.symbolCounter = 0;
                this.firstRender()
            },
            initSeries: function(b) {
                var c = this.options.chart;
                (c = J[b.type || c.type || c.defaultSeriesType]) || a.error(17, !0);
                c = new c;
                c.init(this, b);
                return c
            },
            orderSeries: function(a) {
                var b =
                    this.series;
                for (a = a || 0; a < b.length; a++) b[a] && (b[a].index = a, b[a].name = b[a].name || "Series " + (b[a].index + 1))
            },
            isInsidePlot: function(a, b, c) {
                var e = c ? b : a;
                a = c ? a : b;
                return 0 <= e && e <= this.plotWidth && 0 <= a && a <= this.plotHeight
            },
            redraw: function(b) {
                var c = this.axes,
                    e = this.series,
                    g = this.pointer,
                    d = this.legend,
                    m = this.isDirtyLegend,
                    h, f, v = this.hasCartesianSeries,
                    k = this.isDirtyBox,
                    y, l = this.renderer,
                    t = l.isHidden(),
                    q = [];
                this.setResponsive && this.setResponsive(!1);
                a.setAnimation(b, this);
                t && this.cloneRenderTo();
                this.layOutTitles();
                for (b = e.length; b--;)
                    if (y = e[b], y.options.stacking && (h = !0, y.isDirty)) {
                        f = !0;
                        break
                    }
                if (f)
                    for (b = e.length; b--;) y = e[b], y.options.stacking && (y.isDirty = !0);
                n(e, function(a) {
                    a.isDirty && "point" === a.options.legendType && (a.updateTotals && a.updateTotals(), m = !0);
                    a.isDirtyData && p(a, "updatedData")
                });
                m && d.options.enabled && (d.render(), this.isDirtyLegend = !1);
                h && this.getStacks();
                v && n(c, function(a) {
                    a.updateNames();
                    a.setScale()
                });
                this.getMargins();
                v && (n(c, function(a) {
                    a.isDirty && (k = !0)
                }), n(c, function(a) {
                    var b = a.min + "," + a.max;
                    a.extKey !== b && (a.extKey = b, q.push(function() {
                        p(a, "afterSetExtremes", z(a.eventArgs, a.getExtremes()));
                        delete a.eventArgs
                    }));
                    (k || h) && a.redraw()
                }));
                k && this.drawChartBox();
                p(this, "predraw");
                n(e, function(a) {
                    (k || a.isDirty) && a.visible && a.redraw();
                    a.isDirtyData = !1
                });
                g && g.reset(!0);
                l.draw();
                p(this, "redraw");
                p(this, "render");
                t && this.cloneRenderTo(!0);
                n(q, function(a) {
                    a.call()
                })
            },
            get: function(a) {
                function c(b) {
                    return b.id === a || b.options && b.options.id === a
                }
                var e, g = this.series,
                    d;
                e = b(this.axes, c) || b(this.series, c);
                for (d = 0; !e && d < g.length; d++) e = b(g[d].points || [], c);
                return e
            },
            getAxes: function() {
                var a = this,
                    b = this.options,
                    c = b.xAxis = g(b.xAxis || {}),
                    b = b.yAxis = g(b.yAxis || {});
                n(c, function(a, b) {
                    a.index = b;
                    a.isX = !0
                });
                n(b, function(a, b) {
                    a.index = b
                });
                c = c.concat(b);
                n(c, function(b) {
                    new f(a, b)
                })
            },
            getSelectedPoints: function() {
                var a = [];
                n(this.series, function(b) {
                    a = a.concat(t(b.points || [], function(a) {
                        return a.selected
                    }))
                });
                return a
            },
            getSelectedSeries: function() {
                return t(this.series, function(a) {
                    return a.selected
                })
            },
            setTitle: function(a,
                b, c) {
                var e = this,
                    g = e.options,
                    d;
                d = g.title = E({
                    style: {
                        color: "#333333",
                        fontSize: g.isStock ? "16px" : "18px"
                    }
                }, g.title, a);
                g = g.subtitle = E({
                    style: {
                        color: "#666666"
                    }
                }, g.subtitle, b);
                n([
                    ["title", a, d],
                    ["subtitle", b, g]
                ], function(a, b) {
                    var c = a[0],
                        g = e[c],
                        d = a[1];
                    a = a[2];
                    g && d && (e[c] = g = g.destroy());
                    a && a.text && !g && (e[c] = e.renderer.text(a.text, 0, 0, a.useHTML).attr({
                        align: a.align,
                        "class": "highcharts-" + c,
                        zIndex: a.zIndex || 4
                    }).add(), e[c].update = function(a) {
                        e.setTitle(!b && a, b && a)
                    }, e[c].css(a.style))
                });
                e.layOutTitles(c)
            },
            layOutTitles: function(a) {
                var b =
                    0,
                    c, e = this.renderer,
                    g = this.spacingBox;
                n(["title", "subtitle"], function(a) {
                    var c = this[a],
                        d = this.options[a],
                        m;
                    c && (m = d.style.fontSize, m = e.fontMetrics(m, c).b, c.css({
                        width: (d.width || g.width + d.widthAdjust) + "px"
                    }).align(z({
                        y: b + m + ("title" === a ? -3 : 2)
                    }, d), !1, "spacingBox"), d.floating || d.verticalAlign || (b = Math.ceil(b + c.getBBox(d.useHTML).height)))
                }, this);
                c = this.titleOffset !== b;
                this.titleOffset = b;
                !this.isDirtyBox && c && (this.isDirtyBox = c, this.hasRendered && y(a, !0) && this.isDirtyBox && this.redraw())
            },
            getChartSize: function() {
                var b =
                    this.options.chart,
                    e = b.width,
                    b = b.height,
                    g = this.renderToClone || this.renderTo;
                c(e) || (this.containerWidth = h(g, "width"));
                c(b) || (this.containerHeight = h(g, "height"));
                this.chartWidth = Math.max(0, e || this.containerWidth || 600);
                this.chartHeight = Math.max(0, a.relativeLength(b, this.chartWidth) || this.containerHeight || 400)
            },
            cloneRenderTo: function(a) {
                var b = this.renderToClone,
                    c = this.container;
                if (a) {
                    if (b) {
                        for (; b.childNodes.length;) this.renderTo.appendChild(b.firstChild);
                        k(b);
                        delete this.renderToClone
                    }
                } else c && c.parentNode ===
                    this.renderTo && this.renderTo.removeChild(c), this.renderToClone = b = this.renderTo.cloneNode(0), d(b, {
                        position: "absolute",
                        top: "-9999px",
                        display: "block"
                    }), b.style.setProperty && b.style.setProperty("display", "block", "important"), r.body.appendChild(b), c && b.appendChild(c)
            },
            setClassName: function(a) {
                this.container.className = "highcharts-container " + (a || "")
            },
            getContainer: function() {
                var b, c = this.options,
                    g = c.chart,
                    d, m;
                b = this.renderTo;
                var h = a.uniqueKey(),
                    f;
                b || (this.renderTo = b = g.renderTo);
                e(b) && (this.renderTo = b = r.getElementById(b));
                b || a.error(13, !0);
                d = I(G(b, "data-highcharts-chart"));
                D(d) && u[d] && u[d].hasRendered && u[d].destroy();
                G(b, "data-highcharts-chart", this.index);
                b.innerHTML = "";
                g.skipClone || b.offsetWidth || this.cloneRenderTo();
                this.getChartSize();
                d = this.chartWidth;
                m = this.chartHeight;
                f = z({
                    position: "relative",
                    overflow: "hidden",
                    width: d + "px",
                    height: m + "px",
                    textAlign: "left",
                    lineHeight: "normal",
                    zIndex: 0,
                    "-webkit-tap-highlight-color": "rgba(0,0,0,0)"
                }, g.style);
                this.container = b = l("div", {
                    id: h
                }, f, this.renderToClone || b);
                this._cursor = b.style.cursor;
                this.renderer = new(a[g.renderer] || P)(b, d, m, null, g.forExport, c.exporting && c.exporting.allowHTML);
                this.setClassName(g.className);
                this.renderer.setStyle(g.style);
                this.renderer.chartIndex = this.index
            },
            getMargins: function(a) {
                var b = this.spacing,
                    e = this.margin,
                    g = this.titleOffset;
                this.resetMargins();
                g && !c(e[0]) && (this.plotTop = Math.max(this.plotTop, g + this.options.title.margin + b[0]));
                this.legend.display && this.legend.adjustMargins(e, b);
                this.extraMargin && (this[this.extraMargin.type] = (this[this.extraMargin.type] ||
                    0) + this.extraMargin.value);
                this.extraTopMargin && (this.plotTop += this.extraTopMargin);
                a || this.getAxisMargins()
            },
            getAxisMargins: function() {
                var a = this,
                    b = a.axisOffset = [0, 0, 0, 0],
                    e = a.margin;
                a.hasCartesianSeries && n(a.axes, function(a) {
                    a.visible && a.getOffset()
                });
                n(C, function(g, d) {
                    c(e[d]) || (a[g] += b[d])
                });
                a.setChartSize()
            },
            reflow: function(a) {
                var b = this,
                    e = b.options.chart,
                    g = b.renderTo,
                    d = c(e.width),
                    m = e.width || h(g, "width"),
                    e = e.height || h(g, "height"),
                    g = a ? a.target : N;
                if (!d && !b.isPrinting && m && e && (g === N || g === r)) {
                    if (m !==
                        b.containerWidth || e !== b.containerHeight) clearTimeout(b.reflowTimeout), b.reflowTimeout = Q(function() {
                        b.container && b.setSize(void 0, void 0, !1)
                    }, a ? 100 : 0);
                    b.containerWidth = m;
                    b.containerHeight = e
                }
            },
            initReflow: function() {
                var a = this,
                    b;
                b = B(N, "resize", function(b) {
                    a.reflow(b)
                });
                B(a, "destroy", b)
            },
            setSize: function(b, c, e) {
                var g = this,
                    m = g.renderer;
                g.isResizing += 1;
                a.setAnimation(e, g);
                g.oldChartHeight = g.chartHeight;
                g.oldChartWidth = g.chartWidth;
                void 0 !== b && (g.options.chart.width = b);
                void 0 !== c && (g.options.chart.height =
                    c);
                g.getChartSize();
                b = m.globalAnimation;
                (b ? A : d)(g.container, {
                    width: g.chartWidth + "px",
                    height: g.chartHeight + "px"
                }, b);
                g.setChartSize(!0);
                m.setSize(g.chartWidth, g.chartHeight, e);
                n(g.axes, function(a) {
                    a.isDirty = !0;
                    a.setScale()
                });
                g.isDirtyLegend = !0;
                g.isDirtyBox = !0;
                g.layOutTitles();
                g.getMargins();
                g.redraw(e);
                g.oldChartHeight = null;
                p(g, "resize");
                Q(function() {
                    g && p(g, "endResize", null, function() {
                        --g.isResizing
                    })
                }, H(b).duration)
            },
            setChartSize: function(a) {
                var b = this.inverted,
                    c = this.renderer,
                    e = this.chartWidth,
                    g =
                    this.chartHeight,
                    d = this.options.chart,
                    m = this.spacing,
                    h = this.clipOffset,
                    f, p, k, y;
                this.plotLeft = f = Math.round(this.plotLeft);
                this.plotTop = p = Math.round(this.plotTop);
                this.plotWidth = k = Math.max(0, Math.round(e - f - this.marginRight));
                this.plotHeight = y = Math.max(0, Math.round(g - p - this.marginBottom));
                this.plotSizeX = b ? y : k;
                this.plotSizeY = b ? k : y;
                this.plotBorderWidth = d.plotBorderWidth || 0;
                this.spacingBox = c.spacingBox = {
                    x: m[3],
                    y: m[0],
                    width: e - m[3] - m[1],
                    height: g - m[0] - m[2]
                };
                this.plotBox = c.plotBox = {
                    x: f,
                    y: p,
                    width: k,
                    height: y
                };
                e = 2 * Math.floor(this.plotBorderWidth / 2);
                b = Math.ceil(Math.max(e, h[3]) / 2);
                c = Math.ceil(Math.max(e, h[0]) / 2);
                this.clipBox = {
                    x: b,
                    y: c,
                    width: Math.floor(this.plotSizeX - Math.max(e, h[1]) / 2 - b),
                    height: Math.max(0, Math.floor(this.plotSizeY - Math.max(e, h[2]) / 2 - c))
                };
                a || n(this.axes, function(a) {
                    a.setAxisSize();
                    a.setAxisTranslation()
                })
            },
            resetMargins: function() {
                var a = this,
                    b = a.options.chart;
                n(["margin", "spacing"], function(c) {
                    var e = b[c],
                        g = w(e) ? e : [e, e, e, e];
                    n(["Top", "Right", "Bottom", "Left"], function(e, d) {
                        a[c][d] = y(b[c + e], g[d])
                    })
                });
                n(C, function(b, c) {
                    a[b] = y(a.margin[c], a.spacing[c])
                });
                a.axisOffset = [0, 0, 0, 0];
                a.clipOffset = [0, 0, 0, 0]
            },
            drawChartBox: function() {
                var a = this.options.chart,
                    b = this.renderer,
                    c = this.chartWidth,
                    e = this.chartHeight,
                    g = this.chartBackground,
                    d = this.plotBackground,
                    m = this.plotBorder,
                    h, f = this.plotBGImage,
                    n = a.backgroundColor,
                    p = a.plotBackgroundColor,
                    k = a.plotBackgroundImage,
                    y, l = this.plotLeft,
                    t = this.plotTop,
                    q = this.plotWidth,
                    u = this.plotHeight,
                    x = this.plotBox,
                    r = this.clipRect,
                    w = this.clipBox,
                    I = "animate";
                g || (this.chartBackground =
                    g = b.rect().addClass("highcharts-background").add(), I = "attr");
                h = a.borderWidth || 0;
                y = h + (a.shadow ? 8 : 0);
                n = {
                    fill: n || "none"
                };
                if (h || g["stroke-width"]) n.stroke = a.borderColor, n["stroke-width"] = h;
                g.attr(n).shadow(a.shadow);
                g[I]({
                    x: y / 2,
                    y: y / 2,
                    width: c - y - h % 2,
                    height: e - y - h % 2,
                    r: a.borderRadius
                });
                I = "animate";
                d || (I = "attr", this.plotBackground = d = b.rect().addClass("highcharts-plot-background").add());
                d[I](x);
                d.attr({
                    fill: p || "none"
                }).shadow(a.plotShadow);
                k && (f ? f.animate(x) : this.plotBGImage = b.image(k, l, t, q, u).add());
                r ? r.animate({
                    width: w.width,
                    height: w.height
                }) : this.clipRect = b.clipRect(w);
                I = "animate";
                m || (I = "attr", this.plotBorder = m = b.rect().addClass("highcharts-plot-border").attr({
                    zIndex: 1
                }).add());
                m.attr({
                    stroke: a.plotBorderColor,
                    "stroke-width": a.plotBorderWidth || 0,
                    fill: "none"
                });
                m[I](m.crisp({
                    x: l,
                    y: t,
                    width: q,
                    height: u
                }, -m.strokeWidth()));
                this.isDirtyBox = !1
            },
            propFromSeries: function() {
                var a = this,
                    b = a.options.chart,
                    c, e = a.options.series,
                    g, d;
                n(["inverted", "angular", "polar"], function(m) {
                    c = J[b.type || b.defaultSeriesType];
                    d = b[m] || c && c.prototype[m];
                    for (g = e && e.length; !d && g--;)(c = J[e[g].type]) && c.prototype[m] && (d = !0);
                    a[m] = d
                })
            },
            linkSeries: function() {
                var a = this,
                    b = a.series;
                n(b, function(a) {
                    a.linkedSeries.length = 0
                });
                n(b, function(b) {
                    var c = b.options.linkedTo;
                    e(c) && (c = ":previous" === c ? a.series[b.index - 1] : a.get(c)) && c.linkedParent !== b && (c.linkedSeries.push(b), b.linkedParent = c, b.visible = y(b.options.visible, c.options.visible, b.visible))
                })
            },
            renderSeries: function() {
                n(this.series, function(a) {
                    a.translate();
                    a.render()
                })
            },
            renderLabels: function() {
                var a = this,
                    b = a.options.labels;
                b.items && n(b.items, function(c) {
                    var e = z(b.style, c.style),
                        g = I(e.left) + a.plotLeft,
                        d = I(e.top) + a.plotTop + 12;
                    delete e.left;
                    delete e.top;
                    a.renderer.text(c.html, g, d).attr({
                        zIndex: 2
                    }).css(e).add()
                })
            },
            render: function() {
                var a = this.axes,
                    b = this.renderer,
                    c = this.options,
                    e, g, d;
                this.setTitle();
                this.legend = new x(this, c.legend);
                this.getStacks && this.getStacks();
                this.getMargins(!0);
                this.setChartSize();
                c = this.plotWidth;
                e = this.plotHeight -= 21;
                n(a, function(a) {
                    a.setScale()
                });
                this.getAxisMargins();
                g = 1.1 < c / this.plotWidth;
                d =
                    1.05 < e / this.plotHeight;
                if (g || d) n(a, function(a) {
                    (a.horiz && g || !a.horiz && d) && a.setTickInterval(!0)
                }), this.getMargins();
                this.drawChartBox();
                this.hasCartesianSeries && n(a, function(a) {
                    a.visible && a.render()
                });
                this.seriesGroup || (this.seriesGroup = b.g("series-group").attr({
                    zIndex: 3
                }).add());
                this.renderSeries();
                this.renderLabels();
                this.addCredits();
                this.setResponsive && this.setResponsive();
                this.hasRendered = !0
            },
            addCredits: function(a) {
                var b = this;
                a = E(!0, this.options.credits, a);
                a.enabled && !this.credits && (this.credits =
                    this.renderer.text(a.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click", function() {
                        a.href && (N.location.href = a.href)
                    }).attr({
                        align: a.position.align,
                        zIndex: 8
                    }).css(a.style).add().align(a.position), this.credits.update = function(a) {
                        b.credits = b.credits.destroy();
                        b.addCredits(a)
                    })
            },
            destroy: function() {
                var b = this,
                    c = b.axes,
                    e = b.series,
                    g = b.container,
                    d, m = g && g.parentNode;
                p(b, "destroy");
                u[b.index] = void 0;
                a.chartCount--;
                b.renderTo.removeAttribute("data-highcharts-chart");
                K(b);
                for (d = c.length; d--;) c[d] =
                    c[d].destroy();
                this.scroller && this.scroller.destroy && this.scroller.destroy();
                for (d = e.length; d--;) e[d] = e[d].destroy();
                n("title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" "), function(a) {
                    var c = b[a];
                    c && c.destroy && (b[a] = c.destroy())
                });
                g && (g.innerHTML = "", K(g), m && k(g));
                for (d in b) delete b[d]
            },
            isReadyToRender: function() {
                var a = this;
                return F || N != N.top || "complete" === r.readyState ? !0 : (r.attachEvent("onreadystatechange",
                    function() {
                        r.detachEvent("onreadystatechange", a.firstRender);
                        "complete" === r.readyState && a.firstRender()
                    }), !1)
            },
            firstRender: function() {
                var a = this,
                    b = a.options;
                if (a.isReadyToRender()) {
                    a.getContainer();
                    p(a, "init");
                    a.resetMargins();
                    a.setChartSize();
                    a.propFromSeries();
                    a.getAxes();
                    n(b.series || [], function(b) {
                        a.initSeries(b)
                    });
                    a.linkSeries();
                    p(a, "beforeRender");
                    m && (a.pointer = new m(a, b));
                    a.render();
                    if (!a.renderer.imgCount && a.onload) a.onload();
                    a.cloneRenderTo(!0)
                }
            },
            onload: function() {
                n([this.callback].concat(this.callbacks),
                    function(a) {
                        a && void 0 !== this.index && a.apply(this, [this])
                    }, this);
                p(this, "load");
                p(this, "render");
                c(this.index) && !1 !== this.options.chart.reflow && this.initReflow();
                this.onload = null
            }
        }
    })(L);
    (function(a) {
        var B, A = a.each,
            H = a.extend,
            G = a.erase,
            r = a.fireEvent,
            f = a.format,
            l = a.isArray,
            q = a.isNumber,
            k = a.pick,
            u = a.removeEvent;
        B = a.Point = function() {};
        B.prototype = {
            init: function(a, c, f) {
                this.series = a;
                this.color = a.color;
                this.applyOptions(c, f);
                a.options.colorByPoint ? (c = a.options.colors || a.chart.options.colors, this.color = this.color ||
                    c[a.colorCounter], c = c.length, f = a.colorCounter, a.colorCounter++, a.colorCounter === c && (a.colorCounter = 0)) : f = a.colorIndex;
                this.colorIndex = k(this.colorIndex, f);
                a.chart.pointCount++;
                return this
            },
            applyOptions: function(a, c) {
                var d = this.series,
                    f = d.options.pointValKey || d.pointValKey;
                a = B.prototype.optionsToObject.call(this, a);
                H(this, a);
                this.options = this.options ? H(this.options, a) : a;
                a.group && delete this.group;
                f && (this.y = this[f]);
                this.isNull = k(this.isValid && !this.isValid(), null === this.x || !q(this.y, !0));
                this.selected &&
                    (this.state = "select");
                "name" in this && void 0 === c && d.xAxis && d.xAxis.hasNames && (this.x = d.xAxis.nameToX(this));
                void 0 === this.x && d && (this.x = void 0 === c ? d.autoIncrement(this) : c);
                return this
            },
            optionsToObject: function(a) {
                var c = {},
                    d = this.series,
                    f = d.options.keys,
                    b = f || d.pointArrayMap || ["y"],
                    p = b.length,
                    h = 0,
                    k = 0;
                if (q(a) || null === a) c[b[0]] = a;
                else if (l(a))
                    for (!f && a.length > p && (d = typeof a[0], "string" === d ? c.name = a[0] : "number" === d && (c.x = a[0]), h++); k < p;) f && void 0 === a[h] || (c[b[k]] = a[h]), h++, k++;
                else "object" === typeof a &&
                    (c = a, a.dataLabels && (d._hasPointLabels = !0), a.marker && (d._hasPointMarkers = !0));
                return c
            },
            getClassName: function() {
                return "highcharts-point" + (this.selected ? " highcharts-point-select" : "") + (this.negative ? " highcharts-negative" : "") + (this.isNull ? " highcharts-null-point" : "") + (void 0 !== this.colorIndex ? " highcharts-color-" + this.colorIndex : "") + (this.options.className ? " " + this.options.className : "") + (this.zone && this.zone.className ? " " + this.zone.className.replace("highcharts-negative", "") : "")
            },
            getZone: function() {
                var a =
                    this.series,
                    c = a.zones,
                    a = a.zoneAxis || "y",
                    f = 0,
                    k;
                for (k = c[f]; this[a] >= k.value;) k = c[++f];
                k && k.color && !this.options.color && (this.color = k.color);
                return k
            },
            destroy: function() {
                var a = this.series.chart,
                    c = a.hoverPoints,
                    f;
                a.pointCount--;
                c && (this.setState(), G(c, this), c.length || (a.hoverPoints = null));
                if (this === a.hoverPoint) this.onMouseOut();
                if (this.graphic || this.dataLabel) u(this), this.destroyElements();
                this.legendItem && a.legend.destroyItem(this);
                for (f in this) this[f] = null
            },
            destroyElements: function() {
                for (var a = ["graphic",
                        "dataLabel", "dataLabelUpper", "connector", "shadowGroup"
                    ], c, f = 6; f--;) c = a[f], this[c] && (this[c] = this[c].destroy())
            },
            getLabelConfig: function() {
                return {
                    x: this.category,
                    y: this.y,
                    color: this.color,
                    colorIndex: this.colorIndex,
                    key: this.name || this.category,
                    series: this.series,
                    point: this,
                    percentage: this.percentage,
                    total: this.total || this.stackTotal
                }
            },
            tooltipFormatter: function(a) {
                var c = this.series,
                    d = c.tooltipOptions,
                    l = k(d.valueDecimals, ""),
                    b = d.valuePrefix || "",
                    p = d.valueSuffix || "";
                A(c.pointArrayMap || ["y"], function(c) {
                    c =
                        "{point." + c;
                    if (b || p) a = a.replace(c + "}", b + c + "}" + p);
                    a = a.replace(c + "}", c + ":,." + l + "f}")
                });
                return f(a, {
                    point: this,
                    series: this.series
                })
            },
            firePointEvent: function(a, c, f) {
                var d = this,
                    b = this.series.options;
                (b.point.events[a] || d.options && d.options.events && d.options.events[a]) && this.importEvents();
                "click" === a && b.allowPointSelect && (f = function(a) {
                    d.select && d.select(null, a.ctrlKey || a.metaKey || a.shiftKey)
                });
                r(this, a, c, f)
            },
            visible: !0
        }
    })(L);
    (function(a) {
        var B = a.addEvent,
            A = a.animObject,
            H = a.arrayMax,
            G = a.arrayMin,
            r = a.correctFloat,
            f = a.Date,
            l = a.defaultOptions,
            q = a.defaultPlotOptions,
            k = a.defined,
            u = a.each,
            d = a.erase,
            c = a.extend,
            n = a.fireEvent,
            z = a.grep,
            b = a.isArray,
            p = a.isNumber,
            h = a.isString,
            t = a.merge,
            D = a.pick,
            w = a.removeEvent,
            e = a.splat,
            x = a.SVGElement,
            C = a.syncTimeout,
            E = a.win;
        a.Series = a.seriesType("line", null, {
            lineWidth: 2,
            allowPointSelect: !1,
            showCheckbox: !1,
            animation: {
                duration: 1E3
            },
            events: {},
            marker: {
                lineWidth: 0,
                lineColor: "#ffffff",
                radius: 4,
                states: {
                    hover: {
                        animation: {
                            duration: 50
                        },
                        enabled: !0,
                        radiusPlus: 2,
                        lineWidthPlus: 1
                    },
                    select: {
                        fillColor: "#cccccc",
                        lineColor: "#000000",
                        lineWidth: 2
                    }
                }
            },
            point: {
                events: {}
            },
            dataLabels: {
                align: "center",
                formatter: function() {
                    return null === this.y ? "" : a.numberFormat(this.y, -1)
                },
                style: {
                    fontSize: "11px",
                    fontWeight: "bold",
                    color: "contrast",
                    textOutline: "1px contrast"
                },
                verticalAlign: "bottom",
                x: 0,
                y: 0,
                padding: 5
            },
            cropThreshold: 300,
            pointRange: 0,
            softThreshold: !0,
            states: {
                hover: {
                    animation: {
                        duration: 50
                    },
                    lineWidthPlus: 1,
                    marker: {},
                    halo: {
                        size: 10,
                        opacity: .25
                    }
                },
                select: {
                    marker: {}
                }
            },
            stickyTracking: !0,
            turboThreshold: 1E3,
            findNearestPointBy: "x"
        }, {
            isCartesian: !0,
            pointClass: a.Point,
            sorted: !0,
            requireSorting: !0,
            directTouch: !1,
            axisTypes: ["xAxis", "yAxis"],
            colorCounter: 0,
            parallelArrays: ["x", "y"],
            coll: "series",
            init: function(a, b) {
                var e = this,
                    d, m, g = a.series,
                    h;
                e.chart = a;
                e.options = b = e.setOptions(b);
                e.linkedSeries = [];
                e.bindAxes();
                c(e, {
                    name: b.name,
                    state: "",
                    visible: !1 !== b.visible,
                    selected: !0 === b.selected
                });
                m = b.events;
                for (d in m) B(e, d, m[d]);
                if (m && m.click || b.point && b.point.events && b.point.events.click || b.allowPointSelect) a.runTrackerClick = !0;
                e.getColor();
                e.getSymbol();
                u(e.parallelArrays, function(a) {
                    e[a + "Data"] = []
                });
                e.setData(b.data, !1);
                e.isCartesian && (a.hasCartesianSeries = !0);
                g.length && (h = g[g.length - 1]);
                e._i = D(h && h._i, -1) + 1;
                a.orderSeries(this.insert(g))
            },
            insert: function(a) {
                var b = this.options.index,
                    c;
                if (p(b)) {
                    for (c = a.length; c--;)
                        if (b >= D(a[c].options.index, a[c]._i)) {
                            a.splice(c + 1, 0, this);
                            break
                        } - 1 === c && a.unshift(this);
                    c += 1
                } else a.push(this);
                return D(c, a.length - 1)
            },
            bindAxes: function() {
                var b = this,
                    c = b.options,
                    e = b.chart,
                    d;
                u(b.axisTypes || [], function(m) {
                    u(e[m],
                        function(a) {
                            d = a.options;
                            if (c[m] === d.index || void 0 !== c[m] && c[m] === d.id || void 0 === c[m] && 0 === d.index) b.insert(a.series), b[m] = a, a.isDirty = !0
                        });
                    b[m] || b.optionalAxis === m || a.error(18, !0)
                })
            },
            updateParallelArrays: function(a, b) {
                var c = a.series,
                    e = arguments,
                    d = p(b) ? function(e) {
                        var g = "y" === e && c.toYData ? c.toYData(a) : a[e];
                        c[e + "Data"][b] = g
                    } : function(a) {
                        Array.prototype[b].apply(c[a + "Data"], Array.prototype.slice.call(e, 2))
                    };
                u(c.parallelArrays, d)
            },
            autoIncrement: function() {
                var a = this.options,
                    b = this.xIncrement,
                    c, e = a.pointIntervalUnit,
                    b = D(b, a.pointStart, 0);
                this.pointInterval = c = D(this.pointInterval, a.pointInterval, 1);
                e && (a = new f(b), "day" === e ? a = +a[f.hcSetDate](a[f.hcGetDate]() + c) : "month" === e ? a = +a[f.hcSetMonth](a[f.hcGetMonth]() + c) : "year" === e && (a = +a[f.hcSetFullYear](a[f.hcGetFullYear]() + c)), c = a - b);
                this.xIncrement = b + c;
                return b
            },
            setOptions: function(a) {
                var b = this.chart,
                    c = b.options.plotOptions,
                    b = b.userOptions || {},
                    e = b.plotOptions || {},
                    d = c[this.type];
                this.userOptions = a;
                c = t(d, c.series, a);
                this.tooltipOptions = t(l.tooltip, l.plotOptions[this.type].tooltip,
                    b.tooltip, e.series && e.series.tooltip, e[this.type] && e[this.type].tooltip, a.tooltip);
                this.stickyTracking = D(a.stickyTracking, e[this.type] && e[this.type].stickyTracking, e.series && e.series.stickyTracking, this.tooltipOptions.shared && !this.noSharedTooltip ? !0 : c.stickyTracking);
                null === d.marker && delete c.marker;
                this.zoneAxis = c.zoneAxis;
                a = this.zones = (c.zones || []).slice();
                !c.negativeColor && !c.negativeFillColor || c.zones || a.push({
                    value: c[this.zoneAxis + "Threshold"] || c.threshold || 0,
                    className: "highcharts-negative",
                    color: c.negativeColor,
                    fillColor: c.negativeFillColor
                });
                a.length && k(a[a.length - 1].value) && a.push({
                    color: this.color,
                    fillColor: this.fillColor
                });
                return c
            },
            getCyclic: function(a, b, c) {
                var e, d = this.chart,
                    g = this.userOptions,
                    m = a + "Index",
                    h = a + "Counter",
                    f = c ? c.length : D(d.options.chart[a + "Count"], d[a + "Count"]);
                b || (e = D(g[m], g["_" + m]), k(e) || (d.series.length || (d[h] = 0), g["_" + m] = e = d[h] % f, d[h] += 1), c && (b = c[e]));
                void 0 !== e && (this[m] = e);
                this[a] = b
            },
            getColor: function() {
                this.options.colorByPoint ? this.options.color = null : this.getCyclic("color",
                    this.options.color || q[this.type].color, this.chart.options.colors)
            },
            getSymbol: function() {
                this.getCyclic("symbol", this.options.marker.symbol, this.chart.options.symbols)
            },
            drawLegendSymbol: a.LegendSymbolMixin.drawLineMarker,
            setData: function(c, e, d, f) {
                var m = this,
                    g = m.points,
                    k = g && g.length || 0,
                    n, l = m.options,
                    y = m.chart,
                    t = null,
                    q = m.xAxis,
                    x = l.turboThreshold,
                    r = this.xData,
                    w = this.yData,
                    C = (n = m.pointArrayMap) && n.length;
                c = c || [];
                n = c.length;
                e = D(e, !0);
                if (!1 !== f && n && k === n && !m.cropped && !m.hasGroupedData && m.visible) u(c, function(a,
                    b) {
                    g[b].update && a !== l.data[b] && g[b].update(a, !1, null, !1)
                });
                else {
                    m.xIncrement = null;
                    m.colorCounter = 0;
                    u(this.parallelArrays, function(a) {
                        m[a + "Data"].length = 0
                    });
                    if (x && n > x) {
                        for (d = 0; null === t && d < n;) t = c[d], d++;
                        if (p(t))
                            for (d = 0; d < n; d++) r[d] = this.autoIncrement(), w[d] = c[d];
                        else if (b(t))
                            if (C)
                                for (d = 0; d < n; d++) t = c[d], r[d] = t[0], w[d] = t.slice(1, C + 1);
                            else
                                for (d = 0; d < n; d++) t = c[d], r[d] = t[0], w[d] = t[1];
                        else a.error(12)
                    } else
                        for (d = 0; d < n; d++) void 0 !== c[d] && (t = {
                            series: m
                        }, m.pointClass.prototype.applyOptions.apply(t, [c[d]]), m.updateParallelArrays(t,
                            d));
                    h(w[0]) && a.error(14, !0);
                    m.data = [];
                    m.options.data = m.userOptions.data = c;
                    for (d = k; d--;) g[d] && g[d].destroy && g[d].destroy();
                    q && (q.minRange = q.userMinRange);
                    m.isDirty = y.isDirtyBox = !0;
                    m.isDirtyData = !!g;
                    d = !1
                }
                "point" === l.legendType && (this.processData(), this.generatePoints());
                e && y.redraw(d)
            },
            processData: function(b) {
                var c = this.xData,
                    e = this.yData,
                    d = c.length,
                    m;
                m = 0;
                var g, h, f = this.xAxis,
                    p, k = this.options;
                p = k.cropThreshold;
                var n = this.getExtremesFromAll || k.getExtremesFromAll,
                    l = this.isCartesian,
                    k = f && f.val2lin,
                    t = f &&
                    f.isLog,
                    q, x;
                if (l && !this.isDirty && !f.isDirty && !this.yAxis.isDirty && !b) return !1;
                f && (b = f.getExtremes(), q = b.min, x = b.max);
                if (l && this.sorted && !n && (!p || d > p || this.forceCrop))
                    if (c[d - 1] < q || c[0] > x) c = [], e = [];
                    else if (c[0] < q || c[d - 1] > x) m = this.cropData(this.xData, this.yData, q, x), c = m.xData, e = m.yData, m = m.start, g = !0;
                for (p = c.length || 1; --p;) d = t ? k(c[p]) - k(c[p - 1]) : c[p] - c[p - 1], 0 < d && (void 0 === h || d < h) ? h = d : 0 > d && this.requireSorting && a.error(15);
                this.cropped = g;
                this.cropStart = m;
                this.processedXData = c;
                this.processedYData = e;
                this.closestPointRange =
                    h
            },
            cropData: function(a, b, c, e) {
                var d = a.length,
                    g = 0,
                    m = d,
                    h = D(this.cropShoulder, 1),
                    f;
                for (f = 0; f < d; f++)
                    if (a[f] >= c) {
                        g = Math.max(0, f - h);
                        break
                    }
                for (c = f; c < d; c++)
                    if (a[c] > e) {
                        m = c + h;
                        break
                    }
                return {
                    xData: a.slice(g, m),
                    yData: b.slice(g, m),
                    start: g,
                    end: m
                }
            },
            generatePoints: function() {
                var a = this.options.data,
                    b = this.data,
                    c, d = this.processedXData,
                    h = this.processedYData,
                    g = this.pointClass,
                    f = d.length,
                    p = this.cropStart || 0,
                    k, n = this.hasGroupedData,
                    l, t = [],
                    q;
                b || n || (b = [], b.length = a.length, b = this.data = b);
                for (q = 0; q < f; q++) k = p + q, n ? (l = (new g).init(this, [d[q]].concat(e(h[q]))), l.dataGroup = this.groupMap[q]) : (l = b[k]) || void 0 === a[k] || (b[k] = l = (new g).init(this, a[k], d[q])), l && (l.index = k, t[q] = l);
                if (b && (f !== (c = b.length) || n))
                    for (q = 0; q < c; q++) q !== p || n || (q += f), b[q] && (b[q].destroyElements(), b[q].plotX = void 0);
                this.data = b;
                this.points = t
            },
            getExtremes: function(a) {
                var c = this.yAxis,
                    e = this.processedXData,
                    d, m = [],
                    g = 0;
                d = this.xAxis.getExtremes();
                var h = d.min,
                    f = d.max,
                    k, n, l, t;
                a = a || this.stackedYData || this.processedYData || [];
                d = a.length;
                for (t = 0; t < d; t++)
                    if (n = e[t], l = a[t], k = (p(l, !0) || b(l)) && (!c.positiveValuesOnly || l.length || 0 < l), n = this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || (e[t] || n) >= h && (e[t] || n) <= f, k && n)
                        if (k = l.length)
                            for (; k--;) null !== l[k] && (m[g++] = l[k]);
                        else m[g++] = l;
                this.dataMin = G(m);
                this.dataMax = H(m)
            },
            translate: function() {
                this.processedXData || this.processData();
                this.generatePoints();
                var a = this.options,
                    b = a.stacking,
                    c = this.xAxis,
                    e = c.categories,
                    d = this.yAxis,
                    g = this.points,
                    h = g.length,
                    f = !!this.modifyValue,
                    n = a.pointPlacement,
                    l = "between" === n || p(n),
                    t = a.threshold,
                    q = a.startFromThreshold ? t : 0,
                    x, u, w, C, E = Number.MAX_VALUE;
                "between" === n && (n = .5);
                p(n) && (n *= D(a.pointRange || c.pointRange));
                for (a = 0; a < h; a++) {
                    var z = g[a],
                        A = z.x,
                        B = z.y;
                    u = z.low;
                    var H = b && d.stacks[(this.negStacks && B < (q ? 0 : t) ? "-" : "") + this.stackKey],
                        G;
                    d.positiveValuesOnly && null !== B && 0 >= B && (z.isNull = !0);
                    z.plotX = x = r(Math.min(Math.max(-1E5, c.translate(A, 0, 0, 0, 1, n, "flags" === this.type)), 1E5));
                    b && this.visible && !z.isNull && H && H[A] && (C = this.getStackIndicator(C, A, this.index), G = H[A], B = G.points[C.key], u = B[0], B =
                        B[1], u === q && C.key === H[A].base && (u = D(t, d.min)), d.positiveValuesOnly && 0 >= u && (u = null), z.total = z.stackTotal = G.total, z.percentage = G.total && z.y / G.total * 100, z.stackY = B, G.setOffset(this.pointXOffset || 0, this.barW || 0));
                    z.yBottom = k(u) ? d.translate(u, 0, 1, 0, 1) : null;
                    f && (B = this.modifyValue(B, z));
                    z.plotY = u = "number" === typeof B && Infinity !== B ? Math.min(Math.max(-1E5, d.translate(B, 0, 1, 0, 1)), 1E5) : void 0;
                    z.isInside = void 0 !== u && 0 <= u && u <= d.len && 0 <= x && x <= c.len;
                    z.clientX = l ? r(c.translate(A, 0, 0, 0, 1, n)) : x;
                    z.negative = z.y < (t || 0);
                    z.category = e && void 0 !== e[z.x] ? e[z.x] : z.x;
                    z.isNull || (void 0 !== w && (E = Math.min(E, Math.abs(x - w))), w = x);
                    z.zone = this.zones.length && z.getZone()
                }
                this.closestPointRangePx = E
            },
            getValidPoints: function(a, b) {
                var c = this.chart;
                return z(a || this.points || [], function(a) {
                    return b && !c.isInsidePlot(a.plotX, a.plotY, c.inverted) ? !1 : !a.isNull
                })
            },
            setClip: function(a) {
                var b = this.chart,
                    c = this.options,
                    e = b.renderer,
                    d = b.inverted,
                    g = this.clipBox,
                    h = g || b.clipBox,
                    m = this.sharedClipKey || ["_sharedClip", a && a.duration, a && a.easing, h.height,
                        c.xAxis, c.yAxis
                    ].join(),
                    f = b[m],
                    p = b[m + "m"];
                f || (a && (h.width = 0, b[m + "m"] = p = e.clipRect(-99, d ? -b.plotLeft : -b.plotTop, 99, d ? b.chartWidth : b.chartHeight)), b[m] = f = e.clipRect(h), f.count = {
                    length: 0
                });
                a && !f.count[this.index] && (f.count[this.index] = !0, f.count.length += 1);
                !1 !== c.clip && (this.group.clip(a || g ? f : b.clipRect), this.markerGroup.clip(p), this.sharedClipKey = m);
                a || (f.count[this.index] && (delete f.count[this.index], --f.count.length), 0 === f.count.length && m && b[m] && (g || (b[m] = b[m].destroy()), b[m + "m"] && (b[m + "m"] = b[m + "m"].destroy())))
            },
            animate: function(a) {
                var b = this.chart,
                    c = A(this.options.animation),
                    e;
                a ? this.setClip(c) : (e = this.sharedClipKey, (a = b[e]) && a.animate({
                    width: b.plotSizeX
                }, c), b[e + "m"] && b[e + "m"].animate({
                    width: b.plotSizeX + 99
                }, c), this.animate = null)
            },
            afterAnimate: function() {
                this.setClip();
                n(this, "afterAnimate")
            },
            drawPoints: function() {
                var a = this.points,
                    b = this.chart,
                    c, e, d, g, h = this.options.marker,
                    f, n, k, l, t = this.markerGroup,
                    q = D(h.enabled, this.xAxis.isRadial ? !0 : null, this.closestPointRangePx >= 2 * h.radius);
                if (!1 !== h.enabled || this._hasPointMarkers)
                    for (e =
                        0; e < a.length; e++) d = a[e], c = d.plotY, g = d.graphic, f = d.marker || {}, n = !!d.marker, k = q && void 0 === f.enabled || f.enabled, l = d.isInside, k && p(c) && null !== d.y ? (c = D(f.symbol, this.symbol), d.hasImage = 0 === c.indexOf("url"), k = this.markerAttribs(d, d.selected && "select"), g ? g[l ? "show" : "hide"](!0).animate(k) : l && (0 < k.width || d.hasImage) && (d.graphic = g = b.renderer.symbol(c, k.x, k.y, k.width, k.height, n ? f : h).add(t)), g && g.attr(this.pointAttribs(d, d.selected && "select")), g && g.addClass(d.getClassName(), !0)) : g && (d.graphic = g.destroy())
            },
            markerAttribs: function(a,
                b) {
                var c = this.options.marker,
                    e = a.marker || {},
                    d = D(e.radius, c.radius);
                b && (c = c.states[b], b = e.states && e.states[b], d = D(b && b.radius, c && c.radius, d + (c && c.radiusPlus || 0)));
                a.hasImage && (d = 0);
                a = {
                    x: Math.floor(a.plotX) - d,
                    y: a.plotY - d
                };
                d && (a.width = a.height = 2 * d);
                return a
            },
            pointAttribs: function(a, b) {
                var c = this.options.marker,
                    e = a && a.options,
                    d = e && e.marker || {},
                    g = this.color,
                    h = e && e.color,
                    f = a && a.color,
                    e = D(d.lineWidth, c.lineWidth);
                a = a && a.zone && a.zone.color;
                g = h || a || f || g;
                a = d.fillColor || c.fillColor || g;
                g = d.lineColor || c.lineColor ||
                    g;
                b && (c = c.states[b], b = d.states && d.states[b] || {}, e = D(b.lineWidth, c.lineWidth, e + D(b.lineWidthPlus, c.lineWidthPlus, 0)), a = b.fillColor || c.fillColor || a, g = b.lineColor || c.lineColor || g);
                return {
                    stroke: g,
                    "stroke-width": e,
                    fill: a
                }
            },
            destroy: function() {
                var a = this,
                    b = a.chart,
                    c = /AppleWebKit\/533/.test(E.navigator.userAgent),
                    e, h = a.data || [],
                    g, f, k;
                n(a, "destroy");
                w(a);
                u(a.axisTypes || [], function(b) {
                    (k = a[b]) && k.series && (d(k.series, a), k.isDirty = k.forceRedraw = !0)
                });
                a.legendItem && a.chart.legend.destroyItem(a);
                for (e = h.length; e--;)(g =
                    h[e]) && g.destroy && g.destroy();
                a.points = null;
                clearTimeout(a.animationTimeout);
                for (f in a) a[f] instanceof x && !a[f].survive && (e = c && "group" === f ? "hide" : "destroy", a[f][e]());
                b.hoverSeries === a && (b.hoverSeries = null);
                d(b.series, a);
                b.orderSeries();
                for (f in a) delete a[f]
            },
            getGraphPath: function(a, b, c) {
                var e = this,
                    d = e.options,
                    g = d.step,
                    h, f = [],
                    m = [],
                    p;
                a = a || e.points;
                (h = a.reversed) && a.reverse();
                (g = {
                    right: 1,
                    center: 2
                }[g] || g && 3) && h && (g = 4 - g);
                !d.connectNulls || b || c || (a = this.getValidPoints(a));
                u(a, function(h, n) {
                    var l = h.plotX,
                        t = h.plotY,
                        q = a[n - 1];
                    (h.leftCliff || q && q.rightCliff) && !c && (p = !0);
                    h.isNull && !k(b) && 0 < n ? p = !d.connectNulls : h.isNull && !b ? p = !0 : (0 === n || p ? n = ["M", h.plotX, h.plotY] : e.getPointSpline ? n = e.getPointSpline(a, h, n) : g ? (n = 1 === g ? ["L", q.plotX, t] : 2 === g ? ["L", (q.plotX + l) / 2, q.plotY, "L", (q.plotX + l) / 2, t] : ["L", l, q.plotY], n.push("L", l, t)) : n = ["L", l, t], m.push(h.x), g && m.push(h.x), f.push.apply(f, n), p = !1)
                });
                f.xMap = m;
                return e.graphPath = f
            },
            drawGraph: function() {
                var a = this,
                    b = this.options,
                    c = (this.gappedPath || this.getGraphPath).call(this),
                    e = [
                        ["graph", "highcharts-graph", b.lineColor || this.color, b.dashStyle]
                    ];
                u(this.zones, function(c, d) {
                    e.push(["zone-graph-" + d, "highcharts-graph highcharts-zone-graph-" + d + " " + (c.className || ""), c.color || a.color, c.dashStyle || b.dashStyle])
                });
                u(e, function(e, d) {
                    var g = e[0],
                        h = a[g];
                    h ? (h.endX = c.xMap, h.animate({
                        d: c
                    })) : c.length && (a[g] = a.chart.renderer.path(c).addClass(e[1]).attr({
                            zIndex: 1
                        }).add(a.group), h = {
                            stroke: e[2],
                            "stroke-width": b.lineWidth,
                            fill: a.fillGraph && a.color || "none"
                        }, e[3] ? h.dashstyle = e[3] : "square" !== b.linecap &&
                        (h["stroke-linecap"] = h["stroke-linejoin"] = "round"), h = a[g].attr(h).shadow(2 > d && b.shadow));
                    h && (h.startX = c.xMap, h.isArea = c.isArea)
                })
            },
            applyZones: function() {
                var a = this,
                    b = this.chart,
                    c = b.renderer,
                    e = this.zones,
                    d, g, h = this.clips || [],
                    f, k = this.graph,
                    p = this.area,
                    n = Math.max(b.chartWidth, b.chartHeight),
                    l = this[(this.zoneAxis || "y") + "Axis"],
                    t, q, x = b.inverted,
                    w, r, C, E, z = !1;
                e.length && (k || p) && l && void 0 !== l.min && (q = l.reversed, w = l.horiz, k && k.hide(), p && p.hide(), t = l.getExtremes(), u(e, function(e, m) {
                    d = q ? w ? b.plotWidth : 0 : w ? 0 :
                        l.toPixels(t.min);
                    d = Math.min(Math.max(D(g, d), 0), n);
                    g = Math.min(Math.max(Math.round(l.toPixels(D(e.value, t.max), !0)), 0), n);
                    z && (d = g = l.toPixels(t.max));
                    r = Math.abs(d - g);
                    C = Math.min(d, g);
                    E = Math.max(d, g);
                    l.isXAxis ? (f = {
                        x: x ? E : C,
                        y: 0,
                        width: r,
                        height: n
                    }, w || (f.x = b.plotHeight - f.x)) : (f = {
                        x: 0,
                        y: x ? E : C,
                        width: n,
                        height: r
                    }, w && (f.y = b.plotWidth - f.y));
                    x && c.isVML && (f = l.isXAxis ? {
                        x: 0,
                        y: q ? C : E,
                        height: f.width,
                        width: b.chartWidth
                    } : {
                        x: f.y - b.plotLeft - b.spacingBox.x,
                        y: 0,
                        width: f.height,
                        height: b.chartHeight
                    });
                    h[m] ? h[m].animate(f) : (h[m] =
                        c.clipRect(f), k && a["zone-graph-" + m].clip(h[m]), p && a["zone-area-" + m].clip(h[m]));
                    z = e.value > t.max
                }), this.clips = h)
            },
            invertGroups: function(a) {
                function b() {
                    u(["group", "markerGroup"], function(b) {
                        c[b] && (e.renderer.isVML && c[b].attr({
                            width: c.yAxis.len,
                            height: c.xAxis.len
                        }), c[b].width = c.yAxis.len, c[b].height = c.xAxis.len, c[b].invert(a))
                    })
                }
                var c = this,
                    e = c.chart,
                    d;
                c.xAxis && (d = B(e, "resize", b), B(c, "destroy", d), b(a), c.invertGroups = b)
            },
            plotGroup: function(a, b, c, e, d) {
                var g = this[a],
                    h = !g;
                h && (this[a] = g = this.chart.renderer.g(b).attr({
                    zIndex: e ||
                        .1
                }).add(d), g.addClass("highcharts-series-" + this.index + " highcharts-" + this.type + "-series highcharts-color-" + this.colorIndex + " " + (this.options.className || "")));
                g.attr({
                    visibility: c
                })[h ? "attr" : "animate"](this.getPlotBox());
                return g
            },
            getPlotBox: function() {
                var a = this.chart,
                    b = this.xAxis,
                    c = this.yAxis;
                a.inverted && (b = c, c = this.xAxis);
                return {
                    translateX: b ? b.left : a.plotLeft,
                    translateY: c ? c.top : a.plotTop,
                    scaleX: 1,
                    scaleY: 1
                }
            },
            render: function() {
                var a = this,
                    b = a.chart,
                    c, e = a.options,
                    d = !!a.animate && b.renderer.isSVG && A(e.animation).duration,
                    g = a.visible ? "inherit" : "hidden",
                    h = e.zIndex,
                    f = a.hasRendered,
                    k = b.seriesGroup,
                    p = b.inverted;
                c = a.plotGroup("group", "series", g, h, k);
                a.markerGroup = a.plotGroup("markerGroup", "markers", g, h, k);
                d && a.animate(!0);
                c.inverted = a.isCartesian ? p : !1;
                a.drawGraph && (a.drawGraph(), a.applyZones());
                a.drawDataLabels && a.drawDataLabels();
                a.visible && a.drawPoints();
                a.drawTracker && !1 !== a.options.enableMouseTracking && a.drawTracker();
                a.invertGroups(p);
                !1 === e.clip || a.sharedClipKey || f || c.clip(b.clipRect);
                d && a.animate();
                f || (a.animationTimeout =
                    C(function() {
                        a.afterAnimate()
                    }, d));
                a.isDirty = !1;
                a.hasRendered = !0
            },
            redraw: function() {
                var a = this.chart,
                    b = this.isDirty || this.isDirtyData,
                    c = this.group,
                    e = this.xAxis,
                    d = this.yAxis;
                c && (a.inverted && c.attr({
                    width: a.plotWidth,
                    height: a.plotHeight
                }), c.animate({
                    translateX: D(e && e.left, a.plotLeft),
                    translateY: D(d && d.top, a.plotTop)
                }));
                this.translate();
                this.render();
                b && delete this.kdTree
            },
            kdAxisArray: ["clientX", "plotY"],
            searchPoint: function(a, b) {
                var c = this.xAxis,
                    e = this.yAxis,
                    d = this.chart.inverted;
                return this.searchKDTree({
                    clientX: d ?
                        c.len - a.chartY + c.pos : a.chartX - c.pos,
                    plotY: d ? e.len - a.chartX + e.pos : a.chartY - e.pos
                }, b)
            },
            buildKDTree: function() {
                function a(c, e, d) {
                    var g, h;
                    if (h = c && c.length) return g = b.kdAxisArray[e % d], c.sort(function(a, b) {
                        return a[g] - b[g]
                    }), h = Math.floor(h / 2), {
                        point: c[h],
                        left: a(c.slice(0, h), e + 1, d),
                        right: a(c.slice(h + 1), e + 1, d)
                    }
                }
                this.buildingKdTree = !0;
                var b = this,
                    c = -1 < b.options.findNearestPointBy.indexOf("y") ? 2 : 1;
                delete b.kdTree;
                C(function() {
                        b.kdTree = a(b.getValidPoints(null, !b.directTouch), c, c);
                        b.buildingKdTree = !1
                    }, b.options.kdNow ?
                    0 : 1)
            },
            searchKDTree: function(a, b) {
                function c(a, b, f, m) {
                    var p = b.point,
                        n = e.kdAxisArray[f % m],
                        l, t, q = p;
                    t = k(a[d]) && k(p[d]) ? Math.pow(a[d] - p[d], 2) : null;
                    l = k(a[g]) && k(p[g]) ? Math.pow(a[g] - p[g], 2) : null;
                    l = (t || 0) + (l || 0);
                    p.dist = k(l) ? Math.sqrt(l) : Number.MAX_VALUE;
                    p.distX = k(t) ? Math.sqrt(t) : Number.MAX_VALUE;
                    n = a[n] - p[n];
                    l = 0 > n ? "left" : "right";
                    t = 0 > n ? "right" : "left";
                    b[l] && (l = c(a, b[l], f + 1, m), q = l[h] < q[h] ? l : p);
                    b[t] && Math.sqrt(n * n) < q[h] && (a = c(a, b[t], f + 1, m), q = a[h] < q[h] ? a : q);
                    return q
                }
                var e = this,
                    d = this.kdAxisArray[0],
                    g = this.kdAxisArray[1],
                    h = b ? "distX" : "dist";
                b = -1 < e.options.findNearestPointBy.indexOf("y") ? 2 : 1;
                this.kdTree || this.buildingKdTree || this.buildKDTree();
                if (this.kdTree) return c(a, this.kdTree, b, b)
            }
        })
    })(L);
    (function(a) {
        function B(a, d, c, f, l) {
            var b = a.chart.inverted;
            this.axis = a;
            this.isNegative = c;
            this.options = d;
            this.x = f;
            this.total = null;
            this.points = {};
            this.stack = l;
            this.rightCliff = this.leftCliff = 0;
            this.alignOptions = {
                align: d.align || (b ? c ? "left" : "right" : "center"),
                verticalAlign: d.verticalAlign || (b ? "middle" : c ? "bottom" : "top"),
                y: k(d.y, b ? 4 : c ?
                    14 : -6),
                x: k(d.x, b ? c ? -6 : 6 : 0)
            };
            this.textAlign = d.textAlign || (b ? c ? "right" : "left" : "center")
        }
        var A = a.Axis,
            H = a.Chart,
            G = a.correctFloat,
            r = a.defined,
            f = a.destroyObjectProperties,
            l = a.each,
            q = a.format,
            k = a.pick;
        a = a.Series;
        B.prototype = {
            destroy: function() {
                f(this, this.axis)
            },
            render: function(a) {
                var d = this.options,
                    c = d.format,
                    c = c ? q(c, this) : d.formatter.call(this);
                this.label ? this.label.attr({
                    text: c,
                    visibility: "hidden"
                }) : this.label = this.axis.chart.renderer.text(c, null, null, d.useHTML).css(d.style).attr({
                    align: this.textAlign,
                    rotation: d.rotation,
                    visibility: "hidden"
                }).add(a)
            },
            setOffset: function(a, d) {
                var c = this.axis,
                    f = c.chart,
                    k = f.inverted,
                    b = c.reversed,
                    b = this.isNegative && !b || !this.isNegative && b,
                    p = c.translate(c.usePercentage ? 100 : this.total, 0, 0, 0, 1),
                    c = c.translate(0),
                    c = Math.abs(p - c);
                a = f.xAxis[0].translate(this.x) + a;
                var h = f.plotHeight,
                    k = {
                        x: k ? b ? p : p - c : a,
                        y: k ? h - a - d : b ? h - p - c : h - p,
                        width: k ? c : d,
                        height: k ? d : c
                    };
                if (d = this.label) d.align(this.alignOptions, null, k), k = d.alignAttr, d[!1 === this.options.crop || f.isInsidePlot(k.x, k.y) ? "show" : "hide"](!0)
            }
        };
        H.prototype.getStacks = function() {
            var a = this;
            l(a.yAxis, function(a) {
                a.stacks && a.hasVisibleSeries && (a.oldStacks = a.stacks)
            });
            l(a.series, function(d) {
                !d.options.stacking || !0 !== d.visible && !1 !== a.options.chart.ignoreHiddenSeries || (d.stackKey = d.type + k(d.options.stack, ""))
            })
        };
        A.prototype.buildStacks = function() {
            var a = this.series,
                d, c = k(this.options.reversedStacks, !0),
                f = a.length,
                l;
            if (!this.isXAxis) {
                this.usePercentage = !1;
                for (l = f; l--;) a[c ? l : f - l - 1].setStackedPoints();
                for (l = f; l--;) d = a[c ? l : f - l - 1], d.setStackCliffs &&
                    d.setStackCliffs();
                if (this.usePercentage)
                    for (l = 0; l < f; l++) a[l].setPercentStacks()
            }
        };
        A.prototype.renderStackTotals = function() {
            var a = this.chart,
                d = a.renderer,
                c = this.stacks,
                f, k, b = this.stackTotalGroup;
            b || (this.stackTotalGroup = b = d.g("stack-labels").attr({
                visibility: "visible",
                zIndex: 6
            }).add());
            b.translate(a.plotLeft, a.plotTop);
            for (f in c)
                for (k in a = c[f], a) a[k].render(b)
        };
        A.prototype.resetStacks = function() {
            var a = this.stacks,
                d, c;
            if (!this.isXAxis)
                for (d in a)
                    for (c in a[d]) a[d][c].touched < this.stacksTouched ? (a[d][c].destroy(),
                        delete a[d][c]) : (a[d][c].total = null, a[d][c].cum = null)
        };
        A.prototype.cleanStacks = function() {
            var a, d, c;
            if (!this.isXAxis)
                for (d in this.oldStacks && (a = this.stacks = this.oldStacks), a)
                    for (c in a[d]) a[d][c].cum = a[d][c].total
        };
        a.prototype.setStackedPoints = function() {
            if (this.options.stacking && (!0 === this.visible || !1 === this.chart.options.chart.ignoreHiddenSeries)) {
                var a = this.processedXData,
                    d = this.processedYData,
                    c = [],
                    f = d.length,
                    l = this.options,
                    b = l.threshold,
                    p = l.startFromThreshold ? b : 0,
                    h = l.stack,
                    l = l.stacking,
                    t = this.stackKey,
                    q = "-" + t,
                    w = this.negStacks,
                    e = this.yAxis,
                    x = e.stacks,
                    C = e.oldStacks,
                    E, m, y, A, K, J, g;
                e.stacksTouched += 1;
                for (K = 0; K < f; K++) J = a[K], g = d[K], E = this.getStackIndicator(E, J, this.index), A = E.key, y = (m = w && g < (p ? 0 : b)) ? q : t, x[y] || (x[y] = {}), x[y][J] || (C[y] && C[y][J] ? (x[y][J] = C[y][J], x[y][J].total = null) : x[y][J] = new B(e, e.options.stackLabels, m, J, h)), y = x[y][J], null !== g && (y.points[A] = y.points[this.index] = [k(y.cum, p)], r(y.cum) || (y.base = A), y.touched = e.stacksTouched, 0 < E.index && !1 === this.singleStacks && (y.points[A][0] = y.points[this.index +
                    "," + J + ",0"][0])), "percent" === l ? (m = m ? t : q, w && x[m] && x[m][J] ? (m = x[m][J], y.total = m.total = Math.max(m.total, y.total) + Math.abs(g) || 0) : y.total = G(y.total + (Math.abs(g) || 0))) : y.total = G(y.total + (g || 0)), y.cum = k(y.cum, p) + (g || 0), null !== g && (y.points[A].push(y.cum), c[K] = y.cum);
                "percent" === l && (e.usePercentage = !0);
                this.stackedYData = c;
                e.oldStacks = {}
            }
        };
        a.prototype.setPercentStacks = function() {
            var a = this,
                d = a.stackKey,
                c = a.yAxis.stacks,
                f = a.processedXData,
                k;
            l([d, "-" + d], function(b) {
                for (var d = f.length, h, n; d--;)
                    if (h = f[d], k = a.getStackIndicator(k,
                            h, a.index, b), h = (n = c[b] && c[b][h]) && n.points[k.key]) n = n.total ? 100 / n.total : 0, h[0] = G(h[0] * n), h[1] = G(h[1] * n), a.stackedYData[d] = h[1]
            })
        };
        a.prototype.getStackIndicator = function(a, d, c, f) {
            !r(a) || a.x !== d || f && a.key !== f ? a = {
                x: d,
                index: 0,
                key: f
            } : a.index++;
            a.key = [c, d, a.index].join();
            return a
        }
    })(L);
    (function(a) {
        var B = a.addEvent,
            A = a.animate,
            H = a.Axis,
            G = a.createElement,
            r = a.css,
            f = a.defined,
            l = a.each,
            q = a.erase,
            k = a.extend,
            u = a.fireEvent,
            d = a.inArray,
            c = a.isNumber,
            n = a.isObject,
            z = a.merge,
            b = a.pick,
            p = a.Point,
            h = a.Series,
            t = a.seriesTypes,
            D = a.setAnimation,
            w = a.splat;
        k(a.Chart.prototype, {
            addSeries: function(a, c, d) {
                var e, h = this;
                a && (c = b(c, !0), u(h, "addSeries", {
                    options: a
                }, function() {
                    e = h.initSeries(a);
                    h.isDirtyLegend = !0;
                    h.linkSeries();
                    c && h.redraw(d)
                }));
                return e
            },
            addAxis: function(a, c, d, h) {
                var e = c ? "xAxis" : "yAxis",
                    f = this.options;
                a = z(a, {
                    index: this[e].length,
                    isX: c
                });
                new H(this, a);
                f[e] = w(f[e] || {});
                f[e].push(a);
                b(d, !0) && this.redraw(h)
            },
            showLoading: function(a) {
                var b = this,
                    c = b.options,
                    e = b.loadingDiv,
                    d = c.loading,
                    h = function() {
                        e && r(e, {
                            left: b.plotLeft +
                                "px",
                            top: b.plotTop + "px",
                            width: b.plotWidth + "px",
                            height: b.plotHeight + "px"
                        })
                    };
                e || (b.loadingDiv = e = G("div", {
                    className: "highcharts-loading highcharts-loading-hidden"
                }, null, b.container), b.loadingSpan = G("span", {
                    className: "highcharts-loading-inner"
                }, null, e), B(b, "redraw", h));
                e.className = "highcharts-loading";
                b.loadingSpan.innerHTML = a || c.lang.loading;
                r(e, k(d.style, {
                    zIndex: 10
                }));
                r(b.loadingSpan, d.labelStyle);
                b.loadingShown || (r(e, {
                    opacity: 0,
                    display: ""
                }), A(e, {
                    opacity: d.style.opacity || .5
                }, {
                    duration: d.showDuration ||
                        0
                }));
                b.loadingShown = !0;
                h()
            },
            hideLoading: function() {
                var a = this.options,
                    b = this.loadingDiv;
                b && (b.className = "highcharts-loading highcharts-loading-hidden", A(b, {
                    opacity: 0
                }, {
                    duration: a.loading.hideDuration || 100,
                    complete: function() {
                        r(b, {
                            display: "none"
                        })
                    }
                }));
                this.loadingShown = !1
            },
            propsRequireDirtyBox: "backgroundColor borderColor borderWidth margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),
            propsRequireUpdateSeries: "chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions".split(" "),
            update: function(a, h) {
                var e, k = {
                        credits: "addCredits",
                        title: "setTitle",
                        subtitle: "setSubtitle"
                    },
                    m = a.chart,
                    p, n;
                if (m) {
                    z(!0, this.options.chart, m);
                    "className" in m && this.setClassName(m.className);
                    if ("inverted" in m || "polar" in m) this.propFromSeries(), p = !0;
                    "alignTicks" in m && (p = !0);
                    for (e in m) m.hasOwnProperty(e) && (-1 !== d("chart." + e, this.propsRequireUpdateSeries) && (n = !0), -1 !== d(e, this.propsRequireDirtyBox) &&
                        (this.isDirtyBox = !0));
                    "style" in m && this.renderer.setStyle(m.style)
                }
                for (e in a) {
                    if (this[e] && "function" === typeof this[e].update) this[e].update(a[e], !1);
                    else if ("function" === typeof this[k[e]]) this[k[e]](a[e]);
                    "chart" !== e && -1 !== d(e, this.propsRequireUpdateSeries) && (n = !0)
                }
                a.colors && (this.options.colors = a.colors);
                a.plotOptions && z(!0, this.options.plotOptions, a.plotOptions);
                l(["xAxis", "yAxis", "series", "colorAxis", "pane"], function(b) {
                    a[b] && l(w(a[b]), function(a, c) {
                        (c = f(a.id) && this.get(a.id) || this[b][c]) && c.coll ===
                            b && c.update(a, !1)
                    }, this)
                }, this);
                p && l(this.axes, function(a) {
                    a.update({}, !1)
                });
                n && l(this.series, function(a) {
                    a.update({}, !1)
                });
                a.loading && z(!0, this.options.loading, a.loading);
                e = m && m.width;
                m = m && m.height;
                c(e) && e !== this.chartWidth || c(m) && m !== this.chartHeight ? this.setSize(e, m) : b(h, !0) && this.redraw()
            },
            setSubtitle: function(a) {
                this.setTitle(void 0, a)
            }
        });
        k(p.prototype, {
            update: function(a, c, d, h) {
                function e() {
                    f.applyOptions(a);
                    null === f.y && p && (f.graphic = p.destroy());
                    n(a, !0) && (p && p.element && a && a.marker && a.marker.symbol &&
                        (f.graphic = p.destroy()), a && a.dataLabels && f.dataLabel && (f.dataLabel = f.dataLabel.destroy()));
                    l = f.index;
                    k.updateParallelArrays(f, l);
                    t.data[l] = n(t.data[l], !0) || n(a, !0) ? f.options : a;
                    k.isDirty = k.isDirtyData = !0;
                    !k.fixedBox && k.hasCartesianSeries && (g.isDirtyBox = !0);
                    "point" === t.legendType && (g.isDirtyLegend = !0);
                    c && g.redraw(d)
                }
                var f = this,
                    k = f.series,
                    p = f.graphic,
                    l, g = k.chart,
                    t = k.options;
                c = b(c, !0);
                !1 === h ? e() : f.firePointEvent("update", {
                    options: a
                }, e)
            },
            remove: function(a, b) {
                this.series.removePoint(d(this, this.series.data),
                    a, b)
            }
        });
        k(h.prototype, {
            addPoint: function(a, c, d, h) {
                var e = this.options,
                    f = this.data,
                    k = this.chart,
                    p = this.xAxis,
                    p = p && p.hasNames && p.names,
                    n = e.data,
                    g, l, t = this.xData,
                    q, w;
                c = b(c, !0);
                g = {
                    series: this
                };
                this.pointClass.prototype.applyOptions.apply(g, [a]);
                w = g.x;
                q = t.length;
                if (this.requireSorting && w < t[q - 1])
                    for (l = !0; q && t[q - 1] > w;) q--;
                this.updateParallelArrays(g, "splice", q, 0, 0);
                this.updateParallelArrays(g, q);
                p && g.name && (p[w] = g.name);
                n.splice(q, 0, a);
                l && (this.data.splice(q, 0, null), this.processData());
                "point" === e.legendType &&
                    this.generatePoints();
                d && (f[0] && f[0].remove ? f[0].remove(!1) : (f.shift(), this.updateParallelArrays(g, "shift"), n.shift()));
                this.isDirtyData = this.isDirty = !0;
                c && k.redraw(h)
            },
            removePoint: function(a, c, d) {
                var e = this,
                    h = e.data,
                    f = h[a],
                    k = e.points,
                    p = e.chart,
                    n = function() {
                        k && k.length === h.length && k.splice(a, 1);
                        h.splice(a, 1);
                        e.options.data.splice(a, 1);
                        e.updateParallelArrays(f || {
                            series: e
                        }, "splice", a, 1);
                        f && f.destroy();
                        e.isDirty = !0;
                        e.isDirtyData = !0;
                        c && p.redraw()
                    };
                D(d, p);
                c = b(c, !0);
                f ? f.firePointEvent("remove", null, n) :
                    n()
            },
            remove: function(a, c, d) {
                function e() {
                    h.destroy();
                    f.isDirtyLegend = f.isDirtyBox = !0;
                    f.linkSeries();
                    b(a, !0) && f.redraw(c)
                }
                var h = this,
                    f = h.chart;
                !1 !== d ? u(h, "remove", null, e) : e()
            },
            update: function(a, c) {
                var e = this,
                    d = this.chart,
                    h = this.userOptions,
                    f = this.oldType || this.type,
                    p = a.type || h.type || d.options.chart.type,
                    n = t[f].prototype,
                    q = ["group", "markerGroup", "dataLabelsGroup"],
                    g;
                if (p && p !== f || void 0 !== a.zIndex) q.length = 0;
                l(q, function(a) {
                    q[a] = e[a];
                    delete e[a]
                });
                a = z(h, {
                    animation: !1,
                    index: this.index,
                    pointStart: this.xData[0]
                }, {
                    data: this.options.data
                }, a);
                this.remove(!1, null, !1);
                for (g in n) this[g] = void 0;
                k(this, t[p || f].prototype);
                l(q, function(a) {
                    e[a] = q[a]
                });
                this.init(d, a);
                this.oldType = f;
                d.linkSeries();
                b(c, !0) && d.redraw(!1)
            }
        });
        k(H.prototype, {
            update: function(a, c) {
                var e = this.chart;
                a = e.options[this.coll][this.options.index] = z(this.userOptions, a);
                this.destroy(!0);
                this.init(e, k(a, {
                    events: void 0
                }));
                e.isDirtyBox = !0;
                b(c, !0) && e.redraw()
            },
            remove: function(a) {
                for (var c = this.chart, e = this.coll, d = this.series, h = d.length; h--;) d[h] && d[h].remove(!1);
                q(c.axes, this);
                q(c[e], this);
                c.options[e].splice(this.options.index, 1);
                l(c[e], function(a, b) {
                    a.options.index = b
                });
                this.destroy();
                c.isDirtyBox = !0;
                b(a, !0) && c.redraw()
            },
            setTitle: function(a, b) {
                this.update({
                    title: a
                }, b)
            },
            setCategories: function(a, b) {
                this.update({
                    categories: a
                }, b)
            }
        })
    })(L);
    (function(a) {
        var B = a.color,
            A = a.each,
            H = a.map,
            G = a.pick,
            r = a.Series,
            f = a.seriesType;
        f("area", "line", {
            softThreshold: !1,
            threshold: 0
        }, {
            singleStacks: !1,
            getStackPoints: function() {
                var a = [],
                    f = [],
                    k = this.xAxis,
                    r = this.yAxis,
                    d = r.stacks[this.stackKey],
                    c = {},
                    n = this.points,
                    z = this.index,
                    b = r.series,
                    p = b.length,
                    h, t = G(r.options.reversedStacks, !0) ? 1 : -1,
                    D, w;
                if (this.options.stacking) {
                    for (D = 0; D < n.length; D++) c[n[D].x] = n[D];
                    for (w in d) null !== d[w].total && f.push(w);
                    f.sort(function(a, b) {
                        return a - b
                    });
                    h = H(b, function() {
                        return this.visible
                    });
                    A(f, function(b, n) {
                        var e = 0,
                            l, m;
                        if (c[b] && !c[b].isNull) a.push(c[b]), A([-1, 1], function(a) {
                            var e = 1 === a ? "rightNull" : "leftNull",
                                k = 0,
                                q = d[f[n + a]];
                            if (q)
                                for (D = z; 0 <= D && D < p;) l = q.points[D], l || (D === z ? c[b][e] = !0 : h[D] && (m = d[b].points[D]) && (k -=
                                    m[1] - m[0])), D += t;
                            c[b][1 === a ? "rightCliff" : "leftCliff"] = k
                        });
                        else {
                            for (D = z; 0 <= D && D < p;) {
                                if (l = d[b].points[D]) {
                                    e = l[1];
                                    break
                                }
                                D += t
                            }
                            e = r.translate(e, 0, 1, 0, 1);
                            a.push({
                                isNull: !0,
                                plotX: k.translate(b, 0, 0, 0, 1),
                                x: b,
                                plotY: e,
                                yBottom: e
                            })
                        }
                    })
                }
                return a
            },
            getGraphPath: function(a) {
                var f = r.prototype.getGraphPath,
                    k = this.options,
                    l = k.stacking,
                    d = this.yAxis,
                    c, n, z = [],
                    b = [],
                    p = this.index,
                    h, t = d.stacks[this.stackKey],
                    D = k.threshold,
                    w = d.getThreshold(k.threshold),
                    e, k = k.connectNulls || "percent" === l,
                    x = function(c, e, f) {
                        var k = a[c];
                        c = l && t[k.x].points[p];
                        var m = k[f + "Null"] || 0;
                        f = k[f + "Cliff"] || 0;
                        var n, q, k = !0;
                        f || m ? (n = (m ? c[0] : c[1]) + f, q = c[0] + f, k = !!m) : !l && a[e] && a[e].isNull && (n = q = D);
                        void 0 !== n && (b.push({
                            plotX: h,
                            plotY: null === n ? w : d.getThreshold(n),
                            isNull: k,
                            isCliff: !0
                        }), z.push({
                            plotX: h,
                            plotY: null === q ? w : d.getThreshold(q),
                            doCurve: !1
                        }))
                    };
                a = a || this.points;
                l && (a = this.getStackPoints());
                for (c = 0; c < a.length; c++)
                    if (n = a[c].isNull, h = G(a[c].rectPlotX, a[c].plotX), e = G(a[c].yBottom, w), !n || k) k || x(c, c - 1, "left"), n && !l && k || (b.push(a[c]), z.push({
                        x: c,
                        plotX: h,
                        plotY: e
                    })), k || x(c, c +
                        1, "right");
                c = f.call(this, b, !0, !0);
                z.reversed = !0;
                n = f.call(this, z, !0, !0);
                n.length && (n[0] = "L");
                n = c.concat(n);
                f = f.call(this, b, !1, k);
                n.xMap = c.xMap;
                this.areaPath = n;
                return f
            },
            drawGraph: function() {
                this.areaPath = [];
                r.prototype.drawGraph.apply(this);
                var a = this,
                    f = this.areaPath,
                    k = this.options,
                    u = [
                        ["area", "highcharts-area", this.color, k.fillColor]
                    ];
                A(this.zones, function(d, c) {
                    u.push(["zone-area-" + c, "highcharts-area highcharts-zone-area-" + c + " " + d.className, d.color || a.color, d.fillColor || k.fillColor])
                });
                A(u, function(d) {
                    var c =
                        d[0],
                        n = a[c];
                    n ? (n.endX = f.xMap, n.animate({
                        d: f
                    })) : (n = a[c] = a.chart.renderer.path(f).addClass(d[1]).attr({
                        fill: G(d[3], B(d[2]).setOpacity(G(k.fillOpacity, .75)).get()),
                        zIndex: 0
                    }).add(a.group), n.isArea = !0);
                    n.startX = f.xMap;
                    n.shiftUnit = k.step ? 2 : 1
                })
            },
            drawLegendSymbol: a.LegendSymbolMixin.drawRectangle
        })
    })(L);
    (function(a) {
        var B = a.pick;
        a = a.seriesType;
        a("spline", "line", {}, {
            getPointSpline: function(a, H, G) {
                var r = H.plotX,
                    f = H.plotY,
                    l = a[G - 1];
                G = a[G + 1];
                var q, k, u, d;
                if (l && !l.isNull && !1 !== l.doCurve && !H.isCliff && G && !G.isNull &&
                    !1 !== G.doCurve && !H.isCliff) {
                    a = l.plotY;
                    u = G.plotX;
                    G = G.plotY;
                    var c = 0;
                    q = (1.5 * r + l.plotX) / 2.5;
                    k = (1.5 * f + a) / 2.5;
                    u = (1.5 * r + u) / 2.5;
                    d = (1.5 * f + G) / 2.5;
                    u !== q && (c = (d - k) * (u - r) / (u - q) + f - d);
                    k += c;
                    d += c;
                    k > a && k > f ? (k = Math.max(a, f), d = 2 * f - k) : k < a && k < f && (k = Math.min(a, f), d = 2 * f - k);
                    d > G && d > f ? (d = Math.max(G, f), k = 2 * f - d) : d < G && d < f && (d = Math.min(G, f), k = 2 * f - d);
                    H.rightContX = u;
                    H.rightContY = d
                }
                H = ["C", B(l.rightContX, l.plotX), B(l.rightContY, l.plotY), B(q, r), B(k, f), r, f];
                l.rightContX = l.rightContY = null;
                return H
            }
        })
    })(L);
    (function(a) {
        var B = a.seriesTypes.area.prototype,
            A = a.seriesType;
        A("areaspline", "spline", a.defaultPlotOptions.area, {
            getStackPoints: B.getStackPoints,
            getGraphPath: B.getGraphPath,
            setStackCliffs: B.setStackCliffs,
            drawGraph: B.drawGraph,
            drawLegendSymbol: a.LegendSymbolMixin.drawRectangle
        })
    })(L);
    (function(a) {
        var B = a.animObject,
            A = a.color,
            H = a.each,
            G = a.extend,
            r = a.isNumber,
            f = a.merge,
            l = a.pick,
            q = a.Series,
            k = a.seriesType,
            u = a.svg;
        k("column", "line", {
            borderRadius: 0,
            crisp: !0,
            groupPadding: .2,
            marker: null,
            pointPadding: .1,
            minPointLength: 0,
            cropThreshold: 50,
            pointRange: null,
            states: {
                hover: {
                    halo: !1,
                    brightness: .1,
                    shadow: !1
                },
                select: {
                    color: "#cccccc",
                    borderColor: "#000000",
                    shadow: !1
                }
            },
            dataLabels: {
                align: null,
                verticalAlign: null,
                y: null
            },
            softThreshold: !1,
            startFromThreshold: !0,
            stickyTracking: !1,
            tooltip: {
                distance: 6
            },
            threshold: 0,
            borderColor: "#ffffff"
        }, {
            cropShoulder: 0,
            directTouch: !0,
            trackerGroups: ["group", "dataLabelsGroup"],
            negStacks: !0,
            init: function() {
                q.prototype.init.apply(this, arguments);
                var a = this,
                    c = a.chart;
                c.hasRendered && H(c.series, function(c) {
                    c.type === a.type && (c.isDirty = !0)
                })
            },
            getColumnMetrics: function() {
                var a = this,
                    c = a.options,
                    f = a.xAxis,
                    k = a.yAxis,
                    b = f.reversed,
                    p, h = {},
                    t = 0;
                !1 === c.grouping ? t = 1 : H(a.chart.series, function(b) {
                    var c = b.options,
                        e = b.yAxis,
                        d;
                    b.type === a.type && b.visible && k.len === e.len && k.pos === e.pos && (c.stacking ? (p = b.stackKey, void 0 === h[p] && (h[p] = t++), d = h[p]) : !1 !== c.grouping && (d = t++), b.columnIndex = d)
                });
                var q = Math.min(Math.abs(f.transA) * (f.ordinalSlope || c.pointRange || f.closestPointRange || f.tickInterval || 1), f.len),
                    w = q * c.groupPadding,
                    e = (q - 2 * w) / (t || 1),
                    c = Math.min(c.maxPointWidth ||
                        f.len, l(c.pointWidth, e * (1 - 2 * c.pointPadding)));
                a.columnMetrics = {
                    width: c,
                    offset: (e - c) / 2 + (w + ((a.columnIndex || 0) + (b ? 1 : 0)) * e - q / 2) * (b ? -1 : 1)
                };
                return a.columnMetrics
            },
            crispCol: function(a, c, f, k) {
                var b = this.chart,
                    d = this.borderWidth,
                    h = -(d % 2 ? .5 : 0),
                    d = d % 2 ? .5 : 1;
                b.inverted && b.renderer.isVML && (d += 1);
                this.options.crisp && (f = Math.round(a + f) + h, a = Math.round(a) + h, f -= a);
                k = Math.round(c + k) + d;
                h = .5 >= Math.abs(c) && .5 < k;
                c = Math.round(c) + d;
                k -= c;
                h && k && (--c, k += 1);
                return {
                    x: a,
                    y: c,
                    width: f,
                    height: k
                }
            },
            translate: function() {
                var a = this,
                    c =
                    a.chart,
                    f = a.options,
                    k = a.dense = 2 > a.closestPointRange * a.xAxis.transA,
                    k = a.borderWidth = l(f.borderWidth, k ? 0 : 1),
                    b = a.yAxis,
                    p = a.translatedThreshold = b.getThreshold(f.threshold),
                    h = l(f.minPointLength, 5),
                    t = a.getColumnMetrics(),
                    r = t.width,
                    w = a.barW = Math.max(r, 1 + 2 * k),
                    e = a.pointXOffset = t.offset;
                c.inverted && (p -= .5);
                f.pointPadding && (w = Math.ceil(w));
                q.prototype.translate.apply(a);
                H(a.points, function(d) {
                    var f = l(d.yBottom, p),
                        k = 999 + Math.abs(f),
                        k = Math.min(Math.max(-k, d.plotY), b.len + k),
                        m = d.plotX + e,
                        n = w,
                        t = Math.min(k, f),
                        q, u =
                        Math.max(k, f) - t;
                    Math.abs(u) < h && h && (u = h, q = !b.reversed && !d.negative || b.reversed && d.negative, t = Math.abs(t - p) > h ? f - h : p - (q ? h : 0));
                    d.barX = m;
                    d.pointWidth = r;
                    d.tooltipPos = c.inverted ? [b.len + b.pos - c.plotLeft - k, a.xAxis.len - m - n / 2, u] : [m + n / 2, k + b.pos - c.plotTop, u];
                    d.shapeType = "rect";
                    d.shapeArgs = a.crispCol.apply(a, d.isNull ? [d.plotX, b.len / 2, 0, 0] : [m, t, n, u])
                })
            },
            getSymbol: a.noop,
            drawLegendSymbol: a.LegendSymbolMixin.drawRectangle,
            drawGraph: function() {
                this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data")
            },
            pointAttribs: function(a, c) {
                var d = this.options,
                    k, b = this.pointAttrToOptions || {};
                k = b.stroke || "borderColor";
                var p = b["stroke-width"] || "borderWidth",
                    h = a && a.color || this.color,
                    l = a[k] || d[k] || this.color || h,
                    q = a[p] || d[p] || this[p] || 0,
                    b = d.dashStyle;
                a && this.zones.length && (h = (h = a.getZone()) && h.color || a.options.color || this.color);
                c && (a = f(d.states[c], a.options.states && a.options.states[c] || {}), c = a.brightness, h = a.color || void 0 !== c && A(h).brighten(a.brightness).get() || h, l = a[k] || l, q = a[p] || q, b = a.dashStyle || b);
                k = {
                    fill: h,
                    stroke: l,
                    "stroke-width": q
                };
                d.borderRadius && (k.r = d.borderRadius);
                b && (k.dashstyle = b);
                return k
            },
            drawPoints: function() {
                var a = this,
                    c = this.chart,
                    k = a.options,
                    l = c.renderer,
                    b = k.animationLimit || 250,
                    p;
                H(a.points, function(d) {
                    var h = d.graphic;
                    if (r(d.plotY) && null !== d.y) {
                        p = d.shapeArgs;
                        if (h) h[c.pointCount < b ? "animate" : "attr"](f(p));
                        else d.graphic = h = l[d.shapeType](p).add(d.group || a.group);
                        h.attr(a.pointAttribs(d, d.selected && "select")).shadow(k.shadow, null, k.stacking && !k.borderRadius);
                        h.addClass(d.getClassName(), !0)
                    } else h &&
                        (d.graphic = h.destroy())
                })
            },
            animate: function(a) {
                var c = this,
                    d = this.yAxis,
                    f = c.options,
                    b = this.chart.inverted,
                    k = {};
                u && (a ? (k.scaleY = .001, a = Math.min(d.pos + d.len, Math.max(d.pos, d.toPixels(f.threshold))), b ? k.translateX = a - d.len : k.translateY = a, c.group.attr(k)) : (k[b ? "translateX" : "translateY"] = d.pos, c.group.animate(k, G(B(c.options.animation), {
                    step: function(a, b) {
                        c.group.attr({
                            scaleY: Math.max(.001, b.pos)
                        })
                    }
                })), c.animate = null))
            },
            remove: function() {
                var a = this,
                    c = a.chart;
                c.hasRendered && H(c.series, function(c) {
                    c.type ===
                        a.type && (c.isDirty = !0)
                });
                q.prototype.remove.apply(a, arguments)
            }
        })
    })(L);
    (function(a) {
        a = a.seriesType;
        a("bar", "column", null, {
            inverted: !0
        })
    })(L);
    (function(a) {
        var B = a.Series;
        a = a.seriesType;
        a("scatter", "line", {
            lineWidth: 0,
            findNearestPointBy: "xy",
            marker: {
                enabled: !0
            },
            tooltip: {
                headerFormat: '\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cspan style\x3d"font-size: 0.85em"\x3e {series.name}\x3c/span\x3e\x3cbr/\x3e',
                pointFormat: "x: \x3cb\x3e{point.x}\x3c/b\x3e\x3cbr/\x3ey: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e"
            }
        }, {
            sorted: !1,
            requireSorting: !1,
            noSharedTooltip: !0,
            trackerGroups: ["group", "markerGroup", "dataLabelsGroup"],
            takeOrdinalPosition: !1,
            drawGraph: function() {
                this.options.lineWidth && B.prototype.drawGraph.call(this)
            }
        })
    })(L);
    (function(a) {
        var B = a.pick,
            A = a.relativeLength;
        a.CenteredSeriesMixin = {
            getCenter: function() {
                var a = this.options,
                    G = this.chart,
                    r = 2 * (a.slicedOffset || 0),
                    f = G.plotWidth - 2 * r,
                    G = G.plotHeight - 2 * r,
                    l = a.center,
                    l = [B(l[0], "50%"), B(l[1], "50%"), a.size || "100%", a.innerSize || 0],
                    q = Math.min(f, G),
                    k, u;
                for (k = 0; 4 > k; ++k) u =
                    l[k], a = 2 > k || 2 === k && /%$/.test(u), l[k] = A(u, [f, G, q, l[2]][k]) + (a ? r : 0);
                l[3] > l[2] && (l[3] = l[2]);
                return l
            }
        }
    })(L);
    (function(a) {
        var B = a.addEvent,
            A = a.defined,
            H = a.each,
            G = a.extend,
            r = a.inArray,
            f = a.noop,
            l = a.pick,
            q = a.Point,
            k = a.Series,
            u = a.seriesType,
            d = a.setAnimation;
        u("pie", "line", {
            center: [null, null],
            clip: !1,
            colorByPoint: !0,
            dataLabels: {
                distance: 30,
                enabled: !0,
                formatter: function() {
                    return null === this.y ? void 0 : this.point.name
                },
                x: 0
            },
            ignoreHiddenPoint: !0,
            legendType: "point",
            marker: null,
            size: null,
            showInLegend: !1,
            slicedOffset: 10,
            stickyTracking: !1,
            tooltip: {
                followPointer: !0
            },
            borderColor: "#ffffff",
            borderWidth: 1,
            states: {
                hover: {
                    brightness: .1,
                    shadow: !1
                }
            }
        }, {
            isCartesian: !1,
            requireSorting: !1,
            directTouch: !0,
            noSharedTooltip: !0,
            trackerGroups: ["group", "dataLabelsGroup"],
            axisTypes: [],
            pointAttribs: a.seriesTypes.column.prototype.pointAttribs,
            animate: function(a) {
                var c = this,
                    d = c.points,
                    b = c.startAngleRad;
                a || (H(d, function(a) {
                    var d = a.graphic,
                        f = a.shapeArgs;
                    d && (d.attr({
                        r: a.startR || c.center[3] / 2,
                        start: b,
                        end: b
                    }), d.animate({
                            r: f.r,
                            start: f.start,
                            end: f.end
                        },
                        c.options.animation))
                }), c.animate = null)
            },
            updateTotals: function() {
                var a, d = 0,
                    f = this.points,
                    b = f.length,
                    k, h = this.options.ignoreHiddenPoint;
                for (a = 0; a < b; a++) k = f[a], 0 > k.y && (k.y = null), d += h && !k.visible ? 0 : k.y;
                this.total = d;
                for (a = 0; a < b; a++) k = f[a], k.percentage = 0 < d && (k.visible || !h) ? k.y / d * 100 : 0, k.total = d
            },
            generatePoints: function() {
                k.prototype.generatePoints.call(this);
                this.updateTotals()
            },
            translate: function(a) {
                this.generatePoints();
                var c = 0,
                    d = this.options,
                    b = d.slicedOffset,
                    f = b + (d.borderWidth || 0),
                    h, k, q, w = d.startAngle ||
                    0,
                    e = this.startAngleRad = Math.PI / 180 * (w - 90),
                    w = (this.endAngleRad = Math.PI / 180 * (l(d.endAngle, w + 360) - 90)) - e,
                    r = this.points,
                    u = d.dataLabels.distance,
                    d = d.ignoreHiddenPoint,
                    E, m = r.length,
                    y;
                a || (this.center = a = this.getCenter());
                this.getX = function(b, c) {
                    q = Math.asin(Math.min((b - a[1]) / (a[2] / 2 + u), 1));
                    return a[0] + (c ? -1 : 1) * Math.cos(q) * (a[2] / 2 + u)
                };
                for (E = 0; E < m; E++) {
                    y = r[E];
                    h = e + c * w;
                    if (!d || y.visible) c += y.percentage / 100;
                    k = e + c * w;
                    y.shapeType = "arc";
                    y.shapeArgs = {
                        x: a[0],
                        y: a[1],
                        r: a[2] / 2,
                        innerR: a[3] / 2,
                        start: Math.round(1E3 * h) / 1E3,
                        end: Math.round(1E3 *
                            k) / 1E3
                    };
                    q = (k + h) / 2;
                    q > 1.5 * Math.PI ? q -= 2 * Math.PI : q < -Math.PI / 2 && (q += 2 * Math.PI);
                    y.slicedTranslation = {
                        translateX: Math.round(Math.cos(q) * b),
                        translateY: Math.round(Math.sin(q) * b)
                    };
                    h = Math.cos(q) * a[2] / 2;
                    k = Math.sin(q) * a[2] / 2;
                    y.tooltipPos = [a[0] + .7 * h, a[1] + .7 * k];
                    y.half = q < -Math.PI / 2 || q > Math.PI / 2 ? 1 : 0;
                    y.angle = q;
                    f = Math.min(f, u / 5);
                    y.labelPos = [a[0] + h + Math.cos(q) * u, a[1] + k + Math.sin(q) * u, a[0] + h + Math.cos(q) * f, a[1] + k + Math.sin(q) * f, a[0] + h, a[1] + k, 0 > u ? "center" : y.half ? "right" : "left", q]
                }
            },
            drawGraph: null,
            drawPoints: function() {
                var a =
                    this,
                    d = a.chart.renderer,
                    f, b, k, h, l = a.options.shadow;
                l && !a.shadowGroup && (a.shadowGroup = d.g("shadow").add(a.group));
                H(a.points, function(c) {
                    if (null !== c.y) {
                        b = c.graphic;
                        h = c.shapeArgs;
                        f = c.getTranslate();
                        var p = c.shadowGroup;
                        l && !p && (p = c.shadowGroup = d.g("shadow").add(a.shadowGroup));
                        p && p.attr(f);
                        k = a.pointAttribs(c, c.selected && "select");
                        b ? b.setRadialReference(a.center).attr(k).animate(G(h, f)) : (c.graphic = b = d[c.shapeType](h).setRadialReference(a.center).attr(f).add(a.group), c.visible || b.attr({
                                visibility: "hidden"
                            }),
                            b.attr(k).attr({
                                "stroke-linejoin": "round"
                            }).shadow(l, p));
                        b.addClass(c.getClassName())
                    }
                })
            },
            searchPoint: f,
            sortByAngle: function(a, d) {
                a.sort(function(a, b) {
                    return void 0 !== a.angle && (b.angle - a.angle) * d
                })
            },
            drawLegendSymbol: a.LegendSymbolMixin.drawRectangle,
            getCenter: a.CenteredSeriesMixin.getCenter,
            getSymbol: f
        }, {
            init: function() {
                q.prototype.init.apply(this, arguments);
                var a = this,
                    d;
                a.name = l(a.name, "Slice");
                d = function(c) {
                    a.slice("select" === c.type)
                };
                B(a, "select", d);
                B(a, "unselect", d);
                return a
            },
            setVisible: function(a,
                d) {
                var c = this,
                    b = c.series,
                    f = b.chart,
                    h = b.options.ignoreHiddenPoint;
                d = l(d, h);
                a !== c.visible && (c.visible = c.options.visible = a = void 0 === a ? !c.visible : a, b.options.data[r(c, b.data)] = c.options, H(["graphic", "dataLabel", "connector", "shadowGroup"], function(b) {
                    if (c[b]) c[b][a ? "show" : "hide"](!0)
                }), c.legendItem && f.legend.colorizeItem(c, a), a || "hover" !== c.state || c.setState(""), h && (b.isDirty = !0), d && f.redraw())
            },
            slice: function(a, f, k) {
                var b = this.series;
                d(k, b.chart);
                l(f, !0);
                this.sliced = this.options.sliced = A(a) ? a : !this.sliced;
                b.options.data[r(this, b.data)] = this.options;
                this.graphic.animate(this.getTranslate());
                this.shadowGroup && this.shadowGroup.animate(this.getTranslate())
            },
            getTranslate: function() {
                return this.sliced ? this.slicedTranslation : {
                    translateX: 0,
                    translateY: 0
                }
            },
            haloPath: function(a) {
                var c = this.shapeArgs;
                return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(c.x, c.y, c.r + a, c.r + a, {
                    innerR: this.shapeArgs.r,
                    start: c.start,
                    end: c.end
                })
            }
        })
    })(L);
    (function(a) {
        var B = a.addEvent,
            A = a.arrayMax,
            H = a.defined,
            G = a.each,
            r = a.extend,
            f = a.format,
            l = a.map,
            q = a.merge,
            k = a.noop,
            u = a.pick,
            d = a.relativeLength,
            c = a.Series,
            n = a.seriesTypes,
            z = a.stableSort;
        a.distribute = function(a, c) {
            function b(a, b) {
                return a.target - b.target
            }
            var d, f = !0,
                k = a,
                e = [],
                p;
            p = 0;
            for (d = a.length; d--;) p += a[d].size;
            if (p > c) {
                z(a, function(a, b) {
                    return (b.rank || 0) - (a.rank || 0)
                });
                for (p = d = 0; p <= c;) p += a[d].size, d++;
                e = a.splice(d - 1, a.length)
            }
            z(a, b);
            for (a = l(a, function(a) {
                    return {
                        size: a.size,
                        targets: [a.target]
                    }
                }); f;) {
                for (d = a.length; d--;) f = a[d], p = (Math.min.apply(0, f.targets) + Math.max.apply(0,
                    f.targets)) / 2, f.pos = Math.min(Math.max(0, p - f.size / 2), c - f.size);
                d = a.length;
                for (f = !1; d--;) 0 < d && a[d - 1].pos + a[d - 1].size > a[d].pos && (a[d - 1].size += a[d].size, a[d - 1].targets = a[d - 1].targets.concat(a[d].targets), a[d - 1].pos + a[d - 1].size > c && (a[d - 1].pos = c - a[d - 1].size), a.splice(d, 1), f = !0)
            }
            d = 0;
            G(a, function(a) {
                var b = 0;
                G(a.targets, function() {
                    k[d].pos = a.pos + b;
                    b += k[d].size;
                    d++
                })
            });
            k.push.apply(k, e);
            z(k, b)
        };
        c.prototype.drawDataLabels = function() {
            var a = this,
                c = a.options,
                d = c.dataLabels,
                k = a.points,
                l, n, e = a.hasRendered || 0,
                r, C,
                E = u(d.defer, !0),
                m = a.chart.renderer;
            if (d.enabled || a._hasPointLabels) a.dlProcessOptions && a.dlProcessOptions(d), C = a.plotGroup("dataLabelsGroup", "data-labels", E && !e ? "hidden" : "visible", d.zIndex || 6), E && (C.attr({
                opacity: +e
            }), e || B(a, "afterAnimate", function() {
                a.visible && C.show(!0);
                C[c.animation ? "animate" : "attr"]({
                    opacity: 1
                }, {
                    duration: 200
                })
            })), n = d, G(k, function(b) {
                var e, h = b.dataLabel,
                    k, g, p, t = b.connector,
                    w = !h,
                    x;
                l = b.dlOptions || b.options && b.options.dataLabels;
                if (e = u(l && l.enabled, n.enabled) && null !== b.y)
                    for (g in d =
                        q(n, l), k = b.getLabelConfig(), r = d.format ? f(d.format, k) : d.formatter.call(k, d), x = d.style, p = d.rotation, x.color = u(d.color, x.color, a.color, "#000000"), "contrast" === x.color && (b.contrastColor = m.getContrast(b.color || a.color), x.color = d.inside || 0 > d.distance || c.stacking ? b.contrastColor : "#000000"), c.cursor && (x.cursor = c.cursor), k = {
                            fill: d.backgroundColor,
                            stroke: d.borderColor,
                            "stroke-width": d.borderWidth,
                            r: d.borderRadius || 0,
                            rotation: p,
                            padding: d.padding,
                            zIndex: 1
                        }, k) void 0 === k[g] && delete k[g];
                !h || e && H(r) ? e && H(r) && (h ?
                    k.text = r : (h = b.dataLabel = m[p ? "text" : "label"](r, 0, -9999, d.shape, null, null, d.useHTML, null, "data-label"), h.addClass("highcharts-data-label-color-" + b.colorIndex + " " + (d.className || "") + (d.useHTML ? "highcharts-tracker" : ""))), h.attr(k), h.css(x).shadow(d.shadow), h.added || h.add(C), a.alignDataLabel(b, h, d, null, w)) : (b.dataLabel = h.destroy(), t && (b.connector = t.destroy()))
            })
        };
        c.prototype.alignDataLabel = function(a, c, d, f, k) {
            var b = this.chart,
                e = b.inverted,
                h = u(a.plotX, -9999),
                l = u(a.plotY, -9999),
                p = c.getBBox(),
                m, n = d.rotation,
                q = d.align,
                t = this.visible && (a.series.forceDL || b.isInsidePlot(h, Math.round(l), e) || f && b.isInsidePlot(h, e ? f.x + 1 : f.y + f.height - 1, e)),
                D = "justify" === u(d.overflow, "justify");
            t && (m = d.style.fontSize, m = b.renderer.fontMetrics(m, c).b, f = r({
                x: e ? b.plotWidth - l : h,
                y: Math.round(e ? b.plotHeight - h : l),
                width: 0,
                height: 0
            }, f), r(d, {
                width: p.width,
                height: p.height
            }), n ? (D = !1, e = b.renderer.rotCorr(m, n), e = {
                    x: f.x + d.x + f.width / 2 + e.x,
                    y: f.y + d.y + {
                        top: 0,
                        middle: .5,
                        bottom: 1
                    }[d.verticalAlign] * f.height
                }, c[k ? "attr" : "animate"](e).attr({
                    align: q
                }),
                h = (n + 720) % 360, h = 180 < h && 360 > h, "left" === q ? e.y -= h ? p.height : 0 : "center" === q ? (e.x -= p.width / 2, e.y -= p.height / 2) : "right" === q && (e.x -= p.width, e.y -= h ? 0 : p.height)) : (c.align(d, null, f), e = c.alignAttr), D ? a.isLabelJustified = this.justifyDataLabel(c, d, e, p, f, k) : u(d.crop, !0) && (t = b.isInsidePlot(e.x, e.y) && b.isInsidePlot(e.x + p.width, e.y + p.height)), d.shape && !n && c.attr({
                anchorX: a.plotX,
                anchorY: a.plotY
            }));
            t || (c.attr({
                y: -9999
            }), c.placed = !1)
        };
        c.prototype.justifyDataLabel = function(a, c, d, f, k, l) {
            var b = this.chart,
                h = c.align,
                p = c.verticalAlign,
                n, m, q = a.box ? 0 : a.padding || 0;
            n = d.x + q;
            0 > n && ("right" === h ? c.align = "left" : c.x = -n, m = !0);
            n = d.x + f.width - q;
            n > b.plotWidth && ("left" === h ? c.align = "right" : c.x = b.plotWidth - n, m = !0);
            n = d.y + q;
            0 > n && ("bottom" === p ? c.verticalAlign = "top" : c.y = -n, m = !0);
            n = d.y + f.height - q;
            n > b.plotHeight && ("top" === p ? c.verticalAlign = "bottom" : c.y = b.plotHeight - n, m = !0);
            m && (a.placed = !l, a.align(c, null, k));
            return m
        };
        n.pie && (n.pie.prototype.drawDataLabels = function() {
                var b = this,
                    d = b.data,
                    f, k = b.chart,
                    n = b.options.dataLabels,
                    q = u(n.connectorPadding, 10),
                    e = u(n.connectorWidth,
                        1),
                    r = k.plotWidth,
                    C = k.plotHeight,
                    E, m = n.distance,
                    y = b.center,
                    z = y[2] / 2,
                    B = y[1],
                    H = 0 < m,
                    g, F, L, N, P = [
                        [],
                        []
                    ],
                    O, v, M, R, S = [0, 0, 0, 0];
                b.visible && (n.enabled || b._hasPointLabels) && (G(d, function(a) {
                    a.dataLabel && a.visible && a.dataLabel.shortened && (a.dataLabel.attr({
                        width: "auto"
                    }).css({
                        width: "auto",
                        textOverflow: "clip"
                    }), a.dataLabel.shortened = !1)
                }), c.prototype.drawDataLabels.apply(b), G(d, function(a) {
                    a.dataLabel && a.visible && (P[a.half].push(a), a.dataLabel._pos = null)
                }), G(P, function(c, e) {
                    var d, h, p = c.length,
                        t, w, u;
                    if (p)
                        for (b.sortByAngle(c,
                                e - .5), 0 < m && (d = Math.max(0, B - z - m), h = Math.min(B + z + m, k.plotHeight), t = l(c, function(a) {
                                if (a.dataLabel) return u = a.dataLabel.getBBox().height || 21, {
                                    target: a.labelPos[1] - d + u / 2,
                                    size: u,
                                    rank: a.y
                                }
                            }), a.distribute(t, h + u - d)), R = 0; R < p; R++) f = c[R], L = f.labelPos, g = f.dataLabel, M = !1 === f.visible ? "hidden" : "inherit", w = L[1], t ? void 0 === t[R].pos ? M = "hidden" : (N = t[R].size, v = d + t[R].pos) : v = w, O = n.justify ? y[0] + (e ? -1 : 1) * (z + m) : b.getX(v < d + 2 || v > h - 2 ? w : v, e), g._attr = {
                            visibility: M,
                            align: L[6]
                        }, g._pos = {
                            x: O + n.x + ({
                                left: q,
                                right: -q
                            }[L[6]] || 0),
                            y: v +
                                n.y - 10
                        }, L.x = O, L.y = v, null === b.options.size && (F = g.getBBox().width, w = null, O - F < q ? (w = Math.round(F - O + q), S[3] = Math.max(w, S[3])) : O + F > r - q && (w = Math.round(O + F - r + q), S[1] = Math.max(w, S[1])), 0 > v - N / 2 ? S[0] = Math.max(Math.round(-v + N / 2), S[0]) : v + N / 2 > C && (S[2] = Math.max(Math.round(v + N / 2 - C), S[2])), g.sideOverflow = w)
                }), 0 === A(S) || this.verifyDataLabelOverflow(S)) && (this.placeDataLabels(), H && e && G(this.points, function(a) {
                    var c;
                    E = a.connector;
                    if ((g = a.dataLabel) && g._pos && a.visible) {
                        M = g._attr.visibility;
                        if (c = !E) a.connector = E = k.renderer.path().addClass("highcharts-data-label-connector highcharts-color-" +
                            a.colorIndex).add(b.dataLabelsGroup), E.attr({
                            "stroke-width": e,
                            stroke: n.connectorColor || a.color || "#666666"
                        });
                        E[c ? "attr" : "animate"]({
                            d: b.connectorPath(a.labelPos)
                        });
                        E.attr("visibility", M)
                    } else E && (a.connector = E.destroy())
                }))
            }, n.pie.prototype.connectorPath = function(a) {
                var b = a.x,
                    c = a.y;
                return u(this.options.dataLabels.softConnector, !0) ? ["M", b + ("left" === a[6] ? 5 : -5), c, "C", b, c, 2 * a[2] - a[4], 2 * a[3] - a[5], a[2], a[3], "L", a[4], a[5]] : ["M", b + ("left" === a[6] ? 5 : -5), c, "L", a[2], a[3], "L", a[4], a[5]]
            }, n.pie.prototype.placeDataLabels =
            function() {
                G(this.points, function(a) {
                    var b = a.dataLabel;
                    b && a.visible && ((a = b._pos) ? (b.sideOverflow && (b._attr.width = b.getBBox().width - b.sideOverflow, b.css({
                        width: b._attr.width + "px",
                        textOverflow: "ellipsis"
                    }), b.shortened = !0), b.attr(b._attr), b[b.moved ? "animate" : "attr"](a), b.moved = !0) : b && b.attr({
                        y: -9999
                    }))
                }, this)
            }, n.pie.prototype.alignDataLabel = k, n.pie.prototype.verifyDataLabelOverflow = function(a) {
                var b = this.center,
                    c = this.options,
                    f = c.center,
                    k = c.minSize || 80,
                    l, e;
                null !== f[0] ? l = Math.max(b[2] - Math.max(a[1], a[3]),
                    k) : (l = Math.max(b[2] - a[1] - a[3], k), b[0] += (a[3] - a[1]) / 2);
                null !== f[1] ? l = Math.max(Math.min(l, b[2] - Math.max(a[0], a[2])), k) : (l = Math.max(Math.min(l, b[2] - a[0] - a[2]), k), b[1] += (a[0] - a[2]) / 2);
                l < b[2] ? (b[2] = l, b[3] = Math.min(d(c.innerSize || 0, l), l), this.translate(b), this.drawDataLabels && this.drawDataLabels()) : e = !0;
                return e
            });
        n.column && (n.column.prototype.alignDataLabel = function(a, d, f, k, l) {
            var b = this.chart.inverted,
                e = a.series,
                h = a.dlBox || a.shapeArgs,
                n = u(a.below, a.plotY > u(this.translatedThreshold, e.yAxis.len)),
                p = u(f.inside, !!this.options.stacking);
            h && (k = q(h), 0 > k.y && (k.height += k.y, k.y = 0), h = k.y + k.height - e.yAxis.len, 0 < h && (k.height -= h), b && (k = {
                x: e.yAxis.len - k.y - k.height,
                y: e.xAxis.len - k.x - k.width,
                width: k.height,
                height: k.width
            }), p || (b ? (k.x += n ? 0 : k.width, k.width = 0) : (k.y += n ? k.height : 0, k.height = 0)));
            f.align = u(f.align, !b || p ? "center" : n ? "right" : "left");
            f.verticalAlign = u(f.verticalAlign, b || p ? "middle" : n ? "top" : "bottom");
            c.prototype.alignDataLabel.call(this, a, d, f, k, l);
            a.isLabelJustified && a.contrastColor && a.dataLabel.css({
                color: a.contrastColor
            })
        })
    })(L);
    (function(a) {
        var B = a.Chart,
            A = a.each,
            H = a.pick,
            G = a.addEvent;
        B.prototype.callbacks.push(function(a) {
            function f() {
                var f = [];
                A(a.series || [], function(a) {
                    var k = a.options.dataLabels,
                        l = a.dataLabelCollections || ["dataLabel"];
                    (k.enabled || a._hasPointLabels) && !k.allowOverlap && a.visible && A(l, function(d) {
                        A(a.points, function(a) {
                            a[d] && (a[d].labelrank = H(a.labelrank, a.shapeArgs && a.shapeArgs.height), f.push(a[d]))
                        })
                    })
                });
                a.hideOverlappingLabels(f)
            }
            f();
            G(a, "redraw", f)
        });
        B.prototype.hideOverlappingLabels = function(a) {
            var f =
                a.length,
                l, q, k, r, d, c, n, z, b, p = function(a, b, c, d, e, f, k, l) {
                    return !(e > a + c || e + k < a || f > b + d || f + l < b)
                };
            for (q = 0; q < f; q++)
                if (l = a[q]) l.oldOpacity = l.opacity, l.newOpacity = 1;
            a.sort(function(a, b) {
                return (b.labelrank || 0) - (a.labelrank || 0)
            });
            for (q = 0; q < f; q++)
                for (k = a[q], l = q + 1; l < f; ++l)
                    if (r = a[l], k && r && k !== r && k.placed && r.placed && 0 !== k.newOpacity && 0 !== r.newOpacity && (d = k.alignAttr, c = r.alignAttr, n = k.parentGroup, z = r.parentGroup, b = 2 * (k.box ? 0 : k.padding), d = p(d.x + n.translateX, d.y + n.translateY, k.width - b, k.height - b, c.x + z.translateX, c.y +
                            z.translateY, r.width - b, r.height - b)))(k.labelrank < r.labelrank ? k : r).newOpacity = 0;
            A(a, function(a) {
                var b, c;
                a && (c = a.newOpacity, a.oldOpacity !== c && a.placed && (c ? a.show(!0) : b = function() {
                    a.hide()
                }, a.alignAttr.opacity = c, a[a.isOld ? "animate" : "attr"](a.alignAttr, null, b)), a.isOld = !0)
            })
        }
    })(L);
    (function(a) {
        var B = a.addEvent,
            A = a.Chart,
            H = a.createElement,
            G = a.css,
            r = a.defaultOptions,
            f = a.defaultPlotOptions,
            l = a.each,
            q = a.extend,
            k = a.fireEvent,
            u = a.hasTouch,
            d = a.inArray,
            c = a.isObject,
            n = a.Legend,
            z = a.merge,
            b = a.pick,
            p = a.Point,
            h = a.Series,
            t = a.seriesTypes,
            D = a.svg;
        a = a.TrackerMixin = {
            drawTrackerPoint: function() {
                var a = this,
                    b = a.chart.pointer,
                    c = function(a) {
                        var c = b.getPointFromEvent(a);
                        if (void 0 !== c) c.onMouseOver(a)
                    };
                l(a.points, function(a) {
                    a.graphic && (a.graphic.element.point = a);
                    a.dataLabel && (a.dataLabel.div ? a.dataLabel.div.point = a : a.dataLabel.element.point = a)
                });
                a._hasTracking || (l(a.trackerGroups, function(e) {
                    if (a[e]) {
                        a[e].addClass("highcharts-tracker").on("mouseover", c).on("mouseout", function(a) {
                            b.onTrackerMouseOut(a)
                        });
                        if (u) a[e].on("touchstart",
                            c);
                        a.options.cursor && a[e].css(G).css({
                            cursor: a.options.cursor
                        })
                    }
                }), a._hasTracking = !0)
            },
            drawTrackerGraph: function() {
                var a = this,
                    b = a.options,
                    c = b.trackByArea,
                    d = [].concat(c ? a.areaPath : a.graphPath),
                    f = d.length,
                    h = a.chart,
                    k = h.pointer,
                    n = h.renderer,
                    p = h.options.tooltip.snap,
                    q = a.tracker,
                    g, r = function() {
                        if (h.hoverSeries !== a) a.onMouseOver()
                    },
                    t = "rgba(192,192,192," + (D ? .0001 : .002) + ")";
                if (f && !c)
                    for (g = f + 1; g--;) "M" === d[g] && d.splice(g + 1, 0, d[g + 1] - p, d[g + 2], "L"), (g && "M" === d[g] || g === f) && d.splice(g, 0, "L", d[g - 2] + p, d[g - 1]);
                q ?
                    q.attr({
                        d: d
                    }) : a.graph && (a.tracker = n.path(d).attr({
                        "stroke-linejoin": "round",
                        visibility: a.visible ? "visible" : "hidden",
                        stroke: t,
                        fill: c ? t : "none",
                        "stroke-width": a.graph.strokeWidth() + (c ? 0 : 2 * p),
                        zIndex: 2
                    }).add(a.group), l([a.tracker, a.markerGroup], function(a) {
                        a.addClass("highcharts-tracker").on("mouseover", r).on("mouseout", function(a) {
                            k.onTrackerMouseOut(a)
                        });
                        b.cursor && a.css({
                            cursor: b.cursor
                        });
                        if (u) a.on("touchstart", r)
                    }))
            }
        };
        t.column && (t.column.prototype.drawTracker = a.drawTrackerPoint);
        t.pie && (t.pie.prototype.drawTracker =
            a.drawTrackerPoint);
        t.scatter && (t.scatter.prototype.drawTracker = a.drawTrackerPoint);
        q(n.prototype, {
            setItemEvents: function(a, b, c) {
                var d = this,
                    e = d.chart.renderer.boxWrapper,
                    f = "highcharts-legend-" + (a.series ? "point" : "series") + "-active";
                (c ? b : a.legendGroup).on("mouseover", function() {
                    a.setState("hover");
                    e.addClass(f);
                    b.css(d.options.itemHoverStyle)
                }).on("mouseout", function() {
                    b.css(a.visible ? d.itemStyle : d.itemHiddenStyle);
                    e.removeClass(f);
                    a.setState()
                }).on("click", function(b) {
                    var c = function() {
                        a.setVisible &&
                            a.setVisible()
                    };
                    b = {
                        browserEvent: b
                    };
                    a.firePointEvent ? a.firePointEvent("legendItemClick", b, c) : k(a, "legendItemClick", b, c)
                })
            },
            createCheckboxForItem: function(a) {
                a.checkbox = H("input", {
                    type: "checkbox",
                    checked: a.selected,
                    defaultChecked: a.selected
                }, this.options.itemCheckboxStyle, this.chart.container);
                B(a.checkbox, "click", function(b) {
                    k(a.series || a, "checkboxClick", {
                        checked: b.target.checked,
                        item: a
                    }, function() {
                        a.select()
                    })
                })
            }
        });
        r.legend.itemStyle.cursor = "pointer";
        q(A.prototype, {
            showResetZoom: function() {
                var a =
                    this,
                    b = r.lang,
                    c = a.options.chart.resetZoomButton,
                    d = c.theme,
                    f = d.states,
                    h = "chart" === c.relativeTo ? null : "plotBox";
                this.resetZoomButton = a.renderer.button(b.resetZoom, null, null, function() {
                    a.zoomOut()
                }, d, f && f.hover).attr({
                    align: c.position.align,
                    title: b.resetZoomTitle
                }).addClass("highcharts-reset-zoom").add().align(c.position, !1, h)
            },
            zoomOut: function() {
                var a = this;
                k(a, "selection", {
                    resetSelection: !0
                }, function() {
                    a.zoom()
                })
            },
            zoom: function(a) {
                var d, f = this.pointer,
                    h = !1,
                    k;
                !a || a.resetSelection ? l(this.axes, function(a) {
                    d =
                        a.zoom()
                }) : l(a.xAxis.concat(a.yAxis), function(a) {
                    var b = a.axis;
                    f[b.isXAxis ? "zoomX" : "zoomY"] && (d = b.zoom(a.min, a.max), b.displayBtn && (h = !0))
                });
                k = this.resetZoomButton;
                h && !k ? this.showResetZoom() : !h && c(k) && (this.resetZoomButton = k.destroy());
                d && this.redraw(b(this.options.chart.animation, a && a.animation, 100 > this.pointCount))
            },
            pan: function(a, b) {
                var c = this,
                    d = c.hoverPoints,
                    e;
                d && l(d, function(a) {
                    a.setState()
                });
                l("xy" === b ? [1, 0] : [1], function(b) {
                    b = c[b ? "xAxis" : "yAxis"][0];
                    var d = b.horiz,
                        f = a[d ? "chartX" : "chartY"],
                        d = d ?
                        "mouseDownX" : "mouseDownY",
                        h = c[d],
                        k = (b.pointRange || 0) / 2,
                        g = b.getExtremes(),
                        l = b.toValue(h - f, !0) + k,
                        k = b.toValue(h + b.len - f, !0) - k,
                        m = k < l,
                        h = m ? k : l,
                        l = m ? l : k,
                        m = b.toValue(b.toPixels(g.min) - b.minPixelPadding),
                        k = b.toValue(b.toPixels(g.max) + b.minPixelPadding),
                        m = Math.min(g.dataMin, m) - h,
                        g = l - Math.max(g.dataMax, k);
                    b.series.length && 0 > m && 0 > g && (b.setExtremes(h, l, !1, !1, {
                        trigger: "pan"
                    }), e = !0);
                    c[d] = f
                });
                e && c.redraw(!1);
                G(c.container, {
                    cursor: "move"
                })
            }
        });
        q(p.prototype, {
            select: function(a, c) {
                var e = this,
                    f = e.series,
                    h = f.chart;
                a = b(a, !e.selected);
                e.firePointEvent(a ? "select" : "unselect", {
                    accumulate: c
                }, function() {
                    e.selected = e.options.selected = a;
                    f.options.data[d(e, f.data)] = e.options;
                    e.setState(a && "select");
                    c || l(h.getSelectedPoints(), function(a) {
                        a.selected && a !== e && (a.selected = a.options.selected = !1, f.options.data[d(a, f.data)] = a.options, a.setState(""), a.firePointEvent("unselect"))
                    })
                })
            },
            onMouseOver: function(a) {
                var b = this.series.chart.pointer;
                this.firePointEvent("mouseOver");
                b.runPointActions(a, this)
            },
            onMouseOut: function() {
                var a = this.series.chart;
                this.firePointEvent("mouseOut");
                l(a.hoverPoints || [], function(a) {
                    a.setState()
                });
                a.hoverPoints = a.hoverPoint = null
            },
            importEvents: function() {
                if (!this.hasImportedEvents) {
                    var a = z(this.series.options.point, this.options).events,
                        b;
                    this.events = a;
                    for (b in a) B(this, b, a[b]);
                    this.hasImportedEvents = !0
                }
            },
            setState: function(a, c) {
                var d = Math.floor(this.plotX),
                    e = this.plotY,
                    h = this.series,
                    k = h.options.states[a] || {},
                    l = f[h.type].marker && h.options.marker,
                    n = l && !1 === l.enabled,
                    p = l && l.states && l.states[a] || {},
                    r = !1 === p.enabled,
                    g =
                    h.stateMarkerGraphic,
                    t = this.marker || {},
                    u = h.chart,
                    w = h.halo,
                    z, A = l && h.markerAttribs;
                a = a || "";
                if (!(a === this.state && !c || this.selected && "select" !== a || !1 === k.enabled || a && (r || n && !1 === p.enabled) || a && t.states && t.states[a] && !1 === t.states[a].enabled)) {
                    A && (z = h.markerAttribs(this, a));
                    if (this.graphic) this.state && this.graphic.removeClass("highcharts-point-" + this.state), a && this.graphic.addClass("highcharts-point-" + a), this.graphic.attr(h.pointAttribs(this, a)), z && this.graphic.animate(z, b(u.options.chart.animation, p.animation,
                        l.animation)), g && g.hide();
                    else {
                        if (a && p) {
                            l = t.symbol || h.symbol;
                            g && g.currentSymbol !== l && (g = g.destroy());
                            if (g) g[c ? "animate" : "attr"]({
                                x: z.x,
                                y: z.y
                            });
                            else l && (h.stateMarkerGraphic = g = u.renderer.symbol(l, z.x, z.y, z.width, z.height).add(h.markerGroup), g.currentSymbol = l);
                            g && g.attr(h.pointAttribs(this, a))
                        }
                        g && (g[a && u.isInsidePlot(d, e, u.inverted) ? "show" : "hide"](), g.element.point = this)
                    }(d = k.halo) && d.size ? (w || (h.halo = w = u.renderer.path().add(A ? h.markerGroup : h.group)), w[c ? "animate" : "attr"]({
                            d: this.haloPath(d.size)
                        }),
                        w.attr({
                            "class": "highcharts-halo highcharts-color-" + b(this.colorIndex, h.colorIndex)
                        }), w.point = this, w.attr(q({
                            fill: this.color || h.color,
                            "fill-opacity": d.opacity,
                            zIndex: -1
                        }, d.attributes))) : w && w.point && w.point.haloPath && w.animate({
                        d: w.point.haloPath(0)
                    });
                    this.state = a
                }
            },
            haloPath: function(a) {
                return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX) - a, this.plotY - a, 2 * a, 2 * a)
            }
        });
        q(h.prototype, {
            onMouseOver: function() {
                var a = this.chart,
                    b = a.hoverSeries;
                if (b && b !== this) b.onMouseOut();
                this.options.events.mouseOver &&
                    k(this, "mouseOver");
                this.setState("hover");
                a.hoverSeries = this
            },
            onMouseOut: function() {
                var a = this.options,
                    b = this.chart,
                    c = b.tooltip,
                    d = b.hoverPoint;
                b.hoverSeries = null;
                if (d) d.onMouseOut();
                this && a.events.mouseOut && k(this, "mouseOut");
                !c || this.stickyTracking || c.shared && !this.noSharedTooltip || c.hide();
                this.setState()
            },
            setState: function(a) {
                var c = this,
                    d = c.options,
                    f = c.graph,
                    h = d.states,
                    k = d.lineWidth,
                    d = 0;
                a = a || "";
                if (c.state !== a && (l([c.group, c.markerGroup, c.dataLabelsGroup], function(b) {
                        b && (c.state && b.removeClass("highcharts-series-" +
                            c.state), a && b.addClass("highcharts-series-" + a))
                    }), c.state = a, !h[a] || !1 !== h[a].enabled) && (a && (k = h[a].lineWidth || k + (h[a].lineWidthPlus || 0)), f && !f.dashstyle))
                    for (k = {
                            "stroke-width": k
                        }, f.animate(k, b(c.chart.options.chart.animation, h[a] && h[a].animation)); c["zone-graph-" + d];) c["zone-graph-" + d].attr(k), d += 1
            },
            setVisible: function(a, b) {
                var c = this,
                    d = c.chart,
                    e = c.legendItem,
                    f, h = d.options.chart.ignoreHiddenSeries,
                    n = c.visible;
                f = (c.visible = a = c.options.visible = c.userOptions.visible = void 0 === a ? !n : a) ? "show" : "hide";
                l(["group",
                    "dataLabelsGroup", "markerGroup", "tracker", "tt"
                ], function(a) {
                    if (c[a]) c[a][f]()
                });
                if (d.hoverSeries === c || (d.hoverPoint && d.hoverPoint.series) === c) c.onMouseOut();
                e && d.legend.colorizeItem(c, a);
                c.isDirty = !0;
                c.options.stacking && l(d.series, function(a) {
                    a.options.stacking && a.visible && (a.isDirty = !0)
                });
                l(c.linkedSeries, function(b) {
                    b.setVisible(a, !1)
                });
                h && (d.isDirtyBox = !0);
                !1 !== b && d.redraw();
                k(c, f)
            },
            show: function() {
                this.setVisible(!0)
            },
            hide: function() {
                this.setVisible(!1)
            },
            select: function(a) {
                this.selected = a = void 0 ===
                    a ? !this.selected : a;
                this.checkbox && (this.checkbox.checked = a);
                k(this, a ? "select" : "unselect")
            },
            drawTracker: a.drawTrackerGraph
        })
    })(L);
    (function(a) {
        var B = a.Chart,
            A = a.each,
            H = a.inArray,
            G = a.isArray,
            r = a.isObject,
            f = a.pick,
            l = a.splat;
        B.prototype.setResponsive = function(f) {
            var k = this.options.responsive,
                l = [],
                d = this.currentResponsive;
            k && k.rules && A(k.rules, function(c) {
                void 0 === c._id && (c._id = a.uniqueKey());
                this.matchResponsiveRule(c, l, f)
            }, this);
            var c = a.merge.apply(0, a.map(l, function(c) {
                    return a.find(k.rules, function(a) {
                        return a._id ===
                            c
                    }).chartOptions
                })),
                l = l.toString() || void 0;
            l !== (d && d.ruleIds) && (d && this.update(d.undoOptions, f), l ? (this.currentResponsive = {
                ruleIds: l,
                mergedOptions: c,
                undoOptions: this.currentOptions(c)
            }, this.update(c, f)) : this.currentResponsive = void 0)
        };
        B.prototype.matchResponsiveRule = function(a, k) {
            var l = a.condition;
            (l.callback || function() {
                return this.chartWidth <= f(l.maxWidth, Number.MAX_VALUE) && this.chartHeight <= f(l.maxHeight, Number.MAX_VALUE) && this.chartWidth >= f(l.minWidth, 0) && this.chartHeight >= f(l.minHeight, 0)
            }).call(this) &&
                k.push(a._id)
        };
        B.prototype.currentOptions = function(a) {
            function f(a, c, k, q) {
                var b, d;
                for (b in a)
                    if (!q && -1 < H(b, ["series", "xAxis", "yAxis"]))
                        for (a[b] = l(a[b]), k[b] = [], d = 0; d < a[b].length; d++) c[b][d] && (k[b][d] = {}, f(a[b][d], c[b][d], k[b][d], q + 1));
                    else r(a[b]) ? (k[b] = G(a[b]) ? [] : {}, f(a[b], c[b] || {}, k[b], q + 1)) : k[b] = c[b] || null
            }
            var q = {};
            f(a, this.options, q, 0);
            return q
        }
    })(L);
    return L
});
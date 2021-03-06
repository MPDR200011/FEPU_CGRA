CGFversion = "2.0rc";
CGFdate = " (20190215)";
console.log("WebCGF - Library for Computer Graphics @ FEUP (WebGL) - v" + CGFversion + CGFdate);
var Detector = {
    canvas: !!window.CanvasRenderingContext2D,
    webgl: function () {
        try {
            var t = document.createElement("canvas");
            return !!(window.WebGLRenderingContext && t.getContext("webgl2"))
        } catch (t) {
            return false
        }
    }(),
    workers: !!window.Worker,
    fileapi: window.File && window.FileReader && window.FileList && window.Blob,
    getWebGLErrorMessage: function () {
        var t = document.createElement("div");
        t.id = "webgl-error-message";
        t.style.fontFamily = "monospace";
        t.style.fontSize = "13px";
        t.style.fontWeight = "normal";
        t.style.textAlign = "center";
        t.style.background = "#fff";
        t.style.color = "#000";
        t.style.padding = "1.5em";
        t.style.width = "400px";
        t.style.margin = "5em auto 0";
        if (!this.webgl) {
            t.innerHTML = window.WebGLRenderingContext ? ['Your graphics card does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br />', 'Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'].join("\n") : ['Your browser does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br/>', 'Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'].join("\n")
        }
        return t
    },
    addGetWebGLMessage: function (t) {
        var e, i, n;
        t = t || {};
        e = t.parent !== undefined ? t.parent : document.body;
        i = t.id !== undefined ? t.id : "oldie";
        n = Detector.getWebGLErrorMessage();
        n.id = i;
        e.appendChild(n)
    }
};
if (typeof module === "object") {
    module.exports = Detector
}(function () {
    "use strict";
    var t = {};
    if (typeof exports === "undefined") {
        if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
            t.exports = {};
            define(function () {
                return t.exports
            })
        } else {
            t.exports = window
        }
    } else {
        t.exports = exports
    }(function (t) {
        if (!e) {
            var e = 1e-6
        }
        if (!i) {
            var i = typeof Float32Array !== "undefined" ? Float32Array : Array
        }
        var n = {};
        n.setMatrixArrayType = function (t) {
            i = t
        };
        if (typeof t !== "undefined") {
            t.glMatrix = n
        }
        var r = {};
        r.create = function () {
            var t = new i(2);
            t[0] = 0;
            t[1] = 0;
            return t
        };
        r.clone = function (t) {
            var e = new i(2);
            e[0] = t[0];
            e[1] = t[1];
            return e
        };
        r.fromValues = function (t, e) {
            var n = new i(2);
            n[0] = t;
            n[1] = e;
            return n
        };
        r.copy = function (t, e) {
            t[0] = e[0];
            t[1] = e[1];
            return t
        };
        r.set = function (t, e, i) {
            t[0] = e;
            t[1] = i;
            return t
        };
        r.add = function (t, e, i) {
            t[0] = e[0] + i[0];
            t[1] = e[1] + i[1];
            return t
        };
        r.subtract = function (t, e, i) {
            t[0] = e[0] - i[0];
            t[1] = e[1] - i[1];
            return t
        };
        r.sub = r.subtract;
        r.multiply = function (t, e, i) {
            t[0] = e[0] * i[0];
            t[1] = e[1] * i[1];
            return t
        };
        r.mul = r.multiply;
        r.divide = function (t, e, i) {
            t[0] = e[0] / i[0];
            t[1] = e[1] / i[1];
            return t
        };
        r.div = r.divide;
        r.min = function (t, e, i) {
            t[0] = Math.min(e[0], i[0]);
            t[1] = Math.min(e[1], i[1]);
            return t
        };
        r.max = function (t, e, i) {
            t[0] = Math.max(e[0], i[0]);
            t[1] = Math.max(e[1], i[1]);
            return t
        };
        r.scale = function (t, e, i) {
            t[0] = e[0] * i;
            t[1] = e[1] * i;
            return t
        };
        r.distance = function (t, e) {
            var i = e[0] - t[0],
                n = e[1] - t[1];
            return Math.sqrt(i * i + n * n)
        };
        r.dist = r.distance;
        r.squaredDistance = function (t, e) {
            var i = e[0] - t[0],
                n = e[1] - t[1];
            return i * i + n * n
        };
        r.sqrDist = r.squaredDistance;
        r.length = function (t) {
            var e = t[0],
                i = t[1];
            return Math.sqrt(e * e + i * i)
        };
        r.len = r.length;
        r.squaredLength = function (t) {
            var e = t[0],
                i = t[1];
            return e * e + i * i
        };
        r.sqrLen = r.squaredLength;
        r.negate = function (t, e) {
            t[0] = -e[0];
            t[1] = -e[1];
            return t
        };
        r.normalize = function (t, e) {
            var i = e[0],
                n = e[1];
            var r = i * i + n * n;
            if (r > 0) {
                r = 1 / Math.sqrt(r);
                t[0] = e[0] * r;
                t[1] = e[1] * r
            }
            return t
        };
        r.dot = function (t, e) {
            return t[0] * e[0] + t[1] * e[1]
        };
        r.cross = function (t, e, i) {
            var n = e[0] * i[1] - e[1] * i[0];
            t[0] = t[1] = 0;
            t[2] = n;
            return t
        };
        r.lerp = function (t, e, i, n) {
            var r = e[0],
                s = e[1];
            t[0] = r + n * (i[0] - r);
            t[1] = s + n * (i[1] - s);
            return t
        };
        r.transformMat2 = function (t, e, i) {
            var n = e[0],
                r = e[1];
            t[0] = i[0] * n + i[2] * r;
            t[1] = i[1] * n + i[3] * r;
            return t
        };
        r.transformMat2d = function (t, e, i) {
            var n = e[0],
                r = e[1];
            t[0] = i[0] * n + i[2] * r + i[4];
            t[1] = i[1] * n + i[3] * r + i[5];
            return t
        };
        r.transformMat3 = function (t, e, i) {
            var n = e[0],
                r = e[1];
            t[0] = i[0] * n + i[3] * r + i[6];
            t[1] = i[1] * n + i[4] * r + i[7];
            return t
        };
        r.transformMat4 = function (t, e, i) {
            var n = e[0],
                r = e[1];
            t[0] = i[0] * n + i[4] * r + i[12];
            t[1] = i[1] * n + i[5] * r + i[13];
            return t
        };
        r.forEach = function () {
            var t = r.create();
            return function (e, i, n, r, s, o) {
                var a, c;
                if (!i) {
                    i = 2
                }
                if (!n) {
                    n = 0
                }
                if (r) {
                    c = Math.min(r * i + n, e.length)
                } else {
                    c = e.length
                }
                for (a = n; a < c; a += i) {
                    t[0] = e[a];
                    t[1] = e[a + 1];
                    s(t, t, o);
                    e[a] = t[0];
                    e[a + 1] = t[1]
                }
                return e
            }
        }();
        r.str = function (t) {
            return "vec2(" + t[0] + ", " + t[1] + ")"
        };
        if (typeof t !== "undefined") {
            t.vec2 = r
        }
        var s = {};
        s.create = function () {
            var t = new i(3);
            t[0] = 0;
            t[1] = 0;
            t[2] = 0;
            return t
        };
        s.clone = function (t) {
            var e = new i(3);
            e[0] = t[0];
            e[1] = t[1];
            e[2] = t[2];
            return e
        };
        s.fromValues = function (t, e, n) {
            var r = new i(3);
            r[0] = t;
            r[1] = e;
            r[2] = n;
            return r
        };
        s.copy = function (t, e) {
            t[0] = e[0];
            t[1] = e[1];
            t[2] = e[2];
            return t
        };
        s.set = function (t, e, i, n) {
            t[0] = e;
            t[1] = i;
            t[2] = n;
            return t
        };
        s.add = function (t, e, i) {
            t[0] = e[0] + i[0];
            t[1] = e[1] + i[1];
            t[2] = e[2] + i[2];
            return t
        };
        s.subtract = function (t, e, i) {
            t[0] = e[0] - i[0];
            t[1] = e[1] - i[1];
            t[2] = e[2] - i[2];
            return t
        };
        s.sub = s.subtract;
        s.multiply = function (t, e, i) {
            t[0] = e[0] * i[0];
            t[1] = e[1] * i[1];
            t[2] = e[2] * i[2];
            return t
        };
        s.mul = s.multiply;
        s.divide = function (t, e, i) {
            t[0] = e[0] / i[0];
            t[1] = e[1] / i[1];
            t[2] = e[2] / i[2];
            return t
        };
        s.div = s.divide;
        s.min = function (t, e, i) {
            t[0] = Math.min(e[0], i[0]);
            t[1] = Math.min(e[1], i[1]);
            t[2] = Math.min(e[2], i[2]);
            return t
        };
        s.max = function (t, e, i) {
            t[0] = Math.max(e[0], i[0]);
            t[1] = Math.max(e[1], i[1]);
            t[2] = Math.max(e[2], i[2]);
            return t
        };
        s.scale = function (t, e, i) {
            t[0] = e[0] * i;
            t[1] = e[1] * i;
            t[2] = e[2] * i;
            return t
        };
        s.distance = function (t, e) {
            var i = e[0] - t[0],
                n = e[1] - t[1],
                r = e[2] - t[2];
            return Math.sqrt(i * i + n * n + r * r)
        };
        s.dist = s.distance;
        s.squaredDistance = function (t, e) {
            var i = e[0] - t[0],
                n = e[1] - t[1],
                r = e[2] - t[2];
            return i * i + n * n + r * r
        };
        s.sqrDist = s.squaredDistance;
        s.length = function (t) {
            var e = t[0],
                i = t[1],
                n = t[2];
            return Math.sqrt(e * e + i * i + n * n)
        };
        s.len = s.length;
        s.squaredLength = function (t) {
            var e = t[0],
                i = t[1],
                n = t[2];
            return e * e + i * i + n * n
        };
        s.sqrLen = s.squaredLength;
        s.negate = function (t, e) {
            t[0] = -e[0];
            t[1] = -e[1];
            t[2] = -e[2];
            return t
        };
        s.normalize = function (t, e) {
            var i = e[0],
                n = e[1],
                r = e[2];
            var s = i * i + n * n + r * r;
            if (s > 0) {
                s = 1 / Math.sqrt(s);
                t[0] = e[0] * s;
                t[1] = e[1] * s;
                t[2] = e[2] * s
            }
            return t
        };
        s.dot = function (t, e) {
            return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
        };
        s.cross = function (t, e, i) {
            var n = e[0],
                r = e[1],
                s = e[2],
                o = i[0],
                a = i[1],
                c = i[2];
            t[0] = r * c - s * a;
            t[1] = s * o - n * c;
            t[2] = n * a - r * o;
            return t
        };
        s.lerp = function (t, e, i, n) {
            var r = e[0],
                s = e[1],
                o = e[2];
            t[0] = r + n * (i[0] - r);
            t[1] = s + n * (i[1] - s);
            t[2] = o + n * (i[2] - o);
            return t
        };
        s.transformMat4 = function (t, e, i) {
            var n = e[0],
                r = e[1],
                s = e[2];
            t[0] = i[0] * n + i[4] * r + i[8] * s + i[12];
            t[1] = i[1] * n + i[5] * r + i[9] * s + i[13];
            t[2] = i[2] * n + i[6] * r + i[10] * s + i[14];
            return t
        };
        s.transformQuat = function (t, e, i) {
            var n = e[0],
                r = e[1],
                s = e[2],
                o = i[0],
                a = i[1],
                c = i[2],
                u = i[3],
                l = u * n + a * s - c * r,
                h = u * r + c * n - o * s,
                d = u * s + o * r - a * n,
                f = -o * n - a * r - c * s;
            t[0] = l * u + f * -o + h * -c - d * -a;
            t[1] = h * u + f * -a + d * -o - l * -c;
            t[2] = d * u + f * -c + l * -a - h * -o;
            return t
        };
        s.forEach = function () {
            var t = s.create();
            return function (e, i, n, r, s, o) {
                var a, c;
                if (!i) {
                    i = 3
                }
                if (!n) {
                    n = 0
                }
                if (r) {
                    c = Math.min(r * i + n, e.length)
                } else {
                    c = e.length
                }
                for (a = n; a < c; a += i) {
                    t[0] = e[a];
                    t[1] = e[a + 1];
                    t[2] = e[a + 2];
                    s(t, t, o);
                    e[a] = t[0];
                    e[a + 1] = t[1];
                    e[a + 2] = t[2]
                }
                return e
            }
        }();
        s.str = function (t) {
            return "vec3(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
        };
        if (typeof t !== "undefined") {
            t.vec3 = s
        }
        var o = {};
        o.create = function () {
            var t = new i(4);
            t[0] = 0;
            t[1] = 0;
            t[2] = 0;
            t[3] = 0;
            return t
        };
        o.clone = function (t) {
            var e = new i(4);
            e[0] = t[0];
            e[1] = t[1];
            e[2] = t[2];
            e[3] = t[3];
            return e
        };
        o.fromValues = function (t, e, n, r) {
            var s = new i(4);
            s[0] = t;
            s[1] = e;
            s[2] = n;
            s[3] = r;
            return s
        };
        o.copy = function (t, e) {
            t[0] = e[0];
            t[1] = e[1];
            t[2] = e[2];
            t[3] = e[3];
            return t
        };
        o.set = function (t, e, i, n, r) {
            t[0] = e;
            t[1] = i;
            t[2] = n;
            t[3] = r;
            return t
        };
        o.add = function (t, e, i) {
            t[0] = e[0] + i[0];
            t[1] = e[1] + i[1];
            t[2] = e[2] + i[2];
            t[3] = e[3] + i[3];
            return t
        };
        o.subtract = function (t, e, i) {
            t[0] = e[0] - i[0];
            t[1] = e[1] - i[1];
            t[2] = e[2] - i[2];
            t[3] = e[3] - i[3];
            return t
        };
        o.sub = o.subtract;
        o.multiply = function (t, e, i) {
            t[0] = e[0] * i[0];
            t[1] = e[1] * i[1];
            t[2] = e[2] * i[2];
            t[3] = e[3] * i[3];
            return t
        };
        o.mul = o.multiply;
        o.divide = function (t, e, i) {
            t[0] = e[0] / i[0];
            t[1] = e[1] / i[1];
            t[2] = e[2] / i[2];
            t[3] = e[3] / i[3];
            return t
        };
        o.div = o.divide;
        o.min = function (t, e, i) {
            t[0] = Math.min(e[0], i[0]);
            t[1] = Math.min(e[1], i[1]);
            t[2] = Math.min(e[2], i[2]);
            t[3] = Math.min(e[3], i[3]);
            return t
        };
        o.max = function (t, e, i) {
            t[0] = Math.max(e[0], i[0]);
            t[1] = Math.max(e[1], i[1]);
            t[2] = Math.max(e[2], i[2]);
            t[3] = Math.max(e[3], i[3]);
            return t
        };
        o.scale = function (t, e, i) {
            t[0] = e[0] * i;
            t[1] = e[1] * i;
            t[2] = e[2] * i;
            t[3] = e[3] * i;
            return t
        };
        o.distance = function (t, e) {
            var i = e[0] - t[0],
                n = e[1] - t[1],
                r = e[2] - t[2],
                s = e[3] - t[3];
            return Math.sqrt(i * i + n * n + r * r + s * s)
        };
        o.dist = o.distance;
        o.squaredDistance = function (t, e) {
            var i = e[0] - t[0],
                n = e[1] - t[1],
                r = e[2] - t[2],
                s = e[3] - t[3];
            return i * i + n * n + r * r + s * s
        };
        o.sqrDist = o.squaredDistance;
        o.length = function (t) {
            var e = t[0],
                i = t[1],
                n = t[2],
                r = t[3];
            return Math.sqrt(e * e + i * i + n * n + r * r)
        };
        o.len = o.length;
        o.squaredLength = function (t) {
            var e = t[0],
                i = t[1],
                n = t[2],
                r = t[3];
            return e * e + i * i + n * n + r * r
        };
        o.sqrLen = o.squaredLength;
        o.negate = function (t, e) {
            t[0] = -e[0];
            t[1] = -e[1];
            t[2] = -e[2];
            t[3] = -e[3];
            return t
        };
        o.normalize = function (t, e) {
            var i = e[0],
                n = e[1],
                r = e[2],
                s = e[3];
            var o = i * i + n * n + r * r + s * s;
            if (o > 0) {
                o = 1 / Math.sqrt(o);
                t[0] = e[0] * o;
                t[1] = e[1] * o;
                t[2] = e[2] * o;
                t[3] = e[3] * o
            }
            return t
        };
        o.dot = function (t, e) {
            return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3]
        };
        o.lerp = function (t, e, i, n) {
            var r = e[0],
                s = e[1],
                o = e[2],
                a = e[3];
            t[0] = r + n * (i[0] - r);
            t[1] = s + n * (i[1] - s);
            t[2] = o + n * (i[2] - o);
            t[3] = a + n * (i[3] - a);
            return t
        };
        o.transformMat4 = function (t, e, i) {
            var n = e[0],
                r = e[1],
                s = e[2],
                o = e[3];
            t[0] = i[0] * n + i[4] * r + i[8] * s + i[12] * o;
            t[1] = i[1] * n + i[5] * r + i[9] * s + i[13] * o;
            t[2] = i[2] * n + i[6] * r + i[10] * s + i[14] * o;
            t[3] = i[3] * n + i[7] * r + i[11] * s + i[15] * o;
            return t
        };
        o.transformQuat = function (t, e, i) {
            var n = e[0],
                r = e[1],
                s = e[2],
                o = i[0],
                a = i[1],
                c = i[2],
                u = i[3],
                l = u * n + a * s - c * r,
                h = u * r + c * n - o * s,
                d = u * s + o * r - a * n,
                f = -o * n - a * r - c * s;
            t[0] = l * u + f * -o + h * -c - d * -a;
            t[1] = h * u + f * -a + d * -o - l * -c;
            t[2] = d * u + f * -c + l * -a - h * -o;
            return t
        };
        o.forEach = function () {
            var t = o.create();
            return function (e, i, n, r, s, o) {
                var a, c;
                if (!i) {
                    i = 4
                }
                if (!n) {
                    n = 0
                }
                if (r) {
                    c = Math.min(r * i + n, e.length)
                } else {
                    c = e.length
                }
                for (a = n; a < c; a += i) {
                    t[0] = e[a];
                    t[1] = e[a + 1];
                    t[2] = e[a + 2];
                    t[3] = e[a + 3];
                    s(t, t, o);
                    e[a] = t[0];
                    e[a + 1] = t[1];
                    e[a + 2] = t[2];
                    e[a + 3] = t[3]
                }
                return e
            }
        }();
        o.str = function (t) {
            return "vec4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
        };
        if (typeof t !== "undefined") {
            t.vec4 = o
        }
        var a = {};
        var c = new Float32Array([1, 0, 0, 1]);
        a.create = function () {
            var t = new i(4);
            t[0] = 1;
            t[1] = 0;
            t[2] = 0;
            t[3] = 1;
            return t
        };
        a.clone = function (t) {
            var e = new i(4);
            e[0] = t[0];
            e[1] = t[1];
            e[2] = t[2];
            e[3] = t[3];
            return e
        };
        a.copy = function (t, e) {
            t[0] = e[0];
            t[1] = e[1];
            t[2] = e[2];
            t[3] = e[3];
            return t
        };
        a.identity = function (t) {
            t[0] = 1;
            t[1] = 0;
            t[2] = 0;
            t[3] = 1;
            return t
        };
        a.transpose = function (t, e) {
            if (t === e) {
                var i = e[1];
                t[1] = e[2];
                t[2] = i
            } else {
                t[0] = e[0];
                t[1] = e[2];
                t[2] = e[1];
                t[3] = e[3]
            }
            return t
        };
        a.invert = function (t, e) {
            var i = e[0],
                n = e[1],
                r = e[2],
                s = e[3],
                o = i * s - r * n;
            if (!o) {
                return null
            }
            o = 1 / o;
            t[0] = s * o;
            t[1] = -n * o;
            t[2] = -r * o;
            t[3] = i * o;
            return t
        };
        a.adjoint = function (t, e) {
            var i = e[0];
            t[0] = e[3];
            t[1] = -e[1];
            t[2] = -e[2];
            t[3] = i;
            return t
        };
        a.determinant = function (t) {
            return t[0] * t[3] - t[2] * t[1]
        };
        a.multiply = function (t, e, i) {
            var n = e[0],
                r = e[1],
                s = e[2],
                o = e[3];
            var a = i[0],
                c = i[1],
                u = i[2],
                l = i[3];
            t[0] = n * a + r * u;
            t[1] = n * c + r * l;
            t[2] = s * a + o * u;
            t[3] = s * c + o * l;
            return t
        };
        a.mul = a.multiply;
        a.rotate = function (t, e, i) {
            var n = e[0],
                r = e[1],
                s = e[2],
                o = e[3],
                a = Math.sin(i),
                c = Math.cos(i);
            t[0] = n * c + r * a;
            t[1] = n * -a + r * c;
            t[2] = s * c + o * a;
            t[3] = s * -a + o * c;
            return t
        };
        a.scale = function (t, e, i) {
            var n = e[0],
                r = e[1],
                s = e[2],
                o = e[3],
                a = i[0],
                c = i[1];
            t[0] = n * a;
            t[1] = r * c;
            t[2] = s * a;
            t[3] = o * c;
            return t
        };
        a.str = function (t) {
            return "mat2(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
        };
        if (typeof t !== "undefined") {
            t.mat2 = a
        }
        var u = {};
        var l = new Float32Array([1, 0, 0, 1, 0, 0]);
        u.create = function () {
            var t = new i(6);
            t[0] = 1;
            t[1] = 0;
            t[2] = 0;
            t[3] = 1;
            t[4] = 0;
            t[5] = 0;
            return t
        };
        u.clone = function (t) {
            var e = new i(6);
            e[0] = t[0];
            e[1] = t[1];
            e[2] = t[2];
            e[3] = t[3];
            e[4] = t[4];
            e[5] = t[5];
            return e
        };
        u.copy = function (t, e) {
            t[0] = e[0];
            t[1] = e[1];
            t[2] = e[2];
            t[3] = e[3];
            t[4] = e[4];
            t[5] = e[5];
            return t
        };
        u.identity = function (t) {
            t[0] = 1;
            t[1] = 0;
            t[2] = 0;
            t[3] = 1;
            t[4] = 0;
            t[5] = 0;
            return t
        };
        u.invert = function (t, e) {
            var i = e[0],
                n = e[1],
                r = e[2],
                s = e[3],
                o = e[4],
                a = e[5];
            var c = i * s - n * r;
            if (!c) {
                return null
            }
            c = 1 / c;
            t[0] = s * c;
            t[1] = -n * c;
            t[2] = -r * c;
            t[3] = i * c;
            t[4] = (r * a - s * o) * c;
            t[5] = (n * o - i * a) * c;
            return t
        };
        u.determinant = function (t) {
            return t[0] * t[3] - t[1] * t[2]
        };
        u.multiply = function (t, e, i) {
            var n = e[0],
                r = e[1],
                s = e[2],
                o = e[3],
                a = e[4],
                c = e[5],
                u = i[0],
                l = i[1],
                h = i[2],
                d = i[3],
                f = i[4],
                p = i[5];
            t[0] = n * u + r * h;
            t[1] = n * l + r * d;
            t[2] = s * u + o * h;
            t[3] = s * l + o * d;
            t[4] = u * a + h * c + f;
            t[5] = l * a + d * c + p;
            return t
        };
        u.mul = u.multiply;
        u.rotate = function (t, e, i) {
            var n = e[0],
                r = e[1],
                s = e[2],
                o = e[3],
                a = e[4],
                c = e[5],
                u = Math.sin(i),
                l = Math.cos(i);
            t[0] = n * l + r * u;
            t[1] = -n * u + r * l;
            t[2] = s * l + o * u;
            t[3] = -s * u + l * o;
            t[4] = l * a + u * c;
            t[5] = l * c - u * a;
            return t
        };
        u.scale = function (t, e, i) {
            var n = i[0],
                r = i[1];
            t[0] = e[0] * n;
            t[1] = e[1] * r;
            t[2] = e[2] * n;
            t[3] = e[3] * r;
            t[4] = e[4] * n;
            t[5] = e[5] * r;
            return t
        };
        u.translate = function (t, e, i) {
            t[0] = e[0];
            t[1] = e[1];
            t[2] = e[2];
            t[3] = e[3];
            t[4] = e[4] + i[0];
            t[5] = e[5] + i[1];
            return t
        };
        u.str = function (t) {
            return "mat2d(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ")"
        };
        if (typeof t !== "undefined") {
            t.mat2d = u
        }
        var h = {};
        var d = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
        h.create = function () {
            var t = new i(9);
            t[0] = 1;
            t[1] = 0;
            t[2] = 0;
            t[3] = 0;
            t[4] = 1;
            t[5] = 0;
            t[6] = 0;
            t[7] = 0;
            t[8] = 1;
            return t
        };
        h.clone = function (t) {
            var e = new i(9);
            e[0] = t[0];
            e[1] = t[1];
            e[2] = t[2];
            e[3] = t[3];
            e[4] = t[4];
            e[5] = t[5];
            e[6] = t[6];
            e[7] = t[7];
            e[8] = t[8];
            return e
        };
        h.copy = function (t, e) {
            t[0] = e[0];
            t[1] = e[1];
            t[2] = e[2];
            t[3] = e[3];
            t[4] = e[4];
            t[5] = e[5];
            t[6] = e[6];
            t[7] = e[7];
            t[8] = e[8];
            return t
        };
        h.identity = function (t) {
            t[0] = 1;
            t[1] = 0;
            t[2] = 0;
            t[3] = 0;
            t[4] = 1;
            t[5] = 0;
            t[6] = 0;
            t[7] = 0;
            t[8] = 1;
            return t
        };
        h.transpose = function (t, e) {
            if (t === e) {
                var i = e[1],
                    n = e[2],
                    r = e[5];
                t[1] = e[3];
                t[2] = e[6];
                t[3] = i;
                t[5] = e[7];
                t[6] = n;
                t[7] = r
            } else {
                t[0] = e[0];
                t[1] = e[3];
                t[2] = e[6];
                t[3] = e[1];
                t[4] = e[4];
                t[5] = e[7];
                t[6] = e[2];
                t[7] = e[5];
                t[8] = e[8]
            }
            return t
        };
        h.invert = function (t, e) {
            var i = e[0],
                n = e[1],
                r = e[2],
                s = e[3],
                o = e[4],
                a = e[5],
                c = e[6],
                u = e[7],
                l = e[8],
                h = l * o - a * u,
                d = -l * s + a * c,
                f = u * s - o * c,
                p = i * h + n * d + r * f;
            if (!p) {
                return null
            }
            p = 1 / p;
            t[0] = h * p;
            t[1] = (-l * n + r * u) * p;
            t[2] = (a * n - r * o) * p;
            t[3] = d * p;
            t[4] = (l * i - r * c) * p;
            t[5] = (-a * i + r * s) * p;
            t[6] = f * p;
            t[7] = (-u * i + n * c) * p;
            t[8] = (o * i - n * s) * p;
            return t
        };
        h.adjoint = function (t, e) {
            var i = e[0],
                n = e[1],
                r = e[2],
                s = e[3],
                o = e[4],
                a = e[5],
                c = e[6],
                u = e[7],
                l = e[8];
            t[0] = o * l - a * u;
            t[1] = r * u - n * l;
            t[2] = n * a - r * o;
            t[3] = a * c - s * l;
            t[4] = i * l - r * c;
            t[5] = r * s - i * a;
            t[6] = s * u - o * c;
            t[7] = n * c - i * u;
            t[8] = i * o - n * s;
            return t
        };
        h.determinant = function (t) {
            var e = t[0],
                i = t[1],
                n = t[2],
                r = t[3],
                s = t[4],
                o = t[5],
                a = t[6],
                c = t[7],
                u = t[8];
            return e * (u * s - o * c) + i * (-u * r + o * a) + n * (c * r - s * a)
        };
        h.multiply = function (t, e, i) {
            var n = e[0],
                r = e[1],
                s = e[2],
                o = e[3],
                a = e[4],
                c = e[5],
                u = e[6],
                l = e[7],
                h = e[8],
                d = i[0],
                f = i[1],
                p = i[2],
                m = i[3],
                v = i[4],
                _ = i[5],
                g = i[6],
                b = i[7],
                x = i[8];
            t[0] = d * n + f * o + p * u;
            t[1] = d * r + f * a + p * l;
            t[2] = d * s + f * c + p * h;
            t[3] = m * n + v * o + _ * u;
            t[4] = m * r + v * a + _ * l;
            t[5] = m * s + v * c + _ * h;
            t[6] = g * n + b * o + x * u;
            t[7] = g * r + b * a + x * l;
            t[8] = g * s + b * c + x * h;
            return t
        };
        h.mul = h.multiply;
        h.translate = function (t, e, i) {
            var n = e[0],
                r = e[1],
                s = e[2],
                o = e[3],
                a = e[4],
                c = e[5],
                u = e[6],
                l = e[7],
                h = e[8],
                d = i[0],
                f = i[1];
            t[0] = n;
            t[1] = r;
            t[2] = s;
            t[3] = o;
            t[4] = a;
            t[5] = c;
            t[6] = d * n + f * o + u;
            t[7] = d * r + f * a + l;
            t[8] = d * s + f * c + h;
            return t
        };
        h.rotate = function (t, e, i) {
            var n = e[0],
                r = e[1],
                s = e[2],
                o = e[3],
                a = e[4],
                c = e[5],
                u = e[6],
                l = e[7],
                h = e[8],
                d = Math.sin(i),
                f = Math.cos(i);
            t[0] = f * n + d * o;
            t[1] = f * r + d * a;
            t[2] = f * s + d * c;
            t[3] = f * o - d * n;
            t[4] = f * a - d * r;
            t[5] = f * c - d * s;
            t[6] = u;
            t[7] = l;
            t[8] = h;
            return t
        };
        h.scale = function (t, e, i) {
            var n = i[0],
                r = i[2];
            t[0] = n * e[0];
            t[1] = n * e[1];
            t[2] = n * e[2];
            t[3] = r * e[3];
            t[4] = r * e[4];
            t[5] = r * e[5];
            t[6] = e[6];
            t[7] = e[7];
            t[8] = e[8];
            return t
        };
        h.fromMat2d = function (t, e) {
            t[0] = e[0];
            t[1] = e[1];
            t[2] = 0;
            t[3] = e[2];
            t[4] = e[3];
            t[5] = 0;
            t[6] = e[4];
            t[7] = e[5];
            t[8] = 1;
            return t
        };
        h.fromQuat = function (t, e) {
            var i = e[0],
                n = e[1],
                r = e[2],
                s = e[3],
                o = i + i,
                a = n + n,
                c = r + r,
                u = i * o,
                l = i * a,
                h = i * c,
                d = n * a,
                f = n * c,
                p = r * c,
                m = s * o,
                v = s * a,
                _ = s * c;
            t[0] = 1 - (d + p);
            t[1] = l + _;
            t[2] = h - v;
            t[3] = l - _;
            t[4] = 1 - (u + p);
            t[5] = f + m;
            t[6] = h + v;
            t[7] = f - m;
            t[8] = 1 - (u + d);
            return t
        };
        h.str = function (t) {
            return "mat3(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ")"
        };
        if (typeof t !== "undefined") {
            t.mat3 = h
        }
        var f = {};
        var p = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
        f.create = function () {
            var t = new i(16);
            t[0] = 1;
            t[1] = 0;
            t[2] = 0;
            t[3] = 0;
            t[4] = 0;
            t[5] = 1;
            t[6] = 0;
            t[7] = 0;
            t[8] = 0;
            t[9] = 0;
            t[10] = 1;
            t[11] = 0;
            t[12] = 0;
            t[13] = 0;
            t[14] = 0;
            t[15] = 1;
            return t
        };
        f.clone = function (t) {
            var e = new i(16);
            e[0] = t[0];
            e[1] = t[1];
            e[2] = t[2];
            e[3] = t[3];
            e[4] = t[4];
            e[5] = t[5];
            e[6] = t[6];
            e[7] = t[7];
            e[8] = t[8];
            e[9] = t[9];
            e[10] = t[10];
            e[11] = t[11];
            e[12] = t[12];
            e[13] = t[13];
            e[14] = t[14];
            e[15] = t[15];
            return e
        };
        f.copy = function (t, e) {
            t[0] = e[0];
            t[1] = e[1];
            t[2] = e[2];
            t[3] = e[3];
            t[4] = e[4];
            t[5] = e[5];
            t[6] = e[6];
            t[7] = e[7];
            t[8] = e[8];
            t[9] = e[9];
            t[10] = e[10];
            t[11] = e[11];
            t[12] = e[12];
            t[13] = e[13];
            t[14] = e[14];
            t[15] = e[15];
            return t
        };
        f.identity = function (t) {
            t[0] = 1;
            t[1] = 0;
            t[2] = 0;
            t[3] = 0;
            t[4] = 0;
            t[5] = 1;
            t[6] = 0;
            t[7] = 0;
            t[8] = 0;
            t[9] = 0;
            t[10] = 1;
            t[11] = 0;
            t[12] = 0;
            t[13] = 0;
            t[14] = 0;
            t[15] = 1;
            return t
        };
        f.transpose = function (t, e) {
            if (t === e) {
                var i = e[1],
                    n = e[2],
                    r = e[3],
                    s = e[6],
                    o = e[7],
                    a = e[11];
                t[1] = e[4];
                t[2] = e[8];
                t[3] = e[12];
                t[4] = i;
                t[6] = e[9];
                t[7] = e[13];
                t[8] = n;
                t[9] = s;
                t[11] = e[14];
                t[12] = r;
                t[13] = o;
                t[14] = a
            } else {
                t[0] = e[0];
                t[1] = e[4];
                t[2] = e[8];
                t[3] = e[12];
                t[4] = e[1];
                t[5] = e[5];
                t[6] = e[9];
                t[7] = e[13];
                t[8] = e[2];
                t[9] = e[6];
                t[10] = e[10];
                t[11] = e[14];
                t[12] = e[3];
                t[13] = e[7];
                t[14] = e[11];
                t[15] = e[15]
            }
            return t
        };
        f.invert = function (t, e) {
            var i = e[0],
                n = e[1],
                r = e[2],
                s = e[3],
                o = e[4],
                a = e[5],
                c = e[6],
                u = e[7],
                l = e[8],
                h = e[9],
                d = e[10],
                f = e[11],
                p = e[12],
                m = e[13],
                v = e[14],
                _ = e[15],
                g = i * a - n * o,
                b = i * c - r * o,
                x = i * u - s * o,
                y = n * c - r * a,
                E = n * u - s * a,
                w = r * u - s * c,
                A = l * m - h * p,
                C = l * v - d * p,
                M = l * _ - f * p,
                S = h * v - d * m,
                T = h * _ - f * m,
                R = d * _ - f * v,
                F = g * R - b * T + x * S + y * M - E * C + w * A;
            if (!F) {
                return null
            }
            F = 1 / F;
            t[0] = (a * R - c * T + u * S) * F;
            t[1] = (r * T - n * R - s * S) * F;
            t[2] = (m * w - v * E + _ * y) * F;
            t[3] = (d * E - h * w - f * y) * F;
            t[4] = (c * M - o * R - u * C) * F;
            t[5] = (i * R - r * M + s * C) * F;
            t[6] = (v * x - p * w - _ * b) * F;
            t[7] = (l * w - d * x + f * b) * F;
            t[8] = (o * T - a * M + u * A) * F;
            t[9] = (n * M - i * T - s * A) * F;
            t[10] = (p * E - m * x + _ * g) * F;
            t[11] = (h * x - l * E - f * g) * F;
            t[12] = (a * C - o * S - c * A) * F;
            t[13] = (i * S - n * C + r * A) * F;
            t[14] = (m * b - p * y - v * g) * F;
            t[15] = (l * y - h * b + d * g) * F;
            return t
        };
        f.adjoint = function (t, e) {
            var i = e[0],
                n = e[1],
                r = e[2],
                s = e[3],
                o = e[4],
                a = e[5],
                c = e[6],
                u = e[7],
                l = e[8],
                h = e[9],
                d = e[10],
                f = e[11],
                p = e[12],
                m = e[13],
                v = e[14],
                _ = e[15];
            t[0] = a * (d * _ - f * v) - h * (c * _ - u * v) + m * (c * f - u * d);
            t[1] = -(n * (d * _ - f * v) - h * (r * _ - s * v) + m * (r * f - s * d));
            t[2] = n * (c * _ - u * v) - a * (r * _ - s * v) + m * (r * u - s * c);
            t[3] = -(n * (c * f - u * d) - a * (r * f - s * d) + h * (r * u - s * c));
            t[4] = -(o * (d * _ - f * v) - l * (c * _ - u * v) + p * (c * f - u * d));
            t[5] = i * (d * _ - f * v) - l * (r * _ - s * v) + p * (r * f - s * d);
            t[6] = -(i * (c * _ - u * v) - o * (r * _ - s * v) + p * (r * u - s * c));
            t[7] = i * (c * f - u * d) - o * (r * f - s * d) + l * (r * u - s * c);
            t[8] = o * (h * _ - f * m) - l * (a * _ - u * m) + p * (a * f - u * h);
            t[9] = -(i * (h * _ - f * m) - l * (n * _ - s * m) + p * (n * f - s * h));
            t[10] = i * (a * _ - u * m) - o * (n * _ - s * m) + p * (n * u - s * a);
            t[11] = -(i * (a * f - u * h) - o * (n * f - s * h) + l * (n * u - s * a));
            t[12] = -(o * (h * v - d * m) - l * (a * v - c * m) + p * (a * d - c * h));
            t[13] = i * (h * v - d * m) - l * (n * v - r * m) + p * (n * d - r * h);
            t[14] = -(i * (a * v - c * m) - o * (n * v - r * m) + p * (n * c - r * a));
            t[15] = i * (a * d - c * h) - o * (n * d - r * h) + l * (n * c - r * a);
            return t
        };
        f.determinant = function (t) {
            var e = t[0],
                i = t[1],
                n = t[2],
                r = t[3],
                s = t[4],
                o = t[5],
                a = t[6],
                c = t[7],
                u = t[8],
                l = t[9],
                h = t[10],
                d = t[11],
                f = t[12],
                p = t[13],
                m = t[14],
                v = t[15],
                _ = e * o - i * s,
                g = e * a - n * s,
                b = e * c - r * s,
                x = i * a - n * o,
                y = i * c - r * o,
                E = n * c - r * a,
                w = u * p - l * f,
                A = u * m - h * f,
                C = u * v - d * f,
                M = l * m - h * p,
                S = l * v - d * p,
                T = h * v - d * m;
            return _ * T - g * S + b * M + x * C - y * A + E * w
        };
        f.multiply = function (t, e, i) {
            var n = e[0],
                r = e[1],
                s = e[2],
                o = e[3],
                a = e[4],
                c = e[5],
                u = e[6],
                l = e[7],
                h = e[8],
                d = e[9],
                f = e[10],
                p = e[11],
                m = e[12],
                v = e[13],
                _ = e[14],
                g = e[15];
            var b = i[0],
                x = i[1],
                y = i[2],
                E = i[3];
            t[0] = b * n + x * a + y * h + E * m;
            t[1] = b * r + x * c + y * d + E * v;
            t[2] = b * s + x * u + y * f + E * _;
            t[3] = b * o + x * l + y * p + E * g;
            b = i[4];
            x = i[5];
            y = i[6];
            E = i[7];
            t[4] = b * n + x * a + y * h + E * m;
            t[5] = b * r + x * c + y * d + E * v;
            t[6] = b * s + x * u + y * f + E * _;
            t[7] = b * o + x * l + y * p + E * g;
            b = i[8];
            x = i[9];
            y = i[10];
            E = i[11];
            t[8] = b * n + x * a + y * h + E * m;
            t[9] = b * r + x * c + y * d + E * v;
            t[10] = b * s + x * u + y * f + E * _;
            t[11] = b * o + x * l + y * p + E * g;
            b = i[12];
            x = i[13];
            y = i[14];
            E = i[15];
            t[12] = b * n + x * a + y * h + E * m;
            t[13] = b * r + x * c + y * d + E * v;
            t[14] = b * s + x * u + y * f + E * _;
            t[15] = b * o + x * l + y * p + E * g;
            return t
        };
        f.mul = f.multiply;
        f.translate = function (t, e, i) {
            var n = i[0],
                r = i[1],
                s = i[2],
                o, a, c, u, l, h, d, f, p, m, v, _;
            if (e === t) {
                t[12] = e[0] * n + e[4] * r + e[8] * s + e[12];
                t[13] = e[1] * n + e[5] * r + e[9] * s + e[13];
                t[14] = e[2] * n + e[6] * r + e[10] * s + e[14];
                t[15] = e[3] * n + e[7] * r + e[11] * s + e[15]
            } else {
                o = e[0];
                a = e[1];
                c = e[2];
                u = e[3];
                l = e[4];
                h = e[5];
                d = e[6];
                f = e[7];
                p = e[8];
                m = e[9];
                v = e[10];
                _ = e[11];
                t[0] = o;
                t[1] = a;
                t[2] = c;
                t[3] = u;
                t[4] = l;
                t[5] = h;
                t[6] = d;
                t[7] = f;
                t[8] = p;
                t[9] = m;
                t[10] = v;
                t[11] = _;
                t[12] = o * n + l * r + p * s + e[12];
                t[13] = a * n + h * r + m * s + e[13];
                t[14] = c * n + d * r + v * s + e[14];
                t[15] = u * n + f * r + _ * s + e[15]
            }
            return t
        };
        f.scale = function (t, e, i) {
            var n = i[0],
                r = i[1],
                s = i[2];
            t[0] = e[0] * n;
            t[1] = e[1] * n;
            t[2] = e[2] * n;
            t[3] = e[3] * n;
            t[4] = e[4] * r;
            t[5] = e[5] * r;
            t[6] = e[6] * r;
            t[7] = e[7] * r;
            t[8] = e[8] * s;
            t[9] = e[9] * s;
            t[10] = e[10] * s;
            t[11] = e[11] * s;
            t[12] = e[12];
            t[13] = e[13];
            t[14] = e[14];
            t[15] = e[15];
            return t
        };
        f.rotate = function (t, i, n, r) {
            var s = r[0],
                o = r[1],
                a = r[2],
                c = Math.sqrt(s * s + o * o + a * a),
                u, l, h, d, f, p, m, v, _, g, b, x, y, E, w, A, C, M, S, T, R, F, k, L;
            if (Math.abs(c) < e) {
                return null
            }
            c = 1 / c;
            s *= c;
            o *= c;
            a *= c;
            u = Math.sin(n);
            l = Math.cos(n);
            h = 1 - l;
            d = i[0];
            f = i[1];
            p = i[2];
            m = i[3];
            v = i[4];
            _ = i[5];
            g = i[6];
            b = i[7];
            x = i[8];
            y = i[9];
            E = i[10];
            w = i[11];
            A = s * s * h + l;
            C = o * s * h + a * u;
            M = a * s * h - o * u;
            S = s * o * h - a * u;
            T = o * o * h + l;
            R = a * o * h + s * u;
            F = s * a * h + o * u;
            k = o * a * h - s * u;
            L = a * a * h + l;
            t[0] = d * A + v * C + x * M;
            t[1] = f * A + _ * C + y * M;
            t[2] = p * A + g * C + E * M;
            t[3] = m * A + b * C + w * M;
            t[4] = d * S + v * T + x * R;
            t[5] = f * S + _ * T + y * R;
            t[6] = p * S + g * T + E * R;
            t[7] = m * S + b * T + w * R;
            t[8] = d * F + v * k + x * L;
            t[9] = f * F + _ * k + y * L;
            t[10] = p * F + g * k + E * L;
            t[11] = m * F + b * k + w * L;
            if (i !== t) {
                t[12] = i[12];
                t[13] = i[13];
                t[14] = i[14];
                t[15] = i[15]
            }
            return t
        };
        f.rotateX = function (t, e, i) {
            var n = Math.sin(i),
                r = Math.cos(i),
                s = e[4],
                o = e[5],
                a = e[6],
                c = e[7],
                u = e[8],
                l = e[9],
                h = e[10],
                d = e[11];
            if (e !== t) {
                t[0] = e[0];
                t[1] = e[1];
                t[2] = e[2];
                t[3] = e[3];
                t[12] = e[12];
                t[13] = e[13];
                t[14] = e[14];
                t[15] = e[15]
            }
            t[4] = s * r + u * n;
            t[5] = o * r + l * n;
            t[6] = a * r + h * n;
            t[7] = c * r + d * n;
            t[8] = u * r - s * n;
            t[9] = l * r - o * n;
            t[10] = h * r - a * n;
            t[11] = d * r - c * n;
            return t
        };
        f.rotateY = function (t, e, i) {
            var n = Math.sin(i),
                r = Math.cos(i),
                s = e[0],
                o = e[1],
                a = e[2],
                c = e[3],
                u = e[8],
                l = e[9],
                h = e[10],
                d = e[11];
            if (e !== t) {
                t[4] = e[4];
                t[5] = e[5];
                t[6] = e[6];
                t[7] = e[7];
                t[12] = e[12];
                t[13] = e[13];
                t[14] = e[14];
                t[15] = e[15]
            }
            t[0] = s * r - u * n;
            t[1] = o * r - l * n;
            t[2] = a * r - h * n;
            t[3] = c * r - d * n;
            t[8] = s * n + u * r;
            t[9] = o * n + l * r;
            t[10] = a * n + h * r;
            t[11] = c * n + d * r;
            return t
        };
        f.rotateZ = function (t, e, i) {
            var n = Math.sin(i),
                r = Math.cos(i),
                s = e[0],
                o = e[1],
                a = e[2],
                c = e[3],
                u = e[4],
                l = e[5],
                h = e[6],
                d = e[7];
            if (e !== t) {
                t[8] = e[8];
                t[9] = e[9];
                t[10] = e[10];
                t[11] = e[11];
                t[12] = e[12];
                t[13] = e[13];
                t[14] = e[14];
                t[15] = e[15]
            }
            t[0] = s * r + u * n;
            t[1] = o * r + l * n;
            t[2] = a * r + h * n;
            t[3] = c * r + d * n;
            t[4] = u * r - s * n;
            t[5] = l * r - o * n;
            t[6] = h * r - a * n;
            t[7] = d * r - c * n;
            return t
        };
        f.fromRotationTranslation = function (t, e, i) {
            var n = e[0],
                r = e[1],
                s = e[2],
                o = e[3],
                a = n + n,
                c = r + r,
                u = s + s,
                l = n * a,
                h = n * c,
                d = n * u,
                f = r * c,
                p = r * u,
                m = s * u,
                v = o * a,
                _ = o * c,
                g = o * u;
            t[0] = 1 - (f + m);
            t[1] = h + g;
            t[2] = d - _;
            t[3] = 0;
            t[4] = h - g;
            t[5] = 1 - (l + m);
            t[6] = p + v;
            t[7] = 0;
            t[8] = d + _;
            t[9] = p - v;
            t[10] = 1 - (l + f);
            t[11] = 0;
            t[12] = i[0];
            t[13] = i[1];
            t[14] = i[2];
            t[15] = 1;
            return t
        };
        f.fromQuat = function (t, e) {
            var i = e[0],
                n = e[1],
                r = e[2],
                s = e[3],
                o = i + i,
                a = n + n,
                c = r + r,
                u = i * o,
                l = i * a,
                h = i * c,
                d = n * a,
                f = n * c,
                p = r * c,
                m = s * o,
                v = s * a,
                _ = s * c;
            t[0] = 1 - (d + p);
            t[1] = l + _;
            t[2] = h - v;
            t[3] = 0;
            t[4] = l - _;
            t[5] = 1 - (u + p);
            t[6] = f + m;
            t[7] = 0;
            t[8] = h + v;
            t[9] = f - m;
            t[10] = 1 - (u + d);
            t[11] = 0;
            t[12] = 0;
            t[13] = 0;
            t[14] = 0;
            t[15] = 1;
            return t
        };
        f.frustum = function (t, e, i, n, r, s, o) {
            var a = 1 / (i - e),
                c = 1 / (r - n),
                u = 1 / (s - o);
            t[0] = s * 2 * a;
            t[1] = 0;
            t[2] = 0;
            t[3] = 0;
            t[4] = 0;
            t[5] = s * 2 * c;
            t[6] = 0;
            t[7] = 0;
            t[8] = (i + e) * a;
            t[9] = (r + n) * c;
            t[10] = (o + s) * u;
            t[11] = -1;
            t[12] = 0;
            t[13] = 0;
            t[14] = o * s * 2 * u;
            t[15] = 0;
            return t
        };
        f.perspective = function (t, e, i, n, r) {
            var s = 1 / Math.tan(e / 2),
                o = 1 / (n - r);
            t[0] = s / i;
            t[1] = 0;
            t[2] = 0;
            t[3] = 0;
            t[4] = 0;
            t[5] = s;
            t[6] = 0;
            t[7] = 0;
            t[8] = 0;
            t[9] = 0;
            t[10] = (r + n) * o;
            t[11] = -1;
            t[12] = 0;
            t[13] = 0;
            t[14] = 2 * r * n * o;
            t[15] = 0;
            return t
        };
        f.ortho = function (t, e, i, n, r, s, o) {
            var a = 1 / (e - i),
                c = 1 / (n - r),
                u = 1 / (s - o);
            t[0] = -2 * a;
            t[1] = 0;
            t[2] = 0;
            t[3] = 0;
            t[4] = 0;
            t[5] = -2 * c;
            t[6] = 0;
            t[7] = 0;
            t[8] = 0;
            t[9] = 0;
            t[10] = 2 * u;
            t[11] = 0;
            t[12] = (e + i) * a;
            t[13] = (r + n) * c;
            t[14] = (o + s) * u;
            t[15] = 1;
            return t
        };
        f.lookAt = function (t, i, n, r) {
            var s, o, a, c, u, l, h, d, p, m, v = i[0],
                _ = i[1],
                g = i[2],
                b = r[0],
                x = r[1],
                y = r[2],
                E = n[0],
                w = n[1],
                A = n[2];
            if (Math.abs(v - E) < e && Math.abs(_ - w) < e && Math.abs(g - A) < e) {
                return f.identity(t)
            }
            h = v - E;
            d = _ - w;
            p = g - A;
            m = 1 / Math.sqrt(h * h + d * d + p * p);
            h *= m;
            d *= m;
            p *= m;
            s = x * p - y * d;
            o = y * h - b * p;
            a = b * d - x * h;
            m = Math.sqrt(s * s + o * o + a * a);
            if (!m) {
                s = 0;
                o = 0;
                a = 0
            } else {
                m = 1 / m;
                s *= m;
                o *= m;
                a *= m
            }
            c = d * a - p * o;
            u = p * s - h * a;
            l = h * o - d * s;
            m = Math.sqrt(c * c + u * u + l * l);
            if (!m) {
                c = 0;
                u = 0;
                l = 0
            } else {
                m = 1 / m;
                c *= m;
                u *= m;
                l *= m
            }
            t[0] = s;
            t[1] = c;
            t[2] = h;
            t[3] = 0;
            t[4] = o;
            t[5] = u;
            t[6] = d;
            t[7] = 0;
            t[8] = a;
            t[9] = l;
            t[10] = p;
            t[11] = 0;
            t[12] = -(s * v + o * _ + a * g);
            t[13] = -(c * v + u * _ + l * g);
            t[14] = -(h * v + d * _ + p * g);
            t[15] = 1;
            return t
        };
        f.str = function (t) {
            return "mat4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ", " + t[9] + ", " + t[10] + ", " + t[11] + ", " + t[12] + ", " + t[13] + ", " + t[14] + ", " + t[15] + ")"
        };
        if (typeof t !== "undefined") {
            t.mat4 = f
        }
        var m = {};
        var v = new Float32Array([0, 0, 0, 1]);
        m.create = function () {
            var t = new i(4);
            t[0] = 0;
            t[1] = 0;
            t[2] = 0;
            t[3] = 1;
            return t
        };
        m.clone = o.clone;
        m.fromValues = o.fromValues;
        m.copy = o.copy;
        m.set = o.set;
        m.identity = function (t) {
            t[0] = 0;
            t[1] = 0;
            t[2] = 0;
            t[3] = 1;
            return t
        };
        m.setAxisAngle = function (t, e, i) {
            i = i * .5;
            var n = Math.sin(i);
            t[0] = n * e[0];
            t[1] = n * e[1];
            t[2] = n * e[2];
            t[3] = Math.cos(i);
            return t
        };
        m.add = o.add;
        m.multiply = function (t, e, i) {
            var n = e[0],
                r = e[1],
                s = e[2],
                o = e[3],
                a = i[0],
                c = i[1],
                u = i[2],
                l = i[3];
            t[0] = n * l + o * a + r * u - s * c;
            t[1] = r * l + o * c + s * a - n * u;
            t[2] = s * l + o * u + n * c - r * a;
            t[3] = o * l - n * a - r * c - s * u;
            return t
        };
        m.mul = m.multiply;
        m.scale = o.scale;
        m.rotateX = function (t, e, i) {
            i *= .5;
            var n = e[0],
                r = e[1],
                s = e[2],
                o = e[3],
                a = Math.sin(i),
                c = Math.cos(i);
            t[0] = n * c + o * a;
            t[1] = r * c + s * a;
            t[2] = s * c - r * a;
            t[3] = o * c - n * a;
            return t
        };
        m.rotateY = function (t, e, i) {
            i *= .5;
            var n = e[0],
                r = e[1],
                s = e[2],
                o = e[3],
                a = Math.sin(i),
                c = Math.cos(i);
            t[0] = n * c - s * a;
            t[1] = r * c + o * a;
            t[2] = s * c + n * a;
            t[3] = o * c - r * a;
            return t
        };
        m.rotateZ = function (t, e, i) {
            i *= .5;
            var n = e[0],
                r = e[1],
                s = e[2],
                o = e[3],
                a = Math.sin(i),
                c = Math.cos(i);
            t[0] = n * c + r * a;
            t[1] = r * c - n * a;
            t[2] = s * c + o * a;
            t[3] = o * c - s * a;
            return t
        };
        m.calculateW = function (t, e) {
            var i = e[0],
                n = e[1],
                r = e[2];
            t[0] = i;
            t[1] = n;
            t[2] = r;
            t[3] = -Math.sqrt(Math.abs(1 - i * i - n * n - r * r));
            return t
        };
        m.dot = o.dot;
        m.lerp = o.lerp;
        m.slerp = function (t, e, i, n) {
            var r = e[0],
                s = e[1],
                o = e[2],
                a = e[3],
                c = i[0],
                u = i[1],
                l = i[2],
                h = i[3];
            var d = r * c + s * u + o * l + a * h,
                f, p, m, v;
            if (Math.abs(d) >= 1) {
                if (t !== e) {
                    t[0] = r;
                    t[1] = s;
                    t[2] = o;
                    t[3] = a
                }
                return t
            }
            f = Math.acos(d);
            p = Math.sqrt(1 - d * d);
            if (Math.abs(p) < .001) {
                t[0] = r * .5 + c * .5;
                t[1] = s * .5 + u * .5;
                t[2] = o * .5 + l * .5;
                t[3] = a * .5 + h * .5;
                return t
            }
            m = Math.sin((1 - n) * f) / p;
            v = Math.sin(n * f) / p;
            t[0] = r * m + c * v;
            t[1] = s * m + u * v;
            t[2] = o * m + l * v;
            t[3] = a * m + h * v;
            return t
        };
        m.invert = function (t, e) {
            var i = e[0],
                n = e[1],
                r = e[2],
                s = e[3],
                o = i * i + n * n + r * r + s * s,
                a = o ? 1 / o : 0;
            t[0] = -i * a;
            t[1] = -n * a;
            t[2] = -r * a;
            t[3] = s * a;
            return t
        };
        m.conjugate = function (t, e) {
            t[0] = -e[0];
            t[1] = -e[1];
            t[2] = -e[2];
            t[3] = e[3];
            return t
        };
        m.length = o.length;
        m.len = m.length;
        m.squaredLength = o.squaredLength;
        m.sqrLen = m.squaredLength;
        m.normalize = o.normalize;
        m.fromMat3 = function () {
            var t = [1, 2, 0];
            return function (e, i) {
                var n = i[0] + i[4] + i[8];
                var r;
                if (n > 0) {
                    r = Math.sqrt(n + 1);
                    e[3] = .5 * r;
                    r = .5 / r;
                    e[0] = (i[7] - i[5]) * r;
                    e[1] = (i[2] - i[6]) * r;
                    e[2] = (i[3] - i[1]) * r
                } else {
                    var s = 0;
                    if (i[4] > i[0]) s = 1;
                    if (i[8] > i[s * 3 + s]) s = 2;
                    var o = t[s];
                    var a = t[o];
                    r = Math.sqrt(i[s * 3 + s] - i[o * 3 + o] - i[a * 3 + a] + 1);
                    e[s] = .5 * r;
                    r = .5 / r;
                    e[3] = (i[a * 3 + o] - i[o * 3 + a]) * r;
                    e[o] = (i[o * 3 + s] + i[s * 3 + o]) * r;
                    e[a] = (i[a * 3 + s] + i[s * 3 + a]) * r
                }
                return e
            }
        }();
        m.str = function (t) {
            return "quat(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
        };
        if (typeof t !== "undefined") {
            t.quat = m
        }
    })(t.exports)
})();
var dat = dat || {};
dat.gui = dat.gui || {};
dat.utils = dat.utils || {};
dat.controllers = dat.controllers || {};
dat.dom = dat.dom || {};
dat.color = dat.color || {};
dat.utils.css = function () {
    return {
        load: function (t, e) {
            e = e || document;
            var i = e.createElement("link");
            i.type = "text/css";
            i.rel = "stylesheet";
            i.href = t;
            e.getElementsByTagName("head")[0].appendChild(i)
        },
        inject: function (t, e) {
            e = e || document;
            var i = document.createElement("style");
            i.type = "text/css";
            i.innerHTML = t;
            e.getElementsByTagName("head")[0].appendChild(i)
        }
    }
}();
dat.utils.common = function () {
    var t = Array.prototype.forEach,
        e = Array.prototype.slice;
    return {
        BREAK: {},
        extend: function (t) {
            this.each(e.call(arguments, 1), function (e) {
                for (var i in e) this.isUndefined(e[i]) || (t[i] = e[i])
            }, this);
            return t
        },
        defaults: function (t) {
            this.each(e.call(arguments, 1), function (e) {
                for (var i in e) this.isUndefined(t[i]) && (t[i] = e[i])
            }, this);
            return t
        },
        compose: function () {
            var t = e.call(arguments);
            return function () {
                for (var i = e.call(arguments), n = t.length - 1; 0 <= n; n--) i = [t[n].apply(this, i)];
                return i[0]
            }
        },
        each: function (e, i, n) {
            if (e)
                if (t && e.forEach && e.forEach === t) e.forEach(i, n);
                else if (e.length === e.length + 0)
                for (var r = 0, s = e.length; r < s && !(r in e && i.call(n, e[r], r) === this.BREAK); r++);
            else
                for (r in e)
                    if (i.call(n, e[r], r) === this.BREAK) break
        },
        defer: function (t) {
            setTimeout(t, 0)
        },
        toArray: function (t) {
            return t.toArray ? t.toArray() : e.call(t)
        },
        isUndefined: function (t) {
            return void 0 === t
        },
        isNull: function (t) {
            return null === t
        },
        isNaN: function (t) {
            return t !== t
        },
        isArray: Array.isArray || function (t) {
            return t.constructor === Array
        },
        isObject: function (t) {
            return t === Object(t)
        },
        isNumber: function (t) {
            return t === t + 0
        },
        isString: function (t) {
            return t === t + ""
        },
        isBoolean: function (t) {
            return !1 === t || !0 === t
        },
        isFunction: function (t) {
            return "[object Function]" === Object.prototype.toString.call(t)
        }
    }
}();
dat.controllers.Controller = function (t) {
    var e = function (t, e) {
        this.initialValue = t[e];
        this.domElement = document.createElement("div");
        this.object = t;
        this.property = e;
        this.__onFinishChange = this.__onChange = void 0
    };
    t.extend(e.prototype, {
        onChange: function (t) {
            this.__onChange = t;
            return this
        },
        onFinishChange: function (t) {
            this.__onFinishChange = t;
            return this
        },
        setValue: function (t) {
            this.object[this.property] = t;
            this.__onChange && this.__onChange.call(this, t);
            this.updateDisplay();
            return this
        },
        getValue: function () {
            return this.object[this.property]
        },
        updateDisplay: function () {
            return this
        },
        isModified: function () {
            return this.initialValue !== this.getValue()
        }
    });
    return e
}(dat.utils.common);
dat.dom.dom = function (t) {
    function e(e) {
        if ("0" === e || t.isUndefined(e)) return 0;
        e = e.match(n);
        return t.isNull(e) ? 0 : parseFloat(e[1])
    }
    var i = {};
    t.each({
        HTMLEvents: ["change"],
        MouseEvents: ["click", "mousemove", "mousedown", "mouseup", "mouseover"],
        KeyboardEvents: ["keydown"]
    }, function (e, n) {
        t.each(e, function (t) {
            i[t] = n
        })
    });
    var n = /(\d+(\.\d+)?)px/,
        r = {
            makeSelectable: function (t, e) {
                void 0 !== t && void 0 !== t.style && (t.onselectstart = e ? function () {
                    return !1
                } : function () {}, t.style.MozUserSelect = e ? "auto" : "none", t.style.KhtmlUserSelect = e ? "auto" : "none", t.unselectable = e ? "on" : "off")
            },
            makeFullscreen: function (e, i, n) {
                t.isUndefined(i) && (i = !0);
                t.isUndefined(n) && (n = !0);
                e.style.position = "absolute";
                i && (e.style.left = 0, e.style.right = 0);
                n && (e.style.top = 0, e.style.bottom = 0)
            },
            fakeEvent: function (e, n, r, s) {
                r = r || {};
                var o = i[n];
                if (!o) throw Error("Event type " + n + " not supported.");
                var a = document.createEvent(o);
                switch (o) {
                    case "MouseEvents":
                        a.initMouseEvent(n, r.bubbles || !1, r.cancelable || !0, window, r.clickCount || 1, 0, 0, r.x || r.clientX || 0, r.y || r.clientY || 0, !1, !1, !1, !1, 0, null);
                        break;
                    case "KeyboardEvents":
                        o = a.initKeyboardEvent || a.initKeyEvent;
                        t.defaults(r, {
                            cancelable: !0,
                            ctrlKey: !1,
                            altKey: !1,
                            shiftKey: !1,
                            metaKey: !1,
                            keyCode: void 0,
                            charCode: void 0
                        });
                        o(n, r.bubbles || !1, r.cancelable, window, r.ctrlKey, r.altKey, r.shiftKey, r.metaKey, r.keyCode, r.charCode);
                        break;
                    default:
                        a.initEvent(n, r.bubbles || !1, r.cancelable || !0)
                }
                t.defaults(a, s);
                e.dispatchEvent(a)
            },
            bind: function (t, e, i, n) {
                t.addEventListener ? t.addEventListener(e, i, n || !1) : t.attachEvent && t.attachEvent("on" + e, i);
                return r
            },
            unbind: function (t, e, i, n) {
                t.removeEventListener ? t.removeEventListener(e, i, n || !1) : t.detachEvent && t.detachEvent("on" + e, i);
                return r
            },
            addClass: function (t, e) {
                if (void 0 === t.className) t.className = e;
                else if (t.className !== e) {
                    var i = t.className.split(/ +/); - 1 == i.indexOf(e) && (i.push(e), t.className = i.join(" ").replace(/^\s+/, "").replace(/\s+$/, ""))
                }
                return r
            },
            removeClass: function (t, e) {
                if (e) {
                    if (void 0 !== t.className)
                        if (t.className === e) t.removeAttribute("class");
                        else {
                            var i = t.className.split(/ +/),
                                n = i.indexOf(e); - 1 != n && (i.splice(n, 1), t.className = i.join(" "))
                        }
                } else t.className = void 0;
                return r
            },
            hasClass: function (t, e) {
                return new RegExp("(?:^|\\s+)" + e + "(?:\\s+|$)").test(t.className) || !1
            },
            getWidth: function (t) {
                t = getComputedStyle(t);
                return e(t["border-left-width"]) + e(t["border-right-width"]) + e(t["padding-left"]) + e(t["padding-right"]) + e(t.width)
            },
            getHeight: function (t) {
                t = getComputedStyle(t);
                return e(t["border-top-width"]) + e(t["border-bottom-width"]) + e(t["padding-top"]) + e(t["padding-bottom"]) + e(t.height)
            },
            getOffset: function (t) {
                var e = {
                    left: 0,
                    top: 0
                };
                if (t.offsetParent) {
                    do e.left += t.offsetLeft, e.top += t.offsetTop; while (t = t.offsetParent)
                }
                return e
            },
            isActive: function (t) {
                return t === document.activeElement && (t.type || t.href)
            }
        };
    return r
}(dat.utils.common);
dat.controllers.OptionController = function (t, e, i) {
    var n = function (t, r, s) {
        n.superclass.call(this, t, r);
        var o = this;
        this.__select = document.createElement("select");
        if (i.isArray(s)) {
            var a = {};
            i.each(s, function (t) {
                a[t] = t
            });
            s = a
        }
        i.each(s, function (t, e) {
            var i = document.createElement("option");
            i.innerHTML = e;
            i.setAttribute("value", t);
            o.__select.appendChild(i)
        });
        this.updateDisplay();
        e.bind(this.__select, "change", function () {
            o.setValue(this.options[this.selectedIndex].value)
        });
        this.domElement.appendChild(this.__select)
    };
    n.superclass = t;
    i.extend(n.prototype, t.prototype, {
        setValue: function (t) {
            t = n.superclass.prototype.setValue.call(this, t);
            this.__onFinishChange && this.__onFinishChange.call(this, this.getValue());
            return t
        },
        updateDisplay: function () {
            this.__select.value = this.getValue();
            return n.superclass.prototype.updateDisplay.call(this)
        }
    });
    return n
}(dat.controllers.Controller, dat.dom.dom, dat.utils.common);
dat.controllers.NumberController = function (t, e) {
    function i(t) {
        t = t.toString();
        return -1 < t.indexOf(".") ? t.length - t.indexOf(".") - 1 : 0
    }
    var n = function (t, r, s) {
        n.superclass.call(this, t, r);
        s = s || {};
        this.__min = s.min;
        this.__max = s.max;
        this.__step = s.step;
        e.isUndefined(this.__step) ? this.__impliedStep = 0 == this.initialValue ? 1 : Math.pow(10, Math.floor(Math.log(this.initialValue) / Math.LN10)) / 10 : this.__impliedStep = this.__step;
        this.__precision = i(this.__impliedStep)
    };
    n.superclass = t;
    e.extend(n.prototype, t.prototype, {
        setValue: function (t) {
            void 0 !== this.__min && t < this.__min ? t = this.__min : void 0 !== this.__max && t > this.__max && (t = this.__max);
            void 0 !== this.__step && 0 != t % this.__step && (t = Math.round(t / this.__step) * this.__step);
            return n.superclass.prototype.setValue.call(this, t)
        },
        min: function (t) {
            this.__min = t;
            return this
        },
        max: function (t) {
            this.__max = t;
            return this
        },
        step: function (t) {
            this.__impliedStep = this.__step = t;
            this.__precision = i(t);
            return this
        }
    });
    return n
}(dat.controllers.Controller, dat.utils.common);
dat.controllers.NumberControllerBox = function (t, e, i) {
    var n = function (t, r, s) {
        function o() {
            var t = parseFloat(u.__input.value);
            i.isNaN(t) || u.setValue(t)
        }

        function a(t) {
            var e = l - t.clientY;
            u.setValue(u.getValue() + e * u.__impliedStep);
            l = t.clientY
        }

        function c() {
            e.unbind(window, "mousemove", a);
            e.unbind(window, "mouseup", c)
        }
        this.__truncationSuspended = !1;
        n.superclass.call(this, t, r, s);
        var u = this,
            l;
        this.__input = document.createElement("input");
        this.__input.setAttribute("type", "text");
        e.bind(this.__input, "change", o);
        e.bind(this.__input, "blur", function () {
            o();
            u.__onFinishChange && u.__onFinishChange.call(u, u.getValue())
        });
        e.bind(this.__input, "mousedown", function (t) {
            e.bind(window, "mousemove", a);
            e.bind(window, "mouseup", c);
            l = t.clientY
        });
        e.bind(this.__input, "keydown", function (t) {
            13 === t.keyCode && (u.__truncationSuspended = !0, this.blur(), u.__truncationSuspended = !1)
        });
        this.updateDisplay();
        this.domElement.appendChild(this.__input)
    };
    n.superclass = t;
    i.extend(n.prototype, t.prototype, {
        updateDisplay: function () {
            var t = this.__input,
                e;
            if (this.__truncationSuspended) e = this.getValue();
            else {
                e = this.getValue();
                var i = Math.pow(10, this.__precision);
                e = Math.round(e * i) / i
            }
            t.value = e;
            return n.superclass.prototype.updateDisplay.call(this)
        }
    });
    return n
}(dat.controllers.NumberController, dat.dom.dom, dat.utils.common);
dat.controllers.NumberControllerSlider = function (t, e, i, n, r) {
    function s(t, e, i, n, r) {
        return n + (t - e) / (i - e) * (r - n)
    }
    var o = function (t, i, n, r, a) {
        function c(t) {
            t.preventDefault();
            var i = e.getOffset(l.__background),
                n = e.getWidth(l.__background);
            l.setValue(s(t.clientX, i.left, i.left + n, l.__min, l.__max));
            return !1
        }

        function u() {
            e.unbind(window, "mousemove", c);
            e.unbind(window, "mouseup", u);
            l.__onFinishChange && l.__onFinishChange.call(l, l.getValue())
        }
        o.superclass.call(this, t, i, {
            min: n,
            max: r,
            step: a
        });
        var l = this;
        this.__background = document.createElement("div");
        this.__foreground = document.createElement("div");
        e.bind(this.__background, "mousedown", function (t) {
            e.bind(window, "mousemove", c);
            e.bind(window, "mouseup", u);
            c(t)
        });
        e.addClass(this.__background, "slider");
        e.addClass(this.__foreground, "slider-fg");
        this.updateDisplay();
        this.__background.appendChild(this.__foreground);
        this.domElement.appendChild(this.__background)
    };
    o.superclass = t;
    o.useDefaultStyles = function () {
        i.inject(r)
    };
    n.extend(o.prototype, t.prototype, {
        updateDisplay: function () {
            var t = (this.getValue() - this.__min) / (this.__max - this.__min);
            this.__foreground.style.width = 100 * t + "%";
            return o.superclass.prototype.updateDisplay.call(this)
        }
    });
    return o
}(dat.controllers.NumberController, dat.dom.dom, dat.utils.css, dat.utils.common, "/**\n * dat-gui JavaScript Controller Library\n * http://code.google.com/p/dat-gui\n *\n * Copyright 2011 Data Arts Team, Google Creative Lab\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n */\n\n.slider {\n  box-shadow: inset 0 2px 4px rgba(0,0,0,0.15);\n  height: 1em;\n  border-radius: 1em;\n  background-color: #eee;\n  padding: 0 0.5em;\n  overflow: hidden;\n}\n\n.slider-fg {\n  padding: 1px 0 2px 0;\n  background-color: #aaa;\n  height: 1em;\n  margin-left: -0.5em;\n  padding-right: 0.5em;\n  border-radius: 1em 0 0 1em;\n}\n\n.slider-fg:after {\n  display: inline-block;\n  border-radius: 1em;\n  background-color: #fff;\n  border:  1px solid #aaa;\n  content: '';\n  float: right;\n  margin-right: -1em;\n  margin-top: -1px;\n  height: 0.9em;\n  width: 0.9em;\n}");
dat.controllers.FunctionController = function (t, e, i) {
    var n = function (t, i, r) {
        n.superclass.call(this, t, i);
        var s = this;
        this.__button = document.createElement("div");
        this.__button.innerHTML = void 0 === r ? "Fire" : r;
        e.bind(this.__button, "click", function (t) {
            t.preventDefault();
            s.fire();
            return !1
        });
        e.addClass(this.__button, "button");
        this.domElement.appendChild(this.__button)
    };
    n.superclass = t;
    i.extend(n.prototype, t.prototype, {
        fire: function () {
            this.__onChange && this.__onChange.call(this);
            this.getValue().call(this.object);
            this.__onFinishChange && this.__onFinishChange.call(this, this.getValue())
        }
    });
    return n
}(dat.controllers.Controller, dat.dom.dom, dat.utils.common);
dat.controllers.BooleanController = function (t, e, i) {
    var n = function (t, i) {
        n.superclass.call(this, t, i);
        var r = this;
        this.__prev = this.getValue();
        this.__checkbox = document.createElement("input");
        this.__checkbox.setAttribute("type", "checkbox");
        e.bind(this.__checkbox, "change", function () {
            r.setValue(!r.__prev)
        }, !1);
        this.domElement.appendChild(this.__checkbox);
        this.updateDisplay()
    };
    n.superclass = t;
    i.extend(n.prototype, t.prototype, {
        setValue: function (t) {
            t = n.superclass.prototype.setValue.call(this, t);
            this.__onFinishChange && this.__onFinishChange.call(this, this.getValue());
            this.__prev = this.getValue();
            return t
        },
        updateDisplay: function () {
            !0 === this.getValue() ? (this.__checkbox.setAttribute("checked", "checked"), this.__checkbox.checked = !0) : this.__checkbox.checked = !1;
            return n.superclass.prototype.updateDisplay.call(this)
        }
    });
    return n
}(dat.controllers.Controller, dat.dom.dom, dat.utils.common);
dat.color.toString = function (t) {
    return function (e) {
        if (1 == e.a || t.isUndefined(e.a)) {
            for (e = e.hex.toString(16); 6 > e.length;) e = "0" + e;
            return "#" + e
        }
        return "rgba(" + Math.round(e.r) + "," + Math.round(e.g) + "," + Math.round(e.b) + "," + e.a + ")"
    }
}(dat.utils.common);
dat.color.interpret = function (t, e) {
    var i, n, r = [{
        litmus: e.isString,
        conversions: {
            THREE_CHAR_HEX: {
                read: function (t) {
                    t = t.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
                    return null === t ? !1 : {
                        space: "HEX",
                        hex: parseInt("0x" + t[1].toString() + t[1].toString() + t[2].toString() + t[2].toString() + t[3].toString() + t[3].toString())
                    }
                },
                write: t
            },
            SIX_CHAR_HEX: {
                read: function (t) {
                    t = t.match(/^#([A-F0-9]{6})$/i);
                    return null === t ? !1 : {
                        space: "HEX",
                        hex: parseInt("0x" + t[1].toString())
                    }
                },
                write: t
            },
            CSS_RGB: {
                read: function (t) {
                    t = t.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
                    return null === t ? !1 : {
                        space: "RGB",
                        r: parseFloat(t[1]),
                        g: parseFloat(t[2]),
                        b: parseFloat(t[3])
                    }
                },
                write: t
            },
            CSS_RGBA: {
                read: function (t) {
                    t = t.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\,\s*(.+)\s*\)/);
                    return null === t ? !1 : {
                        space: "RGB",
                        r: parseFloat(t[1]),
                        g: parseFloat(t[2]),
                        b: parseFloat(t[3]),
                        a: parseFloat(t[4])
                    }
                },
                write: t
            }
        }
    }, {
        litmus: e.isNumber,
        conversions: {
            HEX: {
                read: function (t) {
                    return {
                        space: "HEX",
                        hex: t,
                        conversionName: "HEX"
                    }
                },
                write: function (t) {
                    return t.hex
                }
            }
        }
    }, {
        litmus: e.isArray,
        conversions: {
            RGB_ARRAY: {
                read: function (t) {
                    return 3 != t.length ? !1 : {
                        space: "RGB",
                        r: t[0],
                        g: t[1],
                        b: t[2]
                    }
                },
                write: function (t) {
                    return [t.r, t.g, t.b]
                }
            },
            RGBA_ARRAY: {
                read: function (t) {
                    return 4 != t.length ? !1 : {
                        space: "RGB",
                        r: t[0],
                        g: t[1],
                        b: t[2],
                        a: t[3]
                    }
                },
                write: function (t) {
                    return [t.r, t.g, t.b, t.a]
                }
            }
        }
    }, {
        litmus: e.isObject,
        conversions: {
            RGBA_OBJ: {
                read: function (t) {
                    return e.isNumber(t.r) && e.isNumber(t.g) && e.isNumber(t.b) && e.isNumber(t.a) ? {
                        space: "RGB",
                        r: t.r,
                        g: t.g,
                        b: t.b,
                        a: t.a
                    } : !1
                },
                write: function (t) {
                    return {
                        r: t.r,
                        g: t.g,
                        b: t.b,
                        a: t.a
                    }
                }
            },
            RGB_OBJ: {
                read: function (t) {
                    return e.isNumber(t.r) && e.isNumber(t.g) && e.isNumber(t.b) ? {
                        space: "RGB",
                        r: t.r,
                        g: t.g,
                        b: t.b
                    } : !1
                },
                write: function (t) {
                    return {
                        r: t.r,
                        g: t.g,
                        b: t.b
                    }
                }
            },
            HSVA_OBJ: {
                read: function (t) {
                    return e.isNumber(t.h) && e.isNumber(t.s) && e.isNumber(t.v) && e.isNumber(t.a) ? {
                        space: "HSV",
                        h: t.h,
                        s: t.s,
                        v: t.v,
                        a: t.a
                    } : !1
                },
                write: function (t) {
                    return {
                        h: t.h,
                        s: t.s,
                        v: t.v,
                        a: t.a
                    }
                }
            },
            HSV_OBJ: {
                read: function (t) {
                    return e.isNumber(t.h) && e.isNumber(t.s) && e.isNumber(t.v) ? {
                        space: "HSV",
                        h: t.h,
                        s: t.s,
                        v: t.v
                    } : !1
                },
                write: function (t) {
                    return {
                        h: t.h,
                        s: t.s,
                        v: t.v
                    }
                }
            }
        }
    }];
    return function () {
        n = !1;
        var t = 1 < arguments.length ? e.toArray(arguments) : arguments[0];
        e.each(r, function (r) {
            if (r.litmus(t)) return e.each(r.conversions, function (r, s) {
                i = r.read(t);
                if (!1 === n && !1 !== i) return n = i, i.conversionName = s, i.conversion = r, e.BREAK
            }), e.BREAK
        });
        return n
    }
}(dat.color.toString, dat.utils.common);
dat.GUI = dat.gui.GUI = function (t, e, i, n, r, s, o, a, c, u, l, h, d, f, p) {
    function m(t, e, i, s) {
        if (void 0 === e[i]) throw Error("Object " + e + ' has no property "' + i + '"');
        s.color ? e = new l(e, i) : (e = [e, i].concat(s.factoryArgs), e = n.apply(t, e));
        s.before instanceof r && (s.before = s.before.__li);
        g(t, e);
        f.addClass(e.domElement, "c");
        i = document.createElement("span");
        f.addClass(i, "property-name");
        i.innerHTML = e.property;
        var o = document.createElement("div");
        o.appendChild(i);
        o.appendChild(e.domElement);
        s = v(t, o, s.before);
        f.addClass(s, L.CLASS_CONTROLLER_ROW);
        f.addClass(s, typeof e.getValue());
        _(t, s, e);
        t.__controllers.push(e);
        return e
    }

    function v(t, e, i) {
        var n = document.createElement("li");
        e && n.appendChild(e);
        i ? t.__ul.insertBefore(n, params.before) : t.__ul.appendChild(n);
        t.onResize();
        return n
    }

    function _(t, e, i) {
        i.__li = e;
        i.__gui = t;
        p.extend(i, {
            options: function (e) {
                if (1 < arguments.length) return i.remove(), m(t, i.object, i.property, {
                    before: i.__li.nextElementSibling,
                    factoryArgs: [p.toArray(arguments)]
                });
                if (p.isArray(e) || p.isObject(e)) return i.remove(), m(t, i.object, i.property, {
                    before: i.__li.nextElementSibling,
                    factoryArgs: [e]
                })
            },
            name: function (t) {
                i.__li.firstElementChild.firstElementChild.innerHTML = t;
                return i
            },
            listen: function () {
                i.__gui.listen(i);
                return i
            },
            remove: function () {
                i.__gui.remove(i);
                return i
            }
        });
        if (i instanceof c) {
            var n = new a(i.object, i.property, {
                min: i.__min,
                max: i.__max,
                step: i.__step
            });
            p.each(["updateDisplay", "onChange", "onFinishChange"], function (t) {
                var e = i[t],
                    r = n[t];
                i[t] = n[t] = function () {
                    var t = Array.prototype.slice.call(arguments);
                    e.apply(i, t);
                    return r.apply(n, t)
                }
            });
            f.addClass(e, "has-slider");
            i.domElement.insertBefore(n.domElement, i.domElement.firstElementChild)
        } else if (i instanceof a) {
            var r = function (e) {
                return p.isNumber(i.__min) && p.isNumber(i.__max) ? (i.remove(), m(t, i.object, i.property, {
                    before: i.__li.nextElementSibling,
                    factoryArgs: [i.__min, i.__max, i.__step]
                })) : e
            };
            i.min = p.compose(r, i.min);
            i.max = p.compose(r, i.max)
        } else i instanceof s ? (f.bind(e, "click", function () {
            f.fakeEvent(i.__checkbox, "click")
        }), f.bind(i.__checkbox, "click", function (t) {
            t.stopPropagation()
        })) : i instanceof o ? (f.bind(e, "click", function () {
            f.fakeEvent(i.__button, "click")
        }), f.bind(e, "mouseover", function () {
            f.addClass(i.__button, "hover")
        }), f.bind(e, "mouseout", function () {
            f.removeClass(i.__button, "hover")
        })) : i instanceof l && (f.addClass(e, "color"), i.updateDisplay = p.compose(function (t) {
            e.style.borderLeftColor = i.__color.toString();
            return t
        }, i.updateDisplay), i.updateDisplay());
        i.setValue = p.compose(function (e) {
            t.getRoot().__preset_select && i.isModified() && A(t.getRoot(), !0);
            return e
        }, i.setValue)
    }

    function g(t, e) {
        var i = t.getRoot(),
            n = i.__rememberedObjects.indexOf(e.object);
        if (-1 != n) {
            var r = i.__rememberedObjectIndecesToControllers[n];
            void 0 === r && (r = {}, i.__rememberedObjectIndecesToControllers[n] = r);
            r[e.property] = e;
            if (i.load && i.load.remembered) {
                i = i.load.remembered;
                if (i[t.preset]) i = i[t.preset];
                else if (i.Default) i = i.Default;
                else return;
                i[n] && void 0 !== i[n][e.property] && (n = i[n][e.property], e.initialValue = n, e.setValue(n))
            }
        }
    }

    function b(t) {
        var e = t.__save_row = document.createElement("li");
        f.addClass(t.domElement, "has-save");
        t.__ul.insertBefore(e, t.__ul.firstChild);
        f.addClass(e, "save-row");
        var i = document.createElement("span");
        i.innerHTML = "&nbsp;";
        f.addClass(i, "button gears");
        var n = document.createElement("span");
        n.innerHTML = "Save";
        f.addClass(n, "button");
        f.addClass(n, "save");
        var r = document.createElement("span");
        r.innerHTML = "New";
        f.addClass(r, "button");
        f.addClass(r, "save-as");
        var s = document.createElement("span");
        s.innerHTML = "Revert";
        f.addClass(s, "button");
        f.addClass(s, "revert");
        var o = t.__preset_select = document.createElement("select");
        t.load && t.load.remembered ? p.each(t.load.remembered, function (e, i) {
            w(t, i, i == t.preset)
        }) : w(t, "Default", !1);
        f.bind(o, "change", function () {
            for (var e = 0; e < t.__preset_select.length; e++) t.__preset_select[e].innerHTML = t.__preset_select[e].value;
            t.preset = this.value
        });
        e.appendChild(o);
        e.appendChild(i);
        e.appendChild(n);
        e.appendChild(r);
        e.appendChild(s);
        if (M) {
            var a = function () {
                    c.style.display = t.useLocalStorage ? "block" : "none"
                },
                e = document.getElementById("dg-save-locally"),
                c = document.getElementById("dg-local-explain");
            e.style.display = "block";
            e = document.getElementById("dg-local-storage");
            "true" === localStorage.getItem(document.location.href + ".isLocal") && e.setAttribute("checked", "checked");
            a();
            f.bind(e, "change", function () {
                t.useLocalStorage = !t.useLocalStorage;
                a()
            })
        }
        var u = document.getElementById("dg-new-constructor");
        f.bind(u, "keydown", function (t) {
            !t.metaKey || 67 !== t.which && 67 != t.keyCode || S.hide()
        });
        f.bind(i, "click", function () {
            u.innerHTML = JSON.stringify(t.getSaveObject(), void 0, 2);
            S.show();
            u.focus();
            u.select()
        });
        f.bind(n, "click", function () {
            t.save()
        });
        f.bind(r, "click", function () {
            var e = prompt("Enter a new preset name.");
            e && t.saveAs(e)
        });
        f.bind(s, "click", function () {
            t.revert()
        })
    }

    function x(t) {
        function e(e) {
            e.preventDefault();
            r = e.clientX;
            f.addClass(t.__closeButton, L.CLASS_DRAG);
            f.bind(window, "mousemove", i);
            f.bind(window, "mouseup", n);
            return !1
        }

        function i(e) {
            e.preventDefault();
            t.width += r - e.clientX;
            t.onResize();
            r = e.clientX;
            return !1
        }

        function n() {
            f.removeClass(t.__closeButton, L.CLASS_DRAG);
            f.unbind(window, "mousemove", i);
            f.unbind(window, "mouseup", n)
        }
        t.__resize_handle = document.createElement("div");
        p.extend(t.__resize_handle.style, {
            width: "6px",
            marginLeft: "-3px",
            height: "200px",
            cursor: "ew-resize",
            position: "absolute"
        });
        var r;
        f.bind(t.__resize_handle, "mousedown", e);
        f.bind(t.__closeButton, "mousedown", e);
        t.domElement.insertBefore(t.__resize_handle, t.domElement.firstElementChild)
    }

    function y(t, e) {
        t.domElement.style.width = e + "px";
        t.__save_row && t.autoPlace && (t.__save_row.style.width = e + "px");
        t.__closeButton && (t.__closeButton.style.width = e + "px")
    }

    function E(t, e) {
        var i = {};
        p.each(t.__rememberedObjects, function (n, r) {
            var s = {};
            p.each(t.__rememberedObjectIndecesToControllers[r], function (t, i) {
                s[i] = e ? t.initialValue : t.getValue()
            });
            i[r] = s
        });
        return i
    }

    function w(t, e, i) {
        var n = document.createElement("option");
        n.innerHTML = e;
        n.value = e;
        t.__preset_select.appendChild(n);
        i && (t.__preset_select.selectedIndex = t.__preset_select.length - 1)
    }

    function A(t, e) {
        var i = t.__preset_select[t.__preset_select.selectedIndex];
        i.innerHTML = e ? i.value + "*" : i.value
    }

    function C(t) {
        0 != t.length && h(function () {
            C(t)
        });
        p.each(t, function (t) {
            t.updateDisplay()
        })
    }
    t.inject(i);
    var M;
    try {
        M = "localStorage" in window && null !== window.localStorage
    } catch (t) {
        M = !1
    }
    var S, T = !0,
        R, F = !1,
        k = [],
        L = function (t) {
            function e() {
                var t = i.getRoot();
                t.width += 1;
                p.defer(function () {
                    --t.width
                })
            }
            var i = this;
            this.domElement = document.createElement("div");
            this.__ul = document.createElement("ul");
            this.domElement.appendChild(this.__ul);
            f.addClass(this.domElement, "dg");
            this.__folders = {};
            this.__controllers = [];
            this.__rememberedObjects = [];
            this.__rememberedObjectIndecesToControllers = [];
            this.__listening = [];
            t = t || {};
            t = p.defaults(t, {
                autoPlace: !0,
                width: L.DEFAULT_WIDTH
            });
            t = p.defaults(t, {
                resizable: t.autoPlace,
                hideable: t.autoPlace
            });
            p.isUndefined(t.load) ? t.load = {
                preset: "Default"
            } : t.preset && (t.load.preset = t.preset);
            p.isUndefined(t.parent) && t.hideable && k.push(this);
            t.resizable = p.isUndefined(t.parent) && t.resizable;
            t.autoPlace && p.isUndefined(t.scrollable) && (t.scrollable = !0);
            var n = M && "true" === localStorage.getItem(document.location.href + ".isLocal"),
                r;
            Object.defineProperties(this, {
                parent: {
                    get: function () {
                        return t.parent
                    }
                },
                scrollable: {
                    get: function () {
                        return t.scrollable
                    }
                },
                autoPlace: {
                    get: function () {
                        return t.autoPlace
                    }
                },
                preset: {
                    get: function () {
                        return i.parent ? i.getRoot().preset : t.load.preset
                    },
                    set: function (e) {
                        i.parent ? i.getRoot().preset = e : t.load.preset = e;
                        for (e = 0; e < this.__preset_select.length; e++) this.__preset_select[e].value == this.preset && (this.__preset_select.selectedIndex = e);
                        i.revert()
                    }
                },
                width: {
                    get: function () {
                        return t.width
                    },
                    set: function (e) {
                        t.width = e;
                        y(i, e)
                    }
                },
                name: {
                    get: function () {
                        return t.name
                    },
                    set: function (e) {
                        t.name = e;
                        o && (o.innerHTML = t.name)
                    }
                },
                closed: {
                    get: function () {
                        return t.closed
                    },
                    set: function (e) {
                        t.closed = e;
                        t.closed ? f.addClass(i.__ul, L.CLASS_CLOSED) : f.removeClass(i.__ul, L.CLASS_CLOSED);
                        this.onResize();
                        i.__closeButton && (i.__closeButton.innerHTML = e ? L.TEXT_OPEN : L.TEXT_CLOSED)
                    }
                },
                load: {
                    get: function () {
                        return t.load
                    }
                },
                useLocalStorage: {
                    get: function () {
                        return n
                    },
                    set: function (t) {
                        M && ((n = t) ? f.bind(window, "unload", r) : f.unbind(window, "unload", r), localStorage.setItem(document.location.href + ".isLocal", t))
                    }
                }
            });
            if (p.isUndefined(t.parent)) {
                t.closed = !1;
                f.addClass(this.domElement, L.CLASS_MAIN);
                f.makeSelectable(this.domElement, !1);
                if (M && n) {
                    i.useLocalStorage = !0;
                    var s = localStorage.getItem(document.location.href + ".gui");
                    s && (t.load = JSON.parse(s))
                }
                this.__closeButton = document.createElement("div");
                this.__closeButton.innerHTML = L.TEXT_CLOSED;
                f.addClass(this.__closeButton, L.CLASS_CLOSE_BUTTON);
                this.domElement.appendChild(this.__closeButton);
                f.bind(this.__closeButton, "click", function () {
                    i.closed = !i.closed
                })
            } else {
                void 0 === t.closed && (t.closed = !0);
                var o = document.createTextNode(t.name);
                f.addClass(o, "controller-name");
                s = v(i, o);
                f.addClass(this.__ul, L.CLASS_CLOSED);
                f.addClass(s, "title");
                f.bind(s, "click", function (t) {
                    t.preventDefault();
                    i.closed = !i.closed;
                    return !1
                });
                t.closed || (this.closed = !1)
            }
            t.autoPlace && (p.isUndefined(t.parent) && (T && (R = document.createElement("div"), f.addClass(R, "dg"), f.addClass(R, L.CLASS_AUTO_PLACE_CONTAINER), document.body.appendChild(R), T = !1), R.appendChild(this.domElement), f.addClass(this.domElement, L.CLASS_AUTO_PLACE)), this.parent || y(i, t.width));
            f.bind(window, "resize", function () {
                i.onResize()
            });
            f.bind(this.__ul, "webkitTransitionEnd", function () {
                i.onResize()
            });
            f.bind(this.__ul, "transitionend", function () {
                i.onResize()
            });
            f.bind(this.__ul, "oTransitionEnd", function () {
                i.onResize()
            });
            this.onResize();
            t.resizable && x(this);
            this.saveToLocalStorageIfPossible = r = function () {
                M && "true" === localStorage.getItem(document.location.href + ".isLocal") && localStorage.setItem(document.location.href + ".gui", JSON.stringify(i.getSaveObject()))
            };
            i.getRoot();
            t.parent || e()
        };
    L.toggleHide = function () {
        F = !F;
        p.each(k, function (t) {
            t.domElement.style.zIndex = F ? -999 : 999;
            t.domElement.style.opacity = F ? 0 : 1
        })
    };
    L.CLASS_AUTO_PLACE = "a";
    L.CLASS_AUTO_PLACE_CONTAINER = "ac";
    L.CLASS_MAIN = "main";
    L.CLASS_CONTROLLER_ROW = "cr";
    L.CLASS_TOO_TALL = "taller-than-window";
    L.CLASS_CLOSED = "closed";
    L.CLASS_CLOSE_BUTTON = "close-button";
    L.CLASS_DRAG = "drag";
    L.DEFAULT_WIDTH = 245;
    L.TEXT_CLOSED = "Close Controls";
    L.TEXT_OPEN = "Open Controls";
    f.bind(window, "keydown", function (t) {
        "text" === document.activeElement.type || 72 !== t.which && 72 != t.keyCode || L.toggleHide()
    }, !1);
    p.extend(L.prototype, {
        add: function (t, e) {
            return m(this, t, e, {
                factoryArgs: Array.prototype.slice.call(arguments, 2)
            })
        },
        addColor: function (t, e) {
            return m(this, t, e, {
                color: !0
            })
        },
        remove: function (t) {
            this.__ul.removeChild(t.__li);
            this.__controllers.splice(this.__controllers.indexOf(t), 1);
            var e = this;
            p.defer(function () {
                e.onResize()
            })
        },
        destroy: function () {
            this.autoPlace && R.removeChild(this.domElement)
        },
        addFolder: function (t) {
            if (void 0 !== this.__folders[t]) throw Error('You already have a folder in this GUI by the name "' + t + '"');
            var e = {
                name: t,
                parent: this
            };
            e.autoPlace = this.autoPlace;
            this.load && this.load.folders && this.load.folders[t] && (e.closed = this.load.folders[t].closed, e.load = this.load.folders[t]);
            e = new L(e);
            this.__folders[t] = e;
            t = v(this, e.domElement);
            f.addClass(t, "folder");
            return e
        },
        open: function () {
            this.closed = !1
        },
        close: function () {
            this.closed = !0
        },
        onResize: function () {
            var t = this.getRoot();
            if (t.scrollable) {
                var e = f.getOffset(t.__ul).top,
                    i = 0;
                p.each(t.__ul.childNodes, function (e) {
                    t.autoPlace && e === t.__save_row || (i += f.getHeight(e))
                });
                window.innerHeight - e - 20 < i ? (f.addClass(t.domElement, L.CLASS_TOO_TALL), t.__ul.style.height = window.innerHeight - e - 20 + "px") : (f.removeClass(t.domElement, L.CLASS_TOO_TALL), t.__ul.style.height = "auto")
            }
            t.__resize_handle && p.defer(function () {
                t.__resize_handle.style.height = t.__ul.offsetHeight + "px"
            });
            t.__closeButton && (t.__closeButton.style.width = t.width + "px")
        },
        remember: function () {
            p.isUndefined(S) && (S = new d, S.domElement.innerHTML = e);
            if (this.parent) throw Error("You can only call remember on a top level GUI.");
            var t = this;
            p.each(Array.prototype.slice.call(arguments), function (e) {
                0 == t.__rememberedObjects.length && b(t); - 1 == t.__rememberedObjects.indexOf(e) && t.__rememberedObjects.push(e)
            });
            this.autoPlace && y(this, this.width)
        },
        getRoot: function () {
            for (var t = this; t.parent;) t = t.parent;
            return t
        },
        getSaveObject: function () {
            var t = this.load;
            t.closed = this.closed;
            0 < this.__rememberedObjects.length && (t.preset = this.preset, t.remembered || (t.remembered = {}), t.remembered[this.preset] = E(this));
            t.folders = {};
            p.each(this.__folders, function (e, i) {
                t.folders[i] = e.getSaveObject()
            });
            return t
        },
        save: function () {
            this.load.remembered || (this.load.remembered = {});
            this.load.remembered[this.preset] = E(this);
            A(this, !1);
            this.saveToLocalStorageIfPossible()
        },
        saveAs: function (t) {
            this.load.remembered || (this.load.remembered = {}, this.load.remembered.Default = E(this, !0));
            this.load.remembered[t] = E(this);
            this.preset = t;
            w(this, t, !0);
            this.saveToLocalStorageIfPossible()
        },
        revert: function (t) {
            p.each(this.__controllers, function (e) {
                this.getRoot().load.remembered ? g(t || this.getRoot(), e) : e.setValue(e.initialValue)
            }, this);
            p.each(this.__folders, function (t) {
                t.revert(t)
            });
            t || A(this.getRoot(), !1)
        },
        listen: function (t) {
            var e = 0 == this.__listening.length;
            this.__listening.push(t);
            e && C(this.__listening)
        }
    });
    return L
}(dat.utils.css, '<div id="dg-save" class="dg dialogue">\n\n  Here\'s the new load parameter for your <code>GUI</code>\'s constructor:\n\n  <textarea id="dg-new-constructor"></textarea>\n\n  <div id="dg-save-locally">\n\n    <input id="dg-local-storage" type="checkbox"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id="dg-local-explain">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>\'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n      \n    </div>\n    \n  </div>\n\n</div>', ".dg {\n  /** Clear list styles */\n  /* Auto-place container */\n  /* Auto-placed GUI's */\n  /* Line items that don't contain folders. */\n  /** Folder names */\n  /** Hides closed items */\n  /** Controller row */\n  /** Name-half (left) */\n  /** Controller-half (right) */\n  /** Controller placement */\n  /** Shorter number boxes when slider is present. */\n  /** Ensure the entire boolean and function row shows a hand */ }\n  .dg ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    clear: both; }\n  .dg.ac {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 0;\n    z-index: 0; }\n  .dg:not(.ac) .main {\n    /** Exclude mains in ac so that we don't hide close button */\n    overflow: hidden; }\n  .dg.main {\n    -webkit-transition: opacity 0.1s linear;\n    -o-transition: opacity 0.1s linear;\n    -moz-transition: opacity 0.1s linear;\n    transition: opacity 0.1s linear; }\n    .dg.main.taller-than-window {\n      overflow-y: auto; }\n      .dg.main.taller-than-window .close-button {\n        opacity: 1;\n        /* TODO, these are style notes */\n        margin-top: -1px;\n        border-top: 1px solid #2c2c2c; }\n    .dg.main ul.closed .close-button {\n      opacity: 1 !important; }\n    .dg.main:hover .close-button,\n    .dg.main .close-button.drag {\n      opacity: 1; }\n    .dg.main .close-button {\n      /*opacity: 0;*/\n      -webkit-transition: opacity 0.1s linear;\n      -o-transition: opacity 0.1s linear;\n      -moz-transition: opacity 0.1s linear;\n      transition: opacity 0.1s linear;\n      border: 0;\n      position: absolute;\n      line-height: 19px;\n      height: 20px;\n      /* TODO, these are style notes */\n      cursor: pointer;\n      text-align: center;\n      background-color: #000; }\n      .dg.main .close-button:hover {\n        background-color: #111; }\n  .dg.a {\n    float: right;\n    margin-right: 15px;\n    overflow-x: hidden; }\n    .dg.a.has-save > ul {\n      margin-top: 27px; }\n      .dg.a.has-save > ul.closed {\n        margin-top: 0; }\n    .dg.a .save-row {\n      position: fixed;\n      top: 0;\n      z-index: 1002; }\n  .dg li {\n    -webkit-transition: height 0.1s ease-out;\n    -o-transition: height 0.1s ease-out;\n    -moz-transition: height 0.1s ease-out;\n    transition: height 0.1s ease-out; }\n  .dg li:not(.folder) {\n    cursor: auto;\n    height: 27px;\n    line-height: 27px;\n    overflow: hidden;\n    padding: 0 4px 0 5px; }\n  .dg li.folder {\n    padding: 0;\n    border-left: 4px solid rgba(0, 0, 0, 0); }\n  .dg li.title {\n    cursor: pointer;\n    margin-left: -4px; }\n  .dg .closed li:not(.title),\n  .dg .closed ul li,\n  .dg .closed ul li > * {\n    height: 0;\n    overflow: hidden;\n    border: 0; }\n  .dg .cr {\n    clear: both;\n    padding-left: 3px;\n    height: 27px; }\n  .dg .property-name {\n    cursor: default;\n    float: left;\n    clear: left;\n    width: 40%;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  .dg .c {\n    float: left;\n    width: 60%; }\n  .dg .c input[type=text] {\n    border: 0;\n    margin-top: 4px;\n    padding: 3px;\n    width: 100%;\n    float: right; }\n  .dg .has-slider input[type=text] {\n    width: 30%;\n    /*display: none;*/\n    margin-left: 0; }\n  .dg .slider {\n    float: left;\n    width: 66%;\n    margin-left: -5px;\n    margin-right: 0;\n    height: 19px;\n    margin-top: 4px; }\n  .dg .slider-fg {\n    height: 100%; }\n  .dg .c input[type=checkbox] {\n    margin-top: 9px; }\n  .dg .c select {\n    margin-top: 5px; }\n  .dg .cr.function,\n  .dg .cr.function .property-name,\n  .dg .cr.function *,\n  .dg .cr.boolean,\n  .dg .cr.boolean * {\n    cursor: pointer; }\n  .dg .selector {\n    display: none;\n    position: absolute;\n    margin-left: -9px;\n    margin-top: 23px;\n    z-index: 10; }\n  .dg .c:hover .selector,\n  .dg .selector.drag {\n    display: block; }\n  .dg li.save-row {\n    padding: 0; }\n    .dg li.save-row .button {\n      display: inline-block;\n      padding: 0px 6px; }\n  .dg.dialogue {\n    background-color: #222;\n    width: 460px;\n    padding: 15px;\n    font-size: 13px;\n    line-height: 15px; }\n\n/* TODO Separate style and structure */\n#dg-new-constructor {\n  padding: 10px;\n  color: #222;\n  font-family: Monaco, monospace;\n  font-size: 10px;\n  border: 0;\n  resize: none;\n  box-shadow: inset 1px 1px 1px #888;\n  word-wrap: break-word;\n  margin: 12px 0;\n  display: block;\n  width: 440px;\n  overflow-y: scroll;\n  height: 100px;\n  position: relative; }\n\n#dg-local-explain {\n  display: none;\n  font-size: 11px;\n  line-height: 17px;\n  border-radius: 3px;\n  background-color: #333;\n  padding: 8px;\n  margin-top: 10px; }\n  #dg-local-explain code {\n    font-size: 10px; }\n\n#dat-gui-save-locally {\n  display: none; }\n\n/** Main type */\n.dg {\n  color: #eee;\n  font: 11px 'Lucida Grande', sans-serif;\n  text-shadow: 0 -1px 0 #111;\n  /** Auto place */\n  /* Controller row, <li> */\n  /** Controllers */ }\n  .dg.main {\n    /** Scrollbar */ }\n    .dg.main::-webkit-scrollbar {\n      width: 5px;\n      background: #1a1a1a; }\n    .dg.main::-webkit-scrollbar-corner {\n      height: 0;\n      display: none; }\n    .dg.main::-webkit-scrollbar-thumb {\n      border-radius: 5px;\n      background: #676767; }\n  .dg li:not(.folder) {\n    background: #1a1a1a;\n    border-bottom: 1px solid #2c2c2c; }\n  .dg li.save-row {\n    line-height: 25px;\n    background: #dad5cb;\n    border: 0; }\n    .dg li.save-row select {\n      margin-left: 5px;\n      width: 108px; }\n    .dg li.save-row .button {\n      margin-left: 5px;\n      margin-top: 1px;\n      border-radius: 2px;\n      font-size: 9px;\n      line-height: 7px;\n      padding: 4px 4px 5px 4px;\n      background: #c5bdad;\n      color: #fff;\n      text-shadow: 0 1px 0 #b0a58f;\n      box-shadow: 0 -1px 0 #b0a58f;\n      cursor: pointer; }\n      .dg li.save-row .button.gears {\n        background: #c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;\n        height: 7px;\n        width: 8px; }\n      .dg li.save-row .button:hover {\n        background-color: #bab19e;\n        box-shadow: 0 -1px 0 #b0a58f; }\n  .dg li.folder {\n    border-bottom: 0; }\n  .dg li.title {\n    padding-left: 16px;\n    background: black url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;\n    cursor: pointer;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.2); }\n  .dg .closed li.title {\n    background-image: url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==); }\n  .dg .cr.boolean {\n    border-left: 3px solid #806787; }\n  .dg .cr.function {\n    border-left: 3px solid #e61d5f; }\n  .dg .cr.number {\n    border-left: 3px solid #2fa1d6; }\n    .dg .cr.number input[type=text] {\n      color: #2fa1d6; }\n  .dg .cr.string {\n    border-left: 3px solid #1ed36f; }\n    .dg .cr.string input[type=text] {\n      color: #1ed36f; }\n  .dg .cr.function:hover, .dg .cr.boolean:hover {\n    background: #111; }\n  .dg .c input[type=text] {\n    background: #303030;\n    outline: none; }\n    .dg .c input[type=text]:hover {\n      background: #3c3c3c; }\n    .dg .c input[type=text]:focus {\n      background: #494949;\n      color: #fff; }\n  .dg .c .slider {\n    background: #303030;\n    cursor: ew-resize; }\n  .dg .c .slider-fg {\n    background: #2fa1d6; }\n  .dg .c .slider:hover {\n    background: #3c3c3c; }\n    .dg .c .slider:hover .slider-fg {\n      background: #44abda; }\n", dat.controllers.factory = function (t, e, i, n, r, s, o) {
    return function (a, c, u, l) {
        var h = a[c];
        if (o.isArray(u) || o.isObject(u)) return new t(a, c, u);
        if (o.isNumber(h)) return o.isNumber(u) && o.isNumber(l) ? new i(a, c, u, l) : new e(a, c, {
            min: u,
            max: l
        });
        if (o.isString(h)) return new n(a, c);
        if (o.isFunction(h)) return new r(a, c, "");
        if (o.isBoolean(h)) return new s(a, c)
    }
}(dat.controllers.OptionController, dat.controllers.NumberControllerBox, dat.controllers.NumberControllerSlider, dat.controllers.StringController = function (t, e, i) {
    var n = function (t, i) {
        function r() {
            s.setValue(s.__input.value)
        }
        n.superclass.call(this, t, i);
        var s = this;
        this.__input = document.createElement("input");
        this.__input.setAttribute("type", "text");
        e.bind(this.__input, "keyup", r);
        e.bind(this.__input, "change", r);
        e.bind(this.__input, "blur", function () {
            s.__onFinishChange && s.__onFinishChange.call(s, s.getValue())
        });
        e.bind(this.__input, "keydown", function (t) {
            13 === t.keyCode && this.blur()
        });
        this.updateDisplay();
        this.domElement.appendChild(this.__input)
    };
    n.superclass = t;
    i.extend(n.prototype, t.prototype, {
        updateDisplay: function () {
            e.isActive(this.__input) || (this.__input.value = this.getValue());
            return n.superclass.prototype.updateDisplay.call(this)
        }
    });
    return n
}(dat.controllers.Controller, dat.dom.dom, dat.utils.common), dat.controllers.FunctionController, dat.controllers.BooleanController, dat.utils.common), dat.controllers.Controller, dat.controllers.BooleanController, dat.controllers.FunctionController, dat.controllers.NumberControllerBox, dat.controllers.NumberControllerSlider, dat.controllers.OptionController, dat.controllers.ColorController = function (t, e, i, n, r) {
    function s(t, e, i, n) {
        t.style.background = "";
        r.each(c, function (r) {
            t.style.cssText += "background: " + r + "linear-gradient(" + e + ", " + i + " 0%, " + n + " 100%); "
        })
    }

    function o(t) {
        t.style.background = "";
        t.style.cssText += "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);";
        t.style.cssText += "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);";
        t.style.cssText += "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);";
        t.style.cssText += "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);";
        t.style.cssText += "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"
    }
    var a = function (t, c) {
        function u(t) {
            f(t);
            e.bind(window, "mousemove", f);
            e.bind(window, "mouseup", l)
        }

        function l() {
            e.unbind(window, "mousemove", f);
            e.unbind(window, "mouseup", l)
        }

        function h() {
            var t = n(this.value);
            !1 !== t ? (m.__color.__state = t, m.setValue(m.__color.toOriginal())) : this.value = m.__color.toString()
        }

        function d() {
            e.unbind(window, "mousemove", p);
            e.unbind(window, "mouseup", d)
        }

        function f(t) {
            t.preventDefault();
            var i = e.getWidth(m.__saturation_field),
                n = e.getOffset(m.__saturation_field),
                r = (t.clientX - n.left + document.body.scrollLeft) / i;
            t = 1 - (t.clientY - n.top + document.body.scrollTop) / i;
            1 < t ? t = 1 : 0 > t && (t = 0);
            1 < r ? r = 1 : 0 > r && (r = 0);
            m.__color.v = t;
            m.__color.s = r;
            m.setValue(m.__color.toOriginal());
            return !1
        }

        function p(t) {
            t.preventDefault();
            var i = e.getHeight(m.__hue_field),
                n = e.getOffset(m.__hue_field);
            t = 1 - (t.clientY - n.top + document.body.scrollTop) / i;
            1 < t ? t = 1 : 0 > t && (t = 0);
            m.__color.h = 360 * t;
            m.setValue(m.__color.toOriginal());
            return !1
        }
        a.superclass.call(this, t, c);
        this.__color = new i(this.getValue());
        this.__temp = new i(0);
        var m = this;
        this.domElement = document.createElement("div");
        e.makeSelectable(this.domElement, !1);
        this.__selector = document.createElement("div");
        this.__selector.className = "selector";
        this.__saturation_field = document.createElement("div");
        this.__saturation_field.className = "saturation-field";
        this.__field_knob = document.createElement("div");
        this.__field_knob.className = "field-knob";
        this.__field_knob_border = "2px solid ";
        this.__hue_knob = document.createElement("div");
        this.__hue_knob.className = "hue-knob";
        this.__hue_field = document.createElement("div");
        this.__hue_field.className = "hue-field";
        this.__input = document.createElement("input");
        this.__input.type = "text";
        this.__input_textShadow = "0 1px 1px ";
        e.bind(this.__input, "keydown", function (t) {
            13 === t.keyCode && h.call(this)
        });
        e.bind(this.__input, "blur", h);
        e.bind(this.__selector, "mousedown", function (t) {
            e.addClass(this, "drag").bind(window, "mouseup", function (t) {
                e.removeClass(m.__selector, "drag")
            })
        });
        var v = document.createElement("div");
        r.extend(this.__selector.style, {
            width: "122px",
            height: "102px",
            padding: "3px",
            backgroundColor: "#222",
            boxShadow: "0px 1px 3px rgba(0,0,0,0.3)"
        });
        r.extend(this.__field_knob.style, {
            position: "absolute",
            width: "12px",
            height: "12px",
            border: this.__field_knob_border + (.5 > this.__color.v ? "#fff" : "#000"),
            boxShadow: "0px 1px 3px rgba(0,0,0,0.5)",
            borderRadius: "12px",
            zIndex: 1
        });
        r.extend(this.__hue_knob.style, {
            position: "absolute",
            width: "15px",
            height: "2px",
            borderRight: "4px solid #fff",
            zIndex: 1
        });
        r.extend(this.__saturation_field.style, {
            width: "100px",
            height: "100px",
            border: "1px solid #555",
            marginRight: "3px",
            display: "inline-block",
            cursor: "pointer"
        });
        r.extend(v.style, {
            width: "100%",
            height: "100%",
            background: "none"
        });
        s(v, "top", "rgba(0,0,0,0)", "#000");
        r.extend(this.__hue_field.style, {
            width: "15px",
            height: "100px",
            display: "inline-block",
            border: "1px solid #555",
            cursor: "ns-resize"
        });
        o(this.__hue_field);
        r.extend(this.__input.style, {
            outline: "none",
            textAlign: "center",
            color: "#fff",
            border: 0,
            fontWeight: "bold",
            textShadow: this.__input_textShadow + "rgba(0,0,0,0.7)"
        });
        e.bind(this.__saturation_field, "mousedown", u);
        e.bind(this.__field_knob, "mousedown", u);
        e.bind(this.__hue_field, "mousedown", function (t) {
            p(t);
            e.bind(window, "mousemove", p);
            e.bind(window, "mouseup", d)
        });
        this.__saturation_field.appendChild(v);
        this.__selector.appendChild(this.__field_knob);
        this.__selector.appendChild(this.__saturation_field);
        this.__selector.appendChild(this.__hue_field);
        this.__hue_field.appendChild(this.__hue_knob);
        this.domElement.appendChild(this.__input);
        this.domElement.appendChild(this.__selector);
        this.updateDisplay()
    };
    a.superclass = t;
    r.extend(a.prototype, t.prototype, {
        updateDisplay: function () {
            var t = n(this.getValue());
            if (!1 !== t) {
                var e = !1;
                r.each(i.COMPONENTS, function (i) {
                    if (!r.isUndefined(t[i]) && !r.isUndefined(this.__color.__state[i]) && t[i] !== this.__color.__state[i]) return e = !0, {}
                }, this);
                e && r.extend(this.__color.__state, t)
            }
            r.extend(this.__temp.__state, this.__color.__state);
            this.__temp.a = 1;
            var o = .5 > this.__color.v || .5 < this.__color.s ? 255 : 0,
                a = 255 - o;
            r.extend(this.__field_knob.style, {
                marginLeft: 100 * this.__color.s - 7 + "px",
                marginTop: 100 * (1 - this.__color.v) - 7 + "px",
                backgroundColor: this.__temp.toString(),
                border: this.__field_knob_border + "rgb(" + o + "," + o + "," + o + ")"
            });
            this.__hue_knob.style.marginTop = 100 * (1 - this.__color.h / 360) + "px";
            this.__temp.s = 1;
            this.__temp.v = 1;
            s(this.__saturation_field, "left", "#fff", this.__temp.toString());
            r.extend(this.__input.style, {
                backgroundColor: this.__input.value = this.__color.toString(),
                color: "rgb(" + o + "," + o + "," + o + ")",
                textShadow: this.__input_textShadow + "rgba(" + a + "," + a + "," + a + ",.7)"
            })
        }
    });
    var c = ["-moz-", "-o-", "-webkit-", "-ms-", ""];
    return a
}(dat.controllers.Controller, dat.dom.dom, dat.color.Color = function (t, e, i, n) {
    function r(t, e, i) {
        Object.defineProperty(t, e, {
            get: function () {
                if ("RGB" === this.__state.space) return this.__state[e];
                o(this, e, i);
                return this.__state[e]
            },
            set: function (t) {
                "RGB" !== this.__state.space && (o(this, e, i), this.__state.space = "RGB");
                this.__state[e] = t
            }
        })
    }

    function s(t, e) {
        Object.defineProperty(t, e, {
            get: function () {
                if ("HSV" === this.__state.space) return this.__state[e];
                a(this);
                return this.__state[e]
            },
            set: function (t) {
                "HSV" !== this.__state.space && (a(this), this.__state.space = "HSV");
                this.__state[e] = t
            }
        })
    }

    function o(t, i, r) {
        if ("HEX" === t.__state.space) t.__state[i] = e.component_from_hex(t.__state.hex, r);
        else if ("HSV" === t.__state.space) n.extend(t.__state, e.hsv_to_rgb(t.__state.h, t.__state.s, t.__state.v));
        else throw "Corrupted color state"
    }

    function a(t) {
        var i = e.rgb_to_hsv(t.r, t.g, t.b);
        n.extend(t.__state, {
            s: i.s,
            v: i.v
        });
        n.isNaN(i.h) ? n.isUndefined(t.__state.h) && (t.__state.h = 0) : t.__state.h = i.h
    }
    var c = function () {
        this.__state = t.apply(this, arguments);
        if (!1 === this.__state) throw "Failed to interpret color arguments";
        this.__state.a = this.__state.a || 1
    };
    c.COMPONENTS = "r g b h s v hex a".split(" ");
    n.extend(c.prototype, {
        toString: function () {
            return i(this)
        },
        toOriginal: function () {
            return this.__state.conversion.write(this)
        }
    });
    r(c.prototype, "r", 2);
    r(c.prototype, "g", 1);
    r(c.prototype, "b", 0);
    s(c.prototype, "h");
    s(c.prototype, "s");
    s(c.prototype, "v");
    Object.defineProperty(c.prototype, "a", {
        get: function () {
            return this.__state.a
        },
        set: function (t) {
            this.__state.a = t
        }
    });
    Object.defineProperty(c.prototype, "hex", {
        get: function () {
            "HEX" !== !this.__state.space && (this.__state.hex = e.rgb_to_hex(this.r, this.g, this.b));
            return this.__state.hex
        },
        set: function (t) {
            this.__state.space = "HEX";
            this.__state.hex = t
        }
    });
    return c
}(dat.color.interpret, dat.color.math = function () {
    var t;
    return {
        hsv_to_rgb: function (t, e, i) {
            var n = t / 60 - Math.floor(t / 60),
                r = i * (1 - e),
                s = i * (1 - n * e);
            e = i * (1 - (1 - n) * e);
            t = [
                [i, e, r],
                [s, i, r],
                [r, i, e],
                [r, s, i],
                [e, r, i],
                [i, r, s]
            ][Math.floor(t / 60) % 6];
            return {
                r: 255 * t[0],
                g: 255 * t[1],
                b: 255 * t[2]
            }
        },
        rgb_to_hsv: function (t, e, i) {
            var n = Math.min(t, e, i),
                r = Math.max(t, e, i),
                n = r - n;
            if (0 == r) return {
                h: NaN,
                s: 0,
                v: 0
            };
            t = (t == r ? (e - i) / n : e == r ? 2 + (i - t) / n : 4 + (t - e) / n) / 6;
            0 > t && (t += 1);
            return {
                h: 360 * t,
                s: n / r,
                v: r / 255
            }
        },
        rgb_to_hex: function (t, e, i) {
            t = this.hex_with_component(0, 2, t);
            t = this.hex_with_component(t, 1, e);
            return t = this.hex_with_component(t, 0, i)
        },
        component_from_hex: function (t, e) {
            return t >> 8 * e & 255
        },
        hex_with_component: function (e, i, n) {
            return n << (t = 8 * i) | e & ~(255 << t)
        }
    }
}(), dat.color.toString, dat.utils.common), dat.color.interpret, dat.utils.common), dat.utils.requestAnimationFrame = function () {
    return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t, e) {
        window.setTimeout(t, 1e3 / 60)
    }
}(), dat.dom.CenteredDiv = function (t, e) {
    var i = function () {
        this.backgroundElement = document.createElement("div");
        e.extend(this.backgroundElement.style, {
            backgroundColor: "rgba(0,0,0,0.8)",
            top: 0,
            left: 0,
            display: "none",
            zIndex: "1000",
            opacity: 0,
            WebkitTransition: "opacity 0.2s linear",
            transition: "opacity 0.2s linear"
        });
        t.makeFullscreen(this.backgroundElement);
        this.backgroundElement.style.position = "fixed";
        this.domElement = document.createElement("div");
        e.extend(this.domElement.style, {
            position: "fixed",
            display: "none",
            zIndex: "1001",
            opacity: 0,
            WebkitTransition: "-webkit-transform 0.2s ease-out, opacity 0.2s linear",
            transition: "transform 0.2s ease-out, opacity 0.2s linear"
        });
        document.body.appendChild(this.backgroundElement);
        document.body.appendChild(this.domElement);
        var i = this;
        t.bind(this.backgroundElement, "click", function () {
            i.hide()
        })
    };
    i.prototype.show = function () {
        var t = this;
        this.backgroundElement.style.display = "block";
        this.domElement.style.display = "block";
        this.domElement.style.opacity = 0;
        this.domElement.style.webkitTransform = "scale(1.1)";
        this.layout();
        e.defer(function () {
            t.backgroundElement.style.opacity = 1;
            t.domElement.style.opacity = 1;
            t.domElement.style.webkitTransform = "scale(1)"
        })
    };
    i.prototype.hide = function () {
        var e = this,
            i = function () {
                e.domElement.style.display = "none";
                e.backgroundElement.style.display = "none";
                t.unbind(e.domElement, "webkitTransitionEnd", i);
                t.unbind(e.domElement, "transitionend", i);
                t.unbind(e.domElement, "oTransitionEnd", i)
            };
        t.bind(this.domElement, "webkitTransitionEnd", i);
        t.bind(this.domElement, "transitionend", i);
        t.bind(this.domElement, "oTransitionEnd", i);
        this.backgroundElement.style.opacity = 0;
        this.domElement.style.opacity = 0;
        this.domElement.style.webkitTransform = "scale(1.1)"
    };
    i.prototype.layout = function () {
        this.domElement.style.left = window.innerWidth / 2 - t.getWidth(this.domElement) / 2 + "px";
        this.domElement.style.top = window.innerHeight / 2 - t.getHeight(this.domElement) / 2 + "px"
    };
    return i
}(dat.dom.dom, dat.utils.common), dat.dom.dom, dat.utils.common);

function setProperty(t, e, i) {
    var n = e.split(/[\.\[\]]/).filter(function (t) {
        return t.length > 0
    });
    var r = t;
    for (var s = 0; s < n.length - 1; ++s) {
        if (r[n[s]] === undefined) {
            r[n[s]] = {}
        }
        r = r[n[s]]
    }
    r[n[n.length - 1]] = i
}

function getStringFromUrl(t) {
    var e = new XMLHttpRequest;
    e.open("GET", t, false);
    e.send();
    return e.responseText
}
class CGFshader {
    constructor(t, e, i) {
        this.gl = t;
        this.uniforms = {};
        this.attributes = {};
        if (e != undefined && i != undefined) {
            this.init(e, i)
        }
        this.textureUnit = 0
    }
    init(t, e) {
        this.fragmentURL = e;
        this.vertexURL = t;
        var i = getStringFromUrl(e);
        var n = getStringFromUrl(t);
        var r = this.createShaderFromSource(WebGLRenderingContext.FRAGMENT_SHADER, i);
        var s = this.createShaderFromSource(WebGLRenderingContext.VERTEX_SHADER, n);
        this.compile_program(s, r)
    }
    createShaderFromSource(t, e) {
        var i = this.gl.createShader(t);
        this.gl.shaderSource(i, e);
        this.gl.compileShader(i);
        if (!this.gl.getShaderParameter(i, this.gl.COMPILE_STATUS)) {
            alert(this.gl.getShaderInfoLog(i));
            return null
        }
        return i
    }
    createUniformSetter(t, e, i, n) {
        var r = i.type;
        var s = i.size > 1 && i.name.substr(-3) === "[0]";
        if (r === t.FLOAT && s) {
            return function (e) {
                t.uniform1fv(n, e)
            }
        }
        if (r === t.FLOAT) {
            return function (e) {
                t.uniform1f(n, e)
            }
        }
        if (r === t.FLOAT_VEC2) {
            return function (e) {
                t.uniform2fv(n, e)
            }
        }
        if (r === t.FLOAT_VEC3) {
            return function (e) {
                t.uniform3fv(n, e)
            }
        }
        if (r === t.FLOAT_VEC4) {
            return function (e) {
                t.uniform4fv(n, e)
            }
        }
        if (r === t.INT && s) {
            return function (e) {
                t.uniform1iv(n, e)
            }
        }
        if (r === t.INT) {
            return function (e) {
                t.uniform1i(n, e)
            }
        }
        if (r === t.INT_VEC2) {
            return function (e) {
                t.uniform2iv(n, e)
            }
        }
        if (r === t.INT_VEC3) {
            return function (e) {
                t.uniform3iv(n, e)
            }
        }
        if (r === t.INT_VEC4) {
            return function (e) {
                t.uniform4iv(n, e)
            }
        }
        if (r === t.BOOL) {
            return function (e) {
                t.uniform1i(n, e)
            }
        }
        if (r === t.BOOL_VEC2) {
            return function (e) {
                t.uniform2iv(n, e)
            }
        }
        if (r === t.BOOL_VEC3) {
            return function (e) {
                t.uniform3iv(n, e)
            }
        }
        if (r === t.BOOL_VEC4) {
            return function (e) {
                t.uniform4iv(n, e)
            }
        }
        if (r === t.FLOAT_MAT2) {
            return function (e) {
                t.uniformMatrix2fv(n, false, e)
            }
        }
        if (r === t.FLOAT_MAT3) {
            return function (e) {
                t.uniformMatrix3fv(n, false, e)
            }
        }
        if (r === t.FLOAT_MAT4) {
            return function (e) {
                t.uniformMatrix4fv(n, false, e)
            }
        }
        if ((r === t.SAMPLER_2D || r === t.SAMPLER_CUBE) && s) {
            var o = [];
            for (var a = 0; a < info.size; ++a) {
                o.push(textureUnit++)
            }
            return function (e, i) {
                return function (e) {
                    t.uniform1iv(n, i);
                    e.forEach(function (t, e) {})
                }
            }(this.getBindPointForSamplerType(t, r), o)
        }
        if (r === t.SAMPLER_2D || r === t.SAMPLER_CUBE) {
            return function (e) {
                t.uniform1i(n, e)
            }
        }
        throw "unknown type: 0x" + r.toString(16)
    }
    getBindPointForSamplerType(t, e) {
        if (e === t.SAMPLER_2D) return t.TEXTURE_2D;
        if (e === t.SAMPLER_CUBE) return t.TEXTURE_CUBE_MAP
    }
    createAttributeSetter(t, e) {
        return function (i) {
            t.bindBuffer(t.ARRAY_BUFFER, i.buffer);
            t.enableVertexAttribArray(e);
            t.vertexAttribPointer(e, i.numComponents || i.size, i.type || t.FLOAT, i.normalize || false, i.stride || 0, i.offset || 0)
        }
    }
    compile_program(t, e) {
        var i = this.gl;
        var n = i.createProgram();
        i.attachShader(n, t);
        i.attachShader(n, e);
        try {
            i.bindAttribLocation(n, 0, "aVertexPosition")
        } catch (t) {
            console.log("CGFshader: could not bind 'aVertexPosition' to location 0. Do you have this attribute in your shader?")
        }
        i.linkProgram(n);
        if (!i.getProgramParameter(n, i.LINK_STATUS)) {
            console.log(i.getProgramInfoLog(n));
            alert("Could not initialise shaders")
        }
        this.program = n;
        i.useProgram(n);
        this.uniforms = {};
        this.uniformSetters = {};
        var r = i.getProgramParameter(n, i.ACTIVE_UNIFORMS);
        for (var s = 0; s < r; ++s) {
            var o = i.getActiveUniform(n, s);
            var a = i.getUniformLocation(n, o.name);
            setProperty(this.uniforms, o.name, a);
            setProperty(this.uniformSetters, o.name, this.createUniformSetter(i, n, o, a))
        }
        this.attributes = {};
        this.attributeSetters = {};
        var c = i.getProgramParameter(n, i.ACTIVE_ATTRIBUTES);
        for (var s = 0; s < c; ++s) {
            var u = i.getActiveAttrib(n, s);
            var a = i.getAttribLocation(n, u.name);
            setProperty(this.attributes, u.name, a);
            setProperty(this.attributeSetters, u.name, this.createAttributeSetter(i, a))
        }
    }
    update() {}
    bind() {
        this.gl.useProgram(this.program)
    }
    unbind() {
        if (!this.warnedunbind) {
            console.warn("CGFshader.unbind should not be used. Please review your code and remove direct shader binding/unbinding and use CGFscene.setActiveShader() instead.");
            this.warnedunbind = true
        }
    }
    applyUniforms(t) {
        var e = this;
        Object.keys(t).forEach(function (i) {
            var n = e.uniformSetters[i];
            if (n) {
                n(t[i])
            } else {
                console.log("Attempt to set value for uniform '" + i + "' with no setter function (does it exist in the shader?).")
            }
        })
    }
    getUniformsValues() {
        var t = this;
        var e = function (i, n) {
            for (var r in i) {
                var s;
                if (typeof i[r] !== "function") {
                    if (!(i[r] instanceof WebGLUniformLocation)) {
                        s = {};
                        e(i[r], s)
                    } else s = t.gl.getUniform(t.program, i[r]);
                    n[r] = s
                }
            }
        };
        var i = {};
        e(this.uniforms, i);
        return i
    }
    setUniformsValues(t) {
        this.bind();
        var e = this;
        var i = function (t, e) {
            for (var n in t) {
                try {
                    if (typeof e[n] != "undefined")
                        if (typeof t[n] !== "function") i(t[n], e[n]);
                        else t[n](e[n])
                } catch (t) {
                    console.log("Problem setting uniform " + n)
                }
            }
        };
        i(this.uniformSetters, t)
    }
    importUniforms(t) {
        t.bind();
        var e = t.getUniformsValues();
        this.bind();
        this.setUniformsValues(e)
    }
    getUniformValue(t) {
        return this.gl.getUniform(this.program, this.uniforms[t])
    }
}
class CGFtexture {
    constructor(t, e) {
        this.scene = t;
        this.texID = -1;
        this.gl = t.gl;
        this.image = new Image;
        this.image.crossOrigin = "anonymous";
        var i = this;
        this.image.onload = function () {
            console.log("Texture loaded: " + i.image.src);
            i.texID = i.gl.createTexture();
            i.gl.bindTexture(i.gl.TEXTURE_2D, i.texID);
            i.gl.texImage2D(i.gl.TEXTURE_2D, 0, i.gl.RGBA, i.gl.RGBA, i.gl.UNSIGNED_BYTE, i.image);
            i.gl.texParameteri(i.gl.TEXTURE_2D, i.gl.TEXTURE_MAG_FILTER, i.gl.LINEAR);
            if (isPowerOfTwo(i.image.width) && isPowerOfTwo(i.image.height)) {
                i.gl.texParameteri(i.gl.TEXTURE_2D, i.gl.TEXTURE_MIN_FILTER, i.gl.LINEAR)
            } else {
                i.gl.texParameteri(i.gl.TEXTURE_2D, i.gl.TEXTURE_MIN_FILTER, i.gl.LINEAR);
                i.gl.texParameteri(i.gl.TEXTURE_2D, i.gl.TEXTURE_WRAP_S, i.gl.CLAMP_TO_EDGE);
                i.gl.texParameteri(i.gl.TEXTURE_2D, i.gl.TEXTURE_WRAP_T, i.gl.CLAMP_TO_EDGE)
            }
        };
        this.image.src = e
    }
    bind(t) {
        var e = t || 0;
        if (this.texID != -1) {
            this.gl.activeTexture(this.gl.TEXTURE0 + e);
            this.gl.bindTexture(this.gl.TEXTURE_2D, this.texID);
            if (e == 0) this.scene.activeTexture = this;
            return true
        } else {
            if (e == 0) this.scene.activeTexture = null;
            return false
        }
    }
    unbind(t) {
        var e = t || 0;
        this.gl.activeTexture(this.gl.TEXTURE0 + e);
        this.gl.bindTexture(this.gl.TEXTURE_2D, null);
        if (e == 0) this.scene.activeTexture = null
    }
}

function isPowerOfTwo(t) {
    return (t & t - 1) == 0
}
class CGFappearance {
    constructor(t) {
        this.scene = t;
        this.ambient = vec4.fromValues(.2, .2, .2, 1);
        this.diffuse = vec4.fromValues(.5, .5, .5, 1);
        this.specular = vec4.fromValues(.5, .5, .5, 1);
        this.shininess = 10;
        this.emission = vec4.fromValues(0, 0, 0, 1);
        this.texture = null
    }
    setAmbient(t, e, i, n) {
        vec4.set(this.ambient, t, e, i, n)
    }
    setDiffuse(t, e, i, n) {
        vec4.set(this.diffuse, t, e, i, n)
    }
    setSpecular(t, e, i, n) {
        vec4.set(this.specular, t, e, i, n)
    }
    setShininess(t) {
        this.shininess = t
    }
    setEmission(t, e, i, n) {
        vec4.set(this.emission, t, e, i, n)
    }
    setColor(t, e, i, n) {
        this.setAmbient(t, e, i, n);
        this.setDiffuse(t, e, i, n)
    }
    apply() {
        this.scene.setAmbient(this.ambient[0], this.ambient[1], this.ambient[2], this.ambient[3]);
        this.scene.setDiffuse(this.diffuse[0], this.diffuse[1], this.diffuse[2], this.diffuse[3]);
        this.scene.setSpecular(this.specular[0], this.specular[1], this.specular[2], this.specular[3]);
        this.scene.setShininess(this.shininess);
        this.scene.setEmission(this.emission[0], this.emission[1], this.emission[2], this.emission[3]);
        if (this.texture) {
            if (this.texture.bind() && this.wrapS && this.wrapT) {
                var t = this.scene.gl;
                t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, this.wrapS);
                t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, this.wrapT);
                this.scene.activeTexture = this.texture
            }
        } else this.scene.activeTexture = null
    }
    setTexture(t) {
        this.texture = t
    }
    loadTexture(t) {
        this.texture = new CGFtexture(this.scene, t)
    }
    setTextureWrap(t, e) {
        this.wrapS = this.scene.gl[t];
        this.wrapT = this.scene.gl[e]
    }
}
class CGFobject {
    constructor(t) {
        this.scene = t;
        this.inited = false;
        this.pickingEnabled = false;
        this.primitiveType = this.scene.gl.TRIANGLES;
        this.normalVizEnabled = false;
        this.normalVizInited = false
    }
    display() {
        this.drawElements(this.primitiveType);
        if (this.normalVizEnabled) this.drawNormalViz()
    }
    initGLBuffers() {
        var t = this.scene.gl;
        this.vertsBuffer = t.createBuffer();
        t.bindBuffer(t.ARRAY_BUFFER, this.vertsBuffer);
        t.bufferData(t.ARRAY_BUFFER, new Float32Array(this.vertices), t.STATIC_DRAW);
        if (!this.normals) this.normals = Array.apply(null, new Array(this.vertices.length)).map(function () {
            return 1
        });
        this.normsBuffer = t.createBuffer();
        t.bindBuffer(t.ARRAY_BUFFER, this.normsBuffer);
        t.bufferData(t.ARRAY_BUFFER, new Float32Array(this.normals), t.STATIC_DRAW);
        this.indicesBuffer = t.createBuffer();
        t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indicesBuffer);
        t.bufferData(t.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.indices), t.STATIC_DRAW);
        if (!this.texCoords) this.hasTexCoords = false;
        else {
            this.hasTexCoords = true;
            this.texCoordsBuffer = t.createBuffer();
            t.bindBuffer(t.ARRAY_BUFFER, this.texCoordsBuffer);
            t.bufferData(t.ARRAY_BUFFER, new Float32Array(this.texCoords), t.STATIC_DRAW)
        }
        this.indicesBuffer.numValues = this.indices.length;
        t.bindBuffer(t.ARRAY_BUFFER, null);
        t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, null);
        this.inited = true
    }
    updateTexCoordsGLBuffers() {
        var t = this.scene.gl;
        if (!this.texCoords) this.hasTexCoords = false;
        else {
            this.hasTexCoords = true;
            if (!this.texCoordsBuffer) this.texCoordsBuffer = t.createBuffer();
            t.bindBuffer(t.ARRAY_BUFFER, this.texCoordsBuffer);
            t.bufferData(t.ARRAY_BUFFER, new Float32Array(this.texCoords), t.STATIC_DRAW)
        }
    }
    initBuffers() {
        this.vertices = [-.5, -.5, 0, .5, -.5, 0, -.5, .5, 0, .5, .5, 0];
        this.indices = [0, 1, 2, 3];
        this.normals = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1];
        this.primitiveType = this.scene.gl.TRIANGLE_STRIP;
        this.initGLBuffers()
    }
    drawElements(t) {
        var e = this.scene.activeShader;
        var i = this.scene.gl;
        i.uniformMatrix4fv(e.uniforms.uMVMatrix, false, this.scene.activeMatrix);
        i.enableVertexAttribArray(e.attributes.aVertexPosition);
        i.bindBuffer(i.ARRAY_BUFFER, this.vertsBuffer);
        i.vertexAttribPointer(e.attributes.aVertexPosition, 3, i.FLOAT, false, 0, 0);
        if (e.uniforms.uNMatrix) this.scene.updateInverseMatrix();
        i.uniformMatrix4fv(e.uniforms.uNMatrix, false, this.scene.invMatrix);
        if (e.attributes.aVertexNormal) {
            i.enableVertexAttribArray(e.attributes.aVertexNormal);
            i.bindBuffer(i.ARRAY_BUFFER, this.normsBuffer);
            i.vertexAttribPointer(e.attributes.aVertexNormal, 3, i.FLOAT, false, 0, 0)
        }
        var n = this.scene.texturesEnabled;
        if (e.attributes.aTextureCoord)
            if (this.hasTexCoords && n && this.scene.activeTexture) {
                i.enableVertexAttribArray(e.attributes.aTextureCoord);
                i.bindBuffer(i.ARRAY_BUFFER, this.texCoordsBuffer);
                i.vertexAttribPointer(e.attributes.aTextureCoord, 2, i.FLOAT, false, 0, 0)
            } else {
                this.scene.enableTextures(false);
                i.disableVertexAttribArray(e.attributes.aTextureCoord)
            } i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, this.indicesBuffer);
        i.drawElements(t, this.indicesBuffer.numValues, i.UNSIGNED_SHORT, 0);
        i.bindBuffer(i.ARRAY_BUFFER, null);
        i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, null);
        this.scene.enableTextures(n)
    }
    initNormalVizBuffers(t = 1) {
        this.normalVerts = [];
        this.normalIndices = [];
        for (var e = 0; e < this.normals.length; e += 3) {
            this.normalVerts.push(this.vertices[e], this.vertices[e + 1], this.vertices[e + 2]);
            this.normalVerts.push(this.vertices[e] + this.normals[e] * t, this.vertices[e + 1] + this.normals[e + 1] * t, this.vertices[e + 2] + this.normals[e + 2] * t);
            this.normalIndices.push(2 * (e / 3), 2 * (e / 3) + 1)
        }
        var i = this.scene.gl;
        this.nVertsBuffer = i.createBuffer();
        i.bindBuffer(i.ARRAY_BUFFER, this.nVertsBuffer);
        i.bufferData(i.ARRAY_BUFFER, new Float32Array(this.normalVerts), i.STATIC_DRAW);
        this.nIndicesBuffer = i.createBuffer();
        i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, this.nIndicesBuffer);
        i.bufferData(i.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.normalIndices), i.STATIC_DRAW);
        this.nIndicesBuffer.numValues = this.normalIndices.length;
        i.bindBuffer(i.ARRAY_BUFFER, null);
        i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, null);
        this.normalVizInited = true
    }
    drawNormalViz() {
        var t = this.scene.activeShader;
        var e = this.scene.normalsShader;
        this.scene.setActiveShaderSimple(e);
        var i = this.scene.gl;
        i.uniformMatrix4fv(e.uniforms.uMVMatrix, false, this.scene.activeMatrix);
        i.enableVertexAttribArray(e.attributes.aVertexPosition);
        i.bindBuffer(i.ARRAY_BUFFER, this.nVertsBuffer);
        i.vertexAttribPointer(e.attributes.aVertexPosition, 3, i.FLOAT, false, 0, 0);
        i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, this.nIndicesBuffer);
        i.drawElements(this.scene.gl.LINES, this.nIndicesBuffer.numValues, i.UNSIGNED_SHORT, 0);
        i.bindBuffer(i.ARRAY_BUFFER, null);
        i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, null);
        this.scene.setActiveShaderSimple(t)
    }
    enableNormalViz() {
        if (!this.normalVizInited) this.initNormalVizBuffers();
        this.normalVizEnabled = true
    }
    disableNormalViz() {
        this.normalVizEnabled = false
    }
}
class CGFaxis extends CGFobject {
    constructor(t, e, i) {
        super(t);
        this.length = 5;
        this.thickness = .05;
        switch (arguments.length) {
            case 3:
                this.thickness = i;
            case 2:
                this.length = e
        }
        this.HALF_PI = 3.1415926536 / 2;
        this.pyr = new CGFquadPyramid(t, this.length - this.thickness / 2, this.thickness)
    }
    display() {
        this.scene.pushMatrix();
        this.scene.activeTexture = null;
        this.scene.setShininess(100);
        this.scene.setAmbient(1, 1, 1, 1);
        this.scene.pushMatrix();
        this.scene.translate(0, 0, this.thickness / 2);
        this.scene.setDiffuse(0, 0, 1, 1);
        this.scene.setSpecular(0, 0, 1, 1);
        this.pyr.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.rotate(this.HALF_PI, 0, 1, 0);
        this.scene.translate(0, 0, this.thickness / 2);
        this.scene.setDiffuse(1, 0, 0, 1);
        this.scene.setSpecular(1, 0, 0, 1);
        this.pyr.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.rotate(-this.HALF_PI, 1, 0, 0);
        this.scene.translate(0, 0, this.thickness / 2);
        this.scene.setDiffuse(0, 1, 0, 1);
        this.scene.setSpecular(0, 1, 0, 1);
        this.pyr.display();
        this.scene.popMatrix();
        this.scene.popMatrix()
    }
}
class CGFquadPyramid extends CGFobject {
    constructor(t, e, i) {
        super(t);
        this.halfSide = i / 2;
        this.height = e;
        this.initBuffers()
    }
    initBuffers() {
        this.vertices = [-this.halfSide, -this.halfSide, 0, this.halfSide, -this.halfSide, 0, -this.halfSide, this.halfSide, 0, this.halfSide, this.halfSide, 0, 0, 0, this.height];
        this.indices = [2, 1, 0, 1, 2, 3, 0, 1, 4, 1, 3, 4, 2, 0, 4, 3, 2, 4];
        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers()
    }
}
class CGFinterface {
    constructor() {
        this.mouse = vec2.create();
        this.prevMouse = vec2.create();
        this.mouseButtons = [false, false, false];
        this.activeCamera = null;
        this.ctrlKey = false
    }
    init(t) {
        console.log("Initializing Interface");
        this.scene = t.scene;
        var e = t.gl.canvas;
        e.tabIndex = 1;
        var i = this;
        e.oncontextmenu = function (t) {
            return false
        };
        e.addEventListener("mousedown", function (t) {
            t.preventDefault();
            t.stopPropagation();
            i.processMouseDown(t);
            i.scene.onPick(t)
        });
        e.addEventListener("mouseup", function (t) {
            t.preventDefault();
            t.stopPropagation();
            i.processMouseUp(t)
        });
        e.addEventListener("mousemove", function (t) {
            t.preventDefault();
            t.stopPropagation();
            i.processMouseMove(t)
        });
        e.addEventListener("touchstart", function (t) {
            t.preventDefault();
            t.stopPropagation();
            i.processTouchStart(t)
        });
        e.addEventListener("touchend", function (t) {
            t.preventDefault();
            t.stopPropagation();
            i.processTouchEnd(t);
            i.scene.onPick(t)
        });
        e.addEventListener("touchmove", function (t) {
            t.preventDefault();
            t.stopPropagation();
            i.processTouchMove(t)
        });
        document.onkeypress = function (t) {
            i.processKeyboard(t)
        };
        document.onkeydown = function (t) {
            i.processKeyDown(t)
        };
        document.onkeyup = function (t) {
            i.processKeyUp(t)
        };
        return true
    }
    update() {}
    processKeyboard(t) {
        console.log("keypress")
    }
    processKeyDown(t) {
        console.log("keydown")
    }
    processKeyUp(t) {
        console.log("keyup")
    }
    setActiveCamera(t) {
        this.activeCamera = t
    }
    processMouseDown(t) {
        var e = t.which;
        this.mouseButtons[e - 1] = true;
        this.mouse[0] = t.pageX;
        this.mouse[1] = t.pageY;
        this.prevMouse[0] = this.mouse[0];
        this.prevMouse[1] = this.mouse[1];
        this.ctrlKey = t.ctrlKey
    }
    processMouseUp(t) {
        var e = t.which;
        this.mouseButtons[e - 1] = false;
        this.prevMouse[0] = this.mouse[0];
        this.prevMouse[1] = this.mouse[1];
        this.mouse[0] = t.pageX;
        this.mouse[1] = t.pageY;
        this.ctrlKey = t.ctrlKey
    }
    processMouseMove(t) {
        this.prevMouse[0] = this.mouse[0];
        this.prevMouse[1] = this.mouse[1];
        this.mouse[0] = t.pageX;
        this.mouse[1] = t.pageY;
        this.processMouse()
    }
    processMouse() {
        if (this.activeCamera) {
            var t = vec2.subtract(vec2.create(), this.mouse, this.prevMouse);
            if (this.mouseButtons[0]) {
                if (this.ctrlKey) {
                    this.activeCamera.zoom(t[1] * .05)
                } else {
                    this.activeCamera.orbit(CGFcameraAxisID.X, t[1] * Math.PI / 180);
                    this.activeCamera.orbit(CGFcameraAxisID.Y, -t[0] * Math.PI / 180)
                }
            } else if (this.mouseButtons[2]) {
                this.activeCamera.pan([-t[0] * .05, t[1] * .05, 0])
            } else if (this.mouseButtons[1]) {
                this.activeCamera.zoom(t[1] * .05)
            }
        }
    }
    processTouchStart(t) {
        this.touches = t.targetTouches;
        this.prevTouches = this.touches
    }
    processTouchEnd(t) {
        this.prevTouches = this.touches;
        this.touches = t.targetTouches
    }
    processTouchMove(t) {
        this.prevTouches = this.touches;
        this.touches = t.targetTouches;
        this.processTouches()
    }
    processTouches() {
        if (this.activeCamera) {
            if (this.touches.length == 1) {
                var t = [this.prevTouches[0].pageX, this.prevTouches[0].pageY];
                var e = [this.touches[0].pageX, this.touches[0].pageY];
                var i = vec2.subtract(vec2.create(), e, t);
                this.activeCamera.orbit(CGFcameraAxisID.X, i[1] * Math.PI / 180);
                this.activeCamera.orbit(CGFcameraAxisID.Y, -i[0] * Math.PI / 180)
            } else {
                var n = [this.prevTouches[0].pageX, this.prevTouches[0].pageY];
                var r = [this.touches[0].pageX, this.touches[0].pageY];
                if (this.touches.length == 2) {
                    var s = [this.prevTouches[1].pageX, this.prevTouches[1].pageY];
                    var o = [this.touches[1].pageX, this.touches[1].pageY];
                    var a = this.distanceBetweenPoints(n, s);
                    var c = this.distanceBetweenPoints(r, o);
                    var u = c - a;
                    this.activeCamera.zoom(u * .05)
                } else {
                    var i = vec2.subtract(vec2.create(), r, n);
                    this.activeCamera.pan([-i[0] * .05, i[1] * .05, 0])
                }
            }
        }
    }
    distanceBetweenPoints(t, e) {
        return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]))
    }
}
class CGFscene {
    constructor() {}
    init(t) {
        console.log("Initializing Scene");
        this.gl = t.gl;
        this.pMatrix = mat4.create();
        this.invMatrix = mat4.create();
        this.activeMatrix = mat4.create();
        this.matrixStack = new Array;
        this.picksRequests = [];
        this.pickData = [];
        this.pickIds = [];
        this.pickResults = [];
        this.pickMode = false;
        this.normalsShader = new CGFshader(this.gl, "../lib/CGF/shaders/viz/normals-vertex.glsl", "../lib/CGF/shaders/viz/normals-fragment.glsl");
        this.pickShader = new CGFshader(this.gl, "../lib/CGF/shaders/picking/vertex.glsl", "../lib/CGF/shaders/picking/fragment.glsl");
        this.defaultShader = new CGFshader(this.gl, "../lib/CGF/shaders/Gouraud/textured/multiple_light-vertex.glsl", "../lib/CGF/shaders/Gouraud/textured/fragment.glsl");
        this.shader = {
            bind: function () {
                console.error("direct shader bind deprecated, use CGFscene.setActiveShader() instead, and only when you need to change shader. (" + arguments.callee.caller.name + ")")
            },
            unbind: function () {
                console.error("direct shader unbind deprecated, please remove. (" + arguments.callee.caller.name + ")")
            }
        };
        this.activeShader = this.defaultShader;
        this.activeShader.bind();
        this.gl.activeTexture(this.gl.TEXTURE0);
        this.gl.uniform1i(this.activeShader.uniforms.uSampler, 0);
        this.enableTextures(false);
        this.activeTexture = null;
        this.lights = new Array;
        var e = 0;
        for (var i in this.activeShader.uniforms.uLight) {
            this.lights[e] = new CGFlight(this, e);
            this.lights[e].disable();
            this.lights[e].update();
            e++
        }
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.setGlobalAmbientLight(.1, .1, .1, 1);
        this.lastUpdate = 0;
        this.updatePeriod = 0;
        return true
    }
    enableTextures(t) {
        this.activeShader.bind();
        this.texturesEnabled = t;
        this.gl.uniform1i(this.activeShader.uniforms.uUseTexture, t)
    }
    loadIdentity() {
        mat4.identity(this.activeMatrix)
    }
    pushMatrix() {
        this.matrixStack.push(this.activeMatrix);
        this.activeMatrix = mat4.clone(this.activeMatrix)
    }
    popMatrix() {
        this.activeMatrix = this.matrixStack.pop()
    }
    multMatrix(t) {
        mat4.multiply(this.activeMatrix, this.activeMatrix, t)
    }
    getMatrix() {
        return mat4.clone(this.activeMatrix)
    }
    setMatrix(t) {
        this.activeMatrix = mat4.clone(t)
    }
    translate(t, e, i) {
        mat4.translate(this.activeMatrix, this.activeMatrix, [t, e, i])
    }
    rotate(t, e, i, n) {
        mat4.rotate(this.activeMatrix, this.activeMatrix, t, [e, i, n])
    }
    scale(t, e, i) {
        mat4.scale(this.activeMatrix, this.activeMatrix, [t, e, i])
    }
    setEmission(t, e, i, n) {
        this.activeShader.setUniformsValues({
            uFrontMaterial: {
                emission: [t, e, i, n]
            }
        })
    }
    setAmbient(t, e, i, n) {
        this.activeShader.setUniformsValues({
            uFrontMaterial: {
                ambient: [t, e, i, n]
            }
        })
    }
    setDiffuse(t, e, i, n) {
        this.activeShader.setUniformsValues({
            uFrontMaterial: {
                diffuse: [t, e, i, n]
            }
        })
    }
    setSpecular(t, e, i, n) {
        this.activeShader.setUniformsValues({
            uFrontMaterial: {
                specular: [t, e, i, n]
            }
        })
    }
    setShininess(t) {
        this.activeShader.setUniformsValues({
            uFrontMaterial: {
                shininess: t
            }
        })
    }
    getProjectionMatrix() {
        return this.camera.getProjectionMatrix(this.gl.canvas.width, this.gl.canvas.height)
    }
    updateProjectionMatrix() {
        this.pMatrix = this.getProjectionMatrix();
        this.activeShader.setUniformsValues({
            uPMatrix: this.pMatrix
        })
    }
    applyViewMatrix() {
        mat4.mul(this.activeMatrix, this.activeMatrix, this.camera.getViewMatrix())
    }
    update(t) {}
    setUpdatePeriod(t) {
        this.updatePeriod = t
    }
    checkUpdate() {
        if (this.updatePeriod > 0) {
            var t = Date.now();
            if (t - this.lastUpdate >= this.updatePeriod) {
                this.update(t);
                this.lastUpdate = t
            }
        }
    }
    display() {
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        this.gl.clearColor(0, 0, 0, 1)
    }
    displayWithPick() {
        var t = this.getNextPickRequest();
        if (t != null) {
            var e = this.activeShader;
            var i = t[0][0];
            var n = t[0][1];
            this.setActiveShader(this.pickShader);
            var r = new Uint8Array(4);
            this.pickMode = true;
            var s = this.texturesEnabled;
            this.texturesEnabled = false;
            this.display();
            this.texturesEnabled = s;
            this.pickMode = false;
            this.gl.readPixels(i, n, 1, 1, this.gl.RGBA, this.gl.UNSIGNED_BYTE, r);
            if (r != null && r != undefined) {
                this.pickResults.splice(0, this.pickResults.length);
                var o = this.getPickData(r);
                if (o != null) {
                    this.pickResults.push([o[0], o[1]])
                } else {
                    this.pickResults.push([undefined, undefined])
                }
            }
            this.setActiveShader(e)
        }
        this.display()
    }
    setGlobalAmbientLight(t, e, i, n) {
        this.activeShader.bind();
        this.gl.uniform4f(this.activeShader.uniforms.uGlobalAmbient, t, e, i, n)
    }
    onPick(t) {
        if (this.pickEnabled == false) return;
        var e = t.clientX,
            i = t.clientY;
        var n = t.target.getBoundingClientRect();
        if (n.left <= e && e < n.right && n.top <= i && i < n.bottom) {
            var r = e - n.left;
            var s = n.bottom - i;
            this.picksRequests.push([r, s])
        }
    }
    getNextPickRequest() {
        if (this.picksRequests.length == 0) return null;
        return this.picksRequests.splice(0, 1)
    }
    registerForPick(t, e) {
        if (this.pickMode) {
            var i = this.intToRGB(t);
            this.pickData[t] = [e, t, i];
            this.gl.uniform4fv(this.pickShader.uniforms.uPickColor, i)
        }
    }
    clearPickRegistration() {
        if (this.pickMode) this.gl.uniform4fv(this.pickShader.uniforms.uPickColor, [0, 0, 0, 0])
    }
    intToRGB(t) {
        var e = t >> 16;
        var i = t % 65536 >> 8;
        var n = t % 256;
        return [e / 255, i / 255, n / 255, 1]
    }
    getPickData(t) {
        var e = 65536 * t[0] + 256 * t[1] + t[2];
        return this.pickData[e]
    }
    setPickEnabled(t) {
        this.pickEnabled = t
    }
    setActiveShader(t) {
        if (this.pickMode == false) {
            t.importUniforms(this.activeShader);
            this.activeShader = t;
            this.activeShader.bind()
        }
        return
    }
    setActiveShaderSimple(t) {
        if (this.pickMode == false) {
            var e = this.activeShader.getUniformValue("uPMatrix");
            this.activeShader = t;
            this.activeShader.bind();
            t.setUniformsValues({
                uPMatrix: e
            })
        }
        return
    }
    updateInverseMatrix() {
        mat4.invert(this.invMatrix, this.activeMatrix);
        mat4.transpose(this.invMatrix, this.invMatrix);
        return
    }
}
var CGFcameraAxis = Object.freeze({
    X: vec3.fromValues(1, 0, 0),
    Y: vec3.fromValues(0, 1, 0),
    Z: vec3.fromValues(0, 0, 1)
});
var CGFcameraAxisID = Object.freeze({
    X: 0,
    Y: 1,
    Z: 2
});
class CGFcamera {
    constructor(t, e, i, n, r) {
        this.fov = t;
        this.near = e;
        this.far = i;
        this.position = vec4.fromValues(n[0], n[1], n[2], 0);
        this.target = vec4.fromValues(r[0], r[1], r[2], 0);
        this.direction = this.calculateDirection();
        this._up = vec3.fromValues(0, 1, 0);
        this._viewMatrix = mat4.create();
        this._projectionMatrix = mat4.create()
    }
    getViewMatrix() {
        mat4.lookAt(this._viewMatrix, this.position, this.target, this._up);
        return this._viewMatrix
    }
    getProjectionMatrix(t, e) {
        var i = t / e;
        mat4.perspective(this._projectionMatrix, this.fov, i, this.near, this.far);
        return this._projectionMatrix
    }
    calculateDirection() {
        return vec4.normalize(vec4.create(), vec4.subtract(vec4.create(), this.target, this.position))
    }
    setPosition(t) {
        vec3.copy(this.position, t);
        this.direction = this.calculateDirection()
    }
    setTarget(t) {
        vec3.copy(this.target, t);
        this.direction = this.calculateDirection()
    }
    translate(t) {
        var e = vec4.scale(vec4.create(), this.direction, -t[2]);
        var i = vec4.fromValues(0, t[1], 0, 0);
        var n = vec3.create();
        vec3.scale(n, vec3.cross(n, vec3.fromValues(0, 1, 0), this.direction), t[0]);
        var r = vec4.fromValues(n[0], n[1], n[2], 0);
        var s = vec4.create();
        s = vec4.add(s, e, vec4.add(s, i, r));
        vec4.add(this.position, this.position, s);
        vec4.add(this.target, this.position, this.direction)
    }
    rotate(t, e) {
        vec4.transformMat4(this.direction, this.direction, mat4.rotate(mat4.create(), mat4.create(), e, t));
        vec4.add(this.target, this.position, this.direction)
    }
    orbit(t, e) {
        var i = vec4.sub(vec4.create(), this.position, this.target);
        i[3] = 0;
        var n;
        if (t == CGFcameraAxisID.X) {
            var r = vec3.create();
            vec3.normalize(r, vec3.cross(r, i, this._up));
            var s = mat4.rotate(mat4.create(), mat4.create(), e, r);
            n = vec4.transformMat4(vec4.create(), i, s);
            vec3.normalize(this._up, vec3.cross(this._up, r, n))
        } else n = vec4.transformMat4(vec4.create(), i, mat4.rotate(mat4.create(), mat4.create(), e, this._up));
        vec4.add(this.position, this.target, n);
        this.direction = this.calculateDirection()
    }
    pan(t) {
        var e = .05 * vec3.distance(this.target, this.position);
        var i = vec3.cross(vec3.create(), this.direction, this._up);
        var n = vec4.scale(vec4.create(), vec3.normalize(i, i), t[0] * e);
        n[3] = 0;
        var r = vec4.scale(vec4.create(), this._up, t[1] * e);
        r[3] = 0;
        vec4.add(this.position, this.position, n);
        vec4.add(this.target, this.target, n);
        vec4.add(this.position, this.position, r);
        vec4.add(this.target, this.target, r)
    }
    zoom(t) {
        if (vec4.distance(this.position, this.target) > t) vec4.add(this.position, this.position, vec4.scale(vec4.create(), this.direction, t));
        else console.warn("CGFcamera: zoom exceeds target position, ignoring request.")
    }
}
class CGFinterfaceCamera extends CGFcamera {
    constructor(t, e, i) {
        super(t, e, i, [10, 10, 10], [0, 0, 0]);
        this.translation = [0, 0, 0];
        this.rotation = [.52, .79, 0];
        this.distance = 50;
        this._positionMatrix = mat4.create();
        this._invPositionMatrix = mat4.create()
    }
    getViewMatrix() {
        vec4.set(this.position, 0, 0, this.distance, 1);
        vec4.set(this.target, 0, 0, 0, 1);
        vec3.set(this._up, 0, 1, 0);
        vec4.set(this.direction, 0, 0, -1, 0);
        mat4.lookAt(this._viewMatrix, this.position, this.target, this._up);
        mat4.identity(this._positionMatrix);
        mat4.rotateZ(this._positionMatrix, this._positionMatrix, this.rotation[2]);
        mat4.rotateX(this._positionMatrix, this._positionMatrix, this.rotation[0]);
        mat4.rotateY(this._positionMatrix, this._positionMatrix, -this.rotation[1]);
        mat4.translate(this._positionMatrix, this._positionMatrix, this.translation);
        mat4.invert(this._invPositionMatrix, this._positionMatrix);
        vec4.transformMat4(this.position, this.position, this._invPositionMatrix);
        vec4.transformMat4(this.target, this.target, this._invPositionMatrix);
        vec4.transformMat4(this.direction, this.direction, this._invPositionMatrix);
        vec3.transformMat4(this._up, this._up, this._invPositionMatrix);
        mat4.multiply(this._viewMatrix, this._viewMatrix, this._positionMatrix);
        return this._viewMatrix
    }
    setDistance(t) {
        this.distance = t;
        this.clampDistance()
    }
    clampDistance() {
        if (this.distance < this.near) this.distance = this.near;
        else if (this.distance > this.far) this.distance = this.far
    }
    roll(t) {
        this.rotate(CGFcameraAxis.Z, t)
    }
    orbit(t, e) {
        this.rotation[t] += e
    }
    rotate(t, e) {
        this.rotation[t] += e
    }
    zoom(t) {
        this.distance -= t;
        this.clampDistance()
    }
    translate(t) {
        vec4.add(this.translation, this.translation, t)
    }
    pan(t) {
        t[3] = 0;
        vec4.transformMat4(t, t, this._invPositionMatrix);
        vec4.sub(this.translation, this.translation, t)
    }
}
class CGFcameraOrtho {
    constructor(t, e, i, n, r, s, o, a, c) {
        this.left = t;
        this.right = e;
        this.bottom = i;
        this.top = n;
        this.near = r;
        this.far = s;
        this.position = vec4.fromValues(o[0], o[1], o[2], 0);
        this.target = vec4.fromValues(a[0], a[1], a[2], 0);
        this.direction = this.calculateDirection();
        this._up = c;
        this._viewMatrix = mat4.create();
        this._projectionMatrix = mat4.create()
    }
    getViewMatrix() {
        mat4.lookAt(this._viewMatrix, this.position, this.target, this._up);
        return this._viewMatrix
    }
    getProjectionMatrix(t, e) {
        var i = t / e;
        mat4.ortho(this._projectionMatrix, this.left, this.right, this.bottom, this.top, this.near, this.far);
        return this._projectionMatrix
    }
    calculateDirection() {
        return vec4.normalize(vec4.create(), vec4.subtract(vec4.create(), this.target, this.position))
    }
    setPosition(t) {
        vec3.copy(this.position, t);
        this.direction = this.calculateDirection()
    }
    setTarget(t) {
        vec3.copy(this.target, t);
        this.direction = this.calculateDirection()
    }
    translate(t) {
        var e = vec4.scale(vec4.create(), this.direction, -t[2]);
        var i = vec4.fromValues(0, t[1], 0, 0);
        var n = vec3.create();
        vec3.scale(n, vec3.cross(n, vec3.fromValues(0, 1, 0), this.direction), t[0]);
        var r = vec4.fromValues(n[0], n[1], n[2], 0);
        var s = vec4.create();
        s = vec4.add(s, e, vec4.add(s, i, r));
        vec4.add(this.position, this.position, s);
        vec4.add(this.target, this.position, this.direction)
    }
    rotate(t, e) {
        vec4.transformMat4(this.direction, this.direction, mat4.rotate(mat4.create(), mat4.create(), e, t));
        vec4.add(this.target, this.position, this.direction)
    }
    orbit(t, e) {
        var i = vec4.sub(vec4.create(), this.position, this.target);
        i[3] = 0;
        var n;
        if (t == CGFcameraAxisID.X) {
            var r = vec3.create();
            vec3.normalize(r, vec3.cross(r, i, this._up));
            var s = mat4.rotate(mat4.create(), mat4.create(), e, r);
            n = vec4.transformMat4(vec4.create(), i, s);
            vec3.normalize(this._up, vec3.cross(this._up, r, n))
        } else n = vec4.transformMat4(vec4.create(), i, mat4.rotate(mat4.create(), mat4.create(), e, this._up));
        vec4.add(this.position, this.target, n);
        this.direction = this.calculateDirection()
    }
    pan(t) {
        var e = .05 * vec3.distance(this.target, this.position);
        var i = vec3.cross(vec3.create(), this.direction, this._up);
        var n = vec4.scale(vec4.create(), vec3.normalize(i, i), t[0] * e);
        n[3] = 0;
        var r = vec4.scale(vec4.create(), this._up, t[1] * e);
        r[3] = 0;
        vec4.add(this.position, this.position, n);
        vec4.add(this.target, this.target, n);
        vec4.add(this.position, this.position, r);
        vec4.add(this.target, this.target, r)
    }
    zoom(t) {
        if (vec4.distance(this.position, this.target) > t) vec4.add(this.position, this.position, vec4.scale(vec4.create(), this.direction, t));
        else console.warn("CGFcameraOrtho: zoom exceeds target position, ignoring request.")
    }
    setUp(t) {
        this._up = t
    }
}
class CGFlight extends CGFobject {
    constructor(t, e) {
        super(t);
        this.scene = t;
        this.id = e;
        console.log("Created Light " + e);
        this.setPosition(0, 0, 0, 1);
        this.setAmbient(.1, .1, .1, 1);
        this.setDiffuse(.5, .5, .5, 1);
        this.setSpecular(.5, .5, .5, 1);
        this.setSpotDirection(0, -1, 0);
        this.setSpotExponent(10);
        this.setSpotCutOff(180);
        this.setConstantAttenuation(1);
        this.setLinearAttenuation(0);
        this.setQuadraticAttenuation(0);
        this.visible = false;
        this.initBuffers()
    }
    initBuffers() {
        this.vertices = [-.5, 0, 0, 0, .5, 0, .5, 0, 0, 0, -.5, 0, 0, 0, .5, 0, 0, -.5];
        this.indices = [1, 4, 0, 1, 2, 4, 1, 5, 2, 1, 0, 5, 3, 0, 4, 3, 4, 2, 3, 2, 5, 3, 5, 0];
        this.normals = [1, 0, 0, 0, -1, 0, -1, 0, 0, 0, 1, 0, 0, 0, -1, 0, 0, 1];
        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers()
    }
    enable() {
        this.enabled = true
    }
    disable() {
        this.enabled = false
    }
    setPosition(t, e, i, n) {
        this.position = [t, e, i, n]
    }
    setAmbient(t, e, i, n) {
        this.ambient = [t, e, i, n]
    }
    setDiffuse(t, e, i, n) {
        this.diffuse = [t, e, i, n]
    }
    setSpecular(t, e, i, n) {
        this.specular = [t, e, i, n]
    }
    setSpotDirection(t, e, i) {
        this.spot_direction = [t, e, i, 1]
    }
    setSpotExponent(t) {
        this.spot_exponent = t
    }
    setSpotCutOff(t) {
        this.spot_cutoff = t
    }
    setConstantAttenuation(t) {
        this.constant_attenuation = t
    }
    setLinearAttenuation(t) {
        this.linear_attenuation = t
    }
    setQuadraticAttenuation(t) {
        this.quadratic_attenuation = t
    }
    update() {
        this.tPosition = [0, 0, 0, 0];
        this.tDirection = [0, 0, 0, 0];
        this.scene.updateInverseMatrix();
        vec4.transformMat4(this.tDirection, this.spot_direction, this.scene.invMatrix);
        vec4.transformMat4(this.tPosition, this.position, this.scene.activeMatrix);
        this.updateShader();
        if (this.visible) {
            this.scene.setDiffuse(.5, .5, .5, 1);
            this.scene.pushMatrix();
            this.scene.translate(this.position[0], this.position[1], this.position[2]);
            this.scene.scale(.3, .3, .3);
            this.display();
            this.scene.popMatrix()
        }
    }
    updateShader() {
        var t = this.scene.gl;
        if (!this.scene.pickMode) try {
            var e = this.scene.activeShader.uniforms.uLight[this.id];
            t.uniform1i(e.enabled, this.enabled);
            t.uniform4fv(e.position, this.tPosition);
            t.uniform4fv(e.ambient, this.ambient);
            t.uniform4fv(e.diffuse, this.diffuse);
            t.uniform4fv(e.specular, this.specular);
            t.uniform3fv(e.spot_direction, [this.tDirection[0], this.tDirection[1], this.tDirection[2]]);
            t.uniform1f(e.spot_exponent, this.spot_exponent);
            t.uniform1f(e.spot_cutoff, this.spot_cutoff);
            t.uniform1f(e.constant_attenuation, this.constant_attenuation);
            t.uniform1f(e.linear_attenuation, this.linear_attenuation);
            t.uniform1f(e.quadratic_attenuation, this.quadratic_attenuation)
        } catch (t) {
            console.log("CGFlight.updateShader: Problem updating light " + this.id)
        }
    }
    setVisible(t) {
        this.visible = t
    }
}
class CGFapplication {
    constructor(t) {
        this.element = t;
        this.initialized = false;
        this.gl = null
    }
    init() {
        if (this.initialized) {
            return true
        }
        var t = document.createElement("canvas");
        this.gl = t.getContext("webgl2", {
            antialias: true
        });
        if (!this.gl) {
            Detector.addGetWebGLMessage({
                parent: this.element
            });
            return false
        }
        this.initialized = true;
        this.element.appendChild(this.gl.canvas);
        this.initScene();
        this.initInterface();
        window.addEventListener("resize", this.resizeCanvas(this.gl));
        this.resizeCanvas(this.gl)();
        return true
    }
    resizeCanvas(t) {
        return function () {
            console.log("resize");
            if (!t) return;
            var e = window.innerWidth;
            var i = window.innerHeight;
            console.log("clientWidth: " + e + ", clientHeight: " + i);
            if (t.canvas.width != e || t.canvas.height != i) {
                console.log("width: " + t.canvas.width + ", height: " + t.canvas.height);
                t.canvas.width = e;
                t.canvas.height = i
            }
        }
    }
    setScene(t) {
        this.scene = t;
        if (this.initialized) {
            this.scene.init(this)
        }
    }
    setInterface(t) {
        this.interface = t;
        if (this.initialized) {
            this.interface.init(this)
        }
    }
    initScene() {
        if (this.scene && this.initialized) {
            return this.scene.init(this)
        }
        return false
    }
    initInterface() {
        if (this.interface && this.initialized) {
            return this.interface.init(this)
        }
        return false
    }
    run() {
        var t = this;

        function e() {
            requestAnimationFrame(e, t.gl.canvas);
            if (t.interface) {
                t.interface.update()
            }
            if (t.scene) {
                t.scene.checkUpdate();
                t.scene.displayWithPick()
            }
        }
        e()
    }
}
class CGFplane extends CGFobject {
    constructor(t, e) {
        super(t);
        this.numDivisions = e ? e + 1 : 2;
        this.initBuffers();
        this.wireframe = false
    }
    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        for (var t = 0; t < this.numDivisions; ++t) {
            for (var e = 0; e < this.numDivisions; ++e) {
                this.vertices.push(t, 0, e);
                this.normals.push(0, 1, 0)
            }
        }
        var i = 0;
        for (var t = 0; t < this.numDivisions - 1; ++t) {
            this.indices.push(i);
            var e;
            for (e = 0; e < this.numDivisions - 1; ++e) {
                this.indices.push(i + (e + 1));
                this.indices.push(i + this.numDivisions + e)
            }
            i += this.numDivisions;
            this.indices.push(i + e)
        }
        this.primitiveType = this.scene.gl.TRIANGLE_STRIP;
        this.initGLBuffers()
    }
    display() {
        this.scene.pushMatrix();
        this.scene.translate(-.5, 0, -.5);
        var t = 1 / (this.numDivisions - 1);
        this.scene.scale(t, 1, t);
        this.drawElements(this.primitiveType);
        this.scene.popMatrix()
    }
}

function indexOf(t) {
    if (typeof Array.prototype.indexOf === "function") {
        indexOf = Array.prototype.indexOf
    } else {
        indexOf = function (t) {
            var e = -1,
                i = -1;
            for (e = 0; e < this.length; e++) {
                if (this[e] === t) {
                    i = e;
                    break
                }
            }
            return i
        }
    }
    return indexOf.call(this, t)
}
class CGFXMLreader {
    constructor() {
        this.xmlhttp = null;
        this.xmlDoc = null;
        this.xmlfile = null;
        this.parserObj = null;
        this.errorMessage = null
    }
    getErrorMessage() {
        return this.errorMessage
    }
    open(t, e) {
        this.xmlfile = t;
        if (typeof e.onXMLReady !== "function") console.error("CGFXMLReader.open: onXMLReady handler not defined.");
        if (typeof e.onXMLError !== "function") console.error("CGFXMLReader.open: onXMLError handler not defined.");
        this.parserObj = e;
        if (window.XMLHttpRequest) {
            this.xmlhttp = new XMLHttpRequest
        } else if (window.ActiveXObject) {
            this.xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
        }
        if (this.xmlhttp != null) {
            var i = this;
            var n = this.xmlhttp;
            this.xmlhttp.onreadystatechange = function (r) {
                if (n.readyState == 4) {
                    if (n.status == 200) {
                        var s = new window.DOMParser;
                        i.xmlDoc = s.parseFromString(this.response, "text/xml");
                        if (i.xmlDoc.getElementsByTagName("parseerror")) {
                            if (typeof e.onXMLError === "function") e.onXMLError("File " + t + " has errors.")
                        }
                        if (typeof e.onXMLReady === "function") e.onXMLReady();
                        if (i.getErrorMessage() != null) {
                            if (typeof e.onXMLError === "function") e.onXMLError(i.getErrorMessage());
                            return
                        }
                    } else {
                        if (typeof e.onXMLError === "function") e.onXMLError(n.status + ": " + i.xmlfile + ", " + n.statusText)
                    }
                }
            };
            this.xmlhttp.onerror = function (t) {
                if (typeof e.onXMLError === "function") e.onXMLError("[CGFXMLreader] Error", n.statusText)
            };
            this.xmlhttp.open("GET", t, true);
            this.xmlhttp.setRequestHeader("Content-Type", "text/xml");
            try {
                this.xmlhttp.send(null)
            } catch (t) {
                if (typeof e.onXMLError === "function") e.onXMLError("[CGFXMLreader] Error", n.statusText)
            }
        } else {
            if (typeof e.onXMLError === "function") e.onXMLError("The XMLHttpRequest is not supported");
            return
        }
    }
    getRGBA(t, e, i) {
        if (i == undefined) i = true;
        if (t == null) {
            console.error("element is null.");
            return null
        }
        if (e == null) {
            console.error("color (rgba) attribute name is null.");
            return null
        }
        var n = t.getAttribute(e);
        if (n == null) {
            if (i) {
                console.error("color (rgba) value is null for attribute " + e + ".")
            }
            return null
        }
        var r = n.split(" ");
        if (r.length != 4) {
            console.error("invalid " + r.length + " number of color components for color (rgba) in attribute " + e + ".");
            return null
        }
        var s = new Array;
        for (var o = 0; o < 4; o++) {
            s.push(parseFloat(r[o]))
        }
        return s
    }
    getVector3(t, e, i) {
        if (i == undefined) i = true;
        if (t == null) {
            console.error("element is null.");
            return null
        }
        if (e == null) {
            console.error("vector3 attribute name is null.");
            return null
        }
        var n = t.getAttribute(e);
        if (n == null) {
            if (i) {
                console.error("vector3 value is null for attribute " + e + ".")
            }
            return null
        }
        var r = n.split(" ");
        if (r.length != 3) {
            console.error("invalid " + r.length + " number of components for a vector3, in attribute " + e + ".");
            return null
        }
        var s = new Array;
        for (var o = 0; o < 3; o++) {
            s.push(parseFloat(r[o]))
        }
        return s
    }
    getVector2(t, e, i) {
        if (i == undefined) i = true;
        if (t == null) {
            console.error("element is null.");
            return null
        }
        if (e == null) {
            console.error("vector3 attribute name is null.");
            return null
        }
        var n = t.getAttribute(e);
        if (n == null) {
            if (i) {
                console.error("vector2 value is null for attribute " + e + ".")
            }
            return null
        }
        var r = n.split(" ");
        if (r.length != 2) {
            console.error("invalid " + r.length + " number of components for a vector2, in attribute " + e + ".");
            return null
        }
        var s = new Array;
        for (var o = 0; o < 2; o++) {
            s.push(parseFloat(r[o]))
        }
        return s
    }
    getItem(t, e, i, n) {
        if (n == undefined) n = true;
        if (t == null) {
            console.error("element is null.");
            return null
        }
        if (e == null) {
            console.error("item attribute name is null.");
            return null
        }
        var r = t.getAttribute(e);
        if (r == null) {
            if (n) {
                console.error("item value is null for attribute " + e + ".")
            }
            return null
        }
        r = r.toLowerCase();
        var s = indexOf.call(i, r);
        if (s < 0) {
            console.error("value '" + r + "' is not a choice in [" + i.toString() + "]");
            return null
        }
        return r
    }
    getString(t, e, i) {
        if (i == undefined) i = true;
        if (t == null) {
            console.error("element is null.");
            return null
        }
        if (e == null) {
            console.error("string attribute name is null.");
            return null
        }
        var n = t.getAttribute(e);
        if (n == null && i) {
            console.error("string value is null for attribute " + e + ".");
            return null
        }
        return n
    }
    hasAttribute(t, e) {
        if (t == null) {
            console.error("element is null.");
            return null
        }
        if (e == null) {
            console.error("string attribute name is null.");
            return null
        }
        var i = t.getAttribute(e);
        return i != null
    }
    getBoolean(t, e, i) {
        if (i == undefined) i = true;
        var n = this.getItem(t, e, ["true", "t", "1", "false", "f", "0"], i);
        if (n == null) {
            return null
        }
        if (n == "1" || n == "true" || n == "t") return true;
        return false
    }
    getInteger(t, e, i) {
        if (i == undefined) i = true;
        var n = this.getString(t, e, i);
        if (n == null) {
            return null
        }
        return parseInt(n)
    }
    getFloat(t, e, i) {
        if (i == undefined) i = true;
        var n = this.getString(t, e, i);
        if (n == null) {
            return null
        }
        return parseFloat(n)
    }
}
CGFnurbsUtils = {
    findSpan: function (t, e, i) {
        var n = i.length - t - 1;
        if (e >= i[n]) {
            return n - 1
        }
        if (e <= i[t]) {
            return t
        }
        var r = t;
        var s = n;
        var o = Math.floor((r + s) / 2);
        while (e < i[o] || e >= i[o + 1]) {
            if (e < i[o]) {
                s = o
            } else {
                r = o
            }
            o = Math.floor((r + s) / 2)
        }
        return o
    },
    calcBasisFunctions: function (t, e, i, n) {
        var r = [];
        var s = [];
        var o = [];
        r[0] = 1;
        for (var a = 1; a <= i; ++a) {
            s[a] = e - n[t + 1 - a];
            o[a] = n[t + a] - e;
            var c = 0;
            for (var u = 0; u < a; ++u) {
                var l = o[u + 1];
                var h = s[a - u];
                var d = r[u] / (l + h);
                r[u] = c + l * d;
                c = h * d
            }
            r[a] = c
        }
        return r
    },
    calcBSplinePoint: function (t, e, i, n) {
        var r = this.findSpan(t, n, e);
        var s = this.calcBasisFunctions(r, n, t, e);
        var o = new vec4.fromValues(0, 0, 0, 0);
        for (var a = 0; a <= t; ++a) {
            var c = i[r - t + a];
            var u = s[a];
            var l = c[3] * u;
            o[0] += c[0] * l;
            o[1] += c[1] * l;
            o[2] += c[2] * l;
            o[3] += c[3] * u
        }
        return o
    },
    calcBasisFunctionDerivatives: function (t, e, i, n, r) {
        var s = [];
        for (var o = 0; o <= i; ++o) s[o] = 0;
        var a = [];
        for (var o = 0; o <= n; ++o) a[o] = s.slice(0);
        var c = [];
        for (var o = 0; o <= i; ++o) c[o] = s.slice(0);
        c[0][0] = 1;
        var u = s.slice(0);
        var l = s.slice(0);
        for (var h = 1; h <= i; ++h) {
            u[h] = e - r[t + 1 - h];
            l[h] = r[t + h] - e;
            var d = 0;
            for (var f = 0; f < h; ++f) {
                var p = l[f + 1];
                var m = u[h - f];
                c[h][f] = p + m;
                var v = c[f][h - 1] / c[h][f];
                c[f][h] = d + p * v;
                d = m * v
            }
            c[h][h] = d
        }
        for (var h = 0; h <= i; ++h) {
            a[0][h] = c[h][i]
        }
        for (var f = 0; f <= i; ++f) {
            var _ = 0;
            var g = 1;
            var b = [];
            for (var o = 0; o <= i; ++o) {
                b[o] = s.slice(0)
            }
            b[0][0] = 1;
            for (var x = 1; x <= n; ++x) {
                var y = 0;
                var E = f - x;
                var w = i - x;
                if (f >= x) {
                    b[g][0] = b[_][0] / c[w + 1][E];
                    y = b[g][0] * c[E][w]
                }
                var A = E >= -1 ? 1 : -E;
                var C = f - 1 <= w ? x - 1 : i - f;
                for (var h = A; h <= C; ++h) {
                    b[g][h] = (b[_][h] - b[_][h - 1]) / c[w + 1][E + h];
                    y += b[g][h] * c[E + h][w]
                }
                if (f <= w) {
                    b[g][x] = -b[_][x - 1] / c[w + 1][f];
                    y += b[g][x] * c[f][w]
                }
                a[x][f] = y;
                var h = _;
                _ = g;
                g = h
            }
        }
        var f = i;
        for (var x = 1; x <= n; ++x) {
            for (var h = 0; h <= i; ++h) {
                a[x][h] *= f
            }
            f *= i - x
        }
        return a
    },
    calcBSplineDerivatives: function (t, e, i, n, r) {
        var s = r < t ? r : t;
        var o = [];
        var a = this.findSpan(t, n, e);
        var c = this.calcBasisFunctionDerivatives(a, n, t, s, e);
        var u = [];
        for (var l = 0; l < i.length; ++l) {
            var h = i[l].clone();
            var d = h[3];
            h[0] *= d;
            h[1] *= d;
            h[2] *= d;
            u[l] = h
        }
        for (var f = 0; f <= s; ++f) {
            var h = u[a - t].clone().multiplyScalar(c[f][0]);
            for (var p = 1; p <= t; ++p) {
                h.add(u[a - t + p].clone().multiplyScalar(c[f][p]))
            }
            o[f] = h
        }
        for (var f = s + 1; f <= r + 1; ++f) {
            o[f] = vec4.fromValues(0, 0, 0, 0)
        }
        return o
    },
    calcKoverI: function (t, e) {
        var i = 1;
        for (var n = 2; n <= t; ++n) {
            i *= n
        }
        var r = 1;
        for (var n = 2; n <= e; ++n) {
            r *= n
        }
        for (var n = 2; n <= t - e; ++n) {
            r *= n
        }
        return i / r
    },
    calcRationalCurveDerivatives: function (t) {
        var e = t.length;
        var i = [];
        var n = [];
        for (var r = 0; r < e; ++r) {
            var s = t[r];
            i[r] = vec3.fromValues(s[0], s[1], s[2]);
            n[r] = s[3]
        }
        var o = [];
        for (var a = 0; a < e; ++a) {
            var c = i[a].clone();
            for (var r = 1; r <= a; ++r) {
                c.sub(o[a - r].clone().multiplyScalar(this.calcKoverI(a, r) * n[r]))
            }
            o[a] = c.divideScalar(n[0])
        }
        return o
    },
    calcNURBSDerivatives: function (t, e, i, n, r) {
        var s = this.calcBSplineDerivatives(t, e, i, n, r);
        return this.calcRationalCurveDerivatives(s)
    },
    calcSurfacePoint: function (t, e, i, n, r, s, o) {
        var a = this.findSpan(t, s, i);
        var c = this.findSpan(e, o, n);
        var u = this.calcBasisFunctions(a, s, t, i);
        var l = this.calcBasisFunctions(c, o, e, n);
        var h = [];
        for (var d = 0; d <= e; ++d) {
            h[d] = vec4.fromValues(0, 0, 0, 0);
            for (var f = 0; f <= t; ++f) {
                var p = vec4.clone(r[a - t + f][c - e + d]);
                var m = p[3];
                p[0] *= m;
                p[1] *= m;
                p[2] *= m;
                var v = [];
                vec4.scale(v, p, u[f]);
                vec4.add(h[d], h[d], v)
            }
        }
        var _ = new vec4.fromValues(0, 0, 0, 0);
        for (var d = 0; d <= e; ++d) {
            var g = [];
            vec4.scale(g, h[d], l[d]);
            vec4.add(_, _, g)
        }
        _[0] = _[0] / _[3];
        _[1] = _[1] / _[3];
        _[2] = _[2] / _[3];
        return new vec3.fromValues(_[0], _[1], _[2])
    }
};
CGFnurbsSurface = function (t, e, i) {
    this.degree1 = t;
    this.degree2 = e;
    this.knots1 = this.generateKnots(t);
    this.knots2 = this.generateKnots(e);
    this.controlPoints = [];
    var n = t + 1;
    var r = e + 1;
    for (var s = 0; s < n; ++s) {
        this.controlPoints[s] = [];
        for (var o = 0; o < r; ++o) {
            var a = i[s][o];
            this.controlPoints[s][o] = new vec4.fromValues(a[0], a[1], a[2], a[3])
        }
    }
};
CGFnurbsSurface.prototype = {
    constructor: CGFnurbsSurface,
    getPoint: function (t, e) {
        var i = this.knots1[0] + t * (this.knots1[this.knots1.length - 1] - this.knots1[0]);
        var n = this.knots2[0] + e * (this.knots2[this.knots2.length - 1] - this.knots2[0]);
        return CGFnurbsUtils.calcSurfacePoint(this.degree1, this.degree2, this.knots1, this.knots2, this.controlPoints, i, n)
    },
    generateKnots: function (t) {
        n = t + 1;
        res = [];
        for (v = 0; v <= 1; v++)
            for (i = 0; i < n; i++) res.push(v);
        return res
    }
};
CGFnurbsObject = function (t, e, i, n) {
    CGFobject.call(this, t);
    this.evalObj = n;
    this.slices = e;
    this.stacks = i;
    this.initBuffers();
    this.wireframe = false;
    this.pickingEnabled = true
};
CGFnurbsObject.prototype = Object.create(CGFobject.prototype);
CGFnurbsObject.prototype.constructor = CGFnurbsObject;
CGFnurbsObject.prototype.initBuffers = function () {
    this.vertices = [];
    this.faceNormals = [];
    this.texCoords = [];
    this.colors = [];
    this.indices = [];
    this.faces = [];
    var t, e, i;
    var n, r;
    var s = this.slices + 1;
    var o;
    for (t = 0; t <= this.stacks; t++) {
        r = t / this.stacks;
        for (e = 0; e <= this.slices; e++) {
            n = e / this.slices;
            i = this.evalObj.getPoint(n, r);
            this.vertices.push(i[0]);
            this.vertices.push(i[1]);
            this.vertices.push(i[2]);
            o = vec2.fromValues(e / this.slices, t / this.stacks);
            this.texCoords.push(o[0]);
            this.texCoords.push(1 - o[1])
        }
    }
    var a, c, u, l;
    for (t = 0; t < this.stacks; t++) {
        for (e = 0; e < this.slices; e++) {
            a = t * s + e;
            c = t * s + e + 1;
            u = (t + 1) * s + e + 1;
            l = (t + 1) * s + e;
            this.indices.push(a);
            this.indices.push(c);
            this.indices.push(l);
            this.faceNormals.push(this.computeFaceNormal(a, c, l, s));
            this.indices.push(c);
            this.indices.push(u);
            this.indices.push(l);
            this.faceNormals.push(this.computeFaceNormal(c, u, l, s))
        }
    }
    this.normals = this.computeVertexNormals();
    this.primitiveType = this.scene.gl.TRIANGLES;
    this.initGLBuffers()
};
CGFnurbsObject.prototype.computeFaceNormal = function (t, e, i, n) {
    var r = t * 3;
    var s = e * 3;
    var o = i * 3;
    var a = vec3.fromValues(this.vertices[r], this.vertices[r + 1], this.vertices[r + 2]);
    var c = vec3.fromValues(this.vertices[s], this.vertices[s + 1], this.vertices[s + 2]);
    var u = vec3.fromValues(this.vertices[o], this.vertices[o + 1], this.vertices[o + 2]);
    var l = vec3.create();
    var h = vec3.create();
    var d = vec3.create();
    vec3.subtract(l, c, a);
    vec3.subtract(h, u, a);
    vec3.cross(d, l, h);
    vec3.normalize(d, d);
    return d
};
CGFnurbsObject.prototype.computeVertexNormals = function () {
    var t = this.vertices.length;
    var e = new Array(t);
    for (var i = 0; i < t; i++) {
        e[i] = vec3.fromValues(0, 0, 0)
    }
    var n, r, s;
    var o;
    var a = 0;
    var c = this.indices.length;
    for (var i = 0; i < c; i += 3) {
        o = this.faceNormals[a];
        n = this.indices[i + 0];
        r = this.indices[i + 1];
        s = this.indices[i + 2];
        vec3.add(e[n], e[n], o);
        vec3.add(e[r], e[r], o);
        vec3.add(e[s], e[s], o);
        a++
    }
    var u = [];
    for (var i = 0; i < t; i++) {
        vec3.normalize(e[i], e[i]);
        u.push(e[i][0], e[i][1], e[i][2])
    }
    return u
};
CGFnurbsObject.prototype.display = function () {
    this.scene.pushMatrix();
    this.drawElements(this.primitiveType);
    this.scene.popMatrix()
};
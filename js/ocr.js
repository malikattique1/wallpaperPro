/**
 * Minified by jsDelivr using UglifyJS v3.4.0.
 * Original file: /gh/naptha/tesseract.js@1.0.10/dist/tesseract.js
 * 
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
! function(e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Tesseract = e()
    }
}(function() {
    return function s(i, a, c) {
        function u(r, e) {
            if (!a[r]) {
                if (!i[r]) {
                    var t = "function" == typeof require && require;
                    if (!e && t) return t(r, !0);
                    if (l) return l(r, !0);
                    var n = new Error("Cannot find module '" + r + "'");
                    throw n.code = "MODULE_NOT_FOUND", n
                }
                var o = a[r] = {
                    exports: {}
                };
                i[r][0].call(o.exports, function(e) {
                    var t = i[r][1][e];
                    return u(t || e)
                }, o, o.exports, s, i, a, c)
            }
            return a[r].exports
        }
        for (var l = "function" == typeof require && require, e = 0; e < c.length; e++) u(c[e]);
        return u
    }({
        1: [function(e, t, r) {
            "use strict";
            var c = Object.prototype.hasOwnProperty,
                u = Object.prototype.propertyIsEnumerable;
            t.exports = function() {
                try {
                    if (!Object.assign) return !1;
                    var e = new String("abc");
                    if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                    for (var t = {}, r = 0; r < 10; r++) t["_" + String.fromCharCode(r)] = r;
                    if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(e) {
                            return t[e]
                        }).join("")) return !1;
                    var n = {};
                    return "abcdefghijklmnopqrst".split("").forEach(function(e) {
                        n[e] = e
                    }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
                } catch (e) {
                    return !1
                }
            }() ? Object.assign : function(e, t) {
                for (var r, n, o = function(e) {
                        if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
                        return Object(e)
                    }(e), s = 1; s < arguments.length; s++) {
                    for (var i in r = Object(arguments[s])) c.call(r, i) && (o[i] = r[i]);
                    if (Object.getOwnPropertySymbols) {
                        n = Object.getOwnPropertySymbols(r);
                        for (var a = 0; a < n.length; a++) u.call(r, n[a]) && (o[n[a]] = r[n[a]])
                    }
                }
                return o
            }
        }, {}],
        2: [function(e, t, r) {
            var n, o, s = t.exports = {};
            function i() {
                throw new Error("setTimeout has not been defined")
            }
            function a() {
                throw new Error("clearTimeout has not been defined")
            }
            function c(t) {
                if (n === setTimeout) return setTimeout(t, 0);
                if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);
                try {
                    return n(t, 0)
                } catch (e) {
                    try {
                        return n.call(null, t, 0)
                    } catch (e) {
                        return n.call(this, t, 0)
                    }
                }
            }! function() {
                try {
                    n = "function" == typeof setTimeout ? setTimeout : i
                } catch (e) {
                    n = i
                }
                try {
                    o = "function" == typeof clearTimeout ? clearTimeout : a
                } catch (e) {
                    o = a
                }
            }();
            var u, l = [],
                f = !1,
                h = -1;
            function p() {
                f && u && (f = !1, u.length ? l = u.concat(l) : h = -1, l.length && d())
            }
            function d() {
                if (!f) {
                    var e = c(p);
                    f = !0;
                    for (var t = l.length; t;) {
                        for (u = l, l = []; ++h < t;) u && u[h].run();
                        h = -1, t = l.length
                    }
                    u = null, f = !1,
                        function(t) {
                            if (o === clearTimeout) return clearTimeout(t);
                            if ((o === a || !o) && clearTimeout) return o = clearTimeout, clearTimeout(t);
                            try {
                                o(t)
                            } catch (e) {
                                try {
                                    return o.call(null, t)
                                } catch (e) {
                                    return o.call(this, t)
                                }
                            }
                        }(e)
                }
            }
            function g(e, t) {
                this.fun = e, this.array = t
            }
            function b() {}
            s.nextTick = function(e) {
                var t = new Array(arguments.length - 1);
                if (1 < arguments.length)
                    for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                l.push(new g(e, t)), 1 !== l.length || f || c(d)
            }, g.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, s.title = "browser", s.browser = !0, s.env = {}, s.argv = [], s.version = "", s.versions = {}, s.on = b, s.addListener = b, s.once = b, s.off = b, s.removeListener = b, s.removeAllListeners = b, s.emit = b, s.binding = function(e) {
                throw new Error("process.binding is not supported")
            }, s.cwd = function() {
                return "/"
            }, s.chdir = function(e) {
                throw new Error("process.chdir is not supported")
            }, s.umask = function() {
                return 0
            }
        }, {}],
        3: [function(e, t, r) {
            t.exports = {
                name: "tesseract.js",
                version: "1.0.10",
                description: "Pure Javascript Multilingual OCR",
                main: "src/index.js",
                scripts: {
                    test: 'echo "Error: no test specified" & exit 1',
                    start: "watchify src/index.js  -t [ envify --NODE_ENV development ] -t [ babelify --presets [ es2015 ] ] -o dist/tesseract.dev.js --standalone Tesseract & watchify src/browser/worker.js  -t [ envify --NODE_ENV development ] -t [ babelify --presets [ es2015 ] ] -o dist/worker.dev.js & http-server -p 7355",
                    build: "browserify src/index.js -t [ babelify --presets [ es2015 ] ] -o dist/tesseract.js --standalone Tesseract && browserify src/browser/worker.js -t [ babelify --presets [ es2015 ] ] -o dist/worker.js",
                    release: "npm run build && git commit -am 'new release' && git push && git tag `jq -r '.version' package.json` && git push origin --tags && npm publish"
                },
                browser: {
                    "./src/node/index.js": "./src/browser/index.js"
                },
                author: "",
                license: "Apache-2.0",
                devDependencies: {
                    "babel-preset-es2015": "^6.16.0",
                    babelify: "^7.3.0",
                    browserify: "^13.1.0",
                    envify: "^3.4.1",
                    "http-server": "^0.9.0",
                    pako: "^1.0.3",
                    watchify: "^3.7.0"
                },
                dependencies: {
                    "file-type": "^3.8.0",
                    "is-url": "^1.2.2",
                    "jpeg-js": "^0.2.0",
                    "level-js": "^2.2.4",
                    "node-fetch": "^1.6.3",
                    "object-assign": "^4.1.0",
                    "png.js": "^0.2.1",
                    "tesseract.js-core": "^1.0.2"
                },
                repository: {
                    type: "git",
                    url: "https://github.com/naptha/tesseract.js.git"
                },
                bugs: {
                    url: "https://github.com/naptha/tesseract.js/issues"
                },
                homepage: "https://github.com/naptha/tesseract.js"
            }
        }, {}],
        4: [function(n, e, o) {
            (function(e) {
                "use strict";
                var t = {
                    corePath: "https://cdn.rawgit.com/naptha/tesseract.js-core/0.1.0/index.js",
                    langPath: "https://cdn.rawgit.com/naptha/tessdata/gh-pages/3.02/"
                };
                if ("development" === e.env.NODE_ENV) console.debug("Using Development Configuration"), t.workerPath = location.protocol + "//" + location.host + "/dist/worker.dev.js?nocache=" + Math.random().toString(36).slice(3);
                else {
                    var r = n("../../package.json").version;
                    t.workerPath = "https://cdn.rawgit.com/naptha/tesseract.js/" + r + "/dist/worker.js"
                }
                o.defaultOptions = t, o.spawnWorker = function(r, e) {
                    if (window.Blob && window.URL) var t = new Blob(['importScripts("' + e.workerPath + '");']),
                        n = new Worker(window.URL.createObjectURL(t));
                    else n = new Worker(e.workerPath);
                    return n.onmessage = function(e) {
                        var t = e.data;
                        r._recv(t)
                    }, n
                }, o.terminateWorker = function(e) {
                    e.worker.terminate()
                }, o.sendPacket = function(t, r) {
                    ! function t(r, n) {
                        {
                            if ("string" == typeof r) {
                                if (/^\#/.test(r)) return t(document.querySelector(r), n);
                                if (/(blob|data)\:/.test(r)) {
                                    var o = new Image;
                                    return o.src = r, void(o.onload = function(e) {
                                        return t(o, n)
                                    })
                                }
                                var s = new XMLHttpRequest;
                                return s.open("GET", r, !0), s.responseType = "blob", s.onload = function(e) {
                                    return t(s.response, n)
                                }, s.onerror = function(e) {
                                    /^https?:\/\//.test(r) && !/^https:\/\/crossorigin.me/.test(r) && (console.debug("Attempting to load image with CORS proxy"), t("https://crossorigin.me/" + r, n))
                                }, void s.send(null)
                            }
                            if (r instanceof File) {
                                var i = new FileReader;
                                return i.onload = function(e) {
                                    return t(i.result, n)
                                }, void i.readAsDataURL(r)
                            }
                            if (r instanceof Blob) return t(URL.createObjectURL(r), n);
                            if (r.getContext) return t(r.getContext("2d"), n);
                            if ("IMG" == r.tagName || "VIDEO" == r.tagName) {
                                var e = document.createElement("canvas");
                                e.width = r.naturalWidth || r.videoWidth, e.height = r.naturalHeight || r.videoHeight;
                                var a = e.getContext("2d");
                                return a.drawImage(r, 0, 0), t(a, n)
                            }
                            if (r.getImageData) {
                                var c = r.getImageData(0, 0, r.canvas.width, r.canvas.height);
                                return t(c, n)
                            }
                            return n(r)
                        }
                        throw new Error("Missing return in loadImage cascade")
                    }(r.payload.image, function(e) {
                        r.payload.image = e, t.worker.postMessage(r)
                    })
                }
            }).call(this, n("_process"))
        }, {
            "../../package.json": 3,
            _process: 2
        }],
        5: [function(e, t, r) {
            "use strict";
            t.exports = function(s) {
                return s.paragraphs = [], s.lines = [], s.words = [], s.symbols = [], s.blocks.forEach(function(o) {
                    o.page = s, o.lines = [], o.words = [], o.symbols = [], o.paragraphs.forEach(function(n) {
                        n.block = o, n.page = s, n.words = [], n.symbols = [], n.lines.forEach(function(r) {
                            r.paragraph = n, r.block = o, r.page = s, r.symbols = [], r.words.forEach(function(t) {
                                t.line = r, t.paragraph = n, t.block = o, t.page = s, t.symbols.forEach(function(e) {
                                    e.word = t, e.line = r, e.paragraph = n, e.block = o, e.page = s, e.line.symbols.push(e), e.paragraph.symbols.push(e), e.block.symbols.push(e), e.page.symbols.push(e)
                                }), t.paragraph.words.push(t), t.block.words.push(t), t.page.words.push(t)
                            }), r.block.lines.push(r), r.page.lines.push(r)
                        }), n.page.paragraphs.push(n)
                    })
                }), s
            }
        }, {}],
        6: [function(e, t, r) {
            "use strict";
            var n = function() {
                function n(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(e, t, r) {
                    return t && n(e.prototype, t), r && n(e, r), e
                }
            }();
            var o = e("../node/index.js"),
                s = 0;
            t.exports = function() {
                function t(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.id = "Job-" + ++s + "-" + Math.random().toString(16).slice(3, 8), this._instance = e, this._resolve = [], this._reject = [], this._progress = [], this._finally = []
                }
                return n(t, [{
                    key: "then",
                    value: function(e, t) {
                        return this._resolve.push ? this._resolve.push(e) : e(this._resolve), t && this.catch(t), this
                    }
                }, {
                    key: "catch",
                    value: function(e) {
                        return this._reject.push ? this._reject.push(e) : e(this._reject), this
                    }
                }, {
                    key: "progress",
                    value: function(e) {
                        return this._progress.push(e), this
                    }
                }, {
                    key: "finally",
                    value: function(e) {
                        return this._finally.push(e), this
                    }
                }, {
                    key: "_send",
                    value: function(e, t) {
                        o.sendPacket(this._instance, {
                            jobId: this.id,
                            action: e,
                            payload: t
                        })
                    }
                }, {
                    key: "_handle",
                    value: function(e) {
                        var r = e.data,
                            t = !1;
                        "resolve" === e.status ? (0 === this._resolve.length && console.log(r), this._resolve.forEach(function(e) {
                            var t = e(r);
                            t && "function" == typeof t.then && console.warn("TesseractJob instances do not chain like ES6 Promises. To convert it into a real promise, use Promise.resolve.")
                        }), this._resolve = r, this._instance._dequeue(), t = !0) : "reject" === e.status ? (0 === this._reject.length && console.error(r), this._reject.forEach(function(e) {
                            return e(r)
                        }), this._reject = r, this._instance._dequeue(), t = !0) : "progress" === e.status ? this._progress.forEach(function(e) {
                            return e(r)
                        }) : console.warn("Message type unknown", e.status), t && this._finally.forEach(function(e) {
                            return e(r)
                        })
                    }
                }]), t
            }()
        }, {
            "../node/index.js": 4
        }],
        7: [function(e, t, r) {
            "use strict";
            var n = function() {
                function n(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(e, t, r) {
                    return t && n(e.prototype, t), r && n(e, r), e
                }
            }();
            var o = e("./node/index.js"),
                s = e("./common/circularize.js"),
                i = e("./common/job"),
                a = e("object-assign"),
                c = e("../package.json").version;
            var u = function() {
                    function t(e) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), this.worker = null, this.workerOptions = e, this._currentJob = null, this._queue = []
                    }
                    return n(t, [{
                        key: "recognize",
                        value: function(t, r) {
                            var n = this;
                            return this._delay(function(e) {
                                "string" == typeof r ? r = {
                                    lang: r
                                } : (r = r || {}).lang = r.lang || "eng", e._send("recognize", {
                                    image: t,
                                    options: r,
                                    workerOptions: n.workerOptions
                                })
                            })
                        }
                    }, {
                        key: "detect",
                        value: function(t, r) {
                            var n = this;
                            return r = r || {}, this._delay(function(e) {
                                e._send("detect", {
                                    image: t,
                                    options: r,
                                    workerOptions: n.workerOptions
                                })
                            })
                        }
                    }, {
                        key: "terminate",
                        value: function() {
                            this.worker && o.terminateWorker(this), this.worker = null
                        }
                    }, {
                        key: "_delay",
                        value: function(t) {
                            var r = this;
                            this.worker || (this.worker = o.spawnWorker(this, this.workerOptions));
                            var n = new i(this);
                            return this._queue.push(function(e) {
                                r._queue.shift(), r._currentJob = n, t(n)
                            }), this._currentJob || this._dequeue(), n
                        }
                    }, {
                        key: "_dequeue",
                        value: function() {
                            this._currentJob = null, 0 < this._queue.length && this._queue[0]()
                        }
                    }, {
                        key: "_recv",
                        value: function(e) {
                            "resolve" === e.status && "recognize" === e.action && (e.data = s(e.data)), this._currentJob.id === e.jobId ? this._currentJob._handle(e) : console.warn("Job ID " + e.jobId + " not known.")
                        }
                    }]), t
                }(),
                l = function e(t) {
                    t = t || {};
                    var r = new u(a({}, o.defaultOptions, t));
                    return r.create = e, r.version = c, r
                }();
            t.exports = l
        }, {
            "../package.json": 3,
            "./common/circularize.js": 5,
            "./common/job": 6,
            "./node/index.js": 4,
            "object-assign": 1
        }]
    }, {}, [7])(7)
});
//# sourceMappingURL=/sm/a1f8297b4b947a31b952aece50572535cc97fbd312656b091efa2ce91a3fbf9b.map
/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = {
    assign: function assign(target, source) {
        if (this.isObject(target) && !this.isFunction(target)) {
            if (this.isNull(source) || this.isDate(source) || this.isFunction(source)) {
                target = source;
            }

            if (this.isArray(source)) {
                if (!this.isArray(target)) {
                    console.error("Error: cannot combine an array into a non-array.");
                    return target;
                }

                target = target.concat(source);
            } else {
                if (!this.isObject(source)) {
                    console.error("Error: cannot combine a non-object into an object.");
                    return target;
                }

                this.forIn(source, function (value, key) {
                    target[key] = value;
                });
            }
        } else {
            target = source;
        }
    },

    ceil: function ceil(num) {
        return Math.ceil(num);
    },

    clone: function clone(obj) {
        var ret;

        if (this.isObject(obj) && !this.isFunction(obj)) {
            if (this.isNull(obj) || this.isDate(obj)) {
                return obj;
            }

            if (this.isArray(obj)) {
                ret = [];

                this.forEach(obj, (function (item) {
                    ret[i] = this.isObject(item) && !this.isFunction(item) ? this.clone(item) : item;
                }).bind(this));
            } else {
                ret = {};

                this.forIn(obj, (function (value, key) {
                    if (obj.hasOwnProperty(key)) {
                        ret[key] = this.isObject(value) && !this.isFunction(value) ? this.clone(value) : value;
                    }
                }).bind(this));
            }
        } else {
            ret = obj;
        }

        return ret;
    },

    forEach: function forEach(arr, cb) {
        if (!this.isArray(arr) && !this.isArguments(arr)) {
            console.error("Error: first parameter needs to be an array.");
            return;
        }

        var i = 0,
            len = arr.length;

        for (; i < len; i++) {
            if (cb(arr[i], i, arr) === false) {
                break;
            }
        }
    },

    forEachRight: function forEachRight(arr, cb) {
        if (!this.isArray(arr) && !this.isArguments(arr)) {
            console.error("Error: first parameter needs to be an array.");
            return;
        }

        var i = arr.length;

        for (; i--;) {
            if (cb(arr[i], i, arr) === false) {
                break;
            }
        }
    },

    forIn: function forIn(obj, cb) {
        if (this.isUndefined(obj)) {
            obj = {};
        }

        if (!this.isObject(obj) || this.isFunction(obj)) {
            console.error("Error: first parameter needs to be an object.");
            return;
        }

        this.forEach(Object.keys(obj), function (key) {
            return cb(obj[key], key, obj);
        });
    },

    isArguments: function isArguments(obj) {
        return !this.isNull(obj) && (toString.call(obj) === "[object Arguments]" || this.isObject(obj) && "callee" in obj);
    },

    isArray: function isArray(obj) {
        return toString.call(obj) === "[object Array]";
    },

    isDate: function isDate(obj) {
        return toString.call(obj) === "[object Date]";
    },

    isFunction: function isFunction(obj) {
        return toString.call(obj) === "[object Function]" || typeof obj === "function";
    },

    isNull: function isNull(obj) {
        return obj === null;
    },

    isObject: function isObject(obj) {
        var type = typeof obj;

        return type === "function" || type === "object" && !!obj;
    },

    isString: function isString(obj) {
        return toString.call(obj) === "[object String]";
    },

    isUndefined: function isUndefined(obj) {
        return obj === void 0;
    },

    kebabCase: function kebabCase(str) {
        return str.replace(/([A-Z])/g, function ($1) {
            return "-" + $1.toLowerCase();
        });
    },

    merge: function merge(target, source) {
        var dest;

        if (this.isArray(source)) {
            if (!this.isArray(target)) {
                console.error("Error: Trying to merge array with non-array.");
                return dest;
            }

            dest = [].concat(target || []);

            this.forEach(source, (function (item, i) {
                if (this.isUndefined(dest[i])) {
                    dest[i] = item;
                } else if (this.isObject(item) && !this.isFunction(item)) {
                    dest[i] = this.merge(target[i], item);
                } else {
                    if (target.indexOf(item) === -1) {
                        dest[i] = item;
                    }
                }
            }).bind(this));
        } else {
            dest = {};

            if (target && this.isObject(target) && !this.isFunction(target)) {
                this.forIn(target, function (value, key) {
                    dest[key] = value;
                });
            }

            this.forIn(source, (function (value, key) {
                dest[key] = this.isUndefined(target[key]) || !this.isObject(value) && !this.isUndefined(value) ? value : this.merge(target[key], value || {});
            }).bind(this));
        }

        return dest;
    },

    parseInt: (function (_parseInt) {
        function parseInt(_x, _x2) {
            return _parseInt.apply(this, arguments);
        }

        parseInt.toString = function () {
            return _parseInt.toString();
        };

        return parseInt;
    })(function (num, radix) {
        return parseInt(num, radix || 10);
    }),

    uniq: function uniq(arr) {
        var seen = {},
            out = [],
            j = 0;

        this.forEach(arr, function (item) {
            if (seen[item] !== 1) {
                seen[item] = 1;
                out[j++] = item;
            }
        });

        return out;
    }
};
module.exports = exports["default"];
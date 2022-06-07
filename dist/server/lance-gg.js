var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/type/value/is.js
var require_is = __commonJS({
  "node_modules/type/value/is.js"(exports, module2) {
    "use strict";
    var _undefined = void 0;
    module2.exports = function(value) {
      return value !== _undefined && value !== null;
    };
  }
});

// node_modules/type/object/is.js
var require_is2 = __commonJS({
  "node_modules/type/object/is.js"(exports, module2) {
    "use strict";
    var isValue = require_is();
    var possibleTypes = { "object": true, "function": true, "undefined": true };
    module2.exports = function(value) {
      if (!isValue(value))
        return false;
      return hasOwnProperty.call(possibleTypes, typeof value);
    };
  }
});

// node_modules/type/prototype/is.js
var require_is3 = __commonJS({
  "node_modules/type/prototype/is.js"(exports, module2) {
    "use strict";
    var isObject = require_is2();
    module2.exports = function(value) {
      if (!isObject(value))
        return false;
      try {
        if (!value.constructor)
          return false;
        return value.constructor.prototype === value;
      } catch (error) {
        return false;
      }
    };
  }
});

// node_modules/type/function/is.js
var require_is4 = __commonJS({
  "node_modules/type/function/is.js"(exports, module2) {
    "use strict";
    var isPrototype = require_is3();
    module2.exports = function(value) {
      if (typeof value !== "function")
        return false;
      if (!hasOwnProperty.call(value, "length"))
        return false;
      try {
        if (typeof value.length !== "number")
          return false;
        if (typeof value.call !== "function")
          return false;
        if (typeof value.apply !== "function")
          return false;
      } catch (error) {
        return false;
      }
      return !isPrototype(value);
    };
  }
});

// node_modules/type/plain-function/is.js
var require_is5 = __commonJS({
  "node_modules/type/plain-function/is.js"(exports, module2) {
    "use strict";
    var isFunction = require_is4();
    var classRe = /^\s*class[\s{/}]/;
    var functionToString = Function.prototype.toString;
    module2.exports = function(value) {
      if (!isFunction(value))
        return false;
      if (classRe.test(functionToString.call(value)))
        return false;
      return true;
    };
  }
});

// node_modules/es5-ext/object/assign/is-implemented.js
var require_is_implemented = __commonJS({
  "node_modules/es5-ext/object/assign/is-implemented.js"(exports, module2) {
    "use strict";
    module2.exports = function() {
      var assign = Object.assign, obj;
      if (typeof assign !== "function")
        return false;
      obj = { foo: "raz" };
      assign(obj, { bar: "dwa" }, { trzy: "trzy" });
      return obj.foo + obj.bar + obj.trzy === "razdwatrzy";
    };
  }
});

// node_modules/es5-ext/object/keys/is-implemented.js
var require_is_implemented2 = __commonJS({
  "node_modules/es5-ext/object/keys/is-implemented.js"(exports, module2) {
    "use strict";
    module2.exports = function() {
      try {
        Object.keys("primitive");
        return true;
      } catch (e) {
        return false;
      }
    };
  }
});

// node_modules/es5-ext/function/noop.js
var require_noop = __commonJS({
  "node_modules/es5-ext/function/noop.js"(exports, module2) {
    "use strict";
    module2.exports = function() {
    };
  }
});

// node_modules/es5-ext/object/is-value.js
var require_is_value = __commonJS({
  "node_modules/es5-ext/object/is-value.js"(exports, module2) {
    "use strict";
    var _undefined = require_noop()();
    module2.exports = function(val) {
      return val !== _undefined && val !== null;
    };
  }
});

// node_modules/es5-ext/object/keys/shim.js
var require_shim = __commonJS({
  "node_modules/es5-ext/object/keys/shim.js"(exports, module2) {
    "use strict";
    var isValue = require_is_value();
    var keys = Object.keys;
    module2.exports = function(object) {
      return keys(isValue(object) ? Object(object) : object);
    };
  }
});

// node_modules/es5-ext/object/keys/index.js
var require_keys = __commonJS({
  "node_modules/es5-ext/object/keys/index.js"(exports, module2) {
    "use strict";
    module2.exports = require_is_implemented2()() ? Object.keys : require_shim();
  }
});

// node_modules/es5-ext/object/valid-value.js
var require_valid_value = __commonJS({
  "node_modules/es5-ext/object/valid-value.js"(exports, module2) {
    "use strict";
    var isValue = require_is_value();
    module2.exports = function(value) {
      if (!isValue(value))
        throw new TypeError("Cannot use null or undefined");
      return value;
    };
  }
});

// node_modules/es5-ext/object/assign/shim.js
var require_shim2 = __commonJS({
  "node_modules/es5-ext/object/assign/shim.js"(exports, module2) {
    "use strict";
    var keys = require_keys();
    var value = require_valid_value();
    var max = Math.max;
    module2.exports = function(dest, src) {
      var error, i, length = max(arguments.length, 2), assign;
      dest = Object(value(dest));
      assign = function(key) {
        try {
          dest[key] = src[key];
        } catch (e) {
          if (!error)
            error = e;
        }
      };
      for (i = 1; i < length; ++i) {
        src = arguments[i];
        keys(src).forEach(assign);
      }
      if (error !== void 0)
        throw error;
      return dest;
    };
  }
});

// node_modules/es5-ext/object/assign/index.js
var require_assign = __commonJS({
  "node_modules/es5-ext/object/assign/index.js"(exports, module2) {
    "use strict";
    module2.exports = require_is_implemented()() ? Object.assign : require_shim2();
  }
});

// node_modules/es5-ext/object/normalize-options.js
var require_normalize_options = __commonJS({
  "node_modules/es5-ext/object/normalize-options.js"(exports, module2) {
    "use strict";
    var isValue = require_is_value();
    var forEach = Array.prototype.forEach;
    var create = Object.create;
    var process2 = function(src, obj) {
      var key;
      for (key in src)
        obj[key] = src[key];
    };
    module2.exports = function(opts1) {
      var result = create(null);
      forEach.call(arguments, function(options) {
        if (!isValue(options))
          return;
        process2(Object(options), result);
      });
      return result;
    };
  }
});

// node_modules/es5-ext/string/#/contains/is-implemented.js
var require_is_implemented3 = __commonJS({
  "node_modules/es5-ext/string/#/contains/is-implemented.js"(exports, module2) {
    "use strict";
    var str = "razdwatrzy";
    module2.exports = function() {
      if (typeof str.contains !== "function")
        return false;
      return str.contains("dwa") === true && str.contains("foo") === false;
    };
  }
});

// node_modules/es5-ext/string/#/contains/shim.js
var require_shim3 = __commonJS({
  "node_modules/es5-ext/string/#/contains/shim.js"(exports, module2) {
    "use strict";
    var indexOf = String.prototype.indexOf;
    module2.exports = function(searchString) {
      return indexOf.call(this, searchString, arguments[1]) > -1;
    };
  }
});

// node_modules/es5-ext/string/#/contains/index.js
var require_contains = __commonJS({
  "node_modules/es5-ext/string/#/contains/index.js"(exports, module2) {
    "use strict";
    module2.exports = require_is_implemented3()() ? String.prototype.contains : require_shim3();
  }
});

// node_modules/d/index.js
var require_d = __commonJS({
  "node_modules/d/index.js"(exports, module2) {
    "use strict";
    var isValue = require_is();
    var isPlainFunction = require_is5();
    var assign = require_assign();
    var normalizeOpts = require_normalize_options();
    var contains = require_contains();
    var d = module2.exports = function(dscr, value) {
      var c, e, w, options, desc;
      if (arguments.length < 2 || typeof dscr !== "string") {
        options = value;
        value = dscr;
        dscr = null;
      } else {
        options = arguments[2];
      }
      if (isValue(dscr)) {
        c = contains.call(dscr, "c");
        e = contains.call(dscr, "e");
        w = contains.call(dscr, "w");
      } else {
        c = w = true;
        e = false;
      }
      desc = { value, configurable: c, enumerable: e, writable: w };
      return !options ? desc : assign(normalizeOpts(options), desc);
    };
    d.gs = function(dscr, get, set) {
      var c, e, options, desc;
      if (typeof dscr !== "string") {
        options = set;
        set = get;
        get = dscr;
        dscr = null;
      } else {
        options = arguments[3];
      }
      if (!isValue(get)) {
        get = void 0;
      } else if (!isPlainFunction(get)) {
        options = get;
        get = set = void 0;
      } else if (!isValue(set)) {
        set = void 0;
      } else if (!isPlainFunction(set)) {
        options = set;
        set = void 0;
      }
      if (isValue(dscr)) {
        c = contains.call(dscr, "c");
        e = contains.call(dscr, "e");
      } else {
        c = true;
        e = false;
      }
      desc = { get, set, configurable: c, enumerable: e };
      return !options ? desc : assign(normalizeOpts(options), desc);
    };
  }
});

// node_modules/es5-ext/object/valid-callable.js
var require_valid_callable = __commonJS({
  "node_modules/es5-ext/object/valid-callable.js"(exports, module2) {
    "use strict";
    module2.exports = function(fn) {
      if (typeof fn !== "function")
        throw new TypeError(fn + " is not a function");
      return fn;
    };
  }
});

// node_modules/event-emitter/index.js
var require_event_emitter = __commonJS({
  "node_modules/event-emitter/index.js"(exports, module2) {
    "use strict";
    var d = require_d();
    var callable = require_valid_callable();
    var apply = Function.prototype.apply;
    var call = Function.prototype.call;
    var create = Object.create;
    var defineProperty = Object.defineProperty;
    var defineProperties = Object.defineProperties;
    var hasOwnProperty2 = Object.prototype.hasOwnProperty;
    var descriptor = { configurable: true, enumerable: false, writable: true };
    var on;
    var once;
    var off;
    var emit;
    var methods;
    var descriptors;
    var base;
    on = function(type, listener) {
      var data;
      callable(listener);
      if (!hasOwnProperty2.call(this, "__ee__")) {
        data = descriptor.value = create(null);
        defineProperty(this, "__ee__", descriptor);
        descriptor.value = null;
      } else {
        data = this.__ee__;
      }
      if (!data[type])
        data[type] = listener;
      else if (typeof data[type] === "object")
        data[type].push(listener);
      else
        data[type] = [data[type], listener];
      return this;
    };
    once = function(type, listener) {
      var once2, self2;
      callable(listener);
      self2 = this;
      on.call(this, type, once2 = function() {
        off.call(self2, type, once2);
        apply.call(listener, this, arguments);
      });
      once2.__eeOnceListener__ = listener;
      return this;
    };
    off = function(type, listener) {
      var data, listeners, candidate, i;
      callable(listener);
      if (!hasOwnProperty2.call(this, "__ee__"))
        return this;
      data = this.__ee__;
      if (!data[type])
        return this;
      listeners = data[type];
      if (typeof listeners === "object") {
        for (i = 0; candidate = listeners[i]; ++i) {
          if (candidate === listener || candidate.__eeOnceListener__ === listener) {
            if (listeners.length === 2)
              data[type] = listeners[i ? 0 : 1];
            else
              listeners.splice(i, 1);
          }
        }
      } else {
        if (listeners === listener || listeners.__eeOnceListener__ === listener) {
          delete data[type];
        }
      }
      return this;
    };
    emit = function(type) {
      var i, l, listener, listeners, args;
      if (!hasOwnProperty2.call(this, "__ee__"))
        return;
      listeners = this.__ee__[type];
      if (!listeners)
        return;
      if (typeof listeners === "object") {
        l = arguments.length;
        args = new Array(l - 1);
        for (i = 1; i < l; ++i)
          args[i - 1] = arguments[i];
        listeners = listeners.slice();
        for (i = 0; listener = listeners[i]; ++i) {
          apply.call(listener, this, args);
        }
      } else {
        switch (arguments.length) {
          case 1:
            call.call(listeners, this);
            break;
          case 2:
            call.call(listeners, this, arguments[1]);
            break;
          case 3:
            call.call(listeners, this, arguments[1], arguments[2]);
            break;
          default:
            l = arguments.length;
            args = new Array(l - 1);
            for (i = 1; i < l; ++i) {
              args[i - 1] = arguments[i];
            }
            apply.call(listeners, this, args);
        }
      }
    };
    methods = {
      on,
      once,
      off,
      emit
    };
    descriptors = {
      on: d(on),
      once: d(once),
      off: d(off),
      emit: d(emit)
    };
    base = defineProperties({}, descriptors);
    module2.exports = exports = function(o) {
      return o == null ? create(base) : defineProperties(Object(o), descriptors);
    };
    exports.methods = methods;
  }
});

// node_modules/p2/src/utils/Utils.js
var require_Utils = __commonJS({
  "node_modules/p2/src/utils/Utils.js"(exports, module2) {
    module2.exports = Utils2;
    function Utils2() {
    }
    Utils2.appendArray = function(a, b) {
      if (b.length < 15e4) {
        a.push.apply(a, b);
      } else {
        for (var i = 0, len = b.length; i !== len; ++i) {
          a.push(b[i]);
        }
      }
    };
    Utils2.splice = function(array, index, howmany) {
      howmany = howmany || 1;
      for (var i = index, len = array.length - howmany; i < len; i++) {
        array[i] = array[i + howmany];
      }
      array.length = len;
    };
    if (typeof P2_ARRAY_TYPE !== "undefined") {
      Utils2.ARRAY_TYPE = P2_ARRAY_TYPE;
    } else if (typeof Float32Array !== "undefined") {
      Utils2.ARRAY_TYPE = Float32Array;
    } else {
      Utils2.ARRAY_TYPE = Array;
    }
    Utils2.extend = function(a, b) {
      for (var key in b) {
        a[key] = b[key];
      }
    };
    Utils2.defaults = function(options, defaults) {
      options = options || {};
      for (var key in defaults) {
        if (!(key in options)) {
          options[key] = defaults[key];
        }
      }
      return options;
    };
  }
});

// node_modules/p2/src/math/vec2.js
var require_vec2 = __commonJS({
  "node_modules/p2/src/math/vec2.js"(exports, module2) {
    var vec2 = module2.exports = {};
    var Utils2 = require_Utils();
    vec2.crossLength = function(a, b) {
      return a[0] * b[1] - a[1] * b[0];
    };
    vec2.crossVZ = function(out, vec, zcomp) {
      vec2.rotate(out, vec, -Math.PI / 2);
      vec2.scale(out, out, zcomp);
      return out;
    };
    vec2.crossZV = function(out, zcomp, vec) {
      vec2.rotate(out, vec, Math.PI / 2);
      vec2.scale(out, out, zcomp);
      return out;
    };
    vec2.rotate = function(out, a, angle) {
      if (angle !== 0) {
        var c = Math.cos(angle), s = Math.sin(angle), x = a[0], y = a[1];
        out[0] = c * x - s * y;
        out[1] = s * x + c * y;
      } else {
        out[0] = a[0];
        out[1] = a[1];
      }
    };
    vec2.rotate90cw = function(out, a) {
      var x = a[0];
      var y = a[1];
      out[0] = y;
      out[1] = -x;
    };
    vec2.toLocalFrame = function(out, worldPoint, framePosition, frameAngle) {
      vec2.copy(out, worldPoint);
      vec2.sub(out, out, framePosition);
      vec2.rotate(out, out, -frameAngle);
    };
    vec2.toGlobalFrame = function(out, localPoint, framePosition, frameAngle) {
      vec2.copy(out, localPoint);
      vec2.rotate(out, out, frameAngle);
      vec2.add(out, out, framePosition);
    };
    vec2.vectorToLocalFrame = function(out, worldVector, frameAngle) {
      vec2.rotate(out, worldVector, -frameAngle);
    };
    vec2.vectorToGlobalFrame = function(out, localVector, frameAngle) {
      vec2.rotate(out, localVector, frameAngle);
    };
    vec2.centroid = function(out, a, b, c) {
      vec2.add(out, a, b);
      vec2.add(out, out, c);
      vec2.scale(out, out, 1 / 3);
      return out;
    };
    vec2.create = function() {
      var out = new Utils2.ARRAY_TYPE(2);
      out[0] = 0;
      out[1] = 0;
      return out;
    };
    vec2.clone = function(a) {
      var out = new Utils2.ARRAY_TYPE(2);
      out[0] = a[0];
      out[1] = a[1];
      return out;
    };
    vec2.fromValues = function(x, y) {
      var out = new Utils2.ARRAY_TYPE(2);
      out[0] = x;
      out[1] = y;
      return out;
    };
    vec2.copy = function(out, a) {
      out[0] = a[0];
      out[1] = a[1];
      return out;
    };
    vec2.set = function(out, x, y) {
      out[0] = x;
      out[1] = y;
      return out;
    };
    vec2.add = function(out, a, b) {
      out[0] = a[0] + b[0];
      out[1] = a[1] + b[1];
      return out;
    };
    vec2.subtract = function(out, a, b) {
      out[0] = a[0] - b[0];
      out[1] = a[1] - b[1];
      return out;
    };
    vec2.sub = vec2.subtract;
    vec2.multiply = function(out, a, b) {
      out[0] = a[0] * b[0];
      out[1] = a[1] * b[1];
      return out;
    };
    vec2.mul = vec2.multiply;
    vec2.divide = function(out, a, b) {
      out[0] = a[0] / b[0];
      out[1] = a[1] / b[1];
      return out;
    };
    vec2.div = vec2.divide;
    vec2.scale = function(out, a, b) {
      out[0] = a[0] * b;
      out[1] = a[1] * b;
      return out;
    };
    vec2.distance = function(a, b) {
      var x = b[0] - a[0], y = b[1] - a[1];
      return Math.sqrt(x * x + y * y);
    };
    vec2.dist = vec2.distance;
    vec2.squaredDistance = function(a, b) {
      var x = b[0] - a[0], y = b[1] - a[1];
      return x * x + y * y;
    };
    vec2.sqrDist = vec2.squaredDistance;
    vec2.length = function(a) {
      var x = a[0], y = a[1];
      return Math.sqrt(x * x + y * y);
    };
    vec2.len = vec2.length;
    vec2.squaredLength = function(a) {
      var x = a[0], y = a[1];
      return x * x + y * y;
    };
    vec2.sqrLen = vec2.squaredLength;
    vec2.negate = function(out, a) {
      out[0] = -a[0];
      out[1] = -a[1];
      return out;
    };
    vec2.normalize = function(out, a) {
      var x = a[0], y = a[1];
      var len = x * x + y * y;
      if (len > 0) {
        len = 1 / Math.sqrt(len);
        out[0] = a[0] * len;
        out[1] = a[1] * len;
      }
      return out;
    };
    vec2.dot = function(a, b) {
      return a[0] * b[0] + a[1] * b[1];
    };
    vec2.str = function(a) {
      return "vec2(" + a[0] + ", " + a[1] + ")";
    };
    vec2.lerp = function(out, a, b, t) {
      var ax = a[0], ay = a[1];
      out[0] = ax + t * (b[0] - ax);
      out[1] = ay + t * (b[1] - ay);
      return out;
    };
    vec2.reflect = function(out, vector, normal) {
      var dot = vector[0] * normal[0] + vector[1] * normal[1];
      out[0] = vector[0] - 2 * normal[0] * dot;
      out[1] = vector[1] - 2 * normal[1] * dot;
    };
    vec2.getLineSegmentsIntersection = function(out, p0, p1, p22, p3) {
      var t = vec2.getLineSegmentsIntersectionFraction(p0, p1, p22, p3);
      if (t < 0) {
        return false;
      } else {
        out[0] = p0[0] + t * (p1[0] - p0[0]);
        out[1] = p0[1] + t * (p1[1] - p0[1]);
        return true;
      }
    };
    vec2.getLineSegmentsIntersectionFraction = function(p0, p1, p22, p3) {
      var s1_x = p1[0] - p0[0];
      var s1_y = p1[1] - p0[1];
      var s2_x = p3[0] - p22[0];
      var s2_y = p3[1] - p22[1];
      var s, t;
      s = (-s1_y * (p0[0] - p22[0]) + s1_x * (p0[1] - p22[1])) / (-s2_x * s1_y + s1_x * s2_y);
      t = (s2_x * (p0[1] - p22[1]) - s2_y * (p0[0] - p22[0])) / (-s2_x * s1_y + s1_x * s2_y);
      if (s >= 0 && s <= 1 && t >= 0 && t <= 1) {
        return t;
      }
      return -1;
    };
  }
});

// node_modules/p2/src/collision/AABB.js
var require_AABB = __commonJS({
  "node_modules/p2/src/collision/AABB.js"(exports, module2) {
    var vec2 = require_vec2();
    var Utils2 = require_Utils();
    module2.exports = AABB;
    function AABB(options) {
      this.lowerBound = vec2.create();
      if (options && options.lowerBound) {
        vec2.copy(this.lowerBound, options.lowerBound);
      }
      this.upperBound = vec2.create();
      if (options && options.upperBound) {
        vec2.copy(this.upperBound, options.upperBound);
      }
    }
    var tmp = vec2.create();
    AABB.prototype.setFromPoints = function(points, position, angle, skinSize) {
      var l = this.lowerBound, u = this.upperBound;
      if (typeof angle !== "number") {
        angle = 0;
      }
      if (angle !== 0) {
        vec2.rotate(l, points[0], angle);
      } else {
        vec2.copy(l, points[0]);
      }
      vec2.copy(u, l);
      var cosAngle = Math.cos(angle), sinAngle = Math.sin(angle);
      for (var i = 1; i < points.length; i++) {
        var p = points[i];
        if (angle !== 0) {
          var x = p[0], y = p[1];
          tmp[0] = cosAngle * x - sinAngle * y;
          tmp[1] = sinAngle * x + cosAngle * y;
          p = tmp;
        }
        for (var j = 0; j < 2; j++) {
          if (p[j] > u[j]) {
            u[j] = p[j];
          }
          if (p[j] < l[j]) {
            l[j] = p[j];
          }
        }
      }
      if (position) {
        vec2.add(this.lowerBound, this.lowerBound, position);
        vec2.add(this.upperBound, this.upperBound, position);
      }
      if (skinSize) {
        this.lowerBound[0] -= skinSize;
        this.lowerBound[1] -= skinSize;
        this.upperBound[0] += skinSize;
        this.upperBound[1] += skinSize;
      }
    };
    AABB.prototype.copy = function(aabb) {
      vec2.copy(this.lowerBound, aabb.lowerBound);
      vec2.copy(this.upperBound, aabb.upperBound);
    };
    AABB.prototype.extend = function(aabb) {
      var i = 2;
      while (i--) {
        var l = aabb.lowerBound[i];
        if (this.lowerBound[i] > l) {
          this.lowerBound[i] = l;
        }
        var u = aabb.upperBound[i];
        if (this.upperBound[i] < u) {
          this.upperBound[i] = u;
        }
      }
    };
    AABB.prototype.overlaps = function(aabb) {
      var l1 = this.lowerBound, u1 = this.upperBound, l2 = aabb.lowerBound, u2 = aabb.upperBound;
      return (l2[0] <= u1[0] && u1[0] <= u2[0] || l1[0] <= u2[0] && u2[0] <= u1[0]) && (l2[1] <= u1[1] && u1[1] <= u2[1] || l1[1] <= u2[1] && u2[1] <= u1[1]);
    };
    AABB.prototype.containsPoint = function(point) {
      var l = this.lowerBound, u = this.upperBound;
      return l[0] <= point[0] && point[0] <= u[0] && l[1] <= point[1] && point[1] <= u[1];
    };
    AABB.prototype.overlapsRay = function(ray) {
      var t = 0;
      var dirFracX = 1 / ray.direction[0];
      var dirFracY = 1 / ray.direction[1];
      var t1 = (this.lowerBound[0] - ray.from[0]) * dirFracX;
      var t2 = (this.upperBound[0] - ray.from[0]) * dirFracX;
      var t3 = (this.lowerBound[1] - ray.from[1]) * dirFracY;
      var t4 = (this.upperBound[1] - ray.from[1]) * dirFracY;
      var tmin = Math.max(Math.max(Math.min(t1, t2), Math.min(t3, t4)));
      var tmax = Math.min(Math.min(Math.max(t1, t2), Math.max(t3, t4)));
      if (tmax < 0) {
        return -1;
      }
      if (tmin > tmax) {
        return -1;
      }
      return tmin;
    };
  }
});

// node_modules/poly-decomp/src/Scalar.js
var require_Scalar = __commonJS({
  "node_modules/poly-decomp/src/Scalar.js"(exports, module2) {
    module2.exports = Scalar;
    function Scalar() {
    }
    Scalar.eq = function(a, b, precision) {
      precision = precision || 0;
      return Math.abs(a - b) < precision;
    };
  }
});

// node_modules/poly-decomp/src/Line.js
var require_Line = __commonJS({
  "node_modules/poly-decomp/src/Line.js"(exports, module2) {
    var Scalar = require_Scalar();
    module2.exports = Line;
    function Line() {
    }
    Line.lineInt = function(l1, l2, precision) {
      precision = precision || 0;
      var i = [0, 0];
      var a1, b1, c1, a2, b2, c2, det;
      a1 = l1[1][1] - l1[0][1];
      b1 = l1[0][0] - l1[1][0];
      c1 = a1 * l1[0][0] + b1 * l1[0][1];
      a2 = l2[1][1] - l2[0][1];
      b2 = l2[0][0] - l2[1][0];
      c2 = a2 * l2[0][0] + b2 * l2[0][1];
      det = a1 * b2 - a2 * b1;
      if (!Scalar.eq(det, 0, precision)) {
        i[0] = (b2 * c1 - b1 * c2) / det;
        i[1] = (a1 * c2 - a2 * c1) / det;
      }
      return i;
    };
    Line.segmentsIntersect = function(p1, p22, q1, q2) {
      var dx2 = p22[0] - p1[0];
      var dy = p22[1] - p1[1];
      var da = q2[0] - q1[0];
      var db = q2[1] - q1[1];
      if (da * dy - db * dx2 == 0)
        return false;
      var s = (dx2 * (q1[1] - p1[1]) + dy * (p1[0] - q1[0])) / (da * dy - db * dx2);
      var t = (da * (p1[1] - q1[1]) + db * (q1[0] - p1[0])) / (db * dx2 - da * dy);
      return s >= 0 && s <= 1 && t >= 0 && t <= 1;
    };
  }
});

// node_modules/poly-decomp/src/Point.js
var require_Point = __commonJS({
  "node_modules/poly-decomp/src/Point.js"(exports, module2) {
    module2.exports = Point;
    function Point() {
    }
    Point.area = function(a, b, c) {
      return (b[0] - a[0]) * (c[1] - a[1]) - (c[0] - a[0]) * (b[1] - a[1]);
    };
    Point.left = function(a, b, c) {
      return Point.area(a, b, c) > 0;
    };
    Point.leftOn = function(a, b, c) {
      return Point.area(a, b, c) >= 0;
    };
    Point.right = function(a, b, c) {
      return Point.area(a, b, c) < 0;
    };
    Point.rightOn = function(a, b, c) {
      return Point.area(a, b, c) <= 0;
    };
    var tmpPoint1 = [];
    var tmpPoint2 = [];
    Point.collinear = function(a, b, c, thresholdAngle) {
      if (!thresholdAngle)
        return Point.area(a, b, c) == 0;
      else {
        var ab = tmpPoint1, bc = tmpPoint2;
        ab[0] = b[0] - a[0];
        ab[1] = b[1] - a[1];
        bc[0] = c[0] - b[0];
        bc[1] = c[1] - b[1];
        var dot = ab[0] * bc[0] + ab[1] * bc[1], magA = Math.sqrt(ab[0] * ab[0] + ab[1] * ab[1]), magB = Math.sqrt(bc[0] * bc[0] + bc[1] * bc[1]), angle = Math.acos(dot / (magA * magB));
        return angle < thresholdAngle;
      }
    };
    Point.sqdist = function(a, b) {
      var dx2 = b[0] - a[0];
      var dy = b[1] - a[1];
      return dx2 * dx2 + dy * dy;
    };
  }
});

// node_modules/poly-decomp/src/Polygon.js
var require_Polygon = __commonJS({
  "node_modules/poly-decomp/src/Polygon.js"(exports, module2) {
    var Line = require_Line();
    var Point = require_Point();
    var Scalar = require_Scalar();
    module2.exports = Polygon;
    function Polygon() {
      this.vertices = [];
    }
    Polygon.prototype.at = function(i) {
      var v = this.vertices, s = v.length;
      return v[i < 0 ? i % s + s : i % s];
    };
    Polygon.prototype.first = function() {
      return this.vertices[0];
    };
    Polygon.prototype.last = function() {
      return this.vertices[this.vertices.length - 1];
    };
    Polygon.prototype.clear = function() {
      this.vertices.length = 0;
    };
    Polygon.prototype.append = function(poly, from, to) {
      if (typeof from == "undefined")
        throw new Error("From is not given!");
      if (typeof to == "undefined")
        throw new Error("To is not given!");
      if (to - 1 < from)
        throw new Error("lol1");
      if (to > poly.vertices.length)
        throw new Error("lol2");
      if (from < 0)
        throw new Error("lol3");
      for (var i = from; i < to; i++) {
        this.vertices.push(poly.vertices[i]);
      }
    };
    Polygon.prototype.makeCCW = function() {
      var br = 0, v = this.vertices;
      for (var i = 1; i < this.vertices.length; ++i) {
        if (v[i][1] < v[br][1] || v[i][1] == v[br][1] && v[i][0] > v[br][0]) {
          br = i;
        }
      }
      if (!Point.left(this.at(br - 1), this.at(br), this.at(br + 1))) {
        this.reverse();
      }
    };
    Polygon.prototype.reverse = function() {
      var tmp = [];
      for (var i = 0, N = this.vertices.length; i !== N; i++) {
        tmp.push(this.vertices.pop());
      }
      this.vertices = tmp;
    };
    Polygon.prototype.isReflex = function(i) {
      return Point.right(this.at(i - 1), this.at(i), this.at(i + 1));
    };
    var tmpLine1 = [];
    var tmpLine2 = [];
    Polygon.prototype.canSee = function(a, b) {
      var p, dist, l1 = tmpLine1, l2 = tmpLine2;
      if (Point.leftOn(this.at(a + 1), this.at(a), this.at(b)) && Point.rightOn(this.at(a - 1), this.at(a), this.at(b))) {
        return false;
      }
      dist = Point.sqdist(this.at(a), this.at(b));
      for (var i = 0; i !== this.vertices.length; ++i) {
        if ((i + 1) % this.vertices.length === a || i === a)
          continue;
        if (Point.leftOn(this.at(a), this.at(b), this.at(i + 1)) && Point.rightOn(this.at(a), this.at(b), this.at(i))) {
          l1[0] = this.at(a);
          l1[1] = this.at(b);
          l2[0] = this.at(i);
          l2[1] = this.at(i + 1);
          p = Line.lineInt(l1, l2);
          if (Point.sqdist(this.at(a), p) < dist) {
            return false;
          }
        }
      }
      return true;
    };
    Polygon.prototype.copy = function(i, j, targetPoly) {
      var p = targetPoly || new Polygon();
      p.clear();
      if (i < j) {
        for (var k = i; k <= j; k++)
          p.vertices.push(this.vertices[k]);
      } else {
        for (var k = 0; k <= j; k++)
          p.vertices.push(this.vertices[k]);
        for (var k = i; k < this.vertices.length; k++)
          p.vertices.push(this.vertices[k]);
      }
      return p;
    };
    Polygon.prototype.getCutEdges = function() {
      var min = [], tmp1 = [], tmp2 = [], tmpPoly = new Polygon();
      var nDiags = Number.MAX_VALUE;
      for (var i = 0; i < this.vertices.length; ++i) {
        if (this.isReflex(i)) {
          for (var j = 0; j < this.vertices.length; ++j) {
            if (this.canSee(i, j)) {
              tmp1 = this.copy(i, j, tmpPoly).getCutEdges();
              tmp2 = this.copy(j, i, tmpPoly).getCutEdges();
              for (var k = 0; k < tmp2.length; k++)
                tmp1.push(tmp2[k]);
              if (tmp1.length < nDiags) {
                min = tmp1;
                nDiags = tmp1.length;
                min.push([this.at(i), this.at(j)]);
              }
            }
          }
        }
      }
      return min;
    };
    Polygon.prototype.decomp = function() {
      var edges = this.getCutEdges();
      if (edges.length > 0)
        return this.slice(edges);
      else
        return [this];
    };
    Polygon.prototype.slice = function(cutEdges) {
      if (cutEdges.length == 0)
        return [this];
      if (cutEdges instanceof Array && cutEdges.length && cutEdges[0] instanceof Array && cutEdges[0].length == 2 && cutEdges[0][0] instanceof Array) {
        var polys = [this];
        for (var i = 0; i < cutEdges.length; i++) {
          var cutEdge = cutEdges[i];
          for (var j = 0; j < polys.length; j++) {
            var poly = polys[j];
            var result = poly.slice(cutEdge);
            if (result) {
              polys.splice(j, 1);
              polys.push(result[0], result[1]);
              break;
            }
          }
        }
        return polys;
      } else {
        var cutEdge = cutEdges;
        var i = this.vertices.indexOf(cutEdge[0]);
        var j = this.vertices.indexOf(cutEdge[1]);
        if (i != -1 && j != -1) {
          return [
            this.copy(i, j),
            this.copy(j, i)
          ];
        } else {
          return false;
        }
      }
    };
    Polygon.prototype.isSimple = function() {
      var path = this.vertices;
      for (var i = 0; i < path.length - 1; i++) {
        for (var j = 0; j < i - 1; j++) {
          if (Line.segmentsIntersect(path[i], path[i + 1], path[j], path[j + 1])) {
            return false;
          }
        }
      }
      for (var i = 1; i < path.length - 2; i++) {
        if (Line.segmentsIntersect(path[0], path[path.length - 1], path[i], path[i + 1])) {
          return false;
        }
      }
      return true;
    };
    function getIntersectionPoint(p1, p22, q1, q2, delta) {
      delta = delta || 0;
      var a1 = p22[1] - p1[1];
      var b1 = p1[0] - p22[0];
      var c1 = a1 * p1[0] + b1 * p1[1];
      var a2 = q2[1] - q1[1];
      var b2 = q1[0] - q2[0];
      var c2 = a2 * q1[0] + b2 * q1[1];
      var det = a1 * b2 - a2 * b1;
      if (!Scalar.eq(det, 0, delta))
        return [(b2 * c1 - b1 * c2) / det, (a1 * c2 - a2 * c1) / det];
      else
        return [0, 0];
    }
    Polygon.prototype.quickDecomp = function(result, reflexVertices, steinerPoints, delta, maxlevel, level) {
      maxlevel = maxlevel || 100;
      level = level || 0;
      delta = delta || 25;
      result = typeof result != "undefined" ? result : [];
      reflexVertices = reflexVertices || [];
      steinerPoints = steinerPoints || [];
      var upperInt = [0, 0], lowerInt = [0, 0], p = [0, 0];
      var upperDist = 0, lowerDist = 0, d = 0, closestDist = 0;
      var upperIndex = 0, lowerIndex = 0, closestIndex = 0;
      var lowerPoly = new Polygon(), upperPoly = new Polygon();
      var poly = this, v = this.vertices;
      if (v.length < 3)
        return result;
      level++;
      if (level > maxlevel) {
        console.warn("quickDecomp: max level (" + maxlevel + ") reached.");
        return result;
      }
      for (var i = 0; i < this.vertices.length; ++i) {
        if (poly.isReflex(i)) {
          reflexVertices.push(poly.vertices[i]);
          upperDist = lowerDist = Number.MAX_VALUE;
          for (var j = 0; j < this.vertices.length; ++j) {
            if (Point.left(poly.at(i - 1), poly.at(i), poly.at(j)) && Point.rightOn(poly.at(i - 1), poly.at(i), poly.at(j - 1))) {
              p = getIntersectionPoint(poly.at(i - 1), poly.at(i), poly.at(j), poly.at(j - 1));
              if (Point.right(poly.at(i + 1), poly.at(i), p)) {
                d = Point.sqdist(poly.vertices[i], p);
                if (d < lowerDist) {
                  lowerDist = d;
                  lowerInt = p;
                  lowerIndex = j;
                }
              }
            }
            if (Point.left(poly.at(i + 1), poly.at(i), poly.at(j + 1)) && Point.rightOn(poly.at(i + 1), poly.at(i), poly.at(j))) {
              p = getIntersectionPoint(poly.at(i + 1), poly.at(i), poly.at(j), poly.at(j + 1));
              if (Point.left(poly.at(i - 1), poly.at(i), p)) {
                d = Point.sqdist(poly.vertices[i], p);
                if (d < upperDist) {
                  upperDist = d;
                  upperInt = p;
                  upperIndex = j;
                }
              }
            }
          }
          if (lowerIndex == (upperIndex + 1) % this.vertices.length) {
            p[0] = (lowerInt[0] + upperInt[0]) / 2;
            p[1] = (lowerInt[1] + upperInt[1]) / 2;
            steinerPoints.push(p);
            if (i < upperIndex) {
              lowerPoly.append(poly, i, upperIndex + 1);
              lowerPoly.vertices.push(p);
              upperPoly.vertices.push(p);
              if (lowerIndex != 0) {
                upperPoly.append(poly, lowerIndex, poly.vertices.length);
              }
              upperPoly.append(poly, 0, i + 1);
            } else {
              if (i != 0) {
                lowerPoly.append(poly, i, poly.vertices.length);
              }
              lowerPoly.append(poly, 0, upperIndex + 1);
              lowerPoly.vertices.push(p);
              upperPoly.vertices.push(p);
              upperPoly.append(poly, lowerIndex, i + 1);
            }
          } else {
            if (lowerIndex > upperIndex) {
              upperIndex += this.vertices.length;
            }
            closestDist = Number.MAX_VALUE;
            if (upperIndex < lowerIndex) {
              return result;
            }
            for (var j = lowerIndex; j <= upperIndex; ++j) {
              if (Point.leftOn(poly.at(i - 1), poly.at(i), poly.at(j)) && Point.rightOn(poly.at(i + 1), poly.at(i), poly.at(j))) {
                d = Point.sqdist(poly.at(i), poly.at(j));
                if (d < closestDist) {
                  closestDist = d;
                  closestIndex = j % this.vertices.length;
                }
              }
            }
            if (i < closestIndex) {
              lowerPoly.append(poly, i, closestIndex + 1);
              if (closestIndex != 0) {
                upperPoly.append(poly, closestIndex, v.length);
              }
              upperPoly.append(poly, 0, i + 1);
            } else {
              if (i != 0) {
                lowerPoly.append(poly, i, v.length);
              }
              lowerPoly.append(poly, 0, closestIndex + 1);
              upperPoly.append(poly, closestIndex, i + 1);
            }
          }
          if (lowerPoly.vertices.length < upperPoly.vertices.length) {
            lowerPoly.quickDecomp(result, reflexVertices, steinerPoints, delta, maxlevel, level);
            upperPoly.quickDecomp(result, reflexVertices, steinerPoints, delta, maxlevel, level);
          } else {
            upperPoly.quickDecomp(result, reflexVertices, steinerPoints, delta, maxlevel, level);
            lowerPoly.quickDecomp(result, reflexVertices, steinerPoints, delta, maxlevel, level);
          }
          return result;
        }
      }
      result.push(this);
      return result;
    };
    Polygon.prototype.removeCollinearPoints = function(precision) {
      var num = 0;
      for (var i = this.vertices.length - 1; this.vertices.length > 3 && i >= 0; --i) {
        if (Point.collinear(this.at(i - 1), this.at(i), this.at(i + 1), precision)) {
          this.vertices.splice(i % this.vertices.length, 1);
          i--;
          num++;
        }
      }
      return num;
    };
  }
});

// node_modules/poly-decomp/src/index.js
var require_src = __commonJS({
  "node_modules/poly-decomp/src/index.js"(exports, module2) {
    module2.exports = {
      Polygon: require_Polygon(),
      Point: require_Point()
    };
  }
});

// node_modules/p2/src/shapes/Shape.js
var require_Shape = __commonJS({
  "node_modules/p2/src/shapes/Shape.js"(exports, module2) {
    module2.exports = Shape;
    var vec2 = require_vec2();
    function Shape(options) {
      options = options || {};
      this.body = null;
      this.position = vec2.fromValues(0, 0);
      if (options.position) {
        vec2.copy(this.position, options.position);
      }
      this.angle = options.angle || 0;
      this.type = options.type || 0;
      this.id = Shape.idCounter++;
      this.boundingRadius = 0;
      this.collisionGroup = options.collisionGroup !== void 0 ? options.collisionGroup : 1;
      this.collisionResponse = options.collisionResponse !== void 0 ? options.collisionResponse : true;
      this.collisionMask = options.collisionMask !== void 0 ? options.collisionMask : 1;
      this.material = options.material || null;
      this.area = 0;
      this.sensor = options.sensor !== void 0 ? options.sensor : false;
      if (this.type) {
        this.updateBoundingRadius();
      }
      this.updateArea();
    }
    Shape.idCounter = 0;
    Shape.CIRCLE = 1;
    Shape.PARTICLE = 2;
    Shape.PLANE = 4;
    Shape.CONVEX = 8;
    Shape.LINE = 16;
    Shape.BOX = 32;
    Object.defineProperty(Shape, "RECTANGLE", {
      get: function() {
        console.warn("Shape.RECTANGLE is deprecated, use Shape.BOX instead.");
        return Shape.BOX;
      }
    });
    Shape.CAPSULE = 64;
    Shape.HEIGHTFIELD = 128;
    Shape.prototype.computeMomentOfInertia = function(mass) {
    };
    Shape.prototype.updateBoundingRadius = function() {
    };
    Shape.prototype.updateArea = function() {
    };
    Shape.prototype.computeAABB = function(out, position, angle) {
    };
    Shape.prototype.raycast = function(result, ray, position, angle) {
    };
  }
});

// node_modules/p2/src/math/polyk.js
var require_polyk = __commonJS({
  "node_modules/p2/src/math/polyk.js"(exports, module2) {
    var PolyK = {};
    PolyK.GetArea = function(p) {
      if (p.length < 6)
        return 0;
      var l = p.length - 2;
      var sum = 0;
      for (var i = 0; i < l; i += 2)
        sum += (p[i + 2] - p[i]) * (p[i + 1] + p[i + 3]);
      sum += (p[0] - p[l]) * (p[l + 1] + p[1]);
      return -sum * 0.5;
    };
    PolyK.Triangulate = function(p) {
      var n = p.length >> 1;
      if (n < 3)
        return [];
      var tgs = [];
      var avl = [];
      for (var i = 0; i < n; i++)
        avl.push(i);
      var i = 0;
      var al = n;
      while (al > 3) {
        var i0 = avl[(i + 0) % al];
        var i1 = avl[(i + 1) % al];
        var i2 = avl[(i + 2) % al];
        var ax = p[2 * i0], ay = p[2 * i0 + 1];
        var bx = p[2 * i1], by = p[2 * i1 + 1];
        var cx = p[2 * i2], cy = p[2 * i2 + 1];
        var earFound = false;
        if (PolyK._convex(ax, ay, bx, by, cx, cy)) {
          earFound = true;
          for (var j = 0; j < al; j++) {
            var vi = avl[j];
            if (vi == i0 || vi == i1 || vi == i2)
              continue;
            if (PolyK._PointInTriangle(p[2 * vi], p[2 * vi + 1], ax, ay, bx, by, cx, cy)) {
              earFound = false;
              break;
            }
          }
        }
        if (earFound) {
          tgs.push(i0, i1, i2);
          avl.splice((i + 1) % al, 1);
          al--;
          i = 0;
        } else if (i++ > 3 * al)
          break;
      }
      tgs.push(avl[0], avl[1], avl[2]);
      return tgs;
    };
    PolyK._PointInTriangle = function(px, py, ax, ay, bx, by, cx, cy) {
      var v0x = cx - ax;
      var v0y = cy - ay;
      var v1x = bx - ax;
      var v1y = by - ay;
      var v2x = px - ax;
      var v2y = py - ay;
      var dot00 = v0x * v0x + v0y * v0y;
      var dot01 = v0x * v1x + v0y * v1y;
      var dot02 = v0x * v2x + v0y * v2y;
      var dot11 = v1x * v1x + v1y * v1y;
      var dot12 = v1x * v2x + v1y * v2y;
      var invDenom = 1 / (dot00 * dot11 - dot01 * dot01);
      var u = (dot11 * dot02 - dot01 * dot12) * invDenom;
      var v = (dot00 * dot12 - dot01 * dot02) * invDenom;
      return u >= 0 && v >= 0 && u + v < 1;
    };
    PolyK._convex = function(ax, ay, bx, by, cx, cy) {
      return (ay - by) * (cx - bx) + (bx - ax) * (cy - by) >= 0;
    };
    module2.exports = PolyK;
  }
});

// node_modules/p2/src/shapes/Convex.js
var require_Convex = __commonJS({
  "node_modules/p2/src/shapes/Convex.js"(exports, module2) {
    var Shape = require_Shape();
    var vec2 = require_vec2();
    var polyk = require_polyk();
    var decomp = require_src();
    module2.exports = Convex;
    function Convex(options) {
      if (Array.isArray(arguments[0])) {
        options = {
          vertices: arguments[0],
          axes: arguments[1]
        };
        console.warn("The Convex constructor signature has changed. Please use the following format: new Convex({ vertices: [...], ... })");
      }
      options = options || {};
      this.vertices = [];
      var vertices = options.vertices !== void 0 ? options.vertices : [];
      for (var i = 0; i < vertices.length; i++) {
        var v = vec2.create();
        vec2.copy(v, vertices[i]);
        this.vertices.push(v);
      }
      this.axes = [];
      if (options.axes) {
        for (var i = 0; i < options.axes.length; i++) {
          var axis = vec2.create();
          vec2.copy(axis, options.axes[i]);
          this.axes.push(axis);
        }
      } else {
        for (var i = 0; i < this.vertices.length; i++) {
          var worldPoint0 = this.vertices[i];
          var worldPoint1 = this.vertices[(i + 1) % this.vertices.length];
          var normal = vec2.create();
          vec2.sub(normal, worldPoint1, worldPoint0);
          vec2.rotate90cw(normal, normal);
          vec2.normalize(normal, normal);
          this.axes.push(normal);
        }
      }
      this.centerOfMass = vec2.fromValues(0, 0);
      this.triangles = [];
      if (this.vertices.length) {
        this.updateTriangles();
        this.updateCenterOfMass();
      }
      this.boundingRadius = 0;
      options.type = Shape.CONVEX;
      Shape.call(this, options);
      this.updateBoundingRadius();
      this.updateArea();
      if (this.area < 0) {
        throw new Error("Convex vertices must be given in conter-clockwise winding.");
      }
    }
    Convex.prototype = new Shape();
    Convex.prototype.constructor = Convex;
    var tmpVec1 = vec2.create();
    var tmpVec2 = vec2.create();
    Convex.prototype.projectOntoLocalAxis = function(localAxis, result) {
      var max = null, min = null, v, value, localAxis = tmpVec1;
      for (var i = 0; i < this.vertices.length; i++) {
        v = this.vertices[i];
        value = vec2.dot(v, localAxis);
        if (max === null || value > max) {
          max = value;
        }
        if (min === null || value < min) {
          min = value;
        }
      }
      if (min > max) {
        var t = min;
        min = max;
        max = t;
      }
      vec2.set(result, min, max);
    };
    Convex.prototype.projectOntoWorldAxis = function(localAxis, shapeOffset, shapeAngle, result) {
      var worldAxis = tmpVec2;
      this.projectOntoLocalAxis(localAxis, result);
      if (shapeAngle !== 0) {
        vec2.rotate(worldAxis, localAxis, shapeAngle);
      } else {
        worldAxis = localAxis;
      }
      var offset = vec2.dot(shapeOffset, worldAxis);
      vec2.set(result, result[0] + offset, result[1] + offset);
    };
    Convex.prototype.updateTriangles = function() {
      this.triangles.length = 0;
      var polykVerts = [];
      for (var i = 0; i < this.vertices.length; i++) {
        var v = this.vertices[i];
        polykVerts.push(v[0], v[1]);
      }
      var triangles = polyk.Triangulate(polykVerts);
      for (var i = 0; i < triangles.length; i += 3) {
        var id1 = triangles[i], id2 = triangles[i + 1], id3 = triangles[i + 2];
        this.triangles.push([id1, id2, id3]);
      }
    };
    var updateCenterOfMass_centroid = vec2.create();
    var updateCenterOfMass_centroid_times_mass = vec2.create();
    var updateCenterOfMass_a = vec2.create();
    var updateCenterOfMass_b = vec2.create();
    var updateCenterOfMass_c = vec2.create();
    var updateCenterOfMass_ac = vec2.create();
    var updateCenterOfMass_ca = vec2.create();
    var updateCenterOfMass_cb = vec2.create();
    var updateCenterOfMass_n = vec2.create();
    Convex.prototype.updateCenterOfMass = function() {
      var triangles = this.triangles, verts = this.vertices, cm = this.centerOfMass, centroid = updateCenterOfMass_centroid, n = updateCenterOfMass_n, a = updateCenterOfMass_a, b = updateCenterOfMass_b, c = updateCenterOfMass_c, ac = updateCenterOfMass_ac, ca = updateCenterOfMass_ca, cb = updateCenterOfMass_cb, centroid_times_mass = updateCenterOfMass_centroid_times_mass;
      vec2.set(cm, 0, 0);
      var totalArea = 0;
      for (var i = 0; i !== triangles.length; i++) {
        var t = triangles[i], a = verts[t[0]], b = verts[t[1]], c = verts[t[2]];
        vec2.centroid(centroid, a, b, c);
        var m = Convex.triangleArea(a, b, c);
        totalArea += m;
        vec2.scale(centroid_times_mass, centroid, m);
        vec2.add(cm, cm, centroid_times_mass);
      }
      vec2.scale(cm, cm, 1 / totalArea);
    };
    Convex.prototype.computeMomentOfInertia = function(mass) {
      var denom = 0, numer = 0, N = this.vertices.length;
      for (var j = N - 1, i = 0; i < N; j = i, i++) {
        var p0 = this.vertices[j];
        var p1 = this.vertices[i];
        var a = Math.abs(vec2.crossLength(p0, p1));
        var b = vec2.dot(p1, p1) + vec2.dot(p1, p0) + vec2.dot(p0, p0);
        denom += a * b;
        numer += a;
      }
      return mass / 6 * (denom / numer);
    };
    Convex.prototype.updateBoundingRadius = function() {
      var verts = this.vertices, r2 = 0;
      for (var i = 0; i !== verts.length; i++) {
        var l2 = vec2.squaredLength(verts[i]);
        if (l2 > r2) {
          r2 = l2;
        }
      }
      this.boundingRadius = Math.sqrt(r2);
    };
    Convex.triangleArea = function(a, b, c) {
      return ((b[0] - a[0]) * (c[1] - a[1]) - (c[0] - a[0]) * (b[1] - a[1])) * 0.5;
    };
    Convex.prototype.updateArea = function() {
      this.updateTriangles();
      this.area = 0;
      var triangles = this.triangles, verts = this.vertices;
      for (var i = 0; i !== triangles.length; i++) {
        var t = triangles[i], a = verts[t[0]], b = verts[t[1]], c = verts[t[2]];
        var m = Convex.triangleArea(a, b, c);
        this.area += m;
      }
    };
    Convex.prototype.computeAABB = function(out, position, angle) {
      out.setFromPoints(this.vertices, position, angle, 0);
    };
    var intersectConvex_rayStart = vec2.create();
    var intersectConvex_rayEnd = vec2.create();
    var intersectConvex_normal = vec2.create();
    Convex.prototype.raycast = function(result, ray, position, angle) {
      var rayStart = intersectConvex_rayStart;
      var rayEnd = intersectConvex_rayEnd;
      var normal = intersectConvex_normal;
      var vertices = this.vertices;
      vec2.toLocalFrame(rayStart, ray.from, position, angle);
      vec2.toLocalFrame(rayEnd, ray.to, position, angle);
      var n = vertices.length;
      for (var i = 0; i < n && !result.shouldStop(ray); i++) {
        var q1 = vertices[i];
        var q2 = vertices[(i + 1) % n];
        var delta = vec2.getLineSegmentsIntersectionFraction(rayStart, rayEnd, q1, q2);
        if (delta >= 0) {
          vec2.sub(normal, q2, q1);
          vec2.rotate(normal, normal, -Math.PI / 2 + angle);
          vec2.normalize(normal, normal);
          ray.reportIntersection(result, delta, normal, i);
        }
      }
    };
  }
});

// node_modules/p2/src/collision/Ray.js
var require_Ray = __commonJS({
  "node_modules/p2/src/collision/Ray.js"(exports, module2) {
    module2.exports = Ray;
    var vec2 = require_vec2();
    var RaycastResult = require_RaycastResult();
    var Shape = require_Shape();
    var AABB = require_AABB();
    function Ray(options) {
      options = options || {};
      this.from = options.from ? vec2.fromValues(options.from[0], options.from[1]) : vec2.create();
      this.to = options.to ? vec2.fromValues(options.to[0], options.to[1]) : vec2.create();
      this.checkCollisionResponse = options.checkCollisionResponse !== void 0 ? options.checkCollisionResponse : true;
      this.skipBackfaces = !!options.skipBackfaces;
      this.collisionMask = options.collisionMask !== void 0 ? options.collisionMask : -1;
      this.collisionGroup = options.collisionGroup !== void 0 ? options.collisionGroup : -1;
      this.mode = options.mode !== void 0 ? options.mode : Ray.ANY;
      this.callback = options.callback || function(result) {
      };
      this.direction = vec2.create();
      this.length = 1;
      this.update();
    }
    Ray.prototype.constructor = Ray;
    Ray.CLOSEST = 1;
    Ray.ANY = 2;
    Ray.ALL = 4;
    Ray.prototype.update = function() {
      var d = this.direction;
      vec2.sub(d, this.to, this.from);
      this.length = vec2.length(d);
      vec2.normalize(d, d);
    };
    Ray.prototype.intersectBodies = function(result, bodies) {
      for (var i = 0, l = bodies.length; !result.shouldStop(this) && i < l; i++) {
        var body = bodies[i];
        var aabb = body.getAABB();
        if (aabb.overlapsRay(this) >= 0 || aabb.containsPoint(this.from)) {
          this.intersectBody(result, body);
        }
      }
    };
    var intersectBody_worldPosition = vec2.create();
    Ray.prototype.intersectBody = function(result, body) {
      var checkCollisionResponse = this.checkCollisionResponse;
      if (checkCollisionResponse && !body.collisionResponse) {
        return;
      }
      var worldPosition = intersectBody_worldPosition;
      for (var i = 0, N = body.shapes.length; i < N; i++) {
        var shape = body.shapes[i];
        if (checkCollisionResponse && !shape.collisionResponse) {
          continue;
        }
        if ((this.collisionGroup & shape.collisionMask) === 0 || (shape.collisionGroup & this.collisionMask) === 0) {
          continue;
        }
        vec2.rotate(worldPosition, shape.position, body.angle);
        vec2.add(worldPosition, worldPosition, body.position);
        var worldAngle = shape.angle + body.angle;
        this.intersectShape(result, shape, worldAngle, worldPosition, body);
        if (result.shouldStop(this)) {
          break;
        }
      }
    };
    Ray.prototype.intersectShape = function(result, shape, angle, position, body) {
      var from = this.from;
      var distance = distanceFromIntersectionSquared(from, this.direction, position);
      if (distance > shape.boundingRadius * shape.boundingRadius) {
        return;
      }
      this._currentBody = body;
      this._currentShape = shape;
      shape.raycast(result, this, position, angle);
      this._currentBody = this._currentShape = null;
    };
    Ray.prototype.getAABB = function(result) {
      var to = this.to;
      var from = this.from;
      vec2.set(result.lowerBound, Math.min(to[0], from[0]), Math.min(to[1], from[1]));
      vec2.set(result.upperBound, Math.max(to[0], from[0]), Math.max(to[1], from[1]));
    };
    var hitPointWorld = vec2.create();
    Ray.prototype.reportIntersection = function(result, fraction, normal, faceIndex) {
      var from = this.from;
      var to = this.to;
      var shape = this._currentShape;
      var body = this._currentBody;
      if (this.skipBackfaces && vec2.dot(normal, this.direction) > 0) {
        return;
      }
      switch (this.mode) {
        case Ray.ALL:
          result.set(normal, shape, body, fraction, faceIndex);
          this.callback(result);
          break;
        case Ray.CLOSEST:
          if (fraction < result.fraction || !result.hasHit()) {
            result.set(normal, shape, body, fraction, faceIndex);
          }
          break;
        case Ray.ANY:
          result.set(normal, shape, body, fraction, faceIndex);
          break;
      }
    };
    var v0 = vec2.create();
    var intersect = vec2.create();
    function distanceFromIntersectionSquared(from, direction, position) {
      vec2.sub(v0, position, from);
      var dot = vec2.dot(v0, direction);
      vec2.scale(intersect, direction, dot);
      vec2.add(intersect, intersect, from);
      return vec2.squaredDistance(position, intersect);
    }
  }
});

// node_modules/p2/src/collision/RaycastResult.js
var require_RaycastResult = __commonJS({
  "node_modules/p2/src/collision/RaycastResult.js"(exports, module2) {
    var vec2 = require_vec2();
    var Ray = require_Ray();
    module2.exports = RaycastResult;
    function RaycastResult() {
      this.normal = vec2.create();
      this.shape = null;
      this.body = null;
      this.faceIndex = -1;
      this.fraction = -1;
      this.isStopped = false;
    }
    RaycastResult.prototype.reset = function() {
      vec2.set(this.normal, 0, 0);
      this.shape = null;
      this.body = null;
      this.faceIndex = -1;
      this.fraction = -1;
      this.isStopped = false;
    };
    RaycastResult.prototype.getHitDistance = function(ray) {
      return vec2.distance(ray.from, ray.to) * this.fraction;
    };
    RaycastResult.prototype.hasHit = function() {
      return this.fraction !== -1;
    };
    RaycastResult.prototype.getHitPoint = function(out, ray) {
      vec2.lerp(out, ray.from, ray.to, this.fraction);
    };
    RaycastResult.prototype.stop = function() {
      this.isStopped = true;
    };
    RaycastResult.prototype.shouldStop = function(ray) {
      return this.isStopped || this.fraction !== -1 && ray.mode === Ray.ANY;
    };
    RaycastResult.prototype.set = function(normal, shape, body, fraction, faceIndex) {
      vec2.copy(this.normal, normal);
      this.shape = shape;
      this.body = body;
      this.fraction = fraction;
      this.faceIndex = faceIndex;
    };
  }
});

// node_modules/p2/src/events/EventEmitter.js
var require_EventEmitter = __commonJS({
  "node_modules/p2/src/events/EventEmitter.js"(exports, module2) {
    var EventEmitter4 = function() {
    };
    module2.exports = EventEmitter4;
    EventEmitter4.prototype = {
      constructor: EventEmitter4,
      on: function(type, listener, context) {
        listener.context = context || this;
        if (this._listeners === void 0) {
          this._listeners = {};
        }
        var listeners = this._listeners;
        if (listeners[type] === void 0) {
          listeners[type] = [];
        }
        if (listeners[type].indexOf(listener) === -1) {
          listeners[type].push(listener);
        }
        return this;
      },
      has: function(type, listener) {
        if (this._listeners === void 0) {
          return false;
        }
        var listeners = this._listeners;
        if (listener) {
          if (listeners[type] !== void 0 && listeners[type].indexOf(listener) !== -1) {
            return true;
          }
        } else {
          if (listeners[type] !== void 0) {
            return true;
          }
        }
        return false;
      },
      off: function(type, listener) {
        if (this._listeners === void 0) {
          return this;
        }
        var listeners = this._listeners;
        var index = listeners[type].indexOf(listener);
        if (index !== -1) {
          listeners[type].splice(index, 1);
        }
        return this;
      },
      emit: function(event) {
        if (this._listeners === void 0) {
          return this;
        }
        var listeners = this._listeners;
        var listenerArray = listeners[event.type];
        if (listenerArray !== void 0) {
          event.target = this;
          for (var i = 0, l = listenerArray.length; i < l; i++) {
            var listener = listenerArray[i];
            listener.call(listener.context, event);
          }
        }
        return this;
      }
    };
  }
});

// node_modules/p2/src/objects/Body.js
var require_Body = __commonJS({
  "node_modules/p2/src/objects/Body.js"(exports, module2) {
    var vec2 = require_vec2();
    var decomp = require_src();
    var Convex = require_Convex();
    var RaycastResult = require_RaycastResult();
    var Ray = require_Ray();
    var AABB = require_AABB();
    var EventEmitter4 = require_EventEmitter();
    module2.exports = Body;
    function Body(options) {
      options = options || {};
      EventEmitter4.call(this);
      this.id = options.id || ++Body._idCounter;
      this.world = null;
      this.shapes = [];
      this.mass = options.mass || 0;
      this.invMass = 0;
      this.inertia = 0;
      this.invInertia = 0;
      this.invMassSolve = 0;
      this.invInertiaSolve = 0;
      this.fixedRotation = !!options.fixedRotation;
      this.fixedX = !!options.fixedX;
      this.fixedY = !!options.fixedY;
      this.massMultiplier = vec2.create();
      this.position = vec2.fromValues(0, 0);
      if (options.position) {
        vec2.copy(this.position, options.position);
      }
      this.interpolatedPosition = vec2.fromValues(0, 0);
      this.interpolatedAngle = 0;
      this.previousPosition = vec2.fromValues(0, 0);
      this.previousAngle = 0;
      this.velocity = vec2.fromValues(0, 0);
      if (options.velocity) {
        vec2.copy(this.velocity, options.velocity);
      }
      this.vlambda = vec2.fromValues(0, 0);
      this.wlambda = 0;
      this.angle = options.angle || 0;
      this.angularVelocity = options.angularVelocity || 0;
      this.force = vec2.create();
      if (options.force) {
        vec2.copy(this.force, options.force);
      }
      this.angularForce = options.angularForce || 0;
      this.damping = typeof options.damping === "number" ? options.damping : 0.1;
      this.angularDamping = typeof options.angularDamping === "number" ? options.angularDamping : 0.1;
      this.type = Body.STATIC;
      if (typeof options.type !== "undefined") {
        this.type = options.type;
      } else if (!options.mass) {
        this.type = Body.STATIC;
      } else {
        this.type = Body.DYNAMIC;
      }
      this.boundingRadius = 0;
      this.aabb = new AABB();
      this.aabbNeedsUpdate = true;
      this.allowSleep = options.allowSleep !== void 0 ? options.allowSleep : true;
      this.wantsToSleep = false;
      this.sleepState = Body.AWAKE;
      this.sleepSpeedLimit = options.sleepSpeedLimit !== void 0 ? options.sleepSpeedLimit : 0.2;
      this.sleepTimeLimit = options.sleepTimeLimit !== void 0 ? options.sleepTimeLimit : 1;
      this.gravityScale = options.gravityScale !== void 0 ? options.gravityScale : 1;
      this.collisionResponse = options.collisionResponse !== void 0 ? options.collisionResponse : true;
      this.idleTime = 0;
      this.timeLastSleepy = 0;
      this.ccdSpeedThreshold = options.ccdSpeedThreshold !== void 0 ? options.ccdSpeedThreshold : -1;
      this.ccdIterations = options.ccdIterations !== void 0 ? options.ccdIterations : 10;
      this.concavePath = null;
      this._wakeUpAfterNarrowphase = false;
      this.updateMassProperties();
    }
    Body.prototype = new EventEmitter4();
    Body.prototype.constructor = Body;
    Body._idCounter = 0;
    Body.prototype.updateSolveMassProperties = function() {
      if (this.sleepState === Body.SLEEPING || this.type === Body.KINEMATIC) {
        this.invMassSolve = 0;
        this.invInertiaSolve = 0;
      } else {
        this.invMassSolve = this.invMass;
        this.invInertiaSolve = this.invInertia;
      }
    };
    Body.prototype.setDensity = function(density) {
      var totalArea = this.getArea();
      this.mass = totalArea * density;
      this.updateMassProperties();
    };
    Body.prototype.getArea = function() {
      var totalArea = 0;
      for (var i = 0; i < this.shapes.length; i++) {
        totalArea += this.shapes[i].area;
      }
      return totalArea;
    };
    Body.prototype.getAABB = function() {
      if (this.aabbNeedsUpdate) {
        this.updateAABB();
      }
      return this.aabb;
    };
    var shapeAABB = new AABB();
    var tmp = vec2.create();
    Body.prototype.updateAABB = function() {
      var shapes = this.shapes, N = shapes.length, offset = tmp, bodyAngle = this.angle;
      for (var i = 0; i !== N; i++) {
        var shape = shapes[i], angle = shape.angle + bodyAngle;
        vec2.rotate(offset, shape.position, bodyAngle);
        vec2.add(offset, offset, this.position);
        shape.computeAABB(shapeAABB, offset, angle);
        if (i === 0) {
          this.aabb.copy(shapeAABB);
        } else {
          this.aabb.extend(shapeAABB);
        }
      }
      this.aabbNeedsUpdate = false;
    };
    Body.prototype.updateBoundingRadius = function() {
      var shapes = this.shapes, N = shapes.length, radius = 0;
      for (var i = 0; i !== N; i++) {
        var shape = shapes[i], offset = vec2.length(shape.position), r = shape.boundingRadius;
        if (offset + r > radius) {
          radius = offset + r;
        }
      }
      this.boundingRadius = radius;
    };
    Body.prototype.addShape = function(shape, offset, angle) {
      if (shape.body) {
        throw new Error("A shape can only be added to one body.");
      }
      shape.body = this;
      if (offset) {
        vec2.copy(shape.position, offset);
      } else {
        vec2.set(shape.position, 0, 0);
      }
      shape.angle = angle || 0;
      this.shapes.push(shape);
      this.updateMassProperties();
      this.updateBoundingRadius();
      this.aabbNeedsUpdate = true;
    };
    Body.prototype.removeShape = function(shape) {
      var idx = this.shapes.indexOf(shape);
      if (idx !== -1) {
        this.shapes.splice(idx, 1);
        this.aabbNeedsUpdate = true;
        shape.body = null;
        return true;
      } else {
        return false;
      }
    };
    Body.prototype.updateMassProperties = function() {
      if (this.type === Body.STATIC || this.type === Body.KINEMATIC) {
        this.mass = Number.MAX_VALUE;
        this.invMass = 0;
        this.inertia = Number.MAX_VALUE;
        this.invInertia = 0;
      } else {
        var shapes = this.shapes, N = shapes.length, m = this.mass / N, I = 0;
        if (!this.fixedRotation) {
          for (var i = 0; i < N; i++) {
            var shape = shapes[i], r2 = vec2.squaredLength(shape.position), Icm = shape.computeMomentOfInertia(m);
            I += Icm + m * r2;
          }
          this.inertia = I;
          this.invInertia = I > 0 ? 1 / I : 0;
        } else {
          this.inertia = Number.MAX_VALUE;
          this.invInertia = 0;
        }
        this.invMass = 1 / this.mass;
        vec2.set(this.massMultiplier, this.fixedX ? 0 : 1, this.fixedY ? 0 : 1);
      }
    };
    var Body_applyForce_r = vec2.create();
    Body.prototype.applyForce = function(force, relativePoint) {
      vec2.add(this.force, this.force, force);
      if (relativePoint) {
        var rotForce = vec2.crossLength(relativePoint, force);
        this.angularForce += rotForce;
      }
    };
    var Body_applyForce_forceWorld = vec2.create();
    var Body_applyForce_pointWorld = vec2.create();
    var Body_applyForce_pointLocal = vec2.create();
    Body.prototype.applyForceLocal = function(localForce, localPoint) {
      localPoint = localPoint || Body_applyForce_pointLocal;
      var worldForce = Body_applyForce_forceWorld;
      var worldPoint = Body_applyForce_pointWorld;
      this.vectorToWorldFrame(worldForce, localForce);
      this.vectorToWorldFrame(worldPoint, localPoint);
      this.applyForce(worldForce, worldPoint);
    };
    var Body_applyImpulse_velo = vec2.create();
    Body.prototype.applyImpulse = function(impulseVector, relativePoint) {
      if (this.type !== Body.DYNAMIC) {
        return;
      }
      var velo = Body_applyImpulse_velo;
      vec2.scale(velo, impulseVector, this.invMass);
      vec2.multiply(velo, this.massMultiplier, velo);
      vec2.add(this.velocity, velo, this.velocity);
      if (relativePoint) {
        var rotVelo = vec2.crossLength(relativePoint, impulseVector);
        rotVelo *= this.invInertia;
        this.angularVelocity += rotVelo;
      }
    };
    var Body_applyImpulse_impulseWorld = vec2.create();
    var Body_applyImpulse_pointWorld = vec2.create();
    var Body_applyImpulse_pointLocal = vec2.create();
    Body.prototype.applyImpulseLocal = function(localImpulse, localPoint) {
      localPoint = localPoint || Body_applyImpulse_pointLocal;
      var worldImpulse = Body_applyImpulse_impulseWorld;
      var worldPoint = Body_applyImpulse_pointWorld;
      this.vectorToWorldFrame(worldImpulse, localImpulse);
      this.vectorToWorldFrame(worldPoint, localPoint);
      this.applyImpulse(worldImpulse, worldPoint);
    };
    Body.prototype.toLocalFrame = function(out, worldPoint) {
      vec2.toLocalFrame(out, worldPoint, this.position, this.angle);
    };
    Body.prototype.toWorldFrame = function(out, localPoint) {
      vec2.toGlobalFrame(out, localPoint, this.position, this.angle);
    };
    Body.prototype.vectorToLocalFrame = function(out, worldVector) {
      vec2.vectorToLocalFrame(out, worldVector, this.angle);
    };
    Body.prototype.vectorToWorldFrame = function(out, localVector) {
      vec2.vectorToGlobalFrame(out, localVector, this.angle);
    };
    Body.prototype.fromPolygon = function(path, options) {
      options = options || {};
      for (var i = this.shapes.length; i >= 0; --i) {
        this.removeShape(this.shapes[i]);
      }
      var p = new decomp.Polygon();
      p.vertices = path;
      p.makeCCW();
      if (typeof options.removeCollinearPoints === "number") {
        p.removeCollinearPoints(options.removeCollinearPoints);
      }
      if (typeof options.skipSimpleCheck === "undefined") {
        if (!p.isSimple()) {
          return false;
        }
      }
      this.concavePath = p.vertices.slice(0);
      for (var i = 0; i < this.concavePath.length; i++) {
        var v = [0, 0];
        vec2.copy(v, this.concavePath[i]);
        this.concavePath[i] = v;
      }
      var convexes;
      if (options.optimalDecomp) {
        convexes = p.decomp();
      } else {
        convexes = p.quickDecomp();
      }
      var cm = vec2.create();
      for (var i = 0; i !== convexes.length; i++) {
        var c = new Convex({ vertices: convexes[i].vertices });
        for (var j = 0; j !== c.vertices.length; j++) {
          var v = c.vertices[j];
          vec2.sub(v, v, c.centerOfMass);
        }
        vec2.scale(cm, c.centerOfMass, 1);
        c.updateTriangles();
        c.updateCenterOfMass();
        c.updateBoundingRadius();
        this.addShape(c, cm);
      }
      this.adjustCenterOfMass();
      this.aabbNeedsUpdate = true;
      return true;
    };
    var adjustCenterOfMass_tmp1 = vec2.fromValues(0, 0);
    var adjustCenterOfMass_tmp2 = vec2.fromValues(0, 0);
    var adjustCenterOfMass_tmp3 = vec2.fromValues(0, 0);
    var adjustCenterOfMass_tmp4 = vec2.fromValues(0, 0);
    Body.prototype.adjustCenterOfMass = function() {
      var offset_times_area = adjustCenterOfMass_tmp2, sum = adjustCenterOfMass_tmp3, cm = adjustCenterOfMass_tmp4, totalArea = 0;
      vec2.set(sum, 0, 0);
      for (var i = 0; i !== this.shapes.length; i++) {
        var s = this.shapes[i];
        vec2.scale(offset_times_area, s.position, s.area);
        vec2.add(sum, sum, offset_times_area);
        totalArea += s.area;
      }
      vec2.scale(cm, sum, 1 / totalArea);
      for (var i = 0; i !== this.shapes.length; i++) {
        var s = this.shapes[i];
        vec2.sub(s.position, s.position, cm);
      }
      vec2.add(this.position, this.position, cm);
      for (var i = 0; this.concavePath && i < this.concavePath.length; i++) {
        vec2.sub(this.concavePath[i], this.concavePath[i], cm);
      }
      this.updateMassProperties();
      this.updateBoundingRadius();
    };
    Body.prototype.setZeroForce = function() {
      vec2.set(this.force, 0, 0);
      this.angularForce = 0;
    };
    Body.prototype.resetConstraintVelocity = function() {
      var b = this, vlambda = b.vlambda;
      vec2.set(vlambda, 0, 0);
      b.wlambda = 0;
    };
    Body.prototype.addConstraintVelocity = function() {
      var b = this, v = b.velocity;
      vec2.add(v, v, b.vlambda);
      b.angularVelocity += b.wlambda;
    };
    Body.prototype.applyDamping = function(dt) {
      if (this.type === Body.DYNAMIC) {
        var v = this.velocity;
        vec2.scale(v, v, Math.pow(1 - this.damping, dt));
        this.angularVelocity *= Math.pow(1 - this.angularDamping, dt);
      }
    };
    Body.prototype.wakeUp = function() {
      var s = this.sleepState;
      this.sleepState = Body.AWAKE;
      this.idleTime = 0;
      if (s !== Body.AWAKE) {
        this.emit(Body.wakeUpEvent);
      }
    };
    Body.prototype.sleep = function() {
      this.sleepState = Body.SLEEPING;
      this.angularVelocity = 0;
      this.angularForce = 0;
      vec2.set(this.velocity, 0, 0);
      vec2.set(this.force, 0, 0);
      this.emit(Body.sleepEvent);
    };
    Body.prototype.sleepTick = function(time, dontSleep, dt) {
      if (!this.allowSleep || this.type === Body.SLEEPING) {
        return;
      }
      this.wantsToSleep = false;
      var sleepState = this.sleepState, speedSquared = vec2.squaredLength(this.velocity) + Math.pow(this.angularVelocity, 2), speedLimitSquared = Math.pow(this.sleepSpeedLimit, 2);
      if (speedSquared >= speedLimitSquared) {
        this.idleTime = 0;
        this.sleepState = Body.AWAKE;
      } else {
        this.idleTime += dt;
        this.sleepState = Body.SLEEPY;
      }
      if (this.idleTime > this.sleepTimeLimit) {
        if (!dontSleep) {
          this.sleep();
        } else {
          this.wantsToSleep = true;
        }
      }
    };
    Body.prototype.overlaps = function(body) {
      return this.world.overlapKeeper.bodiesAreOverlapping(this, body);
    };
    var integrate_fhMinv = vec2.create();
    var integrate_velodt = vec2.create();
    Body.prototype.integrate = function(dt) {
      var minv = this.invMass, f = this.force, pos = this.position, velo = this.velocity;
      vec2.copy(this.previousPosition, this.position);
      this.previousAngle = this.angle;
      if (!this.fixedRotation) {
        this.angularVelocity += this.angularForce * this.invInertia * dt;
      }
      vec2.scale(integrate_fhMinv, f, dt * minv);
      vec2.multiply(integrate_fhMinv, this.massMultiplier, integrate_fhMinv);
      vec2.add(velo, integrate_fhMinv, velo);
      if (!this.integrateToTimeOfImpact(dt)) {
        vec2.scale(integrate_velodt, velo, dt);
        vec2.add(pos, pos, integrate_velodt);
        if (!this.fixedRotation) {
          this.angle += this.angularVelocity * dt;
        }
      }
      this.aabbNeedsUpdate = true;
    };
    var result = new RaycastResult();
    var ray = new Ray({
      mode: Ray.ALL
    });
    var direction = vec2.create();
    var end = vec2.create();
    var startToEnd = vec2.create();
    var rememberPosition = vec2.create();
    Body.prototype.integrateToTimeOfImpact = function(dt) {
      if (this.ccdSpeedThreshold < 0 || vec2.squaredLength(this.velocity) < Math.pow(this.ccdSpeedThreshold, 2)) {
        return false;
      }
      vec2.normalize(direction, this.velocity);
      vec2.scale(end, this.velocity, dt);
      vec2.add(end, end, this.position);
      vec2.sub(startToEnd, end, this.position);
      var startToEndAngle = this.angularVelocity * dt;
      var len = vec2.length(startToEnd);
      var timeOfImpact = 1;
      var hit;
      var that = this;
      result.reset();
      ray.callback = function(result2) {
        if (result2.body === that) {
          return;
        }
        hit = result2.body;
        result2.getHitPoint(end, ray);
        vec2.sub(startToEnd, end, that.position);
        timeOfImpact = vec2.length(startToEnd) / len;
        result2.stop();
      };
      vec2.copy(ray.from, this.position);
      vec2.copy(ray.to, end);
      ray.update();
      this.world.raycast(result, ray);
      if (!hit) {
        return false;
      }
      var rememberAngle = this.angle;
      vec2.copy(rememberPosition, this.position);
      var iter = 0;
      var tmin = 0;
      var tmid = 0;
      var tmax = timeOfImpact;
      while (tmax >= tmin && iter < this.ccdIterations) {
        iter++;
        tmid = (tmax - tmin) / 2;
        vec2.scale(integrate_velodt, startToEnd, timeOfImpact);
        vec2.add(this.position, rememberPosition, integrate_velodt);
        this.angle = rememberAngle + startToEndAngle * timeOfImpact;
        this.updateAABB();
        var overlaps = this.aabb.overlaps(hit.aabb) && this.world.narrowphase.bodiesOverlap(this, hit);
        if (overlaps) {
          tmin = tmid;
        } else {
          tmax = tmid;
        }
      }
      timeOfImpact = tmid;
      vec2.copy(this.position, rememberPosition);
      this.angle = rememberAngle;
      vec2.scale(integrate_velodt, startToEnd, timeOfImpact);
      vec2.add(this.position, this.position, integrate_velodt);
      if (!this.fixedRotation) {
        this.angle += startToEndAngle * timeOfImpact;
      }
      return true;
    };
    Body.prototype.getVelocityAtPoint = function(result2, relativePoint) {
      vec2.crossVZ(result2, relativePoint, this.angularVelocity);
      vec2.subtract(result2, this.velocity, result2);
      return result2;
    };
    Body.sleepyEvent = {
      type: "sleepy"
    };
    Body.sleepEvent = {
      type: "sleep"
    };
    Body.wakeUpEvent = {
      type: "wakeup"
    };
    Body.DYNAMIC = 1;
    Body.STATIC = 2;
    Body.KINEMATIC = 4;
    Body.AWAKE = 0;
    Body.SLEEPY = 1;
    Body.SLEEPING = 2;
  }
});

// node_modules/p2/src/equations/Equation.js
var require_Equation = __commonJS({
  "node_modules/p2/src/equations/Equation.js"(exports, module2) {
    module2.exports = Equation;
    var vec2 = require_vec2();
    var Utils2 = require_Utils();
    var Body = require_Body();
    function Equation(bodyA, bodyB, minForce, maxForce) {
      this.minForce = typeof minForce === "undefined" ? -Number.MAX_VALUE : minForce;
      this.maxForce = typeof maxForce === "undefined" ? Number.MAX_VALUE : maxForce;
      this.bodyA = bodyA;
      this.bodyB = bodyB;
      this.stiffness = Equation.DEFAULT_STIFFNESS;
      this.relaxation = Equation.DEFAULT_RELAXATION;
      this.G = new Utils2.ARRAY_TYPE(6);
      for (var i = 0; i < 6; i++) {
        this.G[i] = 0;
      }
      this.offset = 0;
      this.a = 0;
      this.b = 0;
      this.epsilon = 0;
      this.timeStep = 1 / 60;
      this.needsUpdate = true;
      this.multiplier = 0;
      this.relativeVelocity = 0;
      this.enabled = true;
    }
    Equation.prototype.constructor = Equation;
    Equation.DEFAULT_STIFFNESS = 1e6;
    Equation.DEFAULT_RELAXATION = 4;
    Equation.prototype.update = function() {
      var k = this.stiffness, d = this.relaxation, h = this.timeStep;
      this.a = 4 / (h * (1 + 4 * d));
      this.b = 4 * d / (1 + 4 * d);
      this.epsilon = 4 / (h * h * k * (1 + 4 * d));
      this.needsUpdate = false;
    };
    Equation.prototype.gmult = function(G, vi, wi, vj, wj) {
      return G[0] * vi[0] + G[1] * vi[1] + G[2] * wi + G[3] * vj[0] + G[4] * vj[1] + G[5] * wj;
    };
    Equation.prototype.computeB = function(a, b, h) {
      var GW = this.computeGW();
      var Gq = this.computeGq();
      var GiMf = this.computeGiMf();
      return -Gq * a - GW * b - GiMf * h;
    };
    var qi = vec2.create();
    var qj = vec2.create();
    Equation.prototype.computeGq = function() {
      var G = this.G, bi = this.bodyA, bj = this.bodyB, xi = bi.position, xj = bj.position, ai = bi.angle, aj = bj.angle;
      return this.gmult(G, qi, ai, qj, aj) + this.offset;
    };
    Equation.prototype.computeGW = function() {
      var G = this.G, bi = this.bodyA, bj = this.bodyB, vi = bi.velocity, vj = bj.velocity, wi = bi.angularVelocity, wj = bj.angularVelocity;
      return this.gmult(G, vi, wi, vj, wj) + this.relativeVelocity;
    };
    Equation.prototype.computeGWlambda = function() {
      var G = this.G, bi = this.bodyA, bj = this.bodyB, vi = bi.vlambda, vj = bj.vlambda, wi = bi.wlambda, wj = bj.wlambda;
      return this.gmult(G, vi, wi, vj, wj);
    };
    var iMfi = vec2.create();
    var iMfj = vec2.create();
    Equation.prototype.computeGiMf = function() {
      var bi = this.bodyA, bj = this.bodyB, fi = bi.force, ti = bi.angularForce, fj = bj.force, tj = bj.angularForce, invMassi = bi.invMassSolve, invMassj = bj.invMassSolve, invIi = bi.invInertiaSolve, invIj = bj.invInertiaSolve, G = this.G;
      vec2.scale(iMfi, fi, invMassi);
      vec2.multiply(iMfi, bi.massMultiplier, iMfi);
      vec2.scale(iMfj, fj, invMassj);
      vec2.multiply(iMfj, bj.massMultiplier, iMfj);
      return this.gmult(G, iMfi, ti * invIi, iMfj, tj * invIj);
    };
    Equation.prototype.computeGiMGt = function() {
      var bi = this.bodyA, bj = this.bodyB, invMassi = bi.invMassSolve, invMassj = bj.invMassSolve, invIi = bi.invInertiaSolve, invIj = bj.invInertiaSolve, G = this.G;
      return G[0] * G[0] * invMassi * bi.massMultiplier[0] + G[1] * G[1] * invMassi * bi.massMultiplier[1] + G[2] * G[2] * invIi + G[3] * G[3] * invMassj * bj.massMultiplier[0] + G[4] * G[4] * invMassj * bj.massMultiplier[1] + G[5] * G[5] * invIj;
    };
    var addToWlambda_temp = vec2.create();
    var addToWlambda_Gi = vec2.create();
    var addToWlambda_Gj = vec2.create();
    var addToWlambda_ri = vec2.create();
    var addToWlambda_rj = vec2.create();
    var addToWlambda_Mdiag = vec2.create();
    Equation.prototype.addToWlambda = function(deltalambda) {
      var bi = this.bodyA, bj = this.bodyB, temp = addToWlambda_temp, Gi = addToWlambda_Gi, Gj = addToWlambda_Gj, ri = addToWlambda_ri, rj = addToWlambda_rj, invMassi = bi.invMassSolve, invMassj = bj.invMassSolve, invIi = bi.invInertiaSolve, invIj = bj.invInertiaSolve, Mdiag = addToWlambda_Mdiag, G = this.G;
      Gi[0] = G[0];
      Gi[1] = G[1];
      Gj[0] = G[3];
      Gj[1] = G[4];
      vec2.scale(temp, Gi, invMassi * deltalambda);
      vec2.multiply(temp, temp, bi.massMultiplier);
      vec2.add(bi.vlambda, bi.vlambda, temp);
      bi.wlambda += invIi * G[2] * deltalambda;
      vec2.scale(temp, Gj, invMassj * deltalambda);
      vec2.multiply(temp, temp, bj.massMultiplier);
      vec2.add(bj.vlambda, bj.vlambda, temp);
      bj.wlambda += invIj * G[5] * deltalambda;
    };
    Equation.prototype.computeInvC = function(eps) {
      return 1 / (this.computeGiMGt() + eps);
    };
  }
});

// node_modules/p2/src/equations/AngleLockEquation.js
var require_AngleLockEquation = __commonJS({
  "node_modules/p2/src/equations/AngleLockEquation.js"(exports, module2) {
    var Equation = require_Equation();
    var vec2 = require_vec2();
    module2.exports = AngleLockEquation;
    function AngleLockEquation(bodyA, bodyB, options) {
      options = options || {};
      Equation.call(this, bodyA, bodyB, -Number.MAX_VALUE, Number.MAX_VALUE);
      this.angle = options.angle || 0;
      this.ratio = typeof options.ratio === "number" ? options.ratio : 1;
      this.setRatio(this.ratio);
    }
    AngleLockEquation.prototype = new Equation();
    AngleLockEquation.prototype.constructor = AngleLockEquation;
    AngleLockEquation.prototype.computeGq = function() {
      return this.ratio * this.bodyA.angle - this.bodyB.angle + this.angle;
    };
    AngleLockEquation.prototype.setRatio = function(ratio) {
      var G = this.G;
      G[2] = ratio;
      G[5] = -1;
      this.ratio = ratio;
    };
    AngleLockEquation.prototype.setMaxTorque = function(torque) {
      this.maxForce = torque;
      this.minForce = -torque;
    };
  }
});

// node_modules/p2/src/collision/Broadphase.js
var require_Broadphase = __commonJS({
  "node_modules/p2/src/collision/Broadphase.js"(exports, module2) {
    var vec2 = require_vec2();
    var Body = require_Body();
    module2.exports = Broadphase;
    function Broadphase(type) {
      this.type = type;
      this.result = [];
      this.world = null;
      this.boundingVolumeType = Broadphase.AABB;
    }
    Broadphase.AABB = 1;
    Broadphase.BOUNDING_CIRCLE = 2;
    Broadphase.prototype.setWorld = function(world) {
      this.world = world;
    };
    Broadphase.prototype.getCollisionPairs = function(world) {
    };
    var dist = vec2.create();
    Broadphase.boundingRadiusCheck = function(bodyA, bodyB) {
      vec2.sub(dist, bodyA.position, bodyB.position);
      var d2 = vec2.squaredLength(dist), r = bodyA.boundingRadius + bodyB.boundingRadius;
      return d2 <= r * r;
    };
    Broadphase.aabbCheck = function(bodyA, bodyB) {
      return bodyA.getAABB().overlaps(bodyB.getAABB());
    };
    Broadphase.prototype.boundingVolumeCheck = function(bodyA, bodyB) {
      var result;
      switch (this.boundingVolumeType) {
        case Broadphase.BOUNDING_CIRCLE:
          result = Broadphase.boundingRadiusCheck(bodyA, bodyB);
          break;
        case Broadphase.AABB:
          result = Broadphase.aabbCheck(bodyA, bodyB);
          break;
        default:
          throw new Error("Bounding volume type not recognized: " + this.boundingVolumeType);
      }
      return result;
    };
    Broadphase.canCollide = function(bodyA, bodyB) {
      var KINEMATIC = Body.KINEMATIC;
      var STATIC = Body.STATIC;
      if (bodyA.type === STATIC && bodyB.type === STATIC) {
        return false;
      }
      if (bodyA.type === KINEMATIC && bodyB.type === STATIC || bodyA.type === STATIC && bodyB.type === KINEMATIC) {
        return false;
      }
      if (bodyA.type === KINEMATIC && bodyB.type === KINEMATIC) {
        return false;
      }
      if (bodyA.sleepState === Body.SLEEPING && bodyB.sleepState === Body.SLEEPING) {
        return false;
      }
      if (bodyA.sleepState === Body.SLEEPING && bodyB.type === STATIC || bodyB.sleepState === Body.SLEEPING && bodyA.type === STATIC) {
        return false;
      }
      return true;
    };
    Broadphase.NAIVE = 1;
    Broadphase.SAP = 2;
  }
});

// node_modules/p2/src/shapes/Capsule.js
var require_Capsule = __commonJS({
  "node_modules/p2/src/shapes/Capsule.js"(exports, module2) {
    var Shape = require_Shape();
    var vec2 = require_vec2();
    module2.exports = Capsule;
    function Capsule(options) {
      if (typeof arguments[0] === "number" && typeof arguments[1] === "number") {
        options = {
          length: arguments[0],
          radius: arguments[1]
        };
        console.warn("The Capsule constructor signature has changed. Please use the following format: new Capsule({ radius: 1, length: 1 })");
      }
      options = options || {};
      this.length = options.length || 1;
      this.radius = options.radius || 1;
      options.type = Shape.CAPSULE;
      Shape.call(this, options);
    }
    Capsule.prototype = new Shape();
    Capsule.prototype.constructor = Capsule;
    Capsule.prototype.computeMomentOfInertia = function(mass) {
      var r2 = this.radius, w = this.length + r2, h = r2 * 2;
      return mass * (h * h + w * w) / 12;
    };
    Capsule.prototype.updateBoundingRadius = function() {
      this.boundingRadius = this.radius + this.length / 2;
    };
    Capsule.prototype.updateArea = function() {
      this.area = Math.PI * this.radius * this.radius + this.radius * 2 * this.length;
    };
    var r = vec2.create();
    Capsule.prototype.computeAABB = function(out, position, angle) {
      var radius = this.radius;
      vec2.set(r, this.length / 2, 0);
      if (angle !== 0) {
        vec2.rotate(r, r, angle);
      }
      vec2.set(out.upperBound, Math.max(r[0] + radius, -r[0] + radius), Math.max(r[1] + radius, -r[1] + radius));
      vec2.set(out.lowerBound, Math.min(r[0] - radius, -r[0] - radius), Math.min(r[1] - radius, -r[1] - radius));
      vec2.add(out.lowerBound, out.lowerBound, position);
      vec2.add(out.upperBound, out.upperBound, position);
    };
    var intersectCapsule_hitPointWorld = vec2.create();
    var intersectCapsule_normal = vec2.create();
    var intersectCapsule_l0 = vec2.create();
    var intersectCapsule_l1 = vec2.create();
    var intersectCapsule_unit_y = vec2.fromValues(0, 1);
    Capsule.prototype.raycast = function(result, ray, position, angle) {
      var from = ray.from;
      var to = ray.to;
      var direction = ray.direction;
      var hitPointWorld = intersectCapsule_hitPointWorld;
      var normal = intersectCapsule_normal;
      var l0 = intersectCapsule_l0;
      var l1 = intersectCapsule_l1;
      var halfLen = this.length / 2;
      for (var i = 0; i < 2; i++) {
        var y = this.radius * (i * 2 - 1);
        vec2.set(l0, -halfLen, y);
        vec2.set(l1, halfLen, y);
        vec2.toGlobalFrame(l0, l0, position, angle);
        vec2.toGlobalFrame(l1, l1, position, angle);
        var delta = vec2.getLineSegmentsIntersectionFraction(from, to, l0, l1);
        if (delta >= 0) {
          vec2.rotate(normal, intersectCapsule_unit_y, angle);
          vec2.scale(normal, normal, i * 2 - 1);
          ray.reportIntersection(result, delta, normal, -1);
          if (result.shouldStop(ray)) {
            return;
          }
        }
      }
      var diagonalLengthSquared = Math.pow(this.radius, 2) + Math.pow(halfLen, 2);
      for (var i = 0; i < 2; i++) {
        vec2.set(l0, halfLen * (i * 2 - 1), 0);
        vec2.toGlobalFrame(l0, l0, position, angle);
        var a = Math.pow(to[0] - from[0], 2) + Math.pow(to[1] - from[1], 2);
        var b = 2 * ((to[0] - from[0]) * (from[0] - l0[0]) + (to[1] - from[1]) * (from[1] - l0[1]));
        var c = Math.pow(from[0] - l0[0], 2) + Math.pow(from[1] - l0[1], 2) - Math.pow(this.radius, 2);
        var delta = Math.pow(b, 2) - 4 * a * c;
        if (delta < 0) {
          continue;
        } else if (delta === 0) {
          vec2.lerp(hitPointWorld, from, to, delta);
          if (vec2.squaredDistance(hitPointWorld, position) > diagonalLengthSquared) {
            vec2.sub(normal, hitPointWorld, l0);
            vec2.normalize(normal, normal);
            ray.reportIntersection(result, delta, normal, -1);
            if (result.shouldStop(ray)) {
              return;
            }
          }
        } else {
          var sqrtDelta = Math.sqrt(delta);
          var inv2a = 1 / (2 * a);
          var d1 = (-b - sqrtDelta) * inv2a;
          var d2 = (-b + sqrtDelta) * inv2a;
          if (d1 >= 0 && d1 <= 1) {
            vec2.lerp(hitPointWorld, from, to, d1);
            if (vec2.squaredDistance(hitPointWorld, position) > diagonalLengthSquared) {
              vec2.sub(normal, hitPointWorld, l0);
              vec2.normalize(normal, normal);
              ray.reportIntersection(result, d1, normal, -1);
              if (result.shouldStop(ray)) {
                return;
              }
            }
          }
          if (d2 >= 0 && d2 <= 1) {
            vec2.lerp(hitPointWorld, from, to, d2);
            if (vec2.squaredDistance(hitPointWorld, position) > diagonalLengthSquared) {
              vec2.sub(normal, hitPointWorld, l0);
              vec2.normalize(normal, normal);
              ray.reportIntersection(result, d2, normal, -1);
              if (result.shouldStop(ray)) {
                return;
              }
            }
          }
        }
      }
    };
  }
});

// node_modules/p2/src/shapes/Circle.js
var require_Circle = __commonJS({
  "node_modules/p2/src/shapes/Circle.js"(exports, module2) {
    var Shape = require_Shape();
    var vec2 = require_vec2();
    module2.exports = Circle;
    function Circle(options) {
      if (typeof arguments[0] === "number") {
        options = {
          radius: arguments[0]
        };
        console.warn("The Circle constructor signature has changed. Please use the following format: new Circle({ radius: 1 })");
      }
      options = options || {};
      this.radius = options.radius || 1;
      options.type = Shape.CIRCLE;
      Shape.call(this, options);
    }
    Circle.prototype = new Shape();
    Circle.prototype.constructor = Circle;
    Circle.prototype.computeMomentOfInertia = function(mass) {
      var r = this.radius;
      return mass * r * r / 2;
    };
    Circle.prototype.updateBoundingRadius = function() {
      this.boundingRadius = this.radius;
    };
    Circle.prototype.updateArea = function() {
      this.area = Math.PI * this.radius * this.radius;
    };
    Circle.prototype.computeAABB = function(out, position, angle) {
      var r = this.radius;
      vec2.set(out.upperBound, r, r);
      vec2.set(out.lowerBound, -r, -r);
      if (position) {
        vec2.add(out.lowerBound, out.lowerBound, position);
        vec2.add(out.upperBound, out.upperBound, position);
      }
    };
    var Ray_intersectSphere_intersectionPoint = vec2.create();
    var Ray_intersectSphere_normal = vec2.create();
    Circle.prototype.raycast = function(result, ray, position, angle) {
      var from = ray.from, to = ray.to, r = this.radius;
      var a = Math.pow(to[0] - from[0], 2) + Math.pow(to[1] - from[1], 2);
      var b = 2 * ((to[0] - from[0]) * (from[0] - position[0]) + (to[1] - from[1]) * (from[1] - position[1]));
      var c = Math.pow(from[0] - position[0], 2) + Math.pow(from[1] - position[1], 2) - Math.pow(r, 2);
      var delta = Math.pow(b, 2) - 4 * a * c;
      var intersectionPoint = Ray_intersectSphere_intersectionPoint;
      var normal = Ray_intersectSphere_normal;
      if (delta < 0) {
        return;
      } else if (delta === 0) {
        vec2.lerp(intersectionPoint, from, to, delta);
        vec2.sub(normal, intersectionPoint, position);
        vec2.normalize(normal, normal);
        ray.reportIntersection(result, delta, normal, -1);
      } else {
        var sqrtDelta = Math.sqrt(delta);
        var inv2a = 1 / (2 * a);
        var d1 = (-b - sqrtDelta) * inv2a;
        var d2 = (-b + sqrtDelta) * inv2a;
        if (d1 >= 0 && d1 <= 1) {
          vec2.lerp(intersectionPoint, from, to, d1);
          vec2.sub(normal, intersectionPoint, position);
          vec2.normalize(normal, normal);
          ray.reportIntersection(result, d1, normal, -1);
          if (result.shouldStop(ray)) {
            return;
          }
        }
        if (d2 >= 0 && d2 <= 1) {
          vec2.lerp(intersectionPoint, from, to, d2);
          vec2.sub(normal, intersectionPoint, position);
          vec2.normalize(normal, normal);
          ray.reportIntersection(result, d2, normal, -1);
        }
      }
    };
  }
});

// node_modules/p2/src/constraints/Constraint.js
var require_Constraint = __commonJS({
  "node_modules/p2/src/constraints/Constraint.js"(exports, module2) {
    module2.exports = Constraint;
    var Utils2 = require_Utils();
    function Constraint(bodyA, bodyB, type, options) {
      this.type = type;
      options = Utils2.defaults(options, {
        collideConnected: true,
        wakeUpBodies: true
      });
      this.equations = [];
      this.bodyA = bodyA;
      this.bodyB = bodyB;
      this.collideConnected = options.collideConnected;
      if (options.wakeUpBodies) {
        if (bodyA) {
          bodyA.wakeUp();
        }
        if (bodyB) {
          bodyB.wakeUp();
        }
      }
    }
    Constraint.prototype.update = function() {
      throw new Error("method update() not implmemented in this Constraint subclass!");
    };
    Constraint.DISTANCE = 1;
    Constraint.GEAR = 2;
    Constraint.LOCK = 3;
    Constraint.PRISMATIC = 4;
    Constraint.REVOLUTE = 5;
    Constraint.prototype.setStiffness = function(stiffness) {
      var eqs = this.equations;
      for (var i = 0; i !== eqs.length; i++) {
        var eq = eqs[i];
        eq.stiffness = stiffness;
        eq.needsUpdate = true;
      }
    };
    Constraint.prototype.setRelaxation = function(relaxation) {
      var eqs = this.equations;
      for (var i = 0; i !== eqs.length; i++) {
        var eq = eqs[i];
        eq.relaxation = relaxation;
        eq.needsUpdate = true;
      }
    };
  }
});

// node_modules/p2/src/equations/ContactEquation.js
var require_ContactEquation = __commonJS({
  "node_modules/p2/src/equations/ContactEquation.js"(exports, module2) {
    var Equation = require_Equation();
    var vec2 = require_vec2();
    module2.exports = ContactEquation;
    function ContactEquation(bodyA, bodyB) {
      Equation.call(this, bodyA, bodyB, 0, Number.MAX_VALUE);
      this.contactPointA = vec2.create();
      this.penetrationVec = vec2.create();
      this.contactPointB = vec2.create();
      this.normalA = vec2.create();
      this.restitution = 0;
      this.firstImpact = false;
      this.shapeA = null;
      this.shapeB = null;
    }
    ContactEquation.prototype = new Equation();
    ContactEquation.prototype.constructor = ContactEquation;
    ContactEquation.prototype.computeB = function(a, b, h) {
      var bi = this.bodyA, bj = this.bodyB, ri = this.contactPointA, rj = this.contactPointB, xi = bi.position, xj = bj.position;
      var penetrationVec = this.penetrationVec, n = this.normalA, G = this.G;
      var rixn = vec2.crossLength(ri, n), rjxn = vec2.crossLength(rj, n);
      G[0] = -n[0];
      G[1] = -n[1];
      G[2] = -rixn;
      G[3] = n[0];
      G[4] = n[1];
      G[5] = rjxn;
      vec2.add(penetrationVec, xj, rj);
      vec2.sub(penetrationVec, penetrationVec, xi);
      vec2.sub(penetrationVec, penetrationVec, ri);
      var GW, Gq;
      if (this.firstImpact && this.restitution !== 0) {
        Gq = 0;
        GW = 1 / b * (1 + this.restitution) * this.computeGW();
      } else {
        Gq = vec2.dot(n, penetrationVec) + this.offset;
        GW = this.computeGW();
      }
      var GiMf = this.computeGiMf();
      var B = -Gq * a - GW * b - h * GiMf;
      return B;
    };
    var vi = vec2.create();
    var vj = vec2.create();
    var relVel = vec2.create();
    ContactEquation.prototype.getVelocityAlongNormal = function() {
      this.bodyA.getVelocityAtPoint(vi, this.contactPointA);
      this.bodyB.getVelocityAtPoint(vj, this.contactPointB);
      vec2.subtract(relVel, vi, vj);
      return vec2.dot(this.normalA, relVel);
    };
  }
});

// node_modules/p2/src/utils/Pool.js
var require_Pool = __commonJS({
  "node_modules/p2/src/utils/Pool.js"(exports, module2) {
    module2.exports = Pool;
    function Pool(options) {
      options = options || {};
      this.objects = [];
      if (options.size !== void 0) {
        this.resize(options.size);
      }
    }
    Pool.prototype.resize = function(size) {
      var objects = this.objects;
      while (objects.length > size) {
        objects.pop();
      }
      while (objects.length < size) {
        objects.push(this.create());
      }
      return this;
    };
    Pool.prototype.get = function() {
      var objects = this.objects;
      return objects.length ? objects.pop() : this.create();
    };
    Pool.prototype.release = function(object) {
      this.destroy(object);
      this.objects.push(object);
      return this;
    };
  }
});

// node_modules/p2/src/utils/ContactEquationPool.js
var require_ContactEquationPool = __commonJS({
  "node_modules/p2/src/utils/ContactEquationPool.js"(exports, module2) {
    var ContactEquation = require_ContactEquation();
    var Pool = require_Pool();
    module2.exports = ContactEquationPool;
    function ContactEquationPool() {
      Pool.apply(this, arguments);
    }
    ContactEquationPool.prototype = new Pool();
    ContactEquationPool.prototype.constructor = ContactEquationPool;
    ContactEquationPool.prototype.create = function() {
      return new ContactEquation();
    };
    ContactEquationPool.prototype.destroy = function(equation) {
      equation.bodyA = equation.bodyB = null;
      return this;
    };
  }
});

// node_modules/p2/src/material/Material.js
var require_Material = __commonJS({
  "node_modules/p2/src/material/Material.js"(exports, module2) {
    module2.exports = Material;
    function Material(id) {
      this.id = id || Material.idCounter++;
    }
    Material.idCounter = 0;
  }
});

// node_modules/p2/src/material/ContactMaterial.js
var require_ContactMaterial = __commonJS({
  "node_modules/p2/src/material/ContactMaterial.js"(exports, module2) {
    var Material = require_Material();
    var Equation = require_Equation();
    module2.exports = ContactMaterial;
    function ContactMaterial(materialA, materialB, options) {
      options = options || {};
      if (!(materialA instanceof Material) || !(materialB instanceof Material)) {
        throw new Error("First two arguments must be Material instances.");
      }
      this.id = ContactMaterial.idCounter++;
      this.materialA = materialA;
      this.materialB = materialB;
      this.friction = typeof options.friction !== "undefined" ? Number(options.friction) : 0.3;
      this.restitution = typeof options.restitution !== "undefined" ? Number(options.restitution) : 0;
      this.stiffness = typeof options.stiffness !== "undefined" ? Number(options.stiffness) : Equation.DEFAULT_STIFFNESS;
      this.relaxation = typeof options.relaxation !== "undefined" ? Number(options.relaxation) : Equation.DEFAULT_RELAXATION;
      this.frictionStiffness = typeof options.frictionStiffness !== "undefined" ? Number(options.frictionStiffness) : Equation.DEFAULT_STIFFNESS;
      this.frictionRelaxation = typeof options.frictionRelaxation !== "undefined" ? Number(options.frictionRelaxation) : Equation.DEFAULT_RELAXATION;
      this.surfaceVelocity = typeof options.surfaceVelocity !== "undefined" ? Number(options.surfaceVelocity) : 0;
      this.contactSkinSize = 5e-3;
    }
    ContactMaterial.idCounter = 0;
  }
});

// node_modules/p2/src/constraints/DistanceConstraint.js
var require_DistanceConstraint = __commonJS({
  "node_modules/p2/src/constraints/DistanceConstraint.js"(exports, module2) {
    var Constraint = require_Constraint();
    var Equation = require_Equation();
    var vec2 = require_vec2();
    var Utils2 = require_Utils();
    module2.exports = DistanceConstraint;
    function DistanceConstraint(bodyA, bodyB, options) {
      options = Utils2.defaults(options, {
        localAnchorA: [0, 0],
        localAnchorB: [0, 0]
      });
      Constraint.call(this, bodyA, bodyB, Constraint.DISTANCE, options);
      this.localAnchorA = vec2.fromValues(options.localAnchorA[0], options.localAnchorA[1]);
      this.localAnchorB = vec2.fromValues(options.localAnchorB[0], options.localAnchorB[1]);
      var localAnchorA = this.localAnchorA;
      var localAnchorB = this.localAnchorB;
      this.distance = 0;
      if (typeof options.distance === "number") {
        this.distance = options.distance;
      } else {
        var worldAnchorA = vec2.create(), worldAnchorB = vec2.create(), r = vec2.create();
        vec2.rotate(worldAnchorA, localAnchorA, bodyA.angle);
        vec2.rotate(worldAnchorB, localAnchorB, bodyB.angle);
        vec2.add(r, bodyB.position, worldAnchorB);
        vec2.sub(r, r, worldAnchorA);
        vec2.sub(r, r, bodyA.position);
        this.distance = vec2.length(r);
      }
      var maxForce;
      if (typeof options.maxForce === "undefined") {
        maxForce = Number.MAX_VALUE;
      } else {
        maxForce = options.maxForce;
      }
      var normal = new Equation(bodyA, bodyB, -maxForce, maxForce);
      this.equations = [normal];
      this.maxForce = maxForce;
      var r = vec2.create();
      var ri2 = vec2.create();
      var rj2 = vec2.create();
      var that = this;
      normal.computeGq = function() {
        var bodyA2 = this.bodyA, bodyB2 = this.bodyB, xi = bodyA2.position, xj = bodyB2.position;
        vec2.rotate(ri2, localAnchorA, bodyA2.angle);
        vec2.rotate(rj2, localAnchorB, bodyB2.angle);
        vec2.add(r, xj, rj2);
        vec2.sub(r, r, ri2);
        vec2.sub(r, r, xi);
        return vec2.length(r) - that.distance;
      };
      this.setMaxForce(maxForce);
      this.upperLimitEnabled = false;
      this.upperLimit = 1;
      this.lowerLimitEnabled = false;
      this.lowerLimit = 0;
      this.position = 0;
    }
    DistanceConstraint.prototype = new Constraint();
    DistanceConstraint.prototype.constructor = DistanceConstraint;
    var n = vec2.create();
    var ri = vec2.create();
    var rj = vec2.create();
    DistanceConstraint.prototype.update = function() {
      var normal = this.equations[0], bodyA = this.bodyA, bodyB = this.bodyB, distance = this.distance, xi = bodyA.position, xj = bodyB.position, normalEquation = this.equations[0], G = normal.G;
      vec2.rotate(ri, this.localAnchorA, bodyA.angle);
      vec2.rotate(rj, this.localAnchorB, bodyB.angle);
      vec2.add(n, xj, rj);
      vec2.sub(n, n, ri);
      vec2.sub(n, n, xi);
      this.position = vec2.length(n);
      var violating = false;
      if (this.upperLimitEnabled) {
        if (this.position > this.upperLimit) {
          normalEquation.maxForce = 0;
          normalEquation.minForce = -this.maxForce;
          this.distance = this.upperLimit;
          violating = true;
        }
      }
      if (this.lowerLimitEnabled) {
        if (this.position < this.lowerLimit) {
          normalEquation.maxForce = this.maxForce;
          normalEquation.minForce = 0;
          this.distance = this.lowerLimit;
          violating = true;
        }
      }
      if ((this.lowerLimitEnabled || this.upperLimitEnabled) && !violating) {
        normalEquation.enabled = false;
        return;
      }
      normalEquation.enabled = true;
      vec2.normalize(n, n);
      var rixn = vec2.crossLength(ri, n), rjxn = vec2.crossLength(rj, n);
      G[0] = -n[0];
      G[1] = -n[1];
      G[2] = -rixn;
      G[3] = n[0];
      G[4] = n[1];
      G[5] = rjxn;
    };
    DistanceConstraint.prototype.setMaxForce = function(maxForce) {
      var normal = this.equations[0];
      normal.minForce = -maxForce;
      normal.maxForce = maxForce;
    };
    DistanceConstraint.prototype.getMaxForce = function() {
      var normal = this.equations[0];
      return normal.maxForce;
    };
  }
});

// node_modules/p2/src/equations/FrictionEquation.js
var require_FrictionEquation = __commonJS({
  "node_modules/p2/src/equations/FrictionEquation.js"(exports, module2) {
    var vec2 = require_vec2();
    var Equation = require_Equation();
    var Utils2 = require_Utils();
    module2.exports = FrictionEquation;
    function FrictionEquation(bodyA, bodyB, slipForce) {
      Equation.call(this, bodyA, bodyB, -slipForce, slipForce);
      this.contactPointA = vec2.create();
      this.contactPointB = vec2.create();
      this.t = vec2.create();
      this.contactEquations = [];
      this.shapeA = null;
      this.shapeB = null;
      this.frictionCoefficient = 0.3;
    }
    FrictionEquation.prototype = new Equation();
    FrictionEquation.prototype.constructor = FrictionEquation;
    FrictionEquation.prototype.setSlipForce = function(slipForce) {
      this.maxForce = slipForce;
      this.minForce = -slipForce;
    };
    FrictionEquation.prototype.getSlipForce = function() {
      return this.maxForce;
    };
    FrictionEquation.prototype.computeB = function(a, b, h) {
      var bi = this.bodyA, bj = this.bodyB, ri = this.contactPointA, rj = this.contactPointB, t = this.t, G = this.G;
      G[0] = -t[0];
      G[1] = -t[1];
      G[2] = -vec2.crossLength(ri, t);
      G[3] = t[0];
      G[4] = t[1];
      G[5] = vec2.crossLength(rj, t);
      var GW = this.computeGW(), GiMf = this.computeGiMf();
      var B = -GW * b - h * GiMf;
      return B;
    };
  }
});

// node_modules/p2/src/utils/FrictionEquationPool.js
var require_FrictionEquationPool = __commonJS({
  "node_modules/p2/src/utils/FrictionEquationPool.js"(exports, module2) {
    var FrictionEquation = require_FrictionEquation();
    var Pool = require_Pool();
    module2.exports = FrictionEquationPool;
    function FrictionEquationPool() {
      Pool.apply(this, arguments);
    }
    FrictionEquationPool.prototype = new Pool();
    FrictionEquationPool.prototype.constructor = FrictionEquationPool;
    FrictionEquationPool.prototype.create = function() {
      return new FrictionEquation();
    };
    FrictionEquationPool.prototype.destroy = function(equation) {
      equation.bodyA = equation.bodyB = null;
      return this;
    };
  }
});

// node_modules/p2/src/constraints/GearConstraint.js
var require_GearConstraint = __commonJS({
  "node_modules/p2/src/constraints/GearConstraint.js"(exports, module2) {
    var Constraint = require_Constraint();
    var Equation = require_Equation();
    var AngleLockEquation = require_AngleLockEquation();
    var vec2 = require_vec2();
    module2.exports = GearConstraint;
    function GearConstraint(bodyA, bodyB, options) {
      options = options || {};
      Constraint.call(this, bodyA, bodyB, Constraint.GEAR, options);
      this.ratio = options.ratio !== void 0 ? options.ratio : 1;
      this.angle = options.angle !== void 0 ? options.angle : bodyB.angle - this.ratio * bodyA.angle;
      options.angle = this.angle;
      options.ratio = this.ratio;
      this.equations = [
        new AngleLockEquation(bodyA, bodyB, options)
      ];
      if (options.maxTorque !== void 0) {
        this.setMaxTorque(options.maxTorque);
      }
    }
    GearConstraint.prototype = new Constraint();
    GearConstraint.prototype.constructor = GearConstraint;
    GearConstraint.prototype.update = function() {
      var eq = this.equations[0];
      if (eq.ratio !== this.ratio) {
        eq.setRatio(this.ratio);
      }
      eq.angle = this.angle;
    };
    GearConstraint.prototype.setMaxTorque = function(torque) {
      this.equations[0].setMaxTorque(torque);
    };
    GearConstraint.prototype.getMaxTorque = function(torque) {
      return this.equations[0].maxForce;
    };
  }
});

// node_modules/p2/src/solver/Solver.js
var require_Solver = __commonJS({
  "node_modules/p2/src/solver/Solver.js"(exports, module2) {
    var Utils2 = require_Utils();
    var EventEmitter4 = require_EventEmitter();
    module2.exports = Solver;
    function Solver(options, type) {
      options = options || {};
      EventEmitter4.call(this);
      this.type = type;
      this.equations = [];
      this.equationSortFunction = options.equationSortFunction || false;
    }
    Solver.prototype = new EventEmitter4();
    Solver.prototype.constructor = Solver;
    Solver.prototype.solve = function(dt, world) {
      throw new Error("Solver.solve should be implemented by subclasses!");
    };
    var mockWorld = { bodies: [] };
    Solver.prototype.solveIsland = function(dt, island) {
      this.removeAllEquations();
      if (island.equations.length) {
        this.addEquations(island.equations);
        mockWorld.bodies.length = 0;
        island.getBodies(mockWorld.bodies);
        if (mockWorld.bodies.length) {
          this.solve(dt, mockWorld);
        }
      }
    };
    Solver.prototype.sortEquations = function() {
      if (this.equationSortFunction) {
        this.equations.sort(this.equationSortFunction);
      }
    };
    Solver.prototype.addEquation = function(eq) {
      if (eq.enabled) {
        this.equations.push(eq);
      }
    };
    Solver.prototype.addEquations = function(eqs) {
      for (var i = 0, N = eqs.length; i !== N; i++) {
        var eq = eqs[i];
        if (eq.enabled) {
          this.equations.push(eq);
        }
      }
    };
    Solver.prototype.removeEquation = function(eq) {
      var i = this.equations.indexOf(eq);
      if (i !== -1) {
        this.equations.splice(i, 1);
      }
    };
    Solver.prototype.removeAllEquations = function() {
      this.equations.length = 0;
    };
    Solver.GS = 1;
    Solver.ISLAND = 2;
  }
});

// node_modules/p2/src/solver/GSSolver.js
var require_GSSolver = __commonJS({
  "node_modules/p2/src/solver/GSSolver.js"(exports, module2) {
    var vec2 = require_vec2();
    var Solver = require_Solver();
    var Utils2 = require_Utils();
    var FrictionEquation = require_FrictionEquation();
    module2.exports = GSSolver;
    function GSSolver(options) {
      Solver.call(this, options, Solver.GS);
      options = options || {};
      this.iterations = options.iterations || 10;
      this.tolerance = options.tolerance || 1e-7;
      this.arrayStep = 30;
      this.lambda = new Utils2.ARRAY_TYPE(this.arrayStep);
      this.Bs = new Utils2.ARRAY_TYPE(this.arrayStep);
      this.invCs = new Utils2.ARRAY_TYPE(this.arrayStep);
      this.useZeroRHS = false;
      this.frictionIterations = options.frictionIterations !== void 0 ? 0 : options.frictionIterations;
      this.usedIterations = 0;
    }
    GSSolver.prototype = new Solver();
    GSSolver.prototype.constructor = GSSolver;
    function setArrayZero(array) {
      var l = array.length;
      while (l--) {
        array[l] = 0;
      }
    }
    GSSolver.prototype.solve = function(h, world) {
      this.sortEquations();
      var iter = 0, maxIter = this.iterations, maxFrictionIter = this.frictionIterations, equations = this.equations, Neq = equations.length, tolSquared = Math.pow(this.tolerance * Neq, 2), bodies = world.bodies, Nbodies = world.bodies.length, add = vec2.add, set = vec2.set, useZeroRHS = this.useZeroRHS, lambda = this.lambda;
      this.usedIterations = 0;
      if (Neq) {
        for (var i = 0; i !== Nbodies; i++) {
          var b = bodies[i];
          b.updateSolveMassProperties();
        }
      }
      if (lambda.length < Neq) {
        lambda = this.lambda = new Utils2.ARRAY_TYPE(Neq + this.arrayStep);
        this.Bs = new Utils2.ARRAY_TYPE(Neq + this.arrayStep);
        this.invCs = new Utils2.ARRAY_TYPE(Neq + this.arrayStep);
      }
      setArrayZero(lambda);
      var invCs = this.invCs, Bs = this.Bs, lambda = this.lambda;
      for (var i = 0; i !== equations.length; i++) {
        var c = equations[i];
        if (c.timeStep !== h || c.needsUpdate) {
          c.timeStep = h;
          c.update();
        }
        Bs[i] = c.computeB(c.a, c.b, h);
        invCs[i] = c.computeInvC(c.epsilon);
      }
      var q, B, c, deltalambdaTot, i, j;
      if (Neq !== 0) {
        for (i = 0; i !== Nbodies; i++) {
          var b = bodies[i];
          b.resetConstraintVelocity();
        }
        if (maxFrictionIter) {
          for (iter = 0; iter !== maxFrictionIter; iter++) {
            deltalambdaTot = 0;
            for (j = 0; j !== Neq; j++) {
              c = equations[j];
              var deltalambda = GSSolver.iterateEquation(j, c, c.epsilon, Bs, invCs, lambda, useZeroRHS, h, iter);
              deltalambdaTot += Math.abs(deltalambda);
            }
            this.usedIterations++;
            if (deltalambdaTot * deltalambdaTot <= tolSquared) {
              break;
            }
          }
          GSSolver.updateMultipliers(equations, lambda, 1 / h);
          for (j = 0; j !== Neq; j++) {
            var eq = equations[j];
            if (eq instanceof FrictionEquation) {
              var f = 0;
              for (var k = 0; k !== eq.contactEquations.length; k++) {
                f += eq.contactEquations[k].multiplier;
              }
              f *= eq.frictionCoefficient / eq.contactEquations.length;
              eq.maxForce = f;
              eq.minForce = -f;
            }
          }
        }
        for (iter = 0; iter !== maxIter; iter++) {
          deltalambdaTot = 0;
          for (j = 0; j !== Neq; j++) {
            c = equations[j];
            var deltalambda = GSSolver.iterateEquation(j, c, c.epsilon, Bs, invCs, lambda, useZeroRHS, h, iter);
            deltalambdaTot += Math.abs(deltalambda);
          }
          this.usedIterations++;
          if (deltalambdaTot * deltalambdaTot <= tolSquared) {
            break;
          }
        }
        for (i = 0; i !== Nbodies; i++) {
          bodies[i].addConstraintVelocity();
        }
        GSSolver.updateMultipliers(equations, lambda, 1 / h);
      }
    };
    GSSolver.updateMultipliers = function(equations, lambda, invDt) {
      var l = equations.length;
      while (l--) {
        equations[l].multiplier = lambda[l] * invDt;
      }
    };
    GSSolver.iterateEquation = function(j, eq, eps, Bs, invCs, lambda, useZeroRHS, dt, iter) {
      var B = Bs[j], invC = invCs[j], lambdaj = lambda[j], GWlambda = eq.computeGWlambda();
      var maxForce = eq.maxForce, minForce = eq.minForce;
      if (useZeroRHS) {
        B = 0;
      }
      var deltalambda = invC * (B - GWlambda - eps * lambdaj);
      var lambdaj_plus_deltalambda = lambdaj + deltalambda;
      if (lambdaj_plus_deltalambda < minForce * dt) {
        deltalambda = minForce * dt - lambdaj;
      } else if (lambdaj_plus_deltalambda > maxForce * dt) {
        deltalambda = maxForce * dt - lambdaj;
      }
      lambda[j] += deltalambda;
      eq.addToWlambda(deltalambda);
      return deltalambda;
    };
  }
});

// node_modules/p2/src/shapes/Heightfield.js
var require_Heightfield = __commonJS({
  "node_modules/p2/src/shapes/Heightfield.js"(exports, module2) {
    var Shape = require_Shape();
    var vec2 = require_vec2();
    var Utils2 = require_Utils();
    module2.exports = Heightfield;
    function Heightfield(options) {
      if (Array.isArray(arguments[0])) {
        options = {
          heights: arguments[0]
        };
        if (typeof arguments[1] === "object") {
          for (var key in arguments[1]) {
            options[key] = arguments[1][key];
          }
        }
        console.warn("The Heightfield constructor signature has changed. Please use the following format: new Heightfield({ heights: [...], ... })");
      }
      options = options || {};
      this.heights = options.heights ? options.heights.slice(0) : [];
      this.maxValue = options.maxValue || null;
      this.minValue = options.minValue || null;
      this.elementWidth = options.elementWidth || 0.1;
      if (options.maxValue === void 0 || options.minValue === void 0) {
        this.updateMaxMinValues();
      }
      options.type = Shape.HEIGHTFIELD;
      Shape.call(this, options);
    }
    Heightfield.prototype = new Shape();
    Heightfield.prototype.constructor = Heightfield;
    Heightfield.prototype.updateMaxMinValues = function() {
      var data = this.heights;
      var maxValue = data[0];
      var minValue = data[0];
      for (var i = 0; i !== data.length; i++) {
        var v = data[i];
        if (v > maxValue) {
          maxValue = v;
        }
        if (v < minValue) {
          minValue = v;
        }
      }
      this.maxValue = maxValue;
      this.minValue = minValue;
    };
    Heightfield.prototype.computeMomentOfInertia = function(mass) {
      return Number.MAX_VALUE;
    };
    Heightfield.prototype.updateBoundingRadius = function() {
      this.boundingRadius = Number.MAX_VALUE;
    };
    Heightfield.prototype.updateArea = function() {
      var data = this.heights, area = 0;
      for (var i = 0; i < data.length - 1; i++) {
        area += (data[i] + data[i + 1]) / 2 * this.elementWidth;
      }
      this.area = area;
    };
    var points = [
      vec2.create(),
      vec2.create(),
      vec2.create(),
      vec2.create()
    ];
    Heightfield.prototype.computeAABB = function(out, position, angle) {
      vec2.set(points[0], 0, this.maxValue);
      vec2.set(points[1], this.elementWidth * this.heights.length, this.maxValue);
      vec2.set(points[2], this.elementWidth * this.heights.length, this.minValue);
      vec2.set(points[3], 0, this.minValue);
      out.setFromPoints(points, position, angle);
    };
    Heightfield.prototype.getLineSegment = function(start, end, i) {
      var data = this.heights;
      var width = this.elementWidth;
      vec2.set(start, i * width, data[i]);
      vec2.set(end, (i + 1) * width, data[i + 1]);
    };
    Heightfield.prototype.getSegmentIndex = function(position) {
      return Math.floor(position[0] / this.elementWidth);
    };
    Heightfield.prototype.getClampedSegmentIndex = function(position) {
      var i = this.getSegmentIndex(position);
      i = Math.min(this.heights.length, Math.max(i, 0));
      return i;
    };
    var intersectHeightfield_hitPointWorld = vec2.create();
    var intersectHeightfield_worldNormal = vec2.create();
    var intersectHeightfield_l0 = vec2.create();
    var intersectHeightfield_l1 = vec2.create();
    var intersectHeightfield_localFrom = vec2.create();
    var intersectHeightfield_localTo = vec2.create();
    var intersectHeightfield_unit_y = vec2.fromValues(0, 1);
    Heightfield.prototype.raycast = function(result, ray, position, angle) {
      var from = ray.from;
      var to = ray.to;
      var direction = ray.direction;
      var hitPointWorld = intersectHeightfield_hitPointWorld;
      var worldNormal = intersectHeightfield_worldNormal;
      var l0 = intersectHeightfield_l0;
      var l1 = intersectHeightfield_l1;
      var localFrom = intersectHeightfield_localFrom;
      var localTo = intersectHeightfield_localTo;
      vec2.toLocalFrame(localFrom, from, position, angle);
      vec2.toLocalFrame(localTo, to, position, angle);
      var i0 = this.getClampedSegmentIndex(localFrom);
      var i1 = this.getClampedSegmentIndex(localTo);
      if (i0 > i1) {
        var tmp = i0;
        i0 = i1;
        i1 = tmp;
      }
      for (var i = 0; i < this.heights.length - 1; i++) {
        this.getLineSegment(l0, l1, i);
        var t = vec2.getLineSegmentsIntersectionFraction(localFrom, localTo, l0, l1);
        if (t >= 0) {
          vec2.sub(worldNormal, l1, l0);
          vec2.rotate(worldNormal, worldNormal, angle + Math.PI / 2);
          vec2.normalize(worldNormal, worldNormal);
          ray.reportIntersection(result, t, worldNormal, -1);
          if (result.shouldStop(ray)) {
            return;
          }
        }
      }
    };
  }
});

// node_modules/p2/src/shapes/Line.js
var require_Line2 = __commonJS({
  "node_modules/p2/src/shapes/Line.js"(exports, module2) {
    var Shape = require_Shape();
    var vec2 = require_vec2();
    module2.exports = Line;
    function Line(options) {
      if (typeof arguments[0] === "number") {
        options = {
          length: arguments[0]
        };
        console.warn("The Line constructor signature has changed. Please use the following format: new Line({ length: 1, ... })");
      }
      options = options || {};
      this.length = options.length || 1;
      options.type = Shape.LINE;
      Shape.call(this, options);
    }
    Line.prototype = new Shape();
    Line.prototype.constructor = Line;
    Line.prototype.computeMomentOfInertia = function(mass) {
      return mass * Math.pow(this.length, 2) / 12;
    };
    Line.prototype.updateBoundingRadius = function() {
      this.boundingRadius = this.length / 2;
    };
    var points = [vec2.create(), vec2.create()];
    Line.prototype.computeAABB = function(out, position, angle) {
      var l2 = this.length / 2;
      vec2.set(points[0], -l2, 0);
      vec2.set(points[1], l2, 0);
      out.setFromPoints(points, position, angle, 0);
    };
    var raycast_hitPoint = vec2.create();
    var raycast_normal = vec2.create();
    var raycast_l0 = vec2.create();
    var raycast_l1 = vec2.create();
    var raycast_unit_y = vec2.fromValues(0, 1);
    Line.prototype.raycast = function(result, ray, position, angle) {
      var from = ray.from;
      var to = ray.to;
      var l0 = raycast_l0;
      var l1 = raycast_l1;
      var halfLen = this.length / 2;
      vec2.set(l0, -halfLen, 0);
      vec2.set(l1, halfLen, 0);
      vec2.toGlobalFrame(l0, l0, position, angle);
      vec2.toGlobalFrame(l1, l1, position, angle);
      var fraction = vec2.getLineSegmentsIntersectionFraction(l0, l1, from, to);
      if (fraction >= 0) {
        var normal = raycast_normal;
        vec2.rotate(normal, raycast_unit_y, angle);
        ray.reportIntersection(result, fraction, normal, -1);
      }
    };
  }
});

// node_modules/p2/src/constraints/LockConstraint.js
var require_LockConstraint = __commonJS({
  "node_modules/p2/src/constraints/LockConstraint.js"(exports, module2) {
    var Constraint = require_Constraint();
    var vec2 = require_vec2();
    var Equation = require_Equation();
    module2.exports = LockConstraint;
    function LockConstraint(bodyA, bodyB, options) {
      options = options || {};
      Constraint.call(this, bodyA, bodyB, Constraint.LOCK, options);
      var maxForce = typeof options.maxForce === "undefined" ? Number.MAX_VALUE : options.maxForce;
      var localAngleB = options.localAngleB || 0;
      var x = new Equation(bodyA, bodyB, -maxForce, maxForce), y = new Equation(bodyA, bodyB, -maxForce, maxForce), rot = new Equation(bodyA, bodyB, -maxForce, maxForce);
      var l2 = vec2.create(), g = vec2.create(), that = this;
      x.computeGq = function() {
        vec2.rotate(l2, that.localOffsetB, bodyA.angle);
        vec2.sub(g, bodyB.position, bodyA.position);
        vec2.sub(g, g, l2);
        return g[0];
      };
      y.computeGq = function() {
        vec2.rotate(l2, that.localOffsetB, bodyA.angle);
        vec2.sub(g, bodyB.position, bodyA.position);
        vec2.sub(g, g, l2);
        return g[1];
      };
      var r2 = vec2.create(), t2 = vec2.create();
      rot.computeGq = function() {
        vec2.rotate(r2, that.localOffsetB, bodyB.angle - that.localAngleB);
        vec2.scale(r2, r2, -1);
        vec2.sub(g, bodyA.position, bodyB.position);
        vec2.add(g, g, r2);
        vec2.rotate(t2, r2, -Math.PI / 2);
        vec2.normalize(t2, t2);
        return vec2.dot(g, t2);
      };
      this.localOffsetB = vec2.create();
      if (options.localOffsetB) {
        vec2.copy(this.localOffsetB, options.localOffsetB);
      } else {
        vec2.sub(this.localOffsetB, bodyB.position, bodyA.position);
        vec2.rotate(this.localOffsetB, this.localOffsetB, -bodyA.angle);
      }
      this.localAngleB = 0;
      if (typeof options.localAngleB === "number") {
        this.localAngleB = options.localAngleB;
      } else {
        this.localAngleB = bodyB.angle - bodyA.angle;
      }
      this.equations.push(x, y, rot);
      this.setMaxForce(maxForce);
    }
    LockConstraint.prototype = new Constraint();
    LockConstraint.prototype.constructor = LockConstraint;
    LockConstraint.prototype.setMaxForce = function(force) {
      var eqs = this.equations;
      for (var i = 0; i < this.equations.length; i++) {
        eqs[i].maxForce = force;
        eqs[i].minForce = -force;
      }
    };
    LockConstraint.prototype.getMaxForce = function() {
      return this.equations[0].maxForce;
    };
    var l = vec2.create();
    var r = vec2.create();
    var t = vec2.create();
    var xAxis = vec2.fromValues(1, 0);
    var yAxis = vec2.fromValues(0, 1);
    LockConstraint.prototype.update = function() {
      var x = this.equations[0], y = this.equations[1], rot = this.equations[2], bodyA = this.bodyA, bodyB = this.bodyB;
      vec2.rotate(l, this.localOffsetB, bodyA.angle);
      vec2.rotate(r, this.localOffsetB, bodyB.angle - this.localAngleB);
      vec2.scale(r, r, -1);
      vec2.rotate(t, r, Math.PI / 2);
      vec2.normalize(t, t);
      x.G[0] = -1;
      x.G[1] = 0;
      x.G[2] = -vec2.crossLength(l, xAxis);
      x.G[3] = 1;
      y.G[0] = 0;
      y.G[1] = -1;
      y.G[2] = -vec2.crossLength(l, yAxis);
      y.G[4] = 1;
      rot.G[0] = -t[0];
      rot.G[1] = -t[1];
      rot.G[3] = t[0];
      rot.G[4] = t[1];
      rot.G[5] = vec2.crossLength(r, t);
    };
  }
});

// node_modules/p2/src/utils/TupleDictionary.js
var require_TupleDictionary = __commonJS({
  "node_modules/p2/src/utils/TupleDictionary.js"(exports, module2) {
    var Utils2 = require_Utils();
    module2.exports = TupleDictionary;
    function TupleDictionary() {
      this.data = {};
      this.keys = [];
    }
    TupleDictionary.prototype.getKey = function(id1, id2) {
      id1 = id1 | 0;
      id2 = id2 | 0;
      if ((id1 | 0) === (id2 | 0)) {
        return -1;
      }
      return ((id1 | 0) > (id2 | 0) ? id1 << 16 | id2 & 65535 : id2 << 16 | id1 & 65535) | 0;
    };
    TupleDictionary.prototype.getByKey = function(key) {
      key = key | 0;
      return this.data[key];
    };
    TupleDictionary.prototype.get = function(i, j) {
      return this.data[this.getKey(i, j)];
    };
    TupleDictionary.prototype.set = function(i, j, value) {
      if (!value) {
        throw new Error("No data!");
      }
      var key = this.getKey(i, j);
      if (!this.data[key]) {
        this.keys.push(key);
      }
      this.data[key] = value;
      return key;
    };
    TupleDictionary.prototype.reset = function() {
      var data = this.data, keys = this.keys;
      var l = keys.length;
      while (l--) {
        delete data[keys[l]];
      }
      keys.length = 0;
    };
    TupleDictionary.prototype.copy = function(dict) {
      this.reset();
      Utils2.appendArray(this.keys, dict.keys);
      var l = dict.keys.length;
      while (l--) {
        var key = dict.keys[l];
        this.data[key] = dict.data[key];
      }
    };
  }
});

// node_modules/p2/src/shapes/Box.js
var require_Box = __commonJS({
  "node_modules/p2/src/shapes/Box.js"(exports, module2) {
    var vec2 = require_vec2();
    var Shape = require_Shape();
    var Convex = require_Convex();
    module2.exports = Box;
    function Box(options) {
      if (typeof arguments[0] === "number" && typeof arguments[1] === "number") {
        options = {
          width: arguments[0],
          height: arguments[1]
        };
        console.warn("The Rectangle has been renamed to Box and its constructor signature has changed. Please use the following format: new Box({ width: 1, height: 1, ... })");
      }
      options = options || {};
      var width = this.width = options.width || 1;
      var height = this.height = options.height || 1;
      var verts = [
        vec2.fromValues(-width / 2, -height / 2),
        vec2.fromValues(width / 2, -height / 2),
        vec2.fromValues(width / 2, height / 2),
        vec2.fromValues(-width / 2, height / 2)
      ];
      var axes = [
        vec2.fromValues(1, 0),
        vec2.fromValues(0, 1)
      ];
      options.vertices = verts;
      options.axes = axes;
      options.type = Shape.BOX;
      Convex.call(this, options);
    }
    Box.prototype = new Convex();
    Box.prototype.constructor = Box;
    Box.prototype.computeMomentOfInertia = function(mass) {
      var w = this.width, h = this.height;
      return mass * (h * h + w * w) / 12;
    };
    Box.prototype.updateBoundingRadius = function() {
      var w = this.width, h = this.height;
      this.boundingRadius = Math.sqrt(w * w + h * h) / 2;
    };
    var corner1 = vec2.create();
    var corner2 = vec2.create();
    var corner3 = vec2.create();
    var corner4 = vec2.create();
    Box.prototype.computeAABB = function(out, position, angle) {
      out.setFromPoints(this.vertices, position, angle, 0);
    };
    Box.prototype.updateArea = function() {
      this.area = this.width * this.height;
    };
  }
});

// node_modules/p2/src/collision/Narrowphase.js
var require_Narrowphase = __commonJS({
  "node_modules/p2/src/collision/Narrowphase.js"(exports, module2) {
    var vec2 = require_vec2();
    var sub = vec2.sub;
    var add = vec2.add;
    var dot = vec2.dot;
    var Utils2 = require_Utils();
    var ContactEquationPool = require_ContactEquationPool();
    var FrictionEquationPool = require_FrictionEquationPool();
    var TupleDictionary = require_TupleDictionary();
    var Equation = require_Equation();
    var ContactEquation = require_ContactEquation();
    var FrictionEquation = require_FrictionEquation();
    var Circle = require_Circle();
    var Convex = require_Convex();
    var Shape = require_Shape();
    var Body = require_Body();
    var Box = require_Box();
    module2.exports = Narrowphase;
    var yAxis = vec2.fromValues(0, 1);
    var tmp1 = vec2.fromValues(0, 0);
    var tmp2 = vec2.fromValues(0, 0);
    var tmp3 = vec2.fromValues(0, 0);
    var tmp4 = vec2.fromValues(0, 0);
    var tmp5 = vec2.fromValues(0, 0);
    var tmp6 = vec2.fromValues(0, 0);
    var tmp7 = vec2.fromValues(0, 0);
    var tmp8 = vec2.fromValues(0, 0);
    var tmp9 = vec2.fromValues(0, 0);
    var tmp10 = vec2.fromValues(0, 0);
    var tmp11 = vec2.fromValues(0, 0);
    var tmp12 = vec2.fromValues(0, 0);
    var tmp13 = vec2.fromValues(0, 0);
    var tmp14 = vec2.fromValues(0, 0);
    var tmp15 = vec2.fromValues(0, 0);
    var tmp16 = vec2.fromValues(0, 0);
    var tmp17 = vec2.fromValues(0, 0);
    var tmp18 = vec2.fromValues(0, 0);
    var tmpArray = [];
    function Narrowphase() {
      this.contactEquations = [];
      this.frictionEquations = [];
      this.enableFriction = true;
      this.enabledEquations = true;
      this.slipForce = 10;
      this.frictionCoefficient = 0.3;
      this.surfaceVelocity = 0;
      this.contactEquationPool = new ContactEquationPool({ size: 32 });
      this.frictionEquationPool = new FrictionEquationPool({ size: 64 });
      this.restitution = 0;
      this.stiffness = Equation.DEFAULT_STIFFNESS;
      this.relaxation = Equation.DEFAULT_RELAXATION;
      this.frictionStiffness = Equation.DEFAULT_STIFFNESS;
      this.frictionRelaxation = Equation.DEFAULT_RELAXATION;
      this.enableFrictionReduction = true;
      this.collidingBodiesLastStep = new TupleDictionary();
      this.contactSkinSize = 0.01;
    }
    var bodiesOverlap_shapePositionA = vec2.create();
    var bodiesOverlap_shapePositionB = vec2.create();
    Narrowphase.prototype.bodiesOverlap = function(bodyA, bodyB) {
      var shapePositionA = bodiesOverlap_shapePositionA;
      var shapePositionB = bodiesOverlap_shapePositionB;
      for (var k = 0, Nshapesi = bodyA.shapes.length; k !== Nshapesi; k++) {
        var shapeA = bodyA.shapes[k];
        bodyA.toWorldFrame(shapePositionA, shapeA.position);
        for (var l = 0, Nshapesj = bodyB.shapes.length; l !== Nshapesj; l++) {
          var shapeB = bodyB.shapes[l];
          bodyB.toWorldFrame(shapePositionB, shapeB.position);
          if (this[shapeA.type | shapeB.type](bodyA, shapeA, shapePositionA, shapeA.angle + bodyA.angle, bodyB, shapeB, shapePositionB, shapeB.angle + bodyB.angle, true)) {
            return true;
          }
        }
      }
      return false;
    };
    Narrowphase.prototype.collidedLastStep = function(bodyA, bodyB) {
      var id1 = bodyA.id | 0, id2 = bodyB.id | 0;
      return !!this.collidingBodiesLastStep.get(id1, id2);
    };
    Narrowphase.prototype.reset = function() {
      this.collidingBodiesLastStep.reset();
      var eqs = this.contactEquations;
      var l = eqs.length;
      while (l--) {
        var eq = eqs[l], id1 = eq.bodyA.id, id2 = eq.bodyB.id;
        this.collidingBodiesLastStep.set(id1, id2, true);
      }
      var ce = this.contactEquations, fe = this.frictionEquations;
      for (var i = 0; i < ce.length; i++) {
        this.contactEquationPool.release(ce[i]);
      }
      for (var i = 0; i < fe.length; i++) {
        this.frictionEquationPool.release(fe[i]);
      }
      this.contactEquations.length = this.frictionEquations.length = 0;
    };
    Narrowphase.prototype.createContactEquation = function(bodyA, bodyB, shapeA, shapeB) {
      var c = this.contactEquationPool.get();
      c.bodyA = bodyA;
      c.bodyB = bodyB;
      c.shapeA = shapeA;
      c.shapeB = shapeB;
      c.restitution = this.restitution;
      c.firstImpact = !this.collidedLastStep(bodyA, bodyB);
      c.stiffness = this.stiffness;
      c.relaxation = this.relaxation;
      c.needsUpdate = true;
      c.enabled = this.enabledEquations;
      c.offset = this.contactSkinSize;
      return c;
    };
    Narrowphase.prototype.createFrictionEquation = function(bodyA, bodyB, shapeA, shapeB) {
      var c = this.frictionEquationPool.get();
      c.bodyA = bodyA;
      c.bodyB = bodyB;
      c.shapeA = shapeA;
      c.shapeB = shapeB;
      c.setSlipForce(this.slipForce);
      c.frictionCoefficient = this.frictionCoefficient;
      c.relativeVelocity = this.surfaceVelocity;
      c.enabled = this.enabledEquations;
      c.needsUpdate = true;
      c.stiffness = this.frictionStiffness;
      c.relaxation = this.frictionRelaxation;
      c.contactEquations.length = 0;
      return c;
    };
    Narrowphase.prototype.createFrictionFromContact = function(c) {
      var eq = this.createFrictionEquation(c.bodyA, c.bodyB, c.shapeA, c.shapeB);
      vec2.copy(eq.contactPointA, c.contactPointA);
      vec2.copy(eq.contactPointB, c.contactPointB);
      vec2.rotate90cw(eq.t, c.normalA);
      eq.contactEquations.push(c);
      return eq;
    };
    Narrowphase.prototype.createFrictionFromAverage = function(numContacts) {
      var c = this.contactEquations[this.contactEquations.length - 1];
      var eq = this.createFrictionEquation(c.bodyA, c.bodyB, c.shapeA, c.shapeB);
      var bodyA = c.bodyA;
      var bodyB = c.bodyB;
      vec2.set(eq.contactPointA, 0, 0);
      vec2.set(eq.contactPointB, 0, 0);
      vec2.set(eq.t, 0, 0);
      for (var i = 0; i !== numContacts; i++) {
        c = this.contactEquations[this.contactEquations.length - 1 - i];
        if (c.bodyA === bodyA) {
          vec2.add(eq.t, eq.t, c.normalA);
          vec2.add(eq.contactPointA, eq.contactPointA, c.contactPointA);
          vec2.add(eq.contactPointB, eq.contactPointB, c.contactPointB);
        } else {
          vec2.sub(eq.t, eq.t, c.normalA);
          vec2.add(eq.contactPointA, eq.contactPointA, c.contactPointB);
          vec2.add(eq.contactPointB, eq.contactPointB, c.contactPointA);
        }
        eq.contactEquations.push(c);
      }
      var invNumContacts = 1 / numContacts;
      vec2.scale(eq.contactPointA, eq.contactPointA, invNumContacts);
      vec2.scale(eq.contactPointB, eq.contactPointB, invNumContacts);
      vec2.normalize(eq.t, eq.t);
      vec2.rotate90cw(eq.t, eq.t);
      return eq;
    };
    Narrowphase.prototype[Shape.LINE | Shape.CONVEX] = Narrowphase.prototype.convexLine = function(convexBody, convexShape, convexOffset, convexAngle, lineBody, lineShape, lineOffset, lineAngle, justTest) {
      if (justTest) {
        return false;
      } else {
        return 0;
      }
    };
    Narrowphase.prototype[Shape.LINE | Shape.BOX] = Narrowphase.prototype.lineBox = function(lineBody, lineShape, lineOffset, lineAngle, boxBody, boxShape, boxOffset, boxAngle, justTest) {
      if (justTest) {
        return false;
      } else {
        return 0;
      }
    };
    function setConvexToCapsuleShapeMiddle(convexShape, capsuleShape) {
      vec2.set(convexShape.vertices[0], -capsuleShape.length * 0.5, -capsuleShape.radius);
      vec2.set(convexShape.vertices[1], capsuleShape.length * 0.5, -capsuleShape.radius);
      vec2.set(convexShape.vertices[2], capsuleShape.length * 0.5, capsuleShape.radius);
      vec2.set(convexShape.vertices[3], -capsuleShape.length * 0.5, capsuleShape.radius);
    }
    var convexCapsule_tempRect = new Box({ width: 1, height: 1 });
    var convexCapsule_tempVec = vec2.create();
    Narrowphase.prototype[Shape.CAPSULE | Shape.CONVEX] = Narrowphase.prototype[Shape.CAPSULE | Shape.BOX] = Narrowphase.prototype.convexCapsule = function(convexBody, convexShape, convexPosition, convexAngle, capsuleBody, capsuleShape, capsulePosition, capsuleAngle, justTest) {
      var circlePos = convexCapsule_tempVec;
      vec2.set(circlePos, capsuleShape.length / 2, 0);
      vec2.rotate(circlePos, circlePos, capsuleAngle);
      vec2.add(circlePos, circlePos, capsulePosition);
      var result1 = this.circleConvex(capsuleBody, capsuleShape, circlePos, capsuleAngle, convexBody, convexShape, convexPosition, convexAngle, justTest, capsuleShape.radius);
      vec2.set(circlePos, -capsuleShape.length / 2, 0);
      vec2.rotate(circlePos, circlePos, capsuleAngle);
      vec2.add(circlePos, circlePos, capsulePosition);
      var result2 = this.circleConvex(capsuleBody, capsuleShape, circlePos, capsuleAngle, convexBody, convexShape, convexPosition, convexAngle, justTest, capsuleShape.radius);
      if (justTest && (result1 || result2)) {
        return true;
      }
      var r = convexCapsule_tempRect;
      setConvexToCapsuleShapeMiddle(r, capsuleShape);
      var result = this.convexConvex(convexBody, convexShape, convexPosition, convexAngle, capsuleBody, r, capsulePosition, capsuleAngle, justTest);
      return result + result1 + result2;
    };
    Narrowphase.prototype[Shape.CAPSULE | Shape.LINE] = Narrowphase.prototype.lineCapsule = function(lineBody, lineShape, linePosition, lineAngle, capsuleBody, capsuleShape, capsulePosition, capsuleAngle, justTest) {
      if (justTest) {
        return false;
      } else {
        return 0;
      }
    };
    var capsuleCapsule_tempVec1 = vec2.create();
    var capsuleCapsule_tempVec2 = vec2.create();
    var capsuleCapsule_tempRect1 = new Box({ width: 1, height: 1 });
    Narrowphase.prototype[Shape.CAPSULE | Shape.CAPSULE] = Narrowphase.prototype.capsuleCapsule = function(bi, si, xi, ai, bj, sj, xj, aj, justTest) {
      var enableFrictionBefore;
      var circlePosi = capsuleCapsule_tempVec1, circlePosj = capsuleCapsule_tempVec2;
      var numContacts = 0;
      for (var i = 0; i < 2; i++) {
        vec2.set(circlePosi, (i === 0 ? -1 : 1) * si.length / 2, 0);
        vec2.rotate(circlePosi, circlePosi, ai);
        vec2.add(circlePosi, circlePosi, xi);
        for (var j = 0; j < 2; j++) {
          vec2.set(circlePosj, (j === 0 ? -1 : 1) * sj.length / 2, 0);
          vec2.rotate(circlePosj, circlePosj, aj);
          vec2.add(circlePosj, circlePosj, xj);
          if (this.enableFrictionReduction) {
            enableFrictionBefore = this.enableFriction;
            this.enableFriction = false;
          }
          var result = this.circleCircle(bi, si, circlePosi, ai, bj, sj, circlePosj, aj, justTest, si.radius, sj.radius);
          if (this.enableFrictionReduction) {
            this.enableFriction = enableFrictionBefore;
          }
          if (justTest && result) {
            return true;
          }
          numContacts += result;
        }
      }
      if (this.enableFrictionReduction) {
        enableFrictionBefore = this.enableFriction;
        this.enableFriction = false;
      }
      var rect = capsuleCapsule_tempRect1;
      setConvexToCapsuleShapeMiddle(rect, si);
      var result1 = this.convexCapsule(bi, rect, xi, ai, bj, sj, xj, aj, justTest);
      if (this.enableFrictionReduction) {
        this.enableFriction = enableFrictionBefore;
      }
      if (justTest && result1) {
        return true;
      }
      numContacts += result1;
      if (this.enableFrictionReduction) {
        var enableFrictionBefore = this.enableFriction;
        this.enableFriction = false;
      }
      setConvexToCapsuleShapeMiddle(rect, sj);
      var result2 = this.convexCapsule(bj, rect, xj, aj, bi, si, xi, ai, justTest);
      if (this.enableFrictionReduction) {
        this.enableFriction = enableFrictionBefore;
      }
      if (justTest && result2) {
        return true;
      }
      numContacts += result2;
      if (this.enableFrictionReduction) {
        if (numContacts && this.enableFriction) {
          this.frictionEquations.push(this.createFrictionFromAverage(numContacts));
        }
      }
      return numContacts;
    };
    Narrowphase.prototype[Shape.LINE | Shape.LINE] = Narrowphase.prototype.lineLine = function(bodyA, shapeA, positionA, angleA, bodyB, shapeB, positionB, angleB, justTest) {
      if (justTest) {
        return false;
      } else {
        return 0;
      }
    };
    Narrowphase.prototype[Shape.PLANE | Shape.LINE] = Narrowphase.prototype.planeLine = function(planeBody, planeShape, planeOffset, planeAngle, lineBody, lineShape, lineOffset, lineAngle, justTest) {
      var worldVertex0 = tmp1, worldVertex1 = tmp2, worldVertex01 = tmp3, worldVertex11 = tmp4, worldEdge = tmp5, worldEdgeUnit = tmp6, dist = tmp7, worldNormal = tmp8, worldTangent = tmp9, verts = tmpArray, numContacts = 0;
      vec2.set(worldVertex0, -lineShape.length / 2, 0);
      vec2.set(worldVertex1, lineShape.length / 2, 0);
      vec2.rotate(worldVertex01, worldVertex0, lineAngle);
      vec2.rotate(worldVertex11, worldVertex1, lineAngle);
      add(worldVertex01, worldVertex01, lineOffset);
      add(worldVertex11, worldVertex11, lineOffset);
      vec2.copy(worldVertex0, worldVertex01);
      vec2.copy(worldVertex1, worldVertex11);
      sub(worldEdge, worldVertex1, worldVertex0);
      vec2.normalize(worldEdgeUnit, worldEdge);
      vec2.rotate90cw(worldTangent, worldEdgeUnit);
      vec2.rotate(worldNormal, yAxis, planeAngle);
      verts[0] = worldVertex0;
      verts[1] = worldVertex1;
      for (var i = 0; i < verts.length; i++) {
        var v = verts[i];
        sub(dist, v, planeOffset);
        var d = dot(dist, worldNormal);
        if (d < 0) {
          if (justTest) {
            return true;
          }
          var c = this.createContactEquation(planeBody, lineBody, planeShape, lineShape);
          numContacts++;
          vec2.copy(c.normalA, worldNormal);
          vec2.normalize(c.normalA, c.normalA);
          vec2.scale(dist, worldNormal, d);
          sub(c.contactPointA, v, dist);
          sub(c.contactPointA, c.contactPointA, planeBody.position);
          sub(c.contactPointB, v, lineOffset);
          add(c.contactPointB, c.contactPointB, lineOffset);
          sub(c.contactPointB, c.contactPointB, lineBody.position);
          this.contactEquations.push(c);
          if (!this.enableFrictionReduction) {
            if (this.enableFriction) {
              this.frictionEquations.push(this.createFrictionFromContact(c));
            }
          }
        }
      }
      if (justTest) {
        return false;
      }
      if (!this.enableFrictionReduction) {
        if (numContacts && this.enableFriction) {
          this.frictionEquations.push(this.createFrictionFromAverage(numContacts));
        }
      }
      return numContacts;
    };
    Narrowphase.prototype[Shape.PARTICLE | Shape.CAPSULE] = Narrowphase.prototype.particleCapsule = function(particleBody, particleShape, particlePosition, particleAngle, capsuleBody, capsuleShape, capsulePosition, capsuleAngle, justTest) {
      return this.circleLine(particleBody, particleShape, particlePosition, particleAngle, capsuleBody, capsuleShape, capsulePosition, capsuleAngle, justTest, capsuleShape.radius, 0);
    };
    Narrowphase.prototype[Shape.CIRCLE | Shape.LINE] = Narrowphase.prototype.circleLine = function(circleBody, circleShape, circleOffset, circleAngle, lineBody, lineShape, lineOffset, lineAngle, justTest, lineRadius, circleRadius) {
      var lineRadius = lineRadius || 0, circleRadius = typeof circleRadius !== "undefined" ? circleRadius : circleShape.radius, orthoDist = tmp1, lineToCircleOrthoUnit = tmp2, projectedPoint = tmp3, centerDist = tmp4, worldTangent = tmp5, worldEdge = tmp6, worldEdgeUnit = tmp7, worldVertex0 = tmp8, worldVertex1 = tmp9, worldVertex01 = tmp10, worldVertex11 = tmp11, dist = tmp12, lineToCircle = tmp13, lineEndToLineRadius = tmp14, verts = tmpArray;
      vec2.set(worldVertex0, -lineShape.length / 2, 0);
      vec2.set(worldVertex1, lineShape.length / 2, 0);
      vec2.rotate(worldVertex01, worldVertex0, lineAngle);
      vec2.rotate(worldVertex11, worldVertex1, lineAngle);
      add(worldVertex01, worldVertex01, lineOffset);
      add(worldVertex11, worldVertex11, lineOffset);
      vec2.copy(worldVertex0, worldVertex01);
      vec2.copy(worldVertex1, worldVertex11);
      sub(worldEdge, worldVertex1, worldVertex0);
      vec2.normalize(worldEdgeUnit, worldEdge);
      vec2.rotate90cw(worldTangent, worldEdgeUnit);
      sub(dist, circleOffset, worldVertex0);
      var d = dot(dist, worldTangent);
      sub(centerDist, worldVertex0, lineOffset);
      sub(lineToCircle, circleOffset, lineOffset);
      var radiusSum = circleRadius + lineRadius;
      if (Math.abs(d) < radiusSum) {
        vec2.scale(orthoDist, worldTangent, d);
        sub(projectedPoint, circleOffset, orthoDist);
        vec2.scale(lineToCircleOrthoUnit, worldTangent, dot(worldTangent, lineToCircle));
        vec2.normalize(lineToCircleOrthoUnit, lineToCircleOrthoUnit);
        vec2.scale(lineToCircleOrthoUnit, lineToCircleOrthoUnit, lineRadius);
        add(projectedPoint, projectedPoint, lineToCircleOrthoUnit);
        var pos = dot(worldEdgeUnit, projectedPoint);
        var pos0 = dot(worldEdgeUnit, worldVertex0);
        var pos1 = dot(worldEdgeUnit, worldVertex1);
        if (pos > pos0 && pos < pos1) {
          if (justTest) {
            return true;
          }
          var c = this.createContactEquation(circleBody, lineBody, circleShape, lineShape);
          vec2.scale(c.normalA, orthoDist, -1);
          vec2.normalize(c.normalA, c.normalA);
          vec2.scale(c.contactPointA, c.normalA, circleRadius);
          add(c.contactPointA, c.contactPointA, circleOffset);
          sub(c.contactPointA, c.contactPointA, circleBody.position);
          sub(c.contactPointB, projectedPoint, lineOffset);
          add(c.contactPointB, c.contactPointB, lineOffset);
          sub(c.contactPointB, c.contactPointB, lineBody.position);
          this.contactEquations.push(c);
          if (this.enableFriction) {
            this.frictionEquations.push(this.createFrictionFromContact(c));
          }
          return 1;
        }
      }
      verts[0] = worldVertex0;
      verts[1] = worldVertex1;
      for (var i = 0; i < verts.length; i++) {
        var v = verts[i];
        sub(dist, v, circleOffset);
        if (vec2.squaredLength(dist) < Math.pow(radiusSum, 2)) {
          if (justTest) {
            return true;
          }
          var c = this.createContactEquation(circleBody, lineBody, circleShape, lineShape);
          vec2.copy(c.normalA, dist);
          vec2.normalize(c.normalA, c.normalA);
          vec2.scale(c.contactPointA, c.normalA, circleRadius);
          add(c.contactPointA, c.contactPointA, circleOffset);
          sub(c.contactPointA, c.contactPointA, circleBody.position);
          sub(c.contactPointB, v, lineOffset);
          vec2.scale(lineEndToLineRadius, c.normalA, -lineRadius);
          add(c.contactPointB, c.contactPointB, lineEndToLineRadius);
          add(c.contactPointB, c.contactPointB, lineOffset);
          sub(c.contactPointB, c.contactPointB, lineBody.position);
          this.contactEquations.push(c);
          if (this.enableFriction) {
            this.frictionEquations.push(this.createFrictionFromContact(c));
          }
          return 1;
        }
      }
      return 0;
    };
    Narrowphase.prototype[Shape.CIRCLE | Shape.CAPSULE] = Narrowphase.prototype.circleCapsule = function(bi, si, xi, ai, bj, sj, xj, aj, justTest) {
      return this.circleLine(bi, si, xi, ai, bj, sj, xj, aj, justTest, sj.radius);
    };
    Narrowphase.prototype[Shape.CIRCLE | Shape.CONVEX] = Narrowphase.prototype[Shape.CIRCLE | Shape.BOX] = Narrowphase.prototype.circleConvex = function(circleBody, circleShape, circleOffset, circleAngle, convexBody, convexShape, convexOffset, convexAngle, justTest, circleRadius) {
      var circleRadius = typeof circleRadius === "number" ? circleRadius : circleShape.radius;
      var worldVertex0 = tmp1, worldVertex1 = tmp2, worldEdge = tmp3, worldEdgeUnit = tmp4, worldNormal = tmp5, centerDist = tmp6, convexToCircle = tmp7, orthoDist = tmp8, projectedPoint = tmp9, dist = tmp10, worldVertex = tmp11, closestEdge = -1, closestEdgeDistance = null, closestEdgeOrthoDist = tmp12, closestEdgeProjectedPoint = tmp13, candidate = tmp14, candidateDist = tmp15, minCandidate = tmp16, found = false, minCandidateDistance = Number.MAX_VALUE;
      var numReported = 0;
      var verts = convexShape.vertices;
      for (var i = 0; i !== verts.length + 1; i++) {
        var v0 = verts[i % verts.length], v1 = verts[(i + 1) % verts.length];
        vec2.rotate(worldVertex0, v0, convexAngle);
        vec2.rotate(worldVertex1, v1, convexAngle);
        add(worldVertex0, worldVertex0, convexOffset);
        add(worldVertex1, worldVertex1, convexOffset);
        sub(worldEdge, worldVertex1, worldVertex0);
        vec2.normalize(worldEdgeUnit, worldEdge);
        vec2.rotate90cw(worldNormal, worldEdgeUnit);
        vec2.scale(candidate, worldNormal, -circleShape.radius);
        add(candidate, candidate, circleOffset);
        if (pointInConvex(candidate, convexShape, convexOffset, convexAngle)) {
          vec2.sub(candidateDist, worldVertex0, candidate);
          var candidateDistance = Math.abs(vec2.dot(candidateDist, worldNormal));
          if (candidateDistance < minCandidateDistance) {
            vec2.copy(minCandidate, candidate);
            minCandidateDistance = candidateDistance;
            vec2.scale(closestEdgeProjectedPoint, worldNormal, candidateDistance);
            vec2.add(closestEdgeProjectedPoint, closestEdgeProjectedPoint, candidate);
            found = true;
          }
        }
      }
      if (found) {
        if (justTest) {
          return true;
        }
        var c = this.createContactEquation(circleBody, convexBody, circleShape, convexShape);
        vec2.sub(c.normalA, minCandidate, circleOffset);
        vec2.normalize(c.normalA, c.normalA);
        vec2.scale(c.contactPointA, c.normalA, circleRadius);
        add(c.contactPointA, c.contactPointA, circleOffset);
        sub(c.contactPointA, c.contactPointA, circleBody.position);
        sub(c.contactPointB, closestEdgeProjectedPoint, convexOffset);
        add(c.contactPointB, c.contactPointB, convexOffset);
        sub(c.contactPointB, c.contactPointB, convexBody.position);
        this.contactEquations.push(c);
        if (this.enableFriction) {
          this.frictionEquations.push(this.createFrictionFromContact(c));
        }
        return 1;
      }
      if (circleRadius > 0) {
        for (var i = 0; i < verts.length; i++) {
          var localVertex = verts[i];
          vec2.rotate(worldVertex, localVertex, convexAngle);
          add(worldVertex, worldVertex, convexOffset);
          sub(dist, worldVertex, circleOffset);
          if (vec2.squaredLength(dist) < Math.pow(circleRadius, 2)) {
            if (justTest) {
              return true;
            }
            var c = this.createContactEquation(circleBody, convexBody, circleShape, convexShape);
            vec2.copy(c.normalA, dist);
            vec2.normalize(c.normalA, c.normalA);
            vec2.scale(c.contactPointA, c.normalA, circleRadius);
            add(c.contactPointA, c.contactPointA, circleOffset);
            sub(c.contactPointA, c.contactPointA, circleBody.position);
            sub(c.contactPointB, worldVertex, convexOffset);
            add(c.contactPointB, c.contactPointB, convexOffset);
            sub(c.contactPointB, c.contactPointB, convexBody.position);
            this.contactEquations.push(c);
            if (this.enableFriction) {
              this.frictionEquations.push(this.createFrictionFromContact(c));
            }
            return 1;
          }
        }
      }
      return 0;
    };
    var pic_worldVertex0 = vec2.create();
    var pic_worldVertex1 = vec2.create();
    var pic_r0 = vec2.create();
    var pic_r1 = vec2.create();
    function pointInConvex(worldPoint, convexShape, convexOffset, convexAngle) {
      var worldVertex0 = pic_worldVertex0, worldVertex1 = pic_worldVertex1, r0 = pic_r0, r1 = pic_r1, point = worldPoint, verts = convexShape.vertices, lastCross = null;
      for (var i = 0; i !== verts.length + 1; i++) {
        var v0 = verts[i % verts.length], v1 = verts[(i + 1) % verts.length];
        vec2.rotate(worldVertex0, v0, convexAngle);
        vec2.rotate(worldVertex1, v1, convexAngle);
        add(worldVertex0, worldVertex0, convexOffset);
        add(worldVertex1, worldVertex1, convexOffset);
        sub(r0, worldVertex0, point);
        sub(r1, worldVertex1, point);
        var cross = vec2.crossLength(r0, r1);
        if (lastCross === null) {
          lastCross = cross;
        }
        if (cross * lastCross <= 0) {
          return false;
        }
        lastCross = cross;
      }
      return true;
    }
    Narrowphase.prototype[Shape.PARTICLE | Shape.CONVEX] = Narrowphase.prototype[Shape.PARTICLE | Shape.BOX] = Narrowphase.prototype.particleConvex = function(particleBody, particleShape, particleOffset, particleAngle, convexBody, convexShape, convexOffset, convexAngle, justTest) {
      var worldVertex0 = tmp1, worldVertex1 = tmp2, worldEdge = tmp3, worldEdgeUnit = tmp4, worldTangent = tmp5, centerDist = tmp6, convexToparticle = tmp7, orthoDist = tmp8, projectedPoint = tmp9, dist = tmp10, worldVertex = tmp11, closestEdge = -1, closestEdgeDistance = null, closestEdgeOrthoDist = tmp12, closestEdgeProjectedPoint = tmp13, r0 = tmp14, r1 = tmp15, localPoint = tmp16, candidateDist = tmp17, minEdgeNormal = tmp18, minCandidateDistance = Number.MAX_VALUE;
      var numReported = 0, found = false, verts = convexShape.vertices;
      if (!pointInConvex(particleOffset, convexShape, convexOffset, convexAngle)) {
        return 0;
      }
      if (justTest) {
        return true;
      }
      var lastCross = null;
      for (var i = 0; i !== verts.length + 1; i++) {
        var v0 = verts[i % verts.length], v1 = verts[(i + 1) % verts.length];
        vec2.rotate(worldVertex0, v0, convexAngle);
        vec2.rotate(worldVertex1, v1, convexAngle);
        add(worldVertex0, worldVertex0, convexOffset);
        add(worldVertex1, worldVertex1, convexOffset);
        sub(worldEdge, worldVertex1, worldVertex0);
        vec2.normalize(worldEdgeUnit, worldEdge);
        vec2.rotate90cw(worldTangent, worldEdgeUnit);
        sub(dist, particleOffset, worldVertex0);
        var d = dot(dist, worldTangent);
        sub(centerDist, worldVertex0, convexOffset);
        sub(convexToparticle, particleOffset, convexOffset);
        vec2.sub(candidateDist, worldVertex0, particleOffset);
        var candidateDistance = Math.abs(vec2.dot(candidateDist, worldTangent));
        if (candidateDistance < minCandidateDistance) {
          minCandidateDistance = candidateDistance;
          vec2.scale(closestEdgeProjectedPoint, worldTangent, candidateDistance);
          vec2.add(closestEdgeProjectedPoint, closestEdgeProjectedPoint, particleOffset);
          vec2.copy(minEdgeNormal, worldTangent);
          found = true;
        }
      }
      if (found) {
        var c = this.createContactEquation(particleBody, convexBody, particleShape, convexShape);
        vec2.scale(c.normalA, minEdgeNormal, -1);
        vec2.normalize(c.normalA, c.normalA);
        vec2.set(c.contactPointA, 0, 0);
        add(c.contactPointA, c.contactPointA, particleOffset);
        sub(c.contactPointA, c.contactPointA, particleBody.position);
        sub(c.contactPointB, closestEdgeProjectedPoint, convexOffset);
        add(c.contactPointB, c.contactPointB, convexOffset);
        sub(c.contactPointB, c.contactPointB, convexBody.position);
        this.contactEquations.push(c);
        if (this.enableFriction) {
          this.frictionEquations.push(this.createFrictionFromContact(c));
        }
        return 1;
      }
      return 0;
    };
    Narrowphase.prototype[Shape.CIRCLE] = Narrowphase.prototype.circleCircle = function(bodyA, shapeA, offsetA, angleA, bodyB, shapeB, offsetB, angleB, justTest, radiusA, radiusB) {
      var dist = tmp1, radiusA = radiusA || shapeA.radius, radiusB = radiusB || shapeB.radius;
      sub(dist, offsetA, offsetB);
      var r = radiusA + radiusB;
      if (vec2.squaredLength(dist) > Math.pow(r, 2)) {
        return 0;
      }
      if (justTest) {
        return true;
      }
      var c = this.createContactEquation(bodyA, bodyB, shapeA, shapeB);
      sub(c.normalA, offsetB, offsetA);
      vec2.normalize(c.normalA, c.normalA);
      vec2.scale(c.contactPointA, c.normalA, radiusA);
      vec2.scale(c.contactPointB, c.normalA, -radiusB);
      add(c.contactPointA, c.contactPointA, offsetA);
      sub(c.contactPointA, c.contactPointA, bodyA.position);
      add(c.contactPointB, c.contactPointB, offsetB);
      sub(c.contactPointB, c.contactPointB, bodyB.position);
      this.contactEquations.push(c);
      if (this.enableFriction) {
        this.frictionEquations.push(this.createFrictionFromContact(c));
      }
      return 1;
    };
    Narrowphase.prototype[Shape.PLANE | Shape.CONVEX] = Narrowphase.prototype[Shape.PLANE | Shape.BOX] = Narrowphase.prototype.planeConvex = function(planeBody, planeShape, planeOffset, planeAngle, convexBody, convexShape, convexOffset, convexAngle, justTest) {
      var worldVertex = tmp1, worldNormal = tmp2, dist = tmp3;
      var numReported = 0;
      vec2.rotate(worldNormal, yAxis, planeAngle);
      for (var i = 0; i !== convexShape.vertices.length; i++) {
        var v = convexShape.vertices[i];
        vec2.rotate(worldVertex, v, convexAngle);
        add(worldVertex, worldVertex, convexOffset);
        sub(dist, worldVertex, planeOffset);
        if (dot(dist, worldNormal) <= 0) {
          if (justTest) {
            return true;
          }
          numReported++;
          var c = this.createContactEquation(planeBody, convexBody, planeShape, convexShape);
          sub(dist, worldVertex, planeOffset);
          vec2.copy(c.normalA, worldNormal);
          var d = dot(dist, c.normalA);
          vec2.scale(dist, c.normalA, d);
          sub(c.contactPointB, worldVertex, convexBody.position);
          sub(c.contactPointA, worldVertex, dist);
          sub(c.contactPointA, c.contactPointA, planeBody.position);
          this.contactEquations.push(c);
          if (!this.enableFrictionReduction) {
            if (this.enableFriction) {
              this.frictionEquations.push(this.createFrictionFromContact(c));
            }
          }
        }
      }
      if (this.enableFrictionReduction) {
        if (this.enableFriction && numReported) {
          this.frictionEquations.push(this.createFrictionFromAverage(numReported));
        }
      }
      return numReported;
    };
    Narrowphase.prototype[Shape.PARTICLE | Shape.PLANE] = Narrowphase.prototype.particlePlane = function(particleBody, particleShape, particleOffset, particleAngle, planeBody, planeShape, planeOffset, planeAngle, justTest) {
      var dist = tmp1, worldNormal = tmp2;
      planeAngle = planeAngle || 0;
      sub(dist, particleOffset, planeOffset);
      vec2.rotate(worldNormal, yAxis, planeAngle);
      var d = dot(dist, worldNormal);
      if (d > 0) {
        return 0;
      }
      if (justTest) {
        return true;
      }
      var c = this.createContactEquation(planeBody, particleBody, planeShape, particleShape);
      vec2.copy(c.normalA, worldNormal);
      vec2.scale(dist, c.normalA, d);
      sub(c.contactPointA, particleOffset, dist);
      sub(c.contactPointA, c.contactPointA, planeBody.position);
      sub(c.contactPointB, particleOffset, particleBody.position);
      this.contactEquations.push(c);
      if (this.enableFriction) {
        this.frictionEquations.push(this.createFrictionFromContact(c));
      }
      return 1;
    };
    Narrowphase.prototype[Shape.CIRCLE | Shape.PARTICLE] = Narrowphase.prototype.circleParticle = function(circleBody, circleShape, circleOffset, circleAngle, particleBody, particleShape, particleOffset, particleAngle, justTest) {
      var dist = tmp1;
      sub(dist, particleOffset, circleOffset);
      if (vec2.squaredLength(dist) > Math.pow(circleShape.radius, 2)) {
        return 0;
      }
      if (justTest) {
        return true;
      }
      var c = this.createContactEquation(circleBody, particleBody, circleShape, particleShape);
      vec2.copy(c.normalA, dist);
      vec2.normalize(c.normalA, c.normalA);
      vec2.scale(c.contactPointA, c.normalA, circleShape.radius);
      add(c.contactPointA, c.contactPointA, circleOffset);
      sub(c.contactPointA, c.contactPointA, circleBody.position);
      sub(c.contactPointB, particleOffset, particleBody.position);
      this.contactEquations.push(c);
      if (this.enableFriction) {
        this.frictionEquations.push(this.createFrictionFromContact(c));
      }
      return 1;
    };
    var planeCapsule_tmpCircle = new Circle({ radius: 1 });
    var planeCapsule_tmp1 = vec2.create();
    var planeCapsule_tmp2 = vec2.create();
    var planeCapsule_tmp3 = vec2.create();
    Narrowphase.prototype[Shape.PLANE | Shape.CAPSULE] = Narrowphase.prototype.planeCapsule = function(planeBody, planeShape, planeOffset, planeAngle, capsuleBody, capsuleShape, capsuleOffset, capsuleAngle, justTest) {
      var end1 = planeCapsule_tmp1, end2 = planeCapsule_tmp2, circle = planeCapsule_tmpCircle, dst = planeCapsule_tmp3;
      vec2.set(end1, -capsuleShape.length / 2, 0);
      vec2.rotate(end1, end1, capsuleAngle);
      add(end1, end1, capsuleOffset);
      vec2.set(end2, capsuleShape.length / 2, 0);
      vec2.rotate(end2, end2, capsuleAngle);
      add(end2, end2, capsuleOffset);
      circle.radius = capsuleShape.radius;
      var enableFrictionBefore;
      if (this.enableFrictionReduction) {
        enableFrictionBefore = this.enableFriction;
        this.enableFriction = false;
      }
      var numContacts1 = this.circlePlane(capsuleBody, circle, end1, 0, planeBody, planeShape, planeOffset, planeAngle, justTest), numContacts2 = this.circlePlane(capsuleBody, circle, end2, 0, planeBody, planeShape, planeOffset, planeAngle, justTest);
      if (this.enableFrictionReduction) {
        this.enableFriction = enableFrictionBefore;
      }
      if (justTest) {
        return numContacts1 || numContacts2;
      } else {
        var numTotal = numContacts1 + numContacts2;
        if (this.enableFrictionReduction) {
          if (numTotal) {
            this.frictionEquations.push(this.createFrictionFromAverage(numTotal));
          }
        }
        return numTotal;
      }
    };
    Narrowphase.prototype[Shape.CIRCLE | Shape.PLANE] = Narrowphase.prototype.circlePlane = function(bi, si, xi, ai, bj, sj, xj, aj, justTest) {
      var circleBody = bi, circleShape = si, circleOffset = xi, planeBody = bj, shapeB = sj, planeOffset = xj, planeAngle = aj;
      planeAngle = planeAngle || 0;
      var planeToCircle = tmp1, worldNormal = tmp2, temp = tmp3;
      sub(planeToCircle, circleOffset, planeOffset);
      vec2.rotate(worldNormal, yAxis, planeAngle);
      var d = dot(worldNormal, planeToCircle);
      if (d > circleShape.radius) {
        return 0;
      }
      if (justTest) {
        return true;
      }
      var contact = this.createContactEquation(planeBody, circleBody, sj, si);
      vec2.copy(contact.normalA, worldNormal);
      vec2.scale(contact.contactPointB, contact.normalA, -circleShape.radius);
      add(contact.contactPointB, contact.contactPointB, circleOffset);
      sub(contact.contactPointB, contact.contactPointB, circleBody.position);
      vec2.scale(temp, contact.normalA, d);
      sub(contact.contactPointA, planeToCircle, temp);
      add(contact.contactPointA, contact.contactPointA, planeOffset);
      sub(contact.contactPointA, contact.contactPointA, planeBody.position);
      this.contactEquations.push(contact);
      if (this.enableFriction) {
        this.frictionEquations.push(this.createFrictionFromContact(contact));
      }
      return 1;
    };
    Narrowphase.prototype[Shape.CONVEX] = Narrowphase.prototype[Shape.CONVEX | Shape.BOX] = Narrowphase.prototype[Shape.BOX] = Narrowphase.prototype.convexConvex = function(bi, si, xi, ai, bj, sj, xj, aj, justTest, precision) {
      var sepAxis = tmp1, worldPoint = tmp2, worldPoint0 = tmp3, worldPoint1 = tmp4, worldEdge = tmp5, projected = tmp6, penetrationVec = tmp7, dist = tmp8, worldNormal = tmp9, numContacts = 0, precision = typeof precision === "number" ? precision : 0;
      var found = Narrowphase.findSeparatingAxis(si, xi, ai, sj, xj, aj, sepAxis);
      if (!found) {
        return 0;
      }
      sub(dist, xj, xi);
      if (dot(sepAxis, dist) > 0) {
        vec2.scale(sepAxis, sepAxis, -1);
      }
      var closestEdge1 = Narrowphase.getClosestEdge(si, ai, sepAxis, true), closestEdge2 = Narrowphase.getClosestEdge(sj, aj, sepAxis);
      if (closestEdge1 === -1 || closestEdge2 === -1) {
        return 0;
      }
      for (var k = 0; k < 2; k++) {
        var closestEdgeA = closestEdge1, closestEdgeB = closestEdge2, shapeA = si, shapeB = sj, offsetA = xi, offsetB = xj, angleA = ai, angleB = aj, bodyA = bi, bodyB = bj;
        if (k === 0) {
          var tmp;
          tmp = closestEdgeA;
          closestEdgeA = closestEdgeB;
          closestEdgeB = tmp;
          tmp = shapeA;
          shapeA = shapeB;
          shapeB = tmp;
          tmp = offsetA;
          offsetA = offsetB;
          offsetB = tmp;
          tmp = angleA;
          angleA = angleB;
          angleB = tmp;
          tmp = bodyA;
          bodyA = bodyB;
          bodyB = tmp;
        }
        for (var j = closestEdgeB; j < closestEdgeB + 2; j++) {
          var v = shapeB.vertices[(j + shapeB.vertices.length) % shapeB.vertices.length];
          vec2.rotate(worldPoint, v, angleB);
          add(worldPoint, worldPoint, offsetB);
          var insideNumEdges = 0;
          for (var i = closestEdgeA - 1; i < closestEdgeA + 2; i++) {
            var v0 = shapeA.vertices[(i + shapeA.vertices.length) % shapeA.vertices.length], v1 = shapeA.vertices[(i + 1 + shapeA.vertices.length) % shapeA.vertices.length];
            vec2.rotate(worldPoint0, v0, angleA);
            vec2.rotate(worldPoint1, v1, angleA);
            add(worldPoint0, worldPoint0, offsetA);
            add(worldPoint1, worldPoint1, offsetA);
            sub(worldEdge, worldPoint1, worldPoint0);
            vec2.rotate90cw(worldNormal, worldEdge);
            vec2.normalize(worldNormal, worldNormal);
            sub(dist, worldPoint, worldPoint0);
            var d = dot(worldNormal, dist);
            if (i === closestEdgeA && d <= precision || i !== closestEdgeA && d <= 0) {
              insideNumEdges++;
            }
          }
          if (insideNumEdges >= 3) {
            if (justTest) {
              return true;
            }
            var c = this.createContactEquation(bodyA, bodyB, shapeA, shapeB);
            numContacts++;
            var v0 = shapeA.vertices[closestEdgeA % shapeA.vertices.length], v1 = shapeA.vertices[(closestEdgeA + 1) % shapeA.vertices.length];
            vec2.rotate(worldPoint0, v0, angleA);
            vec2.rotate(worldPoint1, v1, angleA);
            add(worldPoint0, worldPoint0, offsetA);
            add(worldPoint1, worldPoint1, offsetA);
            sub(worldEdge, worldPoint1, worldPoint0);
            vec2.rotate90cw(c.normalA, worldEdge);
            vec2.normalize(c.normalA, c.normalA);
            sub(dist, worldPoint, worldPoint0);
            var d = dot(c.normalA, dist);
            vec2.scale(penetrationVec, c.normalA, d);
            sub(c.contactPointA, worldPoint, offsetA);
            sub(c.contactPointA, c.contactPointA, penetrationVec);
            add(c.contactPointA, c.contactPointA, offsetA);
            sub(c.contactPointA, c.contactPointA, bodyA.position);
            sub(c.contactPointB, worldPoint, offsetB);
            add(c.contactPointB, c.contactPointB, offsetB);
            sub(c.contactPointB, c.contactPointB, bodyB.position);
            this.contactEquations.push(c);
            if (!this.enableFrictionReduction) {
              if (this.enableFriction) {
                this.frictionEquations.push(this.createFrictionFromContact(c));
              }
            }
          }
        }
      }
      if (this.enableFrictionReduction) {
        if (this.enableFriction && numContacts) {
          this.frictionEquations.push(this.createFrictionFromAverage(numContacts));
        }
      }
      return numContacts;
    };
    var pcoa_tmp1 = vec2.fromValues(0, 0);
    Narrowphase.projectConvexOntoAxis = function(convexShape, convexOffset, convexAngle, worldAxis, result) {
      var max = null, min = null, v, value, localAxis = pcoa_tmp1;
      vec2.rotate(localAxis, worldAxis, -convexAngle);
      for (var i = 0; i < convexShape.vertices.length; i++) {
        v = convexShape.vertices[i];
        value = dot(v, localAxis);
        if (max === null || value > max) {
          max = value;
        }
        if (min === null || value < min) {
          min = value;
        }
      }
      if (min > max) {
        var t = min;
        min = max;
        max = t;
      }
      var offset = dot(convexOffset, worldAxis);
      vec2.set(result, min + offset, max + offset);
    };
    var fsa_tmp1 = vec2.fromValues(0, 0);
    var fsa_tmp2 = vec2.fromValues(0, 0);
    var fsa_tmp3 = vec2.fromValues(0, 0);
    var fsa_tmp4 = vec2.fromValues(0, 0);
    var fsa_tmp5 = vec2.fromValues(0, 0);
    var fsa_tmp6 = vec2.fromValues(0, 0);
    Narrowphase.findSeparatingAxis = function(c1, offset1, angle1, c2, offset2, angle2, sepAxis) {
      var maxDist = null, overlap = false, found = false, edge = fsa_tmp1, worldPoint0 = fsa_tmp2, worldPoint1 = fsa_tmp3, normal = fsa_tmp4, span1 = fsa_tmp5, span2 = fsa_tmp6;
      if (c1 instanceof Box && c2 instanceof Box) {
        for (var j = 0; j !== 2; j++) {
          var c = c1, angle = angle1;
          if (j === 1) {
            c = c2;
            angle = angle2;
          }
          for (var i = 0; i !== 2; i++) {
            if (i === 0) {
              vec2.set(normal, 0, 1);
            } else if (i === 1) {
              vec2.set(normal, 1, 0);
            }
            if (angle !== 0) {
              vec2.rotate(normal, normal, angle);
            }
            Narrowphase.projectConvexOntoAxis(c1, offset1, angle1, normal, span1);
            Narrowphase.projectConvexOntoAxis(c2, offset2, angle2, normal, span2);
            var a = span1, b = span2, swapped = false;
            if (span1[0] > span2[0]) {
              b = span1;
              a = span2;
              swapped = true;
            }
            var dist = b[0] - a[1];
            overlap = dist <= 0;
            if (maxDist === null || dist > maxDist) {
              vec2.copy(sepAxis, normal);
              maxDist = dist;
              found = overlap;
            }
          }
        }
      } else {
        for (var j = 0; j !== 2; j++) {
          var c = c1, angle = angle1;
          if (j === 1) {
            c = c2;
            angle = angle2;
          }
          for (var i = 0; i !== c.vertices.length; i++) {
            vec2.rotate(worldPoint0, c.vertices[i], angle);
            vec2.rotate(worldPoint1, c.vertices[(i + 1) % c.vertices.length], angle);
            sub(edge, worldPoint1, worldPoint0);
            vec2.rotate90cw(normal, edge);
            vec2.normalize(normal, normal);
            Narrowphase.projectConvexOntoAxis(c1, offset1, angle1, normal, span1);
            Narrowphase.projectConvexOntoAxis(c2, offset2, angle2, normal, span2);
            var a = span1, b = span2, swapped = false;
            if (span1[0] > span2[0]) {
              b = span1;
              a = span2;
              swapped = true;
            }
            var dist = b[0] - a[1];
            overlap = dist <= 0;
            if (maxDist === null || dist > maxDist) {
              vec2.copy(sepAxis, normal);
              maxDist = dist;
              found = overlap;
            }
          }
        }
      }
      return found;
    };
    var gce_tmp1 = vec2.fromValues(0, 0);
    var gce_tmp2 = vec2.fromValues(0, 0);
    var gce_tmp3 = vec2.fromValues(0, 0);
    Narrowphase.getClosestEdge = function(c, angle, axis, flip) {
      var localAxis = gce_tmp1, edge = gce_tmp2, normal = gce_tmp3;
      vec2.rotate(localAxis, axis, -angle);
      if (flip) {
        vec2.scale(localAxis, localAxis, -1);
      }
      var closestEdge = -1, N = c.vertices.length, maxDot = -1;
      for (var i = 0; i !== N; i++) {
        sub(edge, c.vertices[(i + 1) % N], c.vertices[i % N]);
        vec2.rotate90cw(normal, edge);
        vec2.normalize(normal, normal);
        var d = dot(normal, localAxis);
        if (closestEdge === -1 || d > maxDot) {
          closestEdge = i % N;
          maxDot = d;
        }
      }
      return closestEdge;
    };
    var circleHeightfield_candidate = vec2.create();
    var circleHeightfield_dist = vec2.create();
    var circleHeightfield_v0 = vec2.create();
    var circleHeightfield_v1 = vec2.create();
    var circleHeightfield_minCandidate = vec2.create();
    var circleHeightfield_worldNormal = vec2.create();
    var circleHeightfield_minCandidateNormal = vec2.create();
    Narrowphase.prototype[Shape.CIRCLE | Shape.HEIGHTFIELD] = Narrowphase.prototype.circleHeightfield = function(circleBody, circleShape, circlePos, circleAngle, hfBody, hfShape, hfPos, hfAngle, justTest, radius) {
      var data = hfShape.heights, radius = radius || circleShape.radius, w = hfShape.elementWidth, dist = circleHeightfield_dist, candidate = circleHeightfield_candidate, minCandidate = circleHeightfield_minCandidate, minCandidateNormal = circleHeightfield_minCandidateNormal, worldNormal = circleHeightfield_worldNormal, v0 = circleHeightfield_v0, v1 = circleHeightfield_v1;
      var idxA = Math.floor((circlePos[0] - radius - hfPos[0]) / w), idxB = Math.ceil((circlePos[0] + radius - hfPos[0]) / w);
      if (idxA < 0) {
        idxA = 0;
      }
      if (idxB >= data.length) {
        idxB = data.length - 1;
      }
      var max = data[idxA], min = data[idxB];
      for (var i = idxA; i < idxB; i++) {
        if (data[i] < min) {
          min = data[i];
        }
        if (data[i] > max) {
          max = data[i];
        }
      }
      if (circlePos[1] - radius > max) {
        return justTest ? false : 0;
      }
      var found = false;
      for (var i = idxA; i < idxB; i++) {
        vec2.set(v0, i * w, data[i]);
        vec2.set(v1, (i + 1) * w, data[i + 1]);
        vec2.add(v0, v0, hfPos);
        vec2.add(v1, v1, hfPos);
        vec2.sub(worldNormal, v1, v0);
        vec2.rotate(worldNormal, worldNormal, Math.PI / 2);
        vec2.normalize(worldNormal, worldNormal);
        vec2.scale(candidate, worldNormal, -radius);
        vec2.add(candidate, candidate, circlePos);
        vec2.sub(dist, candidate, v0);
        var d = vec2.dot(dist, worldNormal);
        if (candidate[0] >= v0[0] && candidate[0] < v1[0] && d <= 0) {
          if (justTest) {
            return true;
          }
          found = true;
          vec2.scale(dist, worldNormal, -d);
          vec2.add(minCandidate, candidate, dist);
          vec2.copy(minCandidateNormal, worldNormal);
          var c = this.createContactEquation(hfBody, circleBody, hfShape, circleShape);
          vec2.copy(c.normalA, minCandidateNormal);
          vec2.scale(c.contactPointB, c.normalA, -radius);
          add(c.contactPointB, c.contactPointB, circlePos);
          sub(c.contactPointB, c.contactPointB, circleBody.position);
          vec2.copy(c.contactPointA, minCandidate);
          vec2.sub(c.contactPointA, c.contactPointA, hfBody.position);
          this.contactEquations.push(c);
          if (this.enableFriction) {
            this.frictionEquations.push(this.createFrictionFromContact(c));
          }
        }
      }
      found = false;
      if (radius > 0) {
        for (var i = idxA; i <= idxB; i++) {
          vec2.set(v0, i * w, data[i]);
          vec2.add(v0, v0, hfPos);
          vec2.sub(dist, circlePos, v0);
          if (vec2.squaredLength(dist) < Math.pow(radius, 2)) {
            if (justTest) {
              return true;
            }
            found = true;
            var c = this.createContactEquation(hfBody, circleBody, hfShape, circleShape);
            vec2.copy(c.normalA, dist);
            vec2.normalize(c.normalA, c.normalA);
            vec2.scale(c.contactPointB, c.normalA, -radius);
            add(c.contactPointB, c.contactPointB, circlePos);
            sub(c.contactPointB, c.contactPointB, circleBody.position);
            sub(c.contactPointA, v0, hfPos);
            add(c.contactPointA, c.contactPointA, hfPos);
            sub(c.contactPointA, c.contactPointA, hfBody.position);
            this.contactEquations.push(c);
            if (this.enableFriction) {
              this.frictionEquations.push(this.createFrictionFromContact(c));
            }
          }
        }
      }
      if (found) {
        return 1;
      }
      return 0;
    };
    var convexHeightfield_v0 = vec2.create();
    var convexHeightfield_v1 = vec2.create();
    var convexHeightfield_tilePos = vec2.create();
    var convexHeightfield_tempConvexShape = new Convex({ vertices: [vec2.create(), vec2.create(), vec2.create(), vec2.create()] });
    Narrowphase.prototype[Shape.BOX | Shape.HEIGHTFIELD] = Narrowphase.prototype[Shape.CONVEX | Shape.HEIGHTFIELD] = Narrowphase.prototype.convexHeightfield = function(convexBody, convexShape, convexPos, convexAngle, hfBody, hfShape, hfPos, hfAngle, justTest) {
      var data = hfShape.heights, w = hfShape.elementWidth, v0 = convexHeightfield_v0, v1 = convexHeightfield_v1, tilePos = convexHeightfield_tilePos, tileConvex = convexHeightfield_tempConvexShape;
      var idxA = Math.floor((convexBody.aabb.lowerBound[0] - hfPos[0]) / w), idxB = Math.ceil((convexBody.aabb.upperBound[0] - hfPos[0]) / w);
      if (idxA < 0) {
        idxA = 0;
      }
      if (idxB >= data.length) {
        idxB = data.length - 1;
      }
      var max = data[idxA], min = data[idxB];
      for (var i = idxA; i < idxB; i++) {
        if (data[i] < min) {
          min = data[i];
        }
        if (data[i] > max) {
          max = data[i];
        }
      }
      if (convexBody.aabb.lowerBound[1] > max) {
        return justTest ? false : 0;
      }
      var found = false;
      var numContacts = 0;
      for (var i = idxA; i < idxB; i++) {
        vec2.set(v0, i * w, data[i]);
        vec2.set(v1, (i + 1) * w, data[i + 1]);
        vec2.add(v0, v0, hfPos);
        vec2.add(v1, v1, hfPos);
        var tileHeight = 100;
        vec2.set(tilePos, (v1[0] + v0[0]) * 0.5, (v1[1] + v0[1] - tileHeight) * 0.5);
        vec2.sub(tileConvex.vertices[0], v1, tilePos);
        vec2.sub(tileConvex.vertices[1], v0, tilePos);
        vec2.copy(tileConvex.vertices[2], tileConvex.vertices[1]);
        vec2.copy(tileConvex.vertices[3], tileConvex.vertices[0]);
        tileConvex.vertices[2][1] -= tileHeight;
        tileConvex.vertices[3][1] -= tileHeight;
        numContacts += this.convexConvex(convexBody, convexShape, convexPos, convexAngle, hfBody, tileConvex, tilePos, 0, justTest);
      }
      return numContacts;
    };
  }
});

// node_modules/p2/src/shapes/Plane.js
var require_Plane = __commonJS({
  "node_modules/p2/src/shapes/Plane.js"(exports, module2) {
    var Shape = require_Shape();
    var vec2 = require_vec2();
    var Utils2 = require_Utils();
    module2.exports = Plane;
    function Plane(options) {
      options = options || {};
      options.type = Shape.PLANE;
      Shape.call(this, options);
    }
    Plane.prototype = new Shape();
    Plane.prototype.constructor = Plane;
    Plane.prototype.computeMomentOfInertia = function(mass) {
      return 0;
    };
    Plane.prototype.updateBoundingRadius = function() {
      this.boundingRadius = Number.MAX_VALUE;
    };
    Plane.prototype.computeAABB = function(out, position, angle) {
      var a = angle % (2 * Math.PI);
      var set = vec2.set;
      var max = 1e7;
      var lowerBound = out.lowerBound;
      var upperBound = out.upperBound;
      set(lowerBound, -max, -max);
      set(upperBound, max, max);
      if (a === 0) {
        upperBound[1] = 0;
      } else if (a === Math.PI / 2) {
        lowerBound[0] = 0;
      } else if (a === Math.PI) {
        lowerBound[1] = 0;
      } else if (a === 3 * Math.PI / 2) {
        upperBound[0] = 0;
      }
    };
    Plane.prototype.updateArea = function() {
      this.area = Number.MAX_VALUE;
    };
    var intersectPlane_planePointToFrom = vec2.create();
    var intersectPlane_dir_scaled_with_t = vec2.create();
    var intersectPlane_hitPoint = vec2.create();
    var intersectPlane_normal = vec2.create();
    var intersectPlane_len = vec2.create();
    Plane.prototype.raycast = function(result, ray, position, angle) {
      var from = ray.from;
      var to = ray.to;
      var direction = ray.direction;
      var planePointToFrom = intersectPlane_planePointToFrom;
      var dir_scaled_with_t = intersectPlane_dir_scaled_with_t;
      var hitPoint = intersectPlane_hitPoint;
      var normal = intersectPlane_normal;
      var len = intersectPlane_len;
      vec2.set(normal, 0, 1);
      vec2.rotate(normal, normal, angle);
      vec2.sub(len, from, position);
      var planeToFrom = vec2.dot(len, normal);
      vec2.sub(len, to, position);
      var planeToTo = vec2.dot(len, normal);
      if (planeToFrom * planeToTo > 0) {
        return;
      }
      if (vec2.squaredDistance(from, to) < planeToFrom * planeToFrom) {
        return;
      }
      var n_dot_dir = vec2.dot(normal, direction);
      vec2.sub(planePointToFrom, from, position);
      var t = -vec2.dot(normal, planePointToFrom) / n_dot_dir / ray.length;
      ray.reportIntersection(result, t, normal, -1);
    };
  }
});

// node_modules/p2/src/shapes/Particle.js
var require_Particle = __commonJS({
  "node_modules/p2/src/shapes/Particle.js"(exports, module2) {
    var Shape = require_Shape();
    var vec2 = require_vec2();
    module2.exports = Particle;
    function Particle(options) {
      options = options || {};
      options.type = Shape.PARTICLE;
      Shape.call(this, options);
    }
    Particle.prototype = new Shape();
    Particle.prototype.constructor = Particle;
    Particle.prototype.computeMomentOfInertia = function(mass) {
      return 0;
    };
    Particle.prototype.updateBoundingRadius = function() {
      this.boundingRadius = 0;
    };
    Particle.prototype.computeAABB = function(out, position, angle) {
      vec2.copy(out.lowerBound, position);
      vec2.copy(out.upperBound, position);
    };
  }
});

// node_modules/p2/src/collision/NaiveBroadphase.js
var require_NaiveBroadphase = __commonJS({
  "node_modules/p2/src/collision/NaiveBroadphase.js"(exports, module2) {
    var Circle = require_Circle();
    var Plane = require_Plane();
    var Shape = require_Shape();
    var Particle = require_Particle();
    var Broadphase = require_Broadphase();
    var vec2 = require_vec2();
    module2.exports = NaiveBroadphase;
    function NaiveBroadphase() {
      Broadphase.call(this, Broadphase.NAIVE);
    }
    NaiveBroadphase.prototype = new Broadphase();
    NaiveBroadphase.prototype.constructor = NaiveBroadphase;
    NaiveBroadphase.prototype.getCollisionPairs = function(world) {
      var bodies = world.bodies, result = this.result;
      result.length = 0;
      for (var i = 0, Ncolliding = bodies.length; i !== Ncolliding; i++) {
        var bi = bodies[i];
        for (var j = 0; j < i; j++) {
          var bj = bodies[j];
          if (Broadphase.canCollide(bi, bj) && this.boundingVolumeCheck(bi, bj)) {
            result.push(bi, bj);
          }
        }
      }
      return result;
    };
    NaiveBroadphase.prototype.aabbQuery = function(world, aabb, result) {
      result = result || [];
      var bodies = world.bodies;
      for (var i = 0; i < bodies.length; i++) {
        var b = bodies[i];
        if (b.aabbNeedsUpdate) {
          b.updateAABB();
        }
        if (b.aabb.overlaps(aabb)) {
          result.push(b);
        }
      }
      return result;
    };
  }
});

// node_modules/p2/src/equations/RotationalVelocityEquation.js
var require_RotationalVelocityEquation = __commonJS({
  "node_modules/p2/src/equations/RotationalVelocityEquation.js"(exports, module2) {
    var Equation = require_Equation();
    var vec2 = require_vec2();
    module2.exports = RotationalVelocityEquation;
    function RotationalVelocityEquation(bodyA, bodyB) {
      Equation.call(this, bodyA, bodyB, -Number.MAX_VALUE, Number.MAX_VALUE);
      this.relativeVelocity = 1;
      this.ratio = 1;
    }
    RotationalVelocityEquation.prototype = new Equation();
    RotationalVelocityEquation.prototype.constructor = RotationalVelocityEquation;
    RotationalVelocityEquation.prototype.computeB = function(a, b, h) {
      var G = this.G;
      G[2] = -1;
      G[5] = this.ratio;
      var GiMf = this.computeGiMf();
      var GW = this.computeGW();
      var B = -GW * b - h * GiMf;
      return B;
    };
  }
});

// node_modules/p2/src/equations/RotationalLockEquation.js
var require_RotationalLockEquation = __commonJS({
  "node_modules/p2/src/equations/RotationalLockEquation.js"(exports, module2) {
    var Equation = require_Equation();
    var vec2 = require_vec2();
    module2.exports = RotationalLockEquation;
    function RotationalLockEquation(bodyA, bodyB, options) {
      options = options || {};
      Equation.call(this, bodyA, bodyB, -Number.MAX_VALUE, Number.MAX_VALUE);
      this.angle = options.angle || 0;
      var G = this.G;
      G[2] = 1;
      G[5] = -1;
    }
    RotationalLockEquation.prototype = new Equation();
    RotationalLockEquation.prototype.constructor = RotationalLockEquation;
    var worldVectorA = vec2.create();
    var worldVectorB = vec2.create();
    var xAxis = vec2.fromValues(1, 0);
    var yAxis = vec2.fromValues(0, 1);
    RotationalLockEquation.prototype.computeGq = function() {
      vec2.rotate(worldVectorA, xAxis, this.bodyA.angle + this.angle);
      vec2.rotate(worldVectorB, yAxis, this.bodyB.angle);
      return vec2.dot(worldVectorA, worldVectorB);
    };
  }
});

// node_modules/p2/src/constraints/RevoluteConstraint.js
var require_RevoluteConstraint = __commonJS({
  "node_modules/p2/src/constraints/RevoluteConstraint.js"(exports, module2) {
    var Constraint = require_Constraint();
    var Equation = require_Equation();
    var RotationalVelocityEquation = require_RotationalVelocityEquation();
    var RotationalLockEquation = require_RotationalLockEquation();
    var vec2 = require_vec2();
    module2.exports = RevoluteConstraint;
    var worldPivotA = vec2.create();
    var worldPivotB = vec2.create();
    var xAxis = vec2.fromValues(1, 0);
    var yAxis = vec2.fromValues(0, 1);
    var g = vec2.create();
    function RevoluteConstraint(bodyA, bodyB, options) {
      options = options || {};
      Constraint.call(this, bodyA, bodyB, Constraint.REVOLUTE, options);
      var maxForce = this.maxForce = typeof options.maxForce !== "undefined" ? options.maxForce : Number.MAX_VALUE;
      this.pivotA = vec2.create();
      this.pivotB = vec2.create();
      if (options.worldPivot) {
        vec2.sub(this.pivotA, options.worldPivot, bodyA.position);
        vec2.sub(this.pivotB, options.worldPivot, bodyB.position);
        vec2.rotate(this.pivotA, this.pivotA, -bodyA.angle);
        vec2.rotate(this.pivotB, this.pivotB, -bodyB.angle);
      } else {
        vec2.copy(this.pivotA, options.localPivotA);
        vec2.copy(this.pivotB, options.localPivotB);
      }
      var eqs = this.equations = [
        new Equation(bodyA, bodyB, -maxForce, maxForce),
        new Equation(bodyA, bodyB, -maxForce, maxForce)
      ];
      var x = eqs[0];
      var y = eqs[1];
      var that = this;
      x.computeGq = function() {
        vec2.rotate(worldPivotA, that.pivotA, bodyA.angle);
        vec2.rotate(worldPivotB, that.pivotB, bodyB.angle);
        vec2.add(g, bodyB.position, worldPivotB);
        vec2.sub(g, g, bodyA.position);
        vec2.sub(g, g, worldPivotA);
        return vec2.dot(g, xAxis);
      };
      y.computeGq = function() {
        vec2.rotate(worldPivotA, that.pivotA, bodyA.angle);
        vec2.rotate(worldPivotB, that.pivotB, bodyB.angle);
        vec2.add(g, bodyB.position, worldPivotB);
        vec2.sub(g, g, bodyA.position);
        vec2.sub(g, g, worldPivotA);
        return vec2.dot(g, yAxis);
      };
      y.minForce = x.minForce = -maxForce;
      y.maxForce = x.maxForce = maxForce;
      this.motorEquation = new RotationalVelocityEquation(bodyA, bodyB);
      this.motorEnabled = false;
      this.angle = 0;
      this.lowerLimitEnabled = false;
      this.upperLimitEnabled = false;
      this.lowerLimit = 0;
      this.upperLimit = 0;
      this.upperLimitEquation = new RotationalLockEquation(bodyA, bodyB);
      this.lowerLimitEquation = new RotationalLockEquation(bodyA, bodyB);
      this.upperLimitEquation.minForce = 0;
      this.lowerLimitEquation.maxForce = 0;
    }
    RevoluteConstraint.prototype = new Constraint();
    RevoluteConstraint.prototype.constructor = RevoluteConstraint;
    RevoluteConstraint.prototype.setLimits = function(lower, upper) {
      if (typeof lower === "number") {
        this.lowerLimit = lower;
        this.lowerLimitEnabled = true;
      } else {
        this.lowerLimit = lower;
        this.lowerLimitEnabled = false;
      }
      if (typeof upper === "number") {
        this.upperLimit = upper;
        this.upperLimitEnabled = true;
      } else {
        this.upperLimit = upper;
        this.upperLimitEnabled = false;
      }
    };
    RevoluteConstraint.prototype.update = function() {
      var bodyA = this.bodyA, bodyB = this.bodyB, pivotA = this.pivotA, pivotB = this.pivotB, eqs = this.equations, normal = eqs[0], tangent = eqs[1], x = eqs[0], y = eqs[1], upperLimit = this.upperLimit, lowerLimit = this.lowerLimit, upperLimitEquation = this.upperLimitEquation, lowerLimitEquation = this.lowerLimitEquation;
      var relAngle = this.angle = bodyB.angle - bodyA.angle;
      if (this.upperLimitEnabled && relAngle > upperLimit) {
        upperLimitEquation.angle = upperLimit;
        if (eqs.indexOf(upperLimitEquation) === -1) {
          eqs.push(upperLimitEquation);
        }
      } else {
        var idx = eqs.indexOf(upperLimitEquation);
        if (idx !== -1) {
          eqs.splice(idx, 1);
        }
      }
      if (this.lowerLimitEnabled && relAngle < lowerLimit) {
        lowerLimitEquation.angle = lowerLimit;
        if (eqs.indexOf(lowerLimitEquation) === -1) {
          eqs.push(lowerLimitEquation);
        }
      } else {
        var idx = eqs.indexOf(lowerLimitEquation);
        if (idx !== -1) {
          eqs.splice(idx, 1);
        }
      }
      vec2.rotate(worldPivotA, pivotA, bodyA.angle);
      vec2.rotate(worldPivotB, pivotB, bodyB.angle);
      x.G[0] = -1;
      x.G[1] = 0;
      x.G[2] = -vec2.crossLength(worldPivotA, xAxis);
      x.G[3] = 1;
      x.G[4] = 0;
      x.G[5] = vec2.crossLength(worldPivotB, xAxis);
      y.G[0] = 0;
      y.G[1] = -1;
      y.G[2] = -vec2.crossLength(worldPivotA, yAxis);
      y.G[3] = 0;
      y.G[4] = 1;
      y.G[5] = vec2.crossLength(worldPivotB, yAxis);
    };
    RevoluteConstraint.prototype.enableMotor = function() {
      if (this.motorEnabled) {
        return;
      }
      this.equations.push(this.motorEquation);
      this.motorEnabled = true;
    };
    RevoluteConstraint.prototype.disableMotor = function() {
      if (!this.motorEnabled) {
        return;
      }
      var i = this.equations.indexOf(this.motorEquation);
      this.equations.splice(i, 1);
      this.motorEnabled = false;
    };
    RevoluteConstraint.prototype.motorIsEnabled = function() {
      return !!this.motorEnabled;
    };
    RevoluteConstraint.prototype.setMotorSpeed = function(speed) {
      if (!this.motorEnabled) {
        return;
      }
      var i = this.equations.indexOf(this.motorEquation);
      this.equations[i].relativeVelocity = speed;
    };
    RevoluteConstraint.prototype.getMotorSpeed = function() {
      if (!this.motorEnabled) {
        return false;
      }
      return this.motorEquation.relativeVelocity;
    };
  }
});

// node_modules/p2/src/constraints/PrismaticConstraint.js
var require_PrismaticConstraint = __commonJS({
  "node_modules/p2/src/constraints/PrismaticConstraint.js"(exports, module2) {
    var Constraint = require_Constraint();
    var ContactEquation = require_ContactEquation();
    var Equation = require_Equation();
    var vec2 = require_vec2();
    var RotationalLockEquation = require_RotationalLockEquation();
    module2.exports = PrismaticConstraint;
    function PrismaticConstraint(bodyA, bodyB, options) {
      options = options || {};
      Constraint.call(this, bodyA, bodyB, Constraint.PRISMATIC, options);
      var localAnchorA = vec2.fromValues(0, 0), localAxisA = vec2.fromValues(1, 0), localAnchorB = vec2.fromValues(0, 0);
      if (options.localAnchorA) {
        vec2.copy(localAnchorA, options.localAnchorA);
      }
      if (options.localAxisA) {
        vec2.copy(localAxisA, options.localAxisA);
      }
      if (options.localAnchorB) {
        vec2.copy(localAnchorB, options.localAnchorB);
      }
      this.localAnchorA = localAnchorA;
      this.localAnchorB = localAnchorB;
      this.localAxisA = localAxisA;
      var maxForce = this.maxForce = typeof options.maxForce !== "undefined" ? options.maxForce : Number.MAX_VALUE;
      var trans = new Equation(bodyA, bodyB, -maxForce, maxForce);
      var ri = new vec2.create(), rj = new vec2.create(), gg = new vec2.create(), t = new vec2.create();
      trans.computeGq = function() {
        return vec2.dot(gg, t);
      };
      trans.updateJacobian = function() {
        var G = this.G, xi = bodyA.position, xj = bodyB.position;
        vec2.rotate(ri, localAnchorA, bodyA.angle);
        vec2.rotate(rj, localAnchorB, bodyB.angle);
        vec2.add(gg, xj, rj);
        vec2.sub(gg, gg, xi);
        vec2.sub(gg, gg, ri);
        vec2.rotate(t, localAxisA, bodyA.angle + Math.PI / 2);
        G[0] = -t[0];
        G[1] = -t[1];
        G[2] = -vec2.crossLength(ri, t) + vec2.crossLength(t, gg);
        G[3] = t[0];
        G[4] = t[1];
        G[5] = vec2.crossLength(rj, t);
      };
      this.equations.push(trans);
      if (!options.disableRotationalLock) {
        var rot = new RotationalLockEquation(bodyA, bodyB, -maxForce, maxForce);
        this.equations.push(rot);
      }
      this.position = 0;
      this.velocity = 0;
      this.lowerLimitEnabled = typeof options.lowerLimit !== "undefined" ? true : false;
      this.upperLimitEnabled = typeof options.upperLimit !== "undefined" ? true : false;
      this.lowerLimit = typeof options.lowerLimit !== "undefined" ? options.lowerLimit : 0;
      this.upperLimit = typeof options.upperLimit !== "undefined" ? options.upperLimit : 1;
      this.upperLimitEquation = new ContactEquation(bodyA, bodyB);
      this.lowerLimitEquation = new ContactEquation(bodyA, bodyB);
      this.upperLimitEquation.minForce = this.lowerLimitEquation.minForce = 0;
      this.upperLimitEquation.maxForce = this.lowerLimitEquation.maxForce = maxForce;
      this.motorEquation = new Equation(bodyA, bodyB);
      this.motorEnabled = false;
      this.motorSpeed = 0;
      var that = this;
      var motorEquation = this.motorEquation;
      var old = motorEquation.computeGW;
      motorEquation.computeGq = function() {
        return 0;
      };
      motorEquation.computeGW = function() {
        var G = this.G, bi = this.bodyA, bj = this.bodyB, vi = bi.velocity, vj = bj.velocity, wi = bi.angularVelocity, wj = bj.angularVelocity;
        return this.gmult(G, vi, wi, vj, wj) + that.motorSpeed;
      };
    }
    PrismaticConstraint.prototype = new Constraint();
    PrismaticConstraint.prototype.constructor = PrismaticConstraint;
    var worldAxisA = vec2.create();
    var worldAnchorA = vec2.create();
    var worldAnchorB = vec2.create();
    var orientedAnchorA = vec2.create();
    var orientedAnchorB = vec2.create();
    var tmp = vec2.create();
    PrismaticConstraint.prototype.update = function() {
      var eqs = this.equations, trans = eqs[0], upperLimit = this.upperLimit, lowerLimit = this.lowerLimit, upperLimitEquation = this.upperLimitEquation, lowerLimitEquation = this.lowerLimitEquation, bodyA = this.bodyA, bodyB = this.bodyB, localAxisA = this.localAxisA, localAnchorA = this.localAnchorA, localAnchorB = this.localAnchorB;
      trans.updateJacobian();
      vec2.rotate(worldAxisA, localAxisA, bodyA.angle);
      vec2.rotate(orientedAnchorA, localAnchorA, bodyA.angle);
      vec2.add(worldAnchorA, orientedAnchorA, bodyA.position);
      vec2.rotate(orientedAnchorB, localAnchorB, bodyB.angle);
      vec2.add(worldAnchorB, orientedAnchorB, bodyB.position);
      var relPosition = this.position = vec2.dot(worldAnchorB, worldAxisA) - vec2.dot(worldAnchorA, worldAxisA);
      if (this.motorEnabled) {
        var G = this.motorEquation.G;
        G[0] = worldAxisA[0];
        G[1] = worldAxisA[1];
        G[2] = vec2.crossLength(worldAxisA, orientedAnchorB);
        G[3] = -worldAxisA[0];
        G[4] = -worldAxisA[1];
        G[5] = -vec2.crossLength(worldAxisA, orientedAnchorA);
      }
      if (this.upperLimitEnabled && relPosition > upperLimit) {
        vec2.scale(upperLimitEquation.normalA, worldAxisA, -1);
        vec2.sub(upperLimitEquation.contactPointA, worldAnchorA, bodyA.position);
        vec2.sub(upperLimitEquation.contactPointB, worldAnchorB, bodyB.position);
        vec2.scale(tmp, worldAxisA, upperLimit);
        vec2.add(upperLimitEquation.contactPointA, upperLimitEquation.contactPointA, tmp);
        if (eqs.indexOf(upperLimitEquation) === -1) {
          eqs.push(upperLimitEquation);
        }
      } else {
        var idx = eqs.indexOf(upperLimitEquation);
        if (idx !== -1) {
          eqs.splice(idx, 1);
        }
      }
      if (this.lowerLimitEnabled && relPosition < lowerLimit) {
        vec2.scale(lowerLimitEquation.normalA, worldAxisA, 1);
        vec2.sub(lowerLimitEquation.contactPointA, worldAnchorA, bodyA.position);
        vec2.sub(lowerLimitEquation.contactPointB, worldAnchorB, bodyB.position);
        vec2.scale(tmp, worldAxisA, lowerLimit);
        vec2.sub(lowerLimitEquation.contactPointB, lowerLimitEquation.contactPointB, tmp);
        if (eqs.indexOf(lowerLimitEquation) === -1) {
          eqs.push(lowerLimitEquation);
        }
      } else {
        var idx = eqs.indexOf(lowerLimitEquation);
        if (idx !== -1) {
          eqs.splice(idx, 1);
        }
      }
    };
    PrismaticConstraint.prototype.enableMotor = function() {
      if (this.motorEnabled) {
        return;
      }
      this.equations.push(this.motorEquation);
      this.motorEnabled = true;
    };
    PrismaticConstraint.prototype.disableMotor = function() {
      if (!this.motorEnabled) {
        return;
      }
      var i = this.equations.indexOf(this.motorEquation);
      this.equations.splice(i, 1);
      this.motorEnabled = false;
    };
    PrismaticConstraint.prototype.setLimits = function(lower, upper) {
      if (typeof lower === "number") {
        this.lowerLimit = lower;
        this.lowerLimitEnabled = true;
      } else {
        this.lowerLimit = lower;
        this.lowerLimitEnabled = false;
      }
      if (typeof upper === "number") {
        this.upperLimit = upper;
        this.upperLimitEnabled = true;
      } else {
        this.upperLimit = upper;
        this.upperLimitEnabled = false;
      }
    };
  }
});

// node_modules/p2/src/collision/SAPBroadphase.js
var require_SAPBroadphase = __commonJS({
  "node_modules/p2/src/collision/SAPBroadphase.js"(exports, module2) {
    var Utils2 = require_Utils();
    var Broadphase = require_Broadphase();
    module2.exports = SAPBroadphase;
    function SAPBroadphase() {
      Broadphase.call(this, Broadphase.SAP);
      this.axisList = [];
      this.axisIndex = 0;
      var that = this;
      this._addBodyHandler = function(e) {
        that.axisList.push(e.body);
      };
      this._removeBodyHandler = function(e) {
        var idx = that.axisList.indexOf(e.body);
        if (idx !== -1) {
          that.axisList.splice(idx, 1);
        }
      };
    }
    SAPBroadphase.prototype = new Broadphase();
    SAPBroadphase.prototype.constructor = SAPBroadphase;
    SAPBroadphase.prototype.setWorld = function(world) {
      this.axisList.length = 0;
      Utils2.appendArray(this.axisList, world.bodies);
      world.off("addBody", this._addBodyHandler).off("removeBody", this._removeBodyHandler);
      world.on("addBody", this._addBodyHandler).on("removeBody", this._removeBodyHandler);
      this.world = world;
    };
    SAPBroadphase.sortAxisList = function(a, axisIndex) {
      axisIndex = axisIndex | 0;
      for (var i = 1, l = a.length; i < l; i++) {
        var v = a[i];
        for (var j = i - 1; j >= 0; j--) {
          if (a[j].aabb.lowerBound[axisIndex] <= v.aabb.lowerBound[axisIndex]) {
            break;
          }
          a[j + 1] = a[j];
        }
        a[j + 1] = v;
      }
      return a;
    };
    SAPBroadphase.prototype.sortList = function() {
      var bodies = this.axisList, axisIndex = this.axisIndex;
      SAPBroadphase.sortAxisList(bodies, axisIndex);
    };
    SAPBroadphase.prototype.getCollisionPairs = function(world) {
      var bodies = this.axisList, result = this.result, axisIndex = this.axisIndex;
      result.length = 0;
      var l = bodies.length;
      while (l--) {
        var b = bodies[l];
        if (b.aabbNeedsUpdate) {
          b.updateAABB();
        }
      }
      this.sortList();
      for (var i = 0, N = bodies.length | 0; i !== N; i++) {
        var bi = bodies[i];
        for (var j = i + 1; j < N; j++) {
          var bj = bodies[j];
          var overlaps = bj.aabb.lowerBound[axisIndex] <= bi.aabb.upperBound[axisIndex];
          if (!overlaps) {
            break;
          }
          if (Broadphase.canCollide(bi, bj) && this.boundingVolumeCheck(bi, bj)) {
            result.push(bi, bj);
          }
        }
      }
      return result;
    };
    SAPBroadphase.prototype.aabbQuery = function(world, aabb, result) {
      result = result || [];
      this.sortList();
      var axisIndex = this.axisIndex;
      var axis = "x";
      if (axisIndex === 1) {
        axis = "y";
      }
      if (axisIndex === 2) {
        axis = "z";
      }
      var axisList = this.axisList;
      var lower = aabb.lowerBound[axis];
      var upper = aabb.upperBound[axis];
      for (var i = 0; i < axisList.length; i++) {
        var b = axisList[i];
        if (b.aabbNeedsUpdate) {
          b.updateAABB();
        }
        if (b.aabb.overlaps(aabb)) {
          result.push(b);
        }
      }
      return result;
    };
  }
});

// node_modules/p2/src/objects/Spring.js
var require_Spring = __commonJS({
  "node_modules/p2/src/objects/Spring.js"(exports, module2) {
    var vec2 = require_vec2();
    var Utils2 = require_Utils();
    module2.exports = Spring;
    function Spring(bodyA, bodyB, options) {
      options = Utils2.defaults(options, {
        stiffness: 100,
        damping: 1
      });
      this.stiffness = options.stiffness;
      this.damping = options.damping;
      this.bodyA = bodyA;
      this.bodyB = bodyB;
    }
    Spring.prototype.applyForce = function() {
    };
  }
});

// node_modules/p2/src/objects/TopDownVehicle.js
var require_TopDownVehicle = __commonJS({
  "node_modules/p2/src/objects/TopDownVehicle.js"(exports, module2) {
    var vec2 = require_vec2();
    var Utils2 = require_Utils();
    var Constraint = require_Constraint();
    var FrictionEquation = require_FrictionEquation();
    var Body = require_Body();
    module2.exports = TopDownVehicle;
    function TopDownVehicle(chassisBody, options) {
      options = options || {};
      this.chassisBody = chassisBody;
      this.wheels = [];
      this.groundBody = new Body({ mass: 0 });
      this.world = null;
      var that = this;
      this.preStepCallback = function() {
        that.update();
      };
    }
    TopDownVehicle.prototype.addToWorld = function(world) {
      this.world = world;
      world.addBody(this.groundBody);
      world.on("preStep", this.preStepCallback);
      for (var i = 0; i < this.wheels.length; i++) {
        var wheel = this.wheels[i];
        world.addConstraint(wheel);
      }
    };
    TopDownVehicle.prototype.removeFromWorld = function() {
      var world = this.world;
      world.removeBody(this.groundBody);
      world.off("preStep", this.preStepCallback);
      for (var i = 0; i < this.wheels.length; i++) {
        var wheel = this.wheels[i];
        world.removeConstraint(wheel);
      }
      this.world = null;
    };
    TopDownVehicle.prototype.addWheel = function(wheelOptions) {
      var wheel = new WheelConstraint(this, wheelOptions);
      this.wheels.push(wheel);
      return wheel;
    };
    TopDownVehicle.prototype.update = function() {
      for (var i = 0; i < this.wheels.length; i++) {
        this.wheels[i].update();
      }
    };
    function WheelConstraint(vehicle, options) {
      options = options || {};
      this.vehicle = vehicle;
      this.forwardEquation = new FrictionEquation(vehicle.chassisBody, vehicle.groundBody);
      this.sideEquation = new FrictionEquation(vehicle.chassisBody, vehicle.groundBody);
      this.steerValue = 0;
      this.engineForce = 0;
      this.setSideFriction(options.sideFriction !== void 0 ? options.sideFriction : 5);
      this.localForwardVector = vec2.fromValues(0, 1);
      if (options.localForwardVector) {
        vec2.copy(this.localForwardVector, options.localForwardVector);
      }
      this.localPosition = vec2.fromValues(0, 0);
      if (options.localPosition) {
        vec2.copy(this.localPosition, options.localPosition);
      }
      Constraint.apply(this, vehicle.chassisBody, vehicle.groundBody);
      this.equations.push(this.forwardEquation, this.sideEquation);
      this.setBrakeForce(0);
    }
    WheelConstraint.prototype = new Constraint();
    WheelConstraint.prototype.setBrakeForce = function(force) {
      this.forwardEquation.setSlipForce(force);
    };
    WheelConstraint.prototype.setSideFriction = function(force) {
      this.sideEquation.setSlipForce(force);
    };
    var worldVelocity = vec2.create();
    var relativePoint = vec2.create();
    WheelConstraint.prototype.getSpeed = function() {
      this.vehicle.chassisBody.vectorToWorldFrame(relativePoint, this.localForwardVector);
      this.vehicle.chassisBody.getVelocityAtPoint(worldVelocity, relativePoint);
      return vec2.dot(worldVelocity, relativePoint);
    };
    var tmpVec = vec2.create();
    WheelConstraint.prototype.update = function() {
      this.vehicle.chassisBody.vectorToWorldFrame(this.forwardEquation.t, this.localForwardVector);
      vec2.rotate(this.sideEquation.t, this.localForwardVector, Math.PI / 2);
      this.vehicle.chassisBody.vectorToWorldFrame(this.sideEquation.t, this.sideEquation.t);
      vec2.rotate(this.forwardEquation.t, this.forwardEquation.t, this.steerValue);
      vec2.rotate(this.sideEquation.t, this.sideEquation.t, this.steerValue);
      this.vehicle.chassisBody.toWorldFrame(this.forwardEquation.contactPointB, this.localPosition);
      vec2.copy(this.sideEquation.contactPointB, this.forwardEquation.contactPointB);
      this.vehicle.chassisBody.vectorToWorldFrame(this.forwardEquation.contactPointA, this.localPosition);
      vec2.copy(this.sideEquation.contactPointA, this.forwardEquation.contactPointA);
      vec2.normalize(tmpVec, this.forwardEquation.t);
      vec2.scale(tmpVec, tmpVec, this.engineForce);
      this.vehicle.chassisBody.applyForce(tmpVec, this.forwardEquation.contactPointA);
    };
  }
});

// node_modules/p2/src/objects/LinearSpring.js
var require_LinearSpring = __commonJS({
  "node_modules/p2/src/objects/LinearSpring.js"(exports, module2) {
    var vec2 = require_vec2();
    var Spring = require_Spring();
    var Utils2 = require_Utils();
    module2.exports = LinearSpring;
    function LinearSpring(bodyA, bodyB, options) {
      options = options || {};
      Spring.call(this, bodyA, bodyB, options);
      this.localAnchorA = vec2.fromValues(0, 0);
      this.localAnchorB = vec2.fromValues(0, 0);
      if (options.localAnchorA) {
        vec2.copy(this.localAnchorA, options.localAnchorA);
      }
      if (options.localAnchorB) {
        vec2.copy(this.localAnchorB, options.localAnchorB);
      }
      if (options.worldAnchorA) {
        this.setWorldAnchorA(options.worldAnchorA);
      }
      if (options.worldAnchorB) {
        this.setWorldAnchorB(options.worldAnchorB);
      }
      var worldAnchorA = vec2.create();
      var worldAnchorB = vec2.create();
      this.getWorldAnchorA(worldAnchorA);
      this.getWorldAnchorB(worldAnchorB);
      var worldDistance = vec2.distance(worldAnchorA, worldAnchorB);
      this.restLength = typeof options.restLength === "number" ? options.restLength : worldDistance;
    }
    LinearSpring.prototype = new Spring();
    LinearSpring.prototype.constructor = LinearSpring;
    LinearSpring.prototype.setWorldAnchorA = function(worldAnchorA) {
      this.bodyA.toLocalFrame(this.localAnchorA, worldAnchorA);
    };
    LinearSpring.prototype.setWorldAnchorB = function(worldAnchorB) {
      this.bodyB.toLocalFrame(this.localAnchorB, worldAnchorB);
    };
    LinearSpring.prototype.getWorldAnchorA = function(result) {
      this.bodyA.toWorldFrame(result, this.localAnchorA);
    };
    LinearSpring.prototype.getWorldAnchorB = function(result) {
      this.bodyB.toWorldFrame(result, this.localAnchorB);
    };
    var applyForce_r = vec2.create();
    var applyForce_r_unit = vec2.create();
    var applyForce_u = vec2.create();
    var applyForce_f = vec2.create();
    var applyForce_worldAnchorA = vec2.create();
    var applyForce_worldAnchorB = vec2.create();
    var applyForce_ri = vec2.create();
    var applyForce_rj = vec2.create();
    var applyForce_tmp = vec2.create();
    LinearSpring.prototype.applyForce = function() {
      var k = this.stiffness, d = this.damping, l = this.restLength, bodyA = this.bodyA, bodyB = this.bodyB, r = applyForce_r, r_unit = applyForce_r_unit, u = applyForce_u, f = applyForce_f, tmp = applyForce_tmp;
      var worldAnchorA = applyForce_worldAnchorA, worldAnchorB = applyForce_worldAnchorB, ri = applyForce_ri, rj = applyForce_rj;
      this.getWorldAnchorA(worldAnchorA);
      this.getWorldAnchorB(worldAnchorB);
      vec2.sub(ri, worldAnchorA, bodyA.position);
      vec2.sub(rj, worldAnchorB, bodyB.position);
      vec2.sub(r, worldAnchorB, worldAnchorA);
      var rlen = vec2.len(r);
      vec2.normalize(r_unit, r);
      vec2.sub(u, bodyB.velocity, bodyA.velocity);
      vec2.crossZV(tmp, bodyB.angularVelocity, rj);
      vec2.add(u, u, tmp);
      vec2.crossZV(tmp, bodyA.angularVelocity, ri);
      vec2.sub(u, u, tmp);
      vec2.scale(f, r_unit, -k * (rlen - l) - d * vec2.dot(u, r_unit));
      vec2.sub(bodyA.force, bodyA.force, f);
      vec2.add(bodyB.force, bodyB.force, f);
      var ri_x_f = vec2.crossLength(ri, f);
      var rj_x_f = vec2.crossLength(rj, f);
      bodyA.angularForce -= ri_x_f;
      bodyB.angularForce += rj_x_f;
    };
  }
});

// node_modules/p2/src/objects/RotationalSpring.js
var require_RotationalSpring = __commonJS({
  "node_modules/p2/src/objects/RotationalSpring.js"(exports, module2) {
    var vec2 = require_vec2();
    var Spring = require_Spring();
    module2.exports = RotationalSpring;
    function RotationalSpring(bodyA, bodyB, options) {
      options = options || {};
      Spring.call(this, bodyA, bodyB, options);
      this.restAngle = typeof options.restAngle === "number" ? options.restAngle : bodyB.angle - bodyA.angle;
    }
    RotationalSpring.prototype = new Spring();
    RotationalSpring.prototype.constructor = RotationalSpring;
    RotationalSpring.prototype.applyForce = function() {
      var k = this.stiffness, d = this.damping, l = this.restAngle, bodyA = this.bodyA, bodyB = this.bodyB, x = bodyB.angle - bodyA.angle, u = bodyB.angularVelocity - bodyA.angularVelocity;
      var torque = -k * (x - l) - d * u * 0;
      bodyA.angularForce -= torque;
      bodyB.angularForce += torque;
    };
  }
});

// node_modules/p2/package.json
var require_package = __commonJS({
  "node_modules/p2/package.json"(exports, module2) {
    module2.exports = {
      name: "p2",
      version: "0.7.1",
      description: "A JavaScript 2D physics engine.",
      author: "Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",
      keywords: [
        "p2.js",
        "p2",
        "physics",
        "engine",
        "2d"
      ],
      main: "./src/p2.js",
      engines: {
        node: "*"
      },
      repository: {
        type: "git",
        url: "https://github.com/schteppe/p2.js.git"
      },
      bugs: {
        url: "https://github.com/schteppe/p2.js/issues"
      },
      licenses: [
        {
          type: "MIT"
        }
      ],
      devDependencies: {
        grunt: "^0.4.5",
        "grunt-contrib-jshint": "^0.11.2",
        "grunt-contrib-nodeunit": "^0.4.1",
        "grunt-contrib-uglify": "~0.4.0",
        "grunt-contrib-watch": "~0.5.0",
        "grunt-browserify": "~2.0.1",
        "grunt-contrib-concat": "^0.4.0"
      },
      dependencies: {
        "poly-decomp": "0.1.1"
      }
    };
  }
});

// node_modules/p2/src/utils/OverlapKeeperRecord.js
var require_OverlapKeeperRecord = __commonJS({
  "node_modules/p2/src/utils/OverlapKeeperRecord.js"(exports, module2) {
    module2.exports = OverlapKeeperRecord;
    function OverlapKeeperRecord(bodyA, shapeA, bodyB, shapeB) {
      this.shapeA = shapeA;
      this.shapeB = shapeB;
      this.bodyA = bodyA;
      this.bodyB = bodyB;
    }
    OverlapKeeperRecord.prototype.set = function(bodyA, shapeA, bodyB, shapeB) {
      OverlapKeeperRecord.call(this, bodyA, shapeA, bodyB, shapeB);
    };
  }
});

// node_modules/p2/src/utils/OverlapKeeperRecordPool.js
var require_OverlapKeeperRecordPool = __commonJS({
  "node_modules/p2/src/utils/OverlapKeeperRecordPool.js"(exports, module2) {
    var OverlapKeeperRecord = require_OverlapKeeperRecord();
    var Pool = require_Pool();
    module2.exports = OverlapKeeperRecordPool;
    function OverlapKeeperRecordPool() {
      Pool.apply(this, arguments);
    }
    OverlapKeeperRecordPool.prototype = new Pool();
    OverlapKeeperRecordPool.prototype.constructor = OverlapKeeperRecordPool;
    OverlapKeeperRecordPool.prototype.create = function() {
      return new OverlapKeeperRecord();
    };
    OverlapKeeperRecordPool.prototype.destroy = function(record) {
      record.bodyA = record.bodyB = record.shapeA = record.shapeB = null;
      return this;
    };
  }
});

// node_modules/p2/src/utils/OverlapKeeper.js
var require_OverlapKeeper = __commonJS({
  "node_modules/p2/src/utils/OverlapKeeper.js"(exports, module2) {
    var TupleDictionary = require_TupleDictionary();
    var OverlapKeeperRecord = require_OverlapKeeperRecord();
    var OverlapKeeperRecordPool = require_OverlapKeeperRecordPool();
    var Utils2 = require_Utils();
    module2.exports = OverlapKeeper;
    function OverlapKeeper() {
      this.overlappingShapesLastState = new TupleDictionary();
      this.overlappingShapesCurrentState = new TupleDictionary();
      this.recordPool = new OverlapKeeperRecordPool({ size: 16 });
      this.tmpDict = new TupleDictionary();
      this.tmpArray1 = [];
    }
    OverlapKeeper.prototype.tick = function() {
      var last = this.overlappingShapesLastState;
      var current = this.overlappingShapesCurrentState;
      var l = last.keys.length;
      while (l--) {
        var key = last.keys[l];
        var lastObject = last.getByKey(key);
        var currentObject = current.getByKey(key);
        if (lastObject) {
          this.recordPool.release(lastObject);
        }
      }
      last.reset();
      last.copy(current);
      current.reset();
    };
    OverlapKeeper.prototype.setOverlapping = function(bodyA, shapeA, bodyB, shapeB) {
      var last = this.overlappingShapesLastState;
      var current = this.overlappingShapesCurrentState;
      if (!current.get(shapeA.id, shapeB.id)) {
        var data = this.recordPool.get();
        data.set(bodyA, shapeA, bodyB, shapeB);
        current.set(shapeA.id, shapeB.id, data);
      }
    };
    OverlapKeeper.prototype.getNewOverlaps = function(result) {
      return this.getDiff(this.overlappingShapesLastState, this.overlappingShapesCurrentState, result);
    };
    OverlapKeeper.prototype.getEndOverlaps = function(result) {
      return this.getDiff(this.overlappingShapesCurrentState, this.overlappingShapesLastState, result);
    };
    OverlapKeeper.prototype.bodiesAreOverlapping = function(bodyA, bodyB) {
      var current = this.overlappingShapesCurrentState;
      var l = current.keys.length;
      while (l--) {
        var key = current.keys[l];
        var data = current.data[key];
        if (data.bodyA === bodyA && data.bodyB === bodyB || data.bodyA === bodyB && data.bodyB === bodyA) {
          return true;
        }
      }
      return false;
    };
    OverlapKeeper.prototype.getDiff = function(dictA, dictB, result) {
      var result = result || [];
      var last = dictA;
      var current = dictB;
      result.length = 0;
      var l = current.keys.length;
      while (l--) {
        var key = current.keys[l];
        var data = current.data[key];
        if (!data) {
          throw new Error("Key " + key + " had no data!");
        }
        var lastData = last.data[key];
        if (!lastData) {
          result.push(data);
        }
      }
      return result;
    };
    OverlapKeeper.prototype.isNewOverlap = function(shapeA, shapeB) {
      var idA = shapeA.id | 0, idB = shapeB.id | 0;
      var last = this.overlappingShapesLastState;
      var current = this.overlappingShapesCurrentState;
      return !!!last.get(idA, idB) && !!current.get(idA, idB);
    };
    OverlapKeeper.prototype.getNewBodyOverlaps = function(result) {
      this.tmpArray1.length = 0;
      var overlaps = this.getNewOverlaps(this.tmpArray1);
      return this.getBodyDiff(overlaps, result);
    };
    OverlapKeeper.prototype.getEndBodyOverlaps = function(result) {
      this.tmpArray1.length = 0;
      var overlaps = this.getEndOverlaps(this.tmpArray1);
      return this.getBodyDiff(overlaps, result);
    };
    OverlapKeeper.prototype.getBodyDiff = function(overlaps, result) {
      result = result || [];
      var accumulator = this.tmpDict;
      var l = overlaps.length;
      while (l--) {
        var data = overlaps[l];
        accumulator.set(data.bodyA.id | 0, data.bodyB.id | 0, data);
      }
      l = accumulator.keys.length;
      while (l--) {
        var data = accumulator.getByKey(accumulator.keys[l]);
        if (data) {
          result.push(data.bodyA, data.bodyB);
        }
      }
      accumulator.reset();
      return result;
    };
  }
});

// node_modules/p2/src/world/Island.js
var require_Island = __commonJS({
  "node_modules/p2/src/world/Island.js"(exports, module2) {
    var Body = require_Body();
    module2.exports = Island;
    function Island() {
      this.equations = [];
      this.bodies = [];
    }
    Island.prototype.reset = function() {
      this.equations.length = this.bodies.length = 0;
    };
    var bodyIds = [];
    Island.prototype.getBodies = function(result) {
      var bodies = result || [], eqs = this.equations;
      bodyIds.length = 0;
      for (var i = 0; i !== eqs.length; i++) {
        var eq = eqs[i];
        if (bodyIds.indexOf(eq.bodyA.id) === -1) {
          bodies.push(eq.bodyA);
          bodyIds.push(eq.bodyA.id);
        }
        if (bodyIds.indexOf(eq.bodyB.id) === -1) {
          bodies.push(eq.bodyB);
          bodyIds.push(eq.bodyB.id);
        }
      }
      return bodies;
    };
    Island.prototype.wantsToSleep = function() {
      for (var i = 0; i < this.bodies.length; i++) {
        var b = this.bodies[i];
        if (b.type === Body.DYNAMIC && !b.wantsToSleep) {
          return false;
        }
      }
      return true;
    };
    Island.prototype.sleep = function() {
      for (var i = 0; i < this.bodies.length; i++) {
        var b = this.bodies[i];
        b.sleep();
      }
      return true;
    };
  }
});

// node_modules/p2/src/world/IslandNode.js
var require_IslandNode = __commonJS({
  "node_modules/p2/src/world/IslandNode.js"(exports, module2) {
    module2.exports = IslandNode;
    function IslandNode(body) {
      this.body = body;
      this.neighbors = [];
      this.equations = [];
      this.visited = false;
    }
    IslandNode.prototype.reset = function() {
      this.equations.length = 0;
      this.neighbors.length = 0;
      this.visited = false;
      this.body = null;
    };
  }
});

// node_modules/p2/src/utils/IslandNodePool.js
var require_IslandNodePool = __commonJS({
  "node_modules/p2/src/utils/IslandNodePool.js"(exports, module2) {
    var IslandNode = require_IslandNode();
    var Pool = require_Pool();
    module2.exports = IslandNodePool;
    function IslandNodePool() {
      Pool.apply(this, arguments);
    }
    IslandNodePool.prototype = new Pool();
    IslandNodePool.prototype.constructor = IslandNodePool;
    IslandNodePool.prototype.create = function() {
      return new IslandNode();
    };
    IslandNodePool.prototype.destroy = function(node) {
      node.reset();
      return this;
    };
  }
});

// node_modules/p2/src/utils/IslandPool.js
var require_IslandPool = __commonJS({
  "node_modules/p2/src/utils/IslandPool.js"(exports, module2) {
    var Island = require_Island();
    var Pool = require_Pool();
    module2.exports = IslandPool;
    function IslandPool() {
      Pool.apply(this, arguments);
    }
    IslandPool.prototype = new Pool();
    IslandPool.prototype.constructor = IslandPool;
    IslandPool.prototype.create = function() {
      return new Island();
    };
    IslandPool.prototype.destroy = function(island) {
      island.reset();
      return this;
    };
  }
});

// node_modules/p2/src/world/IslandManager.js
var require_IslandManager = __commonJS({
  "node_modules/p2/src/world/IslandManager.js"(exports, module2) {
    var vec2 = require_vec2();
    var Island = require_Island();
    var IslandNode = require_IslandNode();
    var IslandNodePool = require_IslandNodePool();
    var IslandPool = require_IslandPool();
    var Body = require_Body();
    module2.exports = IslandManager;
    function IslandManager(options) {
      this.nodePool = new IslandNodePool({ size: 16 });
      this.islandPool = new IslandPool({ size: 8 });
      this.equations = [];
      this.islands = [];
      this.nodes = [];
      this.queue = [];
    }
    IslandManager.getUnvisitedNode = function(nodes) {
      var Nnodes = nodes.length;
      for (var i = 0; i !== Nnodes; i++) {
        var node = nodes[i];
        if (!node.visited && node.body.type === Body.DYNAMIC) {
          return node;
        }
      }
      return false;
    };
    IslandManager.prototype.visit = function(node, bds, eqs) {
      bds.push(node.body);
      var Neqs = node.equations.length;
      for (var i = 0; i !== Neqs; i++) {
        var eq = node.equations[i];
        if (eqs.indexOf(eq) === -1) {
          eqs.push(eq);
        }
      }
    };
    IslandManager.prototype.bfs = function(root, bds, eqs) {
      var queue = this.queue;
      queue.length = 0;
      queue.push(root);
      root.visited = true;
      this.visit(root, bds, eqs);
      while (queue.length) {
        var node = queue.pop();
        var child;
        while (child = IslandManager.getUnvisitedNode(node.neighbors)) {
          child.visited = true;
          this.visit(child, bds, eqs);
          if (child.body.type === Body.DYNAMIC) {
            queue.push(child);
          }
        }
      }
    };
    IslandManager.prototype.split = function(world) {
      var bodies = world.bodies, nodes = this.nodes, equations = this.equations;
      while (nodes.length) {
        this.nodePool.release(nodes.pop());
      }
      for (var i = 0; i !== bodies.length; i++) {
        var node = this.nodePool.get();
        node.body = bodies[i];
        nodes.push(node);
      }
      for (var k = 0; k !== equations.length; k++) {
        var eq = equations[k], i = bodies.indexOf(eq.bodyA), j = bodies.indexOf(eq.bodyB), ni = nodes[i], nj = nodes[j];
        ni.neighbors.push(nj);
        nj.neighbors.push(ni);
        ni.equations.push(eq);
        nj.equations.push(eq);
      }
      var islands = this.islands;
      for (var i = 0; i < islands.length; i++) {
        this.islandPool.release(islands[i]);
      }
      islands.length = 0;
      var child;
      while (child = IslandManager.getUnvisitedNode(nodes)) {
        var island = this.islandPool.get();
        this.bfs(child, island.bodies, island.equations);
        islands.push(island);
      }
      return islands;
    };
  }
});

// node_modules/p2/src/world/World.js
var require_World = __commonJS({
  "node_modules/p2/src/world/World.js"(exports, module2) {
    var GSSolver = require_GSSolver();
    var Solver = require_Solver();
    var Ray = require_Ray();
    var vec2 = require_vec2();
    var Circle = require_Circle();
    var Convex = require_Convex();
    var Line = require_Line2();
    var Plane = require_Plane();
    var Capsule = require_Capsule();
    var Particle = require_Particle();
    var EventEmitter4 = require_EventEmitter();
    var Body = require_Body();
    var Shape = require_Shape();
    var LinearSpring = require_LinearSpring();
    var Material = require_Material();
    var ContactMaterial = require_ContactMaterial();
    var DistanceConstraint = require_DistanceConstraint();
    var Constraint = require_Constraint();
    var LockConstraint = require_LockConstraint();
    var RevoluteConstraint = require_RevoluteConstraint();
    var PrismaticConstraint = require_PrismaticConstraint();
    var GearConstraint = require_GearConstraint();
    var pkg = require_package();
    var Broadphase = require_Broadphase();
    var AABB = require_AABB();
    var SAPBroadphase = require_SAPBroadphase();
    var Narrowphase = require_Narrowphase();
    var Utils2 = require_Utils();
    var OverlapKeeper = require_OverlapKeeper();
    var IslandManager = require_IslandManager();
    var RotationalSpring = require_RotationalSpring();
    module2.exports = World;
    function World(options) {
      EventEmitter4.apply(this);
      options = options || {};
      this.springs = [];
      this.bodies = [];
      this.disabledBodyCollisionPairs = [];
      this.solver = options.solver || new GSSolver();
      this.narrowphase = new Narrowphase(this);
      this.islandManager = new IslandManager();
      this.gravity = vec2.fromValues(0, -9.78);
      if (options.gravity) {
        vec2.copy(this.gravity, options.gravity);
      }
      this.frictionGravity = vec2.length(this.gravity) || 10;
      this.useWorldGravityAsFrictionGravity = true;
      this.useFrictionGravityOnZeroGravity = true;
      this.broadphase = options.broadphase || new SAPBroadphase();
      this.broadphase.setWorld(this);
      this.constraints = [];
      this.defaultMaterial = new Material();
      this.defaultContactMaterial = new ContactMaterial(this.defaultMaterial, this.defaultMaterial);
      this.lastTimeStep = 1 / 60;
      this.applySpringForces = true;
      this.applyDamping = true;
      this.applyGravity = true;
      this.solveConstraints = true;
      this.contactMaterials = [];
      this.time = 0;
      this.accumulator = 0;
      this.stepping = false;
      this.bodiesToBeRemoved = [];
      this.islandSplit = typeof options.islandSplit !== "undefined" ? !!options.islandSplit : true;
      this.emitImpactEvent = true;
      this._constraintIdCounter = 0;
      this._bodyIdCounter = 0;
      this.postStepEvent = {
        type: "postStep"
      };
      this.addBodyEvent = {
        type: "addBody",
        body: null
      };
      this.removeBodyEvent = {
        type: "removeBody",
        body: null
      };
      this.addSpringEvent = {
        type: "addSpring",
        spring: null
      };
      this.impactEvent = {
        type: "impact",
        bodyA: null,
        bodyB: null,
        shapeA: null,
        shapeB: null,
        contactEquation: null
      };
      this.postBroadphaseEvent = {
        type: "postBroadphase",
        pairs: null
      };
      this.sleepMode = World.NO_SLEEPING;
      this.beginContactEvent = {
        type: "beginContact",
        shapeA: null,
        shapeB: null,
        bodyA: null,
        bodyB: null,
        contactEquations: []
      };
      this.endContactEvent = {
        type: "endContact",
        shapeA: null,
        shapeB: null,
        bodyA: null,
        bodyB: null
      };
      this.preSolveEvent = {
        type: "preSolve",
        contactEquations: null,
        frictionEquations: null
      };
      this.overlappingShapesLastState = { keys: [] };
      this.overlappingShapesCurrentState = { keys: [] };
      this.overlapKeeper = new OverlapKeeper();
    }
    World.prototype = new Object(EventEmitter4.prototype);
    World.prototype.constructor = World;
    World.NO_SLEEPING = 1;
    World.BODY_SLEEPING = 2;
    World.ISLAND_SLEEPING = 4;
    World.prototype.addConstraint = function(constraint) {
      this.constraints.push(constraint);
    };
    World.prototype.addContactMaterial = function(contactMaterial) {
      this.contactMaterials.push(contactMaterial);
    };
    World.prototype.removeContactMaterial = function(cm) {
      var idx = this.contactMaterials.indexOf(cm);
      if (idx !== -1) {
        Utils2.splice(this.contactMaterials, idx, 1);
      }
    };
    World.prototype.getContactMaterial = function(materialA, materialB) {
      var cmats = this.contactMaterials;
      for (var i = 0, N = cmats.length; i !== N; i++) {
        var cm = cmats[i];
        if (cm.materialA.id === materialA.id && cm.materialB.id === materialB.id || cm.materialA.id === materialB.id && cm.materialB.id === materialA.id) {
          return cm;
        }
      }
      return false;
    };
    World.prototype.removeConstraint = function(constraint) {
      var idx = this.constraints.indexOf(constraint);
      if (idx !== -1) {
        Utils2.splice(this.constraints, idx, 1);
      }
    };
    var step_r = vec2.create();
    var step_runit = vec2.create();
    var step_u = vec2.create();
    var step_f = vec2.create();
    var step_fhMinv = vec2.create();
    var step_velodt = vec2.create();
    var step_mg = vec2.create();
    var xiw = vec2.fromValues(0, 0);
    var xjw = vec2.fromValues(0, 0);
    var zero = vec2.fromValues(0, 0);
    var interpvelo = vec2.fromValues(0, 0);
    World.prototype.step = function(dt, timeSinceLastCalled, maxSubSteps) {
      maxSubSteps = maxSubSteps || 10;
      timeSinceLastCalled = timeSinceLastCalled || 0;
      if (timeSinceLastCalled === 0) {
        this.internalStep(dt);
        this.time += dt;
      } else {
        this.accumulator += timeSinceLastCalled;
        var substeps = 0;
        while (this.accumulator >= dt && substeps < maxSubSteps) {
          this.internalStep(dt);
          this.time += dt;
          this.accumulator -= dt;
          substeps++;
        }
        var t = this.accumulator % dt / dt;
        for (var j = 0; j !== this.bodies.length; j++) {
          var b = this.bodies[j];
          vec2.lerp(b.interpolatedPosition, b.previousPosition, b.position, t);
          b.interpolatedAngle = b.previousAngle + t * (b.angle - b.previousAngle);
        }
      }
    };
    var endOverlaps = [];
    World.prototype.internalStep = function(dt) {
      this.stepping = true;
      var that = this, Nsprings = this.springs.length, springs = this.springs, bodies = this.bodies, g = this.gravity, solver = this.solver, Nbodies = this.bodies.length, broadphase = this.broadphase, np = this.narrowphase, constraints = this.constraints, t0, t1, fhMinv = step_fhMinv, velodt = step_velodt, mg = step_mg, scale = vec2.scale, add = vec2.add, rotate = vec2.rotate, islandManager = this.islandManager;
      this.overlapKeeper.tick();
      this.lastTimeStep = dt;
      if (this.useWorldGravityAsFrictionGravity) {
        var gravityLen = vec2.length(this.gravity);
        if (!(gravityLen === 0 && this.useFrictionGravityOnZeroGravity)) {
          this.frictionGravity = gravityLen;
        }
      }
      if (this.applyGravity) {
        for (var i = 0; i !== Nbodies; i++) {
          var b = bodies[i], fi = b.force;
          if (b.type !== Body.DYNAMIC || b.sleepState === Body.SLEEPING) {
            continue;
          }
          vec2.scale(mg, g, b.mass * b.gravityScale);
          add(fi, fi, mg);
        }
      }
      if (this.applySpringForces) {
        for (var i = 0; i !== Nsprings; i++) {
          var s = springs[i];
          s.applyForce();
        }
      }
      if (this.applyDamping) {
        for (var i = 0; i !== Nbodies; i++) {
          var b = bodies[i];
          if (b.type === Body.DYNAMIC) {
            b.applyDamping(dt);
          }
        }
      }
      var result = broadphase.getCollisionPairs(this);
      var ignoredPairs = this.disabledBodyCollisionPairs;
      for (var i = ignoredPairs.length - 2; i >= 0; i -= 2) {
        for (var j = result.length - 2; j >= 0; j -= 2) {
          if (ignoredPairs[i] === result[j] && ignoredPairs[i + 1] === result[j + 1] || ignoredPairs[i + 1] === result[j] && ignoredPairs[i] === result[j + 1]) {
            result.splice(j, 2);
          }
        }
      }
      var Nconstraints = constraints.length;
      for (i = 0; i !== Nconstraints; i++) {
        var c = constraints[i];
        if (!c.collideConnected) {
          for (var j = result.length - 2; j >= 0; j -= 2) {
            if (c.bodyA === result[j] && c.bodyB === result[j + 1] || c.bodyB === result[j] && c.bodyA === result[j + 1]) {
              result.splice(j, 2);
            }
          }
        }
      }
      this.postBroadphaseEvent.pairs = result;
      this.emit(this.postBroadphaseEvent);
      this.postBroadphaseEvent.pairs = null;
      np.reset(this);
      for (var i = 0, Nresults = result.length; i !== Nresults; i += 2) {
        var bi = result[i], bj = result[i + 1];
        for (var k = 0, Nshapesi = bi.shapes.length; k !== Nshapesi; k++) {
          var si = bi.shapes[k], xi = si.position, ai = si.angle;
          for (var l = 0, Nshapesj = bj.shapes.length; l !== Nshapesj; l++) {
            var sj = bj.shapes[l], xj = sj.position, aj = sj.angle;
            var cm = this.defaultContactMaterial;
            if (si.material && sj.material) {
              var tmp = this.getContactMaterial(si.material, sj.material);
              if (tmp) {
                cm = tmp;
              }
            }
            this.runNarrowphase(np, bi, si, xi, ai, bj, sj, xj, aj, cm, this.frictionGravity);
          }
        }
      }
      for (var i = 0; i !== Nbodies; i++) {
        var body = bodies[i];
        if (body._wakeUpAfterNarrowphase) {
          body.wakeUp();
          body._wakeUpAfterNarrowphase = false;
        }
      }
      if (this.has("endContact")) {
        this.overlapKeeper.getEndOverlaps(endOverlaps);
        var e = this.endContactEvent;
        var l = endOverlaps.length;
        while (l--) {
          var data = endOverlaps[l];
          e.shapeA = data.shapeA;
          e.shapeB = data.shapeB;
          e.bodyA = data.bodyA;
          e.bodyB = data.bodyB;
          this.emit(e);
        }
        endOverlaps.length = 0;
      }
      var preSolveEvent = this.preSolveEvent;
      preSolveEvent.contactEquations = np.contactEquations;
      preSolveEvent.frictionEquations = np.frictionEquations;
      this.emit(preSolveEvent);
      preSolveEvent.contactEquations = preSolveEvent.frictionEquations = null;
      var Nconstraints = constraints.length;
      for (i = 0; i !== Nconstraints; i++) {
        constraints[i].update();
      }
      if (np.contactEquations.length || np.frictionEquations.length || Nconstraints) {
        if (this.islandSplit) {
          islandManager.equations.length = 0;
          Utils2.appendArray(islandManager.equations, np.contactEquations);
          Utils2.appendArray(islandManager.equations, np.frictionEquations);
          for (i = 0; i !== Nconstraints; i++) {
            Utils2.appendArray(islandManager.equations, constraints[i].equations);
          }
          islandManager.split(this);
          for (var i = 0; i !== islandManager.islands.length; i++) {
            var island = islandManager.islands[i];
            if (island.equations.length) {
              solver.solveIsland(dt, island);
            }
          }
        } else {
          solver.addEquations(np.contactEquations);
          solver.addEquations(np.frictionEquations);
          for (i = 0; i !== Nconstraints; i++) {
            solver.addEquations(constraints[i].equations);
          }
          if (this.solveConstraints) {
            solver.solve(dt, this);
          }
          solver.removeAllEquations();
        }
      }
      for (var i = 0; i !== Nbodies; i++) {
        var body = bodies[i];
        body.integrate(dt);
      }
      for (var i = 0; i !== Nbodies; i++) {
        bodies[i].setZeroForce();
      }
      if (this.emitImpactEvent && this.has("impact")) {
        var ev = this.impactEvent;
        for (var i = 0; i !== np.contactEquations.length; i++) {
          var eq = np.contactEquations[i];
          if (eq.firstImpact) {
            ev.bodyA = eq.bodyA;
            ev.bodyB = eq.bodyB;
            ev.shapeA = eq.shapeA;
            ev.shapeB = eq.shapeB;
            ev.contactEquation = eq;
            this.emit(ev);
          }
        }
      }
      if (this.sleepMode === World.BODY_SLEEPING) {
        for (i = 0; i !== Nbodies; i++) {
          bodies[i].sleepTick(this.time, false, dt);
        }
      } else if (this.sleepMode === World.ISLAND_SLEEPING && this.islandSplit) {
        for (i = 0; i !== Nbodies; i++) {
          bodies[i].sleepTick(this.time, true, dt);
        }
        for (var i = 0; i < this.islandManager.islands.length; i++) {
          var island = this.islandManager.islands[i];
          if (island.wantsToSleep()) {
            island.sleep();
          }
        }
      }
      this.stepping = false;
      var bodiesToBeRemoved = this.bodiesToBeRemoved;
      for (var i = 0; i !== bodiesToBeRemoved.length; i++) {
        this.removeBody(bodiesToBeRemoved[i]);
      }
      bodiesToBeRemoved.length = 0;
      this.emit(this.postStepEvent);
    };
    World.prototype.runNarrowphase = function(np, bi, si, xi, ai, bj, sj, xj, aj, cm, glen) {
      if (!((si.collisionGroup & sj.collisionMask) !== 0 && (sj.collisionGroup & si.collisionMask) !== 0)) {
        return;
      }
      vec2.rotate(xiw, xi, bi.angle);
      vec2.rotate(xjw, xj, bj.angle);
      vec2.add(xiw, xiw, bi.position);
      vec2.add(xjw, xjw, bj.position);
      var aiw = ai + bi.angle;
      var ajw = aj + bj.angle;
      np.enableFriction = cm.friction > 0;
      np.frictionCoefficient = cm.friction;
      var reducedMass;
      if (bi.type === Body.STATIC || bi.type === Body.KINEMATIC) {
        reducedMass = bj.mass;
      } else if (bj.type === Body.STATIC || bj.type === Body.KINEMATIC) {
        reducedMass = bi.mass;
      } else {
        reducedMass = bi.mass * bj.mass / (bi.mass + bj.mass);
      }
      np.slipForce = cm.friction * glen * reducedMass;
      np.restitution = cm.restitution;
      np.surfaceVelocity = cm.surfaceVelocity;
      np.frictionStiffness = cm.frictionStiffness;
      np.frictionRelaxation = cm.frictionRelaxation;
      np.stiffness = cm.stiffness;
      np.relaxation = cm.relaxation;
      np.contactSkinSize = cm.contactSkinSize;
      np.enabledEquations = bi.collisionResponse && bj.collisionResponse && si.collisionResponse && sj.collisionResponse;
      var resolver = np[si.type | sj.type], numContacts = 0;
      if (resolver) {
        var sensor = si.sensor || sj.sensor;
        var numFrictionBefore = np.frictionEquations.length;
        if (si.type < sj.type) {
          numContacts = resolver.call(np, bi, si, xiw, aiw, bj, sj, xjw, ajw, sensor);
        } else {
          numContacts = resolver.call(np, bj, sj, xjw, ajw, bi, si, xiw, aiw, sensor);
        }
        var numFrictionEquations = np.frictionEquations.length - numFrictionBefore;
        if (numContacts) {
          if (bi.allowSleep && bi.type === Body.DYNAMIC && bi.sleepState === Body.SLEEPING && bj.sleepState === Body.AWAKE && bj.type !== Body.STATIC) {
            var speedSquaredB = vec2.squaredLength(bj.velocity) + Math.pow(bj.angularVelocity, 2);
            var speedLimitSquaredB = Math.pow(bj.sleepSpeedLimit, 2);
            if (speedSquaredB >= speedLimitSquaredB * 2) {
              bi._wakeUpAfterNarrowphase = true;
            }
          }
          if (bj.allowSleep && bj.type === Body.DYNAMIC && bj.sleepState === Body.SLEEPING && bi.sleepState === Body.AWAKE && bi.type !== Body.STATIC) {
            var speedSquaredA = vec2.squaredLength(bi.velocity) + Math.pow(bi.angularVelocity, 2);
            var speedLimitSquaredA = Math.pow(bi.sleepSpeedLimit, 2);
            if (speedSquaredA >= speedLimitSquaredA * 2) {
              bj._wakeUpAfterNarrowphase = true;
            }
          }
          this.overlapKeeper.setOverlapping(bi, si, bj, sj);
          if (this.has("beginContact") && this.overlapKeeper.isNewOverlap(si, sj)) {
            var e = this.beginContactEvent;
            e.shapeA = si;
            e.shapeB = sj;
            e.bodyA = bi;
            e.bodyB = bj;
            e.contactEquations.length = 0;
            if (typeof numContacts === "number") {
              for (var i = np.contactEquations.length - numContacts; i < np.contactEquations.length; i++) {
                e.contactEquations.push(np.contactEquations[i]);
              }
            }
            this.emit(e);
          }
          if (typeof numContacts === "number" && numFrictionEquations > 1) {
            for (var i = np.frictionEquations.length - numFrictionEquations; i < np.frictionEquations.length; i++) {
              var f = np.frictionEquations[i];
              f.setSlipForce(f.getSlipForce() / numFrictionEquations);
            }
          }
        }
      }
    };
    World.prototype.addSpring = function(spring) {
      this.springs.push(spring);
      var evt = this.addSpringEvent;
      evt.spring = spring;
      this.emit(evt);
      evt.spring = null;
    };
    World.prototype.removeSpring = function(spring) {
      var idx = this.springs.indexOf(spring);
      if (idx !== -1) {
        Utils2.splice(this.springs, idx, 1);
      }
    };
    World.prototype.addBody = function(body) {
      if (this.bodies.indexOf(body) === -1) {
        this.bodies.push(body);
        body.world = this;
        var evt = this.addBodyEvent;
        evt.body = body;
        this.emit(evt);
        evt.body = null;
      }
    };
    World.prototype.removeBody = function(body) {
      if (this.stepping) {
        this.bodiesToBeRemoved.push(body);
      } else {
        body.world = null;
        var idx = this.bodies.indexOf(body);
        if (idx !== -1) {
          Utils2.splice(this.bodies, idx, 1);
          this.removeBodyEvent.body = body;
          body.resetConstraintVelocity();
          this.emit(this.removeBodyEvent);
          this.removeBodyEvent.body = null;
        }
      }
    };
    World.prototype.getBodyById = function(id) {
      var bodies = this.bodies;
      for (var i = 0; i < bodies.length; i++) {
        var b = bodies[i];
        if (b.id === id) {
          return b;
        }
      }
      return false;
    };
    World.prototype.disableBodyCollision = function(bodyA, bodyB) {
      this.disabledBodyCollisionPairs.push(bodyA, bodyB);
    };
    World.prototype.enableBodyCollision = function(bodyA, bodyB) {
      var pairs = this.disabledBodyCollisionPairs;
      for (var i = 0; i < pairs.length; i += 2) {
        if (pairs[i] === bodyA && pairs[i + 1] === bodyB || pairs[i + 1] === bodyA && pairs[i] === bodyB) {
          pairs.splice(i, 2);
          return;
        }
      }
    };
    World.prototype.clear = function() {
      this.time = 0;
      if (this.solver && this.solver.equations.length) {
        this.solver.removeAllEquations();
      }
      var cs = this.constraints;
      for (var i = cs.length - 1; i >= 0; i--) {
        this.removeConstraint(cs[i]);
      }
      var bodies = this.bodies;
      for (var i = bodies.length - 1; i >= 0; i--) {
        this.removeBody(bodies[i]);
      }
      var springs = this.springs;
      for (var i = springs.length - 1; i >= 0; i--) {
        this.removeSpring(springs[i]);
      }
      var cms = this.contactMaterials;
      for (var i = cms.length - 1; i >= 0; i--) {
        this.removeContactMaterial(cms[i]);
      }
      World.apply(this);
    };
    var hitTest_tmp1 = vec2.create();
    var hitTest_zero = vec2.fromValues(0, 0);
    var hitTest_tmp2 = vec2.fromValues(0, 0);
    World.prototype.hitTest = function(worldPoint, bodies, precision) {
      precision = precision || 0;
      var pb = new Body({ position: worldPoint }), ps = new Particle(), px = worldPoint, pa = 0, x = hitTest_tmp1, zero2 = hitTest_zero, tmp = hitTest_tmp2;
      pb.addShape(ps);
      var n = this.narrowphase, result = [];
      for (var i = 0, N = bodies.length; i !== N; i++) {
        var b = bodies[i];
        for (var j = 0, NS = b.shapes.length; j !== NS; j++) {
          var s = b.shapes[j];
          vec2.rotate(x, s.position, b.angle);
          vec2.add(x, x, b.position);
          var a = s.angle + b.angle;
          if (s instanceof Circle && n.circleParticle(b, s, x, a, pb, ps, px, pa, true) || s instanceof Convex && n.particleConvex(pb, ps, px, pa, b, s, x, a, true) || s instanceof Plane && n.particlePlane(pb, ps, px, pa, b, s, x, a, true) || s instanceof Capsule && n.particleCapsule(pb, ps, px, pa, b, s, x, a, true) || s instanceof Particle && vec2.squaredLength(vec2.sub(tmp, x, worldPoint)) < precision * precision) {
            result.push(b);
          }
        }
      }
      return result;
    };
    World.prototype.setGlobalStiffness = function(stiffness) {
      var constraints = this.constraints;
      for (var i = 0; i !== constraints.length; i++) {
        var c = constraints[i];
        for (var j = 0; j !== c.equations.length; j++) {
          var eq = c.equations[j];
          eq.stiffness = stiffness;
          eq.needsUpdate = true;
        }
      }
      var contactMaterials = this.contactMaterials;
      for (var i = 0; i !== contactMaterials.length; i++) {
        var c = contactMaterials[i];
        c.stiffness = c.frictionStiffness = stiffness;
      }
      var c = this.defaultContactMaterial;
      c.stiffness = c.frictionStiffness = stiffness;
    };
    World.prototype.setGlobalRelaxation = function(relaxation) {
      for (var i = 0; i !== this.constraints.length; i++) {
        var c = this.constraints[i];
        for (var j = 0; j !== c.equations.length; j++) {
          var eq = c.equations[j];
          eq.relaxation = relaxation;
          eq.needsUpdate = true;
        }
      }
      for (var i = 0; i !== this.contactMaterials.length; i++) {
        var c = this.contactMaterials[i];
        c.relaxation = c.frictionRelaxation = relaxation;
      }
      var c = this.defaultContactMaterial;
      c.relaxation = c.frictionRelaxation = relaxation;
    };
    var tmpAABB = new AABB();
    var tmpArray = [];
    World.prototype.raycast = function(result, ray) {
      ray.getAABB(tmpAABB);
      this.broadphase.aabbQuery(this, tmpAABB, tmpArray);
      ray.intersectBodies(result, tmpArray);
      tmpArray.length = 0;
      return result.hasHit();
    };
  }
});

// node_modules/p2/src/p2.js
var require_p2 = __commonJS({
  "node_modules/p2/src/p2.js"(exports, module2) {
    var p22 = module2.exports = {
      AABB: require_AABB(),
      AngleLockEquation: require_AngleLockEquation(),
      Body: require_Body(),
      Broadphase: require_Broadphase(),
      Capsule: require_Capsule(),
      Circle: require_Circle(),
      Constraint: require_Constraint(),
      ContactEquation: require_ContactEquation(),
      ContactEquationPool: require_ContactEquationPool(),
      ContactMaterial: require_ContactMaterial(),
      Convex: require_Convex(),
      DistanceConstraint: require_DistanceConstraint(),
      Equation: require_Equation(),
      EventEmitter: require_EventEmitter(),
      FrictionEquation: require_FrictionEquation(),
      FrictionEquationPool: require_FrictionEquationPool(),
      GearConstraint: require_GearConstraint(),
      GSSolver: require_GSSolver(),
      Heightfield: require_Heightfield(),
      Line: require_Line2(),
      LockConstraint: require_LockConstraint(),
      Material: require_Material(),
      Narrowphase: require_Narrowphase(),
      NaiveBroadphase: require_NaiveBroadphase(),
      Particle: require_Particle(),
      Plane: require_Plane(),
      Pool: require_Pool(),
      RevoluteConstraint: require_RevoluteConstraint(),
      PrismaticConstraint: require_PrismaticConstraint(),
      Ray: require_Ray(),
      RaycastResult: require_RaycastResult(),
      Box: require_Box(),
      RotationalVelocityEquation: require_RotationalVelocityEquation(),
      SAPBroadphase: require_SAPBroadphase(),
      Shape: require_Shape(),
      Solver: require_Solver(),
      Spring: require_Spring(),
      TopDownVehicle: require_TopDownVehicle(),
      LinearSpring: require_LinearSpring(),
      RotationalSpring: require_RotationalSpring(),
      Utils: require_Utils(),
      World: require_World(),
      vec2: require_vec2(),
      version: require_package().version
    };
    Object.defineProperty(p22, "Rectangle", {
      get: function() {
        console.warn("The Rectangle class has been renamed to Box.");
        return this.Box;
      }
    });
  }
});

// node_modules/cannon/build/cannon.js
var require_cannon = __commonJS({
  "node_modules/cannon/build/cannon.js"(exports, module2) {
    !function(e) {
      if (typeof exports == "object" && typeof module2 != "undefined")
        module2.exports = e();
      else if (typeof define == "function" && false)
        define([], e);
      else {
        var f;
        typeof window != "undefined" ? f = window : typeof global != "undefined" ? f = global : typeof self != "undefined" && (f = self), f.CANNON = e();
      }
    }(function() {
      var define2, module3, exports2;
      return function e(t, n, r) {
        function s(o2, u) {
          if (!n[o2]) {
            if (!t[o2]) {
              var a = typeof require == "function" && require;
              if (!u && a)
                return a(o2, true);
              if (i)
                return i(o2, true);
              throw new Error("Cannot find module '" + o2 + "'");
            }
            var f = n[o2] = { exports: {} };
            t[o2][0].call(f.exports, function(e2) {
              var n2 = t[o2][1][e2];
              return s(n2 ? n2 : e2);
            }, f, f.exports, e, t, n, r);
          }
          return n[o2].exports;
        }
        var i = typeof require == "function" && require;
        for (var o = 0; o < r.length; o++)
          s(r[o]);
        return s;
      }({ 1: [function(_dereq_, module4, exports3) {
        module4.exports = {
          "name": "cannon",
          "version": "0.6.2",
          "description": "A lightweight 3D physics engine written in JavaScript.",
          "homepage": "https://github.com/schteppe/cannon.js",
          "author": "Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",
          "keywords": [
            "cannon.js",
            "cannon",
            "physics",
            "engine",
            "3d"
          ],
          "main": "./build/cannon.js",
          "engines": {
            "node": "*"
          },
          "repository": {
            "type": "git",
            "url": "https://github.com/schteppe/cannon.js.git"
          },
          "bugs": {
            "url": "https://github.com/schteppe/cannon.js/issues"
          },
          "licenses": [
            {
              "type": "MIT"
            }
          ],
          "devDependencies": {
            "jshint": "latest",
            "uglify-js": "latest",
            "nodeunit": "^0.9.0",
            "grunt": "~0.4.0",
            "grunt-contrib-jshint": "~0.1.1",
            "grunt-contrib-nodeunit": "^0.4.1",
            "grunt-contrib-concat": "~0.1.3",
            "grunt-contrib-uglify": "^0.5.1",
            "grunt-browserify": "^2.1.4",
            "grunt-contrib-yuidoc": "^0.5.2",
            "browserify": "*"
          },
          "dependencies": {}
        };
      }, {}], 2: [function(_dereq_, module4, exports3) {
        module4.exports = {
          version: _dereq_("../package.json").version,
          AABB: _dereq_("./collision/AABB"),
          ArrayCollisionMatrix: _dereq_("./collision/ArrayCollisionMatrix"),
          Body: _dereq_("./objects/Body"),
          Box: _dereq_("./shapes/Box"),
          Broadphase: _dereq_("./collision/Broadphase"),
          Constraint: _dereq_("./constraints/Constraint"),
          ContactEquation: _dereq_("./equations/ContactEquation"),
          Narrowphase: _dereq_("./world/Narrowphase"),
          ConeTwistConstraint: _dereq_("./constraints/ConeTwistConstraint"),
          ContactMaterial: _dereq_("./material/ContactMaterial"),
          ConvexPolyhedron: _dereq_("./shapes/ConvexPolyhedron"),
          Cylinder: _dereq_("./shapes/Cylinder"),
          DistanceConstraint: _dereq_("./constraints/DistanceConstraint"),
          Equation: _dereq_("./equations/Equation"),
          EventTarget: _dereq_("./utils/EventTarget"),
          FrictionEquation: _dereq_("./equations/FrictionEquation"),
          GSSolver: _dereq_("./solver/GSSolver"),
          GridBroadphase: _dereq_("./collision/GridBroadphase"),
          Heightfield: _dereq_("./shapes/Heightfield"),
          HingeConstraint: _dereq_("./constraints/HingeConstraint"),
          LockConstraint: _dereq_("./constraints/LockConstraint"),
          Mat3: _dereq_("./math/Mat3"),
          Material: _dereq_("./material/Material"),
          NaiveBroadphase: _dereq_("./collision/NaiveBroadphase"),
          ObjectCollisionMatrix: _dereq_("./collision/ObjectCollisionMatrix"),
          Pool: _dereq_("./utils/Pool"),
          Particle: _dereq_("./shapes/Particle"),
          Plane: _dereq_("./shapes/Plane"),
          PointToPointConstraint: _dereq_("./constraints/PointToPointConstraint"),
          Quaternion: _dereq_("./math/Quaternion"),
          Ray: _dereq_("./collision/Ray"),
          RaycastVehicle: _dereq_("./objects/RaycastVehicle"),
          RaycastResult: _dereq_("./collision/RaycastResult"),
          RigidVehicle: _dereq_("./objects/RigidVehicle"),
          RotationalEquation: _dereq_("./equations/RotationalEquation"),
          RotationalMotorEquation: _dereq_("./equations/RotationalMotorEquation"),
          SAPBroadphase: _dereq_("./collision/SAPBroadphase"),
          SPHSystem: _dereq_("./objects/SPHSystem"),
          Shape: _dereq_("./shapes/Shape"),
          Solver: _dereq_("./solver/Solver"),
          Sphere: _dereq_("./shapes/Sphere"),
          SplitSolver: _dereq_("./solver/SplitSolver"),
          Spring: _dereq_("./objects/Spring"),
          Trimesh: _dereq_("./shapes/Trimesh"),
          Vec3: _dereq_("./math/Vec3"),
          Vec3Pool: _dereq_("./utils/Vec3Pool"),
          World: _dereq_("./world/World")
        };
      }, { "../package.json": 1, "./collision/AABB": 3, "./collision/ArrayCollisionMatrix": 4, "./collision/Broadphase": 5, "./collision/GridBroadphase": 6, "./collision/NaiveBroadphase": 7, "./collision/ObjectCollisionMatrix": 8, "./collision/Ray": 9, "./collision/RaycastResult": 10, "./collision/SAPBroadphase": 11, "./constraints/ConeTwistConstraint": 12, "./constraints/Constraint": 13, "./constraints/DistanceConstraint": 14, "./constraints/HingeConstraint": 15, "./constraints/LockConstraint": 16, "./constraints/PointToPointConstraint": 17, "./equations/ContactEquation": 19, "./equations/Equation": 20, "./equations/FrictionEquation": 21, "./equations/RotationalEquation": 22, "./equations/RotationalMotorEquation": 23, "./material/ContactMaterial": 24, "./material/Material": 25, "./math/Mat3": 27, "./math/Quaternion": 28, "./math/Vec3": 30, "./objects/Body": 31, "./objects/RaycastVehicle": 32, "./objects/RigidVehicle": 33, "./objects/SPHSystem": 34, "./objects/Spring": 35, "./shapes/Box": 37, "./shapes/ConvexPolyhedron": 38, "./shapes/Cylinder": 39, "./shapes/Heightfield": 40, "./shapes/Particle": 41, "./shapes/Plane": 42, "./shapes/Shape": 43, "./shapes/Sphere": 44, "./shapes/Trimesh": 45, "./solver/GSSolver": 46, "./solver/Solver": 47, "./solver/SplitSolver": 48, "./utils/EventTarget": 49, "./utils/Pool": 51, "./utils/Vec3Pool": 54, "./world/Narrowphase": 55, "./world/World": 56 }], 3: [function(_dereq_, module4, exports3) {
        var Vec3 = _dereq_("../math/Vec3");
        var Utils2 = _dereq_("../utils/Utils");
        module4.exports = AABB;
        function AABB(options) {
          options = options || {};
          this.lowerBound = new Vec3();
          if (options.lowerBound) {
            this.lowerBound.copy(options.lowerBound);
          }
          this.upperBound = new Vec3();
          if (options.upperBound) {
            this.upperBound.copy(options.upperBound);
          }
        }
        var tmp = new Vec3();
        AABB.prototype.setFromPoints = function(points, position, quaternion, skinSize) {
          var l = this.lowerBound, u = this.upperBound, q = quaternion;
          l.copy(points[0]);
          if (q) {
            q.vmult(l, l);
          }
          u.copy(l);
          for (var i = 1; i < points.length; i++) {
            var p = points[i];
            if (q) {
              q.vmult(p, tmp);
              p = tmp;
            }
            if (p.x > u.x) {
              u.x = p.x;
            }
            if (p.x < l.x) {
              l.x = p.x;
            }
            if (p.y > u.y) {
              u.y = p.y;
            }
            if (p.y < l.y) {
              l.y = p.y;
            }
            if (p.z > u.z) {
              u.z = p.z;
            }
            if (p.z < l.z) {
              l.z = p.z;
            }
          }
          if (position) {
            position.vadd(l, l);
            position.vadd(u, u);
          }
          if (skinSize) {
            l.x -= skinSize;
            l.y -= skinSize;
            l.z -= skinSize;
            u.x += skinSize;
            u.y += skinSize;
            u.z += skinSize;
          }
          return this;
        };
        AABB.prototype.copy = function(aabb) {
          this.lowerBound.copy(aabb.lowerBound);
          this.upperBound.copy(aabb.upperBound);
          return this;
        };
        AABB.prototype.clone = function() {
          return new AABB().copy(this);
        };
        AABB.prototype.extend = function(aabb) {
          var l = aabb.lowerBound.x;
          if (this.lowerBound.x > l) {
            this.lowerBound.x = l;
          }
          var u = aabb.upperBound.x;
          if (this.upperBound.x < u) {
            this.upperBound.x = u;
          }
          var l = aabb.lowerBound.y;
          if (this.lowerBound.y > l) {
            this.lowerBound.y = l;
          }
          var u = aabb.upperBound.y;
          if (this.upperBound.y < u) {
            this.upperBound.y = u;
          }
          var l = aabb.lowerBound.z;
          if (this.lowerBound.z > l) {
            this.lowerBound.z = l;
          }
          var u = aabb.upperBound.z;
          if (this.upperBound.z < u) {
            this.upperBound.z = u;
          }
        };
        AABB.prototype.overlaps = function(aabb) {
          var l1 = this.lowerBound, u1 = this.upperBound, l2 = aabb.lowerBound, u2 = aabb.upperBound;
          return (l2.x <= u1.x && u1.x <= u2.x || l1.x <= u2.x && u2.x <= u1.x) && (l2.y <= u1.y && u1.y <= u2.y || l1.y <= u2.y && u2.y <= u1.y) && (l2.z <= u1.z && u1.z <= u2.z || l1.z <= u2.z && u2.z <= u1.z);
        };
        AABB.prototype.contains = function(aabb) {
          var l1 = this.lowerBound, u1 = this.upperBound, l2 = aabb.lowerBound, u2 = aabb.upperBound;
          return l1.x <= l2.x && u1.x >= u2.x && (l1.y <= l2.y && u1.y >= u2.y) && (l1.z <= l2.z && u1.z >= u2.z);
        };
        AABB.prototype.getCorners = function(a, b, c, d, e, f, g, h) {
          var l = this.lowerBound, u = this.upperBound;
          a.copy(l);
          b.set(u.x, l.y, l.z);
          c.set(u.x, u.y, l.z);
          d.set(l.x, u.y, u.z);
          e.set(u.x, l.y, l.z);
          f.set(l.x, u.y, l.z);
          g.set(l.x, l.y, u.z);
          h.copy(u);
        };
        var transformIntoFrame_corners = [
          new Vec3(),
          new Vec3(),
          new Vec3(),
          new Vec3(),
          new Vec3(),
          new Vec3(),
          new Vec3(),
          new Vec3()
        ];
        AABB.prototype.toLocalFrame = function(frame, target) {
          var corners = transformIntoFrame_corners;
          var a = corners[0];
          var b = corners[1];
          var c = corners[2];
          var d = corners[3];
          var e = corners[4];
          var f = corners[5];
          var g = corners[6];
          var h = corners[7];
          this.getCorners(a, b, c, d, e, f, g, h);
          for (var i = 0; i !== 8; i++) {
            var corner = corners[i];
            frame.pointToLocal(corner, corner);
          }
          return target.setFromPoints(corners);
        };
        AABB.prototype.toWorldFrame = function(frame, target) {
          var corners = transformIntoFrame_corners;
          var a = corners[0];
          var b = corners[1];
          var c = corners[2];
          var d = corners[3];
          var e = corners[4];
          var f = corners[5];
          var g = corners[6];
          var h = corners[7];
          this.getCorners(a, b, c, d, e, f, g, h);
          for (var i = 0; i !== 8; i++) {
            var corner = corners[i];
            frame.pointToWorld(corner, corner);
          }
          return target.setFromPoints(corners);
        };
      }, { "../math/Vec3": 30, "../utils/Utils": 53 }], 4: [function(_dereq_, module4, exports3) {
        module4.exports = ArrayCollisionMatrix;
        function ArrayCollisionMatrix() {
          this.matrix = [];
        }
        ArrayCollisionMatrix.prototype.get = function(i, j) {
          i = i.index;
          j = j.index;
          if (j > i) {
            var temp = j;
            j = i;
            i = temp;
          }
          return this.matrix[(i * (i + 1) >> 1) + j - 1];
        };
        ArrayCollisionMatrix.prototype.set = function(i, j, value) {
          i = i.index;
          j = j.index;
          if (j > i) {
            var temp = j;
            j = i;
            i = temp;
          }
          this.matrix[(i * (i + 1) >> 1) + j - 1] = value ? 1 : 0;
        };
        ArrayCollisionMatrix.prototype.reset = function() {
          for (var i = 0, l = this.matrix.length; i !== l; i++) {
            this.matrix[i] = 0;
          }
        };
        ArrayCollisionMatrix.prototype.setNumObjects = function(n) {
          this.matrix.length = n * (n - 1) >> 1;
        };
      }, {}], 5: [function(_dereq_, module4, exports3) {
        var Body = _dereq_("../objects/Body");
        var Vec3 = _dereq_("../math/Vec3");
        var Quaternion2 = _dereq_("../math/Quaternion");
        var Shape = _dereq_("../shapes/Shape");
        var Plane = _dereq_("../shapes/Plane");
        module4.exports = Broadphase;
        function Broadphase() {
          this.world = null;
          this.useBoundingBoxes = false;
          this.dirty = true;
        }
        Broadphase.prototype.collisionPairs = function(world, p1, p22) {
          throw new Error("collisionPairs not implemented for this BroadPhase class!");
        };
        var Broadphase_needBroadphaseCollision_STATIC_OR_KINEMATIC = Body.STATIC | Body.KINEMATIC;
        Broadphase.prototype.needBroadphaseCollision = function(bodyA, bodyB) {
          if ((bodyA.collisionFilterGroup & bodyB.collisionFilterMask) === 0 || (bodyB.collisionFilterGroup & bodyA.collisionFilterMask) === 0) {
            return false;
          }
          if (((bodyA.type & Broadphase_needBroadphaseCollision_STATIC_OR_KINEMATIC) !== 0 || bodyA.sleepState === Body.SLEEPING) && ((bodyB.type & Broadphase_needBroadphaseCollision_STATIC_OR_KINEMATIC) !== 0 || bodyB.sleepState === Body.SLEEPING)) {
            return false;
          }
          return true;
        };
        Broadphase.prototype.intersectionTest = function(bodyA, bodyB, pairs1, pairs2) {
          if (this.useBoundingBoxes) {
            this.doBoundingBoxBroadphase(bodyA, bodyB, pairs1, pairs2);
          } else {
            this.doBoundingSphereBroadphase(bodyA, bodyB, pairs1, pairs2);
          }
        };
        var Broadphase_collisionPairs_r = new Vec3(), Broadphase_collisionPairs_normal = new Vec3(), Broadphase_collisionPairs_quat = new Quaternion2(), Broadphase_collisionPairs_relpos = new Vec3();
        Broadphase.prototype.doBoundingSphereBroadphase = function(bodyA, bodyB, pairs1, pairs2) {
          var r = Broadphase_collisionPairs_r;
          bodyB.position.vsub(bodyA.position, r);
          var boundingRadiusSum2 = Math.pow(bodyA.boundingRadius + bodyB.boundingRadius, 2);
          var norm2 = r.norm2();
          if (norm2 < boundingRadiusSum2) {
            pairs1.push(bodyA);
            pairs2.push(bodyB);
          }
        };
        Broadphase.prototype.doBoundingBoxBroadphase = function(bodyA, bodyB, pairs1, pairs2) {
          if (bodyA.aabbNeedsUpdate) {
            bodyA.computeAABB();
          }
          if (bodyB.aabbNeedsUpdate) {
            bodyB.computeAABB();
          }
          if (bodyA.aabb.overlaps(bodyB.aabb)) {
            pairs1.push(bodyA);
            pairs2.push(bodyB);
          }
        };
        var Broadphase_makePairsUnique_temp = { keys: [] }, Broadphase_makePairsUnique_p1 = [], Broadphase_makePairsUnique_p2 = [];
        Broadphase.prototype.makePairsUnique = function(pairs1, pairs2) {
          var t = Broadphase_makePairsUnique_temp, p1 = Broadphase_makePairsUnique_p1, p22 = Broadphase_makePairsUnique_p2, N = pairs1.length;
          for (var i = 0; i !== N; i++) {
            p1[i] = pairs1[i];
            p22[i] = pairs2[i];
          }
          pairs1.length = 0;
          pairs2.length = 0;
          for (var i = 0; i !== N; i++) {
            var id1 = p1[i].id, id2 = p22[i].id;
            var key = id1 < id2 ? id1 + "," + id2 : id2 + "," + id1;
            t[key] = i;
            t.keys.push(key);
          }
          for (var i = 0; i !== t.keys.length; i++) {
            var key = t.keys.pop(), pairIndex = t[key];
            pairs1.push(p1[pairIndex]);
            pairs2.push(p22[pairIndex]);
            delete t[key];
          }
        };
        Broadphase.prototype.setWorld = function(world) {
        };
        var bsc_dist = new Vec3();
        Broadphase.boundingSphereCheck = function(bodyA, bodyB) {
          var dist = bsc_dist;
          bodyA.position.vsub(bodyB.position, dist);
          return Math.pow(bodyA.shape.boundingSphereRadius + bodyB.shape.boundingSphereRadius, 2) > dist.norm2();
        };
        Broadphase.prototype.aabbQuery = function(world, aabb, result) {
          console.warn(".aabbQuery is not implemented in this Broadphase subclass.");
          return [];
        };
      }, { "../math/Quaternion": 28, "../math/Vec3": 30, "../objects/Body": 31, "../shapes/Plane": 42, "../shapes/Shape": 43 }], 6: [function(_dereq_, module4, exports3) {
        module4.exports = GridBroadphase;
        var Broadphase = _dereq_("./Broadphase");
        var Vec3 = _dereq_("../math/Vec3");
        var Shape = _dereq_("../shapes/Shape");
        function GridBroadphase(aabbMin, aabbMax, nx, ny, nz) {
          Broadphase.apply(this);
          this.nx = nx || 10;
          this.ny = ny || 10;
          this.nz = nz || 10;
          this.aabbMin = aabbMin || new Vec3(100, 100, 100);
          this.aabbMax = aabbMax || new Vec3(-100, -100, -100);
          var nbins = this.nx * this.ny * this.nz;
          if (nbins <= 0) {
            throw "GridBroadphase: Each dimension's n must be >0";
          }
          this.bins = [];
          this.binLengths = [];
          this.bins.length = nbins;
          this.binLengths.length = nbins;
          for (var i = 0; i < nbins; i++) {
            this.bins[i] = [];
            this.binLengths[i] = 0;
          }
        }
        GridBroadphase.prototype = new Broadphase();
        GridBroadphase.prototype.constructor = GridBroadphase;
        var GridBroadphase_collisionPairs_d = new Vec3();
        var GridBroadphase_collisionPairs_binPos = new Vec3();
        GridBroadphase.prototype.collisionPairs = function(world, pairs1, pairs2) {
          var N = world.numObjects(), bodies = world.bodies;
          var max = this.aabbMax, min = this.aabbMin, nx = this.nx, ny = this.ny, nz = this.nz;
          var xstep = ny * nz;
          var ystep = nz;
          var zstep = 1;
          var xmax = max.x, ymax = max.y, zmax = max.z, xmin = min.x, ymin = min.y, zmin = min.z;
          var xmult = nx / (xmax - xmin), ymult = ny / (ymax - ymin), zmult = nz / (zmax - zmin);
          var binsizeX = (xmax - xmin) / nx, binsizeY = (ymax - ymin) / ny, binsizeZ = (zmax - zmin) / nz;
          var binRadius = Math.sqrt(binsizeX * binsizeX + binsizeY * binsizeY + binsizeZ * binsizeZ) * 0.5;
          var types = Shape.types;
          var SPHERE = types.SPHERE, PLANE = types.PLANE, BOX = types.BOX, COMPOUND = types.COMPOUND, CONVEXPOLYHEDRON = types.CONVEXPOLYHEDRON;
          var bins = this.bins, binLengths = this.binLengths, Nbins = this.bins.length;
          for (var i = 0; i !== Nbins; i++) {
            binLengths[i] = 0;
          }
          var ceil = Math.ceil;
          var min = Math.min;
          var max = Math.max;
          function addBoxToBins(x0, y0, z0, x1, y1, z1, bi2) {
            var xoff0 = (x0 - xmin) * xmult | 0, yoff0 = (y0 - ymin) * ymult | 0, zoff0 = (z0 - zmin) * zmult | 0, xoff1 = ceil((x1 - xmin) * xmult), yoff1 = ceil((y1 - ymin) * ymult), zoff1 = ceil((z1 - zmin) * zmult);
            if (xoff0 < 0) {
              xoff0 = 0;
            } else if (xoff0 >= nx) {
              xoff0 = nx - 1;
            }
            if (yoff0 < 0) {
              yoff0 = 0;
            } else if (yoff0 >= ny) {
              yoff0 = ny - 1;
            }
            if (zoff0 < 0) {
              zoff0 = 0;
            } else if (zoff0 >= nz) {
              zoff0 = nz - 1;
            }
            if (xoff1 < 0) {
              xoff1 = 0;
            } else if (xoff1 >= nx) {
              xoff1 = nx - 1;
            }
            if (yoff1 < 0) {
              yoff1 = 0;
            } else if (yoff1 >= ny) {
              yoff1 = ny - 1;
            }
            if (zoff1 < 0) {
              zoff1 = 0;
            } else if (zoff1 >= nz) {
              zoff1 = nz - 1;
            }
            xoff0 *= xstep;
            yoff0 *= ystep;
            zoff0 *= zstep;
            xoff1 *= xstep;
            yoff1 *= ystep;
            zoff1 *= zstep;
            for (var xoff2 = xoff0; xoff2 <= xoff1; xoff2 += xstep) {
              for (var yoff2 = yoff0; yoff2 <= yoff1; yoff2 += ystep) {
                for (var zoff2 = zoff0; zoff2 <= zoff1; zoff2 += zstep) {
                  var idx2 = xoff2 + yoff2 + zoff2;
                  bins[idx2][binLengths[idx2]++] = bi2;
                }
              }
            }
          }
          for (var i = 0; i !== N; i++) {
            var bi = bodies[i];
            var si = bi.shape;
            switch (si.type) {
              case SPHERE:
                var x = bi.position.x, y = bi.position.y, z = bi.position.z;
                var r = si.radius;
                addBoxToBins(x - r, y - r, z - r, x + r, y + r, z + r, bi);
                break;
              case PLANE:
                if (si.worldNormalNeedsUpdate) {
                  si.computeWorldNormal(bi.quaternion);
                }
                var planeNormal = si.worldNormal;
                var xreset = xmin + binsizeX * 0.5 - bi.position.x, yreset = ymin + binsizeY * 0.5 - bi.position.y, zreset = zmin + binsizeZ * 0.5 - bi.position.z;
                var d = GridBroadphase_collisionPairs_d;
                d.set(xreset, yreset, zreset);
                for (var xi = 0, xoff = 0; xi !== nx; xi++, xoff += xstep, d.y = yreset, d.x += binsizeX) {
                  for (var yi = 0, yoff = 0; yi !== ny; yi++, yoff += ystep, d.z = zreset, d.y += binsizeY) {
                    for (var zi = 0, zoff = 0; zi !== nz; zi++, zoff += zstep, d.z += binsizeZ) {
                      if (d.dot(planeNormal) < binRadius) {
                        var idx = xoff + yoff + zoff;
                        bins[idx][binLengths[idx]++] = bi;
                      }
                    }
                  }
                }
                break;
              default:
                if (bi.aabbNeedsUpdate) {
                  bi.computeAABB();
                }
                addBoxToBins(bi.aabb.lowerBound.x, bi.aabb.lowerBound.y, bi.aabb.lowerBound.z, bi.aabb.upperBound.x, bi.aabb.upperBound.y, bi.aabb.upperBound.z, bi);
                break;
            }
          }
          for (var i = 0; i !== Nbins; i++) {
            var binLength = binLengths[i];
            if (binLength > 1) {
              var bin = bins[i];
              for (var xi = 0; xi !== binLength; xi++) {
                var bi = bin[xi];
                for (var yi = 0; yi !== xi; yi++) {
                  var bj = bin[yi];
                  if (this.needBroadphaseCollision(bi, bj)) {
                    this.intersectionTest(bi, bj, pairs1, pairs2);
                  }
                }
              }
            }
          }
          this.makePairsUnique(pairs1, pairs2);
        };
      }, { "../math/Vec3": 30, "../shapes/Shape": 43, "./Broadphase": 5 }], 7: [function(_dereq_, module4, exports3) {
        module4.exports = NaiveBroadphase;
        var Broadphase = _dereq_("./Broadphase");
        var AABB = _dereq_("./AABB");
        function NaiveBroadphase() {
          Broadphase.apply(this);
        }
        NaiveBroadphase.prototype = new Broadphase();
        NaiveBroadphase.prototype.constructor = NaiveBroadphase;
        NaiveBroadphase.prototype.collisionPairs = function(world, pairs1, pairs2) {
          var bodies = world.bodies, n = bodies.length, i, j, bi, bj;
          for (i = 0; i !== n; i++) {
            for (j = 0; j !== i; j++) {
              bi = bodies[i];
              bj = bodies[j];
              if (!this.needBroadphaseCollision(bi, bj)) {
                continue;
              }
              this.intersectionTest(bi, bj, pairs1, pairs2);
            }
          }
        };
        var tmpAABB = new AABB();
        NaiveBroadphase.prototype.aabbQuery = function(world, aabb, result) {
          result = result || [];
          for (var i = 0; i < world.bodies.length; i++) {
            var b = world.bodies[i];
            if (b.aabbNeedsUpdate) {
              b.computeAABB();
            }
            if (b.aabb.overlaps(aabb)) {
              result.push(b);
            }
          }
          return result;
        };
      }, { "./AABB": 3, "./Broadphase": 5 }], 8: [function(_dereq_, module4, exports3) {
        module4.exports = ObjectCollisionMatrix;
        function ObjectCollisionMatrix() {
          this.matrix = {};
        }
        ObjectCollisionMatrix.prototype.get = function(i, j) {
          i = i.id;
          j = j.id;
          if (j > i) {
            var temp = j;
            j = i;
            i = temp;
          }
          return i + "-" + j in this.matrix;
        };
        ObjectCollisionMatrix.prototype.set = function(i, j, value) {
          i = i.id;
          j = j.id;
          if (j > i) {
            var temp = j;
            j = i;
            i = temp;
          }
          if (value) {
            this.matrix[i + "-" + j] = true;
          } else {
            delete this.matrix[i + "-" + j];
          }
        };
        ObjectCollisionMatrix.prototype.reset = function() {
          this.matrix = {};
        };
        ObjectCollisionMatrix.prototype.setNumObjects = function(n) {
        };
      }, {}], 9: [function(_dereq_, module4, exports3) {
        module4.exports = Ray;
        var Vec3 = _dereq_("../math/Vec3");
        var Quaternion2 = _dereq_("../math/Quaternion");
        var Transform = _dereq_("../math/Transform");
        var ConvexPolyhedron = _dereq_("../shapes/ConvexPolyhedron");
        var Box = _dereq_("../shapes/Box");
        var RaycastResult = _dereq_("../collision/RaycastResult");
        var Shape = _dereq_("../shapes/Shape");
        var AABB = _dereq_("../collision/AABB");
        function Ray(from, to) {
          this.from = from ? from.clone() : new Vec3();
          this.to = to ? to.clone() : new Vec3();
          this._direction = new Vec3();
          this.precision = 1e-4;
          this.checkCollisionResponse = true;
          this.skipBackfaces = false;
          this.collisionFilterMask = -1;
          this.collisionFilterGroup = -1;
          this.mode = Ray.ANY;
          this.result = new RaycastResult();
          this.hasHit = false;
          this.callback = function(result) {
          };
        }
        Ray.prototype.constructor = Ray;
        Ray.CLOSEST = 1;
        Ray.ANY = 2;
        Ray.ALL = 4;
        var tmpAABB = new AABB();
        var tmpArray = [];
        Ray.prototype.intersectWorld = function(world, options) {
          this.mode = options.mode || Ray.ANY;
          this.result = options.result || new RaycastResult();
          this.skipBackfaces = !!options.skipBackfaces;
          this.collisionFilterMask = typeof options.collisionFilterMask !== "undefined" ? options.collisionFilterMask : -1;
          this.collisionFilterGroup = typeof options.collisionFilterGroup !== "undefined" ? options.collisionFilterGroup : -1;
          if (options.from) {
            this.from.copy(options.from);
          }
          if (options.to) {
            this.to.copy(options.to);
          }
          this.callback = options.callback || function() {
          };
          this.hasHit = false;
          this.result.reset();
          this._updateDirection();
          this.getAABB(tmpAABB);
          tmpArray.length = 0;
          world.broadphase.aabbQuery(world, tmpAABB, tmpArray);
          this.intersectBodies(tmpArray);
          return this.hasHit;
        };
        var v1 = new Vec3(), v2 = new Vec3();
        Ray.pointInTriangle = pointInTriangle;
        function pointInTriangle(p, a2, b2, c2) {
          c2.vsub(a2, v0);
          b2.vsub(a2, v1);
          p.vsub(a2, v2);
          var dot00 = v0.dot(v0);
          var dot01 = v0.dot(v1);
          var dot02 = v0.dot(v2);
          var dot11 = v1.dot(v1);
          var dot12 = v1.dot(v2);
          var u, v;
          return (u = dot11 * dot02 - dot01 * dot12) >= 0 && (v = dot00 * dot12 - dot01 * dot02) >= 0 && u + v < dot00 * dot11 - dot01 * dot01;
        }
        var intersectBody_xi = new Vec3();
        var intersectBody_qi = new Quaternion2();
        Ray.prototype.intersectBody = function(body, result) {
          if (result) {
            this.result = result;
            this._updateDirection();
          }
          var checkCollisionResponse = this.checkCollisionResponse;
          if (checkCollisionResponse && !body.collisionResponse) {
            return;
          }
          if ((this.collisionFilterGroup & body.collisionFilterMask) === 0 || (body.collisionFilterGroup & this.collisionFilterMask) === 0) {
            return;
          }
          var xi = intersectBody_xi;
          var qi = intersectBody_qi;
          for (var i = 0, N = body.shapes.length; i < N; i++) {
            var shape = body.shapes[i];
            if (checkCollisionResponse && !shape.collisionResponse) {
              continue;
            }
            body.quaternion.mult(body.shapeOrientations[i], qi);
            body.quaternion.vmult(body.shapeOffsets[i], xi);
            xi.vadd(body.position, xi);
            this.intersectShape(shape, qi, xi, body);
            if (this.result._shouldStop) {
              break;
            }
          }
        };
        Ray.prototype.intersectBodies = function(bodies, result) {
          if (result) {
            this.result = result;
            this._updateDirection();
          }
          for (var i = 0, l = bodies.length; !this.result._shouldStop && i < l; i++) {
            this.intersectBody(bodies[i]);
          }
        };
        Ray.prototype._updateDirection = function() {
          this.to.vsub(this.from, this._direction);
          this._direction.normalize();
        };
        Ray.prototype.intersectShape = function(shape, quat, position, body) {
          var from = this.from;
          var distance = distanceFromIntersection(from, this._direction, position);
          if (distance > shape.boundingSphereRadius) {
            return;
          }
          var intersectMethod = this[shape.type];
          if (intersectMethod) {
            intersectMethod.call(this, shape, quat, position, body);
          }
        };
        var vector = new Vec3();
        var normal = new Vec3();
        var intersectPoint = new Vec3();
        var a = new Vec3();
        var b = new Vec3();
        var c = new Vec3();
        var d = new Vec3();
        var tmpRaycastResult = new RaycastResult();
        Ray.prototype.intersectBox = function(shape, quat, position, body) {
          return this.intersectConvex(shape.convexPolyhedronRepresentation, quat, position, body);
        };
        Ray.prototype[Shape.types.BOX] = Ray.prototype.intersectBox;
        Ray.prototype.intersectPlane = function(shape, quat, position, body) {
          var from = this.from;
          var to = this.to;
          var direction = this._direction;
          var worldNormal = new Vec3(0, 0, 1);
          quat.vmult(worldNormal, worldNormal);
          var len = new Vec3();
          from.vsub(position, len);
          var planeToFrom = len.dot(worldNormal);
          to.vsub(position, len);
          var planeToTo = len.dot(worldNormal);
          if (planeToFrom * planeToTo > 0) {
            return;
          }
          if (from.distanceTo(to) < planeToFrom) {
            return;
          }
          var n_dot_dir = worldNormal.dot(direction);
          if (Math.abs(n_dot_dir) < this.precision) {
            return;
          }
          var planePointToFrom = new Vec3();
          var dir_scaled_with_t = new Vec3();
          var hitPointWorld = new Vec3();
          from.vsub(position, planePointToFrom);
          var t = -worldNormal.dot(planePointToFrom) / n_dot_dir;
          direction.scale(t, dir_scaled_with_t);
          from.vadd(dir_scaled_with_t, hitPointWorld);
          this.reportIntersection(worldNormal, hitPointWorld, shape, body, -1);
        };
        Ray.prototype[Shape.types.PLANE] = Ray.prototype.intersectPlane;
        Ray.prototype.getAABB = function(result) {
          var to = this.to;
          var from = this.from;
          result.lowerBound.x = Math.min(to.x, from.x);
          result.lowerBound.y = Math.min(to.y, from.y);
          result.lowerBound.z = Math.min(to.z, from.z);
          result.upperBound.x = Math.max(to.x, from.x);
          result.upperBound.y = Math.max(to.y, from.y);
          result.upperBound.z = Math.max(to.z, from.z);
        };
        var intersectConvexOptions = {
          faceList: [0]
        };
        Ray.prototype.intersectHeightfield = function(shape, quat, position, body) {
          var data = shape.data, w = shape.elementSize, worldPillarOffset = new Vec3();
          var localRay = new Ray(this.from, this.to);
          Transform.pointToLocalFrame(position, quat, localRay.from, localRay.from);
          Transform.pointToLocalFrame(position, quat, localRay.to, localRay.to);
          var index = [];
          var iMinX = null;
          var iMinY = null;
          var iMaxX = null;
          var iMaxY = null;
          var inside = shape.getIndexOfPosition(localRay.from.x, localRay.from.y, index, false);
          if (inside) {
            iMinX = index[0];
            iMinY = index[1];
            iMaxX = index[0];
            iMaxY = index[1];
          }
          inside = shape.getIndexOfPosition(localRay.to.x, localRay.to.y, index, false);
          if (inside) {
            if (iMinX === null || index[0] < iMinX) {
              iMinX = index[0];
            }
            if (iMaxX === null || index[0] > iMaxX) {
              iMaxX = index[0];
            }
            if (iMinY === null || index[1] < iMinY) {
              iMinY = index[1];
            }
            if (iMaxY === null || index[1] > iMaxY) {
              iMaxY = index[1];
            }
          }
          if (iMinX === null) {
            return;
          }
          var minMax = [];
          shape.getRectMinMax(iMinX, iMinY, iMaxX, iMaxY, minMax);
          var min = minMax[0];
          var max = minMax[1];
          for (var i = iMinX; i <= iMaxX; i++) {
            for (var j = iMinY; j <= iMaxY; j++) {
              if (this.result._shouldStop) {
                return;
              }
              shape.getConvexTrianglePillar(i, j, false);
              Transform.pointToWorldFrame(position, quat, shape.pillarOffset, worldPillarOffset);
              this.intersectConvex(shape.pillarConvex, quat, worldPillarOffset, body, intersectConvexOptions);
              if (this.result._shouldStop) {
                return;
              }
              shape.getConvexTrianglePillar(i, j, true);
              Transform.pointToWorldFrame(position, quat, shape.pillarOffset, worldPillarOffset);
              this.intersectConvex(shape.pillarConvex, quat, worldPillarOffset, body, intersectConvexOptions);
            }
          }
        };
        Ray.prototype[Shape.types.HEIGHTFIELD] = Ray.prototype.intersectHeightfield;
        var Ray_intersectSphere_intersectionPoint = new Vec3();
        var Ray_intersectSphere_normal = new Vec3();
        Ray.prototype.intersectSphere = function(shape, quat, position, body) {
          var from = this.from, to = this.to, r = shape.radius;
          var a2 = Math.pow(to.x - from.x, 2) + Math.pow(to.y - from.y, 2) + Math.pow(to.z - from.z, 2);
          var b2 = 2 * ((to.x - from.x) * (from.x - position.x) + (to.y - from.y) * (from.y - position.y) + (to.z - from.z) * (from.z - position.z));
          var c2 = Math.pow(from.x - position.x, 2) + Math.pow(from.y - position.y, 2) + Math.pow(from.z - position.z, 2) - Math.pow(r, 2);
          var delta = Math.pow(b2, 2) - 4 * a2 * c2;
          var intersectionPoint = Ray_intersectSphere_intersectionPoint;
          var normal2 = Ray_intersectSphere_normal;
          if (delta < 0) {
            return;
          } else if (delta === 0) {
            from.lerp(to, delta, intersectionPoint);
            intersectionPoint.vsub(position, normal2);
            normal2.normalize();
            this.reportIntersection(normal2, intersectionPoint, shape, body, -1);
          } else {
            var d1 = (-b2 - Math.sqrt(delta)) / (2 * a2);
            var d2 = (-b2 + Math.sqrt(delta)) / (2 * a2);
            if (d1 >= 0 && d1 <= 1) {
              from.lerp(to, d1, intersectionPoint);
              intersectionPoint.vsub(position, normal2);
              normal2.normalize();
              this.reportIntersection(normal2, intersectionPoint, shape, body, -1);
            }
            if (this.result._shouldStop) {
              return;
            }
            if (d2 >= 0 && d2 <= 1) {
              from.lerp(to, d2, intersectionPoint);
              intersectionPoint.vsub(position, normal2);
              normal2.normalize();
              this.reportIntersection(normal2, intersectionPoint, shape, body, -1);
            }
          }
        };
        Ray.prototype[Shape.types.SPHERE] = Ray.prototype.intersectSphere;
        var intersectConvex_normal = new Vec3();
        var intersectConvex_minDistNormal = new Vec3();
        var intersectConvex_minDistIntersect = new Vec3();
        var intersectConvex_vector = new Vec3();
        Ray.prototype.intersectConvex = function intersectConvex(shape, quat, position, body, options) {
          var minDistNormal = intersectConvex_minDistNormal;
          var normal2 = intersectConvex_normal;
          var vector2 = intersectConvex_vector;
          var minDistIntersect = intersectConvex_minDistIntersect;
          var faceList = options && options.faceList || null;
          var faces = shape.faces, vertices = shape.vertices, normals = shape.faceNormals;
          var direction = this._direction;
          var from = this.from;
          var to = this.to;
          var fromToDistance = from.distanceTo(to);
          var minDist = -1;
          var Nfaces = faceList ? faceList.length : faces.length;
          var result = this.result;
          for (var j = 0; !result._shouldStop && j < Nfaces; j++) {
            var fi = faceList ? faceList[j] : j;
            var face = faces[fi];
            var faceNormal = normals[fi];
            var q = quat;
            var x = position;
            vector2.copy(vertices[face[0]]);
            q.vmult(vector2, vector2);
            vector2.vadd(x, vector2);
            vector2.vsub(from, vector2);
            q.vmult(faceNormal, normal2);
            var dot = direction.dot(normal2);
            if (Math.abs(dot) < this.precision) {
              continue;
            }
            var scalar = normal2.dot(vector2) / dot;
            if (scalar < 0) {
              continue;
            }
            direction.mult(scalar, intersectPoint);
            intersectPoint.vadd(from, intersectPoint);
            a.copy(vertices[face[0]]);
            q.vmult(a, a);
            x.vadd(a, a);
            for (var i = 1; !result._shouldStop && i < face.length - 1; i++) {
              b.copy(vertices[face[i]]);
              c.copy(vertices[face[i + 1]]);
              q.vmult(b, b);
              q.vmult(c, c);
              x.vadd(b, b);
              x.vadd(c, c);
              var distance = intersectPoint.distanceTo(from);
              if (!(pointInTriangle(intersectPoint, a, b, c) || pointInTriangle(intersectPoint, b, a, c)) || distance > fromToDistance) {
                continue;
              }
              this.reportIntersection(normal2, intersectPoint, shape, body, fi);
            }
          }
        };
        Ray.prototype[Shape.types.CONVEXPOLYHEDRON] = Ray.prototype.intersectConvex;
        var intersectTrimesh_normal = new Vec3();
        var intersectTrimesh_localDirection = new Vec3();
        var intersectTrimesh_localFrom = new Vec3();
        var intersectTrimesh_localTo = new Vec3();
        var intersectTrimesh_worldNormal = new Vec3();
        var intersectTrimesh_worldIntersectPoint = new Vec3();
        var intersectTrimesh_localAABB = new AABB();
        var intersectTrimesh_triangles = [];
        var intersectTrimesh_treeTransform = new Transform();
        Ray.prototype.intersectTrimesh = function intersectTrimesh(mesh, quat, position, body, options) {
          var normal2 = intersectTrimesh_normal;
          var triangles = intersectTrimesh_triangles;
          var treeTransform = intersectTrimesh_treeTransform;
          var minDistNormal = intersectConvex_minDistNormal;
          var vector2 = intersectConvex_vector;
          var minDistIntersect = intersectConvex_minDistIntersect;
          var localAABB = intersectTrimesh_localAABB;
          var localDirection = intersectTrimesh_localDirection;
          var localFrom = intersectTrimesh_localFrom;
          var localTo = intersectTrimesh_localTo;
          var worldIntersectPoint = intersectTrimesh_worldIntersectPoint;
          var worldNormal = intersectTrimesh_worldNormal;
          var faceList = options && options.faceList || null;
          var indices = mesh.indices, vertices = mesh.vertices, normals = mesh.faceNormals;
          var from = this.from;
          var to = this.to;
          var direction = this._direction;
          var minDist = -1;
          treeTransform.position.copy(position);
          treeTransform.quaternion.copy(quat);
          Transform.vectorToLocalFrame(position, quat, direction, localDirection);
          Transform.pointToLocalFrame(position, quat, from, localFrom);
          Transform.pointToLocalFrame(position, quat, to, localTo);
          var fromToDistanceSquared = localFrom.distanceSquared(localTo);
          mesh.tree.rayQuery(this, treeTransform, triangles);
          for (var i = 0, N = triangles.length; !this.result._shouldStop && i !== N; i++) {
            var trianglesIndex = triangles[i];
            mesh.getNormal(trianglesIndex, normal2);
            mesh.getVertex(indices[trianglesIndex * 3], a);
            a.vsub(localFrom, vector2);
            var dot = localDirection.dot(normal2);
            var scalar = normal2.dot(vector2) / dot;
            if (scalar < 0) {
              continue;
            }
            localDirection.scale(scalar, intersectPoint);
            intersectPoint.vadd(localFrom, intersectPoint);
            mesh.getVertex(indices[trianglesIndex * 3 + 1], b);
            mesh.getVertex(indices[trianglesIndex * 3 + 2], c);
            var squaredDistance = intersectPoint.distanceSquared(localFrom);
            if (!(pointInTriangle(intersectPoint, b, a, c) || pointInTriangle(intersectPoint, a, b, c)) || squaredDistance > fromToDistanceSquared) {
              continue;
            }
            Transform.vectorToWorldFrame(quat, normal2, worldNormal);
            Transform.pointToWorldFrame(position, quat, intersectPoint, worldIntersectPoint);
            this.reportIntersection(worldNormal, worldIntersectPoint, mesh, body, trianglesIndex);
          }
          triangles.length = 0;
        };
        Ray.prototype[Shape.types.TRIMESH] = Ray.prototype.intersectTrimesh;
        Ray.prototype.reportIntersection = function(normal2, hitPointWorld, shape, body, hitFaceIndex) {
          var from = this.from;
          var to = this.to;
          var distance = from.distanceTo(hitPointWorld);
          var result = this.result;
          if (this.skipBackfaces && normal2.dot(this._direction) > 0) {
            return;
          }
          result.hitFaceIndex = typeof hitFaceIndex !== "undefined" ? hitFaceIndex : -1;
          switch (this.mode) {
            case Ray.ALL:
              this.hasHit = true;
              result.set(from, to, normal2, hitPointWorld, shape, body, distance);
              result.hasHit = true;
              this.callback(result);
              break;
            case Ray.CLOSEST:
              if (distance < result.distance || !result.hasHit) {
                this.hasHit = true;
                result.hasHit = true;
                result.set(from, to, normal2, hitPointWorld, shape, body, distance);
              }
              break;
            case Ray.ANY:
              this.hasHit = true;
              result.hasHit = true;
              result.set(from, to, normal2, hitPointWorld, shape, body, distance);
              result._shouldStop = true;
              break;
          }
        };
        var v0 = new Vec3(), intersect = new Vec3();
        function distanceFromIntersection(from, direction, position) {
          position.vsub(from, v0);
          var dot = v0.dot(direction);
          direction.mult(dot, intersect);
          intersect.vadd(from, intersect);
          var distance = position.distanceTo(intersect);
          return distance;
        }
      }, { "../collision/AABB": 3, "../collision/RaycastResult": 10, "../math/Quaternion": 28, "../math/Transform": 29, "../math/Vec3": 30, "../shapes/Box": 37, "../shapes/ConvexPolyhedron": 38, "../shapes/Shape": 43 }], 10: [function(_dereq_, module4, exports3) {
        var Vec3 = _dereq_("../math/Vec3");
        module4.exports = RaycastResult;
        function RaycastResult() {
          this.rayFromWorld = new Vec3();
          this.rayToWorld = new Vec3();
          this.hitNormalWorld = new Vec3();
          this.hitPointWorld = new Vec3();
          this.hasHit = false;
          this.shape = null;
          this.body = null;
          this.hitFaceIndex = -1;
          this.distance = -1;
          this._shouldStop = false;
        }
        RaycastResult.prototype.reset = function() {
          this.rayFromWorld.setZero();
          this.rayToWorld.setZero();
          this.hitNormalWorld.setZero();
          this.hitPointWorld.setZero();
          this.hasHit = false;
          this.shape = null;
          this.body = null;
          this.hitFaceIndex = -1;
          this.distance = -1;
          this._shouldStop = false;
        };
        RaycastResult.prototype.abort = function() {
          this._shouldStop = true;
        };
        RaycastResult.prototype.set = function(rayFromWorld, rayToWorld, hitNormalWorld, hitPointWorld, shape, body, distance) {
          this.rayFromWorld.copy(rayFromWorld);
          this.rayToWorld.copy(rayToWorld);
          this.hitNormalWorld.copy(hitNormalWorld);
          this.hitPointWorld.copy(hitPointWorld);
          this.shape = shape;
          this.body = body;
          this.distance = distance;
        };
      }, { "../math/Vec3": 30 }], 11: [function(_dereq_, module4, exports3) {
        var Shape = _dereq_("../shapes/Shape");
        var Broadphase = _dereq_("../collision/Broadphase");
        module4.exports = SAPBroadphase;
        function SAPBroadphase(world) {
          Broadphase.apply(this);
          this.axisList = [];
          this.world = null;
          this.axisIndex = 0;
          var axisList = this.axisList;
          this._addBodyHandler = function(e) {
            axisList.push(e.body);
          };
          this._removeBodyHandler = function(e) {
            var idx = axisList.indexOf(e.body);
            if (idx !== -1) {
              axisList.splice(idx, 1);
            }
          };
          if (world) {
            this.setWorld(world);
          }
        }
        SAPBroadphase.prototype = new Broadphase();
        SAPBroadphase.prototype.setWorld = function(world) {
          this.axisList.length = 0;
          for (var i = 0; i < world.bodies.length; i++) {
            this.axisList.push(world.bodies[i]);
          }
          world.removeEventListener("addBody", this._addBodyHandler);
          world.removeEventListener("removeBody", this._removeBodyHandler);
          world.addEventListener("addBody", this._addBodyHandler);
          world.addEventListener("removeBody", this._removeBodyHandler);
          this.world = world;
          this.dirty = true;
        };
        SAPBroadphase.insertionSortX = function(a) {
          for (var i = 1, l = a.length; i < l; i++) {
            var v = a[i];
            for (var j = i - 1; j >= 0; j--) {
              if (a[j].aabb.lowerBound.x <= v.aabb.lowerBound.x) {
                break;
              }
              a[j + 1] = a[j];
            }
            a[j + 1] = v;
          }
          return a;
        };
        SAPBroadphase.insertionSortY = function(a) {
          for (var i = 1, l = a.length; i < l; i++) {
            var v = a[i];
            for (var j = i - 1; j >= 0; j--) {
              if (a[j].aabb.lowerBound.y <= v.aabb.lowerBound.y) {
                break;
              }
              a[j + 1] = a[j];
            }
            a[j + 1] = v;
          }
          return a;
        };
        SAPBroadphase.insertionSortZ = function(a) {
          for (var i = 1, l = a.length; i < l; i++) {
            var v = a[i];
            for (var j = i - 1; j >= 0; j--) {
              if (a[j].aabb.lowerBound.z <= v.aabb.lowerBound.z) {
                break;
              }
              a[j + 1] = a[j];
            }
            a[j + 1] = v;
          }
          return a;
        };
        SAPBroadphase.prototype.collisionPairs = function(world, p1, p22) {
          var bodies = this.axisList, N = bodies.length, axisIndex = this.axisIndex, i, j;
          if (this.dirty) {
            this.sortList();
            this.dirty = false;
          }
          for (i = 0; i !== N; i++) {
            var bi = bodies[i];
            for (j = i + 1; j < N; j++) {
              var bj = bodies[j];
              if (!this.needBroadphaseCollision(bi, bj)) {
                continue;
              }
              if (!SAPBroadphase.checkBounds(bi, bj, axisIndex)) {
                break;
              }
              this.intersectionTest(bi, bj, p1, p22);
            }
          }
        };
        SAPBroadphase.prototype.sortList = function() {
          var axisList = this.axisList;
          var axisIndex = this.axisIndex;
          var N = axisList.length;
          for (var i = 0; i !== N; i++) {
            var bi = axisList[i];
            if (bi.aabbNeedsUpdate) {
              bi.computeAABB();
            }
          }
          if (axisIndex === 0) {
            SAPBroadphase.insertionSortX(axisList);
          } else if (axisIndex === 1) {
            SAPBroadphase.insertionSortY(axisList);
          } else if (axisIndex === 2) {
            SAPBroadphase.insertionSortZ(axisList);
          }
        };
        SAPBroadphase.checkBounds = function(bi, bj, axisIndex) {
          var biPos;
          var bjPos;
          if (axisIndex === 0) {
            biPos = bi.position.x;
            bjPos = bj.position.x;
          } else if (axisIndex === 1) {
            biPos = bi.position.y;
            bjPos = bj.position.y;
          } else if (axisIndex === 2) {
            biPos = bi.position.z;
            bjPos = bj.position.z;
          }
          var ri = bi.boundingRadius, rj = bj.boundingRadius, boundA1 = biPos - ri, boundA2 = biPos + ri, boundB1 = bjPos - rj, boundB2 = bjPos + rj;
          return boundB1 < boundA2;
        };
        SAPBroadphase.prototype.autoDetectAxis = function() {
          var sumX = 0, sumX2 = 0, sumY = 0, sumY2 = 0, sumZ = 0, sumZ2 = 0, bodies = this.axisList, N = bodies.length, invN = 1 / N;
          for (var i = 0; i !== N; i++) {
            var b = bodies[i];
            var centerX = b.position.x;
            sumX += centerX;
            sumX2 += centerX * centerX;
            var centerY = b.position.y;
            sumY += centerY;
            sumY2 += centerY * centerY;
            var centerZ = b.position.z;
            sumZ += centerZ;
            sumZ2 += centerZ * centerZ;
          }
          var varianceX = sumX2 - sumX * sumX * invN, varianceY = sumY2 - sumY * sumY * invN, varianceZ = sumZ2 - sumZ * sumZ * invN;
          if (varianceX > varianceY) {
            if (varianceX > varianceZ) {
              this.axisIndex = 0;
            } else {
              this.axisIndex = 2;
            }
          } else if (varianceY > varianceZ) {
            this.axisIndex = 1;
          } else {
            this.axisIndex = 2;
          }
        };
        SAPBroadphase.prototype.aabbQuery = function(world, aabb, result) {
          result = result || [];
          if (this.dirty) {
            this.sortList();
            this.dirty = false;
          }
          var axisIndex = this.axisIndex, axis = "x";
          if (axisIndex === 1) {
            axis = "y";
          }
          if (axisIndex === 2) {
            axis = "z";
          }
          var axisList = this.axisList;
          var lower = aabb.lowerBound[axis];
          var upper = aabb.upperBound[axis];
          for (var i = 0; i < axisList.length; i++) {
            var b = axisList[i];
            if (b.aabbNeedsUpdate) {
              b.computeAABB();
            }
            if (b.aabb.overlaps(aabb)) {
              result.push(b);
            }
          }
          return result;
        };
      }, { "../collision/Broadphase": 5, "../shapes/Shape": 43 }], 12: [function(_dereq_, module4, exports3) {
        module4.exports = ConeTwistConstraint;
        var Constraint = _dereq_("./Constraint");
        var PointToPointConstraint = _dereq_("./PointToPointConstraint");
        var ConeEquation = _dereq_("../equations/ConeEquation");
        var RotationalEquation = _dereq_("../equations/RotationalEquation");
        var ContactEquation = _dereq_("../equations/ContactEquation");
        var Vec3 = _dereq_("../math/Vec3");
        function ConeTwistConstraint(bodyA, bodyB, options) {
          options = options || {};
          var maxForce = typeof options.maxForce !== "undefined" ? options.maxForce : 1e6;
          var pivotA = options.pivotA ? options.pivotA.clone() : new Vec3();
          var pivotB = options.pivotB ? options.pivotB.clone() : new Vec3();
          this.axisA = options.axisA ? options.axisA.clone() : new Vec3();
          this.axisB = options.axisB ? options.axisB.clone() : new Vec3();
          PointToPointConstraint.call(this, bodyA, pivotA, bodyB, pivotB, maxForce);
          this.collideConnected = !!options.collideConnected;
          this.angle = typeof options.angle !== "undefined" ? options.angle : 0;
          var c = this.coneEquation = new ConeEquation(bodyA, bodyB, options);
          var t = this.twistEquation = new RotationalEquation(bodyA, bodyB, options);
          this.twistAngle = typeof options.twistAngle !== "undefined" ? options.twistAngle : 0;
          c.maxForce = 0;
          c.minForce = -maxForce;
          t.maxForce = 0;
          t.minForce = -maxForce;
          this.equations.push(c, t);
        }
        ConeTwistConstraint.prototype = new PointToPointConstraint();
        ConeTwistConstraint.constructor = ConeTwistConstraint;
        var ConeTwistConstraint_update_tmpVec1 = new Vec3();
        var ConeTwistConstraint_update_tmpVec2 = new Vec3();
        ConeTwistConstraint.prototype.update = function() {
          var bodyA = this.bodyA, bodyB = this.bodyB, cone = this.coneEquation, twist = this.twistEquation;
          PointToPointConstraint.prototype.update.call(this);
          bodyA.vectorToWorldFrame(this.axisA, cone.axisA);
          bodyB.vectorToWorldFrame(this.axisB, cone.axisB);
          this.axisA.tangents(twist.axisA, twist.axisA);
          bodyA.vectorToWorldFrame(twist.axisA, twist.axisA);
          this.axisB.tangents(twist.axisB, twist.axisB);
          bodyB.vectorToWorldFrame(twist.axisB, twist.axisB);
          cone.angle = this.angle;
          twist.maxAngle = this.twistAngle;
        };
      }, { "../equations/ConeEquation": 18, "../equations/ContactEquation": 19, "../equations/RotationalEquation": 22, "../math/Vec3": 30, "./Constraint": 13, "./PointToPointConstraint": 17 }], 13: [function(_dereq_, module4, exports3) {
        module4.exports = Constraint;
        var Utils2 = _dereq_("../utils/Utils");
        function Constraint(bodyA, bodyB, options) {
          options = Utils2.defaults(options, {
            collideConnected: true,
            wakeUpBodies: true
          });
          this.equations = [];
          this.bodyA = bodyA;
          this.bodyB = bodyB;
          this.id = Constraint.idCounter++;
          this.collideConnected = options.collideConnected;
          if (options.wakeUpBodies) {
            if (bodyA) {
              bodyA.wakeUp();
            }
            if (bodyB) {
              bodyB.wakeUp();
            }
          }
        }
        Constraint.prototype.update = function() {
          throw new Error("method update() not implmemented in this Constraint subclass!");
        };
        Constraint.prototype.enable = function() {
          var eqs = this.equations;
          for (var i = 0; i < eqs.length; i++) {
            eqs[i].enabled = true;
          }
        };
        Constraint.prototype.disable = function() {
          var eqs = this.equations;
          for (var i = 0; i < eqs.length; i++) {
            eqs[i].enabled = false;
          }
        };
        Constraint.idCounter = 0;
      }, { "../utils/Utils": 53 }], 14: [function(_dereq_, module4, exports3) {
        module4.exports = DistanceConstraint;
        var Constraint = _dereq_("./Constraint");
        var ContactEquation = _dereq_("../equations/ContactEquation");
        function DistanceConstraint(bodyA, bodyB, distance, maxForce) {
          Constraint.call(this, bodyA, bodyB);
          if (typeof distance === "undefined") {
            distance = bodyA.position.distanceTo(bodyB.position);
          }
          if (typeof maxForce === "undefined") {
            maxForce = 1e6;
          }
          this.distance = distance;
          var eq = this.distanceEquation = new ContactEquation(bodyA, bodyB);
          this.equations.push(eq);
          eq.minForce = -maxForce;
          eq.maxForce = maxForce;
        }
        DistanceConstraint.prototype = new Constraint();
        DistanceConstraint.prototype.update = function() {
          var bodyA = this.bodyA;
          var bodyB = this.bodyB;
          var eq = this.distanceEquation;
          var halfDist = this.distance * 0.5;
          var normal = eq.ni;
          bodyB.position.vsub(bodyA.position, normal);
          normal.normalize();
          normal.mult(halfDist, eq.ri);
          normal.mult(-halfDist, eq.rj);
        };
      }, { "../equations/ContactEquation": 19, "./Constraint": 13 }], 15: [function(_dereq_, module4, exports3) {
        module4.exports = HingeConstraint;
        var Constraint = _dereq_("./Constraint");
        var PointToPointConstraint = _dereq_("./PointToPointConstraint");
        var RotationalEquation = _dereq_("../equations/RotationalEquation");
        var RotationalMotorEquation = _dereq_("../equations/RotationalMotorEquation");
        var ContactEquation = _dereq_("../equations/ContactEquation");
        var Vec3 = _dereq_("../math/Vec3");
        function HingeConstraint(bodyA, bodyB, options) {
          options = options || {};
          var maxForce = typeof options.maxForce !== "undefined" ? options.maxForce : 1e6;
          var pivotA = options.pivotA ? options.pivotA.clone() : new Vec3();
          var pivotB = options.pivotB ? options.pivotB.clone() : new Vec3();
          PointToPointConstraint.call(this, bodyA, pivotA, bodyB, pivotB, maxForce);
          var axisA = this.axisA = options.axisA ? options.axisA.clone() : new Vec3(1, 0, 0);
          axisA.normalize();
          var axisB = this.axisB = options.axisB ? options.axisB.clone() : new Vec3(1, 0, 0);
          axisB.normalize();
          var r1 = this.rotationalEquation1 = new RotationalEquation(bodyA, bodyB, options);
          var r2 = this.rotationalEquation2 = new RotationalEquation(bodyA, bodyB, options);
          var motor = this.motorEquation = new RotationalMotorEquation(bodyA, bodyB, maxForce);
          motor.enabled = false;
          this.equations.push(r1, r2, motor);
        }
        HingeConstraint.prototype = new PointToPointConstraint();
        HingeConstraint.constructor = HingeConstraint;
        HingeConstraint.prototype.enableMotor = function() {
          this.motorEquation.enabled = true;
        };
        HingeConstraint.prototype.disableMotor = function() {
          this.motorEquation.enabled = false;
        };
        HingeConstraint.prototype.setMotorSpeed = function(speed) {
          this.motorEquation.targetVelocity = speed;
        };
        HingeConstraint.prototype.setMotorMaxForce = function(maxForce) {
          this.motorEquation.maxForce = maxForce;
          this.motorEquation.minForce = -maxForce;
        };
        var HingeConstraint_update_tmpVec1 = new Vec3();
        var HingeConstraint_update_tmpVec2 = new Vec3();
        HingeConstraint.prototype.update = function() {
          var bodyA = this.bodyA, bodyB = this.bodyB, motor = this.motorEquation, r1 = this.rotationalEquation1, r2 = this.rotationalEquation2, worldAxisA = HingeConstraint_update_tmpVec1, worldAxisB = HingeConstraint_update_tmpVec2;
          var axisA = this.axisA;
          var axisB = this.axisB;
          PointToPointConstraint.prototype.update.call(this);
          bodyA.quaternion.vmult(axisA, worldAxisA);
          bodyB.quaternion.vmult(axisB, worldAxisB);
          worldAxisA.tangents(r1.axisA, r2.axisA);
          r1.axisB.copy(worldAxisB);
          r2.axisB.copy(worldAxisB);
          if (this.motorEquation.enabled) {
            bodyA.quaternion.vmult(this.axisA, motor.axisA);
            bodyB.quaternion.vmult(this.axisB, motor.axisB);
          }
        };
      }, { "../equations/ContactEquation": 19, "../equations/RotationalEquation": 22, "../equations/RotationalMotorEquation": 23, "../math/Vec3": 30, "./Constraint": 13, "./PointToPointConstraint": 17 }], 16: [function(_dereq_, module4, exports3) {
        module4.exports = LockConstraint;
        var Constraint = _dereq_("./Constraint");
        var PointToPointConstraint = _dereq_("./PointToPointConstraint");
        var RotationalEquation = _dereq_("../equations/RotationalEquation");
        var RotationalMotorEquation = _dereq_("../equations/RotationalMotorEquation");
        var ContactEquation = _dereq_("../equations/ContactEquation");
        var Vec3 = _dereq_("../math/Vec3");
        function LockConstraint(bodyA, bodyB, options) {
          options = options || {};
          var maxForce = typeof options.maxForce !== "undefined" ? options.maxForce : 1e6;
          var pivotA = new Vec3();
          var pivotB = new Vec3();
          var halfWay = new Vec3();
          bodyA.position.vadd(bodyB.position, halfWay);
          halfWay.scale(0.5, halfWay);
          bodyB.pointToLocalFrame(halfWay, pivotB);
          bodyA.pointToLocalFrame(halfWay, pivotA);
          PointToPointConstraint.call(this, bodyA, pivotA, bodyB, pivotB, maxForce);
          var r1 = this.rotationalEquation1 = new RotationalEquation(bodyA, bodyB, options);
          var r2 = this.rotationalEquation2 = new RotationalEquation(bodyA, bodyB, options);
          var r3 = this.rotationalEquation3 = new RotationalEquation(bodyA, bodyB, options);
          this.equations.push(r1, r2, r3);
        }
        LockConstraint.prototype = new PointToPointConstraint();
        LockConstraint.constructor = LockConstraint;
        var LockConstraint_update_tmpVec1 = new Vec3();
        var LockConstraint_update_tmpVec2 = new Vec3();
        LockConstraint.prototype.update = function() {
          var bodyA = this.bodyA, bodyB = this.bodyB, motor = this.motorEquation, r1 = this.rotationalEquation1, r2 = this.rotationalEquation2, r3 = this.rotationalEquation3, worldAxisA = LockConstraint_update_tmpVec1, worldAxisB = LockConstraint_update_tmpVec2;
          PointToPointConstraint.prototype.update.call(this);
          bodyA.vectorToWorldFrame(Vec3.UNIT_X, r1.axisA);
          bodyB.vectorToWorldFrame(Vec3.UNIT_Y, r1.axisB);
          bodyA.vectorToWorldFrame(Vec3.UNIT_Y, r2.axisA);
          bodyB.vectorToWorldFrame(Vec3.UNIT_Z, r2.axisB);
          bodyA.vectorToWorldFrame(Vec3.UNIT_Z, r3.axisA);
          bodyB.vectorToWorldFrame(Vec3.UNIT_X, r3.axisB);
        };
      }, { "../equations/ContactEquation": 19, "../equations/RotationalEquation": 22, "../equations/RotationalMotorEquation": 23, "../math/Vec3": 30, "./Constraint": 13, "./PointToPointConstraint": 17 }], 17: [function(_dereq_, module4, exports3) {
        module4.exports = PointToPointConstraint;
        var Constraint = _dereq_("./Constraint");
        var ContactEquation = _dereq_("../equations/ContactEquation");
        var Vec3 = _dereq_("../math/Vec3");
        function PointToPointConstraint(bodyA, pivotA, bodyB, pivotB, maxForce) {
          Constraint.call(this, bodyA, bodyB);
          maxForce = typeof maxForce !== "undefined" ? maxForce : 1e6;
          this.pivotA = pivotA ? pivotA.clone() : new Vec3();
          this.pivotB = pivotB ? pivotB.clone() : new Vec3();
          var x = this.equationX = new ContactEquation(bodyA, bodyB);
          var y = this.equationY = new ContactEquation(bodyA, bodyB);
          var z = this.equationZ = new ContactEquation(bodyA, bodyB);
          this.equations.push(x, y, z);
          x.minForce = y.minForce = z.minForce = -maxForce;
          x.maxForce = y.maxForce = z.maxForce = maxForce;
          x.ni.set(1, 0, 0);
          y.ni.set(0, 1, 0);
          z.ni.set(0, 0, 1);
        }
        PointToPointConstraint.prototype = new Constraint();
        PointToPointConstraint.prototype.update = function() {
          var bodyA = this.bodyA;
          var bodyB = this.bodyB;
          var x = this.equationX;
          var y = this.equationY;
          var z = this.equationZ;
          bodyA.quaternion.vmult(this.pivotA, x.ri);
          bodyB.quaternion.vmult(this.pivotB, x.rj);
          y.ri.copy(x.ri);
          y.rj.copy(x.rj);
          z.ri.copy(x.ri);
          z.rj.copy(x.rj);
        };
      }, { "../equations/ContactEquation": 19, "../math/Vec3": 30, "./Constraint": 13 }], 18: [function(_dereq_, module4, exports3) {
        module4.exports = ConeEquation;
        var Vec3 = _dereq_("../math/Vec3");
        var Mat3 = _dereq_("../math/Mat3");
        var Equation = _dereq_("./Equation");
        function ConeEquation(bodyA, bodyB, options) {
          options = options || {};
          var maxForce = typeof options.maxForce !== "undefined" ? options.maxForce : 1e6;
          Equation.call(this, bodyA, bodyB, -maxForce, maxForce);
          this.axisA = options.axisA ? options.axisA.clone() : new Vec3(1, 0, 0);
          this.axisB = options.axisB ? options.axisB.clone() : new Vec3(0, 1, 0);
          this.angle = typeof options.angle !== "undefined" ? options.angle : 0;
        }
        ConeEquation.prototype = new Equation();
        ConeEquation.prototype.constructor = ConeEquation;
        var tmpVec1 = new Vec3();
        var tmpVec2 = new Vec3();
        ConeEquation.prototype.computeB = function(h) {
          var a = this.a, b = this.b, ni = this.axisA, nj = this.axisB, nixnj = tmpVec1, njxni = tmpVec2, GA = this.jacobianElementA, GB = this.jacobianElementB;
          ni.cross(nj, nixnj);
          nj.cross(ni, njxni);
          GA.rotational.copy(njxni);
          GB.rotational.copy(nixnj);
          var g = Math.cos(this.angle) - ni.dot(nj), GW = this.computeGW(), GiMf = this.computeGiMf();
          var B = -g * a - GW * b - h * GiMf;
          return B;
        };
      }, { "../math/Mat3": 27, "../math/Vec3": 30, "./Equation": 20 }], 19: [function(_dereq_, module4, exports3) {
        module4.exports = ContactEquation;
        var Equation = _dereq_("./Equation");
        var Vec3 = _dereq_("../math/Vec3");
        var Mat3 = _dereq_("../math/Mat3");
        function ContactEquation(bodyA, bodyB, maxForce) {
          maxForce = typeof maxForce !== "undefined" ? maxForce : 1e6;
          Equation.call(this, bodyA, bodyB, 0, maxForce);
          this.restitution = 0;
          this.ri = new Vec3();
          this.rj = new Vec3();
          this.ni = new Vec3();
        }
        ContactEquation.prototype = new Equation();
        ContactEquation.prototype.constructor = ContactEquation;
        var ContactEquation_computeB_temp1 = new Vec3();
        var ContactEquation_computeB_temp2 = new Vec3();
        var ContactEquation_computeB_temp3 = new Vec3();
        ContactEquation.prototype.computeB = function(h) {
          var a = this.a, b = this.b, bi = this.bi, bj = this.bj, ri = this.ri, rj = this.rj, rixn = ContactEquation_computeB_temp1, rjxn = ContactEquation_computeB_temp2, vi = bi.velocity, wi = bi.angularVelocity, fi = bi.force, taui = bi.torque, vj = bj.velocity, wj = bj.angularVelocity, fj = bj.force, tauj = bj.torque, penetrationVec = ContactEquation_computeB_temp3, GA = this.jacobianElementA, GB = this.jacobianElementB, n = this.ni;
          ri.cross(n, rixn);
          rj.cross(n, rjxn);
          n.negate(GA.spatial);
          rixn.negate(GA.rotational);
          GB.spatial.copy(n);
          GB.rotational.copy(rjxn);
          penetrationVec.copy(bj.position);
          penetrationVec.vadd(rj, penetrationVec);
          penetrationVec.vsub(bi.position, penetrationVec);
          penetrationVec.vsub(ri, penetrationVec);
          var g = n.dot(penetrationVec);
          var ePlusOne = this.restitution + 1;
          var GW = ePlusOne * vj.dot(n) - ePlusOne * vi.dot(n) + wj.dot(rjxn) - wi.dot(rixn);
          var GiMf = this.computeGiMf();
          var B = -g * a - GW * b - h * GiMf;
          return B;
        };
        var ContactEquation_getImpactVelocityAlongNormal_vi = new Vec3();
        var ContactEquation_getImpactVelocityAlongNormal_vj = new Vec3();
        var ContactEquation_getImpactVelocityAlongNormal_xi = new Vec3();
        var ContactEquation_getImpactVelocityAlongNormal_xj = new Vec3();
        var ContactEquation_getImpactVelocityAlongNormal_relVel = new Vec3();
        ContactEquation.prototype.getImpactVelocityAlongNormal = function() {
          var vi = ContactEquation_getImpactVelocityAlongNormal_vi;
          var vj = ContactEquation_getImpactVelocityAlongNormal_vj;
          var xi = ContactEquation_getImpactVelocityAlongNormal_xi;
          var xj = ContactEquation_getImpactVelocityAlongNormal_xj;
          var relVel = ContactEquation_getImpactVelocityAlongNormal_relVel;
          this.bi.position.vadd(this.ri, xi);
          this.bj.position.vadd(this.rj, xj);
          this.bi.getVelocityAtWorldPoint(xi, vi);
          this.bj.getVelocityAtWorldPoint(xj, vj);
          vi.vsub(vj, relVel);
          return this.ni.dot(relVel);
        };
      }, { "../math/Mat3": 27, "../math/Vec3": 30, "./Equation": 20 }], 20: [function(_dereq_, module4, exports3) {
        module4.exports = Equation;
        var JacobianElement = _dereq_("../math/JacobianElement"), Vec3 = _dereq_("../math/Vec3");
        function Equation(bi, bj, minForce, maxForce) {
          this.id = Equation.id++;
          this.minForce = typeof minForce === "undefined" ? -1e6 : minForce;
          this.maxForce = typeof maxForce === "undefined" ? 1e6 : maxForce;
          this.bi = bi;
          this.bj = bj;
          this.a = 0;
          this.b = 0;
          this.eps = 0;
          this.jacobianElementA = new JacobianElement();
          this.jacobianElementB = new JacobianElement();
          this.enabled = true;
          this.setSpookParams(1e7, 4, 1 / 60);
        }
        Equation.prototype.constructor = Equation;
        Equation.id = 0;
        Equation.prototype.setSpookParams = function(stiffness, relaxation, timeStep) {
          var d = relaxation, k = stiffness, h = timeStep;
          this.a = 4 / (h * (1 + 4 * d));
          this.b = 4 * d / (1 + 4 * d);
          this.eps = 4 / (h * h * k * (1 + 4 * d));
        };
        Equation.prototype.computeB = function(a, b, h) {
          var GW = this.computeGW(), Gq = this.computeGq(), GiMf = this.computeGiMf();
          return -Gq * a - GW * b - GiMf * h;
        };
        Equation.prototype.computeGq = function() {
          var GA = this.jacobianElementA, GB = this.jacobianElementB, bi = this.bi, bj = this.bj, xi = bi.position, xj = bj.position;
          return GA.spatial.dot(xi) + GB.spatial.dot(xj);
        };
        var zero = new Vec3();
        Equation.prototype.computeGW = function() {
          var GA = this.jacobianElementA, GB = this.jacobianElementB, bi = this.bi, bj = this.bj, vi = bi.velocity, vj = bj.velocity, wi = bi.angularVelocity || zero, wj = bj.angularVelocity || zero;
          return GA.multiplyVectors(vi, wi) + GB.multiplyVectors(vj, wj);
        };
        Equation.prototype.computeGWlambda = function() {
          var GA = this.jacobianElementA, GB = this.jacobianElementB, bi = this.bi, bj = this.bj, vi = bi.vlambda, vj = bj.vlambda, wi = bi.wlambda || zero, wj = bj.wlambda || zero;
          return GA.multiplyVectors(vi, wi) + GB.multiplyVectors(vj, wj);
        };
        var iMfi = new Vec3(), iMfj = new Vec3(), invIi_vmult_taui = new Vec3(), invIj_vmult_tauj = new Vec3();
        Equation.prototype.computeGiMf = function() {
          var GA = this.jacobianElementA, GB = this.jacobianElementB, bi = this.bi, bj = this.bj, fi = bi.force, ti = bi.torque, fj = bj.force, tj = bj.torque, invMassi = bi.invMassSolve, invMassj = bj.invMassSolve;
          if (bi.invInertiaWorldSolve) {
            bi.invInertiaWorldSolve.vmult(ti, invIi_vmult_taui);
          } else {
            invIi_vmult_taui.set(0, 0, 0);
          }
          if (bj.invInertiaWorldSolve) {
            bj.invInertiaWorldSolve.vmult(tj, invIj_vmult_tauj);
          } else {
            invIj_vmult_tauj.set(0, 0, 0);
          }
          fi.mult(invMassi, iMfi);
          fj.mult(invMassj, iMfj);
          return GA.multiplyVectors(iMfi, invIi_vmult_taui) + GB.multiplyVectors(iMfj, invIj_vmult_tauj);
        };
        var tmp = new Vec3();
        Equation.prototype.computeGiMGt = function() {
          var GA = this.jacobianElementA, GB = this.jacobianElementB, bi = this.bi, bj = this.bj, invMassi = bi.invMassSolve, invMassj = bj.invMassSolve, invIi = bi.invInertiaWorldSolve, invIj = bj.invInertiaWorldSolve, result = invMassi + invMassj;
          if (invIi) {
            invIi.vmult(GA.rotational, tmp);
            result += tmp.dot(GA.rotational);
          }
          if (invIj) {
            invIj.vmult(GB.rotational, tmp);
            result += tmp.dot(GB.rotational);
          }
          return result;
        };
        var addToWlambda_temp = new Vec3(), addToWlambda_Gi = new Vec3(), addToWlambda_Gj = new Vec3(), addToWlambda_ri = new Vec3(), addToWlambda_rj = new Vec3(), addToWlambda_Mdiag = new Vec3();
        Equation.prototype.addToWlambda = function(deltalambda) {
          var GA = this.jacobianElementA, GB = this.jacobianElementB, bi = this.bi, bj = this.bj, temp = addToWlambda_temp;
          GA.spatial.mult(bi.invMassSolve * deltalambda, temp);
          bi.vlambda.vadd(temp, bi.vlambda);
          GB.spatial.mult(bj.invMassSolve * deltalambda, temp);
          bj.vlambda.vadd(temp, bj.vlambda);
          if (bi.invInertiaWorldSolve) {
            bi.invInertiaWorldSolve.vmult(GA.rotational, temp);
            temp.mult(deltalambda, temp);
            bi.wlambda.vadd(temp, bi.wlambda);
          }
          if (bj.invInertiaWorldSolve) {
            bj.invInertiaWorldSolve.vmult(GB.rotational, temp);
            temp.mult(deltalambda, temp);
            bj.wlambda.vadd(temp, bj.wlambda);
          }
        };
        Equation.prototype.computeC = function() {
          return this.computeGiMGt() + this.eps;
        };
      }, { "../math/JacobianElement": 26, "../math/Vec3": 30 }], 21: [function(_dereq_, module4, exports3) {
        module4.exports = FrictionEquation;
        var Equation = _dereq_("./Equation");
        var Vec3 = _dereq_("../math/Vec3");
        var Mat3 = _dereq_("../math/Mat3");
        function FrictionEquation(bodyA, bodyB, slipForce) {
          Equation.call(this, bodyA, bodyB, -slipForce, slipForce);
          this.ri = new Vec3();
          this.rj = new Vec3();
          this.t = new Vec3();
        }
        FrictionEquation.prototype = new Equation();
        FrictionEquation.prototype.constructor = FrictionEquation;
        var FrictionEquation_computeB_temp1 = new Vec3();
        var FrictionEquation_computeB_temp2 = new Vec3();
        FrictionEquation.prototype.computeB = function(h) {
          var a = this.a, b = this.b, bi = this.bi, bj = this.bj, ri = this.ri, rj = this.rj, rixt = FrictionEquation_computeB_temp1, rjxt = FrictionEquation_computeB_temp2, t = this.t;
          ri.cross(t, rixt);
          rj.cross(t, rjxt);
          var GA = this.jacobianElementA, GB = this.jacobianElementB;
          t.negate(GA.spatial);
          rixt.negate(GA.rotational);
          GB.spatial.copy(t);
          GB.rotational.copy(rjxt);
          var GW = this.computeGW();
          var GiMf = this.computeGiMf();
          var B = -GW * b - h * GiMf;
          return B;
        };
      }, { "../math/Mat3": 27, "../math/Vec3": 30, "./Equation": 20 }], 22: [function(_dereq_, module4, exports3) {
        module4.exports = RotationalEquation;
        var Vec3 = _dereq_("../math/Vec3");
        var Mat3 = _dereq_("../math/Mat3");
        var Equation = _dereq_("./Equation");
        function RotationalEquation(bodyA, bodyB, options) {
          options = options || {};
          var maxForce = typeof options.maxForce !== "undefined" ? options.maxForce : 1e6;
          Equation.call(this, bodyA, bodyB, -maxForce, maxForce);
          this.axisA = options.axisA ? options.axisA.clone() : new Vec3(1, 0, 0);
          this.axisB = options.axisB ? options.axisB.clone() : new Vec3(0, 1, 0);
          this.maxAngle = Math.PI / 2;
        }
        RotationalEquation.prototype = new Equation();
        RotationalEquation.prototype.constructor = RotationalEquation;
        var tmpVec1 = new Vec3();
        var tmpVec2 = new Vec3();
        RotationalEquation.prototype.computeB = function(h) {
          var a = this.a, b = this.b, ni = this.axisA, nj = this.axisB, nixnj = tmpVec1, njxni = tmpVec2, GA = this.jacobianElementA, GB = this.jacobianElementB;
          ni.cross(nj, nixnj);
          nj.cross(ni, njxni);
          GA.rotational.copy(njxni);
          GB.rotational.copy(nixnj);
          var g = Math.cos(this.maxAngle) - ni.dot(nj), GW = this.computeGW(), GiMf = this.computeGiMf();
          var B = -g * a - GW * b - h * GiMf;
          return B;
        };
      }, { "../math/Mat3": 27, "../math/Vec3": 30, "./Equation": 20 }], 23: [function(_dereq_, module4, exports3) {
        module4.exports = RotationalMotorEquation;
        var Vec3 = _dereq_("../math/Vec3");
        var Mat3 = _dereq_("../math/Mat3");
        var Equation = _dereq_("./Equation");
        function RotationalMotorEquation(bodyA, bodyB, maxForce) {
          maxForce = typeof maxForce !== "undefined" ? maxForce : 1e6;
          Equation.call(this, bodyA, bodyB, -maxForce, maxForce);
          this.axisA = new Vec3();
          this.axisB = new Vec3();
          this.targetVelocity = 0;
        }
        RotationalMotorEquation.prototype = new Equation();
        RotationalMotorEquation.prototype.constructor = RotationalMotorEquation;
        RotationalMotorEquation.prototype.computeB = function(h) {
          var a = this.a, b = this.b, bi = this.bi, bj = this.bj, axisA = this.axisA, axisB = this.axisB, GA = this.jacobianElementA, GB = this.jacobianElementB;
          GA.rotational.copy(axisA);
          axisB.negate(GB.rotational);
          var GW = this.computeGW() - this.targetVelocity, GiMf = this.computeGiMf();
          var B = -GW * b - h * GiMf;
          return B;
        };
      }, { "../math/Mat3": 27, "../math/Vec3": 30, "./Equation": 20 }], 24: [function(_dereq_, module4, exports3) {
        var Utils2 = _dereq_("../utils/Utils");
        module4.exports = ContactMaterial;
        function ContactMaterial(m1, m2, options) {
          options = Utils2.defaults(options, {
            friction: 0.3,
            restitution: 0.3,
            contactEquationStiffness: 1e7,
            contactEquationRelaxation: 3,
            frictionEquationStiffness: 1e7,
            frictionEquationRelaxation: 3
          });
          this.id = ContactMaterial.idCounter++;
          this.materials = [m1, m2];
          this.friction = options.friction;
          this.restitution = options.restitution;
          this.contactEquationStiffness = options.contactEquationStiffness;
          this.contactEquationRelaxation = options.contactEquationRelaxation;
          this.frictionEquationStiffness = options.frictionEquationStiffness;
          this.frictionEquationRelaxation = options.frictionEquationRelaxation;
        }
        ContactMaterial.idCounter = 0;
      }, { "../utils/Utils": 53 }], 25: [function(_dereq_, module4, exports3) {
        module4.exports = Material;
        function Material(options) {
          var name = "";
          options = options || {};
          if (typeof options === "string") {
            name = options;
            options = {};
          } else if (typeof options === "object") {
            name = "";
          }
          this.name = name;
          this.id = Material.idCounter++;
          this.friction = typeof options.friction !== "undefined" ? options.friction : -1;
          this.restitution = typeof options.restitution !== "undefined" ? options.restitution : -1;
        }
        Material.idCounter = 0;
      }, {}], 26: [function(_dereq_, module4, exports3) {
        module4.exports = JacobianElement;
        var Vec3 = _dereq_("./Vec3");
        function JacobianElement() {
          this.spatial = new Vec3();
          this.rotational = new Vec3();
        }
        JacobianElement.prototype.multiplyElement = function(element) {
          return element.spatial.dot(this.spatial) + element.rotational.dot(this.rotational);
        };
        JacobianElement.prototype.multiplyVectors = function(spatial, rotational) {
          return spatial.dot(this.spatial) + rotational.dot(this.rotational);
        };
      }, { "./Vec3": 30 }], 27: [function(_dereq_, module4, exports3) {
        module4.exports = Mat3;
        var Vec3 = _dereq_("./Vec3");
        function Mat3(elements) {
          if (elements) {
            this.elements = elements;
          } else {
            this.elements = [0, 0, 0, 0, 0, 0, 0, 0, 0];
          }
        }
        Mat3.prototype.identity = function() {
          var e = this.elements;
          e[0] = 1;
          e[1] = 0;
          e[2] = 0;
          e[3] = 0;
          e[4] = 1;
          e[5] = 0;
          e[6] = 0;
          e[7] = 0;
          e[8] = 1;
        };
        Mat3.prototype.setZero = function() {
          var e = this.elements;
          e[0] = 0;
          e[1] = 0;
          e[2] = 0;
          e[3] = 0;
          e[4] = 0;
          e[5] = 0;
          e[6] = 0;
          e[7] = 0;
          e[8] = 0;
        };
        Mat3.prototype.setTrace = function(vec3) {
          var e = this.elements;
          e[0] = vec3.x;
          e[4] = vec3.y;
          e[8] = vec3.z;
        };
        Mat3.prototype.getTrace = function(target) {
          var target = target || new Vec3();
          var e = this.elements;
          target.x = e[0];
          target.y = e[4];
          target.z = e[8];
        };
        Mat3.prototype.vmult = function(v, target) {
          target = target || new Vec3();
          var e = this.elements, x = v.x, y = v.y, z = v.z;
          target.x = e[0] * x + e[1] * y + e[2] * z;
          target.y = e[3] * x + e[4] * y + e[5] * z;
          target.z = e[6] * x + e[7] * y + e[8] * z;
          return target;
        };
        Mat3.prototype.smult = function(s) {
          for (var i = 0; i < this.elements.length; i++) {
            this.elements[i] *= s;
          }
        };
        Mat3.prototype.mmult = function(m, target) {
          var r = target || new Mat3();
          for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
              var sum = 0;
              for (var k = 0; k < 3; k++) {
                sum += m.elements[i + k * 3] * this.elements[k + j * 3];
              }
              r.elements[i + j * 3] = sum;
            }
          }
          return r;
        };
        Mat3.prototype.scale = function(v, target) {
          target = target || new Mat3();
          var e = this.elements, t = target.elements;
          for (var i = 0; i !== 3; i++) {
            t[3 * i + 0] = v.x * e[3 * i + 0];
            t[3 * i + 1] = v.y * e[3 * i + 1];
            t[3 * i + 2] = v.z * e[3 * i + 2];
          }
          return target;
        };
        Mat3.prototype.solve = function(b, target) {
          target = target || new Vec3();
          var nr = 3;
          var nc = 4;
          var eqns = [];
          for (var i = 0; i < nr * nc; i++) {
            eqns.push(0);
          }
          var i, j;
          for (i = 0; i < 3; i++) {
            for (j = 0; j < 3; j++) {
              eqns[i + nc * j] = this.elements[i + 3 * j];
            }
          }
          eqns[3 + 4 * 0] = b.x;
          eqns[3 + 4 * 1] = b.y;
          eqns[3 + 4 * 2] = b.z;
          var n = 3, k = n, np;
          var kp = 4;
          var p, els;
          do {
            i = k - n;
            if (eqns[i + nc * i] === 0) {
              for (j = i + 1; j < k; j++) {
                if (eqns[i + nc * j] !== 0) {
                  np = kp;
                  do {
                    p = kp - np;
                    eqns[p + nc * i] += eqns[p + nc * j];
                  } while (--np);
                  break;
                }
              }
            }
            if (eqns[i + nc * i] !== 0) {
              for (j = i + 1; j < k; j++) {
                var multiplier = eqns[i + nc * j] / eqns[i + nc * i];
                np = kp;
                do {
                  p = kp - np;
                  eqns[p + nc * j] = p <= i ? 0 : eqns[p + nc * j] - eqns[p + nc * i] * multiplier;
                } while (--np);
              }
            }
          } while (--n);
          target.z = eqns[2 * nc + 3] / eqns[2 * nc + 2];
          target.y = (eqns[1 * nc + 3] - eqns[1 * nc + 2] * target.z) / eqns[1 * nc + 1];
          target.x = (eqns[0 * nc + 3] - eqns[0 * nc + 2] * target.z - eqns[0 * nc + 1] * target.y) / eqns[0 * nc + 0];
          if (isNaN(target.x) || isNaN(target.y) || isNaN(target.z) || target.x === Infinity || target.y === Infinity || target.z === Infinity) {
            throw "Could not solve equation! Got x=[" + target.toString() + "], b=[" + b.toString() + "], A=[" + this.toString() + "]";
          }
          return target;
        };
        Mat3.prototype.e = function(row, column, value) {
          if (value === void 0) {
            return this.elements[column + 3 * row];
          } else {
            this.elements[column + 3 * row] = value;
          }
        };
        Mat3.prototype.copy = function(source) {
          for (var i = 0; i < source.elements.length; i++) {
            this.elements[i] = source.elements[i];
          }
          return this;
        };
        Mat3.prototype.toString = function() {
          var r = "";
          var sep = ",";
          for (var i = 0; i < 9; i++) {
            r += this.elements[i] + sep;
          }
          return r;
        };
        Mat3.prototype.reverse = function(target) {
          target = target || new Mat3();
          var nr = 3;
          var nc = 6;
          var eqns = [];
          for (var i = 0; i < nr * nc; i++) {
            eqns.push(0);
          }
          var i, j;
          for (i = 0; i < 3; i++) {
            for (j = 0; j < 3; j++) {
              eqns[i + nc * j] = this.elements[i + 3 * j];
            }
          }
          eqns[3 + 6 * 0] = 1;
          eqns[3 + 6 * 1] = 0;
          eqns[3 + 6 * 2] = 0;
          eqns[4 + 6 * 0] = 0;
          eqns[4 + 6 * 1] = 1;
          eqns[4 + 6 * 2] = 0;
          eqns[5 + 6 * 0] = 0;
          eqns[5 + 6 * 1] = 0;
          eqns[5 + 6 * 2] = 1;
          var n = 3, k = n, np;
          var kp = nc;
          var p;
          do {
            i = k - n;
            if (eqns[i + nc * i] === 0) {
              for (j = i + 1; j < k; j++) {
                if (eqns[i + nc * j] !== 0) {
                  np = kp;
                  do {
                    p = kp - np;
                    eqns[p + nc * i] += eqns[p + nc * j];
                  } while (--np);
                  break;
                }
              }
            }
            if (eqns[i + nc * i] !== 0) {
              for (j = i + 1; j < k; j++) {
                var multiplier = eqns[i + nc * j] / eqns[i + nc * i];
                np = kp;
                do {
                  p = kp - np;
                  eqns[p + nc * j] = p <= i ? 0 : eqns[p + nc * j] - eqns[p + nc * i] * multiplier;
                } while (--np);
              }
            }
          } while (--n);
          i = 2;
          do {
            j = i - 1;
            do {
              var multiplier = eqns[i + nc * j] / eqns[i + nc * i];
              np = nc;
              do {
                p = nc - np;
                eqns[p + nc * j] = eqns[p + nc * j] - eqns[p + nc * i] * multiplier;
              } while (--np);
            } while (j--);
          } while (--i);
          i = 2;
          do {
            var multiplier = 1 / eqns[i + nc * i];
            np = nc;
            do {
              p = nc - np;
              eqns[p + nc * i] = eqns[p + nc * i] * multiplier;
            } while (--np);
          } while (i--);
          i = 2;
          do {
            j = 2;
            do {
              p = eqns[nr + j + nc * i];
              if (isNaN(p) || p === Infinity) {
                throw "Could not reverse! A=[" + this.toString() + "]";
              }
              target.e(i, j, p);
            } while (j--);
          } while (i--);
          return target;
        };
        Mat3.prototype.setRotationFromQuaternion = function(q) {
          var x = q.x, y = q.y, z = q.z, w = q.w, x2 = x + x, y2 = y + y, z2 = z + z, xx = x * x2, xy = x * y2, xz = x * z2, yy = y * y2, yz = y * z2, zz = z * z2, wx = w * x2, wy = w * y2, wz = w * z2, e = this.elements;
          e[3 * 0 + 0] = 1 - (yy + zz);
          e[3 * 0 + 1] = xy - wz;
          e[3 * 0 + 2] = xz + wy;
          e[3 * 1 + 0] = xy + wz;
          e[3 * 1 + 1] = 1 - (xx + zz);
          e[3 * 1 + 2] = yz - wx;
          e[3 * 2 + 0] = xz - wy;
          e[3 * 2 + 1] = yz + wx;
          e[3 * 2 + 2] = 1 - (xx + yy);
          return this;
        };
        Mat3.prototype.transpose = function(target) {
          target = target || new Mat3();
          var Mt = target.elements, M = this.elements;
          for (var i = 0; i !== 3; i++) {
            for (var j = 0; j !== 3; j++) {
              Mt[3 * i + j] = M[3 * j + i];
            }
          }
          return target;
        };
      }, { "./Vec3": 30 }], 28: [function(_dereq_, module4, exports3) {
        module4.exports = Quaternion2;
        var Vec3 = _dereq_("./Vec3");
        function Quaternion2(x, y, z, w) {
          this.x = x !== void 0 ? x : 0;
          this.y = y !== void 0 ? y : 0;
          this.z = z !== void 0 ? z : 0;
          this.w = w !== void 0 ? w : 1;
        }
        Quaternion2.prototype.set = function(x, y, z, w) {
          this.x = x;
          this.y = y;
          this.z = z;
          this.w = w;
        };
        Quaternion2.prototype.toString = function() {
          return this.x + "," + this.y + "," + this.z + "," + this.w;
        };
        Quaternion2.prototype.toArray = function() {
          return [this.x, this.y, this.z, this.w];
        };
        Quaternion2.prototype.setFromAxisAngle = function(axis, angle) {
          var s = Math.sin(angle * 0.5);
          this.x = axis.x * s;
          this.y = axis.y * s;
          this.z = axis.z * s;
          this.w = Math.cos(angle * 0.5);
        };
        Quaternion2.prototype.toAxisAngle = function(targetAxis) {
          targetAxis = targetAxis || new Vec3();
          this.normalize();
          var angle = 2 * Math.acos(this.w);
          var s = Math.sqrt(1 - this.w * this.w);
          if (s < 1e-3) {
            targetAxis.x = this.x;
            targetAxis.y = this.y;
            targetAxis.z = this.z;
          } else {
            targetAxis.x = this.x / s;
            targetAxis.y = this.y / s;
            targetAxis.z = this.z / s;
          }
          return [targetAxis, angle];
        };
        var sfv_t1 = new Vec3(), sfv_t2 = new Vec3();
        Quaternion2.prototype.setFromVectors = function(u, v) {
          if (u.isAntiparallelTo(v)) {
            var t1 = sfv_t1;
            var t2 = sfv_t2;
            u.tangents(t1, t2);
            this.setFromAxisAngle(t1, Math.PI);
          } else {
            var a = u.cross(v);
            this.x = a.x;
            this.y = a.y;
            this.z = a.z;
            this.w = Math.sqrt(Math.pow(u.norm(), 2) * Math.pow(v.norm(), 2)) + u.dot(v);
            this.normalize();
          }
        };
        var Quaternion_mult_va = new Vec3();
        var Quaternion_mult_vb = new Vec3();
        var Quaternion_mult_vaxvb = new Vec3();
        Quaternion2.prototype.mult = function(q, target) {
          target = target || new Quaternion2();
          var w = this.w, va = Quaternion_mult_va, vb = Quaternion_mult_vb, vaxvb = Quaternion_mult_vaxvb;
          va.set(this.x, this.y, this.z);
          vb.set(q.x, q.y, q.z);
          target.w = w * q.w - va.dot(vb);
          va.cross(vb, vaxvb);
          target.x = w * vb.x + q.w * va.x + vaxvb.x;
          target.y = w * vb.y + q.w * va.y + vaxvb.y;
          target.z = w * vb.z + q.w * va.z + vaxvb.z;
          return target;
        };
        Quaternion2.prototype.inverse = function(target) {
          var x = this.x, y = this.y, z = this.z, w = this.w;
          target = target || new Quaternion2();
          this.conjugate(target);
          var inorm2 = 1 / (x * x + y * y + z * z + w * w);
          target.x *= inorm2;
          target.y *= inorm2;
          target.z *= inorm2;
          target.w *= inorm2;
          return target;
        };
        Quaternion2.prototype.conjugate = function(target) {
          target = target || new Quaternion2();
          target.x = -this.x;
          target.y = -this.y;
          target.z = -this.z;
          target.w = this.w;
          return target;
        };
        Quaternion2.prototype.normalize = function() {
          var l = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
          if (l === 0) {
            this.x = 0;
            this.y = 0;
            this.z = 0;
            this.w = 0;
          } else {
            l = 1 / l;
            this.x *= l;
            this.y *= l;
            this.z *= l;
            this.w *= l;
          }
        };
        Quaternion2.prototype.normalizeFast = function() {
          var f = (3 - (this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)) / 2;
          if (f === 0) {
            this.x = 0;
            this.y = 0;
            this.z = 0;
            this.w = 0;
          } else {
            this.x *= f;
            this.y *= f;
            this.z *= f;
            this.w *= f;
          }
        };
        Quaternion2.prototype.vmult = function(v, target) {
          target = target || new Vec3();
          var x = v.x, y = v.y, z = v.z;
          var qx = this.x, qy = this.y, qz = this.z, qw = this.w;
          var ix = qw * x + qy * z - qz * y, iy = qw * y + qz * x - qx * z, iz = qw * z + qx * y - qy * x, iw = -qx * x - qy * y - qz * z;
          target.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
          target.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
          target.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;
          return target;
        };
        Quaternion2.prototype.copy = function(source) {
          this.x = source.x;
          this.y = source.y;
          this.z = source.z;
          this.w = source.w;
          return this;
        };
        Quaternion2.prototype.toEuler = function(target, order) {
          order = order || "YZX";
          var heading, attitude, bank;
          var x = this.x, y = this.y, z = this.z, w = this.w;
          switch (order) {
            case "YZX":
              var test = x * y + z * w;
              if (test > 0.499) {
                heading = 2 * Math.atan2(x, w);
                attitude = Math.PI / 2;
                bank = 0;
              }
              if (test < -0.499) {
                heading = -2 * Math.atan2(x, w);
                attitude = -Math.PI / 2;
                bank = 0;
              }
              if (isNaN(heading)) {
                var sqx = x * x;
                var sqy = y * y;
                var sqz = z * z;
                heading = Math.atan2(2 * y * w - 2 * x * z, 1 - 2 * sqy - 2 * sqz);
                attitude = Math.asin(2 * test);
                bank = Math.atan2(2 * x * w - 2 * y * z, 1 - 2 * sqx - 2 * sqz);
              }
              break;
            default:
              throw new Error("Euler order " + order + " not supported yet.");
          }
          target.y = heading;
          target.z = attitude;
          target.x = bank;
        };
        Quaternion2.prototype.setFromEuler = function(x, y, z, order) {
          order = order || "XYZ";
          var c1 = Math.cos(x / 2);
          var c2 = Math.cos(y / 2);
          var c3 = Math.cos(z / 2);
          var s1 = Math.sin(x / 2);
          var s2 = Math.sin(y / 2);
          var s3 = Math.sin(z / 2);
          if (order === "XYZ") {
            this.x = s1 * c2 * c3 + c1 * s2 * s3;
            this.y = c1 * s2 * c3 - s1 * c2 * s3;
            this.z = c1 * c2 * s3 + s1 * s2 * c3;
            this.w = c1 * c2 * c3 - s1 * s2 * s3;
          } else if (order === "YXZ") {
            this.x = s1 * c2 * c3 + c1 * s2 * s3;
            this.y = c1 * s2 * c3 - s1 * c2 * s3;
            this.z = c1 * c2 * s3 - s1 * s2 * c3;
            this.w = c1 * c2 * c3 + s1 * s2 * s3;
          } else if (order === "ZXY") {
            this.x = s1 * c2 * c3 - c1 * s2 * s3;
            this.y = c1 * s2 * c3 + s1 * c2 * s3;
            this.z = c1 * c2 * s3 + s1 * s2 * c3;
            this.w = c1 * c2 * c3 - s1 * s2 * s3;
          } else if (order === "ZYX") {
            this.x = s1 * c2 * c3 - c1 * s2 * s3;
            this.y = c1 * s2 * c3 + s1 * c2 * s3;
            this.z = c1 * c2 * s3 - s1 * s2 * c3;
            this.w = c1 * c2 * c3 + s1 * s2 * s3;
          } else if (order === "YZX") {
            this.x = s1 * c2 * c3 + c1 * s2 * s3;
            this.y = c1 * s2 * c3 + s1 * c2 * s3;
            this.z = c1 * c2 * s3 - s1 * s2 * c3;
            this.w = c1 * c2 * c3 - s1 * s2 * s3;
          } else if (order === "XZY") {
            this.x = s1 * c2 * c3 - c1 * s2 * s3;
            this.y = c1 * s2 * c3 - s1 * c2 * s3;
            this.z = c1 * c2 * s3 + s1 * s2 * c3;
            this.w = c1 * c2 * c3 + s1 * s2 * s3;
          }
          return this;
        };
        Quaternion2.prototype.clone = function() {
          return new Quaternion2(this.x, this.y, this.z, this.w);
        };
      }, { "./Vec3": 30 }], 29: [function(_dereq_, module4, exports3) {
        var Vec3 = _dereq_("./Vec3");
        var Quaternion2 = _dereq_("./Quaternion");
        module4.exports = Transform;
        function Transform(options) {
          options = options || {};
          this.position = new Vec3();
          if (options.position) {
            this.position.copy(options.position);
          }
          this.quaternion = new Quaternion2();
          if (options.quaternion) {
            this.quaternion.copy(options.quaternion);
          }
        }
        var tmpQuat = new Quaternion2();
        Transform.pointToLocalFrame = function(position, quaternion, worldPoint, result) {
          var result = result || new Vec3();
          worldPoint.vsub(position, result);
          quaternion.conjugate(tmpQuat);
          tmpQuat.vmult(result, result);
          return result;
        };
        Transform.prototype.pointToLocal = function(worldPoint, result) {
          return Transform.pointToLocalFrame(this.position, this.quaternion, worldPoint, result);
        };
        Transform.pointToWorldFrame = function(position, quaternion, localPoint, result) {
          var result = result || new Vec3();
          quaternion.vmult(localPoint, result);
          result.vadd(position, result);
          return result;
        };
        Transform.prototype.pointToWorld = function(localPoint, result) {
          return Transform.pointToWorldFrame(this.position, this.quaternion, localPoint, result);
        };
        Transform.prototype.vectorToWorldFrame = function(localVector, result) {
          var result = result || new Vec3();
          this.quaternion.vmult(localVector, result);
          return result;
        };
        Transform.vectorToWorldFrame = function(quaternion, localVector, result) {
          quaternion.vmult(localVector, result);
          return result;
        };
        Transform.vectorToLocalFrame = function(position, quaternion, worldVector, result) {
          var result = result || new Vec3();
          quaternion.w *= -1;
          quaternion.vmult(worldVector, result);
          quaternion.w *= -1;
          return result;
        };
      }, { "./Quaternion": 28, "./Vec3": 30 }], 30: [function(_dereq_, module4, exports3) {
        module4.exports = Vec3;
        var Mat3 = _dereq_("./Mat3");
        function Vec3(x, y, z) {
          this.x = x || 0;
          this.y = y || 0;
          this.z = z || 0;
        }
        Vec3.ZERO = new Vec3(0, 0, 0);
        Vec3.UNIT_X = new Vec3(1, 0, 0);
        Vec3.UNIT_Y = new Vec3(0, 1, 0);
        Vec3.UNIT_Z = new Vec3(0, 0, 1);
        Vec3.prototype.cross = function(v, target) {
          var vx = v.x, vy = v.y, vz = v.z, x = this.x, y = this.y, z = this.z;
          target = target || new Vec3();
          target.x = y * vz - z * vy;
          target.y = z * vx - x * vz;
          target.z = x * vy - y * vx;
          return target;
        };
        Vec3.prototype.set = function(x, y, z) {
          this.x = x;
          this.y = y;
          this.z = z;
          return this;
        };
        Vec3.prototype.setZero = function() {
          this.x = this.y = this.z = 0;
        };
        Vec3.prototype.vadd = function(v, target) {
          if (target) {
            target.x = v.x + this.x;
            target.y = v.y + this.y;
            target.z = v.z + this.z;
          } else {
            return new Vec3(this.x + v.x, this.y + v.y, this.z + v.z);
          }
        };
        Vec3.prototype.vsub = function(v, target) {
          if (target) {
            target.x = this.x - v.x;
            target.y = this.y - v.y;
            target.z = this.z - v.z;
          } else {
            return new Vec3(this.x - v.x, this.y - v.y, this.z - v.z);
          }
        };
        Vec3.prototype.crossmat = function() {
          return new Mat3([
            0,
            -this.z,
            this.y,
            this.z,
            0,
            -this.x,
            -this.y,
            this.x,
            0
          ]);
        };
        Vec3.prototype.normalize = function() {
          var x = this.x, y = this.y, z = this.z;
          var n = Math.sqrt(x * x + y * y + z * z);
          if (n > 0) {
            var invN = 1 / n;
            this.x *= invN;
            this.y *= invN;
            this.z *= invN;
          } else {
            this.x = 0;
            this.y = 0;
            this.z = 0;
          }
          return n;
        };
        Vec3.prototype.unit = function(target) {
          target = target || new Vec3();
          var x = this.x, y = this.y, z = this.z;
          var ninv = Math.sqrt(x * x + y * y + z * z);
          if (ninv > 0) {
            ninv = 1 / ninv;
            target.x = x * ninv;
            target.y = y * ninv;
            target.z = z * ninv;
          } else {
            target.x = 1;
            target.y = 0;
            target.z = 0;
          }
          return target;
        };
        Vec3.prototype.norm = function() {
          var x = this.x, y = this.y, z = this.z;
          return Math.sqrt(x * x + y * y + z * z);
        };
        Vec3.prototype.length = Vec3.prototype.norm;
        Vec3.prototype.norm2 = function() {
          return this.dot(this);
        };
        Vec3.prototype.lengthSquared = Vec3.prototype.norm2;
        Vec3.prototype.distanceTo = function(p) {
          var x = this.x, y = this.y, z = this.z;
          var px = p.x, py = p.y, pz = p.z;
          return Math.sqrt((px - x) * (px - x) + (py - y) * (py - y) + (pz - z) * (pz - z));
        };
        Vec3.prototype.distanceSquared = function(p) {
          var x = this.x, y = this.y, z = this.z;
          var px = p.x, py = p.y, pz = p.z;
          return (px - x) * (px - x) + (py - y) * (py - y) + (pz - z) * (pz - z);
        };
        Vec3.prototype.mult = function(scalar, target) {
          target = target || new Vec3();
          var x = this.x, y = this.y, z = this.z;
          target.x = scalar * x;
          target.y = scalar * y;
          target.z = scalar * z;
          return target;
        };
        Vec3.prototype.scale = Vec3.prototype.mult;
        Vec3.prototype.dot = function(v) {
          return this.x * v.x + this.y * v.y + this.z * v.z;
        };
        Vec3.prototype.isZero = function() {
          return this.x === 0 && this.y === 0 && this.z === 0;
        };
        Vec3.prototype.negate = function(target) {
          target = target || new Vec3();
          target.x = -this.x;
          target.y = -this.y;
          target.z = -this.z;
          return target;
        };
        var Vec3_tangents_n = new Vec3();
        var Vec3_tangents_randVec = new Vec3();
        Vec3.prototype.tangents = function(t1, t2) {
          var norm = this.norm();
          if (norm > 0) {
            var n = Vec3_tangents_n;
            var inorm = 1 / norm;
            n.set(this.x * inorm, this.y * inorm, this.z * inorm);
            var randVec = Vec3_tangents_randVec;
            if (Math.abs(n.x) < 0.9) {
              randVec.set(1, 0, 0);
              n.cross(randVec, t1);
            } else {
              randVec.set(0, 1, 0);
              n.cross(randVec, t1);
            }
            n.cross(t1, t2);
          } else {
            t1.set(1, 0, 0);
            t2.set(0, 1, 0);
          }
        };
        Vec3.prototype.toString = function() {
          return this.x + "," + this.y + "," + this.z;
        };
        Vec3.prototype.toArray = function() {
          return [this.x, this.y, this.z];
        };
        Vec3.prototype.copy = function(source) {
          this.x = source.x;
          this.y = source.y;
          this.z = source.z;
          return this;
        };
        Vec3.prototype.lerp = function(v, t, target) {
          var x = this.x, y = this.y, z = this.z;
          target.x = x + (v.x - x) * t;
          target.y = y + (v.y - y) * t;
          target.z = z + (v.z - z) * t;
        };
        Vec3.prototype.almostEquals = function(v, precision) {
          if (precision === void 0) {
            precision = 1e-6;
          }
          if (Math.abs(this.x - v.x) > precision || Math.abs(this.y - v.y) > precision || Math.abs(this.z - v.z) > precision) {
            return false;
          }
          return true;
        };
        Vec3.prototype.almostZero = function(precision) {
          if (precision === void 0) {
            precision = 1e-6;
          }
          if (Math.abs(this.x) > precision || Math.abs(this.y) > precision || Math.abs(this.z) > precision) {
            return false;
          }
          return true;
        };
        var antip_neg = new Vec3();
        Vec3.prototype.isAntiparallelTo = function(v, precision) {
          this.negate(antip_neg);
          return antip_neg.almostEquals(v, precision);
        };
        Vec3.prototype.clone = function() {
          return new Vec3(this.x, this.y, this.z);
        };
      }, { "./Mat3": 27 }], 31: [function(_dereq_, module4, exports3) {
        module4.exports = Body;
        var EventTarget = _dereq_("../utils/EventTarget");
        var Shape = _dereq_("../shapes/Shape");
        var Vec3 = _dereq_("../math/Vec3");
        var Mat3 = _dereq_("../math/Mat3");
        var Quaternion2 = _dereq_("../math/Quaternion");
        var Material = _dereq_("../material/Material");
        var AABB = _dereq_("../collision/AABB");
        var Box = _dereq_("../shapes/Box");
        function Body(options) {
          options = options || {};
          EventTarget.apply(this);
          this.id = Body.idCounter++;
          this.world = null;
          this.preStep = null;
          this.postStep = null;
          this.vlambda = new Vec3();
          this.collisionFilterGroup = typeof options.collisionFilterGroup === "number" ? options.collisionFilterGroup : 1;
          this.collisionFilterMask = typeof options.collisionFilterMask === "number" ? options.collisionFilterMask : 1;
          this.collisionResponse = true;
          this.position = new Vec3();
          if (options.position) {
            this.position.copy(options.position);
          }
          this.previousPosition = new Vec3();
          this.initPosition = new Vec3();
          this.velocity = new Vec3();
          if (options.velocity) {
            this.velocity.copy(options.velocity);
          }
          this.initVelocity = new Vec3();
          this.force = new Vec3();
          var mass = typeof options.mass === "number" ? options.mass : 0;
          this.mass = mass;
          this.invMass = mass > 0 ? 1 / mass : 0;
          this.material = options.material || null;
          this.linearDamping = typeof options.linearDamping === "number" ? options.linearDamping : 0.01;
          this.type = mass <= 0 ? Body.STATIC : Body.DYNAMIC;
          if (typeof options.type === typeof Body.STATIC) {
            this.type = options.type;
          }
          this.allowSleep = typeof options.allowSleep !== "undefined" ? options.allowSleep : true;
          this.sleepState = 0;
          this.sleepSpeedLimit = typeof options.sleepSpeedLimit !== "undefined" ? options.sleepSpeedLimit : 0.1;
          this.sleepTimeLimit = typeof options.sleepTimeLimit !== "undefined" ? options.sleepTimeLimit : 1;
          this.timeLastSleepy = 0;
          this._wakeUpAfterNarrowphase = false;
          this.torque = new Vec3();
          this.quaternion = new Quaternion2();
          if (options.quaternion) {
            this.quaternion.copy(options.quaternion);
          }
          this.initQuaternion = new Quaternion2();
          this.angularVelocity = new Vec3();
          if (options.angularVelocity) {
            this.angularVelocity.copy(options.angularVelocity);
          }
          this.initAngularVelocity = new Vec3();
          this.interpolatedPosition = new Vec3();
          this.interpolatedQuaternion = new Quaternion2();
          this.shapes = [];
          this.shapeOffsets = [];
          this.shapeOrientations = [];
          this.inertia = new Vec3();
          this.invInertia = new Vec3();
          this.invInertiaWorld = new Mat3();
          this.invMassSolve = 0;
          this.invInertiaSolve = new Vec3();
          this.invInertiaWorldSolve = new Mat3();
          this.fixedRotation = typeof options.fixedRotation !== "undefined" ? options.fixedRotation : false;
          this.angularDamping = typeof options.angularDamping !== "undefined" ? options.angularDamping : 0.01;
          this.aabb = new AABB();
          this.aabbNeedsUpdate = true;
          this.wlambda = new Vec3();
          if (options.shape) {
            this.addShape(options.shape);
          }
          this.updateMassProperties();
        }
        Body.prototype = new EventTarget();
        Body.prototype.constructor = Body;
        Body.DYNAMIC = 1;
        Body.STATIC = 2;
        Body.KINEMATIC = 4;
        Body.AWAKE = 0;
        Body.SLEEPY = 1;
        Body.SLEEPING = 2;
        Body.idCounter = 0;
        Body.prototype.wakeUp = function() {
          var s = this.sleepState;
          this.sleepState = 0;
          if (s === Body.SLEEPING) {
            this.dispatchEvent({ type: "wakeup" });
          }
        };
        Body.prototype.sleep = function() {
          this.sleepState = Body.SLEEPING;
          this.velocity.set(0, 0, 0);
          this.angularVelocity.set(0, 0, 0);
        };
        Body.sleepyEvent = {
          type: "sleepy"
        };
        Body.sleepEvent = {
          type: "sleep"
        };
        Body.prototype.sleepTick = function(time) {
          if (this.allowSleep) {
            var sleepState = this.sleepState;
            var speedSquared = this.velocity.norm2() + this.angularVelocity.norm2();
            var speedLimitSquared = Math.pow(this.sleepSpeedLimit, 2);
            if (sleepState === Body.AWAKE && speedSquared < speedLimitSquared) {
              this.sleepState = Body.SLEEPY;
              this.timeLastSleepy = time;
              this.dispatchEvent(Body.sleepyEvent);
            } else if (sleepState === Body.SLEEPY && speedSquared > speedLimitSquared) {
              this.wakeUp();
            } else if (sleepState === Body.SLEEPY && time - this.timeLastSleepy > this.sleepTimeLimit) {
              this.sleep();
              this.dispatchEvent(Body.sleepEvent);
            }
          }
        };
        Body.prototype.updateSolveMassProperties = function() {
          if (this.sleepState === Body.SLEEPING || this.type === Body.KINEMATIC) {
            this.invMassSolve = 0;
            this.invInertiaSolve.setZero();
            this.invInertiaWorldSolve.setZero();
          } else {
            this.invMassSolve = this.invMass;
            this.invInertiaSolve.copy(this.invInertia);
            this.invInertiaWorldSolve.copy(this.invInertiaWorld);
          }
        };
        Body.prototype.pointToLocalFrame = function(worldPoint, result) {
          var result = result || new Vec3();
          worldPoint.vsub(this.position, result);
          this.quaternion.conjugate().vmult(result, result);
          return result;
        };
        Body.prototype.vectorToLocalFrame = function(worldVector, result) {
          var result = result || new Vec3();
          this.quaternion.conjugate().vmult(worldVector, result);
          return result;
        };
        Body.prototype.pointToWorldFrame = function(localPoint, result) {
          var result = result || new Vec3();
          this.quaternion.vmult(localPoint, result);
          result.vadd(this.position, result);
          return result;
        };
        Body.prototype.vectorToWorldFrame = function(localVector, result) {
          var result = result || new Vec3();
          this.quaternion.vmult(localVector, result);
          return result;
        };
        var tmpVec = new Vec3();
        var tmpQuat = new Quaternion2();
        Body.prototype.addShape = function(shape, _offset, _orientation) {
          var offset = new Vec3();
          var orientation = new Quaternion2();
          if (_offset) {
            offset.copy(_offset);
          }
          if (_orientation) {
            orientation.copy(_orientation);
          }
          this.shapes.push(shape);
          this.shapeOffsets.push(offset);
          this.shapeOrientations.push(orientation);
          this.updateMassProperties();
          this.updateBoundingRadius();
          this.aabbNeedsUpdate = true;
          return this;
        };
        Body.prototype.updateBoundingRadius = function() {
          var shapes = this.shapes, shapeOffsets = this.shapeOffsets, N = shapes.length, radius = 0;
          for (var i = 0; i !== N; i++) {
            var shape = shapes[i];
            shape.updateBoundingSphereRadius();
            var offset = shapeOffsets[i].norm(), r = shape.boundingSphereRadius;
            if (offset + r > radius) {
              radius = offset + r;
            }
          }
          this.boundingRadius = radius;
        };
        var computeAABB_shapeAABB = new AABB();
        Body.prototype.computeAABB = function() {
          var shapes = this.shapes, shapeOffsets = this.shapeOffsets, shapeOrientations = this.shapeOrientations, N = shapes.length, offset = tmpVec, orientation = tmpQuat, bodyQuat = this.quaternion, aabb = this.aabb, shapeAABB = computeAABB_shapeAABB;
          for (var i = 0; i !== N; i++) {
            var shape = shapes[i];
            shapeOrientations[i].mult(bodyQuat, orientation);
            orientation.vmult(shapeOffsets[i], offset);
            offset.vadd(this.position, offset);
            shape.calculateWorldAABB(offset, orientation, shapeAABB.lowerBound, shapeAABB.upperBound);
            if (i === 0) {
              aabb.copy(shapeAABB);
            } else {
              aabb.extend(shapeAABB);
            }
          }
          this.aabbNeedsUpdate = false;
        };
        var uiw_m1 = new Mat3(), uiw_m2 = new Mat3(), uiw_m3 = new Mat3();
        Body.prototype.updateInertiaWorld = function(force) {
          var I = this.invInertia;
          if (I.x === I.y && I.y === I.z && !force) {
          } else {
            var m1 = uiw_m1, m2 = uiw_m2, m3 = uiw_m3;
            m1.setRotationFromQuaternion(this.quaternion);
            m1.transpose(m2);
            m1.scale(I, m1);
            m1.mmult(m2, this.invInertiaWorld);
          }
        };
        var Body_applyForce_r = new Vec3();
        var Body_applyForce_rotForce = new Vec3();
        Body.prototype.applyForce = function(force, worldPoint) {
          if (this.type !== Body.DYNAMIC) {
            return;
          }
          var r = Body_applyForce_r;
          worldPoint.vsub(this.position, r);
          var rotForce = Body_applyForce_rotForce;
          r.cross(force, rotForce);
          this.force.vadd(force, this.force);
          this.torque.vadd(rotForce, this.torque);
        };
        var Body_applyLocalForce_worldForce = new Vec3();
        var Body_applyLocalForce_worldPoint = new Vec3();
        Body.prototype.applyLocalForce = function(localForce, localPoint) {
          if (this.type !== Body.DYNAMIC) {
            return;
          }
          var worldForce = Body_applyLocalForce_worldForce;
          var worldPoint = Body_applyLocalForce_worldPoint;
          this.vectorToWorldFrame(localForce, worldForce);
          this.pointToWorldFrame(localPoint, worldPoint);
          this.applyForce(worldForce, worldPoint);
        };
        var Body_applyImpulse_r = new Vec3();
        var Body_applyImpulse_velo = new Vec3();
        var Body_applyImpulse_rotVelo = new Vec3();
        Body.prototype.applyImpulse = function(impulse, worldPoint) {
          if (this.type !== Body.DYNAMIC) {
            return;
          }
          var r = Body_applyImpulse_r;
          worldPoint.vsub(this.position, r);
          var velo = Body_applyImpulse_velo;
          velo.copy(impulse);
          velo.mult(this.invMass, velo);
          this.velocity.vadd(velo, this.velocity);
          var rotVelo = Body_applyImpulse_rotVelo;
          r.cross(impulse, rotVelo);
          this.invInertiaWorld.vmult(rotVelo, rotVelo);
          this.angularVelocity.vadd(rotVelo, this.angularVelocity);
        };
        var Body_applyLocalImpulse_worldImpulse = new Vec3();
        var Body_applyLocalImpulse_worldPoint = new Vec3();
        Body.prototype.applyLocalImpulse = function(localImpulse, localPoint) {
          if (this.type !== Body.DYNAMIC) {
            return;
          }
          var worldImpulse = Body_applyLocalImpulse_worldImpulse;
          var worldPoint = Body_applyLocalImpulse_worldPoint;
          this.vectorToWorldFrame(localImpulse, worldImpulse);
          this.pointToWorldFrame(localPoint, worldPoint);
          this.applyImpulse(worldImpulse, worldPoint);
        };
        var Body_updateMassProperties_halfExtents = new Vec3();
        Body.prototype.updateMassProperties = function() {
          var halfExtents = Body_updateMassProperties_halfExtents;
          this.invMass = this.mass > 0 ? 1 / this.mass : 0;
          var I = this.inertia;
          var fixed = this.fixedRotation;
          this.computeAABB();
          halfExtents.set((this.aabb.upperBound.x - this.aabb.lowerBound.x) / 2, (this.aabb.upperBound.y - this.aabb.lowerBound.y) / 2, (this.aabb.upperBound.z - this.aabb.lowerBound.z) / 2);
          Box.calculateInertia(halfExtents, this.mass, I);
          this.invInertia.set(I.x > 0 && !fixed ? 1 / I.x : 0, I.y > 0 && !fixed ? 1 / I.y : 0, I.z > 0 && !fixed ? 1 / I.z : 0);
          this.updateInertiaWorld(true);
        };
        Body.prototype.getVelocityAtWorldPoint = function(worldPoint, result) {
          var r = new Vec3();
          worldPoint.vsub(this.position, r);
          this.angularVelocity.cross(r, result);
          this.velocity.vadd(result, result);
          return result;
        };
      }, { "../collision/AABB": 3, "../material/Material": 25, "../math/Mat3": 27, "../math/Quaternion": 28, "../math/Vec3": 30, "../shapes/Box": 37, "../shapes/Shape": 43, "../utils/EventTarget": 49 }], 32: [function(_dereq_, module4, exports3) {
        var Body = _dereq_("./Body");
        var Vec3 = _dereq_("../math/Vec3");
        var Quaternion2 = _dereq_("../math/Quaternion");
        var RaycastResult = _dereq_("../collision/RaycastResult");
        var Ray = _dereq_("../collision/Ray");
        var WheelInfo = _dereq_("../objects/WheelInfo");
        module4.exports = RaycastVehicle;
        function RaycastVehicle(options) {
          this.chassisBody = options.chassisBody;
          this.wheelInfos = [];
          this.sliding = false;
          this.world = null;
          this.indexRightAxis = typeof options.indexRightAxis !== "undefined" ? options.indexRightAxis : 1;
          this.indexForwardAxis = typeof options.indexForwardAxis !== "undefined" ? options.indexForwardAxis : 0;
          this.indexUpAxis = typeof options.indexUpAxis !== "undefined" ? options.indexUpAxis : 2;
        }
        var tmpVec1 = new Vec3();
        var tmpVec2 = new Vec3();
        var tmpVec3 = new Vec3();
        var tmpVec4 = new Vec3();
        var tmpVec5 = new Vec3();
        var tmpVec6 = new Vec3();
        var tmpRay = new Ray();
        RaycastVehicle.prototype.addWheel = function(options) {
          options = options || {};
          var info = new WheelInfo(options);
          var index = this.wheelInfos.length;
          this.wheelInfos.push(info);
          return index;
        };
        RaycastVehicle.prototype.setSteeringValue = function(value, wheelIndex) {
          var wheel = this.wheelInfos[wheelIndex];
          wheel.steering = value;
        };
        var torque = new Vec3();
        RaycastVehicle.prototype.applyEngineForce = function(value, wheelIndex) {
          this.wheelInfos[wheelIndex].engineForce = value;
        };
        RaycastVehicle.prototype.setBrake = function(brake, wheelIndex) {
          this.wheelInfos[wheelIndex].brake = brake;
        };
        RaycastVehicle.prototype.addToWorld = function(world) {
          var constraints = this.constraints;
          world.add(this.chassisBody);
          var that = this;
          this.preStepCallback = function() {
            that.updateVehicle(world.dt);
          };
          world.addEventListener("preStep", this.preStepCallback);
          this.world = world;
        };
        RaycastVehicle.prototype.getVehicleAxisWorld = function(axisIndex, result) {
          result.set(axisIndex === 0 ? 1 : 0, axisIndex === 1 ? 1 : 0, axisIndex === 2 ? 1 : 0);
          this.chassisBody.vectorToWorldFrame(result, result);
        };
        RaycastVehicle.prototype.updateVehicle = function(timeStep) {
          var wheelInfos = this.wheelInfos;
          var numWheels = wheelInfos.length;
          var chassisBody = this.chassisBody;
          for (var i = 0; i < numWheels; i++) {
            this.updateWheelTransform(i);
          }
          this.currentVehicleSpeedKmHour = 3.6 * chassisBody.velocity.norm();
          var forwardWorld = new Vec3();
          this.getVehicleAxisWorld(this.indexForwardAxis, forwardWorld);
          if (forwardWorld.dot(chassisBody.velocity) < 0) {
            this.currentVehicleSpeedKmHour *= -1;
          }
          for (var i = 0; i < numWheels; i++) {
            this.castRay(wheelInfos[i]);
          }
          this.updateSuspension(timeStep);
          var impulse = new Vec3();
          var relpos = new Vec3();
          for (var i = 0; i < numWheels; i++) {
            var wheel = wheelInfos[i];
            var suspensionForce = wheel.suspensionForce;
            if (suspensionForce > wheel.maxSuspensionForce) {
              suspensionForce = wheel.maxSuspensionForce;
            }
            wheel.raycastResult.hitNormalWorld.scale(suspensionForce * timeStep, impulse);
            wheel.raycastResult.hitPointWorld.vsub(chassisBody.position, relpos);
            chassisBody.applyImpulse(impulse, wheel.raycastResult.hitPointWorld);
          }
          this.updateFriction(timeStep);
          var hitNormalWorldScaledWithProj = new Vec3();
          var fwd = new Vec3();
          var vel = new Vec3();
          for (i = 0; i < numWheels; i++) {
            var wheel = wheelInfos[i];
            chassisBody.getVelocityAtWorldPoint(wheel.chassisConnectionPointWorld, vel);
            var m = 1;
            switch (this.indexUpAxis) {
              case 1:
                m = -1;
                break;
            }
            if (wheel.isInContact) {
              this.getVehicleAxisWorld(this.indexForwardAxis, fwd);
              var proj = fwd.dot(wheel.raycastResult.hitNormalWorld);
              wheel.raycastResult.hitNormalWorld.scale(proj, hitNormalWorldScaledWithProj);
              fwd.vsub(hitNormalWorldScaledWithProj, fwd);
              var proj2 = fwd.dot(vel);
              wheel.deltaRotation = m * proj2 * timeStep / wheel.radius;
            }
            if ((wheel.sliding || !wheel.isInContact) && wheel.engineForce !== 0 && wheel.useCustomSlidingRotationalSpeed) {
              wheel.deltaRotation = (wheel.engineForce > 0 ? 1 : -1) * wheel.customSlidingRotationalSpeed * timeStep;
            }
            if (Math.abs(wheel.brake) > Math.abs(wheel.engineForce)) {
              wheel.deltaRotation = 0;
            }
            wheel.rotation += wheel.deltaRotation;
            wheel.deltaRotation *= 0.99;
          }
        };
        RaycastVehicle.prototype.updateSuspension = function(deltaTime) {
          var chassisBody = this.chassisBody;
          var chassisMass = chassisBody.mass;
          var wheelInfos = this.wheelInfos;
          var numWheels = wheelInfos.length;
          for (var w_it = 0; w_it < numWheels; w_it++) {
            var wheel = wheelInfos[w_it];
            if (wheel.isInContact) {
              var force;
              var susp_length = wheel.suspensionRestLength;
              var current_length = wheel.suspensionLength;
              var length_diff = susp_length - current_length;
              force = wheel.suspensionStiffness * length_diff * wheel.clippedInvContactDotSuspension;
              var projected_rel_vel = wheel.suspensionRelativeVelocity;
              var susp_damping;
              if (projected_rel_vel < 0) {
                susp_damping = wheel.dampingCompression;
              } else {
                susp_damping = wheel.dampingRelaxation;
              }
              force -= susp_damping * projected_rel_vel;
              wheel.suspensionForce = force * chassisMass;
              if (wheel.suspensionForce < 0) {
                wheel.suspensionForce = 0;
              }
            } else {
              wheel.suspensionForce = 0;
            }
          }
        };
        RaycastVehicle.prototype.removeFromWorld = function(world) {
          var constraints = this.constraints;
          world.remove(this.chassisBody);
          world.removeEventListener("preStep", this.preStepCallback);
          this.world = null;
        };
        var castRay_rayvector = new Vec3();
        var castRay_target = new Vec3();
        RaycastVehicle.prototype.castRay = function(wheel) {
          var rayvector = castRay_rayvector;
          var target = castRay_target;
          this.updateWheelTransformWorld(wheel);
          var chassisBody = this.chassisBody;
          var depth = -1;
          var raylen = wheel.suspensionRestLength + wheel.radius;
          wheel.directionWorld.scale(raylen, rayvector);
          var source = wheel.chassisConnectionPointWorld;
          source.vadd(rayvector, target);
          var raycastResult = wheel.raycastResult;
          var param = 0;
          raycastResult.reset();
          var oldState = chassisBody.collisionResponse;
          chassisBody.collisionResponse = false;
          this.world.rayTest(source, target, raycastResult);
          chassisBody.collisionResponse = oldState;
          var object = raycastResult.body;
          wheel.raycastResult.groundObject = 0;
          if (object) {
            depth = raycastResult.distance;
            wheel.raycastResult.hitNormalWorld = raycastResult.hitNormalWorld;
            wheel.isInContact = true;
            var hitDistance = raycastResult.distance;
            wheel.suspensionLength = hitDistance - wheel.radius;
            var minSuspensionLength = wheel.suspensionRestLength - wheel.maxSuspensionTravel;
            var maxSuspensionLength = wheel.suspensionRestLength + wheel.maxSuspensionTravel;
            if (wheel.suspensionLength < minSuspensionLength) {
              wheel.suspensionLength = minSuspensionLength;
            }
            if (wheel.suspensionLength > maxSuspensionLength) {
              wheel.suspensionLength = maxSuspensionLength;
              wheel.raycastResult.reset();
            }
            var denominator = wheel.raycastResult.hitNormalWorld.dot(wheel.directionWorld);
            var chassis_velocity_at_contactPoint = new Vec3();
            chassisBody.getVelocityAtWorldPoint(wheel.raycastResult.hitPointWorld, chassis_velocity_at_contactPoint);
            var projVel = wheel.raycastResult.hitNormalWorld.dot(chassis_velocity_at_contactPoint);
            if (denominator >= -0.1) {
              wheel.suspensionRelativeVelocity = 0;
              wheel.clippedInvContactDotSuspension = 1 / 0.1;
            } else {
              var inv = -1 / denominator;
              wheel.suspensionRelativeVelocity = projVel * inv;
              wheel.clippedInvContactDotSuspension = inv;
            }
          } else {
            wheel.suspensionLength = wheel.suspensionRestLength + 0 * wheel.maxSuspensionTravel;
            wheel.suspensionRelativeVelocity = 0;
            wheel.directionWorld.scale(-1, wheel.raycastResult.hitNormalWorld);
            wheel.clippedInvContactDotSuspension = 1;
          }
          return depth;
        };
        RaycastVehicle.prototype.updateWheelTransformWorld = function(wheel) {
          wheel.isInContact = false;
          var chassisBody = this.chassisBody;
          chassisBody.pointToWorldFrame(wheel.chassisConnectionPointLocal, wheel.chassisConnectionPointWorld);
          chassisBody.vectorToWorldFrame(wheel.directionLocal, wheel.directionWorld);
          chassisBody.vectorToWorldFrame(wheel.axleLocal, wheel.axleWorld);
        };
        RaycastVehicle.prototype.updateWheelTransform = function(wheelIndex) {
          var up = tmpVec4;
          var right = tmpVec5;
          var fwd = tmpVec6;
          var wheel = this.wheelInfos[wheelIndex];
          this.updateWheelTransformWorld(wheel);
          wheel.directionLocal.scale(-1, up);
          right.copy(wheel.axleLocal);
          up.cross(right, fwd);
          fwd.normalize();
          right.normalize();
          var steering = wheel.steering;
          var steeringOrn = new Quaternion2();
          steeringOrn.setFromAxisAngle(up, steering);
          var rotatingOrn = new Quaternion2();
          rotatingOrn.setFromAxisAngle(right, wheel.rotation);
          var q = wheel.worldTransform.quaternion;
          this.chassisBody.quaternion.mult(steeringOrn, q);
          q.mult(rotatingOrn, q);
          q.normalize();
          var p = wheel.worldTransform.position;
          p.copy(wheel.directionWorld);
          p.scale(wheel.suspensionLength, p);
          p.vadd(wheel.chassisConnectionPointWorld, p);
        };
        var directions = [
          new Vec3(1, 0, 0),
          new Vec3(0, 1, 0),
          new Vec3(0, 0, 1)
        ];
        RaycastVehicle.prototype.getWheelTransformWorld = function(wheelIndex) {
          return this.wheelInfos[wheelIndex].worldTransform;
        };
        var updateFriction_surfNormalWS_scaled_proj = new Vec3();
        var updateFriction_axle = [];
        var updateFriction_forwardWS = [];
        var sideFrictionStiffness2 = 1;
        RaycastVehicle.prototype.updateFriction = function(timeStep) {
          var surfNormalWS_scaled_proj = updateFriction_surfNormalWS_scaled_proj;
          var wheelInfos = this.wheelInfos;
          var numWheels = wheelInfos.length;
          var chassisBody = this.chassisBody;
          var forwardWS = updateFriction_forwardWS;
          var axle = updateFriction_axle;
          var numWheelsOnGround = 0;
          for (var i = 0; i < numWheels; i++) {
            var wheel = wheelInfos[i];
            var groundObject = wheel.raycastResult.body;
            if (groundObject) {
              numWheelsOnGround++;
            }
            wheel.sideImpulse = 0;
            wheel.forwardImpulse = 0;
            if (!forwardWS[i]) {
              forwardWS[i] = new Vec3();
            }
            if (!axle[i]) {
              axle[i] = new Vec3();
            }
          }
          for (var i = 0; i < numWheels; i++) {
            var wheel = wheelInfos[i];
            var groundObject = wheel.raycastResult.body;
            if (groundObject) {
              var axlei = axle[i];
              var wheelTrans = this.getWheelTransformWorld(i);
              wheelTrans.vectorToWorldFrame(directions[this.indexRightAxis], axlei);
              var surfNormalWS = wheel.raycastResult.hitNormalWorld;
              var proj = axlei.dot(surfNormalWS);
              surfNormalWS.scale(proj, surfNormalWS_scaled_proj);
              axlei.vsub(surfNormalWS_scaled_proj, axlei);
              axlei.normalize();
              surfNormalWS.cross(axlei, forwardWS[i]);
              forwardWS[i].normalize();
              wheel.sideImpulse = resolveSingleBilateral(chassisBody, wheel.raycastResult.hitPointWorld, groundObject, wheel.raycastResult.hitPointWorld, axlei);
              wheel.sideImpulse *= sideFrictionStiffness2;
            }
          }
          var sideFactor = 1;
          var fwdFactor = 0.5;
          this.sliding = false;
          for (var i = 0; i < numWheels; i++) {
            var wheel = wheelInfos[i];
            var groundObject = wheel.raycastResult.body;
            var rollingFriction = 0;
            wheel.slipInfo = 1;
            if (groundObject) {
              var defaultRollingFrictionImpulse = 0;
              var maxImpulse = wheel.brake ? wheel.brake : defaultRollingFrictionImpulse;
              rollingFriction = calcRollingFriction(chassisBody, groundObject, wheel.raycastResult.hitPointWorld, forwardWS[i], maxImpulse);
              rollingFriction += wheel.engineForce * timeStep;
              var factor = maxImpulse / rollingFriction;
              wheel.slipInfo *= factor;
            }
            wheel.forwardImpulse = 0;
            wheel.skidInfo = 1;
            if (groundObject) {
              wheel.skidInfo = 1;
              var maximp = wheel.suspensionForce * timeStep * wheel.frictionSlip;
              var maximpSide = maximp;
              var maximpSquared = maximp * maximpSide;
              wheel.forwardImpulse = rollingFriction;
              var x = wheel.forwardImpulse * fwdFactor;
              var y = wheel.sideImpulse * sideFactor;
              var impulseSquared = x * x + y * y;
              wheel.sliding = false;
              if (impulseSquared > maximpSquared) {
                this.sliding = true;
                wheel.sliding = true;
                var factor = maximp / Math.sqrt(impulseSquared);
                wheel.skidInfo *= factor;
              }
            }
          }
          if (this.sliding) {
            for (var i = 0; i < numWheels; i++) {
              var wheel = wheelInfos[i];
              if (wheel.sideImpulse !== 0) {
                if (wheel.skidInfo < 1) {
                  wheel.forwardImpulse *= wheel.skidInfo;
                  wheel.sideImpulse *= wheel.skidInfo;
                }
              }
            }
          }
          for (var i = 0; i < numWheels; i++) {
            var wheel = wheelInfos[i];
            var rel_pos = new Vec3();
            rel_pos.copy(wheel.raycastResult.hitPointWorld);
            if (wheel.forwardImpulse !== 0) {
              var impulse = new Vec3();
              forwardWS[i].scale(wheel.forwardImpulse, impulse);
              chassisBody.applyImpulse(impulse, rel_pos);
            }
            if (wheel.sideImpulse !== 0) {
              var groundObject = wheel.raycastResult.body;
              var rel_pos2 = new Vec3();
              rel_pos2.copy(wheel.raycastResult.hitPointWorld);
              var sideImp = new Vec3();
              axle[i].scale(wheel.sideImpulse, sideImp);
              chassisBody.pointToLocalFrame(rel_pos, rel_pos);
              rel_pos["xyz"[this.indexUpAxis]] *= wheel.rollInfluence;
              chassisBody.pointToWorldFrame(rel_pos, rel_pos);
              chassisBody.applyImpulse(sideImp, rel_pos);
              sideImp.scale(-1, sideImp);
              groundObject.applyImpulse(sideImp, rel_pos2);
            }
          }
        };
        var calcRollingFriction_vel1 = new Vec3();
        var calcRollingFriction_vel2 = new Vec3();
        var calcRollingFriction_vel = new Vec3();
        function calcRollingFriction(body0, body1, frictionPosWorld, frictionDirectionWorld, maxImpulse) {
          var j1 = 0;
          var contactPosWorld = frictionPosWorld;
          var vel1 = calcRollingFriction_vel1;
          var vel2 = calcRollingFriction_vel2;
          var vel = calcRollingFriction_vel;
          body0.getVelocityAtWorldPoint(contactPosWorld, vel1);
          body1.getVelocityAtWorldPoint(contactPosWorld, vel2);
          vel1.vsub(vel2, vel);
          var vrel = frictionDirectionWorld.dot(vel);
          var denom0 = computeImpulseDenominator(body0, frictionPosWorld, frictionDirectionWorld);
          var denom1 = computeImpulseDenominator(body1, frictionPosWorld, frictionDirectionWorld);
          var relaxation = 1;
          var jacDiagABInv = relaxation / (denom0 + denom1);
          j1 = -vrel * jacDiagABInv;
          if (maxImpulse < j1) {
            j1 = maxImpulse;
          }
          if (j1 < -maxImpulse) {
            j1 = -maxImpulse;
          }
          return j1;
        }
        var computeImpulseDenominator_r0 = new Vec3();
        var computeImpulseDenominator_c0 = new Vec3();
        var computeImpulseDenominator_vec = new Vec3();
        var computeImpulseDenominator_m = new Vec3();
        function computeImpulseDenominator(body, pos, normal) {
          var r0 = computeImpulseDenominator_r0;
          var c0 = computeImpulseDenominator_c0;
          var vec = computeImpulseDenominator_vec;
          var m = computeImpulseDenominator_m;
          pos.vsub(body.position, r0);
          r0.cross(normal, c0);
          body.invInertiaWorld.vmult(c0, m);
          m.cross(r0, vec);
          return body.invMass + normal.dot(vec);
        }
        var resolveSingleBilateral_vel1 = new Vec3();
        var resolveSingleBilateral_vel2 = new Vec3();
        var resolveSingleBilateral_vel = new Vec3();
        function resolveSingleBilateral(body1, pos1, body2, pos2, normal, impulse) {
          var normalLenSqr = normal.norm2();
          if (normalLenSqr > 1.1) {
            return 0;
          }
          var vel1 = resolveSingleBilateral_vel1;
          var vel2 = resolveSingleBilateral_vel2;
          var vel = resolveSingleBilateral_vel;
          body1.getVelocityAtWorldPoint(pos1, vel1);
          body2.getVelocityAtWorldPoint(pos2, vel2);
          vel1.vsub(vel2, vel);
          var rel_vel = normal.dot(vel);
          var contactDamping = 0.2;
          var massTerm = 1 / (body1.invMass + body2.invMass);
          var impulse = -contactDamping * rel_vel * massTerm;
          return impulse;
        }
      }, { "../collision/Ray": 9, "../collision/RaycastResult": 10, "../math/Quaternion": 28, "../math/Vec3": 30, "../objects/WheelInfo": 36, "./Body": 31 }], 33: [function(_dereq_, module4, exports3) {
        var Body = _dereq_("./Body");
        var Sphere = _dereq_("../shapes/Sphere");
        var Box = _dereq_("../shapes/Box");
        var Vec3 = _dereq_("../math/Vec3");
        var HingeConstraint = _dereq_("../constraints/HingeConstraint");
        module4.exports = RigidVehicle;
        function RigidVehicle(options) {
          this.wheelBodies = [];
          this.coordinateSystem = typeof options.coordinateSystem === "undefined" ? new Vec3(1, 2, 3) : options.coordinateSystem.clone();
          this.chassisBody = options.chassisBody;
          if (!this.chassisBody) {
            var chassisShape = new Box(new Vec3(5, 2, 0.5));
            this.chassisBody = new Body(1, chassisShape);
          }
          this.constraints = [];
          this.wheelAxes = [];
          this.wheelForces = [];
        }
        RigidVehicle.prototype.addWheel = function(options) {
          options = options || {};
          var wheelBody = options.body;
          if (!wheelBody) {
            wheelBody = new Body(1, new Sphere(1.2));
          }
          this.wheelBodies.push(wheelBody);
          this.wheelForces.push(0);
          var zero = new Vec3();
          var position = typeof options.position !== "undefined" ? options.position.clone() : new Vec3();
          var worldPosition = new Vec3();
          this.chassisBody.pointToWorldFrame(position, worldPosition);
          wheelBody.position.set(worldPosition.x, worldPosition.y, worldPosition.z);
          var axis = typeof options.axis !== "undefined" ? options.axis.clone() : new Vec3(0, 1, 0);
          this.wheelAxes.push(axis);
          var hingeConstraint = new HingeConstraint(this.chassisBody, wheelBody, {
            pivotA: position,
            axisA: axis,
            pivotB: Vec3.ZERO,
            axisB: axis,
            collideConnected: false
          });
          this.constraints.push(hingeConstraint);
          return this.wheelBodies.length - 1;
        };
        RigidVehicle.prototype.setSteeringValue = function(value, wheelIndex) {
          var axis = this.wheelAxes[wheelIndex];
          var c = Math.cos(value), s = Math.sin(value), x = axis.x, y = axis.y;
          this.constraints[wheelIndex].axisA.set(c * x - s * y, s * x + c * y, 0);
        };
        RigidVehicle.prototype.setMotorSpeed = function(value, wheelIndex) {
          var hingeConstraint = this.constraints[wheelIndex];
          hingeConstraint.enableMotor();
          hingeConstraint.motorTargetVelocity = value;
        };
        RigidVehicle.prototype.disableMotor = function(wheelIndex) {
          var hingeConstraint = this.constraints[wheelIndex];
          hingeConstraint.disableMotor();
        };
        var torque = new Vec3();
        RigidVehicle.prototype.setWheelForce = function(value, wheelIndex) {
          this.wheelForces[wheelIndex] = value;
        };
        RigidVehicle.prototype.applyWheelForce = function(value, wheelIndex) {
          var axis = this.wheelAxes[wheelIndex];
          var wheelBody = this.wheelBodies[wheelIndex];
          var bodyTorque = wheelBody.torque;
          axis.scale(value, torque);
          wheelBody.vectorToWorldFrame(torque, torque);
          bodyTorque.vadd(torque, bodyTorque);
        };
        RigidVehicle.prototype.addToWorld = function(world) {
          var constraints = this.constraints;
          var bodies = this.wheelBodies.concat([this.chassisBody]);
          for (var i = 0; i < bodies.length; i++) {
            world.add(bodies[i]);
          }
          for (var i = 0; i < constraints.length; i++) {
            world.addConstraint(constraints[i]);
          }
          world.addEventListener("preStep", this._update.bind(this));
        };
        RigidVehicle.prototype._update = function() {
          var wheelForces = this.wheelForces;
          for (var i = 0; i < wheelForces.length; i++) {
            this.applyWheelForce(wheelForces[i], i);
          }
        };
        RigidVehicle.prototype.removeFromWorld = function(world) {
          var constraints = this.constraints;
          var bodies = this.wheelBodies.concat([this.chassisBody]);
          for (var i = 0; i < bodies.length; i++) {
            world.remove(bodies[i]);
          }
          for (var i = 0; i < constraints.length; i++) {
            world.removeConstraint(constraints[i]);
          }
        };
        var worldAxis = new Vec3();
        RigidVehicle.prototype.getWheelSpeed = function(wheelIndex) {
          var axis = this.wheelAxes[wheelIndex];
          var wheelBody = this.wheelBodies[wheelIndex];
          var w = wheelBody.angularVelocity;
          this.chassisBody.vectorToWorldFrame(axis, worldAxis);
          return w.dot(worldAxis);
        };
      }, { "../constraints/HingeConstraint": 15, "../math/Vec3": 30, "../shapes/Box": 37, "../shapes/Sphere": 44, "./Body": 31 }], 34: [function(_dereq_, module4, exports3) {
        module4.exports = SPHSystem;
        var Shape = _dereq_("../shapes/Shape");
        var Vec3 = _dereq_("../math/Vec3");
        var Quaternion2 = _dereq_("../math/Quaternion");
        var Particle = _dereq_("../shapes/Particle");
        var Body = _dereq_("../objects/Body");
        var Material = _dereq_("../material/Material");
        function SPHSystem() {
          this.particles = [];
          this.density = 1;
          this.smoothingRadius = 1;
          this.speedOfSound = 1;
          this.viscosity = 0.01;
          this.eps = 1e-6;
          this.pressures = [];
          this.densities = [];
          this.neighbors = [];
        }
        SPHSystem.prototype.add = function(particle) {
          this.particles.push(particle);
          if (this.neighbors.length < this.particles.length) {
            this.neighbors.push([]);
          }
        };
        SPHSystem.prototype.remove = function(particle) {
          var idx = this.particles.indexOf(particle);
          if (idx !== -1) {
            this.particles.splice(idx, 1);
            if (this.neighbors.length > this.particles.length) {
              this.neighbors.pop();
            }
          }
        };
        var SPHSystem_getNeighbors_dist = new Vec3();
        SPHSystem.prototype.getNeighbors = function(particle, neighbors) {
          var N = this.particles.length, id = particle.id, R2 = this.smoothingRadius * this.smoothingRadius, dist = SPHSystem_getNeighbors_dist;
          for (var i = 0; i !== N; i++) {
            var p = this.particles[i];
            p.position.vsub(particle.position, dist);
            if (id !== p.id && dist.norm2() < R2) {
              neighbors.push(p);
            }
          }
        };
        var SPHSystem_update_dist = new Vec3(), SPHSystem_update_a_pressure = new Vec3(), SPHSystem_update_a_visc = new Vec3(), SPHSystem_update_gradW = new Vec3(), SPHSystem_update_r_vec = new Vec3(), SPHSystem_update_u = new Vec3();
        SPHSystem.prototype.update = function() {
          var N = this.particles.length, dist = SPHSystem_update_dist, cs = this.speedOfSound, eps = this.eps;
          for (var i = 0; i !== N; i++) {
            var p = this.particles[i];
            var neighbors = this.neighbors[i];
            neighbors.length = 0;
            this.getNeighbors(p, neighbors);
            neighbors.push(this.particles[i]);
            var numNeighbors = neighbors.length;
            var sum = 0;
            for (var j = 0; j !== numNeighbors; j++) {
              p.position.vsub(neighbors[j].position, dist);
              var len = dist.norm();
              var weight = this.w(len);
              sum += neighbors[j].mass * weight;
            }
            this.densities[i] = sum;
            this.pressures[i] = cs * cs * (this.densities[i] - this.density);
          }
          var a_pressure = SPHSystem_update_a_pressure;
          var a_visc = SPHSystem_update_a_visc;
          var gradW = SPHSystem_update_gradW;
          var r_vec = SPHSystem_update_r_vec;
          var u = SPHSystem_update_u;
          for (var i = 0; i !== N; i++) {
            var particle = this.particles[i];
            a_pressure.set(0, 0, 0);
            a_visc.set(0, 0, 0);
            var Pij;
            var nabla;
            var Vij;
            var neighbors = this.neighbors[i];
            var numNeighbors = neighbors.length;
            for (var j = 0; j !== numNeighbors; j++) {
              var neighbor = neighbors[j];
              particle.position.vsub(neighbor.position, r_vec);
              var r = r_vec.norm();
              Pij = -neighbor.mass * (this.pressures[i] / (this.densities[i] * this.densities[i] + eps) + this.pressures[j] / (this.densities[j] * this.densities[j] + eps));
              this.gradw(r_vec, gradW);
              gradW.mult(Pij, gradW);
              a_pressure.vadd(gradW, a_pressure);
              neighbor.velocity.vsub(particle.velocity, u);
              u.mult(1 / (1e-4 + this.densities[i] * this.densities[j]) * this.viscosity * neighbor.mass, u);
              nabla = this.nablaw(r);
              u.mult(nabla, u);
              a_visc.vadd(u, a_visc);
            }
            a_visc.mult(particle.mass, a_visc);
            a_pressure.mult(particle.mass, a_pressure);
            particle.force.vadd(a_visc, particle.force);
            particle.force.vadd(a_pressure, particle.force);
          }
        };
        SPHSystem.prototype.w = function(r) {
          var h = this.smoothingRadius;
          return 315 / (64 * Math.PI * Math.pow(h, 9)) * Math.pow(h * h - r * r, 3);
        };
        SPHSystem.prototype.gradw = function(rVec, resultVec) {
          var r = rVec.norm(), h = this.smoothingRadius;
          rVec.mult(945 / (32 * Math.PI * Math.pow(h, 9)) * Math.pow(h * h - r * r, 2), resultVec);
        };
        SPHSystem.prototype.nablaw = function(r) {
          var h = this.smoothingRadius;
          var nabla = 945 / (32 * Math.PI * Math.pow(h, 9)) * (h * h - r * r) * (7 * r * r - 3 * h * h);
          return nabla;
        };
      }, { "../material/Material": 25, "../math/Quaternion": 28, "../math/Vec3": 30, "../objects/Body": 31, "../shapes/Particle": 41, "../shapes/Shape": 43 }], 35: [function(_dereq_, module4, exports3) {
        var Vec3 = _dereq_("../math/Vec3");
        module4.exports = Spring;
        function Spring(bodyA, bodyB, options) {
          options = options || {};
          this.restLength = typeof options.restLength === "number" ? options.restLength : 1;
          this.stiffness = options.stiffness || 100;
          this.damping = options.damping || 1;
          this.bodyA = bodyA;
          this.bodyB = bodyB;
          this.localAnchorA = new Vec3();
          this.localAnchorB = new Vec3();
          if (options.localAnchorA) {
            this.localAnchorA.copy(options.localAnchorA);
          }
          if (options.localAnchorB) {
            this.localAnchorB.copy(options.localAnchorB);
          }
          if (options.worldAnchorA) {
            this.setWorldAnchorA(options.worldAnchorA);
          }
          if (options.worldAnchorB) {
            this.setWorldAnchorB(options.worldAnchorB);
          }
        }
        Spring.prototype.setWorldAnchorA = function(worldAnchorA) {
          this.bodyA.pointToLocalFrame(worldAnchorA, this.localAnchorA);
        };
        Spring.prototype.setWorldAnchorB = function(worldAnchorB) {
          this.bodyB.pointToLocalFrame(worldAnchorB, this.localAnchorB);
        };
        Spring.prototype.getWorldAnchorA = function(result) {
          this.bodyA.pointToWorldFrame(this.localAnchorA, result);
        };
        Spring.prototype.getWorldAnchorB = function(result) {
          this.bodyB.pointToWorldFrame(this.localAnchorB, result);
        };
        var applyForce_r = new Vec3(), applyForce_r_unit = new Vec3(), applyForce_u = new Vec3(), applyForce_f = new Vec3(), applyForce_worldAnchorA = new Vec3(), applyForce_worldAnchorB = new Vec3(), applyForce_ri = new Vec3(), applyForce_rj = new Vec3(), applyForce_ri_x_f = new Vec3(), applyForce_rj_x_f = new Vec3(), applyForce_tmp = new Vec3();
        Spring.prototype.applyForce = function() {
          var k = this.stiffness, d = this.damping, l = this.restLength, bodyA = this.bodyA, bodyB = this.bodyB, r = applyForce_r, r_unit = applyForce_r_unit, u = applyForce_u, f = applyForce_f, tmp = applyForce_tmp;
          var worldAnchorA = applyForce_worldAnchorA, worldAnchorB = applyForce_worldAnchorB, ri = applyForce_ri, rj = applyForce_rj, ri_x_f = applyForce_ri_x_f, rj_x_f = applyForce_rj_x_f;
          this.getWorldAnchorA(worldAnchorA);
          this.getWorldAnchorB(worldAnchorB);
          worldAnchorA.vsub(bodyA.position, ri);
          worldAnchorB.vsub(bodyB.position, rj);
          worldAnchorB.vsub(worldAnchorA, r);
          var rlen = r.norm();
          r_unit.copy(r);
          r_unit.normalize();
          bodyB.velocity.vsub(bodyA.velocity, u);
          bodyB.angularVelocity.cross(rj, tmp);
          u.vadd(tmp, u);
          bodyA.angularVelocity.cross(ri, tmp);
          u.vsub(tmp, u);
          r_unit.mult(-k * (rlen - l) - d * u.dot(r_unit), f);
          bodyA.force.vsub(f, bodyA.force);
          bodyB.force.vadd(f, bodyB.force);
          ri.cross(f, ri_x_f);
          rj.cross(f, rj_x_f);
          bodyA.torque.vsub(ri_x_f, bodyA.torque);
          bodyB.torque.vadd(rj_x_f, bodyB.torque);
        };
      }, { "../math/Vec3": 30 }], 36: [function(_dereq_, module4, exports3) {
        var Vec3 = _dereq_("../math/Vec3");
        var Transform = _dereq_("../math/Transform");
        var RaycastResult = _dereq_("../collision/RaycastResult");
        var Utils2 = _dereq_("../utils/Utils");
        module4.exports = WheelInfo;
        function WheelInfo(options) {
          options = Utils2.defaults(options, {
            chassisConnectionPointLocal: new Vec3(),
            chassisConnectionPointWorld: new Vec3(),
            directionLocal: new Vec3(),
            directionWorld: new Vec3(),
            axleLocal: new Vec3(),
            axleWorld: new Vec3(),
            suspensionRestLength: 1,
            suspensionMaxLength: 2,
            radius: 1,
            suspensionStiffness: 100,
            dampingCompression: 10,
            dampingRelaxation: 10,
            frictionSlip: 1e4,
            steering: 0,
            rotation: 0,
            deltaRotation: 0,
            rollInfluence: 0.01,
            maxSuspensionForce: Number.MAX_VALUE,
            isFrontWheel: true,
            clippedInvContactDotSuspension: 1,
            suspensionRelativeVelocity: 0,
            suspensionForce: 0,
            skidInfo: 0,
            suspensionLength: 0,
            maxSuspensionTravel: 1,
            useCustomSlidingRotationalSpeed: false,
            customSlidingRotationalSpeed: -0.1
          });
          this.maxSuspensionTravel = options.maxSuspensionTravel;
          this.customSlidingRotationalSpeed = options.customSlidingRotationalSpeed;
          this.useCustomSlidingRotationalSpeed = options.useCustomSlidingRotationalSpeed;
          this.sliding = false;
          this.chassisConnectionPointLocal = options.chassisConnectionPointLocal.clone();
          this.chassisConnectionPointWorld = options.chassisConnectionPointWorld.clone();
          this.directionLocal = options.directionLocal.clone();
          this.directionWorld = options.directionWorld.clone();
          this.axleLocal = options.axleLocal.clone();
          this.axleWorld = options.axleWorld.clone();
          this.suspensionRestLength = options.suspensionRestLength;
          this.suspensionMaxLength = options.suspensionMaxLength;
          this.radius = options.radius;
          this.suspensionStiffness = options.suspensionStiffness;
          this.dampingCompression = options.dampingCompression;
          this.dampingRelaxation = options.dampingRelaxation;
          this.frictionSlip = options.frictionSlip;
          this.steering = 0;
          this.rotation = 0;
          this.deltaRotation = 0;
          this.rollInfluence = options.rollInfluence;
          this.maxSuspensionForce = options.maxSuspensionForce;
          this.engineForce = 0;
          this.brake = 0;
          this.isFrontWheel = options.isFrontWheel;
          this.clippedInvContactDotSuspension = 1;
          this.suspensionRelativeVelocity = 0;
          this.suspensionForce = 0;
          this.skidInfo = 0;
          this.suspensionLength = 0;
          this.sideImpulse = 0;
          this.forwardImpulse = 0;
          this.raycastResult = new RaycastResult();
          this.worldTransform = new Transform();
          this.isInContact = false;
        }
        var chassis_velocity_at_contactPoint = new Vec3();
        var relpos = new Vec3();
        var chassis_velocity_at_contactPoint = new Vec3();
        WheelInfo.prototype.updateWheel = function(chassis) {
          var raycastResult = this.raycastResult;
          if (this.isInContact) {
            var project = raycastResult.hitNormalWorld.dot(raycastResult.directionWorld);
            raycastResult.hitPointWorld.vsub(chassis.position, relpos);
            chassis.getVelocityAtWorldPoint(relpos, chassis_velocity_at_contactPoint);
            var projVel = raycastResult.hitNormalWorld.dot(chassis_velocity_at_contactPoint);
            if (project >= -0.1) {
              this.suspensionRelativeVelocity = 0;
              this.clippedInvContactDotSuspension = 1 / 0.1;
            } else {
              var inv = -1 / project;
              this.suspensionRelativeVelocity = projVel * inv;
              this.clippedInvContactDotSuspension = inv;
            }
          } else {
            raycastResult.suspensionLength = this.suspensionRestLength;
            this.suspensionRelativeVelocity = 0;
            raycastResult.directionWorld.scale(-1, raycastResult.hitNormalWorld);
            this.clippedInvContactDotSuspension = 1;
          }
        };
      }, { "../collision/RaycastResult": 10, "../math/Transform": 29, "../math/Vec3": 30, "../utils/Utils": 53 }], 37: [function(_dereq_, module4, exports3) {
        module4.exports = Box;
        var Shape = _dereq_("./Shape");
        var Vec3 = _dereq_("../math/Vec3");
        var ConvexPolyhedron = _dereq_("./ConvexPolyhedron");
        function Box(halfExtents) {
          Shape.call(this);
          this.type = Shape.types.BOX;
          this.halfExtents = halfExtents;
          this.convexPolyhedronRepresentation = null;
          this.updateConvexPolyhedronRepresentation();
          this.updateBoundingSphereRadius();
        }
        Box.prototype = new Shape();
        Box.prototype.constructor = Box;
        Box.prototype.updateConvexPolyhedronRepresentation = function() {
          var sx = this.halfExtents.x;
          var sy = this.halfExtents.y;
          var sz = this.halfExtents.z;
          var V = Vec3;
          var vertices = [
            new V(-sx, -sy, -sz),
            new V(sx, -sy, -sz),
            new V(sx, sy, -sz),
            new V(-sx, sy, -sz),
            new V(-sx, -sy, sz),
            new V(sx, -sy, sz),
            new V(sx, sy, sz),
            new V(-sx, sy, sz)
          ];
          var indices = [
            [3, 2, 1, 0],
            [4, 5, 6, 7],
            [5, 4, 0, 1],
            [2, 3, 7, 6],
            [0, 4, 7, 3],
            [1, 2, 6, 5]
          ];
          var axes = [
            new V(0, 0, 1),
            new V(0, 1, 0),
            new V(1, 0, 0)
          ];
          var h = new ConvexPolyhedron(vertices, indices);
          this.convexPolyhedronRepresentation = h;
          h.material = this.material;
        };
        Box.prototype.calculateLocalInertia = function(mass, target) {
          target = target || new Vec3();
          Box.calculateInertia(this.halfExtents, mass, target);
          return target;
        };
        Box.calculateInertia = function(halfExtents, mass, target) {
          var e = halfExtents;
          target.x = 1 / 12 * mass * (2 * e.y * 2 * e.y + 2 * e.z * 2 * e.z);
          target.y = 1 / 12 * mass * (2 * e.x * 2 * e.x + 2 * e.z * 2 * e.z);
          target.z = 1 / 12 * mass * (2 * e.y * 2 * e.y + 2 * e.x * 2 * e.x);
        };
        Box.prototype.getSideNormals = function(sixTargetVectors, quat) {
          var sides = sixTargetVectors;
          var ex = this.halfExtents;
          sides[0].set(ex.x, 0, 0);
          sides[1].set(0, ex.y, 0);
          sides[2].set(0, 0, ex.z);
          sides[3].set(-ex.x, 0, 0);
          sides[4].set(0, -ex.y, 0);
          sides[5].set(0, 0, -ex.z);
          if (quat !== void 0) {
            for (var i = 0; i !== sides.length; i++) {
              quat.vmult(sides[i], sides[i]);
            }
          }
          return sides;
        };
        Box.prototype.volume = function() {
          return 8 * this.halfExtents.x * this.halfExtents.y * this.halfExtents.z;
        };
        Box.prototype.updateBoundingSphereRadius = function() {
          this.boundingSphereRadius = this.halfExtents.norm();
        };
        var worldCornerTempPos = new Vec3();
        var worldCornerTempNeg = new Vec3();
        Box.prototype.forEachWorldCorner = function(pos, quat, callback) {
          var e = this.halfExtents;
          var corners = [
            [e.x, e.y, e.z],
            [-e.x, e.y, e.z],
            [-e.x, -e.y, e.z],
            [-e.x, -e.y, -e.z],
            [e.x, -e.y, -e.z],
            [e.x, e.y, -e.z],
            [-e.x, e.y, -e.z],
            [e.x, -e.y, e.z]
          ];
          for (var i = 0; i < corners.length; i++) {
            worldCornerTempPos.set(corners[i][0], corners[i][1], corners[i][2]);
            quat.vmult(worldCornerTempPos, worldCornerTempPos);
            pos.vadd(worldCornerTempPos, worldCornerTempPos);
            callback(worldCornerTempPos.x, worldCornerTempPos.y, worldCornerTempPos.z);
          }
        };
        var worldCornersTemp = [
          new Vec3(),
          new Vec3(),
          new Vec3(),
          new Vec3(),
          new Vec3(),
          new Vec3(),
          new Vec3(),
          new Vec3()
        ];
        Box.prototype.calculateWorldAABB = function(pos, quat, min, max) {
          var e = this.halfExtents;
          worldCornersTemp[0].set(e.x, e.y, e.z);
          worldCornersTemp[1].set(-e.x, e.y, e.z);
          worldCornersTemp[2].set(-e.x, -e.y, e.z);
          worldCornersTemp[3].set(-e.x, -e.y, -e.z);
          worldCornersTemp[4].set(e.x, -e.y, -e.z);
          worldCornersTemp[5].set(e.x, e.y, -e.z);
          worldCornersTemp[6].set(-e.x, e.y, -e.z);
          worldCornersTemp[7].set(e.x, -e.y, e.z);
          var wc = worldCornersTemp[0];
          quat.vmult(wc, wc);
          pos.vadd(wc, wc);
          max.copy(wc);
          min.copy(wc);
          for (var i = 1; i < 8; i++) {
            var wc = worldCornersTemp[i];
            quat.vmult(wc, wc);
            pos.vadd(wc, wc);
            var x = wc.x;
            var y = wc.y;
            var z = wc.z;
            if (x > max.x) {
              max.x = x;
            }
            if (y > max.y) {
              max.y = y;
            }
            if (z > max.z) {
              max.z = z;
            }
            if (x < min.x) {
              min.x = x;
            }
            if (y < min.y) {
              min.y = y;
            }
            if (z < min.z) {
              min.z = z;
            }
          }
        };
      }, { "../math/Vec3": 30, "./ConvexPolyhedron": 38, "./Shape": 43 }], 38: [function(_dereq_, module4, exports3) {
        module4.exports = ConvexPolyhedron;
        var Shape = _dereq_("./Shape");
        var Vec3 = _dereq_("../math/Vec3");
        var Quaternion2 = _dereq_("../math/Quaternion");
        var Transform = _dereq_("../math/Transform");
        function ConvexPolyhedron(points, faces, uniqueAxes) {
          var that = this;
          Shape.call(this);
          this.type = Shape.types.CONVEXPOLYHEDRON;
          this.vertices = points || [];
          this.worldVertices = [];
          this.worldVerticesNeedsUpdate = true;
          this.faces = faces || [];
          this.faceNormals = [];
          this.computeNormals();
          this.worldFaceNormalsNeedsUpdate = true;
          this.worldFaceNormals = [];
          this.uniqueEdges = [];
          this.uniqueAxes = uniqueAxes ? uniqueAxes.slice() : null;
          this.computeEdges();
          this.updateBoundingSphereRadius();
        }
        ConvexPolyhedron.prototype = new Shape();
        ConvexPolyhedron.prototype.constructor = ConvexPolyhedron;
        var computeEdges_tmpEdge = new Vec3();
        ConvexPolyhedron.prototype.computeEdges = function() {
          var faces = this.faces;
          var vertices = this.vertices;
          var nv = vertices.length;
          var edges = this.uniqueEdges;
          edges.length = 0;
          var edge = computeEdges_tmpEdge;
          for (var i = 0; i !== faces.length; i++) {
            var face = faces[i];
            var numVertices = face.length;
            for (var j = 0; j !== numVertices; j++) {
              var k = (j + 1) % numVertices;
              vertices[face[j]].vsub(vertices[face[k]], edge);
              edge.normalize();
              var found = false;
              for (var p = 0; p !== edges.length; p++) {
                if (edges[p].almostEquals(edge) || edges[p].almostEquals(edge)) {
                  found = true;
                  break;
                }
              }
              if (!found) {
                edges.push(edge.clone());
              }
            }
          }
        };
        ConvexPolyhedron.prototype.computeNormals = function() {
          this.faceNormals.length = this.faces.length;
          for (var i = 0; i < this.faces.length; i++) {
            for (var j = 0; j < this.faces[i].length; j++) {
              if (!this.vertices[this.faces[i][j]]) {
                throw new Error("Vertex " + this.faces[i][j] + " not found!");
              }
            }
            var n = this.faceNormals[i] || new Vec3();
            this.getFaceNormal(i, n);
            n.negate(n);
            this.faceNormals[i] = n;
            var vertex = this.vertices[this.faces[i][0]];
            if (n.dot(vertex) < 0) {
              console.error(".faceNormals[" + i + "] = Vec3(" + n.toString() + ") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");
              for (var j = 0; j < this.faces[i].length; j++) {
                console.warn(".vertices[" + this.faces[i][j] + "] = Vec3(" + this.vertices[this.faces[i][j]].toString() + ")");
              }
            }
          }
        };
        var cb = new Vec3();
        var ab = new Vec3();
        ConvexPolyhedron.computeNormal = function(va, vb, vc, target) {
          vb.vsub(va, ab);
          vc.vsub(vb, cb);
          cb.cross(ab, target);
          if (!target.isZero()) {
            target.normalize();
          }
        };
        ConvexPolyhedron.prototype.getFaceNormal = function(i, target) {
          var f = this.faces[i];
          var va = this.vertices[f[0]];
          var vb = this.vertices[f[1]];
          var vc = this.vertices[f[2]];
          return ConvexPolyhedron.computeNormal(va, vb, vc, target);
        };
        var cah_WorldNormal = new Vec3();
        ConvexPolyhedron.prototype.clipAgainstHull = function(posA, quatA, hullB, posB, quatB, separatingNormal, minDist, maxDist, result) {
          var WorldNormal = cah_WorldNormal;
          var hullA = this;
          var curMaxDist = maxDist;
          var closestFaceB = -1;
          var dmax = -Number.MAX_VALUE;
          for (var face = 0; face < hullB.faces.length; face++) {
            WorldNormal.copy(hullB.faceNormals[face]);
            quatB.vmult(WorldNormal, WorldNormal);
            var d = WorldNormal.dot(separatingNormal);
            if (d > dmax) {
              dmax = d;
              closestFaceB = face;
            }
          }
          var worldVertsB1 = [];
          var polyB = hullB.faces[closestFaceB];
          var numVertices = polyB.length;
          for (var e0 = 0; e0 < numVertices; e0++) {
            var b = hullB.vertices[polyB[e0]];
            var worldb = new Vec3();
            worldb.copy(b);
            quatB.vmult(worldb, worldb);
            posB.vadd(worldb, worldb);
            worldVertsB1.push(worldb);
          }
          if (closestFaceB >= 0) {
            this.clipFaceAgainstHull(separatingNormal, posA, quatA, worldVertsB1, minDist, maxDist, result);
          }
        };
        var fsa_faceANormalWS3 = new Vec3(), fsa_Worldnormal1 = new Vec3(), fsa_deltaC = new Vec3(), fsa_worldEdge0 = new Vec3(), fsa_worldEdge1 = new Vec3(), fsa_Cross = new Vec3();
        ConvexPolyhedron.prototype.findSeparatingAxis = function(hullB, posA, quatA, posB, quatB, target, faceListA, faceListB) {
          var faceANormalWS3 = fsa_faceANormalWS3, Worldnormal1 = fsa_Worldnormal1, deltaC = fsa_deltaC, worldEdge0 = fsa_worldEdge0, worldEdge1 = fsa_worldEdge1, Cross = fsa_Cross;
          var dmin = Number.MAX_VALUE;
          var hullA = this;
          var curPlaneTests = 0;
          if (!hullA.uniqueAxes) {
            var numFacesA = faceListA ? faceListA.length : hullA.faces.length;
            for (var i = 0; i < numFacesA; i++) {
              var fi = faceListA ? faceListA[i] : i;
              faceANormalWS3.copy(hullA.faceNormals[fi]);
              quatA.vmult(faceANormalWS3, faceANormalWS3);
              var d = hullA.testSepAxis(faceANormalWS3, hullB, posA, quatA, posB, quatB);
              if (d === false) {
                return false;
              }
              if (d < dmin) {
                dmin = d;
                target.copy(faceANormalWS3);
              }
            }
          } else {
            for (var i = 0; i !== hullA.uniqueAxes.length; i++) {
              quatA.vmult(hullA.uniqueAxes[i], faceANormalWS3);
              var d = hullA.testSepAxis(faceANormalWS3, hullB, posA, quatA, posB, quatB);
              if (d === false) {
                return false;
              }
              if (d < dmin) {
                dmin = d;
                target.copy(faceANormalWS3);
              }
            }
          }
          if (!hullB.uniqueAxes) {
            var numFacesB = faceListB ? faceListB.length : hullB.faces.length;
            for (var i = 0; i < numFacesB; i++) {
              var fi = faceListB ? faceListB[i] : i;
              Worldnormal1.copy(hullB.faceNormals[fi]);
              quatB.vmult(Worldnormal1, Worldnormal1);
              curPlaneTests++;
              var d = hullA.testSepAxis(Worldnormal1, hullB, posA, quatA, posB, quatB);
              if (d === false) {
                return false;
              }
              if (d < dmin) {
                dmin = d;
                target.copy(Worldnormal1);
              }
            }
          } else {
            for (var i = 0; i !== hullB.uniqueAxes.length; i++) {
              quatB.vmult(hullB.uniqueAxes[i], Worldnormal1);
              curPlaneTests++;
              var d = hullA.testSepAxis(Worldnormal1, hullB, posA, quatA, posB, quatB);
              if (d === false) {
                return false;
              }
              if (d < dmin) {
                dmin = d;
                target.copy(Worldnormal1);
              }
            }
          }
          for (var e0 = 0; e0 !== hullA.uniqueEdges.length; e0++) {
            quatA.vmult(hullA.uniqueEdges[e0], worldEdge0);
            for (var e1 = 0; e1 !== hullB.uniqueEdges.length; e1++) {
              quatB.vmult(hullB.uniqueEdges[e1], worldEdge1);
              worldEdge0.cross(worldEdge1, Cross);
              if (!Cross.almostZero()) {
                Cross.normalize();
                var dist = hullA.testSepAxis(Cross, hullB, posA, quatA, posB, quatB);
                if (dist === false) {
                  return false;
                }
                if (dist < dmin) {
                  dmin = dist;
                  target.copy(Cross);
                }
              }
            }
          }
          posB.vsub(posA, deltaC);
          if (deltaC.dot(target) > 0) {
            target.negate(target);
          }
          return true;
        };
        var maxminA = [], maxminB = [];
        ConvexPolyhedron.prototype.testSepAxis = function(axis, hullB, posA, quatA, posB, quatB) {
          var hullA = this;
          ConvexPolyhedron.project(hullA, axis, posA, quatA, maxminA);
          ConvexPolyhedron.project(hullB, axis, posB, quatB, maxminB);
          var maxA = maxminA[0];
          var minA = maxminA[1];
          var maxB = maxminB[0];
          var minB = maxminB[1];
          if (maxA < minB || maxB < minA) {
            return false;
          }
          var d0 = maxA - minB;
          var d1 = maxB - minA;
          var depth = d0 < d1 ? d0 : d1;
          return depth;
        };
        var cli_aabbmin = new Vec3(), cli_aabbmax = new Vec3();
        ConvexPolyhedron.prototype.calculateLocalInertia = function(mass, target) {
          this.computeLocalAABB(cli_aabbmin, cli_aabbmax);
          var x = cli_aabbmax.x - cli_aabbmin.x, y = cli_aabbmax.y - cli_aabbmin.y, z = cli_aabbmax.z - cli_aabbmin.z;
          target.x = 1 / 12 * mass * (2 * y * 2 * y + 2 * z * 2 * z);
          target.y = 1 / 12 * mass * (2 * x * 2 * x + 2 * z * 2 * z);
          target.z = 1 / 12 * mass * (2 * y * 2 * y + 2 * x * 2 * x);
        };
        ConvexPolyhedron.prototype.getPlaneConstantOfFace = function(face_i) {
          var f = this.faces[face_i];
          var n = this.faceNormals[face_i];
          var v = this.vertices[f[0]];
          var c = -n.dot(v);
          return c;
        };
        var cfah_faceANormalWS = new Vec3(), cfah_edge0 = new Vec3(), cfah_WorldEdge0 = new Vec3(), cfah_worldPlaneAnormal1 = new Vec3(), cfah_planeNormalWS1 = new Vec3(), cfah_worldA1 = new Vec3(), cfah_localPlaneNormal = new Vec3(), cfah_planeNormalWS = new Vec3();
        ConvexPolyhedron.prototype.clipFaceAgainstHull = function(separatingNormal, posA, quatA, worldVertsB1, minDist, maxDist, result) {
          var faceANormalWS = cfah_faceANormalWS, edge0 = cfah_edge0, WorldEdge0 = cfah_WorldEdge0, worldPlaneAnormal1 = cfah_worldPlaneAnormal1, planeNormalWS1 = cfah_planeNormalWS1, worldA1 = cfah_worldA1, localPlaneNormal = cfah_localPlaneNormal, planeNormalWS = cfah_planeNormalWS;
          var hullA = this;
          var worldVertsB2 = [];
          var pVtxIn = worldVertsB1;
          var pVtxOut = worldVertsB2;
          var closestFaceA = -1;
          var dmin = Number.MAX_VALUE;
          for (var face = 0; face < hullA.faces.length; face++) {
            faceANormalWS.copy(hullA.faceNormals[face]);
            quatA.vmult(faceANormalWS, faceANormalWS);
            var d = faceANormalWS.dot(separatingNormal);
            if (d < dmin) {
              dmin = d;
              closestFaceA = face;
            }
          }
          if (closestFaceA < 0) {
            return;
          }
          var polyA = hullA.faces[closestFaceA];
          polyA.connectedFaces = [];
          for (var i = 0; i < hullA.faces.length; i++) {
            for (var j = 0; j < hullA.faces[i].length; j++) {
              if (polyA.indexOf(hullA.faces[i][j]) !== -1 && i !== closestFaceA && polyA.connectedFaces.indexOf(i) === -1) {
                polyA.connectedFaces.push(i);
              }
            }
          }
          var numContacts = pVtxIn.length;
          var numVerticesA = polyA.length;
          var res = [];
          for (var e0 = 0; e0 < numVerticesA; e0++) {
            var a = hullA.vertices[polyA[e0]];
            var b = hullA.vertices[polyA[(e0 + 1) % numVerticesA]];
            a.vsub(b, edge0);
            WorldEdge0.copy(edge0);
            quatA.vmult(WorldEdge0, WorldEdge0);
            posA.vadd(WorldEdge0, WorldEdge0);
            worldPlaneAnormal1.copy(this.faceNormals[closestFaceA]);
            quatA.vmult(worldPlaneAnormal1, worldPlaneAnormal1);
            posA.vadd(worldPlaneAnormal1, worldPlaneAnormal1);
            WorldEdge0.cross(worldPlaneAnormal1, planeNormalWS1);
            planeNormalWS1.negate(planeNormalWS1);
            worldA1.copy(a);
            quatA.vmult(worldA1, worldA1);
            posA.vadd(worldA1, worldA1);
            var planeEqWS1 = -worldA1.dot(planeNormalWS1);
            var planeEqWS;
            if (true) {
              var otherFace = polyA.connectedFaces[e0];
              localPlaneNormal.copy(this.faceNormals[otherFace]);
              var localPlaneEq = this.getPlaneConstantOfFace(otherFace);
              planeNormalWS.copy(localPlaneNormal);
              quatA.vmult(planeNormalWS, planeNormalWS);
              var planeEqWS = localPlaneEq - planeNormalWS.dot(posA);
            } else {
              planeNormalWS.copy(planeNormalWS1);
              planeEqWS = planeEqWS1;
            }
            this.clipFaceAgainstPlane(pVtxIn, pVtxOut, planeNormalWS, planeEqWS);
            while (pVtxIn.length) {
              pVtxIn.shift();
            }
            while (pVtxOut.length) {
              pVtxIn.push(pVtxOut.shift());
            }
          }
          localPlaneNormal.copy(this.faceNormals[closestFaceA]);
          var localPlaneEq = this.getPlaneConstantOfFace(closestFaceA);
          planeNormalWS.copy(localPlaneNormal);
          quatA.vmult(planeNormalWS, planeNormalWS);
          var planeEqWS = localPlaneEq - planeNormalWS.dot(posA);
          for (var i = 0; i < pVtxIn.length; i++) {
            var depth = planeNormalWS.dot(pVtxIn[i]) + planeEqWS;
            if (depth <= minDist) {
              console.log("clamped: depth=" + depth + " to minDist=" + (minDist + ""));
              depth = minDist;
            }
            if (depth <= maxDist) {
              var point = pVtxIn[i];
              if (depth <= 0) {
                var p = {
                  point,
                  normal: planeNormalWS,
                  depth
                };
                result.push(p);
              }
            }
          }
        };
        ConvexPolyhedron.prototype.clipFaceAgainstPlane = function(inVertices, outVertices, planeNormal, planeConstant) {
          var n_dot_first, n_dot_last;
          var numVerts = inVertices.length;
          if (numVerts < 2) {
            return outVertices;
          }
          var firstVertex = inVertices[inVertices.length - 1], lastVertex = inVertices[0];
          n_dot_first = planeNormal.dot(firstVertex) + planeConstant;
          for (var vi = 0; vi < numVerts; vi++) {
            lastVertex = inVertices[vi];
            n_dot_last = planeNormal.dot(lastVertex) + planeConstant;
            if (n_dot_first < 0) {
              if (n_dot_last < 0) {
                var newv = new Vec3();
                newv.copy(lastVertex);
                outVertices.push(newv);
              } else {
                var newv = new Vec3();
                firstVertex.lerp(lastVertex, n_dot_first / (n_dot_first - n_dot_last), newv);
                outVertices.push(newv);
              }
            } else {
              if (n_dot_last < 0) {
                var newv = new Vec3();
                firstVertex.lerp(lastVertex, n_dot_first / (n_dot_first - n_dot_last), newv);
                outVertices.push(newv);
                outVertices.push(lastVertex);
              }
            }
            firstVertex = lastVertex;
            n_dot_first = n_dot_last;
          }
          return outVertices;
        };
        ConvexPolyhedron.prototype.computeWorldVertices = function(position, quat) {
          var N = this.vertices.length;
          while (this.worldVertices.length < N) {
            this.worldVertices.push(new Vec3());
          }
          var verts = this.vertices, worldVerts = this.worldVertices;
          for (var i = 0; i !== N; i++) {
            quat.vmult(verts[i], worldVerts[i]);
            position.vadd(worldVerts[i], worldVerts[i]);
          }
          this.worldVerticesNeedsUpdate = false;
        };
        var computeLocalAABB_worldVert = new Vec3();
        ConvexPolyhedron.prototype.computeLocalAABB = function(aabbmin, aabbmax) {
          var n = this.vertices.length, vertices = this.vertices, worldVert = computeLocalAABB_worldVert;
          aabbmin.set(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
          aabbmax.set(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
          for (var i = 0; i < n; i++) {
            var v = vertices[i];
            if (v.x < aabbmin.x) {
              aabbmin.x = v.x;
            } else if (v.x > aabbmax.x) {
              aabbmax.x = v.x;
            }
            if (v.y < aabbmin.y) {
              aabbmin.y = v.y;
            } else if (v.y > aabbmax.y) {
              aabbmax.y = v.y;
            }
            if (v.z < aabbmin.z) {
              aabbmin.z = v.z;
            } else if (v.z > aabbmax.z) {
              aabbmax.z = v.z;
            }
          }
        };
        ConvexPolyhedron.prototype.computeWorldFaceNormals = function(quat) {
          var N = this.faceNormals.length;
          while (this.worldFaceNormals.length < N) {
            this.worldFaceNormals.push(new Vec3());
          }
          var normals = this.faceNormals, worldNormals = this.worldFaceNormals;
          for (var i = 0; i !== N; i++) {
            quat.vmult(normals[i], worldNormals[i]);
          }
          this.worldFaceNormalsNeedsUpdate = false;
        };
        ConvexPolyhedron.prototype.updateBoundingSphereRadius = function() {
          var max2 = 0;
          var verts = this.vertices;
          for (var i = 0, N = verts.length; i !== N; i++) {
            var norm2 = verts[i].norm2();
            if (norm2 > max2) {
              max2 = norm2;
            }
          }
          this.boundingSphereRadius = Math.sqrt(max2);
        };
        var tempWorldVertex = new Vec3();
        ConvexPolyhedron.prototype.calculateWorldAABB = function(pos, quat, min, max) {
          var n = this.vertices.length, verts = this.vertices;
          var minx, miny, minz, maxx, maxy, maxz;
          for (var i = 0; i < n; i++) {
            tempWorldVertex.copy(verts[i]);
            quat.vmult(tempWorldVertex, tempWorldVertex);
            pos.vadd(tempWorldVertex, tempWorldVertex);
            var v = tempWorldVertex;
            if (v.x < minx || minx === void 0) {
              minx = v.x;
            } else if (v.x > maxx || maxx === void 0) {
              maxx = v.x;
            }
            if (v.y < miny || miny === void 0) {
              miny = v.y;
            } else if (v.y > maxy || maxy === void 0) {
              maxy = v.y;
            }
            if (v.z < minz || minz === void 0) {
              minz = v.z;
            } else if (v.z > maxz || maxz === void 0) {
              maxz = v.z;
            }
          }
          min.set(minx, miny, minz);
          max.set(maxx, maxy, maxz);
        };
        ConvexPolyhedron.prototype.volume = function() {
          return 4 * Math.PI * this.boundingSphereRadius / 3;
        };
        ConvexPolyhedron.prototype.getAveragePointLocal = function(target) {
          target = target || new Vec3();
          var n = this.vertices.length, verts = this.vertices;
          for (var i = 0; i < n; i++) {
            target.vadd(verts[i], target);
          }
          target.mult(1 / n, target);
          return target;
        };
        ConvexPolyhedron.prototype.transformAllPoints = function(offset, quat) {
          var n = this.vertices.length, verts = this.vertices;
          if (quat) {
            for (var i = 0; i < n; i++) {
              var v = verts[i];
              quat.vmult(v, v);
            }
            for (var i = 0; i < this.faceNormals.length; i++) {
              var v = this.faceNormals[i];
              quat.vmult(v, v);
            }
          }
          if (offset) {
            for (var i = 0; i < n; i++) {
              var v = verts[i];
              v.vadd(offset, v);
            }
          }
        };
        var ConvexPolyhedron_pointIsInside = new Vec3();
        var ConvexPolyhedron_vToP = new Vec3();
        var ConvexPolyhedron_vToPointInside = new Vec3();
        ConvexPolyhedron.prototype.pointIsInside = function(p) {
          var n = this.vertices.length, verts = this.vertices, faces = this.faces, normals = this.faceNormals;
          var positiveResult = null;
          var N = this.faces.length;
          var pointInside = ConvexPolyhedron_pointIsInside;
          this.getAveragePointLocal(pointInside);
          for (var i = 0; i < N; i++) {
            var numVertices = this.faces[i].length;
            var n = normals[i];
            var v = verts[faces[i][0]];
            var vToP = ConvexPolyhedron_vToP;
            p.vsub(v, vToP);
            var r1 = n.dot(vToP);
            var vToPointInside = ConvexPolyhedron_vToPointInside;
            pointInside.vsub(v, vToPointInside);
            var r2 = n.dot(vToPointInside);
            if (r1 < 0 && r2 > 0 || r1 > 0 && r2 < 0) {
              return false;
            } else {
            }
          }
          return positiveResult ? 1 : -1;
        };
        var project_worldVertex = new Vec3();
        var project_localAxis = new Vec3();
        var project_localOrigin = new Vec3();
        ConvexPolyhedron.project = function(hull, axis, pos, quat, result) {
          var n = hull.vertices.length, worldVertex = project_worldVertex, localAxis = project_localAxis, max = 0, min = 0, localOrigin = project_localOrigin, vs = hull.vertices;
          localOrigin.setZero();
          Transform.vectorToLocalFrame(pos, quat, axis, localAxis);
          Transform.pointToLocalFrame(pos, quat, localOrigin, localOrigin);
          var add = localOrigin.dot(localAxis);
          min = max = vs[0].dot(localAxis);
          for (var i = 1; i < n; i++) {
            var val = vs[i].dot(localAxis);
            if (val > max) {
              max = val;
            }
            if (val < min) {
              min = val;
            }
          }
          min -= add;
          max -= add;
          if (min > max) {
            var temp = min;
            min = max;
            max = temp;
          }
          result[0] = max;
          result[1] = min;
        };
      }, { "../math/Quaternion": 28, "../math/Transform": 29, "../math/Vec3": 30, "./Shape": 43 }], 39: [function(_dereq_, module4, exports3) {
        module4.exports = Cylinder;
        var Shape = _dereq_("./Shape");
        var Vec3 = _dereq_("../math/Vec3");
        var Quaternion2 = _dereq_("../math/Quaternion");
        var ConvexPolyhedron = _dereq_("./ConvexPolyhedron");
        function Cylinder(radiusTop, radiusBottom, height, numSegments) {
          var N = numSegments, verts = [], axes = [], faces = [], bottomface = [], topface = [], cos = Math.cos, sin = Math.sin;
          verts.push(new Vec3(radiusBottom * cos(0), radiusBottom * sin(0), -height * 0.5));
          bottomface.push(0);
          verts.push(new Vec3(radiusTop * cos(0), radiusTop * sin(0), height * 0.5));
          topface.push(1);
          for (var i = 0; i < N; i++) {
            var theta = 2 * Math.PI / N * (i + 1);
            var thetaN = 2 * Math.PI / N * (i + 0.5);
            if (i < N - 1) {
              verts.push(new Vec3(radiusBottom * cos(theta), radiusBottom * sin(theta), -height * 0.5));
              bottomface.push(2 * i + 2);
              verts.push(new Vec3(radiusTop * cos(theta), radiusTop * sin(theta), height * 0.5));
              topface.push(2 * i + 3);
              faces.push([2 * i + 2, 2 * i + 3, 2 * i + 1, 2 * i]);
            } else {
              faces.push([0, 1, 2 * i + 1, 2 * i]);
            }
            if (N % 2 === 1 || i < N / 2) {
              axes.push(new Vec3(cos(thetaN), sin(thetaN), 0));
            }
          }
          faces.push(topface);
          axes.push(new Vec3(0, 0, 1));
          var temp = [];
          for (var i = 0; i < bottomface.length; i++) {
            temp.push(bottomface[bottomface.length - i - 1]);
          }
          faces.push(temp);
          this.type = Shape.types.CONVEXPOLYHEDRON;
          ConvexPolyhedron.call(this, verts, faces, axes);
        }
        Cylinder.prototype = new ConvexPolyhedron();
      }, { "../math/Quaternion": 28, "../math/Vec3": 30, "./ConvexPolyhedron": 38, "./Shape": 43 }], 40: [function(_dereq_, module4, exports3) {
        var Shape = _dereq_("./Shape");
        var ConvexPolyhedron = _dereq_("./ConvexPolyhedron");
        var Vec3 = _dereq_("../math/Vec3");
        var Utils2 = _dereq_("../utils/Utils");
        module4.exports = Heightfield;
        function Heightfield(data, options) {
          options = Utils2.defaults(options, {
            maxValue: null,
            minValue: null,
            elementSize: 1
          });
          this.data = data;
          this.maxValue = options.maxValue;
          this.minValue = options.minValue;
          this.elementSize = options.elementSize;
          if (options.minValue === null) {
            this.updateMinValue();
          }
          if (options.maxValue === null) {
            this.updateMaxValue();
          }
          this.cacheEnabled = true;
          Shape.call(this);
          this.pillarConvex = new ConvexPolyhedron();
          this.pillarOffset = new Vec3();
          this.type = Shape.types.HEIGHTFIELD;
          this.updateBoundingSphereRadius();
          this._cachedPillars = {};
        }
        Heightfield.prototype = new Shape();
        Heightfield.prototype.update = function() {
          this._cachedPillars = {};
        };
        Heightfield.prototype.updateMinValue = function() {
          var data = this.data;
          var minValue = data[0][0];
          for (var i = 0; i !== data.length; i++) {
            for (var j = 0; j !== data[i].length; j++) {
              var v = data[i][j];
              if (v < minValue) {
                minValue = v;
              }
            }
          }
          this.minValue = minValue;
        };
        Heightfield.prototype.updateMaxValue = function() {
          var data = this.data;
          var maxValue = data[0][0];
          for (var i = 0; i !== data.length; i++) {
            for (var j = 0; j !== data[i].length; j++) {
              var v = data[i][j];
              if (v > maxValue) {
                maxValue = v;
              }
            }
          }
          this.maxValue = maxValue;
        };
        Heightfield.prototype.setHeightValueAtIndex = function(xi, yi, value) {
          var data = this.data;
          data[xi][yi] = value;
          this.clearCachedConvexTrianglePillar(xi, yi, false);
          if (xi > 0) {
            this.clearCachedConvexTrianglePillar(xi - 1, yi, true);
            this.clearCachedConvexTrianglePillar(xi - 1, yi, false);
          }
          if (yi > 0) {
            this.clearCachedConvexTrianglePillar(xi, yi - 1, true);
            this.clearCachedConvexTrianglePillar(xi, yi - 1, false);
          }
          if (yi > 0 && xi > 0) {
            this.clearCachedConvexTrianglePillar(xi - 1, yi - 1, true);
          }
        };
        Heightfield.prototype.getRectMinMax = function(iMinX, iMinY, iMaxX, iMaxY, result) {
          result = result || [];
          var data = this.data, max = this.minValue;
          for (var i = iMinX; i <= iMaxX; i++) {
            for (var j = iMinY; j <= iMaxY; j++) {
              var height = data[i][j];
              if (height > max) {
                max = height;
              }
            }
          }
          result[0] = this.minValue;
          result[1] = max;
        };
        Heightfield.prototype.getIndexOfPosition = function(x, y, result, clamp) {
          var w = this.elementSize;
          var data = this.data;
          var xi = Math.floor(x / w);
          var yi = Math.floor(y / w);
          result[0] = xi;
          result[1] = yi;
          if (clamp) {
            if (xi < 0) {
              xi = 0;
            }
            if (yi < 0) {
              yi = 0;
            }
            if (xi >= data.length - 1) {
              xi = data.length - 1;
            }
            if (yi >= data[0].length - 1) {
              yi = data[0].length - 1;
            }
          }
          if (xi < 0 || yi < 0 || xi >= data.length - 1 || yi >= data[0].length - 1) {
            return false;
          }
          return true;
        };
        Heightfield.prototype.getHeightAt = function(x, y, edgeClamp) {
          var idx = [];
          this.getIndexOfPosition(x, y, idx, edgeClamp);
          var minmax = [];
          this.getRectMinMax(idx[0], idx[1] + 1, idx[0], idx[1] + 1, minmax);
          return (minmax[0] + minmax[1]) / 2;
        };
        Heightfield.prototype.getCacheConvexTrianglePillarKey = function(xi, yi, getUpperTriangle) {
          return xi + "_" + yi + "_" + (getUpperTriangle ? 1 : 0);
        };
        Heightfield.prototype.getCachedConvexTrianglePillar = function(xi, yi, getUpperTriangle) {
          return this._cachedPillars[this.getCacheConvexTrianglePillarKey(xi, yi, getUpperTriangle)];
        };
        Heightfield.prototype.setCachedConvexTrianglePillar = function(xi, yi, getUpperTriangle, convex, offset) {
          this._cachedPillars[this.getCacheConvexTrianglePillarKey(xi, yi, getUpperTriangle)] = {
            convex,
            offset
          };
        };
        Heightfield.prototype.clearCachedConvexTrianglePillar = function(xi, yi, getUpperTriangle) {
          delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(xi, yi, getUpperTriangle)];
        };
        Heightfield.prototype.getConvexTrianglePillar = function(xi, yi, getUpperTriangle) {
          var result = this.pillarConvex;
          var offsetResult = this.pillarOffset;
          if (this.cacheEnabled) {
            var data = this.getCachedConvexTrianglePillar(xi, yi, getUpperTriangle);
            if (data) {
              this.pillarConvex = data.convex;
              this.pillarOffset = data.offset;
              return;
            }
            result = new ConvexPolyhedron();
            offsetResult = new Vec3();
            this.pillarConvex = result;
            this.pillarOffset = offsetResult;
          }
          var data = this.data;
          var elementSize = this.elementSize;
          var faces = result.faces;
          result.vertices.length = 6;
          for (var i = 0; i < 6; i++) {
            if (!result.vertices[i]) {
              result.vertices[i] = new Vec3();
            }
          }
          faces.length = 5;
          for (var i = 0; i < 5; i++) {
            if (!faces[i]) {
              faces[i] = [];
            }
          }
          var verts = result.vertices;
          var h = (Math.min(data[xi][yi], data[xi + 1][yi], data[xi][yi + 1], data[xi + 1][yi + 1]) - this.minValue) / 2 + this.minValue;
          if (!getUpperTriangle) {
            offsetResult.set((xi + 0.25) * elementSize, (yi + 0.25) * elementSize, h);
            verts[0].set(-0.25 * elementSize, -0.25 * elementSize, data[xi][yi] - h);
            verts[1].set(0.75 * elementSize, -0.25 * elementSize, data[xi + 1][yi] - h);
            verts[2].set(-0.25 * elementSize, 0.75 * elementSize, data[xi][yi + 1] - h);
            verts[3].set(-0.25 * elementSize, -0.25 * elementSize, -h - 1);
            verts[4].set(0.75 * elementSize, -0.25 * elementSize, -h - 1);
            verts[5].set(-0.25 * elementSize, 0.75 * elementSize, -h - 1);
            faces[0][0] = 0;
            faces[0][1] = 1;
            faces[0][2] = 2;
            faces[1][0] = 5;
            faces[1][1] = 4;
            faces[1][2] = 3;
            faces[2][0] = 0;
            faces[2][1] = 2;
            faces[2][2] = 5;
            faces[2][3] = 3;
            faces[3][0] = 1;
            faces[3][1] = 0;
            faces[3][2] = 3;
            faces[3][3] = 4;
            faces[4][0] = 4;
            faces[4][1] = 5;
            faces[4][2] = 2;
            faces[4][3] = 1;
          } else {
            offsetResult.set((xi + 0.75) * elementSize, (yi + 0.75) * elementSize, h);
            verts[0].set(0.25 * elementSize, 0.25 * elementSize, data[xi + 1][yi + 1] - h);
            verts[1].set(-0.75 * elementSize, 0.25 * elementSize, data[xi][yi + 1] - h);
            verts[2].set(0.25 * elementSize, -0.75 * elementSize, data[xi + 1][yi] - h);
            verts[3].set(0.25 * elementSize, 0.25 * elementSize, -h - 1);
            verts[4].set(-0.75 * elementSize, 0.25 * elementSize, -h - 1);
            verts[5].set(0.25 * elementSize, -0.75 * elementSize, -h - 1);
            faces[0][0] = 0;
            faces[0][1] = 1;
            faces[0][2] = 2;
            faces[1][0] = 5;
            faces[1][1] = 4;
            faces[1][2] = 3;
            faces[2][0] = 2;
            faces[2][1] = 5;
            faces[2][2] = 3;
            faces[2][3] = 0;
            faces[3][0] = 3;
            faces[3][1] = 4;
            faces[3][2] = 1;
            faces[3][3] = 0;
            faces[4][0] = 1;
            faces[4][1] = 4;
            faces[4][2] = 5;
            faces[4][3] = 2;
          }
          result.computeNormals();
          result.computeEdges();
          result.updateBoundingSphereRadius();
          this.setCachedConvexTrianglePillar(xi, yi, getUpperTriangle, result, offsetResult);
        };
        Heightfield.prototype.calculateLocalInertia = function(mass, target) {
          target = target || new Vec3();
          target.set(0, 0, 0);
          return target;
        };
        Heightfield.prototype.volume = function() {
          return Number.MAX_VALUE;
        };
        Heightfield.prototype.calculateWorldAABB = function(pos, quat, min, max) {
          min.set(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
          max.set(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
        };
        Heightfield.prototype.updateBoundingSphereRadius = function() {
          var data = this.data, s = this.elementSize;
          this.boundingSphereRadius = new Vec3(data.length * s, data[0].length * s, Math.max(Math.abs(this.maxValue), Math.abs(this.minValue))).norm();
        };
      }, { "../math/Vec3": 30, "../utils/Utils": 53, "./ConvexPolyhedron": 38, "./Shape": 43 }], 41: [function(_dereq_, module4, exports3) {
        module4.exports = Particle;
        var Shape = _dereq_("./Shape");
        var Vec3 = _dereq_("../math/Vec3");
        function Particle() {
          Shape.call(this);
          this.type = Shape.types.PARTICLE;
        }
        Particle.prototype = new Shape();
        Particle.prototype.constructor = Particle;
        Particle.prototype.calculateLocalInertia = function(mass, target) {
          target = target || new Vec3();
          target.set(0, 0, 0);
          return target;
        };
        Particle.prototype.volume = function() {
          return 0;
        };
        Particle.prototype.updateBoundingSphereRadius = function() {
          this.boundingSphereRadius = 0;
        };
        Particle.prototype.calculateWorldAABB = function(pos, quat, min, max) {
          min.copy(pos);
          max.copy(pos);
        };
      }, { "../math/Vec3": 30, "./Shape": 43 }], 42: [function(_dereq_, module4, exports3) {
        module4.exports = Plane;
        var Shape = _dereq_("./Shape");
        var Vec3 = _dereq_("../math/Vec3");
        function Plane() {
          Shape.call(this);
          this.type = Shape.types.PLANE;
          this.worldNormal = new Vec3();
          this.worldNormalNeedsUpdate = true;
          this.boundingSphereRadius = Number.MAX_VALUE;
        }
        Plane.prototype = new Shape();
        Plane.prototype.constructor = Plane;
        Plane.prototype.computeWorldNormal = function(quat) {
          var n = this.worldNormal;
          n.set(0, 0, 1);
          quat.vmult(n, n);
          this.worldNormalNeedsUpdate = false;
        };
        Plane.prototype.calculateLocalInertia = function(mass, target) {
          target = target || new Vec3();
          return target;
        };
        Plane.prototype.volume = function() {
          return Number.MAX_VALUE;
        };
        var tempNormal = new Vec3();
        Plane.prototype.calculateWorldAABB = function(pos, quat, min, max) {
          tempNormal.set(0, 0, 1);
          quat.vmult(tempNormal, tempNormal);
          var maxVal = Number.MAX_VALUE;
          min.set(-maxVal, -maxVal, -maxVal);
          max.set(maxVal, maxVal, maxVal);
          if (tempNormal.x === 1) {
            max.x = pos.x;
          }
          if (tempNormal.y === 1) {
            max.y = pos.y;
          }
          if (tempNormal.z === 1) {
            max.z = pos.z;
          }
          if (tempNormal.x === -1) {
            min.x = pos.x;
          }
          if (tempNormal.y === -1) {
            min.y = pos.y;
          }
          if (tempNormal.z === -1) {
            min.z = pos.z;
          }
        };
        Plane.prototype.updateBoundingSphereRadius = function() {
          this.boundingSphereRadius = Number.MAX_VALUE;
        };
      }, { "../math/Vec3": 30, "./Shape": 43 }], 43: [function(_dereq_, module4, exports3) {
        module4.exports = Shape;
        var Shape = _dereq_("./Shape");
        var Vec3 = _dereq_("../math/Vec3");
        var Quaternion2 = _dereq_("../math/Quaternion");
        var Material = _dereq_("../material/Material");
        function Shape() {
          this.id = Shape.idCounter++;
          this.type = 0;
          this.boundingSphereRadius = 0;
          this.collisionResponse = true;
          this.material = null;
        }
        Shape.prototype.constructor = Shape;
        Shape.prototype.updateBoundingSphereRadius = function() {
          throw "computeBoundingSphereRadius() not implemented for shape type " + this.type;
        };
        Shape.prototype.volume = function() {
          throw "volume() not implemented for shape type " + this.type;
        };
        Shape.prototype.calculateLocalInertia = function(mass, target) {
          throw "calculateLocalInertia() not implemented for shape type " + this.type;
        };
        Shape.idCounter = 0;
        Shape.types = {
          SPHERE: 1,
          PLANE: 2,
          BOX: 4,
          COMPOUND: 8,
          CONVEXPOLYHEDRON: 16,
          HEIGHTFIELD: 32,
          PARTICLE: 64,
          CYLINDER: 128,
          TRIMESH: 256
        };
      }, { "../material/Material": 25, "../math/Quaternion": 28, "../math/Vec3": 30, "./Shape": 43 }], 44: [function(_dereq_, module4, exports3) {
        module4.exports = Sphere;
        var Shape = _dereq_("./Shape");
        var Vec3 = _dereq_("../math/Vec3");
        function Sphere(radius) {
          Shape.call(this);
          this.radius = radius !== void 0 ? Number(radius) : 1;
          this.type = Shape.types.SPHERE;
          if (this.radius < 0) {
            throw new Error("The sphere radius cannot be negative.");
          }
          this.updateBoundingSphereRadius();
        }
        Sphere.prototype = new Shape();
        Sphere.prototype.constructor = Sphere;
        Sphere.prototype.calculateLocalInertia = function(mass, target) {
          target = target || new Vec3();
          var I = 2 * mass * this.radius * this.radius / 5;
          target.x = I;
          target.y = I;
          target.z = I;
          return target;
        };
        Sphere.prototype.volume = function() {
          return 4 * Math.PI * this.radius / 3;
        };
        Sphere.prototype.updateBoundingSphereRadius = function() {
          this.boundingSphereRadius = this.radius;
        };
        Sphere.prototype.calculateWorldAABB = function(pos, quat, min, max) {
          var r = this.radius;
          var axes = ["x", "y", "z"];
          for (var i = 0; i < axes.length; i++) {
            var ax = axes[i];
            min[ax] = pos[ax] - r;
            max[ax] = pos[ax] + r;
          }
        };
      }, { "../math/Vec3": 30, "./Shape": 43 }], 45: [function(_dereq_, module4, exports3) {
        module4.exports = Trimesh;
        var Shape = _dereq_("./Shape");
        var Vec3 = _dereq_("../math/Vec3");
        var Quaternion2 = _dereq_("../math/Quaternion");
        var Transform = _dereq_("../math/Transform");
        var AABB = _dereq_("../collision/AABB");
        var Octree = _dereq_("../utils/Octree");
        function Trimesh(vertices, indices) {
          Shape.call(this);
          this.type = Shape.types.TRIMESH;
          this.vertices = new Float32Array(vertices);
          this.indices = new Int16Array(indices);
          this.normals = new Float32Array(indices.length);
          this.aabb = new AABB();
          this.edges = null;
          this.scale = new Vec3(1, 1, 1);
          this.tree = new Octree();
          this.updateEdges();
          this.updateNormals();
          this.updateAABB();
          this.updateBoundingSphereRadius();
          this.updateTree();
        }
        Trimesh.prototype = new Shape();
        Trimesh.prototype.constructor = Trimesh;
        var computeNormals_n = new Vec3();
        Trimesh.prototype.updateTree = function() {
          var tree = this.tree;
          tree.reset();
          tree.aabb.copy(this.aabb);
          var scale = this.scale;
          tree.aabb.lowerBound.x *= 1 / scale.x;
          tree.aabb.lowerBound.y *= 1 / scale.y;
          tree.aabb.lowerBound.z *= 1 / scale.z;
          tree.aabb.upperBound.x *= 1 / scale.x;
          tree.aabb.upperBound.y *= 1 / scale.y;
          tree.aabb.upperBound.z *= 1 / scale.z;
          var triangleAABB = new AABB();
          var a = new Vec3();
          var b = new Vec3();
          var c = new Vec3();
          var points = [a, b, c];
          for (var i = 0; i < this.indices.length / 3; i++) {
            var i3 = i * 3;
            this._getUnscaledVertex(this.indices[i3], a);
            this._getUnscaledVertex(this.indices[i3 + 1], b);
            this._getUnscaledVertex(this.indices[i3 + 2], c);
            triangleAABB.setFromPoints(points);
            tree.insert(triangleAABB, i);
          }
          tree.removeEmptyNodes();
        };
        var unscaledAABB = new AABB();
        Trimesh.prototype.getTrianglesInAABB = function(aabb, result) {
          unscaledAABB.copy(aabb);
          var scale = this.scale;
          var isx = scale.x;
          var isy = scale.y;
          var isz = scale.z;
          var l = unscaledAABB.lowerBound;
          var u = unscaledAABB.upperBound;
          l.x /= isx;
          l.y /= isy;
          l.z /= isz;
          u.x /= isx;
          u.y /= isy;
          u.z /= isz;
          return this.tree.aabbQuery(unscaledAABB, result);
        };
        Trimesh.prototype.setScale = function(scale) {
          var wasUniform = this.scale.x === this.scale.y === this.scale.z;
          var isUniform = scale.x === scale.y === scale.z;
          if (!(wasUniform && isUniform)) {
            this.updateNormals();
          }
          this.scale.copy(scale);
          this.updateAABB();
          this.updateBoundingSphereRadius();
        };
        Trimesh.prototype.updateNormals = function() {
          var n = computeNormals_n;
          var normals = this.normals;
          for (var i = 0; i < this.indices.length / 3; i++) {
            var i3 = i * 3;
            var a = this.indices[i3], b = this.indices[i3 + 1], c = this.indices[i3 + 2];
            this.getVertex(a, va);
            this.getVertex(b, vb);
            this.getVertex(c, vc);
            Trimesh.computeNormal(vb, va, vc, n);
            normals[i3] = n.x;
            normals[i3 + 1] = n.y;
            normals[i3 + 2] = n.z;
          }
        };
        Trimesh.prototype.updateEdges = function() {
          var edges = {};
          var add = function(indexA, indexB) {
            var key = a < b ? a + "_" + b : b + "_" + a;
            edges[key] = true;
          };
          for (var i = 0; i < this.indices.length / 3; i++) {
            var i3 = i * 3;
            var a = this.indices[i3], b = this.indices[i3 + 1], c = this.indices[i3 + 2];
            add(a, b);
            add(b, c);
            add(c, a);
          }
          var keys = Object.keys(edges);
          this.edges = new Int16Array(keys.length * 2);
          for (var i = 0; i < keys.length; i++) {
            var indices = keys[i].split("_");
            this.edges[2 * i] = parseInt(indices[0], 10);
            this.edges[2 * i + 1] = parseInt(indices[1], 10);
          }
        };
        Trimesh.prototype.getEdgeVertex = function(edgeIndex, firstOrSecond, vertexStore) {
          var vertexIndex = this.edges[edgeIndex * 2 + (firstOrSecond ? 1 : 0)];
          this.getVertex(vertexIndex, vertexStore);
        };
        var getEdgeVector_va = new Vec3();
        var getEdgeVector_vb = new Vec3();
        Trimesh.prototype.getEdgeVector = function(edgeIndex, vectorStore) {
          var va2 = getEdgeVector_va;
          var vb2 = getEdgeVector_vb;
          this.getEdgeVertex(edgeIndex, 0, va2);
          this.getEdgeVertex(edgeIndex, 1, vb2);
          vb2.vsub(va2, vectorStore);
        };
        var cb = new Vec3();
        var ab = new Vec3();
        Trimesh.computeNormal = function(va2, vb2, vc2, target) {
          vb2.vsub(va2, ab);
          vc2.vsub(vb2, cb);
          cb.cross(ab, target);
          if (!target.isZero()) {
            target.normalize();
          }
        };
        var va = new Vec3();
        var vb = new Vec3();
        var vc = new Vec3();
        Trimesh.prototype.getVertex = function(i, out) {
          var scale = this.scale;
          this._getUnscaledVertex(i, out);
          out.x *= scale.x;
          out.y *= scale.y;
          out.z *= scale.z;
          return out;
        };
        Trimesh.prototype._getUnscaledVertex = function(i, out) {
          var i3 = i * 3;
          var vertices = this.vertices;
          return out.set(vertices[i3], vertices[i3 + 1], vertices[i3 + 2]);
        };
        Trimesh.prototype.getWorldVertex = function(i, pos, quat, out) {
          this.getVertex(i, out);
          Transform.pointToWorldFrame(pos, quat, out, out);
          return out;
        };
        Trimesh.prototype.getTriangleVertices = function(i, a, b, c) {
          var i3 = i * 3;
          this.getVertex(this.indices[i3], a);
          this.getVertex(this.indices[i3 + 1], b);
          this.getVertex(this.indices[i3 + 2], c);
        };
        Trimesh.prototype.getNormal = function(i, target) {
          var i3 = i * 3;
          return target.set(this.normals[i3], this.normals[i3 + 1], this.normals[i3 + 2]);
        };
        var cli_aabb = new AABB();
        Trimesh.prototype.calculateLocalInertia = function(mass, target) {
          this.computeLocalAABB(cli_aabb);
          var x = cli_aabb.upperBound.x - cli_aabb.lowerBound.x, y = cli_aabb.upperBound.y - cli_aabb.lowerBound.y, z = cli_aabb.upperBound.z - cli_aabb.lowerBound.z;
          return target.set(1 / 12 * mass * (2 * y * 2 * y + 2 * z * 2 * z), 1 / 12 * mass * (2 * x * 2 * x + 2 * z * 2 * z), 1 / 12 * mass * (2 * y * 2 * y + 2 * x * 2 * x));
        };
        var computeLocalAABB_worldVert = new Vec3();
        Trimesh.prototype.computeLocalAABB = function(aabb) {
          var l = aabb.lowerBound, u = aabb.upperBound, n = this.vertices.length, vertices = this.vertices, v = computeLocalAABB_worldVert;
          this.getVertex(0, v);
          l.copy(v);
          u.copy(v);
          for (var i = 0; i !== n; i++) {
            this.getVertex(i, v);
            if (v.x < l.x) {
              l.x = v.x;
            } else if (v.x > u.x) {
              u.x = v.x;
            }
            if (v.y < l.y) {
              l.y = v.y;
            } else if (v.y > u.y) {
              u.y = v.y;
            }
            if (v.z < l.z) {
              l.z = v.z;
            } else if (v.z > u.z) {
              u.z = v.z;
            }
          }
        };
        Trimesh.prototype.updateAABB = function() {
          this.computeLocalAABB(this.aabb);
        };
        Trimesh.prototype.updateBoundingSphereRadius = function() {
          var max2 = 0;
          var vertices = this.vertices;
          var v = new Vec3();
          for (var i = 0, N = vertices.length / 3; i !== N; i++) {
            this.getVertex(i, v);
            var norm2 = v.norm2();
            if (norm2 > max2) {
              max2 = norm2;
            }
          }
          this.boundingSphereRadius = Math.sqrt(max2);
        };
        var tempWorldVertex = new Vec3();
        var calculateWorldAABB_frame = new Transform();
        var calculateWorldAABB_aabb = new AABB();
        Trimesh.prototype.calculateWorldAABB = function(pos, quat, min, max) {
          var frame = calculateWorldAABB_frame;
          var result = calculateWorldAABB_aabb;
          frame.position = pos;
          frame.quaternion = quat;
          this.aabb.toWorldFrame(frame, result);
          min.copy(result.lowerBound);
          max.copy(result.upperBound);
        };
        Trimesh.prototype.volume = function() {
          return 4 * Math.PI * this.boundingSphereRadius / 3;
        };
        Trimesh.createTorus = function(radius, tube, radialSegments, tubularSegments, arc) {
          radius = radius || 1;
          tube = tube || 0.5;
          radialSegments = radialSegments || 8;
          tubularSegments = tubularSegments || 6;
          arc = arc || Math.PI * 2;
          var vertices = [];
          var indices = [];
          for (var j = 0; j <= radialSegments; j++) {
            for (var i = 0; i <= tubularSegments; i++) {
              var u = i / tubularSegments * arc;
              var v = j / radialSegments * Math.PI * 2;
              var x = (radius + tube * Math.cos(v)) * Math.cos(u);
              var y = (radius + tube * Math.cos(v)) * Math.sin(u);
              var z = tube * Math.sin(v);
              vertices.push(x, y, z);
            }
          }
          for (var j = 1; j <= radialSegments; j++) {
            for (var i = 1; i <= tubularSegments; i++) {
              var a = (tubularSegments + 1) * j + i - 1;
              var b = (tubularSegments + 1) * (j - 1) + i - 1;
              var c = (tubularSegments + 1) * (j - 1) + i;
              var d = (tubularSegments + 1) * j + i;
              indices.push(a, b, d);
              indices.push(b, c, d);
            }
          }
          return new Trimesh(vertices, indices);
        };
      }, { "../collision/AABB": 3, "../math/Quaternion": 28, "../math/Transform": 29, "../math/Vec3": 30, "../utils/Octree": 50, "./Shape": 43 }], 46: [function(_dereq_, module4, exports3) {
        module4.exports = GSSolver;
        var Vec3 = _dereq_("../math/Vec3");
        var Quaternion2 = _dereq_("../math/Quaternion");
        var Solver = _dereq_("./Solver");
        function GSSolver() {
          Solver.call(this);
          this.iterations = 10;
          this.tolerance = 1e-7;
        }
        GSSolver.prototype = new Solver();
        var GSSolver_solve_lambda = [];
        var GSSolver_solve_invCs = [];
        var GSSolver_solve_Bs = [];
        GSSolver.prototype.solve = function(dt, world) {
          var iter = 0, maxIter = this.iterations, tolSquared = this.tolerance * this.tolerance, equations = this.equations, Neq = equations.length, bodies = world.bodies, Nbodies = bodies.length, h = dt, q, B, invC, deltalambda, deltalambdaTot, GWlambda, lambdaj;
          if (Neq !== 0) {
            for (var i = 0; i !== Nbodies; i++) {
              bodies[i].updateSolveMassProperties();
            }
          }
          var invCs = GSSolver_solve_invCs, Bs = GSSolver_solve_Bs, lambda = GSSolver_solve_lambda;
          invCs.length = Neq;
          Bs.length = Neq;
          lambda.length = Neq;
          for (var i = 0; i !== Neq; i++) {
            var c = equations[i];
            lambda[i] = 0;
            Bs[i] = c.computeB(h);
            invCs[i] = 1 / c.computeC();
          }
          if (Neq !== 0) {
            for (var i = 0; i !== Nbodies; i++) {
              var b = bodies[i], vlambda = b.vlambda, wlambda = b.wlambda;
              vlambda.set(0, 0, 0);
              if (wlambda) {
                wlambda.set(0, 0, 0);
              }
            }
            for (iter = 0; iter !== maxIter; iter++) {
              deltalambdaTot = 0;
              for (var j = 0; j !== Neq; j++) {
                var c = equations[j];
                B = Bs[j];
                invC = invCs[j];
                lambdaj = lambda[j];
                GWlambda = c.computeGWlambda();
                deltalambda = invC * (B - GWlambda - c.eps * lambdaj);
                if (lambdaj + deltalambda < c.minForce) {
                  deltalambda = c.minForce - lambdaj;
                } else if (lambdaj + deltalambda > c.maxForce) {
                  deltalambda = c.maxForce - lambdaj;
                }
                lambda[j] += deltalambda;
                deltalambdaTot += deltalambda > 0 ? deltalambda : -deltalambda;
                c.addToWlambda(deltalambda);
              }
              if (deltalambdaTot * deltalambdaTot < tolSquared) {
                break;
              }
            }
            for (var i = 0; i !== Nbodies; i++) {
              var b = bodies[i], v = b.velocity, w = b.angularVelocity;
              v.vadd(b.vlambda, v);
              if (w) {
                w.vadd(b.wlambda, w);
              }
            }
          }
          return iter;
        };
      }, { "../math/Quaternion": 28, "../math/Vec3": 30, "./Solver": 47 }], 47: [function(_dereq_, module4, exports3) {
        module4.exports = Solver;
        function Solver() {
          this.equations = [];
        }
        Solver.prototype.solve = function(dt, world) {
          return 0;
        };
        Solver.prototype.addEquation = function(eq) {
          if (eq.enabled) {
            this.equations.push(eq);
          }
        };
        Solver.prototype.removeEquation = function(eq) {
          var eqs = this.equations;
          var i = eqs.indexOf(eq);
          if (i !== -1) {
            eqs.splice(i, 1);
          }
        };
        Solver.prototype.removeAllEquations = function() {
          this.equations.length = 0;
        };
      }, {}], 48: [function(_dereq_, module4, exports3) {
        module4.exports = SplitSolver;
        var Vec3 = _dereq_("../math/Vec3");
        var Quaternion2 = _dereq_("../math/Quaternion");
        var Solver = _dereq_("./Solver");
        var Body = _dereq_("../objects/Body");
        function SplitSolver(subsolver) {
          Solver.call(this);
          this.iterations = 10;
          this.tolerance = 1e-7;
          this.subsolver = subsolver;
          this.nodes = [];
          this.nodePool = [];
          while (this.nodePool.length < 128) {
            this.nodePool.push(this.createNode());
          }
        }
        SplitSolver.prototype = new Solver();
        var SplitSolver_solve_nodes = [];
        var SplitSolver_solve_nodePool = [];
        var SplitSolver_solve_eqs = [];
        var SplitSolver_solve_bds = [];
        var SplitSolver_solve_dummyWorld = { bodies: [] };
        var STATIC = Body.STATIC;
        function getUnvisitedNode(nodes) {
          var Nnodes = nodes.length;
          for (var i = 0; i !== Nnodes; i++) {
            var node = nodes[i];
            if (!node.visited && !(node.body.type & STATIC)) {
              return node;
            }
          }
          return false;
        }
        var queue = [];
        function bfs(root, visitFunc2, bds, eqs) {
          queue.push(root);
          root.visited = true;
          visitFunc2(root, bds, eqs);
          while (queue.length) {
            var node = queue.pop();
            var child;
            while (child = getUnvisitedNode(node.children)) {
              child.visited = true;
              visitFunc2(child, bds, eqs);
              queue.push(child);
            }
          }
        }
        function visitFunc(node, bds, eqs) {
          bds.push(node.body);
          var Neqs = node.eqs.length;
          for (var i = 0; i !== Neqs; i++) {
            var eq = node.eqs[i];
            if (eqs.indexOf(eq) === -1) {
              eqs.push(eq);
            }
          }
        }
        SplitSolver.prototype.createNode = function() {
          return { body: null, children: [], eqs: [], visited: false };
        };
        SplitSolver.prototype.solve = function(dt, world) {
          var nodes = SplitSolver_solve_nodes, nodePool = this.nodePool, bodies = world.bodies, equations = this.equations, Neq = equations.length, Nbodies = bodies.length, subsolver = this.subsolver;
          while (nodePool.length < Nbodies) {
            nodePool.push(this.createNode());
          }
          nodes.length = Nbodies;
          for (var i = 0; i < Nbodies; i++) {
            nodes[i] = nodePool[i];
          }
          for (var i = 0; i !== Nbodies; i++) {
            var node = nodes[i];
            node.body = bodies[i];
            node.children.length = 0;
            node.eqs.length = 0;
            node.visited = false;
          }
          for (var k = 0; k !== Neq; k++) {
            var eq = equations[k], i = bodies.indexOf(eq.bi), j = bodies.indexOf(eq.bj), ni = nodes[i], nj = nodes[j];
            ni.children.push(nj);
            ni.eqs.push(eq);
            nj.children.push(ni);
            nj.eqs.push(eq);
          }
          var child, n = 0, eqs = SplitSolver_solve_eqs;
          subsolver.tolerance = this.tolerance;
          subsolver.iterations = this.iterations;
          var dummyWorld = SplitSolver_solve_dummyWorld;
          while (child = getUnvisitedNode(nodes)) {
            eqs.length = 0;
            dummyWorld.bodies.length = 0;
            bfs(child, visitFunc, dummyWorld.bodies, eqs);
            var Neqs = eqs.length;
            eqs = eqs.sort(sortById);
            for (var i = 0; i !== Neqs; i++) {
              subsolver.addEquation(eqs[i]);
            }
            var iter = subsolver.solve(dt, dummyWorld);
            subsolver.removeAllEquations();
            n++;
          }
          return n;
        };
        function sortById(a, b) {
          return b.id - a.id;
        }
      }, { "../math/Quaternion": 28, "../math/Vec3": 30, "../objects/Body": 31, "./Solver": 47 }], 49: [function(_dereq_, module4, exports3) {
        var EventTarget = function() {
        };
        module4.exports = EventTarget;
        EventTarget.prototype = {
          constructor: EventTarget,
          addEventListener: function(type, listener) {
            if (this._listeners === void 0) {
              this._listeners = {};
            }
            var listeners = this._listeners;
            if (listeners[type] === void 0) {
              listeners[type] = [];
            }
            if (listeners[type].indexOf(listener) === -1) {
              listeners[type].push(listener);
            }
            return this;
          },
          hasEventListener: function(type, listener) {
            if (this._listeners === void 0) {
              return false;
            }
            var listeners = this._listeners;
            if (listeners[type] !== void 0 && listeners[type].indexOf(listener) !== -1) {
              return true;
            }
            return false;
          },
          removeEventListener: function(type, listener) {
            if (this._listeners === void 0) {
              return this;
            }
            var listeners = this._listeners;
            if (listeners[type] === void 0) {
              return this;
            }
            var index = listeners[type].indexOf(listener);
            if (index !== -1) {
              listeners[type].splice(index, 1);
            }
            return this;
          },
          dispatchEvent: function(event) {
            if (this._listeners === void 0) {
              return this;
            }
            var listeners = this._listeners;
            var listenerArray = listeners[event.type];
            if (listenerArray !== void 0) {
              event.target = this;
              for (var i = 0, l = listenerArray.length; i < l; i++) {
                listenerArray[i].call(this, event);
              }
            }
            return this;
          }
        };
      }, {}], 50: [function(_dereq_, module4, exports3) {
        var AABB = _dereq_("../collision/AABB");
        var Vec3 = _dereq_("../math/Vec3");
        module4.exports = Octree;
        function OctreeNode(options) {
          options = options || {};
          this.root = options.root || null;
          this.aabb = options.aabb ? options.aabb.clone() : new AABB();
          this.data = [];
          this.children = [];
        }
        function Octree(aabb, options) {
          options = options || {};
          options.root = null;
          options.aabb = aabb;
          OctreeNode.call(this, options);
          this.maxDepth = typeof options.maxDepth !== "undefined" ? options.maxDepth : 8;
        }
        Octree.prototype = new OctreeNode();
        OctreeNode.prototype.reset = function(aabb, options) {
          this.children.length = this.data.length = 0;
        };
        OctreeNode.prototype.insert = function(aabb, elementData, level) {
          var nodeData = this.data;
          level = level || 0;
          if (!this.aabb.contains(aabb)) {
            return false;
          }
          var children = this.children;
          if (level < (this.maxDepth || this.root.maxDepth)) {
            var subdivided = false;
            if (!children.length) {
              this.subdivide();
              subdivided = true;
            }
            for (var i = 0; i !== 8; i++) {
              if (children[i].insert(aabb, elementData, level + 1)) {
                return true;
              }
            }
            if (subdivided) {
              children.length = 0;
            }
          }
          nodeData.push(elementData);
          return true;
        };
        var halfDiagonal = new Vec3();
        OctreeNode.prototype.subdivide = function() {
          var aabb = this.aabb;
          var l = aabb.lowerBound;
          var u = aabb.upperBound;
          var children = this.children;
          children.push(new OctreeNode({ aabb: new AABB({ lowerBound: new Vec3(0, 0, 0) }) }), new OctreeNode({ aabb: new AABB({ lowerBound: new Vec3(1, 0, 0) }) }), new OctreeNode({ aabb: new AABB({ lowerBound: new Vec3(1, 1, 0) }) }), new OctreeNode({ aabb: new AABB({ lowerBound: new Vec3(1, 1, 1) }) }), new OctreeNode({ aabb: new AABB({ lowerBound: new Vec3(0, 1, 1) }) }), new OctreeNode({ aabb: new AABB({ lowerBound: new Vec3(0, 0, 1) }) }), new OctreeNode({ aabb: new AABB({ lowerBound: new Vec3(1, 0, 1) }) }), new OctreeNode({ aabb: new AABB({ lowerBound: new Vec3(0, 1, 0) }) }));
          u.vsub(l, halfDiagonal);
          halfDiagonal.scale(0.5, halfDiagonal);
          var root = this.root || this;
          for (var i = 0; i !== 8; i++) {
            var child = children[i];
            child.root = root;
            var lowerBound = child.aabb.lowerBound;
            lowerBound.x *= halfDiagonal.x;
            lowerBound.y *= halfDiagonal.y;
            lowerBound.z *= halfDiagonal.z;
            lowerBound.vadd(l, lowerBound);
            lowerBound.vadd(halfDiagonal, child.aabb.upperBound);
          }
        };
        OctreeNode.prototype.aabbQuery = function(aabb, result) {
          var nodeData = this.data;
          var children = this.children;
          var queue = [this];
          while (queue.length) {
            var node = queue.pop();
            if (node.aabb.overlaps(aabb)) {
              Array.prototype.push.apply(result, node.data);
            }
            Array.prototype.push.apply(queue, node.children);
          }
          return result;
        };
        var tmpAABB = new AABB();
        OctreeNode.prototype.rayQuery = function(ray, treeTransform, result) {
          ray.getAABB(tmpAABB);
          tmpAABB.toLocalFrame(treeTransform, tmpAABB);
          this.aabbQuery(tmpAABB, result);
          return result;
        };
        OctreeNode.prototype.removeEmptyNodes = function() {
          var queue = [this];
          while (queue.length) {
            var node = queue.pop();
            for (var i = node.children.length - 1; i >= 0; i--) {
              if (!node.children[i].data.length) {
                node.children.splice(i, 1);
              }
            }
            Array.prototype.push.apply(queue, node.children);
          }
        };
      }, { "../collision/AABB": 3, "../math/Vec3": 30 }], 51: [function(_dereq_, module4, exports3) {
        module4.exports = Pool;
        function Pool() {
          this.objects = [];
          this.type = Object;
        }
        Pool.prototype.release = function() {
          var Nargs = arguments.length;
          for (var i = 0; i !== Nargs; i++) {
            this.objects.push(arguments[i]);
          }
        };
        Pool.prototype.get = function() {
          if (this.objects.length === 0) {
            return this.constructObject();
          } else {
            return this.objects.pop();
          }
        };
        Pool.prototype.constructObject = function() {
          throw new Error("constructObject() not implemented in this Pool subclass yet!");
        };
      }, {}], 52: [function(_dereq_, module4, exports3) {
        module4.exports = TupleDictionary;
        function TupleDictionary() {
          this.data = { keys: [] };
        }
        TupleDictionary.prototype.get = function(i, j) {
          if (i > j) {
            var temp = j;
            j = i;
            i = temp;
          }
          return this.data[i + "-" + j];
        };
        TupleDictionary.prototype.set = function(i, j, value) {
          if (i > j) {
            var temp = j;
            j = i;
            i = temp;
          }
          var key = i + "-" + j;
          if (!this.get(i, j)) {
            this.data.keys.push(key);
          }
          this.data[key] = value;
        };
        TupleDictionary.prototype.reset = function() {
          var data = this.data, keys = data.keys;
          while (keys.length > 0) {
            var key = keys.pop();
            delete data[key];
          }
        };
      }, {}], 53: [function(_dereq_, module4, exports3) {
        function Utils2() {
        }
        module4.exports = Utils2;
        Utils2.defaults = function(options, defaults) {
          options = options || {};
          for (var key in defaults) {
            if (!(key in options)) {
              options[key] = defaults[key];
            }
          }
          return options;
        };
      }, {}], 54: [function(_dereq_, module4, exports3) {
        module4.exports = Vec3Pool;
        var Vec3 = _dereq_("../math/Vec3");
        var Pool = _dereq_("./Pool");
        function Vec3Pool() {
          Pool.call(this);
          this.type = Vec3;
        }
        Vec3Pool.prototype = new Pool();
        Vec3Pool.prototype.constructObject = function() {
          return new Vec3();
        };
      }, { "../math/Vec3": 30, "./Pool": 51 }], 55: [function(_dereq_, module4, exports3) {
        module4.exports = Narrowphase;
        var AABB = _dereq_("../collision/AABB");
        var Shape = _dereq_("../shapes/Shape");
        var Ray = _dereq_("../collision/Ray");
        var Vec3 = _dereq_("../math/Vec3");
        var Transform = _dereq_("../math/Transform");
        var ConvexPolyhedron = _dereq_("../shapes/ConvexPolyhedron");
        var Quaternion2 = _dereq_("../math/Quaternion");
        var Solver = _dereq_("../solver/Solver");
        var Vec3Pool = _dereq_("../utils/Vec3Pool");
        var ContactEquation = _dereq_("../equations/ContactEquation");
        var FrictionEquation = _dereq_("../equations/FrictionEquation");
        function Narrowphase(world) {
          this.contactPointPool = [];
          this.frictionEquationPool = [];
          this.result = [];
          this.frictionResult = [];
          this.v3pool = new Vec3Pool();
          this.world = world;
          this.currentContactMaterial = null;
          this.enableFrictionReduction = false;
        }
        Narrowphase.prototype.createContactEquation = function(bi, bj, si, sj, rsi, rsj) {
          var c;
          if (this.contactPointPool.length) {
            c = this.contactPointPool.pop();
            c.bi = bi;
            c.bj = bj;
          } else {
            c = new ContactEquation(bi, bj);
          }
          c.enabled = bi.collisionResponse && bj.collisionResponse && si.collisionResponse && sj.collisionResponse;
          var cm = this.currentContactMaterial;
          c.restitution = cm.restitution;
          c.setSpookParams(cm.contactEquationStiffness, cm.contactEquationRelaxation, this.world.dt);
          var matA = si.material || bi.material;
          var matB = sj.material || bj.material;
          if (matA && matB && matA.restitution >= 0 && matB.restitution >= 0) {
            c.restitution = matA.restitution * matB.restitution;
          }
          c.si = rsi || si;
          c.sj = rsj || sj;
          return c;
        };
        Narrowphase.prototype.createFrictionEquationsFromContact = function(contactEquation, outArray) {
          var bodyA = contactEquation.bi;
          var bodyB = contactEquation.bj;
          var shapeA = contactEquation.si;
          var shapeB = contactEquation.sj;
          var world = this.world;
          var cm = this.currentContactMaterial;
          var friction = cm.friction;
          var matA = shapeA.material || bodyA.material;
          var matB = shapeB.material || bodyB.material;
          if (matA && matB && matA.friction >= 0 && matB.friction >= 0) {
            friction = matA.friction * matB.friction;
          }
          if (friction > 0) {
            var mug = friction * world.gravity.length();
            var reducedMass = bodyA.invMass + bodyB.invMass;
            if (reducedMass > 0) {
              reducedMass = 1 / reducedMass;
            }
            var pool = this.frictionEquationPool;
            var c1 = pool.length ? pool.pop() : new FrictionEquation(bodyA, bodyB, mug * reducedMass);
            var c2 = pool.length ? pool.pop() : new FrictionEquation(bodyA, bodyB, mug * reducedMass);
            c1.bi = c2.bi = bodyA;
            c1.bj = c2.bj = bodyB;
            c1.minForce = c2.minForce = -mug * reducedMass;
            c1.maxForce = c2.maxForce = mug * reducedMass;
            c1.ri.copy(contactEquation.ri);
            c1.rj.copy(contactEquation.rj);
            c2.ri.copy(contactEquation.ri);
            c2.rj.copy(contactEquation.rj);
            contactEquation.ni.tangents(c1.t, c2.t);
            c1.setSpookParams(cm.frictionEquationStiffness, cm.frictionEquationRelaxation, world.dt);
            c2.setSpookParams(cm.frictionEquationStiffness, cm.frictionEquationRelaxation, world.dt);
            c1.enabled = c2.enabled = contactEquation.enabled;
            outArray.push(c1, c2);
            return true;
          }
          return false;
        };
        var averageNormal = new Vec3();
        var averageContactPointA = new Vec3();
        var averageContactPointB = new Vec3();
        Narrowphase.prototype.createFrictionFromAverage = function(numContacts) {
          var c = this.result[this.result.length - 1];
          if (!this.createFrictionEquationsFromContact(c, this.frictionResult) || numContacts === 1) {
            return;
          }
          var f1 = this.frictionResult[this.frictionResult.length - 2];
          var f2 = this.frictionResult[this.frictionResult.length - 1];
          averageNormal.setZero();
          averageContactPointA.setZero();
          averageContactPointB.setZero();
          var bodyA = c.bi;
          var bodyB = c.bj;
          for (var i = 0; i !== numContacts; i++) {
            c = this.result[this.result.length - 1 - i];
            if (c.bodyA !== bodyA) {
              averageNormal.vadd(c.ni, averageNormal);
              averageContactPointA.vadd(c.ri, averageContactPointA);
              averageContactPointB.vadd(c.rj, averageContactPointB);
            } else {
              averageNormal.vsub(c.ni, averageNormal);
              averageContactPointA.vadd(c.rj, averageContactPointA);
              averageContactPointB.vadd(c.ri, averageContactPointB);
            }
          }
          var invNumContacts = 1 / numContacts;
          averageContactPointA.scale(invNumContacts, f1.ri);
          averageContactPointB.scale(invNumContacts, f1.rj);
          f2.ri.copy(f1.ri);
          f2.rj.copy(f1.rj);
          averageNormal.normalize();
          averageNormal.tangents(f1.t, f2.t);
        };
        var tmpVec1 = new Vec3();
        var tmpVec2 = new Vec3();
        var tmpQuat1 = new Quaternion2();
        var tmpQuat2 = new Quaternion2();
        Narrowphase.prototype.getContacts = function(p1, p22, world, result, oldcontacts, frictionResult, frictionPool) {
          this.contactPointPool = oldcontacts;
          this.frictionEquationPool = frictionPool;
          this.result = result;
          this.frictionResult = frictionResult;
          var qi = tmpQuat1;
          var qj = tmpQuat2;
          var xi = tmpVec1;
          var xj = tmpVec2;
          for (var k = 0, N = p1.length; k !== N; k++) {
            var bi = p1[k], bj = p22[k];
            var bodyContactMaterial = null;
            if (bi.material && bj.material) {
              bodyContactMaterial = world.getContactMaterial(bi.material, bj.material) || null;
            }
            for (var i = 0; i < bi.shapes.length; i++) {
              bi.quaternion.mult(bi.shapeOrientations[i], qi);
              bi.quaternion.vmult(bi.shapeOffsets[i], xi);
              xi.vadd(bi.position, xi);
              var si = bi.shapes[i];
              for (var j = 0; j < bj.shapes.length; j++) {
                bj.quaternion.mult(bj.shapeOrientations[j], qj);
                bj.quaternion.vmult(bj.shapeOffsets[j], xj);
                xj.vadd(bj.position, xj);
                var sj = bj.shapes[j];
                if (xi.distanceTo(xj) > si.boundingSphereRadius + sj.boundingSphereRadius) {
                  continue;
                }
                var shapeContactMaterial = null;
                if (si.material && sj.material) {
                  shapeContactMaterial = world.getContactMaterial(si.material, sj.material) || null;
                }
                this.currentContactMaterial = shapeContactMaterial || bodyContactMaterial || world.defaultContactMaterial;
                var resolver = this[si.type | sj.type];
                if (resolver) {
                  if (si.type < sj.type) {
                    resolver.call(this, si, sj, xi, xj, qi, qj, bi, bj, si, sj);
                  } else {
                    resolver.call(this, sj, si, xj, xi, qj, qi, bj, bi, si, sj);
                  }
                }
              }
            }
          }
        };
        var numWarnings = 0;
        var maxWarnings = 10;
        function warn(msg) {
          if (numWarnings > maxWarnings) {
            return;
          }
          numWarnings++;
          console.warn(msg);
        }
        Narrowphase.prototype[Shape.types.BOX | Shape.types.BOX] = Narrowphase.prototype.boxBox = function(si, sj, xi, xj, qi, qj, bi, bj) {
          si.convexPolyhedronRepresentation.material = si.material;
          sj.convexPolyhedronRepresentation.material = sj.material;
          si.convexPolyhedronRepresentation.collisionResponse = si.collisionResponse;
          sj.convexPolyhedronRepresentation.collisionResponse = sj.collisionResponse;
          this.convexConvex(si.convexPolyhedronRepresentation, sj.convexPolyhedronRepresentation, xi, xj, qi, qj, bi, bj, si, sj);
        };
        Narrowphase.prototype[Shape.types.BOX | Shape.types.CONVEXPOLYHEDRON] = Narrowphase.prototype.boxConvex = function(si, sj, xi, xj, qi, qj, bi, bj) {
          si.convexPolyhedronRepresentation.material = si.material;
          si.convexPolyhedronRepresentation.collisionResponse = si.collisionResponse;
          this.convexConvex(si.convexPolyhedronRepresentation, sj, xi, xj, qi, qj, bi, bj, si, sj);
        };
        Narrowphase.prototype[Shape.types.BOX | Shape.types.PARTICLE] = Narrowphase.prototype.boxParticle = function(si, sj, xi, xj, qi, qj, bi, bj) {
          si.convexPolyhedronRepresentation.material = si.material;
          si.convexPolyhedronRepresentation.collisionResponse = si.collisionResponse;
          this.convexParticle(si.convexPolyhedronRepresentation, sj, xi, xj, qi, qj, bi, bj, si, sj);
        };
        Narrowphase.prototype[Shape.types.SPHERE] = Narrowphase.prototype.sphereSphere = function(si, sj, xi, xj, qi, qj, bi, bj) {
          var r = this.createContactEquation(bi, bj, si, sj);
          xj.vsub(xi, r.ni);
          r.ni.normalize();
          r.ri.copy(r.ni);
          r.rj.copy(r.ni);
          r.ri.mult(si.radius, r.ri);
          r.rj.mult(-sj.radius, r.rj);
          r.ri.vadd(xi, r.ri);
          r.ri.vsub(bi.position, r.ri);
          r.rj.vadd(xj, r.rj);
          r.rj.vsub(bj.position, r.rj);
          this.result.push(r);
          this.createFrictionEquationsFromContact(r, this.frictionResult);
        };
        var planeTrimesh_normal = new Vec3();
        var planeTrimesh_relpos = new Vec3();
        var planeTrimesh_projected = new Vec3();
        Narrowphase.prototype[Shape.types.PLANE | Shape.types.TRIMESH] = Narrowphase.prototype.planeTrimesh = function(planeShape, trimeshShape, planePos, trimeshPos, planeQuat, trimeshQuat, planeBody, trimeshBody) {
          var v = new Vec3();
          var normal = planeTrimesh_normal;
          normal.set(0, 0, 1);
          planeQuat.vmult(normal, normal);
          for (var i = 0; i < trimeshShape.vertices.length / 3; i++) {
            trimeshShape.getVertex(i, v);
            var v2 = new Vec3();
            v2.copy(v);
            Transform.pointToWorldFrame(trimeshPos, trimeshQuat, v2, v);
            var relpos = planeTrimesh_relpos;
            v.vsub(planePos, relpos);
            var dot = normal.dot(relpos);
            if (dot <= 0) {
              var r = this.createContactEquation(planeBody, trimeshBody, planeShape, trimeshShape);
              r.ni.copy(normal);
              var projected = planeTrimesh_projected;
              normal.scale(relpos.dot(normal), projected);
              v.vsub(projected, projected);
              r.ri.copy(projected);
              r.ri.vsub(planeBody.position, r.ri);
              r.rj.copy(v);
              r.rj.vsub(trimeshBody.position, r.rj);
              this.result.push(r);
              this.createFrictionEquationsFromContact(r, this.frictionResult);
            }
          }
        };
        var sphereTrimesh_normal = new Vec3();
        var sphereTrimesh_relpos = new Vec3();
        var sphereTrimesh_projected = new Vec3();
        var sphereTrimesh_v = new Vec3();
        var sphereTrimesh_v2 = new Vec3();
        var sphereTrimesh_edgeVertexA = new Vec3();
        var sphereTrimesh_edgeVertexB = new Vec3();
        var sphereTrimesh_edgeVector = new Vec3();
        var sphereTrimesh_edgeVectorUnit = new Vec3();
        var sphereTrimesh_localSpherePos = new Vec3();
        var sphereTrimesh_tmp = new Vec3();
        var sphereTrimesh_va = new Vec3();
        var sphereTrimesh_vb = new Vec3();
        var sphereTrimesh_vc = new Vec3();
        var sphereTrimesh_localSphereAABB = new AABB();
        var sphereTrimesh_triangles = [];
        Narrowphase.prototype[Shape.types.SPHERE | Shape.types.TRIMESH] = Narrowphase.prototype.sphereTrimesh = function(sphereShape, trimeshShape, spherePos, trimeshPos, sphereQuat, trimeshQuat, sphereBody, trimeshBody) {
          var edgeVertexA = sphereTrimesh_edgeVertexA;
          var edgeVertexB = sphereTrimesh_edgeVertexB;
          var edgeVector = sphereTrimesh_edgeVector;
          var edgeVectorUnit = sphereTrimesh_edgeVectorUnit;
          var localSpherePos = sphereTrimesh_localSpherePos;
          var tmp = sphereTrimesh_tmp;
          var localSphereAABB = sphereTrimesh_localSphereAABB;
          var v2 = sphereTrimesh_v2;
          var relpos = sphereTrimesh_relpos;
          var triangles = sphereTrimesh_triangles;
          Transform.pointToLocalFrame(trimeshPos, trimeshQuat, spherePos, localSpherePos);
          var sphereRadius = sphereShape.radius;
          localSphereAABB.lowerBound.set(localSpherePos.x - sphereRadius, localSpherePos.y - sphereRadius, localSpherePos.z - sphereRadius);
          localSphereAABB.upperBound.set(localSpherePos.x + sphereRadius, localSpherePos.y + sphereRadius, localSpherePos.z + sphereRadius);
          trimeshShape.getTrianglesInAABB(localSphereAABB, triangles);
          var v = sphereTrimesh_v;
          var radiusSquared = sphereShape.radius * sphereShape.radius;
          for (var i = 0; i < triangles.length; i++) {
            for (var j = 0; j < 3; j++) {
              trimeshShape.getVertex(trimeshShape.indices[triangles[i] * 3 + j], v);
              v.vsub(localSpherePos, relpos);
              if (relpos.norm2() <= radiusSquared) {
                v2.copy(v);
                Transform.pointToWorldFrame(trimeshPos, trimeshQuat, v2, v);
                v.vsub(spherePos, relpos);
                var r = this.createContactEquation(sphereBody, trimeshBody, sphereShape, trimeshShape);
                r.ni.copy(relpos);
                r.ni.normalize();
                r.ri.copy(r.ni);
                r.ri.scale(sphereShape.radius, r.ri);
                r.ri.vadd(spherePos, r.ri);
                r.ri.vsub(sphereBody.position, r.ri);
                r.rj.copy(v);
                r.rj.vsub(trimeshBody.position, r.rj);
                this.result.push(r);
                this.createFrictionEquationsFromContact(r, this.frictionResult);
              }
            }
          }
          for (var i = 0; i < triangles.length; i++) {
            for (var j = 0; j < 3; j++) {
              trimeshShape.getVertex(trimeshShape.indices[triangles[i] * 3 + j], edgeVertexA);
              trimeshShape.getVertex(trimeshShape.indices[triangles[i] * 3 + (j + 1) % 3], edgeVertexB);
              edgeVertexB.vsub(edgeVertexA, edgeVector);
              localSpherePos.vsub(edgeVertexB, tmp);
              var positionAlongEdgeB = tmp.dot(edgeVector);
              localSpherePos.vsub(edgeVertexA, tmp);
              var positionAlongEdgeA = tmp.dot(edgeVector);
              if (positionAlongEdgeA > 0 && positionAlongEdgeB < 0) {
                localSpherePos.vsub(edgeVertexA, tmp);
                edgeVectorUnit.copy(edgeVector);
                edgeVectorUnit.normalize();
                positionAlongEdgeA = tmp.dot(edgeVectorUnit);
                edgeVectorUnit.scale(positionAlongEdgeA, tmp);
                tmp.vadd(edgeVertexA, tmp);
                var dist = tmp.distanceTo(localSpherePos);
                if (dist < sphereShape.radius) {
                  var r = this.createContactEquation(sphereBody, trimeshBody, sphereShape, trimeshShape);
                  tmp.vsub(localSpherePos, r.ni);
                  r.ni.normalize();
                  r.ni.scale(sphereShape.radius, r.ri);
                  Transform.pointToWorldFrame(trimeshPos, trimeshQuat, tmp, tmp);
                  tmp.vsub(trimeshBody.position, r.rj);
                  Transform.vectorToWorldFrame(trimeshQuat, r.ni, r.ni);
                  Transform.vectorToWorldFrame(trimeshQuat, r.ri, r.ri);
                  this.result.push(r);
                  this.createFrictionEquationsFromContact(r, this.frictionResult);
                }
              }
            }
          }
          var va = sphereTrimesh_va;
          var vb = sphereTrimesh_vb;
          var vc = sphereTrimesh_vc;
          var normal = sphereTrimesh_normal;
          for (var i = 0, N = triangles.length; i !== N; i++) {
            trimeshShape.getTriangleVertices(triangles[i], va, vb, vc);
            trimeshShape.getNormal(triangles[i], normal);
            localSpherePos.vsub(va, tmp);
            var dist = tmp.dot(normal);
            normal.scale(dist, tmp);
            localSpherePos.vsub(tmp, tmp);
            dist = tmp.distanceTo(localSpherePos);
            if (Ray.pointInTriangle(tmp, va, vb, vc) && dist < sphereShape.radius) {
              var r = this.createContactEquation(sphereBody, trimeshBody, sphereShape, trimeshShape);
              tmp.vsub(localSpherePos, r.ni);
              r.ni.normalize();
              r.ni.scale(sphereShape.radius, r.ri);
              Transform.pointToWorldFrame(trimeshPos, trimeshQuat, tmp, tmp);
              tmp.vsub(trimeshBody.position, r.rj);
              Transform.vectorToWorldFrame(trimeshQuat, r.ni, r.ni);
              Transform.vectorToWorldFrame(trimeshQuat, r.ri, r.ri);
              this.result.push(r);
              this.createFrictionEquationsFromContact(r, this.frictionResult);
            }
          }
          triangles.length = 0;
        };
        var point_on_plane_to_sphere = new Vec3();
        var plane_to_sphere_ortho = new Vec3();
        Narrowphase.prototype[Shape.types.SPHERE | Shape.types.PLANE] = Narrowphase.prototype.spherePlane = function(si, sj, xi, xj, qi, qj, bi, bj) {
          var r = this.createContactEquation(bi, bj, si, sj);
          r.ni.set(0, 0, 1);
          qj.vmult(r.ni, r.ni);
          r.ni.negate(r.ni);
          r.ni.normalize();
          r.ni.mult(si.radius, r.ri);
          xi.vsub(xj, point_on_plane_to_sphere);
          r.ni.mult(r.ni.dot(point_on_plane_to_sphere), plane_to_sphere_ortho);
          point_on_plane_to_sphere.vsub(plane_to_sphere_ortho, r.rj);
          if (-point_on_plane_to_sphere.dot(r.ni) <= si.radius) {
            var ri = r.ri;
            var rj = r.rj;
            ri.vadd(xi, ri);
            ri.vsub(bi.position, ri);
            rj.vadd(xj, rj);
            rj.vsub(bj.position, rj);
            this.result.push(r);
            this.createFrictionEquationsFromContact(r, this.frictionResult);
          }
        };
        var pointInPolygon_edge = new Vec3();
        var pointInPolygon_edge_x_normal = new Vec3();
        var pointInPolygon_vtp = new Vec3();
        function pointInPolygon(verts, normal, p) {
          var positiveResult = null;
          var N = verts.length;
          for (var i = 0; i !== N; i++) {
            var v = verts[i];
            var edge = pointInPolygon_edge;
            verts[(i + 1) % N].vsub(v, edge);
            var edge_x_normal = pointInPolygon_edge_x_normal;
            edge.cross(normal, edge_x_normal);
            var vertex_to_p = pointInPolygon_vtp;
            p.vsub(v, vertex_to_p);
            var r = edge_x_normal.dot(vertex_to_p);
            if (positiveResult === null || r > 0 && positiveResult === true || r <= 0 && positiveResult === false) {
              if (positiveResult === null) {
                positiveResult = r > 0;
              }
              continue;
            } else {
              return false;
            }
          }
          return true;
        }
        var box_to_sphere = new Vec3();
        var sphereBox_ns = new Vec3();
        var sphereBox_ns1 = new Vec3();
        var sphereBox_ns2 = new Vec3();
        var sphereBox_sides = [new Vec3(), new Vec3(), new Vec3(), new Vec3(), new Vec3(), new Vec3()];
        var sphereBox_sphere_to_corner = new Vec3();
        var sphereBox_side_ns = new Vec3();
        var sphereBox_side_ns1 = new Vec3();
        var sphereBox_side_ns2 = new Vec3();
        Narrowphase.prototype[Shape.types.SPHERE | Shape.types.BOX] = Narrowphase.prototype.sphereBox = function(si, sj, xi, xj, qi, qj, bi, bj) {
          var v3pool = this.v3pool;
          var sides = sphereBox_sides;
          xi.vsub(xj, box_to_sphere);
          sj.getSideNormals(sides, qj);
          var R = si.radius;
          var penetrating_sides = [];
          var found = false;
          var side_ns = sphereBox_side_ns;
          var side_ns1 = sphereBox_side_ns1;
          var side_ns2 = sphereBox_side_ns2;
          var side_h = null;
          var side_penetrations = 0;
          var side_dot1 = 0;
          var side_dot2 = 0;
          var side_distance = null;
          for (var idx = 0, nsides = sides.length; idx !== nsides && found === false; idx++) {
            var ns = sphereBox_ns;
            ns.copy(sides[idx]);
            var h = ns.norm();
            ns.normalize();
            var dot = box_to_sphere.dot(ns);
            if (dot < h + R && dot > 0) {
              var ns1 = sphereBox_ns1;
              var ns2 = sphereBox_ns2;
              ns1.copy(sides[(idx + 1) % 3]);
              ns2.copy(sides[(idx + 2) % 3]);
              var h1 = ns1.norm();
              var h2 = ns2.norm();
              ns1.normalize();
              ns2.normalize();
              var dot1 = box_to_sphere.dot(ns1);
              var dot2 = box_to_sphere.dot(ns2);
              if (dot1 < h1 && dot1 > -h1 && dot2 < h2 && dot2 > -h2) {
                var dist = Math.abs(dot - h - R);
                if (side_distance === null || dist < side_distance) {
                  side_distance = dist;
                  side_dot1 = dot1;
                  side_dot2 = dot2;
                  side_h = h;
                  side_ns.copy(ns);
                  side_ns1.copy(ns1);
                  side_ns2.copy(ns2);
                  side_penetrations++;
                }
              }
            }
          }
          if (side_penetrations) {
            found = true;
            var r = this.createContactEquation(bi, bj, si, sj);
            side_ns.mult(-R, r.ri);
            r.ni.copy(side_ns);
            r.ni.negate(r.ni);
            side_ns.mult(side_h, side_ns);
            side_ns1.mult(side_dot1, side_ns1);
            side_ns.vadd(side_ns1, side_ns);
            side_ns2.mult(side_dot2, side_ns2);
            side_ns.vadd(side_ns2, r.rj);
            r.ri.vadd(xi, r.ri);
            r.ri.vsub(bi.position, r.ri);
            r.rj.vadd(xj, r.rj);
            r.rj.vsub(bj.position, r.rj);
            this.result.push(r);
            this.createFrictionEquationsFromContact(r, this.frictionResult);
          }
          var rj = v3pool.get();
          var sphere_to_corner = sphereBox_sphere_to_corner;
          for (var j = 0; j !== 2 && !found; j++) {
            for (var k = 0; k !== 2 && !found; k++) {
              for (var l = 0; l !== 2 && !found; l++) {
                rj.set(0, 0, 0);
                if (j) {
                  rj.vadd(sides[0], rj);
                } else {
                  rj.vsub(sides[0], rj);
                }
                if (k) {
                  rj.vadd(sides[1], rj);
                } else {
                  rj.vsub(sides[1], rj);
                }
                if (l) {
                  rj.vadd(sides[2], rj);
                } else {
                  rj.vsub(sides[2], rj);
                }
                xj.vadd(rj, sphere_to_corner);
                sphere_to_corner.vsub(xi, sphere_to_corner);
                if (sphere_to_corner.norm2() < R * R) {
                  found = true;
                  var r = this.createContactEquation(bi, bj, si, sj);
                  r.ri.copy(sphere_to_corner);
                  r.ri.normalize();
                  r.ni.copy(r.ri);
                  r.ri.mult(R, r.ri);
                  r.rj.copy(rj);
                  r.ri.vadd(xi, r.ri);
                  r.ri.vsub(bi.position, r.ri);
                  r.rj.vadd(xj, r.rj);
                  r.rj.vsub(bj.position, r.rj);
                  this.result.push(r);
                  this.createFrictionEquationsFromContact(r, this.frictionResult);
                }
              }
            }
          }
          v3pool.release(rj);
          rj = null;
          var edgeTangent = v3pool.get();
          var edgeCenter = v3pool.get();
          var r = v3pool.get();
          var orthogonal = v3pool.get();
          var dist = v3pool.get();
          var Nsides = sides.length;
          for (var j = 0; j !== Nsides && !found; j++) {
            for (var k = 0; k !== Nsides && !found; k++) {
              if (j % 3 !== k % 3) {
                sides[k].cross(sides[j], edgeTangent);
                edgeTangent.normalize();
                sides[j].vadd(sides[k], edgeCenter);
                r.copy(xi);
                r.vsub(edgeCenter, r);
                r.vsub(xj, r);
                var orthonorm = r.dot(edgeTangent);
                edgeTangent.mult(orthonorm, orthogonal);
                var l = 0;
                while (l === j % 3 || l === k % 3) {
                  l++;
                }
                dist.copy(xi);
                dist.vsub(orthogonal, dist);
                dist.vsub(edgeCenter, dist);
                dist.vsub(xj, dist);
                var tdist = Math.abs(orthonorm);
                var ndist = dist.norm();
                if (tdist < sides[l].norm() && ndist < R) {
                  found = true;
                  var res = this.createContactEquation(bi, bj, si, sj);
                  edgeCenter.vadd(orthogonal, res.rj);
                  res.rj.copy(res.rj);
                  dist.negate(res.ni);
                  res.ni.normalize();
                  res.ri.copy(res.rj);
                  res.ri.vadd(xj, res.ri);
                  res.ri.vsub(xi, res.ri);
                  res.ri.normalize();
                  res.ri.mult(R, res.ri);
                  res.ri.vadd(xi, res.ri);
                  res.ri.vsub(bi.position, res.ri);
                  res.rj.vadd(xj, res.rj);
                  res.rj.vsub(bj.position, res.rj);
                  this.result.push(res);
                  this.createFrictionEquationsFromContact(res, this.frictionResult);
                }
              }
            }
          }
          v3pool.release(edgeTangent, edgeCenter, r, orthogonal, dist);
        };
        var convex_to_sphere = new Vec3();
        var sphereConvex_edge = new Vec3();
        var sphereConvex_edgeUnit = new Vec3();
        var sphereConvex_sphereToCorner = new Vec3();
        var sphereConvex_worldCorner = new Vec3();
        var sphereConvex_worldNormal = new Vec3();
        var sphereConvex_worldPoint = new Vec3();
        var sphereConvex_worldSpherePointClosestToPlane = new Vec3();
        var sphereConvex_penetrationVec = new Vec3();
        var sphereConvex_sphereToWorldPoint = new Vec3();
        Narrowphase.prototype[Shape.types.SPHERE | Shape.types.CONVEXPOLYHEDRON] = Narrowphase.prototype.sphereConvex = function(si, sj, xi, xj, qi, qj, bi, bj) {
          var v3pool = this.v3pool;
          xi.vsub(xj, convex_to_sphere);
          var normals = sj.faceNormals;
          var faces = sj.faces;
          var verts = sj.vertices;
          var R = si.radius;
          var penetrating_sides = [];
          for (var i = 0; i !== verts.length; i++) {
            var v = verts[i];
            var worldCorner = sphereConvex_worldCorner;
            qj.vmult(v, worldCorner);
            xj.vadd(worldCorner, worldCorner);
            var sphere_to_corner = sphereConvex_sphereToCorner;
            worldCorner.vsub(xi, sphere_to_corner);
            if (sphere_to_corner.norm2() < R * R) {
              found = true;
              var r = this.createContactEquation(bi, bj, si, sj);
              r.ri.copy(sphere_to_corner);
              r.ri.normalize();
              r.ni.copy(r.ri);
              r.ri.mult(R, r.ri);
              worldCorner.vsub(xj, r.rj);
              r.ri.vadd(xi, r.ri);
              r.ri.vsub(bi.position, r.ri);
              r.rj.vadd(xj, r.rj);
              r.rj.vsub(bj.position, r.rj);
              this.result.push(r);
              this.createFrictionEquationsFromContact(r, this.frictionResult);
              return;
            }
          }
          var found = false;
          for (var i = 0, nfaces = faces.length; i !== nfaces && found === false; i++) {
            var normal = normals[i];
            var face = faces[i];
            var worldNormal = sphereConvex_worldNormal;
            qj.vmult(normal, worldNormal);
            var worldPoint = sphereConvex_worldPoint;
            qj.vmult(verts[face[0]], worldPoint);
            worldPoint.vadd(xj, worldPoint);
            var worldSpherePointClosestToPlane = sphereConvex_worldSpherePointClosestToPlane;
            worldNormal.mult(-R, worldSpherePointClosestToPlane);
            xi.vadd(worldSpherePointClosestToPlane, worldSpherePointClosestToPlane);
            var penetrationVec = sphereConvex_penetrationVec;
            worldSpherePointClosestToPlane.vsub(worldPoint, penetrationVec);
            var penetration = penetrationVec.dot(worldNormal);
            var worldPointToSphere = sphereConvex_sphereToWorldPoint;
            xi.vsub(worldPoint, worldPointToSphere);
            if (penetration < 0 && worldPointToSphere.dot(worldNormal) > 0) {
              var faceVerts = [];
              for (var j = 0, Nverts = face.length; j !== Nverts; j++) {
                var worldVertex = v3pool.get();
                qj.vmult(verts[face[j]], worldVertex);
                xj.vadd(worldVertex, worldVertex);
                faceVerts.push(worldVertex);
              }
              if (pointInPolygon(faceVerts, worldNormal, xi)) {
                found = true;
                var r = this.createContactEquation(bi, bj, si, sj);
                worldNormal.mult(-R, r.ri);
                worldNormal.negate(r.ni);
                var penetrationVec2 = v3pool.get();
                worldNormal.mult(-penetration, penetrationVec2);
                var penetrationSpherePoint = v3pool.get();
                worldNormal.mult(-R, penetrationSpherePoint);
                xi.vsub(xj, r.rj);
                r.rj.vadd(penetrationSpherePoint, r.rj);
                r.rj.vadd(penetrationVec2, r.rj);
                r.rj.vadd(xj, r.rj);
                r.rj.vsub(bj.position, r.rj);
                r.ri.vadd(xi, r.ri);
                r.ri.vsub(bi.position, r.ri);
                v3pool.release(penetrationVec2);
                v3pool.release(penetrationSpherePoint);
                this.result.push(r);
                this.createFrictionEquationsFromContact(r, this.frictionResult);
                for (var j = 0, Nfaceverts = faceVerts.length; j !== Nfaceverts; j++) {
                  v3pool.release(faceVerts[j]);
                }
                return;
              } else {
                for (var j = 0; j !== face.length; j++) {
                  var v1 = v3pool.get();
                  var v2 = v3pool.get();
                  qj.vmult(verts[face[(j + 1) % face.length]], v1);
                  qj.vmult(verts[face[(j + 2) % face.length]], v2);
                  xj.vadd(v1, v1);
                  xj.vadd(v2, v2);
                  var edge = sphereConvex_edge;
                  v2.vsub(v1, edge);
                  var edgeUnit = sphereConvex_edgeUnit;
                  edge.unit(edgeUnit);
                  var p = v3pool.get();
                  var v1_to_xi = v3pool.get();
                  xi.vsub(v1, v1_to_xi);
                  var dot = v1_to_xi.dot(edgeUnit);
                  edgeUnit.mult(dot, p);
                  p.vadd(v1, p);
                  var xi_to_p = v3pool.get();
                  p.vsub(xi, xi_to_p);
                  if (dot > 0 && dot * dot < edge.norm2() && xi_to_p.norm2() < R * R) {
                    var r = this.createContactEquation(bi, bj, si, sj);
                    p.vsub(xj, r.rj);
                    p.vsub(xi, r.ni);
                    r.ni.normalize();
                    r.ni.mult(R, r.ri);
                    r.rj.vadd(xj, r.rj);
                    r.rj.vsub(bj.position, r.rj);
                    r.ri.vadd(xi, r.ri);
                    r.ri.vsub(bi.position, r.ri);
                    this.result.push(r);
                    this.createFrictionEquationsFromContact(r, this.frictionResult);
                    for (var j = 0, Nfaceverts = faceVerts.length; j !== Nfaceverts; j++) {
                      v3pool.release(faceVerts[j]);
                    }
                    v3pool.release(v1);
                    v3pool.release(v2);
                    v3pool.release(p);
                    v3pool.release(xi_to_p);
                    v3pool.release(v1_to_xi);
                    return;
                  }
                  v3pool.release(v1);
                  v3pool.release(v2);
                  v3pool.release(p);
                  v3pool.release(xi_to_p);
                  v3pool.release(v1_to_xi);
                }
              }
              for (var j = 0, Nfaceverts = faceVerts.length; j !== Nfaceverts; j++) {
                v3pool.release(faceVerts[j]);
              }
            }
          }
        };
        var planeBox_normal = new Vec3();
        var plane_to_corner = new Vec3();
        Narrowphase.prototype[Shape.types.PLANE | Shape.types.BOX] = Narrowphase.prototype.planeBox = function(si, sj, xi, xj, qi, qj, bi, bj) {
          sj.convexPolyhedronRepresentation.material = sj.material;
          sj.convexPolyhedronRepresentation.collisionResponse = sj.collisionResponse;
          this.planeConvex(si, sj.convexPolyhedronRepresentation, xi, xj, qi, qj, bi, bj);
        };
        var planeConvex_v = new Vec3();
        var planeConvex_normal = new Vec3();
        var planeConvex_relpos = new Vec3();
        var planeConvex_projected = new Vec3();
        Narrowphase.prototype[Shape.types.PLANE | Shape.types.CONVEXPOLYHEDRON] = Narrowphase.prototype.planeConvex = function(planeShape, convexShape, planePosition, convexPosition, planeQuat, convexQuat, planeBody, convexBody) {
          var worldVertex = planeConvex_v, worldNormal = planeConvex_normal;
          worldNormal.set(0, 0, 1);
          planeQuat.vmult(worldNormal, worldNormal);
          var numContacts = 0;
          var relpos = planeConvex_relpos;
          for (var i = 0; i !== convexShape.vertices.length; i++) {
            worldVertex.copy(convexShape.vertices[i]);
            convexQuat.vmult(worldVertex, worldVertex);
            convexPosition.vadd(worldVertex, worldVertex);
            worldVertex.vsub(planePosition, relpos);
            var dot = worldNormal.dot(relpos);
            if (dot <= 0) {
              var r = this.createContactEquation(planeBody, convexBody, planeShape, convexShape);
              var projected = planeConvex_projected;
              worldNormal.mult(worldNormal.dot(relpos), projected);
              worldVertex.vsub(projected, projected);
              projected.vsub(planePosition, r.ri);
              r.ni.copy(worldNormal);
              worldVertex.vsub(convexPosition, r.rj);
              r.ri.vadd(planePosition, r.ri);
              r.ri.vsub(planeBody.position, r.ri);
              r.rj.vadd(convexPosition, r.rj);
              r.rj.vsub(convexBody.position, r.rj);
              this.result.push(r);
              numContacts++;
              if (!this.enableFrictionReduction) {
                this.createFrictionEquationsFromContact(r, this.frictionResult);
              }
            }
          }
          if (this.enableFrictionReduction && numContacts) {
            this.createFrictionFromAverage(numContacts);
          }
        };
        var convexConvex_sepAxis = new Vec3();
        var convexConvex_q = new Vec3();
        Narrowphase.prototype[Shape.types.CONVEXPOLYHEDRON] = Narrowphase.prototype.convexConvex = function(si, sj, xi, xj, qi, qj, bi, bj, rsi, rsj, faceListA, faceListB) {
          var sepAxis = convexConvex_sepAxis;
          if (xi.distanceTo(xj) > si.boundingSphereRadius + sj.boundingSphereRadius) {
            return;
          }
          if (si.findSeparatingAxis(sj, xi, qi, xj, qj, sepAxis, faceListA, faceListB)) {
            var res = [];
            var q = convexConvex_q;
            si.clipAgainstHull(xi, qi, sj, xj, qj, sepAxis, -100, 100, res);
            var numContacts = 0;
            for (var j = 0; j !== res.length; j++) {
              var r = this.createContactEquation(bi, bj, si, sj, rsi, rsj), ri = r.ri, rj = r.rj;
              sepAxis.negate(r.ni);
              res[j].normal.negate(q);
              q.mult(res[j].depth, q);
              res[j].point.vadd(q, ri);
              rj.copy(res[j].point);
              ri.vsub(xi, ri);
              rj.vsub(xj, rj);
              ri.vadd(xi, ri);
              ri.vsub(bi.position, ri);
              rj.vadd(xj, rj);
              rj.vsub(bj.position, rj);
              this.result.push(r);
              numContacts++;
              if (!this.enableFrictionReduction) {
                this.createFrictionEquationsFromContact(r, this.frictionResult);
              }
            }
            if (this.enableFrictionReduction && numContacts) {
              this.createFrictionFromAverage(numContacts);
            }
          }
        };
        var particlePlane_normal = new Vec3();
        var particlePlane_relpos = new Vec3();
        var particlePlane_projected = new Vec3();
        Narrowphase.prototype[Shape.types.PLANE | Shape.types.PARTICLE] = Narrowphase.prototype.planeParticle = function(sj, si, xj, xi, qj, qi, bj, bi) {
          var normal = particlePlane_normal;
          normal.set(0, 0, 1);
          bj.quaternion.vmult(normal, normal);
          var relpos = particlePlane_relpos;
          xi.vsub(bj.position, relpos);
          var dot = normal.dot(relpos);
          if (dot <= 0) {
            var r = this.createContactEquation(bi, bj, si, sj);
            r.ni.copy(normal);
            r.ni.negate(r.ni);
            r.ri.set(0, 0, 0);
            var projected = particlePlane_projected;
            normal.mult(normal.dot(xi), projected);
            xi.vsub(projected, projected);
            r.rj.copy(projected);
            this.result.push(r);
            this.createFrictionEquationsFromContact(r, this.frictionResult);
          }
        };
        var particleSphere_normal = new Vec3();
        Narrowphase.prototype[Shape.types.PARTICLE | Shape.types.SPHERE] = Narrowphase.prototype.sphereParticle = function(sj, si, xj, xi, qj, qi, bj, bi) {
          var normal = particleSphere_normal;
          normal.set(0, 0, 1);
          xi.vsub(xj, normal);
          var lengthSquared = normal.norm2();
          if (lengthSquared <= sj.radius * sj.radius) {
            var r = this.createContactEquation(bi, bj, si, sj);
            normal.normalize();
            r.rj.copy(normal);
            r.rj.mult(sj.radius, r.rj);
            r.ni.copy(normal);
            r.ni.negate(r.ni);
            r.ri.set(0, 0, 0);
            this.result.push(r);
            this.createFrictionEquationsFromContact(r, this.frictionResult);
          }
        };
        var cqj = new Quaternion2();
        var convexParticle_local = new Vec3();
        var convexParticle_normal = new Vec3();
        var convexParticle_penetratedFaceNormal = new Vec3();
        var convexParticle_vertexToParticle = new Vec3();
        var convexParticle_worldPenetrationVec = new Vec3();
        Narrowphase.prototype[Shape.types.PARTICLE | Shape.types.CONVEXPOLYHEDRON] = Narrowphase.prototype.convexParticle = function(sj, si, xj, xi, qj, qi, bj, bi) {
          var penetratedFaceIndex = -1;
          var penetratedFaceNormal = convexParticle_penetratedFaceNormal;
          var worldPenetrationVec = convexParticle_worldPenetrationVec;
          var minPenetration = null;
          var numDetectedFaces = 0;
          var local = convexParticle_local;
          local.copy(xi);
          local.vsub(xj, local);
          qj.conjugate(cqj);
          cqj.vmult(local, local);
          if (sj.pointIsInside(local)) {
            if (sj.worldVerticesNeedsUpdate) {
              sj.computeWorldVertices(xj, qj);
            }
            if (sj.worldFaceNormalsNeedsUpdate) {
              sj.computeWorldFaceNormals(qj);
            }
            for (var i = 0, nfaces = sj.faces.length; i !== nfaces; i++) {
              var verts = [sj.worldVertices[sj.faces[i][0]]];
              var normal = sj.worldFaceNormals[i];
              xi.vsub(verts[0], convexParticle_vertexToParticle);
              var penetration = -normal.dot(convexParticle_vertexToParticle);
              if (minPenetration === null || Math.abs(penetration) < Math.abs(minPenetration)) {
                minPenetration = penetration;
                penetratedFaceIndex = i;
                penetratedFaceNormal.copy(normal);
                numDetectedFaces++;
              }
            }
            if (penetratedFaceIndex !== -1) {
              var r = this.createContactEquation(bi, bj, si, sj);
              penetratedFaceNormal.mult(minPenetration, worldPenetrationVec);
              worldPenetrationVec.vadd(xi, worldPenetrationVec);
              worldPenetrationVec.vsub(xj, worldPenetrationVec);
              r.rj.copy(worldPenetrationVec);
              penetratedFaceNormal.negate(r.ni);
              r.ri.set(0, 0, 0);
              var ri = r.ri, rj = r.rj;
              ri.vadd(xi, ri);
              ri.vsub(bi.position, ri);
              rj.vadd(xj, rj);
              rj.vsub(bj.position, rj);
              this.result.push(r);
              this.createFrictionEquationsFromContact(r, this.frictionResult);
            } else {
              console.warn("Point found inside convex, but did not find penetrating face!");
            }
          }
        };
        Narrowphase.prototype[Shape.types.BOX | Shape.types.HEIGHTFIELD] = Narrowphase.prototype.boxHeightfield = function(si, sj, xi, xj, qi, qj, bi, bj) {
          si.convexPolyhedronRepresentation.material = si.material;
          si.convexPolyhedronRepresentation.collisionResponse = si.collisionResponse;
          this.convexHeightfield(si.convexPolyhedronRepresentation, sj, xi, xj, qi, qj, bi, bj);
        };
        var convexHeightfield_tmp1 = new Vec3();
        var convexHeightfield_tmp2 = new Vec3();
        var convexHeightfield_faceList = [0];
        Narrowphase.prototype[Shape.types.CONVEXPOLYHEDRON | Shape.types.HEIGHTFIELD] = Narrowphase.prototype.convexHeightfield = function(convexShape, hfShape, convexPos, hfPos, convexQuat, hfQuat, convexBody, hfBody) {
          var data = hfShape.data, w = hfShape.elementSize, radius = convexShape.boundingSphereRadius, worldPillarOffset = convexHeightfield_tmp2, faceList = convexHeightfield_faceList;
          var localConvexPos = convexHeightfield_tmp1;
          Transform.pointToLocalFrame(hfPos, hfQuat, convexPos, localConvexPos);
          var iMinX = Math.floor((localConvexPos.x - radius) / w) - 1, iMaxX = Math.ceil((localConvexPos.x + radius) / w) + 1, iMinY = Math.floor((localConvexPos.y - radius) / w) - 1, iMaxY = Math.ceil((localConvexPos.y + radius) / w) + 1;
          if (iMaxX < 0 || iMaxY < 0 || iMinX > data.length || iMinY > data[0].length) {
            return;
          }
          if (iMinX < 0) {
            iMinX = 0;
          }
          if (iMaxX < 0) {
            iMaxX = 0;
          }
          if (iMinY < 0) {
            iMinY = 0;
          }
          if (iMaxY < 0) {
            iMaxY = 0;
          }
          if (iMinX >= data.length) {
            iMinX = data.length - 1;
          }
          if (iMaxX >= data.length) {
            iMaxX = data.length - 1;
          }
          if (iMaxY >= data[0].length) {
            iMaxY = data[0].length - 1;
          }
          if (iMinY >= data[0].length) {
            iMinY = data[0].length - 1;
          }
          var minMax = [];
          hfShape.getRectMinMax(iMinX, iMinY, iMaxX, iMaxY, minMax);
          var min = minMax[0];
          var max = minMax[1];
          if (localConvexPos.z - radius > max || localConvexPos.z + radius < min) {
            return;
          }
          for (var i = iMinX; i < iMaxX; i++) {
            for (var j = iMinY; j < iMaxY; j++) {
              hfShape.getConvexTrianglePillar(i, j, false);
              Transform.pointToWorldFrame(hfPos, hfQuat, hfShape.pillarOffset, worldPillarOffset);
              if (convexPos.distanceTo(worldPillarOffset) < hfShape.pillarConvex.boundingSphereRadius + convexShape.boundingSphereRadius) {
                this.convexConvex(convexShape, hfShape.pillarConvex, convexPos, worldPillarOffset, convexQuat, hfQuat, convexBody, hfBody, null, null, faceList, null);
              }
              hfShape.getConvexTrianglePillar(i, j, true);
              Transform.pointToWorldFrame(hfPos, hfQuat, hfShape.pillarOffset, worldPillarOffset);
              if (convexPos.distanceTo(worldPillarOffset) < hfShape.pillarConvex.boundingSphereRadius + convexShape.boundingSphereRadius) {
                this.convexConvex(convexShape, hfShape.pillarConvex, convexPos, worldPillarOffset, convexQuat, hfQuat, convexBody, hfBody, null, null, faceList, null);
              }
            }
          }
        };
        var sphereHeightfield_tmp1 = new Vec3();
        var sphereHeightfield_tmp2 = new Vec3();
        Narrowphase.prototype[Shape.types.SPHERE | Shape.types.HEIGHTFIELD] = Narrowphase.prototype.sphereHeightfield = function(sphereShape, hfShape, spherePos, hfPos, sphereQuat, hfQuat, sphereBody, hfBody) {
          var data = hfShape.data, radius = sphereShape.radius, w = hfShape.elementSize, worldPillarOffset = sphereHeightfield_tmp2;
          var localSpherePos = sphereHeightfield_tmp1;
          Transform.pointToLocalFrame(hfPos, hfQuat, spherePos, localSpherePos);
          var iMinX = Math.floor((localSpherePos.x - radius) / w) - 1, iMaxX = Math.ceil((localSpherePos.x + radius) / w) + 1, iMinY = Math.floor((localSpherePos.y - radius) / w) - 1, iMaxY = Math.ceil((localSpherePos.y + radius) / w) + 1;
          if (iMaxX < 0 || iMaxY < 0 || iMinX > data.length || iMaxY > data[0].length) {
            return;
          }
          if (iMinX < 0) {
            iMinX = 0;
          }
          if (iMaxX < 0) {
            iMaxX = 0;
          }
          if (iMinY < 0) {
            iMinY = 0;
          }
          if (iMaxY < 0) {
            iMaxY = 0;
          }
          if (iMinX >= data.length) {
            iMinX = data.length - 1;
          }
          if (iMaxX >= data.length) {
            iMaxX = data.length - 1;
          }
          if (iMaxY >= data[0].length) {
            iMaxY = data[0].length - 1;
          }
          if (iMinY >= data[0].length) {
            iMinY = data[0].length - 1;
          }
          var minMax = [];
          hfShape.getRectMinMax(iMinX, iMinY, iMaxX, iMaxY, minMax);
          var min = minMax[0];
          var max = minMax[1];
          if (localSpherePos.z - radius > max || localSpherePos.z + radius < min) {
            return;
          }
          var result = this.result;
          for (var i = iMinX; i < iMaxX; i++) {
            for (var j = iMinY; j < iMaxY; j++) {
              var numContactsBefore = result.length;
              hfShape.getConvexTrianglePillar(i, j, false);
              Transform.pointToWorldFrame(hfPos, hfQuat, hfShape.pillarOffset, worldPillarOffset);
              if (spherePos.distanceTo(worldPillarOffset) < hfShape.pillarConvex.boundingSphereRadius + sphereShape.boundingSphereRadius) {
                this.sphereConvex(sphereShape, hfShape.pillarConvex, spherePos, worldPillarOffset, sphereQuat, hfQuat, sphereBody, hfBody);
              }
              hfShape.getConvexTrianglePillar(i, j, true);
              Transform.pointToWorldFrame(hfPos, hfQuat, hfShape.pillarOffset, worldPillarOffset);
              if (spherePos.distanceTo(worldPillarOffset) < hfShape.pillarConvex.boundingSphereRadius + sphereShape.boundingSphereRadius) {
                this.sphereConvex(sphereShape, hfShape.pillarConvex, spherePos, worldPillarOffset, sphereQuat, hfQuat, sphereBody, hfBody);
              }
              var numContacts = result.length - numContactsBefore;
              if (numContacts > 2) {
                return;
              }
            }
          }
        };
      }, { "../collision/AABB": 3, "../collision/Ray": 9, "../equations/ContactEquation": 19, "../equations/FrictionEquation": 21, "../math/Quaternion": 28, "../math/Transform": 29, "../math/Vec3": 30, "../shapes/ConvexPolyhedron": 38, "../shapes/Shape": 43, "../solver/Solver": 47, "../utils/Vec3Pool": 54 }], 56: [function(_dereq_, module4, exports3) {
        module4.exports = World;
        var Shape = _dereq_("../shapes/Shape");
        var Vec3 = _dereq_("../math/Vec3");
        var Quaternion2 = _dereq_("../math/Quaternion");
        var GSSolver = _dereq_("../solver/GSSolver");
        var Vec3Pool = _dereq_("../utils/Vec3Pool");
        var ContactEquation = _dereq_("../equations/ContactEquation");
        var FrictionEquation = _dereq_("../equations/FrictionEquation");
        var Narrowphase = _dereq_("./Narrowphase");
        var EventTarget = _dereq_("../utils/EventTarget");
        var ArrayCollisionMatrix = _dereq_("../collision/ArrayCollisionMatrix");
        var Material = _dereq_("../material/Material");
        var ContactMaterial = _dereq_("../material/ContactMaterial");
        var Body = _dereq_("../objects/Body");
        var TupleDictionary = _dereq_("../utils/TupleDictionary");
        var RaycastResult = _dereq_("../collision/RaycastResult");
        var AABB = _dereq_("../collision/AABB");
        var Ray = _dereq_("../collision/Ray");
        var NaiveBroadphase = _dereq_("../collision/NaiveBroadphase");
        function World() {
          EventTarget.apply(this);
          this.dt = -1;
          this.allowSleep = false;
          this.contacts = [];
          this.frictionEquations = [];
          this.quatNormalizeSkip = 0;
          this.quatNormalizeFast = false;
          this.time = 0;
          this.stepnumber = 0;
          this.default_dt = 1 / 60;
          this.nextId = 0;
          this.gravity = new Vec3();
          this.broadphase = new NaiveBroadphase();
          this.bodies = [];
          this.solver = new GSSolver();
          this.constraints = [];
          this.narrowphase = new Narrowphase(this);
          this.collisionMatrix = new ArrayCollisionMatrix();
          this.collisionMatrixPrevious = new ArrayCollisionMatrix();
          this.materials = [];
          this.contactmaterials = [];
          this.contactMaterialTable = new TupleDictionary();
          this.defaultMaterial = new Material("default");
          this.defaultContactMaterial = new ContactMaterial(this.defaultMaterial, this.defaultMaterial, { friction: 0.3, restitution: 0 });
          this.doProfiling = false;
          this.profile = {
            solve: 0,
            makeContactConstraints: 0,
            broadphase: 0,
            integrate: 0,
            narrowphase: 0
          };
          this.subsystems = [];
          this.addBodyEvent = {
            type: "addBody",
            body: null
          };
          this.removeBodyEvent = {
            type: "removeBody",
            body: null
          };
        }
        World.prototype = new EventTarget();
        var tmpAABB1 = new AABB();
        var tmpArray1 = [];
        var tmpRay = new Ray();
        World.prototype.getContactMaterial = function(m1, m2) {
          return this.contactMaterialTable.get(m1.id, m2.id);
        };
        World.prototype.numObjects = function() {
          return this.bodies.length;
        };
        World.prototype.collisionMatrixTick = function() {
          var temp = this.collisionMatrixPrevious;
          this.collisionMatrixPrevious = this.collisionMatrix;
          this.collisionMatrix = temp;
          this.collisionMatrix.reset();
        };
        World.prototype.add = World.prototype.addBody = function(body) {
          if (this.bodies.indexOf(body) !== -1) {
            return;
          }
          body.index = this.bodies.length;
          this.bodies.push(body);
          body.world = this;
          body.initPosition.copy(body.position);
          body.initVelocity.copy(body.velocity);
          body.timeLastSleepy = this.time;
          if (body instanceof Body) {
            body.initAngularVelocity.copy(body.angularVelocity);
            body.initQuaternion.copy(body.quaternion);
          }
          this.collisionMatrix.setNumObjects(this.bodies.length);
          this.addBodyEvent.body = body;
          this.dispatchEvent(this.addBodyEvent);
        };
        World.prototype.addConstraint = function(c) {
          this.constraints.push(c);
        };
        World.prototype.removeConstraint = function(c) {
          var idx = this.constraints.indexOf(c);
          if (idx !== -1) {
            this.constraints.splice(idx, 1);
          }
        };
        World.prototype.rayTest = function(from, to, result) {
          if (result instanceof RaycastResult) {
            this.raycastClosest(from, to, {
              skipBackfaces: true
            }, result);
          } else {
            this.raycastAll(from, to, {
              skipBackfaces: true
            }, result);
          }
        };
        World.prototype.raycastAll = function(from, to, options, callback) {
          options.mode = Ray.ALL;
          options.from = from;
          options.to = to;
          options.callback = callback;
          return tmpRay.intersectWorld(this, options);
        };
        World.prototype.raycastAny = function(from, to, options, result) {
          options.mode = Ray.ANY;
          options.from = from;
          options.to = to;
          options.result = result;
          return tmpRay.intersectWorld(this, options);
        };
        World.prototype.raycastClosest = function(from, to, options, result) {
          options.mode = Ray.CLOSEST;
          options.from = from;
          options.to = to;
          options.result = result;
          return tmpRay.intersectWorld(this, options);
        };
        World.prototype.remove = function(body) {
          body.world = null;
          var n = this.bodies.length - 1, bodies = this.bodies, idx = bodies.indexOf(body);
          if (idx !== -1) {
            bodies.splice(idx, 1);
            for (var i = 0; i !== bodies.length; i++) {
              bodies[i].index = i;
            }
            this.collisionMatrix.setNumObjects(n);
            this.removeBodyEvent.body = body;
            this.dispatchEvent(this.removeBodyEvent);
          }
        };
        World.prototype.removeBody = World.prototype.remove;
        World.prototype.addMaterial = function(m) {
          this.materials.push(m);
        };
        World.prototype.addContactMaterial = function(cmat) {
          this.contactmaterials.push(cmat);
          this.contactMaterialTable.set(cmat.materials[0].id, cmat.materials[1].id, cmat);
        };
        if (typeof performance === "undefined") {
          performance = {};
        }
        if (!performance.now) {
          var nowOffset = Date.now();
          if (performance.timing && performance.timing.navigationStart) {
            nowOffset = performance.timing.navigationStart;
          }
          performance.now = function() {
            return Date.now() - nowOffset;
          };
        }
        var step_tmp1 = new Vec3();
        World.prototype.step = function(dt, timeSinceLastCalled, maxSubSteps) {
          maxSubSteps = maxSubSteps || 10;
          timeSinceLastCalled = timeSinceLastCalled || 0;
          if (timeSinceLastCalled === 0) {
            this.internalStep(dt);
            this.time += dt;
          } else {
            var internalSteps = Math.floor((this.time + timeSinceLastCalled) / dt) - Math.floor(this.time / dt);
            internalSteps = Math.min(internalSteps, maxSubSteps);
            var t0 = performance.now();
            for (var i = 0; i !== internalSteps; i++) {
              this.internalStep(dt);
              if (performance.now() - t0 > dt * 1e3) {
                break;
              }
            }
            this.time += timeSinceLastCalled;
            var h = this.time % dt;
            var h_div_dt = h / dt;
            var interpvelo = step_tmp1;
            var bodies = this.bodies;
            for (var j = 0; j !== bodies.length; j++) {
              var b = bodies[j];
              if (b.type !== Body.STATIC && b.sleepState !== Body.SLEEPING) {
                b.position.vsub(b.previousPosition, interpvelo);
                interpvelo.scale(h_div_dt, interpvelo);
                b.position.vadd(interpvelo, b.interpolatedPosition);
              } else {
                b.interpolatedPosition.copy(b.position);
                b.interpolatedQuaternion.copy(b.quaternion);
              }
            }
          }
        };
        var World_step_postStepEvent = { type: "postStep" }, World_step_preStepEvent = { type: "preStep" }, World_step_collideEvent = { type: "collide", body: null, contact: null }, World_step_oldContacts = [], World_step_frictionEquationPool = [], World_step_p1 = [], World_step_p2 = [], World_step_gvec = new Vec3(), World_step_vi = new Vec3(), World_step_vj = new Vec3(), World_step_wi = new Vec3(), World_step_wj = new Vec3(), World_step_t1 = new Vec3(), World_step_t2 = new Vec3(), World_step_rixn = new Vec3(), World_step_rjxn = new Vec3(), World_step_step_q = new Quaternion2(), World_step_step_w = new Quaternion2(), World_step_step_wq = new Quaternion2(), invI_tau_dt = new Vec3();
        World.prototype.internalStep = function(dt) {
          this.dt = dt;
          var world = this, that = this, contacts = this.contacts, p1 = World_step_p1, p22 = World_step_p2, N = this.numObjects(), bodies = this.bodies, solver = this.solver, gravity = this.gravity, doProfiling = this.doProfiling, profile = this.profile, DYNAMIC = Body.DYNAMIC, profilingStart, constraints = this.constraints, frictionEquationPool = World_step_frictionEquationPool, gnorm = gravity.norm(), gx = gravity.x, gy = gravity.y, gz = gravity.z, i = 0;
          if (doProfiling) {
            profilingStart = performance.now();
          }
          for (i = 0; i !== N; i++) {
            var bi = bodies[i];
            if (bi.type & DYNAMIC) {
              var f = bi.force, m = bi.mass;
              f.x += m * gx;
              f.y += m * gy;
              f.z += m * gz;
            }
          }
          for (var i = 0, Nsubsystems = this.subsystems.length; i !== Nsubsystems; i++) {
            this.subsystems[i].update();
          }
          if (doProfiling) {
            profilingStart = performance.now();
          }
          p1.length = 0;
          p22.length = 0;
          this.broadphase.collisionPairs(this, p1, p22);
          if (doProfiling) {
            profile.broadphase = performance.now() - profilingStart;
          }
          var Nconstraints = constraints.length;
          for (i = 0; i !== Nconstraints; i++) {
            var c = constraints[i];
            if (!c.collideConnected) {
              for (var j = p1.length - 1; j >= 0; j -= 1) {
                if (c.bodyA === p1[j] && c.bodyB === p22[j] || c.bodyB === p1[j] && c.bodyA === p22[j]) {
                  p1.splice(j, 1);
                  p22.splice(j, 1);
                }
              }
            }
          }
          this.collisionMatrixTick();
          if (doProfiling) {
            profilingStart = performance.now();
          }
          var oldcontacts = World_step_oldContacts;
          var NoldContacts = contacts.length;
          for (i = 0; i !== NoldContacts; i++) {
            oldcontacts.push(contacts[i]);
          }
          contacts.length = 0;
          var NoldFrictionEquations = this.frictionEquations.length;
          for (i = 0; i !== NoldFrictionEquations; i++) {
            frictionEquationPool.push(this.frictionEquations[i]);
          }
          this.frictionEquations.length = 0;
          this.narrowphase.getContacts(p1, p22, this, contacts, oldcontacts, this.frictionEquations, frictionEquationPool);
          if (doProfiling) {
            profile.narrowphase = performance.now() - profilingStart;
          }
          if (doProfiling) {
            profilingStart = performance.now();
          }
          for (var i = 0; i < this.frictionEquations.length; i++) {
            solver.addEquation(this.frictionEquations[i]);
          }
          var ncontacts = contacts.length;
          for (var k = 0; k !== ncontacts; k++) {
            var c = contacts[k];
            var bi = c.bi, bj = c.bj, si = c.si, sj = c.sj;
            var cm;
            if (bi.material && bj.material) {
              cm = this.getContactMaterial(bi.material, bj.material) || this.defaultContactMaterial;
            } else {
              cm = this.defaultContactMaterial;
            }
            var mu = cm.friction;
            if (bi.material && bj.material) {
              if (bi.material.friction >= 0 && bj.material.friction >= 0) {
                mu = bi.material.friction * bj.material.friction;
              }
              if (bi.material.restitution >= 0 && bj.material.restitution >= 0) {
                c.restitution = bi.material.restitution * bj.material.restitution;
              }
            }
            solver.addEquation(c);
            if (bi.allowSleep && bi.type === Body.DYNAMIC && bi.sleepState === Body.SLEEPING && bj.sleepState === Body.AWAKE && bj.type !== Body.STATIC) {
              var speedSquaredB = bj.velocity.norm2() + bj.angularVelocity.norm2();
              var speedLimitSquaredB = Math.pow(bj.sleepSpeedLimit, 2);
              if (speedSquaredB >= speedLimitSquaredB * 2) {
                bi._wakeUpAfterNarrowphase = true;
              }
            }
            if (bj.allowSleep && bj.type === Body.DYNAMIC && bj.sleepState === Body.SLEEPING && bi.sleepState === Body.AWAKE && bi.type !== Body.STATIC) {
              var speedSquaredA = bi.velocity.norm2() + bi.angularVelocity.norm2();
              var speedLimitSquaredA = Math.pow(bi.sleepSpeedLimit, 2);
              if (speedSquaredA >= speedLimitSquaredA * 2) {
                bj._wakeUpAfterNarrowphase = true;
              }
            }
            this.collisionMatrix.set(bi, bj, true);
            if (!this.collisionMatrixPrevious.get(bi, bj)) {
              World_step_collideEvent.body = bj;
              World_step_collideEvent.contact = c;
              bi.dispatchEvent(World_step_collideEvent);
              World_step_collideEvent.body = bi;
              bj.dispatchEvent(World_step_collideEvent);
            }
          }
          if (doProfiling) {
            profile.makeContactConstraints = performance.now() - profilingStart;
            profilingStart = performance.now();
          }
          for (i = 0; i !== N; i++) {
            var bi = bodies[i];
            if (bi._wakeUpAfterNarrowphase) {
              bi.wakeUp();
              bi._wakeUpAfterNarrowphase = false;
            }
          }
          var Nconstraints = constraints.length;
          for (i = 0; i !== Nconstraints; i++) {
            var c = constraints[i];
            c.update();
            for (var j = 0, Neq = c.equations.length; j !== Neq; j++) {
              var eq = c.equations[j];
              solver.addEquation(eq);
            }
          }
          solver.solve(dt, this);
          if (doProfiling) {
            profile.solve = performance.now() - profilingStart;
          }
          solver.removeAllEquations();
          var pow = Math.pow;
          for (i = 0; i !== N; i++) {
            var bi = bodies[i];
            if (bi.type & DYNAMIC) {
              var ld = pow(1 - bi.linearDamping, dt);
              var v = bi.velocity;
              v.mult(ld, v);
              var av = bi.angularVelocity;
              if (av) {
                var ad = pow(1 - bi.angularDamping, dt);
                av.mult(ad, av);
              }
            }
          }
          this.dispatchEvent(World_step_preStepEvent);
          for (i = 0; i !== N; i++) {
            var bi = bodies[i];
            if (bi.preStep) {
              bi.preStep.call(bi);
            }
          }
          if (doProfiling) {
            profilingStart = performance.now();
          }
          var q = World_step_step_q;
          var w = World_step_step_w;
          var wq = World_step_step_wq;
          var stepnumber = this.stepnumber;
          var DYNAMIC_OR_KINEMATIC = Body.DYNAMIC | Body.KINEMATIC;
          var quatNormalize = stepnumber % (this.quatNormalizeSkip + 1) === 0;
          var quatNormalizeFast = this.quatNormalizeFast;
          var half_dt = dt * 0.5;
          var PLANE = Shape.types.PLANE, CONVEX = Shape.types.CONVEXPOLYHEDRON;
          for (i = 0; i !== N; i++) {
            var b = bodies[i], force = b.force, tau = b.torque;
            if (b.type & DYNAMIC_OR_KINEMATIC && b.sleepState !== Body.SLEEPING) {
              var velo = b.velocity, angularVelo = b.angularVelocity, pos = b.position, quat = b.quaternion, invMass = b.invMass, invInertia = b.invInertiaWorld;
              velo.x += force.x * invMass * dt;
              velo.y += force.y * invMass * dt;
              velo.z += force.z * invMass * dt;
              if (b.angularVelocity) {
                invInertia.vmult(tau, invI_tau_dt);
                invI_tau_dt.mult(dt, invI_tau_dt);
                invI_tau_dt.vadd(angularVelo, angularVelo);
              }
              pos.x += velo.x * dt;
              pos.y += velo.y * dt;
              pos.z += velo.z * dt;
              if (b.angularVelocity) {
                w.set(angularVelo.x, angularVelo.y, angularVelo.z, 0);
                w.mult(quat, wq);
                quat.x += half_dt * wq.x;
                quat.y += half_dt * wq.y;
                quat.z += half_dt * wq.z;
                quat.w += half_dt * wq.w;
                if (quatNormalize) {
                  if (quatNormalizeFast) {
                    quat.normalizeFast();
                  } else {
                    quat.normalize();
                  }
                }
              }
              if (b.aabb) {
                b.aabbNeedsUpdate = true;
              }
              if (b.updateInertiaWorld) {
                b.updateInertiaWorld();
              }
            }
          }
          this.clearForces();
          this.broadphase.dirty = true;
          if (doProfiling) {
            profile.integrate = performance.now() - profilingStart;
          }
          this.time += dt;
          this.stepnumber += 1;
          this.dispatchEvent(World_step_postStepEvent);
          for (i = 0; i !== N; i++) {
            var bi = bodies[i];
            var postStep = bi.postStep;
            if (postStep) {
              postStep.call(bi);
            }
          }
          if (this.allowSleep) {
            for (i = 0; i !== N; i++) {
              bodies[i].sleepTick(this.time);
            }
          }
        };
        World.prototype.clearForces = function() {
          var bodies = this.bodies;
          var N = bodies.length;
          for (var i = 0; i !== N; i++) {
            var b = bodies[i], force = b.force, tau = b.torque;
            b.force.set(0, 0, 0);
            b.torque.set(0, 0, 0);
          }
        };
      }, { "../collision/AABB": 3, "../collision/ArrayCollisionMatrix": 4, "../collision/NaiveBroadphase": 7, "../collision/Ray": 9, "../collision/RaycastResult": 10, "../equations/ContactEquation": 19, "../equations/FrictionEquation": 21, "../material/ContactMaterial": 24, "../material/Material": 25, "../math/Quaternion": 28, "../math/Vec3": 30, "../objects/Body": 31, "../shapes/Shape": 43, "../solver/GSSolver": 46, "../utils/EventTarget": 49, "../utils/TupleDictionary": 52, "../utils/Vec3Pool": 54, "./Narrowphase": 55 }] }, {}, [2])(2);
    });
  }
});

// node_modules/mkdirp/index.js
var require_mkdirp = __commonJS({
  "node_modules/mkdirp/index.js"(exports, module2) {
    var path = require("path");
    var fs2 = require("fs");
    var _0777 = parseInt("0777", 8);
    module2.exports = mkdirP.mkdirp = mkdirP.mkdirP = mkdirP;
    function mkdirP(p, opts, f, made) {
      if (typeof opts === "function") {
        f = opts;
        opts = {};
      } else if (!opts || typeof opts !== "object") {
        opts = { mode: opts };
      }
      var mode = opts.mode;
      var xfs = opts.fs || fs2;
      if (mode === void 0) {
        mode = _0777 & ~process.umask();
      }
      if (!made)
        made = null;
      var cb = f || function() {
      };
      p = path.resolve(p);
      xfs.mkdir(p, mode, function(er) {
        if (!er) {
          made = made || p;
          return cb(null, made);
        }
        switch (er.code) {
          case "ENOENT":
            if (path.dirname(p) === p)
              return cb(er);
            mkdirP(path.dirname(p), opts, function(er2, made2) {
              if (er2)
                cb(er2, made2);
              else
                mkdirP(p, opts, cb, made2);
            });
            break;
          default:
            xfs.stat(p, function(er2, stat) {
              if (er2 || !stat.isDirectory())
                cb(er, made);
              else
                cb(null, made);
            });
            break;
        }
      });
    }
    mkdirP.sync = function sync(p, opts, made) {
      if (!opts || typeof opts !== "object") {
        opts = { mode: opts };
      }
      var mode = opts.mode;
      var xfs = opts.fs || fs2;
      if (mode === void 0) {
        mode = _0777 & ~process.umask();
      }
      if (!made)
        made = null;
      p = path.resolve(p);
      try {
        xfs.mkdirSync(p, mode);
        made = made || p;
      } catch (err0) {
        switch (err0.code) {
          case "ENOENT":
            made = sync(path.dirname(p), opts, made);
            sync(p, opts, made);
            break;
          default:
            var stat;
            try {
              stat = xfs.statSync(p);
            } catch (err1) {
              throw err0;
            }
            if (!stat.isDirectory())
              throw err0;
            break;
        }
      }
      return made;
    };
  }
});

// src/package/serverExports.js
var serverExports_exports = {};
__export(serverExports_exports, {
  BaseTypes: () => BaseTypes_default,
  CannonPhysicsEngine: () => CannonPhysicsEngine_default,
  DynamicObject: () => DynamicObject_default,
  GameEngine: () => GameEngine_default,
  GameObject: () => GameObject_default,
  GameWorld: () => GameWorld_default,
  Lib: () => lib_default,
  P2PhysicsEngine: () => P2PhysicsEngine_default,
  PhysicalObject2D: () => PhysicalObject2D_default,
  PhysicalObject3D: () => PhysicalObject3D_default,
  Quaternion: () => Quaternion_default,
  ServerEngine: () => ServerEngine_default,
  SimplePhysicsEngine: () => SimplePhysicsEngine_default,
  ThreeVector: () => ThreeVector_default,
  TwoVector: () => TwoVector_default
});
module.exports = __toCommonJS(serverExports_exports);

// src/GameWorld.js
var GameWorld = class {
  constructor() {
    this.stepCount = 0;
    this.objects = {};
    this.playerCount = 0;
    this.idCount = 0;
  }
  getNewId() {
    let possibleId = this.idCount;
    while (possibleId in this.objects)
      possibleId++;
    this.idCount = possibleId + 1;
    return possibleId;
  }
  queryObjects(query) {
    let queriedObjects = [];
    this.forEachObject((id, object) => {
      let conditions = [];
      conditions.push(!("id" in query) || query.id !== null && object.id === query.id);
      conditions.push(!("playerId" in query) || query.playerId !== null && object.playerId === query.playerId);
      conditions.push(!("instanceType" in query) || query.instanceType !== null && object instanceof query.instanceType);
      if ("components" in query) {
        query.components.forEach((componentClass) => {
          conditions.push(object.hasComponent(componentClass));
        });
      }
      if (conditions.every((value) => value)) {
        queriedObjects.push(object);
        if (query.returnSingle)
          return false;
      }
    });
    if (query.returnSingle) {
      return queriedObjects.length > 0 ? queriedObjects[0] : null;
    }
    return queriedObjects;
  }
  queryObject(query) {
    return this.queryObjects(Object.assign(query, {
      returnSingle: true
    }));
  }
  addObject(object) {
    this.objects[object.id] = object;
  }
  removeObject(id) {
    delete this.objects[id];
  }
  forEachObject(callback) {
    for (let id of Object.keys(this.objects)) {
      let returnValue = callback(id, this.objects[id]);
      if (returnValue === false)
        break;
    }
  }
};
var GameWorld_default = GameWorld;

// src/GameEngine.js
var import_event_emitter = __toESM(require_event_emitter());

// src/game/Timer.js
var Timer = class {
  constructor() {
    this.currentTime = 0;
    this.isActive = false;
    this.idCounter = 0;
    this.events = {};
  }
  play() {
    this.isActive = true;
  }
  tick() {
    let event;
    let eventId;
    if (this.isActive) {
      this.currentTime++;
      for (eventId in this.events) {
        event = this.events[eventId];
        if (event) {
          if (event.type == "repeat") {
            if ((this.currentTime - event.startOffset) % event.time == 0) {
              event.callback.apply(event.thisContext, event.args);
            }
          }
          if (event.type == "single") {
            if ((this.currentTime - event.startOffset) % event.time == 0) {
              event.callback.apply(event.thisContext, event.args);
              event.destroy();
            }
          }
        }
      }
    }
  }
  destroyEvent(eventId) {
    delete this.events[eventId];
  }
  loop(time, callback) {
    let timerEvent = new TimerEvent(this, TimerEvent.TYPES.repeat, time, callback);
    this.events[timerEvent.id] = timerEvent;
    return timerEvent;
  }
  add(time, callback, thisContext, args) {
    let timerEvent = new TimerEvent(this, TimerEvent.TYPES.single, time, callback, thisContext, args);
    this.events[timerEvent.id] = timerEvent;
    return timerEvent;
  }
  destroy(id) {
    delete this.events[id];
  }
};
var TimerEvent = class {
  constructor(timer, type, time, callback, thisContext, args) {
    this.id = ++timer.idCounter;
    this.timer = timer;
    this.type = type;
    this.time = time;
    this.callback = callback;
    this.startOffset = timer.currentTime;
    this.thisContext = thisContext;
    this.args = args;
    this.destroy = function() {
      this.timer.destroy(this.id);
    };
  }
};
TimerEvent.TYPES = {
  repeat: "repeat",
  single: "single"
};

// src/lib/Trace.js
var Trace = class {
  constructor(options) {
    this.options = Object.assign({
      traceLevel: this.TRACE_DEBUG
    }, options);
    this.traceBuffer = [];
    this.step = "initializing";
    this.error = this.trace.bind(this, Trace.TRACE_ERROR);
    this.warn = this.trace.bind(this, Trace.TRACE_WARN);
    this.info = this.trace.bind(this, Trace.TRACE_INFO);
    this.debug = this.trace.bind(this, Trace.TRACE_DEBUG);
    this.trace = this.trace.bind(this, Trace.TRACE_ALL);
  }
  static get TRACE_ALL() {
    return 0;
  }
  static get TRACE_DEBUG() {
    return 1;
  }
  static get TRACE_INFO() {
    return 2;
  }
  static get TRACE_WARN() {
    return 3;
  }
  static get TRACE_ERROR() {
    return 4;
  }
  static get TRACE_NONE() {
    return 1e3;
  }
  trace(level, dataCB) {
    if (typeof dataCB !== "function") {
      throw new Error(`Lance trace was called but instead of passing a function, it received a [${typeof dataCB}]`);
    }
    if (level < this.options.traceLevel)
      return;
    this.traceBuffer.push({ data: dataCB(), level, step: this.step, time: new Date() });
  }
  rotate() {
    let buffer = this.traceBuffer;
    this.traceBuffer = [];
    return buffer;
  }
  get length() {
    return this.traceBuffer.length;
  }
  setStep(s) {
    this.step = s;
  }
};
var Trace_default = Trace;

// src/GameEngine.js
var GameEngine = class {
  constructor(options) {
    const isServerSide = typeof window === "undefined";
    const glob = isServerSide ? global : window;
    glob.LANCE = { gameEngine: this };
    const defaultOpts = { traceLevel: Trace_default.TRACE_NONE };
    if (!isServerSide)
      defaultOpts.clientIDSpace = 1e6;
    this.options = Object.assign(defaultOpts, options);
    this.playerId = NaN;
    let eventEmitter = this.options.eventEmitter;
    if (typeof eventEmitter === "undefined")
      eventEmitter = new import_event_emitter.default();
    this.on = eventEmitter.on;
    this.once = eventEmitter.once;
    this.removeListener = eventEmitter.off;
    this.off = eventEmitter.off;
    this.emit = eventEmitter.emit;
    this.trace = new Trace_default({ traceLevel: this.options.traceLevel });
  }
  findLocalShadow(serverObj) {
    for (let localId of Object.keys(this.world.objects)) {
      if (Number(localId) < this.options.clientIDSpace)
        continue;
      let localObj = this.world.objects[localId];
      if (localObj.hasOwnProperty("inputId") && localObj.inputId === serverObj.inputId)
        return localObj;
    }
    return null;
  }
  initWorld(worldSettings) {
    this.world = new GameWorld_default();
    if (this.options.clientIDSpace) {
      this.world.idCount = this.options.clientIDSpace;
    }
    this.worldSettings = Object.assign({}, worldSettings);
  }
  start() {
    this.trace.info(() => "========== game engine started ==========");
    this.initWorld();
    this.timer = new Timer();
    this.timer.play();
    this.on("postStep", (step, isReenact) => {
      if (!isReenact)
        this.timer.tick();
    });
    this.emit("start", { timestamp: new Date().getTime() });
  }
  step(isReenact, t, dt, physicsOnly) {
    if (physicsOnly) {
      if (dt)
        dt /= 1e3;
      this.physicsEngine.step(dt, objectFilter);
      return;
    }
    if (isReenact === void 0)
      throw new Error("game engine does not forward argument isReenact to super class");
    isReenact = Boolean(isReenact);
    let step = ++this.world.stepCount;
    let clientIDSpace = this.options.clientIDSpace;
    this.emit("preStep", { step, isReenact, dt });
    function objectFilter(o) {
      return !isReenact || o.id < clientIDSpace;
    }
    if (this.physicsEngine && !this.ignorePhysics) {
      if (dt)
        dt /= 1e3;
      this.physicsEngine.step(dt, objectFilter);
    }
    this.world.forEachObject((id, o) => {
      if (typeof o.refreshFromPhysics === "function")
        o.refreshFromPhysics();
      this.trace.trace(() => `object[${id}] after ${isReenact ? "reenact" : "step"} : ${o.toString()}`);
    });
    this.emit("postStep", { step, isReenact });
  }
  addObjectToWorld(object) {
    if (Number(object.id) >= this.options.clientIDSpace) {
      let serverCopyArrived = false;
      this.world.forEachObject((id, o) => {
        if (o.hasOwnProperty("inputId") && o.inputId === object.inputId) {
          serverCopyArrived = true;
          return false;
        }
      });
      if (serverCopyArrived) {
        this.trace.info(() => `========== shadow object NOT added ${object.toString()} ==========`);
        return null;
      }
    }
    this.world.addObject(object);
    if (typeof object.onAddToWorld === "function")
      object.onAddToWorld(this);
    this.emit("objectAdded", object);
    this.trace.info(() => `========== object added ${object.toString()} ==========`);
    return object;
  }
  processInput(inputDesc, playerId, isServer) {
    this.trace.info(() => `game engine processing input[${inputDesc.messageIndex}] <${inputDesc.input}> from playerId ${playerId}`);
  }
  removeObjectFromWorld(objectId) {
    if (typeof objectId === "object")
      objectId = objectId.id;
    let object = this.world.objects[objectId];
    if (!object) {
      throw new Error(`Game attempted to remove a game object which doesn't (or never did) exist, id=${objectId}`);
    }
    this.trace.info(() => `========== destroying object ${object.toString()} ==========`);
    if (typeof object.onRemoveFromWorld === "function")
      object.onRemoveFromWorld(this);
    this.emit("objectDestroyed", object);
    this.world.removeObject(objectId);
  }
  isOwnedByPlayer(object) {
    return object.playerId == this.playerId;
  }
  registerClasses(serializer) {
  }
  getPlayerGameOverResult() {
    return null;
  }
};
var GameEngine_default = GameEngine;

// src/physics/PhysicsEngine.js
var PhysicsEngine = class {
  constructor(options) {
    this.options = options;
    this.gameEngine = options.gameEngine;
    if (!options.gameEngine) {
      console.warn("Physics engine initialized without gameEngine!");
    }
  }
  step(dt, objectFilter) {
  }
};

// src/physics/P2PhysicsEngine.js
var import_p2 = __toESM(require_p2());
var P2PhysicsEngine = class extends PhysicsEngine {
  constructor(options) {
    super(options);
    this.options.dt = this.options.dt || 1 / 60;
    this.world = new import_p2.default.World({ gravity: [0, 0] });
    this.p2 = import_p2.default;
  }
  step(dt, objectFilter) {
    this.world.step(dt || this.options.dt);
  }
  addCircle(radius, mass) {
    let body = new import_p2.default.Body({ mass, position: [0, 0] });
    body.addShape(new import_p2.default.Circle({ radius }));
    this.world.addBody(body);
    return body;
  }
  addBox(width, height, mass) {
    let body = new import_p2.default.Body({ mass, position: [0, 0] });
    body.addShape(new import_p2.default.Box({ width, height }));
    this.world.addBody(body);
    return body;
  }
  removeObject(obj) {
    this.world.removeBody(obj);
  }
};
var P2PhysicsEngine_default = P2PhysicsEngine;

// src/lib/Utils.js
var Utils = class {
  static hashStr(str, bits) {
    let hash = 5381;
    let i = str.length;
    bits = bits ? bits : 8;
    while (i) {
      hash = hash * 33 ^ str.charCodeAt(--i);
    }
    hash = hash >>> 0;
    hash = hash % (Math.pow(2, bits) - 1);
    return hash;
  }
  static arrayBuffersEqual(buf1, buf2) {
    if (buf1.byteLength !== buf2.byteLength)
      return false;
    let dv1 = new Int8Array(buf1);
    let dv2 = new Int8Array(buf2);
    for (let i = 0; i !== buf1.byteLength; i++) {
      if (dv1[i] !== dv2[i])
        return false;
    }
    return true;
  }
  static httpGetPromise(url) {
    return new Promise((resolve, reject) => {
      let req = new XMLHttpRequest();
      req.open("GET", url, true);
      req.onload = () => {
        if (req.status >= 200 && req.status < 400)
          resolve(JSON.parse(req.responseText));
        else
          reject();
      };
      req.onerror = () => {
      };
      req.send();
    });
  }
};

// src/serialize/BaseTypes.js
var BaseTypes = class {
};
BaseTypes.TYPES = {
  FLOAT32: "FLOAT32",
  INT32: "INT32",
  INT16: "INT16",
  INT8: "INT8",
  UINT8: "UINT8",
  STRING: "STRING",
  CLASSINSTANCE: "CLASSINSTANCE",
  LIST: "LIST"
};
var BaseTypes_default = BaseTypes;

// src/serialize/Serializable.js
var Serializable = class {
  serialize(serializer, options) {
    options = Object.assign({
      bufferOffset: 0
    }, options);
    let netScheme;
    let dataBuffer;
    let dataView;
    let classId = 0;
    let bufferOffset = options.bufferOffset;
    let localBufferOffset = 0;
    if (this.classId) {
      classId = this.classId;
    } else {
      classId = Utils.hashStr(this.constructor.name);
    }
    if (this.netScheme) {
      netScheme = this.netScheme;
    } else if (this.constructor.netScheme) {
      netScheme = this.constructor.netScheme;
    } else {
      console.warn("no netScheme defined! This will result in awful performance");
    }
    if (options.dataBuffer == null && options.dry != true) {
      let bufferSize = this.serialize(serializer, { dry: true }).bufferOffset;
      dataBuffer = new ArrayBuffer(bufferSize);
    } else {
      dataBuffer = options.dataBuffer;
    }
    if (options.dry != true) {
      dataView = new DataView(dataBuffer);
      dataView.setUint8(bufferOffset + localBufferOffset, classId);
    }
    localBufferOffset += Uint8Array.BYTES_PER_ELEMENT;
    if (netScheme) {
      for (let property of Object.keys(netScheme).sort()) {
        if (options.dry != true) {
          serializer.writeDataView(dataView, this[property], bufferOffset + localBufferOffset, netScheme[property]);
        }
        if (netScheme[property].type === BaseTypes_default.TYPES.STRING) {
          localBufferOffset += Uint16Array.BYTES_PER_ELEMENT;
          if (this[property] !== null && this[property] !== void 0)
            localBufferOffset += this[property].length * Uint16Array.BYTES_PER_ELEMENT;
        } else if (netScheme[property].type === BaseTypes_default.TYPES.CLASSINSTANCE) {
          let objectInstanceBufferOffset = this[property].serialize(serializer, { dry: true }).bufferOffset;
          localBufferOffset += objectInstanceBufferOffset;
        } else if (netScheme[property].type === BaseTypes_default.TYPES.LIST) {
          localBufferOffset += Uint16Array.BYTES_PER_ELEMENT;
          for (let item of this[property]) {
            if (netScheme[property].itemType === BaseTypes_default.TYPES.CLASSINSTANCE) {
              let listBufferOffset = item.serialize(serializer, { dry: true }).bufferOffset;
              localBufferOffset += listBufferOffset;
            } else if (netScheme[property].itemType === BaseTypes_default.TYPES.STRING) {
              localBufferOffset += Uint16Array.BYTES_PER_ELEMENT * (1 + item.length);
            } else {
              localBufferOffset += serializer.getTypeByteSize(netScheme[property].itemType);
            }
          }
        } else {
          localBufferOffset += serializer.getTypeByteSize(netScheme[property].type);
        }
      }
    } else {
    }
    return { dataBuffer, bufferOffset: localBufferOffset };
  }
  prunedStringsClone(serializer, prevObject) {
    if (!prevObject)
      return this;
    prevObject = serializer.deserialize(prevObject).obj;
    let netScheme = this.constructor.netScheme;
    let isString = (p) => netScheme[p].type === BaseTypes_default.TYPES.STRING;
    let hasChanged = (p) => prevObject[p] !== this[p];
    let changedStrings = Object.keys(netScheme).filter(isString).filter(hasChanged);
    if (changedStrings.length == 0)
      return this;
    let prunedCopy = new this.constructor(null, { id: null });
    for (let p of Object.keys(netScheme))
      prunedCopy[p] = changedStrings.indexOf(p) < 0 ? this[p] : null;
    return prunedCopy;
  }
  syncTo(other) {
    let netScheme = this.constructor.netScheme;
    for (let p of Object.keys(netScheme)) {
      if (netScheme[p].type === BaseTypes_default.TYPES.LIST || netScheme[p].type === BaseTypes_default.TYPES.CLASSINSTANCE)
        continue;
      if (netScheme[p].type === BaseTypes_default.TYPES.STRING) {
        if (typeof other[p] === "string")
          this[p] = other[p];
        continue;
      }
      this[p] = other[p];
    }
  }
};
var Serializable_default = Serializable;

// src/serialize/TwoVector.js
var TwoVector = class extends Serializable_default {
  static get netScheme() {
    return {
      x: { type: BaseTypes_default.TYPES.FLOAT32 },
      y: { type: BaseTypes_default.TYPES.FLOAT32 }
    };
  }
  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
    return this;
  }
  toString() {
    function round3(x) {
      return Math.round(x * 1e3) / 1e3;
    }
    return `[${round3(this.x)}, ${round3(this.y)}]`;
  }
  set(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }
  multiply(other) {
    this.x *= other.x;
    this.y *= other.y;
    return this;
  }
  multiplyScalar(s) {
    this.x *= s;
    this.y *= s;
    return this;
  }
  add(other) {
    this.x += other.x;
    this.y += other.y;
    return this;
  }
  subtract(other) {
    this.x -= other.x;
    this.y -= other.y;
    return this;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  normalize() {
    this.multiplyScalar(1 / this.length());
    return this;
  }
  copy(sourceObj) {
    this.x = sourceObj.x;
    this.y = sourceObj.y;
    return this;
  }
  clone() {
    return new TwoVector(this.x, this.y);
  }
  lerp(target, p) {
    this.x += (target.x - this.x) * p;
    this.y += (target.y - this.y) * p;
    return this;
  }
  getBendingDelta(target, options) {
    let increment = target.clone();
    increment.subtract(this);
    increment.multiplyScalar(options.percent);
    if (typeof options.max === "number" && increment.length() > options.max || typeof options.min === "number" && increment.length() < options.min) {
      return new TwoVector(0, 0);
    }
    increment.multiplyScalar(1 / options.increments);
    return increment;
  }
};
var TwoVector_default = TwoVector;

// src/physics/SimplePhysics/HSHG.js
function update_RECOMPUTE() {
  var i, obj, grid, meta, objAABB, newObjHash;
  for (i = 0; i < this._globalObjects.length; i++) {
    obj = this._globalObjects[i];
    meta = obj.HSHG;
    grid = meta.grid;
    objAABB = obj.getAABB();
    newObjHash = grid.toHash(objAABB.min[0], objAABB.min[1]);
    if (newObjHash !== meta.hash) {
      grid.removeObject(obj);
      grid.addObject(obj, newObjHash);
    }
  }
}
function update_REMOVEALL() {
}
function testAABBOverlap(objA, objB) {
  var a = objA.getAABB(), b = objB.getAABB();
  if (a.min[0] > b.max[0] || a.min[1] > b.max[1] || a.max[0] < b.min[0] || a.max[1] < b.min[1]) {
    return false;
  }
  return true;
}
function getLongestAABBEdge(min, max) {
  return Math.max(Math.abs(max[0] - min[0]), Math.abs(max[1] - min[1]));
}
function HSHG() {
  this.MAX_OBJECT_CELL_DENSITY = 1 / 8;
  this.INITIAL_GRID_LENGTH = 256;
  this.HIERARCHY_FACTOR = 2;
  this.HIERARCHY_FACTOR_SQRT = Math.SQRT2;
  this.UPDATE_METHOD = update_RECOMPUTE;
  this._grids = [];
  this._globalObjects = [];
}
HSHG.prototype.addObject = function(obj) {
  var x, i, cellSize, objAABB = obj.getAABB(), objSize = getLongestAABBEdge(objAABB.min, objAABB.max), oneGrid, newGrid;
  obj.HSHG = {
    globalObjectsIndex: this._globalObjects.length
  };
  this._globalObjects.push(obj);
  if (this._grids.length == 0) {
    cellSize = objSize * this.HIERARCHY_FACTOR_SQRT;
    newGrid = new Grid(cellSize, this.INITIAL_GRID_LENGTH, this);
    newGrid.initCells();
    newGrid.addObject(obj);
    this._grids.push(newGrid);
  } else {
    x = 0;
    for (i = 0; i < this._grids.length; i++) {
      oneGrid = this._grids[i];
      x = oneGrid.cellSize;
      if (objSize < x) {
        x /= this.HIERARCHY_FACTOR;
        if (objSize < x) {
          while (objSize < x) {
            x /= this.HIERARCHY_FACTOR;
          }
          newGrid = new Grid(x * this.HIERARCHY_FACTOR, this.INITIAL_GRID_LENGTH, this);
          newGrid.initCells();
          newGrid.addObject(obj);
          this._grids.splice(i, 0, newGrid);
        } else {
          oneGrid.addObject(obj);
        }
        return;
      }
    }
    while (objSize >= x) {
      x *= this.HIERARCHY_FACTOR;
    }
    newGrid = new Grid(x, this.INITIAL_GRID_LENGTH, this);
    newGrid.initCells();
    newGrid.addObject(obj);
    this._grids.push(newGrid);
  }
};
HSHG.prototype.removeObject = function(obj) {
  var meta = obj.HSHG, globalObjectsIndex, replacementObj;
  if (meta === void 0) {
    throw Error(obj + " was not in the HSHG.");
    return;
  }
  globalObjectsIndex = meta.globalObjectsIndex;
  if (globalObjectsIndex === this._globalObjects.length - 1) {
    this._globalObjects.pop();
  } else {
    replacementObj = this._globalObjects.pop();
    replacementObj.HSHG.globalObjectsIndex = globalObjectsIndex;
    this._globalObjects[globalObjectsIndex] = replacementObj;
  }
  meta.grid.removeObject(obj);
  delete obj.HSHG;
};
HSHG.prototype.update = function() {
  this.UPDATE_METHOD.call(this);
};
HSHG.prototype.queryForCollisionPairs = function(broadOverlapTestCallback) {
  var i, j, k, l, c, grid, cell, objA, objB, offset, adjacentCell, biggerGrid, objAAABB, objAHashInBiggerGrid, possibleCollisions = [];
  let broadOverlapTest = broadOverlapTestCallback || testAABBOverlap;
  for (i = 0; i < this._grids.length; i++) {
    grid = this._grids[i];
    for (j = 0; j < grid.occupiedCells.length; j++) {
      cell = grid.occupiedCells[j];
      for (k = 0; k < cell.objectContainer.length; k++) {
        objA = cell.objectContainer[k];
        for (l = k + 1; l < cell.objectContainer.length; l++) {
          objB = cell.objectContainer[l];
          if (broadOverlapTest(objA, objB) === true) {
            possibleCollisions.push([objA, objB]);
          }
        }
      }
      for (c = 0; c < 4; c++) {
        offset = cell.neighborOffsetArray[c];
        adjacentCell = grid.allCells[cell.allCellsIndex + offset];
        for (k = 0; k < cell.objectContainer.length; k++) {
          objA = cell.objectContainer[k];
          for (l = 0; l < adjacentCell.objectContainer.length; l++) {
            objB = adjacentCell.objectContainer[l];
            if (broadOverlapTest(objA, objB) === true) {
              possibleCollisions.push([objA, objB]);
            }
          }
        }
      }
    }
    for (j = 0; j < grid.allObjects.length; j++) {
      objA = grid.allObjects[j];
      objAAABB = objA.getAABB();
      for (k = i + 1; k < this._grids.length; k++) {
        biggerGrid = this._grids[k];
        objAHashInBiggerGrid = biggerGrid.toHash(objAAABB.min[0], objAAABB.min[1]);
        cell = biggerGrid.allCells[objAHashInBiggerGrid];
        for (c = 0; c < cell.neighborOffsetArray.length; c++) {
          offset = cell.neighborOffsetArray[c];
          adjacentCell = biggerGrid.allCells[cell.allCellsIndex + offset];
          for (l = 0; l < adjacentCell.objectContainer.length; l++) {
            objB = adjacentCell.objectContainer[l];
            if (broadOverlapTest(objA, objB) === true) {
              possibleCollisions.push([objA, objB]);
            }
          }
        }
      }
    }
  }
  return possibleCollisions;
};
HSHG.update_RECOMPUTE = update_RECOMPUTE;
HSHG.update_REMOVEALL = update_REMOVEALL;
function Grid(cellSize, cellCount, parentHierarchy) {
  this.cellSize = cellSize;
  this.inverseCellSize = 1 / cellSize;
  this.rowColumnCount = ~~Math.sqrt(cellCount);
  this.xyHashMask = this.rowColumnCount - 1;
  this.occupiedCells = [];
  this.allCells = Array(this.rowColumnCount * this.rowColumnCount);
  this.allObjects = [];
  this.sharedInnerOffsets = [];
  this._parentHierarchy = parentHierarchy || null;
}
Grid.prototype.initCells = function() {
  var i, gridLength = this.allCells.length, x, y, wh = this.rowColumnCount, isOnRightEdge, isOnLeftEdge, isOnTopEdge, isOnBottomEdge, innerOffsets = [
    wh - 1,
    wh,
    wh + 1,
    -1,
    0,
    1,
    -1 + -wh,
    -wh,
    -wh + 1
  ], leftOffset, rightOffset, topOffset, bottomOffset, uniqueOffsets = [], cell;
  this.sharedInnerOffsets = innerOffsets;
  for (i = 0; i < gridLength; i++) {
    cell = new Cell();
    y = ~~(i / this.rowColumnCount);
    x = ~~(i - y * this.rowColumnCount);
    isOnRightEdge = false;
    isOnLeftEdge = false;
    isOnTopEdge = false;
    isOnBottomEdge = false;
    if ((x + 1) % this.rowColumnCount == 0) {
      isOnRightEdge = true;
    } else if (x % this.rowColumnCount == 0) {
      isOnLeftEdge = true;
    }
    if ((y + 1) % this.rowColumnCount == 0) {
      isOnTopEdge = true;
    } else if (y % this.rowColumnCount == 0) {
      isOnBottomEdge = true;
    }
    if (isOnRightEdge || isOnLeftEdge || isOnTopEdge || isOnBottomEdge) {
      rightOffset = isOnRightEdge === true ? -wh + 1 : 1;
      leftOffset = isOnLeftEdge === true ? wh - 1 : -1;
      topOffset = isOnTopEdge === true ? -gridLength + wh : wh;
      bottomOffset = isOnBottomEdge === true ? gridLength - wh : -wh;
      uniqueOffsets = [
        leftOffset + topOffset,
        topOffset,
        rightOffset + topOffset,
        leftOffset,
        0,
        rightOffset,
        leftOffset + bottomOffset,
        bottomOffset,
        rightOffset + bottomOffset
      ];
      cell.neighborOffsetArray = uniqueOffsets;
    } else {
      cell.neighborOffsetArray = this.sharedInnerOffsets;
    }
    cell.allCellsIndex = i;
    this.allCells[i] = cell;
  }
};
Grid.prototype.toHash = function(x, y, z) {
  var i, xHash, yHash, zHash;
  if (x < 0) {
    i = -x * this.inverseCellSize;
    xHash = this.rowColumnCount - 1 - (~~i & this.xyHashMask);
  } else {
    i = x * this.inverseCellSize;
    xHash = ~~i & this.xyHashMask;
  }
  if (y < 0) {
    i = -y * this.inverseCellSize;
    yHash = this.rowColumnCount - 1 - (~~i & this.xyHashMask);
  } else {
    i = y * this.inverseCellSize;
    yHash = ~~i & this.xyHashMask;
  }
  return xHash + yHash * this.rowColumnCount;
};
Grid.prototype.addObject = function(obj, hash) {
  var objAABB, objHash, targetCell;
  if (hash !== void 0) {
    objHash = hash;
  } else {
    objAABB = obj.getAABB();
    objHash = this.toHash(objAABB.min[0], objAABB.min[1]);
  }
  targetCell = this.allCells[objHash];
  if (targetCell.objectContainer.length === 0) {
    targetCell.occupiedCellsIndex = this.occupiedCells.length;
    this.occupiedCells.push(targetCell);
  }
  obj.HSHG.objectContainerIndex = targetCell.objectContainer.length;
  obj.HSHG.hash = objHash;
  obj.HSHG.grid = this;
  obj.HSHG.allGridObjectsIndex = this.allObjects.length;
  targetCell.objectContainer.push(obj);
  this.allObjects.push(obj);
  if (this.allObjects.length / this.allCells.length > this._parentHierarchy.MAX_OBJECT_CELL_DENSITY) {
    this.expandGrid();
  }
};
Grid.prototype.removeObject = function(obj) {
  var meta = obj.HSHG, hash, containerIndex, allGridObjectsIndex, cell, replacementCell, replacementObj;
  hash = meta.hash;
  containerIndex = meta.objectContainerIndex;
  allGridObjectsIndex = meta.allGridObjectsIndex;
  cell = this.allCells[hash];
  if (cell.objectContainer.length === 1) {
    cell.objectContainer.length = 0;
    if (cell.occupiedCellsIndex === this.occupiedCells.length - 1) {
      this.occupiedCells.pop();
    } else {
      replacementCell = this.occupiedCells.pop();
      replacementCell.occupiedCellsIndex = cell.occupiedCellsIndex;
      this.occupiedCells[cell.occupiedCellsIndex] = replacementCell;
    }
    cell.occupiedCellsIndex = null;
  } else {
    if (containerIndex === cell.objectContainer.length - 1) {
      cell.objectContainer.pop();
    } else {
      replacementObj = cell.objectContainer.pop();
      replacementObj.HSHG.objectContainerIndex = containerIndex;
      cell.objectContainer[containerIndex] = replacementObj;
    }
  }
  if (allGridObjectsIndex === this.allObjects.length - 1) {
    this.allObjects.pop();
  } else {
    replacementObj = this.allObjects.pop();
    replacementObj.HSHG.allGridObjectsIndex = allGridObjectsIndex;
    this.allObjects[allGridObjectsIndex] = replacementObj;
  }
};
Grid.prototype.expandGrid = function() {
  var i, j, currentCellCount = this.allCells.length, currentRowColumnCount = this.rowColumnCount, currentXYHashMask = this.xyHashMask, newCellCount = currentCellCount * 4, newRowColumnCount = ~~Math.sqrt(newCellCount), newXYHashMask = newRowColumnCount - 1, allObjects = this.allObjects.slice(0), aCell, push = Array.prototype.push;
  for (i = 0; i < allObjects.length; i++) {
    this.removeObject(allObjects[i]);
  }
  this.rowColumnCount = newRowColumnCount;
  this.allCells = Array(this.rowColumnCount * this.rowColumnCount);
  this.xyHashMask = newXYHashMask;
  this.initCells();
  for (i = 0; i < allObjects.length; i++) {
    this.addObject(allObjects[i]);
  }
};
function Cell() {
  this.objectContainer = [];
  this.neighborOffsetArray;
  this.occupiedCellsIndex = null;
  this.allCellsIndex = null;
}
HSHG._private = {
  Grid,
  Cell,
  testAABBOverlap,
  getLongestAABBEdge
};
var HSHG_default = HSHG;

// src/physics/SimplePhysics/HSHGCollisionDetection.js
var HSHGCollisionDetection = class {
  constructor(options) {
    this.options = Object.assign({ COLLISION_DISTANCE: 28 }, options);
  }
  init(options) {
    this.gameEngine = options.gameEngine;
    this.grid = new HSHG_default();
    this.previousCollisionPairs = {};
    this.stepCollidingPairs = {};
    this.gameEngine.on("objectAdded", (obj) => {
      this.grid.addObject(obj);
    });
    this.gameEngine.on("objectDestroyed", (obj) => {
      this.grid.removeObject(obj);
    });
  }
  detect() {
    this.grid.update();
    this.stepCollidingPairs = this.grid.queryForCollisionPairs().reduce((accumulator, currentValue, i) => {
      let pairId = getArrayPairId(currentValue);
      accumulator[pairId] = { o1: currentValue[0], o2: currentValue[1] };
      return accumulator;
    }, {});
    for (let pairId of Object.keys(this.previousCollisionPairs)) {
      let pairObj = this.previousCollisionPairs[pairId];
      if (pairId in this.stepCollidingPairs === false) {
        this.gameEngine.emit("collisionStop", pairObj);
      }
    }
    for (let pairId of Object.keys(this.stepCollidingPairs)) {
      let pairObj = this.stepCollidingPairs[pairId];
      if (pairId in this.previousCollisionPairs === false) {
        this.gameEngine.emit("collisionStart", pairObj);
      }
    }
    this.previousCollisionPairs = this.stepCollidingPairs;
  }
  areObjectsColliding(o1, o2) {
    return getArrayPairId([o1, o2]) in this.stepCollidingPairs;
  }
};
function getArrayPairId(arrayPair) {
  let sortedArrayPair = arrayPair.slice(0).sort();
  return sortedArrayPair[0].id + "-" + sortedArrayPair[1].id;
}
var HSHGCollisionDetection_default = HSHGCollisionDetection;

// src/physics/SimplePhysics/BruteForceCollisionDetection.js
var differenceVector = new TwoVector_default();
var BruteForceCollisionDetection = class {
  constructor(options) {
    this.options = Object.assign({
      autoResolve: true
    }, options);
    this.collisionPairs = {};
  }
  init(options) {
    this.gameEngine = options.gameEngine;
  }
  findCollision(o1, o2) {
    if (o1.isStatic && o2.isStatic)
      return false;
    if (typeof o1.collidesWith === "function") {
      if (!o1.collidesWith(o2))
        return false;
    }
    if (this.options.collisionDistance) {
      differenceVector.copy(o1.position).subtract(o2.position);
      return differenceVector.length() < this.options.collisionDistance;
    }
    let o1Box = getBox(o1);
    let o2Box = getBox(o2);
    if (o1Box.xMin > o2Box.xMax || o1Box.yMin > o2Box.yMax || o2Box.xMin > o1Box.xMax || o2Box.yMin > o1Box.yMax)
      return false;
    if (!this.options.autoResolve)
      return true;
    let shiftY1 = o2Box.yMax - o1Box.yMin;
    let shiftY2 = o1Box.yMax - o2Box.yMin;
    let shiftX1 = o2Box.xMax - o1Box.xMin;
    let shiftX2 = o1Box.xMax - o2Box.xMin;
    let smallestYShift = Math.min(Math.abs(shiftY1), Math.abs(shiftY2));
    let smallestXShift = Math.min(Math.abs(shiftX1), Math.abs(shiftX2));
    if (smallestYShift < smallestXShift) {
      if (o1Box.yMin > o2Box.yMin && o1Box.yMin < o2Box.yMax) {
        if (o2.isStatic)
          o1.position.y += shiftY1;
        else if (o1.isStatic)
          o2.position.y -= shiftY1;
        else {
          o1.position.y += shiftY1 / 2;
          o2.position.y -= shiftY1 / 2;
        }
      } else if (o1Box.yMax > o2Box.yMin && o1Box.yMax < o2Box.yMax) {
        if (o2.isStatic)
          o1.position.y -= shiftY2;
        else if (o1.isStatic)
          o2.position.y += shiftY2;
        else {
          o1.position.y -= shiftY2 / 2;
          o2.position.y += shiftY2 / 2;
        }
      }
      o1.velocity.y = 0;
      o2.velocity.y = 0;
    } else {
      if (o1Box.xMin > o2Box.xMin && o1Box.xMin < o2Box.xMax) {
        if (o2.isStatic)
          o1.position.x += shiftX1;
        else if (o1.isStatic)
          o2.position.x -= shiftX1;
        else {
          o1.position.x += shiftX1 / 2;
          o2.position.x -= shiftX1 / 2;
        }
      } else if (o1Box.xMax > o2Box.xMin && o1Box.xMax < o2Box.xMax) {
        if (o2.isStatic)
          o1.position.x -= shiftX2;
        else if (o1.isStatic)
          o2.position.x += shiftX2;
        else {
          o1.position.x -= shiftX2 / 2;
          o2.position.x += shiftX2 / 2;
        }
      }
      o1.velocity.x = 0;
      o2.velocity.x = 0;
    }
    return true;
  }
  checkPair(id1, id2) {
    let objects = this.gameEngine.world.objects;
    let o1 = objects[id1];
    let o2 = objects[id2];
    if (!o1 || !o2)
      return;
    let pairId = [id1, id2].join(",");
    if (this.findCollision(o1, o2)) {
      if (!(pairId in this.collisionPairs)) {
        this.collisionPairs[pairId] = true;
        this.gameEngine.emit("collisionStart", { o1, o2 });
      }
    } else if (pairId in this.collisionPairs) {
      this.gameEngine.emit("collisionStop", { o1, o2 });
      delete this.collisionPairs[pairId];
    }
  }
  detect() {
    let objects = this.gameEngine.world.objects;
    let keys = Object.keys(objects);
    for (let pairId in this.collisionPairs)
      if (this.collisionPairs.hasOwnProperty(pairId)) {
        if (keys.indexOf(pairId.split(",")[0]) === -1 || keys.indexOf(pairId.split(",")[1]) === -1)
          delete this.collisionPairs[pairId];
      }
    for (let k1 of keys)
      for (let k2 of keys)
        if (k2 > k1)
          this.checkPair(k1, k2);
  }
};
function getBox(o) {
  return {
    xMin: o.position.x,
    xMax: o.position.x + o.width,
    yMin: o.position.y,
    yMax: o.position.y + o.height
  };
}

// src/physics/SimplePhysicsEngine.js
var dv = new TwoVector_default();
var dx = new TwoVector_default();
var SimplePhysicsEngine = class extends PhysicsEngine {
  constructor(options) {
    super(options);
    if (options.collisions && options.collisions.type === "HSHG") {
      this.collisionDetection = new HSHGCollisionDetection_default(options.collisions);
    } else {
      this.collisionDetection = new BruteForceCollisionDetection(options.collisions);
    }
    this.gravity = new TwoVector_default(0, 0);
    if (options.gravity)
      this.gravity.copy(options.gravity);
    let collisionOptions = Object.assign({ gameEngine: this.gameEngine }, options.collisionOptions);
    this.collisionDetection.init(collisionOptions);
  }
  objectStep(o, dt) {
    if (dt === 0)
      return;
    if (dt)
      dt /= 1 / 60;
    else
      dt = 1;
    let worldSettings = this.gameEngine.worldSettings;
    if (o.isRotatingRight) {
      o.angle += o.rotationSpeed;
    }
    if (o.isRotatingLeft) {
      o.angle -= o.rotationSpeed;
    }
    if (o.angle >= 360) {
      o.angle -= 360;
    }
    if (o.angle < 0) {
      o.angle += 360;
    }
    if (o.isAccelerating) {
      let rad = o.angle * (Math.PI / 180);
      dv.set(Math.cos(rad), Math.sin(rad)).multiplyScalar(o.acceleration).multiplyScalar(dt);
      o.velocity.add(dv);
    }
    if (!o.isStatic)
      o.velocity.add(this.gravity);
    let velMagnitude = o.velocity.length();
    if (o.maxSpeed !== null && velMagnitude > o.maxSpeed) {
      o.velocity.multiplyScalar(o.maxSpeed / velMagnitude);
    }
    o.isAccelerating = false;
    o.isRotatingLeft = false;
    o.isRotatingRight = false;
    dx.copy(o.velocity).multiplyScalar(dt);
    o.position.add(dx);
    o.velocity.multiply(o.friction);
    if (worldSettings.worldWrap) {
      if (o.position.x >= worldSettings.width) {
        o.position.x -= worldSettings.width;
      }
      if (o.position.y >= worldSettings.height) {
        o.position.y -= worldSettings.height;
      }
      if (o.position.x < 0) {
        o.position.x += worldSettings.width;
      }
      if (o.position.y < 0) {
        o.position.y += worldSettings.height;
      }
    }
  }
  step(dt, objectFilter) {
    let objects = this.gameEngine.world.objects;
    for (let objId of Object.keys(objects)) {
      let ob = objects[objId];
      if (!objectFilter(ob))
        continue;
      this.objectStep(ob, dt);
    }
    this.collisionDetection.detect(this.gameEngine);
  }
};
var SimplePhysicsEngine_default = SimplePhysicsEngine;

// src/physics/CannonPhysicsEngine.js
var CANNON = require_cannon();
var CannonPhysicsEngine = class extends PhysicsEngine {
  constructor(options) {
    super(options);
    this.options.dt = this.options.dt || 1 / 60;
    let world = this.world = new CANNON.World();
    world.quatNormalizeSkip = 0;
    world.quatNormalizeFast = false;
    world.gravity.set(0, -10, 0);
    world.broadphase = new CANNON.NaiveBroadphase();
    this.CANNON = CANNON;
  }
  step(dt, objectFilter) {
    this.world.step(dt || this.options.dt);
  }
  addSphere(radius, mass) {
    let shape = new CANNON.Sphere(radius);
    let body = new CANNON.Body({ mass, shape });
    body.position.set(0, 0, 0);
    this.world.addBody(body);
    return body;
  }
  addBox(x, y, z, mass, friction) {
    let shape = new CANNON.Box(new CANNON.Vec3(x, y, z));
    let options = { mass, shape };
    if (friction !== void 0)
      options.material = new CANNON.Material({ friction });
    let body = new CANNON.Body(options);
    body.position.set(0, 0, 0);
    this.world.addBody(body);
    return body;
  }
  addCylinder(radiusTop, radiusBottom, height, numSegments, mass) {
    let shape = new CANNON.Cylinder(radiusTop, radiusBottom, height, numSegments);
    let body = new CANNON.Body({ mass, shape });
    this.world.addBody(body);
    return body;
  }
  removeObject(obj) {
    this.world.removeBody(obj);
  }
};
var CannonPhysicsEngine_default = CannonPhysicsEngine;

// src/serialize/ThreeVector.js
var ThreeVector = class extends Serializable_default {
  static get netScheme() {
    return {
      x: { type: BaseTypes_default.TYPES.FLOAT32 },
      y: { type: BaseTypes_default.TYPES.FLOAT32 },
      z: { type: BaseTypes_default.TYPES.FLOAT32 }
    };
  }
  constructor(x, y, z) {
    super();
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
  }
  toString() {
    function round3(x) {
      return Math.round(x * 1e3) / 1e3;
    }
    return `[${round3(this.x)}, ${round3(this.y)}, ${round3(this.z)}]`;
  }
  multiplyScalar(s) {
    this.x *= s;
    this.y *= s;
    this.z *= s;
    return this;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  add(other) {
    this.x += other.x;
    this.y += other.y;
    this.z += other.z;
    return this;
  }
  subtract(other) {
    this.x -= other.x;
    this.y -= other.y;
    this.z -= other.z;
    return this;
  }
  normalize() {
    this.multiplyScalar(1 / this.length());
    return this;
  }
  copy(sourceObj) {
    this.x = sourceObj.x;
    this.y = sourceObj.y;
    this.z = sourceObj.z;
    return this;
  }
  set(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
  }
  clone() {
    return new ThreeVector(this.x, this.y, this.z);
  }
  lerp(target, p) {
    this.x += (target.x - this.x) * p;
    this.y += (target.y - this.y) * p;
    this.z += (target.z - this.z) * p;
    return this;
  }
  getBendingDelta(target, options) {
    let increment = target.clone();
    increment.subtract(this);
    increment.multiplyScalar(options.percent);
    if (options.max && increment.length() > options.max || options.max && increment.length() < options.min) {
      return new ThreeVector(0, 0, 0);
    }
    increment.multiplyScalar(1 / options.increments);
    return increment;
  }
};
var ThreeVector_default = ThreeVector;

// src/serialize/Quaternion.js
var SHOW_AS_AXIS_ANGLE = true;
var MAX_DEL_THETA = 0.2;
var Quaternion = class extends Serializable_default {
  static get netScheme() {
    return {
      w: { type: BaseTypes_default.TYPES.FLOAT32 },
      x: { type: BaseTypes_default.TYPES.FLOAT32 },
      y: { type: BaseTypes_default.TYPES.FLOAT32 },
      z: { type: BaseTypes_default.TYPES.FLOAT32 }
    };
  }
  constructor(w, x, y, z) {
    super();
    this.w = w;
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
  }
  toString() {
    function round3(x) {
      return Math.round(x * 1e3) / 1e3;
    }
    if (SHOW_AS_AXIS_ANGLE) {
      let axisAngle = this.toAxisAngle();
      return `[${round3(axisAngle.angle)},${axisAngle.axis.toString()}]`;
    }
    return `[${round3(this.w)}, ${round3(this.x)}, ${round3(this.y)}, ${round3(this.z)}]`;
  }
  copy(sourceObj) {
    this.set(sourceObj.w, sourceObj.x, sourceObj.y, sourceObj.z);
    return this;
  }
  set(w, x, y, z) {
    this.w = w;
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
  }
  toAxisAngle() {
    let axis = new ThreeVector_default(1, 0, 0);
    this.normalize();
    let angle = 2 * Math.acos(this.w);
    let s = Math.sqrt(1 - this.w * this.w);
    if (s > 1e-3) {
      let divS = 1 / s;
      axis.x = this.x * divS;
      axis.y = this.y * divS;
      axis.z = this.z * divS;
    }
    if (s > Math.PI) {
      s -= 2 * Math.PI;
    }
    return { axis, angle };
  }
  normalize() {
    let l = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    if (l === 0) {
      this.x = 0;
      this.y = 0;
      this.z = 0;
      this.w = 0;
    } else {
      l = 1 / l;
      this.x *= l;
      this.y *= l;
      this.z *= l;
      this.w *= l;
    }
    return this;
  }
  setFromAxisAngle(axis, angle) {
    if (angle < 0)
      angle += Math.PI * 2;
    let halfAngle = angle * 0.5;
    let s = Math.sin(halfAngle);
    this.x = axis.x * s;
    this.y = axis.y * s;
    this.z = axis.z * s;
    this.w = Math.cos(halfAngle);
    return this;
  }
  conjugate() {
    this.x *= -1;
    this.y *= -1;
    this.z *= -1;
    return this;
  }
  multiply(other) {
    let aw = this.w, ax = this.x, ay = this.y, az = this.z;
    let bw = other.w, bx = other.x, by = other.y, bz = other.z;
    this.x = ax * bw + aw * bx + ay * bz - az * by;
    this.y = ay * bw + aw * by + az * bx - ax * bz;
    this.z = az * bw + aw * bz + ax * by - ay * bx;
    this.w = aw * bw - ax * bx - ay * by - az * bz;
    return this;
  }
  slerp(target, bending) {
    if (bending <= 0)
      return this;
    if (bending >= 1)
      return this.copy(target);
    let aw = this.w, ax = this.x, ay = this.y, az = this.z;
    let bw = target.w, bx = target.x, by = target.y, bz = target.z;
    let cosHalfTheta = aw * bw + ax * bx + ay * by + az * bz;
    if (cosHalfTheta < 0) {
      this.set(-bw, -bx, -by, -bz);
      cosHalfTheta = -cosHalfTheta;
    } else {
      this.copy(target);
    }
    if (cosHalfTheta >= 1) {
      this.set(aw, ax, ay, az);
      return this;
    }
    let sqrSinHalfTheta = 1 - cosHalfTheta * cosHalfTheta;
    if (sqrSinHalfTheta < Number.EPSILON) {
      let s = 1 - bending;
      this.set(s * aw + bending * this.w, s * ax + bending * this.x, s * ay + bending * this.y, s * az + bending * this.z);
      return this.normalize();
    }
    let sinHalfTheta = Math.sqrt(sqrSinHalfTheta);
    let halfTheta = Math.atan2(sinHalfTheta, cosHalfTheta);
    let delTheta = bending * halfTheta;
    if (Math.abs(delTheta) > MAX_DEL_THETA)
      delTheta = MAX_DEL_THETA * Math.sign(delTheta);
    let ratioA = Math.sin(halfTheta - delTheta) / sinHalfTheta;
    let ratioB = Math.sin(delTheta) / sinHalfTheta;
    this.set(aw * ratioA + this.w * ratioB, ax * ratioA + this.x * ratioB, ay * ratioA + this.y * ratioB, az * ratioA + this.z * ratioB);
    return this;
  }
};
var Quaternion_default = Quaternion;

// src/serialize/GameObject.js
var GameObject = class extends Serializable_default {
  static get netScheme() {
    return {
      id: { type: BaseTypes_default.TYPES.INT32 },
      playerId: { type: BaseTypes_default.TYPES.INT16 }
    };
  }
  constructor(gameEngine, options, props) {
    super();
    this.gameEngine = gameEngine;
    this.id = null;
    if (options && "id" in options)
      this.id = options.id;
    else if (this.gameEngine)
      this.id = this.gameEngine.world.getNewId();
    this.playerId = props && props.playerId ? props.playerId : 0;
    this.components = {};
  }
  onAddToWorld(gameEngine) {
  }
  onRemoveFromWorld(gameEngine) {
  }
  toString() {
    return `game-object[${this.id}]`;
  }
  bendingToString() {
    return "no bending";
  }
  saveState(other) {
    this.savedCopy = new this.constructor(this.gameEngine, { id: null });
    this.savedCopy.syncTo(other ? other : this);
  }
  get bending() {
    return {
      position: { percent: 1, min: 0 },
      velocity: { percent: 0, min: 0 },
      angularVelocity: { percent: 0 },
      angleLocal: { percent: 1 }
    };
  }
  bendToCurrentState(bending, worldSettings, isLocal, bendingIncrements) {
    if (this.savedCopy) {
      this.bendToCurrent(this.savedCopy, bending, worldSettings, isLocal, bendingIncrements);
    }
    this.savedCopy = null;
  }
  bendToCurrent(original, bending, worldSettings, isLocal, bendingIncrements) {
  }
  syncTo(other) {
    super.syncTo(other);
    this.playerId = other.playerId;
  }
  refreshToPhysics() {
  }
  refreshFromPhysics() {
  }
  applyIncrementalBending() {
  }
  destroy() {
  }
  addComponent(componentInstance) {
    componentInstance.parentObject = this;
    this.components[componentInstance.constructor.name] = componentInstance;
    if (this.gameEngine) {
      this.gameEngine.emit("componentAdded", this, componentInstance);
    }
  }
  removeComponent(componentName) {
    delete this.components[componentName];
    if (this.gameEngine) {
      this.gameEngine.emit("componentRemoved", this, componentName);
    }
  }
  hasComponent(componentClass) {
    return componentClass.name in this.components;
  }
  getComponent(componentClass) {
    return this.components[componentClass.name];
  }
};
var GameObject_default = GameObject;

// src/lib/MathUtils.js
var MathUtils = class {
  static interpolate(start, end, percent) {
    return (end - start) * percent + start;
  }
  static interpolateDelta(start, end, percent) {
    return (end - start) * percent;
  }
  static interpolateDeltaWithWrapping(start, end, percent, wrapMin, wrapMax) {
    let wrapTest = wrapMax - wrapMin;
    if (start - end > wrapTest / 2)
      end += wrapTest;
    else if (end - start > wrapTest / 2)
      start += wrapTest;
    if (Math.abs(start - end) > wrapTest / 3) {
      console.log("wrap interpolation is close to limit.  Not sure which edge to wrap to.");
    }
    return (end - start) * percent;
  }
  static interpolateWithWrapping(start, end, percent, wrapMin, wrapMax) {
    let interpolatedVal = start + this.interpolateDeltaWithWrapping(start, end, percent, wrapMin, wrapMax);
    let wrapLength = wrapMax - wrapMin;
    if (interpolatedVal >= wrapLength)
      interpolatedVal -= wrapLength;
    if (interpolatedVal < 0)
      interpolatedVal += wrapLength;
    return interpolatedVal;
  }
};

// src/serialize/DynamicObject.js
var DynamicObject = class extends GameObject_default {
  static get netScheme() {
    return Object.assign({
      position: { type: BaseTypes_default.TYPES.CLASSINSTANCE },
      width: { type: BaseTypes_default.TYPES.INT16 },
      height: { type: BaseTypes_default.TYPES.INT16 },
      isStatic: { type: BaseTypes_default.TYPES.UINT8 },
      velocity: { type: BaseTypes_default.TYPES.CLASSINSTANCE },
      angle: { type: BaseTypes_default.TYPES.FLOAT32 }
    }, super.netScheme);
  }
  constructor(gameEngine, options, props) {
    super(gameEngine, options, props);
    this.bendingIncrements = 0;
    this.position = new TwoVector_default(0, 0);
    this.velocity = new TwoVector_default(0, 0);
    this.width = props && props.width ? props.width : 1;
    this.height = props && props.height ? props.height : 1;
    this.isStatic = props && props.isStatic ? props.isStatic : 0;
    this.friction = new TwoVector_default(1, 1);
    if (props && props.position)
      this.position.copy(props.position);
    if (props && props.velocity)
      this.velocity.copy(props.velocity);
    this.angle = 90;
    this.isRotatingLeft = false;
    this.isRotatingRight = false;
    this.isAccelerating = false;
    this.rotationSpeed = 2.5;
    this.acceleration = 0.1;
    this.deceleration = 0.99;
  }
  get x() {
    return this.position.x;
  }
  get y() {
    return this.position.y;
  }
  toString() {
    function round3(x) {
      return Math.round(x * 1e3) / 1e3;
    }
    return `${this.constructor.name}[${this.id}] player${this.playerId} Pos=${this.position} Vel=${this.velocity} angle${round3(this.angle)}`;
  }
  get bending() {
    return {};
  }
  turnRight(deltaAngle) {
    this.angle += deltaAngle;
    if (this.angle >= 360) {
      this.angle -= 360;
    }
    if (this.angle < 0) {
      this.angle += 360;
    }
    return this;
  }
  turnLeft(deltaAngle) {
    return this.turnRight(-deltaAngle);
  }
  accelerate(acceleration) {
    let rad = this.angle * (Math.PI / 180);
    let dv2 = new TwoVector_default(Math.cos(rad), Math.sin(rad));
    dv2.multiplyScalar(acceleration);
    this.velocity.add(dv2);
    return this;
  }
  bendingToString() {
    if (this.bendingIncrements)
      return `\u0394Pos=${this.bendingPositionDelta} \u0394Vel=${this.bendingVelocityDelta} \u0394Angle=${this.bendingAngleDelta} increments=${this.bendingIncrements}`;
    return "no bending";
  }
  get maxSpeed() {
    return null;
  }
  syncTo(other) {
    super.syncTo(other);
    this.position.copy(other.position);
    this.velocity.copy(other.velocity);
    this.width = other.width;
    this.height = other.height;
    this.bendingAngle = other.bendingAngle;
    this.rotationSpeed = other.rotationSpeed;
    this.acceleration = other.acceleration;
    this.deceleration = other.deceleration;
  }
  bendToCurrent(original, percent, worldSettings, isLocal, increments) {
    let bending = { increments, percent };
    let positionBending = Object.assign({}, bending, this.bending.position);
    let velocityBending = Object.assign({}, bending, this.bending.velocity);
    let angleBending = Object.assign({}, bending, this.bending.angle);
    if (isLocal) {
      Object.assign(positionBending, this.bending.positionLocal);
      Object.assign(velocityBending, this.bending.velocityLocal);
      Object.assign(angleBending, this.bending.angleLocal);
    }
    this.incrementScale = percent / increments;
    this.bendingPositionDelta = original.position.getBendingDelta(this.position, positionBending);
    this.bendingVelocityDelta = original.velocity.getBendingDelta(this.velocity, velocityBending);
    this.bendingAngleDelta = MathUtils.interpolateDeltaWithWrapping(original.angle, this.angle, angleBending.percent, 0, 360) / increments;
    this.bendingTarget = new this.constructor();
    this.bendingTarget.syncTo(this);
    this.position.copy(original.position);
    this.velocity.copy(original.velocity);
    this.angle = original.angle;
    this.bendingIncrements = increments;
    this.bendingOptions = bending;
  }
  applyIncrementalBending(stepDesc) {
    if (this.bendingIncrements === 0)
      return;
    let timeFactor = 1;
    if (stepDesc && stepDesc.dt)
      timeFactor = stepDesc.dt / (1e3 / 60);
    const posDelta = this.bendingPositionDelta.clone().multiplyScalar(timeFactor);
    const velDelta = this.bendingVelocityDelta.clone().multiplyScalar(timeFactor);
    this.position.add(posDelta);
    this.velocity.add(velDelta);
    this.angle += this.bendingAngleDelta * timeFactor;
    this.bendingIncrements--;
  }
  getAABB() {
    return {
      min: [this.x - this.width / 2, this.y - this.height / 2],
      max: [this.x + this.width / 2, this.y + this.height / 2]
    };
  }
  collidesWith(other) {
    return true;
  }
};
var DynamicObject_default = DynamicObject;

// src/serialize/PhysicalObject2D.js
var PhysicalObject2D = class extends GameObject_default {
  static get netScheme() {
    return Object.assign({
      mass: { type: BaseTypes_default.TYPES.FLOAT32 },
      position: { type: BaseTypes_default.TYPES.CLASSINSTANCE },
      angle: { type: BaseTypes_default.TYPES.FLOAT32 },
      velocity: { type: BaseTypes_default.TYPES.CLASSINSTANCE },
      angularVelocity: { type: BaseTypes_default.TYPES.FLOAT32 }
    }, super.netScheme);
  }
  constructor(gameEngine, options, props) {
    super(gameEngine, options, props);
    this.bendingIncrements = 0;
    this.position = new TwoVector_default(0, 0);
    this.velocity = new TwoVector_default(0, 0);
    this.angle = 0;
    this.angularVelocity = 0;
    this.mass = 0;
    props = props || {};
    if (props.position)
      this.position.copy(props.position);
    if (props.velocity)
      this.velocity.copy(props.velocity);
    if (props.angle)
      this.angle = props.angle;
    if (props.angularVelocity)
      this.angularVelocity = props.angularVelocity;
    if (props.mass)
      this.mass = props.mass;
    this.class = PhysicalObject2D;
  }
  onAddToWorld() {
  }
  toString() {
    let p = this.position.toString();
    let v = this.velocity.toString();
    let a = this.angle;
    let av = this.angularVelocity;
    return `phyObj2D[${this.id}] player${this.playerId} Pos=${p} Vel=${v} Ang=${a} AVel=${av}`;
  }
  get bending() {
    return {};
  }
  bendingToString() {
    if (this.bendingIncrements)
      return `\u0394Pos=${this.bendingPositionDelta} \u0394Vel=${this.bendingVelocityDelta} \u0394Angle=${this.bendingAngleDelta} increments=${this.bendingIncrements}`;
    return "no bending";
  }
  bendToCurrent(original, percent, worldSettings, isLocal, increments) {
    let bending = { increments, percent };
    let positionBending = Object.assign({}, bending, this.bending.position);
    let velocityBending = Object.assign({}, bending, this.bending.velocity);
    let angleBending = Object.assign({}, bending, this.bending.angle);
    let avBending = Object.assign({}, bending, this.bending.angularVelocity);
    if (isLocal) {
      Object.assign(positionBending, this.bending.positionLocal);
      Object.assign(velocityBending, this.bending.velocityLocal);
      Object.assign(angleBending, this.bending.angleLocal);
      Object.assign(avBending, this.bending.angularVelocityLocal);
    }
    this.incrementScale = percent / increments;
    this.bendingPositionDelta = original.position.getBendingDelta(this.position, positionBending);
    this.bendingVelocityDelta = original.velocity.getBendingDelta(this.velocity, velocityBending);
    this.bendingAVDelta = (this.angularVelocity - original.angularVelocity) * this.incrementScale * avBending.percent;
    this.bendingAngleDelta = MathUtils.interpolateDeltaWithWrapping(original.angle, this.angle, angleBending.percent, 0, 2 * Math.PI) / increments;
    this.bendingTarget = new this.constructor();
    this.bendingTarget.syncTo(this);
    this.position.copy(original.position);
    this.angle = original.angle;
    this.angularVelocity = original.angularVelocity;
    this.velocity.copy(original.velocity);
    this.bendingIncrements = increments;
    this.bendingOptions = bending;
    this.refreshToPhysics();
  }
  syncTo(other, options) {
    super.syncTo(other);
    this.position.copy(other.position);
    this.angle = other.angle;
    this.angularVelocity = other.angularVelocity;
    if (!options || !options.keepVelocity) {
      this.velocity.copy(other.velocity);
    }
    if (this.physicsObj)
      this.refreshToPhysics();
  }
  refreshFromPhysics() {
    this.copyVector(this.physicsObj.position, this.position);
    this.copyVector(this.physicsObj.velocity, this.velocity);
    this.angle = this.physicsObj.angle;
    this.angularVelocity = this.physicsObj.angularVelocity;
  }
  copyVector(source, target) {
    let sourceVec = source;
    if (typeof source[0] === "number" && typeof source[1] === "number")
      sourceVec = { x: source[0], y: source[1] };
    if (typeof target.copy === "function") {
      target.copy(sourceVec);
    } else if (target instanceof Float32Array) {
      target[0] = sourceVec.x;
      target[1] = sourceVec.y;
    } else {
      target.x = sourceVec.x;
      target.y = sourceVec.y;
    }
  }
  refreshToPhysics() {
    this.copyVector(this.position, this.physicsObj.position);
    this.copyVector(this.velocity, this.physicsObj.velocity);
    this.physicsObj.angle = this.angle;
    this.physicsObj.angularVelocity = this.angularVelocity;
  }
  applyIncrementalBending(stepDesc) {
    if (this.bendingIncrements === 0)
      return;
    let timeFactor = 1;
    if (stepDesc && stepDesc.dt)
      timeFactor = stepDesc.dt / (1e3 / 60);
    const posDelta = this.bendingPositionDelta.clone().multiplyScalar(timeFactor);
    const velDelta = this.bendingVelocityDelta.clone().multiplyScalar(timeFactor);
    this.position.add(posDelta);
    this.velocity.add(velDelta);
    this.angularVelocity += this.bendingAVDelta * timeFactor;
    this.angle += this.bendingAngleDelta * timeFactor;
    this.bendingIncrements--;
  }
  interpolate(nextObj, percent) {
    this.position.lerp(nextObj.position, percent);
    this.angle = MathUtils.interpolateDeltaWithWrapping(this.angle, nextObj.angle, percent, 0, 2 * Math.PI);
  }
};
var PhysicalObject2D_default = PhysicalObject2D;

// src/serialize/PhysicalObject3D.js
var PhysicalObject3D = class extends GameObject_default {
  static get netScheme() {
    return Object.assign({
      position: { type: BaseTypes_default.TYPES.CLASSINSTANCE },
      quaternion: { type: BaseTypes_default.TYPES.CLASSINSTANCE },
      velocity: { type: BaseTypes_default.TYPES.CLASSINSTANCE },
      angularVelocity: { type: BaseTypes_default.TYPES.CLASSINSTANCE }
    }, super.netScheme);
  }
  constructor(gameEngine, options, props) {
    super(gameEngine, options, props);
    this.bendingIncrements = 0;
    this.position = new ThreeVector_default(0, 0, 0);
    this.velocity = new ThreeVector_default(0, 0, 0);
    this.quaternion = new Quaternion_default(1, 0, 0, 0);
    this.angularVelocity = new ThreeVector_default(0, 0, 0);
    props = props || {};
    if (props.position)
      this.position.copy(props.position);
    if (props.velocity)
      this.velocity.copy(props.velocity);
    if (props.quaternion)
      this.quaternion.copy(props.quaternion);
    if (props.angularVelocity)
      this.angularVelocity.copy(props.angularVelocity);
    this.class = PhysicalObject3D;
  }
  toString() {
    let p = this.position.toString();
    let v = this.velocity.toString();
    let q = this.quaternion.toString();
    let a = this.angularVelocity.toString();
    return `phyObj[${this.id}] player${this.playerId} Pos${p} Vel${v} Dir${q} AVel${a}`;
  }
  bendingToString() {
    if (this.bendingOptions)
      return `bend=${this.bendingOptions.percent} deltaPos=${this.bendingPositionDelta} deltaVel=${this.bendingVelocityDelta} deltaQuat=${this.bendingQuaternionDelta}`;
    return "no bending";
  }
  bendToCurrent(original, percent, worldSettings, isLocal, increments) {
    let bending = { increments, percent };
    let positionBending = Object.assign({}, bending, this.bending.position);
    let velocityBending = Object.assign({}, bending, this.bending.velocity);
    if (isLocal) {
      Object.assign(positionBending, this.bending.positionLocal);
      Object.assign(velocityBending, this.bending.velocityLocal);
    }
    this.incrementScale = percent / increments;
    this.bendingPositionDelta = original.position.getBendingDelta(this.position, positionBending);
    this.bendingVelocityDelta = original.velocity.getBendingDelta(this.velocity, velocityBending);
    this.bendingAVDelta = new ThreeVector_default(0, 0, 0);
    this.bendingQuaternionDelta = new Quaternion_default().copy(original.quaternion).conjugate();
    this.bendingQuaternionDelta.multiply(this.quaternion);
    let axisAngle = this.bendingQuaternionDelta.toAxisAngle();
    axisAngle.angle *= this.incrementScale;
    this.bendingQuaternionDelta.setFromAxisAngle(axisAngle.axis, axisAngle.angle);
    this.bendingTarget = new this.constructor();
    this.bendingTarget.syncTo(this);
    this.position.copy(original.position);
    this.quaternion.copy(original.quaternion);
    this.angularVelocity.copy(original.angularVelocity);
    this.bendingIncrements = increments;
    this.bendingOptions = bending;
    this.refreshToPhysics();
  }
  syncTo(other, options) {
    super.syncTo(other);
    this.position.copy(other.position);
    this.quaternion.copy(other.quaternion);
    this.angularVelocity.copy(other.angularVelocity);
    if (!options || !options.keepVelocity) {
      this.velocity.copy(other.velocity);
    }
    if (this.physicsObj)
      this.refreshToPhysics();
  }
  refreshFromPhysics() {
    this.position.copy(this.physicsObj.position);
    this.quaternion.copy(this.physicsObj.quaternion);
    this.velocity.copy(this.physicsObj.velocity);
    this.angularVelocity.copy(this.physicsObj.angularVelocity);
  }
  refreshToPhysics() {
    this.physicsObj.position.copy(this.position);
    this.physicsObj.quaternion.copy(this.quaternion);
    this.physicsObj.velocity.copy(this.velocity);
    this.physicsObj.angularVelocity.copy(this.angularVelocity);
  }
  applyIncrementalBending(stepDesc) {
    if (this.bendingIncrements === 0)
      return;
    if (stepDesc && stepDesc.dt) {
      const timeFactor = stepDesc.dt / (1e3 / 60);
      const posDelta = new ThreeVector_default().copy(this.bendingPositionDelta).multiplyScalar(timeFactor);
      const avDelta = new ThreeVector_default().copy(this.bendingAVDelta).multiplyScalar(timeFactor);
      this.position.add(posDelta);
      this.angularVelocity.add(avDelta);
      this.quaternion.slerp(this.bendingTarget.quaternion, this.incrementScale * timeFactor * 0.8);
    } else {
      this.position.add(this.bendingPositionDelta);
      this.angularVelocity.add(this.bendingAVDelta);
      this.quaternion.slerp(this.bendingTarget.quaternion, this.incrementScale);
    }
    this.bendingIncrements--;
  }
  interpolate(nextObj, percent) {
    this.position.lerp(nextObj.position, percent);
    this.quaternion.slerp(nextObj.quaternion, percent);
  }
};
var PhysicalObject3D_default = PhysicalObject3D;

// src/ServerEngine.js
var import_fs = __toESM(require("fs"));
var import_mkdirp = __toESM(require_mkdirp());

// src/lib/Scheduler.js
var import_event_emitter2 = __toESM(require_event_emitter());
var SIXTY_PER_SEC = 1e3 / 60;
var LOOP_SLOW_THRESH = 0.3;
var LOOP_SLOW_COUNT = 10;
var Scheduler = class {
  constructor(options) {
    this.options = Object.assign({
      tick: null,
      period: SIXTY_PER_SEC,
      delay: SIXTY_PER_SEC / 3
    }, options);
    this.nextExecTime = null;
    this.requestedDelay = 0;
    this.delayCounter = 0;
    let eventEmitter = new import_event_emitter2.default();
    this.on = eventEmitter.on;
    this.once = eventEmitter.once;
    this.removeListener = eventEmitter.removeListener;
    this.emit = eventEmitter.emit;
  }
  nextTickChecker() {
    let currentTime = new Date().getTime();
    if (currentTime > this.nextExecTime) {
      this.delayCounter++;
      this.callTick();
      this.nextExecTime = currentTime + this.options.stepPeriod;
    }
    window.requestAnimationFrame(this.nextTickChecker.bind(this));
  }
  nextTick() {
    let stepStartTime = new Date().getTime();
    if (stepStartTime > this.nextExecTime + this.options.period * LOOP_SLOW_THRESH) {
      this.delayCounter++;
    } else
      this.delayCounter = 0;
    this.callTick();
    this.nextExecTime = stepStartTime + this.options.period + this.requestedDelay;
    this.requestedDelay = 0;
    setTimeout(this.nextTick.bind(this), this.nextExecTime - new Date().getTime());
  }
  callTick() {
    if (this.delayCounter >= LOOP_SLOW_COUNT) {
      this.emit("loopRunningSlow");
      this.delayCounter = 0;
    }
    this.options.tick();
  }
  start() {
    setTimeout(this.nextTick.bind(this));
    if (typeof window === "object" && typeof window.requestAnimationFrame === "function")
      window.requestAnimationFrame(this.nextTickChecker.bind(this));
    return this;
  }
  delayTick() {
    this.requestedDelay += this.options.delay;
  }
  hurryTick() {
    this.requestedDelay -= this.options.delay;
  }
};

// src/serialize/Serializer.js
var MAX_UINT_16 = 65535;
var Serializer = class {
  constructor() {
    this.registeredClasses = {};
    this.customTypes = {};
    this.registerClass(TwoVector_default);
    this.registerClass(ThreeVector_default);
    this.registerClass(Quaternion_default);
  }
  addCustomType(customType) {
    this.customTypes[customType.type] = customType;
  }
  static typeCanAssign(type) {
    return type !== BaseTypes_default.TYPES.CLASSINSTANCE && type !== BaseTypes_default.TYPES.LIST;
  }
  registerClass(classObj, classId) {
    classId = classId ? classId : Utils.hashStr(classObj.name);
    if (this.registeredClasses[classId]) {
      console.error(`Serializer: accidental override of classId ${classId} when registering class`, classObj);
    }
    this.registeredClasses[classId] = classObj;
  }
  deserialize(dataBuffer, byteOffset) {
    byteOffset = byteOffset ? byteOffset : 0;
    let localByteOffset = 0;
    let dataView = new DataView(dataBuffer);
    let objectClassId = dataView.getUint8(byteOffset + localByteOffset);
    let objectClass = this.registeredClasses[objectClassId];
    if (objectClass == null) {
      console.error("Serializer: Found a class which was not registered.  Please use serializer.registerClass() to register all serialized classes.");
    }
    localByteOffset += Uint8Array.BYTES_PER_ELEMENT;
    let obj = new objectClass(null, { id: null });
    for (let property of Object.keys(objectClass.netScheme).sort()) {
      let read = this.readDataView(dataView, byteOffset + localByteOffset, objectClass.netScheme[property]);
      obj[property] = read.data;
      localByteOffset += read.bufferSize;
    }
    return { obj, byteOffset: localByteOffset };
  }
  writeDataView(dataView, value, bufferOffset, netSchemProp) {
    if (netSchemProp.type === BaseTypes_default.TYPES.FLOAT32) {
      dataView.setFloat32(bufferOffset, value);
    } else if (netSchemProp.type === BaseTypes_default.TYPES.INT32) {
      dataView.setInt32(bufferOffset, value);
    } else if (netSchemProp.type === BaseTypes_default.TYPES.INT16) {
      dataView.setInt16(bufferOffset, value);
    } else if (netSchemProp.type === BaseTypes_default.TYPES.INT8) {
      dataView.setInt8(bufferOffset, value);
    } else if (netSchemProp.type === BaseTypes_default.TYPES.UINT8) {
      dataView.setUint8(bufferOffset, value);
    } else if (netSchemProp.type === BaseTypes_default.TYPES.STRING) {
      if (value === null) {
        dataView.setUint16(bufferOffset, MAX_UINT_16);
      } else {
        let strLen = value.length;
        dataView.setUint16(bufferOffset, strLen);
        let localBufferOffset = 2;
        for (let i = 0; i < strLen; i++)
          dataView.setUint16(bufferOffset + localBufferOffset + i * 2, value.charCodeAt(i));
      }
    } else if (netSchemProp.type === BaseTypes_default.TYPES.CLASSINSTANCE) {
      value.serialize(this, {
        dataBuffer: dataView.buffer,
        bufferOffset
      });
    } else if (netSchemProp.type === BaseTypes_default.TYPES.LIST) {
      let localBufferOffset = 0;
      dataView.setUint16(bufferOffset + localBufferOffset, value.length);
      localBufferOffset += Uint16Array.BYTES_PER_ELEMENT;
      for (let item of value) {
        if (netSchemProp.itemType === BaseTypes_default.TYPES.CLASSINSTANCE) {
          let serializedObj = item.serialize(this, {
            dataBuffer: dataView.buffer,
            bufferOffset: bufferOffset + localBufferOffset
          });
          localBufferOffset += serializedObj.bufferOffset;
        } else if (netSchemProp.itemType === BaseTypes_default.TYPES.STRING) {
          if (item === null) {
            dataView.setUint16(bufferOffset + localBufferOffset, MAX_UINT_16);
            localBufferOffset += Uint16Array.BYTES_PER_ELEMENT;
          } else {
            let strLen = item.length;
            dataView.setUint16(bufferOffset + localBufferOffset, strLen);
            localBufferOffset += Uint16Array.BYTES_PER_ELEMENT;
            for (let i = 0; i < strLen; i++)
              dataView.setUint16(bufferOffset + localBufferOffset + i * 2, item.charCodeAt(i));
            localBufferOffset += Uint16Array.BYTES_PER_ELEMENT * strLen;
          }
        } else {
          this.writeDataView(dataView, item, bufferOffset + localBufferOffset, { type: netSchemProp.itemType });
          localBufferOffset += this.getTypeByteSize(netSchemProp.itemType);
        }
      }
    } else if (this.customTypes[netSchemProp.type]) {
      this.customTypes[netSchemProp.type].writeDataView(dataView, value, bufferOffset);
    } else {
      console.error(`No custom property ${netSchemProp.type} found!`);
    }
  }
  readDataView(dataView, bufferOffset, netSchemProp) {
    let data, bufferSize;
    if (netSchemProp.type === BaseTypes_default.TYPES.FLOAT32) {
      data = dataView.getFloat32(bufferOffset);
      bufferSize = this.getTypeByteSize(netSchemProp.type);
    } else if (netSchemProp.type === BaseTypes_default.TYPES.INT32) {
      data = dataView.getInt32(bufferOffset);
      bufferSize = this.getTypeByteSize(netSchemProp.type);
    } else if (netSchemProp.type === BaseTypes_default.TYPES.INT16) {
      data = dataView.getInt16(bufferOffset);
      bufferSize = this.getTypeByteSize(netSchemProp.type);
    } else if (netSchemProp.type === BaseTypes_default.TYPES.INT8) {
      data = dataView.getInt8(bufferOffset);
      bufferSize = this.getTypeByteSize(netSchemProp.type);
    } else if (netSchemProp.type === BaseTypes_default.TYPES.UINT8) {
      data = dataView.getUint8(bufferOffset);
      bufferSize = this.getTypeByteSize(netSchemProp.type);
    } else if (netSchemProp.type === BaseTypes_default.TYPES.STRING) {
      let length = dataView.getUint16(bufferOffset);
      let localBufferOffset = Uint16Array.BYTES_PER_ELEMENT;
      bufferSize = localBufferOffset;
      if (length === MAX_UINT_16) {
        data = null;
      } else {
        let a = [];
        for (let i = 0; i < length; i++)
          a[i] = dataView.getUint16(bufferOffset + localBufferOffset + i * 2);
        data = String.fromCharCode.apply(null, a);
        bufferSize += length * Uint16Array.BYTES_PER_ELEMENT;
      }
    } else if (netSchemProp.type === BaseTypes_default.TYPES.CLASSINSTANCE) {
      var deserializeData = this.deserialize(dataView.buffer, bufferOffset);
      data = deserializeData.obj;
      bufferSize = deserializeData.byteOffset;
    } else if (netSchemProp.type === BaseTypes_default.TYPES.LIST) {
      let localBufferOffset = 0;
      let items = [];
      let itemCount = dataView.getUint16(bufferOffset + localBufferOffset);
      localBufferOffset += Uint16Array.BYTES_PER_ELEMENT;
      for (let x = 0; x < itemCount; x++) {
        let read = this.readDataView(dataView, bufferOffset + localBufferOffset, { type: netSchemProp.itemType });
        items.push(read.data);
        localBufferOffset += read.bufferSize;
      }
      data = items;
      bufferSize = localBufferOffset;
    } else if (this.customTypes[netSchemProp.type] != null) {
      data = this.customTypes[netSchemProp.type].readDataView(dataView, bufferOffset);
    } else {
      console.error(`No custom property ${netSchemProp.type} found!`);
    }
    return { data, bufferSize };
  }
  getTypeByteSize(type) {
    switch (type) {
      case BaseTypes_default.TYPES.FLOAT32: {
        return Float32Array.BYTES_PER_ELEMENT;
      }
      case BaseTypes_default.TYPES.INT32: {
        return Int32Array.BYTES_PER_ELEMENT;
      }
      case BaseTypes_default.TYPES.INT16: {
        return Int16Array.BYTES_PER_ELEMENT;
      }
      case BaseTypes_default.TYPES.INT8: {
        return Int8Array.BYTES_PER_ELEMENT;
      }
      case BaseTypes_default.TYPES.UINT8: {
        return Uint8Array.BYTES_PER_ELEMENT;
      }
      default: {
        if (type === void 0) {
          throw "netScheme property declared without type attribute!";
        } else if (this.customTypes[type] === null) {
          throw `netScheme property ${type} undefined! Did you forget to add it to the serializer?`;
        } else {
          return this.customTypes[type].BYTES_PER_ELEMENT;
        }
      }
    }
  }
};
var Serializer_default = Serializer;

// src/network/NetworkedEventFactory.js
var NetworkedEventFactory = class {
  constructor(serializer, eventName, options) {
    options = Object.assign({}, options);
    this.seriazlier = serializer;
    this.options = options;
    this.eventName = eventName;
    this.netScheme = options.netScheme;
  }
  create(payload) {
    let networkedEvent = new Serializable_default();
    networkedEvent.classId = Utils.hashStr(this.eventName);
    if (this.netScheme) {
      networkedEvent.netScheme = Object.assign({}, this.netScheme);
      for (let property of Object.keys(this.netScheme)) {
        networkedEvent[property] = payload[property];
      }
    } else {
    }
    return networkedEvent;
  }
};

// src/network/NetworkedEventCollection.js
var NetworkedEventCollection = class extends Serializable_default {
  static get netScheme() {
    return {
      events: {
        type: BaseTypes_default.TYPES.LIST,
        itemType: BaseTypes_default.TYPES.CLASSINSTANCE
      }
    };
  }
  constructor(events) {
    super();
    this.events = events || [];
  }
};

// src/network/NetworkTransmitter.js
var NetworkTransmitter = class {
  constructor(serializer) {
    this.serializer = serializer;
    this.registeredEvents = [];
    this.serializer.registerClass(NetworkedEventCollection);
    this.registerNetworkedEventFactory("objectUpdate", {
      netScheme: {
        stepCount: { type: BaseTypes_default.TYPES.INT32 },
        objectInstance: { type: BaseTypes_default.TYPES.CLASSINSTANCE }
      }
    });
    this.registerNetworkedEventFactory("objectCreate", {
      netScheme: {
        stepCount: { type: BaseTypes_default.TYPES.INT32 },
        objectInstance: { type: BaseTypes_default.TYPES.CLASSINSTANCE }
      }
    });
    this.registerNetworkedEventFactory("objectDestroy", {
      netScheme: {
        stepCount: { type: BaseTypes_default.TYPES.INT32 },
        objectInstance: { type: BaseTypes_default.TYPES.CLASSINSTANCE }
      }
    });
    this.registerNetworkedEventFactory("syncHeader", {
      netScheme: {
        stepCount: { type: BaseTypes_default.TYPES.INT32 },
        fullUpdate: { type: BaseTypes_default.TYPES.UINT8 }
      }
    });
    this.networkedEventCollection = new NetworkedEventCollection();
  }
  registerNetworkedEventFactory(eventName, options) {
    options = Object.assign({}, options);
    let classHash = Utils.hashStr(eventName);
    let networkedEventPrototype = function() {
    };
    networkedEventPrototype.prototype.classId = classHash;
    networkedEventPrototype.prototype.eventName = eventName;
    networkedEventPrototype.netScheme = options.netScheme;
    this.serializer.registerClass(networkedEventPrototype, classHash);
    this.registeredEvents[eventName] = new NetworkedEventFactory(this.serializer, eventName, options);
  }
  addNetworkedEvent(eventName, payload) {
    if (!this.registeredEvents[eventName]) {
      console.error(`NetworkTransmitter: no such event ${eventName}`);
      return null;
    }
    let stagedNetworkedEvent = this.registeredEvents[eventName].create(payload);
    this.networkedEventCollection.events.push(stagedNetworkedEvent);
    return stagedNetworkedEvent;
  }
  serializePayload() {
    if (this.networkedEventCollection.events.length === 0)
      return null;
    let dataBuffer = this.networkedEventCollection.serialize(this.serializer);
    return dataBuffer;
  }
  deserializePayload(payload) {
    return this.serializer.deserialize(payload.dataBuffer).obj;
  }
  clearPayload() {
    this.networkedEventCollection.events = [];
  }
};

// src/network/NetworkMonitor.js
var import_event_emitter3 = __toESM(require_event_emitter());
var NetworkMonitor = class {
  constructor(server) {
    if (server) {
      this.server = server;
      this.gameName = Object.getPrototypeOf(server.gameEngine).constructor.name;
    }
    let eventEmitter = new import_event_emitter3.default();
    this.on = eventEmitter.on;
    this.once = eventEmitter.once;
    this.removeListener = eventEmitter.removeListener;
    this.emit = eventEmitter.emit;
  }
  registerClient(clientEngine) {
    this.queryIdCounter = 0;
    this.RTTQueries = {};
    this.movingRTTAverage = 0;
    this.movingRTTAverageFrame = [];
    this.movingFPSAverageSize = clientEngine.options.healthCheckRTTSample;
    this.clientEngine = clientEngine;
    clientEngine.socket.on("RTTResponse", this.onReceivedRTTQuery.bind(this));
    setInterval(this.sendRTTQuery.bind(this), clientEngine.options.healthCheckInterval);
  }
  sendRTTQuery() {
    this.RTTQueries[this.queryIdCounter] = new Date().getTime();
    this.clientEngine.socket.emit("RTTQuery", this.queryIdCounter);
    this.queryIdCounter++;
  }
  onReceivedRTTQuery(queryId) {
    let RTT = new Date().getTime() - this.RTTQueries[queryId];
    this.movingRTTAverageFrame.push(RTT);
    if (this.movingRTTAverageFrame.length > this.movingFPSAverageSize) {
      this.movingRTTAverageFrame.shift();
    }
    this.movingRTTAverage = this.movingRTTAverageFrame.reduce((a, b) => a + b) / this.movingRTTAverageFrame.length;
    this.emit("RTTUpdate", {
      RTT,
      RTTAverage: this.movingRTTAverage
    });
  }
  registerPlayerOnServer(socket) {
    socket.on("RTTQuery", this.respondToRTTQuery.bind(this, socket));
  }
  respondToRTTQuery(socket, queryId) {
    socket.emit("RTTResponse", queryId);
  }
};

// src/ServerEngine.js
var ServerEngine = class {
  constructor(io, gameEngine, options) {
    this.options = Object.assign({
      updateRate: 6,
      stepRate: 60,
      fullSyncRate: 20,
      timeoutInterval: 180,
      updateOnObjectCreation: true,
      tracesPath: "",
      countConnections: false,
      debug: {
        serverSendLag: false
      }
    }, options);
    if (this.options.tracesPath !== "") {
      this.options.tracesPath += "/";
      import_mkdirp.default.sync(this.options.tracesPath);
    }
    this.io = io;
    this.serializer = new Serializer_default();
    this.gameEngine = gameEngine;
    this.gameEngine.registerClasses(this.serializer);
    this.networkTransmitter = new NetworkTransmitter(this.serializer);
    this.networkMonitor = new NetworkMonitor(this);
    this.DEFAULT_ROOM_NAME = "/lobby";
    this.rooms = {};
    this.createRoom(this.DEFAULT_ROOM_NAME);
    this.connectedPlayers = {};
    this.playerInputQueues = {};
    this.objMemory = {};
    io.on("connection", this.onPlayerConnected.bind(this));
    this.gameEngine.on("objectAdded", this.onObjectAdded.bind(this));
    this.gameEngine.on("objectDestroyed", this.onObjectDestroyed.bind(this));
    return this;
  }
  start() {
    this.gameEngine.start();
    this.gameEngine.emit("server__init");
    let schedulerConfig = {
      tick: this.step.bind(this),
      period: 1e3 / this.options.stepRate,
      delay: 4
    };
    this.scheduler = new Scheduler(schedulerConfig).start();
  }
  step() {
    this.gameEngine.trace.setStep(this.gameEngine.world.stepCount + 1);
    this.gameEngine.emit("server__preStep", this.gameEngine.world.stepCount + 1);
    this.serverTime = new Date().getTime();
    for (let playerIdStr of Object.keys(this.playerInputQueues)) {
      let playerId = Number(playerIdStr);
      let inputQueue = this.playerInputQueues[playerId];
      let queueSteps = Object.keys(inputQueue);
      let minStep = Math.min.apply(null, queueSteps);
      if (queueSteps.length > 0 && minStep <= this.gameEngine.world.stepCount) {
        inputQueue[minStep].forEach((input) => {
          this.gameEngine.emit("server__processInput", { input, playerId });
          this.gameEngine.emit("processInput", { input, playerId });
          this.gameEngine.processInput(input, playerId, true);
        });
        delete inputQueue[minStep];
      }
    }
    this.gameEngine.step(false, this.serverTime / 1e3);
    Object.keys(this.rooms).map(this.syncStateToClients.bind(this));
    for (let objId of Object.keys(this.objMemory)) {
      if (!(objId in this.gameEngine.world.objects)) {
        delete this.objMemory[objId];
      }
    }
    this.gameEngine.emit("server__postStep", this.gameEngine.world.stepCount);
    if (this.gameEngine.trace.length) {
      let traceData = this.gameEngine.trace.rotate();
      let traceString = "";
      traceData.forEach((t) => {
        traceString += `[${t.time.toISOString()}]${t.step}>${t.data}
`;
      });
      import_fs.default.appendFile(`${this.options.tracesPath}server.trace`, traceString, (err) => {
        if (err)
          throw err;
      });
    }
  }
  syncStateToClients(roomName) {
    const room = this.rooms[roomName];
    if (room.requestImmediateSync || this.gameEngine.world.stepCount % this.options.updateRate === 0) {
      const roomPlayers = Object.keys(this.connectedPlayers).filter((p) => this.connectedPlayers[p].roomName === roomName);
      let diffUpdate = true;
      for (const socketId of roomPlayers) {
        const player = this.connectedPlayers[socketId];
        if (player.state === "new") {
          player.state = "synced";
          diffUpdate = false;
        }
      }
      if (room.syncCounter++ % this.options.fullSyncRate === 0 || room.requestFullSync)
        diffUpdate = false;
      const payload = this.serializeUpdate(roomName, { diffUpdate });
      this.gameEngine.trace.info(() => `========== sending world update ${this.gameEngine.world.stepCount} to room ${roomName} is delta update: ${diffUpdate} ==========`);
      for (const socketId of roomPlayers)
        this.connectedPlayers[socketId].socket.emit("worldUpdate", payload);
      this.networkTransmitter.clearPayload();
      room.requestImmediateSync = false;
      room.requestFullSync = false;
    }
  }
  serializeUpdate(roomName, options) {
    let world = this.gameEngine.world;
    let diffUpdate = Boolean(options && options.diffUpdate);
    this.networkTransmitter.addNetworkedEvent("syncHeader", {
      stepCount: world.stepCount,
      fullUpdate: Number(!diffUpdate)
    });
    const roomObjects = Object.keys(world.objects).filter((o) => world.objects[o]._roomName === roomName);
    for (let objId of roomObjects) {
      let obj = world.objects[objId];
      let prevObject = this.objMemory[objId];
      if (diffUpdate) {
        let s = obj.serialize(this.serializer);
        if (prevObject && Utils.arrayBuffersEqual(s.dataBuffer, prevObject))
          continue;
        else
          this.objMemory[objId] = s.dataBuffer;
        obj = obj.prunedStringsClone(this.serializer, prevObject);
      }
      this.networkTransmitter.addNetworkedEvent("objectUpdate", {
        stepCount: world.stepCount,
        objectInstance: obj
      });
    }
    return this.networkTransmitter.serializePayload();
  }
  createRoom(roomName) {
    this.rooms[roomName] = { syncCounter: 0, requestImmediateSync: false };
  }
  assignObjectToRoom(obj, roomName) {
    obj._roomName = roomName;
  }
  assignPlayerToRoom(playerId, roomName) {
    const room = this.rooms[roomName];
    let player = null;
    if (!room) {
      this.gameEngine.trace.error(() => `cannot assign player to non-existant room ${roomName}`);
      console.error(`player ${playerId} assigned to room [${roomName}] which isn't defined`);
      return;
    }
    for (const p of Object.keys(this.connectedPlayers)) {
      if (this.connectedPlayers[p].socket.playerId === playerId)
        player = this.connectedPlayers[p];
    }
    if (!player) {
      this.gameEngine.trace.error(() => `cannot assign non-existant playerId ${playerId} to room ${roomName}`);
    }
    const roomUpdate = { playerId, from: player.roomName, to: roomName };
    player.socket.emit("roomUpdate", roomUpdate);
    this.gameEngine.emit("server__roomUpdate", roomUpdate);
    this.gameEngine.trace.info(() => `ROOM UPDATE: playerId ${playerId} from room ${player.roomName} to room ${roomName}`);
    player.roomName = roomName;
    room.requestImmediateSync = true;
    room.requestFullSync = true;
  }
  onObjectAdded(obj) {
    obj._roomName = obj._roomName || this.DEFAULT_ROOM_NAME;
    this.networkTransmitter.addNetworkedEvent("objectCreate", {
      stepCount: this.gameEngine.world.stepCount,
      objectInstance: obj
    });
    if (this.options.updateOnObjectCreation) {
      this.rooms[obj._roomName].requestImmediateSync = true;
    }
  }
  onObjectDestroyed(obj) {
    this.networkTransmitter.addNetworkedEvent("objectDestroy", {
      stepCount: this.gameEngine.world.stepCount,
      objectInstance: obj
    });
  }
  getPlayerId(socket) {
  }
  onPlayerConnected(socket) {
    let that = this;
    console.log("Client connected");
    this.connectedPlayers[socket.id] = {
      socket,
      state: "new",
      roomName: this.DEFAULT_ROOM_NAME
    };
    let playerId = this.getPlayerId(socket);
    if (!playerId) {
      playerId = ++this.gameEngine.world.playerCount;
    }
    socket.playerId = playerId;
    socket.lastHandledInput = null;
    socket.joinTime = new Date().getTime();
    this.resetIdleTimeout(socket);
    console.log("Client Connected", socket.id);
    let playerEvent = { id: socket.id, playerId, joinTime: socket.joinTime, disconnectTime: 0 };
    this.gameEngine.emit("server__playerJoined", playerEvent);
    this.gameEngine.emit("playerJoined", playerEvent);
    socket.emit("playerJoined", playerEvent);
    socket.on("disconnect", function() {
      playerEvent.disconnectTime = new Date().getTime();
      that.onPlayerDisconnected(socket.id, playerId);
      that.gameEngine.emit("server__playerDisconnected", playerEvent);
      that.gameEngine.emit("playerDisconnected", playerEvent);
    });
    socket.on("move", function(data) {
      that.onReceivedInput(data, socket);
    });
    socket.on("trace", function(traceData) {
      traceData = JSON.parse(traceData);
      let traceString = "";
      traceData.forEach((t) => {
        traceString += `[${t.time}]${t.step}>${t.data}
`;
      });
      import_fs.default.appendFile(`${that.options.tracesPath}client.${playerId}.trace`, traceString, (err) => {
        if (err)
          throw err;
      });
    });
    this.networkMonitor.registerPlayerOnServer(socket);
  }
  onPlayerTimeout(socket) {
    console.log(`Client timed out after ${this.options.timeoutInterval} seconds`, socket.id);
    socket.disconnect();
  }
  onPlayerDisconnected(socketId, playerId) {
    delete this.connectedPlayers[socketId];
    console.log("Client disconnected");
  }
  resetIdleTimeout(socket) {
    if (socket.idleTimeout)
      clearTimeout(socket.idleTimeout);
    if (this.options.timeoutInterval > 0) {
      socket.idleTimeout = setTimeout(() => {
        this.onPlayerTimeout(socket);
      }, this.options.timeoutInterval * 1e3);
    }
  }
  queueInputForPlayer(data, playerId) {
    if (!this.playerInputQueues.hasOwnProperty(playerId))
      this.playerInputQueues[playerId] = {};
    let queue = this.playerInputQueues[playerId];
    if (!queue[data.step])
      queue[data.step] = [];
    queue[data.step].push(data);
  }
  onReceivedInput(data, socket) {
    if (this.connectedPlayers[socket.id]) {
      this.connectedPlayers[socket.id].socket.lastHandledInput = data.messageIndex;
    }
    this.resetIdleTimeout(socket);
    this.queueInputForPlayer(data, socket.playerId);
  }
  gameStatus() {
    let gameStatus = {
      numPlayers: Object.keys(this.connectedPlayers).length,
      upTime: 0,
      cpuLoad: 0,
      memoryLoad: 0,
      players: {}
    };
    for (let p of Object.keys(this.connectedPlayers)) {
      gameStatus.players[p] = {
        frameRate: 0
      };
    }
    return JSON.stringify(gameStatus);
  }
};
var ServerEngine_default = ServerEngine;

// src/lib/lib.js
var lib_default = {
  Trace: Trace_default
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BaseTypes,
  CannonPhysicsEngine,
  DynamicObject,
  GameEngine,
  GameObject,
  GameWorld,
  Lib,
  P2PhysicsEngine,
  PhysicalObject2D,
  PhysicalObject3D,
  Quaternion,
  ServerEngine,
  SimplePhysicsEngine,
  ThreeVector,
  TwoVector
});
//# sourceMappingURL=lance-gg.js.map

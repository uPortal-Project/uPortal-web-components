/******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {}
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    ); // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function(exports) {
    /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module"
      });
      /******/
    }
    /******/ Object.defineProperty(exports, "__esModule", { value: true });
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
    value,
    mode
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === "object" &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, "default", {
      enumerable: true,
      value: value
    });
    /******/ if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function(key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ""; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__(
    (__webpack_require__.s = "5a74")
  );
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ "0033": /***/ function(module, exports, __webpack_require__) {
      exports = module.exports = __webpack_require__("2350")(false);
      // imports

      // module
      exports.push([
        module.i,
        '\n.content-grid[data-v-6d2ae9c4]{min-width:250px\n}\n.content-grid[data-v-6d2ae9c4] ::placeholder{font-style:italic\n}\n.content-grid[data-v-6d2ae9c4] ::-webkit-input-placeholder{font-style:italic\n}\n.content-grid[data-v-6d2ae9c4] :-moz-placeholder,.content-grid[data-v-6d2ae9c4] ::-moz-placeholder{font-style:italic\n}\n.content-grid[data-v-6d2ae9c4] :-ms-input-placeholder{font-style:italic\n}\n.content-grid[data-v-6d2ae9c4] ::-ms-input-placeholder{font-style:italic\n}\n.content-grid .content-grid-caret[data-v-6d2ae9c4]{cursor:pointer;position:relative\n}\n.content-grid .content-grid-caret[data-v-6d2ae9c4]:after{border-left:10px solid transparent;border-right:10px solid transparent;border-top:10px solid #000;content:"";display:inline-block;height:0;pointer-events:none;position:absolute;right:10px;top:25%;width:0\n}\n.content-grid .fa[data-v-6d2ae9c4]{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto\n}\n.content-grid .fa-search[data-v-6d2ae9c4]:before{content:"\\F002"\n}\n.content-grid.small .content-grid-caret[data-v-6d2ae9c4]:after{border:none\n}\n.content-grid.small>div[data-v-6d2ae9c4]{background-color:#f3f3f3;border-radius:5px\n}\n.content-grid.small>div>.title[data-v-6d2ae9c4]{background-color:#fff;border-radius:5px;position:relative\n}\n.content-grid.small>div>.title>h1[data-v-6d2ae9c4]{margin-right:32px\n}\n.content-grid.small>div>.title>.filter[data-v-6d2ae9c4]{display:flex;flex-flow:row nowrap;height:calc(100% - 15px);margin:auto 0;max-width:unset;position:absolute;right:15px;width:calc(100% - 30px)\n}\n.content-grid.small>div>.title>.filter.closed[data-v-6d2ae9c4]{width:32px\n}\n.content-grid.small>div>.title>.filter.closed input[data-v-6d2ae9c4]{visibility:hidden\n}\n.content-grid.small>div>.title>.filter>span[data-v-6d2ae9c4]{width:100%\n}\n.content-grid.small>div>.title>.filter>div[data-v-6d2ae9c4]{align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;text-align:center\n}\n.content-grid.small>div>.title>.filter>div>.fa[data-v-6d2ae9c4]{font-size:32px;margin-left:5px;opacity:.4\n}\n.content-grid.small>div>.title>.filter.opened[data-v-6d2ae9c4]{backface-visibility:hidden;transition:width 1s\n}\n.content-grid.small>div>.title>.filter.opened>div>.fa[data-v-6d2ae9c4]{opacity:1\n}\n.content-grid>div[data-v-6d2ae9c4]{display:block\n}\n.content-grid>div>.title[data-v-6d2ae9c4]{display:flex;flex-flow:row wrap;justify-content:space-between;padding:5px 20px;text-transform:uppercase\n}\n.content-grid>div>.title>h1[data-v-6d2ae9c4]{font-size:24px;font-weight:400;margin-bottom:15px;margin-top:15px\n}\n.content-grid>div>.title>.filter[data-v-6d2ae9c4]{margin:10px 0;max-width:300px;width:100%\n}\n.content-grid>div>.title>.filter input[data-v-6d2ae9c4]{-webkit-appearance:none;border:none;border-radius:48px;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12),0 1px 5px 0 rgba(0,0,0,.2);font-size:16px;height:100%;line-height:32px;outline:none;text-indent:10px;width:100%\n}\n.content-grid>div>.title>.filter input[data-v-6d2ae9c4]::-webkit-calendar-picker-indicator{display:none\n}\n.content-grid>div>.title>.filter>div[data-v-6d2ae9c4]{display:none\n}\n.content-grid>div .flex-grid[data-v-6d2ae9c4]{display:flex;flex-flow:row wrap;justify-content:center\n}\n.content-grid>div .flex-grid .flex-item[data-v-6d2ae9c4]{margin:20px 5px\n}\n.content-grid>div a.no-style[data-v-6d2ae9c4]{color:inherit;text-decoration:none\n}',
        ""
      ]);

      // exports

      /***/
    },

    /***/ "0039": /***/ function(module, exports, __webpack_require__) {
      exports = module.exports = __webpack_require__("2350")(false);
      // imports

      // module
      exports.push([
        module.i,
        "\n.favorite-button[data-v-c21b77e4]{background-color:transparent;border:none;box-shadow:none;cursor:pointer;height:44px;outline:none;padding:0;text-align:center;text-decoration:none;text-transform:uppercase;transition:all .2s ease-in-out;width:44px\n}\n.favorite-button[data-v-c21b77e4]:hover{transform:scale(1.3)\n}\n.favorite-button .fa-icon[data-v-c21b77e4]{color:#b7b7b7;height:2em;max-height:100%;max-width:100%;width:auto\n}",
        ""
      ]);

      // exports

      /***/
    },

    /***/ "01f9": /***/ function(module, exports, __webpack_require__) {
      "use strict";

      var LIBRARY = __webpack_require__("2d00");
      var $export = __webpack_require__("5ca1");
      var redefine = __webpack_require__("2aba");
      var hide = __webpack_require__("32e9");
      var Iterators = __webpack_require__("84f2");
      var $iterCreate = __webpack_require__("41a0");
      var setToStringTag = __webpack_require__("7f20");
      var getPrototypeOf = __webpack_require__("38fd");
      var ITERATOR = __webpack_require__("2b4c")("iterator");
      var BUGGY = !([].keys && "next" in [].keys()); // Safari has buggy iterators w/o `next`
      var FF_ITERATOR = "@@iterator";
      var KEYS = "keys";
      var VALUES = "values";

      var returnThis = function() {
        return this;
      };

      module.exports = function(
        Base,
        NAME,
        Constructor,
        next,
        DEFAULT,
        IS_SET,
        FORCED
      ) {
        $iterCreate(Constructor, NAME, next);
        var getMethod = function(kind) {
          if (!BUGGY && kind in proto) return proto[kind];
          switch (kind) {
            case KEYS:
              return function keys() {
                return new Constructor(this, kind);
              };
            case VALUES:
              return function values() {
                return new Constructor(this, kind);
              };
          }
          return function entries() {
            return new Constructor(this, kind);
          };
        };
        var TAG = NAME + " Iterator";
        var DEF_VALUES = DEFAULT == VALUES;
        var VALUES_BUG = false;
        var proto = Base.prototype;
        var $native =
          proto[ITERATOR] || proto[FF_ITERATOR] || (DEFAULT && proto[DEFAULT]);
        var $default = $native || getMethod(DEFAULT);
        var $entries = DEFAULT
          ? !DEF_VALUES
            ? $default
            : getMethod("entries")
          : undefined;
        var $anyNative = NAME == "Array" ? proto.entries || $native : $native;
        var methods, key, IteratorPrototype;
        // Fix native
        if ($anyNative) {
          IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
          if (
            IteratorPrototype !== Object.prototype &&
            IteratorPrototype.next
          ) {
            // Set @@toStringTag to native iterators
            setToStringTag(IteratorPrototype, TAG, true);
            // fix for some old engines
            if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != "function")
              hide(IteratorPrototype, ITERATOR, returnThis);
          }
        }
        // fix Array#{values, @@iterator}.name in V8 / FF
        if (DEF_VALUES && $native && $native.name !== VALUES) {
          VALUES_BUG = true;
          $default = function values() {
            return $native.call(this);
          };
        }
        // Define iterator
        if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
          hide(proto, ITERATOR, $default);
        }
        // Plug for library
        Iterators[NAME] = $default;
        Iterators[TAG] = returnThis;
        if (DEFAULT) {
          methods = {
            values: DEF_VALUES ? $default : getMethod(VALUES),
            keys: IS_SET ? $default : getMethod(KEYS),
            entries: $entries
          };
          if (FORCED)
            for (key in methods) {
              if (!(key in proto)) redefine(proto, key, methods[key]);
            }
          else
            $export(
              $export.P + $export.F * (BUGGY || VALUES_BUG),
              NAME,
              methods
            );
        }
        return methods;
      };

      /***/
    },

    /***/ "0201": /***/ function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentUser_vue_vue_type_style_index_0_id_29b101ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "381e"
      );
      /* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentUser_vue_vue_type_style_index_0_id_29b101ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentUser_vue_vue_type_style_index_0_id_29b101ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentUser_vue_vue_type_style_index_0_id_29b101ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__)
        if (__WEBPACK_IMPORT_KEY__ !== "default")
          (function(key) {
            __webpack_require__.d(__webpack_exports__, key, function() {
              return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentUser_vue_vue_type_style_index_0_id_29b101ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
                key
              ];
            });
          })(__WEBPACK_IMPORT_KEY__);
      /* harmony default export */ __webpack_exports__["default"] =
        _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentUser_vue_vue_type_style_index_0_id_29b101ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a;

      /***/
    },

    /***/ "026e": /***/ function(module, exports, __webpack_require__) {
      // style-loader: Adds some css to the DOM by adding a <style> tag

      // load the styles
      var content = __webpack_require__("5263");
      if (typeof content === "string") content = [[module.i, content, ""]];
      if (content.locals) module.exports = content.locals;
      // add CSS to Shadow Root
      var add = __webpack_require__("35d6").default;
      module.exports.__inject__ = function(shadowRoot) {
        add("1d4ebc0d", content, shadowRoot);
      };

      /***/
    },

    /***/ "0447": /***/ function(module, exports, __webpack_require__) {
      // style-loader: Adds some css to the DOM by adding a <style> tag

      // load the styles
      var content = __webpack_require__("83e6");
      if (typeof content === "string") content = [[module.i, content, ""]];
      if (content.locals) module.exports = content.locals;
      // add CSS to Shadow Root
      var add = __webpack_require__("35d6").default;
      module.exports.__inject__ = function(shadowRoot) {
        add("0469a831", content, shadowRoot);
      };

      /***/
    },

    /***/ "0504": /***/ function(module, exports, __webpack_require__) {
      // style-loader: Adds some css to the DOM by adding a <style> tag

      // load the styles
      var content = __webpack_require__("0033");
      if (typeof content === "string") content = [[module.i, content, ""]];
      if (content.locals) module.exports = content.locals;
      // add CSS to Shadow Root
      var add = __webpack_require__("35d6").default;
      module.exports.__inject__ = function(shadowRoot) {
        add("17758424", content, shadowRoot);
      };

      /***/
    },

    /***/ "088a": /***/ function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HamburgerMenu_vue_vue_type_style_index_0_id_7dc7c0fe_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "be87"
      );
      /* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HamburgerMenu_vue_vue_type_style_index_0_id_7dc7c0fe_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HamburgerMenu_vue_vue_type_style_index_0_id_7dc7c0fe_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HamburgerMenu_vue_vue_type_style_index_0_id_7dc7c0fe_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__)
        if (__WEBPACK_IMPORT_KEY__ !== "default")
          (function(key) {
            __webpack_require__.d(__webpack_exports__, key, function() {
              return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HamburgerMenu_vue_vue_type_style_index_0_id_7dc7c0fe_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__[
                key
              ];
            });
          })(__WEBPACK_IMPORT_KEY__);
      /* harmony default export */ __webpack_exports__["default"] =
        _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HamburgerMenu_vue_vue_type_style_index_0_id_7dc7c0fe_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default.a;

      /***/
    },

    /***/ "08e0": /***/ function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentFavorites_vue_vue_type_style_index_0_id_7319541c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "267f"
      );
      /* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentFavorites_vue_vue_type_style_index_0_id_7319541c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentFavorites_vue_vue_type_style_index_0_id_7319541c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentFavorites_vue_vue_type_style_index_0_id_7319541c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__)
        if (__WEBPACK_IMPORT_KEY__ !== "default")
          (function(key) {
            __webpack_require__.d(__webpack_exports__, key, function() {
              return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentFavorites_vue_vue_type_style_index_0_id_7319541c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
                key
              ];
            });
          })(__WEBPACK_IMPORT_KEY__);
      /* harmony default export */ __webpack_exports__["default"] =
        _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentFavorites_vue_vue_type_style_index_0_id_7319541c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a;

      /***/
    },

    /***/ "0ad5": /***/ function(module, exports, __webpack_require__) {
      exports = module.exports = __webpack_require__("2350")(false);
      // imports

      // module
      exports.push([module.i, "", ""]);

      // exports

      /***/
    },

    /***/ "0bfb": /***/ function(module, exports, __webpack_require__) {
      "use strict";

      // 21.2.5.3 get RegExp.prototype.flags
      var anObject = __webpack_require__("cb7c");
      module.exports = function() {
        var that = anObject(this);
        var result = "";
        if (that.global) result += "g";
        if (that.ignoreCase) result += "i";
        if (that.multiline) result += "m";
        if (that.unicode) result += "u";
        if (that.sticky) result += "y";
        return result;
      };

      /***/
    },

    /***/ "0d58": /***/ function(module, exports, __webpack_require__) {
      // 19.1.2.14 / 15.2.3.14 Object.keys(O)
      var $keys = __webpack_require__("ce10");
      var enumBugKeys = __webpack_require__("e11e");

      module.exports =
        Object.keys ||
        function keys(O) {
          return $keys(O, enumBugKeys);
        };

      /***/
    },

    /***/ "1169": /***/ function(module, exports, __webpack_require__) {
      // 7.2.2 IsArray(argument)
      var cof = __webpack_require__("2d95");
      module.exports =
        Array.isArray ||
        function isArray(arg) {
          return cof(arg) == "Array";
        };

      /***/
    },

    /***/ "11e9": /***/ function(module, exports, __webpack_require__) {
      var pIE = __webpack_require__("52a7");
      var createDesc = __webpack_require__("4630");
      var toIObject = __webpack_require__("6821");
      var toPrimitive = __webpack_require__("6a99");
      var has = __webpack_require__("69a8");
      var IE8_DOM_DEFINE = __webpack_require__("c69a");
      var gOPD = Object.getOwnPropertyDescriptor;

      exports.f = __webpack_require__("9e1e")
        ? gOPD
        : function getOwnPropertyDescriptor(O, P) {
            O = toIObject(O);
            P = toPrimitive(P, true);
            if (IE8_DOM_DEFINE)
              try {
                return gOPD(O, P);
              } catch (e) {
                /* empty */
              }
            if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
          };

      /***/
    },

    /***/ "12aa": /***/ function(module, exports, __webpack_require__) {
      "use strict";

      var Cancel = __webpack_require__("6b8a");

      /**
       * A `CancelToken` is an object that can be used to request cancellation of an operation.
       *
       * @class
       * @param {Function} executor The executor function.
       */
      function CancelToken(executor) {
        if (typeof executor !== "function") {
          throw new TypeError("executor must be a function.");
        }

        var resolvePromise;
        this.promise = new Promise(function promiseExecutor(resolve) {
          resolvePromise = resolve;
        });

        var token = this;
        executor(function cancel(message) {
          if (token.reason) {
            // Cancellation has already been requested
            return;
          }

          token.reason = new Cancel(message);
          resolvePromise(token.reason);
        });
      }

      /**
       * Throws a `Cancel` if cancellation has been requested.
       */
      CancelToken.prototype.throwIfRequested = function throwIfRequested() {
        if (this.reason) {
          throw this.reason;
        }
      };

      /**
       * Returns an object that contains a new `CancelToken` and a function that, when called,
       * cancels the `CancelToken`.
       */
      CancelToken.source = function source() {
        var cancel;
        var token = new CancelToken(function executor(c) {
          cancel = c;
        });
        return {
          token: token,
          cancel: cancel
        };
      };

      module.exports = CancelToken;

      /***/
    },

    /***/ "1495": /***/ function(module, exports, __webpack_require__) {
      var dP = __webpack_require__("86cc");
      var anObject = __webpack_require__("cb7c");
      var getKeys = __webpack_require__("0d58");

      module.exports = __webpack_require__("9e1e")
        ? Object.defineProperties
        : function defineProperties(O, Properties) {
            anObject(O);
            var keys = getKeys(Properties);
            var length = keys.length;
            var i = 0;
            var P;
            while (length > i) dP.f(O, (P = keys[i++]), Properties[P]);
            return O;
          };

      /***/
    },

    /***/ "184a": /***/ function(module, exports, __webpack_require__) {
      "use strict";

      module.exports = function isCancel(value) {
        return !!(value && value.__CANCEL__);
      };

      /***/
    },

    /***/ "1968": /***/ function(module, exports) {
      /**
       * The code was extracted from:
       * https://github.com/davidchambers/Base64.js
       */

      var chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

      function InvalidCharacterError(message) {
        this.message = message;
      }

      InvalidCharacterError.prototype = new Error();
      InvalidCharacterError.prototype.name = "InvalidCharacterError";

      function polyfill(input) {
        var str = String(input).replace(/=+$/, "");
        if (str.length % 4 == 1) {
          throw new InvalidCharacterError(
            "'atob' failed: The string to be decoded is not correctly encoded."
          );
        }
        for (
          // initialize result and counters
          var bc = 0, bs, buffer, idx = 0, output = "";
          // get next character
          (buffer = str.charAt(idx++));
          // character found in table? initialize bit storage and add its ascii value;
          ~buffer &&
          ((bs = bc % 4 ? bs * 64 + buffer : buffer),
          // and if not first of each 4 characters,
          // convert the first 8 bits to one ascii character
          bc++ % 4)
            ? (output += String.fromCharCode(255 & (bs >> ((-2 * bc) & 6))))
            : 0
        ) {
          // try to find character in table (0-63, not found => -1)
          buffer = chars.indexOf(buffer);
        }
        return output;
      }

      module.exports =
        (typeof window !== "undefined" &&
          window.atob &&
          window.atob.bind(window)) ||
        polyfill;

      /***/
    },

    /***/ "199f": /***/ function(module, exports, __webpack_require__) {
      // style-loader: Adds some css to the DOM by adding a <style> tag

      // load the styles
      var content = __webpack_require__("6840");
      if (typeof content === "string") content = [[module.i, content, ""]];
      if (content.locals) module.exports = content.locals;
      // add CSS to Shadow Root
      var add = __webpack_require__("35d6").default;
      module.exports.__inject__ = function(shadowRoot) {
        add("cd6527a0", content, shadowRoot);
      };

      /***/
    },

    /***/ "1eb2": /***/ function(module, exports, __webpack_require__) {
      // This file is imported into lib/wc client bundles.

      if (typeof window !== "undefined") {
        var i;
        if (
          (i = window.document.currentScript) &&
          (i = i.src.match(/(.+\/)[^/]+\.js$/))
        ) {
          __webpack_require__.p = i[1]; // eslint-disable-line
        }
      }

      /***/
    },

    /***/ "214f": /***/ function(module, exports, __webpack_require__) {
      "use strict";

      var hide = __webpack_require__("32e9");
      var redefine = __webpack_require__("2aba");
      var fails = __webpack_require__("79e5");
      var defined = __webpack_require__("be13");
      var wks = __webpack_require__("2b4c");

      module.exports = function(KEY, length, exec) {
        var SYMBOL = wks(KEY);
        var fns = exec(defined, SYMBOL, ""[KEY]);
        var strfn = fns[0];
        var rxfn = fns[1];
        if (
          fails(function() {
            var O = {};
            O[SYMBOL] = function() {
              return 7;
            };
            return ""[KEY](O) != 7;
          })
        ) {
          redefine(String.prototype, KEY, strfn);
          hide(
            RegExp.prototype,
            SYMBOL,
            length == 2
              ? // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
                // 21.2.5.11 RegExp.prototype[@@split](string, limit)
                function(string, arg) {
                  return rxfn.call(string, this, arg);
                }
              : // 21.2.5.6 RegExp.prototype[@@match](string)
                // 21.2.5.9 RegExp.prototype[@@search](string)
                function(string) {
                  return rxfn.call(string, this);
                }
          );
        }
      };

      /***/
    },

    /***/ "230e": /***/ function(module, exports, __webpack_require__) {
      var isObject = __webpack_require__("d3f4");
      var document = __webpack_require__("7726").document;
      // typeof document.createElement is 'object' in old IE
      var is = isObject(document) && isObject(document.createElement);
      module.exports = function(it) {
        return is ? document.createElement(it) : {};
      };

      /***/
    },

    /***/ "2350": /***/ function(module, exports) {
      /*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
      // css base code, injected by the css-loader
      module.exports = function(useSourceMap) {
        var list = [];

        // return the list of modules as css string
        list.toString = function toString() {
          return this.map(function(item) {
            var content = cssWithMappingToString(item, useSourceMap);
            if (item[2]) {
              return "@media " + item[2] + "{" + content + "}";
            } else {
              return content;
            }
          }).join("");
        };

        // import a list of modules into the list
        list.i = function(modules, mediaQuery) {
          if (typeof modules === "string") modules = [[null, modules, ""]];
          var alreadyImportedModules = {};
          for (var i = 0; i < this.length; i++) {
            var id = this[i][0];
            if (typeof id === "number") alreadyImportedModules[id] = true;
          }
          for (i = 0; i < modules.length; i++) {
            var item = modules[i];
            // skip already imported module
            // this implementation is not 100% perfect for weird media query combinations
            //  when a module is imported multiple times with different media queries.
            //  I hope this will never occur (Hey this way we have smaller bundles)
            if (
              typeof item[0] !== "number" ||
              !alreadyImportedModules[item[0]]
            ) {
              if (mediaQuery && !item[2]) {
                item[2] = mediaQuery;
              } else if (mediaQuery) {
                item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
              }
              list.push(item);
            }
          }
        };
        return list;
      };

      function cssWithMappingToString(item, useSourceMap) {
        var content = item[1] || "";
        var cssMapping = item[3];
        if (!cssMapping) {
          return content;
        }

        if (useSourceMap && typeof btoa === "function") {
          var sourceMapping = toComment(cssMapping);
          var sourceURLs = cssMapping.sources.map(function(source) {
            return "/*# sourceURL=" + cssMapping.sourceRoot + source + " */";
          });

          return [content]
            .concat(sourceURLs)
            .concat([sourceMapping])
            .join("\n");
        }

        return [content].join("\n");
      }

      // Adapted from convert-source-map (MIT)
      function toComment(sourceMap) {
        // eslint-disable-next-line no-undef
        var base64 = btoa(
          unescape(encodeURIComponent(JSON.stringify(sourceMap)))
        );
        var data =
          "sourceMappingURL=data:application/json;charset=utf-8;base64," +
          base64;

        return "/*# " + data + " */";
      }

      /***/
    },

    /***/ "245c": /***/ function(module, exports, __webpack_require__) {
      exports = module.exports = __webpack_require__("2350")(false);
      // imports

      // module
      exports.push([
        module.i,
        "\n.content-menu[data-v-1421cbfb]{background-color:#d0d0d0;min-width:280px\n}\n.content-menu.toggler-menu[data-v-1421cbfb]{animation:fade .6s;left:0;min-heigth:100vh;opacity:0;position:absolute;top:0;transition:opacity .6s,visibility .6s;visibility:hidden;width:100%;z-index:1001\n}\n.content-menu.active-menu[data-v-1421cbfb]{opacity:1;visibility:visible\n}\n.content-menu *[data-v-1421cbfb]{font-family:Roboto,sans-serif\n}\n.content-menu>section[data-v-1421cbfb]{padding:.5em 1.5em\n}\n.content-menu header[data-v-1421cbfb]{overflow:hidden;position:relative\n}\n.content-menu header[data-v-1421cbfb]>:not(:last-child){position:relative;z-index:1\n}\n.content-menu header>.wrapper[data-v-1421cbfb]{display:flex;flex-flow:row nowrap\n}\n.content-menu header>.wrapper .content-favorites[data-v-1421cbfb]{filter:none;flex-grow:1;overflow:hidden\n}\n.content-menu header div.background[data-v-1421cbfb]{background-position:50%;background-repeat:no-repeat;background-size:cover;filter:blur(7px);height:110%;overflow:hidden;position:absolute;top:0;width:110%;z-index:0\n}\n.content-menu.small[data-v-1421cbfb]{background-color:#545454\n}\n.content-menu.small header div.background[data-v-1421cbfb]{background-image:none\n}\n.content-menu.small header .header-buttons[data-v-1421cbfb]{position:absolute;width:100%;z-index:2\n}\n.content-menu.small header>.wrapper[data-v-1421cbfb]{flex-flow:row wrap\n}",
        ""
      ]);

      // exports

      /***/
    },

    /***/ "2621": /***/ function(module, exports) {
      exports.f = Object.getOwnPropertySymbols;

      /***/
    },

    /***/ "267f": /***/ function(module, exports, __webpack_require__) {
      // style-loader: Adds some css to the DOM by adding a <style> tag

      // load the styles
      var content = __webpack_require__("c9ff");
      if (typeof content === "string") content = [[module.i, content, ""]];
      if (content.locals) module.exports = content.locals;
      // add CSS to Shadow Root
      var add = __webpack_require__("35d6").default;
      module.exports.__inject__ = function(shadowRoot) {
        add("0e13fe9e", content, shadowRoot);
      };

      /***/
    },

    /***/ "28a5": /***/ function(module, exports, __webpack_require__) {
      // @@split logic
      __webpack_require__("214f")("split", 2, function(defined, SPLIT, $split) {
        "use strict";
        var isRegExp = __webpack_require__("aae3");
        var _split = $split;
        var $push = [].push;
        var $SPLIT = "split";
        var LENGTH = "length";
        var LAST_INDEX = "lastIndex";
        if (
          "abbc"[$SPLIT](/(b)*/)[1] == "c" ||
          "test"[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
          "ab"[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
          "."[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
          "."[$SPLIT](/()()/)[LENGTH] > 1 ||
          ""[$SPLIT](/.?/)[LENGTH]
        ) {
          var NPCG = /()??/.exec("")[1] === undefined; // nonparticipating capturing group
          // based on es5-shim implementation, need to rework it
          $split = function(separator, limit) {
            var string = String(this);
            if (separator === undefined && limit === 0) return [];
            // If `separator` is not a regex, use native split
            if (!isRegExp(separator))
              return _split.call(string, separator, limit);
            var output = [];
            var flags =
              (separator.ignoreCase ? "i" : "") +
              (separator.multiline ? "m" : "") +
              (separator.unicode ? "u" : "") +
              (separator.sticky ? "y" : "");
            var lastLastIndex = 0;
            var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
            // Make `global` and avoid `lastIndex` issues by working with a copy
            var separatorCopy = new RegExp(separator.source, flags + "g");
            var separator2, match, lastIndex, lastLength, i;
            // Doesn't need flags gy, but they don't hurt
            if (!NPCG)
              separator2 = new RegExp(
                "^" + separatorCopy.source + "$(?!\\s)",
                flags
              );
            while ((match = separatorCopy.exec(string))) {
              // `separatorCopy.lastIndex` is not reliable cross-browser
              lastIndex = match.index + match[0][LENGTH];
              if (lastIndex > lastLastIndex) {
                output.push(string.slice(lastLastIndex, match.index));
                // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
                // eslint-disable-next-line no-loop-func
                if (!NPCG && match[LENGTH] > 1)
                  match[0].replace(separator2, function() {
                    for (i = 1; i < arguments[LENGTH] - 2; i++)
                      if (arguments[i] === undefined) match[i] = undefined;
                  });
                if (match[LENGTH] > 1 && match.index < string[LENGTH])
                  $push.apply(output, match.slice(1));
                lastLength = match[0][LENGTH];
                lastLastIndex = lastIndex;
                if (output[LENGTH] >= splitLimit) break;
              }
              if (separatorCopy[LAST_INDEX] === match.index)
                separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
            }
            if (lastLastIndex === string[LENGTH]) {
              if (lastLength || !separatorCopy.test("")) output.push("");
            } else output.push(string.slice(lastLastIndex));
            return output[LENGTH] > splitLimit
              ? output.slice(0, splitLimit)
              : output;
          };
          // Chakra, V8
        } else if ("0"[$SPLIT](undefined, 0)[LENGTH]) {
          $split = function(separator, limit) {
            return separator === undefined && limit === 0
              ? []
              : _split.call(this, separator, limit);
          };
        }
        // 21.1.3.17 String.prototype.split(separator, limit)
        return [
          function split(separator, limit) {
            var O = defined(this);
            var fn = separator == undefined ? undefined : separator[SPLIT];
            return fn !== undefined
              ? fn.call(separator, O, limit)
              : $split.call(String(O), separator, limit);
          },
          $split
        ];
      });

      /***/
    },

    /***/ "2aba": /***/ function(module, exports, __webpack_require__) {
      var global = __webpack_require__("7726");
      var hide = __webpack_require__("32e9");
      var has = __webpack_require__("69a8");
      var SRC = __webpack_require__("ca5a")("src");
      var TO_STRING = "toString";
      var $toString = Function[TO_STRING];
      var TPL = ("" + $toString).split(TO_STRING);

      __webpack_require__("8378").inspectSource = function(it) {
        return $toString.call(it);
      };

      (module.exports = function(O, key, val, safe) {
        var isFunction = typeof val == "function";
        if (isFunction) has(val, "name") || hide(val, "name", key);
        if (O[key] === val) return;
        if (isFunction)
          has(val, SRC) ||
            hide(val, SRC, O[key] ? "" + O[key] : TPL.join(String(key)));
        if (O === global) {
          O[key] = val;
        } else if (!safe) {
          delete O[key];
          hide(O, key, val);
        } else if (O[key]) {
          O[key] = val;
        } else {
          hide(O, key, val);
        }
        // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
      })(Function.prototype, TO_STRING, function toString() {
        return (typeof this == "function" && this[SRC]) || $toString.call(this);
      });

      /***/
    },

    /***/ "2aeb": /***/ function(module, exports, __webpack_require__) {
      // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
      var anObject = __webpack_require__("cb7c");
      var dPs = __webpack_require__("1495");
      var enumBugKeys = __webpack_require__("e11e");
      var IE_PROTO = __webpack_require__("613b")("IE_PROTO");
      var Empty = function() {
        /* empty */
      };
      var PROTOTYPE = "prototype";

      // Create object with fake `null` prototype: use iframe Object with cleared prototype
      var createDict = function() {
        // Thrash, waste and sodomy: IE GC bug
        var iframe = __webpack_require__("230e")("iframe");
        var i = enumBugKeys.length;
        var lt = "<";
        var gt = ">";
        var iframeDocument;
        iframe.style.display = "none";
        __webpack_require__("fab2").appendChild(iframe);
        iframe.src = "javascript:"; // eslint-disable-line no-script-url
        // createDict = iframe.contentWindow.Object;
        // html.removeChild(iframe);
        iframeDocument = iframe.contentWindow.document;
        iframeDocument.open();
        iframeDocument.write(
          lt + "script" + gt + "document.F=Object" + lt + "/script" + gt
        );
        iframeDocument.close();
        createDict = iframeDocument.F;
        while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
        return createDict();
      };

      module.exports =
        Object.create ||
        function create(O, Properties) {
          var result;
          if (O !== null) {
            Empty[PROTOTYPE] = anObject(O);
            result = new Empty();
            Empty[PROTOTYPE] = null;
            // add "__proto__" for Object.getPrototypeOf polyfill
            result[IE_PROTO] = O;
          } else result = createDict();
          return Properties === undefined ? result : dPs(result, Properties);
        };

      /***/
    },

    /***/ "2b4c": /***/ function(module, exports, __webpack_require__) {
      var store = __webpack_require__("5537")("wks");
      var uid = __webpack_require__("ca5a");
      var Symbol = __webpack_require__("7726").Symbol;
      var USE_SYMBOL = typeof Symbol == "function";

      var $exports = (module.exports = function(name) {
        return (
          store[name] ||
          (store[name] =
            (USE_SYMBOL && Symbol[name]) ||
            (USE_SYMBOL ? Symbol : uid)("Symbol." + name))
        );
      });

      $exports.store = store;

      /***/
    },

    /***/ "2bc3": /***/ function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentMenu_vue_vue_type_style_index_0_id_1b9624ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "199f"
      );
      /* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentMenu_vue_vue_type_style_index_0_id_1b9624ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentMenu_vue_vue_type_style_index_0_id_1b9624ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentMenu_vue_vue_type_style_index_0_id_1b9624ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__)
        if (__WEBPACK_IMPORT_KEY__ !== "default")
          (function(key) {
            __webpack_require__.d(__webpack_exports__, key, function() {
              return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentMenu_vue_vue_type_style_index_0_id_1b9624ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
                key
              ];
            });
          })(__WEBPACK_IMPORT_KEY__);
      /* harmony default export */ __webpack_exports__["default"] =
        _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentMenu_vue_vue_type_style_index_0_id_1b9624ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a;

      /***/
    },

    /***/ "2d00": /***/ function(module, exports) {
      module.exports = false;

      /***/
    },

    /***/ "2d95": /***/ function(module, exports) {
      var toString = {}.toString;

      module.exports = function(it) {
        return toString.call(it).slice(8, -1);
      };

      /***/
    },

    /***/ "2f21": /***/ function(module, exports, __webpack_require__) {
      "use strict";

      var fails = __webpack_require__("79e5");

      module.exports = function(method, arg) {
        return (
          !!method &&
          fails(function() {
            // eslint-disable-next-line no-useless-call
            arg
              ? method.call(
                  null,
                  function() {
                    /* empty */
                  },
                  1
                )
              : method.call(null);
          })
        );
      };

      /***/
    },

    /***/ "30b0": /***/ function(module, exports, __webpack_require__) {
      "use strict";

      var utils = __webpack_require__("8805");
      var transformData = __webpack_require__("de1c");
      var isCancel = __webpack_require__("184a");
      var defaults = __webpack_require__("ba5d");
      var isAbsoluteURL = __webpack_require__("5e58");
      var combineURLs = __webpack_require__("475f");

      /**
       * Throws a `Cancel` if cancellation has been requested.
       */
      function throwIfCancellationRequested(config) {
        if (config.cancelToken) {
          config.cancelToken.throwIfRequested();
        }
      }

      /**
       * Dispatch a request to the server using the configured adapter.
       *
       * @param {object} config The config that is to be used for the request
       * @returns {Promise} The Promise to be fulfilled
       */
      module.exports = function dispatchRequest(config) {
        throwIfCancellationRequested(config);

        // Support baseURL config
        if (config.baseURL && !isAbsoluteURL(config.url)) {
          config.url = combineURLs(config.baseURL, config.url);
        }

        // Ensure headers exist
        config.headers = config.headers || {};

        // Transform request data
        config.data = transformData(
          config.data,
          config.headers,
          config.transformRequest
        );

        // Flatten headers
        config.headers = utils.merge(
          config.headers.common || {},
          config.headers[config.method] || {},
          config.headers || {}
        );

        utils.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          function cleanHeaderConfig(method) {
            delete config.headers[method];
          }
        );

        var adapter = config.adapter || defaults.adapter;

        return adapter(config).then(
          function onAdapterResolution(response) {
            throwIfCancellationRequested(config);

            // Transform response data
            response.data = transformData(
              response.data,
              response.headers,
              config.transformResponse
            );

            return response;
          },
          function onAdapterRejection(reason) {
            if (!isCancel(reason)) {
              throwIfCancellationRequested(config);

              // Transform response data
              if (reason && reason.response) {
                reason.response.data = transformData(
                  reason.response.data,
                  reason.response.headers,
                  config.transformResponse
                );
              }
            }

            return Promise.reject(reason);
          }
        );
      };

      /***/
    },

    /***/ "32e9": /***/ function(module, exports, __webpack_require__) {
      var dP = __webpack_require__("86cc");
      var createDesc = __webpack_require__("4630");
      module.exports = __webpack_require__("9e1e")
        ? function(object, key, value) {
            return dP.f(object, key, createDesc(1, value));
          }
        : function(object, key, value) {
            object[key] = value;
            return object;
          };

      /***/
    },

    /***/ "33f8": /***/ function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ellipsis_vue_vue_type_style_index_0_id_6b799a38_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "3b48"
      );
      /* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ellipsis_vue_vue_type_style_index_0_id_6b799a38_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ellipsis_vue_vue_type_style_index_0_id_6b799a38_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ellipsis_vue_vue_type_style_index_0_id_6b799a38_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__)
        if (__WEBPACK_IMPORT_KEY__ !== "default")
          (function(key) {
            __webpack_require__.d(__webpack_exports__, key, function() {
              return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ellipsis_vue_vue_type_style_index_0_id_6b799a38_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[
                key
              ];
            });
          })(__WEBPACK_IMPORT_KEY__);
      /* harmony default export */ __webpack_exports__["default"] =
        _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ellipsis_vue_vue_type_style_index_0_id_6b799a38_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a;

      /***/
    },

    /***/ "35d6": /***/ function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);

      // CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
      /**
       * Translates the list format produced by css-loader into something
       * easier to manipulate.
       */
      function listToStyles(parentId, list) {
        var styles = [];
        var newStyles = {};
        for (var i = 0; i < list.length; i++) {
          var item = list[i];
          var id = item[0];
          var css = item[1];
          var media = item[2];
          var sourceMap = item[3];
          var part = {
            id: parentId + ":" + i,
            css: css,
            media: media,
            sourceMap: sourceMap
          };
          if (!newStyles[id]) {
            styles.push((newStyles[id] = { id: id, parts: [part] }));
          } else {
            newStyles[id].parts.push(part);
          }
        }
        return styles;
      }

      // CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesShadow.js
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "default",
        function() {
          return addStylesToShadowDOM;
        }
      );

      function addStylesToShadowDOM(parentId, list, shadowRoot) {
        var styles = listToStyles(parentId, list);
        addStyles(styles, shadowRoot);
      }

      /*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

      function addStyles(styles /* Array<StyleObject> */, shadowRoot) {
        const injectedStyles =
          shadowRoot._injectedStyles || (shadowRoot._injectedStyles = {});
        for (var i = 0; i < styles.length; i++) {
          var item = styles[i];
          var style = injectedStyles[item.id];
          if (!style) {
            for (var j = 0; j < item.parts.length; j++) {
              addStyle(item.parts[j], shadowRoot);
            }
            injectedStyles[item.id] = true;
          }
        }
      }

      function createStyleElement(shadowRoot) {
        var styleElement = document.createElement("style");
        styleElement.type = "text/css";
        shadowRoot.appendChild(styleElement);
        return styleElement;
      }

      function addStyle(obj /* StyleObjectPart */, shadowRoot) {
        var styleElement = createStyleElement(shadowRoot);
        var css = obj.css;
        var media = obj.media;
        var sourceMap = obj.sourceMap;

        if (media) {
          styleElement.setAttribute("media", media);
        }

        if (sourceMap) {
          // https://developer.chrome.com/devtools/docs/javascript-debugging
          // this makes source maps inside style tags work properly in Chrome
          css += "\n/*# sourceURL=" + sourceMap.sources[0] + " */";
          // http://stackoverflow.com/a/26603875
          css +=
            "\n/*# sourceMappingURL=data:application/json;base64," +
            btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) +
            " */";
        }

        if (styleElement.styleSheet) {
          styleElement.styleSheet.cssText = css;
        } else {
          while (styleElement.firstChild) {
            styleElement.removeChild(styleElement.firstChild);
          }
          styleElement.appendChild(document.createTextNode(css));
        }
      }

      /***/
    },

    /***/ "37c8": /***/ function(module, exports, __webpack_require__) {
      exports.f = __webpack_require__("2b4c");

      /***/
    },

    /***/ "381e": /***/ function(module, exports, __webpack_require__) {
      // style-loader: Adds some css to the DOM by adding a <style> tag

      // load the styles
      var content = __webpack_require__("cfbc");
      if (typeof content === "string") content = [[module.i, content, ""]];
      if (content.locals) module.exports = content.locals;
      // add CSS to Shadow Root
      var add = __webpack_require__("35d6").default;
      module.exports.__inject__ = function(shadowRoot) {
        add("a9daae56", content, shadowRoot);
      };

      /***/
    },

    /***/ "3846": /***/ function(module, exports, __webpack_require__) {
      // 21.2.5.3 get RegExp.prototype.flags()
      if (__webpack_require__("9e1e") && /./g.flags != "g")
        __webpack_require__("86cc").f(RegExp.prototype, "flags", {
          configurable: true,
          get: __webpack_require__("0bfb")
        });

      /***/
    },

    /***/ "38fd": /***/ function(module, exports, __webpack_require__) {
      // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
      var has = __webpack_require__("69a8");
      var toObject = __webpack_require__("4bf8");
      var IE_PROTO = __webpack_require__("613b")("IE_PROTO");
      var ObjectProto = Object.prototype;

      module.exports =
        Object.getPrototypeOf ||
        function(O) {
          O = toObject(O);
          if (has(O, IE_PROTO)) return O[IE_PROTO];
          if (
            typeof O.constructor == "function" &&
            O instanceof O.constructor
          ) {
            return O.constructor.prototype;
          }
          return O instanceof Object ? ObjectProto : null;
        };

      /***/
    },

    /***/ "3a72": /***/ function(module, exports, __webpack_require__) {
      var global = __webpack_require__("7726");
      var core = __webpack_require__("8378");
      var LIBRARY = __webpack_require__("2d00");
      var wksExt = __webpack_require__("37c8");
      var defineProperty = __webpack_require__("86cc").f;
      module.exports = function(name) {
        var $Symbol =
          core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
        if (name.charAt(0) != "_" && !(name in $Symbol))
          defineProperty($Symbol, name, { value: wksExt.f(name) });
      };

      /***/
    },

    /***/ "3b48": /***/ function(module, exports, __webpack_require__) {
      // style-loader: Adds some css to the DOM by adding a <style> tag

      // load the styles
      var content = __webpack_require__("0ad5");
      if (typeof content === "string") content = [[module.i, content, ""]];
      if (content.locals) module.exports = content.locals;
      // add CSS to Shadow Root
      var add = __webpack_require__("35d6").default;
      module.exports.__inject__ = function(shadowRoot) {
        add("52377e3d", content, shadowRoot);
      };

      /***/
    },

    /***/ "3fea": /***/ function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentUser_vue_vue_type_style_index_0_id_30f50373_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "9fd2"
      );
      /* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentUser_vue_vue_type_style_index_0_id_30f50373_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentUser_vue_vue_type_style_index_0_id_30f50373_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentUser_vue_vue_type_style_index_0_id_30f50373_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__)
        if (__WEBPACK_IMPORT_KEY__ !== "default")
          (function(key) {
            __webpack_require__.d(__webpack_exports__, key, function() {
              return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentUser_vue_vue_type_style_index_0_id_30f50373_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__[
                key
              ];
            });
          })(__WEBPACK_IMPORT_KEY__);
      /* harmony default export */ __webpack_exports__["default"] =
        _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentUser_vue_vue_type_style_index_0_id_30f50373_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default.a;

      /***/
    },

    /***/ "4063": /***/ function(module, exports, __webpack_require__) {
      // style-loader: Adds some css to the DOM by adding a <style> tag

      // load the styles
      var content = __webpack_require__("57fa");
      if (typeof content === "string") content = [[module.i, content, ""]];
      if (content.locals) module.exports = content.locals;
      // add CSS to Shadow Root
      var add = __webpack_require__("35d6").default;
      module.exports.__inject__ = function(shadowRoot) {
        add("9e4f48b2", content, shadowRoot);
      };

      /***/
    },

    /***/ "4181": /***/ function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentGrid_vue_vue_type_style_index_0_id_6d2ae9c4_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "0504"
      );
      /* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentGrid_vue_vue_type_style_index_0_id_6d2ae9c4_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentGrid_vue_vue_type_style_index_0_id_6d2ae9c4_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentGrid_vue_vue_type_style_index_0_id_6d2ae9c4_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__)
        if (__WEBPACK_IMPORT_KEY__ !== "default")
          (function(key) {
            __webpack_require__.d(__webpack_exports__, key, function() {
              return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentGrid_vue_vue_type_style_index_0_id_6d2ae9c4_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__[
                key
              ];
            });
          })(__WEBPACK_IMPORT_KEY__);
      /* harmony default export */ __webpack_exports__["default"] =
        _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentGrid_vue_vue_type_style_index_0_id_6d2ae9c4_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default.a;

      /***/
    },

    /***/ "41a0": /***/ function(module, exports, __webpack_require__) {
      "use strict";

      var create = __webpack_require__("2aeb");
      var descriptor = __webpack_require__("4630");
      var setToStringTag = __webpack_require__("7f20");
      var IteratorPrototype = {};

      // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
      __webpack_require__("32e9")(
        IteratorPrototype,
        __webpack_require__("2b4c")("iterator"),
        function() {
          return this;
        }
      );

      module.exports = function(Constructor, NAME, next) {
        Constructor.prototype = create(IteratorPrototype, {
          next: descriptor(1, next)
        });
        setToStringTag(Constructor, NAME + " Iterator");
      };

      /***/
    },

    /***/ "4362": /***/ function(module, exports, __webpack_require__) {
      exports.nextTick = function nextTick(fn) {
        setTimeout(fn, 0);
      };

      exports.platform = exports.arch = exports.execPath = exports.title =
        "browser";
      exports.pid = 1;
      exports.browser = true;
      exports.env = {};
      exports.argv = [];

      exports.binding = function(name) {
        throw new Error("No such module. (Possibly not yet loaded)");
      };

      (function() {
        var cwd = "/";
        var path;
        exports.cwd = function() {
          return cwd;
        };
        exports.chdir = function(dir) {
          if (!path) path = __webpack_require__("df7c");
          cwd = path.resolve(dir, cwd);
        };
      })();

      exports.exit = exports.kill = exports.umask = exports.dlopen = exports.uptime = exports.memoryUsage = exports.uvCounters = function() {};
      exports.features = {};

      /***/
    },

    /***/ "441f": /***/ function(module, exports, __webpack_require__) {
      "use strict";

      var utils = __webpack_require__("8805");
      var settle = __webpack_require__("9d85");
      var buildURL = __webpack_require__("9aa3");
      var parseHeaders = __webpack_require__("782c");
      var isURLSameOrigin = __webpack_require__("83ba");
      var createError = __webpack_require__("9732");
      var btoa =
        (typeof window !== "undefined" &&
          window.btoa &&
          window.btoa.bind(window)) ||
        __webpack_require__("e458");

      module.exports = function xhrAdapter(config) {
        return new Promise(function dispatchXhrRequest(resolve, reject) {
          var requestData = config.data;
          var requestHeaders = config.headers;

          if (utils.isFormData(requestData)) {
            delete requestHeaders["Content-Type"]; // Let the browser set it
          }

          var request = new XMLHttpRequest();
          var loadEvent = "onreadystatechange";
          var xDomain = false;

          // For IE 8/9 CORS support
          // Only supports POST and GET calls and doesn't returns the response headers.
          // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
          if (
            "production" !== "test" &&
            typeof window !== "undefined" &&
            window.XDomainRequest &&
            !("withCredentials" in request) &&
            !isURLSameOrigin(config.url)
          ) {
            request = new window.XDomainRequest();
            loadEvent = "onload";
            xDomain = true;
            request.onprogress = function handleProgress() {};
            request.ontimeout = function handleTimeout() {};
          }

          // HTTP basic authentication
          if (config.auth) {
            var username = config.auth.username || "";
            var password = config.auth.password || "";
            requestHeaders.Authorization =
              "Basic " + btoa(username + ":" + password);
          }

          request.open(
            config.method.toUpperCase(),
            buildURL(config.url, config.params, config.paramsSerializer),
            true
          );

          // Set the request timeout in MS
          request.timeout = config.timeout;

          // Listen for ready state
          request[loadEvent] = function handleLoad() {
            if (!request || (request.readyState !== 4 && !xDomain)) {
              return;
            }

            // The request errored out and we didn't get a response, this will be
            // handled by onerror instead
            // With one exception: request that using file: protocol, most browsers
            // will return status as 0 even though it's a successful request
            if (
              request.status === 0 &&
              !(
                request.responseURL &&
                request.responseURL.indexOf("file:") === 0
              )
            ) {
              return;
            }

            // Prepare the response
            var responseHeaders =
              "getAllResponseHeaders" in request
                ? parseHeaders(request.getAllResponseHeaders())
                : null;
            var responseData =
              !config.responseType || config.responseType === "text"
                ? request.responseText
                : request.response;
            var response = {
              data: responseData,
              // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
              status: request.status === 1223 ? 204 : request.status,
              statusText:
                request.status === 1223 ? "No Content" : request.statusText,
              headers: responseHeaders,
              config: config,
              request: request
            };

            settle(resolve, reject, response);

            // Clean up request
            request = null;
          };

          // Handle low level network errors
          request.onerror = function handleError() {
            // Real errors are hidden from us by the browser
            // onerror should only fire if it's a network error
            reject(createError("Network Error", config, null, request));

            // Clean up request
            request = null;
          };

          // Handle timeout
          request.ontimeout = function handleTimeout() {
            reject(
              createError(
                "timeout of " + config.timeout + "ms exceeded",
                config,
                "ECONNABORTED",
                request
              )
            );

            // Clean up request
            request = null;
          };

          // Add xsrf header
          // This is only done if running in a standard browser environment.
          // Specifically not if we're in a web worker, or react-native.
          if (utils.isStandardBrowserEnv()) {
            var cookies = __webpack_require__("9e53");

            // Add xsrf header
            var xsrfValue =
              (config.withCredentials || isURLSameOrigin(config.url)) &&
              config.xsrfCookieName
                ? cookies.read(config.xsrfCookieName)
                : undefined;

            if (xsrfValue) {
              requestHeaders[config.xsrfHeaderName] = xsrfValue;
            }
          }

          // Add headers to the request
          if ("setRequestHeader" in request) {
            utils.forEach(requestHeaders, function setRequestHeader(val, key) {
              if (
                typeof requestData === "undefined" &&
                key.toLowerCase() === "content-type"
              ) {
                // Remove Content-Type if data is undefined
                delete requestHeaders[key];
              } else {
                // Otherwise add header to the request
                request.setRequestHeader(key, val);
              }
            });
          }

          // Add withCredentials to request if needed
          if (config.withCredentials) {
            request.withCredentials = true;
          }

          // Add responseType to request if needed
          if (config.responseType) {
            try {
              request.responseType = config.responseType;
            } catch (e) {
              // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
              // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
              if (config.responseType !== "json") {
                throw e;
              }
            }
          }

          // Handle progress if needed
          if (typeof config.onDownloadProgress === "function") {
            request.addEventListener("progress", config.onDownloadProgress);
          }

          // Not all browsers support upload events
          if (typeof config.onUploadProgress === "function" && request.upload) {
            request.upload.addEventListener(
              "progress",
              config.onUploadProgress
            );
          }

          if (config.cancelToken) {
            // Handle cancellation
            config.cancelToken.promise.then(function onCanceled(cancel) {
              if (!request) {
                return;
              }

              request.abort();
              reject(cancel);
              // Clean up request
              request = null;
            });
          }

          if (requestData === undefined) {
            requestData = null;
          }

          // Send the request
          request.send(requestData);
        });
      };

      /***/
    },

    /***/ "4588": /***/ function(module, exports) {
      // 7.1.4 ToInteger
      var ceil = Math.ceil;
      var floor = Math.floor;
      module.exports = function(it) {
        return isNaN((it = +it)) ? 0 : (it > 0 ? floor : ceil)(it);
      };

      /***/
    },

    /***/ "4630": /***/ function(module, exports) {
      module.exports = function(bitmap, value) {
        return {
          enumerable: !(bitmap & 1),
          configurable: !(bitmap & 2),
          writable: !(bitmap & 4),
          value: value
        };
      };

      /***/
    },

    /***/ "475f": /***/ function(module, exports, __webpack_require__) {
      "use strict";

      /**
       * Creates a new URL by combining the specified URLs
       *
       * @param {string} baseURL The base URL
       * @param {string} relativeURL The relative URL
       * @returns {string} The combined URL
       */
      module.exports = function combineURLs(baseURL, relativeURL) {
        return relativeURL
          ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "")
          : baseURL;
      };

      /***/
    },

    /***/ "4917": /***/ function(module, exports, __webpack_require__) {
      // @@match logic
      __webpack_require__("214f")("match", 1, function(defined, MATCH, $match) {
        // 21.1.3.11 String.prototype.match(regexp)
        return [
          function match(regexp) {
            "use strict";
            var O = defined(this);
            var fn = regexp == undefined ? undefined : regexp[MATCH];
            return fn !== undefined
              ? fn.call(regexp, O)
              : new RegExp(regexp)[MATCH](String(O));
          },
          $match
        ];
      });

      /***/
    },

    /***/ "4934": /***/ function(module, exports, __webpack_require__) {
      exports = module.exports = __webpack_require__("2350")(false);
      // imports

      // module
      exports.push([
        module.i,
        "\n.hamburger-menu[data-v-7dc7c0fe]{position:relative\n}\n.hamburger-menu>.content-menu-toggle[data-v-7dc7c0fe]{color:#fff;cursor:pointer;text-decoration:none\n}\n.hamburger-menu>.content-menu-toggle>.menu-wrapper[data-v-7dc7c0fe]{padding:0 4px;width:25px\n}\n.hamburger-menu>.content-menu-toggle>.menu-wrapper>div[data-v-7dc7c0fe]{background-color:#fff;height:2px;margin:5px 0\n}\n.hamburger-menu .toggler-menu[data-v-7dc7c0fe]{animation:fade .6s;left:0;min-heigth:100vh;opacity:0;position:absolute;top:0;transition:opacity .6s,visibility .6s;visibility:hidden;width:100%\n}\n.hamburger-menu .active-menu[data-v-7dc7c0fe]{opacity:1;visibility:visible\n}",
        ""
      ]);

      // exports

      /***/
    },

    /***/ "4bf8": /***/ function(module, exports, __webpack_require__) {
      // 7.1.13 ToObject(argument)
      var defined = __webpack_require__("be13");
      module.exports = function(it) {
        return Object(defined(it));
      };

      /***/
    },

    /***/ "4dcc": /***/ function(module, exports, __webpack_require__) {
      exports = module.exports = __webpack_require__("2350")(false);
      // imports

      // module
      exports.push([module.i, "", ""]);

      // exports

      /***/
    },

    /***/ "5263": /***/ function(module, exports, __webpack_require__) {
      exports = module.exports = __webpack_require__("2350")(false);
      // imports

      // module
      exports.push([
        module.i,
        "\n.portlet-card[data-v-f5a982f0]{background-color:#fff;border-radius:5px;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12),0 1px 5px 0 rgba(0,0,0,.2);height:170px;line-height:20px;padding:12px;position:relative;text-align:center;transition:box-shadow .25s,-webkit-box-shadow .25s;width:255px\n}\n.portlet-card[data-v-f5a982f0]:hover{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12);cursor:pointer\n}\n.portlet-card>.portlet-card-description[data-v-f5a982f0],.portlet-card>.portlet-card-icon[data-v-f5a982f0],.portlet-card>.portlet-card-title[data-v-f5a982f0]{color:rgba(0,0,0,.8);display:block;text-align:center\n}\n.portlet-card>.portlet-card-action[data-v-f5a982f0]{color:rgba(0,0,0,.34);margin:5px;position:absolute;right:0;top:0\n}\n.portlet-card>.portlet-card-icon>div[data-v-f5a982f0]{align-items:center;border-radius:10px;display:inline-flex;height:83px;justify-content:center;margin-top:-30px;width:83px\n}\n.portlet-card>.portlet-card-icon>div img[data-v-f5a982f0]{border-radius:10px;height:100%;width:auto\n}\n.portlet-card>.portlet-card-title[data-v-f5a982f0]{font-size:18px;font-weight:700;padding-top:1em\n}\n.portlet-card>.portlet-card-description[data-v-f5a982f0]{max-height:40px;padding-top:.3em\n}\n.portlet-card.small-card[data-v-f5a982f0]{background-color:transparent;border:none;box-shadow:none;height:auto;padding:0;width:120px\n}\n.portlet-card.small-card.background-dark>.description[data-v-f5a982f0],.portlet-card.small-card.background-dark>.title[data-v-f5a982f0]{color:#fff\n}\n.portlet-card.small-card>.portlet-card-description[data-v-f5a982f0]{display:none!important\n}\n.portlet-card.small-card>.portlet-card-icon>div[data-v-f5a982f0]{margin:0\n}\n.portlet-card.small-card>.portlet-card-title[data-v-f5a982f0]{font-weight:500;padding-top:.8em\n}\n.portlet-card.small-card>.portlet-card-action[data-v-f5a982f0]{display:none!important\n}",
        ""
      ]);

      // exports

      /***/
    },

    /***/ "52a7": /***/ function(module, exports) {
      exports.f = {}.propertyIsEnumerable;

      /***/
    },

    /***/ "52ea": /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__("f10c");

      /***/
    },

    /***/ "5537": /***/ function(module, exports, __webpack_require__) {
      var core = __webpack_require__("8378");
      var global = __webpack_require__("7726");
      var SHARED = "__core-js_shared__";
      var store = global[SHARED] || (global[SHARED] = {});

      (module.exports = function(key, value) {
        return store[key] || (store[key] = value !== undefined ? value : {});
      })("versions", []).push({
        version: core.version,
        mode: __webpack_require__("2d00") ? "pure" : "global",
        copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
      });

      /***/
    },

    /***/ "55dd": /***/ function(module, exports, __webpack_require__) {
      "use strict";

      var $export = __webpack_require__("5ca1");
      var aFunction = __webpack_require__("d8e8");
      var toObject = __webpack_require__("4bf8");
      var fails = __webpack_require__("79e5");
      var $sort = [].sort;
      var test = [1, 2, 3];

      $export(
        $export.P +
          $export.F *
            (fails(function() {
              // IE8-
              test.sort(undefined);
            }) ||
              !fails(function() {
                // V8 bug
                test.sort(null);
                // Old WebKit
              }) ||
              !__webpack_require__("2f21")($sort)),
        "Array",
        {
          // 22.1.3.25 Array.prototype.sort(comparefn)
          sort: function sort(comparefn) {
            return comparefn === undefined
              ? $sort.call(toObject(this))
              : $sort.call(toObject(this), aFunction(comparefn));
          }
        }
      );

      /***/
    },

    /***/ "57fa": /***/ function(module, exports, __webpack_require__) {
      exports = module.exports = __webpack_require__("2350")(false);
      // imports

      // module
      exports.push([
        module.i,
        '\n.content-grid[data-v-4962b75d]{min-width:250px\n}\n.content-grid[data-v-4962b75d] ::placeholder{font-style:italic\n}\n.content-grid[data-v-4962b75d] ::-webkit-input-placeholder{font-style:italic\n}\n.content-grid[data-v-4962b75d] :-moz-placeholder,.content-grid[data-v-4962b75d] ::-moz-placeholder{font-style:italic\n}\n.content-grid[data-v-4962b75d] :-ms-input-placeholder{font-style:italic\n}\n.content-grid[data-v-4962b75d] ::-ms-input-placeholder{font-style:italic\n}\n.content-grid .content-grid-caret[data-v-4962b75d]{cursor:pointer;position:relative\n}\n.content-grid .content-grid-caret[data-v-4962b75d]:after{border-left:10px solid transparent;border-right:10px solid transparent;border-top:10px solid #000;content:"";display:inline-block;height:0;pointer-events:none;position:absolute;right:10px;top:25%;width:0\n}\n.content-grid .fa[data-v-4962b75d]{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto\n}\n.content-grid .fa-search[data-v-4962b75d]:before{content:"\\F002"\n}\n.content-grid.small .content-grid-caret[data-v-4962b75d]:after{border:none\n}\n.content-grid.small>div[data-v-4962b75d]{background-color:#f3f3f3;border-radius:5px\n}\n.content-grid.small>div>.title[data-v-4962b75d]{background-color:#fff;border-radius:5px;position:relative\n}\n.content-grid.small>div>.title>h1[data-v-4962b75d]{margin-right:32px\n}\n.content-grid.small>div>.title>.filter[data-v-4962b75d]{display:flex;flex-flow:row nowrap;height:calc(100% - 15px);margin:auto 0;max-width:unset;position:absolute;right:15px;width:calc(100% - 30px)\n}\n.content-grid.small>div>.title>.filter.closed[data-v-4962b75d]{width:32px\n}\n.content-grid.small>div>.title>.filter.closed input[data-v-4962b75d]{visibility:hidden\n}\n.content-grid.small>div>.title>.filter>span[data-v-4962b75d]{width:100%\n}\n.content-grid.small>div>.title>.filter>div[data-v-4962b75d]{align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;text-align:center\n}\n.content-grid.small>div>.title>.filter>div>.fa[data-v-4962b75d]{font-size:32px;margin-left:5px;opacity:.4\n}\n.content-grid.small>div>.title>.filter.opened[data-v-4962b75d]{backface-visibility:hidden;transition:width 1s\n}\n.content-grid.small>div>.title>.filter.opened>div>.fa[data-v-4962b75d]{opacity:1\n}\n.content-grid>div[data-v-4962b75d]{display:block\n}\n.content-grid>div>.title[data-v-4962b75d]{display:flex;flex-flow:row wrap;justify-content:space-between;padding:5px 20px;text-transform:uppercase\n}\n.content-grid>div>.title>h1[data-v-4962b75d]{font-size:24px;font-weight:400;margin-bottom:15px;margin-top:15px\n}\n.content-grid>div>.title>.filter[data-v-4962b75d]{margin:10px 0;max-width:300px;width:100%\n}\n.content-grid>div>.title>.filter input[data-v-4962b75d]{-webkit-appearance:none;border:none;border-radius:48px;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12),0 1px 5px 0 rgba(0,0,0,.2);font-size:16px;height:100%;line-height:32px;outline:none;text-indent:10px;width:100%\n}\n.content-grid>div>.title>.filter input[data-v-4962b75d]::-webkit-calendar-picker-indicator{display:none\n}\n.content-grid>div>.title>.filter>div[data-v-4962b75d]{display:none\n}\n.content-grid>div .flex-grid[data-v-4962b75d]{display:flex;flex-flow:row wrap;justify-content:center\n}\n.content-grid>div .flex-grid .flex-item[data-v-4962b75d]{margin:20px 5px\n}\n.content-grid>div a.no-style[data-v-4962b75d]{color:inherit;text-decoration:none\n}',
        ""
      ]);

      // exports

      /***/
    },

    /***/ "5a74": /***/ function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);

      // EXTERNAL MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
      var setPublicPath = __webpack_require__("1eb2");

      // EXTERNAL MODULE: external "Vue"
      var external_Vue_ = __webpack_require__("8bbf");
      var external_Vue_default = /*#__PURE__*/ __webpack_require__.n(
        external_Vue_
      );

      // CONCATENATED MODULE: ./node_modules/@vue/web-component-wrapper/dist/vue-wc-wrapper.js
      const camelizeRE = /-(\w)/g;
      const camelize = str => {
        return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ""));
      };

      const hyphenateRE = /\B([A-Z])/g;
      const hyphenate = str => {
        return str.replace(hyphenateRE, "-$1").toLowerCase();
      };

      function getInitialProps(propsList) {
        const res = {};
        propsList.forEach(key => {
          res[key] = undefined;
        });
        return res;
      }

      function injectHook(options, key, hook) {
        options[key] = [].concat(options[key] || []);
        options[key].unshift(hook);
      }

      function callHooks(vm, hook) {
        if (vm) {
          const hooks = vm.$options[hook] || [];
          hooks.forEach(hook => {
            hook.call(vm);
          });
        }
      }

      function createCustomEvent(name, args) {
        return new CustomEvent(name, {
          bubbles: false,
          cancelable: false,
          detail: args
        });
      }

      const isBoolean = val => /function Boolean/.test(String(val));
      const isNumber = val => /function Number/.test(String(val));

      function convertAttributeValue(value, name, { type } = {}) {
        if (isBoolean(type)) {
          if (value === "true" || value === "false") {
            return value === "true";
          }
          if (value === "" || value === name) {
            return true;
          }
          return value != null;
        } else if (isNumber(type)) {
          const parsed = parseFloat(value, 10);
          return isNaN(parsed) ? value : parsed;
        } else {
          return value;
        }
      }

      function toVNodes(h, children) {
        const res = [];
        for (let i = 0, l = children.length; i < l; i++) {
          res.push(toVNode(h, children[i]));
        }
        return res;
      }

      function toVNode(h, node) {
        if (node.nodeType === 3) {
          return node.data.trim() ? node.data : null;
        } else if (node.nodeType === 1) {
          const data = {
            attrs: getAttributes(node),
            domProps: {
              innerHTML: node.innerHTML
            }
          };
          if (data.attrs.slot) {
            data.slot = data.attrs.slot;
            delete data.attrs.slot;
          }
          return h(node.tagName, data);
        } else {
          return null;
        }
      }

      function getAttributes(node) {
        const res = {};
        for (let i = 0, l = node.attributes.length; i < l; i++) {
          const attr = node.attributes[i];
          res[attr.nodeName] = attr.nodeValue;
        }
        return res;
      }

      function wrap(Vue, Component) {
        const isAsync = typeof Component === "function" && !Component.cid;
        let isInitialized = false;
        let hyphenatedPropsList;
        let camelizedPropsList;
        let camelizedPropsMap;

        function initialize(Component) {
          if (isInitialized) return;

          const options =
            typeof Component === "function" ? Component.options : Component;

          // extract props info
          const propsList = Array.isArray(options.props)
            ? options.props
            : Object.keys(options.props || {});
          hyphenatedPropsList = propsList.map(hyphenate);
          camelizedPropsList = propsList.map(camelize);
          const originalPropsAsObject = Array.isArray(options.props)
            ? {}
            : options.props || {};
          camelizedPropsMap = camelizedPropsList.reduce((map, key, i) => {
            map[key] = originalPropsAsObject[propsList[i]];
            return map;
          }, {});

          // proxy $emit to native DOM events
          injectHook(options, "beforeCreate", function() {
            const emit = this.$emit;
            this.$emit = (name, ...args) => {
              this.$root.$options.customElement.dispatchEvent(
                createCustomEvent(name, args)
              );
              return emit.call(this, name, ...args);
            };
          });

          injectHook(options, "created", function() {
            // sync default props values to wrapper on created
            camelizedPropsList.forEach(key => {
              this.$root.props[key] = this[key];
            });
          });

          // proxy props as Element properties
          camelizedPropsList.forEach(key => {
            Object.defineProperty(CustomElement.prototype, key, {
              get() {
                return this._wrapper.props[key];
              },
              set(newVal) {
                this._wrapper.props[key] = newVal;
              },
              enumerable: false,
              configurable: true
            });
          });

          isInitialized = true;
        }

        function syncAttribute(el, key) {
          const camelized = camelize(key);
          const value = el.hasAttribute(key) ? el.getAttribute(key) : undefined;
          el._wrapper.props[camelized] = convertAttributeValue(
            value,
            key,
            camelizedPropsMap[camelized]
          );
        }

        class CustomElement extends HTMLElement {
          constructor() {
            super();
            this.attachShadow({ mode: "open" });

            const wrapper = (this._wrapper = new Vue({
              name: "shadow-root",
              customElement: this,
              shadowRoot: this.shadowRoot,
              data() {
                return {
                  props: {},
                  slotChildren: []
                };
              },
              render(h) {
                return h(
                  Component,
                  {
                    ref: "inner",
                    props: this.props
                  },
                  this.slotChildren
                );
              }
            }));

            // Use MutationObserver to react to future attribute & slot content change
            const observer = new MutationObserver(mutations => {
              let hasChildrenChange = false;
              for (let i = 0; i < mutations.length; i++) {
                const m = mutations[i];
                if (
                  isInitialized &&
                  m.type === "attributes" &&
                  m.target === this
                ) {
                  syncAttribute(this, m.attributeName);
                } else {
                  hasChildrenChange = true;
                }
              }
              if (hasChildrenChange) {
                wrapper.slotChildren = Object.freeze(
                  toVNodes(wrapper.$createElement, this.childNodes)
                );
              }
            });
            observer.observe(this, {
              childList: true,
              subtree: true,
              characterData: true,
              attributes: true
            });
          }

          get vueComponent() {
            return this._wrapper.$refs.inner;
          }

          connectedCallback() {
            const wrapper = this._wrapper;
            if (!wrapper._isMounted) {
              // initialize attributes
              const syncInitialAttributes = () => {
                wrapper.props = getInitialProps(camelizedPropsList);
                hyphenatedPropsList.forEach(key => {
                  syncAttribute(this, key);
                });
              };

              if (isInitialized) {
                syncInitialAttributes();
              } else {
                // async & unresolved
                Component().then(resolved => {
                  if (
                    resolved.__esModule ||
                    resolved[Symbol.toStringTag] === "Module"
                  ) {
                    resolved = resolved.default;
                  }
                  initialize(resolved);
                  syncInitialAttributes();
                });
              }
              // initialize children
              wrapper.slotChildren = Object.freeze(
                toVNodes(wrapper.$createElement, this.childNodes)
              );
              wrapper.$mount();
              this.shadowRoot.appendChild(wrapper.$el);
            } else {
              callHooks(this.vueComponent, "activated");
            }
          }

          disconnectedCallback() {
            callHooks(this.vueComponent, "deactivated");
          }
        }

        if (!isAsync) {
          initialize(Component);
        }

        return CustomElement;
      }

      /* harmony default export */ var vue_wc_wrapper = wrap;

      // EXTERNAL MODULE: ./node_modules/css-loader/lib/css-base.js
      var css_base = __webpack_require__("2350");

      // EXTERNAL MODULE: ./node_modules/vue-style-loader/lib/addStylesShadow.js + 1 modules
      var addStylesShadow = __webpack_require__("35d6");

      // CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
      /* globals __VUE_SSR_CONTEXT__ */

      // IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
      // This module is a runtime utility for cleaner component module output and will
      // be included in the final webpack user bundle.

      function normalizeComponent(
        scriptExports,
        render,
        staticRenderFns,
        functionalTemplate,
        injectStyles,
        scopeId,
        moduleIdentifier /* server only */,
        shadowMode /* vue-cli only */
      ) {
        // Vue.extend constructor export interop
        var options =
          typeof scriptExports === "function"
            ? scriptExports.options
            : scriptExports;

        // render functions
        if (render) {
          options.render = render;
          options.staticRenderFns = staticRenderFns;
          options._compiled = true;
        }

        // functional template
        if (functionalTemplate) {
          options.functional = true;
        }

        // scopedId
        if (scopeId) {
          options._scopeId = "data-v-" + scopeId;
        }

        var hook;
        if (moduleIdentifier) {
          // server build
          hook = function(context) {
            // 2.3 injection
            context =
              context || // cached call
              (this.$vnode && this.$vnode.ssrContext) || // stateful
              (this.parent &&
                this.parent.$vnode &&
                this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
              context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (injectStyles) {
              injectStyles.call(this, context);
            }
            // register component module identifier for async chunk inferrence
            if (context && context._registeredComponents) {
              context._registeredComponents.add(moduleIdentifier);
            }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          options._ssrRegister = hook;
        } else if (injectStyles) {
          hook = shadowMode
            ? function() {
                injectStyles.call(this, this.$root.$options.shadowRoot);
              }
            : injectStyles;
        }

        if (hook) {
          if (options.functional) {
            // for template-only hot-reload because in that case the render fn doesn't
            // go through the normalizer
            options._injectStyles = hook;
            // register for functioal component in vue file
            var originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
              hook.call(context);
              return originalRender(h, context);
            };
          } else {
            // inject component registration as beforeCreate hook
            var existing = options.beforeCreate;
            options.beforeCreate = existing
              ? [].concat(existing, hook)
              : [hook];
          }
        }

        return {
          exports: scriptExports,
          options: options
        };
      }

      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d50f023a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ActionFavorites.vue?vue&type=template&id=260b491e&scoped=true&shadow
      var render = function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c(
          "div",
          {
            class: "action-favorites " + _vm.fname,
            attrs: {
              title: _vm.isFavorite
                ? _vm.translate("message.favorites.remove")
                : _vm.translate("message.favorites.add")
            },
            on: {
              click: function($event) {
                _vm.toggleFavorite($event);
              }
            }
          },
          [
            _c(
              "button",
              { staticClass: "favorite-button" },
              [
                _c("icon", {
                  attrs: { name: _vm.isFavorite ? "star" : "regular/star" }
                })
              ],
              1
            )
          ]
        );
      };
      var staticRenderFns = [];

      // CONCATENATED MODULE: ./src/components/ActionFavorites.vue?vue&type=template&id=260b491e&scoped=true&shadow

      // EXTERNAL MODULE: ./node_modules/@uportal/open-id-connect/node_modules/axios/index.js
      var axios = __webpack_require__("52ea");

      // EXTERNAL MODULE: ./node_modules/@uportal/open-id-connect/node_modules/jwt-decode/lib/index.js
      var lib = __webpack_require__("c035");
      var lib_default = /*#__PURE__*/ __webpack_require__.n(lib);

      // EXTERNAL MODULE: ./node_modules/@uportal/open-id-connect/node_modules/regenerator-runtime/runtime-module.js
      var runtime_module = __webpack_require__("8645");
      var runtime_module_default = /*#__PURE__*/ __webpack_require__.n(
        runtime_module
      );

      // CONCATENATED MODULE: ./node_modules/@uportal/open-id-connect/esm/open-id-connect.js
      function _slicedToArray(arr, i) {
        return (
          _arrayWithHoles(arr) ||
          _iterableToArrayLimit(arr, i) ||
          _nonIterableRest()
        );
      }

      function _nonIterableRest() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      }

      function _iterableToArrayLimit(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;
        try {
          for (
            var _i = arr[Symbol.iterator](), _s;
            !(_n = (_s = _i.next()).done);
            _n = true
          ) {
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"] != null) _i["return"]();
          } finally {
            if (_d) throw _e;
          }
        }
        return _arr;
      }

      function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
      }

      function asyncGeneratorStep(
        gen,
        resolve,
        reject,
        _next,
        _throw,
        key,
        arg
      ) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }

      function _asyncToGenerator(fn) {
        return function() {
          var self = this,
            args = arguments;
          return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
              asyncGeneratorStep(
                gen,
                resolve,
                reject,
                _next,
                _throw,
                "next",
                value
              );
            }
            function _throw(err) {
              asyncGeneratorStep(
                gen,
                resolve,
                reject,
                _next,
                _throw,
                "throw",
                err
              );
            }
            _next(undefined);
          });
        };
      }

      // needed as a polyfill for browsers not yet supporting async
      // eslint-disable-next-line no-unused-vars

      var token = null;
      /**
       * Options for getting tokens
       * @typedef {Object} Options
       * @property {string} [userInfoApiUrl] - url to Open ID Connect endpoint
       * @property {number} [timeout] - time in milliseconds until token will be
       *                                invalid
       * @property {Object} [propertyTransforms] - apply additional transforms to
       *                                           specific properties
       */

      /**
       * Callback to resolve Open ID Connect token
       * @callback tokenCallback
       * @param {?Error} err -
       * @param {?Object} token - with encoded and decoded values
       */

      /**
       * Get token from uPortal Open ID Connect service
       * @param {Options} [options] - allow setting a custom user info API url and a
       *                              custom clock smear
       * @param {tokenCallback} [callback] - optional callback, alternative to Promise
       *                                     API
       * @return {Promise<Object>} Promise that resolves with the encoded and decoded
       *                           token in an Object
       */

      function openIdConnect() {
        return _openIdConnect.apply(this, arguments);
      }
      /**
       * Extract JWT contents
       * @param {string} jwt - JSON Web Token to decode
       * @return {Object} with encoded and decoded values
       */

      function _openIdConnect() {
        _openIdConnect = _asyncToGenerator(
          /*#__PURE__*/
          runtime_module_default.a.mark(function _callee() {
            var _ref,
              _ref$userInfoApiUrl,
              userInfoApiUrl,
              _ref$timeout,
              timeout,
              _ref$propertyTransfor,
              propertyTransforms,
              callback,
              _ref2,
              data,
              _args = arguments;

            return runtime_module_default.a.wrap(
              function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      (_ref =
                        _args.length > 0 && _args[0] !== undefined
                          ? _args[0]
                          : {}),
                        (_ref$userInfoApiUrl = _ref.userInfoApiUrl),
                        (userInfoApiUrl =
                          _ref$userInfoApiUrl === void 0
                            ? "/uPortal/api/v5-1/userinfo"
                            : _ref$userInfoApiUrl),
                        (_ref$timeout = _ref.timeout),
                        (timeout =
                          _ref$timeout === void 0 ? 50000 : _ref$timeout),
                        (_ref$propertyTransfor = _ref.propertyTransforms),
                        (propertyTransforms =
                          _ref$propertyTransfor === void 0
                            ? {}
                            : _ref$propertyTransfor);
                      callback = _args.length > 1 ? _args[1] : undefined;

                      if (!(token !== null)) {
                        _context.next = 4;
                        break;
                      }

                      return _context.abrupt("return", token);

                    case 4:
                      _context.prev = 4;
                      _context.next = 7;
                      return Object(axios["get"])(userInfoApiUrl, {
                        responseType: "text",
                        withCredentials: true
                      });

                    case 7:
                      _ref2 = _context.sent;
                      data = _ref2.data;
                      // store the encoded and decoded versions
                      token = tokenize(data); // Allow for additional transforms to be applied to decoded properties

                      Object.entries(propertyTransforms).forEach(function(
                        _ref3
                      ) {
                        var _ref4 = _slicedToArray(_ref3, 2),
                          property = _ref4[0],
                          transform = _ref4[1];

                        token.decoded[property] = transform(
                          token.decoded[property]
                        );
                      }); // automatically clear token after expiration

                      setTimeout(function() {
                        token = null;
                      }, timeout); // pass value to optional call back

                      if (!callback) {
                        _context.next = 14;
                        break;
                      }

                      return _context.abrupt("return", callback(null, token));

                    case 14:
                      return _context.abrupt("return", token);

                    case 17:
                      _context.prev = 17;
                      _context.t0 = _context["catch"](4);

                      if (!callback) {
                        _context.next = 21;
                        break;
                      }

                      return _context.abrupt("return", callback(_context.t0));

                    case 21:
                      throw _context.t0;

                    case 22:
                    case "end":
                      return _context.stop();
                  }
                }
              },
              _callee,
              this,
              [[4, 17]]
            );
          })
        );
        return _openIdConnect.apply(this, arguments);
      }

      function tokenize(jwt) {
        return {
          encoded: jwt,
          decoded: lib_default()(jwt)
        };
      }
      // EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.match.js
      var es6_regexp_match = __webpack_require__("4917");

      // EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
      var web_dom_iterable = __webpack_require__("ac6a");

      // CONCATENATED MODULE: ./node_modules/vue-i18n/dist/vue-i18n.esm.js
      /*!
 * vue-i18n v8.1.0 
 * (c) 2018 kazuya kawaguchi
 * Released under the MIT License.
 */
      /*  */

      /**
       * utilites
       */

      function warn(msg, err) {
        if (typeof console !== "undefined") {
          console.warn("[vue-i18n] " + msg);
          /* istanbul ignore if */
          if (err) {
            console.warn(err.stack);
          }
        }
      }

      function isObject(obj) {
        return obj !== null && typeof obj === "object";
      }

      var vue_i18n_esm_toString = Object.prototype.toString;
      var OBJECT_STRING = "[object Object]";
      function isPlainObject(obj) {
        return vue_i18n_esm_toString.call(obj) === OBJECT_STRING;
      }

      function isNull(val) {
        return val === null || val === undefined;
      }

      function parseArgs() {
        var args = [],
          len = arguments.length;
        while (len--) args[len] = arguments[len];

        var locale = null;
        var params = null;
        if (args.length === 1) {
          if (isObject(args[0]) || Array.isArray(args[0])) {
            params = args[0];
          } else if (typeof args[0] === "string") {
            locale = args[0];
          }
        } else if (args.length === 2) {
          if (typeof args[0] === "string") {
            locale = args[0];
          }
          /* istanbul ignore if */
          if (isObject(args[1]) || Array.isArray(args[1])) {
            params = args[1];
          }
        }

        return { locale: locale, params: params };
      }

      function getOldChoiceIndexFixed(choice) {
        return choice ? (choice > 1 ? 1 : 0) : 1;
      }

      function getChoiceIndex(choice, choicesLength) {
        choice = Math.abs(choice);

        if (choicesLength === 2) {
          return getOldChoiceIndexFixed(choice);
        }

        return choice ? Math.min(choice, 2) : 0;
      }

      function fetchChoice(message, choice) {
        /* istanbul ignore if */
        if (!message && typeof message !== "string") {
          return null;
        }
        var choices = message.split("|");

        choice = getChoiceIndex(choice, choices.length);
        if (!choices[choice]) {
          return message;
        }
        return choices[choice].trim();
      }

      function looseClone(obj) {
        return JSON.parse(JSON.stringify(obj));
      }

      function remove(arr, item) {
        if (arr.length) {
          var index = arr.indexOf(item);
          if (index > -1) {
            return arr.splice(index, 1);
          }
        }
      }

      var vue_i18n_esm_hasOwnProperty = Object.prototype.hasOwnProperty;
      function hasOwn(obj, key) {
        return vue_i18n_esm_hasOwnProperty.call(obj, key);
      }

      function merge(target) {
        var arguments$1 = arguments;

        var output = Object(target);
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments$1[i];
          if (source !== undefined && source !== null) {
            var key = void 0;
            for (key in source) {
              if (hasOwn(source, key)) {
                if (isObject(source[key])) {
                  output[key] = merge(output[key], source[key]);
                } else {
                  output[key] = source[key];
                }
              }
            }
          }
        }
        return output;
      }

      function looseEqual(a, b) {
        if (a === b) {
          return true;
        }
        var isObjectA = isObject(a);
        var isObjectB = isObject(b);
        if (isObjectA && isObjectB) {
          try {
            var isArrayA = Array.isArray(a);
            var isArrayB = Array.isArray(b);
            if (isArrayA && isArrayB) {
              return (
                a.length === b.length &&
                a.every(function(e, i) {
                  return looseEqual(e, b[i]);
                })
              );
            } else if (!isArrayA && !isArrayB) {
              var keysA = Object.keys(a);
              var keysB = Object.keys(b);
              return (
                keysA.length === keysB.length &&
                keysA.every(function(key) {
                  return looseEqual(a[key], b[key]);
                })
              );
            } else {
              /* istanbul ignore next */
              return false;
            }
          } catch (e) {
            /* istanbul ignore next */
            return false;
          }
        } else if (!isObjectA && !isObjectB) {
          return String(a) === String(b);
        } else {
          return false;
        }
      }

      var canUseDateTimeFormat =
        typeof Intl !== "undefined" &&
        typeof Intl.DateTimeFormat !== "undefined";

      var canUseNumberFormat =
        typeof Intl !== "undefined" && typeof Intl.NumberFormat !== "undefined";

      /*  */

      function extend(Vue) {
        // $FlowFixMe
        Object.defineProperty(Vue.prototype, "$i18n", {
          get: function get() {
            return this._i18n;
          }
        });

        Vue.prototype.$t = function(key) {
          var values = [],
            len = arguments.length - 1;
          while (len-- > 0) values[len] = arguments[len + 1];

          var i18n = this.$i18n;
          return i18n._t.apply(
            i18n,
            [key, i18n.locale, i18n._getMessages(), this].concat(values)
          );
        };

        Vue.prototype.$tc = function(key, choice) {
          var values = [],
            len = arguments.length - 2;
          while (len-- > 0) values[len] = arguments[len + 2];

          var i18n = this.$i18n;
          return i18n._tc.apply(
            i18n,
            [key, i18n.locale, i18n._getMessages(), this, choice].concat(values)
          );
        };

        Vue.prototype.$te = function(key, locale) {
          var i18n = this.$i18n;
          return i18n._te(key, i18n.locale, i18n._getMessages(), locale);
        };

        Vue.prototype.$d = function(value) {
          var ref;

          var args = [],
            len = arguments.length - 1;
          while (len-- > 0) args[len] = arguments[len + 1];
          return (ref = this.$i18n).d.apply(ref, [value].concat(args));
        };

        Vue.prototype.$n = function(value) {
          var ref;

          var args = [],
            len = arguments.length - 1;
          while (len-- > 0) args[len] = arguments[len + 1];
          return (ref = this.$i18n).n.apply(ref, [value].concat(args));
        };
      }

      /*  */

      var mixin = {
        beforeCreate: function beforeCreate() {
          var options = this.$options;
          options.i18n = options.i18n || (options.__i18n ? {} : null);

          if (options.i18n) {
            if (options.i18n instanceof VueI18n) {
              // init locale messages via custom blocks
              if (options.__i18n) {
                try {
                  var localeMessages = {};
                  options.__i18n.forEach(function(resource) {
                    localeMessages = merge(
                      localeMessages,
                      JSON.parse(resource)
                    );
                  });
                  Object.keys(localeMessages).forEach(function(locale) {
                    options.i18n.mergeLocaleMessage(
                      locale,
                      localeMessages[locale]
                    );
                  });
                } catch (e) {
                  if (false) {
                  }
                }
              }
              this._i18n = options.i18n;
              this._i18nWatcher = this._i18n.watchI18nData();
              this._i18n.subscribeDataChanging(this);
              this._subscribing = true;
            } else if (isPlainObject(options.i18n)) {
              // component local i18n
              if (
                this.$root &&
                this.$root.$i18n &&
                this.$root.$i18n instanceof VueI18n
              ) {
                options.i18n.root = this.$root.$i18n;
                options.i18n.formatter = this.$root.$i18n.formatter;
                options.i18n.fallbackLocale = this.$root.$i18n.fallbackLocale;
                options.i18n.silentTranslationWarn = this.$root.$i18n.silentTranslationWarn;
              }

              // init locale messages via custom blocks
              if (options.__i18n) {
                try {
                  var localeMessages$1 = {};
                  options.__i18n.forEach(function(resource) {
                    localeMessages$1 = merge(
                      localeMessages$1,
                      JSON.parse(resource)
                    );
                  });
                  options.i18n.messages = localeMessages$1;
                } catch (e) {
                  if (false) {
                  }
                }
              }

              this._i18n = new VueI18n(options.i18n);
              this._i18nWatcher = this._i18n.watchI18nData();
              this._i18n.subscribeDataChanging(this);
              this._subscribing = true;

              if (options.i18n.sync === undefined || !!options.i18n.sync) {
                this._localeWatcher = this.$i18n.watchLocale();
              }
            } else {
              if (false) {
              }
            }
          } else if (
            this.$root &&
            this.$root.$i18n &&
            this.$root.$i18n instanceof VueI18n
          ) {
            // root i18n
            this._i18n = this.$root.$i18n;
            this._i18n.subscribeDataChanging(this);
            this._subscribing = true;
          } else if (
            options.parent &&
            options.parent.$i18n &&
            options.parent.$i18n instanceof VueI18n
          ) {
            // parent i18n
            this._i18n = options.parent.$i18n;
            this._i18n.subscribeDataChanging(this);
            this._subscribing = true;
          }
        },

        beforeDestroy: function beforeDestroy() {
          if (!this._i18n) {
            return;
          }

          if (this._subscribing) {
            this._i18n.unsubscribeDataChanging(this);
            delete this._subscribing;
          }

          if (this._i18nWatcher) {
            this._i18nWatcher();
            delete this._i18nWatcher;
          }

          if (this._localeWatcher) {
            this._localeWatcher();
            delete this._localeWatcher;
          }

          this._i18n = null;
        }
      };

      /*  */

      var component = {
        name: "i18n",
        functional: true,
        props: {
          tag: {
            type: String,
            default: "span"
          },
          path: {
            type: String,
            required: true
          },
          locale: {
            type: String
          },
          places: {
            type: [Array, Object]
          }
        },
        render: function render(h, ref) {
          var props = ref.props;
          var data = ref.data;
          var children = ref.children;
          var parent = ref.parent;

          var i18n = parent.$i18n;

          children = (children || []).filter(function(child) {
            return child.tag || (child.text = child.text.trim());
          });

          if (!i18n) {
            if (false) {
            }
            return children;
          }

          var path = props.path;
          var locale = props.locale;

          var params = {};
          var places = props.places || {};

          var hasPlaces = Array.isArray(places)
            ? places.length > 0
            : Object.keys(places).length > 0;

          var everyPlace = children.every(function(child) {
            if (child.data && child.data.attrs) {
              var place = child.data.attrs.place;
              return typeof place !== "undefined" && place !== "";
            }
          });

          if (hasPlaces && children.length > 0 && !everyPlace) {
            warn(
              "If places prop is set, all child elements must have place prop set."
            );
          }

          if (Array.isArray(places)) {
            places.forEach(function(el, i) {
              params[i] = el;
            });
          } else {
            Object.keys(places).forEach(function(key) {
              params[key] = places[key];
            });
          }

          children.forEach(function(child, i) {
            var key = everyPlace ? "" + child.data.attrs.place : "" + i;
            params[key] = child;
          });

          return h(props.tag, data, i18n.i(path, locale, params));
        }
      };

      /*  */

      function bind(el, binding, vnode) {
        if (!assert(el, vnode)) {
          return;
        }

        t(el, binding, vnode);
      }

      function update(el, binding, vnode, oldVNode) {
        if (!assert(el, vnode)) {
          return;
        }

        if (
          localeEqual(el, vnode) &&
          looseEqual(binding.value, binding.oldValue)
        ) {
          return;
        }

        t(el, binding, vnode);
      }

      function unbind(el, binding, vnode, oldVNode) {
        var vm = vnode.context;
        if (!vm) {
          warn("Vue instance does not exists in VNode context");
          return;
        }

        el.textContent = "";
        el._vt = undefined;
        delete el["_vt"];
        el._locale = undefined;
        delete el["_locale"];
      }

      function assert(el, vnode) {
        var vm = vnode.context;
        if (!vm) {
          warn("Vue instance doest not exists in VNode context");
          return false;
        }

        if (!vm.$i18n) {
          warn("VueI18n instance does not exists in Vue instance");
          return false;
        }

        return true;
      }

      function localeEqual(el, vnode) {
        var vm = vnode.context;
        return el._locale === vm.$i18n.locale;
      }

      function t(el, binding, vnode) {
        var ref$1, ref$2;

        var value = binding.value;

        var ref = parseValue(value);
        var path = ref.path;
        var locale = ref.locale;
        var args = ref.args;
        var choice = ref.choice;
        if (!path && !locale && !args) {
          warn("value type not supported");
          return;
        }

        if (!path) {
          warn("`path` is required in v-t directive");
          return;
        }

        var vm = vnode.context;
        if (choice) {
          el._vt = el.textContent = (ref$1 = vm.$i18n).tc.apply(
            ref$1,
            [path, choice].concat(makeParams(locale, args))
          );
        } else {
          el._vt = el.textContent = (ref$2 = vm.$i18n).t.apply(
            ref$2,
            [path].concat(makeParams(locale, args))
          );
        }
        el._locale = vm.$i18n.locale;
      }

      function parseValue(value) {
        var path;
        var locale;
        var args;
        var choice;

        if (typeof value === "string") {
          path = value;
        } else if (isPlainObject(value)) {
          path = value.path;
          locale = value.locale;
          args = value.args;
          choice = value.choice;
        }

        return { path: path, locale: locale, args: args, choice: choice };
      }

      function makeParams(locale, args) {
        var params = [];

        locale && params.push(locale);
        if (args && (Array.isArray(args) || isPlainObject(args))) {
          params.push(args);
        }

        return params;
      }

      var Vue;

      function install(_Vue) {
        Vue = _Vue;

        var version = (Vue.version && Number(Vue.version.split(".")[0])) || -1;
        /* istanbul ignore if */
        if (false) {
        }
        install.installed = true;

        /* istanbul ignore if */
        if (false) {
        }

        extend(Vue);
        Vue.mixin(mixin);
        Vue.directive("t", { bind: bind, update: update, unbind: unbind });
        Vue.component(component.name, component);

        // use simple mergeStrategies to prevent i18n instance lose '__proto__'
        var strats = Vue.config.optionMergeStrategies;
        strats.i18n = function(parentVal, childVal) {
          return childVal === undefined ? parentVal : childVal;
        };
      }

      /*  */

      var BaseFormatter = function BaseFormatter() {
        this._caches = Object.create(null);
      };

      BaseFormatter.prototype.interpolate = function interpolate(
        message,
        values
      ) {
        if (!values) {
          return [message];
        }
        var tokens = this._caches[message];
        if (!tokens) {
          tokens = parse(message);
          this._caches[message] = tokens;
        }
        return compile(tokens, values);
      };

      var RE_TOKEN_LIST_VALUE = /^(\d)+/;
      var RE_TOKEN_NAMED_VALUE = /^(\w)+/;

      function parse(format) {
        var tokens = [];
        var position = 0;

        var text = "";
        while (position < format.length) {
          var char = format[position++];
          if (char === "{") {
            if (text) {
              tokens.push({ type: "text", value: text });
            }

            text = "";
            var sub = "";
            char = format[position++];
            while (char !== "}") {
              sub += char;
              char = format[position++];
            }

            var type = RE_TOKEN_LIST_VALUE.test(sub)
              ? "list"
              : RE_TOKEN_NAMED_VALUE.test(sub)
                ? "named"
                : "unknown";
            tokens.push({ value: sub, type: type });
          } else if (char === "%") {
            // when found rails i18n syntax, skip text capture
            if (format[position] !== "{") {
              text += char;
            }
          } else {
            text += char;
          }
        }

        text && tokens.push({ type: "text", value: text });

        return tokens;
      }

      function compile(tokens, values) {
        var compiled = [];
        var index = 0;

        var mode = Array.isArray(values)
          ? "list"
          : isObject(values)
            ? "named"
            : "unknown";
        if (mode === "unknown") {
          return compiled;
        }

        while (index < tokens.length) {
          var token = tokens[index];
          switch (token.type) {
            case "text":
              compiled.push(token.value);
              break;
            case "list":
              compiled.push(values[parseInt(token.value, 10)]);
              break;
            case "named":
              if (mode === "named") {
                compiled.push(values[token.value]);
              } else {
                if (false) {
                }
              }
              break;
            case "unknown":
              if (false) {
              }
              break;
          }
          index++;
        }

        return compiled;
      }

      /*  */

      /**
       *  Path paerser
       *  - Inspired:
       *    Vue.js Path parser
       */

      // actions
      var APPEND = 0;
      var PUSH = 1;
      var INC_SUB_PATH_DEPTH = 2;
      var PUSH_SUB_PATH = 3;

      // states
      var BEFORE_PATH = 0;
      var IN_PATH = 1;
      var BEFORE_IDENT = 2;
      var IN_IDENT = 3;
      var IN_SUB_PATH = 4;
      var IN_SINGLE_QUOTE = 5;
      var IN_DOUBLE_QUOTE = 6;
      var AFTER_PATH = 7;
      var ERROR = 8;

      var pathStateMachine = [];

      pathStateMachine[BEFORE_PATH] = {
        ws: [BEFORE_PATH],
        ident: [IN_IDENT, APPEND],
        "[": [IN_SUB_PATH],
        eof: [AFTER_PATH]
      };

      pathStateMachine[IN_PATH] = {
        ws: [IN_PATH],
        ".": [BEFORE_IDENT],
        "[": [IN_SUB_PATH],
        eof: [AFTER_PATH]
      };

      pathStateMachine[BEFORE_IDENT] = {
        ws: [BEFORE_IDENT],
        ident: [IN_IDENT, APPEND],
        "0": [IN_IDENT, APPEND],
        number: [IN_IDENT, APPEND]
      };

      pathStateMachine[IN_IDENT] = {
        ident: [IN_IDENT, APPEND],
        "0": [IN_IDENT, APPEND],
        number: [IN_IDENT, APPEND],
        ws: [IN_PATH, PUSH],
        ".": [BEFORE_IDENT, PUSH],
        "[": [IN_SUB_PATH, PUSH],
        eof: [AFTER_PATH, PUSH]
      };

      pathStateMachine[IN_SUB_PATH] = {
        "'": [IN_SINGLE_QUOTE, APPEND],
        '"': [IN_DOUBLE_QUOTE, APPEND],
        "[": [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
        "]": [IN_PATH, PUSH_SUB_PATH],
        eof: ERROR,
        else: [IN_SUB_PATH, APPEND]
      };

      pathStateMachine[IN_SINGLE_QUOTE] = {
        "'": [IN_SUB_PATH, APPEND],
        eof: ERROR,
        else: [IN_SINGLE_QUOTE, APPEND]
      };

      pathStateMachine[IN_DOUBLE_QUOTE] = {
        '"': [IN_SUB_PATH, APPEND],
        eof: ERROR,
        else: [IN_DOUBLE_QUOTE, APPEND]
      };

      /**
       * Check if an expression is a literal value.
       */

      var literalValueRE = /^\s?(true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
      function isLiteral(exp) {
        return literalValueRE.test(exp);
      }

      /**
       * Strip quotes from a string
       */

      function stripQuotes(str) {
        var a = str.charCodeAt(0);
        var b = str.charCodeAt(str.length - 1);
        return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
      }

      /**
       * Determine the type of a character in a keypath.
       */

      function getPathCharType(ch) {
        if (ch === undefined || ch === null) {
          return "eof";
        }

        var code = ch.charCodeAt(0);

        switch (code) {
          case 0x5b: // [
          case 0x5d: // ]
          case 0x2e: // .
          case 0x22: // "
          case 0x27: // '
          case 0x30: // 0
            return ch;

          case 0x5f: // _
          case 0x24: // $
          case 0x2d: // -
            return "ident";

          case 0x20: // Space
          case 0x09: // Tab
          case 0x0a: // Newline
          case 0x0d: // Return
          case 0xa0: // No-break space
          case 0xfeff: // Byte Order Mark
          case 0x2028: // Line Separator
          case 0x2029: // Paragraph Separator
            return "ws";
        }

        // a-z, A-Z
        if ((code >= 0x61 && code <= 0x7a) || (code >= 0x41 && code <= 0x5a)) {
          return "ident";
        }

        // 1-9
        if (code >= 0x31 && code <= 0x39) {
          return "number";
        }

        return "else";
      }

      /**
       * Format a subPath, return its plain form if it is
       * a literal string or number. Otherwise prepend the
       * dynamic indicator (*).
       */

      function formatSubPath(path) {
        var trimmed = path.trim();
        // invalid leading 0
        if (path.charAt(0) === "0" && isNaN(path)) {
          return false;
        }

        return isLiteral(trimmed) ? stripQuotes(trimmed) : "*" + trimmed;
      }

      /**
       * Parse a string path into an array of segments
       */

      function parse$1(path) {
        var keys = [];
        var index = -1;
        var mode = BEFORE_PATH;
        var subPathDepth = 0;
        var c;
        var key;
        var newChar;
        var type;
        var transition;
        var action;
        var typeMap;
        var actions = [];

        actions[PUSH] = function() {
          if (key !== undefined) {
            keys.push(key);
            key = undefined;
          }
        };

        actions[APPEND] = function() {
          if (key === undefined) {
            key = newChar;
          } else {
            key += newChar;
          }
        };

        actions[INC_SUB_PATH_DEPTH] = function() {
          actions[APPEND]();
          subPathDepth++;
        };

        actions[PUSH_SUB_PATH] = function() {
          if (subPathDepth > 0) {
            subPathDepth--;
            mode = IN_SUB_PATH;
            actions[APPEND]();
          } else {
            subPathDepth = 0;
            key = formatSubPath(key);
            if (key === false) {
              return false;
            } else {
              actions[PUSH]();
            }
          }
        };

        function maybeUnescapeQuote() {
          var nextChar = path[index + 1];
          if (
            (mode === IN_SINGLE_QUOTE && nextChar === "'") ||
            (mode === IN_DOUBLE_QUOTE && nextChar === '"')
          ) {
            index++;
            newChar = "\\" + nextChar;
            actions[APPEND]();
            return true;
          }
        }

        while (mode !== null) {
          index++;
          c = path[index];

          if (c === "\\" && maybeUnescapeQuote()) {
            continue;
          }

          type = getPathCharType(c);
          typeMap = pathStateMachine[mode];
          transition = typeMap[type] || typeMap["else"] || ERROR;

          if (transition === ERROR) {
            return; // parse error
          }

          mode = transition[0];
          action = actions[transition[1]];
          if (action) {
            newChar = transition[2];
            newChar = newChar === undefined ? c : newChar;
            if (action() === false) {
              return;
            }
          }

          if (mode === AFTER_PATH) {
            return keys;
          }
        }
      }

      function empty(target) {
        /* istanbul ignore else */
        if (Array.isArray(target)) {
          return target.length === 0;
        } else {
          return false;
        }
      }

      var I18nPath = function I18nPath() {
        this._cache = Object.create(null);
      };

      /**
       * External parse that check for a cache hit first
       */
      I18nPath.prototype.parsePath = function parsePath(path) {
        var hit = this._cache[path];
        if (!hit) {
          hit = parse$1(path);
          if (hit) {
            this._cache[path] = hit;
          }
        }
        return hit || [];
      };

      /**
       * Get path value from path string
       */
      I18nPath.prototype.getPathValue = function getPathValue(obj, path) {
        if (!isObject(obj)) {
          return null;
        }

        var paths = this.parsePath(path);
        if (empty(paths)) {
          return null;
        } else {
          var length = paths.length;
          var ret = null;
          var last = obj;
          var i = 0;
          while (i < length) {
            var value = last[paths[i]];
            if (value === undefined) {
              last = null;
              break;
            }
            last = value;
            i++;
          }

          ret = last;
          return ret;
        }
      };

      /*  */

      var numberFormatKeys = [
        "style",
        "currency",
        "currencyDisplay",
        "useGrouping",
        "minimumIntegerDigits",
        "minimumFractionDigits",
        "maximumFractionDigits",
        "minimumSignificantDigits",
        "maximumSignificantDigits",
        "localeMatcher",
        "formatMatcher"
      ];

      var VueI18n = function VueI18n(options) {
        var this$1 = this;
        if (options === void 0) options = {};

        // Auto install if it is not done yet and `window` has `Vue`.
        // To allow users to avoid auto-installation in some cases,
        // this code should be placed here. See #290
        /* istanbul ignore if */
        if (!Vue && typeof window !== "undefined" && window.Vue) {
          install(window.Vue);
        }

        var locale = options.locale || "en-US";
        var fallbackLocale = options.fallbackLocale || "en-US";
        var messages = options.messages || {};
        var dateTimeFormats = options.dateTimeFormats || {};
        var numberFormats = options.numberFormats || {};

        this._vm = null;
        this._formatter = options.formatter || new BaseFormatter();
        this._missing = options.missing || null;
        this._root = options.root || null;
        this._sync = options.sync === undefined ? true : !!options.sync;
        this._fallbackRoot =
          options.fallbackRoot === undefined ? true : !!options.fallbackRoot;
        this._silentTranslationWarn =
          options.silentTranslationWarn === undefined
            ? false
            : !!options.silentTranslationWarn;
        this._dateTimeFormatters = {};
        this._numberFormatters = {};
        this._path = new I18nPath();
        this._dataListeners = [];

        this._exist = function(message, key) {
          if (!message || !key) {
            return false;
          }
          return !isNull(this$1._path.getPathValue(message, key));
        };

        this._initVM({
          locale: locale,
          fallbackLocale: fallbackLocale,
          messages: messages,
          dateTimeFormats: dateTimeFormats,
          numberFormats: numberFormats
        });
      };

      var prototypeAccessors = {
        vm: { configurable: true },
        messages: { configurable: true },
        dateTimeFormats: { configurable: true },
        numberFormats: { configurable: true },
        locale: { configurable: true },
        fallbackLocale: { configurable: true },
        missing: { configurable: true },
        formatter: { configurable: true },
        silentTranslationWarn: { configurable: true }
      };

      VueI18n.prototype._initVM = function _initVM(data) {
        var silent = Vue.config.silent;
        Vue.config.silent = true;
        this._vm = new Vue({ data: data });
        Vue.config.silent = silent;
      };

      VueI18n.prototype.subscribeDataChanging = function subscribeDataChanging(
        vm
      ) {
        this._dataListeners.push(vm);
      };

      VueI18n.prototype.unsubscribeDataChanging = function unsubscribeDataChanging(
        vm
      ) {
        remove(this._dataListeners, vm);
      };

      VueI18n.prototype.watchI18nData = function watchI18nData() {
        var self = this;
        return this._vm.$watch(
          "$data",
          function() {
            var i = self._dataListeners.length;
            while (i--) {
              Vue.nextTick(function() {
                self._dataListeners[i] && self._dataListeners[i].$forceUpdate();
              });
            }
          },
          { deep: true }
        );
      };

      VueI18n.prototype.watchLocale = function watchLocale() {
        /* istanbul ignore if */
        if (!this._sync || !this._root) {
          return null;
        }
        var target = this._vm;
        return this._root.vm.$watch(
          "locale",
          function(val) {
            target.$set(target, "locale", val);
            target.$forceUpdate();
          },
          { immediate: true }
        );
      };

      prototypeAccessors.vm.get = function() {
        return this._vm;
      };

      prototypeAccessors.messages.get = function() {
        return looseClone(this._getMessages());
      };
      prototypeAccessors.dateTimeFormats.get = function() {
        return looseClone(this._getDateTimeFormats());
      };
      prototypeAccessors.numberFormats.get = function() {
        return looseClone(this._getNumberFormats());
      };

      prototypeAccessors.locale.get = function() {
        return this._vm.locale;
      };
      prototypeAccessors.locale.set = function(locale) {
        this._vm.$set(this._vm, "locale", locale);
      };

      prototypeAccessors.fallbackLocale.get = function() {
        return this._vm.fallbackLocale;
      };
      prototypeAccessors.fallbackLocale.set = function(locale) {
        this._vm.$set(this._vm, "fallbackLocale", locale);
      };

      prototypeAccessors.missing.get = function() {
        return this._missing;
      };
      prototypeAccessors.missing.set = function(handler) {
        this._missing = handler;
      };

      prototypeAccessors.formatter.get = function() {
        return this._formatter;
      };
      prototypeAccessors.formatter.set = function(formatter) {
        this._formatter = formatter;
      };

      prototypeAccessors.silentTranslationWarn.get = function() {
        return this._silentTranslationWarn;
      };
      prototypeAccessors.silentTranslationWarn.set = function(silent) {
        this._silentTranslationWarn = silent;
      };

      VueI18n.prototype._getMessages = function _getMessages() {
        return this._vm.messages;
      };
      VueI18n.prototype._getDateTimeFormats = function _getDateTimeFormats() {
        return this._vm.dateTimeFormats;
      };
      VueI18n.prototype._getNumberFormats = function _getNumberFormats() {
        return this._vm.numberFormats;
      };

      VueI18n.prototype._warnDefault = function _warnDefault(
        locale,
        key,
        result,
        vm,
        values
      ) {
        if (!isNull(result)) {
          return result;
        }
        if (this._missing) {
          var missingRet = this._missing.apply(null, [locale, key, vm, values]);
          if (typeof missingRet === "string") {
            return missingRet;
          }
        } else {
          if (false) {
          }
        }
        return key;
      };

      VueI18n.prototype._isFallbackRoot = function _isFallbackRoot(val) {
        return !val && !isNull(this._root) && this._fallbackRoot;
      };

      VueI18n.prototype._interpolate = function _interpolate(
        locale,
        message,
        key,
        host,
        interpolateMode,
        values
      ) {
        if (!message) {
          return null;
        }

        var pathRet = this._path.getPathValue(message, key);
        if (Array.isArray(pathRet) || isPlainObject(pathRet)) {
          return pathRet;
        }

        var ret;
        if (isNull(pathRet)) {
          /* istanbul ignore else */
          if (isPlainObject(message)) {
            ret = message[key];
            if (typeof ret !== "string") {
              if (false) {
              }
              return null;
            }
          } else {
            return null;
          }
        } else {
          /* istanbul ignore else */
          if (typeof pathRet === "string") {
            ret = pathRet;
          } else {
            if (false) {
            }
            return null;
          }
        }

        // Check for the existance of links within the translated string
        if (ret.indexOf("@:") >= 0) {
          ret = this._link(locale, message, ret, host, interpolateMode, values);
        }

        return this._render(ret, interpolateMode, values);
      };

      VueI18n.prototype._link = function _link(
        locale,
        message,
        str,
        host,
        interpolateMode,
        values
      ) {
        var this$1 = this;

        var ret = str;

        // Match all the links within the local
        // We are going to replace each of
        // them with its translation
        var matches = ret.match(/(@:[\w\-_|.]+)/g);
        for (var idx in matches) {
          // ie compatible: filter custom array
          // prototype method
          if (!matches.hasOwnProperty(idx)) {
            continue;
          }
          var link = matches[idx];
          // Remove the leading @:
          var linkPlaceholder = link.substr(2);
          // Translate the link
          var translated = this$1._interpolate(
            locale,
            message,
            linkPlaceholder,
            host,
            interpolateMode === "raw" ? "string" : interpolateMode,
            interpolateMode === "raw" ? undefined : values
          );

          if (this$1._isFallbackRoot(translated)) {
            if (false) {
            }
            /* istanbul ignore if */
            if (!this$1._root) {
              throw Error("unexpected error");
            }
            var root = this$1._root;
            translated = root._translate(
              root._getMessages(),
              root.locale,
              root.fallbackLocale,
              linkPlaceholder,
              host,
              interpolateMode,
              values
            );
          }
          translated = this$1._warnDefault(
            locale,
            linkPlaceholder,
            translated,
            host,
            Array.isArray(values) ? values : [values]
          );

          // Replace the link with the translated
          ret = !translated ? ret : ret.replace(link, translated);
        }

        return ret;
      };

      VueI18n.prototype._render = function _render(
        message,
        interpolateMode,
        values
      ) {
        var ret = this._formatter.interpolate(message, values);
        // if interpolateMode is **not** 'string' ('row'),
        // return the compiled data (e.g. ['foo', VNode, 'bar']) with formatter
        return interpolateMode === "string" ? ret.join("") : ret;
      };

      VueI18n.prototype._translate = function _translate(
        messages,
        locale,
        fallback,
        key,
        host,
        interpolateMode,
        args
      ) {
        var res = this._interpolate(
          locale,
          messages[locale],
          key,
          host,
          interpolateMode,
          args
        );
        if (!isNull(res)) {
          return res;
        }

        res = this._interpolate(
          fallback,
          messages[fallback],
          key,
          host,
          interpolateMode,
          args
        );
        if (!isNull(res)) {
          if (false) {
          }
          return res;
        } else {
          return null;
        }
      };

      VueI18n.prototype._t = function _t(key, _locale, messages, host) {
        var ref;

        var values = [],
          len = arguments.length - 4;
        while (len-- > 0) values[len] = arguments[len + 4];
        if (!key) {
          return "";
        }

        var parsedArgs = parseArgs.apply(void 0, values);
        var locale = parsedArgs.locale || _locale;

        var ret = this._translate(
          messages,
          locale,
          this.fallbackLocale,
          key,
          host,
          "string",
          parsedArgs.params
        );
        if (this._isFallbackRoot(ret)) {
          if (false) {
          }
          /* istanbul ignore if */
          if (!this._root) {
            throw Error("unexpected error");
          }
          return (ref = this._root).t.apply(ref, [key].concat(values));
        } else {
          return this._warnDefault(locale, key, ret, host, values);
        }
      };

      VueI18n.prototype.t = function t(key) {
        var ref;

        var values = [],
          len = arguments.length - 1;
        while (len-- > 0) values[len] = arguments[len + 1];
        return (ref = this)._t.apply(
          ref,
          [key, this.locale, this._getMessages(), null].concat(values)
        );
      };

      VueI18n.prototype._i = function _i(key, locale, messages, host, values) {
        var ret = this._translate(
          messages,
          locale,
          this.fallbackLocale,
          key,
          host,
          "raw",
          values
        );
        if (this._isFallbackRoot(ret)) {
          if (false) {
          }
          if (!this._root) {
            throw Error("unexpected error");
          }
          return this._root.i(key, locale, values);
        } else {
          return this._warnDefault(locale, key, ret, host, [values]);
        }
      };

      VueI18n.prototype.i = function i(key, locale, values) {
        /* istanbul ignore if */
        if (!key) {
          return "";
        }

        if (typeof locale !== "string") {
          locale = this.locale;
        }

        return this._i(key, locale, this._getMessages(), null, values);
      };

      VueI18n.prototype._tc = function _tc(
        key,
        _locale,
        messages,
        host,
        choice
      ) {
        var ref;

        var values = [],
          len = arguments.length - 5;
        while (len-- > 0) values[len] = arguments[len + 5];
        if (!key) {
          return "";
        }
        if (choice === undefined) {
          choice = 1;
        }
        return fetchChoice(
          (ref = this)._t.apply(
            ref,
            [key, _locale, messages, host].concat(values)
          ),
          choice
        );
      };

      VueI18n.prototype.tc = function tc(key, choice) {
        var ref;

        var values = [],
          len = arguments.length - 2;
        while (len-- > 0) values[len] = arguments[len + 2];
        return (ref = this)._tc.apply(
          ref,
          [key, this.locale, this._getMessages(), null, choice].concat(values)
        );
      };

      VueI18n.prototype._te = function _te(key, locale, messages) {
        var args = [],
          len = arguments.length - 3;
        while (len-- > 0) args[len] = arguments[len + 3];

        var _locale = parseArgs.apply(void 0, args).locale || locale;
        return this._exist(messages[_locale], key);
      };

      VueI18n.prototype.te = function te(key, locale) {
        return this._te(key, this.locale, this._getMessages(), locale);
      };

      VueI18n.prototype.getLocaleMessage = function getLocaleMessage(locale) {
        return looseClone(this._vm.messages[locale] || {});
      };

      VueI18n.prototype.setLocaleMessage = function setLocaleMessage(
        locale,
        message
      ) {
        this._vm.$set(this._vm.messages, locale, message);
      };

      VueI18n.prototype.mergeLocaleMessage = function mergeLocaleMessage(
        locale,
        message
      ) {
        this._vm.$set(
          this._vm.messages,
          locale,
          Vue.util.extend(this._vm.messages[locale] || {}, message)
        );
      };

      VueI18n.prototype.getDateTimeFormat = function getDateTimeFormat(locale) {
        return looseClone(this._vm.dateTimeFormats[locale] || {});
      };

      VueI18n.prototype.setDateTimeFormat = function setDateTimeFormat(
        locale,
        format
      ) {
        this._vm.$set(this._vm.dateTimeFormats, locale, format);
      };

      VueI18n.prototype.mergeDateTimeFormat = function mergeDateTimeFormat(
        locale,
        format
      ) {
        this._vm.$set(
          this._vm.dateTimeFormats,
          locale,
          Vue.util.extend(this._vm.dateTimeFormats[locale] || {}, format)
        );
      };

      VueI18n.prototype._localizeDateTime = function _localizeDateTime(
        value,
        locale,
        fallback,
        dateTimeFormats,
        key
      ) {
        var _locale = locale;
        var formats = dateTimeFormats[_locale];

        // fallback locale
        if (isNull(formats) || isNull(formats[key])) {
          if (false) {
          }
          _locale = fallback;
          formats = dateTimeFormats[_locale];
        }

        if (isNull(formats) || isNull(formats[key])) {
          return null;
        } else {
          var format = formats[key];
          var id = _locale + "__" + key;
          var formatter = this._dateTimeFormatters[id];
          if (!formatter) {
            formatter = this._dateTimeFormatters[id] = new Intl.DateTimeFormat(
              _locale,
              format
            );
          }
          return formatter.format(value);
        }
      };

      VueI18n.prototype._d = function _d(value, locale, key) {
        /* istanbul ignore if */
        if (false) {
        }

        if (!key) {
          return new Intl.DateTimeFormat(locale).format(value);
        }

        var ret = this._localizeDateTime(
          value,
          locale,
          this.fallbackLocale,
          this._getDateTimeFormats(),
          key
        );
        if (this._isFallbackRoot(ret)) {
          if (false) {
          }
          /* istanbul ignore if */
          if (!this._root) {
            throw Error("unexpected error");
          }
          return this._root.d(value, key, locale);
        } else {
          return ret || "";
        }
      };

      VueI18n.prototype.d = function d(value) {
        var args = [],
          len = arguments.length - 1;
        while (len-- > 0) args[len] = arguments[len + 1];

        var locale = this.locale;
        var key = null;

        if (args.length === 1) {
          if (typeof args[0] === "string") {
            key = args[0];
          } else if (isObject(args[0])) {
            if (args[0].locale) {
              locale = args[0].locale;
            }
            if (args[0].key) {
              key = args[0].key;
            }
          }
        } else if (args.length === 2) {
          if (typeof args[0] === "string") {
            key = args[0];
          }
          if (typeof args[1] === "string") {
            locale = args[1];
          }
        }

        return this._d(value, locale, key);
      };

      VueI18n.prototype.getNumberFormat = function getNumberFormat(locale) {
        return looseClone(this._vm.numberFormats[locale] || {});
      };

      VueI18n.prototype.setNumberFormat = function setNumberFormat(
        locale,
        format
      ) {
        this._vm.$set(this._vm.numberFormats, locale, format);
      };

      VueI18n.prototype.mergeNumberFormat = function mergeNumberFormat(
        locale,
        format
      ) {
        this._vm.$set(
          this._vm.numberFormats,
          locale,
          Vue.util.extend(this._vm.numberFormats[locale] || {}, format)
        );
      };

      VueI18n.prototype._localizeNumber = function _localizeNumber(
        value,
        locale,
        fallback,
        numberFormats,
        key,
        options
      ) {
        var _locale = locale;
        var formats = numberFormats[_locale];

        // fallback locale
        if (isNull(formats) || isNull(formats[key])) {
          if (false) {
          }
          _locale = fallback;
          formats = numberFormats[_locale];
        }

        if (isNull(formats) || isNull(formats[key])) {
          return null;
        } else {
          var format = formats[key];

          var formatter;
          if (options) {
            // If options specified - create one time number formatter
            formatter = new Intl.NumberFormat(
              _locale,
              Object.assign({}, format, options)
            );
          } else {
            var id = _locale + "__" + key;
            formatter = this._numberFormatters[id];
            if (!formatter) {
              formatter = this._numberFormatters[id] = new Intl.NumberFormat(
                _locale,
                format
              );
            }
          }
          return formatter.format(value);
        }
      };

      VueI18n.prototype._n = function _n(value, locale, key, options) {
        /* istanbul ignore if */
        if (false) {
        }

        if (!key) {
          var nf = !options
            ? new Intl.NumberFormat(locale)
            : new Intl.NumberFormat(locale, options);
          return nf.format(value);
        }

        var ret = this._localizeNumber(
          value,
          locale,
          this.fallbackLocale,
          this._getNumberFormats(),
          key,
          options
        );
        if (this._isFallbackRoot(ret)) {
          if (false) {
          }
          /* istanbul ignore if */
          if (!this._root) {
            throw Error("unexpected error");
          }
          return this._root.n(
            value,
            Object.assign({}, { key: key, locale: locale }, options)
          );
        } else {
          return ret || "";
        }
      };

      VueI18n.prototype.n = function n(value) {
        var args = [],
          len = arguments.length - 1;
        while (len-- > 0) args[len] = arguments[len + 1];

        var locale = this.locale;
        var key = null;
        var options = null;

        if (args.length === 1) {
          if (typeof args[0] === "string") {
            key = args[0];
          } else if (isObject(args[0])) {
            if (args[0].locale) {
              locale = args[0].locale;
            }
            if (args[0].key) {
              key = args[0].key;
            }

            // Filter out number format options only
            options = Object.keys(args[0]).reduce(function(acc, key) {
              var obj;

              if (numberFormatKeys.includes(key)) {
                return Object.assign(
                  {},
                  acc,
                  ((obj = {}), (obj[key] = args[0][key]), obj)
                );
              }
              return acc;
            }, null);
          }
        } else if (args.length === 2) {
          if (typeof args[0] === "string") {
            key = args[0];
          }
          if (typeof args[1] === "string") {
            locale = args[1];
          }
        }

        return this._n(value, locale, key, options);
      };

      Object.defineProperties(VueI18n.prototype, prototypeAccessors);

      VueI18n.availabilities = {
        dateTimeFormat: canUseDateTimeFormat,
        numberFormat: canUseNumberFormat
      };
      VueI18n.install = install;
      VueI18n.version = "8.1.0";

      /* harmony default export */ var vue_i18n_esm = VueI18n;

      // CONCATENATED MODULE: ./src/i18n.js

      function checkLang(availableLanguages) {
        // These window.navigator contain language information
        // 1. languages -> Array of preferred languages (eg ["en-US", "zh-CN", "ja-JP"]) Firefox^32, Chrome^32
        // 2. language  -> Preferred language as String (eg "en-US") Firefox^5, IE^11, Safari,
        //                 Chrome sends Browser UI language
        // 3. browserLanguage -> UI Language of IE
        // 4. userLanguage    -> Language of Windows Regional Options
        // 5. systemLanguage  -> UI Language of Windows
        var browserLanguagePropertyKeys = [
          "languages",
          "language",
          "browserLanguage",
          "userLanguage",
          "systemLanguage"
        ];
        var allLangs = [];
        browserLanguagePropertyKeys.forEach(a => allLangs.push(navigator[a]));
        allLangs = [].concat
          .apply([], allLangs) // merge all values into flattened array
          .filter(v => v) //Remove undefined values
          .map(v => v.substring(0, 2)) //Shorten strings to use two chars (en-US -> en)
          .filter((v, i, a) => a.indexOf(v) === i); // Returns unique values

        var detectedLocale = allLangs.find(
          x => availableLanguages.indexOf(x) !== -1
        ); //Returns first language matched in available languages

        return detectedLocale || "en"; //If no locale is detected, fallback to 'en'
      }

      function loadLocaleMessages() {
        var locales = __webpack_require__("88b1");

        var messages = {};
        locales.keys().forEach(key => {
          var matched = key.match(/([a-z0-9]+)\./i);

          if (matched && matched.length > 1) {
            var locale = matched[1];
            messages[locale] = locales(key);
          }
        });
        return messages;
      }

      external_Vue_default.a.use(vue_i18n_esm);
      /* harmony default export */ var i18n = new vue_i18n_esm({
        locale: checkLang(["fr", "en"]),
        fallbackLocale: "en",
        messages: loadLocaleMessages()
      }); // Vue.use(VueI18n,{
      //   locale: checkLang(["fr", "en"]),
      //   fallbackLocale: "en",
      //   messages: loadLocaleMessages()
      // });
      // EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.to-string.js
      var es6_regexp_to_string = __webpack_require__("6b54");

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
      var es6_regexp_replace = __webpack_require__("a481");

      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-awesome/components/Icon.vue?vue&type=script&lang=js&

      function Iconvue_type_script_lang_js_assign(obj) {
        for (
          var _len = arguments.length,
            sources = new Array(_len > 1 ? _len - 1 : 0),
            _key = 1;
          _key < _len;
          _key++
        ) {
          sources[_key - 1] = arguments[_key];
        }

        sources.forEach(source => {
          for (var key in source) {
            if (source.hasOwnProperty(key)) {
              obj[key] = source[key];
            }
          }
        });
        return obj;
      }

      var icons = {};
      /* harmony default export */ var Iconvue_type_script_lang_js_ = {
        name: "fa-icon",

        render(h) {
          var options = {
            class: this.klass,
            style: this.style,
            attrs: {
              role: this.label ? "img" : "presentation",
              "aria-label": this.label || null,
              x: this.x,
              y: this.y,
              width: this.width,
              height: this.height,
              viewBox: this.box
            }
          };

          if (this.raw) {
            options.domProps = {
              innerHTML: this.raw
            };
          }

          return h(
            "svg",
            options,
            this.raw && this.icon
              ? null
              : this.$slots.default || [
                  ...this.icon.paths.map((path, i) =>
                    h("path", {
                      attrs: path,
                      key: `path-${i}`
                    })
                  ),
                  ...this.icon.polygons.map((polygon, i) =>
                    h("polygon", {
                      attrs: polygon,
                      key: `polygon-${i}`
                    })
                  )
                ]
          );
        },

        props: {
          name: {
            type: String,

            validator(val) {
              if (val && !(val in icons)) {
                console.warn(
                  `Invalid prop: prop "name" is referring to an unregistered icon "${val}".` +
                    `\nPlease make sure you have imported this icon before using it.`
                );
                return false;
              }

              return true;
            }
          },
          scale: [Number, String],
          spin: Boolean,
          inverse: Boolean,
          pulse: Boolean,
          flip: {
            validator(val) {
              return val === "horizontal" || val === "vertical";
            }
          },
          label: String
        },

        data() {
          return {
            x: false,
            y: false,
            childrenWidth: 0,
            childrenHeight: 0,
            outerScale: 1
          };
        },

        computed: {
          normalizedScale() {
            var scale = this.scale;
            scale = typeof scale === "undefined" ? 1 : Number(scale);

            if (isNaN(scale) || scale <= 0) {
              console.warn(
                `Invalid prop: prop "scale" should be a number over 0.`,
                this
              );
              return this.outerScale;
            }

            return scale * this.outerScale;
          },

          klass() {
            return {
              "fa-icon": true,
              "fa-spin": this.spin,
              "fa-flip-horizontal": this.flip === "horizontal",
              "fa-flip-vertical": this.flip === "vertical",
              "fa-inverse": this.inverse,
              "fa-pulse": this.pulse,
              [this.$options.name]: true
            };
          },

          icon() {
            if (this.name) {
              return icons[this.name];
            }

            return null;
          },

          box() {
            if (this.icon) {
              return `0 0 ${this.icon.width} ${this.icon.height}`;
            }

            return `0 0 ${this.width} ${this.height}`;
          },

          ratio() {
            if (!this.icon) {
              return 1;
            }

            var _this$icon = this.icon,
              width = _this$icon.width,
              height = _this$icon.height;
            return Math.max(width, height) / 16;
          },

          width() {
            return (
              this.childrenWidth ||
              (this.icon &&
                (this.icon.width / this.ratio) * this.normalizedScale) ||
              0
            );
          },

          height() {
            return (
              this.childrenHeight ||
              (this.icon &&
                (this.icon.height / this.ratio) * this.normalizedScale) ||
              0
            );
          },

          style() {
            if (this.normalizedScale === 1) {
              return false;
            }

            return {
              fontSize: this.normalizedScale + "em"
            };
          },

          raw() {
            // generate unique id for each icon's SVG element with ID
            if (!this.icon || !this.icon.raw) {
              return null;
            }

            var raw = this.icon.raw;
            var ids = {};
            raw = raw.replace(
              /\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g,
              (match, quote, id) => {
                var uniqueId = getId();
                ids[id] = uniqueId;
                return ` id="${uniqueId}"`;
              }
            );
            raw = raw.replace(
              /#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,
              (match, rawId, _, pointerId) => {
                var id = rawId || pointerId;

                if (!id || !ids[id]) {
                  return match;
                }

                return `#${ids[id]}`;
              }
            );
            return raw;
          }
        },

        mounted() {
          if (!this.name && this.$children.length === 0) {
            console.warn(`Invalid prop: prop "name" is required.`);
            return;
          }

          if (this.icon) {
            return;
          }

          var width = 0;
          var height = 0;
          this.$children.forEach(child => {
            child.outerScale = this.normalizedScale;
            width = Math.max(width, child.width);
            height = Math.max(height, child.height);
          });
          this.childrenWidth = width;
          this.childrenHeight = height;
          this.$children.forEach(child => {
            child.x = (width - child.width) / 2;
            child.y = (height - child.height) / 2;
          });
        },

        register(data) {
          for (var name in data) {
            var icon = data[name];
            var _icon$paths = icon.paths,
              paths = _icon$paths === void 0 ? [] : _icon$paths,
              d = icon.d,
              _icon$polygons = icon.polygons,
              polygons = _icon$polygons === void 0 ? [] : _icon$polygons,
              points = icon.points;

            if (d) {
              paths.push({
                d
              });
            }

            if (points) {
              polygons.push({
                points
              });
            }

            icons[name] = Iconvue_type_script_lang_js_assign({}, icon, {
              paths,
              polygons
            });
          }
        },

        icons
      };
      var cursor = 0xd4937;

      function getId() {
        return `fa-${(cursor++).toString(16)}`;
      }
      // CONCATENATED MODULE: ./node_modules/vue-awesome/components/Icon.vue?vue&type=script&lang=js&
      /* harmony default export */ var components_Iconvue_type_script_lang_js_ = Iconvue_type_script_lang_js_;
      // CONCATENATED MODULE: ./node_modules/vue-awesome/components/Icon.vue
      var Icon_render, Icon_staticRenderFns;

      function injectStyles(context) {
        var style0 = __webpack_require__("df9a");
        if (style0.__inject__) style0.__inject__(context);
      }

      /* normalize component */

      var Icon_component = normalizeComponent(
        components_Iconvue_type_script_lang_js_,
        Icon_render,
        Icon_staticRenderFns,
        false,
        injectStyles,
        null,
        null,
        true
      );

      Icon_component.options.__file = "Icon.vue";
      /* harmony default export */ var Icon = Icon_component.exports;
      // CONCATENATED MODULE: ./node_modules/vue-awesome/icons/star.js

      Icon.register({
        star: {
          width: 576,
          height: 512,
          paths: [
            {
              d:
                "M259.3 17.8L194 150.2 47.9 171.5C21.7 175.3 11.2 207.6 30.2 226.1L135.9 329.1 110.9 474.6C106.4 500.9 134.1 520.6 157.3 508.3L288 439.6 418.7 508.3C441.9 520.5 469.6 500.9 465.1 474.6L440.1 329.1 545.8 226.1C564.8 207.6 554.3 175.3 528.1 171.5L382 150.2 316.7 17.8C305-5.8 271.1-6.1 259.3 17.8z"
            }
          ]
        }
      });

      // CONCATENATED MODULE: ./node_modules/vue-awesome/icons/regular/star.js

      Icon.register({
        "regular/star": {
          width: 576,
          height: 512,
          paths: [
            {
              d:
                "M528.1 171.5L382 150.2 316.7 17.8C305-5.8 271.1-6.1 259.3 17.8L194 150.2 47.9 171.5C21.7 175.3 11.2 207.6 30.2 226.1L135.9 329.1 110.9 474.6C106.4 500.9 134.1 520.6 157.3 508.3L288 439.6 418.7 508.3C441.9 520.5 469.6 500.9 465.1 474.6L440.1 329.1 545.8 226.1C564.8 207.6 554.3 175.3 528.1 171.5zM388.6 312.3L412.3 450.7 288 385.4 163.7 450.7 187.4 312.3 86.8 214.3 225.8 194.1 288 68.1 350.2 194.1 489.2 214.3 388.6 312.3z"
            }
          ]
        }
      });

      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ActionFavorites.vue?vue&type=script&lang=js&shadow
      //
      //
      //
      //
      //
      //
      //

      var checkStatus = function checkStatus(response) {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(response.statusText);
          error.response = response;
          throw error;
        }
      };

      var parseJSON = function parseJSON(response) {
        return response.json();
      };
      /*eslint no-console: ["error", { allow: ["warn", "error"] }] */

      /* harmony default export */ var ActionFavoritesvue_type_script_lang_js_shadow = {
        name: "ActionFavorites",
        props: {
          callOnToggleFav: Function,
          chanId: {
            type: String,
            required: true
          },
          favoriteApiUrl: {
            type: String,
            default: "/uPortal" + "/api/layout"
          },
          userInfoApiUrl: {
            type: String,
            default: "/uPortal" + "/api/v5-1/userinfo"
          },
          fname: String,
          isFavorite: {
            type: Boolean,
            default: false
          }
        },
        components: {
          Icon: Icon
        },

        data() {
          return {
            favorite: this.isFavorite
          };
        },

        methods: {
          translate: function translate(text, lang) {
            return i18n.t(text, lang);
          },
          toggleFavorite: function toggleFavorite(event) {
            event.preventDefault();

            if (true) {
              if (this.favorite) {
                this.removeFromFavorite();
              } else {
                this.addToFavorite();
              }
            } else {
            }

            return false;
          },
          changeFavoriteValue: function changeFavoriteValue() {
            this.favorite = !this.favorite;
            this.$emit("is-favorite", this.favorite);

            if (typeof this.callOnToggleFav === "function") {
              this.callOnToggleFav(this.favorite, this.fname);
            }
          },
          addToFavorite: function addToFavorite() {
            openIdConnect({
              userInfoApiUrl: this.userInfoApiUrl
            })
              .then(token => {
                var options = {
                  method: "POST",
                  credentials: "same-origin",
                  headers: {
                    Authorization: "Bearer " + token.encoded,
                    "Content-Type": "application/json"
                  }
                };
                fetch(
                  this.favoriteApiUrl +
                    "?action=addFavorite&channelId=" +
                    this.chanId,
                  options
                )
                  .then(checkStatus)
                  .then(parseJSON)
                  .then(this.changeFavoriteValue());
              })
              .catch(err =>
                console.error("Error, with message:", err.statusText)
              );
          },
          removeFromFavorite: function removeFromFavorite() {
            openIdConnect({
              userInfoApiUrl: this.userInfoApiUrl
            })
              .then(token => {
                var options = {
                  method: "POST",
                  credentials: "same-origin",
                  headers: {
                    Authorization: "Bearer " + token.encoded,
                    "Content-Type": "application/json"
                  }
                };
                fetch(
                  this.favoriteApiUrl +
                    "?action=removeFavorite&channelId=" +
                    this.chanId,
                  options
                )
                  .then(checkStatus)
                  .then(parseJSON)
                  .then(this.changeFavoriteValue());
              })
              .catch(err =>
                console.error("Error, with message:", err.statusText)
              );
          }
        }
      };
      // CONCATENATED MODULE: ./src/components/ActionFavorites.vue?vue&type=script&lang=js&shadow
      /* harmony default export */ var components_ActionFavoritesvue_type_script_lang_js_shadow = ActionFavoritesvue_type_script_lang_js_shadow;
      // CONCATENATED MODULE: ./src/components/ActionFavorites.vue?shadow

      function ActionFavoritesshadow_injectStyles(context) {
        var style0 = __webpack_require__("bc78");
        if (style0.__inject__) style0.__inject__(context);
      }

      /* normalize component */

      var ActionFavoritesshadow_component = normalizeComponent(
        components_ActionFavoritesvue_type_script_lang_js_shadow,
        render,
        staticRenderFns,
        false,
        ActionFavoritesshadow_injectStyles,
        "260b491e",
        null,
        true
      );

      ActionFavoritesshadow_component.options.__file = "ActionFavorites.vue";
      /* harmony default export */ var ActionFavoritesshadow =
        ActionFavoritesshadow_component.exports;
      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d50f023a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ContentFavorites.vue?vue&type=template&id=156f4a9f&scoped=true&shadow
      var ContentFavoritesvue_type_template_id_156f4a9f_scoped_true_shadow_render = function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c(
          "section",
          {
            staticClass: "content-favorites",
            class: _vm.showSmall ? "small" : "",
            style: "background-color:" + _vm.backgroundColor
          },
          [
            _c("div", { staticClass: "content-favorites-title" }, [
              _c("h1", [
                _vm._v(_vm._s(_vm.translate("message.favorites.title")))
              ])
            ]),
            _c(
              "div",
              {
                ref: "favsSection",
                staticClass: "favorites",
                style: _vm.favorited.length > 0 ? "" : "display:none"
              },
              [
                _c(
                  "swiper",
                  {
                    ref: "favSwiper",
                    attrs: { options: _vm.swiperOption },
                    on: { transitionEnd: _vm.updateSlider }
                  },
                  _vm._l(_vm.favorited, function(portlet) {
                    return _c("swiper-slide", { key: portlet.id }, [
                      _c(
                        "a",
                        {
                          staticClass: "no-style",
                          attrs: {
                            href: portlet.renderUrl,
                            target: portlet.layoutObject.altMaxUrl
                              ? "_blank"
                              : "_self"
                          }
                        },
                        [
                          _c("portlet-card", {
                            attrs: {
                              "portlet-desc": portlet,
                              "is-favorite": true,
                              "is-small": _vm.showSmall,
                              "call-after-action": _vm.callAfterFavAction,
                              "back-ground-is-dark": true,
                              "favorite-api-url": _vm.favoriteApiUrl,
                              "user-info-api-url": _vm.userInfoApiUrl
                            }
                          })
                        ],
                        1
                      )
                    ]);
                  })
                ),
                _c(
                  "div",
                  {
                    staticClass: "swiper-button-prev",
                    class: _vm.disablePrev ? "fav-swiper-button-disabled" : "",
                    attrs: { slot: "button-prev" },
                    on: {
                      click: function($event) {
                        _vm.slidePrev($event);
                      }
                    },
                    slot: "button-prev"
                  },
                  [_c("icon", { attrs: { name: "chevron-left" } })],
                  1
                ),
                _c(
                  "div",
                  {
                    staticClass: "swiper-button-next",
                    class: _vm.disableNext ? "fav-swiper-button-disabled" : "",
                    attrs: { slot: "button-next" },
                    on: {
                      click: function($event) {
                        _vm.slideNext($event);
                      }
                    },
                    slot: "button-next"
                  },
                  [_c("icon", { attrs: { name: "chevron-right" } })],
                  1
                )
              ],
              1
            ),
            _c(
              "div",
              {
                staticClass: "empty-favorites",
                style: _vm.favorited.length > 0 ? "display:none" : ""
              },
              [
                _c("div", [
                  _vm._v(_vm._s(_vm.translate("message.favorites.empty")))
                ])
              ]
            )
          ]
        );
      };
      var ContentFavoritesvue_type_template_id_156f4a9f_scoped_true_shadow_staticRenderFns = [];

      // CONCATENATED MODULE: ./src/components/ContentFavorites.vue?vue&type=template&id=156f4a9f&scoped=true&shadow

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es7.symbol.async-iterator.js
      var es7_symbol_async_iterator = __webpack_require__("ac4d");

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es6.symbol.js
      var es6_symbol = __webpack_require__("8a81");

      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d50f023a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PortletCard.vue?vue&type=template&id=31cef4fd&scoped=true&
      var PortletCardvue_type_template_id_31cef4fd_scoped_true_render = function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c("div", { class: _vm.mainClass }, [
          _c("div", { staticClass: "portlet-card-icon" }, [
            _vm.iconUrl !== null
              ? _c(
                  "div",
                  {
                    staticClass: "img-wrapper",
                    style: "background-color:" + _vm.iconBackgroundColor
                  },
                  [_c("img", { attrs: { src: _vm.iconUrl, alt: _vm.title } })]
                )
              : _c("div", {
                  staticClass: "img-wrapper",
                  style: "background-color:" + _vm.iconBackgroundColor
                })
          ]),
          _c("div", { staticClass: "portlet-card-title" }, [
            _vm._v(_vm._s(_vm.title))
          ]),
          _c(
            "div",
            { staticClass: "portlet-card-description" },
            [
              _c("ellipsis", {
                attrs: {
                  message: _vm.description,
                  "line-clamp": 2,
                  "line-height": "20px",
                  "end-char": "..."
                }
              })
            ],
            1
          ),
          _c(
            "div",
            { staticClass: "portlet-card-action" },
            [
              _vm.canFavorite
                ? _c("action-favorites", {
                    attrs: {
                      fname: _vm.fname,
                      "chan-id": _vm.channelId,
                      "is-favorite": _vm.isFavorite,
                      "call-on-toggle-fav": _vm.callAfterAction,
                      "favorite-api-url": _vm.favoriteApiUrl,
                      "user-info-api-url": _vm.userInfoApiUrl
                    }
                  })
                : _vm._e()
            ],
            1
          )
        ]);
      };
      var PortletCardvue_type_template_id_31cef4fd_scoped_true_staticRenderFns = [];

      // CONCATENATED MODULE: ./src/components/PortletCard.vue?vue&type=template&id=31cef4fd&scoped=true&

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
      var es6_regexp_split = __webpack_require__("28a5");

      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d50f023a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Ellipsis.vue?vue&type=template&id=6b799a38&scoped=true&
      var Ellipsisvue_type_template_id_6b799a38_scoped_true_render = function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c("div", { ref: "sentence" });
      };
      var Ellipsisvue_type_template_id_6b799a38_scoped_true_staticRenderFns = [];

      // CONCATENATED MODULE: ./src/components/Ellipsis.vue?vue&type=template&id=6b799a38&scoped=true&

      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Ellipsis.vue?vue&type=script&lang=js&

      //
      //
      //
      //
      // Code translation from https://github.com/jypblue/vue-ellipsis
      // intregration due to a problem : https://github.com/jypblue/vue-ellipsis/issues/2
      /* harmony default export */ var Ellipsisvue_type_script_lang_js_ = {
        name: "Ellipsis",
        props: {
          message: {
            type: String,
            default: ""
          },
          lineClamp: {
            type: Number,
            default: 1
          },
          lineHeight: {
            type: String,
            default: "22px"
          },
          endChar: {
            type: String,
            default: "..."
          },
          endHtml: {
            type: String,
            default: ""
          }
        },

        mounted() {
          this.$nextTick(function() {
            setTimeout(() => {
              this.handleSubstrSentence();
            }, 200);
          });
        },

        methods: {
          handleSubstrSentence() {
            var stNode = this.$refs.sentence;
            var html = this.message;

            if (html.length === 0) {
              //throw new Error('the String is empty');
              return false;
            }

            stNode.innerHTML = html;
            var startPos = 0;
            var endPos = html.length;
            var stNodeLineHeight = parseInt(this.lineHeight, 10);
            var maxHeight = stNodeLineHeight * this.lineClamp;
            var stNodeHeight =
              stNode.getBoundingClientRect().height || stNodeLineHeight;

            if (stNodeHeight > maxHeight) {
              while (Math.abs(endPos - startPos) > 1) {
                var half = Math.ceil((endPos + startPos) / 2);

                var _newHtml = html.substring(0, half).trim();

                stNode.innerHTML = _newHtml;
                stNodeHeight =
                  stNode.getBoundingClientRect().height || stNodeLineHeight;

                if (stNodeHeight <= maxHeight) {
                  startPos = half;
                } else {
                  endPos = half;
                }
              }

              while (stNodeHeight > maxHeight) {
                var _newHtml2 = stNode.innerHTML.substring(
                  0,
                  stNode.innerHTML.trimRight().length - 1
                );

                stNode.innerHTML = _newHtml2.trim();
                stNodeHeight =
                  stNode.getBoundingClientRect().height || stNodeLineHeight;
              }

              var endStr =
                this.endHtml !== "" ? this.endHtml.replace(/<[^>]+>/g, "") : "";
              var endLen =
                this.endChar === "..."
                  ? 3
                  : endStr.length + this.endChar.length;
              var stNodeLen = stNode.innerHTML.trimRight().length;
              var stNodeDelStr = stNode.innerHTML
                .substring(stNodeLen - endLen, stNodeLen)
                .trim();
              var match = stNodeDelStr.match(/\s+/g);
              var extraLen = match && match.length ? match.length : 0;
              var newHtml =
                stNode.innerHTML
                  .substring(0, stNodeLen - endLen - extraLen)
                  .trim() +
                this.endChar +
                this.endHtml;
              stNode.innerHTML = newHtml;
            }
          }
        },
        watch: {
          message: {
            handler: function handler() {
              this.calcFavoritesPortlets();
            }
          }
        }
      };
      // CONCATENATED MODULE: ./src/components/Ellipsis.vue?vue&type=script&lang=js&
      /* harmony default export */ var components_Ellipsisvue_type_script_lang_js_ = Ellipsisvue_type_script_lang_js_;
      // CONCATENATED MODULE: ./src/components/Ellipsis.vue

      function Ellipsis_injectStyles(context) {
        var style0 = __webpack_require__("33f8");
        if (style0.__inject__) style0.__inject__(context);
      }

      /* normalize component */

      var Ellipsis_component = normalizeComponent(
        components_Ellipsisvue_type_script_lang_js_,
        Ellipsisvue_type_template_id_6b799a38_scoped_true_render,
        Ellipsisvue_type_template_id_6b799a38_scoped_true_staticRenderFns,
        false,
        Ellipsis_injectStyles,
        "6b799a38",
        null,
        true
      );

      Ellipsis_component.options.__file = "Ellipsis.vue";
      /* harmony default export */ var Ellipsis = Ellipsis_component.exports;
      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d50f023a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ActionFavorites.vue?vue&type=template&id=c21b77e4&scoped=true&
      var ActionFavoritesvue_type_template_id_c21b77e4_scoped_true_render = function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c(
          "div",
          {
            class: "action-favorites " + _vm.fname,
            attrs: {
              title: _vm.isFavorite
                ? _vm.translate("message.favorites.remove")
                : _vm.translate("message.favorites.add")
            },
            on: {
              click: function($event) {
                _vm.toggleFavorite($event);
              }
            }
          },
          [
            _c(
              "button",
              { staticClass: "favorite-button" },
              [
                _c("icon", {
                  attrs: { name: _vm.isFavorite ? "star" : "regular/star" }
                })
              ],
              1
            )
          ]
        );
      };
      var ActionFavoritesvue_type_template_id_c21b77e4_scoped_true_staticRenderFns = [];

      // CONCATENATED MODULE: ./src/components/ActionFavorites.vue?vue&type=template&id=c21b77e4&scoped=true&

      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ActionFavorites.vue?vue&type=script&lang=js&
      //
      //
      //
      //
      //
      //
      //

      var ActionFavoritesvue_type_script_lang_js_checkStatus = function checkStatus(
        response
      ) {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(response.statusText);
          error.response = response;
          throw error;
        }
      };

      var ActionFavoritesvue_type_script_lang_js_parseJSON = function parseJSON(
        response
      ) {
        return response.json();
      };
      /*eslint no-console: ["error", { allow: ["warn", "error"] }] */

      /* harmony default export */ var ActionFavoritesvue_type_script_lang_js_ = {
        name: "ActionFavorites",
        props: {
          callOnToggleFav: Function,
          chanId: {
            type: String,
            required: true
          },
          favoriteApiUrl: {
            type: String,
            default: "/uPortal" + "/api/layout"
          },
          userInfoApiUrl: {
            type: String,
            default: "/uPortal" + "/api/v5-1/userinfo"
          },
          fname: String,
          isFavorite: {
            type: Boolean,
            default: false
          }
        },
        components: {
          Icon: Icon
        },

        data() {
          return {
            favorite: this.isFavorite
          };
        },

        methods: {
          translate: function translate(text, lang) {
            return i18n.t(text, lang);
          },
          toggleFavorite: function toggleFavorite(event) {
            event.preventDefault();

            if (true) {
              if (this.favorite) {
                this.removeFromFavorite();
              } else {
                this.addToFavorite();
              }
            } else {
            }

            return false;
          },
          changeFavoriteValue: function changeFavoriteValue() {
            this.favorite = !this.favorite;
            this.$emit("is-favorite", this.favorite);

            if (typeof this.callOnToggleFav === "function") {
              this.callOnToggleFav(this.favorite, this.fname);
            }
          },
          addToFavorite: function addToFavorite() {
            openIdConnect({
              userInfoApiUrl: this.userInfoApiUrl
            })
              .then(token => {
                var options = {
                  method: "POST",
                  credentials: "same-origin",
                  headers: {
                    Authorization: "Bearer " + token.encoded,
                    "Content-Type": "application/json"
                  }
                };
                fetch(
                  this.favoriteApiUrl +
                    "?action=addFavorite&channelId=" +
                    this.chanId,
                  options
                )
                  .then(ActionFavoritesvue_type_script_lang_js_checkStatus)
                  .then(ActionFavoritesvue_type_script_lang_js_parseJSON)
                  .then(this.changeFavoriteValue());
              })
              .catch(err =>
                console.error("Error, with message:", err.statusText)
              );
          },
          removeFromFavorite: function removeFromFavorite() {
            openIdConnect({
              userInfoApiUrl: this.userInfoApiUrl
            })
              .then(token => {
                var options = {
                  method: "POST",
                  credentials: "same-origin",
                  headers: {
                    Authorization: "Bearer " + token.encoded,
                    "Content-Type": "application/json"
                  }
                };
                fetch(
                  this.favoriteApiUrl +
                    "?action=removeFavorite&channelId=" +
                    this.chanId,
                  options
                )
                  .then(ActionFavoritesvue_type_script_lang_js_checkStatus)
                  .then(ActionFavoritesvue_type_script_lang_js_parseJSON)
                  .then(this.changeFavoriteValue());
              })
              .catch(err =>
                console.error("Error, with message:", err.statusText)
              );
          }
        }
      };
      // CONCATENATED MODULE: ./src/components/ActionFavorites.vue?vue&type=script&lang=js&
      /* harmony default export */ var components_ActionFavoritesvue_type_script_lang_js_ = ActionFavoritesvue_type_script_lang_js_;
      // CONCATENATED MODULE: ./src/components/ActionFavorites.vue

      function ActionFavorites_injectStyles(context) {
        var style0 = __webpack_require__("7f2a");
        if (style0.__inject__) style0.__inject__(context);
      }

      /* normalize component */

      var ActionFavorites_component = normalizeComponent(
        components_ActionFavoritesvue_type_script_lang_js_,
        ActionFavoritesvue_type_template_id_c21b77e4_scoped_true_render,
        ActionFavoritesvue_type_template_id_c21b77e4_scoped_true_staticRenderFns,
        false,
        ActionFavorites_injectStyles,
        "c21b77e4",
        null,
        true
      );

      ActionFavorites_component.options.__file = "ActionFavorites.vue";
      /* harmony default export */ var ActionFavorites =
        ActionFavorites_component.exports;
      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PortletCard.vue?vue&type=script&lang=js&

      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //

      /* harmony default export */ var PortletCardvue_type_script_lang_js_ = {
        name: "PortletCard",
        props: {
          callAfterAction: Function,
          cssClass: {
            type: String,
            default: "portlet-card"
          },
          // Background is needed if your icons doesn't have it integrated
          iconBackgroundColor: {
            type: String,
            default: "Transparent"
          },
          isFavorite: {
            type: Boolean,
            default: false
          },
          favoriteApiUrl: {
            type: String,
            default: "/uPortal" + "/api/layout"
          },
          userInfoApiUrl: {
            type: String,
            default: "/uPortal" + "/api/v5-1/userinfo"
          },
          isSmall: {
            type: Boolean,
            default: false
          },
          portletDesc: {
            type: Object,
            required: true
          },
          backGroundIsDark: {
            type: Boolean,
            default: false
          }
        },

        data() {
          return {
            fname: this.portletDesc.fname,
            channelId: this.portletDesc.id,
            description: this.truncate(this.portletDesc.description),
            title: this.portletDesc.title,
            canFavorite: this.portletDesc.canAdd,
            iconUrl:
              this.portletDesc.layoutObject.iconUrl !== null
                ? this.computeIconUrl(this.portletDesc.layoutObject.iconUrl)
                : null
          };
        },

        components: {
          ActionFavorites: ActionFavorites,
          Ellipsis: Ellipsis
        },
        computed: {
          mainClass: function mainClass() {
            var appClass =
              this.cssClass +
              " " +
              this.fname.toLowerCase() +
              " " +
              (this.portletDesc && this.portletDesc.categories
                ? this.portletDesc.categories.join(" ").toLowerCase()
                : "");

            if (this.isSmall) {
              appClass += " small-card";
            }

            if (this.backGroundIsDark) {
              appClass += " background-dark";
            }

            return appClass;
          }
        },
        methods: {
          computeIconUrl: function computeIconUrl(url) {
            if (url != null && !url.startsWith("http")) {
              return "" + url;
            }

            return url;
          },
          truncate: function truncate(entry) {
            if (entry) {
              var text = entry.split("   ");
              return text[0].trim();
            }

            return entry.trim();
          } //,
          // watch: {
          //   isSmall: {
          //     handler: function() {
          //       this.description = "";
          //       this.description = this.truncate(this.portletDesc.description);
          //     }
          //   }
          // }
        }
      };
      // CONCATENATED MODULE: ./src/components/PortletCard.vue?vue&type=script&lang=js&
      /* harmony default export */ var components_PortletCardvue_type_script_lang_js_ = PortletCardvue_type_script_lang_js_;
      // CONCATENATED MODULE: ./src/components/PortletCard.vue

      function PortletCard_injectStyles(context) {
        var style0 = __webpack_require__("6bf2");
        if (style0.__inject__) style0.__inject__(context);
      }

      /* normalize component */

      var PortletCard_component = normalizeComponent(
        components_PortletCardvue_type_script_lang_js_,
        PortletCardvue_type_template_id_31cef4fd_scoped_true_render,
        PortletCardvue_type_template_id_31cef4fd_scoped_true_staticRenderFns,
        false,
        PortletCard_injectStyles,
        "31cef4fd",
        null,
        true
      );

      PortletCard_component.options.__file = "PortletCard.vue";
      /* harmony default export */ var PortletCard =
        PortletCard_component.exports;
      // CONCATENATED MODULE: ./node_modules/vue-awesome/icons/chevron-right.js

      Icon.register({
        "chevron-right": {
          width: 320,
          height: 512,
          paths: [
            {
              d:
                "M285.5 273L91.1 467.3C81.8 476.7 66.6 476.7 57.2 467.3L34.5 444.6C25.2 435.3 25.1 420.1 34.5 410.7L188.5 256 34.5 101.3C25.1 91.9 25.2 76.7 34.5 67.4L57.2 44.7C66.6 35.3 81.8 35.3 91.1 44.7L285.5 239C294.8 248.4 294.8 263.6 285.5 273z"
            }
          ]
        }
      });

      // CONCATENATED MODULE: ./node_modules/vue-awesome/icons/chevron-left.js

      Icon.register({
        "chevron-left": {
          width: 320,
          height: 512,
          paths: [
            {
              d:
                "M34.5 239L228.9 44.7C238.2 35.3 253.4 35.3 262.8 44.7L285.5 67.4C294.8 76.7 294.9 91.9 285.5 101.3L131.5 256 285.5 410.8C294.9 420.1 294.8 435.3 285.5 444.6L262.8 467.3C253.4 476.7 238.2 476.7 228.9 467.3L34.5 273C25.1 263.6 25.1 248.4 34.5 239z"
            }
          ]
        }
      });

      // EXTERNAL MODULE: ./node_modules/vue-awesome-swiper/dist/vue-awesome-swiper.js
      var vue_awesome_swiper = __webpack_require__("7212");

      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ContentFavorites.vue?vue&type=script&lang=js&shadow

      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //

      /* harmony default export */ var ContentFavoritesvue_type_script_lang_js_shadow = {
        name: "ContentFavorites",
        props: {
          backgroundColor: String,
          callAfterAction: Function,
          isHidden: Boolean,
          favoriteApiUrl: {
            type: String,
            default: "/uPortal" + "/api/layout"
          },
          userInfoApiUrl: {
            type: String,
            default: "/uPortal" + "/api/v5-1/userinfo"
          },
          favorites: {
            type: Array,
            required: true,
            default: () => []
          },
          isSmall: {
            type: Boolean,
            default: false
          },
          portlets: {
            type: Array,
            required: true,
            default: () => []
          }
        },

        data() {
          return {
            favorited: [],
            swiperOption: {
              init: false,
              slidesPerView: "auto",
              slidesPerGroup: 1,
              spaceBetween: 0,
              speed: 800,
              freeMode: true,

              /** These params doesn't work after build */
              // pagination: {
              //   el: '.swiper-pagination',
              //   clickable: true
              // },
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
              }
            },
            showSmall: this.isSmall,
            disableNext: false,
            disablePrev: false
          };
        },

        components: {
          PortletCard: PortletCard,
          swiper: vue_awesome_swiper["swiper"],
          swiperSlide: vue_awesome_swiper["swiperSlide"],
          Icon: Icon
        },

        mounted() {
          this.$nextTick(function() {
            window.addEventListener("resize", this.updateSlider);
          });
        },

        methods: {
          translate: function translate(text, lang) {
            return i18n.t(text, lang);
          },

          computeImgUrl(url) {
            if (url != null && !url.startsWith("http")) {
              return "" + url;
            }

            return url;
          },

          isXs() {
            this.showSmall = this.isSmall || this.getWindowWidth() < 660;
          },

          callAfterFavAction(favorite, fname) {
            this.updateSlider();

            if (typeof this.callAfterAction === "function") {
              this.callAfterAction(favorite, fname);
            }
          },

          getWindowWidth: function getWindowWidth() {
            if (this.$refs.favsSection)
              return this.$refs.favsSection.clientWidth;
            return 0;
          },

          slideNext(event) {
            event.preventDefault();
            this.$refs.favSwiper.swiper.slideNext(800);
            this.updateSlider();
          },

          slidePrev(event) {
            event.preventDefault();
            this.$refs.favSwiper.swiper.slidePrev(800);
            this.updateSlider();
          },

          updateSlider() {
            setTimeout(() => {
              if (!this.isHidden) {
                if (!this.$refs.favSwiper.swiper.initialized) {
                  this.$refs.favSwiper.swiper.init();
                } else {
                  this.$refs.favSwiper.swiper.update();
                }

                this.disableNext = this.$refs.favSwiper.swiper.isEnd;
                this.disablePrev = this.$refs.favSwiper.swiper.isBeginning;
                this.isXs();
              }
            }, 300);
          },

          calcFavoritesPortlets() {
            this.emptyArray(this.favorited);
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (
                var _iterator = this.favorites[Symbol.iterator](), _step;
                !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                _iteratorNormalCompletion = true
              ) {
                var fname = _step.value;
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                  for (
                    var _iterator2 = this.portlets[Symbol.iterator](), _step2;
                    !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next())
                      .done);
                    _iteratorNormalCompletion2 = true
                  ) {
                    var portlet = _step2.value;

                    if (portlet.fname === fname) {
                      this.favorited.push(portlet);
                    }
                  }
                } catch (err) {
                  _didIteratorError2 = true;
                  _iteratorError2 = err;
                } finally {
                  try {
                    if (
                      !_iteratorNormalCompletion2 &&
                      _iterator2.return != null
                    ) {
                      _iterator2.return();
                    }
                  } finally {
                    if (_didIteratorError2) {
                      throw _iteratorError2;
                    }
                  }
                }
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          },

          emptyArray: function emptyArray(array) {
            while (array.length > 0) {
              array.pop();
            }
          }
        },
        watch: {
          favorites: {
            handler: function handler() {
              this.calcFavoritesPortlets();
              this.updateSlider();
            },
            deep: true
          },
          portlets: {
            handler: function handler() {
              this.calcFavoritesPortlets();
              this.updateSlider();
            },
            deep: true
          },
          favorited: {
            handler: function handler() {
              this.updateSlider();
            },
            deep: true
          },
          isHidden: {
            handler: function handler() {
              this.updateSlider();
            },
            deep: true
          }
        }
      };
      // CONCATENATED MODULE: ./src/components/ContentFavorites.vue?vue&type=script&lang=js&shadow
      /* harmony default export */ var components_ContentFavoritesvue_type_script_lang_js_shadow = ContentFavoritesvue_type_script_lang_js_shadow;
      // CONCATENATED MODULE: ./src/components/ContentFavorites.vue?shadow

      function ContentFavoritesshadow_injectStyles(context) {
        var style0 = __webpack_require__("8552");
        if (style0.__inject__) style0.__inject__(context);
      }

      /* normalize component */

      var ContentFavoritesshadow_component = normalizeComponent(
        components_ContentFavoritesvue_type_script_lang_js_shadow,
        ContentFavoritesvue_type_template_id_156f4a9f_scoped_true_shadow_render,
        ContentFavoritesvue_type_template_id_156f4a9f_scoped_true_shadow_staticRenderFns,
        false,
        ContentFavoritesshadow_injectStyles,
        "156f4a9f",
        null,
        true
      );

      ContentFavoritesshadow_component.options.__file = "ContentFavorites.vue";
      /* harmony default export */ var ContentFavoritesshadow =
        ContentFavoritesshadow_component.exports;
      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d50f023a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ContentGrid.vue?vue&type=template&id=6d2ae9c4&scoped=true&shadow
      var ContentGridvue_type_template_id_6d2ae9c4_scoped_true_shadow_render = function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c(
          "section",
          {
            staticClass: "content-grid",
            class: { small: _vm.isSmall },
            style: "background-color:" + _vm.backgroundColor
          },
          [
            _c("div", [
              _c("div", { staticClass: "title" }, [
                _c("h1", [
                  _vm._v(_vm._s(_vm.translate("message.services.title")))
                ]),
                _c(
                  "div",
                  {
                    staticClass: "filter",
                    class: _vm.visible ? "opened" : "closed"
                  },
                  [
                    _c("span", { staticClass: "content-grid-caret" }, [
                      _c("input", {
                        attrs: {
                          title: _vm.translate("message.services.filter"),
                          type: "text",
                          list: "list",
                          placeholder: _vm.translate("message.services.filter")
                        },
                        on: { input: _vm.sourceChanged }
                      })
                    ]),
                    _c("datalist", { attrs: { id: "list" } }, [
                      _c(
                        "select",
                        _vm._l(_vm.getAllCategories, function(category) {
                          return _c(
                            "option",
                            {
                              key: category,
                              attrs: { label: category },
                              domProps: { value: category }
                            },
                            [_vm._v(_vm._s(category))]
                          );
                        })
                      )
                    ]),
                    _c(
                      "div",
                      {
                        on: {
                          click: function($event) {
                            _vm.visible = !_vm.visible;
                          }
                        }
                      },
                      [
                        _c("i", {
                          staticClass: "fa fa-search",
                          attrs: { "aria-hidden": "true" }
                        })
                      ]
                    )
                  ]
                )
              ]),
              _c(
                "div",
                { staticClass: "flex-grid" },
                _vm._l(_vm.filteredPortlets, function(portlet) {
                  return _c(
                    "div",
                    {
                      key: portlet.id,
                      staticClass: "flex-item ma-3 text-xs-center"
                    },
                    [
                      _c(
                        "a",
                        {
                          staticClass: "no-style",
                          attrs: {
                            href: portlet.renderUrl,
                            target: portlet.layoutObject.altMaxUrl
                              ? "_blank"
                              : "_self"
                          }
                        },
                        [
                          _c("portlet-card", {
                            attrs: {
                              "portlet-desc": portlet,
                              "is-favorite": _vm.isFavorite(portlet.fname),
                              "is-small": _vm.isSmall,
                              "call-after-action": _vm.callAfterAction,
                              "favorite-api-url": _vm.favoriteApiUrl,
                              "user-info-api-url": _vm.userInfoApiUrl
                            }
                          })
                        ],
                        1
                      )
                    ]
                  );
                })
              )
            ])
          ]
        );
      };
      var ContentGridvue_type_template_id_6d2ae9c4_scoped_true_shadow_staticRenderFns = [];

      // CONCATENATED MODULE: ./src/components/ContentGrid.vue?vue&type=template&id=6d2ae9c4&scoped=true&shadow

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.sort.js
      var es6_array_sort = __webpack_require__("55dd");

      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ContentGrid.vue?vue&type=script&lang=js&shadow

      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //

      /* harmony default export */ var ContentGridvue_type_script_lang_js_shadow = {
        name: "ContentGrid",
        props: {
          backgroundColor: String,
          callAfterAction: Function,
          favoriteApiUrl: {
            type: String,
            default: "/uPortal" + "/api/layout"
          },
          userInfoApiUrl: {
            type: String,
            default: "/uPortal" + "/api/v5-1/userinfo"
          },
          favorites: {
            type: Array,
            required: true,
            default: () => []
          },
          isSmall: {
            type: Boolean,
            default: false
          },
          portlets: {
            type: Array,
            required: true,
            default: () => []
          }
        },
        components: {
          PortletCard: PortletCard
        },

        data() {
          return {
            filteredPortlets: [],
            visible: false
          };
        },

        methods: {
          translate: function translate(text, lang) {
            return i18n.t(text, lang);
          },
          isFavorite: function isFavorite(fname) {
            return this.favorites.indexOf(fname) > -1;
          },
          sourceChanged: function sourceChanged(event) {
            this.emptyArray(this.filteredPortlets);
            var filterValue = event && event.target ? event.target.value : null;

            if (filterValue !== null) {
              var tmp = this.portlets.filter(function(portlet) {
                var cats = portlet.categories.filter(
                  cat =>
                    cat.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1
                );
                return (
                  cats.length > 0 ||
                  portlet.title
                    .toLowerCase()
                    .indexOf(filterValue.toLowerCase()) !== -1 ||
                  portlet.name
                    .toLowerCase()
                    .indexOf(filterValue.toLowerCase()) !== -1 ||
                  portlet.description
                    .toLowerCase()
                    .indexOf(filterValue.toLowerCase()) !== -1
                );
              });
              this.filteredPortlets.push(...tmp);
            } else {
              //this.filteredPortlets = this.portlets.sort(this.sortPortlets);
              this.filteredPortlets.push(...this.portlets);
            } //this.filteredPortlets.sort(this.sortPortlets);
          },
          emptyArray: function emptyArray(array) {
            while (array.length > 0) {
              array.pop();
            }
          }
        },
        computed: {
          getAllCategories: function getAllCategories() {
            var cats = [];

            for (var i = 0, size = this.portlets.length; i < size; i++) {
              for (
                var j = 0, categories = this.portlets[i].categories;
                j < categories.length;
                j++
              ) {
                if (cats.indexOf(categories[j]) === -1) {
                  cats.push(categories[j]);
                }
              }
            }

            return cats.sort();
          }
        },
        watch: {
          portlets: {
            handler: function handler(oldVal, newVal) {
              if (newVal.length > 0) {
                this.sourceChanged();
              }
            }
          }
        }
      };
      // CONCATENATED MODULE: ./src/components/ContentGrid.vue?vue&type=script&lang=js&shadow
      /* harmony default export */ var components_ContentGridvue_type_script_lang_js_shadow = ContentGridvue_type_script_lang_js_shadow;
      // CONCATENATED MODULE: ./src/components/ContentGrid.vue?shadow

      function ContentGridshadow_injectStyles(context) {
        var style0 = __webpack_require__("4181");
        if (style0.__inject__) style0.__inject__(context);
      }

      /* normalize component */

      var ContentGridshadow_component = normalizeComponent(
        components_ContentGridvue_type_script_lang_js_shadow,
        ContentGridvue_type_template_id_6d2ae9c4_scoped_true_shadow_render,
        ContentGridvue_type_template_id_6d2ae9c4_scoped_true_shadow_staticRenderFns,
        false,
        ContentGridshadow_injectStyles,
        "6d2ae9c4",
        null,
        true
      );

      ContentGridshadow_component.options.__file = "ContentGrid.vue";
      /* harmony default export */ var ContentGridshadow =
        ContentGridshadow_component.exports;
      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d50f023a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ContentMenu.vue?vue&type=template&id=1421cbfb&scoped=true&shadow
      var ContentMenuvue_type_template_id_1421cbfb_scoped_true_shadow_render = function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c(
          "div",
          {
            staticClass: "content-menu",
            class: [
              "toggler-menu",
              _vm.isSmall ? "small " : "",
              _vm.visible ? "active-menu" : ""
            ],
            style: "min-height: " + _vm.minHeight
          },
          [
            _c(
              "header",
              [
                _c("header-buttons", {
                  attrs: {
                    "call-on-close": _vm.close,
                    "sign-out-url": _vm.signOutUrl
                  }
                }),
                _c(
                  "div",
                  { staticClass: "wrapper" },
                  [
                    _c("content-user", {
                      attrs: {
                        "org-infos": _vm.infos.userOrganization,
                        "user-infos": _vm.infos.user,
                        "other-orgs": _vm.infos.organizations,
                        "is-small": _vm.isSmall,
                        "default-org-logo": _vm.defaultOrgLogo,
                        "user-info-portlet-url": _vm.userInfoPortletUrl,
                        "api-url-org-infos": _vm.apiUrlOrgInfos
                      }
                    }),
                    _c("content-favorites", {
                      attrs: {
                        portlets: _vm.infos.portlets,
                        favorites: _vm.infos.favorites,
                        "call-after-action": _vm.actionToggleFav,
                        "is-small": _vm.isSmall,
                        "favorite-api-url": _vm.favoriteApiUrl,
                        "is-hidden": _vm.isHidden,
                        "user-info-api-url": _vm.userInfoApiUrl
                      }
                    })
                  ],
                  1
                ),
                _c("div", {
                  staticClass: "background",
                  style:
                    _vm.backgroundImg != null && !_vm.isSmall
                      ? "background-image: linear-gradient(0deg, rgba(0,0,0,.2),rgba(0,0,0,.2)), url(" +
                        _vm.backgroundImg +
                        ");"
                      : ""
                })
              ],
              1
            ),
            _c("content-grid", {
              attrs: {
                portlets: _vm.infos.portlets,
                favorites: _vm.infos.favorites,
                "call-after-action": _vm.actionToggleFav,
                "is-small": _vm.isSmall,
                "favorite-api-url": _vm.favoriteApiUrl,
                "user-info-api-url": _vm.userInfoApiUrl
              }
            })
          ],
          1
        );
      };
      var ContentMenuvue_type_template_id_1421cbfb_scoped_true_shadow_staticRenderFns = [];

      // CONCATENATED MODULE: ./src/components/ContentMenu.vue?vue&type=template&id=1421cbfb&scoped=true&shadow

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
      var es6_object_assign = __webpack_require__("f751");

      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d50f023a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ContentFavorites.vue?vue&type=template&id=7319541c&scoped=true&
      var ContentFavoritesvue_type_template_id_7319541c_scoped_true_render = function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c(
          "section",
          {
            staticClass: "content-favorites",
            class: _vm.showSmall ? "small" : "",
            style: "background-color:" + _vm.backgroundColor
          },
          [
            _c("div", { staticClass: "content-favorites-title" }, [
              _c("h1", [
                _vm._v(_vm._s(_vm.translate("message.favorites.title")))
              ])
            ]),
            _c(
              "div",
              {
                ref: "favsSection",
                staticClass: "favorites",
                style: _vm.favorited.length > 0 ? "" : "display:none"
              },
              [
                _c(
                  "swiper",
                  {
                    ref: "favSwiper",
                    attrs: { options: _vm.swiperOption },
                    on: { transitionEnd: _vm.updateSlider }
                  },
                  _vm._l(_vm.favorited, function(portlet) {
                    return _c("swiper-slide", { key: portlet.id }, [
                      _c(
                        "a",
                        {
                          staticClass: "no-style",
                          attrs: {
                            href: portlet.renderUrl,
                            target: portlet.layoutObject.altMaxUrl
                              ? "_blank"
                              : "_self"
                          }
                        },
                        [
                          _c("portlet-card", {
                            attrs: {
                              "portlet-desc": portlet,
                              "is-favorite": true,
                              "is-small": _vm.showSmall,
                              "call-after-action": _vm.callAfterFavAction,
                              "back-ground-is-dark": true,
                              "favorite-api-url": _vm.favoriteApiUrl,
                              "user-info-api-url": _vm.userInfoApiUrl
                            }
                          })
                        ],
                        1
                      )
                    ]);
                  })
                ),
                _c(
                  "div",
                  {
                    staticClass: "swiper-button-prev",
                    class: _vm.disablePrev ? "fav-swiper-button-disabled" : "",
                    attrs: { slot: "button-prev" },
                    on: {
                      click: function($event) {
                        _vm.slidePrev($event);
                      }
                    },
                    slot: "button-prev"
                  },
                  [_c("icon", { attrs: { name: "chevron-left" } })],
                  1
                ),
                _c(
                  "div",
                  {
                    staticClass: "swiper-button-next",
                    class: _vm.disableNext ? "fav-swiper-button-disabled" : "",
                    attrs: { slot: "button-next" },
                    on: {
                      click: function($event) {
                        _vm.slideNext($event);
                      }
                    },
                    slot: "button-next"
                  },
                  [_c("icon", { attrs: { name: "chevron-right" } })],
                  1
                )
              ],
              1
            ),
            _c(
              "div",
              {
                staticClass: "empty-favorites",
                style: _vm.favorited.length > 0 ? "display:none" : ""
              },
              [
                _c("div", [
                  _vm._v(_vm._s(_vm.translate("message.favorites.empty")))
                ])
              ]
            )
          ]
        );
      };
      var ContentFavoritesvue_type_template_id_7319541c_scoped_true_staticRenderFns = [];

      // CONCATENATED MODULE: ./src/components/ContentFavorites.vue?vue&type=template&id=7319541c&scoped=true&

      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ContentFavorites.vue?vue&type=script&lang=js&

      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //

      /* harmony default export */ var ContentFavoritesvue_type_script_lang_js_ = {
        name: "ContentFavorites",
        props: {
          backgroundColor: String,
          callAfterAction: Function,
          isHidden: Boolean,
          favoriteApiUrl: {
            type: String,
            default: "/uPortal" + "/api/layout"
          },
          userInfoApiUrl: {
            type: String,
            default: "/uPortal" + "/api/v5-1/userinfo"
          },
          favorites: {
            type: Array,
            required: true,
            default: () => []
          },
          isSmall: {
            type: Boolean,
            default: false
          },
          portlets: {
            type: Array,
            required: true,
            default: () => []
          }
        },

        data() {
          return {
            favorited: [],
            swiperOption: {
              init: false,
              slidesPerView: "auto",
              slidesPerGroup: 1,
              spaceBetween: 0,
              speed: 800,
              freeMode: true,

              /** These params doesn't work after build */
              // pagination: {
              //   el: '.swiper-pagination',
              //   clickable: true
              // },
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
              }
            },
            showSmall: this.isSmall,
            disableNext: false,
            disablePrev: false
          };
        },

        components: {
          PortletCard: PortletCard,
          swiper: vue_awesome_swiper["swiper"],
          swiperSlide: vue_awesome_swiper["swiperSlide"],
          Icon: Icon
        },

        mounted() {
          this.$nextTick(function() {
            window.addEventListener("resize", this.updateSlider);
          });
        },

        methods: {
          translate: function translate(text, lang) {
            return i18n.t(text, lang);
          },

          computeImgUrl(url) {
            if (url != null && !url.startsWith("http")) {
              return "" + url;
            }

            return url;
          },

          isXs() {
            this.showSmall = this.isSmall || this.getWindowWidth() < 660;
          },

          callAfterFavAction(favorite, fname) {
            this.updateSlider();

            if (typeof this.callAfterAction === "function") {
              this.callAfterAction(favorite, fname);
            }
          },

          getWindowWidth: function getWindowWidth() {
            if (this.$refs.favsSection)
              return this.$refs.favsSection.clientWidth;
            return 0;
          },

          slideNext(event) {
            event.preventDefault();
            this.$refs.favSwiper.swiper.slideNext(800);
            this.updateSlider();
          },

          slidePrev(event) {
            event.preventDefault();
            this.$refs.favSwiper.swiper.slidePrev(800);
            this.updateSlider();
          },

          updateSlider() {
            setTimeout(() => {
              if (!this.isHidden) {
                if (!this.$refs.favSwiper.swiper.initialized) {
                  this.$refs.favSwiper.swiper.init();
                } else {
                  this.$refs.favSwiper.swiper.update();
                }

                this.disableNext = this.$refs.favSwiper.swiper.isEnd;
                this.disablePrev = this.$refs.favSwiper.swiper.isBeginning;
                this.isXs();
              }
            }, 300);
          },

          calcFavoritesPortlets() {
            this.emptyArray(this.favorited);
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (
                var _iterator = this.favorites[Symbol.iterator](), _step;
                !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                _iteratorNormalCompletion = true
              ) {
                var fname = _step.value;
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                  for (
                    var _iterator2 = this.portlets[Symbol.iterator](), _step2;
                    !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next())
                      .done);
                    _iteratorNormalCompletion2 = true
                  ) {
                    var portlet = _step2.value;

                    if (portlet.fname === fname) {
                      this.favorited.push(portlet);
                    }
                  }
                } catch (err) {
                  _didIteratorError2 = true;
                  _iteratorError2 = err;
                } finally {
                  try {
                    if (
                      !_iteratorNormalCompletion2 &&
                      _iterator2.return != null
                    ) {
                      _iterator2.return();
                    }
                  } finally {
                    if (_didIteratorError2) {
                      throw _iteratorError2;
                    }
                  }
                }
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          },

          emptyArray: function emptyArray(array) {
            while (array.length > 0) {
              array.pop();
            }
          }
        },
        watch: {
          favorites: {
            handler: function handler() {
              this.calcFavoritesPortlets();
              this.updateSlider();
            },
            deep: true
          },
          portlets: {
            handler: function handler() {
              this.calcFavoritesPortlets();
              this.updateSlider();
            },
            deep: true
          },
          favorited: {
            handler: function handler() {
              this.updateSlider();
            },
            deep: true
          },
          isHidden: {
            handler: function handler() {
              this.updateSlider();
            },
            deep: true
          }
        }
      };
      // CONCATENATED MODULE: ./src/components/ContentFavorites.vue?vue&type=script&lang=js&
      /* harmony default export */ var components_ContentFavoritesvue_type_script_lang_js_ = ContentFavoritesvue_type_script_lang_js_;
      // CONCATENATED MODULE: ./src/components/ContentFavorites.vue

      function ContentFavorites_injectStyles(context) {
        var style0 = __webpack_require__("08e0");
        if (style0.__inject__) style0.__inject__(context);
      }

      /* normalize component */

      var ContentFavorites_component = normalizeComponent(
        components_ContentFavoritesvue_type_script_lang_js_,
        ContentFavoritesvue_type_template_id_7319541c_scoped_true_render,
        ContentFavoritesvue_type_template_id_7319541c_scoped_true_staticRenderFns,
        false,
        ContentFavorites_injectStyles,
        "7319541c",
        null,
        true
      );

      ContentFavorites_component.options.__file = "ContentFavorites.vue";
      /* harmony default export */ var ContentFavorites =
        ContentFavorites_component.exports;
      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d50f023a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ContentGrid.vue?vue&type=template&id=4962b75d&scoped=true&
      var ContentGridvue_type_template_id_4962b75d_scoped_true_render = function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c(
          "section",
          {
            staticClass: "content-grid",
            class: { small: _vm.isSmall },
            style: "background-color:" + _vm.backgroundColor
          },
          [
            _c("div", [
              _c("div", { staticClass: "title" }, [
                _c("h1", [
                  _vm._v(_vm._s(_vm.translate("message.services.title")))
                ]),
                _c(
                  "div",
                  {
                    staticClass: "filter",
                    class: _vm.visible ? "opened" : "closed"
                  },
                  [
                    _c("span", { staticClass: "content-grid-caret" }, [
                      _c("input", {
                        attrs: {
                          title: _vm.translate("message.services.filter"),
                          type: "text",
                          list: "list",
                          placeholder: _vm.translate("message.services.filter")
                        },
                        on: { input: _vm.sourceChanged }
                      })
                    ]),
                    _c("datalist", { attrs: { id: "list" } }, [
                      _c(
                        "select",
                        _vm._l(_vm.getAllCategories, function(category) {
                          return _c(
                            "option",
                            {
                              key: category,
                              attrs: { label: category },
                              domProps: { value: category }
                            },
                            [_vm._v(_vm._s(category))]
                          );
                        })
                      )
                    ]),
                    _c(
                      "div",
                      {
                        on: {
                          click: function($event) {
                            _vm.visible = !_vm.visible;
                          }
                        }
                      },
                      [
                        _c("i", {
                          staticClass: "fa fa-search",
                          attrs: { "aria-hidden": "true" }
                        })
                      ]
                    )
                  ]
                )
              ]),
              _c(
                "div",
                { staticClass: "flex-grid" },
                _vm._l(_vm.filteredPortlets, function(portlet) {
                  return _c(
                    "div",
                    {
                      key: portlet.id,
                      staticClass: "flex-item ma-3 text-xs-center"
                    },
                    [
                      _c(
                        "a",
                        {
                          staticClass: "no-style",
                          attrs: {
                            href: portlet.renderUrl,
                            target: portlet.layoutObject.altMaxUrl
                              ? "_blank"
                              : "_self"
                          }
                        },
                        [
                          _c("portlet-card", {
                            attrs: {
                              "portlet-desc": portlet,
                              "is-favorite": _vm.isFavorite(portlet.fname),
                              "is-small": _vm.isSmall,
                              "call-after-action": _vm.callAfterAction,
                              "favorite-api-url": _vm.favoriteApiUrl,
                              "user-info-api-url": _vm.userInfoApiUrl
                            }
                          })
                        ],
                        1
                      )
                    ]
                  );
                })
              )
            ])
          ]
        );
      };
      var ContentGridvue_type_template_id_4962b75d_scoped_true_staticRenderFns = [];

      // CONCATENATED MODULE: ./src/components/ContentGrid.vue?vue&type=template&id=4962b75d&scoped=true&

      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ContentGrid.vue?vue&type=script&lang=js&

      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //

      /* harmony default export */ var ContentGridvue_type_script_lang_js_ = {
        name: "ContentGrid",
        props: {
          backgroundColor: String,
          callAfterAction: Function,
          favoriteApiUrl: {
            type: String,
            default: "/uPortal" + "/api/layout"
          },
          userInfoApiUrl: {
            type: String,
            default: "/uPortal" + "/api/v5-1/userinfo"
          },
          favorites: {
            type: Array,
            required: true,
            default: () => []
          },
          isSmall: {
            type: Boolean,
            default: false
          },
          portlets: {
            type: Array,
            required: true,
            default: () => []
          }
        },
        components: {
          PortletCard: PortletCard
        },

        data() {
          return {
            filteredPortlets: [],
            visible: false
          };
        },

        methods: {
          translate: function translate(text, lang) {
            return i18n.t(text, lang);
          },
          isFavorite: function isFavorite(fname) {
            return this.favorites.indexOf(fname) > -1;
          },
          sourceChanged: function sourceChanged(event) {
            this.emptyArray(this.filteredPortlets);
            var filterValue = event && event.target ? event.target.value : null;

            if (filterValue !== null) {
              var tmp = this.portlets.filter(function(portlet) {
                var cats = portlet.categories.filter(
                  cat =>
                    cat.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1
                );
                return (
                  cats.length > 0 ||
                  portlet.title
                    .toLowerCase()
                    .indexOf(filterValue.toLowerCase()) !== -1 ||
                  portlet.name
                    .toLowerCase()
                    .indexOf(filterValue.toLowerCase()) !== -1 ||
                  portlet.description
                    .toLowerCase()
                    .indexOf(filterValue.toLowerCase()) !== -1
                );
              });
              this.filteredPortlets.push(...tmp);
            } else {
              //this.filteredPortlets = this.portlets.sort(this.sortPortlets);
              this.filteredPortlets.push(...this.portlets);
            } //this.filteredPortlets.sort(this.sortPortlets);
          },
          emptyArray: function emptyArray(array) {
            while (array.length > 0) {
              array.pop();
            }
          }
        },
        computed: {
          getAllCategories: function getAllCategories() {
            var cats = [];

            for (var i = 0, size = this.portlets.length; i < size; i++) {
              for (
                var j = 0, categories = this.portlets[i].categories;
                j < categories.length;
                j++
              ) {
                if (cats.indexOf(categories[j]) === -1) {
                  cats.push(categories[j]);
                }
              }
            }

            return cats.sort();
          }
        },
        watch: {
          portlets: {
            handler: function handler(oldVal, newVal) {
              if (newVal.length > 0) {
                this.sourceChanged();
              }
            }
          }
        }
      };
      // CONCATENATED MODULE: ./src/components/ContentGrid.vue?vue&type=script&lang=js&
      /* harmony default export */ var components_ContentGridvue_type_script_lang_js_ = ContentGridvue_type_script_lang_js_;
      // CONCATENATED MODULE: ./src/components/ContentGrid.vue

      function ContentGrid_injectStyles(context) {
        var style0 = __webpack_require__("8a42");
        if (style0.__inject__) style0.__inject__(context);
      }

      /* normalize component */

      var ContentGrid_component = normalizeComponent(
        components_ContentGridvue_type_script_lang_js_,
        ContentGridvue_type_template_id_4962b75d_scoped_true_render,
        ContentGridvue_type_template_id_4962b75d_scoped_true_staticRenderFns,
        false,
        ContentGrid_injectStyles,
        "4962b75d",
        null,
        true
      );

      ContentGrid_component.options.__file = "ContentGrid.vue";
      /* harmony default export */ var ContentGrid =
        ContentGrid_component.exports;
      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d50f023a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ContentUser.vue?vue&type=template&id=29b101ea&scoped=true&
      var ContentUservue_type_template_id_29b101ea_scoped_true_render = function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c(
          "section",
          {
            staticClass: "content-user",
            class: _vm.isSmall ? "small" : "",
            style: _vm.isSmall
              ? "background-image: linear-gradient(0deg, rgba(0,0,0,.2),rgba(0,0,0,.2)), url(" +
                _vm.getOrgImgUrl() +
                ");"
              : ""
          },
          [
            _c("div", [
              _c("div", { staticClass: "org-img" }, [
                _c("img", {
                  attrs: {
                    src: _vm.getOrgImgUrl(),
                    title: _vm.orgInfos.displayName,
                    alt: _vm.orgInfos.displayName
                  }
                })
              ]),
              _c("div", { staticClass: "user-infos" }, [
                _c("div", [
                  _vm.getUserAvatar() != null
                    ? _c("div", { staticClass: "user-avatar" }, [
                        _vm.userInfoPortletUrl !== ""
                          ? _c(
                              "a",
                              {
                                attrs: {
                                  href: _vm.userInfoPortletUrl,
                                  title: _vm.translate(
                                    "message.userInfoPortletUrl.title"
                                  )
                                }
                              },
                              [
                                _c("img", {
                                  attrs: {
                                    src: _vm.getUserAvatar(),
                                    alt: "avatar"
                                  }
                                })
                              ]
                            )
                          : _c("img", {
                              attrs: { src: _vm.getUserAvatar(), alt: "avatar" }
                            })
                      ])
                    : _c(
                        "div",
                        { staticClass: "user-avatar" },
                        [_c("icon", { attrs: { name: "user" } })],
                        1
                      ),
                  _c("div", { staticClass: "wrapper-infos" }, [
                    _c("div", { staticClass: "user-name" }, [
                      _c("span", { attrs: { title: _vm.userInfos.name } }, [
                        _vm._v(_vm._s(_vm.userInfos.name))
                      ])
                    ]),
                    _c("div", { staticClass: "user-org" }, [
                      _c(
                        "span",
                        { attrs: { title: _vm.orgInfos.displayName } },
                        [_vm._v(_vm._s(_vm.orgInfos.displayName))]
                      )
                    ])
                  ]),
                  _vm.otherOrgs.length > 1
                    ? _c("div", { staticClass: "other-orgs" }, [
                        _c(
                          "a",
                          {
                            attrs: {
                              href: _vm.apiUrlOrgInfos,
                              title: _vm.translate(
                                "message.userChangeEtabUrl.title"
                              )
                            }
                          },
                          [_c("icon", { attrs: { name: "exchange-alt" } })],
                          1
                        )
                      ])
                    : _vm._e()
                ])
              ])
            ])
          ]
        );
      };
      var ContentUservue_type_template_id_29b101ea_scoped_true_staticRenderFns = [];

      // CONCATENATED MODULE: ./src/components/ContentUser.vue?vue&type=template&id=29b101ea&scoped=true&

      // CONCATENATED MODULE: ./node_modules/vue-awesome/icons/user.js

      Icon.register({
        user: {
          width: 448,
          height: 512,
          paths: [
            {
              d:
                "M224 256C294.7 256 352 198.7 352 128S294.7 0 224 0 96 57.3 96 128 153.3 256 224 256zM313.6 288H296.9C274.7 298.2 250 304 224 304S173.4 298.2 151.1 288H134.4C60.2 288 0 348.2 0 422.4V464C0 490.5 21.5 512 48 512H400C426.5 512 448 490.5 448 464V422.4C448 348.2 387.8 288 313.6 288z"
            }
          ]
        }
      });

      // CONCATENATED MODULE: ./node_modules/vue-awesome/icons/exchange-alt.js

      Icon.register({
        "exchange-alt": {
          width: 512,
          height: 512,
          paths: [
            {
              d:
                "M0 168V152C0 138.7 10.7 128 24 128H384V80C384 58.6 409.9 48 425 63L505 143C514.3 152.4 514.3 167.6 505 177L425 257C410 272 384 261.5 384 240V192H24C10.7 192 0 181.3 0 168zM488 320H128V272C128 250.7 102.1 239.9 87 255L7 335C-2.3 344.4-2.3 359.6 7 369L87 449C102.1 464 128 453.4 128 432V384H488C501.3 384 512 373.3 512 360V344C512 330.7 501.3 320 488 320z"
            }
          ]
        }
      });

      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ContentUser.vue?vue&type=script&lang=js&
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //

      /*eslint no-console: ["error", { allow: ["warn", "error"] }] */

      /* harmony default export */ var ContentUservue_type_script_lang_js_ = {
        name: "ContentUser",
        props: {
          isSmall: {
            type: Boolean,
            default: false
          },
          orgInfos: {
            type: Object,
            default: () => ({})
          },
          otherOrgs: {
            type: Array,
            default: () => []
          },
          userInfos: {
            type: Object,
            required: true,
            default: () => undefined
          },
          apiUrlOrgInfos: {
            type: String,
            default: "/change-etablissement/rest/v2/structures/structs/"
          },
          defaultOrgLogo: {
            type: String,
            required: true
          },
          userInfoPortletUrl: {
            type: String,
            default: ""
          }
        },
        components: {
          Icon: Icon
        },
        methods: {
          translate(text, lang) {
            return i18n.t(text, lang);
          },

          hasOrgImage() {
            return (
              this.orgInfos !== {} &&
              this.orgInfos.otherAttributes &&
              this.orgInfos.otherAttributes.ESCOStructureLogo &&
              this.orgInfos.otherAttributes.ESCOStructureLogo.length > 0
            );
          },

          getOrgImgUrl() {
            return this.hasOrgImage()
              ? this.computeImgUrl(
                  this.orgInfos.otherAttributes.ESCOStructureLogo[0]
                )
              : this.defaultOrgLogo;
          },

          getUserAvatar() {
            var avatar = this.userInfos.picture || null;
            return this.computeImgUrl(avatar);
          },

          computeImgUrl(url) {
            if (url != null && !url.startsWith("http")) {
              return "" + url;
            }

            return url;
          }
        }
      };
      // CONCATENATED MODULE: ./src/components/ContentUser.vue?vue&type=script&lang=js&
      /* harmony default export */ var components_ContentUservue_type_script_lang_js_ = ContentUservue_type_script_lang_js_;
      // CONCATENATED MODULE: ./src/components/ContentUser.vue

      function ContentUser_injectStyles(context) {
        var style0 = __webpack_require__("0201");
        if (style0.__inject__) style0.__inject__(context);
      }

      /* normalize component */

      var ContentUser_component = normalizeComponent(
        components_ContentUservue_type_script_lang_js_,
        ContentUservue_type_template_id_29b101ea_scoped_true_render,
        ContentUservue_type_template_id_29b101ea_scoped_true_staticRenderFns,
        false,
        ContentUser_injectStyles,
        "29b101ea",
        null,
        true
      );

      ContentUser_component.options.__file = "ContentUser.vue";
      /* harmony default export */ var ContentUser =
        ContentUser_component.exports;
      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d50f023a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/HeaderButtons.vue?vue&type=template&id=dd214c72&scoped=true&
      var HeaderButtonsvue_type_template_id_dd214c72_scoped_true_render = function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c("section", { staticClass: "content-menu-header-buttons" }, [
          _c(
            "button",
            {
              staticClass: "content-menu-close",
              attrs: {
                type: "button",
                "aria-label": "Close",
                title: _vm.translate("message.buttons.menuClose")
              },
              on: {
                click: function($event) {
                  _vm.callOnClose($event);
                }
              }
            },
            [_c("icon", { attrs: { name: "times" } })],
            1
          ),
          _c(
            "a",
            {
              staticClass: "signout",
              attrs: {
                href: _vm.signOutUrl,
                title: _vm.translate("message.buttons.logout")
              }
            },
            [_c("icon", { attrs: { name: "sign-out-alt" } })],
            1
          )
        ]);
      };
      var HeaderButtonsvue_type_template_id_dd214c72_scoped_true_staticRenderFns = [];

      // CONCATENATED MODULE: ./src/components/HeaderButtons.vue?vue&type=template&id=dd214c72&scoped=true&

      // CONCATENATED MODULE: ./node_modules/vue-awesome/icons/sign-out-alt.js

      Icon.register({
        "sign-out-alt": {
          width: 512,
          height: 512,
          paths: [
            {
              d:
                "M497 273L329 441C314 456 288 445.5 288 424V328H152C138.7 328 128 317.3 128 304V208C128 194.7 138.7 184 152 184H288V88C288 66.6 313.9 56 329 71L497 239C506.3 248.4 506.3 263.6 497 273zM192 436V396C192 389.4 186.6 384 180 384H96C78.3 384 64 369.7 64 352V160C64 142.3 78.3 128 96 128H180C186.6 128 192 122.6 192 116V76C192 69.4 186.6 64 180 64H96C43 64 0 107 0 160V352C0 405 43 448 96 448H180C186.6 448 192 442.6 192 436z"
            }
          ]
        }
      });

      // CONCATENATED MODULE: ./node_modules/vue-awesome/icons/times.js

      Icon.register({
        times: {
          width: 352,
          height: 512,
          paths: [
            {
              d:
                "M242.7 256L342.8 155.9C355.1 143.6 355.1 123.7 342.8 111.4L320.6 89.2C308.3 76.9 288.4 76.9 276.1 89.2L176 189.3 75.9 89.2C63.6 76.9 43.7 76.9 31.4 89.2L9.2 111.4C-3.1 123.7-3.1 143.6 9.2 155.9L109.3 256 9.2 356.1C-3.1 368.4-3.1 388.3 9.2 400.6L31.4 422.8C43.7 435.1 63.6 435.1 75.9 422.8L176 322.7 276.1 422.8C288.4 435.1 308.3 435.1 320.6 422.8L342.8 400.6C355.1 388.3 355.1 368.4 342.8 356.1L242.7 256z"
            }
          ]
        }
      });

      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/HeaderButtons.vue?vue&type=script&lang=js&
      //
      //
      //
      //
      //
      //
      //
      //

      /* harmony default export */ var HeaderButtonsvue_type_script_lang_js_ = {
        name: "HeaderButtons",
        props: {
          callOnClose: Function,
          signOutUrl: {
            type: String,
            default: "/uPortal/Logout"
          }
        },
        components: {
          Icon: Icon
        },
        methods: {
          translate(text, lang) {
            return i18n.t(text, lang);
          }
        }
      };
      // CONCATENATED MODULE: ./src/components/HeaderButtons.vue?vue&type=script&lang=js&
      /* harmony default export */ var components_HeaderButtonsvue_type_script_lang_js_ = HeaderButtonsvue_type_script_lang_js_;
      // CONCATENATED MODULE: ./src/components/HeaderButtons.vue

      function HeaderButtons_injectStyles(context) {
        var style0 = __webpack_require__("8c93");
        if (style0.__inject__) style0.__inject__(context);
      }

      /* normalize component */

      var HeaderButtons_component = normalizeComponent(
        components_HeaderButtonsvue_type_script_lang_js_,
        HeaderButtonsvue_type_template_id_dd214c72_scoped_true_render,
        HeaderButtonsvue_type_template_id_dd214c72_scoped_true_staticRenderFns,
        false,
        HeaderButtons_injectStyles,
        "dd214c72",
        null,
        true
      );

      HeaderButtons_component.options.__file = "HeaderButtons.vue";
      /* harmony default export */ var HeaderButtons =
        HeaderButtons_component.exports;
      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ContentMenu.vue?vue&type=script&lang=js&shadow

      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //

      var ContentMenuvue_type_script_lang_js_shadow_checkStatus = function checkStatus(
        response
      ) {
        //console.log("check response ", response);
        if (response.ok) {
          return response;
        } else {
          var error = new Error(response.statusText);
          error.response = response;
          throw error;
        }
      };

      var ContentMenuvue_type_script_lang_js_shadow_parseJSON = function parseJSON(
        response
      ) {
        //console.log("Parse response for json ", response);
        return response.json();
      };
      /*eslint no-console: ["error", { allow: ["warn", "error"] }] */

      /* harmony default export */ var ContentMenuvue_type_script_lang_js_shadow = {
        name: "ContentMenu",
        components: {
          ContentFavorites: ContentFavorites,
          ContentGrid: ContentGrid,
          ContentUser: ContentUser,
          HeaderButtons: HeaderButtons
        },
        props: {
          id: String,
          callOnClose: Function,
          isHidden: {
            type: Boolean,
            default: false
          },
          contextApiUrl: {
            type: String,
            default: "/uPortal"
          },
          signOutUrl: {
            type: String,
            default: "/uPortal/Logout"
          },
          defaultOrgLogo: {
            type: String,
            required: true
          },
          userInfoPortletUrl: {
            type: String,
            default: ""
          },
          apiUrlOrgInfos: {
            type: String,
            default: ""
          }
        },

        data() {
          return {
            backgroundImg: this.defaultOrgLogo,
            favoriteApiUrl: this.contextApiUrl + "/api/layout",
            userInfoApiUrl: this.contextApiUrl + "/api/v5-1/userinfo",
            isSmall: false,
            visible: !this.isHidden,
            minHeight: "100vh",
            infos: {
              portlets: [],
              favorites: [],
              organizations: [],
              user: {},
              userOrganization: {}
            }
          };
        },

        mounted() {
          this.$nextTick(function() {
            window.addEventListener("resize", this.isXs);
            this.fetchPortlets();
            this.fetchFavorites();
            this.fetchUserInfos();
          });
        },

        methods: {
          close(event) {
            this.visible = false;
            var element = document.querySelector("#" + this.id);
            element.parentNode.style.display = "none";
            element.setAttribute("is-hidden", true); //var element = document.querySelector('#');

            this.isHidden = false;

            if (typeof this.callOnClose === "function") {
              this.callOnClose(event);
            }
          },

          getWindowWidth: function getWindowWidth() {
            return this.$el.clientWidth;
          },
          isXs: function isXs() {
            this.isSmall = this.getWindowWidth() < 768;
          },
          computeCurrentOrg: function computeCurrentOrg() {
            if (
              this.infos.organizations &&
              this.infos.user &&
              this.infos.user.ESCOSIRENCourant &&
              this.infos.organizations.length > 0
            ) {
              this.infos.userOrganization = Object.assign(
                {},
                this.infos.userOrganization,
                this.infos.organizations.find(
                  entry => entry.id === this.infos.user.ESCOSIRENCourant[0]
                )
              );
            } else if (this.infos.organizations) {
              this.infos.userOrganization = Object.assign(
                {},
                this.infos.userOrganization,
                this.infos.organizations[0]
              );
            }

            if (
              this.infos.userOrganization &&
              this.infos.userOrganization.otherAttributes &&
              this.infos.userOrganization.otherAttributes.ESCOStructureLogo &&
              this.infos.userOrganization.otherAttributes.ESCOStructureLogo
                .length > 0
            ) {
              this.backgroundImg =
                "" +
                this.infos.userOrganization.otherAttributes
                  .ESCOStructureLogo[0];
            }
          },

          fetchUserInfos() {
            if (false) {
              var orgsInfos, userInfos;
            } else {
              openIdConnect({
                userInfoApiUrl: this.contextApiUrl + "/api/v5-1/userinfo"
              })
                .then(token => {
                  this.infos.user = Object.assign(
                    {},
                    this.infos.user,
                    token.decoded
                  );

                  if (token.decoded.ESCOSIREN) {
                    var options = {
                      method: "GET",
                      credentials: "same-origin",
                      headers: {
                        Authorization: "Bearer " + token.encoded,
                        "Content-Type": "application/json"
                      }
                    };
                    fetch(
                      "" +
                        "/change-etablissement/rest/v2/structures/structs/" +
                        "?ids=" +
                        token.decoded.ESCOSIREN,
                      options
                    )
                      .then(
                        ContentMenuvue_type_script_lang_js_shadow_checkStatus
                      )
                      .then(ContentMenuvue_type_script_lang_js_shadow_parseJSON)
                      .then(data => {
                        this.emptyArray(this.infos.organizations);

                        for (var prop in data) {
                          this.infos.organizations.push(data[prop]);
                        }

                        this.computeCurrentOrg();
                      });
                  }
                })
                .catch(function(err) {
                  console.error(err);
                });
            }
          },

          fetchPortlets() {
            if (false) {
              var data;
            } else {
              openIdConnect({
                userInfoApiUrl: this.contextApiUrl + "/api/v5-1/userinfo"
              })
                .then(token => {
                  var options = {
                    method: "GET",
                    credentials: "same-origin",
                    headers: {
                      Authorization: "Bearer " + token.encoded,
                      "Content-Type": "application/json"
                    }
                  };
                  fetch(
                    this.contextApiUrl + "/api/marketplace/entries.json",
                    options
                  )
                    .then(ContentMenuvue_type_script_lang_js_shadow_checkStatus)
                    .then(ContentMenuvue_type_script_lang_js_shadow_parseJSON)
                    .then(data => {
                      this.emptyArray(this.infos.portlets);
                      this.infos.portlets.push(...data.portlets);
                      this.infos.portlets.sort(this.sortPortlets);
                    });
                })
                .catch(function(err) {
                  console.error(err);
                });
            }
          },

          fetchFavorites() {
            if (false) {
            } else {
              openIdConnect({
                userInfoApiUrl: this.contextApiUrl + "/api/v5-1/userinfo"
              })
                .then(token => {
                  var options = {
                    method: "GET",
                    credentials: "same-origin",
                    headers: {
                      Authorization: "Bearer " + token.encoded,
                      "Content-Type": "application/json"
                    }
                  };
                  fetch(
                    this.contextApiUrl + "/api/v4-3/dlm/layout.json",
                    options
                  )
                    .then(ContentMenuvue_type_script_lang_js_shadow_checkStatus)
                    .then(ContentMenuvue_type_script_lang_js_shadow_parseJSON)
                    .then(data => {
                      if (
                        data &&
                        data.authenticated &&
                        data.layout &&
                        data.layout.globals &&
                        data.layout.globals.hasFavorites
                      ) {
                        if (data.layout.favorites) {
                          this.emptyArray(this.infos.favorites);
                          this.computeFavoritesContent(data.layout.favorites);
                        }
                      }
                    });
                })
                .catch(function(err) {
                  console.error(err);
                });
            }
          },

          computeFavoritesContent(elem) {
            if (elem !== undefined) {
              if (Array.isArray(elem)) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                  for (
                    var _iterator = elem[Symbol.iterator](), _step;
                    !(_iteratorNormalCompletion = (_step = _iterator.next())
                      .done);
                    _iteratorNormalCompletion = true
                  ) {
                    var folder = _step.value;
                    this.computeFavoritesContent(folder);
                  }
                } catch (err) {
                  _didIteratorError = true;
                  _iteratorError = err;
                } finally {
                  try {
                    if (
                      !_iteratorNormalCompletion &&
                      _iterator.return != null
                    ) {
                      _iterator.return();
                    }
                  } finally {
                    if (_didIteratorError) {
                      throw _iteratorError;
                    }
                  }
                }
              } else {
                var content = elem.content;

                if (content === undefined || !content) {
                  var fname = elem.fname;

                  if (fname !== undefined && fname) {
                    this.infos.favorites.push(fname);
                  }
                } else {
                  this.computeFavoritesContent(content);
                }
              }
            }
          },

          actionToggleFav: function actionToggleFav(isAddFavorite, fname) {
            if (isAddFavorite) {
              this.infos.favorites.push(fname);
            } else {
              this.infos.favorites = this.infos.favorites.filter(
                value => value !== fname
              );
            }
          },
          sortPortlets: function sortPortlets(a, b) {
            return a.title
              .trim()
              .toLowerCase()
              .localeCompare(b.title.trim().toLowerCase(), undefined, {
                numberic: true
              });
          },
          emptyArray: function emptyArray(array) {
            while (array.length > 0) {
              array.pop();
            }
          }
        },
        watch: {
          isHidden: {
            handler: function handler() {
              this.visible = !this.isHidden;

              if (this.visible) {
                this.minHeight =
                  document.body.getBoundingClientRect().height + "px";
                this.isXs();
              }
            },
            deep: true
          }
        },

        beforeDestroy() {
          window.removeEventListener("resize", this.getWindowWidth);
        }
      };
      // CONCATENATED MODULE: ./src/components/ContentMenu.vue?vue&type=script&lang=js&shadow
      /* harmony default export */ var components_ContentMenuvue_type_script_lang_js_shadow = ContentMenuvue_type_script_lang_js_shadow;
      // CONCATENATED MODULE: ./src/components/ContentMenu.vue?shadow

      function ContentMenushadow_injectStyles(context) {
        var style0 = __webpack_require__("d2e5");
        if (style0.__inject__) style0.__inject__(context);
      }

      /* normalize component */

      var ContentMenushadow_component = normalizeComponent(
        components_ContentMenuvue_type_script_lang_js_shadow,
        ContentMenuvue_type_template_id_1421cbfb_scoped_true_shadow_render,
        ContentMenuvue_type_template_id_1421cbfb_scoped_true_shadow_staticRenderFns,
        false,
        ContentMenushadow_injectStyles,
        "1421cbfb",
        null,
        true
      );

      ContentMenushadow_component.options.__file = "ContentMenu.vue";
      /* harmony default export */ var ContentMenushadow =
        ContentMenushadow_component.exports;
      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d50f023a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ContentUser.vue?vue&type=template&id=30f50373&scoped=true&shadow
      var ContentUservue_type_template_id_30f50373_scoped_true_shadow_render = function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c(
          "section",
          {
            staticClass: "content-user",
            class: _vm.isSmall ? "small" : "",
            style: _vm.isSmall
              ? "background-image: linear-gradient(0deg, rgba(0,0,0,.2),rgba(0,0,0,.2)), url(" +
                _vm.getOrgImgUrl() +
                ");"
              : ""
          },
          [
            _c("div", [
              _c("div", { staticClass: "org-img" }, [
                _c("img", {
                  attrs: {
                    src: _vm.getOrgImgUrl(),
                    title: _vm.orgInfos.displayName,
                    alt: _vm.orgInfos.displayName
                  }
                })
              ]),
              _c("div", { staticClass: "user-infos" }, [
                _c("div", [
                  _vm.getUserAvatar() != null
                    ? _c("div", { staticClass: "user-avatar" }, [
                        _vm.userInfoPortletUrl !== ""
                          ? _c(
                              "a",
                              {
                                attrs: {
                                  href: _vm.userInfoPortletUrl,
                                  title: _vm.translate(
                                    "message.userInfoPortletUrl.title"
                                  )
                                }
                              },
                              [
                                _c("img", {
                                  attrs: {
                                    src: _vm.getUserAvatar(),
                                    alt: "avatar"
                                  }
                                })
                              ]
                            )
                          : _c("img", {
                              attrs: { src: _vm.getUserAvatar(), alt: "avatar" }
                            })
                      ])
                    : _c(
                        "div",
                        { staticClass: "user-avatar" },
                        [_c("icon", { attrs: { name: "user" } })],
                        1
                      ),
                  _c("div", { staticClass: "wrapper-infos" }, [
                    _c("div", { staticClass: "user-name" }, [
                      _c("span", { attrs: { title: _vm.userInfos.name } }, [
                        _vm._v(_vm._s(_vm.userInfos.name))
                      ])
                    ]),
                    _c("div", { staticClass: "user-org" }, [
                      _c(
                        "span",
                        { attrs: { title: _vm.orgInfos.displayName } },
                        [_vm._v(_vm._s(_vm.orgInfos.displayName))]
                      )
                    ])
                  ]),
                  _vm.otherOrgs.length > 1
                    ? _c("div", { staticClass: "other-orgs" }, [
                        _c(
                          "a",
                          {
                            attrs: {
                              href: _vm.apiUrlOrgInfos,
                              title: _vm.translate(
                                "message.userChangeEtabUrl.title"
                              )
                            }
                          },
                          [_c("icon", { attrs: { name: "exchange-alt" } })],
                          1
                        )
                      ])
                    : _vm._e()
                ])
              ])
            ])
          ]
        );
      };
      var ContentUservue_type_template_id_30f50373_scoped_true_shadow_staticRenderFns = [];

      // CONCATENATED MODULE: ./src/components/ContentUser.vue?vue&type=template&id=30f50373&scoped=true&shadow

      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ContentUser.vue?vue&type=script&lang=js&shadow
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //

      /*eslint no-console: ["error", { allow: ["warn", "error"] }] */

      /* harmony default export */ var ContentUservue_type_script_lang_js_shadow = {
        name: "ContentUser",
        props: {
          isSmall: {
            type: Boolean,
            default: false
          },
          orgInfos: {
            type: Object,
            default: () => ({})
          },
          otherOrgs: {
            type: Array,
            default: () => []
          },
          userInfos: {
            type: Object,
            required: true,
            default: () => undefined
          },
          apiUrlOrgInfos: {
            type: String,
            default: "/change-etablissement/rest/v2/structures/structs/"
          },
          defaultOrgLogo: {
            type: String,
            required: true
          },
          userInfoPortletUrl: {
            type: String,
            default: ""
          }
        },
        components: {
          Icon: Icon
        },
        methods: {
          translate(text, lang) {
            return i18n.t(text, lang);
          },

          hasOrgImage() {
            return (
              this.orgInfos !== {} &&
              this.orgInfos.otherAttributes &&
              this.orgInfos.otherAttributes.ESCOStructureLogo &&
              this.orgInfos.otherAttributes.ESCOStructureLogo.length > 0
            );
          },

          getOrgImgUrl() {
            return this.hasOrgImage()
              ? this.computeImgUrl(
                  this.orgInfos.otherAttributes.ESCOStructureLogo[0]
                )
              : this.defaultOrgLogo;
          },

          getUserAvatar() {
            var avatar = this.userInfos.picture || null;
            return this.computeImgUrl(avatar);
          },

          computeImgUrl(url) {
            if (url != null && !url.startsWith("http")) {
              return "" + url;
            }

            return url;
          }
        }
      };
      // CONCATENATED MODULE: ./src/components/ContentUser.vue?vue&type=script&lang=js&shadow
      /* harmony default export */ var components_ContentUservue_type_script_lang_js_shadow = ContentUservue_type_script_lang_js_shadow;
      // CONCATENATED MODULE: ./src/components/ContentUser.vue?shadow

      function ContentUsershadow_injectStyles(context) {
        var style0 = __webpack_require__("3fea");
        if (style0.__inject__) style0.__inject__(context);
      }

      /* normalize component */

      var ContentUsershadow_component = normalizeComponent(
        components_ContentUservue_type_script_lang_js_shadow,
        ContentUservue_type_template_id_30f50373_scoped_true_shadow_render,
        ContentUservue_type_template_id_30f50373_scoped_true_shadow_staticRenderFns,
        false,
        ContentUsershadow_injectStyles,
        "30f50373",
        null,
        true
      );

      ContentUsershadow_component.options.__file = "ContentUser.vue";
      /* harmony default export */ var ContentUsershadow =
        ContentUsershadow_component.exports;
      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d50f023a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Ellipsis.vue?vue&type=template&id=8c29ffca&scoped=true&shadow
      var Ellipsisvue_type_template_id_8c29ffca_scoped_true_shadow_render = function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c("div", { ref: "sentence" });
      };
      var Ellipsisvue_type_template_id_8c29ffca_scoped_true_shadow_staticRenderFns = [];

      // CONCATENATED MODULE: ./src/components/Ellipsis.vue?vue&type=template&id=8c29ffca&scoped=true&shadow

      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Ellipsis.vue?vue&type=script&lang=js&shadow

      //
      //
      //
      //
      // Code translation from https://github.com/jypblue/vue-ellipsis
      // intregration due to a problem : https://github.com/jypblue/vue-ellipsis/issues/2
      /* harmony default export */ var Ellipsisvue_type_script_lang_js_shadow = {
        name: "Ellipsis",
        props: {
          message: {
            type: String,
            default: ""
          },
          lineClamp: {
            type: Number,
            default: 1
          },
          lineHeight: {
            type: String,
            default: "22px"
          },
          endChar: {
            type: String,
            default: "..."
          },
          endHtml: {
            type: String,
            default: ""
          }
        },

        mounted() {
          this.$nextTick(function() {
            setTimeout(() => {
              this.handleSubstrSentence();
            }, 200);
          });
        },

        methods: {
          handleSubstrSentence() {
            var stNode = this.$refs.sentence;
            var html = this.message;

            if (html.length === 0) {
              //throw new Error('the String is empty');
              return false;
            }

            stNode.innerHTML = html;
            var startPos = 0;
            var endPos = html.length;
            var stNodeLineHeight = parseInt(this.lineHeight, 10);
            var maxHeight = stNodeLineHeight * this.lineClamp;
            var stNodeHeight =
              stNode.getBoundingClientRect().height || stNodeLineHeight;

            if (stNodeHeight > maxHeight) {
              while (Math.abs(endPos - startPos) > 1) {
                var half = Math.ceil((endPos + startPos) / 2);

                var _newHtml = html.substring(0, half).trim();

                stNode.innerHTML = _newHtml;
                stNodeHeight =
                  stNode.getBoundingClientRect().height || stNodeLineHeight;

                if (stNodeHeight <= maxHeight) {
                  startPos = half;
                } else {
                  endPos = half;
                }
              }

              while (stNodeHeight > maxHeight) {
                var _newHtml2 = stNode.innerHTML.substring(
                  0,
                  stNode.innerHTML.trimRight().length - 1
                );

                stNode.innerHTML = _newHtml2.trim();
                stNodeHeight =
                  stNode.getBoundingClientRect().height || stNodeLineHeight;
              }

              var endStr =
                this.endHtml !== "" ? this.endHtml.replace(/<[^>]+>/g, "") : "";
              var endLen =
                this.endChar === "..."
                  ? 3
                  : endStr.length + this.endChar.length;
              var stNodeLen = stNode.innerHTML.trimRight().length;
              var stNodeDelStr = stNode.innerHTML
                .substring(stNodeLen - endLen, stNodeLen)
                .trim();
              var match = stNodeDelStr.match(/\s+/g);
              var extraLen = match && match.length ? match.length : 0;
              var newHtml =
                stNode.innerHTML
                  .substring(0, stNodeLen - endLen - extraLen)
                  .trim() +
                this.endChar +
                this.endHtml;
              stNode.innerHTML = newHtml;
            }
          }
        },
        watch: {
          message: {
            handler: function handler() {
              this.calcFavoritesPortlets();
            }
          }
        }
      };
      // CONCATENATED MODULE: ./src/components/Ellipsis.vue?vue&type=script&lang=js&shadow
      /* harmony default export */ var components_Ellipsisvue_type_script_lang_js_shadow = Ellipsisvue_type_script_lang_js_shadow;
      // CONCATENATED MODULE: ./src/components/Ellipsis.vue?shadow

      function Ellipsisshadow_injectStyles(context) {
        var style0 = __webpack_require__("80dd");
        if (style0.__inject__) style0.__inject__(context);
      }

      /* normalize component */

      var Ellipsisshadow_component = normalizeComponent(
        components_Ellipsisvue_type_script_lang_js_shadow,
        Ellipsisvue_type_template_id_8c29ffca_scoped_true_shadow_render,
        Ellipsisvue_type_template_id_8c29ffca_scoped_true_shadow_staticRenderFns,
        false,
        Ellipsisshadow_injectStyles,
        "8c29ffca",
        null,
        true
      );

      Ellipsisshadow_component.options.__file = "Ellipsis.vue";
      /* harmony default export */ var Ellipsisshadow =
        Ellipsisshadow_component.exports;
      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d50f023a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/HamburgerMenu.vue?vue&type=template&id=7dc7c0fe&scoped=true&shadow
      var HamburgerMenuvue_type_template_id_7dc7c0fe_scoped_true_shadow_render = function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c(
          "div",
          { staticClass: "hamburger-menu" },
          [
            _c(
              "div",
              {
                staticClass: "content-menu-toggle",
                attrs: {
                  "aria-label": "Menu",
                  role: "button",
                  title: "Menu",
                  "data-toggle": "content-menu",
                  "aria-expanded": "false",
                  "aria-haspopup": "true",
                  "aria-controls": "content-menu"
                },
                on: {
                  click: function($event) {
                    _vm.toggleMenu($event);
                  }
                }
              },
              [_vm._m(0)]
            ),
            _c("content-menu", {
              attrs: {
                "default-class": "toggler-menu",
                "visible-class": "active-menu",
                "is-hidden": !_vm.visible,
                "default-org-logo": _vm.defaultOrgLogo,
                "user-info-portlet-url": _vm.userInfoPortletUrl
              }
            })
          ],
          1
        );
      };
      var HamburgerMenuvue_type_template_id_7dc7c0fe_scoped_true_shadow_staticRenderFns = [
        function() {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c("div", { staticClass: "menu-wrapper" }, [
            _c("div"),
            _c("div"),
            _c("div")
          ]);
        }
      ];

      // CONCATENATED MODULE: ./src/components/HamburgerMenu.vue?vue&type=template&id=7dc7c0fe&scoped=true&shadow

      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d50f023a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ContentMenu.vue?vue&type=template&id=1b9624ca&scoped=true&
      var ContentMenuvue_type_template_id_1b9624ca_scoped_true_render = function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c(
          "div",
          {
            staticClass: "content-menu",
            class: [
              "toggler-menu",
              _vm.isSmall ? "small " : "",
              _vm.visible ? "active-menu" : ""
            ],
            style: "min-height: " + _vm.minHeight
          },
          [
            _c(
              "header",
              [
                _c("header-buttons", {
                  attrs: {
                    "call-on-close": _vm.close,
                    "sign-out-url": _vm.signOutUrl
                  }
                }),
                _c(
                  "div",
                  { staticClass: "wrapper" },
                  [
                    _c("content-user", {
                      attrs: {
                        "org-infos": _vm.infos.userOrganization,
                        "user-infos": _vm.infos.user,
                        "other-orgs": _vm.infos.organizations,
                        "is-small": _vm.isSmall,
                        "default-org-logo": _vm.defaultOrgLogo,
                        "user-info-portlet-url": _vm.userInfoPortletUrl,
                        "api-url-org-infos": _vm.apiUrlOrgInfos
                      }
                    }),
                    _c("content-favorites", {
                      attrs: {
                        portlets: _vm.infos.portlets,
                        favorites: _vm.infos.favorites,
                        "call-after-action": _vm.actionToggleFav,
                        "is-small": _vm.isSmall,
                        "favorite-api-url": _vm.favoriteApiUrl,
                        "is-hidden": _vm.isHidden,
                        "user-info-api-url": _vm.userInfoApiUrl
                      }
                    })
                  ],
                  1
                ),
                _c("div", {
                  staticClass: "background",
                  style:
                    _vm.backgroundImg != null && !_vm.isSmall
                      ? "background-image: linear-gradient(0deg, rgba(0,0,0,.2),rgba(0,0,0,.2)), url(" +
                        _vm.backgroundImg +
                        ");"
                      : ""
                })
              ],
              1
            ),
            _c("content-grid", {
              attrs: {
                portlets: _vm.infos.portlets,
                favorites: _vm.infos.favorites,
                "call-after-action": _vm.actionToggleFav,
                "is-small": _vm.isSmall,
                "favorite-api-url": _vm.favoriteApiUrl,
                "user-info-api-url": _vm.userInfoApiUrl
              }
            })
          ],
          1
        );
      };
      var ContentMenuvue_type_template_id_1b9624ca_scoped_true_staticRenderFns = [];

      // CONCATENATED MODULE: ./src/components/ContentMenu.vue?vue&type=template&id=1b9624ca&scoped=true&

      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ContentMenu.vue?vue&type=script&lang=js&

      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //

      var ContentMenuvue_type_script_lang_js_checkStatus = function checkStatus(
        response
      ) {
        //console.log("check response ", response);
        if (response.ok) {
          return response;
        } else {
          var error = new Error(response.statusText);
          error.response = response;
          throw error;
        }
      };

      var ContentMenuvue_type_script_lang_js_parseJSON = function parseJSON(
        response
      ) {
        //console.log("Parse response for json ", response);
        return response.json();
      };
      /*eslint no-console: ["error", { allow: ["warn", "error"] }] */

      /* harmony default export */ var ContentMenuvue_type_script_lang_js_ = {
        name: "ContentMenu",
        components: {
          ContentFavorites: ContentFavorites,
          ContentGrid: ContentGrid,
          ContentUser: ContentUser,
          HeaderButtons: HeaderButtons
        },
        props: {
          id: String,
          callOnClose: Function,
          isHidden: {
            type: Boolean,
            default: false
          },
          contextApiUrl: {
            type: String,
            default: "/uPortal"
          },
          signOutUrl: {
            type: String,
            default: "/uPortal/Logout"
          },
          defaultOrgLogo: {
            type: String,
            required: true
          },
          userInfoPortletUrl: {
            type: String,
            default: ""
          },
          apiUrlOrgInfos: {
            type: String,
            default: ""
          }
        },

        data() {
          return {
            backgroundImg: this.defaultOrgLogo,
            favoriteApiUrl: this.contextApiUrl + "/api/layout",
            userInfoApiUrl: this.contextApiUrl + "/api/v5-1/userinfo",
            isSmall: false,
            visible: !this.isHidden,
            minHeight: "100vh",
            infos: {
              portlets: [],
              favorites: [],
              organizations: [],
              user: {},
              userOrganization: {}
            }
          };
        },

        mounted() {
          this.$nextTick(function() {
            window.addEventListener("resize", this.isXs);
            this.fetchPortlets();
            this.fetchFavorites();
            this.fetchUserInfos();
          });
        },

        methods: {
          close(event) {
            this.visible = false;
            var element = document.querySelector("#" + this.id);
            element.parentNode.style.display = "none";
            element.setAttribute("is-hidden", true); //var element = document.querySelector('#');

            this.isHidden = false;

            if (typeof this.callOnClose === "function") {
              this.callOnClose(event);
            }
          },

          getWindowWidth: function getWindowWidth() {
            return this.$el.clientWidth;
          },
          isXs: function isXs() {
            this.isSmall = this.getWindowWidth() < 768;
          },
          computeCurrentOrg: function computeCurrentOrg() {
            if (
              this.infos.organizations &&
              this.infos.user &&
              this.infos.user.ESCOSIRENCourant &&
              this.infos.organizations.length > 0
            ) {
              this.infos.userOrganization = Object.assign(
                {},
                this.infos.userOrganization,
                this.infos.organizations.find(
                  entry => entry.id === this.infos.user.ESCOSIRENCourant[0]
                )
              );
            } else if (this.infos.organizations) {
              this.infos.userOrganization = Object.assign(
                {},
                this.infos.userOrganization,
                this.infos.organizations[0]
              );
            }

            if (
              this.infos.userOrganization &&
              this.infos.userOrganization.otherAttributes &&
              this.infos.userOrganization.otherAttributes.ESCOStructureLogo &&
              this.infos.userOrganization.otherAttributes.ESCOStructureLogo
                .length > 0
            ) {
              this.backgroundImg =
                "" +
                this.infos.userOrganization.otherAttributes
                  .ESCOStructureLogo[0];
            }
          },

          fetchUserInfos() {
            if (false) {
              var orgsInfos, userInfos;
            } else {
              openIdConnect({
                userInfoApiUrl: this.contextApiUrl + "/api/v5-1/userinfo"
              })
                .then(token => {
                  this.infos.user = Object.assign(
                    {},
                    this.infos.user,
                    token.decoded
                  );

                  if (token.decoded.ESCOSIREN) {
                    var options = {
                      method: "GET",
                      credentials: "same-origin",
                      headers: {
                        Authorization: "Bearer " + token.encoded,
                        "Content-Type": "application/json"
                      }
                    };
                    fetch(
                      "" +
                        "/change-etablissement/rest/v2/structures/structs/" +
                        "?ids=" +
                        token.decoded.ESCOSIREN,
                      options
                    )
                      .then(ContentMenuvue_type_script_lang_js_checkStatus)
                      .then(ContentMenuvue_type_script_lang_js_parseJSON)
                      .then(data => {
                        this.emptyArray(this.infos.organizations);

                        for (var prop in data) {
                          this.infos.organizations.push(data[prop]);
                        }

                        this.computeCurrentOrg();
                      });
                  }
                })
                .catch(function(err) {
                  console.error(err);
                });
            }
          },

          fetchPortlets() {
            if (false) {
              var data;
            } else {
              openIdConnect({
                userInfoApiUrl: this.contextApiUrl + "/api/v5-1/userinfo"
              })
                .then(token => {
                  var options = {
                    method: "GET",
                    credentials: "same-origin",
                    headers: {
                      Authorization: "Bearer " + token.encoded,
                      "Content-Type": "application/json"
                    }
                  };
                  fetch(
                    this.contextApiUrl + "/api/marketplace/entries.json",
                    options
                  )
                    .then(ContentMenuvue_type_script_lang_js_checkStatus)
                    .then(ContentMenuvue_type_script_lang_js_parseJSON)
                    .then(data => {
                      this.emptyArray(this.infos.portlets);
                      this.infos.portlets.push(...data.portlets);
                      this.infos.portlets.sort(this.sortPortlets);
                    });
                })
                .catch(function(err) {
                  console.error(err);
                });
            }
          },

          fetchFavorites() {
            if (false) {
            } else {
              openIdConnect({
                userInfoApiUrl: this.contextApiUrl + "/api/v5-1/userinfo"
              })
                .then(token => {
                  var options = {
                    method: "GET",
                    credentials: "same-origin",
                    headers: {
                      Authorization: "Bearer " + token.encoded,
                      "Content-Type": "application/json"
                    }
                  };
                  fetch(
                    this.contextApiUrl + "/api/v4-3/dlm/layout.json",
                    options
                  )
                    .then(ContentMenuvue_type_script_lang_js_checkStatus)
                    .then(ContentMenuvue_type_script_lang_js_parseJSON)
                    .then(data => {
                      if (
                        data &&
                        data.authenticated &&
                        data.layout &&
                        data.layout.globals &&
                        data.layout.globals.hasFavorites
                      ) {
                        if (data.layout.favorites) {
                          this.emptyArray(this.infos.favorites);
                          this.computeFavoritesContent(data.layout.favorites);
                        }
                      }
                    });
                })
                .catch(function(err) {
                  console.error(err);
                });
            }
          },

          computeFavoritesContent(elem) {
            if (elem !== undefined) {
              if (Array.isArray(elem)) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                  for (
                    var _iterator = elem[Symbol.iterator](), _step;
                    !(_iteratorNormalCompletion = (_step = _iterator.next())
                      .done);
                    _iteratorNormalCompletion = true
                  ) {
                    var folder = _step.value;
                    this.computeFavoritesContent(folder);
                  }
                } catch (err) {
                  _didIteratorError = true;
                  _iteratorError = err;
                } finally {
                  try {
                    if (
                      !_iteratorNormalCompletion &&
                      _iterator.return != null
                    ) {
                      _iterator.return();
                    }
                  } finally {
                    if (_didIteratorError) {
                      throw _iteratorError;
                    }
                  }
                }
              } else {
                var content = elem.content;

                if (content === undefined || !content) {
                  var fname = elem.fname;

                  if (fname !== undefined && fname) {
                    this.infos.favorites.push(fname);
                  }
                } else {
                  this.computeFavoritesContent(content);
                }
              }
            }
          },

          actionToggleFav: function actionToggleFav(isAddFavorite, fname) {
            if (isAddFavorite) {
              this.infos.favorites.push(fname);
            } else {
              this.infos.favorites = this.infos.favorites.filter(
                value => value !== fname
              );
            }
          },
          sortPortlets: function sortPortlets(a, b) {
            return a.title
              .trim()
              .toLowerCase()
              .localeCompare(b.title.trim().toLowerCase(), undefined, {
                numberic: true
              });
          },
          emptyArray: function emptyArray(array) {
            while (array.length > 0) {
              array.pop();
            }
          }
        },
        watch: {
          isHidden: {
            handler: function handler() {
              this.visible = !this.isHidden;

              if (this.visible) {
                this.minHeight =
                  document.body.getBoundingClientRect().height + "px";
                this.isXs();
              }
            },
            deep: true
          }
        },

        beforeDestroy() {
          window.removeEventListener("resize", this.getWindowWidth);
        }
      };
      // CONCATENATED MODULE: ./src/components/ContentMenu.vue?vue&type=script&lang=js&
      /* harmony default export */ var components_ContentMenuvue_type_script_lang_js_ = ContentMenuvue_type_script_lang_js_;
      // CONCATENATED MODULE: ./src/components/ContentMenu.vue

      function ContentMenu_injectStyles(context) {
        var style0 = __webpack_require__("2bc3");
        if (style0.__inject__) style0.__inject__(context);
      }

      /* normalize component */

      var ContentMenu_component = normalizeComponent(
        components_ContentMenuvue_type_script_lang_js_,
        ContentMenuvue_type_template_id_1b9624ca_scoped_true_render,
        ContentMenuvue_type_template_id_1b9624ca_scoped_true_staticRenderFns,
        false,
        ContentMenu_injectStyles,
        "1b9624ca",
        null,
        true
      );

      ContentMenu_component.options.__file = "ContentMenu.vue";
      /* harmony default export */ var ContentMenu =
        ContentMenu_component.exports;
      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/HamburgerMenu.vue?vue&type=script&lang=js&shadow
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //

      /*eslint no-console: ["error", { allow: ["warn", "error"] }] */

      /* harmony default export */ var HamburgerMenuvue_type_script_lang_js_shadow = {
        name: "HamburgerMenu",
        props: {
          contextApiUrl: {
            type: String,
            default: "/uPortal"
          },
          signOutUrl: {
            type: String,
            default: "/uPortal/Logout"
          },
          defaultOrgLogo: {
            type: String,
            required: true
          },
          userInfoPortletUrl: {
            type: String,
            default: ""
          }
        },

        data() {
          return {
            visible: false
          };
        },

        methods: {
          toggleMenu(event) {
            event.preventDefault();
            this.visible = !this.visible;
          }
        },
        components: {
          ContentMenu: ContentMenu
        }
      };
      // CONCATENATED MODULE: ./src/components/HamburgerMenu.vue?vue&type=script&lang=js&shadow
      /* harmony default export */ var components_HamburgerMenuvue_type_script_lang_js_shadow = HamburgerMenuvue_type_script_lang_js_shadow;
      // CONCATENATED MODULE: ./src/components/HamburgerMenu.vue?shadow

      function HamburgerMenushadow_injectStyles(context) {
        var style0 = __webpack_require__("088a");
        if (style0.__inject__) style0.__inject__(context);
      }

      /* normalize component */

      var HamburgerMenushadow_component = normalizeComponent(
        components_HamburgerMenuvue_type_script_lang_js_shadow,
        HamburgerMenuvue_type_template_id_7dc7c0fe_scoped_true_shadow_render,
        HamburgerMenuvue_type_template_id_7dc7c0fe_scoped_true_shadow_staticRenderFns,
        false,
        HamburgerMenushadow_injectStyles,
        "7dc7c0fe",
        null,
        true
      );

      HamburgerMenushadow_component.options.__file = "HamburgerMenu.vue";
      /* harmony default export */ var HamburgerMenushadow =
        HamburgerMenushadow_component.exports;
      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d50f023a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/HeaderButtons.vue?vue&type=template&id=8d64c084&scoped=true&shadow
      var HeaderButtonsvue_type_template_id_8d64c084_scoped_true_shadow_render = function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c("section", { staticClass: "content-menu-header-buttons" }, [
          _c(
            "button",
            {
              staticClass: "content-menu-close",
              attrs: {
                type: "button",
                "aria-label": "Close",
                title: _vm.translate("message.buttons.menuClose")
              },
              on: {
                click: function($event) {
                  _vm.callOnClose($event);
                }
              }
            },
            [_c("icon", { attrs: { name: "times" } })],
            1
          ),
          _c(
            "a",
            {
              staticClass: "signout",
              attrs: {
                href: _vm.signOutUrl,
                title: _vm.translate("message.buttons.logout")
              }
            },
            [_c("icon", { attrs: { name: "sign-out-alt" } })],
            1
          )
        ]);
      };
      var HeaderButtonsvue_type_template_id_8d64c084_scoped_true_shadow_staticRenderFns = [];

      // CONCATENATED MODULE: ./src/components/HeaderButtons.vue?vue&type=template&id=8d64c084&scoped=true&shadow

      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/HeaderButtons.vue?vue&type=script&lang=js&shadow
      //
      //
      //
      //
      //
      //
      //
      //

      /* harmony default export */ var HeaderButtonsvue_type_script_lang_js_shadow = {
        name: "HeaderButtons",
        props: {
          callOnClose: Function,
          signOutUrl: {
            type: String,
            default: "/uPortal/Logout"
          }
        },
        components: {
          Icon: Icon
        },
        methods: {
          translate(text, lang) {
            return i18n.t(text, lang);
          }
        }
      };
      // CONCATENATED MODULE: ./src/components/HeaderButtons.vue?vue&type=script&lang=js&shadow
      /* harmony default export */ var components_HeaderButtonsvue_type_script_lang_js_shadow = HeaderButtonsvue_type_script_lang_js_shadow;
      // CONCATENATED MODULE: ./src/components/HeaderButtons.vue?shadow

      function HeaderButtonsshadow_injectStyles(context) {
        var style0 = __webpack_require__("ef34");
        if (style0.__inject__) style0.__inject__(context);
      }

      /* normalize component */

      var HeaderButtonsshadow_component = normalizeComponent(
        components_HeaderButtonsvue_type_script_lang_js_shadow,
        HeaderButtonsvue_type_template_id_8d64c084_scoped_true_shadow_render,
        HeaderButtonsvue_type_template_id_8d64c084_scoped_true_shadow_staticRenderFns,
        false,
        HeaderButtonsshadow_injectStyles,
        "8d64c084",
        null,
        true
      );

      HeaderButtonsshadow_component.options.__file = "HeaderButtons.vue";
      /* harmony default export */ var HeaderButtonsshadow =
        HeaderButtonsshadow_component.exports;
      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d50f023a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PortletCard.vue?vue&type=template&id=f5a982f0&scoped=true&shadow
      var PortletCardvue_type_template_id_f5a982f0_scoped_true_shadow_render = function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c("div", { class: _vm.mainClass }, [
          _c("div", { staticClass: "portlet-card-icon" }, [
            _vm.iconUrl !== null
              ? _c(
                  "div",
                  {
                    staticClass: "img-wrapper",
                    style: "background-color:" + _vm.iconBackgroundColor
                  },
                  [_c("img", { attrs: { src: _vm.iconUrl, alt: _vm.title } })]
                )
              : _c("div", {
                  staticClass: "img-wrapper",
                  style: "background-color:" + _vm.iconBackgroundColor
                })
          ]),
          _c("div", { staticClass: "portlet-card-title" }, [
            _vm._v(_vm._s(_vm.title))
          ]),
          _c(
            "div",
            { staticClass: "portlet-card-description" },
            [
              _c("ellipsis", {
                attrs: {
                  message: _vm.description,
                  "line-clamp": 2,
                  "line-height": "20px",
                  "end-char": "..."
                }
              })
            ],
            1
          ),
          _c(
            "div",
            { staticClass: "portlet-card-action" },
            [
              _vm.canFavorite
                ? _c("action-favorites", {
                    attrs: {
                      fname: _vm.fname,
                      "chan-id": _vm.channelId,
                      "is-favorite": _vm.isFavorite,
                      "call-on-toggle-fav": _vm.callAfterAction,
                      "favorite-api-url": _vm.favoriteApiUrl,
                      "user-info-api-url": _vm.userInfoApiUrl
                    }
                  })
                : _vm._e()
            ],
            1
          )
        ]);
      };
      var PortletCardvue_type_template_id_f5a982f0_scoped_true_shadow_staticRenderFns = [];

      // CONCATENATED MODULE: ./src/components/PortletCard.vue?vue&type=template&id=f5a982f0&scoped=true&shadow

      // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PortletCard.vue?vue&type=script&lang=js&shadow

      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //

      /* harmony default export */ var PortletCardvue_type_script_lang_js_shadow = {
        name: "PortletCard",
        props: {
          callAfterAction: Function,
          cssClass: {
            type: String,
            default: "portlet-card"
          },
          // Background is needed if your icons doesn't have it integrated
          iconBackgroundColor: {
            type: String,
            default: "Transparent"
          },
          isFavorite: {
            type: Boolean,
            default: false
          },
          favoriteApiUrl: {
            type: String,
            default: "/uPortal" + "/api/layout"
          },
          userInfoApiUrl: {
            type: String,
            default: "/uPortal" + "/api/v5-1/userinfo"
          },
          isSmall: {
            type: Boolean,
            default: false
          },
          portletDesc: {
            type: Object,
            required: true
          },
          backGroundIsDark: {
            type: Boolean,
            default: false
          }
        },

        data() {
          return {
            fname: this.portletDesc.fname,
            channelId: this.portletDesc.id,
            description: this.truncate(this.portletDesc.description),
            title: this.portletDesc.title,
            canFavorite: this.portletDesc.canAdd,
            iconUrl:
              this.portletDesc.layoutObject.iconUrl !== null
                ? this.computeIconUrl(this.portletDesc.layoutObject.iconUrl)
                : null
          };
        },

        components: {
          ActionFavorites: ActionFavorites,
          Ellipsis: Ellipsis
        },
        computed: {
          mainClass: function mainClass() {
            var appClass =
              this.cssClass +
              " " +
              this.fname.toLowerCase() +
              " " +
              (this.portletDesc && this.portletDesc.categories
                ? this.portletDesc.categories.join(" ").toLowerCase()
                : "");

            if (this.isSmall) {
              appClass += " small-card";
            }

            if (this.backGroundIsDark) {
              appClass += " background-dark";
            }

            return appClass;
          }
        },
        methods: {
          computeIconUrl: function computeIconUrl(url) {
            if (url != null && !url.startsWith("http")) {
              return "" + url;
            }

            return url;
          },
          truncate: function truncate(entry) {
            if (entry) {
              var text = entry.split("   ");
              return text[0].trim();
            }

            return entry.trim();
          } //,
          // watch: {
          //   isSmall: {
          //     handler: function() {
          //       this.description = "";
          //       this.description = this.truncate(this.portletDesc.description);
          //     }
          //   }
          // }
        }
      };
      // CONCATENATED MODULE: ./src/components/PortletCard.vue?vue&type=script&lang=js&shadow
      /* harmony default export */ var components_PortletCardvue_type_script_lang_js_shadow = PortletCardvue_type_script_lang_js_shadow;
      // CONCATENATED MODULE: ./src/components/PortletCard.vue?shadow

      function PortletCardshadow_injectStyles(context) {
        var style0 = __webpack_require__("d73c");
        if (style0.__inject__) style0.__inject__(context);
      }

      /* normalize component */

      var PortletCardshadow_component = normalizeComponent(
        components_PortletCardvue_type_script_lang_js_shadow,
        PortletCardvue_type_template_id_f5a982f0_scoped_true_shadow_render,
        PortletCardvue_type_template_id_f5a982f0_scoped_true_shadow_staticRenderFns,
        false,
        PortletCardshadow_injectStyles,
        "f5a982f0",
        null,
        true
      );

      PortletCardshadow_component.options.__file = "PortletCard.vue";
      /* harmony default export */ var PortletCardshadow =
        PortletCardshadow_component.exports;
      // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-wc.js

      // runtime shared by every component chunk

      window.customElements.define(
        "esco-content-menu-action-favorites",
        vue_wc_wrapper(external_Vue_default.a, ActionFavoritesshadow)
      );

      window.customElements.define(
        "esco-content-menu-content-favorites",
        vue_wc_wrapper(external_Vue_default.a, ContentFavoritesshadow)
      );

      window.customElements.define(
        "esco-content-menu-content-grid",
        vue_wc_wrapper(external_Vue_default.a, ContentGridshadow)
      );

      window.customElements.define(
        "esco-content-menu-content-menu",
        vue_wc_wrapper(external_Vue_default.a, ContentMenushadow)
      );

      window.customElements.define(
        "esco-content-menu-content-user",
        vue_wc_wrapper(external_Vue_default.a, ContentUsershadow)
      );

      window.customElements.define(
        "esco-content-menu-ellipsis",
        vue_wc_wrapper(external_Vue_default.a, Ellipsisshadow)
      );

      window.customElements.define(
        "esco-content-menu-hamburger-menu",
        vue_wc_wrapper(external_Vue_default.a, HamburgerMenushadow)
      );

      window.customElements.define(
        "esco-content-menu-header-buttons",
        vue_wc_wrapper(external_Vue_default.a, HeaderButtonsshadow)
      );

      window.customElements.define(
        "esco-content-menu-portlet-card",
        vue_wc_wrapper(external_Vue_default.a, PortletCardshadow)
      );

      /***/
    },

    /***/ "5ca1": /***/ function(module, exports, __webpack_require__) {
      var global = __webpack_require__("7726");
      var core = __webpack_require__("8378");
      var hide = __webpack_require__("32e9");
      var redefine = __webpack_require__("2aba");
      var ctx = __webpack_require__("9b43");
      var PROTOTYPE = "prototype";

      var $export = function(type, name, source) {
        var IS_FORCED = type & $export.F;
        var IS_GLOBAL = type & $export.G;
        var IS_STATIC = type & $export.S;
        var IS_PROTO = type & $export.P;
        var IS_BIND = type & $export.B;
        var target = IS_GLOBAL
          ? global
          : IS_STATIC
            ? global[name] || (global[name] = {})
            : (global[name] || {})[PROTOTYPE];
        var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
        var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
        var key, own, out, exp;
        if (IS_GLOBAL) source = name;
        for (key in source) {
          // contains in native
          own = !IS_FORCED && target && target[key] !== undefined;
          // export native or passed
          out = (own ? target : source)[key];
          // bind timers to global for call from export context
          exp =
            IS_BIND && own
              ? ctx(out, global)
              : IS_PROTO && typeof out == "function"
                ? ctx(Function.call, out)
                : out;
          // extend global
          if (target) redefine(target, key, out, type & $export.U);
          // export
          if (exports[key] != out) hide(exports, key, exp);
          if (IS_PROTO && expProto[key] != out) expProto[key] = out;
        }
      };
      global.core = core;
      // type bitmap
      $export.F = 1; // forced
      $export.G = 2; // global
      $export.S = 4; // static
      $export.P = 8; // proto
      $export.B = 16; // bind
      $export.W = 32; // wrap
      $export.U = 64; // safe
      $export.R = 128; // real proto method for `library`
      module.exports = $export;

      /***/
    },

    /***/ "5ddc": /***/ function(module, exports, __webpack_require__) {
      // style-loader: Adds some css to the DOM by adding a <style> tag

      // load the styles
      var content = __webpack_require__("ae33");
      if (typeof content === "string") content = [[module.i, content, ""]];
      if (content.locals) module.exports = content.locals;
      // add CSS to Shadow Root
      var add = __webpack_require__("35d6").default;
      module.exports.__inject__ = function(shadowRoot) {
        add("aa84f716", content, shadowRoot);
      };

      /***/
    },

    /***/ "5e58": /***/ function(module, exports, __webpack_require__) {
      "use strict";

      /**
       * Determines whether the specified URL is absolute
       *
       * @param {string} url The URL to test
       * @returns {boolean} True if the specified URL is absolute, otherwise false
       */
      module.exports = function isAbsoluteURL(url) {
        // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
        // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
        // by any combination of letters, digits, plus, period, or hyphen.
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
      };

      /***/
    },

    /***/ "613b": /***/ function(module, exports, __webpack_require__) {
      var shared = __webpack_require__("5537")("keys");
      var uid = __webpack_require__("ca5a");
      module.exports = function(key) {
        return shared[key] || (shared[key] = uid(key));
      };

      /***/
    },

    /***/ "626a": /***/ function(module, exports, __webpack_require__) {
      // fallback for non-array-like ES3 and non-enumerable old V8 strings
      var cof = __webpack_require__("2d95");
      // eslint-disable-next-line no-prototype-builtins
      module.exports = Object("z").propertyIsEnumerable(0)
        ? Object
        : function(it) {
            return cof(it) == "String" ? it.split("") : Object(it);
          };

      /***/
    },

    /***/ "6730": /***/ function(module, exports, __webpack_require__) {
      exports = module.exports = __webpack_require__("2350")(false);
      // imports
      exports.i(__webpack_require__("aea1"), "");

      // module
      exports.push([
        module.i,
        "\n.content-favorites[data-v-156f4a9f]{color:#fff;display:flex;flex-flow:column;justify-content:center;padding-bottom:1.5em;width:inherit\n}\n.content-favorites>.content-favorites-title[data-v-156f4a9f]{filter:grayscale(1);margin:0 0 5px 2em;text-transform:uppercase\n}\n.content-favorites>.content-favorites-title h1[data-v-156f4a9f]{color:#fff;font-size:24px;font-weight:400;margin:10px 0 5px 10px\n}\n.content-favorites>.favorites[data-v-156f4a9f]{position:relative\n}\n.content-favorites>.favorites>.swiper-container[data-v-156f4a9f]{margin:0 45px;padding-bottom:15px\n}\n.content-favorites>.favorites>.swiper-container>.swiper-wrapper>.swiper-slide[data-v-156f4a9f]{height:175px;margin:30px;width:255px\n}\n.content-favorites>.favorites>.swiper-container>.swiper-wrapper>.swiper-slide[data-v-156f4a9f]:first-child{margin-left:0\n}\n.content-favorites>.favorites>.swiper-container .swiper-pagination[data-v-156f4a9f]{bottom:0\n}\n.content-favorites>.favorites>.swiper-container .swiper-pagination>span.swiper-pagination-bullet[data-v-156f4a9f]{color:#fff;height:16px;margin:0 8px;width:16px\n}\n.content-favorites>.favorites .swiper-button-next[data-v-156f4a9f],.content-favorites>.favorites .swiper-button-prev[data-v-156f4a9f]{background-image:none;color:#fff;height:auto;margin-top:0;width:auto\n}\n.content-favorites>.favorites .fav-swiper-button-disabled[data-v-156f4a9f]{cursor:auto;opacity:.35;pointer-events:none\n}\n.content-favorites>.favorites a.no-style[data-v-156f4a9f]{color:inherit;text-decoration:none\n}\n.content-favorites>.empty-favorites[data-v-156f4a9f]{padding-left:2em\n}\n.content-favorites.small>.content-favorites-title h1[data-v-156f4a9f]{font-size:medium;font-weight:700\n}\n.content-favorites.small>.favorites[data-v-156f4a9f]{padding-left:2em\n}\n.content-favorites.small>.favorites>.swiper-container[data-v-156f4a9f]{margin:0;padding-bottom:30px\n}\n.content-favorites.small>.favorites>.swiper-container>.swiper-wrapper>.swiper-slide[data-v-156f4a9f]{height:auto;margin:0;width:120px\n}\n.content-favorites.small>.favorites .swiper-button-next[data-v-156f4a9f],.content-favorites.small>.favorites .swiper-button-prev[data-v-156f4a9f]{display:none\n}\n.content-favorites .fa-icon[data-v-156f4a9f]{height:2em;max-height:100%;max-width:100%;width:auto\n}",
        ""
      ]);

      // exports

      /***/
    },

    /***/ "67ab": /***/ function(module, exports, __webpack_require__) {
      var META = __webpack_require__("ca5a")("meta");
      var isObject = __webpack_require__("d3f4");
      var has = __webpack_require__("69a8");
      var setDesc = __webpack_require__("86cc").f;
      var id = 0;
      var isExtensible =
        Object.isExtensible ||
        function() {
          return true;
        };
      var FREEZE = !__webpack_require__("79e5")(function() {
        return isExtensible(Object.preventExtensions({}));
      });
      var setMeta = function(it) {
        setDesc(it, META, {
          value: {
            i: "O" + ++id, // object ID
            w: {} // weak collections IDs
          }
        });
      };
      var fastKey = function(it, create) {
        // return primitive with prefix
        if (!isObject(it))
          return typeof it == "symbol"
            ? it
            : (typeof it == "string" ? "S" : "P") + it;
        if (!has(it, META)) {
          // can't set metadata to uncaught frozen object
          if (!isExtensible(it)) return "F";
          // not necessary to add metadata
          if (!create) return "E";
          // add missing metadata
          setMeta(it);
          // return object ID
        }
        return it[META].i;
      };
      var getWeak = function(it, create) {
        if (!has(it, META)) {
          // can't set metadata to uncaught frozen object
          if (!isExtensible(it)) return true;
          // not necessary to add metadata
          if (!create) return false;
          // add missing metadata
          setMeta(it);
          // return hash weak collections IDs
        }
        return it[META].w;
      };
      // add metadata on freeze-family methods calling
      var onFreeze = function(it) {
        if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META))
          setMeta(it);
        return it;
      };
      var meta = (module.exports = {
        KEY: META,
        NEED: false,
        fastKey: fastKey,
        getWeak: getWeak,
        onFreeze: onFreeze
      });

      /***/
    },

    /***/ "6821": /***/ function(module, exports, __webpack_require__) {
      // to indexed object, toObject with fallback for non-array-like ES3 strings
      var IObject = __webpack_require__("626a");
      var defined = __webpack_require__("be13");
      module.exports = function(it) {
        return IObject(defined(it));
      };

      /***/
    },

    /***/ "6840": /***/ function(module, exports, __webpack_require__) {
      exports = module.exports = __webpack_require__("2350")(false);
      // imports

      // module
      exports.push([
        module.i,
        "\n.content-menu[data-v-1b9624ca]{background-color:#d0d0d0;min-width:280px\n}\n.content-menu.toggler-menu[data-v-1b9624ca]{animation:fade .6s;left:0;min-heigth:100vh;opacity:0;position:absolute;top:0;transition:opacity .6s,visibility .6s;visibility:hidden;width:100%;z-index:1001\n}\n.content-menu.active-menu[data-v-1b9624ca]{opacity:1;visibility:visible\n}\n.content-menu *[data-v-1b9624ca]{font-family:Roboto,sans-serif\n}\n.content-menu>section[data-v-1b9624ca]{padding:.5em 1.5em\n}\n.content-menu header[data-v-1b9624ca]{overflow:hidden;position:relative\n}\n.content-menu header[data-v-1b9624ca]>:not(:last-child){position:relative;z-index:1\n}\n.content-menu header>.wrapper[data-v-1b9624ca]{display:flex;flex-flow:row nowrap\n}\n.content-menu header>.wrapper .content-favorites[data-v-1b9624ca]{filter:none;flex-grow:1;overflow:hidden\n}\n.content-menu header div.background[data-v-1b9624ca]{background-position:50%;background-repeat:no-repeat;background-size:cover;filter:blur(7px);height:110%;overflow:hidden;position:absolute;top:0;width:110%;z-index:0\n}\n.content-menu.small[data-v-1b9624ca]{background-color:#545454\n}\n.content-menu.small header div.background[data-v-1b9624ca]{background-image:none\n}\n.content-menu.small header .header-buttons[data-v-1b9624ca]{position:absolute;width:100%;z-index:2\n}\n.content-menu.small header>.wrapper[data-v-1b9624ca]{flex-flow:row wrap\n}",
        ""
      ]);

      // exports

      /***/
    },

    /***/ "69a8": /***/ function(module, exports) {
      var hasOwnProperty = {}.hasOwnProperty;
      module.exports = function(it, key) {
        return hasOwnProperty.call(it, key);
      };

      /***/
    },

    /***/ "6a99": /***/ function(module, exports, __webpack_require__) {
      // 7.1.1 ToPrimitive(input [, PreferredType])
      var isObject = __webpack_require__("d3f4");
      // instead of the ES6 spec version, we didn't implement @@toPrimitive case
      // and the second argument - flag - preferred type is a string
      module.exports = function(it, S) {
        if (!isObject(it)) return it;
        var fn, val;
        if (
          S &&
          typeof (fn = it.toString) == "function" &&
          !isObject((val = fn.call(it)))
        )
          return val;
        if (
          typeof (fn = it.valueOf) == "function" &&
          !isObject((val = fn.call(it)))
        )
          return val;
        if (
          !S &&
          typeof (fn = it.toString) == "function" &&
          !isObject((val = fn.call(it)))
        )
          return val;
        throw TypeError("Can't convert object to primitive value");
      };

      /***/
    },

    /***/ "6b54": /***/ function(module, exports, __webpack_require__) {
      "use strict";

      __webpack_require__("3846");
      var anObject = __webpack_require__("cb7c");
      var $flags = __webpack_require__("0bfb");
      var DESCRIPTORS = __webpack_require__("9e1e");
      var TO_STRING = "toString";
      var $toString = /./[TO_STRING];

      var define = function(fn) {
        __webpack_require__("2aba")(RegExp.prototype, TO_STRING, fn, true);
      };

      // 21.2.5.14 RegExp.prototype.toString()
      if (
        __webpack_require__("79e5")(function() {
          return $toString.call({ source: "a", flags: "b" }) != "/a/b";
        })
      ) {
        define(function toString() {
          var R = anObject(this);
          return "/".concat(
            R.source,
            "/",
            "flags" in R
              ? R.flags
              : !DESCRIPTORS && R instanceof RegExp
                ? $flags.call(R)
                : undefined
          );
        });
        // FF44- RegExp#toString has a wrong name
      } else if ($toString.name != TO_STRING) {
        define(function toString() {
          return $toString.call(this);
        });
      }

      /***/
    },

    /***/ "6b8a": /***/ function(module, exports, __webpack_require__) {
      "use strict";

      /**
       * A `Cancel` is an object that is thrown when an operation is canceled.
       *
       * @class
       * @param {string=} message The message.
       */
      function Cancel(message) {
        this.message = message;
      }

      Cancel.prototype.toString = function toString() {
        return "Cancel" + (this.message ? ": " + this.message : "");
      };

      Cancel.prototype.__CANCEL__ = true;

      module.exports = Cancel;

      /***/
    },

    /***/ "6bf2": /***/ function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PortletCard_vue_vue_type_style_index_0_id_31cef4fd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "c8f8"
      );
      /* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PortletCard_vue_vue_type_style_index_0_id_31cef4fd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PortletCard_vue_vue_type_style_index_0_id_31cef4fd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PortletCard_vue_vue_type_style_index_0_id_31cef4fd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__)
        if (__WEBPACK_IMPORT_KEY__ !== "default")
          (function(key) {
            __webpack_require__.d(__webpack_exports__, key, function() {
              return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PortletCard_vue_vue_type_style_index_0_id_31cef4fd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
                key
              ];
            });
          })(__WEBPACK_IMPORT_KEY__);
      /* harmony default export */ __webpack_exports__["default"] =
        _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PortletCard_vue_vue_type_style_index_0_id_31cef4fd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a;

      /***/
    },

    /***/ "6ed7": /***/ function(module, exports) {
      /**
       * Copyright (c) 2014-present, Facebook, Inc.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */

      !(function(global) {
        "use strict";

        var Op = Object.prototype;
        var hasOwn = Op.hasOwnProperty;
        var undefined; // More compressible than void 0.
        var $Symbol = typeof Symbol === "function" ? Symbol : {};
        var iteratorSymbol = $Symbol.iterator || "@@iterator";
        var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
        var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

        var inModule = typeof module === "object";
        var runtime = global.regeneratorRuntime;
        if (runtime) {
          if (inModule) {
            // If regeneratorRuntime is defined globally and we're in a module,
            // make the exports object identical to regeneratorRuntime.
            module.exports = runtime;
          }
          // Don't bother evaluating the rest of this file if the runtime was
          // already defined globally.
          return;
        }

        // Define the runtime globally (as expected by generated code) as either
        // module.exports (if we're in a module) or a new, empty object.
        runtime = global.regeneratorRuntime = inModule ? module.exports : {};

        function wrap(innerFn, outerFn, self, tryLocsList) {
          // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
          var protoGenerator =
            outerFn && outerFn.prototype instanceof Generator
              ? outerFn
              : Generator;
          var generator = Object.create(protoGenerator.prototype);
          var context = new Context(tryLocsList || []);

          // The ._invoke method unifies the implementations of the .next,
          // .throw, and .return methods.
          generator._invoke = makeInvokeMethod(innerFn, self, context);

          return generator;
        }
        runtime.wrap = wrap;

        // Try/catch helper to minimize deoptimizations. Returns a completion
        // record like context.tryEntries[i].completion. This interface could
        // have been (and was previously) designed to take a closure to be
        // invoked without arguments, but in all the cases we care about we
        // already have an existing method we want to call, so there's no need
        // to create a new function object. We can even get away with assuming
        // the method takes exactly one argument, since that happens to be true
        // in every case, so we don't have to touch the arguments object. The
        // only additional allocation required is the completion record, which
        // has a stable shape and so hopefully should be cheap to allocate.
        function tryCatch(fn, obj, arg) {
          try {
            return { type: "normal", arg: fn.call(obj, arg) };
          } catch (err) {
            return { type: "throw", arg: err };
          }
        }

        var GenStateSuspendedStart = "suspendedStart";
        var GenStateSuspendedYield = "suspendedYield";
        var GenStateExecuting = "executing";
        var GenStateCompleted = "completed";

        // Returning this object from the innerFn has the same effect as
        // breaking out of the dispatch switch statement.
        var ContinueSentinel = {};

        // Dummy constructor functions that we use as the .constructor and
        // .constructor.prototype properties for functions that return Generator
        // objects. For full spec compliance, you may wish to configure your
        // minifier not to mangle the names of these two functions.
        function Generator() {}
        function GeneratorFunction() {}
        function GeneratorFunctionPrototype() {}

        // This is a polyfill for %IteratorPrototype% for environments that
        // don't natively support it.
        var IteratorPrototype = {};
        IteratorPrototype[iteratorSymbol] = function() {
          return this;
        };

        var getProto = Object.getPrototypeOf;
        var NativeIteratorPrototype =
          getProto && getProto(getProto(values([])));
        if (
          NativeIteratorPrototype &&
          NativeIteratorPrototype !== Op &&
          hasOwn.call(NativeIteratorPrototype, iteratorSymbol)
        ) {
          // This environment has a native %IteratorPrototype%; use it instead
          // of the polyfill.
          IteratorPrototype = NativeIteratorPrototype;
        }

        var Gp = (GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(
          IteratorPrototype
        ));
        GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
        GeneratorFunctionPrototype.constructor = GeneratorFunction;
        GeneratorFunctionPrototype[
          toStringTagSymbol
        ] = GeneratorFunction.displayName = "GeneratorFunction";

        // Helper for defining the .next, .throw, and .return methods of the
        // Iterator interface in terms of a single ._invoke method.
        function defineIteratorMethods(prototype) {
          ["next", "throw", "return"].forEach(function(method) {
            prototype[method] = function(arg) {
              return this._invoke(method, arg);
            };
          });
        }

        runtime.isGeneratorFunction = function(genFun) {
          var ctor = typeof genFun === "function" && genFun.constructor;
          return ctor
            ? ctor === GeneratorFunction ||
                // For the native GeneratorFunction constructor, the best we can
                // do is to check its .name property.
                (ctor.displayName || ctor.name) === "GeneratorFunction"
            : false;
        };

        runtime.mark = function(genFun) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
          } else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            if (!(toStringTagSymbol in genFun)) {
              genFun[toStringTagSymbol] = "GeneratorFunction";
            }
          }
          genFun.prototype = Object.create(Gp);
          return genFun;
        };

        // Within the body of any async function, `await x` is transformed to
        // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
        // `hasOwn.call(value, "__await")` to determine if the yielded value is
        // meant to be awaited.
        runtime.awrap = function(arg) {
          return { __await: arg };
        };

        function AsyncIterator(generator) {
          function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") {
              reject(record.arg);
            } else {
              var result = record.arg;
              var value = result.value;
              if (
                value &&
                typeof value === "object" &&
                hasOwn.call(value, "__await")
              ) {
                return Promise.resolve(value.__await).then(
                  function(value) {
                    invoke("next", value, resolve, reject);
                  },
                  function(err) {
                    invoke("throw", err, resolve, reject);
                  }
                );
              }

              return Promise.resolve(value).then(
                function(unwrapped) {
                  // When a yielded Promise is resolved, its final value becomes
                  // the .value of the Promise<{value,done}> result for the
                  // current iteration.
                  result.value = unwrapped;
                  resolve(result);
                },
                function(error) {
                  // If a rejected Promise was yielded, throw the rejection back
                  // into the async generator function so it can be handled there.
                  return invoke("throw", error, resolve, reject);
                }
              );
            }
          }

          var previousPromise;

          function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
              return new Promise(function(resolve, reject) {
                invoke(method, arg, resolve, reject);
              });
            }

            return (previousPromise =
              // If enqueue has been called before, then we want to wait until
              // all previous Promises have been resolved before calling invoke,
              // so that results are always delivered in the correct order. If
              // enqueue has not been called before, then it is important to
              // call invoke immediately, without waiting on a callback to fire,
              // so that the async generator function has the opportunity to do
              // any necessary setup in a predictable way. This predictability
              // is why the Promise constructor synchronously invokes its
              // executor callback, and why async functions synchronously
              // execute code before the first await. Since we implement simple
              // async functions in terms of async generators, it is especially
              // important to get this right, even though it requires care.
              previousPromise
                ? previousPromise.then(
                    callInvokeWithMethodAndArg,
                    // Avoid propagating failures to Promises returned by later
                    // invocations of the iterator.
                    callInvokeWithMethodAndArg
                  )
                : callInvokeWithMethodAndArg());
          }

          // Define the unified helper method that is used to implement .next,
          // .throw, and .return (see defineIteratorMethods).
          this._invoke = enqueue;
        }

        defineIteratorMethods(AsyncIterator.prototype);
        AsyncIterator.prototype[asyncIteratorSymbol] = function() {
          return this;
        };
        runtime.AsyncIterator = AsyncIterator;

        // Note that simple async functions are implemented on top of
        // AsyncIterator objects; they just return a Promise for the value of
        // the final result produced by the iterator.
        runtime.async = function(innerFn, outerFn, self, tryLocsList) {
          var iter = new AsyncIterator(
            wrap(innerFn, outerFn, self, tryLocsList)
          );

          return runtime.isGeneratorFunction(outerFn)
            ? iter // If outerFn is a generator, return the full iterator.
            : iter.next().then(function(result) {
                return result.done ? result.value : iter.next();
              });
        };

        function makeInvokeMethod(innerFn, self, context) {
          var state = GenStateSuspendedStart;

          return function invoke(method, arg) {
            if (state === GenStateExecuting) {
              throw new Error("Generator is already running");
            }

            if (state === GenStateCompleted) {
              if (method === "throw") {
                throw arg;
              }

              // Be forgiving, per 25.3.3.3.3 of the spec:
              // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
              return doneResult();
            }

            context.method = method;
            context.arg = arg;

            while (true) {
              var delegate = context.delegate;
              if (delegate) {
                var delegateResult = maybeInvokeDelegate(delegate, context);
                if (delegateResult) {
                  if (delegateResult === ContinueSentinel) continue;
                  return delegateResult;
                }
              }

              if (context.method === "next") {
                // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
              } else if (context.method === "throw") {
                if (state === GenStateSuspendedStart) {
                  state = GenStateCompleted;
                  throw context.arg;
                }

                context.dispatchException(context.arg);
              } else if (context.method === "return") {
                context.abrupt("return", context.arg);
              }

              state = GenStateExecuting;

              var record = tryCatch(innerFn, self, context);
              if (record.type === "normal") {
                // If an exception is thrown from innerFn, we leave state ===
                // GenStateExecuting and loop back for another invocation.
                state = context.done
                  ? GenStateCompleted
                  : GenStateSuspendedYield;

                if (record.arg === ContinueSentinel) {
                  continue;
                }

                return {
                  value: record.arg,
                  done: context.done
                };
              } else if (record.type === "throw") {
                state = GenStateCompleted;
                // Dispatch the exception by looping back around to the
                // context.dispatchException(context.arg) call above.
                context.method = "throw";
                context.arg = record.arg;
              }
            }
          };
        }

        // Call delegate.iterator[context.method](context.arg) and handle the
        // result, either by returning a { value, done } result from the
        // delegate iterator, or by modifying context.method and context.arg,
        // setting context.delegate to null, and returning the ContinueSentinel.
        function maybeInvokeDelegate(delegate, context) {
          var method = delegate.iterator[context.method];
          if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method always terminates the yield* loop.
            context.delegate = null;

            if (context.method === "throw") {
              if (delegate.iterator.return) {
                // If the delegate iterator has a return method, give it a
                // chance to clean up.
                context.method = "return";
                context.arg = undefined;
                maybeInvokeDelegate(delegate, context);

                if (context.method === "throw") {
                  // If maybeInvokeDelegate(context) changed context.method from
                  // "return" to "throw", let that override the TypeError below.
                  return ContinueSentinel;
                }
              }

              context.method = "throw";
              context.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              );
            }

            return ContinueSentinel;
          }

          var record = tryCatch(method, delegate.iterator, context.arg);

          if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
          }

          var info = record.arg;

          if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
          }

          if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value;

            // Resume execution at the desired location (see delegateYield).
            context.next = delegate.nextLoc;

            // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.
            if (context.method !== "return") {
              context.method = "next";
              context.arg = undefined;
            }
          } else {
            // Re-yield the result returned by the delegate method.
            return info;
          }

          // The delegate iterator is finished, so forget it and continue with
          // the outer generator.
          context.delegate = null;
          return ContinueSentinel;
        }

        // Define Generator.prototype.{next,throw,return} in terms of the
        // unified ._invoke helper method.
        defineIteratorMethods(Gp);

        Gp[toStringTagSymbol] = "Generator";

        // A Generator should always return itself as the iterator object when the
        // @@iterator function is called on it. Some browsers' implementations of the
        // iterator prototype chain incorrectly implement this, causing the Generator
        // object to not be returned from this call. This ensures that doesn't happen.
        // See https://github.com/facebook/regenerator/issues/274 for more details.
        Gp[iteratorSymbol] = function() {
          return this;
        };

        Gp.toString = function() {
          return "[object Generator]";
        };

        function pushTryEntry(locs) {
          var entry = { tryLoc: locs[0] };

          if (1 in locs) {
            entry.catchLoc = locs[1];
          }

          if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
          }

          this.tryEntries.push(entry);
        }

        function resetTryEntry(entry) {
          var record = entry.completion || {};
          record.type = "normal";
          delete record.arg;
          entry.completion = record;
        }

        function Context(tryLocsList) {
          // The root entry object (effectively a try statement without a catch
          // or a finally block) gives us a place to store values thrown from
          // locations where there is no enclosing try statement.
          this.tryEntries = [{ tryLoc: "root" }];
          tryLocsList.forEach(pushTryEntry, this);
          this.reset(true);
        }

        runtime.keys = function(object) {
          var keys = [];
          for (var key in object) {
            keys.push(key);
          }
          keys.reverse();

          // Rather than returning an object with a next method, we keep
          // things simple and return the next function itself.
          return function next() {
            while (keys.length) {
              var key = keys.pop();
              if (key in object) {
                next.value = key;
                next.done = false;
                return next;
              }
            }

            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
          };
        };

        function values(iterable) {
          if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) {
              return iteratorMethod.call(iterable);
            }

            if (typeof iterable.next === "function") {
              return iterable;
            }

            if (!isNaN(iterable.length)) {
              var i = -1,
                next = function next() {
                  while (++i < iterable.length) {
                    if (hasOwn.call(iterable, i)) {
                      next.value = iterable[i];
                      next.done = false;
                      return next;
                    }
                  }

                  next.value = undefined;
                  next.done = true;

                  return next;
                };

              return (next.next = next);
            }
          }

          // Return an iterator with no values.
          return { next: doneResult };
        }
        runtime.values = values;

        function doneResult() {
          return { value: undefined, done: true };
        }

        Context.prototype = {
          constructor: Context,

          reset: function(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;

            this.method = "next";
            this.arg = undefined;

            this.tryEntries.forEach(resetTryEntry);

            if (!skipTempReset) {
              for (var name in this) {
                // Not sure about the optimal order of these conditions:
                if (
                  name.charAt(0) === "t" &&
                  hasOwn.call(this, name) &&
                  !isNaN(+name.slice(1))
                ) {
                  this[name] = undefined;
                }
              }
            }
          },

          stop: function() {
            this.done = true;

            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") {
              throw rootRecord.arg;
            }

            return this.rval;
          },

          dispatchException: function(exception) {
            if (this.done) {
              throw exception;
            }

            var context = this;
            function handle(loc, caught) {
              record.type = "throw";
              record.arg = exception;
              context.next = loc;

              if (caught) {
                // If the dispatched exception was caught by a catch block,
                // then let that catch block handle the exception normally.
                context.method = "next";
                context.arg = undefined;
              }

              return !!caught;
            }

            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              var record = entry.completion;

              if (entry.tryLoc === "root") {
                // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
              }

              if (entry.tryLoc <= this.prev) {
                var hasCatch = hasOwn.call(entry, "catchLoc");
                var hasFinally = hasOwn.call(entry, "finallyLoc");

                if (hasCatch && hasFinally) {
                  if (this.prev < entry.catchLoc) {
                    return handle(entry.catchLoc, true);
                  } else if (this.prev < entry.finallyLoc) {
                    return handle(entry.finallyLoc);
                  }
                } else if (hasCatch) {
                  if (this.prev < entry.catchLoc) {
                    return handle(entry.catchLoc, true);
                  }
                } else if (hasFinally) {
                  if (this.prev < entry.finallyLoc) {
                    return handle(entry.finallyLoc);
                  }
                } else {
                  throw new Error("try statement without catch or finally");
                }
              }
            }
          },

          abrupt: function(type, arg) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              if (
                entry.tryLoc <= this.prev &&
                hasOwn.call(entry, "finallyLoc") &&
                this.prev < entry.finallyLoc
              ) {
                var finallyEntry = entry;
                break;
              }
            }

            if (
              finallyEntry &&
              (type === "break" || type === "continue") &&
              finallyEntry.tryLoc <= arg &&
              arg <= finallyEntry.finallyLoc
            ) {
              // Ignore the finally entry if control is not jumping to a
              // location outside the try/catch block.
              finallyEntry = null;
            }

            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;

            if (finallyEntry) {
              this.method = "next";
              this.next = finallyEntry.finallyLoc;
              return ContinueSentinel;
            }

            return this.complete(record);
          },

          complete: function(record, afterLoc) {
            if (record.type === "throw") {
              throw record.arg;
            }

            if (record.type === "break" || record.type === "continue") {
              this.next = record.arg;
            } else if (record.type === "return") {
              this.rval = this.arg = record.arg;
              this.method = "return";
              this.next = "end";
            } else if (record.type === "normal" && afterLoc) {
              this.next = afterLoc;
            }

            return ContinueSentinel;
          },

          finish: function(finallyLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              if (entry.finallyLoc === finallyLoc) {
                this.complete(entry.completion, entry.afterLoc);
                resetTryEntry(entry);
                return ContinueSentinel;
              }
            }
          },

          catch: function(tryLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              if (entry.tryLoc === tryLoc) {
                var record = entry.completion;
                if (record.type === "throw") {
                  var thrown = record.arg;
                  resetTryEntry(entry);
                }
                return thrown;
              }
            }

            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error("illegal catch attempt");
          },

          delegateYield: function(iterable, resultName, nextLoc) {
            this.delegate = {
              iterator: values(iterable),
              resultName: resultName,
              nextLoc: nextLoc
            };

            if (this.method === "next") {
              // Deliberately forget the last sent value so that we don't
              // accidentally pass it on to the delegate.
              this.arg = undefined;
            }

            return ContinueSentinel;
          }
        };
      })(
        // In sloppy mode, unbound `this` refers to the global object, fallback to
        // Function constructor if we're in global strict mode. That is sadly a form
        // of indirect eval which violates Content Security Policy.
        (function() {
          return this || (typeof self === "object" && self);
        })() || Function("return this")()
      );

      /***/
    },

    /***/ "7212": /***/ function(module, exports, __webpack_require__) {
      !(function(e, t) {
        true ? (module.exports = t(__webpack_require__("d090"))) : undefined;
      })(this, function(e) {
        return (function(e) {
          function t(i) {
            if (n[i]) return n[i].exports;
            var s = (n[i] = { i: i, l: !1, exports: {} });
            return e[i].call(s.exports, s, s.exports, t), (s.l = !0), s.exports;
          }
          var n = {};
          return (
            (t.m = e),
            (t.c = n),
            (t.i = function(e) {
              return e;
            }),
            (t.d = function(e, n, i) {
              t.o(e, n) ||
                Object.defineProperty(e, n, {
                  configurable: !1,
                  enumerable: !0,
                  get: i
                });
            }),
            (t.n = function(e) {
              var n =
                e && e.__esModule
                  ? function() {
                      return e.default;
                    }
                  : function() {
                      return e;
                    };
              return t.d(n, "a", n), n;
            }),
            (t.o = function(e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (t.p = "/"),
            t((t.s = 4))
          );
        })([
          function(t, n) {
            t.exports = e;
          },
          function(e, t) {
            e.exports = function(e, t, n, i, s, r) {
              var o,
                a = (e = e || {}),
                u = typeof e.default;
              ("object" !== u && "function" !== u) ||
                ((o = e), (a = e.default));
              var p = "function" == typeof a ? a.options : a;
              t &&
                ((p.render = t.render),
                (p.staticRenderFns = t.staticRenderFns),
                (p._compiled = !0)),
                n && (p.functional = !0),
                s && (p._scopeId = s);
              var l;
              if (
                (r
                  ? ((l = function(e) {
                      (e =
                        e ||
                        (this.$vnode && this.$vnode.ssrContext) ||
                        (this.parent &&
                          this.parent.$vnode &&
                          this.parent.$vnode.ssrContext)),
                        e ||
                          "undefined" == typeof __VUE_SSR_CONTEXT__ ||
                          (e = __VUE_SSR_CONTEXT__),
                        i && i.call(this, e),
                        e &&
                          e._registeredComponents &&
                          e._registeredComponents.add(r);
                    }),
                    (p._ssrRegister = l))
                  : i && (l = i),
                l)
              ) {
                var c = p.functional,
                  d = c ? p.render : p.beforeCreate;
                c
                  ? ((p._injectStyles = l),
                    (p.render = function(e, t) {
                      return l.call(t), d(e, t);
                    }))
                  : (p.beforeCreate = d ? [].concat(d, l) : [l]);
              }
              return { esModule: o, exports: a, options: p };
            };
          },
          function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(5),
              s = n.n(i),
              r = n(8),
              o = n(1),
              a = o(s.a, r.a, !1, null, null, null);
            t.default = a.exports;
          },
          function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(6),
              s = n.n(i),
              r = n(7),
              o = n(1),
              a = o(s.a, r.a, !1, null, null, null);
            t.default = a.exports;
          },
          function(e, t, n) {
            "use strict";
            function i(e) {
              return e && e.__esModule ? e : { default: e };
            }
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.install = t.swiperSlide = t.swiper = t.Swiper = void 0);
            var s = n(0),
              r = i(s),
              o = n(2),
              a = i(o),
              u = n(3),
              p = i(u),
              l = window.Swiper || r.default,
              c = p.default,
              d = a.default,
              f = function(e, t) {
                t &&
                  (p.default.props.globalOptions.default = function() {
                    return t;
                  }),
                  e.component(p.default.name, p.default),
                  e.component(a.default.name, a.default);
              },
              h = { Swiper: l, swiper: c, swiperSlide: d, install: f };
            (t.default = h),
              (t.Swiper = l),
              (t.swiper = c),
              (t.swiperSlide = d),
              (t.install = f);
          },
          function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.default = {
                name: "swiper-slide",
                data: function() {
                  return { slideClass: "swiper-slide" };
                },
                ready: function() {
                  this.update();
                },
                mounted: function() {
                  this.update(),
                    this.$parent &&
                      this.$parent.options &&
                      this.$parent.options.slideClass &&
                      (this.slideClass = this.$parent.options.slideClass);
                },
                updated: function() {
                  this.update();
                },
                attached: function() {
                  this.update();
                },
                methods: {
                  update: function() {
                    this.$parent &&
                      this.$parent.swiper &&
                      this.$parent.update();
                  }
                }
              });
          },
          function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(0),
              s = (function(e) {
                return e && e.__esModule ? e : { default: e };
              })(i),
              r = window.Swiper || s.default;
            "function" != typeof Object.assign &&
              Object.defineProperty(Object, "assign", {
                value: function(e, t) {
                  if (null == e)
                    throw new TypeError(
                      "Cannot convert undefined or null to object"
                    );
                  for (var n = Object(e), i = 1; i < arguments.length; i++) {
                    var s = arguments[i];
                    if (null != s)
                      for (var r in s)
                        Object.prototype.hasOwnProperty.call(s, r) &&
                          (n[r] = s[r]);
                  }
                  return n;
                },
                writable: !0,
                configurable: !0
              });
            var o = [
              "beforeDestroy",
              "slideChange",
              "slideChangeTransitionStart",
              "slideChangeTransitionEnd",
              "slideNextTransitionStart",
              "slideNextTransitionEnd",
              "slidePrevTransitionStart",
              "slidePrevTransitionEnd",
              "transitionStart",
              "transitionEnd",
              "touchStart",
              "touchMove",
              "touchMoveOpposite",
              "sliderMove",
              "touchEnd",
              "click",
              "tap",
              "doubleTap",
              "imagesReady",
              "progress",
              "reachBeginning",
              "reachEnd",
              "fromEdge",
              "setTranslate",
              "setTransition",
              "resize"
            ];
            t.default = {
              name: "swiper",
              props: {
                options: {
                  type: Object,
                  default: function() {
                    return {};
                  }
                },
                globalOptions: {
                  type: Object,
                  required: !1,
                  default: function() {
                    return {};
                  }
                }
              },
              data: function() {
                return {
                  swiper: null,
                  classes: { wrapperClass: "swiper-wrapper" }
                };
              },
              ready: function() {
                this.swiper || this.mountInstance();
              },
              mounted: function() {
                if (!this.swiper) {
                  var e = !1;
                  for (var t in this.classes)
                    this.classes.hasOwnProperty(t) &&
                      this.options[t] &&
                      ((e = !0), (this.classes[t] = this.options[t]));
                  e ? this.$nextTick(this.mountInstance) : this.mountInstance();
                }
              },
              activated: function() {
                this.update();
              },
              updated: function() {
                this.update();
              },
              beforeDestroy: function() {
                this.$nextTick(function() {
                  this.swiper &&
                    (this.swiper.destroy && this.swiper.destroy(),
                    delete this.swiper);
                });
              },
              methods: {
                update: function() {
                  this.swiper &&
                    (this.swiper.update && this.swiper.update(),
                    this.swiper.navigation && this.swiper.navigation.update(),
                    this.swiper.pagination && this.swiper.pagination.render(),
                    this.swiper.pagination && this.swiper.pagination.update());
                },
                mountInstance: function() {
                  var e = Object.assign({}, this.globalOptions, this.options);
                  (this.swiper = new r(this.$el, e)),
                    this.bindEvents(),
                    this.$emit("ready", this.swiper);
                },
                bindEvents: function() {
                  var e = this,
                    t = this;
                  o.forEach(function(n) {
                    e.swiper.on(n, function() {
                      t.$emit.apply(
                        t,
                        [n].concat(Array.prototype.slice.call(arguments))
                      ),
                        t.$emit.apply(
                          t,
                          [n.replace(/([A-Z])/g, "-$1").toLowerCase()].concat(
                            Array.prototype.slice.call(arguments)
                          )
                        );
                    });
                  });
                }
              }
            };
          },
          function(e, t, n) {
            "use strict";
            var i = function() {
                var e = this,
                  t = e.$createElement,
                  n = e._self._c || t;
                return n(
                  "div",
                  { staticClass: "swiper-container" },
                  [
                    e._t("parallax-bg"),
                    e._v(" "),
                    n(
                      "div",
                      { class: e.classes.wrapperClass },
                      [e._t("default")],
                      2
                    ),
                    e._v(" "),
                    e._t("pagination"),
                    e._v(" "),
                    e._t("button-prev"),
                    e._v(" "),
                    e._t("button-next"),
                    e._v(" "),
                    e._t("scrollbar")
                  ],
                  2
                );
              },
              s = [],
              r = { render: i, staticRenderFns: s };
            t.a = r;
          },
          function(e, t, n) {
            "use strict";
            var i = function() {
                var e = this,
                  t = e.$createElement;
                return (e._self._c || t)(
                  "div",
                  { class: e.slideClass },
                  [e._t("default")],
                  2
                );
              },
              s = [],
              r = { render: i, staticRenderFns: s };
            t.a = r;
          }
        ]);
      });

      /***/
    },

    /***/ "7327": /***/ function(module, exports, __webpack_require__) {
      // style-loader: Adds some css to the DOM by adding a <style> tag

      // load the styles
      var content = __webpack_require__("245c");
      if (typeof content === "string") content = [[module.i, content, ""]];
      if (content.locals) module.exports = content.locals;
      // add CSS to Shadow Root
      var add = __webpack_require__("35d6").default;
      module.exports.__inject__ = function(shadowRoot) {
        add("7fe3ac02", content, shadowRoot);
      };

      /***/
    },

    /***/ "7333": /***/ function(module, exports, __webpack_require__) {
      "use strict";

      // 19.1.2.1 Object.assign(target, source, ...)
      var getKeys = __webpack_require__("0d58");
      var gOPS = __webpack_require__("2621");
      var pIE = __webpack_require__("52a7");
      var toObject = __webpack_require__("4bf8");
      var IObject = __webpack_require__("626a");
      var $assign = Object.assign;

      // should work with symbols and should have deterministic property order (V8 bug)
      module.exports =
        !$assign ||
        __webpack_require__("79e5")(function() {
          var A = {};
          var B = {};
          // eslint-disable-next-line no-undef
          var S = Symbol();
          var K = "abcdefghijklmnopqrst";
          A[S] = 7;
          K.split("").forEach(function(k) {
            B[k] = k;
          });
          return (
            $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join("") != K
          );
        })
          ? function assign(target, source) {
              // eslint-disable-line no-unused-vars
              var T = toObject(target);
              var aLen = arguments.length;
              var index = 1;
              var getSymbols = gOPS.f;
              var isEnum = pIE.f;
              while (aLen > index) {
                var S = IObject(arguments[index++]);
                var keys = getSymbols
                  ? getKeys(S).concat(getSymbols(S))
                  : getKeys(S);
                var length = keys.length;
                var j = 0;
                var key;
                while (length > j)
                  if (isEnum.call(S, (key = keys[j++]))) T[key] = S[key];
              }
              return T;
            }
          : $assign;

      /***/
    },

    /***/ "73b2": /***/ function(module, exports, __webpack_require__) {
      exports = module.exports = __webpack_require__("2350")(false);
      // imports

      // module
      exports.push([
        module.i,
        "\n.content-menu-header-buttons[data-v-8d64c084]{display:flex;flex-flow:row nowrap;justify-content:space-between\n}\n.content-menu-header-buttons>*[data-v-8d64c084]{margin-top:1em\n}\n.content-menu-header-buttons[data-v-8d64c084]>:first-child{margin-left:1em\n}\n.content-menu-header-buttons[data-v-8d64c084]>:last-child{margin-right:1em\n}\n.content-menu-header-buttons>a>svg[data-v-8d64c084],.content-menu-header-buttons>button>svg[data-v-8d64c084]{color:#fff;height:32px;width:32px\n}\n.content-menu-header-buttons button[data-v-8d64c084]{background-color:transparent;border:none;box-shadow:none;cursor:pointer;outline:none;text-decoration:none\n}",
        ""
      ]);

      // exports

      /***/
    },

    /***/ "7442": /***/ function(module, exports, __webpack_require__) {
      "use strict";

      var defaults = __webpack_require__("ba5d");
      var utils = __webpack_require__("8805");
      var InterceptorManager = __webpack_require__("7e5a");
      var dispatchRequest = __webpack_require__("30b0");

      /**
       * Create a new instance of Axios
       *
       * @param {Object} instanceConfig The default config for the instance
       */
      function Axios(instanceConfig) {
        this.defaults = instanceConfig;
        this.interceptors = {
          request: new InterceptorManager(),
          response: new InterceptorManager()
        };
      }

      /**
       * Dispatch a request
       *
       * @param {Object} config The config specific for this request (merged with this.defaults)
       */
      Axios.prototype.request = function request(config) {
        /*eslint no-param-reassign:0*/
        // Allow for axios('example/url'[, config]) a la fetch API
        if (typeof config === "string") {
          config = utils.merge(
            {
              url: arguments[0]
            },
            arguments[1]
          );
        }

        config = utils.merge(
          defaults,
          { method: "get" },
          this.defaults,
          config
        );
        config.method = config.method.toLowerCase();

        // Hook up interceptors middleware
        var chain = [dispatchRequest, undefined];
        var promise = Promise.resolve(config);

        this.interceptors.request.forEach(function unshiftRequestInterceptors(
          interceptor
        ) {
          chain.unshift(interceptor.fulfilled, interceptor.rejected);
        });

        this.interceptors.response.forEach(function pushResponseInterceptors(
          interceptor
        ) {
          chain.push(interceptor.fulfilled, interceptor.rejected);
        });

        while (chain.length) {
          promise = promise.then(chain.shift(), chain.shift());
        }

        return promise;
      };

      // Provide aliases for supported request methods
      utils.forEach(
        ["delete", "get", "head", "options"],
        function forEachMethodNoData(method) {
          /*eslint func-names:0*/
          Axios.prototype[method] = function(url, config) {
            return this.request(
              utils.merge(config || {}, {
                method: method,
                url: url
              })
            );
          };
        }
      );

      utils.forEach(["post", "put", "patch"], function forEachMethodWithData(
        method
      ) {
        /*eslint func-names:0*/
        Axios.prototype[method] = function(url, data, config) {
          return this.request(
            utils.merge(config || {}, {
              method: method,
              url: url,
              data: data
            })
          );
        };
      });

      module.exports = Axios;

      /***/
    },

    /***/ "7726": /***/ function(module, exports) {
      // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
      var global = (module.exports =
        typeof window != "undefined" && window.Math == Math
          ? window
          : typeof self != "undefined" && self.Math == Math
            ? self
            : // eslint-disable-next-line no-new-func
              Function("return this")());
      if (typeof __g == "number") __g = global; // eslint-disable-line no-undef

      /***/
    },

    /***/ "77f1": /***/ function(module, exports, __webpack_require__) {
      var toInteger = __webpack_require__("4588");
      var max = Math.max;
      var min = Math.min;
      module.exports = function(index, length) {
        index = toInteger(index);
        return index < 0 ? max(index + length, 0) : min(index, length);
      };

      /***/
    },

    /***/ "782c": /***/ function(module, exports, __webpack_require__) {
      "use strict";

      var utils = __webpack_require__("8805");

      // Headers whose duplicates are ignored by node
      // c.f. https://nodejs.org/api/http.html#http_message_headers
      var ignoreDuplicateOf = [
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent"
      ];

      /**
       * Parse headers into an object
       *
       * ```
       * Date: Wed, 27 Aug 2014 08:58:49 GMT
       * Content-Type: application/json
       * Connection: keep-alive
       * Transfer-Encoding: chunked
       * ```
       *
       * @param {String} headers Headers needing to be parsed
       * @returns {Object} Headers parsed into an object
       */
      module.exports = function parseHeaders(headers) {
        var parsed = {};
        var key;
        var val;
        var i;

        if (!headers) {
          return parsed;
        }

        utils.forEach(headers.split("\n"), function parser(line) {
          i = line.indexOf(":");
          key = utils.trim(line.substr(0, i)).toLowerCase();
          val = utils.trim(line.substr(i + 1));

          if (key) {
            if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
              return;
            }
            if (key === "set-cookie") {
              parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
            } else {
              parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
            }
          }
        });

        return parsed;
      };

      /***/
    },

    /***/ "79e5": /***/ function(module, exports) {
      module.exports = function(exec) {
        try {
          return !!exec();
        } catch (e) {
          return true;
        }
      };

      /***/
    },

    /***/ "7bbc": /***/ function(module, exports, __webpack_require__) {
      // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
      var toIObject = __webpack_require__("6821");
      var gOPN = __webpack_require__("9093").f;
      var toString = {}.toString;

      var windowNames =
        typeof window == "object" && window && Object.getOwnPropertyNames
          ? Object.getOwnPropertyNames(window)
          : [];

      var getWindowNames = function(it) {
        try {
          return gOPN(it);
        } catch (e) {
          return windowNames.slice();
        }
      };

      module.exports.f = function getOwnPropertyNames(it) {
        return windowNames && toString.call(it) == "[object Window]"
          ? getWindowNames(it)
          : gOPN(toIObject(it));
      };

      /***/
    },

    /***/ "7e5a": /***/ function(module, exports, __webpack_require__) {
      "use strict";

      var utils = __webpack_require__("8805");

      function InterceptorManager() {
        this.handlers = [];
      }

      /**
       * Add a new interceptor to the stack
       *
       * @param {Function} fulfilled The function to handle `then` for a `Promise`
       * @param {Function} rejected The function to handle `reject` for a `Promise`
       *
       * @return {Number} An ID used to remove interceptor later
       */
      InterceptorManager.prototype.use = function use(fulfilled, rejected) {
        this.handlers.push({
          fulfilled: fulfilled,
          rejected: rejected
        });
        return this.handlers.length - 1;
      };

      /**
       * Remove an interceptor from the stack
       *
       * @param {Number} id The ID that was returned by `use`
       */
      InterceptorManager.prototype.eject = function eject(id) {
        if (this.handlers[id]) {
          this.handlers[id] = null;
        }
      };

      /**
       * Iterate over all the registered interceptors
       *
       * This method is particularly useful for skipping over any
       * interceptors that may have become `null` calling `eject`.
       *
       * @param {Function} fn The function to call for each interceptor
       */
      InterceptorManager.prototype.forEach = function forEach(fn) {
        utils.forEach(this.handlers, function forEachHandler(h) {
          if (h !== null) {
            fn(h);
          }
        });
      };

      module.exports = InterceptorManager;

      /***/
    },

    /***/ "7f20": /***/ function(module, exports, __webpack_require__) {
      var def = __webpack_require__("86cc").f;
      var has = __webpack_require__("69a8");
      var TAG = __webpack_require__("2b4c")("toStringTag");

      module.exports = function(it, tag, stat) {
        if (it && !has((it = stat ? it : it.prototype), TAG))
          def(it, TAG, { configurable: true, value: tag });
      };

      /***/
    },

    /***/ "7f2a": /***/ function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionFavorites_vue_vue_type_style_index_0_id_c21b77e4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "caef"
      );
      /* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionFavorites_vue_vue_type_style_index_0_id_c21b77e4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionFavorites_vue_vue_type_style_index_0_id_c21b77e4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionFavorites_vue_vue_type_style_index_0_id_c21b77e4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__)
        if (__WEBPACK_IMPORT_KEY__ !== "default")
          (function(key) {
            __webpack_require__.d(__webpack_exports__, key, function() {
              return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionFavorites_vue_vue_type_style_index_0_id_c21b77e4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
                key
              ];
            });
          })(__WEBPACK_IMPORT_KEY__);
      /* harmony default export */ __webpack_exports__["default"] =
        _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionFavorites_vue_vue_type_style_index_0_id_c21b77e4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a;

      /***/
    },

    /***/ "801c": /***/ function(module, exports, __webpack_require__) {
      "use strict";

      module.exports = function bind(fn, thisArg) {
        return function wrap() {
          var args = new Array(arguments.length);
          for (var i = 0; i < args.length; i++) {
            args[i] = arguments[i];
          }
          return fn.apply(thisArg, args);
        };
      };

      /***/
    },

    /***/ "80dd": /***/ function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ellipsis_vue_vue_type_style_index_0_id_8c29ffca_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "b4e4"
      );
      /* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ellipsis_vue_vue_type_style_index_0_id_8c29ffca_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ellipsis_vue_vue_type_style_index_0_id_8c29ffca_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ellipsis_vue_vue_type_style_index_0_id_8c29ffca_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__)
        if (__WEBPACK_IMPORT_KEY__ !== "default")
          (function(key) {
            __webpack_require__.d(__webpack_exports__, key, function() {
              return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ellipsis_vue_vue_type_style_index_0_id_8c29ffca_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__[
                key
              ];
            });
          })(__WEBPACK_IMPORT_KEY__);
      /* harmony default export */ __webpack_exports__["default"] =
        _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ellipsis_vue_vue_type_style_index_0_id_8c29ffca_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0___default.a;

      /***/
    },

    /***/ "8378": /***/ function(module, exports) {
      var core = (module.exports = { version: "2.5.7" });
      if (typeof __e == "number") __e = core; // eslint-disable-line no-undef

      /***/
    },

    /***/ "83ba": /***/ function(module, exports, __webpack_require__) {
      "use strict";

      var utils = __webpack_require__("8805");

      module.exports = utils.isStandardBrowserEnv()
        ? // Standard browser envs have full support of the APIs needed to test
          // whether the request URL is of the same origin as current location.
          (function standardBrowserEnv() {
            var msie = /(msie|trident)/i.test(navigator.userAgent);
            var urlParsingNode = document.createElement("a");
            var originURL;

            /**
             * Parse a URL to discover it's components
             *
             * @param {String} url The URL to be parsed
             * @returns {Object}
             */
            function resolveURL(url) {
              var href = url;

              if (msie) {
                // IE needs attribute set twice to normalize properties
                urlParsingNode.setAttribute("href", href);
                href = urlParsingNode.href;
              }

              urlParsingNode.setAttribute("href", href);

              // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
              return {
                href: urlParsingNode.href,
                protocol: urlParsingNode.protocol
                  ? urlParsingNode.protocol.replace(/:$/, "")
                  : "",
                host: urlParsingNode.host,
                search: urlParsingNode.search
                  ? urlParsingNode.search.replace(/^\?/, "")
                  : "",
                hash: urlParsingNode.hash
                  ? urlParsingNode.hash.replace(/^#/, "")
                  : "",
                hostname: urlParsingNode.hostname,
                port: urlParsingNode.port,
                pathname:
                  urlParsingNode.pathname.charAt(0) === "/"
                    ? urlParsingNode.pathname
                    : "/" + urlParsingNode.pathname
              };
            }

            originURL = resolveURL(window.location.href);

            /**
             * Determine if a URL shares the same origin as the current location
             *
             * @param {String} requestURL The URL to test
             * @returns {boolean} True if URL shares the same origin, otherwise false
             */
            return function isURLSameOrigin(requestURL) {
              var parsed = utils.isString(requestURL)
                ? resolveURL(requestURL)
                : requestURL;
              return (
                parsed.protocol === originURL.protocol &&
                parsed.host === originURL.host
              );
            };
          })()
        : // Non standard browser envs (web workers, react-native) lack needed support.
          (function nonStandardBrowserEnv() {
            return function isURLSameOrigin() {
              return true;
            };
          })();

      /***/
    },

    /***/ "83e6": /***/ function(module, exports, __webpack_require__) {
      exports = module.exports = __webpack_require__("2350")(false);
      // imports

      // module
      exports.push([
        module.i,
        "\n.favorite-button[data-v-260b491e]{background-color:transparent;border:none;box-shadow:none;cursor:pointer;height:44px;outline:none;padding:0;text-align:center;text-decoration:none;text-transform:uppercase;transition:all .2s ease-in-out;width:44px\n}\n.favorite-button[data-v-260b491e]:hover{transform:scale(1.3)\n}\n.favorite-button .fa-icon[data-v-260b491e]{color:#b7b7b7;height:2em;max-height:100%;max-width:100%;width:auto\n}",
        ""
      ]);

      // exports

      /***/
    },

    /***/ "84f2": /***/ function(module, exports) {
      module.exports = {};

      /***/
    },

    /***/ "8552": /***/ function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentFavorites_vue_vue_type_style_index_0_id_156f4a9f_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "f090"
      );
      /* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentFavorites_vue_vue_type_style_index_0_id_156f4a9f_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentFavorites_vue_vue_type_style_index_0_id_156f4a9f_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentFavorites_vue_vue_type_style_index_0_id_156f4a9f_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__)
        if (__WEBPACK_IMPORT_KEY__ !== "default")
          (function(key) {
            __webpack_require__.d(__webpack_exports__, key, function() {
              return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentFavorites_vue_vue_type_style_index_0_id_156f4a9f_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__[
                key
              ];
            });
          })(__WEBPACK_IMPORT_KEY__);
      /* harmony default export */ __webpack_exports__["default"] =
        _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentFavorites_vue_vue_type_style_index_0_id_156f4a9f_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default.a;

      /***/
    },

    /***/ "8645": /***/ function(module, exports, __webpack_require__) {
      /**
       * Copyright (c) 2014-present, Facebook, Inc.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */

      // This method of obtaining a reference to the global object needs to be
      // kept identical to the way it is obtained in runtime.js
      var g =
        (function() {
          return this || (typeof self === "object" && self);
        })() || Function("return this")();

      // Use `getOwnPropertyNames` because not all browsers support calling
      // `hasOwnProperty` on the global `self` object in a worker. See #183.
      var hadRuntime =
        g.regeneratorRuntime &&
        Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

      // Save the old regeneratorRuntime in case it needs to be restored later.
      var oldRuntime = hadRuntime && g.regeneratorRuntime;

      // Force reevalutation of runtime.js.
      g.regeneratorRuntime = undefined;

      module.exports = __webpack_require__("6ed7");

      if (hadRuntime) {
        // Restore the original runtime.
        g.regeneratorRuntime = oldRuntime;
      } else {
        // Remove the global property added by runtime.js.
        try {
          delete g.regeneratorRuntime;
        } catch (e) {
          g.regeneratorRuntime = undefined;
        }
      }

      /***/
    },

    /***/ "86af": /***/ function(module, exports, __webpack_require__) {
      "use strict";

      var utils = __webpack_require__("8805");

      module.exports = function normalizeHeaderName(headers, normalizedName) {
        utils.forEach(headers, function processHeader(value, name) {
          if (
            name !== normalizedName &&
            name.toUpperCase() === normalizedName.toUpperCase()
          ) {
            headers[normalizedName] = value;
            delete headers[name];
          }
        });
      };

      /***/
    },

    /***/ "86cc": /***/ function(module, exports, __webpack_require__) {
      var anObject = __webpack_require__("cb7c");
      var IE8_DOM_DEFINE = __webpack_require__("c69a");
      var toPrimitive = __webpack_require__("6a99");
      var dP = Object.defineProperty;

      exports.f = __webpack_require__("9e1e")
        ? Object.defineProperty
        : function defineProperty(O, P, Attributes) {
            anObject(O);
            P = toPrimitive(P, true);
            anObject(Attributes);
            if (IE8_DOM_DEFINE)
              try {
                return dP(O, P, Attributes);
              } catch (e) {
                /* empty */
              }
            if ("get" in Attributes || "set" in Attributes)
              throw TypeError("Accessors not supported!");
            if ("value" in Attributes) O[P] = Attributes.value;
            return O;
          };

      /***/
    },

    /***/ "87f4": /***/ function(module, exports, __webpack_require__) {
      "use strict";

      /**
       * Syntactic sugar for invoking a function and expanding an array for arguments.
       *
       * Common use case would be to use `Function.prototype.apply`.
       *
       *  ```js
       *  function f(x, y, z) {}
       *  var args = [1, 2, 3];
       *  f.apply(null, args);
       *  ```
       *
       * With `spread` this example can be re-written.
       *
       *  ```js
       *  spread(function(x, y, z) {})([1, 2, 3]);
       *  ```
       *
       * @param {Function} callback
       * @returns {Function}
       */
      module.exports = function spread(callback) {
        return function wrap(arr) {
          return callback.apply(null, arr);
        };
      };

      /***/
    },

    /***/ "8805": /***/ function(module, exports, __webpack_require__) {
      "use strict";

      var bind = __webpack_require__("801c");
      var isBuffer = __webpack_require__("ef79");

      /*global toString:true*/

      // utils is a library of generic helper functions non-specific to axios

      var toString = Object.prototype.toString;

      /**
       * Determine if a value is an Array
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is an Array, otherwise false
       */
      function isArray(val) {
        return toString.call(val) === "[object Array]";
      }

      /**
       * Determine if a value is an ArrayBuffer
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is an ArrayBuffer, otherwise false
       */
      function isArrayBuffer(val) {
        return toString.call(val) === "[object ArrayBuffer]";
      }

      /**
       * Determine if a value is a FormData
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is an FormData, otherwise false
       */
      function isFormData(val) {
        return typeof FormData !== "undefined" && val instanceof FormData;
      }

      /**
       * Determine if a value is a view on an ArrayBuffer
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
       */
      function isArrayBufferView(val) {
        var result;
        if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
          result = ArrayBuffer.isView(val);
        } else {
          result = val && val.buffer && val.buffer instanceof ArrayBuffer;
        }
        return result;
      }

      /**
       * Determine if a value is a String
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a String, otherwise false
       */
      function isString(val) {
        return typeof val === "string";
      }

      /**
       * Determine if a value is a Number
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a Number, otherwise false
       */
      function isNumber(val) {
        return typeof val === "number";
      }

      /**
       * Determine if a value is undefined
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if the value is undefined, otherwise false
       */
      function isUndefined(val) {
        return typeof val === "undefined";
      }

      /**
       * Determine if a value is an Object
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is an Object, otherwise false
       */
      function isObject(val) {
        return val !== null && typeof val === "object";
      }

      /**
       * Determine if a value is a Date
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a Date, otherwise false
       */
      function isDate(val) {
        return toString.call(val) === "[object Date]";
      }

      /**
       * Determine if a value is a File
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a File, otherwise false
       */
      function isFile(val) {
        return toString.call(val) === "[object File]";
      }

      /**
       * Determine if a value is a Blob
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a Blob, otherwise false
       */
      function isBlob(val) {
        return toString.call(val) === "[object Blob]";
      }

      /**
       * Determine if a value is a Function
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a Function, otherwise false
       */
      function isFunction(val) {
        return toString.call(val) === "[object Function]";
      }

      /**
       * Determine if a value is a Stream
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a Stream, otherwise false
       */
      function isStream(val) {
        return isObject(val) && isFunction(val.pipe);
      }

      /**
       * Determine if a value is a URLSearchParams object
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a URLSearchParams object, otherwise false
       */
      function isURLSearchParams(val) {
        return (
          typeof URLSearchParams !== "undefined" &&
          val instanceof URLSearchParams
        );
      }

      /**
       * Trim excess whitespace off the beginning and end of a string
       *
       * @param {String} str The String to trim
       * @returns {String} The String freed of excess whitespace
       */
      function trim(str) {
        return str.replace(/^\s*/, "").replace(/\s*$/, "");
      }

      /**
       * Determine if we're running in a standard browser environment
       *
       * This allows axios to run in a web worker, and react-native.
       * Both environments support XMLHttpRequest, but not fully standard globals.
       *
       * web workers:
       *  typeof window -> undefined
       *  typeof document -> undefined
       *
       * react-native:
       *  navigator.product -> 'ReactNative'
       */
      function isStandardBrowserEnv() {
        if (
          typeof navigator !== "undefined" &&
          navigator.product === "ReactNative"
        ) {
          return false;
        }
        return typeof window !== "undefined" && typeof document !== "undefined";
      }

      /**
       * Iterate over an Array or an Object invoking a function for each item.
       *
       * If `obj` is an Array callback will be called passing
       * the value, index, and complete array for each item.
       *
       * If 'obj' is an Object callback will be called passing
       * the value, key, and complete object for each property.
       *
       * @param {Object|Array} obj The object to iterate
       * @param {Function} fn The callback to invoke for each item
       */
      function forEach(obj, fn) {
        // Don't bother if no value provided
        if (obj === null || typeof obj === "undefined") {
          return;
        }

        // Force an array if not already something iterable
        if (typeof obj !== "object") {
          /*eslint no-param-reassign:0*/
          obj = [obj];
        }

        if (isArray(obj)) {
          // Iterate over array values
          for (var i = 0, l = obj.length; i < l; i++) {
            fn.call(null, obj[i], i, obj);
          }
        } else {
          // Iterate over object keys
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              fn.call(null, obj[key], key, obj);
            }
          }
        }
      }

      /**
       * Accepts varargs expecting each argument to be an object, then
       * immutably merges the properties of each object and returns result.
       *
       * When multiple objects contain the same key the later object in
       * the arguments list will take precedence.
       *
       * Example:
       *
       * ```js
       * var result = merge({foo: 123}, {foo: 456});
       * console.log(result.foo); // outputs 456
       * ```
       *
       * @param {Object} obj1 Object to merge
       * @returns {Object} Result of all merge properties
       */
      function merge(/* obj1, obj2, obj3, ... */) {
        var result = {};
        function assignValue(val, key) {
          if (typeof result[key] === "object" && typeof val === "object") {
            result[key] = merge(result[key], val);
          } else {
            result[key] = val;
          }
        }

        for (var i = 0, l = arguments.length; i < l; i++) {
          forEach(arguments[i], assignValue);
        }
        return result;
      }

      /**
       * Extends object a by mutably adding to it the properties of object b.
       *
       * @param {Object} a The object to be extended
       * @param {Object} b The object to copy properties from
       * @param {Object} thisArg The object to bind function to
       * @return {Object} The resulting value of object a
       */
      function extend(a, b, thisArg) {
        forEach(b, function assignValue(val, key) {
          if (thisArg && typeof val === "function") {
            a[key] = bind(val, thisArg);
          } else {
            a[key] = val;
          }
        });
        return a;
      }

      module.exports = {
        isArray: isArray,
        isArrayBuffer: isArrayBuffer,
        isBuffer: isBuffer,
        isFormData: isFormData,
        isArrayBufferView: isArrayBufferView,
        isString: isString,
        isNumber: isNumber,
        isObject: isObject,
        isUndefined: isUndefined,
        isDate: isDate,
        isFile: isFile,
        isBlob: isBlob,
        isFunction: isFunction,
        isStream: isStream,
        isURLSearchParams: isURLSearchParams,
        isStandardBrowserEnv: isStandardBrowserEnv,
        forEach: forEach,
        merge: merge,
        extend: extend,
        trim: trim
      };

      /***/
    },

    /***/ "88b1": /***/ function(module, exports, __webpack_require__) {
      var map = {
        "./en.json": "edd4",
        "./fr.json": "f693"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }
      function webpackContextResolve(req) {
        var id = map[req];
        if (!(id + 1)) {
          // check for number or string
          var e = new Error("Cannot find module '" + req + "'");
          e.code = "MODULE_NOT_FOUND";
          throw e;
        }
        return id;
      }
      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };
      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "88b1";

      /***/
    },

    /***/ "8a42": /***/ function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentGrid_vue_vue_type_style_index_0_id_4962b75d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "4063"
      );
      /* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentGrid_vue_vue_type_style_index_0_id_4962b75d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentGrid_vue_vue_type_style_index_0_id_4962b75d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentGrid_vue_vue_type_style_index_0_id_4962b75d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__)
        if (__WEBPACK_IMPORT_KEY__ !== "default")
          (function(key) {
            __webpack_require__.d(__webpack_exports__, key, function() {
              return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentGrid_vue_vue_type_style_index_0_id_4962b75d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
                key
              ];
            });
          })(__WEBPACK_IMPORT_KEY__);
      /* harmony default export */ __webpack_exports__["default"] =
        _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentGrid_vue_vue_type_style_index_0_id_4962b75d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a;

      /***/
    },

    /***/ "8a81": /***/ function(module, exports, __webpack_require__) {
      "use strict";

      // ECMAScript 6 symbols shim
      var global = __webpack_require__("7726");
      var has = __webpack_require__("69a8");
      var DESCRIPTORS = __webpack_require__("9e1e");
      var $export = __webpack_require__("5ca1");
      var redefine = __webpack_require__("2aba");
      var META = __webpack_require__("67ab").KEY;
      var $fails = __webpack_require__("79e5");
      var shared = __webpack_require__("5537");
      var setToStringTag = __webpack_require__("7f20");
      var uid = __webpack_require__("ca5a");
      var wks = __webpack_require__("2b4c");
      var wksExt = __webpack_require__("37c8");
      var wksDefine = __webpack_require__("3a72");
      var enumKeys = __webpack_require__("d4c0");
      var isArray = __webpack_require__("1169");
      var anObject = __webpack_require__("cb7c");
      var isObject = __webpack_require__("d3f4");
      var toIObject = __webpack_require__("6821");
      var toPrimitive = __webpack_require__("6a99");
      var createDesc = __webpack_require__("4630");
      var _create = __webpack_require__("2aeb");
      var gOPNExt = __webpack_require__("7bbc");
      var $GOPD = __webpack_require__("11e9");
      var $DP = __webpack_require__("86cc");
      var $keys = __webpack_require__("0d58");
      var gOPD = $GOPD.f;
      var dP = $DP.f;
      var gOPN = gOPNExt.f;
      var $Symbol = global.Symbol;
      var $JSON = global.JSON;
      var _stringify = $JSON && $JSON.stringify;
      var PROTOTYPE = "prototype";
      var HIDDEN = wks("_hidden");
      var TO_PRIMITIVE = wks("toPrimitive");
      var isEnum = {}.propertyIsEnumerable;
      var SymbolRegistry = shared("symbol-registry");
      var AllSymbols = shared("symbols");
      var OPSymbols = shared("op-symbols");
      var ObjectProto = Object[PROTOTYPE];
      var USE_NATIVE = typeof $Symbol == "function";
      var QObject = global.QObject;
      // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
      var setter =
        !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

      // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
      var setSymbolDesc =
        DESCRIPTORS &&
        $fails(function() {
          return (
            _create(
              dP({}, "a", {
                get: function() {
                  return dP(this, "a", { value: 7 }).a;
                }
              })
            ).a != 7
          );
        })
          ? function(it, key, D) {
              var protoDesc = gOPD(ObjectProto, key);
              if (protoDesc) delete ObjectProto[key];
              dP(it, key, D);
              if (protoDesc && it !== ObjectProto)
                dP(ObjectProto, key, protoDesc);
            }
          : dP;

      var wrap = function(tag) {
        var sym = (AllSymbols[tag] = _create($Symbol[PROTOTYPE]));
        sym._k = tag;
        return sym;
      };

      var isSymbol =
        USE_NATIVE && typeof $Symbol.iterator == "symbol"
          ? function(it) {
              return typeof it == "symbol";
            }
          : function(it) {
              return it instanceof $Symbol;
            };

      var $defineProperty = function defineProperty(it, key, D) {
        if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
        anObject(it);
        key = toPrimitive(key, true);
        anObject(D);
        if (has(AllSymbols, key)) {
          if (!D.enumerable) {
            if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
            it[HIDDEN][key] = true;
          } else {
            if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
            D = _create(D, { enumerable: createDesc(0, false) });
          }
          return setSymbolDesc(it, key, D);
        }
        return dP(it, key, D);
      };
      var $defineProperties = function defineProperties(it, P) {
        anObject(it);
        var keys = enumKeys((P = toIObject(P)));
        var i = 0;
        var l = keys.length;
        var key;
        while (l > i) $defineProperty(it, (key = keys[i++]), P[key]);
        return it;
      };
      var $create = function create(it, P) {
        return P === undefined
          ? _create(it)
          : $defineProperties(_create(it), P);
      };
      var $propertyIsEnumerable = function propertyIsEnumerable(key) {
        var E = isEnum.call(this, (key = toPrimitive(key, true)));
        if (
          this === ObjectProto &&
          has(AllSymbols, key) &&
          !has(OPSymbols, key)
        )
          return false;
        return E ||
          !has(this, key) ||
          !has(AllSymbols, key) ||
          (has(this, HIDDEN) && this[HIDDEN][key])
          ? E
          : true;
      };
      var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(
        it,
        key
      ) {
        it = toIObject(it);
        key = toPrimitive(key, true);
        if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))
          return;
        var D = gOPD(it, key);
        if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))
          D.enumerable = true;
        return D;
      };
      var $getOwnPropertyNames = function getOwnPropertyNames(it) {
        var names = gOPN(toIObject(it));
        var result = [];
        var i = 0;
        var key;
        while (names.length > i) {
          if (
            !has(AllSymbols, (key = names[i++])) &&
            key != HIDDEN &&
            key != META
          )
            result.push(key);
        }
        return result;
      };
      var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
        var IS_OP = it === ObjectProto;
        var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
        var result = [];
        var i = 0;
        var key;
        while (names.length > i) {
          if (
            has(AllSymbols, (key = names[i++])) &&
            (IS_OP ? has(ObjectProto, key) : true)
          )
            result.push(AllSymbols[key]);
        }
        return result;
      };

      // 19.4.1.1 Symbol([description])
      if (!USE_NATIVE) {
        $Symbol = function Symbol() {
          if (this instanceof $Symbol)
            throw TypeError("Symbol is not a constructor!");
          var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
          var $set = function(value) {
            if (this === ObjectProto) $set.call(OPSymbols, value);
            if (has(this, HIDDEN) && has(this[HIDDEN], tag))
              this[HIDDEN][tag] = false;
            setSymbolDesc(this, tag, createDesc(1, value));
          };
          if (DESCRIPTORS && setter)
            setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
          return wrap(tag);
        };
        redefine($Symbol[PROTOTYPE], "toString", function toString() {
          return this._k;
        });

        $GOPD.f = $getOwnPropertyDescriptor;
        $DP.f = $defineProperty;
        __webpack_require__("9093").f = gOPNExt.f = $getOwnPropertyNames;
        __webpack_require__("52a7").f = $propertyIsEnumerable;
        __webpack_require__("2621").f = $getOwnPropertySymbols;

        if (DESCRIPTORS && !__webpack_require__("2d00")) {
          redefine(
            ObjectProto,
            "propertyIsEnumerable",
            $propertyIsEnumerable,
            true
          );
        }

        wksExt.f = function(name) {
          return wrap(wks(name));
        };
      }

      $export($export.G + $export.W + $export.F * !USE_NATIVE, {
        Symbol: $Symbol
      });

      for (
        var es6Symbols = // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
          "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(
            ","
          ),
          j = 0;
        es6Symbols.length > j;

      )
        wks(es6Symbols[j++]);

      for (
        var wellKnownSymbols = $keys(wks.store), k = 0;
        wellKnownSymbols.length > k;

      )
        wksDefine(wellKnownSymbols[k++]);

      $export($export.S + $export.F * !USE_NATIVE, "Symbol", {
        // 19.4.2.1 Symbol.for(key)
        for: function(key) {
          return has(SymbolRegistry, (key += ""))
            ? SymbolRegistry[key]
            : (SymbolRegistry[key] = $Symbol(key));
        },
        // 19.4.2.5 Symbol.keyFor(sym)
        keyFor: function keyFor(sym) {
          if (!isSymbol(sym)) throw TypeError(sym + " is not a symbol!");
          for (var key in SymbolRegistry)
            if (SymbolRegistry[key] === sym) return key;
        },
        useSetter: function() {
          setter = true;
        },
        useSimple: function() {
          setter = false;
        }
      });

      $export($export.S + $export.F * !USE_NATIVE, "Object", {
        // 19.1.2.2 Object.create(O [, Properties])
        create: $create,
        // 19.1.2.4 Object.defineProperty(O, P, Attributes)
        defineProperty: $defineProperty,
        // 19.1.2.3 Object.defineProperties(O, Properties)
        defineProperties: $defineProperties,
        // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
        getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
        // 19.1.2.7 Object.getOwnPropertyNames(O)
        getOwnPropertyNames: $getOwnPropertyNames,
        // 19.1.2.8 Object.getOwnPropertySymbols(O)
        getOwnPropertySymbols: $getOwnPropertySymbols
      });

      // 24.3.2 JSON.stringify(value [, replacer [, space]])
      $JSON &&
        $export(
          $export.S +
            $export.F *
              (!USE_NATIVE ||
                $fails(function() {
                  var S = $Symbol();
                  // MS Edge converts symbol values to JSON as {}
                  // WebKit converts symbol values to JSON as null
                  // V8 throws on boxed symbols
                  return (
                    _stringify([S]) != "[null]" ||
                    _stringify({ a: S }) != "{}" ||
                    _stringify(Object(S)) != "{}"
                  );
                })),
          "JSON",
          {
            stringify: function stringify(it) {
              var args = [it];
              var i = 1;
              var replacer, $replacer;
              while (arguments.length > i) args.push(arguments[i++]);
              $replacer = replacer = args[1];
              if ((!isObject(replacer) && it === undefined) || isSymbol(it))
                return; // IE8 returns string on undefined
              if (!isArray(replacer))
                replacer = function(key, value) {
                  if (typeof $replacer == "function")
                    value = $replacer.call(this, key, value);
                  if (!isSymbol(value)) return value;
                };
              args[1] = replacer;
              return _stringify.apply($JSON, args);
            }
          }
        );

      // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
      $Symbol[PROTOTYPE][TO_PRIMITIVE] ||
        __webpack_require__("32e9")(
          $Symbol[PROTOTYPE],
          TO_PRIMITIVE,
          $Symbol[PROTOTYPE].valueOf
        );
      // 19.4.3.5 Symbol.prototype[@@toStringTag]
      setToStringTag($Symbol, "Symbol");
      // 20.2.1.9 Math[@@toStringTag]
      setToStringTag(Math, "Math", true);
      // 24.3.3 JSON[@@toStringTag]
      setToStringTag(global.JSON, "JSON", true);

      /***/
    },

    /***/ "8bbf": /***/ function(module, exports) {
      module.exports = Vue;

      /***/
    },

    /***/ "8c93": /***/ function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderButtons_vue_vue_type_style_index_0_id_dd214c72_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "9113"
      );
      /* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderButtons_vue_vue_type_style_index_0_id_dd214c72_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderButtons_vue_vue_type_style_index_0_id_dd214c72_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderButtons_vue_vue_type_style_index_0_id_dd214c72_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__)
        if (__WEBPACK_IMPORT_KEY__ !== "default")
          (function(key) {
            __webpack_require__.d(__webpack_exports__, key, function() {
              return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderButtons_vue_vue_type_style_index_0_id_dd214c72_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[
                key
              ];
            });
          })(__WEBPACK_IMPORT_KEY__);
      /* harmony default export */ __webpack_exports__["default"] =
        _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderButtons_vue_vue_type_style_index_0_id_dd214c72_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a;

      /***/
    },

    /***/ "9093": /***/ function(module, exports, __webpack_require__) {
      // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
      var $keys = __webpack_require__("ce10");
      var hiddenKeys = __webpack_require__("e11e").concat(
        "length",
        "prototype"
      );

      exports.f =
        Object.getOwnPropertyNames ||
        function getOwnPropertyNames(O) {
          return $keys(O, hiddenKeys);
        };

      /***/
    },

    /***/ "9113": /***/ function(module, exports, __webpack_require__) {
      // style-loader: Adds some css to the DOM by adding a <style> tag

      // load the styles
      var content = __webpack_require__("db33");
      if (typeof content === "string") content = [[module.i, content, ""]];
      if (content.locals) module.exports = content.locals;
      // add CSS to Shadow Root
      var add = __webpack_require__("35d6").default;
      module.exports.__inject__ = function(shadowRoot) {
        add("1a6ea0aa", content, shadowRoot);
      };

      /***/
    },

    /***/ "9558": /***/ function(module, exports, __webpack_require__) {
      // style-loader: Adds some css to the DOM by adding a <style> tag

      // load the styles
      var content = __webpack_require__("73b2");
      if (typeof content === "string") content = [[module.i, content, ""]];
      if (content.locals) module.exports = content.locals;
      // add CSS to Shadow Root
      var add = __webpack_require__("35d6").default;
      module.exports.__inject__ = function(shadowRoot) {
        add("5c459bd6", content, shadowRoot);
      };

      /***/
    },

    /***/ "9732": /***/ function(module, exports, __webpack_require__) {
      "use strict";

      var enhanceError = __webpack_require__("aff1");

      /**
       * Create an Error with the specified message, config, error code, request and response.
       *
       * @param {string} message The error message.
       * @param {Object} config The config.
       * @param {string} [code] The error code (for example, 'ECONNABORTED').
       * @param {Object} [request] The request.
       * @param {Object} [response] The response.
       * @returns {Error} The created error.
       */
      module.exports = function createError(
        message,
        config,
        code,
        request,
        response
      ) {
        var error = new Error(message);
        return enhanceError(error, config, code, request, response);
      };

      /***/
    },

    /***/ "9aa3": /***/ function(module, exports, __webpack_require__) {
      "use strict";

      var utils = __webpack_require__("8805");

      function encode(val) {
        return encodeURIComponent(val)
          .replace(/%40/gi, "@")
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",")
          .replace(/%20/g, "+")
          .replace(/%5B/gi, "[")
          .replace(/%5D/gi, "]");
      }

      /**
       * Build a URL by appending params to the end
       *
       * @param {string} url The base of the url (e.g., http://www.google.com)
       * @param {object} [params] The params to be appended
       * @returns {string} The formatted url
       */
      module.exports = function buildURL(url, params, paramsSerializer) {
        /*eslint no-param-reassign:0*/
        if (!params) {
          return url;
        }

        var serializedParams;
        if (paramsSerializer) {
          serializedParams = paramsSerializer(params);
        } else if (utils.isURLSearchParams(params)) {
          serializedParams = params.toString();
        } else {
          var parts = [];

          utils.forEach(params, function serialize(val, key) {
            if (val === null || typeof val === "undefined") {
              return;
            }

            if (utils.isArray(val)) {
              key = key + "[]";
            } else {
              val = [val];
            }

            utils.forEach(val, function parseValue(v) {
              if (utils.isDate(v)) {
                v = v.toISOString();
              } else if (utils.isObject(v)) {
                v = JSON.stringify(v);
              }
              parts.push(encode(key) + "=" + encode(v));
            });
          });

          serializedParams = parts.join("&");
        }

        if (serializedParams) {
          url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
        }

        return url;
      };

      /***/
    },

    /***/ "9b43": /***/ function(module, exports, __webpack_require__) {
      // optional / simple context binding
      var aFunction = __webpack_require__("d8e8");
      module.exports = function(fn, that, length) {
        aFunction(fn);
        if (that === undefined) return fn;
        switch (length) {
          case 1:
            return function(a) {
              return fn.call(that, a);
            };
          case 2:
            return function(a, b) {
              return fn.call(that, a, b);
            };
          case 3:
            return function(a, b, c) {
              return fn.call(that, a, b, c);
            };
        }
        return function(/* ...args */) {
          return fn.apply(that, arguments);
        };
      };

      /***/
    },

    /***/ "9c6c": /***/ function(module, exports, __webpack_require__) {
      // 22.1.3.31 Array.prototype[@@unscopables]
      var UNSCOPABLES = __webpack_require__("2b4c")("unscopables");
      var ArrayProto = Array.prototype;
      if (ArrayProto[UNSCOPABLES] == undefined)
        __webpack_require__("32e9")(ArrayProto, UNSCOPABLES, {});
      module.exports = function(key) {
        ArrayProto[UNSCOPABLES][key] = true;
      };

      /***/
    },

    /***/ "9d85": /***/ function(module, exports, __webpack_require__) {
      "use strict";

      var createError = __webpack_require__("9732");

      /**
       * Resolve or reject a Promise based on response status.
       *
       * @param {Function} resolve A function that resolves the promise.
       * @param {Function} reject A function that rejects the promise.
       * @param {object} response The response.
       */
      module.exports = function settle(resolve, reject, response) {
        var validateStatus = response.config.validateStatus;
        // Note: status is not exposed by XDomainRequest
        if (
          !response.status ||
          !validateStatus ||
          validateStatus(response.status)
        ) {
          resolve(response);
        } else {
          reject(
            createError(
              "Request failed with status code " + response.status,
              response.config,
              null,
              response.request,
              response
            )
          );
        }
      };

      /***/
    },

    /***/ "9def": /***/ function(module, exports, __webpack_require__) {
      // 7.1.15 ToLength
      var toInteger = __webpack_require__("4588");
      var min = Math.min;
      module.exports = function(it) {
        return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
      };

      /***/
    },

    /***/ "9e1e": /***/ function(module, exports, __webpack_require__) {
      // Thank's IE8 for his funny defineProperty
      module.exports = !__webpack_require__("79e5")(function() {
        return (
          Object.defineProperty({}, "a", {
            get: function() {
              return 7;
            }
          }).a != 7
        );
      });

      /***/
    },

    /***/ "9e53": /***/ function(module, exports, __webpack_require__) {
      "use strict";

      var utils = __webpack_require__("8805");

      module.exports = utils.isStandardBrowserEnv()
        ? // Standard browser envs support document.cookie
          (function standardBrowserEnv() {
            return {
              write: function write(
                name,
                value,
                expires,
                path,
                domain,
                secure
              ) {
                var cookie = [];
                cookie.push(name + "=" + encodeURIComponent(value));

                if (utils.isNumber(expires)) {
                  cookie.push("expires=" + new Date(expires).toGMTString());
                }

                if (utils.isString(path)) {
                  cookie.push("path=" + path);
                }

                if (utils.isString(domain)) {
                  cookie.push("domain=" + domain);
                }

                if (secure === true) {
                  cookie.push("secure");
                }

                document.cookie = cookie.join("; ");
              },

              read: function read(name) {
                var match = document.cookie.match(
                  new RegExp("(^|;\\s*)(" + name + ")=([^;]*)")
                );
                return match ? decodeURIComponent(match[3]) : null;
              },

              remove: function remove(name) {
                this.write(name, "", Date.now() - 86400000);
              }
            };
          })()
        : // Non standard browser env (web workers, react-native) lack needed support.
          (function nonStandardBrowserEnv() {
            return {
              write: function write() {},
              read: function read() {
                return null;
              },
              remove: function remove() {}
            };
          })();

      /***/
    },

    /***/ "9fd2": /***/ function(module, exports, __webpack_require__) {
      // style-loader: Adds some css to the DOM by adding a <style> tag

      // load the styles
      var content = __webpack_require__("ead3");
      if (typeof content === "string") content = [[module.i, content, ""]];
      if (content.locals) module.exports = content.locals;
      // add CSS to Shadow Root
      var add = __webpack_require__("35d6").default;
      module.exports.__inject__ = function(shadowRoot) {
        add("f6b05066", content, shadowRoot);
      };

      /***/
    },

    /***/ a481: /***/ function(module, exports, __webpack_require__) {
      // @@replace logic
      __webpack_require__("214f")("replace", 2, function(
        defined,
        REPLACE,
        $replace
      ) {
        // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
        return [
          function replace(searchValue, replaceValue) {
            "use strict";
            var O = defined(this);
            var fn =
              searchValue == undefined ? undefined : searchValue[REPLACE];
            return fn !== undefined
              ? fn.call(searchValue, O, replaceValue)
              : $replace.call(String(O), searchValue, replaceValue);
          },
          $replace
        ];
      });

      /***/
    },

    /***/ aae3: /***/ function(module, exports, __webpack_require__) {
      // 7.2.8 IsRegExp(argument)
      var isObject = __webpack_require__("d3f4");
      var cof = __webpack_require__("2d95");
      var MATCH = __webpack_require__("2b4c")("match");
      module.exports = function(it) {
        var isRegExp;
        return (
          isObject(it) &&
          ((isRegExp = it[MATCH]) !== undefined
            ? !!isRegExp
            : cof(it) == "RegExp")
        );
      };

      /***/
    },

    /***/ ac4d: /***/ function(module, exports, __webpack_require__) {
      __webpack_require__("3a72")("asyncIterator");

      /***/
    },

    /***/ ac6a: /***/ function(module, exports, __webpack_require__) {
      var $iterators = __webpack_require__("cadf");
      var getKeys = __webpack_require__("0d58");
      var redefine = __webpack_require__("2aba");
      var global = __webpack_require__("7726");
      var hide = __webpack_require__("32e9");
      var Iterators = __webpack_require__("84f2");
      var wks = __webpack_require__("2b4c");
      var ITERATOR = wks("iterator");
      var TO_STRING_TAG = wks("toStringTag");
      var ArrayValues = Iterators.Array;

      var DOMIterables = {
        CSSRuleList: true, // TODO: Not spec compliant, should be false.
        CSSStyleDeclaration: false,
        CSSValueList: false,
        ClientRectList: false,
        DOMRectList: false,
        DOMStringList: false,
        DOMTokenList: true,
        DataTransferItemList: false,
        FileList: false,
        HTMLAllCollection: false,
        HTMLCollection: false,
        HTMLFormElement: false,
        HTMLSelectElement: false,
        MediaList: true, // TODO: Not spec compliant, should be false.
        MimeTypeArray: false,
        NamedNodeMap: false,
        NodeList: true,
        PaintRequestList: false,
        Plugin: false,
        PluginArray: false,
        SVGLengthList: false,
        SVGNumberList: false,
        SVGPathSegList: false,
        SVGPointList: false,
        SVGStringList: false,
        SVGTransformList: false,
        SourceBufferList: false,
        StyleSheetList: true, // TODO: Not spec compliant, should be false.
        TextTrackCueList: false,
        TextTrackList: false,
        TouchList: false
      };

      for (
        var collections = getKeys(DOMIterables), i = 0;
        i < collections.length;
        i++
      ) {
        var NAME = collections[i];
        var explicit = DOMIterables[NAME];
        var Collection = global[NAME];
        var proto = Collection && Collection.prototype;
        var key;
        if (proto) {
          if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
          if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
          Iterators[NAME] = ArrayValues;
          if (explicit)
            for (key in $iterators)
              if (!proto[key]) redefine(proto, key, $iterators[key], true);
        }
      }

      /***/
    },

    /***/ ae33: /***/ function(module, exports, __webpack_require__) {
      exports = module.exports = __webpack_require__("2350")(false);
      // imports

      // module
      exports.push([
        module.i,
        "\n.fa-icon{display:inline-block;fill:currentColor\n}\n.fa-flip-horizontal{transform:scaleX(-1)\n}\n.fa-flip-vertical{transform:scaleY(-1)\n}\n.fa-spin{animation:fa-spin 1s 0s infinite linear\n}\n.fa-inverse{color:#fff\n}\n.fa-pulse{animation:fa-spin 1s infinite steps(8)\n}\n@keyframes fa-spin{\n0%{transform:rotate(0deg)\n}\nto{transform:rotate(1turn)\n}\n}",
        ""
      ]);

      // exports

      /***/
    },

    /***/ aea1: /***/ function(module, exports, __webpack_require__) {
      exports = module.exports = __webpack_require__("2350")(false);
      // imports

      // module
      exports.push([
        module.i,
        "\n.swiper-container{list-style:none;margin:0 auto;overflow:hidden;padding:0;position:relative;z-index:1\n}\n.swiper-container-no-flexbox .swiper-slide{float:left\n}\n.swiper-container-vertical>.swiper-wrapper{-ms-flex-direction:column;-webkit-box-direction:normal;-webkit-box-orient:vertical;-webkit-flex-direction:column;flex-direction:column\n}\n.swiper-wrapper{-o-transition-property:transform;-webkit-box-sizing:content-box;-webkit-transition-property:-webkit-transform;box-sizing:content-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;position:relative;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;width:100%;z-index:1\n}\n.swiper-container-android .swiper-slide,.swiper-wrapper{-webkit-transform:translateZ(0);transform:translateZ(0)\n}\n.swiper-container-multirow>.swiper-wrapper{-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap\n}\n.swiper-container-free-mode>.swiper-wrapper{-o-transition-timing-function:ease-out;-webkit-transition-timing-function:ease-out;margin:0 auto;transition-timing-function:ease-out\n}\n.swiper-slide{-ms-flex-negative:0;-o-transition-property:transform;-webkit-flex-shrink:0;-webkit-transition-property:-webkit-transform;flex-shrink:0;height:100%;position:relative;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;width:100%\n}\n.swiper-invisible-blank-slide{visibility:hidden\n}\n.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto\n}\n.swiper-container-autoheight .swiper-wrapper{-ms-flex-align:start;-o-transition-property:transform,height;-webkit-align-items:flex-start;-webkit-box-align:start;-webkit-transition-property:height,-webkit-transform;align-items:flex-start;transition-property:height,-webkit-transform;transition-property:transform,height;transition-property:transform,height,-webkit-transform\n}\n.swiper-container-3d{-webkit-perspective:1200px;perspective:1200px\n}\n.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{-webkit-transform-style:preserve-3d;transform-style:preserve-3d\n}\n.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%;z-index:10\n}\n.swiper-container-3d .swiper-slide-shadow-left{background-image:-webkit-gradient(linear,right top,left top,from(rgba(0,0,0,.5)),to(transparent));background-image:-webkit-linear-gradient(right,rgba(0,0,0,.5),transparent);background-image:-o-linear-gradient(right,rgba(0,0,0,.5),transparent);background-image:linear-gradient(270deg,rgba(0,0,0,.5),transparent)\n}\n.swiper-container-3d .swiper-slide-shadow-right{background-image:-webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.5)),to(transparent));background-image:-webkit-linear-gradient(left,rgba(0,0,0,.5),transparent);background-image:-o-linear-gradient(left,rgba(0,0,0,.5),transparent);background-image:linear-gradient(90deg,rgba(0,0,0,.5),transparent)\n}\n.swiper-container-3d .swiper-slide-shadow-top{background-image:-webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.5)),to(transparent));background-image:-webkit-linear-gradient(bottom,rgba(0,0,0,.5),transparent);background-image:-o-linear-gradient(bottom,rgba(0,0,0,.5),transparent);background-image:linear-gradient(0deg,rgba(0,0,0,.5),transparent)\n}\n.swiper-container-3d .swiper-slide-shadow-bottom{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.5)),to(transparent));background-image:-webkit-linear-gradient(top,rgba(0,0,0,.5),transparent);background-image:-o-linear-gradient(top,rgba(0,0,0,.5),transparent);background-image:linear-gradient(180deg,rgba(0,0,0,.5),transparent)\n}\n.swiper-container-wp8-horizontal,.swiper-container-wp8-horizontal>.swiper-wrapper{-ms-touch-action:pan-y;touch-action:pan-y\n}\n.swiper-container-wp8-vertical,.swiper-container-wp8-vertical>.swiper-wrapper{-ms-touch-action:pan-x;touch-action:pan-x\n}\n.swiper-button-next,.swiper-button-prev{background-position:50%;background-repeat:no-repeat;background-size:27px 44px;cursor:pointer;height:44px;margin-top:-22px;position:absolute;top:50%;width:27px;z-index:10\n}\n.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{cursor:auto;opacity:.35;pointer-events:none\n}\n.swiper-button-prev,.swiper-container-rtl .swiper-button-next{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z' fill='%23007aff'/%3E%3C/svg%3E\");left:10px;right:auto\n}\n.swiper-button-next,.swiper-container-rtl .swiper-button-prev{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z' fill='%23007aff'/%3E%3C/svg%3E\");left:auto;right:10px\n}\n.swiper-button-prev.swiper-button-white,.swiper-container-rtl .swiper-button-next.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z' fill='%23fff'/%3E%3C/svg%3E\")\n}\n.swiper-button-next.swiper-button-white,.swiper-container-rtl .swiper-button-prev.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z' fill='%23fff'/%3E%3C/svg%3E\")\n}\n.swiper-button-prev.swiper-button-black,.swiper-container-rtl .swiper-button-next.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z'/%3E%3C/svg%3E\")\n}\n.swiper-button-next.swiper-button-black,.swiper-container-rtl .swiper-button-prev.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z'/%3E%3C/svg%3E\")\n}\n.swiper-button-lock{display:none\n}\n.swiper-pagination{-o-transition:.3s opacity;-webkit-transform:translateZ(0);-webkit-transition:opacity .3s;position:absolute;text-align:center;transform:translateZ(0);transition:opacity .3s;z-index:10\n}\n.swiper-pagination.swiper-pagination-hidden{opacity:0\n}\n.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%\n}\n.swiper-pagination-bullets-dynamic{font-size:0;overflow:hidden\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-ms-transform:scale(.33);-webkit-transform:scale(.33);position:relative;transform:scale(.33)\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{-ms-transform:scale(1);-webkit-transform:scale(1);transform:scale(1)\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{-ms-transform:scale(.66);-webkit-transform:scale(.66);transform:scale(.66)\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{-ms-transform:scale(.33);-webkit-transform:scale(.33);transform:scale(.33)\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{-ms-transform:scale(.66);-webkit-transform:scale(.66);transform:scale(.66)\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{-ms-transform:scale(.33);-webkit-transform:scale(.33);transform:scale(.33)\n}\n.swiper-pagination-bullet{background:#000;border-radius:100%;display:inline-block;height:8px;opacity:.2;width:8px\n}\nbutton.swiper-pagination-bullet{-moz-appearance:none;-webkit-appearance:none;-webkit-box-shadow:none;appearance:none;border:none;box-shadow:none;margin:0;padding:0\n}\n.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer\n}\n.swiper-pagination-bullet-active{background:#007aff;opacity:1\n}\n.swiper-container-vertical>.swiper-pagination-bullets{-webkit-transform:translate3d(0,-50%,0);right:10px;top:50%;transform:translate3d(0,-50%,0)\n}\n.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{display:block;margin:6px 0\n}\n.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{-ms-transform:translateY(-50%);-webkit-transform:translateY(-50%);top:50%;transform:translateY(-50%);width:8px\n}\n.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-o-transition:.2s transform,.2s top;-webkit-transition:top .2s,-webkit-transform .2s;display:inline-block;transition:top .2s,-webkit-transform .2s;transition:transform .2s,top .2s;transition:transform .2s,top .2s,-webkit-transform .2s\n}\n.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px\n}\n.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{-ms-transform:translateX(-50%);-webkit-transform:translateX(-50%);left:50%;transform:translateX(-50%);white-space:nowrap\n}\n.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-o-transition:.2s transform,.2s left;-webkit-transition:left .2s,-webkit-transform .2s;transition:left .2s,-webkit-transform .2s;transition:transform .2s,left .2s;transition:transform .2s,left .2s,-webkit-transform .2s\n}\n.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-o-transition:.2s transform,.2s right;-webkit-transition:right .2s,-webkit-transform .2s;transition:right .2s,-webkit-transform .2s;transition:transform .2s,right .2s;transition:transform .2s,right .2s,-webkit-transform .2s\n}\n.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute\n}\n.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{-ms-transform:scale(0);-ms-transform-origin:left top;-webkit-transform:scale(0);-webkit-transform-origin:left top;background:#007aff;height:100%;left:0;position:absolute;top:0;transform:scale(0);transform-origin:left top;width:100%\n}\n.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{-ms-transform-origin:right top;-webkit-transform-origin:right top;transform-origin:right top\n}\n.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{height:4px;left:0;top:0;width:100%\n}\n.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-container-vertical>.swiper-pagination-progressbar{height:100%;left:0;top:0;width:4px\n}\n.swiper-pagination-white .swiper-pagination-bullet-active{background:#fff\n}\n.swiper-pagination-progressbar.swiper-pagination-white{background:hsla(0,0%,100%,.25)\n}\n.swiper-pagination-progressbar.swiper-pagination-white .swiper-pagination-progressbar-fill{background:#fff\n}\n.swiper-pagination-black .swiper-pagination-bullet-active{background:#000\n}\n.swiper-pagination-progressbar.swiper-pagination-black{background:rgba(0,0,0,.25)\n}\n.swiper-pagination-progressbar.swiper-pagination-black .swiper-pagination-progressbar-fill{background:#000\n}\n.swiper-pagination-lock{display:none\n}\n.swiper-scrollbar{-ms-touch-action:none;background:rgba(0,0,0,.1);border-radius:10px;position:relative\n}\n.swiper-container-horizontal>.swiper-scrollbar{bottom:3px;height:5px;left:1%;position:absolute;width:98%;z-index:50\n}\n.swiper-container-vertical>.swiper-scrollbar{height:98%;position:absolute;right:3px;top:1%;width:5px;z-index:50\n}\n.swiper-scrollbar-drag{background:rgba(0,0,0,.5);border-radius:10px;height:100%;left:0;position:relative;top:0;width:100%\n}\n.swiper-scrollbar-cursor-drag{cursor:move\n}\n.swiper-scrollbar-lock{display:none\n}\n.swiper-zoom-container{-ms-flex-align:center;-ms-flex-pack:center;-webkit-align-items:center;-webkit-box-align:center;-webkit-box-pack:center;-webkit-justify-content:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;justify-content:center;text-align:center;width:100%\n}\n.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{-o-object-fit:contain;max-height:100%;max-width:100%;object-fit:contain\n}\n.swiper-slide-zoomed{cursor:move\n}\n.swiper-lazy-preloader{-ms-transform-origin:50%;-webkit-animation:swiper-preloader-spin 1s steps(12) infinite;-webkit-transform-origin:50%;animation:swiper-preloader-spin 1s steps(12) infinite;height:42px;left:50%;margin-left:-21px;margin-top:-21px;position:absolute;top:50%;transform-origin:50%;width:42px;z-index:10\n}\n.swiper-lazy-preloader:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpath id='a' stroke='%236c6c6c' stroke-width='11' stroke-linecap='round' d='M60 7v20'/%3E%3C/defs%3E%3Cuse xlink:href='%23a' opacity='.27'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(30 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(60 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(90 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(120 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(150 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.37' transform='rotate(180 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.46' transform='rotate(210 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.56' transform='rotate(240 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.66' transform='rotate(270 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.75' transform='rotate(300 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.85' transform='rotate(330 60 60)'/%3E%3C/svg%3E\");background-position:50%;background-repeat:no-repeat;background-size:100%;content:\"\";display:block;height:100%;width:100%\n}\n.swiper-lazy-preloader-white:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpath id='a' stroke='%23fff' stroke-width='11' stroke-linecap='round' d='M60 7v20'/%3E%3C/defs%3E%3Cuse xlink:href='%23a' opacity='.27'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(30 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(60 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(90 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(120 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(150 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.37' transform='rotate(180 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.46' transform='rotate(210 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.56' transform='rotate(240 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.66' transform='rotate(270 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.75' transform='rotate(300 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.85' transform='rotate(330 60 60)'/%3E%3C/svg%3E\")\n}\n@-webkit-keyframes swiper-preloader-spin{\nto{-webkit-transform:rotate(1turn);transform:rotate(1turn)\n}\n}\n@keyframes swiper-preloader-spin{\nto{-webkit-transform:rotate(1turn);transform:rotate(1turn)\n}\n}\n.swiper-container .swiper-notification{left:0;opacity:0;pointer-events:none;position:absolute;top:0;z-index:-1000\n}\n.swiper-container-fade.swiper-container-free-mode .swiper-slide{-o-transition-timing-function:ease-out;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out\n}\n.swiper-container-fade .swiper-slide{-o-transition-property:opacity;-webkit-transition-property:opacity;pointer-events:none;transition-property:opacity\n}\n.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none\n}\n.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto\n}\n.swiper-container-cube{overflow:visible\n}\n.swiper-container-cube .swiper-slide{-ms-transform-origin:0 0;-webkit-backface-visibility:hidden;-webkit-transform-origin:0 0;backface-visibility:hidden;height:100%;pointer-events:none;transform-origin:0 0;visibility:hidden;width:100%;z-index:1\n}\n.swiper-container-cube .swiper-slide .swiper-slide{pointer-events:none\n}\n.swiper-container-cube.swiper-container-rtl .swiper-slide{-ms-transform-origin:100% 0;-webkit-transform-origin:100% 0;transform-origin:100% 0\n}\n.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto\n}\n.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible\n}\n.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top{-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:0\n}\n.swiper-container-cube .swiper-cube-shadow{-webkit-filter:blur(50px);background:#000;bottom:0;filter:blur(50px);height:100%;left:0;opacity:.6;position:absolute;width:100%;z-index:0\n}\n.swiper-container-flip{overflow:visible\n}\n.swiper-container-flip .swiper-slide{-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:none;z-index:1\n}\n.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none\n}\n.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto\n}\n.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:0\n}\n.swiper-container-coverflow .swiper-wrapper{-ms-perspective:1200px\n}",
        ""
      ]);

      // exports

      /***/
    },

    /***/ aff1: /***/ function(module, exports, __webpack_require__) {
      "use strict";

      /**
       * Update an Error with the specified config, error code, and response.
       *
       * @param {Error} error The error to update.
       * @param {Object} config The config.
       * @param {string} [code] The error code (for example, 'ECONNABORTED').
       * @param {Object} [request] The request.
       * @param {Object} [response] The response.
       * @returns {Error} The error.
       */
      module.exports = function enhanceError(
        error,
        config,
        code,
        request,
        response
      ) {
        error.config = config;
        if (code) {
          error.code = code;
        }
        error.request = request;
        error.response = response;
        return error;
      };

      /***/
    },

    /***/ b4e4: /***/ function(module, exports, __webpack_require__) {
      // style-loader: Adds some css to the DOM by adding a <style> tag

      // load the styles
      var content = __webpack_require__("4dcc");
      if (typeof content === "string") content = [[module.i, content, ""]];
      if (content.locals) module.exports = content.locals;
      // add CSS to Shadow Root
      var add = __webpack_require__("35d6").default;
      module.exports.__inject__ = function(shadowRoot) {
        add("cbb20c1c", content, shadowRoot);
      };

      /***/
    },

    /***/ ba5d: /***/ function(module, exports, __webpack_require__) {
      "use strict";
      /* WEBPACK VAR INJECTION */ (function(process) {
        var utils = __webpack_require__("8805");
        var normalizeHeaderName = __webpack_require__("86af");

        var DEFAULT_CONTENT_TYPE = {
          "Content-Type": "application/x-www-form-urlencoded"
        };

        function setContentTypeIfUnset(headers, value) {
          if (
            !utils.isUndefined(headers) &&
            utils.isUndefined(headers["Content-Type"])
          ) {
            headers["Content-Type"] = value;
          }
        }

        function getDefaultAdapter() {
          var adapter;
          if (typeof XMLHttpRequest !== "undefined") {
            // For browsers use XHR adapter
            adapter = __webpack_require__("441f");
          } else if (typeof process !== "undefined") {
            // For node use HTTP adapter
            adapter = __webpack_require__("441f");
          }
          return adapter;
        }

        var defaults = {
          adapter: getDefaultAdapter(),

          transformRequest: [
            function transformRequest(data, headers) {
              normalizeHeaderName(headers, "Content-Type");
              if (
                utils.isFormData(data) ||
                utils.isArrayBuffer(data) ||
                utils.isBuffer(data) ||
                utils.isStream(data) ||
                utils.isFile(data) ||
                utils.isBlob(data)
              ) {
                return data;
              }
              if (utils.isArrayBufferView(data)) {
                return data.buffer;
              }
              if (utils.isURLSearchParams(data)) {
                setContentTypeIfUnset(
                  headers,
                  "application/x-www-form-urlencoded;charset=utf-8"
                );
                return data.toString();
              }
              if (utils.isObject(data)) {
                setContentTypeIfUnset(
                  headers,
                  "application/json;charset=utf-8"
                );
                return JSON.stringify(data);
              }
              return data;
            }
          ],

          transformResponse: [
            function transformResponse(data) {
              /*eslint no-param-reassign:0*/
              if (typeof data === "string") {
                try {
                  data = JSON.parse(data);
                } catch (e) {
                  /* Ignore */
                }
              }
              return data;
            }
          ],

          /**
           * A timeout in milliseconds to abort a request. If set to 0 (default) a
           * timeout is not created.
           */
          timeout: 0,

          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",

          maxContentLength: -1,

          validateStatus: function validateStatus(status) {
            return status >= 200 && status < 300;
          }
        };

        defaults.headers = {
          common: {
            Accept: "application/json, text/plain, */*"
          }
        };

        utils.forEach(["delete", "get", "head"], function forEachMethodNoData(
          method
        ) {
          defaults.headers[method] = {};
        });

        utils.forEach(["post", "put", "patch"], function forEachMethodWithData(
          method
        ) {
          defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
        });

        module.exports = defaults;

        /* WEBPACK VAR INJECTION */
      }.call(this, __webpack_require__("4362")));

      /***/
    },

    /***/ bc78: /***/ function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionFavorites_vue_vue_type_style_index_0_id_260b491e_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "0447"
      );
      /* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionFavorites_vue_vue_type_style_index_0_id_260b491e_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionFavorites_vue_vue_type_style_index_0_id_260b491e_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionFavorites_vue_vue_type_style_index_0_id_260b491e_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__)
        if (__WEBPACK_IMPORT_KEY__ !== "default")
          (function(key) {
            __webpack_require__.d(__webpack_exports__, key, function() {
              return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionFavorites_vue_vue_type_style_index_0_id_260b491e_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__[
                key
              ];
            });
          })(__WEBPACK_IMPORT_KEY__);
      /* harmony default export */ __webpack_exports__["default"] =
        _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionFavorites_vue_vue_type_style_index_0_id_260b491e_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default.a;

      /***/
    },

    /***/ be13: /***/ function(module, exports) {
      // 7.2.1 RequireObjectCoercible(argument)
      module.exports = function(it) {
        if (it == undefined) throw TypeError("Can't call method on  " + it);
        return it;
      };

      /***/
    },

    /***/ be87: /***/ function(module, exports, __webpack_require__) {
      // style-loader: Adds some css to the DOM by adding a <style> tag

      // load the styles
      var content = __webpack_require__("4934");
      if (typeof content === "string") content = [[module.i, content, ""]];
      if (content.locals) module.exports = content.locals;
      // add CSS to Shadow Root
      var add = __webpack_require__("35d6").default;
      module.exports.__inject__ = function(shadowRoot) {
        add("15f0b1ef", content, shadowRoot);
      };

      /***/
    },

    /***/ c035: /***/ function(module, exports, __webpack_require__) {
      "use strict";

      var base64_url_decode = __webpack_require__("d9c9");

      function InvalidTokenError(message) {
        this.message = message;
      }

      InvalidTokenError.prototype = new Error();
      InvalidTokenError.prototype.name = "InvalidTokenError";

      module.exports = function(token, options) {
        if (typeof token !== "string") {
          throw new InvalidTokenError("Invalid token specified");
        }

        options = options || {};
        var pos = options.header === true ? 0 : 1;
        try {
          return JSON.parse(base64_url_decode(token.split(".")[pos]));
        } catch (e) {
          throw new InvalidTokenError("Invalid token specified: " + e.message);
        }
      };

      module.exports.InvalidTokenError = InvalidTokenError;

      /***/
    },

    /***/ c366: /***/ function(module, exports, __webpack_require__) {
      // false -> Array#indexOf
      // true  -> Array#includes
      var toIObject = __webpack_require__("6821");
      var toLength = __webpack_require__("9def");
      var toAbsoluteIndex = __webpack_require__("77f1");
      module.exports = function(IS_INCLUDES) {
        return function($this, el, fromIndex) {
          var O = toIObject($this);
          var length = toLength(O.length);
          var index = toAbsoluteIndex(fromIndex, length);
          var value;
          // Array#includes uses SameValueZero equality algorithm
          // eslint-disable-next-line no-self-compare
          if (IS_INCLUDES && el != el)
            while (length > index) {
              value = O[index++];
              // eslint-disable-next-line no-self-compare
              if (value != value) return true;
              // Array#indexOf ignores holes, Array#includes - not
            }
          else
            for (; length > index; index++)
              if (IS_INCLUDES || index in O) {
                if (O[index] === el) return IS_INCLUDES || index || 0;
              }
          return !IS_INCLUDES && -1;
        };
      };

      /***/
    },

    /***/ c69a: /***/ function(module, exports, __webpack_require__) {
      module.exports =
        !__webpack_require__("9e1e") &&
        !__webpack_require__("79e5")(function() {
          return (
            Object.defineProperty(__webpack_require__("230e")("div"), "a", {
              get: function() {
                return 7;
              }
            }).a != 7
          );
        });

      /***/
    },

    /***/ c8f8: /***/ function(module, exports, __webpack_require__) {
      // style-loader: Adds some css to the DOM by adding a <style> tag

      // load the styles
      var content = __webpack_require__("d966");
      if (typeof content === "string") content = [[module.i, content, ""]];
      if (content.locals) module.exports = content.locals;
      // add CSS to Shadow Root
      var add = __webpack_require__("35d6").default;
      module.exports.__inject__ = function(shadowRoot) {
        add("e44f34a4", content, shadowRoot);
      };

      /***/
    },

    /***/ c9ff: /***/ function(module, exports, __webpack_require__) {
      exports = module.exports = __webpack_require__("2350")(false);
      // imports
      exports.i(__webpack_require__("aea1"), "");

      // module
      exports.push([
        module.i,
        "\n.content-favorites[data-v-7319541c]{color:#fff;display:flex;flex-flow:column;justify-content:center;padding-bottom:1.5em;width:inherit\n}\n.content-favorites>.content-favorites-title[data-v-7319541c]{filter:grayscale(1);margin:0 0 5px 2em;text-transform:uppercase\n}\n.content-favorites>.content-favorites-title h1[data-v-7319541c]{color:#fff;font-size:24px;font-weight:400;margin:10px 0 5px 10px\n}\n.content-favorites>.favorites[data-v-7319541c]{position:relative\n}\n.content-favorites>.favorites>.swiper-container[data-v-7319541c]{margin:0 45px;padding-bottom:15px\n}\n.content-favorites>.favorites>.swiper-container>.swiper-wrapper>.swiper-slide[data-v-7319541c]{height:175px;margin:30px;width:255px\n}\n.content-favorites>.favorites>.swiper-container>.swiper-wrapper>.swiper-slide[data-v-7319541c]:first-child{margin-left:0\n}\n.content-favorites>.favorites>.swiper-container .swiper-pagination[data-v-7319541c]{bottom:0\n}\n.content-favorites>.favorites>.swiper-container .swiper-pagination>span.swiper-pagination-bullet[data-v-7319541c]{color:#fff;height:16px;margin:0 8px;width:16px\n}\n.content-favorites>.favorites .swiper-button-next[data-v-7319541c],.content-favorites>.favorites .swiper-button-prev[data-v-7319541c]{background-image:none;color:#fff;height:auto;margin-top:0;width:auto\n}\n.content-favorites>.favorites .fav-swiper-button-disabled[data-v-7319541c]{cursor:auto;opacity:.35;pointer-events:none\n}\n.content-favorites>.favorites a.no-style[data-v-7319541c]{color:inherit;text-decoration:none\n}\n.content-favorites>.empty-favorites[data-v-7319541c]{padding-left:2em\n}\n.content-favorites.small>.content-favorites-title h1[data-v-7319541c]{font-size:medium;font-weight:700\n}\n.content-favorites.small>.favorites[data-v-7319541c]{padding-left:2em\n}\n.content-favorites.small>.favorites>.swiper-container[data-v-7319541c]{margin:0;padding-bottom:30px\n}\n.content-favorites.small>.favorites>.swiper-container>.swiper-wrapper>.swiper-slide[data-v-7319541c]{height:auto;margin:0;width:120px\n}\n.content-favorites.small>.favorites .swiper-button-next[data-v-7319541c],.content-favorites.small>.favorites .swiper-button-prev[data-v-7319541c]{display:none\n}\n.content-favorites .fa-icon[data-v-7319541c]{height:2em;max-height:100%;max-width:100%;width:auto\n}",
        ""
      ]);

      // exports

      /***/
    },

    /***/ ca5a: /***/ function(module, exports) {
      var id = 0;
      var px = Math.random();
      module.exports = function(key) {
        return "Symbol(".concat(
          key === undefined ? "" : key,
          ")_",
          (++id + px).toString(36)
        );
      };

      /***/
    },

    /***/ cadf: /***/ function(module, exports, __webpack_require__) {
      "use strict";

      var addToUnscopables = __webpack_require__("9c6c");
      var step = __webpack_require__("d53b");
      var Iterators = __webpack_require__("84f2");
      var toIObject = __webpack_require__("6821");

      // 22.1.3.4 Array.prototype.entries()
      // 22.1.3.13 Array.prototype.keys()
      // 22.1.3.29 Array.prototype.values()
      // 22.1.3.30 Array.prototype[@@iterator]()
      module.exports = __webpack_require__("01f9")(
        Array,
        "Array",
        function(iterated, kind) {
          this._t = toIObject(iterated); // target
          this._i = 0; // next index
          this._k = kind; // kind
          // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
        },
        function() {
          var O = this._t;
          var kind = this._k;
          var index = this._i++;
          if (!O || index >= O.length) {
            this._t = undefined;
            return step(1);
          }
          if (kind == "keys") return step(0, index);
          if (kind == "values") return step(0, O[index]);
          return step(0, [index, O[index]]);
        },
        "values"
      );

      // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
      Iterators.Arguments = Iterators.Array;

      addToUnscopables("keys");
      addToUnscopables("values");
      addToUnscopables("entries");

      /***/
    },

    /***/ caef: /***/ function(module, exports, __webpack_require__) {
      // style-loader: Adds some css to the DOM by adding a <style> tag

      // load the styles
      var content = __webpack_require__("0039");
      if (typeof content === "string") content = [[module.i, content, ""]];
      if (content.locals) module.exports = content.locals;
      // add CSS to Shadow Root
      var add = __webpack_require__("35d6").default;
      module.exports.__inject__ = function(shadowRoot) {
        add("26b4de51", content, shadowRoot);
      };

      /***/
    },

    /***/ cb7c: /***/ function(module, exports, __webpack_require__) {
      var isObject = __webpack_require__("d3f4");
      module.exports = function(it) {
        if (!isObject(it)) throw TypeError(it + " is not an object!");
        return it;
      };

      /***/
    },

    /***/ ce10: /***/ function(module, exports, __webpack_require__) {
      var has = __webpack_require__("69a8");
      var toIObject = __webpack_require__("6821");
      var arrayIndexOf = __webpack_require__("c366")(false);
      var IE_PROTO = __webpack_require__("613b")("IE_PROTO");

      module.exports = function(object, names) {
        var O = toIObject(object);
        var i = 0;
        var result = [];
        var key;
        for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
        // Don't enum bug & hidden keys
        while (names.length > i)
          if (has(O, (key = names[i++]))) {
            ~arrayIndexOf(result, key) || result.push(key);
          }
        return result;
      };

      /***/
    },

    /***/ cfbc: /***/ function(module, exports, __webpack_require__) {
      exports = module.exports = __webpack_require__("2350")(false);
      // imports

      // module
      exports.push([
        module.i,
        "\n.content-user[data-v-29b101ea]{font-size:14px;height:auto;min-width:350px\n}\n.content-user.small[data-v-29b101ea]{background-position:50%;background-repeat:no-repeat;background-size:cover;min-height:150px;min-width:0;width:100%\n}\n.content-user.small>div>.org-img[data-v-29b101ea]{display:none\n}\n.content-user.small>div>.user-infos[data-v-29b101ea]{padding:15px 0\n}\n.content-user.small>div>.user-infos>div[data-v-29b101ea]{border-bottom-right-radius:0;border-top-right-radius:0\n}\n.content-user>div[data-v-29b101ea]{display:flex;flex-direction:column;height:100%\n}\n.content-user>div>.org-img[data-v-29b101ea]{align-items:center;display:flex;justify-content:center\n}\n@media screen and (min-width:1024px){\n.content-user>div>.org-img[data-v-29b101ea]{margin-top:15%\n}\n}\n.content-user>div>.org-img img[data-v-29b101ea]{border-radius:10px;height:auto;width:270px\n}\n.content-user>div>.user-infos[data-v-29b101ea]{padding:25px 0\n}\n.content-user>div>.user-infos>div[data-v-29b101ea]{align-items:center;background-color:rgba(0,0,0,.7);border-bottom-right-radius:27px;border-top-right-radius:27px;display:flex;height:54px\n}\n.content-user>div>.user-infos>div[data-v-29b101ea] :only-child:not(.user-avatar){display:inline-block;max-width:200px;overflow:hidden;white-space:nowrap\n}\n.content-user>div>.user-infos>div span[data-v-29b101ea]{color:#fff\n}\n.content-user>div>.user-infos>div .user-avatar[data-v-29b101ea]{float:left;margin:0 15px\n}\n.content-user>div>.user-infos>div .user-avatar img[data-v-29b101ea],.content-user>div>.user-infos>div .user-avatar svg[data-v-29b101ea]{border-radius:50%;height:68px;width:68px\n}\n.content-user>div>.user-infos>div .user-avatar svg[data-v-29b101ea]{background-color:#b7b7b7;color:#fff\n}\n.content-user>div>.user-infos>div .wrapper-infos[data-v-29b101ea] :only-child{display:block\n}\n.content-user>div>.user-infos>div .wrapper-infos .user-name[data-v-29b101ea]{font-weight:700\n}\n.content-user>div>.user-infos>div .other-orgs[data-v-29b101ea]{flex:1\n}\n.content-user>div>.user-infos>div .other-orgs>a[data-v-29b101ea]{color:#fff;float:right;margin-right:15px\n}\n.content-user>div>.user-infos>div .other-orgs>a>svg[data-v-29b101ea]{height:24px;width:24px\n}\n.content-user>div>.org-img+.user-infos[data-v-29b101ea]{margin-top:auto\n}",
        ""
      ]);

      // exports

      /***/
    },

    /***/ d090: /***/ function(module, exports, __webpack_require__) {
      /**
       * Swiper 4.3.3
       * Most modern mobile touch slider and framework with hardware accelerated transitions
       * http://www.idangero.us/swiper/
       *
       * Copyright 2014-2018 Vladimir Kharlampidi
       *
       * Released under the MIT License
       *
       * Released on: June 5, 2018
       */

      (function(global, factory) {
        true ? (module.exports = factory()) : undefined;
      })(this, function() {
        "use strict";

        /**
         * SSR Window 1.0.0
         * Better handling for window object in SSR environment
         * https://github.com/nolimits4web/ssr-window
         *
         * Copyright 2018, Vladimir Kharlampidi
         *
         * Licensed under MIT
         *
         * Released on: February 10, 2018
         */
        var d;
        if (typeof document === "undefined") {
          d = {
            body: {},
            addEventListener: function addEventListener() {},
            removeEventListener: function removeEventListener() {},
            activeElement: {
              blur: function blur() {},
              nodeName: ""
            },
            querySelector: function querySelector() {
              return null;
            },
            querySelectorAll: function querySelectorAll() {
              return [];
            },
            getElementById: function getElementById() {
              return null;
            },
            createEvent: function createEvent() {
              return {
                initEvent: function initEvent() {}
              };
            },
            createElement: function createElement() {
              return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function setAttribute() {},
                getElementsByTagName: function getElementsByTagName() {
                  return [];
                }
              };
            },
            location: { hash: "" }
          };
        } else {
          // eslint-disable-next-line
          d = document;
        }

        var doc = d;

        var w;
        if (typeof window === "undefined") {
          w = {
            document: doc,
            navigator: {
              userAgent: ""
            },
            location: {},
            history: {},
            CustomEvent: function CustomEvent() {
              return this;
            },
            addEventListener: function addEventListener() {},
            removeEventListener: function removeEventListener() {},
            getComputedStyle: function getComputedStyle() {
              return {
                getPropertyValue: function getPropertyValue() {
                  return "";
                }
              };
            },
            Image: function Image() {},
            Date: function Date() {},
            screen: {},
            setTimeout: function setTimeout() {},
            clearTimeout: function clearTimeout() {}
          };
        } else {
          // eslint-disable-next-line
          w = window;
        }

        var win = w;

        /**
         * Dom7 2.0.6
         * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
         * http://framework7.io/docs/dom.html
         *
         * Copyright 2018, Vladimir Kharlampidi
         * The iDangero.us
         * http://www.idangero.us/
         *
         * Licensed under MIT
         *
         * Released on: May 27, 2018
         */

        var Dom7 = function Dom7(arr) {
          var self = this;
          // Create array-like object
          for (var i = 0; i < arr.length; i += 1) {
            self[i] = arr[i];
          }
          self.length = arr.length;
          // Return collection with methods
          return this;
        };

        function $(selector, context) {
          var arr = [];
          var i = 0;
          if (selector && !context) {
            if (selector instanceof Dom7) {
              return selector;
            }
          }
          if (selector) {
            // String
            if (typeof selector === "string") {
              var els;
              var tempParent;
              var html = selector.trim();
              if (html.indexOf("<") >= 0 && html.indexOf(">") >= 0) {
                var toCreate = "div";
                if (html.indexOf("<li") === 0) {
                  toCreate = "ul";
                }
                if (html.indexOf("<tr") === 0) {
                  toCreate = "tbody";
                }
                if (html.indexOf("<td") === 0 || html.indexOf("<th") === 0) {
                  toCreate = "tr";
                }
                if (html.indexOf("<tbody") === 0) {
                  toCreate = "table";
                }
                if (html.indexOf("<option") === 0) {
                  toCreate = "select";
                }
                tempParent = doc.createElement(toCreate);
                tempParent.innerHTML = html;
                for (i = 0; i < tempParent.childNodes.length; i += 1) {
                  arr.push(tempParent.childNodes[i]);
                }
              } else {
                if (
                  !context &&
                  selector[0] === "#" &&
                  !selector.match(/[ .<>:~]/)
                ) {
                  // Pure ID selector
                  els = [doc.getElementById(selector.trim().split("#")[1])];
                } else {
                  // Other selectors
                  els = (context || doc).querySelectorAll(selector.trim());
                }
                for (i = 0; i < els.length; i += 1) {
                  if (els[i]) {
                    arr.push(els[i]);
                  }
                }
              }
            } else if (
              selector.nodeType ||
              selector === win ||
              selector === doc
            ) {
              // Node/element
              arr.push(selector);
            } else if (selector.length > 0 && selector[0].nodeType) {
              // Array of elements or instance of Dom
              for (i = 0; i < selector.length; i += 1) {
                arr.push(selector[i]);
              }
            }
          }
          return new Dom7(arr);
        }

        $.fn = Dom7.prototype;
        $.Class = Dom7;
        $.Dom7 = Dom7;

        function unique(arr) {
          var uniqueArray = [];
          for (var i = 0; i < arr.length; i += 1) {
            if (uniqueArray.indexOf(arr[i]) === -1) {
              uniqueArray.push(arr[i]);
            }
          }
          return uniqueArray;
        }

        // Classes and attributes
        function addClass(className) {
          var this$1 = this;

          if (typeof className === "undefined") {
            return this;
          }
          var classes = className.split(" ");
          for (var i = 0; i < classes.length; i += 1) {
            for (var j = 0; j < this.length; j += 1) {
              if (typeof this$1[j].classList !== "undefined") {
                this$1[j].classList.add(classes[i]);
              }
            }
          }
          return this;
        }
        function removeClass(className) {
          var this$1 = this;

          var classes = className.split(" ");
          for (var i = 0; i < classes.length; i += 1) {
            for (var j = 0; j < this.length; j += 1) {
              if (typeof this$1[j].classList !== "undefined") {
                this$1[j].classList.remove(classes[i]);
              }
            }
          }
          return this;
        }
        function hasClass(className) {
          if (!this[0]) {
            return false;
          }
          return this[0].classList.contains(className);
        }
        function toggleClass(className) {
          var this$1 = this;

          var classes = className.split(" ");
          for (var i = 0; i < classes.length; i += 1) {
            for (var j = 0; j < this.length; j += 1) {
              if (typeof this$1[j].classList !== "undefined") {
                this$1[j].classList.toggle(classes[i]);
              }
            }
          }
          return this;
        }
        function attr(attrs, value) {
          var arguments$1 = arguments;
          var this$1 = this;

          if (arguments.length === 1 && typeof attrs === "string") {
            // Get attr
            if (this[0]) {
              return this[0].getAttribute(attrs);
            }
            return undefined;
          }

          // Set attrs
          for (var i = 0; i < this.length; i += 1) {
            if (arguments$1.length === 2) {
              // String
              this$1[i].setAttribute(attrs, value);
            } else {
              // Object
              // eslint-disable-next-line
              for (var attrName in attrs) {
                this$1[i][attrName] = attrs[attrName];
                this$1[i].setAttribute(attrName, attrs[attrName]);
              }
            }
          }
          return this;
        }
        // eslint-disable-next-line
        function removeAttr(attr) {
          var this$1 = this;

          for (var i = 0; i < this.length; i += 1) {
            this$1[i].removeAttribute(attr);
          }
          return this;
        }
        function data(key, value) {
          var this$1 = this;

          var el;
          if (typeof value === "undefined") {
            el = this[0];
            // Get value
            if (el) {
              if (
                el.dom7ElementDataStorage &&
                key in el.dom7ElementDataStorage
              ) {
                return el.dom7ElementDataStorage[key];
              }

              var dataKey = el.getAttribute("data-" + key);
              if (dataKey) {
                return dataKey;
              }
              return undefined;
            }
            return undefined;
          }

          // Set value
          for (var i = 0; i < this.length; i += 1) {
            el = this$1[i];
            if (!el.dom7ElementDataStorage) {
              el.dom7ElementDataStorage = {};
            }
            el.dom7ElementDataStorage[key] = value;
          }
          return this;
        }
        // Transforms
        // eslint-disable-next-line
        function transform(transform) {
          var this$1 = this;

          for (var i = 0; i < this.length; i += 1) {
            var elStyle = this$1[i].style;
            elStyle.webkitTransform = transform;
            elStyle.transform = transform;
          }
          return this;
        }
        function transition(duration) {
          var this$1 = this;

          if (typeof duration !== "string") {
            duration = duration + "ms"; // eslint-disable-line
          }
          for (var i = 0; i < this.length; i += 1) {
            var elStyle = this$1[i].style;
            elStyle.webkitTransitionDuration = duration;
            elStyle.transitionDuration = duration;
          }
          return this;
        }
        // Events
        function on() {
          var this$1 = this;
          var assign;

          var args = [],
            len = arguments.length;
          while (len--) args[len] = arguments[len];
          var eventType = args[0];
          var targetSelector = args[1];
          var listener = args[2];
          var capture = args[3];
          if (typeof args[1] === "function") {
            (assign = args),
              (eventType = assign[0]),
              (listener = assign[1]),
              (capture = assign[2]);
            targetSelector = undefined;
          }
          if (!capture) {
            capture = false;
          }

          function handleLiveEvent(e) {
            var target = e.target;
            if (!target) {
              return;
            }
            var eventData = e.target.dom7EventData || [];
            if (eventData.indexOf(e) < 0) {
              eventData.unshift(e);
            }
            if ($(target).is(targetSelector)) {
              listener.apply(target, eventData);
            } else {
              var parents = $(target).parents(); // eslint-disable-line
              for (var k = 0; k < parents.length; k += 1) {
                if ($(parents[k]).is(targetSelector)) {
                  listener.apply(parents[k], eventData);
                }
              }
            }
          }
          function handleEvent(e) {
            var eventData = e && e.target ? e.target.dom7EventData || [] : [];
            if (eventData.indexOf(e) < 0) {
              eventData.unshift(e);
            }
            listener.apply(this, eventData);
          }
          var events = eventType.split(" ");
          var j;
          for (var i = 0; i < this.length; i += 1) {
            var el = this$1[i];
            if (!targetSelector) {
              for (j = 0; j < events.length; j += 1) {
                var event = events[j];
                if (!el.dom7Listeners) {
                  el.dom7Listeners = {};
                }
                if (!el.dom7Listeners[event]) {
                  el.dom7Listeners[event] = [];
                }
                el.dom7Listeners[event].push({
                  listener: listener,
                  proxyListener: handleEvent
                });
                el.addEventListener(event, handleEvent, capture);
              }
            } else {
              // Live events
              for (j = 0; j < events.length; j += 1) {
                var event$1 = events[j];
                if (!el.dom7LiveListeners) {
                  el.dom7LiveListeners = {};
                }
                if (!el.dom7LiveListeners[event$1]) {
                  el.dom7LiveListeners[event$1] = [];
                }
                el.dom7LiveListeners[event$1].push({
                  listener: listener,
                  proxyListener: handleLiveEvent
                });
                el.addEventListener(event$1, handleLiveEvent, capture);
              }
            }
          }
          return this;
        }
        function off() {
          var this$1 = this;
          var assign;

          var args = [],
            len = arguments.length;
          while (len--) args[len] = arguments[len];
          var eventType = args[0];
          var targetSelector = args[1];
          var listener = args[2];
          var capture = args[3];
          if (typeof args[1] === "function") {
            (assign = args),
              (eventType = assign[0]),
              (listener = assign[1]),
              (capture = assign[2]);
            targetSelector = undefined;
          }
          if (!capture) {
            capture = false;
          }

          var events = eventType.split(" ");
          for (var i = 0; i < events.length; i += 1) {
            var event = events[i];
            for (var j = 0; j < this.length; j += 1) {
              var el = this$1[j];
              var handlers = void 0;
              if (!targetSelector && el.dom7Listeners) {
                handlers = el.dom7Listeners[event];
              } else if (targetSelector && el.dom7LiveListeners) {
                handlers = el.dom7LiveListeners[event];
              }
              if (handlers && handlers.length) {
                for (var k = handlers.length - 1; k >= 0; k -= 1) {
                  var handler = handlers[k];
                  if (listener && handler.listener === listener) {
                    el.removeEventListener(
                      event,
                      handler.proxyListener,
                      capture
                    );
                    handlers.splice(k, 1);
                  } else if (!listener) {
                    el.removeEventListener(
                      event,
                      handler.proxyListener,
                      capture
                    );
                    handlers.splice(k, 1);
                  }
                }
              }
            }
          }
          return this;
        }
        function trigger() {
          var this$1 = this;
          var args = [],
            len = arguments.length;
          while (len--) args[len] = arguments[len];

          var events = args[0].split(" ");
          var eventData = args[1];
          for (var i = 0; i < events.length; i += 1) {
            var event = events[i];
            for (var j = 0; j < this.length; j += 1) {
              var el = this$1[j];
              var evt = void 0;
              try {
                evt = new win.CustomEvent(event, {
                  detail: eventData,
                  bubbles: true,
                  cancelable: true
                });
              } catch (e) {
                evt = doc.createEvent("Event");
                evt.initEvent(event, true, true);
                evt.detail = eventData;
              }
              // eslint-disable-next-line
              el.dom7EventData = args.filter(function(data, dataIndex) {
                return dataIndex > 0;
              });
              el.dispatchEvent(evt);
              el.dom7EventData = [];
              delete el.dom7EventData;
            }
          }
          return this;
        }
        function transitionEnd(callback) {
          var events = ["webkitTransitionEnd", "transitionend"];
          var dom = this;
          var i;
          function fireCallBack(e) {
            /* jshint validthis:true */
            if (e.target !== this) {
              return;
            }
            callback.call(this, e);
            for (i = 0; i < events.length; i += 1) {
              dom.off(events[i], fireCallBack);
            }
          }
          if (callback) {
            for (i = 0; i < events.length; i += 1) {
              dom.on(events[i], fireCallBack);
            }
          }
          return this;
        }
        function outerWidth(includeMargins) {
          if (this.length > 0) {
            if (includeMargins) {
              // eslint-disable-next-line
              var styles = this.styles();
              return (
                this[0].offsetWidth +
                parseFloat(styles.getPropertyValue("margin-right")) +
                parseFloat(styles.getPropertyValue("margin-left"))
              );
            }
            return this[0].offsetWidth;
          }
          return null;
        }
        function outerHeight(includeMargins) {
          if (this.length > 0) {
            if (includeMargins) {
              // eslint-disable-next-line
              var styles = this.styles();
              return (
                this[0].offsetHeight +
                parseFloat(styles.getPropertyValue("margin-top")) +
                parseFloat(styles.getPropertyValue("margin-bottom"))
              );
            }
            return this[0].offsetHeight;
          }
          return null;
        }
        function offset() {
          if (this.length > 0) {
            var el = this[0];
            var box = el.getBoundingClientRect();
            var body = doc.body;
            var clientTop = el.clientTop || body.clientTop || 0;
            var clientLeft = el.clientLeft || body.clientLeft || 0;
            var scrollTop = el === win ? win.scrollY : el.scrollTop;
            var scrollLeft = el === win ? win.scrollX : el.scrollLeft;
            return {
              top: box.top + scrollTop - clientTop,
              left: box.left + scrollLeft - clientLeft
            };
          }

          return null;
        }
        function styles() {
          if (this[0]) {
            return win.getComputedStyle(this[0], null);
          }
          return {};
        }
        function css(props, value) {
          var this$1 = this;

          var i;
          if (arguments.length === 1) {
            if (typeof props === "string") {
              if (this[0]) {
                return win
                  .getComputedStyle(this[0], null)
                  .getPropertyValue(props);
              }
            } else {
              for (i = 0; i < this.length; i += 1) {
                // eslint-disable-next-line
                for (var prop in props) {
                  this$1[i].style[prop] = props[prop];
                }
              }
              return this;
            }
          }
          if (arguments.length === 2 && typeof props === "string") {
            for (i = 0; i < this.length; i += 1) {
              this$1[i].style[props] = value;
            }
            return this;
          }
          return this;
        }
        // Iterate over the collection passing elements to `callback`
        function each(callback) {
          var this$1 = this;

          // Don't bother continuing without a callback
          if (!callback) {
            return this;
          }
          // Iterate over the current collection
          for (var i = 0; i < this.length; i += 1) {
            // If the callback returns false
            if (callback.call(this$1[i], i, this$1[i]) === false) {
              // End the loop early
              return this$1;
            }
          }
          // Return `this` to allow chained DOM operations
          return this;
        }
        // eslint-disable-next-line
        function html(html) {
          var this$1 = this;

          if (typeof html === "undefined") {
            return this[0] ? this[0].innerHTML : undefined;
          }

          for (var i = 0; i < this.length; i += 1) {
            this$1[i].innerHTML = html;
          }
          return this;
        }
        // eslint-disable-next-line
        function text(text) {
          var this$1 = this;

          if (typeof text === "undefined") {
            if (this[0]) {
              return this[0].textContent.trim();
            }
            return null;
          }

          for (var i = 0; i < this.length; i += 1) {
            this$1[i].textContent = text;
          }
          return this;
        }
        function is(selector) {
          var el = this[0];
          var compareWith;
          var i;
          if (!el || typeof selector === "undefined") {
            return false;
          }
          if (typeof selector === "string") {
            if (el.matches) {
              return el.matches(selector);
            } else if (el.webkitMatchesSelector) {
              return el.webkitMatchesSelector(selector);
            } else if (el.msMatchesSelector) {
              return el.msMatchesSelector(selector);
            }

            compareWith = $(selector);
            for (i = 0; i < compareWith.length; i += 1) {
              if (compareWith[i] === el) {
                return true;
              }
            }
            return false;
          } else if (selector === doc) {
            return el === doc;
          } else if (selector === win) {
            return el === win;
          }

          if (selector.nodeType || selector instanceof Dom7) {
            compareWith = selector.nodeType ? [selector] : selector;
            for (i = 0; i < compareWith.length; i += 1) {
              if (compareWith[i] === el) {
                return true;
              }
            }
            return false;
          }
          return false;
        }
        function index() {
          var child = this[0];
          var i;
          if (child) {
            i = 0;
            // eslint-disable-next-line
            while ((child = child.previousSibling) !== null) {
              if (child.nodeType === 1) {
                i += 1;
              }
            }
            return i;
          }
          return undefined;
        }
        // eslint-disable-next-line
        function eq(index) {
          if (typeof index === "undefined") {
            return this;
          }
          var length = this.length;
          var returnIndex;
          if (index > length - 1) {
            return new Dom7([]);
          }
          if (index < 0) {
            returnIndex = length + index;
            if (returnIndex < 0) {
              return new Dom7([]);
            }
            return new Dom7([this[returnIndex]]);
          }
          return new Dom7([this[index]]);
        }
        function append() {
          var this$1 = this;
          var args = [],
            len = arguments.length;
          while (len--) args[len] = arguments[len];

          var newChild;

          for (var k = 0; k < args.length; k += 1) {
            newChild = args[k];
            for (var i = 0; i < this.length; i += 1) {
              if (typeof newChild === "string") {
                var tempDiv = doc.createElement("div");
                tempDiv.innerHTML = newChild;
                while (tempDiv.firstChild) {
                  this$1[i].appendChild(tempDiv.firstChild);
                }
              } else if (newChild instanceof Dom7) {
                for (var j = 0; j < newChild.length; j += 1) {
                  this$1[i].appendChild(newChild[j]);
                }
              } else {
                this$1[i].appendChild(newChild);
              }
            }
          }

          return this;
        }
        function prepend(newChild) {
          var this$1 = this;

          var i;
          var j;
          for (i = 0; i < this.length; i += 1) {
            if (typeof newChild === "string") {
              var tempDiv = doc.createElement("div");
              tempDiv.innerHTML = newChild;
              for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
                this$1[i].insertBefore(
                  tempDiv.childNodes[j],
                  this$1[i].childNodes[0]
                );
              }
            } else if (newChild instanceof Dom7) {
              for (j = 0; j < newChild.length; j += 1) {
                this$1[i].insertBefore(newChild[j], this$1[i].childNodes[0]);
              }
            } else {
              this$1[i].insertBefore(newChild, this$1[i].childNodes[0]);
            }
          }
          return this;
        }
        function next(selector) {
          if (this.length > 0) {
            if (selector) {
              if (
                this[0].nextElementSibling &&
                $(this[0].nextElementSibling).is(selector)
              ) {
                return new Dom7([this[0].nextElementSibling]);
              }
              return new Dom7([]);
            }

            if (this[0].nextElementSibling) {
              return new Dom7([this[0].nextElementSibling]);
            }
            return new Dom7([]);
          }
          return new Dom7([]);
        }
        function nextAll(selector) {
          var nextEls = [];
          var el = this[0];
          if (!el) {
            return new Dom7([]);
          }
          while (el.nextElementSibling) {
            var next = el.nextElementSibling; // eslint-disable-line
            if (selector) {
              if ($(next).is(selector)) {
                nextEls.push(next);
              }
            } else {
              nextEls.push(next);
            }
            el = next;
          }
          return new Dom7(nextEls);
        }
        function prev(selector) {
          if (this.length > 0) {
            var el = this[0];
            if (selector) {
              if (
                el.previousElementSibling &&
                $(el.previousElementSibling).is(selector)
              ) {
                return new Dom7([el.previousElementSibling]);
              }
              return new Dom7([]);
            }

            if (el.previousElementSibling) {
              return new Dom7([el.previousElementSibling]);
            }
            return new Dom7([]);
          }
          return new Dom7([]);
        }
        function prevAll(selector) {
          var prevEls = [];
          var el = this[0];
          if (!el) {
            return new Dom7([]);
          }
          while (el.previousElementSibling) {
            var prev = el.previousElementSibling; // eslint-disable-line
            if (selector) {
              if ($(prev).is(selector)) {
                prevEls.push(prev);
              }
            } else {
              prevEls.push(prev);
            }
            el = prev;
          }
          return new Dom7(prevEls);
        }
        function parent(selector) {
          var this$1 = this;

          var parents = []; // eslint-disable-line
          for (var i = 0; i < this.length; i += 1) {
            if (this$1[i].parentNode !== null) {
              if (selector) {
                if ($(this$1[i].parentNode).is(selector)) {
                  parents.push(this$1[i].parentNode);
                }
              } else {
                parents.push(this$1[i].parentNode);
              }
            }
          }
          return $(unique(parents));
        }
        function parents(selector) {
          var this$1 = this;

          var parents = []; // eslint-disable-line
          for (var i = 0; i < this.length; i += 1) {
            var parent = this$1[i].parentNode; // eslint-disable-line
            while (parent) {
              if (selector) {
                if ($(parent).is(selector)) {
                  parents.push(parent);
                }
              } else {
                parents.push(parent);
              }
              parent = parent.parentNode;
            }
          }
          return $(unique(parents));
        }
        function closest(selector) {
          var closest = this; // eslint-disable-line
          if (typeof selector === "undefined") {
            return new Dom7([]);
          }
          if (!closest.is(selector)) {
            closest = closest.parents(selector).eq(0);
          }
          return closest;
        }
        function find(selector) {
          var this$1 = this;

          var foundElements = [];
          for (var i = 0; i < this.length; i += 1) {
            var found = this$1[i].querySelectorAll(selector);
            for (var j = 0; j < found.length; j += 1) {
              foundElements.push(found[j]);
            }
          }
          return new Dom7(foundElements);
        }
        function children(selector) {
          var this$1 = this;

          var children = []; // eslint-disable-line
          for (var i = 0; i < this.length; i += 1) {
            var childNodes = this$1[i].childNodes;

            for (var j = 0; j < childNodes.length; j += 1) {
              if (!selector) {
                if (childNodes[j].nodeType === 1) {
                  children.push(childNodes[j]);
                }
              } else if (
                childNodes[j].nodeType === 1 &&
                $(childNodes[j]).is(selector)
              ) {
                children.push(childNodes[j]);
              }
            }
          }
          return new Dom7(unique(children));
        }
        function remove() {
          var this$1 = this;

          for (var i = 0; i < this.length; i += 1) {
            if (this$1[i].parentNode) {
              this$1[i].parentNode.removeChild(this$1[i]);
            }
          }
          return this;
        }
        function add() {
          var args = [],
            len = arguments.length;
          while (len--) args[len] = arguments[len];

          var dom = this;
          var i;
          var j;
          for (i = 0; i < args.length; i += 1) {
            var toAdd = $(args[i]);
            for (j = 0; j < toAdd.length; j += 1) {
              dom[dom.length] = toAdd[j];
              dom.length += 1;
            }
          }
          return dom;
        }

        var Methods = {
          addClass: addClass,
          removeClass: removeClass,
          hasClass: hasClass,
          toggleClass: toggleClass,
          attr: attr,
          removeAttr: removeAttr,
          data: data,
          transform: transform,
          transition: transition,
          on: on,
          off: off,
          trigger: trigger,
          transitionEnd: transitionEnd,
          outerWidth: outerWidth,
          outerHeight: outerHeight,
          offset: offset,
          css: css,
          each: each,
          html: html,
          text: text,
          is: is,
          index: index,
          eq: eq,
          append: append,
          prepend: prepend,
          next: next,
          nextAll: nextAll,
          prev: prev,
          prevAll: prevAll,
          parent: parent,
          parents: parents,
          closest: closest,
          find: find,
          children: children,
          remove: remove,
          add: add,
          styles: styles
        };

        Object.keys(Methods).forEach(function(methodName) {
          $.fn[methodName] = Methods[methodName];
        });

        var Utils = {
          deleteProps: function deleteProps(obj) {
            var object = obj;
            Object.keys(object).forEach(function(key) {
              try {
                object[key] = null;
              } catch (e) {
                // no getter for object
              }
              try {
                delete object[key];
              } catch (e) {
                // something got wrong
              }
            });
          },
          nextTick: function nextTick(callback, delay) {
            if (delay === void 0) delay = 0;

            return setTimeout(callback, delay);
          },
          now: function now() {
            return Date.now();
          },
          getTranslate: function getTranslate(el, axis) {
            if (axis === void 0) axis = "x";

            var matrix;
            var curTransform;
            var transformMatrix;

            var curStyle = win.getComputedStyle(el, null);

            if (win.WebKitCSSMatrix) {
              curTransform = curStyle.transform || curStyle.webkitTransform;
              if (curTransform.split(",").length > 6) {
                curTransform = curTransform
                  .split(", ")
                  .map(function(a) {
                    return a.replace(",", ".");
                  })
                  .join(", ");
              }
              // Some old versions of Webkit choke when 'none' is passed; pass
              // empty string instead in this case
              transformMatrix = new win.WebKitCSSMatrix(
                curTransform === "none" ? "" : curTransform
              );
            } else {
              transformMatrix =
                curStyle.MozTransform ||
                curStyle.OTransform ||
                curStyle.MsTransform ||
                curStyle.msTransform ||
                curStyle.transform ||
                curStyle
                  .getPropertyValue("transform")
                  .replace("translate(", "matrix(1, 0, 0, 1,");
              matrix = transformMatrix.toString().split(",");
            }

            if (axis === "x") {
              // Latest Chrome and webkits Fix
              if (win.WebKitCSSMatrix) {
                curTransform = transformMatrix.m41;
              }
              // Crazy IE10 Matrix
              else if (matrix.length === 16) {
                curTransform = parseFloat(matrix[12]);
              }
              // Normal Browsers
              else {
                curTransform = parseFloat(matrix[4]);
              }
            }
            if (axis === "y") {
              // Latest Chrome and webkits Fix
              if (win.WebKitCSSMatrix) {
                curTransform = transformMatrix.m42;
              }
              // Crazy IE10 Matrix
              else if (matrix.length === 16) {
                curTransform = parseFloat(matrix[13]);
              }
              // Normal Browsers
              else {
                curTransform = parseFloat(matrix[5]);
              }
            }
            return curTransform || 0;
          },
          parseUrlQuery: function parseUrlQuery(url) {
            var query = {};
            var urlToParse = url || win.location.href;
            var i;
            var params;
            var param;
            var length;
            if (typeof urlToParse === "string" && urlToParse.length) {
              urlToParse =
                urlToParse.indexOf("?") > -1
                  ? urlToParse.replace(/\S*\?/, "")
                  : "";
              params = urlToParse.split("&").filter(function(paramsPart) {
                return paramsPart !== "";
              });
              length = params.length;

              for (i = 0; i < length; i += 1) {
                param = params[i].replace(/#\S+/g, "").split("=");
                query[decodeURIComponent(param[0])] =
                  typeof param[1] === "undefined"
                    ? undefined
                    : decodeURIComponent(param[1]) || "";
              }
            }
            return query;
          },
          isObject: function isObject(o) {
            return (
              typeof o === "object" &&
              o !== null &&
              o.constructor &&
              o.constructor === Object
            );
          },
          extend: function extend() {
            var args = [],
              len$1 = arguments.length;
            while (len$1--) args[len$1] = arguments[len$1];

            var to = Object(args[0]);
            for (var i = 1; i < args.length; i += 1) {
              var nextSource = args[i];
              if (nextSource !== undefined && nextSource !== null) {
                var keysArray = Object.keys(Object(nextSource));
                for (
                  var nextIndex = 0, len = keysArray.length;
                  nextIndex < len;
                  nextIndex += 1
                ) {
                  var nextKey = keysArray[nextIndex];
                  var desc = Object.getOwnPropertyDescriptor(
                    nextSource,
                    nextKey
                  );
                  if (desc !== undefined && desc.enumerable) {
                    if (
                      Utils.isObject(to[nextKey]) &&
                      Utils.isObject(nextSource[nextKey])
                    ) {
                      Utils.extend(to[nextKey], nextSource[nextKey]);
                    } else if (
                      !Utils.isObject(to[nextKey]) &&
                      Utils.isObject(nextSource[nextKey])
                    ) {
                      to[nextKey] = {};
                      Utils.extend(to[nextKey], nextSource[nextKey]);
                    } else {
                      to[nextKey] = nextSource[nextKey];
                    }
                  }
                }
              }
            }
            return to;
          }
        };

        var Support = (function Support() {
          var testDiv = doc.createElement("div");
          return {
            touch:
              (win.Modernizr && win.Modernizr.touch === true) ||
              (function checkTouch() {
                return !!(
                  "ontouchstart" in win ||
                  (win.DocumentTouch && doc instanceof win.DocumentTouch)
                );
              })(),

            pointerEvents: !!(win.navigator.pointerEnabled || win.PointerEvent),
            prefixedPointerEvents: !!win.navigator.msPointerEnabled,

            transition: (function checkTransition() {
              var style = testDiv.style;
              return (
                "transition" in style ||
                "webkitTransition" in style ||
                "MozTransition" in style
              );
            })(),
            transforms3d:
              (win.Modernizr && win.Modernizr.csstransforms3d === true) ||
              (function checkTransforms3d() {
                var style = testDiv.style;
                return (
                  "webkitPerspective" in style ||
                  "MozPerspective" in style ||
                  "OPerspective" in style ||
                  "MsPerspective" in style ||
                  "perspective" in style
                );
              })(),

            flexbox: (function checkFlexbox() {
              var style = testDiv.style;
              var styles = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(
                " "
              );
              for (var i = 0; i < styles.length; i += 1) {
                if (styles[i] in style) {
                  return true;
                }
              }
              return false;
            })(),

            observer: (function checkObserver() {
              return (
                "MutationObserver" in win || "WebkitMutationObserver" in win
              );
            })(),

            passiveListener: (function checkPassiveListener() {
              var supportsPassive = false;
              try {
                var opts = Object.defineProperty({}, "passive", {
                  // eslint-disable-next-line
                  get: function get() {
                    supportsPassive = true;
                  }
                });
                win.addEventListener("testPassiveListener", null, opts);
              } catch (e) {
                // No support
              }
              return supportsPassive;
            })(),

            gestures: (function checkGestures() {
              return "ongesturestart" in win;
            })()
          };
        })();

        var SwiperClass = function SwiperClass(params) {
          if (params === void 0) params = {};

          var self = this;
          self.params = params;

          // Events
          self.eventsListeners = {};

          if (self.params && self.params.on) {
            Object.keys(self.params.on).forEach(function(eventName) {
              self.on(eventName, self.params.on[eventName]);
            });
          }
        };

        var staticAccessors = { components: { configurable: true } };
        SwiperClass.prototype.on = function on(events, handler, priority) {
          var self = this;
          if (typeof handler !== "function") {
            return self;
          }
          var method = priority ? "unshift" : "push";
          events.split(" ").forEach(function(event) {
            if (!self.eventsListeners[event]) {
              self.eventsListeners[event] = [];
            }
            self.eventsListeners[event][method](handler);
          });
          return self;
        };
        SwiperClass.prototype.once = function once(events, handler, priority) {
          var self = this;
          if (typeof handler !== "function") {
            return self;
          }
          function onceHandler() {
            var args = [],
              len = arguments.length;
            while (len--) args[len] = arguments[len];

            handler.apply(self, args);
            self.off(events, onceHandler);
          }
          return self.on(events, onceHandler, priority);
        };
        SwiperClass.prototype.off = function off(events, handler) {
          var self = this;
          if (!self.eventsListeners) {
            return self;
          }
          events.split(" ").forEach(function(event) {
            if (typeof handler === "undefined") {
              self.eventsListeners[event] = [];
            } else {
              self.eventsListeners[event].forEach(function(
                eventHandler,
                index
              ) {
                if (eventHandler === handler) {
                  self.eventsListeners[event].splice(index, 1);
                }
              });
            }
          });
          return self;
        };
        SwiperClass.prototype.emit = function emit() {
          var args = [],
            len = arguments.length;
          while (len--) args[len] = arguments[len];

          var self = this;
          if (!self.eventsListeners) {
            return self;
          }
          var events;
          var data;
          var context;
          if (typeof args[0] === "string" || Array.isArray(args[0])) {
            events = args[0];
            data = args.slice(1, args.length);
            context = self;
          } else {
            events = args[0].events;
            data = args[0].data;
            context = args[0].context || self;
          }
          var eventsArray = Array.isArray(events) ? events : events.split(" ");
          eventsArray.forEach(function(event) {
            if (self.eventsListeners && self.eventsListeners[event]) {
              var handlers = [];
              self.eventsListeners[event].forEach(function(eventHandler) {
                handlers.push(eventHandler);
              });
              handlers.forEach(function(eventHandler) {
                eventHandler.apply(context, data);
              });
            }
          });
          return self;
        };
        SwiperClass.prototype.useModulesParams = function useModulesParams(
          instanceParams
        ) {
          var instance = this;
          if (!instance.modules) {
            return;
          }
          Object.keys(instance.modules).forEach(function(moduleName) {
            var module = instance.modules[moduleName];
            // Extend params
            if (module.params) {
              Utils.extend(instanceParams, module.params);
            }
          });
        };
        SwiperClass.prototype.useModules = function useModules(modulesParams) {
          if (modulesParams === void 0) modulesParams = {};

          var instance = this;
          if (!instance.modules) {
            return;
          }
          Object.keys(instance.modules).forEach(function(moduleName) {
            var module = instance.modules[moduleName];
            var moduleParams = modulesParams[moduleName] || {};
            // Extend instance methods and props
            if (module.instance) {
              Object.keys(module.instance).forEach(function(modulePropName) {
                var moduleProp = module.instance[modulePropName];
                if (typeof moduleProp === "function") {
                  instance[modulePropName] = moduleProp.bind(instance);
                } else {
                  instance[modulePropName] = moduleProp;
                }
              });
            }
            // Add event listeners
            if (module.on && instance.on) {
              Object.keys(module.on).forEach(function(moduleEventName) {
                instance.on(moduleEventName, module.on[moduleEventName]);
              });
            }

            // Module create callback
            if (module.create) {
              module.create.bind(instance)(moduleParams);
            }
          });
        };
        staticAccessors.components.set = function(components) {
          var Class = this;
          if (!Class.use) {
            return;
          }
          Class.use(components);
        };
        SwiperClass.installModule = function installModule(module) {
          var params = [],
            len = arguments.length - 1;
          while (len-- > 0) params[len] = arguments[len + 1];

          var Class = this;
          if (!Class.prototype.modules) {
            Class.prototype.modules = {};
          }
          var name =
            module.name ||
            Object.keys(Class.prototype.modules).length + "_" + Utils.now();
          Class.prototype.modules[name] = module;
          // Prototype
          if (module.proto) {
            Object.keys(module.proto).forEach(function(key) {
              Class.prototype[key] = module.proto[key];
            });
          }
          // Class
          if (module.static) {
            Object.keys(module.static).forEach(function(key) {
              Class[key] = module.static[key];
            });
          }
          // Callback
          if (module.install) {
            module.install.apply(Class, params);
          }
          return Class;
        };
        SwiperClass.use = function use(module) {
          var params = [],
            len = arguments.length - 1;
          while (len-- > 0) params[len] = arguments[len + 1];

          var Class = this;
          if (Array.isArray(module)) {
            module.forEach(function(m) {
              return Class.installModule(m);
            });
            return Class;
          }
          return Class.installModule.apply(Class, [module].concat(params));
        };

        Object.defineProperties(SwiperClass, staticAccessors);

        function updateSize() {
          var swiper = this;
          var width;
          var height;
          var $el = swiper.$el;
          if (typeof swiper.params.width !== "undefined") {
            width = swiper.params.width;
          } else {
            width = $el[0].clientWidth;
          }
          if (typeof swiper.params.height !== "undefined") {
            height = swiper.params.height;
          } else {
            height = $el[0].clientHeight;
          }
          if (
            (width === 0 && swiper.isHorizontal()) ||
            (height === 0 && swiper.isVertical())
          ) {
            return;
          }

          // Subtract paddings
          width =
            width -
            parseInt($el.css("padding-left"), 10) -
            parseInt($el.css("padding-right"), 10);
          height =
            height -
            parseInt($el.css("padding-top"), 10) -
            parseInt($el.css("padding-bottom"), 10);

          Utils.extend(swiper, {
            width: width,
            height: height,
            size: swiper.isHorizontal() ? width : height
          });
        }

        function updateSlides() {
          var swiper = this;
          var params = swiper.params;

          var $wrapperEl = swiper.$wrapperEl;
          var swiperSize = swiper.size;
          var rtl = swiper.rtlTranslate;
          var wrongRTL = swiper.wrongRTL;
          var isVirtual = swiper.virtual && params.virtual.enabled;
          var previousSlidesLength = isVirtual
            ? swiper.virtual.slides.length
            : swiper.slides.length;
          var slides = $wrapperEl.children("." + swiper.params.slideClass);
          var slidesLength = isVirtual
            ? swiper.virtual.slides.length
            : slides.length;
          var snapGrid = [];
          var slidesGrid = [];
          var slidesSizesGrid = [];

          var offsetBefore = params.slidesOffsetBefore;
          if (typeof offsetBefore === "function") {
            offsetBefore = params.slidesOffsetBefore.call(swiper);
          }

          var offsetAfter = params.slidesOffsetAfter;
          if (typeof offsetAfter === "function") {
            offsetAfter = params.slidesOffsetAfter.call(swiper);
          }

          var previousSnapGridLength = swiper.snapGrid.length;
          var previousSlidesGridLength = swiper.snapGrid.length;

          var spaceBetween = params.spaceBetween;
          var slidePosition = -offsetBefore;
          var prevSlideSize = 0;
          var index = 0;
          if (typeof swiperSize === "undefined") {
            return;
          }
          if (
            typeof spaceBetween === "string" &&
            spaceBetween.indexOf("%") >= 0
          ) {
            spaceBetween =
              (parseFloat(spaceBetween.replace("%", "")) / 100) * swiperSize;
          }

          swiper.virtualSize = -spaceBetween;

          // reset margins
          if (rtl) {
            slides.css({ marginLeft: "", marginTop: "" });
          } else {
            slides.css({ marginRight: "", marginBottom: "" });
          }

          var slidesNumberEvenToRows;
          if (params.slidesPerColumn > 1) {
            if (
              Math.floor(slidesLength / params.slidesPerColumn) ===
              slidesLength / swiper.params.slidesPerColumn
            ) {
              slidesNumberEvenToRows = slidesLength;
            } else {
              slidesNumberEvenToRows =
                Math.ceil(slidesLength / params.slidesPerColumn) *
                params.slidesPerColumn;
            }
            if (
              params.slidesPerView !== "auto" &&
              params.slidesPerColumnFill === "row"
            ) {
              slidesNumberEvenToRows = Math.max(
                slidesNumberEvenToRows,
                params.slidesPerView * params.slidesPerColumn
              );
            }
          }

          // Calc slides
          var slideSize;
          var slidesPerColumn = params.slidesPerColumn;
          var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
          var numFullColumns =
            slidesPerRow -
            (params.slidesPerColumn * slidesPerRow - slidesLength);
          for (var i = 0; i < slidesLength; i += 1) {
            slideSize = 0;
            var slide = slides.eq(i);
            if (params.slidesPerColumn > 1) {
              // Set slides order
              var newSlideOrderIndex = void 0;
              var column = void 0;
              var row = void 0;
              if (params.slidesPerColumnFill === "column") {
                column = Math.floor(i / slidesPerColumn);
                row = i - column * slidesPerColumn;
                if (
                  column > numFullColumns ||
                  (column === numFullColumns && row === slidesPerColumn - 1)
                ) {
                  row += 1;
                  if (row >= slidesPerColumn) {
                    row = 0;
                    column += 1;
                  }
                }
                newSlideOrderIndex =
                  column + (row * slidesNumberEvenToRows) / slidesPerColumn;
                slide.css({
                  "-webkit-box-ordinal-group": newSlideOrderIndex,
                  "-moz-box-ordinal-group": newSlideOrderIndex,
                  "-ms-flex-order": newSlideOrderIndex,
                  "-webkit-order": newSlideOrderIndex,
                  order: newSlideOrderIndex
                });
              } else {
                row = Math.floor(i / slidesPerRow);
                column = i - row * slidesPerRow;
              }
              slide
                .css(
                  "margin-" + (swiper.isHorizontal() ? "top" : "left"),
                  row !== 0 && params.spaceBetween && params.spaceBetween + "px"
                )
                .attr("data-swiper-column", column)
                .attr("data-swiper-row", row);
            }
            if (slide.css("display") === "none") {
              continue;
            } // eslint-disable-line

            if (params.slidesPerView === "auto") {
              var slideStyles = win.getComputedStyle(slide[0], null);
              var currentTransform = slide[0].style.transform;
              var currentWebKitTransform = slide[0].style.webkitTransform;
              if (currentTransform) {
                slide[0].style.transform = "none";
              }
              if (currentWebKitTransform) {
                slide[0].style.webkitTransform = "none";
              }
              if (swiper.isHorizontal()) {
                slideSize =
                  slide[0].getBoundingClientRect().width +
                  parseFloat(slideStyles.getPropertyValue("margin-left")) +
                  parseFloat(slideStyles.getPropertyValue("margin-right"));
              } else {
                slideSize =
                  slide[0].getBoundingClientRect().height +
                  parseFloat(slideStyles.getPropertyValue("margin-top")) +
                  parseFloat(slideStyles.getPropertyValue("margin-bottom"));
              }
              if (currentTransform) {
                slide[0].style.transform = currentTransform;
              }
              if (currentWebKitTransform) {
                slide[0].style.webkitTransform = currentWebKitTransform;
              }
              if (params.roundLengths) {
                slideSize = Math.floor(slideSize);
              }
            } else {
              slideSize =
                (swiperSize - (params.slidesPerView - 1) * spaceBetween) /
                params.slidesPerView;
              if (params.roundLengths) {
                slideSize = Math.floor(slideSize);
              }

              if (slides[i]) {
                if (swiper.isHorizontal()) {
                  slides[i].style.width = slideSize + "px";
                } else {
                  slides[i].style.height = slideSize + "px";
                }
              }
            }
            if (slides[i]) {
              slides[i].swiperSlideSize = slideSize;
            }
            slidesSizesGrid.push(slideSize);

            if (params.centeredSlides) {
              slidePosition =
                slidePosition +
                slideSize / 2 +
                prevSlideSize / 2 +
                spaceBetween;
              if (prevSlideSize === 0 && i !== 0) {
                slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
              }
              if (i === 0) {
                slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
              }
              if (Math.abs(slidePosition) < 1 / 1000) {
                slidePosition = 0;
              }
              if (params.roundLengths) {
                slidePosition = Math.floor(slidePosition);
              }
              if (index % params.slidesPerGroup === 0) {
                snapGrid.push(slidePosition);
              }
              slidesGrid.push(slidePosition);
            } else {
              if (params.roundLengths) {
                slidePosition = Math.floor(slidePosition);
              }
              if (index % params.slidesPerGroup === 0) {
                snapGrid.push(slidePosition);
              }
              slidesGrid.push(slidePosition);
              slidePosition = slidePosition + slideSize + spaceBetween;
            }

            swiper.virtualSize += slideSize + spaceBetween;

            prevSlideSize = slideSize;

            index += 1;
          }
          swiper.virtualSize =
            Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
          var newSlidesGrid;

          if (
            rtl &&
            wrongRTL &&
            (params.effect === "slide" || params.effect === "coverflow")
          ) {
            $wrapperEl.css({
              width: swiper.virtualSize + params.spaceBetween + "px"
            });
          }
          if (!Support.flexbox || params.setWrapperSize) {
            if (swiper.isHorizontal()) {
              $wrapperEl.css({
                width: swiper.virtualSize + params.spaceBetween + "px"
              });
            } else {
              $wrapperEl.css({
                height: swiper.virtualSize + params.spaceBetween + "px"
              });
            }
          }

          if (params.slidesPerColumn > 1) {
            swiper.virtualSize =
              (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
            swiper.virtualSize =
              Math.ceil(swiper.virtualSize / params.slidesPerColumn) -
              params.spaceBetween;
            if (swiper.isHorizontal()) {
              $wrapperEl.css({
                width: swiper.virtualSize + params.spaceBetween + "px"
              });
            } else {
              $wrapperEl.css({
                height: swiper.virtualSize + params.spaceBetween + "px"
              });
            }
            if (params.centeredSlides) {
              newSlidesGrid = [];
              for (var i$1 = 0; i$1 < snapGrid.length; i$1 += 1) {
                var slidesGridItem = snapGrid[i$1];
                if (params.roundLengths) {
                  slidesGridItem = Math.floor(slidesGridItem);
                }
                if (snapGrid[i$1] < swiper.virtualSize + snapGrid[0]) {
                  newSlidesGrid.push(slidesGridItem);
                }
              }
              snapGrid = newSlidesGrid;
            }
          }

          // Remove last grid elements depending on width
          if (!params.centeredSlides) {
            newSlidesGrid = [];
            for (var i$2 = 0; i$2 < snapGrid.length; i$2 += 1) {
              var slidesGridItem$1 = snapGrid[i$2];
              if (params.roundLengths) {
                slidesGridItem$1 = Math.floor(slidesGridItem$1);
              }
              if (snapGrid[i$2] <= swiper.virtualSize - swiperSize) {
                newSlidesGrid.push(slidesGridItem$1);
              }
            }
            snapGrid = newSlidesGrid;
            if (
              Math.floor(swiper.virtualSize - swiperSize) -
                Math.floor(snapGrid[snapGrid.length - 1]) >
              1
            ) {
              snapGrid.push(swiper.virtualSize - swiperSize);
            }
          }
          if (snapGrid.length === 0) {
            snapGrid = [0];
          }

          if (params.spaceBetween !== 0) {
            if (swiper.isHorizontal()) {
              if (rtl) {
                slides.css({ marginLeft: spaceBetween + "px" });
              } else {
                slides.css({ marginRight: spaceBetween + "px" });
              }
            } else {
              slides.css({ marginBottom: spaceBetween + "px" });
            }
          }

          Utils.extend(swiper, {
            slides: slides,
            snapGrid: snapGrid,
            slidesGrid: slidesGrid,
            slidesSizesGrid: slidesSizesGrid
          });

          if (slidesLength !== previousSlidesLength) {
            swiper.emit("slidesLengthChange");
          }
          if (snapGrid.length !== previousSnapGridLength) {
            if (swiper.params.watchOverflow) {
              swiper.checkOverflow();
            }
            swiper.emit("snapGridLengthChange");
          }
          if (slidesGrid.length !== previousSlidesGridLength) {
            swiper.emit("slidesGridLengthChange");
          }

          if (params.watchSlidesProgress || params.watchSlidesVisibility) {
            swiper.updateSlidesOffset();
          }
        }

        function updateAutoHeight(speed) {
          var swiper = this;
          var activeSlides = [];
          var newHeight = 0;
          var i;
          if (typeof speed === "number") {
            swiper.setTransition(speed);
          } else if (speed === true) {
            swiper.setTransition(swiper.params.speed);
          }
          // Find slides currently in view
          if (
            swiper.params.slidesPerView !== "auto" &&
            swiper.params.slidesPerView > 1
          ) {
            for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
              var index = swiper.activeIndex + i;
              if (index > swiper.slides.length) {
                break;
              }
              activeSlides.push(swiper.slides.eq(index)[0]);
            }
          } else {
            activeSlides.push(swiper.slides.eq(swiper.activeIndex)[0]);
          }

          // Find new height from highest slide in view
          for (i = 0; i < activeSlides.length; i += 1) {
            if (typeof activeSlides[i] !== "undefined") {
              var height = activeSlides[i].offsetHeight;
              newHeight = height > newHeight ? height : newHeight;
            }
          }

          // Update Height
          if (newHeight) {
            swiper.$wrapperEl.css("height", newHeight + "px");
          }
        }

        function updateSlidesOffset() {
          var swiper = this;
          var slides = swiper.slides;
          for (var i = 0; i < slides.length; i += 1) {
            slides[i].swiperSlideOffset = swiper.isHorizontal()
              ? slides[i].offsetLeft
              : slides[i].offsetTop;
          }
        }

        function updateSlidesProgress(translate) {
          if (translate === void 0) translate = (this && this.translate) || 0;

          var swiper = this;
          var params = swiper.params;

          var slides = swiper.slides;
          var rtl = swiper.rtlTranslate;

          if (slides.length === 0) {
            return;
          }
          if (typeof slides[0].swiperSlideOffset === "undefined") {
            swiper.updateSlidesOffset();
          }

          var offsetCenter = -translate;
          if (rtl) {
            offsetCenter = translate;
          }

          // Visible Slides
          slides.removeClass(params.slideVisibleClass);

          for (var i = 0; i < slides.length; i += 1) {
            var slide = slides[i];
            var slideProgress =
              (offsetCenter +
                (params.centeredSlides ? swiper.minTranslate() : 0) -
                slide.swiperSlideOffset) /
              (slide.swiperSlideSize + params.spaceBetween);
            if (params.watchSlidesVisibility) {
              var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
              var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
              var isVisible =
                (slideBefore >= 0 && slideBefore < swiper.size) ||
                (slideAfter > 0 && slideAfter <= swiper.size) ||
                (slideBefore <= 0 && slideAfter >= swiper.size);
              if (isVisible) {
                slides.eq(i).addClass(params.slideVisibleClass);
              }
            }
            slide.progress = rtl ? -slideProgress : slideProgress;
          }
        }

        function updateProgress(translate) {
          if (translate === void 0) translate = (this && this.translate) || 0;

          var swiper = this;
          var params = swiper.params;

          var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
          var progress = swiper.progress;
          var isBeginning = swiper.isBeginning;
          var isEnd = swiper.isEnd;
          var wasBeginning = isBeginning;
          var wasEnd = isEnd;
          if (translatesDiff === 0) {
            progress = 0;
            isBeginning = true;
            isEnd = true;
          } else {
            progress = (translate - swiper.minTranslate()) / translatesDiff;
            isBeginning = progress <= 0;
            isEnd = progress >= 1;
          }
          Utils.extend(swiper, {
            progress: progress,
            isBeginning: isBeginning,
            isEnd: isEnd
          });

          if (params.watchSlidesProgress || params.watchSlidesVisibility) {
            swiper.updateSlidesProgress(translate);
          }

          if (isBeginning && !wasBeginning) {
            swiper.emit("reachBeginning toEdge");
          }
          if (isEnd && !wasEnd) {
            swiper.emit("reachEnd toEdge");
          }
          if ((wasBeginning && !isBeginning) || (wasEnd && !isEnd)) {
            swiper.emit("fromEdge");
          }

          swiper.emit("progress", progress);
        }

        function updateSlidesClasses() {
          var swiper = this;

          var slides = swiper.slides;
          var params = swiper.params;
          var $wrapperEl = swiper.$wrapperEl;
          var activeIndex = swiper.activeIndex;
          var realIndex = swiper.realIndex;
          var isVirtual = swiper.virtual && params.virtual.enabled;

          slides.removeClass(
            params.slideActiveClass +
              " " +
              params.slideNextClass +
              " " +
              params.slidePrevClass +
              " " +
              params.slideDuplicateActiveClass +
              " " +
              params.slideDuplicateNextClass +
              " " +
              params.slideDuplicatePrevClass
          );

          var activeSlide;
          if (isVirtual) {
            activeSlide = swiper.$wrapperEl.find(
              "." +
                params.slideClass +
                '[data-swiper-slide-index="' +
                activeIndex +
                '"]'
            );
          } else {
            activeSlide = slides.eq(activeIndex);
          }

          // Active classes
          activeSlide.addClass(params.slideActiveClass);

          if (params.loop) {
            // Duplicate to all looped slides
            if (activeSlide.hasClass(params.slideDuplicateClass)) {
              $wrapperEl
                .children(
                  "." +
                    params.slideClass +
                    ":not(." +
                    params.slideDuplicateClass +
                    ')[data-swiper-slide-index="' +
                    realIndex +
                    '"]'
                )
                .addClass(params.slideDuplicateActiveClass);
            } else {
              $wrapperEl
                .children(
                  "." +
                    params.slideClass +
                    "." +
                    params.slideDuplicateClass +
                    '[data-swiper-slide-index="' +
                    realIndex +
                    '"]'
                )
                .addClass(params.slideDuplicateActiveClass);
            }
          }
          // Next Slide
          var nextSlide = activeSlide
            .nextAll("." + params.slideClass)
            .eq(0)
            .addClass(params.slideNextClass);
          if (params.loop && nextSlide.length === 0) {
            nextSlide = slides.eq(0);
            nextSlide.addClass(params.slideNextClass);
          }
          // Prev Slide
          var prevSlide = activeSlide
            .prevAll("." + params.slideClass)
            .eq(0)
            .addClass(params.slidePrevClass);
          if (params.loop && prevSlide.length === 0) {
            prevSlide = slides.eq(-1);
            prevSlide.addClass(params.slidePrevClass);
          }
          if (params.loop) {
            // Duplicate to all looped slides
            if (nextSlide.hasClass(params.slideDuplicateClass)) {
              $wrapperEl
                .children(
                  "." +
                    params.slideClass +
                    ":not(." +
                    params.slideDuplicateClass +
                    ')[data-swiper-slide-index="' +
                    nextSlide.attr("data-swiper-slide-index") +
                    '"]'
                )
                .addClass(params.slideDuplicateNextClass);
            } else {
              $wrapperEl
                .children(
                  "." +
                    params.slideClass +
                    "." +
                    params.slideDuplicateClass +
                    '[data-swiper-slide-index="' +
                    nextSlide.attr("data-swiper-slide-index") +
                    '"]'
                )
                .addClass(params.slideDuplicateNextClass);
            }
            if (prevSlide.hasClass(params.slideDuplicateClass)) {
              $wrapperEl
                .children(
                  "." +
                    params.slideClass +
                    ":not(." +
                    params.slideDuplicateClass +
                    ')[data-swiper-slide-index="' +
                    prevSlide.attr("data-swiper-slide-index") +
                    '"]'
                )
                .addClass(params.slideDuplicatePrevClass);
            } else {
              $wrapperEl
                .children(
                  "." +
                    params.slideClass +
                    "." +
                    params.slideDuplicateClass +
                    '[data-swiper-slide-index="' +
                    prevSlide.attr("data-swiper-slide-index") +
                    '"]'
                )
                .addClass(params.slideDuplicatePrevClass);
            }
          }
        }

        function updateActiveIndex(newActiveIndex) {
          var swiper = this;
          var translate = swiper.rtlTranslate
            ? swiper.translate
            : -swiper.translate;
          var slidesGrid = swiper.slidesGrid;
          var snapGrid = swiper.snapGrid;
          var params = swiper.params;
          var previousIndex = swiper.activeIndex;
          var previousRealIndex = swiper.realIndex;
          var previousSnapIndex = swiper.snapIndex;
          var activeIndex = newActiveIndex;
          var snapIndex;
          if (typeof activeIndex === "undefined") {
            for (var i = 0; i < slidesGrid.length; i += 1) {
              if (typeof slidesGrid[i + 1] !== "undefined") {
                if (
                  translate >= slidesGrid[i] &&
                  translate <
                    slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2
                ) {
                  activeIndex = i;
                } else if (
                  translate >= slidesGrid[i] &&
                  translate < slidesGrid[i + 1]
                ) {
                  activeIndex = i + 1;
                }
              } else if (translate >= slidesGrid[i]) {
                activeIndex = i;
              }
            }
            // Normalize slideIndex
            if (params.normalizeSlideIndex) {
              if (activeIndex < 0 || typeof activeIndex === "undefined") {
                activeIndex = 0;
              }
            }
          }
          if (snapGrid.indexOf(translate) >= 0) {
            snapIndex = snapGrid.indexOf(translate);
          } else {
            snapIndex = Math.floor(activeIndex / params.slidesPerGroup);
          }
          if (snapIndex >= snapGrid.length) {
            snapIndex = snapGrid.length - 1;
          }
          if (activeIndex === previousIndex) {
            if (snapIndex !== previousSnapIndex) {
              swiper.snapIndex = snapIndex;
              swiper.emit("snapIndexChange");
            }
            return;
          }

          // Get real index
          var realIndex = parseInt(
            swiper.slides.eq(activeIndex).attr("data-swiper-slide-index") ||
              activeIndex,
            10
          );

          Utils.extend(swiper, {
            snapIndex: snapIndex,
            realIndex: realIndex,
            previousIndex: previousIndex,
            activeIndex: activeIndex
          });
          swiper.emit("activeIndexChange");
          swiper.emit("snapIndexChange");
          if (previousRealIndex !== realIndex) {
            swiper.emit("realIndexChange");
          }
          swiper.emit("slideChange");
        }

        function updateClickedSlide(e) {
          var swiper = this;
          var params = swiper.params;
          var slide = $(e.target).closest("." + params.slideClass)[0];
          var slideFound = false;
          if (slide) {
            for (var i = 0; i < swiper.slides.length; i += 1) {
              if (swiper.slides[i] === slide) {
                slideFound = true;
              }
            }
          }

          if (slide && slideFound) {
            swiper.clickedSlide = slide;
            if (swiper.virtual && swiper.params.virtual.enabled) {
              swiper.clickedIndex = parseInt(
                $(slide).attr("data-swiper-slide-index"),
                10
              );
            } else {
              swiper.clickedIndex = $(slide).index();
            }
          } else {
            swiper.clickedSlide = undefined;
            swiper.clickedIndex = undefined;
            return;
          }
          if (
            params.slideToClickedSlide &&
            swiper.clickedIndex !== undefined &&
            swiper.clickedIndex !== swiper.activeIndex
          ) {
            swiper.slideToClickedSlide();
          }
        }

        var update = {
          updateSize: updateSize,
          updateSlides: updateSlides,
          updateAutoHeight: updateAutoHeight,
          updateSlidesOffset: updateSlidesOffset,
          updateSlidesProgress: updateSlidesProgress,
          updateProgress: updateProgress,
          updateSlidesClasses: updateSlidesClasses,
          updateActiveIndex: updateActiveIndex,
          updateClickedSlide: updateClickedSlide
        };

        function getTranslate(axis) {
          if (axis === void 0) axis = this.isHorizontal() ? "x" : "y";

          var swiper = this;

          var params = swiper.params;
          var rtl = swiper.rtlTranslate;
          var translate = swiper.translate;
          var $wrapperEl = swiper.$wrapperEl;

          if (params.virtualTranslate) {
            return rtl ? -translate : translate;
          }

          var currentTranslate = Utils.getTranslate($wrapperEl[0], axis);
          if (rtl) {
            currentTranslate = -currentTranslate;
          }

          return currentTranslate || 0;
        }

        function setTranslate(translate, byController) {
          var swiper = this;
          var rtl = swiper.rtlTranslate;
          var params = swiper.params;
          var $wrapperEl = swiper.$wrapperEl;
          var progress = swiper.progress;
          var x = 0;
          var y = 0;
          var z = 0;

          if (swiper.isHorizontal()) {
            x = rtl ? -translate : translate;
          } else {
            y = translate;
          }

          if (params.roundLengths) {
            x = Math.floor(x);
            y = Math.floor(y);
          }

          if (!params.virtualTranslate) {
            if (Support.transforms3d) {
              $wrapperEl.transform(
                "translate3d(" + x + "px, " + y + "px, " + z + "px)"
              );
            } else {
              $wrapperEl.transform("translate(" + x + "px, " + y + "px)");
            }
          }
          swiper.previousTranslate = swiper.translate;
          swiper.translate = swiper.isHorizontal() ? x : y;

          // Check if we need to update progress
          var newProgress;
          var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
          if (translatesDiff === 0) {
            newProgress = 0;
          } else {
            newProgress = (translate - swiper.minTranslate()) / translatesDiff;
          }
          if (newProgress !== progress) {
            swiper.updateProgress(translate);
          }

          swiper.emit("setTranslate", swiper.translate, byController);
        }

        function minTranslate() {
          return -this.snapGrid[0];
        }

        function maxTranslate() {
          return -this.snapGrid[this.snapGrid.length - 1];
        }

        var translate = {
          getTranslate: getTranslate,
          setTranslate: setTranslate,
          minTranslate: minTranslate,
          maxTranslate: maxTranslate
        };

        function setTransition(duration, byController) {
          var swiper = this;

          swiper.$wrapperEl.transition(duration);

          swiper.emit("setTransition", duration, byController);
        }

        function transitionStart(runCallbacks, direction) {
          if (runCallbacks === void 0) runCallbacks = true;

          var swiper = this;
          var activeIndex = swiper.activeIndex;
          var params = swiper.params;
          var previousIndex = swiper.previousIndex;
          if (params.autoHeight) {
            swiper.updateAutoHeight();
          }

          var dir = direction;
          if (!dir) {
            if (activeIndex > previousIndex) {
              dir = "next";
            } else if (activeIndex < previousIndex) {
              dir = "prev";
            } else {
              dir = "reset";
            }
          }

          swiper.emit("transitionStart");

          if (runCallbacks && activeIndex !== previousIndex) {
            if (dir === "reset") {
              swiper.emit("slideResetTransitionStart");
              return;
            }
            swiper.emit("slideChangeTransitionStart");
            if (dir === "next") {
              swiper.emit("slideNextTransitionStart");
            } else {
              swiper.emit("slidePrevTransitionStart");
            }
          }
        }

        function transitionEnd$1(runCallbacks, direction) {
          if (runCallbacks === void 0) runCallbacks = true;

          var swiper = this;
          var activeIndex = swiper.activeIndex;
          var previousIndex = swiper.previousIndex;
          swiper.animating = false;
          swiper.setTransition(0);

          var dir = direction;
          if (!dir) {
            if (activeIndex > previousIndex) {
              dir = "next";
            } else if (activeIndex < previousIndex) {
              dir = "prev";
            } else {
              dir = "reset";
            }
          }

          swiper.emit("transitionEnd");

          if (runCallbacks && activeIndex !== previousIndex) {
            if (dir === "reset") {
              swiper.emit("slideResetTransitionEnd");
              return;
            }
            swiper.emit("slideChangeTransitionEnd");
            if (dir === "next") {
              swiper.emit("slideNextTransitionEnd");
            } else {
              swiper.emit("slidePrevTransitionEnd");
            }
          }
        }

        var transition$1 = {
          setTransition: setTransition,
          transitionStart: transitionStart,
          transitionEnd: transitionEnd$1
        };

        function slideTo(index, speed, runCallbacks, internal) {
          if (index === void 0) index = 0;
          if (speed === void 0) speed = this.params.speed;
          if (runCallbacks === void 0) runCallbacks = true;

          var swiper = this;
          var slideIndex = index;
          if (slideIndex < 0) {
            slideIndex = 0;
          }

          var params = swiper.params;
          var snapGrid = swiper.snapGrid;
          var slidesGrid = swiper.slidesGrid;
          var previousIndex = swiper.previousIndex;
          var activeIndex = swiper.activeIndex;
          var rtl = swiper.rtlTranslate;
          if (swiper.animating && params.preventIntercationOnTransition) {
            return false;
          }

          var snapIndex = Math.floor(slideIndex / params.slidesPerGroup);
          if (snapIndex >= snapGrid.length) {
            snapIndex = snapGrid.length - 1;
          }

          if (
            (activeIndex || params.initialSlide || 0) ===
              (previousIndex || 0) &&
            runCallbacks
          ) {
            swiper.emit("beforeSlideChangeStart");
          }

          var translate = -snapGrid[snapIndex];

          // Update progress
          swiper.updateProgress(translate);

          // Normalize slideIndex
          if (params.normalizeSlideIndex) {
            for (var i = 0; i < slidesGrid.length; i += 1) {
              if (
                -Math.floor(translate * 100) >= Math.floor(slidesGrid[i] * 100)
              ) {
                slideIndex = i;
              }
            }
          }
          // Directions locks
          if (swiper.initialized && slideIndex !== activeIndex) {
            if (
              !swiper.allowSlideNext &&
              translate < swiper.translate &&
              translate < swiper.minTranslate()
            ) {
              return false;
            }
            if (
              !swiper.allowSlidePrev &&
              translate > swiper.translate &&
              translate > swiper.maxTranslate()
            ) {
              if ((activeIndex || 0) !== slideIndex) {
                return false;
              }
            }
          }

          var direction;
          if (slideIndex > activeIndex) {
            direction = "next";
          } else if (slideIndex < activeIndex) {
            direction = "prev";
          } else {
            direction = "reset";
          }

          // Update Index
          if (
            (rtl && -translate === swiper.translate) ||
            (!rtl && translate === swiper.translate)
          ) {
            swiper.updateActiveIndex(slideIndex);
            // Update Height
            if (params.autoHeight) {
              swiper.updateAutoHeight();
            }
            swiper.updateSlidesClasses();
            if (params.effect !== "slide") {
              swiper.setTranslate(translate);
            }
            if (direction !== "reset") {
              swiper.transitionStart(runCallbacks, direction);
              swiper.transitionEnd(runCallbacks, direction);
            }
            return false;
          }

          if (speed === 0 || !Support.transition) {
            swiper.setTransition(0);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit("beforeTransitionStart", speed, internal);
            swiper.transitionStart(runCallbacks, direction);
            swiper.transitionEnd(runCallbacks, direction);
          } else {
            swiper.setTransition(speed);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit("beforeTransitionStart", speed, internal);
            swiper.transitionStart(runCallbacks, direction);
            if (!swiper.animating) {
              swiper.animating = true;
              if (!swiper.onSlideToWrapperTransitionEnd) {
                swiper.onSlideToWrapperTransitionEnd = function transitionEnd(
                  e
                ) {
                  if (!swiper || swiper.destroyed) {
                    return;
                  }
                  if (e.target !== this) {
                    return;
                  }
                  swiper.$wrapperEl[0].removeEventListener(
                    "transitionend",
                    swiper.onSlideToWrapperTransitionEnd
                  );
                  swiper.$wrapperEl[0].removeEventListener(
                    "webkitTransitionEnd",
                    swiper.onSlideToWrapperTransitionEnd
                  );
                  swiper.transitionEnd(runCallbacks, direction);
                };
              }
              swiper.$wrapperEl[0].addEventListener(
                "transitionend",
                swiper.onSlideToWrapperTransitionEnd
              );
              swiper.$wrapperEl[0].addEventListener(
                "webkitTransitionEnd",
                swiper.onSlideToWrapperTransitionEnd
              );
            }
          }

          return true;
        }

        function slideToLoop(index, speed, runCallbacks, internal) {
          if (index === void 0) index = 0;
          if (speed === void 0) speed = this.params.speed;
          if (runCallbacks === void 0) runCallbacks = true;

          var swiper = this;
          var newIndex = index;
          if (swiper.params.loop) {
            newIndex += swiper.loopedSlides;
          }

          return swiper.slideTo(newIndex, speed, runCallbacks, internal);
        }

        /* eslint no-unused-vars: "off" */
        function slideNext(speed, runCallbacks, internal) {
          if (speed === void 0) speed = this.params.speed;
          if (runCallbacks === void 0) runCallbacks = true;

          var swiper = this;
          var params = swiper.params;
          var animating = swiper.animating;
          if (params.loop) {
            if (animating) {
              return false;
            }
            swiper.loopFix();
            // eslint-disable-next-line
            swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
            return swiper.slideTo(
              swiper.activeIndex + params.slidesPerGroup,
              speed,
              runCallbacks,
              internal
            );
          }
          return swiper.slideTo(
            swiper.activeIndex + params.slidesPerGroup,
            speed,
            runCallbacks,
            internal
          );
        }

        /* eslint no-unused-vars: "off" */
        function slidePrev(speed, runCallbacks, internal) {
          if (speed === void 0) speed = this.params.speed;
          if (runCallbacks === void 0) runCallbacks = true;

          var swiper = this;
          var params = swiper.params;
          var animating = swiper.animating;
          var snapGrid = swiper.snapGrid;
          var slidesGrid = swiper.slidesGrid;
          var rtlTranslate = swiper.rtlTranslate;

          if (params.loop) {
            if (animating) {
              return false;
            }
            swiper.loopFix();
            // eslint-disable-next-line
            swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
          }
          var translate = rtlTranslate ? swiper.translate : -swiper.translate;
          function normalize(val) {
            if (val < 0) {
              return -Math.floor(Math.abs(val));
            }
            return Math.floor(val);
          }
          var normalizedTranslate = normalize(translate);
          var normalizedSnapGrid = snapGrid.map(function(val) {
            return normalize(val);
          });
          var normalizedSlidesGrid = slidesGrid.map(function(val) {
            return normalize(val);
          });

          var currentSnap =
            snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)];
          var prevSnap =
            snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
          var prevIndex;
          if (typeof prevSnap !== "undefined") {
            prevIndex = slidesGrid.indexOf(prevSnap);
            if (prevIndex < 0) {
              prevIndex = swiper.activeIndex - 1;
            }
          }
          return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
        }

        /* eslint no-unused-vars: "off" */
        function slideReset(speed, runCallbacks, internal) {
          if (speed === void 0) speed = this.params.speed;
          if (runCallbacks === void 0) runCallbacks = true;

          var swiper = this;
          return swiper.slideTo(
            swiper.activeIndex,
            speed,
            runCallbacks,
            internal
          );
        }

        /* eslint no-unused-vars: "off" */
        function slideToClosest(speed, runCallbacks, internal) {
          if (speed === void 0) speed = this.params.speed;
          if (runCallbacks === void 0) runCallbacks = true;

          var swiper = this;
          var index = swiper.activeIndex;
          var snapIndex = Math.floor(index / swiper.params.slidesPerGroup);

          if (snapIndex < swiper.snapGrid.length - 1) {
            var translate = swiper.rtlTranslate
              ? swiper.translate
              : -swiper.translate;

            var currentSnap = swiper.snapGrid[snapIndex];
            var nextSnap = swiper.snapGrid[snapIndex + 1];

            if (translate - currentSnap > (nextSnap - currentSnap) / 2) {
              index = swiper.params.slidesPerGroup;
            }
          }

          return swiper.slideTo(index, speed, runCallbacks, internal);
        }

        function slideToClickedSlide() {
          var swiper = this;
          var params = swiper.params;
          var $wrapperEl = swiper.$wrapperEl;

          var slidesPerView =
            params.slidesPerView === "auto"
              ? swiper.slidesPerViewDynamic()
              : params.slidesPerView;
          var slideToIndex = swiper.clickedIndex;
          var realIndex;
          if (params.loop) {
            if (swiper.animating) {
              return;
            }
            realIndex = parseInt(
              $(swiper.clickedSlide).attr("data-swiper-slide-index"),
              10
            );
            if (params.centeredSlides) {
              if (
                slideToIndex < swiper.loopedSlides - slidesPerView / 2 ||
                slideToIndex >
                  swiper.slides.length - swiper.loopedSlides + slidesPerView / 2
              ) {
                swiper.loopFix();
                slideToIndex = $wrapperEl
                  .children(
                    "." +
                      params.slideClass +
                      '[data-swiper-slide-index="' +
                      realIndex +
                      '"]:not(.' +
                      params.slideDuplicateClass +
                      ")"
                  )
                  .eq(0)
                  .index();

                Utils.nextTick(function() {
                  swiper.slideTo(slideToIndex);
                });
              } else {
                swiper.slideTo(slideToIndex);
              }
            } else if (slideToIndex > swiper.slides.length - slidesPerView) {
              swiper.loopFix();
              slideToIndex = $wrapperEl
                .children(
                  "." +
                    params.slideClass +
                    '[data-swiper-slide-index="' +
                    realIndex +
                    '"]:not(.' +
                    params.slideDuplicateClass +
                    ")"
                )
                .eq(0)
                .index();

              Utils.nextTick(function() {
                swiper.slideTo(slideToIndex);
              });
            } else {
              swiper.slideTo(slideToIndex);
            }
          } else {
            swiper.slideTo(slideToIndex);
          }
        }

        var slide = {
          slideTo: slideTo,
          slideToLoop: slideToLoop,
          slideNext: slideNext,
          slidePrev: slidePrev,
          slideReset: slideReset,
          slideToClosest: slideToClosest,
          slideToClickedSlide: slideToClickedSlide
        };

        function loopCreate() {
          var swiper = this;
          var params = swiper.params;
          var $wrapperEl = swiper.$wrapperEl;
          // Remove duplicated slides
          $wrapperEl
            .children(
              "." + params.slideClass + "." + params.slideDuplicateClass
            )
            .remove();

          var slides = $wrapperEl.children("." + params.slideClass);

          if (params.loopFillGroupWithBlank) {
            var blankSlidesNum =
              params.slidesPerGroup - (slides.length % params.slidesPerGroup);
            if (blankSlidesNum !== params.slidesPerGroup) {
              for (var i = 0; i < blankSlidesNum; i += 1) {
                var blankNode = $(doc.createElement("div")).addClass(
                  params.slideClass + " " + params.slideBlankClass
                );
                $wrapperEl.append(blankNode);
              }
              slides = $wrapperEl.children("." + params.slideClass);
            }
          }

          if (params.slidesPerView === "auto" && !params.loopedSlides) {
            params.loopedSlides = slides.length;
          }

          swiper.loopedSlides = parseInt(
            params.loopedSlides || params.slidesPerView,
            10
          );
          swiper.loopedSlides += params.loopAdditionalSlides;
          if (swiper.loopedSlides > slides.length) {
            swiper.loopedSlides = slides.length;
          }

          var prependSlides = [];
          var appendSlides = [];
          slides.each(function(index, el) {
            var slide = $(el);
            if (index < swiper.loopedSlides) {
              appendSlides.push(el);
            }
            if (
              index < slides.length &&
              index >= slides.length - swiper.loopedSlides
            ) {
              prependSlides.push(el);
            }
            slide.attr("data-swiper-slide-index", index);
          });
          for (var i$1 = 0; i$1 < appendSlides.length; i$1 += 1) {
            $wrapperEl.append(
              $(appendSlides[i$1].cloneNode(true)).addClass(
                params.slideDuplicateClass
              )
            );
          }
          for (var i$2 = prependSlides.length - 1; i$2 >= 0; i$2 -= 1) {
            $wrapperEl.prepend(
              $(prependSlides[i$2].cloneNode(true)).addClass(
                params.slideDuplicateClass
              )
            );
          }
        }

        function loopFix() {
          var swiper = this;
          var params = swiper.params;
          var activeIndex = swiper.activeIndex;
          var slides = swiper.slides;
          var loopedSlides = swiper.loopedSlides;
          var allowSlidePrev = swiper.allowSlidePrev;
          var allowSlideNext = swiper.allowSlideNext;
          var snapGrid = swiper.snapGrid;
          var rtl = swiper.rtlTranslate;
          var newIndex;
          swiper.allowSlidePrev = true;
          swiper.allowSlideNext = true;

          var snapTranslate = -snapGrid[activeIndex];
          var diff = snapTranslate - swiper.getTranslate();

          // Fix For Negative Oversliding
          if (activeIndex < loopedSlides) {
            newIndex = slides.length - loopedSlides * 3 + activeIndex;
            newIndex += loopedSlides;
            var slideChanged = swiper.slideTo(newIndex, 0, false, true);
            if (slideChanged && diff !== 0) {
              swiper.setTranslate(
                (rtl ? -swiper.translate : swiper.translate) - diff
              );
            }
          } else if (
            (params.slidesPerView === "auto" &&
              activeIndex >= loopedSlides * 2) ||
            activeIndex >= slides.length - loopedSlides
          ) {
            // Fix For Positive Oversliding
            newIndex = -slides.length + activeIndex + loopedSlides;
            newIndex += loopedSlides;
            var slideChanged$1 = swiper.slideTo(newIndex, 0, false, true);
            if (slideChanged$1 && diff !== 0) {
              swiper.setTranslate(
                (rtl ? -swiper.translate : swiper.translate) - diff
              );
            }
          }
          swiper.allowSlidePrev = allowSlidePrev;
          swiper.allowSlideNext = allowSlideNext;
        }

        function loopDestroy() {
          var swiper = this;
          var $wrapperEl = swiper.$wrapperEl;
          var params = swiper.params;
          var slides = swiper.slides;
          $wrapperEl
            .children(
              "." + params.slideClass + "." + params.slideDuplicateClass
            )
            .remove();
          slides.removeAttr("data-swiper-slide-index");
        }

        var loop = {
          loopCreate: loopCreate,
          loopFix: loopFix,
          loopDestroy: loopDestroy
        };

        function setGrabCursor(moving) {
          var swiper = this;
          if (
            Support.touch ||
            !swiper.params.simulateTouch ||
            (swiper.params.watchOverflow && swiper.isLocked)
          ) {
            return;
          }
          var el = swiper.el;
          el.style.cursor = "move";
          el.style.cursor = moving ? "-webkit-grabbing" : "-webkit-grab";
          el.style.cursor = moving ? "-moz-grabbin" : "-moz-grab";
          el.style.cursor = moving ? "grabbing" : "grab";
        }

        function unsetGrabCursor() {
          var swiper = this;
          if (
            Support.touch ||
            (swiper.params.watchOverflow && swiper.isLocked)
          ) {
            return;
          }
          swiper.el.style.cursor = "";
        }

        var grabCursor = {
          setGrabCursor: setGrabCursor,
          unsetGrabCursor: unsetGrabCursor
        };

        function appendSlide(slides) {
          var swiper = this;
          var $wrapperEl = swiper.$wrapperEl;
          var params = swiper.params;
          if (params.loop) {
            swiper.loopDestroy();
          }
          if (typeof slides === "object" && "length" in slides) {
            for (var i = 0; i < slides.length; i += 1) {
              if (slides[i]) {
                $wrapperEl.append(slides[i]);
              }
            }
          } else {
            $wrapperEl.append(slides);
          }
          if (params.loop) {
            swiper.loopCreate();
          }
          if (!(params.observer && Support.observer)) {
            swiper.update();
          }
        }

        function prependSlide(slides) {
          var swiper = this;
          var params = swiper.params;
          var $wrapperEl = swiper.$wrapperEl;
          var activeIndex = swiper.activeIndex;

          if (params.loop) {
            swiper.loopDestroy();
          }
          var newActiveIndex = activeIndex + 1;
          if (typeof slides === "object" && "length" in slides) {
            for (var i = 0; i < slides.length; i += 1) {
              if (slides[i]) {
                $wrapperEl.prepend(slides[i]);
              }
            }
            newActiveIndex = activeIndex + slides.length;
          } else {
            $wrapperEl.prepend(slides);
          }
          if (params.loop) {
            swiper.loopCreate();
          }
          if (!(params.observer && Support.observer)) {
            swiper.update();
          }
          swiper.slideTo(newActiveIndex, 0, false);
        }

        function addSlide(index, slides) {
          var swiper = this;
          var $wrapperEl = swiper.$wrapperEl;
          var params = swiper.params;
          var activeIndex = swiper.activeIndex;
          var activeIndexBuffer = activeIndex;
          if (params.loop) {
            activeIndexBuffer -= swiper.loopedSlides;
            swiper.loopDestroy();
            swiper.slides = $wrapperEl.children("." + params.slideClass);
          }
          var baseLength = swiper.slides.length;
          if (index <= 0) {
            swiper.prependSlide(slides);
            return;
          } else if (index >= baseLength) {
            swiper.appendSlide(slides);
            return;
          }
          var newActiveIndex =
            activeIndexBuffer > index
              ? activeIndexBuffer + 1
              : activeIndexBuffer;

          var slidesBuffer = [];
          for (var i = baseLength - 1; i >= index; i -= 1) {
            var currentSlide = swiper.slides.eq(i);
            currentSlide.remove();
            slidesBuffer.unshift(currentSlide);
          }

          if (typeof slides === "object" && "length" in slides) {
            for (var i$1 = 0; i$1 < slides.length; i$1 += 1) {
              if (slides[i$1]) {
                $wrapperEl.append(slides[i$1]);
              }
            }
            newActiveIndex =
              activeIndexBuffer > index
                ? activeIndexBuffer + slides.length
                : activeIndexBuffer;
          } else {
            $wrapperEl.append(slides);
          }

          for (var i$2 = 0; i$2 < slidesBuffer.length; i$2 += 1) {
            $wrapperEl.append(slidesBuffer[i$2]);
          }

          if (params.loop) {
            swiper.loopCreate();
          }
          if (!(params.observer && Support.observer)) {
            swiper.update();
          }
          if (params.loop) {
            swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
          } else {
            swiper.slideTo(newActiveIndex, 0, false);
          }
        }

        function removeSlide(slidesIndexes) {
          var swiper = this;
          var params = swiper.params;
          var $wrapperEl = swiper.$wrapperEl;
          var activeIndex = swiper.activeIndex;

          var activeIndexBuffer = activeIndex;
          if (params.loop) {
            activeIndexBuffer -= swiper.loopedSlides;
            swiper.loopDestroy();
            swiper.slides = $wrapperEl.children("." + params.slideClass);
          }
          var newActiveIndex = activeIndexBuffer;
          var indexToRemove;

          if (typeof slidesIndexes === "object" && "length" in slidesIndexes) {
            for (var i = 0; i < slidesIndexes.length; i += 1) {
              indexToRemove = slidesIndexes[i];
              if (swiper.slides[indexToRemove]) {
                swiper.slides.eq(indexToRemove).remove();
              }
              if (indexToRemove < newActiveIndex) {
                newActiveIndex -= 1;
              }
            }
            newActiveIndex = Math.max(newActiveIndex, 0);
          } else {
            indexToRemove = slidesIndexes;
            if (swiper.slides[indexToRemove]) {
              swiper.slides.eq(indexToRemove).remove();
            }
            if (indexToRemove < newActiveIndex) {
              newActiveIndex -= 1;
            }
            newActiveIndex = Math.max(newActiveIndex, 0);
          }

          if (params.loop) {
            swiper.loopCreate();
          }

          if (!(params.observer && Support.observer)) {
            swiper.update();
          }
          if (params.loop) {
            swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
          } else {
            swiper.slideTo(newActiveIndex, 0, false);
          }
        }

        function removeAllSlides() {
          var swiper = this;

          var slidesIndexes = [];
          for (var i = 0; i < swiper.slides.length; i += 1) {
            slidesIndexes.push(i);
          }
          swiper.removeSlide(slidesIndexes);
        }

        var manipulation = {
          appendSlide: appendSlide,
          prependSlide: prependSlide,
          addSlide: addSlide,
          removeSlide: removeSlide,
          removeAllSlides: removeAllSlides
        };

        var Device = (function Device() {
          var ua = win.navigator.userAgent;

          var device = {
            ios: false,
            android: false,
            androidChrome: false,
            desktop: false,
            windows: false,
            iphone: false,
            ipod: false,
            ipad: false,
            cordova: win.cordova || win.phonegap,
            phonegap: win.cordova || win.phonegap
          };

          var windows = ua.match(/(Windows Phone);?[\s\/]+([\d.]+)?/); // eslint-disable-line
          var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
          var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
          var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
          var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);

          // Windows
          if (windows) {
            device.os = "windows";
            device.osVersion = windows[2];
            device.windows = true;
          }
          // Android
          if (android && !windows) {
            device.os = "android";
            device.osVersion = android[2];
            device.android = true;
            device.androidChrome = ua.toLowerCase().indexOf("chrome") >= 0;
          }
          if (ipad || iphone || ipod) {
            device.os = "ios";
            device.ios = true;
          }
          // iOS
          if (iphone && !ipod) {
            device.osVersion = iphone[2].replace(/_/g, ".");
            device.iphone = true;
          }
          if (ipad) {
            device.osVersion = ipad[2].replace(/_/g, ".");
            device.ipad = true;
          }
          if (ipod) {
            device.osVersion = ipod[3] ? ipod[3].replace(/_/g, ".") : null;
            device.iphone = true;
          }
          // iOS 8+ changed UA
          if (device.ios && device.osVersion && ua.indexOf("Version/") >= 0) {
            if (device.osVersion.split(".")[0] === "10") {
              device.osVersion = ua
                .toLowerCase()
                .split("version/")[1]
                .split(" ")[0];
            }
          }

          // Desktop
          device.desktop = !(device.os || device.android || device.webView);

          // Webview
          device.webView =
            (iphone || ipad || ipod) && ua.match(/.*AppleWebKit(?!.*Safari)/i);

          // Minimal UI
          if (device.os && device.os === "ios") {
            var osVersionArr = device.osVersion.split(".");
            var metaViewport = doc.querySelector('meta[name="viewport"]');
            device.minimalUi =
              !device.webView &&
              (ipod || iphone) &&
              (osVersionArr[0] * 1 === 7
                ? osVersionArr[1] * 1 >= 1
                : osVersionArr[0] * 1 > 7) &&
              metaViewport &&
              metaViewport.getAttribute("content").indexOf("minimal-ui") >= 0;
          }

          // Pixel Ratio
          device.pixelRatio = win.devicePixelRatio || 1;

          // Export object
          return device;
        })();

        function onTouchStart(event) {
          var swiper = this;
          var data = swiper.touchEventsData;
          var params = swiper.params;
          var touches = swiper.touches;
          if (swiper.animating && params.preventIntercationOnTransition) {
            return;
          }
          var e = event;
          if (e.originalEvent) {
            e = e.originalEvent;
          }
          data.isTouchEvent = e.type === "touchstart";
          if (!data.isTouchEvent && "which" in e && e.which === 3) {
            return;
          }
          if (data.isTouched && data.isMoved) {
            return;
          }
          if (
            params.noSwiping &&
            $(e.target).closest(
              params.noSwipingSelector
                ? params.noSwipingSelector
                : "." + params.noSwipingClass
            )[0]
          ) {
            swiper.allowClick = true;
            return;
          }
          if (params.swipeHandler) {
            if (!$(e).closest(params.swipeHandler)[0]) {
              return;
            }
          }

          touches.currentX =
            e.type === "touchstart" ? e.targetTouches[0].pageX : e.pageX;
          touches.currentY =
            e.type === "touchstart" ? e.targetTouches[0].pageY : e.pageY;
          var startX = touches.currentX;
          var startY = touches.currentY;

          // Do NOT start if iOS edge swipe is detected. Otherwise iOS app (UIWebView) cannot swipe-to-go-back anymore

          if (
            Device.ios &&
            !Device.cordova &&
            params.iOSEdgeSwipeDetection &&
            (startX <= params.iOSEdgeSwipeThreshold ||
              startX >= win.screen.width - params.iOSEdgeSwipeThreshold)
          ) {
            return;
          }

          Utils.extend(data, {
            isTouched: true,
            isMoved: false,
            allowTouchCallbacks: true,
            isScrolling: undefined,
            startMoving: undefined
          });

          touches.startX = startX;
          touches.startY = startY;
          data.touchStartTime = Utils.now();
          swiper.allowClick = true;
          swiper.updateSize();
          swiper.swipeDirection = undefined;
          if (params.threshold > 0) {
            data.allowThresholdMove = false;
          }
          if (e.type !== "touchstart") {
            var preventDefault = true;
            if ($(e.target).is(data.formElements)) {
              preventDefault = false;
            }
            if (
              doc.activeElement &&
              $(doc.activeElement).is(data.formElements) &&
              doc.activeElement !== e.target
            ) {
              doc.activeElement.blur();
            }
            if (preventDefault && swiper.allowTouchMove) {
              e.preventDefault();
            }
          }
          swiper.emit("touchStart", e);
        }

        function onTouchMove(event) {
          var swiper = this;
          var data = swiper.touchEventsData;
          var params = swiper.params;
          var touches = swiper.touches;
          var rtl = swiper.rtlTranslate;
          var e = event;
          if (e.originalEvent) {
            e = e.originalEvent;
          }
          if (!data.isTouched) {
            if (data.startMoving && data.isScrolling) {
              swiper.emit("touchMoveOpposite", e);
            }
            return;
          }
          if (data.isTouchEvent && e.type === "mousemove") {
            return;
          }
          var pageX =
            e.type === "touchmove" ? e.targetTouches[0].pageX : e.pageX;
          var pageY =
            e.type === "touchmove" ? e.targetTouches[0].pageY : e.pageY;
          if (e.preventedByNestedSwiper) {
            touches.startX = pageX;
            touches.startY = pageY;
            return;
          }
          if (!swiper.allowTouchMove) {
            // isMoved = true;
            swiper.allowClick = false;
            if (data.isTouched) {
              Utils.extend(touches, {
                startX: pageX,
                startY: pageY,
                currentX: pageX,
                currentY: pageY
              });
              data.touchStartTime = Utils.now();
            }
            return;
          }
          if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
            if (swiper.isVertical()) {
              // Vertical
              if (
                (pageY < touches.startY &&
                  swiper.translate <= swiper.maxTranslate()) ||
                (pageY > touches.startY &&
                  swiper.translate >= swiper.minTranslate())
              ) {
                data.isTouched = false;
                data.isMoved = false;
                return;
              }
            } else if (
              (pageX < touches.startX &&
                swiper.translate <= swiper.maxTranslate()) ||
              (pageX > touches.startX &&
                swiper.translate >= swiper.minTranslate())
            ) {
              return;
            }
          }
          if (data.isTouchEvent && doc.activeElement) {
            if (
              e.target === doc.activeElement &&
              $(e.target).is(data.formElements)
            ) {
              data.isMoved = true;
              swiper.allowClick = false;
              return;
            }
          }
          if (data.allowTouchCallbacks) {
            swiper.emit("touchMove", e);
          }
          if (e.targetTouches && e.targetTouches.length > 1) {
            return;
          }

          touches.currentX = pageX;
          touches.currentY = pageY;

          var diffX = touches.currentX - touches.startX;
          var diffY = touches.currentY - touches.startY;

          if (typeof data.isScrolling === "undefined") {
            var touchAngle;
            if (
              (swiper.isHorizontal() && touches.currentY === touches.startY) ||
              (swiper.isVertical() && touches.currentX === touches.startX)
            ) {
              data.isScrolling = false;
            } else {
              // eslint-disable-next-line
              if (diffX * diffX + diffY * diffY >= 25) {
                touchAngle =
                  (Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180) /
                  Math.PI;
                data.isScrolling = swiper.isHorizontal()
                  ? touchAngle > params.touchAngle
                  : 90 - touchAngle > params.touchAngle;
              }
            }
          }
          if (data.isScrolling) {
            swiper.emit("touchMoveOpposite", e);
          }
          if (typeof startMoving === "undefined") {
            if (
              touches.currentX !== touches.startX ||
              touches.currentY !== touches.startY
            ) {
              data.startMoving = true;
            }
          }
          if (data.isScrolling) {
            data.isTouched = false;
            return;
          }
          if (!data.startMoving) {
            return;
          }
          swiper.allowClick = false;
          e.preventDefault();
          if (params.touchMoveStopPropagation && !params.nested) {
            e.stopPropagation();
          }

          if (!data.isMoved) {
            if (params.loop) {
              swiper.loopFix();
            }
            data.startTranslate = swiper.getTranslate();
            swiper.setTransition(0);
            if (swiper.animating) {
              swiper.$wrapperEl.trigger("webkitTransitionEnd transitionend");
            }
            data.allowMomentumBounce = false;
            // Grab Cursor
            if (
              params.grabCursor &&
              (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)
            ) {
              swiper.setGrabCursor(true);
            }
            swiper.emit("sliderFirstMove", e);
          }
          swiper.emit("sliderMove", e);
          data.isMoved = true;

          var diff = swiper.isHorizontal() ? diffX : diffY;
          touches.diff = diff;

          diff *= params.touchRatio;
          if (rtl) {
            diff = -diff;
          }

          swiper.swipeDirection = diff > 0 ? "prev" : "next";
          data.currentTranslate = diff + data.startTranslate;

          var disableParentSwiper = true;
          var resistanceRatio = params.resistanceRatio;
          if (params.touchReleaseOnEdges) {
            resistanceRatio = 0;
          }
          if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
            disableParentSwiper = false;
            if (params.resistance) {
              data.currentTranslate =
                swiper.minTranslate() -
                1 +
                Math.pow(
                  -swiper.minTranslate() + data.startTranslate + diff,
                  resistanceRatio
                );
            }
          } else if (
            diff < 0 &&
            data.currentTranslate < swiper.maxTranslate()
          ) {
            disableParentSwiper = false;
            if (params.resistance) {
              data.currentTranslate =
                swiper.maxTranslate() +
                1 -
                Math.pow(
                  swiper.maxTranslate() - data.startTranslate - diff,
                  resistanceRatio
                );
            }
          }

          if (disableParentSwiper) {
            e.preventedByNestedSwiper = true;
          }

          // Directions locks
          if (
            !swiper.allowSlideNext &&
            swiper.swipeDirection === "next" &&
            data.currentTranslate < data.startTranslate
          ) {
            data.currentTranslate = data.startTranslate;
          }
          if (
            !swiper.allowSlidePrev &&
            swiper.swipeDirection === "prev" &&
            data.currentTranslate > data.startTranslate
          ) {
            data.currentTranslate = data.startTranslate;
          }

          // Threshold
          if (params.threshold > 0) {
            if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
              if (!data.allowThresholdMove) {
                data.allowThresholdMove = true;
                touches.startX = touches.currentX;
                touches.startY = touches.currentY;
                data.currentTranslate = data.startTranslate;
                touches.diff = swiper.isHorizontal()
                  ? touches.currentX - touches.startX
                  : touches.currentY - touches.startY;
                return;
              }
            } else {
              data.currentTranslate = data.startTranslate;
              return;
            }
          }

          if (!params.followFinger) {
            return;
          }

          // Update active index in free mode
          if (
            params.freeMode ||
            params.watchSlidesProgress ||
            params.watchSlidesVisibility
          ) {
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
          }
          if (params.freeMode) {
            // Velocity
            if (data.velocities.length === 0) {
              data.velocities.push({
                position: touches[swiper.isHorizontal() ? "startX" : "startY"],
                time: data.touchStartTime
              });
            }
            data.velocities.push({
              position:
                touches[swiper.isHorizontal() ? "currentX" : "currentY"],
              time: Utils.now()
            });
          }
          // Update progress
          swiper.updateProgress(data.currentTranslate);
          // Update translate
          swiper.setTranslate(data.currentTranslate);
        }

        function onTouchEnd(event) {
          var swiper = this;
          var data = swiper.touchEventsData;

          var params = swiper.params;
          var touches = swiper.touches;
          var rtl = swiper.rtlTranslate;
          var $wrapperEl = swiper.$wrapperEl;
          var slidesGrid = swiper.slidesGrid;
          var snapGrid = swiper.snapGrid;
          var e = event;
          if (e.originalEvent) {
            e = e.originalEvent;
          }
          if (data.allowTouchCallbacks) {
            swiper.emit("touchEnd", e);
          }
          data.allowTouchCallbacks = false;
          if (!data.isTouched) {
            if (data.isMoved && params.grabCursor) {
              swiper.setGrabCursor(false);
            }
            data.isMoved = false;
            data.startMoving = false;
            return;
          }
          // Return Grab Cursor
          if (
            params.grabCursor &&
            data.isMoved &&
            data.isTouched &&
            (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)
          ) {
            swiper.setGrabCursor(false);
          }

          // Time diff
          var touchEndTime = Utils.now();
          var timeDiff = touchEndTime - data.touchStartTime;

          // Tap, doubleTap, Click
          if (swiper.allowClick) {
            swiper.updateClickedSlide(e);
            swiper.emit("tap", e);
            if (timeDiff < 300 && touchEndTime - data.lastClickTime > 300) {
              if (data.clickTimeout) {
                clearTimeout(data.clickTimeout);
              }
              data.clickTimeout = Utils.nextTick(function() {
                if (!swiper || swiper.destroyed) {
                  return;
                }
                swiper.emit("click", e);
              }, 300);
            }
            if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
              if (data.clickTimeout) {
                clearTimeout(data.clickTimeout);
              }
              swiper.emit("doubleTap", e);
            }
          }

          data.lastClickTime = Utils.now();
          Utils.nextTick(function() {
            if (!swiper.destroyed) {
              swiper.allowClick = true;
            }
          });

          if (
            !data.isTouched ||
            !data.isMoved ||
            !swiper.swipeDirection ||
            touches.diff === 0 ||
            data.currentTranslate === data.startTranslate
          ) {
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            return;
          }
          data.isTouched = false;
          data.isMoved = false;
          data.startMoving = false;

          var currentPos;
          if (params.followFinger) {
            currentPos = rtl ? swiper.translate : -swiper.translate;
          } else {
            currentPos = -data.currentTranslate;
          }

          if (params.freeMode) {
            if (currentPos < -swiper.minTranslate()) {
              swiper.slideTo(swiper.activeIndex);
              return;
            } else if (currentPos > -swiper.maxTranslate()) {
              if (swiper.slides.length < snapGrid.length) {
                swiper.slideTo(snapGrid.length - 1);
              } else {
                swiper.slideTo(swiper.slides.length - 1);
              }
              return;
            }

            if (params.freeModeMomentum) {
              if (data.velocities.length > 1) {
                var lastMoveEvent = data.velocities.pop();
                var velocityEvent = data.velocities.pop();

                var distance = lastMoveEvent.position - velocityEvent.position;
                var time = lastMoveEvent.time - velocityEvent.time;
                swiper.velocity = distance / time;
                swiper.velocity /= 2;
                if (
                  Math.abs(swiper.velocity) < params.freeModeMinimumVelocity
                ) {
                  swiper.velocity = 0;
                }
                // this implies that the user stopped moving a finger then released.
                // There would be no events with distance zero, so the last event is stale.
                if (time > 150 || Utils.now() - lastMoveEvent.time > 300) {
                  swiper.velocity = 0;
                }
              } else {
                swiper.velocity = 0;
              }
              swiper.velocity *= params.freeModeMomentumVelocityRatio;

              data.velocities.length = 0;
              var momentumDuration = 1000 * params.freeModeMomentumRatio;
              var momentumDistance = swiper.velocity * momentumDuration;

              var newPosition = swiper.translate + momentumDistance;
              if (rtl) {
                newPosition = -newPosition;
              }

              var doBounce = false;
              var afterBouncePosition;
              var bounceAmount =
                Math.abs(swiper.velocity) *
                20 *
                params.freeModeMomentumBounceRatio;
              var needsLoopFix;
              if (newPosition < swiper.maxTranslate()) {
                if (params.freeModeMomentumBounce) {
                  if (newPosition + swiper.maxTranslate() < -bounceAmount) {
                    newPosition = swiper.maxTranslate() - bounceAmount;
                  }
                  afterBouncePosition = swiper.maxTranslate();
                  doBounce = true;
                  data.allowMomentumBounce = true;
                } else {
                  newPosition = swiper.maxTranslate();
                }
                if (params.loop && params.centeredSlides) {
                  needsLoopFix = true;
                }
              } else if (newPosition > swiper.minTranslate()) {
                if (params.freeModeMomentumBounce) {
                  if (newPosition - swiper.minTranslate() > bounceAmount) {
                    newPosition = swiper.minTranslate() + bounceAmount;
                  }
                  afterBouncePosition = swiper.minTranslate();
                  doBounce = true;
                  data.allowMomentumBounce = true;
                } else {
                  newPosition = swiper.minTranslate();
                }
                if (params.loop && params.centeredSlides) {
                  needsLoopFix = true;
                }
              } else if (params.freeModeSticky) {
                var nextSlide;
                for (var j = 0; j < snapGrid.length; j += 1) {
                  if (snapGrid[j] > -newPosition) {
                    nextSlide = j;
                    break;
                  }
                }

                if (
                  Math.abs(snapGrid[nextSlide] - newPosition) <
                    Math.abs(snapGrid[nextSlide - 1] - newPosition) ||
                  swiper.swipeDirection === "next"
                ) {
                  newPosition = snapGrid[nextSlide];
                } else {
                  newPosition = snapGrid[nextSlide - 1];
                }
                newPosition = -newPosition;
              }
              if (needsLoopFix) {
                swiper.once("transitionEnd", function() {
                  swiper.loopFix();
                });
              }
              // Fix duration
              if (swiper.velocity !== 0) {
                if (rtl) {
                  momentumDuration = Math.abs(
                    (-newPosition - swiper.translate) / swiper.velocity
                  );
                } else {
                  momentumDuration = Math.abs(
                    (newPosition - swiper.translate) / swiper.velocity
                  );
                }
              } else if (params.freeModeSticky) {
                swiper.slideToClosest();
                return;
              }

              if (params.freeModeMomentumBounce && doBounce) {
                swiper.updateProgress(afterBouncePosition);
                swiper.setTransition(momentumDuration);
                swiper.setTranslate(newPosition);
                swiper.transitionStart(true, swiper.swipeDirection);
                swiper.animating = true;
                $wrapperEl.transitionEnd(function() {
                  if (
                    !swiper ||
                    swiper.destroyed ||
                    !data.allowMomentumBounce
                  ) {
                    return;
                  }
                  swiper.emit("momentumBounce");

                  swiper.setTransition(params.speed);
                  swiper.setTranslate(afterBouncePosition);
                  $wrapperEl.transitionEnd(function() {
                    if (!swiper || swiper.destroyed) {
                      return;
                    }
                    swiper.transitionEnd();
                  });
                });
              } else if (swiper.velocity) {
                swiper.updateProgress(newPosition);
                swiper.setTransition(momentumDuration);
                swiper.setTranslate(newPosition);
                swiper.transitionStart(true, swiper.swipeDirection);
                if (!swiper.animating) {
                  swiper.animating = true;
                  $wrapperEl.transitionEnd(function() {
                    if (!swiper || swiper.destroyed) {
                      return;
                    }
                    swiper.transitionEnd();
                  });
                }
              } else {
                swiper.updateProgress(newPosition);
              }

              swiper.updateActiveIndex();
              swiper.updateSlidesClasses();
            } else if (params.freeModeSticky) {
              swiper.slideToClosest();
              return;
            }

            if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
              swiper.updateProgress();
              swiper.updateActiveIndex();
              swiper.updateSlidesClasses();
            }
            return;
          }

          // Find current slide
          var stopIndex = 0;
          var groupSize = swiper.slidesSizesGrid[0];
          for (var i = 0; i < slidesGrid.length; i += params.slidesPerGroup) {
            if (typeof slidesGrid[i + params.slidesPerGroup] !== "undefined") {
              if (
                currentPos >= slidesGrid[i] &&
                currentPos < slidesGrid[i + params.slidesPerGroup]
              ) {
                stopIndex = i;
                groupSize =
                  slidesGrid[i + params.slidesPerGroup] - slidesGrid[i];
              }
            } else if (currentPos >= slidesGrid[i]) {
              stopIndex = i;
              groupSize =
                slidesGrid[slidesGrid.length - 1] -
                slidesGrid[slidesGrid.length - 2];
            }
          }

          // Find current slide size
          var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;

          if (timeDiff > params.longSwipesMs) {
            // Long touches
            if (!params.longSwipes) {
              swiper.slideTo(swiper.activeIndex);
              return;
            }
            if (swiper.swipeDirection === "next") {
              if (ratio >= params.longSwipesRatio) {
                swiper.slideTo(stopIndex + params.slidesPerGroup);
              } else {
                swiper.slideTo(stopIndex);
              }
            }
            if (swiper.swipeDirection === "prev") {
              if (ratio > 1 - params.longSwipesRatio) {
                swiper.slideTo(stopIndex + params.slidesPerGroup);
              } else {
                swiper.slideTo(stopIndex);
              }
            }
          } else {
            // Short swipes
            if (!params.shortSwipes) {
              swiper.slideTo(swiper.activeIndex);
              return;
            }
            if (swiper.swipeDirection === "next") {
              swiper.slideTo(stopIndex + params.slidesPerGroup);
            }
            if (swiper.swipeDirection === "prev") {
              swiper.slideTo(stopIndex);
            }
          }
        }

        function onResize() {
          var swiper = this;

          var params = swiper.params;
          var el = swiper.el;

          if (el && el.offsetWidth === 0) {
            return;
          }

          // Breakpoints
          if (params.breakpoints) {
            swiper.setBreakpoint();
          }

          // Save locks
          var allowSlideNext = swiper.allowSlideNext;
          var allowSlidePrev = swiper.allowSlidePrev;
          var snapGrid = swiper.snapGrid;

          // Disable locks on resize
          swiper.allowSlideNext = true;
          swiper.allowSlidePrev = true;

          swiper.updateSize();
          swiper.updateSlides();

          if (params.freeMode) {
            var newTranslate = Math.min(
              Math.max(swiper.translate, swiper.maxTranslate()),
              swiper.minTranslate()
            );
            swiper.setTranslate(newTranslate);
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();

            if (params.autoHeight) {
              swiper.updateAutoHeight();
            }
          } else {
            swiper.updateSlidesClasses();
            if (
              (params.slidesPerView === "auto" || params.slidesPerView > 1) &&
              swiper.isEnd &&
              !swiper.params.centeredSlides
            ) {
              swiper.slideTo(swiper.slides.length - 1, 0, false, true);
            } else {
              swiper.slideTo(swiper.activeIndex, 0, false, true);
            }
          }
          // Return locks after resize
          swiper.allowSlidePrev = allowSlidePrev;
          swiper.allowSlideNext = allowSlideNext;

          if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
            swiper.checkOverflow();
          }
        }

        function onClick(e) {
          var swiper = this;
          if (!swiper.allowClick) {
            if (swiper.params.preventClicks) {
              e.preventDefault();
            }
            if (swiper.params.preventClicksPropagation && swiper.animating) {
              e.stopPropagation();
              e.stopImmediatePropagation();
            }
          }
        }

        function attachEvents() {
          var swiper = this;
          var params = swiper.params;
          var touchEvents = swiper.touchEvents;
          var el = swiper.el;
          var wrapperEl = swiper.wrapperEl;

          {
            swiper.onTouchStart = onTouchStart.bind(swiper);
            swiper.onTouchMove = onTouchMove.bind(swiper);
            swiper.onTouchEnd = onTouchEnd.bind(swiper);
          }

          swiper.onClick = onClick.bind(swiper);

          var target =
            params.touchEventsTarget === "container" ? el : wrapperEl;
          var capture = !!params.nested;

          // Touch Events
          {
            if (
              !Support.touch &&
              (Support.pointerEvents || Support.prefixedPointerEvents)
            ) {
              target.addEventListener(
                touchEvents.start,
                swiper.onTouchStart,
                false
              );
              doc.addEventListener(
                touchEvents.move,
                swiper.onTouchMove,
                capture
              );
              doc.addEventListener(touchEvents.end, swiper.onTouchEnd, false);
            } else {
              if (Support.touch) {
                var passiveListener =
                  touchEvents.start === "touchstart" &&
                  Support.passiveListener &&
                  params.passiveListeners
                    ? { passive: true, capture: false }
                    : false;
                target.addEventListener(
                  touchEvents.start,
                  swiper.onTouchStart,
                  passiveListener
                );
                target.addEventListener(
                  touchEvents.move,
                  swiper.onTouchMove,
                  Support.passiveListener
                    ? { passive: false, capture: capture }
                    : capture
                );
                target.addEventListener(
                  touchEvents.end,
                  swiper.onTouchEnd,
                  passiveListener
                );
              }
              if (
                (params.simulateTouch && !Device.ios && !Device.android) ||
                (params.simulateTouch && !Support.touch && Device.ios)
              ) {
                target.addEventListener(
                  "mousedown",
                  swiper.onTouchStart,
                  false
                );
                doc.addEventListener("mousemove", swiper.onTouchMove, capture);
                doc.addEventListener("mouseup", swiper.onTouchEnd, false);
              }
            }
            // Prevent Links Clicks
            if (params.preventClicks || params.preventClicksPropagation) {
              target.addEventListener("click", swiper.onClick, true);
            }
          }

          // Resize handler
          swiper.on(
            Device.ios || Device.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            onResize,
            true
          );
        }

        function detachEvents() {
          var swiper = this;

          var params = swiper.params;
          var touchEvents = swiper.touchEvents;
          var el = swiper.el;
          var wrapperEl = swiper.wrapperEl;

          var target =
            params.touchEventsTarget === "container" ? el : wrapperEl;
          var capture = !!params.nested;

          // Touch Events
          {
            if (
              !Support.touch &&
              (Support.pointerEvents || Support.prefixedPointerEvents)
            ) {
              target.removeEventListener(
                touchEvents.start,
                swiper.onTouchStart,
                false
              );
              doc.removeEventListener(
                touchEvents.move,
                swiper.onTouchMove,
                capture
              );
              doc.removeEventListener(
                touchEvents.end,
                swiper.onTouchEnd,
                false
              );
            } else {
              if (Support.touch) {
                var passiveListener =
                  touchEvents.start === "onTouchStart" &&
                  Support.passiveListener &&
                  params.passiveListeners
                    ? { passive: true, capture: false }
                    : false;
                target.removeEventListener(
                  touchEvents.start,
                  swiper.onTouchStart,
                  passiveListener
                );
                target.removeEventListener(
                  touchEvents.move,
                  swiper.onTouchMove,
                  capture
                );
                target.removeEventListener(
                  touchEvents.end,
                  swiper.onTouchEnd,
                  passiveListener
                );
              }
              if (
                (params.simulateTouch && !Device.ios && !Device.android) ||
                (params.simulateTouch && !Support.touch && Device.ios)
              ) {
                target.removeEventListener(
                  "mousedown",
                  swiper.onTouchStart,
                  false
                );
                doc.removeEventListener(
                  "mousemove",
                  swiper.onTouchMove,
                  capture
                );
                doc.removeEventListener("mouseup", swiper.onTouchEnd, false);
              }
            }
            // Prevent Links Clicks
            if (params.preventClicks || params.preventClicksPropagation) {
              target.removeEventListener("click", swiper.onClick, true);
            }
          }

          // Resize handler
          swiper.off(
            Device.ios || Device.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            onResize
          );
        }

        var events = {
          attachEvents: attachEvents,
          detachEvents: detachEvents
        };

        function setBreakpoint() {
          var swiper = this;
          var activeIndex = swiper.activeIndex;
          var initialized = swiper.initialized;
          var loopedSlides = swiper.loopedSlides;
          if (loopedSlides === void 0) loopedSlides = 0;
          var params = swiper.params;
          var breakpoints = params.breakpoints;
          if (
            !breakpoints ||
            (breakpoints && Object.keys(breakpoints).length === 0)
          ) {
            return;
          }
          // Set breakpoint for window width and update parameters
          var breakpoint = swiper.getBreakpoint(breakpoints);
          if (breakpoint && swiper.currentBreakpoint !== breakpoint) {
            var breakPointsParams =
              breakpoint in breakpoints
                ? breakpoints[breakpoint]
                : swiper.originalParams;
            var needsReLoop =
              params.loop &&
              breakPointsParams.slidesPerView !== params.slidesPerView;

            Utils.extend(swiper.params, breakPointsParams);

            Utils.extend(swiper, {
              allowTouchMove: swiper.params.allowTouchMove,
              allowSlideNext: swiper.params.allowSlideNext,
              allowSlidePrev: swiper.params.allowSlidePrev
            });

            swiper.currentBreakpoint = breakpoint;

            if (needsReLoop && initialized) {
              swiper.loopDestroy();
              swiper.loopCreate();
              swiper.updateSlides();
              swiper.slideTo(
                activeIndex - loopedSlides + swiper.loopedSlides,
                0,
                false
              );
            }
            swiper.emit("breakpoint", breakPointsParams);
          }
        }

        function getBreakpoint(breakpoints) {
          // Get breakpoint for window width
          if (!breakpoints) {
            return undefined;
          }
          var breakpoint = false;
          var points = [];
          Object.keys(breakpoints).forEach(function(point) {
            points.push(point);
          });
          points.sort(function(a, b) {
            return parseInt(a, 10) - parseInt(b, 10);
          });
          for (var i = 0; i < points.length; i += 1) {
            var point = points[i];
            if (point >= win.innerWidth && !breakpoint) {
              breakpoint = point;
            }
          }
          return breakpoint || "max";
        }

        var breakpoints = {
          setBreakpoint: setBreakpoint,
          getBreakpoint: getBreakpoint
        };

        var Browser = (function Browser() {
          function isSafari() {
            var ua = win.navigator.userAgent.toLowerCase();
            return (
              ua.indexOf("safari") >= 0 &&
              ua.indexOf("chrome") < 0 &&
              ua.indexOf("android") < 0
            );
          }
          return {
            isIE:
              !!win.navigator.userAgent.match(/Trident/g) ||
              !!win.navigator.userAgent.match(/MSIE/g),
            isSafari: isSafari(),
            isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
              win.navigator.userAgent
            )
          };
        })();

        function addClasses() {
          var swiper = this;
          var classNames = swiper.classNames;
          var params = swiper.params;
          var rtl = swiper.rtl;
          var $el = swiper.$el;
          var suffixes = [];

          suffixes.push(params.direction);

          if (params.freeMode) {
            suffixes.push("free-mode");
          }
          if (!Support.flexbox) {
            suffixes.push("no-flexbox");
          }
          if (params.autoHeight) {
            suffixes.push("autoheight");
          }
          if (rtl) {
            suffixes.push("rtl");
          }
          if (params.slidesPerColumn > 1) {
            suffixes.push("multirow");
          }
          if (Device.android) {
            suffixes.push("android");
          }
          if (Device.ios) {
            suffixes.push("ios");
          }
          // WP8 Touch Events Fix
          if (
            Browser.isIE &&
            (Support.pointerEvents || Support.prefixedPointerEvents)
          ) {
            suffixes.push("wp8-" + params.direction);
          }

          suffixes.forEach(function(suffix) {
            classNames.push(params.containerModifierClass + suffix);
          });

          $el.addClass(classNames.join(" "));
        }

        function removeClasses() {
          var swiper = this;
          var $el = swiper.$el;
          var classNames = swiper.classNames;

          $el.removeClass(classNames.join(" "));
        }

        var classes = { addClasses: addClasses, removeClasses: removeClasses };

        function loadImage(
          imageEl,
          src,
          srcset,
          sizes,
          checkForComplete,
          callback
        ) {
          var image;
          function onReady() {
            if (callback) {
              callback();
            }
          }
          if (!imageEl.complete || !checkForComplete) {
            if (src) {
              image = new win.Image();
              image.onload = onReady;
              image.onerror = onReady;
              if (sizes) {
                image.sizes = sizes;
              }
              if (srcset) {
                image.srcset = srcset;
              }
              if (src) {
                image.src = src;
              }
            } else {
              onReady();
            }
          } else {
            // image already loaded...
            onReady();
          }
        }

        function preloadImages() {
          var swiper = this;
          swiper.imagesToLoad = swiper.$el.find("img");
          function onReady() {
            if (
              typeof swiper === "undefined" ||
              swiper === null ||
              !swiper ||
              swiper.destroyed
            ) {
              return;
            }
            if (swiper.imagesLoaded !== undefined) {
              swiper.imagesLoaded += 1;
            }
            if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
              if (swiper.params.updateOnImagesReady) {
                swiper.update();
              }
              swiper.emit("imagesReady");
            }
          }
          for (var i = 0; i < swiper.imagesToLoad.length; i += 1) {
            var imageEl = swiper.imagesToLoad[i];
            swiper.loadImage(
              imageEl,
              imageEl.currentSrc || imageEl.getAttribute("src"),
              imageEl.srcset || imageEl.getAttribute("srcset"),
              imageEl.sizes || imageEl.getAttribute("sizes"),
              true,
              onReady
            );
          }
        }

        var images = {
          loadImage: loadImage,
          preloadImages: preloadImages
        };

        function checkOverflow() {
          var swiper = this;
          var wasLocked = swiper.isLocked;

          swiper.isLocked = swiper.snapGrid.length === 1;
          swiper.allowSlideNext = !swiper.isLocked;
          swiper.allowSlidePrev = !swiper.isLocked;

          // events
          if (wasLocked !== swiper.isLocked) {
            swiper.emit(swiper.isLocked ? "lock" : "unlock");
          }

          if (wasLocked && wasLocked !== swiper.isLocked) {
            swiper.isEnd = false;
            swiper.navigation.update();
          }
        }

        var checkOverflow$1 = { checkOverflow: checkOverflow };

        var defaults = {
          init: true,
          direction: "horizontal",
          touchEventsTarget: "container",
          initialSlide: 0,
          speed: 300,
          //
          preventIntercationOnTransition: false,

          // To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
          iOSEdgeSwipeDetection: false,
          iOSEdgeSwipeThreshold: 20,

          // Free mode
          freeMode: false,
          freeModeMomentum: true,
          freeModeMomentumRatio: 1,
          freeModeMomentumBounce: true,
          freeModeMomentumBounceRatio: 1,
          freeModeMomentumVelocityRatio: 1,
          freeModeSticky: false,
          freeModeMinimumVelocity: 0.02,

          // Autoheight
          autoHeight: false,

          // Set wrapper width
          setWrapperSize: false,

          // Virtual Translate
          virtualTranslate: false,

          // Effects
          effect: "slide", // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

          // Breakpoints
          breakpoints: undefined,

          // Slides grid
          spaceBetween: 0,
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerColumnFill: "column",
          slidesPerGroup: 1,
          centeredSlides: false,
          slidesOffsetBefore: 0, // in px
          slidesOffsetAfter: 0, // in px
          normalizeSlideIndex: true,

          // Disable swiper and hide navigation when container not overflow
          watchOverflow: false,

          // Round length
          roundLengths: false,

          // Touches
          touchRatio: 1,
          touchAngle: 45,
          simulateTouch: true,
          shortSwipes: true,
          longSwipes: true,
          longSwipesRatio: 0.5,
          longSwipesMs: 300,
          followFinger: true,
          allowTouchMove: true,
          threshold: 0,
          touchMoveStopPropagation: true,
          touchReleaseOnEdges: false,

          // Unique Navigation Elements
          uniqueNavElements: true,

          // Resistance
          resistance: true,
          resistanceRatio: 0.85,

          // Progress
          watchSlidesProgress: false,
          watchSlidesVisibility: false,

          // Cursor
          grabCursor: false,

          // Clicks
          preventClicks: true,
          preventClicksPropagation: true,
          slideToClickedSlide: false,

          // Images
          preloadImages: true,
          updateOnImagesReady: true,

          // loop
          loop: false,
          loopAdditionalSlides: 0,
          loopedSlides: null,
          loopFillGroupWithBlank: false,

          // Swiping/no swiping
          allowSlidePrev: true,
          allowSlideNext: true,
          swipeHandler: null, // '.swipe-handler',
          noSwiping: true,
          noSwipingClass: "swiper-no-swiping",
          noSwipingSelector: null,

          // Passive Listeners
          passiveListeners: true,

          // NS
          containerModifierClass: "swiper-container-", // NEW
          slideClass: "swiper-slide",
          slideBlankClass: "swiper-slide-invisible-blank",
          slideActiveClass: "swiper-slide-active",
          slideDuplicateActiveClass: "swiper-slide-duplicate-active",
          slideVisibleClass: "swiper-slide-visible",
          slideDuplicateClass: "swiper-slide-duplicate",
          slideNextClass: "swiper-slide-next",
          slideDuplicateNextClass: "swiper-slide-duplicate-next",
          slidePrevClass: "swiper-slide-prev",
          slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
          wrapperClass: "swiper-wrapper",

          // Callbacks
          runCallbacksOnInit: true
        };

        var prototypes = {
          update: update,
          translate: translate,
          transition: transition$1,
          slide: slide,
          loop: loop,
          grabCursor: grabCursor,
          manipulation: manipulation,
          events: events,
          breakpoints: breakpoints,
          checkOverflow: checkOverflow$1,
          classes: classes,
          images: images
        };

        var extendedDefaults = {};

        var Swiper = (function(SwiperClass$$1) {
          function Swiper() {
            var assign;

            var args = [],
              len = arguments.length;
            while (len--) args[len] = arguments[len];
            var el;
            var params;
            if (
              args.length === 1 &&
              args[0].constructor &&
              args[0].constructor === Object
            ) {
              params = args[0];
            } else {
              (assign = args), (el = assign[0]), (params = assign[1]);
            }
            if (!params) {
              params = {};
            }

            params = Utils.extend({}, params);
            if (el && !params.el) {
              params.el = el;
            }

            SwiperClass$$1.call(this, params);

            Object.keys(prototypes).forEach(function(prototypeGroup) {
              Object.keys(prototypes[prototypeGroup]).forEach(function(
                protoMethod
              ) {
                if (!Swiper.prototype[protoMethod]) {
                  Swiper.prototype[protoMethod] =
                    prototypes[prototypeGroup][protoMethod];
                }
              });
            });

            // Swiper Instance
            var swiper = this;
            if (typeof swiper.modules === "undefined") {
              swiper.modules = {};
            }
            Object.keys(swiper.modules).forEach(function(moduleName) {
              var module = swiper.modules[moduleName];
              if (module.params) {
                var moduleParamName = Object.keys(module.params)[0];
                var moduleParams = module.params[moduleParamName];
                if (typeof moduleParams !== "object") {
                  return;
                }
                if (!(moduleParamName in params && "enabled" in moduleParams)) {
                  return;
                }
                if (params[moduleParamName] === true) {
                  params[moduleParamName] = { enabled: true };
                }
                if (
                  typeof params[moduleParamName] === "object" &&
                  !("enabled" in params[moduleParamName])
                ) {
                  params[moduleParamName].enabled = true;
                }
                if (!params[moduleParamName]) {
                  params[moduleParamName] = { enabled: false };
                }
              }
            });

            // Extend defaults with modules params
            var swiperParams = Utils.extend({}, defaults);
            swiper.useModulesParams(swiperParams);

            // Extend defaults with passed params
            swiper.params = Utils.extend(
              {},
              swiperParams,
              extendedDefaults,
              params
            );
            swiper.originalParams = Utils.extend({}, swiper.params);
            swiper.passedParams = Utils.extend({}, params);

            // Save Dom lib
            swiper.$ = $;

            // Find el
            var $el = $(swiper.params.el);
            el = $el[0];

            if (!el) {
              return undefined;
            }

            if ($el.length > 1) {
              var swipers = [];
              $el.each(function(index, containerEl) {
                var newParams = Utils.extend({}, params, { el: containerEl });
                swipers.push(new Swiper(newParams));
              });
              return swipers;
            }

            el.swiper = swiper;
            $el.data("swiper", swiper);

            // Find Wrapper
            var $wrapperEl = $el.children("." + swiper.params.wrapperClass);

            // Extend Swiper
            Utils.extend(swiper, {
              $el: $el,
              el: el,
              $wrapperEl: $wrapperEl,
              wrapperEl: $wrapperEl[0],

              // Classes
              classNames: [],

              // Slides
              slides: $(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],

              // isDirection
              isHorizontal: function isHorizontal() {
                return swiper.params.direction === "horizontal";
              },
              isVertical: function isVertical() {
                return swiper.params.direction === "vertical";
              },
              // RTL
              rtl:
                el.dir.toLowerCase() === "rtl" ||
                $el.css("direction") === "rtl",
              rtlTranslate:
                swiper.params.direction === "horizontal" &&
                (el.dir.toLowerCase() === "rtl" ||
                  $el.css("direction") === "rtl"),
              wrongRTL: $wrapperEl.css("display") === "-webkit-box",

              // Indexes
              activeIndex: 0,
              realIndex: 0,

              //
              isBeginning: true,
              isEnd: false,

              // Props
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: false,

              // Locks
              allowSlideNext: swiper.params.allowSlideNext,
              allowSlidePrev: swiper.params.allowSlidePrev,

              // Touch Events
              touchEvents: (function touchEvents() {
                var touch = ["touchstart", "touchmove", "touchend"];
                var desktop = ["mousedown", "mousemove", "mouseup"];
                if (Support.pointerEvents) {
                  desktop = ["pointerdown", "pointermove", "pointerup"];
                } else if (Support.prefixedPointerEvents) {
                  desktop = ["MSPointerDown", "MSPointerMove", "MSPointerUp"];
                }
                swiper.touchEventsTouch = {
                  start: touch[0],
                  move: touch[1],
                  end: touch[2]
                };
                swiper.touchEventsDesktop = {
                  start: desktop[0],
                  move: desktop[1],
                  end: desktop[2]
                };
                return Support.touch || !swiper.params.simulateTouch
                  ? swiper.touchEventsTouch
                  : swiper.touchEventsDesktop;
              })(),
              touchEventsData: {
                isTouched: undefined,
                isMoved: undefined,
                allowTouchCallbacks: undefined,
                touchStartTime: undefined,
                isScrolling: undefined,
                currentTranslate: undefined,
                startTranslate: undefined,
                allowThresholdMove: undefined,
                // Form elements to match
                formElements: "input, select, option, textarea, button, video",
                // Last click time
                lastClickTime: Utils.now(),
                clickTimeout: undefined,
                // Velocities
                velocities: [],
                allowMomentumBounce: undefined,
                isTouchEvent: undefined,
                startMoving: undefined
              },

              // Clicks
              allowClick: true,

              // Touches
              allowTouchMove: swiper.params.allowTouchMove,

              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
              },

              // Images
              imagesToLoad: [],
              imagesLoaded: 0
            });

            // Install Modules
            swiper.useModules();

            // Init
            if (swiper.params.init) {
              swiper.init();
            }

            // Return app instance
            return swiper;
          }

          if (SwiperClass$$1) Swiper.__proto__ = SwiperClass$$1;
          Swiper.prototype = Object.create(
            SwiperClass$$1 && SwiperClass$$1.prototype
          );
          Swiper.prototype.constructor = Swiper;

          var staticAccessors = {
            extendedDefaults: { configurable: true },
            defaults: { configurable: true },
            Class: { configurable: true },
            $: { configurable: true }
          };
          Swiper.prototype.slidesPerViewDynamic = function slidesPerViewDynamic() {
            var swiper = this;
            var params = swiper.params;
            var slides = swiper.slides;
            var slidesGrid = swiper.slidesGrid;
            var swiperSize = swiper.size;
            var activeIndex = swiper.activeIndex;
            var spv = 1;
            if (params.centeredSlides) {
              var slideSize = slides[activeIndex].swiperSlideSize;
              var breakLoop;
              for (var i = activeIndex + 1; i < slides.length; i += 1) {
                if (slides[i] && !breakLoop) {
                  slideSize += slides[i].swiperSlideSize;
                  spv += 1;
                  if (slideSize > swiperSize) {
                    breakLoop = true;
                  }
                }
              }
              for (var i$1 = activeIndex - 1; i$1 >= 0; i$1 -= 1) {
                if (slides[i$1] && !breakLoop) {
                  slideSize += slides[i$1].swiperSlideSize;
                  spv += 1;
                  if (slideSize > swiperSize) {
                    breakLoop = true;
                  }
                }
              }
            } else {
              for (var i$2 = activeIndex + 1; i$2 < slides.length; i$2 += 1) {
                if (slidesGrid[i$2] - slidesGrid[activeIndex] < swiperSize) {
                  spv += 1;
                }
              }
            }
            return spv;
          };
          Swiper.prototype.update = function update$$1() {
            var swiper = this;
            if (!swiper || swiper.destroyed) {
              return;
            }
            var snapGrid = swiper.snapGrid;
            var params = swiper.params;
            // Breakpoints
            if (params.breakpoints) {
              swiper.setBreakpoint();
            }
            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateProgress();
            swiper.updateSlidesClasses();

            function setTranslate() {
              var translateValue = swiper.rtlTranslate
                ? swiper.translate * -1
                : swiper.translate;
              var newTranslate = Math.min(
                Math.max(translateValue, swiper.maxTranslate()),
                swiper.minTranslate()
              );
              swiper.setTranslate(newTranslate);
              swiper.updateActiveIndex();
              swiper.updateSlidesClasses();
            }
            var translated;
            if (swiper.params.freeMode) {
              setTranslate();
              if (swiper.params.autoHeight) {
                swiper.updateAutoHeight();
              }
            } else {
              if (
                (swiper.params.slidesPerView === "auto" ||
                  swiper.params.slidesPerView > 1) &&
                swiper.isEnd &&
                !swiper.params.centeredSlides
              ) {
                translated = swiper.slideTo(
                  swiper.slides.length - 1,
                  0,
                  false,
                  true
                );
              } else {
                translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
              }
              if (!translated) {
                setTranslate();
              }
            }
            if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
              swiper.checkOverflow();
            }
            swiper.emit("update");
          };
          Swiper.prototype.init = function init() {
            var swiper = this;
            if (swiper.initialized) {
              return;
            }

            swiper.emit("beforeInit");

            // Set breakpoint
            if (swiper.params.breakpoints) {
              swiper.setBreakpoint();
            }

            // Add Classes
            swiper.addClasses();

            // Create loop
            if (swiper.params.loop) {
              swiper.loopCreate();
            }

            // Update size
            swiper.updateSize();

            // Update slides
            swiper.updateSlides();

            if (swiper.params.watchOverflow) {
              swiper.checkOverflow();
            }

            // Set Grab Cursor
            if (swiper.params.grabCursor) {
              swiper.setGrabCursor();
            }

            if (swiper.params.preloadImages) {
              swiper.preloadImages();
            }

            // Slide To Initial Slide
            if (swiper.params.loop) {
              swiper.slideTo(
                swiper.params.initialSlide + swiper.loopedSlides,
                0,
                swiper.params.runCallbacksOnInit
              );
            } else {
              swiper.slideTo(
                swiper.params.initialSlide,
                0,
                swiper.params.runCallbacksOnInit
              );
            }

            // Attach events
            swiper.attachEvents();

            // Init Flag
            swiper.initialized = true;

            // Emit
            swiper.emit("init");
          };
          Swiper.prototype.destroy = function destroy(
            deleteInstance,
            cleanStyles
          ) {
            if (deleteInstance === void 0) deleteInstance = true;
            if (cleanStyles === void 0) cleanStyles = true;

            var swiper = this;
            var params = swiper.params;
            var $el = swiper.$el;
            var $wrapperEl = swiper.$wrapperEl;
            var slides = swiper.slides;

            if (typeof swiper.params === "undefined" || swiper.destroyed) {
              return null;
            }

            swiper.emit("beforeDestroy");

            // Init Flag
            swiper.initialized = false;

            // Detach events
            swiper.detachEvents();

            // Destroy loop
            if (params.loop) {
              swiper.loopDestroy();
            }

            // Cleanup styles
            if (cleanStyles) {
              swiper.removeClasses();
              $el.removeAttr("style");
              $wrapperEl.removeAttr("style");
              if (slides && slides.length) {
                slides
                  .removeClass(
                    [
                      params.slideVisibleClass,
                      params.slideActiveClass,
                      params.slideNextClass,
                      params.slidePrevClass
                    ].join(" ")
                  )
                  .removeAttr("style")
                  .removeAttr("data-swiper-slide-index")
                  .removeAttr("data-swiper-column")
                  .removeAttr("data-swiper-row");
              }
            }

            swiper.emit("destroy");

            // Detach emitter events
            Object.keys(swiper.eventsListeners).forEach(function(eventName) {
              swiper.off(eventName);
            });

            if (deleteInstance !== false) {
              swiper.$el[0].swiper = null;
              swiper.$el.data("swiper", null);
              Utils.deleteProps(swiper);
            }
            swiper.destroyed = true;

            return null;
          };
          Swiper.extendDefaults = function extendDefaults(newDefaults) {
            Utils.extend(extendedDefaults, newDefaults);
          };
          staticAccessors.extendedDefaults.get = function() {
            return extendedDefaults;
          };
          staticAccessors.defaults.get = function() {
            return defaults;
          };
          staticAccessors.Class.get = function() {
            return SwiperClass$$1;
          };
          staticAccessors.$.get = function() {
            return $;
          };

          Object.defineProperties(Swiper, staticAccessors);

          return Swiper;
        })(SwiperClass);

        var Device$1 = {
          name: "device",
          proto: {
            device: Device
          },
          static: {
            device: Device
          }
        };

        var Support$1 = {
          name: "support",
          proto: {
            support: Support
          },
          static: {
            support: Support
          }
        };

        var Browser$1 = {
          name: "browser",
          proto: {
            browser: Browser
          },
          static: {
            browser: Browser
          }
        };

        var Resize = {
          name: "resize",
          create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
              resize: {
                resizeHandler: function resizeHandler() {
                  if (!swiper || swiper.destroyed || !swiper.initialized) {
                    return;
                  }
                  swiper.emit("beforeResize");
                  swiper.emit("resize");
                },
                orientationChangeHandler: function orientationChangeHandler() {
                  if (!swiper || swiper.destroyed || !swiper.initialized) {
                    return;
                  }
                  swiper.emit("orientationchange");
                }
              }
            });
          },
          on: {
            init: function init() {
              var swiper = this;
              // Emit resize
              win.addEventListener("resize", swiper.resize.resizeHandler);

              // Emit orientationchange
              win.addEventListener(
                "orientationchange",
                swiper.resize.orientationChangeHandler
              );
            },
            destroy: function destroy() {
              var swiper = this;
              win.removeEventListener("resize", swiper.resize.resizeHandler);
              win.removeEventListener(
                "orientationchange",
                swiper.resize.orientationChangeHandler
              );
            }
          }
        };

        var Observer = {
          func: win.MutationObserver || win.WebkitMutationObserver,
          attach: function attach(target, options) {
            if (options === void 0) options = {};

            var swiper = this;

            var ObserverFunc = Observer.func;
            var observer = new ObserverFunc(function(mutations) {
              mutations.forEach(function(mutation) {
                swiper.emit("observerUpdate", mutation);
              });
            });

            observer.observe(target, {
              attributes:
                typeof options.attributes === "undefined"
                  ? true
                  : options.attributes,
              childList:
                typeof options.childList === "undefined"
                  ? true
                  : options.childList,
              characterData:
                typeof options.characterData === "undefined"
                  ? true
                  : options.characterData
            });

            swiper.observer.observers.push(observer);
          },
          init: function init() {
            var swiper = this;
            if (!Support.observer || !swiper.params.observer) {
              return;
            }
            if (swiper.params.observeParents) {
              var containerParents = swiper.$el.parents();
              for (var i = 0; i < containerParents.length; i += 1) {
                swiper.observer.attach(containerParents[i]);
              }
            }
            // Observe container
            swiper.observer.attach(swiper.$el[0], { childList: false });

            // Observe wrapper
            swiper.observer.attach(swiper.$wrapperEl[0], { attributes: false });
          },
          destroy: function destroy() {
            var swiper = this;
            swiper.observer.observers.forEach(function(observer) {
              observer.disconnect();
            });
            swiper.observer.observers = [];
          }
        };

        var Observer$1 = {
          name: "observer",
          params: {
            observer: false,
            observeParents: false
          },
          create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
              observer: {
                init: Observer.init.bind(swiper),
                attach: Observer.attach.bind(swiper),
                destroy: Observer.destroy.bind(swiper),
                observers: []
              }
            });
          },
          on: {
            init: function init() {
              var swiper = this;
              swiper.observer.init();
            },
            destroy: function destroy() {
              var swiper = this;
              swiper.observer.destroy();
            }
          }
        };

        var Virtual = {
          update: function update(force) {
            var swiper = this;
            var ref = swiper.params;
            var slidesPerView = ref.slidesPerView;
            var slidesPerGroup = ref.slidesPerGroup;
            var centeredSlides = ref.centeredSlides;
            var ref$1 = swiper.virtual;
            var previousFrom = ref$1.from;
            var previousTo = ref$1.to;
            var slides = ref$1.slides;
            var previousSlidesGrid = ref$1.slidesGrid;
            var renderSlide = ref$1.renderSlide;
            var previousOffset = ref$1.offset;
            swiper.updateActiveIndex();
            var activeIndex = swiper.activeIndex || 0;

            var offsetProp;
            if (swiper.rtlTranslate) {
              offsetProp = "right";
            } else {
              offsetProp = swiper.isHorizontal() ? "left" : "top";
            }

            var slidesAfter;
            var slidesBefore;
            if (centeredSlides) {
              slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup;
              slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup;
            } else {
              slidesAfter = slidesPerView + (slidesPerGroup - 1);
              slidesBefore = slidesPerGroup;
            }
            var from = Math.max((activeIndex || 0) - slidesBefore, 0);
            var to = Math.min(
              (activeIndex || 0) + slidesAfter,
              slides.length - 1
            );
            var offset =
              (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);

            Utils.extend(swiper.virtual, {
              from: from,
              to: to,
              offset: offset,
              slidesGrid: swiper.slidesGrid
            });

            function onRendered() {
              swiper.updateSlides();
              swiper.updateProgress();
              swiper.updateSlidesClasses();
              if (swiper.lazy && swiper.params.lazy.enabled) {
                swiper.lazy.load();
              }
            }

            if (previousFrom === from && previousTo === to && !force) {
              if (
                swiper.slidesGrid !== previousSlidesGrid &&
                offset !== previousOffset
              ) {
                swiper.slides.css(offsetProp, offset + "px");
              }
              swiper.updateProgress();
              return;
            }
            if (swiper.params.virtual.renderExternal) {
              swiper.params.virtual.renderExternal.call(swiper, {
                offset: offset,
                from: from,
                to: to,
                slides: (function getSlides() {
                  var slidesToRender = [];
                  for (var i = from; i <= to; i += 1) {
                    slidesToRender.push(slides[i]);
                  }
                  return slidesToRender;
                })()
              });
              onRendered();
              return;
            }
            var prependIndexes = [];
            var appendIndexes = [];
            if (force) {
              swiper.$wrapperEl.find("." + swiper.params.slideClass).remove();
            } else {
              for (var i = previousFrom; i <= previousTo; i += 1) {
                if (i < from || i > to) {
                  swiper.$wrapperEl
                    .find(
                      "." +
                        swiper.params.slideClass +
                        '[data-swiper-slide-index="' +
                        i +
                        '"]'
                    )
                    .remove();
                }
              }
            }
            for (var i$1 = 0; i$1 < slides.length; i$1 += 1) {
              if (i$1 >= from && i$1 <= to) {
                if (typeof previousTo === "undefined" || force) {
                  appendIndexes.push(i$1);
                } else {
                  if (i$1 > previousTo) {
                    appendIndexes.push(i$1);
                  }
                  if (i$1 < previousFrom) {
                    prependIndexes.push(i$1);
                  }
                }
              }
            }
            appendIndexes.forEach(function(index) {
              swiper.$wrapperEl.append(renderSlide(slides[index], index));
            });
            prependIndexes
              .sort(function(a, b) {
                return a < b;
              })
              .forEach(function(index) {
                swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
              });
            swiper.$wrapperEl
              .children(".swiper-slide")
              .css(offsetProp, offset + "px");
            onRendered();
          },
          renderSlide: function renderSlide(slide, index) {
            var swiper = this;
            var params = swiper.params.virtual;
            if (params.cache && swiper.virtual.cache[index]) {
              return swiper.virtual.cache[index];
            }
            var $slideEl = params.renderSlide
              ? $(params.renderSlide.call(swiper, slide, index))
              : $(
                  '<div class="' +
                    swiper.params.slideClass +
                    '" data-swiper-slide-index="' +
                    index +
                    '">' +
                    slide +
                    "</div>"
                );
            if (!$slideEl.attr("data-swiper-slide-index")) {
              $slideEl.attr("data-swiper-slide-index", index);
            }
            if (params.cache) {
              swiper.virtual.cache[index] = $slideEl;
            }
            return $slideEl;
          },
          appendSlide: function appendSlide(slide) {
            var swiper = this;
            swiper.virtual.slides.push(slide);
            swiper.virtual.update(true);
          },
          prependSlide: function prependSlide(slide) {
            var swiper = this;
            swiper.virtual.slides.unshift(slide);
            if (swiper.params.virtual.cache) {
              var cache = swiper.virtual.cache;
              var newCache = {};
              Object.keys(cache).forEach(function(cachedIndex) {
                newCache[cachedIndex + 1] = cache[cachedIndex];
              });
              swiper.virtual.cache = newCache;
            }
            swiper.virtual.update(true);
            swiper.slideNext(0);
          }
        };

        var Virtual$1 = {
          name: "virtual",
          params: {
            virtual: {
              enabled: false,
              slides: [],
              cache: true,
              renderSlide: null,
              renderExternal: null
            }
          },
          create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
              virtual: {
                update: Virtual.update.bind(swiper),
                appendSlide: Virtual.appendSlide.bind(swiper),
                prependSlide: Virtual.prependSlide.bind(swiper),
                renderSlide: Virtual.renderSlide.bind(swiper),
                slides: swiper.params.virtual.slides,
                cache: {}
              }
            });
          },
          on: {
            beforeInit: function beforeInit() {
              var swiper = this;
              if (!swiper.params.virtual.enabled) {
                return;
              }
              swiper.classNames.push(
                swiper.params.containerModifierClass + "virtual"
              );
              var overwriteParams = {
                watchSlidesProgress: true
              };
              Utils.extend(swiper.params, overwriteParams);
              Utils.extend(swiper.originalParams, overwriteParams);

              swiper.virtual.update();
            },
            setTranslate: function setTranslate() {
              var swiper = this;
              if (!swiper.params.virtual.enabled) {
                return;
              }
              swiper.virtual.update();
            }
          }
        };

        var Keyboard = {
          handle: function handle(event) {
            var swiper = this;
            var rtl = swiper.rtlTranslate;
            var e = event;
            if (e.originalEvent) {
              e = e.originalEvent;
            } // jquery fix
            var kc = e.keyCode || e.charCode;
            // Directions locks
            if (
              !swiper.allowSlideNext &&
              ((swiper.isHorizontal() && kc === 39) ||
                (swiper.isVertical() && kc === 40))
            ) {
              return false;
            }
            if (
              !swiper.allowSlidePrev &&
              ((swiper.isHorizontal() && kc === 37) ||
                (swiper.isVertical() && kc === 38))
            ) {
              return false;
            }
            if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
              return undefined;
            }
            if (
              doc.activeElement &&
              doc.activeElement.nodeName &&
              (doc.activeElement.nodeName.toLowerCase() === "input" ||
                doc.activeElement.nodeName.toLowerCase() === "textarea")
            ) {
              return undefined;
            }
            if (
              swiper.params.keyboard.onlyInViewport &&
              (kc === 37 || kc === 39 || kc === 38 || kc === 40)
            ) {
              var inView = false;
              // Check that swiper should be inside of visible area of window
              if (
                swiper.$el.parents("." + swiper.params.slideClass).length > 0 &&
                swiper.$el.parents("." + swiper.params.slideActiveClass)
                  .length === 0
              ) {
                return undefined;
              }
              var windowWidth = win.innerWidth;
              var windowHeight = win.innerHeight;
              var swiperOffset = swiper.$el.offset();
              if (rtl) {
                swiperOffset.left -= swiper.$el[0].scrollLeft;
              }
              var swiperCoord = [
                [swiperOffset.left, swiperOffset.top],
                [swiperOffset.left + swiper.width, swiperOffset.top],
                [swiperOffset.left, swiperOffset.top + swiper.height],
                [
                  swiperOffset.left + swiper.width,
                  swiperOffset.top + swiper.height
                ]
              ];
              for (var i = 0; i < swiperCoord.length; i += 1) {
                var point = swiperCoord[i];
                if (
                  point[0] >= 0 &&
                  point[0] <= windowWidth &&
                  point[1] >= 0 &&
                  point[1] <= windowHeight
                ) {
                  inView = true;
                }
              }
              if (!inView) {
                return undefined;
              }
            }
            if (swiper.isHorizontal()) {
              if (kc === 37 || kc === 39) {
                if (e.preventDefault) {
                  e.preventDefault();
                } else {
                  e.returnValue = false;
                }
              }
              if ((kc === 39 && !rtl) || (kc === 37 && rtl)) {
                swiper.slideNext();
              }
              if ((kc === 37 && !rtl) || (kc === 39 && rtl)) {
                swiper.slidePrev();
              }
            } else {
              if (kc === 38 || kc === 40) {
                if (e.preventDefault) {
                  e.preventDefault();
                } else {
                  e.returnValue = false;
                }
              }
              if (kc === 40) {
                swiper.slideNext();
              }
              if (kc === 38) {
                swiper.slidePrev();
              }
            }
            swiper.emit("keyPress", kc);
            return undefined;
          },
          enable: function enable() {
            var swiper = this;
            if (swiper.keyboard.enabled) {
              return;
            }
            $(doc).on("keydown", swiper.keyboard.handle);
            swiper.keyboard.enabled = true;
          },
          disable: function disable() {
            var swiper = this;
            if (!swiper.keyboard.enabled) {
              return;
            }
            $(doc).off("keydown", swiper.keyboard.handle);
            swiper.keyboard.enabled = false;
          }
        };

        var Keyboard$1 = {
          name: "keyboard",
          params: {
            keyboard: {
              enabled: false,
              onlyInViewport: true
            }
          },
          create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
              keyboard: {
                enabled: false,
                enable: Keyboard.enable.bind(swiper),
                disable: Keyboard.disable.bind(swiper),
                handle: Keyboard.handle.bind(swiper)
              }
            });
          },
          on: {
            init: function init() {
              var swiper = this;
              if (swiper.params.keyboard.enabled) {
                swiper.keyboard.enable();
              }
            },
            destroy: function destroy() {
              var swiper = this;
              if (swiper.keyboard.enabled) {
                swiper.keyboard.disable();
              }
            }
          }
        };

        function isEventSupported() {
          var eventName = "onwheel";
          var isSupported = eventName in doc;

          if (!isSupported) {
            var element = doc.createElement("div");
            element.setAttribute(eventName, "return;");
            isSupported = typeof element[eventName] === "function";
          }

          if (
            !isSupported &&
            doc.implementation &&
            doc.implementation.hasFeature &&
            // always returns true in newer browsers as per the standard.
            // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
            doc.implementation.hasFeature("", "") !== true
          ) {
            // This is the only way to test support for the `wheel` event in IE9+.
            isSupported = doc.implementation.hasFeature("Events.wheel", "3.0");
          }

          return isSupported;
        }
        var Mousewheel = {
          lastScrollTime: Utils.now(),
          event: (function getEvent() {
            if (win.navigator.userAgent.indexOf("firefox") > -1) {
              return "DOMMouseScroll";
            }
            return isEventSupported() ? "wheel" : "mousewheel";
          })(),
          normalize: function normalize(e) {
            // Reasonable defaults
            var PIXEL_STEP = 10;
            var LINE_HEIGHT = 40;
            var PAGE_HEIGHT = 800;

            var sX = 0;
            var sY = 0; // spinX, spinY
            var pX = 0;
            var pY = 0; // pixelX, pixelY

            // Legacy
            if ("detail" in e) {
              sY = e.detail;
            }
            if ("wheelDelta" in e) {
              sY = -e.wheelDelta / 120;
            }
            if ("wheelDeltaY" in e) {
              sY = -e.wheelDeltaY / 120;
            }
            if ("wheelDeltaX" in e) {
              sX = -e.wheelDeltaX / 120;
            }

            // side scrolling on FF with DOMMouseScroll
            if ("axis" in e && e.axis === e.HORIZONTAL_AXIS) {
              sX = sY;
              sY = 0;
            }

            pX = sX * PIXEL_STEP;
            pY = sY * PIXEL_STEP;

            if ("deltaY" in e) {
              pY = e.deltaY;
            }
            if ("deltaX" in e) {
              pX = e.deltaX;
            }

            if ((pX || pY) && e.deltaMode) {
              if (e.deltaMode === 1) {
                // delta in LINE units
                pX *= LINE_HEIGHT;
                pY *= LINE_HEIGHT;
              } else {
                // delta in PAGE units
                pX *= PAGE_HEIGHT;
                pY *= PAGE_HEIGHT;
              }
            }

            // Fall-back if spin cannot be determined
            if (pX && !sX) {
              sX = pX < 1 ? -1 : 1;
            }
            if (pY && !sY) {
              sY = pY < 1 ? -1 : 1;
            }

            return {
              spinX: sX,
              spinY: sY,
              pixelX: pX,
              pixelY: pY
            };
          },
          handleMouseEnter: function handleMouseEnter() {
            var swiper = this;
            swiper.mouseEntered = true;
          },
          handleMouseLeave: function handleMouseLeave() {
            var swiper = this;
            swiper.mouseEntered = false;
          },
          handle: function handle(event) {
            var e = event;
            var swiper = this;
            var params = swiper.params.mousewheel;

            if (!swiper.mouseEntered && !params.releaseOnEdges) {
              return true;
            }

            if (e.originalEvent) {
              e = e.originalEvent;
            } // jquery fix
            var delta = 0;
            var rtlFactor = swiper.rtlTranslate ? -1 : 1;

            var data = Mousewheel.normalize(e);

            if (params.forceToAxis) {
              if (swiper.isHorizontal()) {
                if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) {
                  delta = data.pixelX * rtlFactor;
                } else {
                  return true;
                }
              } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) {
                delta = data.pixelY;
              } else {
                return true;
              }
            } else {
              delta =
                Math.abs(data.pixelX) > Math.abs(data.pixelY)
                  ? -data.pixelX * rtlFactor
                  : -data.pixelY;
            }

            if (delta === 0) {
              return true;
            }

            if (params.invert) {
              delta = -delta;
            }

            if (!swiper.params.freeMode) {
              if (Utils.now() - swiper.mousewheel.lastScrollTime > 60) {
                if (delta < 0) {
                  if (
                    (!swiper.isEnd || swiper.params.loop) &&
                    !swiper.animating
                  ) {
                    swiper.slideNext();
                    swiper.emit("scroll", e);
                  } else if (params.releaseOnEdges) {
                    return true;
                  }
                } else if (
                  (!swiper.isBeginning || swiper.params.loop) &&
                  !swiper.animating
                ) {
                  swiper.slidePrev();
                  swiper.emit("scroll", e);
                } else if (params.releaseOnEdges) {
                  return true;
                }
              }
              swiper.mousewheel.lastScrollTime = new win.Date().getTime();
            } else {
              // Freemode or scrollContainer:
              if (swiper.params.loop) {
                swiper.loopFix();
              }
              var position = swiper.getTranslate() + delta * params.sensitivity;
              var wasBeginning = swiper.isBeginning;
              var wasEnd = swiper.isEnd;

              if (position >= swiper.minTranslate()) {
                position = swiper.minTranslate();
              }
              if (position <= swiper.maxTranslate()) {
                position = swiper.maxTranslate();
              }

              swiper.setTransition(0);
              swiper.setTranslate(position);
              swiper.updateProgress();
              swiper.updateActiveIndex();
              swiper.updateSlidesClasses();

              if (
                (!wasBeginning && swiper.isBeginning) ||
                (!wasEnd && swiper.isEnd)
              ) {
                swiper.updateSlidesClasses();
              }

              if (swiper.params.freeModeSticky) {
                clearTimeout(swiper.mousewheel.timeout);
                swiper.mousewheel.timeout = Utils.nextTick(function() {
                  swiper.slideToClosest();
                }, 300);
              }
              // Emit event
              swiper.emit("scroll", e);

              // Stop autoplay
              if (
                swiper.params.autoplay &&
                swiper.params.autoplayDisableOnInteraction
              ) {
                swiper.autoplay.stop();
              }
              // Return page scroll on edge positions
              if (
                position === swiper.minTranslate() ||
                position === swiper.maxTranslate()
              ) {
                return true;
              }
            }

            if (e.preventDefault) {
              e.preventDefault();
            } else {
              e.returnValue = false;
            }
            return false;
          },
          enable: function enable() {
            var swiper = this;
            if (!Mousewheel.event) {
              return false;
            }
            if (swiper.mousewheel.enabled) {
              return false;
            }
            var target = swiper.$el;
            if (swiper.params.mousewheel.eventsTarged !== "container") {
              target = $(swiper.params.mousewheel.eventsTarged);
            }
            target.on("mouseenter", swiper.mousewheel.handleMouseEnter);
            target.on("mouseleave", swiper.mousewheel.handleMouseLeave);
            target.on(Mousewheel.event, swiper.mousewheel.handle);
            swiper.mousewheel.enabled = true;
            return true;
          },
          disable: function disable() {
            var swiper = this;
            if (!Mousewheel.event) {
              return false;
            }
            if (!swiper.mousewheel.enabled) {
              return false;
            }
            var target = swiper.$el;
            if (swiper.params.mousewheel.eventsTarged !== "container") {
              target = $(swiper.params.mousewheel.eventsTarged);
            }
            target.off(Mousewheel.event, swiper.mousewheel.handle);
            swiper.mousewheel.enabled = false;
            return true;
          }
        };

        var Mousewheel$1 = {
          name: "mousewheel",
          params: {
            mousewheel: {
              enabled: false,
              releaseOnEdges: false,
              invert: false,
              forceToAxis: false,
              sensitivity: 1,
              eventsTarged: "container"
            }
          },
          create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
              mousewheel: {
                enabled: false,
                enable: Mousewheel.enable.bind(swiper),
                disable: Mousewheel.disable.bind(swiper),
                handle: Mousewheel.handle.bind(swiper),
                handleMouseEnter: Mousewheel.handleMouseEnter.bind(swiper),
                handleMouseLeave: Mousewheel.handleMouseLeave.bind(swiper),
                lastScrollTime: Utils.now()
              }
            });
          },
          on: {
            init: function init() {
              var swiper = this;
              if (swiper.params.mousewheel.enabled) {
                swiper.mousewheel.enable();
              }
            },
            destroy: function destroy() {
              var swiper = this;
              if (swiper.mousewheel.enabled) {
                swiper.mousewheel.disable();
              }
            }
          }
        };

        var Navigation = {
          update: function update() {
            // Update Navigation Buttons
            var swiper = this;
            var params = swiper.params.navigation;

            if (swiper.params.loop) {
              return;
            }
            var ref = swiper.navigation;
            var $nextEl = ref.$nextEl;
            var $prevEl = ref.$prevEl;

            if ($prevEl && $prevEl.length > 0) {
              if (swiper.isBeginning) {
                $prevEl.addClass(params.disabledClass);
              } else {
                $prevEl.removeClass(params.disabledClass);
              }
              $prevEl[
                swiper.params.watchOverflow && swiper.isLocked
                  ? "addClass"
                  : "removeClass"
              ](params.lockClass);
            }
            if ($nextEl && $nextEl.length > 0) {
              if (swiper.isEnd) {
                $nextEl.addClass(params.disabledClass);
              } else {
                $nextEl.removeClass(params.disabledClass);
              }
              $nextEl[
                swiper.params.watchOverflow && swiper.isLocked
                  ? "addClass"
                  : "removeClass"
              ](params.lockClass);
            }
          },
          init: function init() {
            var swiper = this;
            var params = swiper.params.navigation;
            if (!(params.nextEl || params.prevEl)) {
              return;
            }

            var $nextEl;
            var $prevEl;
            if (params.nextEl) {
              $nextEl = $(params.nextEl);
              if (
                swiper.params.uniqueNavElements &&
                typeof params.nextEl === "string" &&
                $nextEl.length > 1 &&
                swiper.$el.find(params.nextEl).length === 1
              ) {
                $nextEl = swiper.$el.find(params.nextEl);
              }
            }
            if (params.prevEl) {
              $prevEl = $(params.prevEl);
              if (
                swiper.params.uniqueNavElements &&
                typeof params.prevEl === "string" &&
                $prevEl.length > 1 &&
                swiper.$el.find(params.prevEl).length === 1
              ) {
                $prevEl = swiper.$el.find(params.prevEl);
              }
            }

            if ($nextEl && $nextEl.length > 0) {
              $nextEl.on("click", function(e) {
                e.preventDefault();
                if (swiper.isEnd && !swiper.params.loop) {
                  return;
                }
                swiper.slideNext();
              });
            }
            if ($prevEl && $prevEl.length > 0) {
              $prevEl.on("click", function(e) {
                e.preventDefault();
                if (swiper.isBeginning && !swiper.params.loop) {
                  return;
                }
                swiper.slidePrev();
              });
            }

            Utils.extend(swiper.navigation, {
              $nextEl: $nextEl,
              nextEl: $nextEl && $nextEl[0],
              $prevEl: $prevEl,
              prevEl: $prevEl && $prevEl[0]
            });
          },
          destroy: function destroy() {
            var swiper = this;
            var ref = swiper.navigation;
            var $nextEl = ref.$nextEl;
            var $prevEl = ref.$prevEl;
            if ($nextEl && $nextEl.length) {
              $nextEl.off("click");
              $nextEl.removeClass(swiper.params.navigation.disabledClass);
            }
            if ($prevEl && $prevEl.length) {
              $prevEl.off("click");
              $prevEl.removeClass(swiper.params.navigation.disabledClass);
            }
          }
        };

        var Navigation$1 = {
          name: "navigation",
          params: {
            navigation: {
              nextEl: null,
              prevEl: null,

              hideOnClick: false,
              disabledClass: "swiper-button-disabled",
              hiddenClass: "swiper-button-hidden",
              lockClass: "swiper-button-lock"
            }
          },
          create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
              navigation: {
                init: Navigation.init.bind(swiper),
                update: Navigation.update.bind(swiper),
                destroy: Navigation.destroy.bind(swiper)
              }
            });
          },
          on: {
            init: function init() {
              var swiper = this;
              swiper.navigation.init();
              swiper.navigation.update();
            },
            toEdge: function toEdge() {
              var swiper = this;
              swiper.navigation.update();
            },
            fromEdge: function fromEdge() {
              var swiper = this;
              swiper.navigation.update();
            },
            destroy: function destroy() {
              var swiper = this;
              swiper.navigation.destroy();
            },
            click: function click(e) {
              var swiper = this;
              var ref = swiper.navigation;
              var $nextEl = ref.$nextEl;
              var $prevEl = ref.$prevEl;
              if (
                swiper.params.navigation.hideOnClick &&
                !$(e.target).is($prevEl) &&
                !$(e.target).is($nextEl)
              ) {
                if ($nextEl) {
                  $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
                }
                if ($prevEl) {
                  $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
                }
              }
            }
          }
        };

        var Pagination = {
          update: function update() {
            // Render || Update Pagination bullets/items
            var swiper = this;
            var rtl = swiper.rtl;
            var params = swiper.params.pagination;
            if (
              !params.el ||
              !swiper.pagination.el ||
              !swiper.pagination.$el ||
              swiper.pagination.$el.length === 0
            ) {
              return;
            }
            var slidesLength =
              swiper.virtual && swiper.params.virtual.enabled
                ? swiper.virtual.slides.length
                : swiper.slides.length;
            var $el = swiper.pagination.$el;
            // Current/Total
            var current;
            var total = swiper.params.loop
              ? Math.ceil(
                  (slidesLength - swiper.loopedSlides * 2) /
                    swiper.params.slidesPerGroup
                )
              : swiper.snapGrid.length;
            if (swiper.params.loop) {
              current = Math.ceil(
                (swiper.activeIndex - swiper.loopedSlides) /
                  swiper.params.slidesPerGroup
              );
              if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
                current -= slidesLength - swiper.loopedSlides * 2;
              }
              if (current > total - 1) {
                current -= total;
              }
              if (current < 0 && swiper.params.paginationType !== "bullets") {
                current = total + current;
              }
            } else if (typeof swiper.snapIndex !== "undefined") {
              current = swiper.snapIndex;
            } else {
              current = swiper.activeIndex || 0;
            }
            // Types
            if (
              params.type === "bullets" &&
              swiper.pagination.bullets &&
              swiper.pagination.bullets.length > 0
            ) {
              var bullets = swiper.pagination.bullets;
              var firstIndex;
              var lastIndex;
              var midIndex;
              if (params.dynamicBullets) {
                swiper.pagination.bulletSize = bullets
                  .eq(0)
                  [swiper.isHorizontal() ? "outerWidth" : "outerHeight"](true);
                $el.css(
                  swiper.isHorizontal() ? "width" : "height",
                  swiper.pagination.bulletSize *
                    (params.dynamicMainBullets + 4) +
                    "px"
                );
                if (
                  params.dynamicMainBullets > 1 &&
                  swiper.previousIndex !== undefined
                ) {
                  swiper.pagination.dynamicBulletIndex +=
                    current - swiper.previousIndex;
                  if (
                    swiper.pagination.dynamicBulletIndex >
                    params.dynamicMainBullets - 1
                  ) {
                    swiper.pagination.dynamicBulletIndex =
                      params.dynamicMainBullets - 1;
                  } else if (swiper.pagination.dynamicBulletIndex < 0) {
                    swiper.pagination.dynamicBulletIndex = 0;
                  }
                }
                firstIndex = current - swiper.pagination.dynamicBulletIndex;
                lastIndex =
                  firstIndex +
                  (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                midIndex = (lastIndex + firstIndex) / 2;
              }
              bullets.removeClass(
                params.bulletActiveClass +
                  " " +
                  params.bulletActiveClass +
                  "-next " +
                  params.bulletActiveClass +
                  "-next-next " +
                  params.bulletActiveClass +
                  "-prev " +
                  params.bulletActiveClass +
                  "-prev-prev " +
                  params.bulletActiveClass +
                  "-main"
              );
              if ($el.length > 1) {
                bullets.each(function(index, bullet) {
                  var $bullet = $(bullet);
                  var bulletIndex = $bullet.index();
                  if (bulletIndex === current) {
                    $bullet.addClass(params.bulletActiveClass);
                  }
                  if (params.dynamicBullets) {
                    if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                      $bullet.addClass(params.bulletActiveClass + "-main");
                    }
                    if (bulletIndex === firstIndex) {
                      $bullet
                        .prev()
                        .addClass(params.bulletActiveClass + "-prev")
                        .prev()
                        .addClass(params.bulletActiveClass + "-prev-prev");
                    }
                    if (bulletIndex === lastIndex) {
                      $bullet
                        .next()
                        .addClass(params.bulletActiveClass + "-next")
                        .next()
                        .addClass(params.bulletActiveClass + "-next-next");
                    }
                  }
                });
              } else {
                var $bullet = bullets.eq(current);
                $bullet.addClass(params.bulletActiveClass);
                if (params.dynamicBullets) {
                  var $firstDisplayedBullet = bullets.eq(firstIndex);
                  var $lastDisplayedBullet = bullets.eq(lastIndex);
                  for (var i = firstIndex; i <= lastIndex; i += 1) {
                    bullets.eq(i).addClass(params.bulletActiveClass + "-main");
                  }
                  $firstDisplayedBullet
                    .prev()
                    .addClass(params.bulletActiveClass + "-prev")
                    .prev()
                    .addClass(params.bulletActiveClass + "-prev-prev");
                  $lastDisplayedBullet
                    .next()
                    .addClass(params.bulletActiveClass + "-next")
                    .next()
                    .addClass(params.bulletActiveClass + "-next-next");
                }
              }
              if (params.dynamicBullets) {
                var dynamicBulletsLength = Math.min(
                  bullets.length,
                  params.dynamicMainBullets + 4
                );
                var bulletsOffset =
                  (swiper.pagination.bulletSize * dynamicBulletsLength -
                    swiper.pagination.bulletSize) /
                    2 -
                  midIndex * swiper.pagination.bulletSize;
                var offsetProp = rtl ? "right" : "left";
                bullets.css(
                  swiper.isHorizontal() ? offsetProp : "top",
                  bulletsOffset + "px"
                );
              }
            }
            if (params.type === "fraction") {
              $el
                .find("." + params.currentClass)
                .text(params.formatFractionCurrent(current + 1));
              $el
                .find("." + params.totalClass)
                .text(params.formatFractionTotal(total));
            }
            if (params.type === "progressbar") {
              var progressbarDirection;
              if (params.progressbarOpposite) {
                progressbarDirection = swiper.isHorizontal()
                  ? "vertical"
                  : "horizontal";
              } else {
                progressbarDirection = swiper.isHorizontal()
                  ? "horizontal"
                  : "vertical";
              }
              var scale = (current + 1) / total;
              var scaleX = 1;
              var scaleY = 1;
              if (progressbarDirection === "horizontal") {
                scaleX = scale;
              } else {
                scaleY = scale;
              }
              $el
                .find("." + params.progressbarFillClass)
                .transform(
                  "translate3d(0,0,0) scaleX(" +
                    scaleX +
                    ") scaleY(" +
                    scaleY +
                    ")"
                )
                .transition(swiper.params.speed);
            }
            if (params.type === "custom" && params.renderCustom) {
              $el.html(params.renderCustom(swiper, current + 1, total));
              swiper.emit("paginationRender", swiper, $el[0]);
            } else {
              swiper.emit("paginationUpdate", swiper, $el[0]);
            }
            $el[
              swiper.params.watchOverflow && swiper.isLocked
                ? "addClass"
                : "removeClass"
            ](params.lockClass);
          },
          render: function render() {
            // Render Container
            var swiper = this;
            var params = swiper.params.pagination;
            if (
              !params.el ||
              !swiper.pagination.el ||
              !swiper.pagination.$el ||
              swiper.pagination.$el.length === 0
            ) {
              return;
            }
            var slidesLength =
              swiper.virtual && swiper.params.virtual.enabled
                ? swiper.virtual.slides.length
                : swiper.slides.length;

            var $el = swiper.pagination.$el;
            var paginationHTML = "";
            if (params.type === "bullets") {
              var numberOfBullets = swiper.params.loop
                ? Math.ceil(
                    (slidesLength - swiper.loopedSlides * 2) /
                      swiper.params.slidesPerGroup
                  )
                : swiper.snapGrid.length;
              for (var i = 0; i < numberOfBullets; i += 1) {
                if (params.renderBullet) {
                  paginationHTML += params.renderBullet.call(
                    swiper,
                    i,
                    params.bulletClass
                  );
                } else {
                  paginationHTML +=
                    "<" +
                    params.bulletElement +
                    ' class="' +
                    params.bulletClass +
                    '"></' +
                    params.bulletElement +
                    ">";
                }
              }
              $el.html(paginationHTML);
              swiper.pagination.bullets = $el.find("." + params.bulletClass);
            }
            if (params.type === "fraction") {
              if (params.renderFraction) {
                paginationHTML = params.renderFraction.call(
                  swiper,
                  params.currentClass,
                  params.totalClass
                );
              } else {
                paginationHTML =
                  '<span class="' +
                  params.currentClass +
                  '"></span>' +
                  " / " +
                  '<span class="' +
                  params.totalClass +
                  '"></span>';
              }
              $el.html(paginationHTML);
            }
            if (params.type === "progressbar") {
              if (params.renderProgressbar) {
                paginationHTML = params.renderProgressbar.call(
                  swiper,
                  params.progressbarFillClass
                );
              } else {
                paginationHTML =
                  '<span class="' + params.progressbarFillClass + '"></span>';
              }
              $el.html(paginationHTML);
            }
            if (params.type !== "custom") {
              swiper.emit("paginationRender", swiper.pagination.$el[0]);
            }
          },
          init: function init() {
            var swiper = this;
            var params = swiper.params.pagination;
            if (!params.el) {
              return;
            }

            var $el = $(params.el);
            if ($el.length === 0) {
              return;
            }

            if (
              swiper.params.uniqueNavElements &&
              typeof params.el === "string" &&
              $el.length > 1 &&
              swiper.$el.find(params.el).length === 1
            ) {
              $el = swiper.$el.find(params.el);
            }

            if (params.type === "bullets" && params.clickable) {
              $el.addClass(params.clickableClass);
            }

            $el.addClass(params.modifierClass + params.type);

            if (params.type === "bullets" && params.dynamicBullets) {
              $el.addClass(
                "" + params.modifierClass + params.type + "-dynamic"
              );
              swiper.pagination.dynamicBulletIndex = 0;
              if (params.dynamicMainBullets < 1) {
                params.dynamicMainBullets = 1;
              }
            }
            if (params.type === "progressbar" && params.progressbarOpposite) {
              $el.addClass(params.progressbarOppositeClass);
            }

            if (params.clickable) {
              $el.on("click", "." + params.bulletClass, function onClick(e) {
                e.preventDefault();
                var index = $(this).index() * swiper.params.slidesPerGroup;
                if (swiper.params.loop) {
                  index += swiper.loopedSlides;
                }
                swiper.slideTo(index);
              });
            }

            Utils.extend(swiper.pagination, {
              $el: $el,
              el: $el[0]
            });
          },
          destroy: function destroy() {
            var swiper = this;
            var params = swiper.params.pagination;
            if (
              !params.el ||
              !swiper.pagination.el ||
              !swiper.pagination.$el ||
              swiper.pagination.$el.length === 0
            ) {
              return;
            }
            var $el = swiper.pagination.$el;

            $el.removeClass(params.hiddenClass);
            $el.removeClass(params.modifierClass + params.type);
            if (swiper.pagination.bullets) {
              swiper.pagination.bullets.removeClass(params.bulletActiveClass);
            }
            if (params.clickable) {
              $el.off("click", "." + params.bulletClass);
            }
          }
        };

        var Pagination$1 = {
          name: "pagination",
          params: {
            pagination: {
              el: null,
              bulletElement: "span",
              clickable: false,
              hideOnClick: false,
              renderBullet: null,
              renderProgressbar: null,
              renderFraction: null,
              renderCustom: null,
              progressbarOpposite: false,
              type: "bullets", // 'bullets' or 'progressbar' or 'fraction' or 'custom'
              dynamicBullets: false,
              dynamicMainBullets: 1,
              formatFractionCurrent: function(number) {
                return number;
              },
              formatFractionTotal: function(number) {
                return number;
              },
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
              modifierClass: "swiper-pagination-", // NEW
              currentClass: "swiper-pagination-current",
              totalClass: "swiper-pagination-total",
              hiddenClass: "swiper-pagination-hidden",
              progressbarFillClass: "swiper-pagination-progressbar-fill",
              progressbarOppositeClass:
                "swiper-pagination-progressbar-opposite",
              clickableClass: "swiper-pagination-clickable", // NEW
              lockClass: "swiper-pagination-lock"
            }
          },
          create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
              pagination: {
                init: Pagination.init.bind(swiper),
                render: Pagination.render.bind(swiper),
                update: Pagination.update.bind(swiper),
                destroy: Pagination.destroy.bind(swiper),
                dynamicBulletIndex: 0
              }
            });
          },
          on: {
            init: function init() {
              var swiper = this;
              swiper.pagination.init();
              swiper.pagination.render();
              swiper.pagination.update();
            },
            activeIndexChange: function activeIndexChange() {
              var swiper = this;
              if (swiper.params.loop) {
                swiper.pagination.update();
              } else if (typeof swiper.snapIndex === "undefined") {
                swiper.pagination.update();
              }
            },
            snapIndexChange: function snapIndexChange() {
              var swiper = this;
              if (!swiper.params.loop) {
                swiper.pagination.update();
              }
            },
            slidesLengthChange: function slidesLengthChange() {
              var swiper = this;
              if (swiper.params.loop) {
                swiper.pagination.render();
                swiper.pagination.update();
              }
            },
            snapGridLengthChange: function snapGridLengthChange() {
              var swiper = this;
              if (!swiper.params.loop) {
                swiper.pagination.render();
                swiper.pagination.update();
              }
            },
            destroy: function destroy() {
              var swiper = this;
              swiper.pagination.destroy();
            },
            click: function click(e) {
              var swiper = this;
              if (
                swiper.params.pagination.el &&
                swiper.params.pagination.hideOnClick &&
                swiper.pagination.$el.length > 0 &&
                !$(e.target).hasClass(swiper.params.pagination.bulletClass)
              ) {
                swiper.pagination.$el.toggleClass(
                  swiper.params.pagination.hiddenClass
                );
              }
            }
          }
        };

        var Scrollbar = {
          setTranslate: function setTranslate() {
            var swiper = this;
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) {
              return;
            }
            var scrollbar = swiper.scrollbar;
            var rtl = swiper.rtlTranslate;
            var progress = swiper.progress;
            var dragSize = scrollbar.dragSize;
            var trackSize = scrollbar.trackSize;
            var $dragEl = scrollbar.$dragEl;
            var $el = scrollbar.$el;
            var params = swiper.params.scrollbar;

            var newSize = dragSize;
            var newPos = (trackSize - dragSize) * progress;
            if (rtl) {
              newPos = -newPos;
              if (newPos > 0) {
                newSize = dragSize - newPos;
                newPos = 0;
              } else if (-newPos + dragSize > trackSize) {
                newSize = trackSize + newPos;
              }
            } else if (newPos < 0) {
              newSize = dragSize + newPos;
              newPos = 0;
            } else if (newPos + dragSize > trackSize) {
              newSize = trackSize - newPos;
            }
            if (swiper.isHorizontal()) {
              if (Support.transforms3d) {
                $dragEl.transform("translate3d(" + newPos + "px, 0, 0)");
              } else {
                $dragEl.transform("translateX(" + newPos + "px)");
              }
              $dragEl[0].style.width = newSize + "px";
            } else {
              if (Support.transforms3d) {
                $dragEl.transform("translate3d(0px, " + newPos + "px, 0)");
              } else {
                $dragEl.transform("translateY(" + newPos + "px)");
              }
              $dragEl[0].style.height = newSize + "px";
            }
            if (params.hide) {
              clearTimeout(swiper.scrollbar.timeout);
              $el[0].style.opacity = 1;
              swiper.scrollbar.timeout = setTimeout(function() {
                $el[0].style.opacity = 0;
                $el.transition(400);
              }, 1000);
            }
          },
          setTransition: function setTransition(duration) {
            var swiper = this;
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) {
              return;
            }
            swiper.scrollbar.$dragEl.transition(duration);
          },
          updateSize: function updateSize() {
            var swiper = this;
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) {
              return;
            }

            var scrollbar = swiper.scrollbar;
            var $dragEl = scrollbar.$dragEl;
            var $el = scrollbar.$el;

            $dragEl[0].style.width = "";
            $dragEl[0].style.height = "";
            var trackSize = swiper.isHorizontal()
              ? $el[0].offsetWidth
              : $el[0].offsetHeight;

            var divider = swiper.size / swiper.virtualSize;
            var moveDivider = divider * (trackSize / swiper.size);
            var dragSize;
            if (swiper.params.scrollbar.dragSize === "auto") {
              dragSize = trackSize * divider;
            } else {
              dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
            }

            if (swiper.isHorizontal()) {
              $dragEl[0].style.width = dragSize + "px";
            } else {
              $dragEl[0].style.height = dragSize + "px";
            }

            if (divider >= 1) {
              $el[0].style.display = "none";
            } else {
              $el[0].style.display = "";
            }
            if (swiper.params.scrollbarHide) {
              $el[0].style.opacity = 0;
            }
            Utils.extend(scrollbar, {
              trackSize: trackSize,
              divider: divider,
              moveDivider: moveDivider,
              dragSize: dragSize
            });
            scrollbar.$el[
              swiper.params.watchOverflow && swiper.isLocked
                ? "addClass"
                : "removeClass"
            ](swiper.params.scrollbar.lockClass);
          },
          setDragPosition: function setDragPosition(e) {
            var swiper = this;
            var scrollbar = swiper.scrollbar;
            var rtl = swiper.rtlTranslate;
            var $el = scrollbar.$el;
            var dragSize = scrollbar.dragSize;
            var trackSize = scrollbar.trackSize;

            var pointerPosition;
            if (swiper.isHorizontal()) {
              pointerPosition =
                e.type === "touchstart" || e.type === "touchmove"
                  ? e.targetTouches[0].pageX
                  : e.pageX || e.clientX;
            } else {
              pointerPosition =
                e.type === "touchstart" || e.type === "touchmove"
                  ? e.targetTouches[0].pageY
                  : e.pageY || e.clientY;
            }
            var positionRatio;
            positionRatio =
              (pointerPosition -
                $el.offset()[swiper.isHorizontal() ? "left" : "top"] -
                dragSize / 2) /
              (trackSize - dragSize);
            positionRatio = Math.max(Math.min(positionRatio, 1), 0);
            if (rtl) {
              positionRatio = 1 - positionRatio;
            }

            var position =
              swiper.minTranslate() +
              (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;

            swiper.updateProgress(position);
            swiper.setTranslate(position);
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
          },
          onDragStart: function onDragStart(e) {
            var swiper = this;
            var params = swiper.params.scrollbar;
            var scrollbar = swiper.scrollbar;
            var $wrapperEl = swiper.$wrapperEl;
            var $el = scrollbar.$el;
            var $dragEl = scrollbar.$dragEl;
            swiper.scrollbar.isTouched = true;
            e.preventDefault();
            e.stopPropagation();

            $wrapperEl.transition(100);
            $dragEl.transition(100);
            scrollbar.setDragPosition(e);

            clearTimeout(swiper.scrollbar.dragTimeout);

            $el.transition(0);
            if (params.hide) {
              $el.css("opacity", 1);
            }
            swiper.emit("scrollbarDragStart", e);
          },
          onDragMove: function onDragMove(e) {
            var swiper = this;
            var scrollbar = swiper.scrollbar;
            var $wrapperEl = swiper.$wrapperEl;
            var $el = scrollbar.$el;
            var $dragEl = scrollbar.$dragEl;

            if (!swiper.scrollbar.isTouched) {
              return;
            }
            if (e.preventDefault) {
              e.preventDefault();
            } else {
              e.returnValue = false;
            }
            scrollbar.setDragPosition(e);
            $wrapperEl.transition(0);
            $el.transition(0);
            $dragEl.transition(0);
            swiper.emit("scrollbarDragMove", e);
          },
          onDragEnd: function onDragEnd(e) {
            var swiper = this;

            var params = swiper.params.scrollbar;
            var scrollbar = swiper.scrollbar;
            var $el = scrollbar.$el;

            if (!swiper.scrollbar.isTouched) {
              return;
            }
            swiper.scrollbar.isTouched = false;
            if (params.hide) {
              clearTimeout(swiper.scrollbar.dragTimeout);
              swiper.scrollbar.dragTimeout = Utils.nextTick(function() {
                $el.css("opacity", 0);
                $el.transition(400);
              }, 1000);
            }
            swiper.emit("scrollbarDragEnd", e);
            if (params.snapOnRelease) {
              swiper.slideToClosest();
            }
          },
          enableDraggable: function enableDraggable() {
            var swiper = this;
            if (!swiper.params.scrollbar.el) {
              return;
            }
            var scrollbar = swiper.scrollbar;
            var touchEvents = swiper.touchEvents;
            var touchEventsDesktop = swiper.touchEventsDesktop;
            var params = swiper.params;
            var $el = scrollbar.$el;
            var target = $el[0];
            var activeListener =
              Support.passiveListener && params.passiveListener
                ? { passive: false, capture: false }
                : false;
            var passiveListener =
              Support.passiveListener && params.passiveListener
                ? { passive: true, capture: false }
                : false;
            if (
              !Support.touch &&
              (Support.pointerEvents || Support.prefixedPointerEvents)
            ) {
              target.addEventListener(
                touchEventsDesktop.start,
                swiper.scrollbar.onDragStart,
                activeListener
              );
              doc.addEventListener(
                touchEventsDesktop.move,
                swiper.scrollbar.onDragMove,
                activeListener
              );
              doc.addEventListener(
                touchEventsDesktop.end,
                swiper.scrollbar.onDragEnd,
                passiveListener
              );
            } else {
              if (Support.touch) {
                target.addEventListener(
                  touchEvents.start,
                  swiper.scrollbar.onDragStart,
                  activeListener
                );
                target.addEventListener(
                  touchEvents.move,
                  swiper.scrollbar.onDragMove,
                  activeListener
                );
                target.addEventListener(
                  touchEvents.end,
                  swiper.scrollbar.onDragEnd,
                  passiveListener
                );
              }
              if (
                (params.simulateTouch && !Device.ios && !Device.android) ||
                (params.simulateTouch && !Support.touch && Device.ios)
              ) {
                target.addEventListener(
                  "mousedown",
                  swiper.scrollbar.onDragStart,
                  activeListener
                );
                doc.addEventListener(
                  "mousemove",
                  swiper.scrollbar.onDragMove,
                  activeListener
                );
                doc.addEventListener(
                  "mouseup",
                  swiper.scrollbar.onDragEnd,
                  passiveListener
                );
              }
            }
          },
          disableDraggable: function disableDraggable() {
            var swiper = this;
            if (!swiper.params.scrollbar.el) {
              return;
            }
            var scrollbar = swiper.scrollbar;
            var touchEvents = swiper.touchEvents;
            var touchEventsDesktop = swiper.touchEventsDesktop;
            var params = swiper.params;
            var $el = scrollbar.$el;
            var target = $el[0];
            var activeListener =
              Support.passiveListener && params.passiveListener
                ? { passive: false, capture: false }
                : false;
            var passiveListener =
              Support.passiveListener && params.passiveListener
                ? { passive: true, capture: false }
                : false;
            if (
              !Support.touch &&
              (Support.pointerEvents || Support.prefixedPointerEvents)
            ) {
              target.removeEventListener(
                touchEventsDesktop.start,
                swiper.scrollbar.onDragStart,
                activeListener
              );
              doc.removeEventListener(
                touchEventsDesktop.move,
                swiper.scrollbar.onDragMove,
                activeListener
              );
              doc.removeEventListener(
                touchEventsDesktop.end,
                swiper.scrollbar.onDragEnd,
                passiveListener
              );
            } else {
              if (Support.touch) {
                target.removeEventListener(
                  touchEvents.start,
                  swiper.scrollbar.onDragStart,
                  activeListener
                );
                target.removeEventListener(
                  touchEvents.move,
                  swiper.scrollbar.onDragMove,
                  activeListener
                );
                target.removeEventListener(
                  touchEvents.end,
                  swiper.scrollbar.onDragEnd,
                  passiveListener
                );
              }
              if (
                (params.simulateTouch && !Device.ios && !Device.android) ||
                (params.simulateTouch && !Support.touch && Device.ios)
              ) {
                target.removeEventListener(
                  "mousedown",
                  swiper.scrollbar.onDragStart,
                  activeListener
                );
                doc.removeEventListener(
                  "mousemove",
                  swiper.scrollbar.onDragMove,
                  activeListener
                );
                doc.removeEventListener(
                  "mouseup",
                  swiper.scrollbar.onDragEnd,
                  passiveListener
                );
              }
            }
          },
          init: function init() {
            var swiper = this;
            if (!swiper.params.scrollbar.el) {
              return;
            }
            var scrollbar = swiper.scrollbar;
            var $swiperEl = swiper.$el;
            var params = swiper.params.scrollbar;

            var $el = $(params.el);
            if (
              swiper.params.uniqueNavElements &&
              typeof params.el === "string" &&
              $el.length > 1 &&
              $swiperEl.find(params.el).length === 1
            ) {
              $el = $swiperEl.find(params.el);
            }

            var $dragEl = $el.find("." + swiper.params.scrollbar.dragClass);
            if ($dragEl.length === 0) {
              $dragEl = $(
                '<div class="' + swiper.params.scrollbar.dragClass + '"></div>'
              );
              $el.append($dragEl);
            }

            Utils.extend(scrollbar, {
              $el: $el,
              el: $el[0],
              $dragEl: $dragEl,
              dragEl: $dragEl[0]
            });

            if (params.draggable) {
              scrollbar.enableDraggable();
            }
          },
          destroy: function destroy() {
            var swiper = this;
            swiper.scrollbar.disableDraggable();
          }
        };

        var Scrollbar$1 = {
          name: "scrollbar",
          params: {
            scrollbar: {
              el: null,
              dragSize: "auto",
              hide: false,
              draggable: false,
              snapOnRelease: true,
              lockClass: "swiper-scrollbar-lock",
              dragClass: "swiper-scrollbar-drag"
            }
          },
          create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
              scrollbar: {
                init: Scrollbar.init.bind(swiper),
                destroy: Scrollbar.destroy.bind(swiper),
                updateSize: Scrollbar.updateSize.bind(swiper),
                setTranslate: Scrollbar.setTranslate.bind(swiper),
                setTransition: Scrollbar.setTransition.bind(swiper),
                enableDraggable: Scrollbar.enableDraggable.bind(swiper),
                disableDraggable: Scrollbar.disableDraggable.bind(swiper),
                setDragPosition: Scrollbar.setDragPosition.bind(swiper),
                onDragStart: Scrollbar.onDragStart.bind(swiper),
                onDragMove: Scrollbar.onDragMove.bind(swiper),
                onDragEnd: Scrollbar.onDragEnd.bind(swiper),
                isTouched: false,
                timeout: null,
                dragTimeout: null
              }
            });
          },
          on: {
            init: function init() {
              var swiper = this;
              swiper.scrollbar.init();
              swiper.scrollbar.updateSize();
              swiper.scrollbar.setTranslate();
            },
            update: function update() {
              var swiper = this;
              swiper.scrollbar.updateSize();
            },
            resize: function resize() {
              var swiper = this;
              swiper.scrollbar.updateSize();
            },
            observerUpdate: function observerUpdate() {
              var swiper = this;
              swiper.scrollbar.updateSize();
            },
            setTranslate: function setTranslate() {
              var swiper = this;
              swiper.scrollbar.setTranslate();
            },
            setTransition: function setTransition(duration) {
              var swiper = this;
              swiper.scrollbar.setTransition(duration);
            },
            destroy: function destroy() {
              var swiper = this;
              swiper.scrollbar.destroy();
            }
          }
        };

        var Parallax = {
          setTransform: function setTransform(el, progress) {
            var swiper = this;
            var rtl = swiper.rtl;

            var $el = $(el);
            var rtlFactor = rtl ? -1 : 1;

            var p = $el.attr("data-swiper-parallax") || "0";
            var x = $el.attr("data-swiper-parallax-x");
            var y = $el.attr("data-swiper-parallax-y");
            var scale = $el.attr("data-swiper-parallax-scale");
            var opacity = $el.attr("data-swiper-parallax-opacity");

            if (x || y) {
              x = x || "0";
              y = y || "0";
            } else if (swiper.isHorizontal()) {
              x = p;
              y = "0";
            } else {
              y = p;
              x = "0";
            }

            if (x.indexOf("%") >= 0) {
              x = parseInt(x, 10) * progress * rtlFactor + "%";
            } else {
              x = x * progress * rtlFactor + "px";
            }
            if (y.indexOf("%") >= 0) {
              y = parseInt(y, 10) * progress + "%";
            } else {
              y = y * progress + "px";
            }

            if (typeof opacity !== "undefined" && opacity !== null) {
              var currentOpacity =
                opacity - (opacity - 1) * (1 - Math.abs(progress));
              $el[0].style.opacity = currentOpacity;
            }
            if (typeof scale === "undefined" || scale === null) {
              $el.transform("translate3d(" + x + ", " + y + ", 0px)");
            } else {
              var currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
              $el.transform(
                "translate3d(" +
                  x +
                  ", " +
                  y +
                  ", 0px) scale(" +
                  currentScale +
                  ")"
              );
            }
          },
          setTranslate: function setTranslate() {
            var swiper = this;
            var $el = swiper.$el;
            var slides = swiper.slides;
            var progress = swiper.progress;
            var snapGrid = swiper.snapGrid;
            $el
              .children(
                "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]"
              )
              .each(function(index, el) {
                swiper.parallax.setTransform(el, progress);
              });
            slides.each(function(slideIndex, slideEl) {
              var slideProgress = slideEl.progress;
              if (
                swiper.params.slidesPerGroup > 1 &&
                swiper.params.slidesPerView !== "auto"
              ) {
                slideProgress +=
                  Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
              }
              slideProgress = Math.min(Math.max(slideProgress, -1), 1);
              $(slideEl)
                .find(
                  "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]"
                )
                .each(function(index, el) {
                  swiper.parallax.setTransform(el, slideProgress);
                });
            });
          },
          setTransition: function setTransition(duration) {
            if (duration === void 0) duration = this.params.speed;

            var swiper = this;
            var $el = swiper.$el;
            $el
              .find(
                "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]"
              )
              .each(function(index, parallaxEl) {
                var $parallaxEl = $(parallaxEl);
                var parallaxDuration =
                  parseInt(
                    $parallaxEl.attr("data-swiper-parallax-duration"),
                    10
                  ) || duration;
                if (duration === 0) {
                  parallaxDuration = 0;
                }
                $parallaxEl.transition(parallaxDuration);
              });
          }
        };

        var Parallax$1 = {
          name: "parallax",
          params: {
            parallax: {
              enabled: false
            }
          },
          create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
              parallax: {
                setTransform: Parallax.setTransform.bind(swiper),
                setTranslate: Parallax.setTranslate.bind(swiper),
                setTransition: Parallax.setTransition.bind(swiper)
              }
            });
          },
          on: {
            beforeInit: function beforeInit() {
              var swiper = this;
              if (!swiper.params.parallax.enabled) {
                return;
              }
              swiper.params.watchSlidesProgress = true;
            },
            init: function init() {
              var swiper = this;
              if (!swiper.params.parallax) {
                return;
              }
              swiper.parallax.setTranslate();
            },
            setTranslate: function setTranslate() {
              var swiper = this;
              if (!swiper.params.parallax) {
                return;
              }
              swiper.parallax.setTranslate();
            },
            setTransition: function setTransition(duration) {
              var swiper = this;
              if (!swiper.params.parallax) {
                return;
              }
              swiper.parallax.setTransition(duration);
            }
          }
        };

        var Zoom = {
          // Calc Scale From Multi-touches
          getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
            if (e.targetTouches.length < 2) {
              return 1;
            }
            var x1 = e.targetTouches[0].pageX;
            var y1 = e.targetTouches[0].pageY;
            var x2 = e.targetTouches[1].pageX;
            var y2 = e.targetTouches[1].pageY;
            var distance = Math.sqrt(
              Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)
            );
            return distance;
          },
          // Events
          onGestureStart: function onGestureStart(e) {
            var swiper = this;
            var params = swiper.params.zoom;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture;
            zoom.fakeGestureTouched = false;
            zoom.fakeGestureMoved = false;
            if (!Support.gestures) {
              if (
                e.type !== "touchstart" ||
                (e.type === "touchstart" && e.targetTouches.length < 2)
              ) {
                return;
              }
              zoom.fakeGestureTouched = true;
              gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
            }
            if (!gesture.$slideEl || !gesture.$slideEl.length) {
              gesture.$slideEl = $(e.target).closest(".swiper-slide");
              if (gesture.$slideEl.length === 0) {
                gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
              }
              gesture.$imageEl = gesture.$slideEl.find("img, svg, canvas");
              gesture.$imageWrapEl = gesture.$imageEl.parent(
                "." + params.containerClass
              );
              gesture.maxRatio =
                gesture.$imageWrapEl.attr("data-swiper-zoom") ||
                params.maxRatio;
              if (gesture.$imageWrapEl.length === 0) {
                gesture.$imageEl = undefined;
                return;
              }
            }
            gesture.$imageEl.transition(0);
            swiper.zoom.isScaling = true;
          },
          onGestureChange: function onGestureChange(e) {
            var swiper = this;
            var params = swiper.params.zoom;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture;
            if (!Support.gestures) {
              if (
                e.type !== "touchmove" ||
                (e.type === "touchmove" && e.targetTouches.length < 2)
              ) {
                return;
              }
              zoom.fakeGestureMoved = true;
              gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
            }
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
              return;
            }
            if (Support.gestures) {
              swiper.zoom.scale = e.scale * zoom.currentScale;
            } else {
              zoom.scale =
                (gesture.scaleMove / gesture.scaleStart) * zoom.currentScale;
            }
            if (zoom.scale > gesture.maxRatio) {
              zoom.scale =
                gesture.maxRatio -
                1 +
                Math.pow(zoom.scale - gesture.maxRatio + 1, 0.5);
            }
            if (zoom.scale < params.minRatio) {
              zoom.scale =
                params.minRatio +
                1 -
                Math.pow(params.minRatio - zoom.scale + 1, 0.5);
            }
            gesture.$imageEl.transform(
              "translate3d(0,0,0) scale(" + zoom.scale + ")"
            );
          },
          onGestureEnd: function onGestureEnd(e) {
            var swiper = this;
            var params = swiper.params.zoom;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture;
            if (!Support.gestures) {
              if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) {
                return;
              }
              if (
                e.type !== "touchend" ||
                (e.type === "touchend" &&
                  e.changedTouches.length < 2 &&
                  !Device.android)
              ) {
                return;
              }
              zoom.fakeGestureTouched = false;
              zoom.fakeGestureMoved = false;
            }
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
              return;
            }
            zoom.scale = Math.max(
              Math.min(zoom.scale, gesture.maxRatio),
              params.minRatio
            );
            gesture.$imageEl
              .transition(swiper.params.speed)
              .transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
            zoom.currentScale = zoom.scale;
            zoom.isScaling = false;
            if (zoom.scale === 1) {
              gesture.$slideEl = undefined;
            }
          },
          onTouchStart: function onTouchStart(e) {
            var swiper = this;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture;
            var image = zoom.image;
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
              return;
            }
            if (image.isTouched) {
              return;
            }
            if (Device.android) {
              e.preventDefault();
            }
            image.isTouched = true;
            image.touchesStart.x =
              e.type === "touchstart" ? e.targetTouches[0].pageX : e.pageX;
            image.touchesStart.y =
              e.type === "touchstart" ? e.targetTouches[0].pageY : e.pageY;
          },
          onTouchMove: function onTouchMove(e) {
            var swiper = this;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture;
            var image = zoom.image;
            var velocity = zoom.velocity;
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
              return;
            }
            swiper.allowClick = false;
            if (!image.isTouched || !gesture.$slideEl) {
              return;
            }

            if (!image.isMoved) {
              image.width = gesture.$imageEl[0].offsetWidth;
              image.height = gesture.$imageEl[0].offsetHeight;
              image.startX =
                Utils.getTranslate(gesture.$imageWrapEl[0], "x") || 0;
              image.startY =
                Utils.getTranslate(gesture.$imageWrapEl[0], "y") || 0;
              gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
              gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
              gesture.$imageWrapEl.transition(0);
              if (swiper.rtl) {
                image.startX = -image.startX;
                image.startY = -image.startY;
              }
            }
            // Define if we need image drag
            var scaledWidth = image.width * zoom.scale;
            var scaledHeight = image.height * zoom.scale;

            if (
              scaledWidth < gesture.slideWidth &&
              scaledHeight < gesture.slideHeight
            ) {
              return;
            }

            image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
            image.maxX = -image.minX;
            image.minY = Math.min(
              gesture.slideHeight / 2 - scaledHeight / 2,
              0
            );
            image.maxY = -image.minY;

            image.touchesCurrent.x =
              e.type === "touchmove" ? e.targetTouches[0].pageX : e.pageX;
            image.touchesCurrent.y =
              e.type === "touchmove" ? e.targetTouches[0].pageY : e.pageY;

            if (!image.isMoved && !zoom.isScaling) {
              if (
                swiper.isHorizontal() &&
                ((Math.floor(image.minX) === Math.floor(image.startX) &&
                  image.touchesCurrent.x < image.touchesStart.x) ||
                  (Math.floor(image.maxX) === Math.floor(image.startX) &&
                    image.touchesCurrent.x > image.touchesStart.x))
              ) {
                image.isTouched = false;
                return;
              } else if (
                !swiper.isHorizontal() &&
                ((Math.floor(image.minY) === Math.floor(image.startY) &&
                  image.touchesCurrent.y < image.touchesStart.y) ||
                  (Math.floor(image.maxY) === Math.floor(image.startY) &&
                    image.touchesCurrent.y > image.touchesStart.y))
              ) {
                image.isTouched = false;
                return;
              }
            }
            e.preventDefault();
            e.stopPropagation();

            image.isMoved = true;
            image.currentX =
              image.touchesCurrent.x - image.touchesStart.x + image.startX;
            image.currentY =
              image.touchesCurrent.y - image.touchesStart.y + image.startY;

            if (image.currentX < image.minX) {
              image.currentX =
                image.minX + 1 - Math.pow(image.minX - image.currentX + 1, 0.8);
            }
            if (image.currentX > image.maxX) {
              image.currentX =
                image.maxX - 1 + Math.pow(image.currentX - image.maxX + 1, 0.8);
            }

            if (image.currentY < image.minY) {
              image.currentY =
                image.minY + 1 - Math.pow(image.minY - image.currentY + 1, 0.8);
            }
            if (image.currentY > image.maxY) {
              image.currentY =
                image.maxY - 1 + Math.pow(image.currentY - image.maxY + 1, 0.8);
            }

            // Velocity
            if (!velocity.prevPositionX) {
              velocity.prevPositionX = image.touchesCurrent.x;
            }
            if (!velocity.prevPositionY) {
              velocity.prevPositionY = image.touchesCurrent.y;
            }
            if (!velocity.prevTime) {
              velocity.prevTime = Date.now();
            }
            velocity.x =
              (image.touchesCurrent.x - velocity.prevPositionX) /
              (Date.now() - velocity.prevTime) /
              2;
            velocity.y =
              (image.touchesCurrent.y - velocity.prevPositionY) /
              (Date.now() - velocity.prevTime) /
              2;
            if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) {
              velocity.x = 0;
            }
            if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) {
              velocity.y = 0;
            }
            velocity.prevPositionX = image.touchesCurrent.x;
            velocity.prevPositionY = image.touchesCurrent.y;
            velocity.prevTime = Date.now();

            gesture.$imageWrapEl.transform(
              "translate3d(" +
                image.currentX +
                "px, " +
                image.currentY +
                "px,0)"
            );
          },
          onTouchEnd: function onTouchEnd() {
            var swiper = this;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture;
            var image = zoom.image;
            var velocity = zoom.velocity;
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
              return;
            }
            if (!image.isTouched || !image.isMoved) {
              image.isTouched = false;
              image.isMoved = false;
              return;
            }
            image.isTouched = false;
            image.isMoved = false;
            var momentumDurationX = 300;
            var momentumDurationY = 300;
            var momentumDistanceX = velocity.x * momentumDurationX;
            var newPositionX = image.currentX + momentumDistanceX;
            var momentumDistanceY = velocity.y * momentumDurationY;
            var newPositionY = image.currentY + momentumDistanceY;

            // Fix duration
            if (velocity.x !== 0) {
              momentumDurationX = Math.abs(
                (newPositionX - image.currentX) / velocity.x
              );
            }
            if (velocity.y !== 0) {
              momentumDurationY = Math.abs(
                (newPositionY - image.currentY) / velocity.y
              );
            }
            var momentumDuration = Math.max(
              momentumDurationX,
              momentumDurationY
            );

            image.currentX = newPositionX;
            image.currentY = newPositionY;

            // Define if we need image drag
            var scaledWidth = image.width * zoom.scale;
            var scaledHeight = image.height * zoom.scale;
            image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
            image.maxX = -image.minX;
            image.minY = Math.min(
              gesture.slideHeight / 2 - scaledHeight / 2,
              0
            );
            image.maxY = -image.minY;
            image.currentX = Math.max(
              Math.min(image.currentX, image.maxX),
              image.minX
            );
            image.currentY = Math.max(
              Math.min(image.currentY, image.maxY),
              image.minY
            );

            gesture.$imageWrapEl
              .transition(momentumDuration)
              .transform(
                "translate3d(" +
                  image.currentX +
                  "px, " +
                  image.currentY +
                  "px,0)"
              );
          },
          onTransitionEnd: function onTransitionEnd() {
            var swiper = this;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture;
            if (
              gesture.$slideEl &&
              swiper.previousIndex !== swiper.activeIndex
            ) {
              gesture.$imageEl.transform("translate3d(0,0,0) scale(1)");
              gesture.$imageWrapEl.transform("translate3d(0,0,0)");
              gesture.$slideEl = undefined;
              gesture.$imageEl = undefined;
              gesture.$imageWrapEl = undefined;

              zoom.scale = 1;
              zoom.currentScale = 1;
            }
          },
          // Toggle Zoom
          toggle: function toggle(e) {
            var swiper = this;
            var zoom = swiper.zoom;

            if (zoom.scale && zoom.scale !== 1) {
              // Zoom Out
              zoom.out();
            } else {
              // Zoom In
              zoom.in(e);
            }
          },
          in: function in$1(e) {
            var swiper = this;

            var zoom = swiper.zoom;
            var params = swiper.params.zoom;
            var gesture = zoom.gesture;
            var image = zoom.image;

            if (!gesture.$slideEl) {
              gesture.$slideEl = swiper.clickedSlide
                ? $(swiper.clickedSlide)
                : swiper.slides.eq(swiper.activeIndex);
              gesture.$imageEl = gesture.$slideEl.find("img, svg, canvas");
              gesture.$imageWrapEl = gesture.$imageEl.parent(
                "." + params.containerClass
              );
            }
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
              return;
            }

            gesture.$slideEl.addClass("" + params.zoomedSlideClass);

            var touchX;
            var touchY;
            var offsetX;
            var offsetY;
            var diffX;
            var diffY;
            var translateX;
            var translateY;
            var imageWidth;
            var imageHeight;
            var scaledWidth;
            var scaledHeight;
            var translateMinX;
            var translateMinY;
            var translateMaxX;
            var translateMaxY;
            var slideWidth;
            var slideHeight;

            if (typeof image.touchesStart.x === "undefined" && e) {
              touchX =
                e.type === "touchend" ? e.changedTouches[0].pageX : e.pageX;
              touchY =
                e.type === "touchend" ? e.changedTouches[0].pageY : e.pageY;
            } else {
              touchX = image.touchesStart.x;
              touchY = image.touchesStart.y;
            }

            zoom.scale =
              gesture.$imageWrapEl.attr("data-swiper-zoom") || params.maxRatio;
            zoom.currentScale =
              gesture.$imageWrapEl.attr("data-swiper-zoom") || params.maxRatio;
            if (e) {
              slideWidth = gesture.$slideEl[0].offsetWidth;
              slideHeight = gesture.$slideEl[0].offsetHeight;
              offsetX = gesture.$slideEl.offset().left;
              offsetY = gesture.$slideEl.offset().top;
              diffX = offsetX + slideWidth / 2 - touchX;
              diffY = offsetY + slideHeight / 2 - touchY;

              imageWidth = gesture.$imageEl[0].offsetWidth;
              imageHeight = gesture.$imageEl[0].offsetHeight;
              scaledWidth = imageWidth * zoom.scale;
              scaledHeight = imageHeight * zoom.scale;

              translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
              translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
              translateMaxX = -translateMinX;
              translateMaxY = -translateMinY;

              translateX = diffX * zoom.scale;
              translateY = diffY * zoom.scale;

              if (translateX < translateMinX) {
                translateX = translateMinX;
              }
              if (translateX > translateMaxX) {
                translateX = translateMaxX;
              }

              if (translateY < translateMinY) {
                translateY = translateMinY;
              }
              if (translateY > translateMaxY) {
                translateY = translateMaxY;
              }
            } else {
              translateX = 0;
              translateY = 0;
            }
            gesture.$imageWrapEl
              .transition(300)
              .transform(
                "translate3d(" + translateX + "px, " + translateY + "px,0)"
              );
            gesture.$imageEl
              .transition(300)
              .transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
          },
          out: function out() {
            var swiper = this;

            var zoom = swiper.zoom;
            var params = swiper.params.zoom;
            var gesture = zoom.gesture;

            if (!gesture.$slideEl) {
              gesture.$slideEl = swiper.clickedSlide
                ? $(swiper.clickedSlide)
                : swiper.slides.eq(swiper.activeIndex);
              gesture.$imageEl = gesture.$slideEl.find("img, svg, canvas");
              gesture.$imageWrapEl = gesture.$imageEl.parent(
                "." + params.containerClass
              );
            }
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
              return;
            }

            zoom.scale = 1;
            zoom.currentScale = 1;
            gesture.$imageWrapEl
              .transition(300)
              .transform("translate3d(0,0,0)");
            gesture.$imageEl
              .transition(300)
              .transform("translate3d(0,0,0) scale(1)");
            gesture.$slideEl.removeClass("" + params.zoomedSlideClass);
            gesture.$slideEl = undefined;
          },
          // Attach/Detach Events
          enable: function enable() {
            var swiper = this;
            var zoom = swiper.zoom;
            if (zoom.enabled) {
              return;
            }
            zoom.enabled = true;

            var passiveListener =
              swiper.touchEvents.start === "touchstart" &&
              Support.passiveListener &&
              swiper.params.passiveListeners
                ? { passive: true, capture: false }
                : false;

            // Scale image
            if (Support.gestures) {
              swiper.$wrapperEl.on(
                "gesturestart",
                ".swiper-slide",
                zoom.onGestureStart,
                passiveListener
              );
              swiper.$wrapperEl.on(
                "gesturechange",
                ".swiper-slide",
                zoom.onGestureChange,
                passiveListener
              );
              swiper.$wrapperEl.on(
                "gestureend",
                ".swiper-slide",
                zoom.onGestureEnd,
                passiveListener
              );
            } else if (swiper.touchEvents.start === "touchstart") {
              swiper.$wrapperEl.on(
                swiper.touchEvents.start,
                ".swiper-slide",
                zoom.onGestureStart,
                passiveListener
              );
              swiper.$wrapperEl.on(
                swiper.touchEvents.move,
                ".swiper-slide",
                zoom.onGestureChange,
                passiveListener
              );
              swiper.$wrapperEl.on(
                swiper.touchEvents.end,
                ".swiper-slide",
                zoom.onGestureEnd,
                passiveListener
              );
            }

            // Move image
            swiper.$wrapperEl.on(
              swiper.touchEvents.move,
              "." + swiper.params.zoom.containerClass,
              zoom.onTouchMove
            );
          },
          disable: function disable() {
            var swiper = this;
            var zoom = swiper.zoom;
            if (!zoom.enabled) {
              return;
            }

            swiper.zoom.enabled = false;

            var passiveListener =
              swiper.touchEvents.start === "touchstart" &&
              Support.passiveListener &&
              swiper.params.passiveListeners
                ? { passive: true, capture: false }
                : false;

            // Scale image
            if (Support.gestures) {
              swiper.$wrapperEl.off(
                "gesturestart",
                ".swiper-slide",
                zoom.onGestureStart,
                passiveListener
              );
              swiper.$wrapperEl.off(
                "gesturechange",
                ".swiper-slide",
                zoom.onGestureChange,
                passiveListener
              );
              swiper.$wrapperEl.off(
                "gestureend",
                ".swiper-slide",
                zoom.onGestureEnd,
                passiveListener
              );
            } else if (swiper.touchEvents.start === "touchstart") {
              swiper.$wrapperEl.off(
                swiper.touchEvents.start,
                ".swiper-slide",
                zoom.onGestureStart,
                passiveListener
              );
              swiper.$wrapperEl.off(
                swiper.touchEvents.move,
                ".swiper-slide",
                zoom.onGestureChange,
                passiveListener
              );
              swiper.$wrapperEl.off(
                swiper.touchEvents.end,
                ".swiper-slide",
                zoom.onGestureEnd,
                passiveListener
              );
            }

            // Move image
            swiper.$wrapperEl.off(
              swiper.touchEvents.move,
              "." + swiper.params.zoom.containerClass,
              zoom.onTouchMove
            );
          }
        };

        var Zoom$1 = {
          name: "zoom",
          params: {
            zoom: {
              enabled: false,
              maxRatio: 3,
              minRatio: 1,
              toggle: true,
              containerClass: "swiper-zoom-container",
              zoomedSlideClass: "swiper-slide-zoomed"
            }
          },
          create: function create() {
            var swiper = this;
            var zoom = {
              enabled: false,
              scale: 1,
              currentScale: 1,
              isScaling: false,
              gesture: {
                $slideEl: undefined,
                slideWidth: undefined,
                slideHeight: undefined,
                $imageEl: undefined,
                $imageWrapEl: undefined,
                maxRatio: 3
              },
              image: {
                isTouched: undefined,
                isMoved: undefined,
                currentX: undefined,
                currentY: undefined,
                minX: undefined,
                minY: undefined,
                maxX: undefined,
                maxY: undefined,
                width: undefined,
                height: undefined,
                startX: undefined,
                startY: undefined,
                touchesStart: {},
                touchesCurrent: {}
              },
              velocity: {
                x: undefined,
                y: undefined,
                prevPositionX: undefined,
                prevPositionY: undefined,
                prevTime: undefined
              }
            };
            "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out"
              .split(" ")
              .forEach(function(methodName) {
                zoom[methodName] = Zoom[methodName].bind(swiper);
              });
            Utils.extend(swiper, {
              zoom: zoom
            });
          },
          on: {
            init: function init() {
              var swiper = this;
              if (swiper.params.zoom.enabled) {
                swiper.zoom.enable();
              }
            },
            destroy: function destroy() {
              var swiper = this;
              swiper.zoom.disable();
            },
            touchStart: function touchStart(e) {
              var swiper = this;
              if (!swiper.zoom.enabled) {
                return;
              }
              swiper.zoom.onTouchStart(e);
            },
            touchEnd: function touchEnd(e) {
              var swiper = this;
              if (!swiper.zoom.enabled) {
                return;
              }
              swiper.zoom.onTouchEnd(e);
            },
            doubleTap: function doubleTap(e) {
              var swiper = this;
              if (
                swiper.params.zoom.enabled &&
                swiper.zoom.enabled &&
                swiper.params.zoom.toggle
              ) {
                swiper.zoom.toggle(e);
              }
            },
            transitionEnd: function transitionEnd() {
              var swiper = this;
              if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
                swiper.zoom.onTransitionEnd();
              }
            }
          }
        };

        var Lazy = {
          loadInSlide: function loadInSlide(index, loadInDuplicate) {
            if (loadInDuplicate === void 0) loadInDuplicate = true;

            var swiper = this;
            var params = swiper.params.lazy;
            if (typeof index === "undefined") {
              return;
            }
            if (swiper.slides.length === 0) {
              return;
            }
            var isVirtual = swiper.virtual && swiper.params.virtual.enabled;

            var $slideEl = isVirtual
              ? swiper.$wrapperEl.children(
                  "." +
                    swiper.params.slideClass +
                    '[data-swiper-slide-index="' +
                    index +
                    '"]'
                )
              : swiper.slides.eq(index);

            var $images = $slideEl.find(
              "." +
                params.elementClass +
                ":not(." +
                params.loadedClass +
                "):not(." +
                params.loadingClass +
                ")"
            );
            if (
              $slideEl.hasClass(params.elementClass) &&
              !$slideEl.hasClass(params.loadedClass) &&
              !$slideEl.hasClass(params.loadingClass)
            ) {
              $images = $images.add($slideEl[0]);
            }
            if ($images.length === 0) {
              return;
            }

            $images.each(function(imageIndex, imageEl) {
              var $imageEl = $(imageEl);
              $imageEl.addClass(params.loadingClass);

              var background = $imageEl.attr("data-background");
              var src = $imageEl.attr("data-src");
              var srcset = $imageEl.attr("data-srcset");
              var sizes = $imageEl.attr("data-sizes");

              swiper.loadImage(
                $imageEl[0],
                src || background,
                srcset,
                sizes,
                false,
                function() {
                  if (
                    typeof swiper === "undefined" ||
                    swiper === null ||
                    !swiper ||
                    (swiper && !swiper.params) ||
                    swiper.destroyed
                  ) {
                    return;
                  }
                  if (background) {
                    $imageEl.css(
                      "background-image",
                      'url("' + background + '")'
                    );
                    $imageEl.removeAttr("data-background");
                  } else {
                    if (srcset) {
                      $imageEl.attr("srcset", srcset);
                      $imageEl.removeAttr("data-srcset");
                    }
                    if (sizes) {
                      $imageEl.attr("sizes", sizes);
                      $imageEl.removeAttr("data-sizes");
                    }
                    if (src) {
                      $imageEl.attr("src", src);
                      $imageEl.removeAttr("data-src");
                    }
                  }

                  $imageEl
                    .addClass(params.loadedClass)
                    .removeClass(params.loadingClass);
                  $slideEl.find("." + params.preloaderClass).remove();
                  if (swiper.params.loop && loadInDuplicate) {
                    var slideOriginalIndex = $slideEl.attr(
                      "data-swiper-slide-index"
                    );
                    if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
                      var originalSlide = swiper.$wrapperEl.children(
                        '[data-swiper-slide-index="' +
                          slideOriginalIndex +
                          '"]:not(.' +
                          swiper.params.slideDuplicateClass +
                          ")"
                      );
                      swiper.lazy.loadInSlide(originalSlide.index(), false);
                    } else {
                      var duplicatedSlide = swiper.$wrapperEl.children(
                        "." +
                          swiper.params.slideDuplicateClass +
                          '[data-swiper-slide-index="' +
                          slideOriginalIndex +
                          '"]'
                      );
                      swiper.lazy.loadInSlide(duplicatedSlide.index(), false);
                    }
                  }
                  swiper.emit("lazyImageReady", $slideEl[0], $imageEl[0]);
                }
              );

              swiper.emit("lazyImageLoad", $slideEl[0], $imageEl[0]);
            });
          },
          load: function load() {
            var swiper = this;
            var $wrapperEl = swiper.$wrapperEl;
            var swiperParams = swiper.params;
            var slides = swiper.slides;
            var activeIndex = swiper.activeIndex;
            var isVirtual = swiper.virtual && swiperParams.virtual.enabled;
            var params = swiperParams.lazy;

            var slidesPerView = swiperParams.slidesPerView;
            if (slidesPerView === "auto") {
              slidesPerView = 0;
            }

            function slideExist(index) {
              if (isVirtual) {
                if (
                  $wrapperEl.children(
                    "." +
                      swiperParams.slideClass +
                      '[data-swiper-slide-index="' +
                      index +
                      '"]'
                  ).length
                ) {
                  return true;
                }
              } else if (slides[index]) {
                return true;
              }
              return false;
            }
            function slideIndex(slideEl) {
              if (isVirtual) {
                return $(slideEl).attr("data-swiper-slide-index");
              }
              return $(slideEl).index();
            }

            if (!swiper.lazy.initialImageLoaded) {
              swiper.lazy.initialImageLoaded = true;
            }
            if (swiper.params.watchSlidesVisibility) {
              $wrapperEl
                .children("." + swiperParams.slideVisibleClass)
                .each(function(elIndex, slideEl) {
                  var index = isVirtual
                    ? $(slideEl).attr("data-swiper-slide-index")
                    : $(slideEl).index();
                  swiper.lazy.loadInSlide(index);
                });
            } else if (slidesPerView > 1) {
              for (
                var i = activeIndex;
                i < activeIndex + slidesPerView;
                i += 1
              ) {
                if (slideExist(i)) {
                  swiper.lazy.loadInSlide(i);
                }
              }
            } else {
              swiper.lazy.loadInSlide(activeIndex);
            }
            if (params.loadPrevNext) {
              if (
                slidesPerView > 1 ||
                (params.loadPrevNextAmount && params.loadPrevNextAmount > 1)
              ) {
                var amount = params.loadPrevNextAmount;
                var spv = slidesPerView;
                var maxIndex = Math.min(
                  activeIndex + spv + Math.max(amount, spv),
                  slides.length
                );
                var minIndex = Math.max(activeIndex - Math.max(spv, amount), 0);
                // Next Slides
                for (
                  var i$1 = activeIndex + slidesPerView;
                  i$1 < maxIndex;
                  i$1 += 1
                ) {
                  if (slideExist(i$1)) {
                    swiper.lazy.loadInSlide(i$1);
                  }
                }
                // Prev Slides
                for (var i$2 = minIndex; i$2 < activeIndex; i$2 += 1) {
                  if (slideExist(i$2)) {
                    swiper.lazy.loadInSlide(i$2);
                  }
                }
              } else {
                var nextSlide = $wrapperEl.children(
                  "." + swiperParams.slideNextClass
                );
                if (nextSlide.length > 0) {
                  swiper.lazy.loadInSlide(slideIndex(nextSlide));
                }

                var prevSlide = $wrapperEl.children(
                  "." + swiperParams.slidePrevClass
                );
                if (prevSlide.length > 0) {
                  swiper.lazy.loadInSlide(slideIndex(prevSlide));
                }
              }
            }
          }
        };

        var Lazy$1 = {
          name: "lazy",
          params: {
            lazy: {
              enabled: false,
              loadPrevNext: false,
              loadPrevNextAmount: 1,
              loadOnTransitionStart: false,

              elementClass: "swiper-lazy",
              loadingClass: "swiper-lazy-loading",
              loadedClass: "swiper-lazy-loaded",
              preloaderClass: "swiper-lazy-preloader"
            }
          },
          create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
              lazy: {
                initialImageLoaded: false,
                load: Lazy.load.bind(swiper),
                loadInSlide: Lazy.loadInSlide.bind(swiper)
              }
            });
          },
          on: {
            beforeInit: function beforeInit() {
              var swiper = this;
              if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
                swiper.params.preloadImages = false;
              }
            },
            init: function init() {
              var swiper = this;
              if (
                swiper.params.lazy.enabled &&
                !swiper.params.loop &&
                swiper.params.initialSlide === 0
              ) {
                swiper.lazy.load();
              }
            },
            scroll: function scroll() {
              var swiper = this;
              if (swiper.params.freeMode && !swiper.params.freeModeSticky) {
                swiper.lazy.load();
              }
            },
            resize: function resize() {
              var swiper = this;
              if (swiper.params.lazy.enabled) {
                swiper.lazy.load();
              }
            },
            scrollbarDragMove: function scrollbarDragMove() {
              var swiper = this;
              if (swiper.params.lazy.enabled) {
                swiper.lazy.load();
              }
            },
            transitionStart: function transitionStart() {
              var swiper = this;
              if (swiper.params.lazy.enabled) {
                if (
                  swiper.params.lazy.loadOnTransitionStart ||
                  (!swiper.params.lazy.loadOnTransitionStart &&
                    !swiper.lazy.initialImageLoaded)
                ) {
                  swiper.lazy.load();
                }
              }
            },
            transitionEnd: function transitionEnd() {
              var swiper = this;
              if (
                swiper.params.lazy.enabled &&
                !swiper.params.lazy.loadOnTransitionStart
              ) {
                swiper.lazy.load();
              }
            }
          }
        };

        /* eslint no-bitwise: ["error", { "allow": [">>"] }] */

        var Controller = {
          LinearSpline: function LinearSpline(x, y) {
            var binarySearch = (function search() {
              var maxIndex;
              var minIndex;
              var guess;
              return function(array, val) {
                minIndex = -1;
                maxIndex = array.length;
                while (maxIndex - minIndex > 1) {
                  guess = (maxIndex + minIndex) >> 1;
                  if (array[guess] <= val) {
                    minIndex = guess;
                  } else {
                    maxIndex = guess;
                  }
                }
                return maxIndex;
              };
            })();
            this.x = x;
            this.y = y;
            this.lastIndex = x.length - 1;
            // Given an x value (x2), return the expected y2 value:
            // (x1,y1) is the known point before given value,
            // (x3,y3) is the known point after given value.
            var i1;
            var i3;

            this.interpolate = function interpolate(x2) {
              if (!x2) {
                return 0;
              }

              // Get the indexes of x1 and x3 (the array indexes before and after given x2):
              i3 = binarySearch(this.x, x2);
              i1 = i3 - 1;

              // We have our indexes i1 & i3, so we can calculate already:
              // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
              return (
                ((x2 - this.x[i1]) * (this.y[i3] - this.y[i1])) /
                  (this.x[i3] - this.x[i1]) +
                this.y[i1]
              );
            };
            return this;
          },
          // xxx: for now i will just save one spline function to to
          getInterpolateFunction: function getInterpolateFunction(c) {
            var swiper = this;
            if (!swiper.controller.spline) {
              swiper.controller.spline = swiper.params.loop
                ? new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid)
                : new Controller.LinearSpline(swiper.snapGrid, c.snapGrid);
            }
          },
          setTranslate: function setTranslate(setTranslate$1, byController) {
            var swiper = this;
            var controlled = swiper.controller.control;
            var multiplier;
            var controlledTranslate;
            function setControlledTranslate(c) {
              // this will create an Interpolate function based on the snapGrids
              // x is the Grid of the scrolled scroller and y will be the controlled scroller
              // it makes sense to create this only once and recall it for the interpolation
              // the function does a lot of value caching for performance
              var translate = swiper.rtlTranslate
                ? -swiper.translate
                : swiper.translate;
              if (swiper.params.controller.by === "slide") {
                swiper.controller.getInterpolateFunction(c);
                // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
                // but it did not work out
                controlledTranslate = -swiper.controller.spline.interpolate(
                  -translate
                );
              }

              if (
                !controlledTranslate ||
                swiper.params.controller.by === "container"
              ) {
                multiplier =
                  (c.maxTranslate() - c.minTranslate()) /
                  (swiper.maxTranslate() - swiper.minTranslate());
                controlledTranslate =
                  (translate - swiper.minTranslate()) * multiplier +
                  c.minTranslate();
              }

              if (swiper.params.controller.inverse) {
                controlledTranslate = c.maxTranslate() - controlledTranslate;
              }
              c.updateProgress(controlledTranslate);
              c.setTranslate(controlledTranslate, swiper);
              c.updateActiveIndex();
              c.updateSlidesClasses();
            }
            if (Array.isArray(controlled)) {
              for (var i = 0; i < controlled.length; i += 1) {
                if (
                  controlled[i] !== byController &&
                  controlled[i] instanceof Swiper
                ) {
                  setControlledTranslate(controlled[i]);
                }
              }
            } else if (
              controlled instanceof Swiper &&
              byController !== controlled
            ) {
              setControlledTranslate(controlled);
            }
          },
          setTransition: function setTransition(duration, byController) {
            var swiper = this;
            var controlled = swiper.controller.control;
            var i;
            function setControlledTransition(c) {
              c.setTransition(duration, swiper);
              if (duration !== 0) {
                c.transitionStart();
                c.$wrapperEl.transitionEnd(function() {
                  if (!controlled) {
                    return;
                  }
                  if (
                    c.params.loop &&
                    swiper.params.controller.by === "slide"
                  ) {
                    c.loopFix();
                  }
                  c.transitionEnd();
                });
              }
            }
            if (Array.isArray(controlled)) {
              for (i = 0; i < controlled.length; i += 1) {
                if (
                  controlled[i] !== byController &&
                  controlled[i] instanceof Swiper
                ) {
                  setControlledTransition(controlled[i]);
                }
              }
            } else if (
              controlled instanceof Swiper &&
              byController !== controlled
            ) {
              setControlledTransition(controlled);
            }
          }
        };
        var Controller$1 = {
          name: "controller",
          params: {
            controller: {
              control: undefined,
              inverse: false,
              by: "slide" // or 'container'
            }
          },
          create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
              controller: {
                control: swiper.params.controller.control,
                getInterpolateFunction: Controller.getInterpolateFunction.bind(
                  swiper
                ),
                setTranslate: Controller.setTranslate.bind(swiper),
                setTransition: Controller.setTransition.bind(swiper)
              }
            });
          },
          on: {
            update: function update() {
              var swiper = this;
              if (!swiper.controller.control) {
                return;
              }
              if (swiper.controller.spline) {
                swiper.controller.spline = undefined;
                delete swiper.controller.spline;
              }
            },
            resize: function resize() {
              var swiper = this;
              if (!swiper.controller.control) {
                return;
              }
              if (swiper.controller.spline) {
                swiper.controller.spline = undefined;
                delete swiper.controller.spline;
              }
            },
            observerUpdate: function observerUpdate() {
              var swiper = this;
              if (!swiper.controller.control) {
                return;
              }
              if (swiper.controller.spline) {
                swiper.controller.spline = undefined;
                delete swiper.controller.spline;
              }
            },
            setTranslate: function setTranslate(translate, byController) {
              var swiper = this;
              if (!swiper.controller.control) {
                return;
              }
              swiper.controller.setTranslate(translate, byController);
            },
            setTransition: function setTransition(duration, byController) {
              var swiper = this;
              if (!swiper.controller.control) {
                return;
              }
              swiper.controller.setTransition(duration, byController);
            }
          }
        };

        var a11y = {
          makeElFocusable: function makeElFocusable($el) {
            $el.attr("tabIndex", "0");
            return $el;
          },
          addElRole: function addElRole($el, role) {
            $el.attr("role", role);
            return $el;
          },
          addElLabel: function addElLabel($el, label) {
            $el.attr("aria-label", label);
            return $el;
          },
          disableEl: function disableEl($el) {
            $el.attr("aria-disabled", true);
            return $el;
          },
          enableEl: function enableEl($el) {
            $el.attr("aria-disabled", false);
            return $el;
          },
          onEnterKey: function onEnterKey(e) {
            var swiper = this;
            var params = swiper.params.a11y;
            if (e.keyCode !== 13) {
              return;
            }
            var $targetEl = $(e.target);
            if (
              swiper.navigation &&
              swiper.navigation.$nextEl &&
              $targetEl.is(swiper.navigation.$nextEl)
            ) {
              if (!(swiper.isEnd && !swiper.params.loop)) {
                swiper.slideNext();
              }
              if (swiper.isEnd) {
                swiper.a11y.notify(params.lastSlideMessage);
              } else {
                swiper.a11y.notify(params.nextSlideMessage);
              }
            }
            if (
              swiper.navigation &&
              swiper.navigation.$prevEl &&
              $targetEl.is(swiper.navigation.$prevEl)
            ) {
              if (!(swiper.isBeginning && !swiper.params.loop)) {
                swiper.slidePrev();
              }
              if (swiper.isBeginning) {
                swiper.a11y.notify(params.firstSlideMessage);
              } else {
                swiper.a11y.notify(params.prevSlideMessage);
              }
            }
            if (
              swiper.pagination &&
              $targetEl.is("." + swiper.params.pagination.bulletClass)
            ) {
              $targetEl[0].click();
            }
          },
          notify: function notify(message) {
            var swiper = this;
            var notification = swiper.a11y.liveRegion;
            if (notification.length === 0) {
              return;
            }
            notification.html("");
            notification.html(message);
          },
          updateNavigation: function updateNavigation() {
            var swiper = this;

            if (swiper.params.loop) {
              return;
            }
            var ref = swiper.navigation;
            var $nextEl = ref.$nextEl;
            var $prevEl = ref.$prevEl;

            if ($prevEl && $prevEl.length > 0) {
              if (swiper.isBeginning) {
                swiper.a11y.disableEl($prevEl);
              } else {
                swiper.a11y.enableEl($prevEl);
              }
            }
            if ($nextEl && $nextEl.length > 0) {
              if (swiper.isEnd) {
                swiper.a11y.disableEl($nextEl);
              } else {
                swiper.a11y.enableEl($nextEl);
              }
            }
          },
          updatePagination: function updatePagination() {
            var swiper = this;
            var params = swiper.params.a11y;
            if (
              swiper.pagination &&
              swiper.params.pagination.clickable &&
              swiper.pagination.bullets &&
              swiper.pagination.bullets.length
            ) {
              swiper.pagination.bullets.each(function(bulletIndex, bulletEl) {
                var $bulletEl = $(bulletEl);
                swiper.a11y.makeElFocusable($bulletEl);
                swiper.a11y.addElRole($bulletEl, "button");
                swiper.a11y.addElLabel(
                  $bulletEl,
                  params.paginationBulletMessage.replace(
                    /{{index}}/,
                    $bulletEl.index() + 1
                  )
                );
              });
            }
          },
          init: function init() {
            var swiper = this;

            swiper.$el.append(swiper.a11y.liveRegion);

            // Navigation
            var params = swiper.params.a11y;
            var $nextEl;
            var $prevEl;
            if (swiper.navigation && swiper.navigation.$nextEl) {
              $nextEl = swiper.navigation.$nextEl;
            }
            if (swiper.navigation && swiper.navigation.$prevEl) {
              $prevEl = swiper.navigation.$prevEl;
            }
            if ($nextEl) {
              swiper.a11y.makeElFocusable($nextEl);
              swiper.a11y.addElRole($nextEl, "button");
              swiper.a11y.addElLabel($nextEl, params.nextSlideMessage);
              $nextEl.on("keydown", swiper.a11y.onEnterKey);
            }
            if ($prevEl) {
              swiper.a11y.makeElFocusable($prevEl);
              swiper.a11y.addElRole($prevEl, "button");
              swiper.a11y.addElLabel($prevEl, params.prevSlideMessage);
              $prevEl.on("keydown", swiper.a11y.onEnterKey);
            }

            // Pagination
            if (
              swiper.pagination &&
              swiper.params.pagination.clickable &&
              swiper.pagination.bullets &&
              swiper.pagination.bullets.length
            ) {
              swiper.pagination.$el.on(
                "keydown",
                "." + swiper.params.pagination.bulletClass,
                swiper.a11y.onEnterKey
              );
            }
          },
          destroy: function destroy() {
            var swiper = this;
            if (swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0) {
              swiper.a11y.liveRegion.remove();
            }

            var $nextEl;
            var $prevEl;
            if (swiper.navigation && swiper.navigation.$nextEl) {
              $nextEl = swiper.navigation.$nextEl;
            }
            if (swiper.navigation && swiper.navigation.$prevEl) {
              $prevEl = swiper.navigation.$prevEl;
            }
            if ($nextEl) {
              $nextEl.off("keydown", swiper.a11y.onEnterKey);
            }
            if ($prevEl) {
              $prevEl.off("keydown", swiper.a11y.onEnterKey);
            }

            // Pagination
            if (
              swiper.pagination &&
              swiper.params.pagination.clickable &&
              swiper.pagination.bullets &&
              swiper.pagination.bullets.length
            ) {
              swiper.pagination.$el.off(
                "keydown",
                "." + swiper.params.pagination.bulletClass,
                swiper.a11y.onEnterKey
              );
            }
          }
        };
        var A11y = {
          name: "a11y",
          params: {
            a11y: {
              enabled: true,
              notificationClass: "swiper-notification",
              prevSlideMessage: "Previous slide",
              nextSlideMessage: "Next slide",
              firstSlideMessage: "This is the first slide",
              lastSlideMessage: "This is the last slide",
              paginationBulletMessage: "Go to slide {{index}}"
            }
          },
          create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
              a11y: {
                liveRegion: $(
                  '<span class="' +
                    swiper.params.a11y.notificationClass +
                    '" aria-live="assertive" aria-atomic="true"></span>'
                )
              }
            });
            Object.keys(a11y).forEach(function(methodName) {
              swiper.a11y[methodName] = a11y[methodName].bind(swiper);
            });
          },
          on: {
            init: function init() {
              var swiper = this;
              if (!swiper.params.a11y.enabled) {
                return;
              }
              swiper.a11y.init();
              swiper.a11y.updateNavigation();
            },
            toEdge: function toEdge() {
              var swiper = this;
              if (!swiper.params.a11y.enabled) {
                return;
              }
              swiper.a11y.updateNavigation();
            },
            fromEdge: function fromEdge() {
              var swiper = this;
              if (!swiper.params.a11y.enabled) {
                return;
              }
              swiper.a11y.updateNavigation();
            },
            paginationUpdate: function paginationUpdate() {
              var swiper = this;
              if (!swiper.params.a11y.enabled) {
                return;
              }
              swiper.a11y.updatePagination();
            },
            destroy: function destroy() {
              var swiper = this;
              if (!swiper.params.a11y.enabled) {
                return;
              }
              swiper.a11y.destroy();
            }
          }
        };

        var History = {
          init: function init() {
            var swiper = this;
            if (!swiper.params.history) {
              return;
            }
            if (!win.history || !win.history.pushState) {
              swiper.params.history.enabled = false;
              swiper.params.hashNavigation.enabled = true;
              return;
            }
            var history = swiper.history;
            history.initialized = true;
            history.paths = History.getPathValues();
            if (!history.paths.key && !history.paths.value) {
              return;
            }
            history.scrollToSlide(
              0,
              history.paths.value,
              swiper.params.runCallbacksOnInit
            );
            if (!swiper.params.history.replaceState) {
              win.addEventListener(
                "popstate",
                swiper.history.setHistoryPopState
              );
            }
          },
          destroy: function destroy() {
            var swiper = this;
            if (!swiper.params.history.replaceState) {
              win.removeEventListener(
                "popstate",
                swiper.history.setHistoryPopState
              );
            }
          },
          setHistoryPopState: function setHistoryPopState() {
            var swiper = this;
            swiper.history.paths = History.getPathValues();
            swiper.history.scrollToSlide(
              swiper.params.speed,
              swiper.history.paths.value,
              false
            );
          },
          getPathValues: function getPathValues() {
            var pathArray = win.location.pathname
              .slice(1)
              .split("/")
              .filter(function(part) {
                return part !== "";
              });
            var total = pathArray.length;
            var key = pathArray[total - 2];
            var value = pathArray[total - 1];
            return { key: key, value: value };
          },
          setHistory: function setHistory(key, index) {
            var swiper = this;
            if (!swiper.history.initialized || !swiper.params.history.enabled) {
              return;
            }
            var slide = swiper.slides.eq(index);
            var value = History.slugify(slide.attr("data-history"));
            if (!win.location.pathname.includes(key)) {
              value = key + "/" + value;
            }
            var currentState = win.history.state;
            if (currentState && currentState.value === value) {
              return;
            }
            if (swiper.params.history.replaceState) {
              win.history.replaceState({ value: value }, null, value);
            } else {
              win.history.pushState({ value: value }, null, value);
            }
          },
          slugify: function slugify(text) {
            return text
              .toString()
              .toLowerCase()
              .replace(/\s+/g, "-")
              .replace(/[^\w-]+/g, "")
              .replace(/--+/g, "-")
              .replace(/^-+/, "")
              .replace(/-+$/, "");
          },
          scrollToSlide: function scrollToSlide(speed, value, runCallbacks) {
            var swiper = this;
            if (value) {
              for (
                var i = 0, length = swiper.slides.length;
                i < length;
                i += 1
              ) {
                var slide = swiper.slides.eq(i);
                var slideHistory = History.slugify(slide.attr("data-history"));
                if (
                  slideHistory === value &&
                  !slide.hasClass(swiper.params.slideDuplicateClass)
                ) {
                  var index = slide.index();
                  swiper.slideTo(index, speed, runCallbacks);
                }
              }
            } else {
              swiper.slideTo(0, speed, runCallbacks);
            }
          }
        };

        var History$1 = {
          name: "history",
          params: {
            history: {
              enabled: false,
              replaceState: false,
              key: "slides"
            }
          },
          create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
              history: {
                init: History.init.bind(swiper),
                setHistory: History.setHistory.bind(swiper),
                setHistoryPopState: History.setHistoryPopState.bind(swiper),
                scrollToSlide: History.scrollToSlide.bind(swiper),
                destroy: History.destroy.bind(swiper)
              }
            });
          },
          on: {
            init: function init() {
              var swiper = this;
              if (swiper.params.history.enabled) {
                swiper.history.init();
              }
            },
            destroy: function destroy() {
              var swiper = this;
              if (swiper.params.history.enabled) {
                swiper.history.destroy();
              }
            },
            transitionEnd: function transitionEnd() {
              var swiper = this;
              if (swiper.history.initialized) {
                swiper.history.setHistory(
                  swiper.params.history.key,
                  swiper.activeIndex
                );
              }
            }
          }
        };

        var HashNavigation = {
          onHashCange: function onHashCange() {
            var swiper = this;
            var newHash = doc.location.hash.replace("#", "");
            var activeSlideHash = swiper.slides
              .eq(swiper.activeIndex)
              .attr("data-hash");
            if (newHash !== activeSlideHash) {
              swiper.slideTo(
                swiper.$wrapperEl
                  .children(
                    "." +
                      swiper.params.slideClass +
                      '[data-hash="' +
                      newHash +
                      '"]'
                  )
                  .index()
              );
            }
          },
          setHash: function setHash() {
            var swiper = this;
            if (
              !swiper.hashNavigation.initialized ||
              !swiper.params.hashNavigation.enabled
            ) {
              return;
            }
            if (
              swiper.params.hashNavigation.replaceState &&
              win.history &&
              win.history.replaceState
            ) {
              win.history.replaceState(
                null,
                null,
                "#" + swiper.slides.eq(swiper.activeIndex).attr("data-hash") ||
                  ""
              );
            } else {
              var slide = swiper.slides.eq(swiper.activeIndex);
              var hash = slide.attr("data-hash") || slide.attr("data-history");
              doc.location.hash = hash || "";
            }
          },
          init: function init() {
            var swiper = this;
            if (
              !swiper.params.hashNavigation.enabled ||
              (swiper.params.history && swiper.params.history.enabled)
            ) {
              return;
            }
            swiper.hashNavigation.initialized = true;
            var hash = doc.location.hash.replace("#", "");
            if (hash) {
              var speed = 0;
              for (
                var i = 0, length = swiper.slides.length;
                i < length;
                i += 1
              ) {
                var slide = swiper.slides.eq(i);
                var slideHash =
                  slide.attr("data-hash") || slide.attr("data-history");
                if (
                  slideHash === hash &&
                  !slide.hasClass(swiper.params.slideDuplicateClass)
                ) {
                  var index = slide.index();
                  swiper.slideTo(
                    index,
                    speed,
                    swiper.params.runCallbacksOnInit,
                    true
                  );
                }
              }
            }
            if (swiper.params.hashNavigation.watchState) {
              $(win).on("hashchange", swiper.hashNavigation.onHashCange);
            }
          },
          destroy: function destroy() {
            var swiper = this;
            if (swiper.params.hashNavigation.watchState) {
              $(win).off("hashchange", swiper.hashNavigation.onHashCange);
            }
          }
        };
        var HashNavigation$1 = {
          name: "hash-navigation",
          params: {
            hashNavigation: {
              enabled: false,
              replaceState: false,
              watchState: false
            }
          },
          create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
              hashNavigation: {
                initialized: false,
                init: HashNavigation.init.bind(swiper),
                destroy: HashNavigation.destroy.bind(swiper),
                setHash: HashNavigation.setHash.bind(swiper),
                onHashCange: HashNavigation.onHashCange.bind(swiper)
              }
            });
          },
          on: {
            init: function init() {
              var swiper = this;
              if (swiper.params.hashNavigation.enabled) {
                swiper.hashNavigation.init();
              }
            },
            destroy: function destroy() {
              var swiper = this;
              if (swiper.params.hashNavigation.enabled) {
                swiper.hashNavigation.destroy();
              }
            },
            transitionEnd: function transitionEnd() {
              var swiper = this;
              if (swiper.hashNavigation.initialized) {
                swiper.hashNavigation.setHash();
              }
            }
          }
        };

        /* eslint no-underscore-dangle: "off" */

        var Autoplay = {
          run: function run() {
            var swiper = this;
            var $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
            var delay = swiper.params.autoplay.delay;
            if ($activeSlideEl.attr("data-swiper-autoplay")) {
              delay =
                $activeSlideEl.attr("data-swiper-autoplay") ||
                swiper.params.autoplay.delay;
            }
            swiper.autoplay.timeout = Utils.nextTick(function() {
              if (swiper.params.autoplay.reverseDirection) {
                if (swiper.params.loop) {
                  swiper.loopFix();
                  swiper.slidePrev(swiper.params.speed, true, true);
                  swiper.emit("autoplay");
                } else if (!swiper.isBeginning) {
                  swiper.slidePrev(swiper.params.speed, true, true);
                  swiper.emit("autoplay");
                } else if (!swiper.params.autoplay.stopOnLastSlide) {
                  swiper.slideTo(
                    swiper.slides.length - 1,
                    swiper.params.speed,
                    true,
                    true
                  );
                  swiper.emit("autoplay");
                } else {
                  swiper.autoplay.stop();
                }
              } else if (swiper.params.loop) {
                swiper.loopFix();
                swiper.slideNext(swiper.params.speed, true, true);
                swiper.emit("autoplay");
              } else if (!swiper.isEnd) {
                swiper.slideNext(swiper.params.speed, true, true);
                swiper.emit("autoplay");
              } else if (!swiper.params.autoplay.stopOnLastSlide) {
                swiper.slideTo(0, swiper.params.speed, true, true);
                swiper.emit("autoplay");
              } else {
                swiper.autoplay.stop();
              }
            }, delay);
          },
          start: function start() {
            var swiper = this;
            if (typeof swiper.autoplay.timeout !== "undefined") {
              return false;
            }
            if (swiper.autoplay.running) {
              return false;
            }
            swiper.autoplay.running = true;
            swiper.emit("autoplayStart");
            swiper.autoplay.run();
            return true;
          },
          stop: function stop() {
            var swiper = this;
            if (!swiper.autoplay.running) {
              return false;
            }
            if (typeof swiper.autoplay.timeout === "undefined") {
              return false;
            }

            if (swiper.autoplay.timeout) {
              clearTimeout(swiper.autoplay.timeout);
              swiper.autoplay.timeout = undefined;
            }
            swiper.autoplay.running = false;
            swiper.emit("autoplayStop");
            return true;
          },
          pause: function pause(speed) {
            var swiper = this;
            if (!swiper.autoplay.running) {
              return;
            }
            if (swiper.autoplay.paused) {
              return;
            }
            if (swiper.autoplay.timeout) {
              clearTimeout(swiper.autoplay.timeout);
            }
            swiper.autoplay.paused = true;
            if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
              swiper.autoplay.paused = false;
              swiper.autoplay.run();
            } else {
              swiper.$wrapperEl[0].addEventListener(
                "transitionend",
                swiper.autoplay.onTransitionEnd
              );
              swiper.$wrapperEl[0].addEventListener(
                "webkitTransitionEnd",
                swiper.autoplay.onTransitionEnd
              );
            }
          }
        };

        var Autoplay$1 = {
          name: "autoplay",
          params: {
            autoplay: {
              enabled: false,
              delay: 3000,
              waitForTransition: true,
              disableOnInteraction: true,
              stopOnLastSlide: false,
              reverseDirection: false
            }
          },
          create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
              autoplay: {
                running: false,
                paused: false,
                run: Autoplay.run.bind(swiper),
                start: Autoplay.start.bind(swiper),
                stop: Autoplay.stop.bind(swiper),
                pause: Autoplay.pause.bind(swiper),
                onTransitionEnd: function onTransitionEnd(e) {
                  if (!swiper || swiper.destroyed || !swiper.$wrapperEl) {
                    return;
                  }
                  if (e.target !== this) {
                    return;
                  }
                  swiper.$wrapperEl[0].removeEventListener(
                    "transitionend",
                    swiper.autoplay.onTransitionEnd
                  );
                  swiper.$wrapperEl[0].removeEventListener(
                    "webkitTransitionEnd",
                    swiper.autoplay.onTransitionEnd
                  );
                  swiper.autoplay.paused = false;
                  if (!swiper.autoplay.running) {
                    swiper.autoplay.stop();
                  } else {
                    swiper.autoplay.run();
                  }
                }
              }
            });
          },
          on: {
            init: function init() {
              var swiper = this;
              if (swiper.params.autoplay.enabled) {
                swiper.autoplay.start();
              }
            },
            beforeTransitionStart: function beforeTransitionStart(
              speed,
              internal
            ) {
              var swiper = this;
              if (swiper.autoplay.running) {
                if (internal || !swiper.params.autoplay.disableOnInteraction) {
                  swiper.autoplay.pause(speed);
                } else {
                  swiper.autoplay.stop();
                }
              }
            },
            sliderFirstMove: function sliderFirstMove() {
              var swiper = this;
              if (swiper.autoplay.running) {
                if (swiper.params.autoplay.disableOnInteraction) {
                  swiper.autoplay.stop();
                } else {
                  swiper.autoplay.pause();
                }
              }
            },
            destroy: function destroy() {
              var swiper = this;
              if (swiper.autoplay.running) {
                swiper.autoplay.stop();
              }
            }
          }
        };

        var Fade = {
          setTranslate: function setTranslate() {
            var swiper = this;
            var slides = swiper.slides;
            for (var i = 0; i < slides.length; i += 1) {
              var $slideEl = swiper.slides.eq(i);
              var offset = $slideEl[0].swiperSlideOffset;
              var tx = -offset;
              if (!swiper.params.virtualTranslate) {
                tx -= swiper.translate;
              }
              var ty = 0;
              if (!swiper.isHorizontal()) {
                ty = tx;
                tx = 0;
              }
              var slideOpacity = swiper.params.fadeEffect.crossFade
                ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
                : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
              $slideEl
                .css({
                  opacity: slideOpacity
                })
                .transform("translate3d(" + tx + "px, " + ty + "px, 0px)");
            }
          },
          setTransition: function setTransition(duration) {
            var swiper = this;
            var slides = swiper.slides;
            var $wrapperEl = swiper.$wrapperEl;
            slides.transition(duration);
            if (swiper.params.virtualTranslate && duration !== 0) {
              var eventTriggered = false;
              slides.transitionEnd(function() {
                if (eventTriggered) {
                  return;
                }
                if (!swiper || swiper.destroyed) {
                  return;
                }
                eventTriggered = true;
                swiper.animating = false;
                var triggerEvents = ["webkitTransitionEnd", "transitionend"];
                for (var i = 0; i < triggerEvents.length; i += 1) {
                  $wrapperEl.trigger(triggerEvents[i]);
                }
              });
            }
          }
        };

        var EffectFade = {
          name: "effect-fade",
          params: {
            fadeEffect: {
              crossFade: false
            }
          },
          create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
              fadeEffect: {
                setTranslate: Fade.setTranslate.bind(swiper),
                setTransition: Fade.setTransition.bind(swiper)
              }
            });
          },
          on: {
            beforeInit: function beforeInit() {
              var swiper = this;
              if (swiper.params.effect !== "fade") {
                return;
              }
              swiper.classNames.push(
                swiper.params.containerModifierClass + "fade"
              );
              var overwriteParams = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                spaceBetween: 0,
                virtualTranslate: true
              };
              Utils.extend(swiper.params, overwriteParams);
              Utils.extend(swiper.originalParams, overwriteParams);
            },
            setTranslate: function setTranslate() {
              var swiper = this;
              if (swiper.params.effect !== "fade") {
                return;
              }
              swiper.fadeEffect.setTranslate();
            },
            setTransition: function setTransition(duration) {
              var swiper = this;
              if (swiper.params.effect !== "fade") {
                return;
              }
              swiper.fadeEffect.setTransition(duration);
            }
          }
        };

        var Cube = {
          setTranslate: function setTranslate() {
            var swiper = this;
            var $el = swiper.$el;
            var $wrapperEl = swiper.$wrapperEl;
            var slides = swiper.slides;
            var swiperWidth = swiper.width;
            var swiperHeight = swiper.height;
            var rtl = swiper.rtlTranslate;
            var swiperSize = swiper.size;
            var params = swiper.params.cubeEffect;
            var isHorizontal = swiper.isHorizontal();
            var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            var wrapperRotate = 0;
            var $cubeShadowEl;
            if (params.shadow) {
              if (isHorizontal) {
                $cubeShadowEl = $wrapperEl.find(".swiper-cube-shadow");
                if ($cubeShadowEl.length === 0) {
                  $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
                  $wrapperEl.append($cubeShadowEl);
                }
                $cubeShadowEl.css({ height: swiperWidth + "px" });
              } else {
                $cubeShadowEl = $el.find(".swiper-cube-shadow");
                if ($cubeShadowEl.length === 0) {
                  $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
                  $el.append($cubeShadowEl);
                }
              }
            }
            for (var i = 0; i < slides.length; i += 1) {
              var $slideEl = slides.eq(i);
              var slideIndex = i;
              if (isVirtual) {
                slideIndex = parseInt(
                  $slideEl.attr("data-swiper-slide-index"),
                  10
                );
              }
              var slideAngle = slideIndex * 90;
              var round = Math.floor(slideAngle / 360);
              if (rtl) {
                slideAngle = -slideAngle;
                round = Math.floor(-slideAngle / 360);
              }
              var progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
              var tx = 0;
              var ty = 0;
              var tz = 0;
              if (slideIndex % 4 === 0) {
                tx = -round * 4 * swiperSize;
                tz = 0;
              } else if ((slideIndex - 1) % 4 === 0) {
                tx = 0;
                tz = -round * 4 * swiperSize;
              } else if ((slideIndex - 2) % 4 === 0) {
                tx = swiperSize + round * 4 * swiperSize;
                tz = swiperSize;
              } else if ((slideIndex - 3) % 4 === 0) {
                tx = -swiperSize;
                tz = 3 * swiperSize + swiperSize * 4 * round;
              }
              if (rtl) {
                tx = -tx;
              }

              if (!isHorizontal) {
                ty = tx;
                tx = 0;
              }

              var transform =
                "rotateX(" +
                (isHorizontal ? 0 : -slideAngle) +
                "deg) rotateY(" +
                (isHorizontal ? slideAngle : 0) +
                "deg) translate3d(" +
                tx +
                "px, " +
                ty +
                "px, " +
                tz +
                "px)";
              if (progress <= 1 && progress > -1) {
                wrapperRotate = slideIndex * 90 + progress * 90;
                if (rtl) {
                  wrapperRotate = -slideIndex * 90 - progress * 90;
                }
              }
              $slideEl.transform(transform);
              if (params.slideShadows) {
                // Set shadows
                var shadowBefore = isHorizontal
                  ? $slideEl.find(".swiper-slide-shadow-left")
                  : $slideEl.find(".swiper-slide-shadow-top");
                var shadowAfter = isHorizontal
                  ? $slideEl.find(".swiper-slide-shadow-right")
                  : $slideEl.find(".swiper-slide-shadow-bottom");
                if (shadowBefore.length === 0) {
                  shadowBefore = $(
                    '<div class="swiper-slide-shadow-' +
                      (isHorizontal ? "left" : "top") +
                      '"></div>'
                  );
                  $slideEl.append(shadowBefore);
                }
                if (shadowAfter.length === 0) {
                  shadowAfter = $(
                    '<div class="swiper-slide-shadow-' +
                      (isHorizontal ? "right" : "bottom") +
                      '"></div>'
                  );
                  $slideEl.append(shadowAfter);
                }
                if (shadowBefore.length) {
                  shadowBefore[0].style.opacity = Math.max(-progress, 0);
                }
                if (shadowAfter.length) {
                  shadowAfter[0].style.opacity = Math.max(progress, 0);
                }
              }
            }
            $wrapperEl.css({
              "-webkit-transform-origin": "50% 50% -" + swiperSize / 2 + "px",
              "-moz-transform-origin": "50% 50% -" + swiperSize / 2 + "px",
              "-ms-transform-origin": "50% 50% -" + swiperSize / 2 + "px",
              "transform-origin": "50% 50% -" + swiperSize / 2 + "px"
            });

            if (params.shadow) {
              if (isHorizontal) {
                $cubeShadowEl.transform(
                  "translate3d(0px, " +
                    (swiperWidth / 2 + params.shadowOffset) +
                    "px, " +
                    -swiperWidth / 2 +
                    "px) rotateX(90deg) rotateZ(0deg) scale(" +
                    params.shadowScale +
                    ")"
                );
              } else {
                var shadowAngle =
                  Math.abs(wrapperRotate) -
                  Math.floor(Math.abs(wrapperRotate) / 90) * 90;
                var multiplier =
                  1.5 -
                  (Math.sin((shadowAngle * 2 * Math.PI) / 360) / 2 +
                    Math.cos((shadowAngle * 2 * Math.PI) / 360) / 2);
                var scale1 = params.shadowScale;
                var scale2 = params.shadowScale / multiplier;
                var offset = params.shadowOffset;
                $cubeShadowEl.transform(
                  "scale3d(" +
                    scale1 +
                    ", 1, " +
                    scale2 +
                    ") translate3d(0px, " +
                    (swiperHeight / 2 + offset) +
                    "px, " +
                    -swiperHeight / 2 / scale2 +
                    "px) rotateX(-90deg)"
                );
              }
            }
            var zFactor =
              Browser.isSafari || Browser.isUiWebView ? -swiperSize / 2 : 0;
            $wrapperEl.transform(
              "translate3d(0px,0," +
                zFactor +
                "px) rotateX(" +
                (swiper.isHorizontal() ? 0 : wrapperRotate) +
                "deg) rotateY(" +
                (swiper.isHorizontal() ? -wrapperRotate : 0) +
                "deg)"
            );
          },
          setTransition: function setTransition(duration) {
            var swiper = this;
            var $el = swiper.$el;
            var slides = swiper.slides;
            slides
              .transition(duration)
              .find(
                ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
              )
              .transition(duration);
            if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
              $el.find(".swiper-cube-shadow").transition(duration);
            }
          }
        };

        var EffectCube = {
          name: "effect-cube",
          params: {
            cubeEffect: {
              slideShadows: true,
              shadow: true,
              shadowOffset: 20,
              shadowScale: 0.94
            }
          },
          create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
              cubeEffect: {
                setTranslate: Cube.setTranslate.bind(swiper),
                setTransition: Cube.setTransition.bind(swiper)
              }
            });
          },
          on: {
            beforeInit: function beforeInit() {
              var swiper = this;
              if (swiper.params.effect !== "cube") {
                return;
              }
              swiper.classNames.push(
                swiper.params.containerModifierClass + "cube"
              );
              swiper.classNames.push(
                swiper.params.containerModifierClass + "3d"
              );
              var overwriteParams = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: false,
                virtualTranslate: true
              };
              Utils.extend(swiper.params, overwriteParams);
              Utils.extend(swiper.originalParams, overwriteParams);
            },
            setTranslate: function setTranslate() {
              var swiper = this;
              if (swiper.params.effect !== "cube") {
                return;
              }
              swiper.cubeEffect.setTranslate();
            },
            setTransition: function setTransition(duration) {
              var swiper = this;
              if (swiper.params.effect !== "cube") {
                return;
              }
              swiper.cubeEffect.setTransition(duration);
            }
          }
        };

        var Flip = {
          setTranslate: function setTranslate() {
            var swiper = this;
            var slides = swiper.slides;
            var rtl = swiper.rtlTranslate;
            for (var i = 0; i < slides.length; i += 1) {
              var $slideEl = slides.eq(i);
              var progress = $slideEl[0].progress;
              if (swiper.params.flipEffect.limitRotation) {
                progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
              }
              var offset = $slideEl[0].swiperSlideOffset;
              var rotate = -180 * progress;
              var rotateY = rotate;
              var rotateX = 0;
              var tx = -offset;
              var ty = 0;
              if (!swiper.isHorizontal()) {
                ty = tx;
                tx = 0;
                rotateX = -rotateY;
                rotateY = 0;
              } else if (rtl) {
                rotateY = -rotateY;
              }

              $slideEl[0].style.zIndex =
                -Math.abs(Math.round(progress)) + slides.length;

              if (swiper.params.flipEffect.slideShadows) {
                // Set shadows
                var shadowBefore = swiper.isHorizontal()
                  ? $slideEl.find(".swiper-slide-shadow-left")
                  : $slideEl.find(".swiper-slide-shadow-top");
                var shadowAfter = swiper.isHorizontal()
                  ? $slideEl.find(".swiper-slide-shadow-right")
                  : $slideEl.find(".swiper-slide-shadow-bottom");
                if (shadowBefore.length === 0) {
                  shadowBefore = $(
                    '<div class="swiper-slide-shadow-' +
                      (swiper.isHorizontal() ? "left" : "top") +
                      '"></div>'
                  );
                  $slideEl.append(shadowBefore);
                }
                if (shadowAfter.length === 0) {
                  shadowAfter = $(
                    '<div class="swiper-slide-shadow-' +
                      (swiper.isHorizontal() ? "right" : "bottom") +
                      '"></div>'
                  );
                  $slideEl.append(shadowAfter);
                }
                if (shadowBefore.length) {
                  shadowBefore[0].style.opacity = Math.max(-progress, 0);
                }
                if (shadowAfter.length) {
                  shadowAfter[0].style.opacity = Math.max(progress, 0);
                }
              }
              $slideEl.transform(
                "translate3d(" +
                  tx +
                  "px, " +
                  ty +
                  "px, 0px) rotateX(" +
                  rotateX +
                  "deg) rotateY(" +
                  rotateY +
                  "deg)"
              );
            }
          },
          setTransition: function setTransition(duration) {
            var swiper = this;
            var slides = swiper.slides;
            var activeIndex = swiper.activeIndex;
            var $wrapperEl = swiper.$wrapperEl;
            slides
              .transition(duration)
              .find(
                ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
              )
              .transition(duration);
            if (swiper.params.virtualTranslate && duration !== 0) {
              var eventTriggered = false;
              // eslint-disable-next-line
              slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
                if (eventTriggered) {
                  return;
                }
                if (!swiper || swiper.destroyed) {
                  return;
                }
                // if (!$(this).hasClass(swiper.params.slideActiveClass)) return;
                eventTriggered = true;
                swiper.animating = false;
                var triggerEvents = ["webkitTransitionEnd", "transitionend"];
                for (var i = 0; i < triggerEvents.length; i += 1) {
                  $wrapperEl.trigger(triggerEvents[i]);
                }
              });
            }
          }
        };

        var EffectFlip = {
          name: "effect-flip",
          params: {
            flipEffect: {
              slideShadows: true,
              limitRotation: true
            }
          },
          create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
              flipEffect: {
                setTranslate: Flip.setTranslate.bind(swiper),
                setTransition: Flip.setTransition.bind(swiper)
              }
            });
          },
          on: {
            beforeInit: function beforeInit() {
              var swiper = this;
              if (swiper.params.effect !== "flip") {
                return;
              }
              swiper.classNames.push(
                swiper.params.containerModifierClass + "flip"
              );
              swiper.classNames.push(
                swiper.params.containerModifierClass + "3d"
              );
              var overwriteParams = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                spaceBetween: 0,
                virtualTranslate: true
              };
              Utils.extend(swiper.params, overwriteParams);
              Utils.extend(swiper.originalParams, overwriteParams);
            },
            setTranslate: function setTranslate() {
              var swiper = this;
              if (swiper.params.effect !== "flip") {
                return;
              }
              swiper.flipEffect.setTranslate();
            },
            setTransition: function setTransition(duration) {
              var swiper = this;
              if (swiper.params.effect !== "flip") {
                return;
              }
              swiper.flipEffect.setTransition(duration);
            }
          }
        };

        var Coverflow = {
          setTranslate: function setTranslate() {
            var swiper = this;
            var swiperWidth = swiper.width;
            var swiperHeight = swiper.height;
            var slides = swiper.slides;
            var $wrapperEl = swiper.$wrapperEl;
            var slidesSizesGrid = swiper.slidesSizesGrid;
            var params = swiper.params.coverflowEffect;
            var isHorizontal = swiper.isHorizontal();
            var transform = swiper.translate;
            var center = isHorizontal
              ? -transform + swiperWidth / 2
              : -transform + swiperHeight / 2;
            var rotate = isHorizontal ? params.rotate : -params.rotate;
            var translate = params.depth;
            // Each slide offset from center
            for (var i = 0, length = slides.length; i < length; i += 1) {
              var $slideEl = slides.eq(i);
              var slideSize = slidesSizesGrid[i];
              var slideOffset = $slideEl[0].swiperSlideOffset;
              var offsetMultiplier =
                ((center - slideOffset - slideSize / 2) / slideSize) *
                params.modifier;

              var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
              var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
              // var rotateZ = 0
              var translateZ = -translate * Math.abs(offsetMultiplier);

              var translateY = isHorizontal
                ? 0
                : params.stretch * offsetMultiplier;
              var translateX = isHorizontal
                ? params.stretch * offsetMultiplier
                : 0;

              // Fix for ultra small values
              if (Math.abs(translateX) < 0.001) {
                translateX = 0;
              }
              if (Math.abs(translateY) < 0.001) {
                translateY = 0;
              }
              if (Math.abs(translateZ) < 0.001) {
                translateZ = 0;
              }
              if (Math.abs(rotateY) < 0.001) {
                rotateY = 0;
              }
              if (Math.abs(rotateX) < 0.001) {
                rotateX = 0;
              }

              var slideTransform =
                "translate3d(" +
                translateX +
                "px," +
                translateY +
                "px," +
                translateZ +
                "px)  rotateX(" +
                rotateX +
                "deg) rotateY(" +
                rotateY +
                "deg)";

              $slideEl.transform(slideTransform);
              $slideEl[0].style.zIndex =
                -Math.abs(Math.round(offsetMultiplier)) + 1;
              if (params.slideShadows) {
                // Set shadows
                var $shadowBeforeEl = isHorizontal
                  ? $slideEl.find(".swiper-slide-shadow-left")
                  : $slideEl.find(".swiper-slide-shadow-top");
                var $shadowAfterEl = isHorizontal
                  ? $slideEl.find(".swiper-slide-shadow-right")
                  : $slideEl.find(".swiper-slide-shadow-bottom");
                if ($shadowBeforeEl.length === 0) {
                  $shadowBeforeEl = $(
                    '<div class="swiper-slide-shadow-' +
                      (isHorizontal ? "left" : "top") +
                      '"></div>'
                  );
                  $slideEl.append($shadowBeforeEl);
                }
                if ($shadowAfterEl.length === 0) {
                  $shadowAfterEl = $(
                    '<div class="swiper-slide-shadow-' +
                      (isHorizontal ? "right" : "bottom") +
                      '"></div>'
                  );
                  $slideEl.append($shadowAfterEl);
                }
                if ($shadowBeforeEl.length) {
                  $shadowBeforeEl[0].style.opacity =
                    offsetMultiplier > 0 ? offsetMultiplier : 0;
                }
                if ($shadowAfterEl.length) {
                  $shadowAfterEl[0].style.opacity =
                    -offsetMultiplier > 0 ? -offsetMultiplier : 0;
                }
              }
            }

            // Set correct perspective for IE10
            if (Support.pointerEvents || Support.prefixedPointerEvents) {
              var ws = $wrapperEl[0].style;
              ws.perspectiveOrigin = center + "px 50%";
            }
          },
          setTransition: function setTransition(duration) {
            var swiper = this;
            swiper.slides
              .transition(duration)
              .find(
                ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
              )
              .transition(duration);
          }
        };

        var EffectCoverflow = {
          name: "effect-coverflow",
          params: {
            coverflowEffect: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true
            }
          },
          create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
              coverflowEffect: {
                setTranslate: Coverflow.setTranslate.bind(swiper),
                setTransition: Coverflow.setTransition.bind(swiper)
              }
            });
          },
          on: {
            beforeInit: function beforeInit() {
              var swiper = this;
              if (swiper.params.effect !== "coverflow") {
                return;
              }

              swiper.classNames.push(
                swiper.params.containerModifierClass + "coverflow"
              );
              swiper.classNames.push(
                swiper.params.containerModifierClass + "3d"
              );

              swiper.params.watchSlidesProgress = true;
              swiper.originalParams.watchSlidesProgress = true;
            },
            setTranslate: function setTranslate() {
              var swiper = this;
              if (swiper.params.effect !== "coverflow") {
                return;
              }
              swiper.coverflowEffect.setTranslate();
            },
            setTransition: function setTransition(duration) {
              var swiper = this;
              if (swiper.params.effect !== "coverflow") {
                return;
              }
              swiper.coverflowEffect.setTransition(duration);
            }
          }
        };

        // Swiper Class

        var components = [
          Device$1,
          Support$1,
          Browser$1,
          Resize,
          Observer$1,
          Virtual$1,
          Keyboard$1,
          Mousewheel$1,
          Navigation$1,
          Pagination$1,
          Scrollbar$1,
          Parallax$1,
          Zoom$1,
          Lazy$1,
          Controller$1,
          A11y,
          History$1,
          HashNavigation$1,
          Autoplay$1,
          EffectFade,
          EffectCube,
          EffectFlip,
          EffectCoverflow
        ];

        if (typeof Swiper.use === "undefined") {
          Swiper.use = Swiper.Class.use;
          Swiper.installModule = Swiper.Class.installModule;
        }

        Swiper.use(components);

        return Swiper;
      });

      /***/
    },

    /***/ d2e5: /***/ function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentMenu_vue_vue_type_style_index_0_id_1421cbfb_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "7327"
      );
      /* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentMenu_vue_vue_type_style_index_0_id_1421cbfb_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentMenu_vue_vue_type_style_index_0_id_1421cbfb_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentMenu_vue_vue_type_style_index_0_id_1421cbfb_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__)
        if (__WEBPACK_IMPORT_KEY__ !== "default")
          (function(key) {
            __webpack_require__.d(__webpack_exports__, key, function() {
              return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentMenu_vue_vue_type_style_index_0_id_1421cbfb_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__[
                key
              ];
            });
          })(__WEBPACK_IMPORT_KEY__);
      /* harmony default export */ __webpack_exports__["default"] =
        _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentMenu_vue_vue_type_style_index_0_id_1421cbfb_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default.a;

      /***/
    },

    /***/ d3f4: /***/ function(module, exports) {
      module.exports = function(it) {
        return typeof it === "object" ? it !== null : typeof it === "function";
      };

      /***/
    },

    /***/ d4c0: /***/ function(module, exports, __webpack_require__) {
      // all enumerable object keys, includes symbols
      var getKeys = __webpack_require__("0d58");
      var gOPS = __webpack_require__("2621");
      var pIE = __webpack_require__("52a7");
      module.exports = function(it) {
        var result = getKeys(it);
        var getSymbols = gOPS.f;
        if (getSymbols) {
          var symbols = getSymbols(it);
          var isEnum = pIE.f;
          var i = 0;
          var key;
          while (symbols.length > i)
            if (isEnum.call(it, (key = symbols[i++]))) result.push(key);
        }
        return result;
      };

      /***/
    },

    /***/ d53b: /***/ function(module, exports) {
      module.exports = function(done, value) {
        return { value: value, done: !!done };
      };

      /***/
    },

    /***/ d73c: /***/ function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PortletCard_vue_vue_type_style_index_0_id_f5a982f0_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "026e"
      );
      /* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PortletCard_vue_vue_type_style_index_0_id_f5a982f0_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PortletCard_vue_vue_type_style_index_0_id_f5a982f0_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PortletCard_vue_vue_type_style_index_0_id_f5a982f0_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__)
        if (__WEBPACK_IMPORT_KEY__ !== "default")
          (function(key) {
            __webpack_require__.d(__webpack_exports__, key, function() {
              return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PortletCard_vue_vue_type_style_index_0_id_f5a982f0_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__[
                key
              ];
            });
          })(__WEBPACK_IMPORT_KEY__);
      /* harmony default export */ __webpack_exports__["default"] =
        _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PortletCard_vue_vue_type_style_index_0_id_f5a982f0_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default.a;

      /***/
    },

    /***/ d8e8: /***/ function(module, exports) {
      module.exports = function(it) {
        if (typeof it != "function")
          throw TypeError(it + " is not a function!");
        return it;
      };

      /***/
    },

    /***/ d966: /***/ function(module, exports, __webpack_require__) {
      exports = module.exports = __webpack_require__("2350")(false);
      // imports

      // module
      exports.push([
        module.i,
        "\n.portlet-card[data-v-31cef4fd]{background-color:#fff;border-radius:5px;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12),0 1px 5px 0 rgba(0,0,0,.2);height:170px;line-height:20px;padding:12px;position:relative;text-align:center;transition:box-shadow .25s,-webkit-box-shadow .25s;width:255px\n}\n.portlet-card[data-v-31cef4fd]:hover{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12);cursor:pointer\n}\n.portlet-card>.portlet-card-description[data-v-31cef4fd],.portlet-card>.portlet-card-icon[data-v-31cef4fd],.portlet-card>.portlet-card-title[data-v-31cef4fd]{color:rgba(0,0,0,.8);display:block;text-align:center\n}\n.portlet-card>.portlet-card-action[data-v-31cef4fd]{color:rgba(0,0,0,.34);margin:5px;position:absolute;right:0;top:0\n}\n.portlet-card>.portlet-card-icon>div[data-v-31cef4fd]{align-items:center;border-radius:10px;display:inline-flex;height:83px;justify-content:center;margin-top:-30px;width:83px\n}\n.portlet-card>.portlet-card-icon>div img[data-v-31cef4fd]{border-radius:10px;height:100%;width:auto\n}\n.portlet-card>.portlet-card-title[data-v-31cef4fd]{font-size:18px;font-weight:700;padding-top:1em\n}\n.portlet-card>.portlet-card-description[data-v-31cef4fd]{max-height:40px;padding-top:.3em\n}\n.portlet-card.small-card[data-v-31cef4fd]{background-color:transparent;border:none;box-shadow:none;height:auto;padding:0;width:120px\n}\n.portlet-card.small-card.background-dark>.description[data-v-31cef4fd],.portlet-card.small-card.background-dark>.title[data-v-31cef4fd]{color:#fff\n}\n.portlet-card.small-card>.portlet-card-description[data-v-31cef4fd]{display:none!important\n}\n.portlet-card.small-card>.portlet-card-icon>div[data-v-31cef4fd]{margin:0\n}\n.portlet-card.small-card>.portlet-card-title[data-v-31cef4fd]{font-weight:500;padding-top:.8em\n}\n.portlet-card.small-card>.portlet-card-action[data-v-31cef4fd]{display:none!important\n}",
        ""
      ]);

      // exports

      /***/
    },

    /***/ d9c9: /***/ function(module, exports, __webpack_require__) {
      var atob = __webpack_require__("1968");

      function b64DecodeUnicode(str) {
        return decodeURIComponent(
          atob(str).replace(/(.)/g, function(m, p) {
            var code = p
              .charCodeAt(0)
              .toString(16)
              .toUpperCase();
            if (code.length < 2) {
              code = "0" + code;
            }
            return "%" + code;
          })
        );
      }

      module.exports = function(str) {
        var output = str.replace(/-/g, "+").replace(/_/g, "/");
        switch (output.length % 4) {
          case 0:
            break;
          case 2:
            output += "==";
            break;
          case 3:
            output += "=";
            break;
          default:
            throw "Illegal base64url string!";
        }

        try {
          return b64DecodeUnicode(output);
        } catch (err) {
          return atob(output);
        }
      };

      /***/
    },

    /***/ db33: /***/ function(module, exports, __webpack_require__) {
      exports = module.exports = __webpack_require__("2350")(false);
      // imports

      // module
      exports.push([
        module.i,
        "\n.content-menu-header-buttons[data-v-dd214c72]{display:flex;flex-flow:row nowrap;justify-content:space-between\n}\n.content-menu-header-buttons>*[data-v-dd214c72]{margin-top:1em\n}\n.content-menu-header-buttons[data-v-dd214c72]>:first-child{margin-left:1em\n}\n.content-menu-header-buttons[data-v-dd214c72]>:last-child{margin-right:1em\n}\n.content-menu-header-buttons>a>svg[data-v-dd214c72],.content-menu-header-buttons>button>svg[data-v-dd214c72]{color:#fff;height:32px;width:32px\n}\n.content-menu-header-buttons button[data-v-dd214c72]{background-color:transparent;border:none;box-shadow:none;cursor:pointer;outline:none;text-decoration:none\n}",
        ""
      ]);

      // exports

      /***/
    },

    /***/ de1c: /***/ function(module, exports, __webpack_require__) {
      "use strict";

      var utils = __webpack_require__("8805");

      /**
       * Transform the data for a request or a response
       *
       * @param {Object|String} data The data to be transformed
       * @param {Array} headers The headers for the request or response
       * @param {Array|Function} fns A single function or Array of functions
       * @returns {*} The resulting transformed data
       */
      module.exports = function transformData(data, headers, fns) {
        /*eslint no-param-reassign:0*/
        utils.forEach(fns, function transform(fn) {
          data = fn(data, headers);
        });

        return data;
      };

      /***/
    },

    /***/ df7c: /***/ function(module, exports, __webpack_require__) {
      /* WEBPACK VAR INJECTION */ (function(process) {
        // Copyright Joyent, Inc. and other Node contributors.
        //
        // Permission is hereby granted, free of charge, to any person obtaining a
        // copy of this software and associated documentation files (the
        // "Software"), to deal in the Software without restriction, including
        // without limitation the rights to use, copy, modify, merge, publish,
        // distribute, sublicense, and/or sell copies of the Software, and to permit
        // persons to whom the Software is furnished to do so, subject to the
        // following conditions:
        //
        // The above copyright notice and this permission notice shall be included
        // in all copies or substantial portions of the Software.
        //
        // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
        // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
        // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
        // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
        // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
        // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
        // USE OR OTHER DEALINGS IN THE SOFTWARE.

        // resolves . and .. elements in a path array with directory names there
        // must be no slashes, empty elements, or device names (c:\) in the array
        // (so also no leading and trailing slashes - it does not distinguish
        // relative and absolute paths)
        function normalizeArray(parts, allowAboveRoot) {
          // if the path tries to go above the root, `up` ends up > 0
          var up = 0;
          for (var i = parts.length - 1; i >= 0; i--) {
            var last = parts[i];
            if (last === ".") {
              parts.splice(i, 1);
            } else if (last === "..") {
              parts.splice(i, 1);
              up++;
            } else if (up) {
              parts.splice(i, 1);
              up--;
            }
          }

          // if the path is allowed to go above the root, restore leading ..s
          if (allowAboveRoot) {
            for (; up--; up) {
              parts.unshift("..");
            }
          }

          return parts;
        }

        // Split a filename into [root, dir, basename, ext], unix version
        // 'root' is just a slash, or nothing.
        var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        var splitPath = function(filename) {
          return splitPathRe.exec(filename).slice(1);
        };

        // path.resolve([from ...], to)
        // posix version
        exports.resolve = function() {
          var resolvedPath = "",
            resolvedAbsolute = false;

          for (
            var i = arguments.length - 1;
            i >= -1 && !resolvedAbsolute;
            i--
          ) {
            var path = i >= 0 ? arguments[i] : process.cwd();

            // Skip empty and invalid entries
            if (typeof path !== "string") {
              throw new TypeError("Arguments to path.resolve must be strings");
            } else if (!path) {
              continue;
            }

            resolvedPath = path + "/" + resolvedPath;
            resolvedAbsolute = path.charAt(0) === "/";
          }

          // At this point the path should be resolved to a full absolute path, but
          // handle relative paths to be safe (might happen when process.cwd() fails)

          // Normalize the path
          resolvedPath = normalizeArray(
            filter(resolvedPath.split("/"), function(p) {
              return !!p;
            }),
            !resolvedAbsolute
          ).join("/");

          return (resolvedAbsolute ? "/" : "") + resolvedPath || ".";
        };

        // path.normalize(path)
        // posix version
        exports.normalize = function(path) {
          var isAbsolute = exports.isAbsolute(path),
            trailingSlash = substr(path, -1) === "/";

          // Normalize the path
          path = normalizeArray(
            filter(path.split("/"), function(p) {
              return !!p;
            }),
            !isAbsolute
          ).join("/");

          if (!path && !isAbsolute) {
            path = ".";
          }
          if (path && trailingSlash) {
            path += "/";
          }

          return (isAbsolute ? "/" : "") + path;
        };

        // posix version
        exports.isAbsolute = function(path) {
          return path.charAt(0) === "/";
        };

        // posix version
        exports.join = function() {
          var paths = Array.prototype.slice.call(arguments, 0);
          return exports.normalize(
            filter(paths, function(p, index) {
              if (typeof p !== "string") {
                throw new TypeError("Arguments to path.join must be strings");
              }
              return p;
            }).join("/")
          );
        };

        // path.relative(from, to)
        // posix version
        exports.relative = function(from, to) {
          from = exports.resolve(from).substr(1);
          to = exports.resolve(to).substr(1);

          function trim(arr) {
            var start = 0;
            for (; start < arr.length; start++) {
              if (arr[start] !== "") break;
            }

            var end = arr.length - 1;
            for (; end >= 0; end--) {
              if (arr[end] !== "") break;
            }

            if (start > end) return [];
            return arr.slice(start, end - start + 1);
          }

          var fromParts = trim(from.split("/"));
          var toParts = trim(to.split("/"));

          var length = Math.min(fromParts.length, toParts.length);
          var samePartsLength = length;
          for (var i = 0; i < length; i++) {
            if (fromParts[i] !== toParts[i]) {
              samePartsLength = i;
              break;
            }
          }

          var outputParts = [];
          for (var i = samePartsLength; i < fromParts.length; i++) {
            outputParts.push("..");
          }

          outputParts = outputParts.concat(toParts.slice(samePartsLength));

          return outputParts.join("/");
        };

        exports.sep = "/";
        exports.delimiter = ":";

        exports.dirname = function(path) {
          var result = splitPath(path),
            root = result[0],
            dir = result[1];

          if (!root && !dir) {
            // No dirname whatsoever
            return ".";
          }

          if (dir) {
            // It has a dirname, strip trailing slash
            dir = dir.substr(0, dir.length - 1);
          }

          return root + dir;
        };

        exports.basename = function(path, ext) {
          var f = splitPath(path)[2];
          // TODO: make this comparison case-insensitive on windows?
          if (ext && f.substr(-1 * ext.length) === ext) {
            f = f.substr(0, f.length - ext.length);
          }
          return f;
        };

        exports.extname = function(path) {
          return splitPath(path)[3];
        };

        function filter(xs, f) {
          if (xs.filter) return xs.filter(f);
          var res = [];
          for (var i = 0; i < xs.length; i++) {
            if (f(xs[i], i, xs)) res.push(xs[i]);
          }
          return res;
        }

        // String.prototype.substr - negative index don't work in IE8
        var substr =
          "ab".substr(-1) === "b"
            ? function(str, start, len) {
                return str.substr(start, len);
              }
            : function(str, start, len) {
                if (start < 0) start = str.length + start;
                return str.substr(start, len);
              };

        /* WEBPACK VAR INJECTION */
      }.call(this, __webpack_require__("4362")));

      /***/
    },

    /***/ df9a: /***/ function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "5ddc"
      );
      /* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__)
        if (__WEBPACK_IMPORT_KEY__ !== "default")
          (function(key) {
            __webpack_require__.d(__webpack_exports__, key, function() {
              return _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[
                key
              ];
            });
          })(__WEBPACK_IMPORT_KEY__);
      /* harmony default export */ __webpack_exports__["default"] =
        _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a;

      /***/
    },

    /***/ e11e: /***/ function(module, exports) {
      // IE 8- don't enum bug keys
      module.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
        ","
      );

      /***/
    },

    /***/ e458: /***/ function(module, exports, __webpack_require__) {
      "use strict";

      // btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

      var chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

      function E() {
        this.message = "String contains an invalid character";
      }
      E.prototype = new Error();
      E.prototype.code = 5;
      E.prototype.name = "InvalidCharacterError";

      function btoa(input) {
        var str = String(input);
        var output = "";
        for (
          // initialize result and counter
          var block, charCode, idx = 0, map = chars;
          // if the next str index does not exist:
          //   change the mapping table to "="
          //   check if d has no fractional digits
          str.charAt(idx | 0) || ((map = "="), idx % 1);
          // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
          output += map.charAt(63 & (block >> (8 - (idx % 1) * 8)))
        ) {
          charCode = str.charCodeAt((idx += 3 / 4));
          if (charCode > 0xff) {
            throw new E();
          }
          block = (block << 8) | charCode;
        }
        return output;
      }

      module.exports = btoa;

      /***/
    },

    /***/ ead3: /***/ function(module, exports, __webpack_require__) {
      exports = module.exports = __webpack_require__("2350")(false);
      // imports

      // module
      exports.push([
        module.i,
        "\n.content-user[data-v-30f50373]{font-size:14px;height:auto;min-width:350px\n}\n.content-user.small[data-v-30f50373]{background-position:50%;background-repeat:no-repeat;background-size:cover;min-height:150px;min-width:0;width:100%\n}\n.content-user.small>div>.org-img[data-v-30f50373]{display:none\n}\n.content-user.small>div>.user-infos[data-v-30f50373]{padding:15px 0\n}\n.content-user.small>div>.user-infos>div[data-v-30f50373]{border-bottom-right-radius:0;border-top-right-radius:0\n}\n.content-user>div[data-v-30f50373]{display:flex;flex-direction:column;height:100%\n}\n.content-user>div>.org-img[data-v-30f50373]{align-items:center;display:flex;justify-content:center\n}\n@media screen and (min-width:1024px){\n.content-user>div>.org-img[data-v-30f50373]{margin-top:15%\n}\n}\n.content-user>div>.org-img img[data-v-30f50373]{border-radius:10px;height:auto;width:270px\n}\n.content-user>div>.user-infos[data-v-30f50373]{padding:25px 0\n}\n.content-user>div>.user-infos>div[data-v-30f50373]{align-items:center;background-color:rgba(0,0,0,.7);border-bottom-right-radius:27px;border-top-right-radius:27px;display:flex;height:54px\n}\n.content-user>div>.user-infos>div[data-v-30f50373] :only-child:not(.user-avatar){display:inline-block;max-width:200px;overflow:hidden;white-space:nowrap\n}\n.content-user>div>.user-infos>div span[data-v-30f50373]{color:#fff\n}\n.content-user>div>.user-infos>div .user-avatar[data-v-30f50373]{float:left;margin:0 15px\n}\n.content-user>div>.user-infos>div .user-avatar img[data-v-30f50373],.content-user>div>.user-infos>div .user-avatar svg[data-v-30f50373]{border-radius:50%;height:68px;width:68px\n}\n.content-user>div>.user-infos>div .user-avatar svg[data-v-30f50373]{background-color:#b7b7b7;color:#fff\n}\n.content-user>div>.user-infos>div .wrapper-infos[data-v-30f50373] :only-child{display:block\n}\n.content-user>div>.user-infos>div .wrapper-infos .user-name[data-v-30f50373]{font-weight:700\n}\n.content-user>div>.user-infos>div .other-orgs[data-v-30f50373]{flex:1\n}\n.content-user>div>.user-infos>div .other-orgs>a[data-v-30f50373]{color:#fff;float:right;margin-right:15px\n}\n.content-user>div>.user-infos>div .other-orgs>a>svg[data-v-30f50373]{height:24px;width:24px\n}\n.content-user>div>.org-img+.user-infos[data-v-30f50373]{margin-top:auto\n}",
        ""
      ]);

      // exports

      /***/
    },

    /***/ edd4: /***/ function(module) {
      module.exports = {
        message: {
          services: { title: "All services", filter: "Find a service..." },
          favorites: {
            add: "Add to favorites",
            remove: "Remove from favorites",
            title: "My Favorites",
            empty: "No favorite defined"
          },
          userInfoPortletUrl: { title: "See my account informations" },
          userChangeEtabUrl: { title: "Select an other organization" },
          buttons: { logout: "Sign out", menuClose: "Close menu" }
        }
      };

      /***/
    },

    /***/ ef34: /***/ function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderButtons_vue_vue_type_style_index_0_id_8d64c084_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "9558"
      );
      /* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderButtons_vue_vue_type_style_index_0_id_8d64c084_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderButtons_vue_vue_type_style_index_0_id_8d64c084_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderButtons_vue_vue_type_style_index_0_id_8d64c084_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__)
        if (__WEBPACK_IMPORT_KEY__ !== "default")
          (function(key) {
            __webpack_require__.d(__webpack_exports__, key, function() {
              return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderButtons_vue_vue_type_style_index_0_id_8d64c084_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__[
                key
              ];
            });
          })(__WEBPACK_IMPORT_KEY__);
      /* harmony default export */ __webpack_exports__["default"] =
        _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderButtons_vue_vue_type_style_index_0_id_8d64c084_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default.a;

      /***/
    },

    /***/ ef79: /***/ function(module, exports) {
      /*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

      // The _isBuffer check is for Safari 5-7 support, because it's missing
      // Object.prototype.constructor. Remove this eventually
      module.exports = function(obj) {
        return (
          obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
        );
      };

      function isBuffer(obj) {
        return (
          !!obj.constructor &&
          typeof obj.constructor.isBuffer === "function" &&
          obj.constructor.isBuffer(obj)
        );
      }

      // For Node v0.10 support. Remove this eventually.
      function isSlowBuffer(obj) {
        return (
          typeof obj.readFloatLE === "function" &&
          typeof obj.slice === "function" &&
          isBuffer(obj.slice(0, 0))
        );
      }

      /***/
    },

    /***/ f090: /***/ function(module, exports, __webpack_require__) {
      // style-loader: Adds some css to the DOM by adding a <style> tag

      // load the styles
      var content = __webpack_require__("6730");
      if (typeof content === "string") content = [[module.i, content, ""]];
      if (content.locals) module.exports = content.locals;
      // add CSS to Shadow Root
      var add = __webpack_require__("35d6").default;
      module.exports.__inject__ = function(shadowRoot) {
        add("4006c0d8", content, shadowRoot);
      };

      /***/
    },

    /***/ f10c: /***/ function(module, exports, __webpack_require__) {
      "use strict";

      var utils = __webpack_require__("8805");
      var bind = __webpack_require__("801c");
      var Axios = __webpack_require__("7442");
      var defaults = __webpack_require__("ba5d");

      /**
       * Create an instance of Axios
       *
       * @param {Object} defaultConfig The default config for the instance
       * @return {Axios} A new instance of Axios
       */
      function createInstance(defaultConfig) {
        var context = new Axios(defaultConfig);
        var instance = bind(Axios.prototype.request, context);

        // Copy axios.prototype to instance
        utils.extend(instance, Axios.prototype, context);

        // Copy context to instance
        utils.extend(instance, context);

        return instance;
      }

      // Create the default instance to be exported
      var axios = createInstance(defaults);

      // Expose Axios class to allow class inheritance
      axios.Axios = Axios;

      // Factory for creating new instances
      axios.create = function create(instanceConfig) {
        return createInstance(utils.merge(defaults, instanceConfig));
      };

      // Expose Cancel & CancelToken
      axios.Cancel = __webpack_require__("6b8a");
      axios.CancelToken = __webpack_require__("12aa");
      axios.isCancel = __webpack_require__("184a");

      // Expose all/spread
      axios.all = function all(promises) {
        return Promise.all(promises);
      };
      axios.spread = __webpack_require__("87f4");

      module.exports = axios;

      // Allow use of default import syntax in TypeScript
      module.exports.default = axios;

      /***/
    },

    /***/ f693: /***/ function(module) {
      module.exports = {
        message: {
          services: {
            title: "Tous les services",
            filter: "Rechercher un service..."
          },
          favorites: {
            add: "Ajouter aux favoris",
            remove: "Supprimer des favoris",
            title: "Mes favoris",
            empty: "Aucun favori défini"
          },
          userInfoPortletUrl: { title: "Voir les informations de mon compte" },
          userChangeEtabUrl: { title: "Changer d'établissement" },
          buttons: { logout: "Déconnexion", menuClose: "Fermer le menu" }
        }
      };

      /***/
    },

    /***/ f751: /***/ function(module, exports, __webpack_require__) {
      // 19.1.3.1 Object.assign(target, source)
      var $export = __webpack_require__("5ca1");

      $export($export.S + $export.F, "Object", {
        assign: __webpack_require__("7333")
      });

      /***/
    },

    /***/ fab2: /***/ function(module, exports, __webpack_require__) {
      var document = __webpack_require__("7726").document;
      module.exports = document && document.documentElement;

      /***/
    }

    /******/
  }
);
//# sourceMappingURL=esco-content-menu.js.map

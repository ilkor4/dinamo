"use strict";
(self["webpackChunkdinamo"] = self["webpackChunkdinamo"] || []).push([["src_app_providers_ProtocolProvider_lib_useProtocol_tsx-src_widgets_GameProtocol_ui_GameProtoc-db0bff"],{

/***/ "./src/shared/assets/icons/stat-icon.svg":
/*!***********************************************!*\
  !*** ./src/shared/assets/icons/stat-icon.svg ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path, _path2;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgStatIcon = function SvgStatIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 25,
    height: 25,
    viewBox: "0 0 512 512"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M234.5 42.1c-41.5 4.2-82.6 21.3-114.7 47.7-8.9 7.3-24.8 23.4-31.9 32.2-21.5 26.9-36.9 60.8-43.4 95.7-11.2 60.1 5.3 125 43.9 172.9 6.7 8.4 22.8 24.6 31.4 31.6 52.6 43.3 123.4 58.8 190.1 41.8 59.6-15.2 112-57.9 139-113.4 22.6-46.4 27.9-98.4 15.1-148.5-7.4-29-22.5-58.8-41.8-82.3-7.3-8.9-23.4-24.8-32.2-31.9-43-34.4-100.8-51.4-155.5-45.8M359 256v133H153V123h206z"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M185 177.5v7.5h142v-15H185zM185.4 204.3c-.3.8-.4 4.3-.2 7.8l.3 6.4h141v-15l-70.3-.3c-58.5-.2-70.3 0-70.8 1.1M185.7 237.7c-.4.3-.7 3.7-.7 7.5v6.8h77v-15h-37.8c-20.8 0-38.2.3-38.5.7M288 314.5V357l19.3-.2 19.2-.3.3-42.3.2-42.2h-39zM185.2 323.2l.3 33.3 19.3.3 19.2.2v-67h-39zM237 334v23h38v-46h-38z"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgStatIcon);

/***/ }),

/***/ "./src/app/providers/ProtocolProvider/lib/useProtocol.tsx":
/*!****************************************************************!*\
  !*** ./src/app/providers/ProtocolProvider/lib/useProtocol.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useProtocol: () => (/* binding */ useProtocol)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var features_MainApi_MainApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! features/MainApi/MainApi */ "./src/features/MainApi/MainApi.ts");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};


function useProtocol() {
  var _this = this;
  var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      isOpen: false,
      gameId: null,
      gameInfo: null,
      gameData: null
    }),
    protocolState = _a[0],
    setProtocolState = _a[1];
  var fetchGame = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return __awaiter(_this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, features_MainApi_MainApi__WEBPACK_IMPORTED_MODULE_1__.mainApi.getGameProtocol(protocolState.gameId)];
          /* Костыль */
          case 1:
            return [2 /*return*/, _a.sent()];
          /* Костыль */
        }
      });
    });
  }, [protocolState.gameId]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (protocolState.isOpen) {
      fetchGame().then(function (gameData) {
        setProtocolState(__assign(__assign({}, protocolState), {
          gameData: gameData
        }));
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }, [fetchGame, protocolState.isOpen]);
  return {
    protocolState: protocolState,
    setProtocolState: setProtocolState
  };
}

/***/ }),

/***/ "./src/components/Game/Game.tsx":
/*!**************************************!*\
  !*** ./src/components/Game/Game.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Game: () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var _Game_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Game.module.scss */ "./src/components/Game/Game.module.scss");
/* harmony import */ var shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/ui/Button/Button */ "./src/shared/ui/Button/Button.tsx");
/* harmony import */ var shared_assets_icons_stat_icon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/assets/icons/stat-icon.svg */ "./src/shared/assets/icons/stat-icon.svg");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};





var Game = function Game(props) {
  var game = props.game,
    className = props.className,
    setProtocolState = props.setProtocolState,
    protocolState = props.protocolState;
  var GameID = game.GameID,
    DisplayDateTimeMsk = game.DisplayDateTimeMsk,
    TeamLogoA = game.TeamLogoA,
    TeamLogoB = game.TeamLogoB,
    ScoreA = game.ScoreA,
    ScoreB = game.ScoreB;
  var onStatOpen = function onStatOpen() {
    setProtocolState(__assign(__assign({}, protocolState), {
      isOpen: true,
      gameId: GameID,
      gameInfo: game
    }));
    console.log(protocolState);
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
    className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__.classNames)(_Game_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].Game, {}, [className !== null && className !== void 0 ? className : '']),
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
      className: _Game_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].Game__title,
      children: DisplayDateTimeMsk
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: _Game_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].Game__gameContainer,
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        style: {
          backgroundImage: "url(".concat(TeamLogoA, ")")
        },
        className: _Game_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].Game__teamImage
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: _Game_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].Game__score,
        children: "".concat(ScoreA, " : ").concat(ScoreB)
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        style: {
          backgroundImage: "url(".concat(TeamLogoB, ")")
        },
        className: _Game_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].Game__teamImage
      })]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: onStatOpen,
      theme: shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_3__.ThemeButton.POZ_GAME,
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_assets_icons_stat_icon_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: _Game_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].Game__statIcon
      }), "\u041F\u043E\u043B\u043D\u0430\u044F \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u043C\u0430\u0442\u0447\u0430"]
    })]
  });
};

/***/ }),

/***/ "./src/components/Gif/Gif.tsx":
/*!************************************!*\
  !*** ./src/components/Gif/Gif.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gif: () => (/* binding */ Gif)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var _Gif_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Gif.module.scss */ "./src/components/Gif/Gif.module.scss");



var Gif = function Gif(_a) {
  var className = _a.className;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__.classNames)(_Gif_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].Gif, {}, [className !== null && className !== void 0 ? className : '']),
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
      className: _Gif_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].Gif__item,
      viewBox: "0 0 320 300",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
        className: _Gif_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].gif__card,
        x: "480",
        width: "40",
        height: "200",
        rx: "5"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
        className: _Gif_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].Gif__card,
        y: "0",
        width: "200",
        height: "200",
        rx: "5"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
        className: _Gif_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].Gif__card,
        x: "240",
        width: "200",
        height: "200",
        rx: "5"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        className: _Gif_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].Gif__hand,
        /* eslint-disable-next-line max-len */
        d: "M78.9579 285.7C78.9579 285.7 37.8579 212.5 20.5579 180.8C-2.44209 138.6 -6.2422 120.8 9.6579 112C19.5579 106.5 33.2579 108.8 41.6579 123.4L61.2579 154.6V32.3C61.2579 32.3 60.0579 0 83.0579 0C107.558 0 105.458 32.3 105.458 32.3V91.7C105.458 91.7 118.358 82.4 133.458 86.6C141.158 88.7 150.158 92.4 154.958 104.6C154.958 104.6 185.658 89.7 200.958 121.4C200.958 121.4 236.358 114.4 236.358 151.1C236.358 187.8 192.158 285.7 192.158 285.7H78.9579Z"
      })]
    })
  });
};

/***/ }),

/***/ "./src/components/PersonProtocol/PersonProtocol.tsx":
/*!**********************************************************!*\
  !*** ./src/components/PersonProtocol/PersonProtocol.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PersonProtocol: () => (/* binding */ PersonProtocol)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var _PersonProtocol_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PersonProtocol.module.scss */ "./src/components/PersonProtocol/PersonProtocol.module.scss");



var PersonProtocol = function PersonProtocol(_PersonProtocol) {
  var PlayerNumber = _PersonProtocol.PlayerNumber,
    PersonID = _PersonProtocol.PersonID,
    PersonNameRu = _PersonProtocol.PersonNameRu,
    PlayedTime = _PersonProtocol.PlayedTime,
    Points = _PersonProtocol.Points,
    Shots1 = _PersonProtocol.Shots1,
    Shots2 = _PersonProtocol.Shots2,
    Shots3 = _PersonProtocol.Shots3,
    Goal2 = _PersonProtocol.Goal2,
    Goal3 = _PersonProtocol.Goal3,
    Shot2 = _PersonProtocol.Shot2,
    Shot3 = _PersonProtocol.Shot3,
    DefRebound = _PersonProtocol.DefRebound,
    OffRebound = _PersonProtocol.OffRebound,
    Rebound = _PersonProtocol.Rebound,
    Assist = _PersonProtocol.Assist,
    Steal = _PersonProtocol.Steal,
    Turnover = _PersonProtocol.Turnover,
    Blocks = _PersonProtocol.Blocks,
    Foul = _PersonProtocol.Foul,
    OpponentFoul = _PersonProtocol.OpponentFoul,
    PlusMinus = _PersonProtocol.PlusMinus;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
    className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__.classNames)(_PersonProtocol_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].protocol),
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
      className: _PersonProtocol_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].PersonProtocol__item,
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: _PersonProtocol_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].PersonProtocol__shirt,
        style: {
          backgroundImage: "url(https://russiabasket.ru/games/uniform?number=".concat(PlayerNumber, "&amp;color1=%23FFFFFF&amp;color2=%23000000&amp;color3=%23000000)")
        }
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
      className: _PersonProtocol_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].PersonProtocol__item,
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: _PersonProtocol_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].PersonProtocol__image,
        style: {
          backgroundImage: "url(https://org.infobasket.su/Widget/GetPersonPhoto/".concat(PersonID, "?d=1&amp;compId=42738&amp;teamId=758)")
        }
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
      className: _PersonProtocol_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].PersonProtocol__item,
      children: PersonNameRu
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
      className: _PersonProtocol_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].PersonProtocol__item,
      children: PlayedTime !== null && PlayedTime
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
      className: _PersonProtocol_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].PersonProtocol__item,
      children: Points !== null && Points
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
      className: _PersonProtocol_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].PersonProtocol__item,
      children: Shots2 !== null && Shots2
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
      className: _PersonProtocol_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].PersonProtocol__item,
      children: Shots3 !== null && Shots3
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
      className: _PersonProtocol_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].PersonProtocol__item,
      children: (Shot2 | Shot3) !== null && "".concat(Goal2 + Goal3, "/").concat(Shot2 + Shot3)
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
      className: _PersonProtocol_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].PersonProtocol__item,
      children: Shots1 !== null && Shots1
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
      className: _PersonProtocol_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].PersonProtocol__item,
      children: DefRebound !== null && DefRebound
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
      className: _PersonProtocol_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].PersonProtocol__item,
      children: OffRebound !== null && OffRebound
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
      className: _PersonProtocol_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].PersonProtocol__item,
      children: Rebound !== null && Rebound
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
      className: _PersonProtocol_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].PersonProtocol__item,
      children: Assist !== null && Assist
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
      className: _PersonProtocol_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].PersonProtocol__item,
      children: Steal !== null && Steal
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
      className: _PersonProtocol_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].PersonProtocol__item,
      children: Turnover !== null && Turnover
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
      className: _PersonProtocol_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].PersonProtocol__item,
      children: Blocks !== null && Blocks
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
      className: _PersonProtocol_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].PersonProtocol__item,
      children: Foul !== null && Foul
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
      className: _PersonProtocol_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].PersonProtocol__item,
      children: OpponentFoul !== null && OpponentFoul
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
      className: _PersonProtocol_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].PersonProtocol__item,
      children: PlusMinus !== null && PlusMinus
    })]
  });
};

/***/ }),

/***/ "./src/components/Table/Table.tsx":
/*!****************************************!*\
  !*** ./src/components/Table/Table.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Table: () => (/* binding */ Table)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var _Table_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Table.module.scss */ "./src/components/Table/Table.module.scss");
/* harmony import */ var shared_ui_SectionTitle_SectionTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/ui/SectionTitle/SectionTitle */ "./src/shared/ui/SectionTitle/SectionTitle.tsx");
/* harmony import */ var components_PersonProtocol_PersonProtocol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/PersonProtocol/PersonProtocol */ "./src/components/PersonProtocol/PersonProtocol.tsx");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};






var Table = function Table(props) {
  var logoTeam = props.logoTeam,
    nameTeam = props.nameTeam,
    gameData = props.gameData;
  var PlayedTime = gameData.PlayedTime,
    Score = gameData.Score,
    Shots1 = gameData.Shots1,
    Shots2 = gameData.Shots2,
    Shots3 = gameData.Shots3,
    Shot1Percent = gameData.Shot1Percent,
    Shot2Percent = gameData.Shot2Percent,
    Shot3Percent = gameData.Shot3Percent,
    DefRebound = gameData.DefRebound,
    OffRebound = gameData.OffRebound,
    Rebound = gameData.Rebound,
    Assist = gameData.Assist,
    Steal = gameData.Steal,
    Turnover = gameData.Turnover,
    Blocks = gameData.Blocks,
    Foul = gameData.Foul,
    OpponentFoul = gameData.OpponentFoul,
    Goal2 = gameData.Goal2,
    Goal3 = gameData.Goal3,
    Shot2 = gameData.Shot2,
    Shot3 = gameData.Shot3,
    Players = gameData.Players;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: _Table_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].Table,
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: _Table_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].Table__heading,
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
        className: _Table_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].Table__logo,
        src: logoTeam,
        alt: nameTeam
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(shared_ui_SectionTitle_SectionTitle__WEBPACK_IMPORTED_MODULE_4__.SectionTitle, {
        className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_2__.classNames)(_Table_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].Table__team),
        theme: "SectionTitle_clear" /* SectionTitleTheme.CLEAR */,
        children: nameTeam
      })]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("table", {
      className: _Table_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].Table__container,
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("thead", {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr", {
          className: _Table_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].Table__row,
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
            rowSpan: 2,
            colSpan: 3,
            className: _Table_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].Table__title,
            children: "\u0418\u0433\u0440\u043E\u043A\u0438"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
            rowSpan: 2,
            title: "\u0421\u044B\u0433\u0440\u0430\u043D\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F",
            className: _Table_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].Table__title,
            children: "\u0421\u0412"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
            rowSpan: 2,
            title: "\u041D\u0430\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u043E\u0447\u043A\u0438",
            className: _Table_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].Table__title,
            children: "\u041E\u0447\u043A\u0438"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
            colSpan: 4,
            className: _Table_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].Table__title,
            children: "\u0411\u0440\u043E\u0441\u043A\u0438"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
            colSpan: 3,
            className: _Table_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].Table__title,
            children: "\u041F\u043E\u0434\u0431\u043E\u0440\u044B"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
            rowSpan: 2,
            title: "\u0413\u043E\u043B\u0435\u0432\u044B\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0438",
            className: _Table_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].Table__title,
            children: "\u0413\u041F"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
            rowSpan: 2,
            title: "\u041F\u0435\u0440\u0435\u0445\u0432\u0430\u0442\u044B",
            className: _Table_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].Table__title,
            children: "\u041F\u0425"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
            rowSpan: 2,
            title: "\u041F\u043E\u0442\u0435\u0440\u0438",
            className: _Table_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].Table__title,
            children: "\u041F\u0422"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
            rowSpan: 2,
            title: "\u0411\u043B\u043E\u043A\u0448\u043E\u0442\u044B",
            className: _Table_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].Table__title,
            children: "\u0411\u0428"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
            rowSpan: 2,
            title: "\u0424\u043E\u043B\u044B",
            className: _Table_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].Table__title,
            children: "\u0424"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
            rowSpan: 2,
            title: "\u0424\u043E\u043B\u044B \u0441\u043E\u043F\u0435\u0440\u043D\u0438\u043A\u0430",
            className: _Table_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].Table__title,
            children: "\u0424\u0421"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
            rowSpan: 2,
            title: "\u041F\u043B\u044E\u0441/\u043C\u0438\u043D\u0443\u0441",
            className: _Table_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].Table__title,
            children: "+/-"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr", {
          className: _Table_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].Table__row,
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
            title: "\u0414\u0432\u0443\u0445\u043E\u0447\u043A\u043E\u0432\u044B\u0435 \u0431\u0440\u043E\u0441\u043A\u0438",
            className: _Table_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].Table__title,
            children: "2-\u043E\u0447\u043A"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
            title: "\u0422\u0440\u0435\u0445\u043E\u0447\u043A\u043E\u0432\u044B\u0435 \u0431\u0440\u043E\u0441\u043A\u0438",
            className: _Table_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].Table__title,
            children: "3-\u043E\u0447\u043A"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
            title: "\u0411\u0440\u043E\u0441\u043A\u0438 \u0441 \u0438\u0433\u0440\u044B",
            className: _Table_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].Table__title,
            children: "\u0418"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
            title: "\u0428\u0442\u0440\u0430\u0444\u043D\u044B\u0435 \u0431\u0440\u043E\u0441\u043A\u0438",
            className: _Table_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].Table__title,
            children: "\u0428\u0411"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
            title: "\u041F\u043E\u0434\u0431\u043E\u0440\u044B \u043D\u0430 \u0441\u0432\u043E\u0435\u043C \u0449\u0438\u0442\u0435",
            className: _Table_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].Table__title,
            children: "\u0421\u0429"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
            title: "\u041F\u043E\u0434\u0431\u043E\u0440\u044B \u043D\u0430 \u0447\u0443\u0436\u043E\u043C \u0449\u0438\u0442\u0435",
            className: _Table_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].Table__title,
            children: "\u0427\u0429"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
            title: "\u041F\u043E\u0434\u0431\u043E\u0440\u044B \u0432\u0441\u0435\u0433\u043E",
            className: _Table_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].Table__title,
            children: "\u0412\u0421"
          })]
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("tbody", {
        children: Players.map(function (_a, index) {
          var playerProps = __rest(_a, []);
          return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(components_PersonProtocol_PersonProtocol__WEBPACK_IMPORTED_MODULE_5__.PersonProtocol, __assign({}, playerProps, {
            key: index
          }));
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("tfoot", {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr", {
          className: _Table_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].Table__row,
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            className: _Table_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].Table__item,
            colSpan: 3,
            children: "\u0412\u0421\u0415\u0413\u041E:"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            className: _Table_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].Table__item,
            children: PlayedTime
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            className: _Table_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].Table__item,
            children: Score
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("td", {
            className: _Table_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].Table__item,
            children: [Shots2, " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), Shot2Percent, "%"]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("td", {
            className: _Table_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].Table__item,
            children: [Shots3, " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), Shot3Percent, "%"]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("td", {
            className: _Table_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].Table__item,
            children: [Goal2 + Goal3, "/", Shot2 + Shot3, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), ((Goal2 + Goal3) * 100 / (Shot2 + Shot3)).toFixed(1), "%"]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("td", {
            className: _Table_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].Table__item,
            children: [Shots1, " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), Shot1Percent, "%"]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            className: _Table_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].Table__item,
            children: DefRebound
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            className: _Table_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].Table__item,
            children: OffRebound
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            className: _Table_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].Table__item,
            children: Rebound
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            className: _Table_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].Table__item,
            children: Assist
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            className: _Table_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].Table__item,
            children: Steal
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            className: _Table_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].Table__item,
            children: Turnover
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            className: _Table_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].Table__item,
            children: Blocks
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            className: _Table_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].Table__item,
            children: Foul
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            className: _Table_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].Table__item,
            children: OpponentFoul
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
            className: _Table_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].Table__item
          })]
        })
      })]
    })]
  });
};

/***/ }),

/***/ "./src/shared/ui/SectionTitle/SectionTitle.tsx":
/*!*****************************************************!*\
  !*** ./src/shared/ui/SectionTitle/SectionTitle.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SectionTitle: () => (/* binding */ SectionTitle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var _SectionTitle_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SectionTitle.module.scss */ "./src/shared/ui/SectionTitle/SectionTitle.module.scss");



var SectionTitle = function SectionTitle(_a) {
  var theme = _a.theme,
    className = _a.className,
    children = _a.children;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
    className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__.classNames)(_SectionTitle_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].SectionTitle, {}, [_SectionTitle_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"][theme]]),
    children: children
  });
};

/***/ }),

/***/ "./src/widgets/GameBar/ui/GameBar.tsx":
/*!********************************************!*\
  !*** ./src/widgets/GameBar/ui/GameBar.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameBar: () => (/* binding */ GameBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var _GameBar_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameBar.module.scss */ "./src/widgets/GameBar/ui/GameBar.module.scss");
/* harmony import */ var components_Game_Game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Game/Game */ "./src/components/Game/Game.tsx");
/* harmony import */ var components_Gif_Gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Gif/Gif */ "./src/components/Gif/Gif.tsx");
/* harmony import */ var app_providers_GamesProvider_lib_GamesContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/providers/GamesProvider/lib/GamesContext */ "./src/app/providers/GamesProvider/lib/GamesContext.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var shared_lib_trimGames_trimGames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/lib/trimGames/trimGames */ "./src/shared/lib/trimGames/trimGames.ts");
/* harmony import */ var shared_ui_SectionTitle_SectionTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/ui/SectionTitle/SectionTitle */ "./src/shared/ui/SectionTitle/SectionTitle.tsx");









var GameBar = function GameBar(props) {
  var _a;
  var isVertical = props.isVertical,
    className = props.className,
    setProtocolState = props.setProtocolState,
    protocolState = props.protocolState;
  var gamesArray = (0,react__WEBPACK_IMPORTED_MODULE_6__.useContext)(app_providers_GamesProvider_lib_GamesContext__WEBPACK_IMPORTED_MODULE_5__.GamesContext);
  var _b = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]),
    renderGames = _b[0],
    setRenderGames = _b[1];
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {
    if (gamesArray.length !== 0) {
      setRenderGames((0,shared_lib_trimGames_trimGames__WEBPACK_IMPORTED_MODULE_7__.trimGames)(gamesArray));
    }
  }, [gamesArray]);
  var mods = (_a = {}, _a[_GameBar_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].vertical] = isVertical, _a);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
    className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__.classNames)(_GameBar_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].GameBar, mods, [className !== null && className !== void 0 ? className : '']),
    id: "gameBar",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_SectionTitle_SectionTitle__WEBPACK_IMPORTED_MODULE_8__.SectionTitle, {
      theme: "SectionTitle_poz_main" /* SectionTitleTheme.POZ_MAIN */,
      children: "\u041A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_Gif_Gif__WEBPACK_IMPORTED_MODULE_4__.Gif, {
      className: _GameBar_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].GameBar__gif
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", {
      className: _GameBar_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].GameBar__widget,
      children: renderGames.map(function (game, index) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
          className: _GameBar_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].GameBar__item,
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_Game_Game__WEBPACK_IMPORTED_MODULE_3__.Game, {
            game: game,
            setProtocolState: setProtocolState,
            protocolState: protocolState
          })
        }, index);
      })
    })]
  });
};

/***/ }),

/***/ "./src/widgets/GameProtocol/ui/GameProtocol.tsx":
/*!******************************************************!*\
  !*** ./src/widgets/GameProtocol/ui/GameProtocol.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameProtocol: () => (/* binding */ GameProtocol)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var _GameProtocol_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameProtocol.module.scss */ "./src/widgets/GameProtocol/ui/GameProtocol.module.scss");
/* harmony import */ var components_Table_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Table/Table */ "./src/components/Table/Table.tsx");
/* harmony import */ var shared_ui_Loader_Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/ui/Loader/Loader */ "./src/shared/ui/Loader/Loader.tsx");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};





var GameProtocol = function GameProtocol(props) {
  var _a;
  var protocolState = props.protocolState,
    setProtocolState = props.setProtocolState,
    className = props.className;
  var mods = (_a = {}, _a[_GameProtocol_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].opened] = protocolState.isOpen, _a);
  var closePopup = function closePopup() {
    setProtocolState(__assign(__assign({}, protocolState), {
      gameId: null,
      gameData: null,
      gameInfo: null,
      isOpen: false
    }));
    console.log(protocolState);
  };
  var onContentClick = function onContentClick(e) {
    e.stopPropagation();
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__.classNames)(_GameProtocol_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].GameProtocol, mods, [className !== null && className !== void 0 ? className : '']),
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: _GameProtocol_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].GameProtocol__overlay,
      onClick: closePopup,
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: _GameProtocol_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].GameProtocol__content,
        onClick: onContentClick,
        children: protocolState.gameInfo !== null && protocolState.gameData !== null ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_Table_Table__WEBPACK_IMPORTED_MODULE_3__.Table, {
            gameData: protocolState.gameData.GameTeams[0],
            logoTeam: protocolState.gameInfo.TeamLogoA,
            nameTeam: protocolState.gameInfo.TeamNameAru
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_Table_Table__WEBPACK_IMPORTED_MODULE_3__.Table, {
            gameData: protocolState.gameData.GameTeams[1],
            logoTeam: protocolState.gameInfo.TeamLogoB,
            nameTeam: protocolState.gameInfo.TeamNameBru
          })]
        }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Loader_Loader__WEBPACK_IMPORTED_MODULE_4__.Loader, {})
      })
    })
  });
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Game/Game.module.scss":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Game/Game.module.scss ***!
  \*******************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.src-components-Game-Game-module__Game--a8Giw {
  padding: 10px;
  width: var(--game-width);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: var(--primary-color);
  scroll-snap-align: start;
  scroll-snap-stop: always;
  transform: translateX(calc(100% - var(--game-width))/2);
  border-radius: 10px;
}
.src-components-Game-Game-module__Game__title--Zg8cb {
  font: var(--font-s);
  font-weight: var(--font-weight-s);
  color: var(--text-secondary-color);
}
.src-components-Game-Game-module__Game__gameContainer--RROwL {
  display: flex;
  align-items: center;
  gap: 40px;
}
.src-components-Game-Game-module__Game__teamImage--hL39V {
  width: 50px;
  height: 50px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
.src-components-Game-Game-module__Game__score--E2eus {
  font: var(--font-l);
  font-weight: var(--font-weight-s);
  color: var(--text-secondary-color);
}
.src-components-Game-Game-module__Game__statIcon--YSIao {
  fill: var(--secondary-color);
  width: 30px;
  height: 30px;
}`, "",{"version":3,"sources":["webpack://./src/components/Game/Game.module.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,wBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,SAAA;EACA,sCAAA;EACA,wBAAA;EACA,wBAAA;EACA,uDAAA;EACA,mBAAA;AACF;AACE;EACE,mBAAA;EACA,iCAAA;EACA,kCAAA;AACJ;AAEE;EACE,aAAA;EACA,mBAAA;EACA,SAAA;AAAJ;AAGE;EACE,WAAA;EACA,YAAA;EACA,wBAAA;EACA,2BAAA;EACA,4BAAA;AADJ;AAIE;EACE,mBAAA;EACA,iCAAA;EACA,kCAAA;AAFJ;AAKE;EACE,4BAAA;EACA,WAAA;EACA,YAAA;AAHJ","sourcesContent":[".Game {\n  padding: 10px;\n  width: var(--game-width);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  background-color: var(--primary-color);\n  scroll-snap-align: start;\n  scroll-snap-stop: always;\n  transform: translateX(calc(100% - var(--game-width)) / 2);\n  border-radius: 10px;\n\n  &__title {\n    font: var(--font-s);\n    font-weight: var(--font-weight-s);\n    color: var(--text-secondary-color);\n  }\n\n  &__gameContainer {\n    display: flex;\n    align-items: center;\n    gap: 40px;\n  }\n\n  &__teamImage {\n    width: 50px;\n    height: 50px;\n    background-size: contain;\n    background-position: center;\n    background-repeat: no-repeat;\n  }\n\n  &__score {\n    font: var(--font-l);\n    font-weight: var(--font-weight-s);\n    color: var(--text-secondary-color);\n  }\n\n  &__statIcon {\n    fill: var(--secondary-color);\n    width: 30px;\n    height: 30px;\n  }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Game": `src-components-Game-Game-module__Game--a8Giw`,
	"Game__title": `src-components-Game-Game-module__Game__title--Zg8cb`,
	"Game__gameContainer": `src-components-Game-Game-module__Game__gameContainer--RROwL`,
	"Game__teamImage": `src-components-Game-Game-module__Game__teamImage--hL39V`,
	"Game__score": `src-components-Game-Game-module__Game__score--E2eus`,
	"Game__statIcon": `src-components-Game-Game-module__Game__statIcon--YSIao`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Gif/Gif.module.scss":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Gif/Gif.module.scss ***!
  \*****************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@keyframes src-components-Gif-Gif-module__scroll-hand--LY6zL {
  0% {
    transform: translateX(80px) scale(1);
    opacity: 0;
  }
  10% {
    transform: translateX(80px) scale(1);
    opacity: 1;
  }
  20%, 60% {
    transform: translateX(175px) scale(0.6);
    opacity: 1;
  }
  80% {
    transform: translateX(5px) scale(0.6);
    opacity: 1;
  }
  100% {
    transform: translateX(5px) scale(0.6);
    opacity: 0;
  }
}
@keyframes src-components-Gif-Gif-module__scroll-card--L0Cd4 {
  0%, 60% {
    transform: translateX(0);
  }
  80%, 100% {
    transform: translateX(-240px);
  }
}
.src-components-Gif-Gif-module__Gif--_rw7p {
  width: var(--game-width);
  display: flex;
  flex-direction: row-reverse;
}
.src-components-Gif-Gif-module__Gif__item--OM6ci {
  width: 42px;
  height: 42px;
}
.src-components-Gif-Gif-module__Gif__hand--oFGZm {
  fill: var(--primary-color);
  animation: src-components-Gif-Gif-module__scroll-hand--LY6zL 2s infinite;
}
.src-components-Gif-Gif-module__Gif__card--EDYac {
  fill: rgba(255, 255, 255, 0.3);
  animation: src-components-Gif-Gif-module__scroll-card--L0Cd4 2s infinite;
}`, "",{"version":3,"sources":["webpack://./src/components/Gif/Gif.module.scss"],"names":[],"mappings":"AAAA;EACE;IACE,oCAAA;IACA,UAAA;EACF;EAEA;IACE,oCAAA;IACA,UAAA;EAAF;EAGA;IACE,uCAAA;IACA,UAAA;EADF;EAIA;IACE,qCAAA;IACA,UAAA;EAFF;EAKA;IACE,qCAAA;IACA,UAAA;EAHF;AACF;AAMA;EACE;IACE,wBAAA;EAJF;EAOA;IACE,6BAAA;EALF;AACF;AAQA;EACE,wBAAA;EACA,aAAA;EACA,2BAAA;AANF;AAQE;EACE,WAAA;EACA,YAAA;AANJ;AASE;EACE,0BAAA;EACA,wEAAA;AAPJ;AAUE;EACE,8BAAA;EACA,wEAAA;AARJ","sourcesContent":["@keyframes scroll-hand {\n  0% {\n    transform: translateX(80px) scale(1);\n    opacity: 0;\n  }\n\n  10% {\n    transform: translateX(80px) scale(1);\n    opacity: 1\n  }\n\n  20%, 60% {\n    transform: translateX(175px) scale(.6);\n    opacity: 1;\n  }\n\n  80% {\n    transform: translateX(5px) scale(.6);\n    opacity: 1;\n  }\n\n  100% {\n    transform: translateX(5px) scale(.6);\n    opacity: 0;\n  }\n}\n\n@keyframes scroll-card {\n  0%, 60% {\n    transform: translateX(0)\n  }\n\n  80%, 100% {\n    transform: translateX(-240px)\n  }\n}\n\n.Gif {\n  width: var(--game-width);\n  display: flex;\n  flex-direction: row-reverse;\n\n  &__item {\n    width: 42px;\n    height: 42px;\n  }\n\n  &__hand {\n    fill: var(--primary-color);\n    animation: scroll-hand 2s infinite\n  }\n\n  &__card {\n    fill: rgba(255 255 255 / 30%);\n    animation: scroll-card 2s infinite\n  }\n\n}\n\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Gif": `src-components-Gif-Gif-module__Gif--_rw7p`,
	"Gif__item": `src-components-Gif-Gif-module__Gif__item--OM6ci`,
	"Gif__hand": `src-components-Gif-Gif-module__Gif__hand--oFGZm`,
	"scroll-hand": `src-components-Gif-Gif-module__scroll-hand--LY6zL`,
	"Gif__card": `src-components-Gif-Gif-module__Gif__card--EDYac`,
	"scroll-card": `src-components-Gif-Gif-module__scroll-card--L0Cd4`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/PersonProtocol/PersonProtocol.module.scss":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/PersonProtocol/PersonProtocol.module.scss ***!
  \***************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.src-components-PersonProtocol-PersonProtocol-module__PersonProtocol__shirt--o4rpI {
  width: 30px;
  aspect-ratio: 69/89;
  background-size: contain;
}
.src-components-PersonProtocol-PersonProtocol-module__PersonProtocol__image--Tb0jg {
  width: 30px;
  height: 30px;
  background-size: contain;
  border-radius: 100%;
}
.src-components-PersonProtocol-PersonProtocol-module__PersonProtocol__item--ywYKu {
  padding: 5px;
  text-align: center;
  box-sizing: border-box;
  width: max-content;
  font: var(--font-s);
  color: var(--text-primary-color);
  border: 1px solid var(--inverted-bg-color);
}`, "",{"version":3,"sources":["webpack://./src/components/PersonProtocol/PersonProtocol.module.scss"],"names":[],"mappings":"AACE;EACE,WAAA;EACA,mBAAA;EACA,wBAAA;AAAJ;AAGE;EACE,WAAA;EACA,YAAA;EACA,wBAAA;EACA,mBAAA;AADJ;AAIE;EACE,YAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,mBAAA;EACA,gCAAA;EACA,0CAAA;AAFJ","sourcesContent":[".PersonProtocol {\n  &__shirt {\n    width: 30px;\n    aspect-ratio: 69/89;\n    background-size: contain;\n  }\n\n  &__image {\n    width: 30px;\n    height: 30px;\n    background-size: contain;\n    border-radius: 100%;\n  }\n\n  &__item {\n    padding: 5px;\n    text-align: center;\n    box-sizing: border-box;\n    width: max-content;\n    font: var(--font-s);\n    color: var(--text-primary-color);\n    border: 1px solid var(--inverted-bg-color);\n  }\n\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"PersonProtocol__shirt": `src-components-PersonProtocol-PersonProtocol-module__PersonProtocol__shirt--o4rpI`,
	"PersonProtocol__image": `src-components-PersonProtocol-PersonProtocol-module__PersonProtocol__image--Tb0jg`,
	"PersonProtocol__item": `src-components-PersonProtocol-PersonProtocol-module__PersonProtocol__item--ywYKu`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Table/Table.module.scss":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Table/Table.module.scss ***!
  \*********************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.src-components-Table-Table-module__Table--aDeoq {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.src-components-Table-Table-module__Table__heading--KCR29 {
  width: 100%;
  display: flex;
  gap: 20px;
  align-items: center;
}
.src-components-Table-Table-module__Table__logo--zvayP {
  width: 50px;
  height: 50px;
}
.src-components-Table-Table-module__Table__container--ifMZS {
  align-self: flex-start;
  width: 100%;
  border-collapse: collapse;
}
.src-components-Table-Table-module__Table__row--UX8lg {
  border: 1px solid var(--inverted-bg-color);
}
.src-components-Table-Table-module__Table__title--mYWTg {
  padding: 5px;
  box-sizing: border-box;
  width: max-content;
  border: 1px solid var(--inverted-bg-color);
  font: var(--font-m);
  font-weight: var(--font-weight-l);
  color: var(--text-primary-color);
}
.src-components-Table-Table-module__Table__item--aBYG0 {
  padding: 5px;
  text-align: center;
  box-sizing: border-box;
  font: var(--font-s);
  color: var(--text-primary-color);
  width: max-content;
  border: 1px solid var(--inverted-bg-color);
}`, "",{"version":3,"sources":["webpack://./src/components/Table/Table.module.scss"],"names":[],"mappings":"AAAA;EACE,WAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,SAAA;AACF;AACE;EACE,WAAA;EACA,aAAA;EACA,SAAA;EACA,mBAAA;AACJ;AAEE;EACE,WAAA;EACA,YAAA;AAAJ;AAGE;EACE,sBAAA;EACA,WAAA;EACA,yBAAA;AADJ;AAIE;EACE,0CAAA;AAFJ;AAKE;EACE,YAAA;EACA,sBAAA;EACA,kBAAA;EACA,0CAAA;EACA,mBAAA;EACA,iCAAA;EACA,gCAAA;AAHJ;AAME;EACE,YAAA;EACA,kBAAA;EACA,sBAAA;EACA,mBAAA;EACA,gCAAA;EACA,kBAAA;EACA,0CAAA;AAJJ","sourcesContent":[".Table {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n\n  &__heading {\n    width: 100%;\n    display: flex;\n    gap: 20px;\n    align-items: center;\n  }\n\n  &__logo {\n    width: 50px;\n    height: 50px;\n  }\n\n  &__container {\n    align-self: flex-start;\n    width: 100%;\n    border-collapse: collapse;\n  }\n\n  &__row {\n    border: 1px solid var(--inverted-bg-color)\n  }\n\n  &__title {\n    padding: 5px;\n    box-sizing: border-box;\n    width: max-content;\n    border: 1px solid var(--inverted-bg-color);\n    font: var(--font-m);\n    font-weight: var(--font-weight-l);\n    color: var(--text-primary-color);\n  }\n\n  &__item {\n    padding: 5px;\n    text-align: center;\n    box-sizing: border-box;\n    font: var(--font-s);\n    color: var(--text-primary-color);\n    width: max-content;\n    border: 1px solid var(--inverted-bg-color)\n  }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Table": `src-components-Table-Table-module__Table--aDeoq`,
	"Table__heading": `src-components-Table-Table-module__Table__heading--KCR29`,
	"Table__logo": `src-components-Table-Table-module__Table__logo--zvayP`,
	"Table__container": `src-components-Table-Table-module__Table__container--ifMZS`,
	"Table__row": `src-components-Table-Table-module__Table__row--UX8lg`,
	"Table__title": `src-components-Table-Table-module__Table__title--mYWTg`,
	"Table__item": `src-components-Table-Table-module__Table__item--aBYG0`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/SectionTitle/SectionTitle.module.scss":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/SectionTitle/SectionTitle.module.scss ***!
  \**********************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.src-shared-ui-SectionTitle-SectionTitle-module__SectionTitle--S18aM {
  font: var(--font-l);
  font-weight: var(--font-weight-xl);
  color: var(--text-primary-color);
  letter-spacing: 1.4px;
  text-transform: uppercase;
}
.src-shared-ui-SectionTitle-SectionTitle-module__SectionTitle_clear--PpmSx {
  text-transform: none;
}
.src-shared-ui-SectionTitle-SectionTitle-module__SectionTitle_poz_main--hjSi_ {
  color: var(--text-primary-color);
  text-transform: uppercase;
}
.src-shared-ui-SectionTitle-SectionTitle-module__SectionTitle_poz_roaster--DCOnF {
  color: var(--text-quatrenary-color);
}`, "",{"version":3,"sources":["webpack://./src/shared/ui/SectionTitle/SectionTitle.module.scss"],"names":[],"mappings":"AAAA;EACE,mBAAA;EACA,kCAAA;EACA,gCAAA;EACA,qBAAA;EACA,yBAAA;AACF;AACE;EACE,oBAAA;AACJ;AAEE;EACE,gCAAA;EACA,yBAAA;AAAJ;AAGE;EACE,mCAAA;AADJ","sourcesContent":[".SectionTitle {\n  font: var(--font-l);\n  font-weight: var(--font-weight-xl);\n  color: var(--text-primary-color);\n  letter-spacing: 1.4px;\n  text-transform: uppercase;\n\n  &_clear {\n    text-transform: none;\n  }\n\n  &_poz_main {\n    color: var(--text-primary-color);\n    text-transform: uppercase;\n  }\n\n  &_poz_roaster {\n    color: var(--text-quatrenary-color);\n  }\n\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"SectionTitle": `src-shared-ui-SectionTitle-SectionTitle-module__SectionTitle--S18aM`,
	"SectionTitle_clear": `src-shared-ui-SectionTitle-SectionTitle-module__SectionTitle_clear--PpmSx`,
	"SectionTitle_poz_main": `src-shared-ui-SectionTitle-SectionTitle-module__SectionTitle_poz_main--hjSi_`,
	"SectionTitle_poz_roaster": `src-shared-ui-SectionTitle-SectionTitle-module__SectionTitle_poz_roaster--DCOnF`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/GameBar/ui/GameBar.module.scss":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/GameBar/ui/GameBar.module.scss ***!
  \*************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.src-widgets-GameBar-ui-GameBar-module__GameBar--A6HP6 {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.src-widgets-GameBar-ui-GameBar-module__GameBar__widget--HJp5R {
  margin: 0;
  padding: 0;
  list-style: none;
  width: var(--game-width);
  box-sizing: border-box;
  display: flex;
  gap: 100px;
  overflow: scroll;
  scroll-snap-type: x mandatory;
}
.src-widgets-GameBar-ui-GameBar-module__GameBar__item--H1nqT {
  width: min-content;
}

.src-widgets-GameBar-ui-GameBar-module__vertical--ezTC5 {
  padding: 100px 0 0 0;
  gap: 30px;
  overflow: hidden;
  box-sizing: border-box;
}
.src-widgets-GameBar-ui-GameBar-module__vertical--ezTC5 .src-widgets-GameBar-ui-GameBar-module__GameBar__widget--HJp5R {
  width: 95%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: center;
  gap: 40px;
  overflow: unset;
  scroll-snap-type: unset;
}
.src-widgets-GameBar-ui-GameBar-module__vertical--ezTC5 .src-widgets-GameBar-ui-GameBar-module__GameBar__item--H1nqT {
  align-self: center;
  justify-self: center;
}
.src-widgets-GameBar-ui-GameBar-module__vertical--ezTC5 .src-widgets-GameBar-ui-GameBar-module__GameBar__gif--aP75I {
  display: none;
}

@media screen and (max-width: 1100px) {
  .src-widgets-GameBar-ui-GameBar-module__vertical--ezTC5 .src-widgets-GameBar-ui-GameBar-module__GameBar__widget--HJp5R {
    width: var(--game-width);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    overflow: unset;
    scroll-snap-type: unset;
  }
}`, "",{"version":3,"sources":["webpack://./src/widgets/GameBar/ui/GameBar.module.scss"],"names":[],"mappings":"AAAA;EACE,WAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;AACF;AACE;EACE,SAAA;EACA,UAAA;EACA,gBAAA;EACA,wBAAA;EACA,sBAAA;EACA,aAAA;EACA,UAAA;EACA,gBAAA;EACA,6BAAA;AACJ;AAEE;EACE,kBAAA;AAAJ;;AAIA;EACE,oBAAA;EACA,SAAA;EACA,gBAAA;EACA,sBAAA;AADF;AAGE;EACE,UAAA;EACA,aAAA;EACA,qCAAA;EACA,mBAAA;EACA,uBAAA;EACA,SAAA;EACA,eAAA;EACA,uBAAA;AADJ;AAIE;EACE,kBAAA;EACA,oBAAA;AAFJ;AAKE;EACE,aAAA;AAHJ;;AAOA;EAEI;IACE,wBAAA;IACA,aAAA;IACA,sBAAA;IACA,mBAAA;IACA,SAAA;IACA,eAAA;IACA,uBAAA;EALJ;AACF","sourcesContent":[".GameBar {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  &__widget {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    width: var(--game-width);\n    box-sizing: border-box;\n    display: flex;\n    gap: 100px;\n    overflow: scroll;\n    scroll-snap-type: x mandatory;\n  }\n\n  &__item {\n    width: min-content;\n  }\n}\n\n.vertical {\n  padding: 100px 0 0 0;\n  gap: 30px;\n  overflow: hidden;\n  box-sizing: border-box;\n\n  .GameBar__widget {\n    width: 95%;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    align-items: center;\n    justify-content: center;\n    gap: 40px;\n    overflow: unset;\n    scroll-snap-type: unset;\n  }\n\n  .GameBar__item {\n    align-self: center;\n    justify-self: center;\n  }\n\n  .GameBar__gif {\n    display: none;\n  }\n}\n\n@media screen and (max-width: 1100px) {\n  .vertical {\n    .GameBar__widget {\n      width: var(--game-width);\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      gap: 30px;\n      overflow: unset;\n      scroll-snap-type: unset;\n    }\n  }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"GameBar": `src-widgets-GameBar-ui-GameBar-module__GameBar--A6HP6`,
	"GameBar__widget": `src-widgets-GameBar-ui-GameBar-module__GameBar__widget--HJp5R`,
	"GameBar__item": `src-widgets-GameBar-ui-GameBar-module__GameBar__item--H1nqT`,
	"vertical": `src-widgets-GameBar-ui-GameBar-module__vertical--ezTC5`,
	"GameBar__gif": `src-widgets-GameBar-ui-GameBar-module__GameBar__gif--aP75I`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/GameProtocol/ui/GameProtocol.module.scss":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/GameProtocol/ui/GameProtocol.module.scss ***!
  \***********************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.src-widgets-GameProtocol-ui-GameProtocol-module__GameProtocol--Roln3 {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: none;
  opacity: 0;
  transition: 0.4s ease;
  z-index: -1;
}
.src-widgets-GameProtocol-ui-GameProtocol-module__GameProtocol__overlay--RcVdH {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
}
.src-widgets-GameProtocol-ui-GameProtocol-module__GameProtocol__content--vsw5Z {
  padding: 20px;
  max-width: 90%;
  max-height: 70%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  transform: scale(0.5);
  transition: 0.4s ease;
  background-color: var(--bg-color);
  border-radius: 10px;
  overflow: scroll;
}

.src-widgets-GameProtocol-ui-GameProtocol-module__opened--Iccr6 {
  opacity: 1;
  z-index: var(--modal-z-index);
  pointer-events: auto;
}
.src-widgets-GameProtocol-ui-GameProtocol-module__opened--Iccr6 .src-widgets-GameProtocol-ui-GameProtocol-module__GameProtocol__content--vsw5Z {
  transform: scale(1);
}`, "",{"version":3,"sources":["webpack://./src/widgets/GameProtocol/ui/GameProtocol.module.scss"],"names":[],"mappings":"AAAA;EACE,eAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,oBAAA;EACA,UAAA;EACA,qBAAA;EACA,WAAA;AACF;AACE;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,oCAAA;AACJ;AAEE;EACE,aAAA;EACA,cAAA;EACA,eAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;EACA,qBAAA;EACA,qBAAA;EACA,iCAAA;EACA,mBAAA;EACA,gBAAA;AAAJ;;AAIA;EACE,UAAA;EACA,6BAAA;EACA,oBAAA;AADF;AAGE;EACE,mBAAA;AADJ","sourcesContent":[".GameProtocol {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  pointer-events: none;\n  opacity: 0;\n  transition: .4s ease;\n  z-index: -1;\n\n  &__overlay {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(0, 0, 0, 60%);\n  }\n\n  &__content {\n    padding: 20px;\n    max-width: 90%;\n    max-height: 70%;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    transform: scale(.5);\n    transition: .4s ease;\n    background-color: var(--bg-color);\n    border-radius: 10px;\n    overflow: scroll;\n  }\n}\n\n.opened {\n  opacity: 1;\n  z-index: var(--modal-z-index);\n  pointer-events: auto;\n\n  .GameProtocol__content {\n    transform: scale(1);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"GameProtocol": `src-widgets-GameProtocol-ui-GameProtocol-module__GameProtocol--Roln3`,
	"GameProtocol__overlay": `src-widgets-GameProtocol-ui-GameProtocol-module__GameProtocol__overlay--RcVdH`,
	"GameProtocol__content": `src-widgets-GameProtocol-ui-GameProtocol-module__GameProtocol__content--vsw5Z`,
	"opened": `src-widgets-GameProtocol-ui-GameProtocol-module__opened--Iccr6`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/Game/Game.module.scss":
/*!**********************************************!*\
  !*** ./src/components/Game/Game.module.scss ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Game_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./Game.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Game/Game.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Game_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Game_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }
  var p;
  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (a[p] !== b[p]) {
      return false;
    }
  }
  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (!a[p]) {
      return false;
    }
  }
  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Game_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Game_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Game_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./Game.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Game/Game.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Game_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./Game.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Game/Game.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Game_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Game_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Game_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Game_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Game_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Game_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Game_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Game_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Gif/Gif.module.scss":
/*!********************************************!*\
  !*** ./src/components/Gif/Gif.module.scss ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Gif_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./Gif.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Gif/Gif.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Gif_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Gif_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }
  var p;
  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (a[p] !== b[p]) {
      return false;
    }
  }
  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (!a[p]) {
      return false;
    }
  }
  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Gif_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Gif_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Gif_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./Gif.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Gif/Gif.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Gif_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./Gif.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Gif/Gif.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Gif_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Gif_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Gif_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Gif_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Gif_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Gif_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Gif_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Gif_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/PersonProtocol/PersonProtocol.module.scss":
/*!******************************************************************!*\
  !*** ./src/components/PersonProtocol/PersonProtocol.module.scss ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_PersonProtocol_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./PersonProtocol.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/PersonProtocol/PersonProtocol.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_PersonProtocol_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_PersonProtocol_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }
  var p;
  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (a[p] !== b[p]) {
      return false;
    }
  }
  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (!a[p]) {
      return false;
    }
  }
  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_PersonProtocol_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_PersonProtocol_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_PersonProtocol_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./PersonProtocol.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/PersonProtocol/PersonProtocol.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_PersonProtocol_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./PersonProtocol.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/PersonProtocol/PersonProtocol.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_PersonProtocol_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_PersonProtocol_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_PersonProtocol_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_PersonProtocol_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_PersonProtocol_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_PersonProtocol_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_PersonProtocol_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_PersonProtocol_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Table/Table.module.scss":
/*!************************************************!*\
  !*** ./src/components/Table/Table.module.scss ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Table_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./Table.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Table/Table.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Table_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Table_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }
  var p;
  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (a[p] !== b[p]) {
      return false;
    }
  }
  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (!a[p]) {
      return false;
    }
  }
  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Table_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Table_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Table_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./Table.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Table/Table.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Table_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./Table.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Table/Table.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Table_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Table_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Table_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Table_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Table_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Table_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Table_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Table_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/shared/ui/SectionTitle/SectionTitle.module.scss":
/*!*************************************************************!*\
  !*** ./src/shared/ui/SectionTitle/SectionTitle.module.scss ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_SectionTitle_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./SectionTitle.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/SectionTitle/SectionTitle.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_SectionTitle_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_SectionTitle_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }
  var p;
  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (a[p] !== b[p]) {
      return false;
    }
  }
  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (!a[p]) {
      return false;
    }
  }
  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_SectionTitle_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_SectionTitle_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_SectionTitle_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./SectionTitle.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/SectionTitle/SectionTitle.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_SectionTitle_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./SectionTitle.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/SectionTitle/SectionTitle.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_SectionTitle_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_SectionTitle_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_SectionTitle_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_SectionTitle_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_SectionTitle_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_SectionTitle_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_SectionTitle_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_SectionTitle_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/widgets/GameBar/ui/GameBar.module.scss":
/*!****************************************************!*\
  !*** ./src/widgets/GameBar/ui/GameBar.module.scss ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_GameBar_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./GameBar.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/GameBar/ui/GameBar.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_GameBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_GameBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }
  var p;
  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (a[p] !== b[p]) {
      return false;
    }
  }
  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (!a[p]) {
      return false;
    }
  }
  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_GameBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_GameBar_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_GameBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./GameBar.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/GameBar/ui/GameBar.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_GameBar_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./GameBar.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/GameBar/ui/GameBar.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_GameBar_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_GameBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_GameBar_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_GameBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_GameBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_GameBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_GameBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_GameBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/widgets/GameProtocol/ui/GameProtocol.module.scss":
/*!**************************************************************!*\
  !*** ./src/widgets/GameProtocol/ui/GameProtocol.module.scss ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_GameProtocol_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./GameProtocol.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/GameProtocol/ui/GameProtocol.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_GameProtocol_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_GameProtocol_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }
  var p;
  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (a[p] !== b[p]) {
      return false;
    }
  }
  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (!a[p]) {
      return false;
    }
  }
  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_GameProtocol_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_GameProtocol_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_GameProtocol_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./GameProtocol.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/GameProtocol/ui/GameProtocol.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_GameProtocol_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./GameProtocol.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/GameProtocol/ui/GameProtocol.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_GameProtocol_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_GameProtocol_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_GameProtocol_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_GameProtocol_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_GameProtocol_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_GameProtocol_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_GameProtocol_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_GameProtocol_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/shared/lib/trimGames/trimGames.ts":
/*!***********************************************!*\
  !*** ./src/shared/lib/trimGames/trimGames.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   trimGames: () => (/* binding */ trimGames)
/* harmony export */ });
var trimGames = function (gamesArray) {
    var renderArray = [];
    var recentGames = gamesArray
        .filter(function (_a) {
        var GameStatus = _a.GameStatus;
        return GameStatus === 1;
    })
        .slice(-6);
    var nextGame = gamesArray
        .filter(function (_a) {
        var GameStatus = _a.GameStatus;
        return GameStatus === 0;
    })[0];
    recentGames.forEach(function (game) {
        renderArray.unshift(game);
    });
    renderArray.unshift(nextGame);
    return renderArray;
};


/***/ }),

/***/ "./src/widgets/GameBar/index.ts":
/*!**************************************!*\
  !*** ./src/widgets/GameBar/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameBar: () => (/* reexport safe */ _ui_GameBar__WEBPACK_IMPORTED_MODULE_0__.GameBar)
/* harmony export */ });
/* harmony import */ var _ui_GameBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/GameBar */ "./src/widgets/GameBar/ui/GameBar.tsx");



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2FwcF9wcm92aWRlcnNfUHJvdG9jb2xQcm92aWRlcl9saWJfdXNlUHJvdG9jb2xfdHN4LXNyY193aWRnZXRzX0dhbWVQcm90b2NvbF91aV9HYW1lUHJvdG9jLWRiMGJmZi4zNzQ5N2E4M2Q4YTYxZDk4Zjc1MS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLHNCQUFzQixzRUFBc0UsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELGlDQUFpQyxrQkFBa0I7QUFDM1E7QUFDL0I7QUFDQSxzQkFBc0IsZ0RBQW1CO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyx5Q0FBeUMsZ0RBQW1CO0FBQy9EO0FBQ0EsR0FBRyxxQ0FBcUMsZ0RBQW1CO0FBQzNEO0FBQ0EsR0FBRztBQUNIO0FBQ0EsaUVBQWUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmMUIsSUFBSUEsUUFBUSxHQUFJLFNBQUksSUFBSSxTQUFJLENBQUNBLFFBQVEsSUFBSyxZQUFZO0VBQ2xEQSxRQUFRLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBTSxJQUFJLFVBQVNDLENBQUMsRUFBRTtJQUNwQyxLQUFLLElBQUlDLENBQUMsRUFBRUMsQ0FBQyxHQUFHLENBQUMsRUFBRUMsQ0FBQyxHQUFHQyxTQUFTLENBQUNDLE1BQU0sRUFBRUgsQ0FBQyxHQUFHQyxDQUFDLEVBQUVELENBQUMsRUFBRSxFQUFFO01BQ2pERCxDQUFDLEdBQUdHLFNBQVMsQ0FBQ0YsQ0FBQyxDQUFDO01BQ2hCLEtBQUssSUFBSUksQ0FBQyxJQUFJTCxDQUFDLEVBQUUsSUFBSUgsTUFBTSxDQUFDUyxTQUFTLENBQUNDLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDUixDQUFDLEVBQUVLLENBQUMsQ0FBQyxFQUMzRE4sQ0FBQyxDQUFDTSxDQUFDLENBQUMsR0FBR0wsQ0FBQyxDQUFDSyxDQUFDLENBQUM7SUFDbkI7SUFDQSxPQUFPTixDQUFDO0VBQ1osQ0FBQztFQUNELE9BQU9ILFFBQVEsQ0FBQ2Es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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGtLQUFPO0FBQ2hDLG9DQUFvQyx1SkFBVyxHQUFHLGtLQUFPOztBQUV6RCxJQUFJLGlCQUFpQjtBQUNyQixNQUFNLGtVQUEySjtBQUNqSyxNQUFNO0FBQUE7QUFDTixzREFBc0QsdUpBQVcsR0FBRyxrS0FBTztBQUMzRSxnQkFBZ0IsVUFBVTs7QUFFMUI7QUFDQTs7QUFFQSwwQ0FBMEMsdUpBQVcsR0FBRyxrS0FBTzs7QUFFL0QscUJBQXFCLGtLQUFPO0FBQzVCLE9BQU87QUFDUDtBQUNBOztBQUVBLEVBQUUsVUFBVTtBQUNaO0FBQ0EsR0FBRztBQUNIOzs7QUFHMEs7QUFDMUssT0FBTyxpRUFBZSxrS0FBTyxJQUFJLGtLQUFPLFVBQVUsa0tBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzdFdEU7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQnVDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGluYW1vLy4vc3JjL3NoYXJlZC9hc3NldHMvaWNvbnMvc3RhdC1pY29uLnN2ZyIsIndlYnBhY2s6Ly9kaW5hbW8vLi9zcmMvYXBwL3Byb3ZpZGVycy9Qcm90b2NvbFByb3ZpZGVyL2xpYi91c2VQcm90b2NvbC50c3giLCJ3ZWJwYWNrOi8vZGluYW1vLy4vc3JjL2NvbXBvbmVudHMvR2FtZS9HYW1lLnRzeCIsIndlYnBhY2s6Ly9kaW5hbW8vLi9zcmMvY29tcG9uZW50cy9HaWYvR2lmLnRzeCIsIndlYnBhY2s6Ly9kaW5hbW8vLi9zcmMvY29tcG9uZW50cy9QZXJzb25Qcm90b2NvbC9QZXJzb25Qcm90b2NvbC50c3giLCJ3ZWJwYWNrOi8vZGluYW1vLy4vc3JjL2NvbXBvbmVudHMvVGFibGUvVGFibGUudHN4Iiwid2VicGFjazovL2RpbmFtby8uL3NyYy9zaGFyZWQvdWkvU2VjdGlvblRpdGxlL1NlY3Rpb25UaXRsZS50c3giLCJ3ZWJwYWNrOi8vZGluYW1vLy4vc3JjL3dpZGdldHMvR2FtZUJhci91aS9HYW1lQmFyLnRzeCIsIndlYnBhY2s6Ly9kaW5hbW8vLi9zcmMvd2lkZ2V0cy9HYW1lUHJvdG9jb2wvdWkvR2FtZVByb3RvY29sLnRzeCIsIndlYnBhY2s6Ly9kaW5hbW8vLi9zcmMvY29tcG9uZW50cy9HYW1lL0dhbWUubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZGluYW1vLy4vc3JjL2NvbXBvbmVudHMvR2lmL0dpZi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9kaW5hbW8vLi9zcmMvY29tcG9uZW50cy9QZXJzb25Qcm90b2NvbC9QZXJzb25Qcm90b2NvbC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9kaW5hbW8vLi9zcmMvY29tcG9uZW50cy9UYWJsZS9UYWJsZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9kaW5hbW8vLi9zcmMvc2hhcmVkL3VpL1NlY3Rpb25UaXRsZS9TZWN0aW9uVGl0bGUubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZGluYW1vLy4vc3JjL3dpZGdldHMvR2FtZUJhci91aS9HYW1lQmFyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2RpbmFtby8uL3NyYy93aWRnZXRzL0dhbWVQcm90b2NvbC91aS9HYW1lUHJvdG9jb2wubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZGluYW1vLy4vc3JjL2NvbXBvbmVudHMvR2FtZS9HYW1lLm1vZHVsZS5zY3NzPzAxYzEiLCJ3ZWJwYWNrOi8vZGluYW1vLy4vc3JjL2NvbXBvbmVudHMvR2lmL0dpZi5tb2R1bGUuc2Nzcz83MjE5Iiwid2VicGFjazovL2RpbmFtby8uL3NyYy9jb21wb25lbnRzL1BlcnNvblByb3RvY29sL1BlcnNvblByb3RvY29sLm1vZHVsZS5zY3NzPzE1ZmUiLCJ3ZWJwYWNrOi8vZGluYW1vLy4vc3JjL2NvbXBvbmVudHMvVGFibGUvVGFibGUubW9kdWxlLnNjc3M/MzIyMCIsIndlYnBhY2s6Ly9kaW5hbW8vLi9zcmMvc2hhcmVkL3VpL1NlY3Rpb25UaXRsZS9TZWN0aW9uVGl0bGUubW9kdWxlLnNjc3M/ZmNiYyIsIndlYnBhY2s6Ly9kaW5hbW8vLi9zcmMvd2lkZ2V0cy9HYW1lQmFyL3VpL0dhbWVCYXIubW9kdWxlLnNjc3M/NzVmMiIsIndlYnBhY2s6Ly9kaW5hbW8vLi9zcmMvd2lkZ2V0cy9HYW1lUHJvdG9jb2wvdWkvR2FtZVByb3RvY29sLm1vZHVsZS5zY3NzP2UzMzEiLCJ3ZWJwYWNrOi8vZGluYW1vLy4vc3JjL3NoYXJlZC9saWIvdHJpbUdhbWVzL3RyaW1HYW1lcy50cyIsIndlYnBhY2s6Ly9kaW5hbW8vLi9zcmMvd2lkZ2V0cy9HYW1lQmFyL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfcGF0aCwgX3BhdGgyO1xuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiA/IE9iamVjdC5hc3NpZ24uYmluZCgpIDogZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbnZhciBTdmdTdGF0SWNvbiA9IGZ1bmN0aW9uIFN2Z1N0YXRJY29uKHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCBfZXh0ZW5kcyh7XG4gICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICB3aWR0aDogMjUsXG4gICAgaGVpZ2h0OiAyNSxcbiAgICB2aWV3Qm94OiBcIjAgMCA1MTIgNTEyXCJcbiAgfSwgcHJvcHMpLCBfcGF0aCB8fCAoX3BhdGggPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTIzNC41IDQyLjFjLTQxLjUgNC4yLTgyLjYgMjEuMy0xMTQuNyA0Ny43LTguOSA3LjMtMjQuOCAyMy40LTMxLjkgMzIuMi0yMS41IDI2LjktMzYuOSA2MC44LTQzLjQgOTUuNy0xMS4yIDYwLjEgNS4zIDEyNSA0My45IDE3Mi45IDYuNyA4LjQgMjIuOCAyNC42IDMxLjQgMzEuNiA1Mi42IDQzLjMgMTIzLjQgNTguOCAxOTAuMSA0MS44IDU5LjYtMTUuMiAxMTItNTcuOSAxMzktMTEzLjQgMjIuNi00Ni40IDI3LjktOTguNCAxNS4xLTE0OC41LTcuNC0yOS0yMi41LTU4LjgtNDEuOC04Mi4zLTcuMy04LjktMjMuNC0yNC44LTMyLjItMzEuOS00My0zNC40LTEwMC44LTUxLjQtMTU1LjUtNDUuOE0zNTkgMjU2djEzM0gxNTNWMTIzaDIwNnpcIlxuICB9KSksIF9wYXRoMiB8fCAoX3BhdGgyID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0xODUgMTc3LjV2Ny41aDE0MnYtMTVIMTg1ek0xODUuNCAyMDQuM2MtLjMuOC0uNCA0LjMtLjIgNy44bC4zIDYuNGgxNDF2LTE1bC03MC4zLS4zYy01OC41LS4yLTcwLjMgMC03MC44IDEuMU0xODUuNyAyMzcuN2MtLjQuMy0uNyAzLjctLjcgNy41djYuOGg3N3YtMTVoLTM3LjhjLTIwLjggMC0zOC4yLjMtMzguNS43TTI4OCAzMTQuNVYzNTdsMTkuMy0uMiAxOS4yLS4zLjMtNDIuMy4yLTQyLjJoLTM5ek0xODUuMiAzMjMuMmwuMyAzMy4zIDE5LjMuMyAxOS4yLjJ2LTY3aC0zOXpNMjM3IDMzNHYyM2gzOHYtNDZoLTM4elwiXG4gIH0pKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgU3ZnU3RhdEljb247IiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFpbkFwaSB9IGZyb20gJ2ZlYXR1cmVzL01haW5BcGkvTWFpbkFwaSc7XG5leHBvcnQgZnVuY3Rpb24gdXNlUHJvdG9jb2woKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZSh7XG4gICAgICAgIGlzT3BlbjogZmFsc2UsXG4gICAgICAgIGdhbWVJZDogbnVsbCxcbiAgICAgICAgZ2FtZUluZm86IG51bGwsXG4gICAgICAgIGdhbWVEYXRhOiBudWxsXG4gICAgfSksIHByb3RvY29sU3RhdGUgPSBfYVswXSwgc2V0UHJvdG9jb2xTdGF0ZSA9IF9hWzFdO1xuICAgIHZhciBmZXRjaEdhbWUgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7IHJldHVybiBfX2F3YWl0ZXIoX3RoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIG1haW5BcGkuZ2V0R2FtZVByb3RvY29sKHByb3RvY29sU3RhdGUuZ2FtZUlkKV07IC8qINCa0L7RgdGC0YvQu9GMICovXG4gICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Euc2VudCgpXTsgLyog0JrQvtGB0YLRi9C70YwgKi9cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7IH0sIFtwcm90b2NvbFN0YXRlLmdhbWVJZF0pO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChwcm90b2NvbFN0YXRlLmlzT3Blbikge1xuICAgICAgICAgICAgZmV0Y2hHYW1lKClcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoZ2FtZURhdGEpIHsgc2V0UHJvdG9jb2xTdGF0ZShfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcHJvdG9jb2xTdGF0ZSksIHsgZ2FtZURhdGE6IGdhbWVEYXRhIH0pKTsgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikgeyBjb25zb2xlLmxvZyhlcnIpOyB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtmZXRjaEdhbWUsIHByb3RvY29sU3RhdGUuaXNPcGVuXSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvdG9jb2xTdGF0ZTogcHJvdG9jb2xTdGF0ZSxcbiAgICAgICAgc2V0UHJvdG9jb2xTdGF0ZTogc2V0UHJvdG9jb2xTdGF0ZVxuICAgIH07XG59XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IGNsYXNzTmFtZXMgfSBmcm9tICdzaGFyZWQvbGliL2NsYXNzTmFtZXMvY2xhc3NOYW1lcyc7XG5pbXBvcnQgY2xzIGZyb20gJy4vR2FtZS5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyBCdXR0b24sIFRoZW1lQnV0dG9uIH0gZnJvbSAnc2hhcmVkL3VpL0J1dHRvbi9CdXR0b24nO1xuaW1wb3J0IFN0YXRJY29uIGZyb20gJ3NoYXJlZC9hc3NldHMvaWNvbnMvc3RhdC1pY29uLnN2Zyc7XG5leHBvcnQgdmFyIEdhbWUgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgZ2FtZSA9IHByb3BzLmdhbWUsIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSwgc2V0UHJvdG9jb2xTdGF0ZSA9IHByb3BzLnNldFByb3RvY29sU3RhdGUsIHByb3RvY29sU3RhdGUgPSBwcm9wcy5wcm90b2NvbFN0YXRlO1xuICAgIHZhciBHYW1lSUQgPSBnYW1lLkdhbWVJRCwgRGlzcGxheURhdGVUaW1lTXNrID0gZ2FtZS5EaXNwbGF5RGF0ZVRpbWVNc2ssIFRlYW1Mb2dvQSA9IGdhbWUuVGVhbUxvZ29BLCBUZWFtTG9nb0IgPSBnYW1lLlRlYW1Mb2dvQiwgU2NvcmVBID0gZ2FtZS5TY29yZUEsIFNjb3JlQiA9IGdhbWUuU2NvcmVCO1xuICAgIHZhciBvblN0YXRPcGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzZXRQcm90b2NvbFN0YXRlKF9fYXNzaWduKF9fYXNzaWduKHt9LCBwcm90b2NvbFN0YXRlKSwgeyBpc09wZW46IHRydWUsIGdhbWVJZDogR2FtZUlELCBnYW1lSW5mbzogZ2FtZSB9KSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb3RvY29sU3RhdGUpO1xuICAgIH07XG4gICAgcmV0dXJuIChfanN4cyhcImFydGljbGVcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZXMoY2xzLkdhbWUsIHt9LCBbY2xhc3NOYW1lICE9PSBudWxsICYmIGNsYXNzTmFtZSAhPT0gdm9pZCAwID8gY2xhc3NOYW1lIDogJyddKSwgY2hpbGRyZW46IFtfanN4KFwiaDNcIiwgeyBjbGFzc05hbWU6IGNscy5HYW1lX190aXRsZSwgY2hpbGRyZW46IERpc3BsYXlEYXRlVGltZU1zayB9KSwgX2pzeHMoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNscy5HYW1lX19nYW1lQ29udGFpbmVyLCBjaGlsZHJlbjogW19qc3goXCJkaXZcIiwgeyBzdHlsZTogeyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiLmNvbmNhdChUZWFtTG9nb0EsIFwiKVwiKSB9LCBjbGFzc05hbWU6IGNscy5HYW1lX190ZWFtSW1hZ2UgfSksIF9qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNscy5HYW1lX19zY29yZSwgY2hpbGRyZW46IFwiXCIuY29uY2F0KFNjb3JlQSwgXCIgOiBcIikuY29uY2F0KFNjb3JlQikgfSksIF9qc3goXCJkaXZcIiwgeyBzdHlsZTogeyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiLmNvbmNhdChUZWFtTG9nb0IsIFwiKVwiKSB9LCBjbGFzc05hbWU6IGNscy5HYW1lX190ZWFtSW1hZ2UgfSldIH0pLCBfanN4cyhCdXR0b24sIHsgb25DbGljazogb25TdGF0T3BlbiwgdGhlbWU6IFRoZW1lQnV0dG9uLlBPWl9HQU1FLCBjaGlsZHJlbjogW19qc3goU3RhdEljb24sIHsgY2xhc3NOYW1lOiBjbHMuR2FtZV9fc3RhdEljb24gfSksIFwiXFx1MDQxRlxcdTA0M0VcXHUwNDNCXFx1MDQzRFxcdTA0MzBcXHUwNDRGIFxcdTA0NDFcXHUwNDQyXFx1MDQzMFxcdTA0NDJcXHUwNDM4XFx1MDQ0MVxcdTA0NDJcXHUwNDM4XFx1MDQzQVxcdTA0MzAgXFx1MDQzQ1xcdTA0MzBcXHUwNDQyXFx1MDQ0N1xcdTA0MzBcIl0gfSldIH0pKTtcbn07XG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgY2xhc3NOYW1lcyB9IGZyb20gJ3NoYXJlZC9saWIvY2xhc3NOYW1lcy9jbGFzc05hbWVzJztcbmltcG9ydCBjbHMgZnJvbSAnLi9HaWYubW9kdWxlLnNjc3MnO1xuZXhwb3J0IHZhciBHaWYgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lO1xuICAgIHJldHVybiAoX2pzeChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjbHMuR2lmLCB7fSwgW2NsYXNzTmFtZSAhPT0gbnVsbCAmJiBjbGFzc05hbWUgIT09IHZvaWQgMCA/IGNsYXNzTmFtZSA6ICcnXSksIGNoaWxkcmVuOiBfanN4cyhcInN2Z1wiLCB7IGNsYXNzTmFtZTogY2xzLkdpZl9faXRlbSwgdmlld0JveDogXCIwIDAgMzIwIDMwMFwiLCBjaGlsZHJlbjogW19qc3goXCJyZWN0XCIsIHsgY2xhc3NOYW1lOiBjbHMuZ2lmX19jYXJkLCB4OiBcIjQ4MFwiLCB3aWR0aDogXCI0MFwiLCBoZWlnaHQ6IFwiMjAwXCIsIHJ4OiBcIjVcIiB9KSwgX2pzeChcInJlY3RcIiwgeyBjbGFzc05hbWU6IGNscy5HaWZfX2NhcmQsIHk6IFwiMFwiLCB3aWR0aDogXCIyMDBcIiwgaGVpZ2h0OiBcIjIwMFwiLCByeDogXCI1XCIgfSksIF9qc3goXCJyZWN0XCIsIHsgY2xhc3NOYW1lOiBjbHMuR2lmX19jYXJkLCB4OiBcIjI0MFwiLCB3aWR0aDogXCIyMDBcIiwgaGVpZ2h0OiBcIjIwMFwiLCByeDogXCI1XCIgfSksIF9qc3goXCJwYXRoXCIsIHsgY2xhc3NOYW1lOiBjbHMuR2lmX19oYW5kLCBcbiAgICAgICAgICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW4gKi9cbiAgICAgICAgICAgICAgICAgICAgZDogXCJNNzguOTU3OSAyODUuN0M3OC45NTc5IDI4NS43IDM3Ljg1NzkgMjEyLjUgMjAuNTU3OSAxODAuOEMtMi40NDIwOSAxMzguNiAtNi4yNDIyIDEyMC44IDkuNjU3OSAxMTJDMTkuNTU3OSAxMDYuNSAzMy4yNTc5IDEwOC44IDQxLjY1NzkgMTIzLjRMNjEuMjU3OSAxNTQuNlYzMi4zQzYxLjI1NzkgMzIuMyA2MC4wNTc5IDAgODMuMDU3OSAwQzEwNy41NTggMCAxMDUuNDU4IDMyLjMgMTA1LjQ1OCAzMi4zVjkxLjdDMTA1LjQ1OCA5MS43IDExOC4zNTggODIuNCAxMzMuNDU4IDg2LjZDMTQxLjE1OCA4OC43IDE1MC4xNTggOTIuNCAxNTQuOTU4IDEwNC42QzE1NC45NTggMTA0LjYgMTg1LjY1OCA4OS43IDIwMC45NTggMTIxLjRDMjAwLjk1OCAxMjEuNCAyMzYuMzU4IDExNC40IDIzNi4zNTggMTUxLjFDMjM2LjM1OCAxODcuOCAxOTIuMTU4IDI4NS43IDE5Mi4xNTggMjg1LjdINzguOTU3OVpcIiB9KV0gfSkgfSkpO1xufTtcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBjbGFzc05hbWVzIH0gZnJvbSAnc2hhcmVkL2xpYi9jbGFzc05hbWVzL2NsYXNzTmFtZXMnO1xuaW1wb3J0IGNscyBmcm9tICcuL1BlcnNvblByb3RvY29sLm1vZHVsZS5zY3NzJztcbmV4cG9ydCB2YXIgUGVyc29uUHJvdG9jb2wgPSBmdW5jdGlvbiAoUGVyc29uUHJvdG9jb2wpIHtcbiAgICB2YXIgUGxheWVyTnVtYmVyID0gUGVyc29uUHJvdG9jb2wuUGxheWVyTnVtYmVyLCBQZXJzb25JRCA9IFBlcnNvblByb3RvY29sLlBlcnNvbklELCBQZXJzb25OYW1lUnUgPSBQZXJzb25Qcm90b2NvbC5QZXJzb25OYW1lUnUsIFBsYXllZFRpbWUgPSBQZXJzb25Qcm90b2NvbC5QbGF5ZWRUaW1lLCBQb2ludHMgPSBQZXJzb25Qcm90b2NvbC5Qb2ludHMsIFNob3RzMSA9IFBlcnNvblByb3RvY29sLlNob3RzMSwgU2hvdHMyID0gUGVyc29uUHJvdG9jb2wuU2hvdHMyLCBTaG90czMgPSBQZXJzb25Qcm90b2NvbC5TaG90czMsIEdvYWwyID0gUGVyc29uUHJvdG9jb2wuR29hbDIsIEdvYWwzID0gUGVyc29uUHJvdG9jb2wuR29hbDMsIFNob3QyID0gUGVyc29uUHJvdG9jb2wuU2hvdDIsIFNob3QzID0gUGVyc29uUHJvdG9jb2wuU2hvdDMsIERlZlJlYm91bmQgPSBQZXJzb25Qcm90b2NvbC5EZWZSZWJvdW5kLCBPZmZSZWJvdW5kID0gUGVyc29uUHJvdG9jb2wuT2ZmUmVib3VuZCwgUmVib3VuZCA9IFBlcnNvblByb3RvY29sLlJlYm91bmQsIEFzc2lzdCA9IFBlcnNvblByb3RvY29sLkFzc2lzdCwgU3RlYWwgPSBQZXJzb25Qcm90b2NvbC5TdGVhbCwgVHVybm92ZXIgPSBQZXJzb25Qcm90b2NvbC5UdXJub3ZlciwgQmxvY2tzID0gUGVyc29uUHJvdG9jb2wuQmxvY2tzLCBGb3VsID0gUGVyc29uUHJvdG9jb2wuRm91bCwgT3Bwb25lbnRGb3VsID0gUGVyc29uUHJvdG9jb2wuT3Bwb25lbnRGb3VsLCBQbHVzTWludXMgPSBQZXJzb25Qcm90b2NvbC5QbHVzTWludXM7XG4gICAgcmV0dXJuIChfanN4cyhcInRyXCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGNscy5wcm90b2NvbCksIGNoaWxkcmVuOiBbX2pzeChcInRkXCIsIHsgY2xhc3NOYW1lOiBjbHMuUGVyc29uUHJvdG9jb2xfX2l0ZW0sIGNoaWxkcmVuOiBfanN4KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbHMuUGVyc29uUHJvdG9jb2xfX3NoaXJ0LCBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChodHRwczovL3J1c3NpYWJhc2tldC5ydS9nYW1lcy91bmlmb3JtP251bWJlcj1cIi5jb25jYXQoUGxheWVyTnVtYmVyLCBcIiZhbXA7Y29sb3IxPSUyM0ZGRkZGRiZhbXA7Y29sb3IyPSUyMzAwMDAwMCZhbXA7Y29sb3IzPSUyMzAwMDAwMClcIilcbiAgICAgICAgICAgICAgICAgICAgfSB9KSB9KSwgX2pzeChcInRkXCIsIHsgY2xhc3NOYW1lOiBjbHMuUGVyc29uUHJvdG9jb2xfX2l0ZW0sIGNoaWxkcmVuOiBfanN4KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbHMuUGVyc29uUHJvdG9jb2xfX2ltYWdlLCBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChodHRwczovL29yZy5pbmZvYmFza2V0LnN1L1dpZGdldC9HZXRQZXJzb25QaG90by9cIi5jb25jYXQoUGVyc29uSUQsIFwiP2Q9MSZhbXA7Y29tcElkPTQyNzM4JmFtcDt0ZWFtSWQ9NzU4KVwiKVxuICAgICAgICAgICAgICAgICAgICB9IH0pIH0pLCBfanN4KFwidGRcIiwgeyBjbGFzc05hbWU6IGNscy5QZXJzb25Qcm90b2NvbF9faXRlbSwgY2hpbGRyZW46IFBlcnNvbk5hbWVSdSB9KSwgX2pzeChcInRkXCIsIHsgY2xhc3NOYW1lOiBjbHMuUGVyc29uUHJvdG9jb2xfX2l0ZW0sIGNoaWxkcmVuOiBQbGF5ZWRUaW1lICE9PSBudWxsICYmIFBsYXllZFRpbWUgfSksIF9qc3goXCJ0ZFwiLCB7IGNsYXNzTmFtZTogY2xzLlBlcnNvblByb3RvY29sX19pdGVtLCBjaGlsZHJlbjogUG9pbnRzICE9PSBudWxsICYmIFBvaW50cyB9KSwgX2pzeChcInRkXCIsIHsgY2xhc3NOYW1lOiBjbHMuUGVyc29uUHJvdG9jb2xfX2l0ZW0sIGNoaWxkcmVuOiBTaG90czIgIT09IG51bGwgJiYgU2hvdHMyIH0pLCBfanN4KFwidGRcIiwgeyBjbGFzc05hbWU6IGNscy5QZXJzb25Qcm90b2NvbF9faXRlbSwgY2hpbGRyZW46IFNob3RzMyAhPT0gbnVsbCAmJiBTaG90czMgfSksIF9qc3goXCJ0ZFwiLCB7IGNsYXNzTmFtZTogY2xzLlBlcnNvblByb3RvY29sX19pdGVtLCBjaGlsZHJlbjogKChTaG90MiB8IFNob3QzKSAhPT0gbnVsbCkgJiZcbiAgICAgICAgICAgICAgICAgICAgXCJcIi5jb25jYXQoR29hbDIgKyBHb2FsMywgXCIvXCIpLmNvbmNhdChTaG90MiArIFNob3QzKSB9KSwgX2pzeChcInRkXCIsIHsgY2xhc3NOYW1lOiBjbHMuUGVyc29uUHJvdG9jb2xfX2l0ZW0sIGNoaWxkcmVuOiBTaG90czEgIT09IG51bGwgJiYgU2hvdHMxIH0pLCBfanN4KFwidGRcIiwgeyBjbGFzc05hbWU6IGNscy5QZXJzb25Qcm90b2NvbF9faXRlbSwgY2hpbGRyZW46IERlZlJlYm91bmQgIT09IG51bGwgJiYgRGVmUmVib3VuZCB9KSwgX2pzeChcInRkXCIsIHsgY2xhc3NOYW1lOiBjbHMuUGVyc29uUHJvdG9jb2xfX2l0ZW0sIGNoaWxkcmVuOiBPZmZSZWJvdW5kICE9PSBudWxsICYmIE9mZlJlYm91bmQgfSksIF9qc3goXCJ0ZFwiLCB7IGNsYXNzTmFtZTogY2xzLlBlcnNvblByb3RvY29sX19pdGVtLCBjaGlsZHJlbjogUmVib3VuZCAhPT0gbnVsbCAmJiBSZWJvdW5kIH0pLCBfanN4KFwidGRcIiwgeyBjbGFzc05hbWU6IGNscy5QZXJzb25Qcm90b2NvbF9faXRlbSwgY2hpbGRyZW46IEFzc2lzdCAhPT0gbnVsbCAmJiBBc3Npc3QgfSksIF9qc3goXCJ0ZFwiLCB7IGNsYXNzTmFtZTogY2xzLlBlcnNvblByb3RvY29sX19pdGVtLCBjaGlsZHJlbjogU3RlYWwgIT09IG51bGwgJiYgU3RlYWwgfSksIF9qc3goXCJ0ZFwiLCB7IGNsYXNzTmFtZTogY2xzLlBlcnNvblByb3RvY29sX19pdGVtLCBjaGlsZHJlbjogVHVybm92ZXIgIT09IG51bGwgJiYgVHVybm92ZXIgfSksIF9qc3goXCJ0ZFwiLCB7IGNsYXNzTmFtZTogY2xzLlBlcnNvblByb3RvY29sX19pdGVtLCBjaGlsZHJlbjogQmxvY2tzICE9PSBudWxsICYmIEJsb2NrcyB9KSwgX2pzeChcInRkXCIsIHsgY2xhc3NOYW1lOiBjbHMuUGVyc29uUHJvdG9jb2xfX2l0ZW0sIGNoaWxkcmVuOiBGb3VsICE9PSBudWxsICYmIEZvdWwgfSksIF9qc3goXCJ0ZFwiLCB7IGNsYXNzTmFtZTogY2xzLlBlcnNvblByb3RvY29sX19pdGVtLCBjaGlsZHJlbjogT3Bwb25lbnRGb3VsICE9PSBudWxsICYmIE9wcG9uZW50Rm91bCB9KSwgX2pzeChcInRkXCIsIHsgY2xhc3NOYW1lOiBjbHMuUGVyc29uUHJvdG9jb2xfX2l0ZW0sIGNoaWxkcmVuOiBQbHVzTWludXMgIT09IG51bGwgJiYgUGx1c01pbnVzIH0pXSB9KSk7XG59O1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgYXMgX2NyZWF0ZUVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBjbGFzc05hbWVzIH0gZnJvbSAnc2hhcmVkL2xpYi9jbGFzc05hbWVzL2NsYXNzTmFtZXMnO1xuaW1wb3J0IGNscyBmcm9tICcuL1RhYmxlLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IFNlY3Rpb25UaXRsZSB9IGZyb20gJ3NoYXJlZC91aS9TZWN0aW9uVGl0bGUvU2VjdGlvblRpdGxlJztcbmltcG9ydCB7IFBlcnNvblByb3RvY29sIH0gZnJvbSAnY29tcG9uZW50cy9QZXJzb25Qcm90b2NvbC9QZXJzb25Qcm90b2NvbCc7XG5leHBvcnQgdmFyIFRhYmxlID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIGxvZ29UZWFtID0gcHJvcHMubG9nb1RlYW0sIG5hbWVUZWFtID0gcHJvcHMubmFtZVRlYW0sIGdhbWVEYXRhID0gcHJvcHMuZ2FtZURhdGE7XG4gICAgdmFyIFBsYXllZFRpbWUgPSBnYW1lRGF0YS5QbGF5ZWRUaW1lLCBTY29yZSA9IGdhbWVEYXRhLlNjb3JlLCBTaG90czEgPSBnYW1lRGF0YS5TaG90czEsIFNob3RzMiA9IGdhbWVEYXRhLlNob3RzMiwgU2hvdHMzID0gZ2FtZURhdGEuU2hvdHMzLCBTaG90MVBlcmNlbnQgPSBnYW1lRGF0YS5TaG90MVBlcmNlbnQsIFNob3QyUGVyY2VudCA9IGdhbWVEYXRhLlNob3QyUGVyY2VudCwgU2hvdDNQZXJjZW50ID0gZ2FtZURhdGEuU2hvdDNQZXJjZW50LCBEZWZSZWJvdW5kID0gZ2FtZURhdGEuRGVmUmVib3VuZCwgT2ZmUmVib3VuZCA9IGdhbWVEYXRhLk9mZlJlYm91bmQsIFJlYm91bmQgPSBnYW1lRGF0YS5SZWJvdW5kLCBBc3Npc3QgPSBnYW1lRGF0YS5Bc3Npc3QsIFN0ZWFsID0gZ2FtZURhdGEuU3RlYWwsIFR1cm5vdmVyID0gZ2FtZURhdGEuVHVybm92ZXIsIEJsb2NrcyA9IGdhbWVEYXRhLkJsb2NrcywgRm91bCA9IGdhbWVEYXRhLkZvdWwsIE9wcG9uZW50Rm91bCA9IGdhbWVEYXRhLk9wcG9uZW50Rm91bCwgR29hbDIgPSBnYW1lRGF0YS5Hb2FsMiwgR29hbDMgPSBnYW1lRGF0YS5Hb2FsMywgU2hvdDIgPSBnYW1lRGF0YS5TaG90MiwgU2hvdDMgPSBnYW1lRGF0YS5TaG90MywgUGxheWVycyA9IGdhbWVEYXRhLlBsYXllcnM7XG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xzLlRhYmxlLCBjaGlsZHJlbjogW19qc3hzKFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbHMuVGFibGVfX2hlYWRpbmcsIGNoaWxkcmVuOiBbX2pzeChcImltZ1wiLCB7IGNsYXNzTmFtZTogY2xzLlRhYmxlX19sb2dvLCBzcmM6IGxvZ29UZWFtLCBhbHQ6IG5hbWVUZWFtIH0pLCBfanN4KFNlY3Rpb25UaXRsZSwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZXMoY2xzLlRhYmxlX190ZWFtKSwgdGhlbWU6IFwiU2VjdGlvblRpdGxlX2NsZWFyXCIgLyogU2VjdGlvblRpdGxlVGhlbWUuQ0xFQVIgKi8sIGNoaWxkcmVuOiBuYW1lVGVhbSB9KV0gfSksIF9qc3hzKFwidGFibGVcIiwgeyBjbGFzc05hbWU6IGNscy5UYWJsZV9fY29udGFpbmVyLCBjaGlsZHJlbjogW19qc3hzKFwidGhlYWRcIiwgeyBjaGlsZHJlbjogW19qc3hzKFwidHJcIiwgeyBjbGFzc05hbWU6IGNscy5UYWJsZV9fcm93LCBjaGlsZHJlbjogW19qc3goXCJ0aFwiLCB7IHJvd1NwYW46IDIsIGNvbFNwYW46IDMsIGNsYXNzTmFtZTogY2xzLlRhYmxlX190aXRsZSwgY2hpbGRyZW46IFwiXFx1MDQxOFxcdTA0MzNcXHUwNDQwXFx1MDQzRVxcdTA0M0FcXHUwNDM4XCIgfSksIF9qc3goXCJ0aFwiLCB7IHJvd1NwYW46IDIsIHRpdGxlOiBcIlxcdTA0MjFcXHUwNDRCXFx1MDQzM1xcdTA0NDBcXHUwNDMwXFx1MDQzRFxcdTA0M0RcXHUwNDNFXFx1MDQzNSBcXHUwNDMyXFx1MDQ0MFxcdTA0MzVcXHUwNDNDXFx1MDQ0RlwiLCBjbGFzc05hbWU6IGNscy5UYWJsZV9fdGl0bGUsIGNoaWxkcmVuOiBcIlxcdTA0MjFcXHUwNDEyXCIgfSksIF9qc3goXCJ0aFwiLCB7IHJvd1NwYW46IDIsIHRpdGxlOiBcIlxcdTA0MURcXHUwNDMwXFx1MDQzMVxcdTA0NDBcXHUwNDMwXFx1MDQzRFxcdTA0M0RcXHUwNDRCXFx1MDQzNSBcXHUwNDNFXFx1MDQ0N1xcdTA0M0FcXHUwNDM4XCIsIGNsYXNzTmFtZTogY2xzLlRhYmxlX190aXRsZSwgY2hpbGRyZW46IFwiXFx1MDQxRVxcdTA0NDdcXHUwNDNBXFx1MDQzOFwiIH0pLCBfanN4KFwidGhcIiwgeyBjb2xTcGFuOiA0LCBjbGFzc05hbWU6IGNscy5UYWJsZV9fdGl0bGUsIGNoaWxkcmVuOiBcIlxcdTA0MTFcXHUwNDQwXFx1MDQzRVxcdTA0NDFcXHUwNDNBXFx1MDQzOFwiIH0pLCBfanN4KFwidGhcIiwgeyBjb2xTcGFuOiAzLCBjbGFzc05hbWU6IGNscy5UYWJsZV9fdGl0bGUsIGNoaWxkcmVuOiBcIlxcdTA0MUZcXHUwNDNFXFx1MDQzNFxcdTA0MzFcXHUwNDNFXFx1MDQ0MFxcdTA0NEJcIiB9KSwgX2pzeChcInRoXCIsIHsgcm93U3BhbjogMiwgdGl0bGU6IFwiXFx1MDQxM1xcdTA0M0VcXHUwNDNCXFx1MDQzNVxcdTA0MzJcXHUwNDRCXFx1MDQzNSBcXHUwNDNGXFx1MDQzNVxcdTA0NDBcXHUwNDM1XFx1MDQzNFxcdTA0MzBcXHUwNDQ3XFx1MDQzOFwiLCBjbGFzc05hbWU6IGNscy5UYWJsZV9fdGl0bGUsIGNoaWxkcmVuOiBcIlxcdTA0MTNcXHUwNDFGXCIgfSksIF9qc3goXCJ0aFwiLCB7IHJvd1NwYW46IDIsIHRpdGxlOiBcIlxcdTA0MUZcXHUwNDM1XFx1MDQ0MFxcdTA0MzVcXHUwNDQ1XFx1MDQzMlxcdTA0MzBcXHUwNDQyXFx1MDQ0QlwiLCBjbGFzc05hbWU6IGNscy5UYWJsZV9fdGl0bGUsIGNoaWxkcmVuOiBcIlxcdTA0MUZcXHUwNDI1XCIgfSksIF9qc3goXCJ0aFwiLCB7IHJvd1NwYW46IDIsIHRpdGxlOiBcIlxcdTA0MUZcXHUwNDNFXFx1MDQ0MlxcdTA0MzVcXHUwNDQwXFx1MDQzOFwiLCBjbGFzc05hbWU6IGNscy5UYWJsZV9fdGl0bGUsIGNoaWxkcmVuOiBcIlxcdTA0MUZcXHUwNDIyXCIgfSksIF9qc3goXCJ0aFwiLCB7IHJvd1NwYW46IDIsIHRpdGxlOiBcIlxcdTA0MTFcXHUwNDNCXFx1MDQzRVxcdTA0M0FcXHUwNDQ4XFx1MDQzRVxcdTA0NDJcXHUwNDRCXCIsIGNsYXNzTmFtZTogY2xzLlRhYmxlX190aXRsZSwgY2hpbGRyZW46IFwiXFx1MDQxMVxcdTA0MjhcIiB9KSwgX2pzeChcInRoXCIsIHsgcm93U3BhbjogMiwgdGl0bGU6IFwiXFx1MDQyNFxcdTA0M0VcXHUwNDNCXFx1MDQ0QlwiLCBjbGFzc05hbWU6IGNscy5UYWJsZV9fdGl0bGUsIGNoaWxkcmVuOiBcIlxcdTA0MjRcIiB9KSwgX2pzeChcInRoXCIsIHsgcm93U3BhbjogMiwgdGl0bGU6IFwiXFx1MDQyNFxcdTA0M0VcXHUwNDNCXFx1MDQ0QiBcXHUwNDQxXFx1MDQzRVxcdTA0M0ZcXHUwNDM1XFx1MDQ0MFxcdTA0M0RcXHUwNDM4XFx1MDQzQVxcdTA0MzBcIiwgY2xhc3NOYW1lOiBjbHMuVGFibGVfX3RpdGxlLCBjaGlsZHJlbjogXCJcXHUwNDI0XFx1MDQyMVwiIH0pLCBfanN4KFwidGhcIiwgeyByb3dTcGFuOiAyLCB0aXRsZTogXCJcXHUwNDFGXFx1MDQzQlxcdTA0NEVcXHUwNDQxL1xcdTA0M0NcXHUwNDM4XFx1MDQzRFxcdTA0NDNcXHUwNDQxXCIsIGNsYXNzTmFtZTogY2xzLlRhYmxlX190aXRsZSwgY2hpbGRyZW46IFwiKy8tXCIgfSldIH0pLCBfanN4cyhcInRyXCIsIHsgY2xhc3NOYW1lOiBjbHMuVGFibGVfX3JvdywgY2hpbGRyZW46IFtfanN4KFwidGhcIiwgeyB0aXRsZTogXCJcXHUwNDE0XFx1MDQzMlxcdTA0NDNcXHUwNDQ1XFx1MDQzRVxcdTA0NDdcXHUwNDNBXFx1MDQzRVxcdTA0MzJcXHUwNDRCXFx1MDQzNSBcXHUwNDMxXFx1MDQ0MFxcdTA0M0VcXHUwNDQxXFx1MDQzQVxcdTA0MzhcIiwgY2xhc3NOYW1lOiBjbHMuVGFibGVfX3RpdGxlLCBjaGlsZHJlbjogXCIyLVxcdTA0M0VcXHUwNDQ3XFx1MDQzQVwiIH0pLCBfanN4KFwidGhcIiwgeyB0aXRsZTogXCJcXHUwNDIyXFx1MDQ0MFxcdTA0MzVcXHUwNDQ1XFx1MDQzRVxcdTA0NDdcXHUwNDNBXFx1MDQzRVxcdTA0MzJcXHUwNDRCXFx1MDQzNSBcXHUwNDMxXFx1MDQ0MFxcdTA0M0VcXHUwNDQxXFx1MDQzQVxcdTA0MzhcIiwgY2xhc3NOYW1lOiBjbHMuVGFibGVfX3RpdGxlLCBjaGlsZHJlbjogXCIzLVxcdTA0M0VcXHUwNDQ3XFx1MDQzQVwiIH0pLCBfanN4KFwidGhcIiwgeyB0aXRsZTogXCJcXHUwNDExXFx1MDQ0MFxcdTA0M0VcXHUwNDQxXFx1MDQzQVxcdTA0MzggXFx1MDQ0MSBcXHUwNDM4XFx1MDQzM1xcdTA0NDBcXHUwNDRCXCIsIGNsYXNzTmFtZTogY2xzLlRhYmxlX190aXRsZSwgY2hpbGRyZW46IFwiXFx1MDQxOFwiIH0pLCBfanN4KFwidGhcIiwgeyB0aXRsZTogXCJcXHUwNDI4XFx1MDQ0MlxcdTA0NDBcXHUwNDMwXFx1MDQ0NFxcdTA0M0RcXHUwNDRCXFx1MDQzNSBcXHUwNDMxXFx1MDQ0MFxcdTA0M0VcXHUwNDQxXFx1MDQzQVxcdTA0MzhcIiwgY2xhc3NOYW1lOiBjbHMuVGFibGVfX3RpdGxlLCBjaGlsZHJlbjogXCJcXHUwNDI4XFx1MDQxMVwiIH0pLCBfanN4KFwidGhcIiwgeyB0aXRsZTogXCJcXHUwNDFGXFx1MDQzRVxcdTA0MzRcXHUwNDMxXFx1MDQzRVxcdTA0NDBcXHUwNDRCIFxcdTA0M0RcXHUwNDMwIFxcdTA0NDFcXHUwNDMyXFx1MDQzRVxcdTA0MzVcXHUwNDNDIFxcdTA0NDlcXHUwNDM4XFx1MDQ0MlxcdTA0MzVcIiwgY2xhc3NOYW1lOiBjbHMuVGFibGVfX3RpdGxlLCBjaGlsZHJlbjogXCJcXHUwNDIxXFx1MDQyOVwiIH0pLCBfanN4KFwidGhcIiwgeyB0aXRsZTogXCJcXHUwNDFGXFx1MDQzRVxcdTA0MzRcXHUwNDMxXFx1MDQzRVxcdTA0NDBcXHUwNDRCIFxcdTA0M0RcXHUwNDMwIFxcdTA0NDdcXHUwNDQzXFx1MDQzNlxcdTA0M0VcXHUwNDNDIFxcdTA0NDlcXHUwNDM4XFx1MDQ0MlxcdTA0MzVcIiwgY2xhc3NOYW1lOiBjbHMuVGFibGVfX3RpdGxlLCBjaGlsZHJlbjogXCJcXHUwNDI3XFx1MDQyOVwiIH0pLCBfanN4KFwidGhcIiwgeyB0aXRsZTogXCJcXHUwNDFGXFx1MDQzRVxcdTA0MzRcXHUwNDMxXFx1MDQzRVxcdTA0NDBcXHUwNDRCIFxcdTA0MzJcXHUwNDQxXFx1MDQzNVxcdTA0MzNcXHUwNDNFXCIsIGNsYXNzTmFtZTogY2xzLlRhYmxlX190aXRsZSwgY2hpbGRyZW46IFwiXFx1MDQxMlxcdTA0MjFcIiB9KV0gfSldIH0pLCBfanN4KFwidGJvZHlcIiwgeyBjaGlsZHJlbjogUGxheWVycy5tYXAoZnVuY3Rpb24gKF9hLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwbGF5ZXJQcm9wcyA9IF9fcmVzdChfYSwgW10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoX2NyZWF0ZUVsZW1lbnQoUGVyc29uUHJvdG9jb2wsIF9fYXNzaWduKHt9LCBwbGF5ZXJQcm9wcywgeyBrZXk6IGluZGV4IH0pKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSB9KSwgX2pzeChcInRmb290XCIsIHsgY2hpbGRyZW46IF9qc3hzKFwidHJcIiwgeyBjbGFzc05hbWU6IGNscy5UYWJsZV9fcm93LCBjaGlsZHJlbjogW19qc3goXCJ0ZFwiLCB7IGNsYXNzTmFtZTogY2xzLlRhYmxlX19pdGVtLCBjb2xTcGFuOiAzLCBjaGlsZHJlbjogXCJcXHUwNDEyXFx1MDQyMVxcdTA0MTVcXHUwNDEzXFx1MDQxRTpcIiB9KSwgX2pzeChcInRkXCIsIHsgY2xhc3NOYW1lOiBjbHMuVGFibGVfX2l0ZW0sIGNoaWxkcmVuOiBQbGF5ZWRUaW1lIH0pLCBfanN4KFwidGRcIiwgeyBjbGFzc05hbWU6IGNscy5UYWJsZV9faXRlbSwgY2hpbGRyZW46IFNjb3JlIH0pLCBfanN4cyhcInRkXCIsIHsgY2xhc3NOYW1lOiBjbHMuVGFibGVfX2l0ZW0sIGNoaWxkcmVuOiBbU2hvdHMyLCBcIiBcIiwgX2pzeChcImJyXCIsIHt9KSwgU2hvdDJQZXJjZW50LCBcIiVcIl0gfSksIF9qc3hzKFwidGRcIiwgeyBjbGFzc05hbWU6IGNscy5UYWJsZV9faXRlbSwgY2hpbGRyZW46IFtTaG90czMsIFwiIFwiLCBfanN4KFwiYnJcIiwge30pLCBTaG90M1BlcmNlbnQsIFwiJVwiXSB9KSwgX2pzeHMoXCJ0ZFwiLCB7IGNsYXNzTmFtZTogY2xzLlRhYmxlX19pdGVtLCBjaGlsZHJlbjogW0dvYWwyICsgR29hbDMsIFwiL1wiLCBTaG90MiArIFNob3QzLCBfanN4KFwiYnJcIiwge30pLCAoKEdvYWwyICsgR29hbDMpICogMTAwIC8gKFNob3QyICsgU2hvdDMpKS50b0ZpeGVkKDEpLCBcIiVcIl0gfSksIF9qc3hzKFwidGRcIiwgeyBjbGFzc05hbWU6IGNscy5UYWJsZV9faXRlbSwgY2hpbGRyZW46IFtTaG90czEsIFwiIFwiLCBfanN4KFwiYnJcIiwge30pLCBTaG90MVBlcmNlbnQsIFwiJVwiXSB9KSwgX2pzeChcInRkXCIsIHsgY2xhc3NOYW1lOiBjbHMuVGFibGVfX2l0ZW0sIGNoaWxkcmVuOiBEZWZSZWJvdW5kIH0pLCBfanN4KFwidGRcIiwgeyBjbGFzc05hbWU6IGNscy5UYWJsZV9faXRlbSwgY2hpbGRyZW46IE9mZlJlYm91bmQgfSksIF9qc3goXCJ0ZFwiLCB7IGNsYXNzTmFtZTogY2xzLlRhYmxlX19pdGVtLCBjaGlsZHJlbjogUmVib3VuZCB9KSwgX2pzeChcInRkXCIsIHsgY2xhc3NOYW1lOiBjbHMuVGFibGVfX2l0ZW0sIGNoaWxkcmVuOiBBc3Npc3QgfSksIF9qc3goXCJ0ZFwiLCB7IGNsYXNzTmFtZTogY2xzLlRhYmxlX19pdGVtLCBjaGlsZHJlbjogU3RlYWwgfSksIF9qc3goXCJ0ZFwiLCB7IGNsYXNzTmFtZTogY2xzLlRhYmxlX19pdGVtLCBjaGlsZHJlbjogVHVybm92ZXIgfSksIF9qc3goXCJ0ZFwiLCB7IGNsYXNzTmFtZTogY2xzLlRhYmxlX19pdGVtLCBjaGlsZHJlbjogQmxvY2tzIH0pLCBfanN4KFwidGRcIiwgeyBjbGFzc05hbWU6IGNscy5UYWJsZV9faXRlbSwgY2hpbGRyZW46IEZvdWwgfSksIF9qc3goXCJ0ZFwiLCB7IGNsYXNzTmFtZTogY2xzLlRhYmxlX19pdGVtLCBjaGlsZHJlbjogT3Bwb25lbnRGb3VsIH0pLCBfanN4KFwidGRcIiwgeyBjbGFzc05hbWU6IGNscy5UYWJsZV9faXRlbSB9KV0gfSkgfSldIH0pXSB9KSk7XG59O1xuIiwiaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IGNsYXNzTmFtZXMgfSBmcm9tICdzaGFyZWQvbGliL2NsYXNzTmFtZXMvY2xhc3NOYW1lcyc7XG5pbXBvcnQgY2xzIGZyb20gJy4vU2VjdGlvblRpdGxlLm1vZHVsZS5zY3NzJztcbmV4cG9ydCB2YXIgU2VjdGlvblRpdGxlID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIHRoZW1lID0gX2EudGhlbWUsIGNsYXNzTmFtZSA9IF9hLmNsYXNzTmFtZSwgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbjtcbiAgICByZXR1cm4gKF9qc3goXCJoMlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjbHMuU2VjdGlvblRpdGxlLCB7fSwgW2Nsc1t0aGVtZV1dKSwgY2hpbGRyZW46IGNoaWxkcmVuIH0pKTtcbn07XG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgY2xhc3NOYW1lcyB9IGZyb20gJ3NoYXJlZC9saWIvY2xhc3NOYW1lcy9jbGFzc05hbWVzJztcbmltcG9ydCBjbHMgZnJvbSAnLi9HYW1lQmFyLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IEdhbWUgfSBmcm9tICdjb21wb25lbnRzL0dhbWUvR2FtZSc7XG5pbXBvcnQgeyBHaWYgfSBmcm9tICdjb21wb25lbnRzL0dpZi9HaWYnO1xuaW1wb3J0IHsgR2FtZXNDb250ZXh0IH0gZnJvbSAnYXBwL3Byb3ZpZGVycy9HYW1lc1Byb3ZpZGVyL2xpYi9HYW1lc0NvbnRleHQnO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHRyaW1HYW1lcyB9IGZyb20gJ3NoYXJlZC9saWIvdHJpbUdhbWVzL3RyaW1HYW1lcyc7XG5pbXBvcnQgeyBTZWN0aW9uVGl0bGUgfSBmcm9tICdzaGFyZWQvdWkvU2VjdGlvblRpdGxlL1NlY3Rpb25UaXRsZSc7XG5leHBvcnQgdmFyIEdhbWVCYXIgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgX2E7XG4gICAgdmFyIGlzVmVydGljYWwgPSBwcm9wcy5pc1ZlcnRpY2FsLCBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsIHNldFByb3RvY29sU3RhdGUgPSBwcm9wcy5zZXRQcm90b2NvbFN0YXRlLCBwcm90b2NvbFN0YXRlID0gcHJvcHMucHJvdG9jb2xTdGF0ZTtcbiAgICB2YXIgZ2FtZXNBcnJheSA9IHVzZUNvbnRleHQoR2FtZXNDb250ZXh0KTtcbiAgICB2YXIgX2IgPSB1c2VTdGF0ZShbXSksIHJlbmRlckdhbWVzID0gX2JbMF0sIHNldFJlbmRlckdhbWVzID0gX2JbMV07XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGdhbWVzQXJyYXkubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICBzZXRSZW5kZXJHYW1lcyh0cmltR2FtZXMoZ2FtZXNBcnJheSkpO1xuICAgICAgICB9XG4gICAgfSwgW2dhbWVzQXJyYXldKTtcbiAgICB2YXIgbW9kcyA9IChfYSA9IHt9LFxuICAgICAgICBfYVtjbHMudmVydGljYWxdID0gaXNWZXJ0aWNhbCxcbiAgICAgICAgX2EpO1xuICAgIHJldHVybiAoX2pzeHMoXCJzZWN0aW9uXCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGNscy5HYW1lQmFyLCBtb2RzLCBbY2xhc3NOYW1lICE9PSBudWxsICYmIGNsYXNzTmFtZSAhPT0gdm9pZCAwID8gY2xhc3NOYW1lIDogJyddKSwgaWQ6IFwiZ2FtZUJhclwiLCBjaGlsZHJlbjogW19qc3goU2VjdGlvblRpdGxlLCB7IHRoZW1lOiBcIlNlY3Rpb25UaXRsZV9wb3pfbWFpblwiIC8qIFNlY3Rpb25UaXRsZVRoZW1lLlBPWl9NQUlOICovLCBjaGlsZHJlbjogXCJcXHUwNDFBXFx1MDQzMFxcdTA0M0JcXHUwNDM1XFx1MDQzRFxcdTA0MzRcXHUwNDMwXFx1MDQ0MFxcdTA0NENcIiB9KSwgX2pzeChHaWYsIHsgY2xhc3NOYW1lOiBjbHMuR2FtZUJhcl9fZ2lmIH0pLCBfanN4KFwidWxcIiwgeyBjbGFzc05hbWU6IGNscy5HYW1lQmFyX193aWRnZXQsIGNoaWxkcmVuOiByZW5kZXJHYW1lcy5tYXAoZnVuY3Rpb24gKGdhbWUsIGluZGV4KSB7IHJldHVybiAoX2pzeChcImxpXCIsIHsgY2xhc3NOYW1lOiBjbHMuR2FtZUJhcl9faXRlbSwgY2hpbGRyZW46IF9qc3goR2FtZSwgeyBnYW1lOiBnYW1lLCBzZXRQcm90b2NvbFN0YXRlOiBzZXRQcm90b2NvbFN0YXRlLCBwcm90b2NvbFN0YXRlOiBwcm90b2NvbFN0YXRlIH0pIH0sIGluZGV4KSk7IH0pIH0pXSB9KSk7XG59O1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBGcmFnbWVudCBhcyBfRnJhZ21lbnQsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IGNsYXNzTmFtZXMgfSBmcm9tICdzaGFyZWQvbGliL2NsYXNzTmFtZXMvY2xhc3NOYW1lcyc7XG5pbXBvcnQgY2xzIGZyb20gJy4vR2FtZVByb3RvY29sLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSAnY29tcG9uZW50cy9UYWJsZS9UYWJsZSc7XG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tICdzaGFyZWQvdWkvTG9hZGVyL0xvYWRlcic7XG5leHBvcnQgdmFyIEdhbWVQcm90b2NvbCA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciBfYTtcbiAgICB2YXIgcHJvdG9jb2xTdGF0ZSA9IHByb3BzLnByb3RvY29sU3RhdGUsIHNldFByb3RvY29sU3RhdGUgPSBwcm9wcy5zZXRQcm90b2NvbFN0YXRlLCBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWU7XG4gICAgdmFyIG1vZHMgPSAoX2EgPSB7fSxcbiAgICAgICAgX2FbY2xzLm9wZW5lZF0gPSBwcm90b2NvbFN0YXRlLmlzT3BlbixcbiAgICAgICAgX2EpO1xuICAgIHZhciBjbG9zZVBvcHVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzZXRQcm90b2NvbFN0YXRlKF9fYXNzaWduKF9fYXNzaWduKHt9LCBwcm90b2NvbFN0YXRlKSwgeyBnYW1lSWQ6IG51bGwsIGdhbWVEYXRhOiBudWxsLCBnYW1lSW5mbzogbnVsbCwgaXNPcGVuOiBmYWxzZSB9KSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb3RvY29sU3RhdGUpO1xuICAgIH07XG4gICAgdmFyIG9uQ29udGVudENsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9O1xuICAgIHJldHVybiAoX2pzeChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjbHMuR2FtZVByb3RvY29sLCBtb2RzLCBbY2xhc3NOYW1lICE9PSBudWxsICYmIGNsYXNzTmFtZSAhPT0gdm9pZCAwID8gY2xhc3NOYW1lIDogJyddKSwgY2hpbGRyZW46IF9qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNscy5HYW1lUHJvdG9jb2xfX292ZXJsYXksIG9uQ2xpY2s6IGNsb3NlUG9wdXAsIGNoaWxkcmVuOiBfanN4KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbHMuR2FtZVByb3RvY29sX19jb250ZW50LCBvbkNsaWNrOiBvbkNvbnRlbnRDbGljaywgY2hpbGRyZW46IChwcm90b2NvbFN0YXRlLmdhbWVJbmZvICE9PSBudWxsICYmIHByb3RvY29sU3RhdGUuZ2FtZURhdGEgIT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgID8gX2pzeHMoX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBbX2pzeChUYWJsZSwgeyBnYW1lRGF0YTogcHJvdG9jb2xTdGF0ZS5nYW1lRGF0YS5HYW1lVGVhbXNbMF0sIGxvZ29UZWFtOiBwcm90b2NvbFN0YXRlLmdhbWVJbmZvLlRlYW1Mb2dvQSwgbmFtZVRlYW06IHByb3RvY29sU3RhdGUuZ2FtZUluZm8uVGVhbU5hbWVBcnUgfSksIF9qc3goVGFibGUsIHsgZ2FtZURhdGE6IHByb3RvY29sU3RhdGUuZ2FtZURhdGEuR2FtZVRlYW1zWzFdLCBsb2dvVGVhbTogcHJvdG9jb2xTdGF0ZS5nYW1lSW5mby5UZWFtTG9nb0IsIG5hbWVUZWFtOiBwcm90b2NvbFN0YXRlLmdhbWVJbmZvLlRlYW1OYW1lQnJ1IH0pXSB9KVxuICAgICAgICAgICAgICAgICAgICA6IF9qc3goTG9hZGVyLCB7fSkgfSkgfSkgfSkpO1xufTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc3JjLWNvbXBvbmVudHMtR2FtZS1HYW1lLW1vZHVsZV9fR2FtZS0tYThHaXcge1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogdmFyKC0tZ2FtZS13aWR0aCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIHNjcm9sbC1zbmFwLWFsaWduOiBzdGFydDtcbiAgc2Nyb2xsLXNuYXAtc3RvcDogYWx3YXlzO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYygxMDAlIC0gdmFyKC0tZ2FtZS13aWR0aCkpLzIpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnNyYy1jb21wb25lbnRzLUdhbWUtR2FtZS1tb2R1bGVfX0dhbWVfX3RpdGxlLS1aZzhjYiB7XG4gIGZvbnQ6IHZhcigtLWZvbnQtcyk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1zKTtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcbn1cbi5zcmMtY29tcG9uZW50cy1HYW1lLUdhbWUtbW9kdWxlX19HYW1lX19nYW1lQ29udGFpbmVyLS1SUk93TCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNDBweDtcbn1cbi5zcmMtY29tcG9uZW50cy1HYW1lLUdhbWUtbW9kdWxlX19HYW1lX190ZWFtSW1hZ2UtLWhMMzlWIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4uc3JjLWNvbXBvbmVudHMtR2FtZS1HYW1lLW1vZHVsZV9fR2FtZV9fc2NvcmUtLUUyZXVzIHtcbiAgZm9udDogdmFyKC0tZm9udC1sKTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXMpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xufVxuLnNyYy1jb21wb25lbnRzLUdhbWUtR2FtZS1tb2R1bGVfX0dhbWVfX3N0YXRJY29uLS1ZU0lhbyB7XG4gIGZpbGw6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9HYW1lL0dhbWUubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxzQ0FBQTtFQUNBLHdCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1REFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNFLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQ0FBQTtBQUNKO0FBRUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBQUo7QUFHRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FBREo7QUFJRTtFQUNFLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQ0FBQTtBQUZKO0FBS0U7RUFDRSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBSEpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLkdhbWUge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHdpZHRoOiB2YXIoLS1nYW1lLXdpZHRoKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0O1xcbiAgc2Nyb2xsLXNuYXAtc3RvcDogYWx3YXlzO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGMoMTAwJSAtIHZhcigtLWdhbWUtd2lkdGgpKSAvIDIpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG5cXG4gICZfX3RpdGxlIHtcXG4gICAgZm9udDogdmFyKC0tZm9udC1zKTtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXMpO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xcbiAgfVxcblxcbiAgJl9fZ2FtZUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNDBweDtcXG4gIH1cXG5cXG4gICZfX3RlYW1JbWFnZSB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgfVxcblxcbiAgJl9fc2NvcmUge1xcbiAgICBmb250OiB2YXIoLS1mb250LWwpO1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtcyk7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeS1jb2xvcik7XFxuICB9XFxuXFxuICAmX19zdGF0SWNvbiB7XFxuICAgIGZpbGw6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIkdhbWVcIjogYHNyYy1jb21wb25lbnRzLUdhbWUtR2FtZS1tb2R1bGVfX0dhbWUtLWE4R2l3YCxcblx0XCJHYW1lX190aXRsZVwiOiBgc3JjLWNvbXBvbmVudHMtR2FtZS1HYW1lLW1vZHVsZV9fR2FtZV9fdGl0bGUtLVpnOGNiYCxcblx0XCJHYW1lX19nYW1lQ29udGFpbmVyXCI6IGBzcmMtY29tcG9uZW50cy1HYW1lLUdhbWUtbW9kdWxlX19HYW1lX19nYW1lQ29udGFpbmVyLS1SUk93TGAsXG5cdFwiR2FtZV9fdGVhbUltYWdlXCI6IGBzcmMtY29tcG9uZW50cy1HYW1lLUdhbWUtbW9kdWxlX19HYW1lX190ZWFtSW1hZ2UtLWhMMzlWYCxcblx0XCJHYW1lX19zY29yZVwiOiBgc3JjLWNvbXBvbmVudHMtR2FtZS1HYW1lLW1vZHVsZV9fR2FtZV9fc2NvcmUtLUUyZXVzYCxcblx0XCJHYW1lX19zdGF0SWNvblwiOiBgc3JjLWNvbXBvbmVudHMtR2FtZS1HYW1lLW1vZHVsZV9fR2FtZV9fc3RhdEljb24tLVlTSWFvYFxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBrZXlmcmFtZXMgc3JjLWNvbXBvbmVudHMtR2lmLUdpZi1tb2R1bGVfX3Njcm9sbC1oYW5kLS1MWTZ6TCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoODBweCkgc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg4MHB4KSBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDIwJSwgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTc1cHgpIHNjYWxlKDAuNik7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICA4MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpIHNjYWxlKDAuNik7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KSBzY2FsZSgwLjYpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3JjLWNvbXBvbmVudHMtR2lmLUdpZi1tb2R1bGVfX3Njcm9sbC1jYXJkLS1MMENkNCB7XG4gIDAlLCA2MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxuICA4MCUsIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjQwcHgpO1xuICB9XG59XG4uc3JjLWNvbXBvbmVudHMtR2lmLUdpZi1tb2R1bGVfX0dpZi0tX3J3N3Age1xuICB3aWR0aDogdmFyKC0tZ2FtZS13aWR0aCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbn1cbi5zcmMtY29tcG9uZW50cy1HaWYtR2lmLW1vZHVsZV9fR2lmX19pdGVtLS1PTTZjaSB7XG4gIHdpZHRoOiA0MnB4O1xuICBoZWlnaHQ6IDQycHg7XG59XG4uc3JjLWNvbXBvbmVudHMtR2lmLUdpZi1tb2R1bGVfX0dpZl9faGFuZC0tb0ZHWm0ge1xuICBmaWxsOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgYW5pbWF0aW9uOiBzcmMtY29tcG9uZW50cy1HaWYtR2lmLW1vZHVsZV9fc2Nyb2xsLWhhbmQtLUxZNnpMIDJzIGluZmluaXRlO1xufVxuLnNyYy1jb21wb25lbnRzLUdpZi1HaWYtbW9kdWxlX19HaWZfX2NhcmQtLUVEWWFjIHtcbiAgZmlsbDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBhbmltYXRpb246IHNyYy1jb21wb25lbnRzLUdpZi1HaWYtbW9kdWxlX19zY3JvbGwtY2FyZC0tTDBDZDQgMnMgaW5maW5pdGU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9HaWYvR2lmLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0U7SUFDRSxvQ0FBQTtJQUNBLFVBQUE7RUFDRjtFQUVBO0lBQ0Usb0NBQUE7SUFDQSxVQUFBO0VBQUY7RUFHQTtJQUNFLHVDQUFBO0lBQ0EsVUFBQTtFQURGO0VBSUE7SUFDRSxxQ0FBQTtJQUNBLFVBQUE7RUFGRjtFQUtBO0lBQ0UscUNBQUE7SUFDQSxVQUFBO0VBSEY7QUFDRjtBQU1BO0VBQ0U7SUFDRSx3QkFBQTtFQUpGO0VBT0E7SUFDRSw2QkFBQTtFQUxGO0FBQ0Y7QUFRQTtFQUNFLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0FBTkY7QUFRRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBTko7QUFTRTtFQUNFLDBCQUFBO0VBQ0Esd0VBQUE7QUFQSjtBQVVFO0VBQ0UsOEJBQUE7RUFDQSx3RUFBQTtBQVJKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBrZXlmcmFtZXMgc2Nyb2xsLWhhbmQge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoODBweCkgc2NhbGUoMSk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICAxMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoODBweCkgc2NhbGUoMSk7XFxuICAgIG9wYWNpdHk6IDFcXG4gIH1cXG5cXG4gIDIwJSwgNjAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE3NXB4KSBzY2FsZSguNik7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICA4MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KSBzY2FsZSguNik7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCkgc2NhbGUoLjYpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNjcm9sbC1jYXJkIHtcXG4gIDAlLCA2MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMClcXG4gIH1cXG5cXG4gIDgwJSwgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjQwcHgpXFxuICB9XFxufVxcblxcbi5HaWYge1xcbiAgd2lkdGg6IHZhcigtLWdhbWUtd2lkdGgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG5cXG4gICZfX2l0ZW0ge1xcbiAgICB3aWR0aDogNDJweDtcXG4gICAgaGVpZ2h0OiA0MnB4O1xcbiAgfVxcblxcbiAgJl9faGFuZCB7XFxuICAgIGZpbGw6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgICBhbmltYXRpb246IHNjcm9sbC1oYW5kIDJzIGluZmluaXRlXFxuICB9XFxuXFxuICAmX19jYXJkIHtcXG4gICAgZmlsbDogcmdiYSgyNTUgMjU1IDI1NSAvIDMwJSk7XFxuICAgIGFuaW1hdGlvbjogc2Nyb2xsLWNhcmQgMnMgaW5maW5pdGVcXG4gIH1cXG5cXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiR2lmXCI6IGBzcmMtY29tcG9uZW50cy1HaWYtR2lmLW1vZHVsZV9fR2lmLS1fcnc3cGAsXG5cdFwiR2lmX19pdGVtXCI6IGBzcmMtY29tcG9uZW50cy1HaWYtR2lmLW1vZHVsZV9fR2lmX19pdGVtLS1PTTZjaWAsXG5cdFwiR2lmX19oYW5kXCI6IGBzcmMtY29tcG9uZW50cy1HaWYtR2lmLW1vZHVsZV9fR2lmX19oYW5kLS1vRkdabWAsXG5cdFwic2Nyb2xsLWhhbmRcIjogYHNyYy1jb21wb25lbnRzLUdpZi1HaWYtbW9kdWxlX19zY3JvbGwtaGFuZC0tTFk2ekxgLFxuXHRcIkdpZl9fY2FyZFwiOiBgc3JjLWNvbXBvbmVudHMtR2lmLUdpZi1tb2R1bGVfX0dpZl9fY2FyZC0tRURZYWNgLFxuXHRcInNjcm9sbC1jYXJkXCI6IGBzcmMtY29tcG9uZW50cy1HaWYtR2lmLW1vZHVsZV9fc2Nyb2xsLWNhcmQtLUwwQ2Q0YFxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zcmMtY29tcG9uZW50cy1QZXJzb25Qcm90b2NvbC1QZXJzb25Qcm90b2NvbC1tb2R1bGVfX1BlcnNvblByb3RvY29sX19zaGlydC0tbzRycEkge1xuICB3aWR0aDogMzBweDtcbiAgYXNwZWN0LXJhdGlvOiA2OS84OTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuLnNyYy1jb21wb25lbnRzLVBlcnNvblByb3RvY29sLVBlcnNvblByb3RvY29sLW1vZHVsZV9fUGVyc29uUHJvdG9jb2xfX2ltYWdlLS1UYjBqZyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cbi5zcmMtY29tcG9uZW50cy1QZXJzb25Qcm90b2NvbC1QZXJzb25Qcm90b2NvbC1tb2R1bGVfX1BlcnNvblByb3RvY29sX19pdGVtLS15d1lLdSB7XG4gIHBhZGRpbmc6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIGZvbnQ6IHZhcigtLWZvbnQtcyk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnktY29sb3IpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pbnZlcnRlZC1iZy1jb2xvcik7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9QZXJzb25Qcm90b2NvbC9QZXJzb25Qcm90b2NvbC5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FBQUo7QUFHRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtBQURKO0FBSUU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLDBDQUFBO0FBRkpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLlBlcnNvblByb3RvY29sIHtcXG4gICZfX3NoaXJ0IHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGFzcGVjdC1yYXRpbzogNjkvODk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIH1cXG5cXG4gICZfX2ltYWdlIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgfVxcblxcbiAgJl9faXRlbSB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIGZvbnQ6IHZhcigtLWZvbnQtcyk7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnktY29sb3IpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pbnZlcnRlZC1iZy1jb2xvcik7XFxuICB9XFxuXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIlBlcnNvblByb3RvY29sX19zaGlydFwiOiBgc3JjLWNvbXBvbmVudHMtUGVyc29uUHJvdG9jb2wtUGVyc29uUHJvdG9jb2wtbW9kdWxlX19QZXJzb25Qcm90b2NvbF9fc2hpcnQtLW80cnBJYCxcblx0XCJQZXJzb25Qcm90b2NvbF9faW1hZ2VcIjogYHNyYy1jb21wb25lbnRzLVBlcnNvblByb3RvY29sLVBlcnNvblByb3RvY29sLW1vZHVsZV9fUGVyc29uUHJvdG9jb2xfX2ltYWdlLS1UYjBqZ2AsXG5cdFwiUGVyc29uUHJvdG9jb2xfX2l0ZW1cIjogYHNyYy1jb21wb25lbnRzLVBlcnNvblByb3RvY29sLVBlcnNvblByb3RvY29sLW1vZHVsZV9fUGVyc29uUHJvdG9jb2xfX2l0ZW0tLXl3WUt1YFxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zcmMtY29tcG9uZW50cy1UYWJsZS1UYWJsZS1tb2R1bGVfX1RhYmxlLS1hRGVvcSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDIwcHg7XG59XG4uc3JjLWNvbXBvbmVudHMtVGFibGUtVGFibGUtbW9kdWxlX19UYWJsZV9faGVhZGluZy0tS0NSMjkge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAyMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNyYy1jb21wb25lbnRzLVRhYmxlLVRhYmxlLW1vZHVsZV9fVGFibGVfX2xvZ28tLXp2YXlQIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cbi5zcmMtY29tcG9uZW50cy1UYWJsZS1UYWJsZS1tb2R1bGVfX1RhYmxlX19jb250YWluZXItLWlmTVpTIHtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG4uc3JjLWNvbXBvbmVudHMtVGFibGUtVGFibGUtbW9kdWxlX19UYWJsZV9fcm93LS1VWDhsZyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWludmVydGVkLWJnLWNvbG9yKTtcbn1cbi5zcmMtY29tcG9uZW50cy1UYWJsZS1UYWJsZS1tb2R1bGVfX1RhYmxlX190aXRsZS0tbVlXVGcge1xuICBwYWRkaW5nOiA1cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW52ZXJ0ZWQtYmctY29sb3IpO1xuICBmb250OiB2YXIoLS1mb250LW0pO1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbCk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnktY29sb3IpO1xufVxuLnNyYy1jb21wb25lbnRzLVRhYmxlLVRhYmxlLW1vZHVsZV9fVGFibGVfX2l0ZW0tLWFCWUcwIHtcbiAgcGFkZGluZzogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQ6IHZhcigtLWZvbnQtcyk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnktY29sb3IpO1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWludmVydGVkLWJnLWNvbG9yKTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL1RhYmxlL1RhYmxlLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUNGO0FBQ0U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQUNKO0FBRUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUFKO0FBR0U7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQURKO0FBSUU7RUFDRSwwQ0FBQTtBQUZKO0FBS0U7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0FBSEo7QUFNRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7QUFKSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuVGFibGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuXFxuICAmX19oZWFkaW5nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gICZfX2xvZ28ge1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgfVxcblxcbiAgJl9fY29udGFpbmVyIHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICB9XFxuXFxuICAmX19yb3cge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pbnZlcnRlZC1iZy1jb2xvcilcXG4gIH1cXG5cXG4gICZfX3RpdGxlIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWludmVydGVkLWJnLWNvbG9yKTtcXG4gICAgZm9udDogdmFyKC0tZm9udC1tKTtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWwpO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5LWNvbG9yKTtcXG4gIH1cXG5cXG4gICZfX2l0ZW0ge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udDogdmFyKC0tZm9udC1zKTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeS1jb2xvcik7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW52ZXJ0ZWQtYmctY29sb3IpXFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIlRhYmxlXCI6IGBzcmMtY29tcG9uZW50cy1UYWJsZS1UYWJsZS1tb2R1bGVfX1RhYmxlLS1hRGVvcWAsXG5cdFwiVGFibGVfX2hlYWRpbmdcIjogYHNyYy1jb21wb25lbnRzLVRhYmxlLVRhYmxlLW1vZHVsZV9fVGFibGVfX2hlYWRpbmctLUtDUjI5YCxcblx0XCJUYWJsZV9fbG9nb1wiOiBgc3JjLWNvbXBvbmVudHMtVGFibGUtVGFibGUtbW9kdWxlX19UYWJsZV9fbG9nby0tenZheVBgLFxuXHRcIlRhYmxlX19jb250YWluZXJcIjogYHNyYy1jb21wb25lbnRzLVRhYmxlLVRhYmxlLW1vZHVsZV9fVGFibGVfX2NvbnRhaW5lci0taWZNWlNgLFxuXHRcIlRhYmxlX19yb3dcIjogYHNyYy1jb21wb25lbnRzLVRhYmxlLVRhYmxlLW1vZHVsZV9fVGFibGVfX3Jvdy0tVVg4bGdgLFxuXHRcIlRhYmxlX190aXRsZVwiOiBgc3JjLWNvbXBvbmVudHMtVGFibGUtVGFibGUtbW9kdWxlX19UYWJsZV9fdGl0bGUtLW1ZV1RnYCxcblx0XCJUYWJsZV9faXRlbVwiOiBgc3JjLWNvbXBvbmVudHMtVGFibGUtVGFibGUtbW9kdWxlX19UYWJsZV9faXRlbS0tYUJZRzBgXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNyYy1zaGFyZWQtdWktU2VjdGlvblRpdGxlLVNlY3Rpb25UaXRsZS1tb2R1bGVfX1NlY3Rpb25UaXRsZS0tUzE4YU0ge1xuICBmb250OiB2YXIoLS1mb250LWwpO1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQteGwpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5LWNvbG9yKTtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLnNyYy1zaGFyZWQtdWktU2VjdGlvblRpdGxlLVNlY3Rpb25UaXRsZS1tb2R1bGVfX1NlY3Rpb25UaXRsZV9jbGVhci0tUHBtU3gge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cbi5zcmMtc2hhcmVkLXVpLVNlY3Rpb25UaXRsZS1TZWN0aW9uVGl0bGUtbW9kdWxlX19TZWN0aW9uVGl0bGVfcG96X21haW4tLWhqU2lfIHtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeS1jb2xvcik7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uc3JjLXNoYXJlZC11aS1TZWN0aW9uVGl0bGUtU2VjdGlvblRpdGxlLW1vZHVsZV9fU2VjdGlvblRpdGxlX3Bvel9yb2FzdGVyLS1EQ09uRiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXF1YXRyZW5hcnktY29sb3IpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3NoYXJlZC91aS9TZWN0aW9uVGl0bGUvU2VjdGlvblRpdGxlLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQUNGO0FBQ0U7RUFDRSxvQkFBQTtBQUNKO0FBRUU7RUFDRSxnQ0FBQTtFQUNBLHlCQUFBO0FBQUo7QUFHRTtFQUNFLG1DQUFBO0FBREpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLlNlY3Rpb25UaXRsZSB7XFxuICBmb250OiB2YXIoLS1mb250LWwpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXhsKTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnktY29sb3IpO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNHB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG5cXG4gICZfY2xlYXIge1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gIH1cXG5cXG4gICZfcG96X21haW4ge1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5LWNvbG9yKTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIH1cXG5cXG4gICZfcG96X3JvYXN0ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1xdWF0cmVuYXJ5LWNvbG9yKTtcXG4gIH1cXG5cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiU2VjdGlvblRpdGxlXCI6IGBzcmMtc2hhcmVkLXVpLVNlY3Rpb25UaXRsZS1TZWN0aW9uVGl0bGUtbW9kdWxlX19TZWN0aW9uVGl0bGUtLVMxOGFNYCxcblx0XCJTZWN0aW9uVGl0bGVfY2xlYXJcIjogYHNyYy1zaGFyZWQtdWktU2VjdGlvblRpdGxlLVNlY3Rpb25UaXRsZS1tb2R1bGVfX1NlY3Rpb25UaXRsZV9jbGVhci0tUHBtU3hgLFxuXHRcIlNlY3Rpb25UaXRsZV9wb3pfbWFpblwiOiBgc3JjLXNoYXJlZC11aS1TZWN0aW9uVGl0bGUtU2VjdGlvblRpdGxlLW1vZHVsZV9fU2VjdGlvblRpdGxlX3Bvel9tYWluLS1oalNpX2AsXG5cdFwiU2VjdGlvblRpdGxlX3Bvel9yb2FzdGVyXCI6IGBzcmMtc2hhcmVkLXVpLVNlY3Rpb25UaXRsZS1TZWN0aW9uVGl0bGUtbW9kdWxlX19TZWN0aW9uVGl0bGVfcG96X3JvYXN0ZXItLURDT25GYFxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zcmMtd2lkZ2V0cy1HYW1lQmFyLXVpLUdhbWVCYXItbW9kdWxlX19HYW1lQmFyLS1BNkhQNiB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNyYy13aWRnZXRzLUdhbWVCYXItdWktR2FtZUJhci1tb2R1bGVfX0dhbWVCYXJfX3dpZGdldC0tSEpwNVIge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHdpZHRoOiB2YXIoLS1nYW1lLXdpZHRoKTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMDBweDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgc2Nyb2xsLXNuYXAtdHlwZTogeCBtYW5kYXRvcnk7XG59XG4uc3JjLXdpZGdldHMtR2FtZUJhci11aS1HYW1lQmFyLW1vZHVsZV9fR2FtZUJhcl9faXRlbS0tSDFucVQge1xuICB3aWR0aDogbWluLWNvbnRlbnQ7XG59XG5cbi5zcmMtd2lkZ2V0cy1HYW1lQmFyLXVpLUdhbWVCYXItbW9kdWxlX192ZXJ0aWNhbC0tZXpUQzUge1xuICBwYWRkaW5nOiAxMDBweCAwIDAgMDtcbiAgZ2FwOiAzMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLnNyYy13aWRnZXRzLUdhbWVCYXItdWktR2FtZUJhci1tb2R1bGVfX3ZlcnRpY2FsLS1lelRDNSAuc3JjLXdpZGdldHMtR2FtZUJhci11aS1HYW1lQmFyLW1vZHVsZV9fR2FtZUJhcl9fd2lkZ2V0LS1ISnA1UiB7XG4gIHdpZHRoOiA5NSU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDQwcHg7XG4gIG92ZXJmbG93OiB1bnNldDtcbiAgc2Nyb2xsLXNuYXAtdHlwZTogdW5zZXQ7XG59XG4uc3JjLXdpZGdldHMtR2FtZUJhci11aS1HYW1lQmFyLW1vZHVsZV9fdmVydGljYWwtLWV6VEM1IC5zcmMtd2lkZ2V0cy1HYW1lQmFyLXVpLUdhbWVCYXItbW9kdWxlX19HYW1lQmFyX19pdGVtLS1IMW5xVCB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG4uc3JjLXdpZGdldHMtR2FtZUJhci11aS1HYW1lQmFyLW1vZHVsZV9fdmVydGljYWwtLWV6VEM1IC5zcmMtd2lkZ2V0cy1HYW1lQmFyLXVpLUdhbWVCYXItbW9kdWxlX19HYW1lQmFyX19naWYtLWFQNzVJIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XG4gIC5zcmMtd2lkZ2V0cy1HYW1lQmFyLXVpLUdhbWVCYXItbW9kdWxlX192ZXJ0aWNhbC0tZXpUQzUgLnNyYy13aWRnZXRzLUdhbWVCYXItdWktR2FtZUJhci1tb2R1bGVfX0dhbWVCYXJfX3dpZGdldC0tSEpwNVIge1xuICAgIHdpZHRoOiB2YXIoLS1nYW1lLXdpZHRoKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDMwcHg7XG4gICAgb3ZlcmZsb3c6IHVuc2V0O1xuICAgIHNjcm9sbC1zbmFwLXR5cGU6IHVuc2V0O1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvd2lkZ2V0cy9HYW1lQmFyL3VpL0dhbWVCYXIubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7QUFDSjtBQUVFO0VBQ0Usa0JBQUE7QUFBSjs7QUFJQTtFQUNFLG9CQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFERjtBQUdFO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FBREo7QUFJRTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7QUFGSjtBQUtFO0VBQ0UsYUFBQTtBQUhKOztBQU9BO0VBRUk7SUFDRSx3QkFBQTtJQUNBLGFBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EsU0FBQTtJQUNBLGVBQUE7SUFDQSx1QkFBQTtFQUxKO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLkdhbWVCYXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAmX193aWRnZXQge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHdpZHRoOiB2YXIoLS1nYW1lLXdpZHRoKTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMDBweDtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgc2Nyb2xsLXNuYXAtdHlwZTogeCBtYW5kYXRvcnk7XFxuICB9XFxuXFxuICAmX19pdGVtIHtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgfVxcbn1cXG5cXG4udmVydGljYWwge1xcbiAgcGFkZGluZzogMTAwcHggMCAwIDA7XFxuICBnYXA6IDMwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG4gIC5HYW1lQmFyX193aWRnZXQge1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA0MHB4O1xcbiAgICBvdmVyZmxvdzogdW5zZXQ7XFxuICAgIHNjcm9sbC1zbmFwLXR5cGU6IHVuc2V0O1xcbiAgfVxcblxcbiAgLkdhbWVCYXJfX2l0ZW0ge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgfVxcblxcbiAgLkdhbWVCYXJfX2dpZiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xcbiAgLnZlcnRpY2FsIHtcXG4gICAgLkdhbWVCYXJfX3dpZGdldCB7XFxuICAgICAgd2lkdGg6IHZhcigtLWdhbWUtd2lkdGgpO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGdhcDogMzBweDtcXG4gICAgICBvdmVyZmxvdzogdW5zZXQ7XFxuICAgICAgc2Nyb2xsLXNuYXAtdHlwZTogdW5zZXQ7XFxuICAgIH1cXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiR2FtZUJhclwiOiBgc3JjLXdpZGdldHMtR2FtZUJhci11aS1HYW1lQmFyLW1vZHVsZV9fR2FtZUJhci0tQTZIUDZgLFxuXHRcIkdhbWVCYXJfX3dpZGdldFwiOiBgc3JjLXdpZGdldHMtR2FtZUJhci11aS1HYW1lQmFyLW1vZHVsZV9fR2FtZUJhcl9fd2lkZ2V0LS1ISnA1UmAsXG5cdFwiR2FtZUJhcl9faXRlbVwiOiBgc3JjLXdpZGdldHMtR2FtZUJhci11aS1HYW1lQmFyLW1vZHVsZV9fR2FtZUJhcl9faXRlbS0tSDFucVRgLFxuXHRcInZlcnRpY2FsXCI6IGBzcmMtd2lkZ2V0cy1HYW1lQmFyLXVpLUdhbWVCYXItbW9kdWxlX192ZXJ0aWNhbC0tZXpUQzVgLFxuXHRcIkdhbWVCYXJfX2dpZlwiOiBgc3JjLXdpZGdldHMtR2FtZUJhci11aS1HYW1lQmFyLW1vZHVsZV9fR2FtZUJhcl9fZ2lmLS1hUDc1SWBcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc3JjLXdpZGdldHMtR2FtZVByb3RvY29sLXVpLUdhbWVQcm90b2NvbC1tb2R1bGVfX0dhbWVQcm90b2NvbC0tUm9sbjMge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcbiAgei1pbmRleDogLTE7XG59XG4uc3JjLXdpZGdldHMtR2FtZVByb3RvY29sLXVpLUdhbWVQcm90b2NvbC1tb2R1bGVfX0dhbWVQcm90b2NvbF9fb3ZlcmxheS0tUmNWZEgge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuLnNyYy13aWRnZXRzLUdhbWVQcm90b2NvbC11aS1HYW1lUHJvdG9jb2wtbW9kdWxlX19HYW1lUHJvdG9jb2xfX2NvbnRlbnQtLXZzdzVaIHtcbiAgcGFkZGluZzogMjBweDtcbiAgbWF4LXdpZHRoOiA5MCU7XG4gIG1heC1oZWlnaHQ6IDcwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyMHB4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4uc3JjLXdpZGdldHMtR2FtZVByb3RvY29sLXVpLUdhbWVQcm90b2NvbC1tb2R1bGVfX29wZW5lZC0tSWNjcjYge1xuICBvcGFjaXR5OiAxO1xuICB6LWluZGV4OiB2YXIoLS1tb2RhbC16LWluZGV4KTtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG59XG4uc3JjLXdpZGdldHMtR2FtZVByb3RvY29sLXVpLUdhbWVQcm90b2NvbC1tb2R1bGVfX29wZW5lZC0tSWNjcjYgLnNyYy13aWRnZXRzLUdhbWVQcm90b2NvbC11aS1HYW1lUHJvdG9jb2wtbW9kdWxlX19HYW1lUHJvdG9jb2xfX2NvbnRlbnQtLXZzdzVaIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy93aWRnZXRzL0dhbWVQcm90b2NvbC91aS9HYW1lUHJvdG9jb2wubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQUNGO0FBQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7QUFDSjtBQUVFO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFJQTtFQUNFLFVBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBO0FBREY7QUFHRTtFQUNFLG1CQUFBO0FBREpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLkdhbWVQcm90b2NvbCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiAuNHMgZWFzZTtcXG4gIHotaW5kZXg6IC0xO1xcblxcbiAgJl9fb3ZlcmxheSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDYwJSk7XFxuICB9XFxuXFxuICAmX19jb250ZW50IHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgbWF4LXdpZHRoOiA5MCU7XFxuICAgIG1heC1oZWlnaHQ6IDcwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC41KTtcXG4gICAgdHJhbnNpdGlvbjogLjRzIGVhc2U7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gIH1cXG59XFxuXFxuLm9wZW5lZCB7XFxuICBvcGFjaXR5OiAxO1xcbiAgei1pbmRleDogdmFyKC0tbW9kYWwtei1pbmRleCk7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG5cXG4gIC5HYW1lUHJvdG9jb2xfX2NvbnRlbnQge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJHYW1lUHJvdG9jb2xcIjogYHNyYy13aWRnZXRzLUdhbWVQcm90b2NvbC11aS1HYW1lUHJvdG9jb2wtbW9kdWxlX19HYW1lUHJvdG9jb2wtLVJvbG4zYCxcblx0XCJHYW1lUHJvdG9jb2xfX292ZXJsYXlcIjogYHNyYy13aWRnZXRzLUdhbWVQcm90b2NvbC11aS1HYW1lUHJvdG9jb2wtbW9kdWxlX19HYW1lUHJvdG9jb2xfX292ZXJsYXktLVJjVmRIYCxcblx0XCJHYW1lUHJvdG9jb2xfX2NvbnRlbnRcIjogYHNyYy13aWRnZXRzLUdhbWVQcm90b2NvbC11aS1HYW1lUHJvdG9jb2wtbW9kdWxlX19HYW1lUHJvdG9jb2xfX2NvbnRlbnQtLXZzdzVaYCxcblx0XCJvcGVuZWRcIjogYHNyYy13aWRnZXRzLUdhbWVQcm90b2NvbC11aS1HYW1lUHJvdG9jb2wtbW9kdWxlX19vcGVuZWQtLUljY3I2YFxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vR2FtZS5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHA7XG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0dhbWUubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vR2FtZS5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0dpZi5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHA7XG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0dpZi5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9HaWYubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9QZXJzb25Qcm90b2NvbC5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHA7XG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1BlcnNvblByb3RvY29sLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1BlcnNvblByb3RvY29sLm1vZHVsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vVGFibGUubW9kdWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwO1xuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9UYWJsZS5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9UYWJsZS5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1NlY3Rpb25UaXRsZS5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHA7XG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1NlY3Rpb25UaXRsZS5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TZWN0aW9uVGl0bGUubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9HYW1lQmFyLm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vR2FtZUJhci5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9HYW1lQmFyLm1vZHVsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vR2FtZVByb3RvY29sLm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vR2FtZVByb3RvY29sLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0dhbWVQcm90b2NvbC5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImV4cG9ydCB2YXIgdHJpbUdhbWVzID0gZnVuY3Rpb24gKGdhbWVzQXJyYXkpIHtcbiAgICB2YXIgcmVuZGVyQXJyYXkgPSBbXTtcbiAgICB2YXIgcmVjZW50R2FtZXMgPSBnYW1lc0FycmF5XG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBHYW1lU3RhdHVzID0gX2EuR2FtZVN0YXR1cztcbiAgICAgICAgcmV0dXJuIEdhbWVTdGF0dXMgPT09IDE7XG4gICAgfSlcbiAgICAgICAgLnNsaWNlKC02KTtcbiAgICB2YXIgbmV4dEdhbWUgPSBnYW1lc0FycmF5XG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBHYW1lU3RhdHVzID0gX2EuR2FtZVN0YXR1cztcbiAgICAgICAgcmV0dXJuIEdhbWVTdGF0dXMgPT09IDA7XG4gICAgfSlbMF07XG4gICAgcmVjZW50R2FtZXMuZm9yRWFjaChmdW5jdGlvbiAoZ2FtZSkge1xuICAgICAgICByZW5kZXJBcnJheS51bnNoaWZ0KGdhbWUpO1xuICAgIH0pO1xuICAgIHJlbmRlckFycmF5LnVuc2hpZnQobmV4dEdhbWUpO1xuICAgIHJldHVybiByZW5kZXJBcnJheTtcbn07XG4iLCJleHBvcnQgeyBHYW1lQmFyIH0gZnJvbSAnLi91aS9HYW1lQmFyJztcbiJdLCJuYW1lcyI6WyJfX2Fzc2lnbiIsIk9iamVjdCIsImFzc2lnbiIsInQiLCJzIiwiaSIsIm4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJwIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiYXBwbHkiLCJfX2F3YWl0ZXIiLCJ0aGlzQXJnIiwiX2FyZ3VtZW50cyIsIlAiLCJnZW5lcmF0b3IiLCJhZG9wdCIsInZhbHVlIiwicmVzb2x2ZSIsIlByb21pc2UiLCJyZWplY3QiLCJmdWxmaWxsZWQiLCJzdGVwIiwibmV4dCIsImUiLCJyZWplY3RlZCIsInJlc3VsdCIsImRvbmUiLCJ0aGVuIiwiX19nZW5lcmF0b3IiLCJib2R5IiwiXyIsImxhYmVsIiwic2VudCIsInRyeXMiLCJvcHMiLCJmIiwieSIsImciLCJ2ZXJiIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJ2Iiwib3AiLCJUeXBlRXJyb3IiLCJwb3AiLCJwdXNoIiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIm1haW5BcGkiLCJ1c2VQcm90b2NvbCIsIl90aGlzIiwiX2EiLCJpc09wZW4iLCJnYW1lSWQiLCJnYW1lSW5mbyIsImdhbWVEYXRhIiwicHJvdG9jb2xTdGF0ZSIsInNldFByb3RvY29sU3RhdGUiLCJmZXRjaEdhbWUiLCJnZXRHYW1lUHJvdG9jb2wiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwianN4IiwiX2pzeCIsImpzeHMiLCJfanN4cyIsImNsYXNzTmFtZXMiLCJjbHMiLCJCdXR0b24iLCJUaGVtZUJ1dHRvbiIsIlN0YXRJY29uIiwiR2FtZSIsInByb3BzIiwiZ2FtZSIsImNsYXNzTmFtZSIsIkdhbWVJRCIsIkRpc3BsYXlEYXRlVGltZU1zayIsIlRlYW1Mb2dvQSIsIlRlYW1Mb2dvQiIsIlNjb3JlQSIsIlNjb3JlQiIsIm9uU3RhdE9wZW4iLCJjaGlsZHJlbiIsIkdhbWVfX3RpdGxlIiwiR2FtZV9fZ2FtZUNvbnRhaW5lciIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiY29uY2F0IiwiR2FtZV9fdGVhbUltYWdlIiwiR2FtZV9fc2NvcmUiLCJvbkNsaWNrIiwidGhlbWUiLCJQT1pfR0FNRSIsIkdhbWVfX3N0YXRJY29uIiwiR2lmIiwiR2lmX19pdGVtIiwidmlld0JveCIsImdpZl9fY2FyZCIsIngiLCJ3aWR0aCIsImhlaWdodCIsInJ4IiwiR2lmX19jYXJkIiwiR2lmX19oYW5kIiwiZCIsIlBlcnNvblByb3RvY29sIiwiUGxheWVyTnVtYmVyIiwiUGVyc29uSUQiLCJQZXJzb25OYW1lUnUiLCJQbGF5ZWRUaW1lIiwiUG9pbnRzIiwiU2hvdHMxIiwiU2hvdHMyIiwiU2hvdHMzIiwiR29hbDIiLCJHb2FsMyIsIlNob3QyIiwiU2hvdDMiLCJEZWZSZWJvdW5kIiwiT2ZmUmVib3VuZCIsIlJlYm91bmQiLCJBc3Npc3QiLCJTdGVhbCIsIlR1cm5vdmVyIiwiQmxvY2tzIiwiRm91bCIsIk9wcG9uZW50Rm91bCIsIlBsdXNNaW51cyIsInByb3RvY29sIiwiUGVyc29uUHJvdG9jb2xfX2l0ZW0iLCJQZXJzb25Qcm90b2NvbF9fc2hpcnQiLCJQZXJzb25Qcm90b2NvbF9faW1hZ2UiLCJfX3Jlc3QiLCJpbmRleE9mIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJjcmVhdGVFbGVtZW50IiwiX2NyZWF0ZUVsZW1lbnQiLCJTZWN0aW9uVGl0bGUiLCJUYWJsZSIsImxvZ29UZWFtIiwibmFtZVRlYW0iLCJTY29yZSIsIlNob3QxUGVyY2VudCIsIlNob3QyUGVyY2VudCIsIlNob3QzUGVyY2VudCIsIlBsYXllcnMiLCJUYWJsZV9faGVhZGluZyIsIlRhYmxlX19sb2dvIiwic3JjIiwiYWx0IiwiVGFibGVfX3RlYW0iLCJUYWJsZV9fY29udGFpbmVyIiwiVGFibGVfX3JvdyIsInJvd1NwYW4iLCJjb2xTcGFuIiwiVGFibGVfX3RpdGxlIiwidGl0bGUiLCJtYXAiLCJpbmRleCIsInBsYXllclByb3BzIiwia2V5IiwiVGFibGVfX2l0ZW0iLCJ0b0ZpeGVkIiwiR2FtZXNDb250ZXh0IiwidXNlQ29udGV4dCIsInRyaW1HYW1lcyIsIkdhbWVCYXIiLCJpc1ZlcnRpY2FsIiwiZ2FtZXNBcnJheSIsIl9iIiwicmVuZGVyR2FtZXMiLCJzZXRSZW5kZXJHYW1lcyIsIm1vZHMiLCJ2ZXJ0aWNhbCIsImlkIiwiR2FtZUJhcl9fZ2lmIiwiR2FtZUJhcl9fd2lkZ2V0IiwiR2FtZUJhcl9faXRlbSIsIkZyYWdtZW50IiwiX0ZyYWdtZW50IiwiTG9hZGVyIiwiR2FtZVByb3RvY29sIiwib3BlbmVkIiwiY2xvc2VQb3B1cCIsIm9uQ29udGVudENsaWNrIiwic3RvcFByb3BhZ2F0aW9uIiwiR2FtZVByb3RvY29sX19vdmVybGF5IiwiR2FtZVByb3RvY29sX19jb250ZW50IiwiR2FtZVRlYW1zIiwiVGVhbU5hbWVBcnUiLCJUZWFtTmFtZUJydSJdLCJzb3VyY2VSb290IjoiIn0=
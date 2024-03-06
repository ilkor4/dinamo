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
  var className = props.className,
    setProtocolState = props.setProtocolState,
    protocolState = props.protocolState;
  var gamesArray = (0,react__WEBPACK_IMPORTED_MODULE_6__.useContext)(app_providers_GamesProvider_lib_GamesContext__WEBPACK_IMPORTED_MODULE_5__.GamesContext);
  var _a = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]),
    renderGames = _a[0],
    setRenderGames = _a[1];
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {
    if (gamesArray.length !== 0) {
      setRenderGames((0,shared_lib_trimGames_trimGames__WEBPACK_IMPORTED_MODULE_7__.trimGames)(gamesArray));
    }
  }, [gamesArray]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
    className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__.classNames)(_GameBar_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].GameBar, {}, [className !== null && className !== void 0 ? className : '']),
    id: "gameBar",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_SectionTitle_SectionTitle__WEBPACK_IMPORTED_MODULE_8__.SectionTitle, {
      theme: "SectionTitle_poz_main" /* SectionTitleTheme.POZ_MAIN */,
      children: "\u041A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_Gif_Gif__WEBPACK_IMPORTED_MODULE_4__.Gif, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", {
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
  gap: 10px;
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
}`, "",{"version":3,"sources":["webpack://./src/widgets/GameBar/ui/GameBar.module.scss"],"names":[],"mappings":"AAAA;EACE,WAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,SAAA;AACF;AACE;EACE,SAAA;EACA,UAAA;EACA,gBAAA;EACA,wBAAA;EACA,sBAAA;EACA,aAAA;EACA,UAAA;EACA,gBAAA;EACA,6BAAA;AACJ;AAEE;EACE,kBAAA;AAAJ","sourcesContent":[".GameBar {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n\n  &__widget {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    width: var(--game-width);\n    box-sizing: border-box;\n    display: flex;\n    gap: 100px;\n    overflow: scroll;\n    scroll-snap-type: x mandatory;\n  }\n\n  &__item {\n    width: min-content;\n  }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"GameBar": `src-widgets-GameBar-ui-GameBar-module__GameBar--A6HP6`,
	"GameBar__widget": `src-widgets-GameBar-ui-GameBar-module__GameBar__widget--HJp5R`,
	"GameBar__item": `src-widgets-GameBar-ui-GameBar-module__GameBar__item--H1nqT`
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2FwcF9wcm92aWRlcnNfUHJvdG9jb2xQcm92aWRlcl9saWJfdXNlUHJvdG9jb2xfdHN4LXNyY193aWRnZXRzX0dhbWVQcm90b2NvbF91aV9HYW1lUHJvdG9jLWRiMGJmZi5hZDgzYTFjMzM2M2M4NTMwMzVjNy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLHNCQUFzQixzRUFBc0UsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELGlDQUFpQyxrQkFBa0I7QUFDM1E7QUFDL0I7QUFDQSxzQkFBc0IsZ0RBQW1CO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyx5Q0FBeUMsZ0RBQW1CO0FBQy9EO0FBQ0EsR0FBRyxxQ0FBcUMsZ0RBQW1CO0FBQzNEO0FBQ0EsR0FBRztBQUNIO0FBQ0EsaUVBQWUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmMUIsSUFBSUEsUUFBUSxHQUFJLFNBQUksSUFBSSxTQUFJLENBQUNBLFFBQVEsSUFBSyxZQUFZO0VBQ2xEQSxRQUFRLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBTSxJQUFJLFVBQVNDLENBQUMsRUFBRTtJQUNwQyxLQUFLLElBQUlDLENBQUMsRUFBRUMsQ0FBQyxHQUFHLENBQUMsRUFBRUMsQ0FBQyxHQUFHQyxTQUFTLENBQUNDLE1BQU0sRUFBRUgsQ0FBQyxHQUFHQyxDQUFDLEVBQUVELENBQUMsRUFBRSxFQUFFO01BQ2pERCxDQUFDLEdBQUdHLFNBQVMsQ0FBQ0YsQ0FBQyxDQUFDO01BQ2hCLEtBQUssSUFBSUksQ0FBQyxJQUFJTCxDQUFDLEVBQUUsSUFBSUgsTUFBTSxDQUFDUyxTQUFTLENBQUNDLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDUixDQUFDLEVBQUVLLENBQUMsQ0FBQyxFQUMzRE4sQ0FBQyxDQUFDTSxDQUFDLENBQUMsR0FBR0wsQ0FBQyxDQUFDSyxDQUFDLENBQUM7SUFDbkI7SUFDQSxPQUFPTixDQUFDO0VBQ1osQ0FBQztFQUNELE9BQU9ILFFBQVEsQ0FBQ2Es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QU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLGtLQUFPOzs7QUFHeEIsSUFBSSxJQUFVO0FBQ2QsT0FBTyxrS0FBTyxXQUFXLFVBQVU7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsa0tBQU87QUFDaEMsb0NBQW9DLHVKQUFXLEdBQUcsa0tBQU87O0FBRXpELElBQUksaUJBQWlCO0FBQ3JCLE1BQU0sa1VBQTJKO0FBQ2pLLE1BQU07QUFBQTtBQUNOLHNEQUFzRCx1SkFBVyxHQUFHLGtLQUFPO0FBQzNFLGdCQUFnQixVQUFVOztBQUUxQjtBQUNBOztBQUVBLDBDQUEwQyx1SkFBVyxHQUFHLGtLQUFPOztBQUUvRCxxQkFBcUIsa0tBQU87QUFDNUIsT0FBTztBQUNQO0FBQ0E7O0FBRUEsRUFBRSxVQUFVO0FBQ1o7QUFDQSxHQUFHO0FBQ0g7OztBQUcwSztBQUMxSyxPQUFPLGlFQUFlLGtLQUFPLElBQUksa0tBQU8sVUFBVSxrS0FBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDN0V0RTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCdUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kaW5hbW8vLi9zcmMvc2hhcmVkL2Fzc2V0cy9pY29ucy9zdGF0LWljb24uc3ZnIiwid2VicGFjazovL2RpbmFtby8uL3NyYy9hcHAvcHJvdmlkZXJzL1Byb3RvY29sUHJvdmlkZXIvbGliL3VzZVByb3RvY29sLnRzeCIsIndlYnBhY2s6Ly9kaW5hbW8vLi9zcmMvY29tcG9uZW50cy9HYW1lL0dhbWUudHN4Iiwid2VicGFjazovL2RpbmFtby8uL3NyYy9jb21wb25lbnRzL0dpZi9HaWYudHN4Iiwid2VicGFjazovL2RpbmFtby8uL3NyYy9jb21wb25lbnRzL1BlcnNvblByb3RvY29sL1BlcnNvblByb3RvY29sLnRzeCIsIndlYnBhY2s6Ly9kaW5hbW8vLi9zcmMvY29tcG9uZW50cy9UYWJsZS9UYWJsZS50c3giLCJ3ZWJwYWNrOi8vZGluYW1vLy4vc3JjL3NoYXJlZC91aS9TZWN0aW9uVGl0bGUvU2VjdGlvblRpdGxlLnRzeCIsIndlYnBhY2s6Ly9kaW5hbW8vLi9zcmMvd2lkZ2V0cy9HYW1lQmFyL3VpL0dhbWVCYXIudHN4Iiwid2VicGFjazovL2RpbmFtby8uL3NyYy93aWRnZXRzL0dhbWVQcm90b2NvbC91aS9HYW1lUHJvdG9jb2wudHN4Iiwid2VicGFjazovL2RpbmFtby8uL3NyYy9jb21wb25lbnRzL0dhbWUvR2FtZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9kaW5hbW8vLi9zcmMvY29tcG9uZW50cy9HaWYvR2lmLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2RpbmFtby8uL3NyYy9jb21wb25lbnRzL1BlcnNvblByb3RvY29sL1BlcnNvblByb3RvY29sLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2RpbmFtby8uL3NyYy9jb21wb25lbnRzL1RhYmxlL1RhYmxlLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2RpbmFtby8uL3NyYy9zaGFyZWQvdWkvU2VjdGlvblRpdGxlL1NlY3Rpb25UaXRsZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9kaW5hbW8vLi9zcmMvd2lkZ2V0cy9HYW1lQmFyL3VpL0dhbWVCYXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZGluYW1vLy4vc3JjL3dpZGdldHMvR2FtZVByb3RvY29sL3VpL0dhbWVQcm90b2NvbC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9kaW5hbW8vLi9zcmMvY29tcG9uZW50cy9HYW1lL0dhbWUubW9kdWxlLnNjc3M/MDFjMSIsIndlYnBhY2s6Ly9kaW5hbW8vLi9zcmMvY29tcG9uZW50cy9HaWYvR2lmLm1vZHVsZS5zY3NzPzcyMTkiLCJ3ZWJwYWNrOi8vZGluYW1vLy4vc3JjL2NvbXBvbmVudHMvUGVyc29uUHJvdG9jb2wvUGVyc29uUHJvdG9jb2wubW9kdWxlLnNjc3M/MTVmZSIsIndlYnBhY2s6Ly9kaW5hbW8vLi9zcmMvY29tcG9uZW50cy9UYWJsZS9UYWJsZS5tb2R1bGUuc2Nzcz8zMjIwIiwid2VicGFjazovL2RpbmFtby8uL3NyYy9zaGFyZWQvdWkvU2VjdGlvblRpdGxlL1NlY3Rpb25UaXRsZS5tb2R1bGUuc2Nzcz9mY2JjIiwid2VicGFjazovL2RpbmFtby8uL3NyYy93aWRnZXRzL0dhbWVCYXIvdWkvR2FtZUJhci5tb2R1bGUuc2Nzcz83NWYyIiwid2VicGFjazovL2RpbmFtby8uL3NyYy93aWRnZXRzL0dhbWVQcm90b2NvbC91aS9HYW1lUHJvdG9jb2wubW9kdWxlLnNjc3M/ZTMzMSIsIndlYnBhY2s6Ly9kaW5hbW8vLi9zcmMvc2hhcmVkL2xpYi90cmltR2FtZXMvdHJpbUdhbWVzLnRzIiwid2VicGFjazovL2RpbmFtby8uL3NyYy93aWRnZXRzL0dhbWVCYXIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9wYXRoLCBfcGF0aDI7XG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduID8gT2JqZWN0LmFzc2lnbi5iaW5kKCkgOiBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xudmFyIFN2Z1N0YXRJY29uID0gZnVuY3Rpb24gU3ZnU3RhdEljb24ocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIF9leHRlbmRzKHtcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgIHdpZHRoOiAyNSxcbiAgICBoZWlnaHQ6IDI1LFxuICAgIHZpZXdCb3g6IFwiMCAwIDUxMiA1MTJcIlxuICB9LCBwcm9wcyksIF9wYXRoIHx8IChfcGF0aCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMjM0LjUgNDIuMWMtNDEuNSA0LjItODIuNiAyMS4zLTExNC43IDQ3LjctOC45IDcuMy0yNC44IDIzLjQtMzEuOSAzMi4yLTIxLjUgMjYuOS0zNi45IDYwLjgtNDMuNCA5NS43LTExLjIgNjAuMSA1LjMgMTI1IDQzLjkgMTcyLjkgNi43IDguNCAyMi44IDI0LjYgMzEuNCAzMS42IDUyLjYgNDMuMyAxMjMuNCA1OC44IDE5MC4xIDQxLjggNTkuNi0xNS4yIDExMi01Ny45IDEzOS0xMTMuNCAyMi42LTQ2LjQgMjcuOS05OC40IDE1LjEtMTQ4LjUtNy40LTI5LTIyLjUtNTguOC00MS44LTgyLjMtNy4zLTguOS0yMy40LTI0LjgtMzIuMi0zMS45LTQzLTM0LjQtMTAwLjgtNTEuNC0xNTUuNS00NS44TTM1OSAyNTZ2MTMzSDE1M1YxMjNoMjA2elwiXG4gIH0pKSwgX3BhdGgyIHx8IChfcGF0aDIgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTE4NSAxNzcuNXY3LjVoMTQydi0xNUgxODV6TTE4NS40IDIwNC4zYy0uMy44LS40IDQuMy0uMiA3LjhsLjMgNi40aDE0MXYtMTVsLTcwLjMtLjNjLTU4LjUtLjItNzAuMyAwLTcwLjggMS4xTTE4NS43IDIzNy43Yy0uNC4zLS43IDMuNy0uNyA3LjV2Ni44aDc3di0xNWgtMzcuOGMtMjAuOCAwLTM4LjIuMy0zOC41LjdNMjg4IDMxNC41VjM1N2wxOS4zLS4yIDE5LjItLjMuMy00Mi4zLjItNDIuMmgtMzl6TTE4NS4yIDMyMy4ybC4zIDMzLjMgMTkuMy4zIDE5LjIuMnYtNjdoLTM5ek0yMzcgMzM0djIzaDM4di00NmgtMzh6XCJcbiAgfSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBTdmdTdGF0SWNvbjsiLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWluQXBpIH0gZnJvbSAnZmVhdHVyZXMvTWFpbkFwaS9NYWluQXBpJztcbmV4cG9ydCBmdW5jdGlvbiB1c2VQcm90b2NvbCgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciBfYSA9IHVzZVN0YXRlKHtcbiAgICAgICAgaXNPcGVuOiBmYWxzZSxcbiAgICAgICAgZ2FtZUlkOiBudWxsLFxuICAgICAgICBnYW1lSW5mbzogbnVsbCxcbiAgICAgICAgZ2FtZURhdGE6IG51bGxcbiAgICB9KSwgcHJvdG9jb2xTdGF0ZSA9IF9hWzBdLCBzZXRQcm90b2NvbFN0YXRlID0gX2FbMV07XG4gICAgdmFyIGZldGNoR2FtZSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgbWFpbkFwaS5nZXRHYW1lUHJvdG9jb2wocHJvdG9jb2xTdGF0ZS5nYW1lSWQpXTsgLyog0JrQvtGB0YLRi9C70YwgKi9cbiAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiAvKnJldHVybiovLCBfYS5zZW50KCldOyAvKiDQmtC+0YHRgtGL0LvRjCAqL1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTsgfSwgW3Byb3RvY29sU3RhdGUuZ2FtZUlkXSk7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHByb3RvY29sU3RhdGUuaXNPcGVuKSB7XG4gICAgICAgICAgICBmZXRjaEdhbWUoKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChnYW1lRGF0YSkgeyBzZXRQcm90b2NvbFN0YXRlKF9fYXNzaWduKF9fYXNzaWduKHt9LCBwcm90b2NvbFN0YXRlKSwgeyBnYW1lRGF0YTogZ2FtZURhdGEgfSkpOyB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7IGNvbnNvbGUubG9nKGVycik7IH0pO1xuICAgICAgICB9XG4gICAgfSwgW2ZldGNoR2FtZSwgcHJvdG9jb2xTdGF0ZS5pc09wZW5dKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm90b2NvbFN0YXRlOiBwcm90b2NvbFN0YXRlLFxuICAgICAgICBzZXRQcm90b2NvbFN0YXRlOiBzZXRQcm90b2NvbFN0YXRlXG4gICAgfTtcbn1cbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgY2xhc3NOYW1lcyB9IGZyb20gJ3NoYXJlZC9saWIvY2xhc3NOYW1lcy9jbGFzc05hbWVzJztcbmltcG9ydCBjbHMgZnJvbSAnLi9HYW1lLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IEJ1dHRvbiwgVGhlbWVCdXR0b24gfSBmcm9tICdzaGFyZWQvdWkvQnV0dG9uL0J1dHRvbic7XG5pbXBvcnQgU3RhdEljb24gZnJvbSAnc2hhcmVkL2Fzc2V0cy9pY29ucy9zdGF0LWljb24uc3ZnJztcbmV4cG9ydCB2YXIgR2FtZSA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciBnYW1lID0gcHJvcHMuZ2FtZSwgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLCBzZXRQcm90b2NvbFN0YXRlID0gcHJvcHMuc2V0UHJvdG9jb2xTdGF0ZSwgcHJvdG9jb2xTdGF0ZSA9IHByb3BzLnByb3RvY29sU3RhdGU7XG4gICAgdmFyIEdhbWVJRCA9IGdhbWUuR2FtZUlELCBEaXNwbGF5RGF0ZVRpbWVNc2sgPSBnYW1lLkRpc3BsYXlEYXRlVGltZU1zaywgVGVhbUxvZ29BID0gZ2FtZS5UZWFtTG9nb0EsIFRlYW1Mb2dvQiA9IGdhbWUuVGVhbUxvZ29CLCBTY29yZUEgPSBnYW1lLlNjb3JlQSwgU2NvcmVCID0gZ2FtZS5TY29yZUI7XG4gICAgdmFyIG9uU3RhdE9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNldFByb3RvY29sU3RhdGUoX19hc3NpZ24oX19hc3NpZ24oe30sIHByb3RvY29sU3RhdGUpLCB7IGlzT3BlbjogdHJ1ZSwgZ2FtZUlkOiBHYW1lSUQsIGdhbWVJbmZvOiBnYW1lIH0pKTtcbiAgICAgICAgY29uc29sZS5sb2cocHJvdG9jb2xTdGF0ZSk7XG4gICAgfTtcbiAgICByZXR1cm4gKF9qc3hzKFwiYXJ0aWNsZVwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjbHMuR2FtZSwge30sIFtjbGFzc05hbWUgIT09IG51bGwgJiYgY2xhc3NOYW1lICE9PSB2b2lkIDAgPyBjbGFzc05hbWUgOiAnJ10pLCBjaGlsZHJlbjogW19qc3goXCJoM1wiLCB7IGNsYXNzTmFtZTogY2xzLkdhbWVfX3RpdGxlLCBjaGlsZHJlbjogRGlzcGxheURhdGVUaW1lTXNrIH0pLCBfanN4cyhcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xzLkdhbWVfX2dhbWVDb250YWluZXIsIGNoaWxkcmVuOiBbX2pzeChcImRpdlwiLCB7IHN0eWxlOiB7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIuY29uY2F0KFRlYW1Mb2dvQSwgXCIpXCIpIH0sIGNsYXNzTmFtZTogY2xzLkdhbWVfX3RlYW1JbWFnZSB9KSwgX2pzeChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xzLkdhbWVfX3Njb3JlLCBjaGlsZHJlbjogXCJcIi5jb25jYXQoU2NvcmVBLCBcIiA6IFwiKS5jb25jYXQoU2NvcmVCKSB9KSwgX2pzeChcImRpdlwiLCB7IHN0eWxlOiB7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIuY29uY2F0KFRlYW1Mb2dvQiwgXCIpXCIpIH0sIGNsYXNzTmFtZTogY2xzLkdhbWVfX3RlYW1JbWFnZSB9KV0gfSksIF9qc3hzKEJ1dHRvbiwgeyBvbkNsaWNrOiBvblN0YXRPcGVuLCB0aGVtZTogVGhlbWVCdXR0b24uUE9aX0dBTUUsIGNoaWxkcmVuOiBbX2pzeChTdGF0SWNvbiwgeyBjbGFzc05hbWU6IGNscy5HYW1lX19zdGF0SWNvbiB9KSwgXCJcXHUwNDFGXFx1MDQzRVxcdTA0M0JcXHUwNDNEXFx1MDQzMFxcdTA0NEYgXFx1MDQ0MVxcdTA0NDJcXHUwNDMwXFx1MDQ0MlxcdTA0MzhcXHUwNDQxXFx1MDQ0MlxcdTA0MzhcXHUwNDNBXFx1MDQzMCBcXHUwNDNDXFx1MDQzMFxcdTA0NDJcXHUwNDQ3XFx1MDQzMFwiXSB9KV0gfSkpO1xufTtcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBjbGFzc05hbWVzIH0gZnJvbSAnc2hhcmVkL2xpYi9jbGFzc05hbWVzL2NsYXNzTmFtZXMnO1xuaW1wb3J0IGNscyBmcm9tICcuL0dpZi5tb2R1bGUuc2Nzcyc7XG5leHBvcnQgdmFyIEdpZiA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBjbGFzc05hbWUgPSBfYS5jbGFzc05hbWU7XG4gICAgcmV0dXJuIChfanN4KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGNscy5HaWYsIHt9LCBbY2xhc3NOYW1lICE9PSBudWxsICYmIGNsYXNzTmFtZSAhPT0gdm9pZCAwID8gY2xhc3NOYW1lIDogJyddKSwgY2hpbGRyZW46IF9qc3hzKFwic3ZnXCIsIHsgY2xhc3NOYW1lOiBjbHMuR2lmX19pdGVtLCB2aWV3Qm94OiBcIjAgMCAzMjAgMzAwXCIsIGNoaWxkcmVuOiBbX2pzeChcInJlY3RcIiwgeyBjbGFzc05hbWU6IGNscy5naWZfX2NhcmQsIHg6IFwiNDgwXCIsIHdpZHRoOiBcIjQwXCIsIGhlaWdodDogXCIyMDBcIiwgcng6IFwiNVwiIH0pLCBfanN4KFwicmVjdFwiLCB7IGNsYXNzTmFtZTogY2xzLkdpZl9fY2FyZCwgeTogXCIwXCIsIHdpZHRoOiBcIjIwMFwiLCBoZWlnaHQ6IFwiMjAwXCIsIHJ4OiBcIjVcIiB9KSwgX2pzeChcInJlY3RcIiwgeyBjbGFzc05hbWU6IGNscy5HaWZfX2NhcmQsIHg6IFwiMjQwXCIsIHdpZHRoOiBcIjIwMFwiLCBoZWlnaHQ6IFwiMjAwXCIsIHJ4OiBcIjVcIiB9KSwgX2pzeChcInBhdGhcIiwgeyBjbGFzc05hbWU6IGNscy5HaWZfX2hhbmQsIFxuICAgICAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlbiAqL1xuICAgICAgICAgICAgICAgICAgICBkOiBcIk03OC45NTc5IDI4NS43Qzc4Ljk1NzkgMjg1LjcgMzcuODU3OSAyMTIuNSAyMC41NTc5IDE4MC44Qy0yLjQ0MjA5IDEzOC42IC02LjI0MjIgMTIwLjggOS42NTc5IDExMkMxOS41NTc5IDEwNi41IDMzLjI1NzkgMTA4LjggNDEuNjU3OSAxMjMuNEw2MS4yNTc5IDE1NC42VjMyLjNDNjEuMjU3OSAzMi4zIDYwLjA1NzkgMCA4My4wNTc5IDBDMTA3LjU1OCAwIDEwNS40NTggMzIuMyAxMDUuNDU4IDMyLjNWOTEuN0MxMDUuNDU4IDkxLjcgMTE4LjM1OCA4Mi40IDEzMy40NTggODYuNkMxNDEuMTU4IDg4LjcgMTUwLjE1OCA5Mi40IDE1NC45NTggMTA0LjZDMTU0Ljk1OCAxMDQuNiAxODUuNjU4IDg5LjcgMjAwLjk1OCAxMjEuNEMyMDAuOTU4IDEyMS40IDIzNi4zNTggMTE0LjQgMjM2LjM1OCAxNTEuMUMyMzYuMzU4IDE4Ny44IDE5Mi4xNTggMjg1LjcgMTkyLjE1OCAyODUuN0g3OC45NTc5WlwiIH0pXSB9KSB9KSk7XG59O1xuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IGNsYXNzTmFtZXMgfSBmcm9tICdzaGFyZWQvbGliL2NsYXNzTmFtZXMvY2xhc3NOYW1lcyc7XG5pbXBvcnQgY2xzIGZyb20gJy4vUGVyc29uUHJvdG9jb2wubW9kdWxlLnNjc3MnO1xuZXhwb3J0IHZhciBQZXJzb25Qcm90b2NvbCA9IGZ1bmN0aW9uIChQZXJzb25Qcm90b2NvbCkge1xuICAgIHZhciBQbGF5ZXJOdW1iZXIgPSBQZXJzb25Qcm90b2NvbC5QbGF5ZXJOdW1iZXIsIFBlcnNvbklEID0gUGVyc29uUHJvdG9jb2wuUGVyc29uSUQsIFBlcnNvbk5hbWVSdSA9IFBlcnNvblByb3RvY29sLlBlcnNvbk5hbWVSdSwgUGxheWVkVGltZSA9IFBlcnNvblByb3RvY29sLlBsYXllZFRpbWUsIFBvaW50cyA9IFBlcnNvblByb3RvY29sLlBvaW50cywgU2hvdHMxID0gUGVyc29uUHJvdG9jb2wuU2hvdHMxLCBTaG90czIgPSBQZXJzb25Qcm90b2NvbC5TaG90czIsIFNob3RzMyA9IFBlcnNvblByb3RvY29sLlNob3RzMywgR29hbDIgPSBQZXJzb25Qcm90b2NvbC5Hb2FsMiwgR29hbDMgPSBQZXJzb25Qcm90b2NvbC5Hb2FsMywgU2hvdDIgPSBQZXJzb25Qcm90b2NvbC5TaG90MiwgU2hvdDMgPSBQZXJzb25Qcm90b2NvbC5TaG90MywgRGVmUmVib3VuZCA9IFBlcnNvblByb3RvY29sLkRlZlJlYm91bmQsIE9mZlJlYm91bmQgPSBQZXJzb25Qcm90b2NvbC5PZmZSZWJvdW5kLCBSZWJvdW5kID0gUGVyc29uUHJvdG9jb2wuUmVib3VuZCwgQXNzaXN0ID0gUGVyc29uUHJvdG9jb2wuQXNzaXN0LCBTdGVhbCA9IFBlcnNvblByb3RvY29sLlN0ZWFsLCBUdXJub3ZlciA9IFBlcnNvblByb3RvY29sLlR1cm5vdmVyLCBCbG9ja3MgPSBQZXJzb25Qcm90b2NvbC5CbG9ja3MsIEZvdWwgPSBQZXJzb25Qcm90b2NvbC5Gb3VsLCBPcHBvbmVudEZvdWwgPSBQZXJzb25Qcm90b2NvbC5PcHBvbmVudEZvdWwsIFBsdXNNaW51cyA9IFBlcnNvblByb3RvY29sLlBsdXNNaW51cztcbiAgICByZXR1cm4gKF9qc3hzKFwidHJcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZXMoY2xzLnByb3RvY29sKSwgY2hpbGRyZW46IFtfanN4KFwidGRcIiwgeyBjbGFzc05hbWU6IGNscy5QZXJzb25Qcm90b2NvbF9faXRlbSwgY2hpbGRyZW46IF9qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNscy5QZXJzb25Qcm90b2NvbF9fc2hpcnQsIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKGh0dHBzOi8vcnVzc2lhYmFza2V0LnJ1L2dhbWVzL3VuaWZvcm0/bnVtYmVyPVwiLmNvbmNhdChQbGF5ZXJOdW1iZXIsIFwiJmFtcDtjb2xvcjE9JTIzRkZGRkZGJmFtcDtjb2xvcjI9JTIzMDAwMDAwJmFtcDtjb2xvcjM9JTIzMDAwMDAwKVwiKVxuICAgICAgICAgICAgICAgICAgICB9IH0pIH0pLCBfanN4KFwidGRcIiwgeyBjbGFzc05hbWU6IGNscy5QZXJzb25Qcm90b2NvbF9faXRlbSwgY2hpbGRyZW46IF9qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNscy5QZXJzb25Qcm90b2NvbF9faW1hZ2UsIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKGh0dHBzOi8vb3JnLmluZm9iYXNrZXQuc3UvV2lkZ2V0L0dldFBlcnNvblBob3RvL1wiLmNvbmNhdChQZXJzb25JRCwgXCI/ZD0xJmFtcDtjb21wSWQ9NDI3MzgmYW1wO3RlYW1JZD03NTgpXCIpXG4gICAgICAgICAgICAgICAgICAgIH0gfSkgfSksIF9qc3goXCJ0ZFwiLCB7IGNsYXNzTmFtZTogY2xzLlBlcnNvblByb3RvY29sX19pdGVtLCBjaGlsZHJlbjogUGVyc29uTmFtZVJ1IH0pLCBfanN4KFwidGRcIiwgeyBjbGFzc05hbWU6IGNscy5QZXJzb25Qcm90b2NvbF9faXRlbSwgY2hpbGRyZW46IFBsYXllZFRpbWUgIT09IG51bGwgJiYgUGxheWVkVGltZSB9KSwgX2pzeChcInRkXCIsIHsgY2xhc3NOYW1lOiBjbHMuUGVyc29uUHJvdG9jb2xfX2l0ZW0sIGNoaWxkcmVuOiBQb2ludHMgIT09IG51bGwgJiYgUG9pbnRzIH0pLCBfanN4KFwidGRcIiwgeyBjbGFzc05hbWU6IGNscy5QZXJzb25Qcm90b2NvbF9faXRlbSwgY2hpbGRyZW46IFNob3RzMiAhPT0gbnVsbCAmJiBTaG90czIgfSksIF9qc3goXCJ0ZFwiLCB7IGNsYXNzTmFtZTogY2xzLlBlcnNvblByb3RvY29sX19pdGVtLCBjaGlsZHJlbjogU2hvdHMzICE9PSBudWxsICYmIFNob3RzMyB9KSwgX2pzeChcInRkXCIsIHsgY2xhc3NOYW1lOiBjbHMuUGVyc29uUHJvdG9jb2xfX2l0ZW0sIGNoaWxkcmVuOiAoKFNob3QyIHwgU2hvdDMpICE9PSBudWxsKSAmJlxuICAgICAgICAgICAgICAgICAgICBcIlwiLmNvbmNhdChHb2FsMiArIEdvYWwzLCBcIi9cIikuY29uY2F0KFNob3QyICsgU2hvdDMpIH0pLCBfanN4KFwidGRcIiwgeyBjbGFzc05hbWU6IGNscy5QZXJzb25Qcm90b2NvbF9faXRlbSwgY2hpbGRyZW46IFNob3RzMSAhPT0gbnVsbCAmJiBTaG90czEgfSksIF9qc3goXCJ0ZFwiLCB7IGNsYXNzTmFtZTogY2xzLlBlcnNvblByb3RvY29sX19pdGVtLCBjaGlsZHJlbjogRGVmUmVib3VuZCAhPT0gbnVsbCAmJiBEZWZSZWJvdW5kIH0pLCBfanN4KFwidGRcIiwgeyBjbGFzc05hbWU6IGNscy5QZXJzb25Qcm90b2NvbF9faXRlbSwgY2hpbGRyZW46IE9mZlJlYm91bmQgIT09IG51bGwgJiYgT2ZmUmVib3VuZCB9KSwgX2pzeChcInRkXCIsIHsgY2xhc3NOYW1lOiBjbHMuUGVyc29uUHJvdG9jb2xfX2l0ZW0sIGNoaWxkcmVuOiBSZWJvdW5kICE9PSBudWxsICYmIFJlYm91bmQgfSksIF9qc3goXCJ0ZFwiLCB7IGNsYXNzTmFtZTogY2xzLlBlcnNvblByb3RvY29sX19pdGVtLCBjaGlsZHJlbjogQXNzaXN0ICE9PSBudWxsICYmIEFzc2lzdCB9KSwgX2pzeChcInRkXCIsIHsgY2xhc3NOYW1lOiBjbHMuUGVyc29uUHJvdG9jb2xfX2l0ZW0sIGNoaWxkcmVuOiBTdGVhbCAhPT0gbnVsbCAmJiBTdGVhbCB9KSwgX2pzeChcInRkXCIsIHsgY2xhc3NOYW1lOiBjbHMuUGVyc29uUHJvdG9jb2xfX2l0ZW0sIGNoaWxkcmVuOiBUdXJub3ZlciAhPT0gbnVsbCAmJiBUdXJub3ZlciB9KSwgX2pzeChcInRkXCIsIHsgY2xhc3NOYW1lOiBjbHMuUGVyc29uUHJvdG9jb2xfX2l0ZW0sIGNoaWxkcmVuOiBCbG9ja3MgIT09IG51bGwgJiYgQmxvY2tzIH0pLCBfanN4KFwidGRcIiwgeyBjbGFzc05hbWU6IGNscy5QZXJzb25Qcm90b2NvbF9faXRlbSwgY2hpbGRyZW46IEZvdWwgIT09IG51bGwgJiYgRm91bCB9KSwgX2pzeChcInRkXCIsIHsgY2xhc3NOYW1lOiBjbHMuUGVyc29uUHJvdG9jb2xfX2l0ZW0sIGNoaWxkcmVuOiBPcHBvbmVudEZvdWwgIT09IG51bGwgJiYgT3Bwb25lbnRGb3VsIH0pLCBfanN4KFwidGRcIiwgeyBjbGFzc05hbWU6IGNscy5QZXJzb25Qcm90b2NvbF9faXRlbSwgY2hpbGRyZW46IFBsdXNNaW51cyAhPT0gbnVsbCAmJiBQbHVzTWludXMgfSldIH0pKTtcbn07XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCBhcyBfY3JlYXRlRWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IGNsYXNzTmFtZXMgfSBmcm9tICdzaGFyZWQvbGliL2NsYXNzTmFtZXMvY2xhc3NOYW1lcyc7XG5pbXBvcnQgY2xzIGZyb20gJy4vVGFibGUubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHsgU2VjdGlvblRpdGxlIH0gZnJvbSAnc2hhcmVkL3VpL1NlY3Rpb25UaXRsZS9TZWN0aW9uVGl0bGUnO1xuaW1wb3J0IHsgUGVyc29uUHJvdG9jb2wgfSBmcm9tICdjb21wb25lbnRzL1BlcnNvblByb3RvY29sL1BlcnNvblByb3RvY29sJztcbmV4cG9ydCB2YXIgVGFibGUgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgbG9nb1RlYW0gPSBwcm9wcy5sb2dvVGVhbSwgbmFtZVRlYW0gPSBwcm9wcy5uYW1lVGVhbSwgZ2FtZURhdGEgPSBwcm9wcy5nYW1lRGF0YTtcbiAgICB2YXIgUGxheWVkVGltZSA9IGdhbWVEYXRhLlBsYXllZFRpbWUsIFNjb3JlID0gZ2FtZURhdGEuU2NvcmUsIFNob3RzMSA9IGdhbWVEYXRhLlNob3RzMSwgU2hvdHMyID0gZ2FtZURhdGEuU2hvdHMyLCBTaG90czMgPSBnYW1lRGF0YS5TaG90czMsIFNob3QxUGVyY2VudCA9IGdhbWVEYXRhLlNob3QxUGVyY2VudCwgU2hvdDJQZXJjZW50ID0gZ2FtZURhdGEuU2hvdDJQZXJjZW50LCBTaG90M1BlcmNlbnQgPSBnYW1lRGF0YS5TaG90M1BlcmNlbnQsIERlZlJlYm91bmQgPSBnYW1lRGF0YS5EZWZSZWJvdW5kLCBPZmZSZWJvdW5kID0gZ2FtZURhdGEuT2ZmUmVib3VuZCwgUmVib3VuZCA9IGdhbWVEYXRhLlJlYm91bmQsIEFzc2lzdCA9IGdhbWVEYXRhLkFzc2lzdCwgU3RlYWwgPSBnYW1lRGF0YS5TdGVhbCwgVHVybm92ZXIgPSBnYW1lRGF0YS5UdXJub3ZlciwgQmxvY2tzID0gZ2FtZURhdGEuQmxvY2tzLCBGb3VsID0gZ2FtZURhdGEuRm91bCwgT3Bwb25lbnRGb3VsID0gZ2FtZURhdGEuT3Bwb25lbnRGb3VsLCBHb2FsMiA9IGdhbWVEYXRhLkdvYWwyLCBHb2FsMyA9IGdhbWVEYXRhLkdvYWwzLCBTaG90MiA9IGdhbWVEYXRhLlNob3QyLCBTaG90MyA9IGdhbWVEYXRhLlNob3QzLCBQbGF5ZXJzID0gZ2FtZURhdGEuUGxheWVycztcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbHMuVGFibGUsIGNoaWxkcmVuOiBbX2pzeHMoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNscy5UYWJsZV9faGVhZGluZywgY2hpbGRyZW46IFtfanN4KFwiaW1nXCIsIHsgY2xhc3NOYW1lOiBjbHMuVGFibGVfX2xvZ28sIHNyYzogbG9nb1RlYW0sIGFsdDogbmFtZVRlYW0gfSksIF9qc3goU2VjdGlvblRpdGxlLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjbHMuVGFibGVfX3RlYW0pLCB0aGVtZTogXCJTZWN0aW9uVGl0bGVfY2xlYXJcIiAvKiBTZWN0aW9uVGl0bGVUaGVtZS5DTEVBUiAqLywgY2hpbGRyZW46IG5hbWVUZWFtIH0pXSB9KSwgX2pzeHMoXCJ0YWJsZVwiLCB7IGNsYXNzTmFtZTogY2xzLlRhYmxlX19jb250YWluZXIsIGNoaWxkcmVuOiBbX2pzeHMoXCJ0aGVhZFwiLCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJ0clwiLCB7IGNsYXNzTmFtZTogY2xzLlRhYmxlX19yb3csIGNoaWxkcmVuOiBbX2pzeChcInRoXCIsIHsgcm93U3BhbjogMiwgY29sU3BhbjogMywgY2xhc3NOYW1lOiBjbHMuVGFibGVfX3RpdGxlLCBjaGlsZHJlbjogXCJcXHUwNDE4XFx1MDQzM1xcdTA0NDBcXHUwNDNFXFx1MDQzQVxcdTA0MzhcIiB9KSwgX2pzeChcInRoXCIsIHsgcm93U3BhbjogMiwgdGl0bGU6IFwiXFx1MDQyMVxcdTA0NEJcXHUwNDMzXFx1MDQ0MFxcdTA0MzBcXHUwNDNEXFx1MDQzRFxcdTA0M0VcXHUwNDM1IFxcdTA0MzJcXHUwNDQwXFx1MDQzNVxcdTA0M0NcXHUwNDRGXCIsIGNsYXNzTmFtZTogY2xzLlRhYmxlX190aXRsZSwgY2hpbGRyZW46IFwiXFx1MDQyMVxcdTA0MTJcIiB9KSwgX2pzeChcInRoXCIsIHsgcm93U3BhbjogMiwgdGl0bGU6IFwiXFx1MDQxRFxcdTA0MzBcXHUwNDMxXFx1MDQ0MFxcdTA0MzBcXHUwNDNEXFx1MDQzRFxcdTA0NEJcXHUwNDM1IFxcdTA0M0VcXHUwNDQ3XFx1MDQzQVxcdTA0MzhcIiwgY2xhc3NOYW1lOiBjbHMuVGFibGVfX3RpdGxlLCBjaGlsZHJlbjogXCJcXHUwNDFFXFx1MDQ0N1xcdTA0M0FcXHUwNDM4XCIgfSksIF9qc3goXCJ0aFwiLCB7IGNvbFNwYW46IDQsIGNsYXNzTmFtZTogY2xzLlRhYmxlX190aXRsZSwgY2hpbGRyZW46IFwiXFx1MDQxMVxcdTA0NDBcXHUwNDNFXFx1MDQ0MVxcdTA0M0FcXHUwNDM4XCIgfSksIF9qc3goXCJ0aFwiLCB7IGNvbFNwYW46IDMsIGNsYXNzTmFtZTogY2xzLlRhYmxlX190aXRsZSwgY2hpbGRyZW46IFwiXFx1MDQxRlxcdTA0M0VcXHUwNDM0XFx1MDQzMVxcdTA0M0VcXHUwNDQwXFx1MDQ0QlwiIH0pLCBfanN4KFwidGhcIiwgeyByb3dTcGFuOiAyLCB0aXRsZTogXCJcXHUwNDEzXFx1MDQzRVxcdTA0M0JcXHUwNDM1XFx1MDQzMlxcdTA0NEJcXHUwNDM1IFxcdTA0M0ZcXHUwNDM1XFx1MDQ0MFxcdTA0MzVcXHUwNDM0XFx1MDQzMFxcdTA0NDdcXHUwNDM4XCIsIGNsYXNzTmFtZTogY2xzLlRhYmxlX190aXRsZSwgY2hpbGRyZW46IFwiXFx1MDQxM1xcdTA0MUZcIiB9KSwgX2pzeChcInRoXCIsIHsgcm93U3BhbjogMiwgdGl0bGU6IFwiXFx1MDQxRlxcdTA0MzVcXHUwNDQwXFx1MDQzNVxcdTA0NDVcXHUwNDMyXFx1MDQzMFxcdTA0NDJcXHUwNDRCXCIsIGNsYXNzTmFtZTogY2xzLlRhYmxlX190aXRsZSwgY2hpbGRyZW46IFwiXFx1MDQxRlxcdTA0MjVcIiB9KSwgX2pzeChcInRoXCIsIHsgcm93U3BhbjogMiwgdGl0bGU6IFwiXFx1MDQxRlxcdTA0M0VcXHUwNDQyXFx1MDQzNVxcdTA0NDBcXHUwNDM4XCIsIGNsYXNzTmFtZTogY2xzLlRhYmxlX190aXRsZSwgY2hpbGRyZW46IFwiXFx1MDQxRlxcdTA0MjJcIiB9KSwgX2pzeChcInRoXCIsIHsgcm93U3BhbjogMiwgdGl0bGU6IFwiXFx1MDQxMVxcdTA0M0JcXHUwNDNFXFx1MDQzQVxcdTA0NDhcXHUwNDNFXFx1MDQ0MlxcdTA0NEJcIiwgY2xhc3NOYW1lOiBjbHMuVGFibGVfX3RpdGxlLCBjaGlsZHJlbjogXCJcXHUwNDExXFx1MDQyOFwiIH0pLCBfanN4KFwidGhcIiwgeyByb3dTcGFuOiAyLCB0aXRsZTogXCJcXHUwNDI0XFx1MDQzRVxcdTA0M0JcXHUwNDRCXCIsIGNsYXNzTmFtZTogY2xzLlRhYmxlX190aXRsZSwgY2hpbGRyZW46IFwiXFx1MDQyNFwiIH0pLCBfanN4KFwidGhcIiwgeyByb3dTcGFuOiAyLCB0aXRsZTogXCJcXHUwNDI0XFx1MDQzRVxcdTA0M0JcXHUwNDRCIFxcdTA0NDFcXHUwNDNFXFx1MDQzRlxcdTA0MzVcXHUwNDQwXFx1MDQzRFxcdTA0MzhcXHUwNDNBXFx1MDQzMFwiLCBjbGFzc05hbWU6IGNscy5UYWJsZV9fdGl0bGUsIGNoaWxkcmVuOiBcIlxcdTA0MjRcXHUwNDIxXCIgfSksIF9qc3goXCJ0aFwiLCB7IHJvd1NwYW46IDIsIHRpdGxlOiBcIlxcdTA0MUZcXHUwNDNCXFx1MDQ0RVxcdTA0NDEvXFx1MDQzQ1xcdTA0MzhcXHUwNDNEXFx1MDQ0M1xcdTA0NDFcIiwgY2xhc3NOYW1lOiBjbHMuVGFibGVfX3RpdGxlLCBjaGlsZHJlbjogXCIrLy1cIiB9KV0gfSksIF9qc3hzKFwidHJcIiwgeyBjbGFzc05hbWU6IGNscy5UYWJsZV9fcm93LCBjaGlsZHJlbjogW19qc3goXCJ0aFwiLCB7IHRpdGxlOiBcIlxcdTA0MTRcXHUwNDMyXFx1MDQ0M1xcdTA0NDVcXHUwNDNFXFx1MDQ0N1xcdTA0M0FcXHUwNDNFXFx1MDQzMlxcdTA0NEJcXHUwNDM1IFxcdTA0MzFcXHUwNDQwXFx1MDQzRVxcdTA0NDFcXHUwNDNBXFx1MDQzOFwiLCBjbGFzc05hbWU6IGNscy5UYWJsZV9fdGl0bGUsIGNoaWxkcmVuOiBcIjItXFx1MDQzRVxcdTA0NDdcXHUwNDNBXCIgfSksIF9qc3goXCJ0aFwiLCB7IHRpdGxlOiBcIlxcdTA0MjJcXHUwNDQwXFx1MDQzNVxcdTA0NDVcXHUwNDNFXFx1MDQ0N1xcdTA0M0FcXHUwNDNFXFx1MDQzMlxcdTA0NEJcXHUwNDM1IFxcdTA0MzFcXHUwNDQwXFx1MDQzRVxcdTA0NDFcXHUwNDNBXFx1MDQzOFwiLCBjbGFzc05hbWU6IGNscy5UYWJsZV9fdGl0bGUsIGNoaWxkcmVuOiBcIjMtXFx1MDQzRVxcdTA0NDdcXHUwNDNBXCIgfSksIF9qc3goXCJ0aFwiLCB7IHRpdGxlOiBcIlxcdTA0MTFcXHUwNDQwXFx1MDQzRVxcdTA0NDFcXHUwNDNBXFx1MDQzOCBcXHUwNDQxIFxcdTA0MzhcXHUwNDMzXFx1MDQ0MFxcdTA0NEJcIiwgY2xhc3NOYW1lOiBjbHMuVGFibGVfX3RpdGxlLCBjaGlsZHJlbjogXCJcXHUwNDE4XCIgfSksIF9qc3goXCJ0aFwiLCB7IHRpdGxlOiBcIlxcdTA0MjhcXHUwNDQyXFx1MDQ0MFxcdTA0MzBcXHUwNDQ0XFx1MDQzRFxcdTA0NEJcXHUwNDM1IFxcdTA0MzFcXHUwNDQwXFx1MDQzRVxcdTA0NDFcXHUwNDNBXFx1MDQzOFwiLCBjbGFzc05hbWU6IGNscy5UYWJsZV9fdGl0bGUsIGNoaWxkcmVuOiBcIlxcdTA0MjhcXHUwNDExXCIgfSksIF9qc3goXCJ0aFwiLCB7IHRpdGxlOiBcIlxcdTA0MUZcXHUwNDNFXFx1MDQzNFxcdTA0MzFcXHUwNDNFXFx1MDQ0MFxcdTA0NEIgXFx1MDQzRFxcdTA0MzAgXFx1MDQ0MVxcdTA0MzJcXHUwNDNFXFx1MDQzNVxcdTA0M0MgXFx1MDQ0OVxcdTA0MzhcXHUwNDQyXFx1MDQzNVwiLCBjbGFzc05hbWU6IGNscy5UYWJsZV9fdGl0bGUsIGNoaWxkcmVuOiBcIlxcdTA0MjFcXHUwNDI5XCIgfSksIF9qc3goXCJ0aFwiLCB7IHRpdGxlOiBcIlxcdTA0MUZcXHUwNDNFXFx1MDQzNFxcdTA0MzFcXHUwNDNFXFx1MDQ0MFxcdTA0NEIgXFx1MDQzRFxcdTA0MzAgXFx1MDQ0N1xcdTA0NDNcXHUwNDM2XFx1MDQzRVxcdTA0M0MgXFx1MDQ0OVxcdTA0MzhcXHUwNDQyXFx1MDQzNVwiLCBjbGFzc05hbWU6IGNscy5UYWJsZV9fdGl0bGUsIGNoaWxkcmVuOiBcIlxcdTA0MjdcXHUwNDI5XCIgfSksIF9qc3goXCJ0aFwiLCB7IHRpdGxlOiBcIlxcdTA0MUZcXHUwNDNFXFx1MDQzNFxcdTA0MzFcXHUwNDNFXFx1MDQ0MFxcdTA0NEIgXFx1MDQzMlxcdTA0NDFcXHUwNDM1XFx1MDQzM1xcdTA0M0VcIiwgY2xhc3NOYW1lOiBjbHMuVGFibGVfX3RpdGxlLCBjaGlsZHJlbjogXCJcXHUwNDEyXFx1MDQyMVwiIH0pXSB9KV0gfSksIF9qc3goXCJ0Ym9keVwiLCB7IGNoaWxkcmVuOiBQbGF5ZXJzLm1hcChmdW5jdGlvbiAoX2EsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBsYXllclByb3BzID0gX19yZXN0KF9hLCBbXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChfY3JlYXRlRWxlbWVudChQZXJzb25Qcm90b2NvbCwgX19hc3NpZ24oe30sIHBsYXllclByb3BzLCB7IGtleTogaW5kZXggfSkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pIH0pLCBfanN4KFwidGZvb3RcIiwgeyBjaGlsZHJlbjogX2pzeHMoXCJ0clwiLCB7IGNsYXNzTmFtZTogY2xzLlRhYmxlX19yb3csIGNoaWxkcmVuOiBbX2pzeChcInRkXCIsIHsgY2xhc3NOYW1lOiBjbHMuVGFibGVfX2l0ZW0sIGNvbFNwYW46IDMsIGNoaWxkcmVuOiBcIlxcdTA0MTJcXHUwNDIxXFx1MDQxNVxcdTA0MTNcXHUwNDFFOlwiIH0pLCBfanN4KFwidGRcIiwgeyBjbGFzc05hbWU6IGNscy5UYWJsZV9faXRlbSwgY2hpbGRyZW46IFBsYXllZFRpbWUgfSksIF9qc3goXCJ0ZFwiLCB7IGNsYXNzTmFtZTogY2xzLlRhYmxlX19pdGVtLCBjaGlsZHJlbjogU2NvcmUgfSksIF9qc3hzKFwidGRcIiwgeyBjbGFzc05hbWU6IGNscy5UYWJsZV9faXRlbSwgY2hpbGRyZW46IFtTaG90czIsIFwiIFwiLCBfanN4KFwiYnJcIiwge30pLCBTaG90MlBlcmNlbnQsIFwiJVwiXSB9KSwgX2pzeHMoXCJ0ZFwiLCB7IGNsYXNzTmFtZTogY2xzLlRhYmxlX19pdGVtLCBjaGlsZHJlbjogW1Nob3RzMywgXCIgXCIsIF9qc3goXCJiclwiLCB7fSksIFNob3QzUGVyY2VudCwgXCIlXCJdIH0pLCBfanN4cyhcInRkXCIsIHsgY2xhc3NOYW1lOiBjbHMuVGFibGVfX2l0ZW0sIGNoaWxkcmVuOiBbR29hbDIgKyBHb2FsMywgXCIvXCIsIFNob3QyICsgU2hvdDMsIF9qc3goXCJiclwiLCB7fSksICgoR29hbDIgKyBHb2FsMykgKiAxMDAgLyAoU2hvdDIgKyBTaG90MykpLnRvRml4ZWQoMSksIFwiJVwiXSB9KSwgX2pzeHMoXCJ0ZFwiLCB7IGNsYXNzTmFtZTogY2xzLlRhYmxlX19pdGVtLCBjaGlsZHJlbjogW1Nob3RzMSwgXCIgXCIsIF9qc3goXCJiclwiLCB7fSksIFNob3QxUGVyY2VudCwgXCIlXCJdIH0pLCBfanN4KFwidGRcIiwgeyBjbGFzc05hbWU6IGNscy5UYWJsZV9faXRlbSwgY2hpbGRyZW46IERlZlJlYm91bmQgfSksIF9qc3goXCJ0ZFwiLCB7IGNsYXNzTmFtZTogY2xzLlRhYmxlX19pdGVtLCBjaGlsZHJlbjogT2ZmUmVib3VuZCB9KSwgX2pzeChcInRkXCIsIHsgY2xhc3NOYW1lOiBjbHMuVGFibGVfX2l0ZW0sIGNoaWxkcmVuOiBSZWJvdW5kIH0pLCBfanN4KFwidGRcIiwgeyBjbGFzc05hbWU6IGNscy5UYWJsZV9faXRlbSwgY2hpbGRyZW46IEFzc2lzdCB9KSwgX2pzeChcInRkXCIsIHsgY2xhc3NOYW1lOiBjbHMuVGFibGVfX2l0ZW0sIGNoaWxkcmVuOiBTdGVhbCB9KSwgX2pzeChcInRkXCIsIHsgY2xhc3NOYW1lOiBjbHMuVGFibGVfX2l0ZW0sIGNoaWxkcmVuOiBUdXJub3ZlciB9KSwgX2pzeChcInRkXCIsIHsgY2xhc3NOYW1lOiBjbHMuVGFibGVfX2l0ZW0sIGNoaWxkcmVuOiBCbG9ja3MgfSksIF9qc3goXCJ0ZFwiLCB7IGNsYXNzTmFtZTogY2xzLlRhYmxlX19pdGVtLCBjaGlsZHJlbjogRm91bCB9KSwgX2pzeChcInRkXCIsIHsgY2xhc3NOYW1lOiBjbHMuVGFibGVfX2l0ZW0sIGNoaWxkcmVuOiBPcHBvbmVudEZvdWwgfSksIF9qc3goXCJ0ZFwiLCB7IGNsYXNzTmFtZTogY2xzLlRhYmxlX19pdGVtIH0pXSB9KSB9KV0gfSldIH0pKTtcbn07XG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgY2xhc3NOYW1lcyB9IGZyb20gJ3NoYXJlZC9saWIvY2xhc3NOYW1lcy9jbGFzc05hbWVzJztcbmltcG9ydCBjbHMgZnJvbSAnLi9TZWN0aW9uVGl0bGUubW9kdWxlLnNjc3MnO1xuZXhwb3J0IHZhciBTZWN0aW9uVGl0bGUgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgdGhlbWUgPSBfYS50aGVtZSwgY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lLCBjaGlsZHJlbiA9IF9hLmNoaWxkcmVuO1xuICAgIHJldHVybiAoX2pzeChcImgyXCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGNscy5TZWN0aW9uVGl0bGUsIHt9LCBbY2xzW3RoZW1lXV0pLCBjaGlsZHJlbjogY2hpbGRyZW4gfSkpO1xufTtcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBjbGFzc05hbWVzIH0gZnJvbSAnc2hhcmVkL2xpYi9jbGFzc05hbWVzL2NsYXNzTmFtZXMnO1xuaW1wb3J0IGNscyBmcm9tICcuL0dhbWVCYXIubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHsgR2FtZSB9IGZyb20gJ2NvbXBvbmVudHMvR2FtZS9HYW1lJztcbmltcG9ydCB7IEdpZiB9IGZyb20gJ2NvbXBvbmVudHMvR2lmL0dpZic7XG5pbXBvcnQgeyBHYW1lc0NvbnRleHQgfSBmcm9tICdhcHAvcHJvdmlkZXJzL0dhbWVzUHJvdmlkZXIvbGliL0dhbWVzQ29udGV4dCc7XG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdHJpbUdhbWVzIH0gZnJvbSAnc2hhcmVkL2xpYi90cmltR2FtZXMvdHJpbUdhbWVzJztcbmltcG9ydCB7IFNlY3Rpb25UaXRsZSB9IGZyb20gJ3NoYXJlZC91aS9TZWN0aW9uVGl0bGUvU2VjdGlvblRpdGxlJztcbmV4cG9ydCB2YXIgR2FtZUJhciA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsIHNldFByb3RvY29sU3RhdGUgPSBwcm9wcy5zZXRQcm90b2NvbFN0YXRlLCBwcm90b2NvbFN0YXRlID0gcHJvcHMucHJvdG9jb2xTdGF0ZTtcbiAgICB2YXIgZ2FtZXNBcnJheSA9IHVzZUNvbnRleHQoR2FtZXNDb250ZXh0KTtcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZShbXSksIHJlbmRlckdhbWVzID0gX2FbMF0sIHNldFJlbmRlckdhbWVzID0gX2FbMV07XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGdhbWVzQXJyYXkubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICBzZXRSZW5kZXJHYW1lcyh0cmltR2FtZXMoZ2FtZXNBcnJheSkpO1xuICAgICAgICB9XG4gICAgfSwgW2dhbWVzQXJyYXldKTtcbiAgICByZXR1cm4gKF9qc3hzKFwic2VjdGlvblwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjbHMuR2FtZUJhciwge30sIFtjbGFzc05hbWUgIT09IG51bGwgJiYgY2xhc3NOYW1lICE9PSB2b2lkIDAgPyBjbGFzc05hbWUgOiAnJ10pLCBpZDogXCJnYW1lQmFyXCIsIGNoaWxkcmVuOiBbX2pzeChTZWN0aW9uVGl0bGUsIHsgdGhlbWU6IFwiU2VjdGlvblRpdGxlX3Bvel9tYWluXCIgLyogU2VjdGlvblRpdGxlVGhlbWUuUE9aX01BSU4gKi8sIGNoaWxkcmVuOiBcIlxcdTA0MUFcXHUwNDMwXFx1MDQzQlxcdTA0MzVcXHUwNDNEXFx1MDQzNFxcdTA0MzBcXHUwNDQwXFx1MDQ0Q1wiIH0pLCBfanN4KEdpZiwge30pLCBfanN4KFwidWxcIiwgeyBjbGFzc05hbWU6IGNscy5HYW1lQmFyX193aWRnZXQsIGNoaWxkcmVuOiByZW5kZXJHYW1lcy5tYXAoZnVuY3Rpb24gKGdhbWUsIGluZGV4KSB7IHJldHVybiAoX2pzeChcImxpXCIsIHsgY2xhc3NOYW1lOiBjbHMuR2FtZUJhcl9faXRlbSwgY2hpbGRyZW46IF9qc3goR2FtZSwgeyBnYW1lOiBnYW1lLCBzZXRQcm90b2NvbFN0YXRlOiBzZXRQcm90b2NvbFN0YXRlLCBwcm90b2NvbFN0YXRlOiBwcm90b2NvbFN0YXRlIH0pIH0sIGluZGV4KSk7IH0pIH0pXSB9KSk7XG59O1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBGcmFnbWVudCBhcyBfRnJhZ21lbnQsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IGNsYXNzTmFtZXMgfSBmcm9tICdzaGFyZWQvbGliL2NsYXNzTmFtZXMvY2xhc3NOYW1lcyc7XG5pbXBvcnQgY2xzIGZyb20gJy4vR2FtZVByb3RvY29sLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSAnY29tcG9uZW50cy9UYWJsZS9UYWJsZSc7XG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tICdzaGFyZWQvdWkvTG9hZGVyL0xvYWRlcic7XG5leHBvcnQgdmFyIEdhbWVQcm90b2NvbCA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciBfYTtcbiAgICB2YXIgcHJvdG9jb2xTdGF0ZSA9IHByb3BzLnByb3RvY29sU3RhdGUsIHNldFByb3RvY29sU3RhdGUgPSBwcm9wcy5zZXRQcm90b2NvbFN0YXRlLCBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWU7XG4gICAgdmFyIG1vZHMgPSAoX2EgPSB7fSxcbiAgICAgICAgX2FbY2xzLm9wZW5lZF0gPSBwcm90b2NvbFN0YXRlLmlzT3BlbixcbiAgICAgICAgX2EpO1xuICAgIHZhciBjbG9zZVBvcHVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzZXRQcm90b2NvbFN0YXRlKF9fYXNzaWduKF9fYXNzaWduKHt9LCBwcm90b2NvbFN0YXRlKSwgeyBnYW1lSWQ6IG51bGwsIGdhbWVEYXRhOiBudWxsLCBnYW1lSW5mbzogbnVsbCwgaXNPcGVuOiBmYWxzZSB9KSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb3RvY29sU3RhdGUpO1xuICAgIH07XG4gICAgdmFyIG9uQ29udGVudENsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9O1xuICAgIHJldHVybiAoX2pzeChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjbHMuR2FtZVByb3RvY29sLCBtb2RzLCBbY2xhc3NOYW1lICE9PSBudWxsICYmIGNsYXNzTmFtZSAhPT0gdm9pZCAwID8gY2xhc3NOYW1lIDogJyddKSwgY2hpbGRyZW46IF9qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNscy5HYW1lUHJvdG9jb2xfX292ZXJsYXksIG9uQ2xpY2s6IGNsb3NlUG9wdXAsIGNoaWxkcmVuOiBfanN4KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbHMuR2FtZVByb3RvY29sX19jb250ZW50LCBvbkNsaWNrOiBvbkNvbnRlbnRDbGljaywgY2hpbGRyZW46IChwcm90b2NvbFN0YXRlLmdhbWVJbmZvICE9PSBudWxsICYmIHByb3RvY29sU3RhdGUuZ2FtZURhdGEgIT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgID8gX2pzeHMoX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBbX2pzeChUYWJsZSwgeyBnYW1lRGF0YTogcHJvdG9jb2xTdGF0ZS5nYW1lRGF0YS5HYW1lVGVhbXNbMF0sIGxvZ29UZWFtOiBwcm90b2NvbFN0YXRlLmdhbWVJbmZvLlRlYW1Mb2dvQSwgbmFtZVRlYW06IHByb3RvY29sU3RhdGUuZ2FtZUluZm8uVGVhbU5hbWVBcnUgfSksIF9qc3goVGFibGUsIHsgZ2FtZURhdGE6IHByb3RvY29sU3RhdGUuZ2FtZURhdGEuR2FtZVRlYW1zWzFdLCBsb2dvVGVhbTogcHJvdG9jb2xTdGF0ZS5nYW1lSW5mby5UZWFtTG9nb0IsIG5hbWVUZWFtOiBwcm90b2NvbFN0YXRlLmdhbWVJbmZvLlRlYW1OYW1lQnJ1IH0pXSB9KVxuICAgICAgICAgICAgICAgICAgICA6IF9qc3goTG9hZGVyLCB7fSkgfSkgfSkgfSkpO1xufTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc3JjLWNvbXBvbmVudHMtR2FtZS1HYW1lLW1vZHVsZV9fR2FtZS0tYThHaXcge1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogdmFyKC0tZ2FtZS13aWR0aCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIHNjcm9sbC1zbmFwLWFsaWduOiBzdGFydDtcbiAgc2Nyb2xsLXNuYXAtc3RvcDogYWx3YXlzO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYygxMDAlIC0gdmFyKC0tZ2FtZS13aWR0aCkpLzIpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnNyYy1jb21wb25lbnRzLUdhbWUtR2FtZS1tb2R1bGVfX0dhbWVfX3RpdGxlLS1aZzhjYiB7XG4gIGZvbnQ6IHZhcigtLWZvbnQtcyk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1zKTtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcbn1cbi5zcmMtY29tcG9uZW50cy1HYW1lLUdhbWUtbW9kdWxlX19HYW1lX19nYW1lQ29udGFpbmVyLS1SUk93TCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNDBweDtcbn1cbi5zcmMtY29tcG9uZW50cy1HYW1lLUdhbWUtbW9kdWxlX19HYW1lX190ZWFtSW1hZ2UtLWhMMzlWIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4uc3JjLWNvbXBvbmVudHMtR2FtZS1HYW1lLW1vZHVsZV9fR2FtZV9fc2NvcmUtLUUyZXVzIHtcbiAgZm9udDogdmFyKC0tZm9udC1sKTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXMpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xufVxuLnNyYy1jb21wb25lbnRzLUdhbWUtR2FtZS1tb2R1bGVfX0dhbWVfX3N0YXRJY29uLS1ZU0lhbyB7XG4gIGZpbGw6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9HYW1lL0dhbWUubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxzQ0FBQTtFQUNBLHdCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1REFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNFLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQ0FBQTtBQUNKO0FBRUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBQUo7QUFHRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FBREo7QUFJRTtFQUNFLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQ0FBQTtBQUZKO0FBS0U7RUFDRSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBSEpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLkdhbWUge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHdpZHRoOiB2YXIoLS1nYW1lLXdpZHRoKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0O1xcbiAgc2Nyb2xsLXNuYXAtc3RvcDogYWx3YXlzO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGMoMTAwJSAtIHZhcigtLWdhbWUtd2lkdGgpKSAvIDIpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG5cXG4gICZfX3RpdGxlIHtcXG4gICAgZm9udDogdmFyKC0tZm9udC1zKTtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXMpO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xcbiAgfVxcblxcbiAgJl9fZ2FtZUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNDBweDtcXG4gIH1cXG5cXG4gICZfX3RlYW1JbWFnZSB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgfVxcblxcbiAgJl9fc2NvcmUge1xcbiAgICBmb250OiB2YXIoLS1mb250LWwpO1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtcyk7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeS1jb2xvcik7XFxuICB9XFxuXFxuICAmX19zdGF0SWNvbiB7XFxuICAgIGZpbGw6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIkdhbWVcIjogYHNyYy1jb21wb25lbnRzLUdhbWUtR2FtZS1tb2R1bGVfX0dhbWUtLWE4R2l3YCxcblx0XCJHYW1lX190aXRsZVwiOiBgc3JjLWNvbXBvbmVudHMtR2FtZS1HYW1lLW1vZHVsZV9fR2FtZV9fdGl0bGUtLVpnOGNiYCxcblx0XCJHYW1lX19nYW1lQ29udGFpbmVyXCI6IGBzcmMtY29tcG9uZW50cy1HYW1lLUdhbWUtbW9kdWxlX19HYW1lX19nYW1lQ29udGFpbmVyLS1SUk93TGAsXG5cdFwiR2FtZV9fdGVhbUltYWdlXCI6IGBzcmMtY29tcG9uZW50cy1HYW1lLUdhbWUtbW9kdWxlX19HYW1lX190ZWFtSW1hZ2UtLWhMMzlWYCxcblx0XCJHYW1lX19zY29yZVwiOiBgc3JjLWNvbXBvbmVudHMtR2FtZS1HYW1lLW1vZHVsZV9fR2FtZV9fc2NvcmUtLUUyZXVzYCxcblx0XCJHYW1lX19zdGF0SWNvblwiOiBgc3JjLWNvbXBvbmVudHMtR2FtZS1HYW1lLW1vZHVsZV9fR2FtZV9fc3RhdEljb24tLVlTSWFvYFxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBrZXlmcmFtZXMgc3JjLWNvbXBvbmVudHMtR2lmLUdpZi1tb2R1bGVfX3Njcm9sbC1oYW5kLS1MWTZ6TCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoODBweCkgc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg4MHB4KSBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDIwJSwgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTc1cHgpIHNjYWxlKDAuNik7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICA4MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpIHNjYWxlKDAuNik7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KSBzY2FsZSgwLjYpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3JjLWNvbXBvbmVudHMtR2lmLUdpZi1tb2R1bGVfX3Njcm9sbC1jYXJkLS1MMENkNCB7XG4gIDAlLCA2MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxuICA4MCUsIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjQwcHgpO1xuICB9XG59XG4uc3JjLWNvbXBvbmVudHMtR2lmLUdpZi1tb2R1bGVfX0dpZi0tX3J3N3Age1xuICB3aWR0aDogdmFyKC0tZ2FtZS13aWR0aCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbn1cbi5zcmMtY29tcG9uZW50cy1HaWYtR2lmLW1vZHVsZV9fR2lmX19pdGVtLS1PTTZjaSB7XG4gIHdpZHRoOiA0MnB4O1xuICBoZWlnaHQ6IDQycHg7XG59XG4uc3JjLWNvbXBvbmVudHMtR2lmLUdpZi1tb2R1bGVfX0dpZl9faGFuZC0tb0ZHWm0ge1xuICBmaWxsOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgYW5pbWF0aW9uOiBzcmMtY29tcG9uZW50cy1HaWYtR2lmLW1vZHVsZV9fc2Nyb2xsLWhhbmQtLUxZNnpMIDJzIGluZmluaXRlO1xufVxuLnNyYy1jb21wb25lbnRzLUdpZi1HaWYtbW9kdWxlX19HaWZfX2NhcmQtLUVEWWFjIHtcbiAgZmlsbDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBhbmltYXRpb246IHNyYy1jb21wb25lbnRzLUdpZi1HaWYtbW9kdWxlX19zY3JvbGwtY2FyZC0tTDBDZDQgMnMgaW5maW5pdGU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9HaWYvR2lmLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0U7SUFDRSxvQ0FBQTtJQUNBLFVBQUE7RUFDRjtFQUVBO0lBQ0Usb0NBQUE7SUFDQSxVQUFBO0VBQUY7RUFHQTtJQUNFLHVDQUFBO0lBQ0EsVUFBQTtFQURGO0VBSUE7SUFDRSxxQ0FBQTtJQUNBLFVBQUE7RUFGRjtFQUtBO0lBQ0UscUNBQUE7SUFDQSxVQUFBO0VBSEY7QUFDRjtBQU1BO0VBQ0U7SUFDRSx3QkFBQTtFQUpGO0VBT0E7SUFDRSw2QkFBQTtFQUxGO0FBQ0Y7QUFRQTtFQUNFLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0FBTkY7QUFRRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBTko7QUFTRTtFQUNFLDBCQUFBO0VBQ0Esd0VBQUE7QUFQSjtBQVVFO0VBQ0UsOEJBQUE7RUFDQSx3RUFBQTtBQVJKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBrZXlmcmFtZXMgc2Nyb2xsLWhhbmQge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoODBweCkgc2NhbGUoMSk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICAxMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoODBweCkgc2NhbGUoMSk7XFxuICAgIG9wYWNpdHk6IDFcXG4gIH1cXG5cXG4gIDIwJSwgNjAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE3NXB4KSBzY2FsZSguNik7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICA4MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KSBzY2FsZSguNik7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCkgc2NhbGUoLjYpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNjcm9sbC1jYXJkIHtcXG4gIDAlLCA2MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMClcXG4gIH1cXG5cXG4gIDgwJSwgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjQwcHgpXFxuICB9XFxufVxcblxcbi5HaWYge1xcbiAgd2lkdGg6IHZhcigtLWdhbWUtd2lkdGgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG5cXG4gICZfX2l0ZW0ge1xcbiAgICB3aWR0aDogNDJweDtcXG4gICAgaGVpZ2h0OiA0MnB4O1xcbiAgfVxcblxcbiAgJl9faGFuZCB7XFxuICAgIGZpbGw6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgICBhbmltYXRpb246IHNjcm9sbC1oYW5kIDJzIGluZmluaXRlXFxuICB9XFxuXFxuICAmX19jYXJkIHtcXG4gICAgZmlsbDogcmdiYSgyNTUgMjU1IDI1NSAvIDMwJSk7XFxuICAgIGFuaW1hdGlvbjogc2Nyb2xsLWNhcmQgMnMgaW5maW5pdGVcXG4gIH1cXG5cXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiR2lmXCI6IGBzcmMtY29tcG9uZW50cy1HaWYtR2lmLW1vZHVsZV9fR2lmLS1fcnc3cGAsXG5cdFwiR2lmX19pdGVtXCI6IGBzcmMtY29tcG9uZW50cy1HaWYtR2lmLW1vZHVsZV9fR2lmX19pdGVtLS1PTTZjaWAsXG5cdFwiR2lmX19oYW5kXCI6IGBzcmMtY29tcG9uZW50cy1HaWYtR2lmLW1vZHVsZV9fR2lmX19oYW5kLS1vRkdabWAsXG5cdFwic2Nyb2xsLWhhbmRcIjogYHNyYy1jb21wb25lbnRzLUdpZi1HaWYtbW9kdWxlX19zY3JvbGwtaGFuZC0tTFk2ekxgLFxuXHRcIkdpZl9fY2FyZFwiOiBgc3JjLWNvbXBvbmVudHMtR2lmLUdpZi1tb2R1bGVfX0dpZl9fY2FyZC0tRURZYWNgLFxuXHRcInNjcm9sbC1jYXJkXCI6IGBzcmMtY29tcG9uZW50cy1HaWYtR2lmLW1vZHVsZV9fc2Nyb2xsLWNhcmQtLUwwQ2Q0YFxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zcmMtY29tcG9uZW50cy1QZXJzb25Qcm90b2NvbC1QZXJzb25Qcm90b2NvbC1tb2R1bGVfX1BlcnNvblByb3RvY29sX19zaGlydC0tbzRycEkge1xuICB3aWR0aDogMzBweDtcbiAgYXNwZWN0LXJhdGlvOiA2OS84OTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuLnNyYy1jb21wb25lbnRzLVBlcnNvblByb3RvY29sLVBlcnNvblByb3RvY29sLW1vZHVsZV9fUGVyc29uUHJvdG9jb2xfX2ltYWdlLS1UYjBqZyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cbi5zcmMtY29tcG9uZW50cy1QZXJzb25Qcm90b2NvbC1QZXJzb25Qcm90b2NvbC1tb2R1bGVfX1BlcnNvblByb3RvY29sX19pdGVtLS15d1lLdSB7XG4gIHBhZGRpbmc6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIGZvbnQ6IHZhcigtLWZvbnQtcyk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnktY29sb3IpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pbnZlcnRlZC1iZy1jb2xvcik7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9QZXJzb25Qcm90b2NvbC9QZXJzb25Qcm90b2NvbC5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FBQUo7QUFHRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtBQURKO0FBSUU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLDBDQUFBO0FBRkpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLlBlcnNvblByb3RvY29sIHtcXG4gICZfX3NoaXJ0IHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGFzcGVjdC1yYXRpbzogNjkvODk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIH1cXG5cXG4gICZfX2ltYWdlIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgfVxcblxcbiAgJl9faXRlbSB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIGZvbnQ6IHZhcigtLWZvbnQtcyk7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnktY29sb3IpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pbnZlcnRlZC1iZy1jb2xvcik7XFxuICB9XFxuXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIlBlcnNvblByb3RvY29sX19zaGlydFwiOiBgc3JjLWNvbXBvbmVudHMtUGVyc29uUHJvdG9jb2wtUGVyc29uUHJvdG9jb2wtbW9kdWxlX19QZXJzb25Qcm90b2NvbF9fc2hpcnQtLW80cnBJYCxcblx0XCJQZXJzb25Qcm90b2NvbF9faW1hZ2VcIjogYHNyYy1jb21wb25lbnRzLVBlcnNvblByb3RvY29sLVBlcnNvblByb3RvY29sLW1vZHVsZV9fUGVyc29uUHJvdG9jb2xfX2ltYWdlLS1UYjBqZ2AsXG5cdFwiUGVyc29uUHJvdG9jb2xfX2l0ZW1cIjogYHNyYy1jb21wb25lbnRzLVBlcnNvblByb3RvY29sLVBlcnNvblByb3RvY29sLW1vZHVsZV9fUGVyc29uUHJvdG9jb2xfX2l0ZW0tLXl3WUt1YFxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zcmMtY29tcG9uZW50cy1UYWJsZS1UYWJsZS1tb2R1bGVfX1RhYmxlLS1hRGVvcSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDIwcHg7XG59XG4uc3JjLWNvbXBvbmVudHMtVGFibGUtVGFibGUtbW9kdWxlX19UYWJsZV9faGVhZGluZy0tS0NSMjkge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAyMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNyYy1jb21wb25lbnRzLVRhYmxlLVRhYmxlLW1vZHVsZV9fVGFibGVfX2xvZ28tLXp2YXlQIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cbi5zcmMtY29tcG9uZW50cy1UYWJsZS1UYWJsZS1tb2R1bGVfX1RhYmxlX19jb250YWluZXItLWlmTVpTIHtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG4uc3JjLWNvbXBvbmVudHMtVGFibGUtVGFibGUtbW9kdWxlX19UYWJsZV9fcm93LS1VWDhsZyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWludmVydGVkLWJnLWNvbG9yKTtcbn1cbi5zcmMtY29tcG9uZW50cy1UYWJsZS1UYWJsZS1tb2R1bGVfX1RhYmxlX190aXRsZS0tbVlXVGcge1xuICBwYWRkaW5nOiA1cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW52ZXJ0ZWQtYmctY29sb3IpO1xuICBmb250OiB2YXIoLS1mb250LW0pO1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbCk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnktY29sb3IpO1xufVxuLnNyYy1jb21wb25lbnRzLVRhYmxlLVRhYmxlLW1vZHVsZV9fVGFibGVfX2l0ZW0tLWFCWUcwIHtcbiAgcGFkZGluZzogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQ6IHZhcigtLWZvbnQtcyk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnktY29sb3IpO1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWludmVydGVkLWJnLWNvbG9yKTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL1RhYmxlL1RhYmxlLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUNGO0FBQ0U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQUNKO0FBRUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUFKO0FBR0U7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQURKO0FBSUU7RUFDRSwwQ0FBQTtBQUZKO0FBS0U7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0FBSEo7QUFNRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7QUFKSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuVGFibGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuXFxuICAmX19oZWFkaW5nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gICZfX2xvZ28ge1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgfVxcblxcbiAgJl9fY29udGFpbmVyIHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICB9XFxuXFxuICAmX19yb3cge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pbnZlcnRlZC1iZy1jb2xvcilcXG4gIH1cXG5cXG4gICZfX3RpdGxlIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWludmVydGVkLWJnLWNvbG9yKTtcXG4gICAgZm9udDogdmFyKC0tZm9udC1tKTtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWwpO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5LWNvbG9yKTtcXG4gIH1cXG5cXG4gICZfX2l0ZW0ge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udDogdmFyKC0tZm9udC1zKTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeS1jb2xvcik7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW52ZXJ0ZWQtYmctY29sb3IpXFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIlRhYmxlXCI6IGBzcmMtY29tcG9uZW50cy1UYWJsZS1UYWJsZS1tb2R1bGVfX1RhYmxlLS1hRGVvcWAsXG5cdFwiVGFibGVfX2hlYWRpbmdcIjogYHNyYy1jb21wb25lbnRzLVRhYmxlLVRhYmxlLW1vZHVsZV9fVGFibGVfX2hlYWRpbmctLUtDUjI5YCxcblx0XCJUYWJsZV9fbG9nb1wiOiBgc3JjLWNvbXBvbmVudHMtVGFibGUtVGFibGUtbW9kdWxlX19UYWJsZV9fbG9nby0tenZheVBgLFxuXHRcIlRhYmxlX19jb250YWluZXJcIjogYHNyYy1jb21wb25lbnRzLVRhYmxlLVRhYmxlLW1vZHVsZV9fVGFibGVfX2NvbnRhaW5lci0taWZNWlNgLFxuXHRcIlRhYmxlX19yb3dcIjogYHNyYy1jb21wb25lbnRzLVRhYmxlLVRhYmxlLW1vZHVsZV9fVGFibGVfX3Jvdy0tVVg4bGdgLFxuXHRcIlRhYmxlX190aXRsZVwiOiBgc3JjLWNvbXBvbmVudHMtVGFibGUtVGFibGUtbW9kdWxlX19UYWJsZV9fdGl0bGUtLW1ZV1RnYCxcblx0XCJUYWJsZV9faXRlbVwiOiBgc3JjLWNvbXBvbmVudHMtVGFibGUtVGFibGUtbW9kdWxlX19UYWJsZV9faXRlbS0tYUJZRzBgXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNyYy1zaGFyZWQtdWktU2VjdGlvblRpdGxlLVNlY3Rpb25UaXRsZS1tb2R1bGVfX1NlY3Rpb25UaXRsZS0tUzE4YU0ge1xuICBmb250OiB2YXIoLS1mb250LWwpO1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQteGwpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5LWNvbG9yKTtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLnNyYy1zaGFyZWQtdWktU2VjdGlvblRpdGxlLVNlY3Rpb25UaXRsZS1tb2R1bGVfX1NlY3Rpb25UaXRsZV9jbGVhci0tUHBtU3gge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cbi5zcmMtc2hhcmVkLXVpLVNlY3Rpb25UaXRsZS1TZWN0aW9uVGl0bGUtbW9kdWxlX19TZWN0aW9uVGl0bGVfcG96X21haW4tLWhqU2lfIHtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeS1jb2xvcik7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uc3JjLXNoYXJlZC11aS1TZWN0aW9uVGl0bGUtU2VjdGlvblRpdGxlLW1vZHVsZV9fU2VjdGlvblRpdGxlX3Bvel9yb2FzdGVyLS1EQ09uRiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXF1YXRyZW5hcnktY29sb3IpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3NoYXJlZC91aS9TZWN0aW9uVGl0bGUvU2VjdGlvblRpdGxlLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQUNGO0FBQ0U7RUFDRSxvQkFBQTtBQUNKO0FBRUU7RUFDRSxnQ0FBQTtFQUNBLHlCQUFBO0FBQUo7QUFHRTtFQUNFLG1DQUFBO0FBREpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLlNlY3Rpb25UaXRsZSB7XFxuICBmb250OiB2YXIoLS1mb250LWwpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXhsKTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnktY29sb3IpO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNHB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG5cXG4gICZfY2xlYXIge1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gIH1cXG5cXG4gICZfcG96X21haW4ge1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5LWNvbG9yKTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIH1cXG5cXG4gICZfcG96X3JvYXN0ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1xdWF0cmVuYXJ5LWNvbG9yKTtcXG4gIH1cXG5cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiU2VjdGlvblRpdGxlXCI6IGBzcmMtc2hhcmVkLXVpLVNlY3Rpb25UaXRsZS1TZWN0aW9uVGl0bGUtbW9kdWxlX19TZWN0aW9uVGl0bGUtLVMxOGFNYCxcblx0XCJTZWN0aW9uVGl0bGVfY2xlYXJcIjogYHNyYy1zaGFyZWQtdWktU2VjdGlvblRpdGxlLVNlY3Rpb25UaXRsZS1tb2R1bGVfX1NlY3Rpb25UaXRsZV9jbGVhci0tUHBtU3hgLFxuXHRcIlNlY3Rpb25UaXRsZV9wb3pfbWFpblwiOiBgc3JjLXNoYXJlZC11aS1TZWN0aW9uVGl0bGUtU2VjdGlvblRpdGxlLW1vZHVsZV9fU2VjdGlvblRpdGxlX3Bvel9tYWluLS1oalNpX2AsXG5cdFwiU2VjdGlvblRpdGxlX3Bvel9yb2FzdGVyXCI6IGBzcmMtc2hhcmVkLXVpLVNlY3Rpb25UaXRsZS1TZWN0aW9uVGl0bGUtbW9kdWxlX19TZWN0aW9uVGl0bGVfcG96X3JvYXN0ZXItLURDT25GYFxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zcmMtd2lkZ2V0cy1HYW1lQmFyLXVpLUdhbWVCYXItbW9kdWxlX19HYW1lQmFyLS1BNkhQNiB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG59XG4uc3JjLXdpZGdldHMtR2FtZUJhci11aS1HYW1lQmFyLW1vZHVsZV9fR2FtZUJhcl9fd2lkZ2V0LS1ISnA1UiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgd2lkdGg6IHZhcigtLWdhbWUtd2lkdGgpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwMHB4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBzY3JvbGwtc25hcC10eXBlOiB4IG1hbmRhdG9yeTtcbn1cbi5zcmMtd2lkZ2V0cy1HYW1lQmFyLXVpLUdhbWVCYXItbW9kdWxlX19HYW1lQmFyX19pdGVtLS1IMW5xVCB7XG4gIHdpZHRoOiBtaW4tY29udGVudDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy93aWRnZXRzL0dhbWVCYXIvdWkvR2FtZUJhci5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFDRjtBQUNFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7QUFDSjtBQUVFO0VBQ0Usa0JBQUE7QUFBSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuR2FtZUJhciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG5cXG4gICZfX3dpZGdldCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgd2lkdGg6IHZhcigtLWdhbWUtd2lkdGgpO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwMHB4O1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICBzY3JvbGwtc25hcC10eXBlOiB4IG1hbmRhdG9yeTtcXG4gIH1cXG5cXG4gICZfX2l0ZW0ge1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIkdhbWVCYXJcIjogYHNyYy13aWRnZXRzLUdhbWVCYXItdWktR2FtZUJhci1tb2R1bGVfX0dhbWVCYXItLUE2SFA2YCxcblx0XCJHYW1lQmFyX193aWRnZXRcIjogYHNyYy13aWRnZXRzLUdhbWVCYXItdWktR2FtZUJhci1tb2R1bGVfX0dhbWVCYXJfX3dpZGdldC0tSEpwNVJgLFxuXHRcIkdhbWVCYXJfX2l0ZW1cIjogYHNyYy13aWRnZXRzLUdhbWVCYXItdWktR2FtZUJhci1tb2R1bGVfX0dhbWVCYXJfX2l0ZW0tLUgxbnFUYFxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zcmMtd2lkZ2V0cy1HYW1lUHJvdG9jb2wtdWktR2FtZVByb3RvY29sLW1vZHVsZV9fR2FtZVByb3RvY29sLS1Sb2xuMyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xuICB6LWluZGV4OiAtMTtcbn1cbi5zcmMtd2lkZ2V0cy1HYW1lUHJvdG9jb2wtdWktR2FtZVByb3RvY29sLW1vZHVsZV9fR2FtZVByb3RvY29sX19vdmVybGF5LS1SY1ZkSCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG4uc3JjLXdpZGdldHMtR2FtZVByb3RvY29sLXVpLUdhbWVQcm90b2NvbC1tb2R1bGVfX0dhbWVQcm90b2NvbF9fY29udGVudC0tdnN3NVoge1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXgtd2lkdGg6IDkwJTtcbiAgbWF4LWhlaWdodDogNzAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDIwcHg7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi5zcmMtd2lkZ2V0cy1HYW1lUHJvdG9jb2wtdWktR2FtZVByb3RvY29sLW1vZHVsZV9fb3BlbmVkLS1JY2NyNiB7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IHZhcigtLW1vZGFsLXotaW5kZXgpO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cbi5zcmMtd2lkZ2V0cy1HYW1lUHJvdG9jb2wtdWktR2FtZVByb3RvY29sLW1vZHVsZV9fb3BlbmVkLS1JY2NyNiAuc3JjLXdpZGdldHMtR2FtZVByb3RvY29sLXVpLUdhbWVQcm90b2NvbC1tb2R1bGVfX0dhbWVQcm90b2NvbF9fY29udGVudC0tdnN3NVoge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3dpZGdldHMvR2FtZVByb3RvY29sL3VpL0dhbWVQcm90b2NvbC5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FBQ0Y7QUFDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtBQUNKO0FBRUU7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUlBO0VBQ0UsVUFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7QUFERjtBQUdFO0VBQ0UsbUJBQUE7QUFESlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuR2FtZVByb3RvY29sIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IC40cyBlYXNlO1xcbiAgei1pbmRleDogLTE7XFxuXFxuICAmX19vdmVybGF5IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgNjAlKTtcXG4gIH1cXG5cXG4gICZfX2NvbnRlbnQge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBtYXgtd2lkdGg6IDkwJTtcXG4gICAgbWF4LWhlaWdodDogNzAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoLjUpO1xcbiAgICB0cmFuc2l0aW9uOiAuNHMgZWFzZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgfVxcbn1cXG5cXG4ub3BlbmVkIHtcXG4gIG9wYWNpdHk6IDE7XFxuICB6LWluZGV4OiB2YXIoLS1tb2RhbC16LWluZGV4KTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcblxcbiAgLkdhbWVQcm90b2NvbF9fY29udGVudCB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIkdhbWVQcm90b2NvbFwiOiBgc3JjLXdpZGdldHMtR2FtZVByb3RvY29sLXVpLUdhbWVQcm90b2NvbC1tb2R1bGVfX0dhbWVQcm90b2NvbC0tUm9sbjNgLFxuXHRcIkdhbWVQcm90b2NvbF9fb3ZlcmxheVwiOiBgc3JjLXdpZGdldHMtR2FtZVByb3RvY29sLXVpLUdhbWVQcm90b2NvbC1tb2R1bGVfX0dhbWVQcm90b2NvbF9fb3ZlcmxheS0tUmNWZEhgLFxuXHRcIkdhbWVQcm90b2NvbF9fY29udGVudFwiOiBgc3JjLXdpZGdldHMtR2FtZVByb3RvY29sLXVpLUdhbWVQcm90b2NvbC1tb2R1bGVfX0dhbWVQcm90b2NvbF9fY29udGVudC0tdnN3NVpgLFxuXHRcIm9wZW5lZFwiOiBgc3JjLXdpZGdldHMtR2FtZVByb3RvY29sLXVpLUdhbWVQcm90b2NvbC1tb2R1bGVfX29wZW5lZC0tSWNjcjZgXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9HYW1lLm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vR2FtZS5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9HYW1lLm1vZHVsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vR2lmLm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vR2lmLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0dpZi5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1BlcnNvblByb3RvY29sLm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vUGVyc29uUHJvdG9jb2wubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vUGVyc29uUHJvdG9jb2wubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9UYWJsZS5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHA7XG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1RhYmxlLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1RhYmxlLm1vZHVsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU2VjdGlvblRpdGxlLm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU2VjdGlvblRpdGxlLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1NlY3Rpb25UaXRsZS5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0dhbWVCYXIubW9kdWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwO1xuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9HYW1lQmFyLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0dhbWVCYXIubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9HYW1lUHJvdG9jb2wubW9kdWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwO1xuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9HYW1lUHJvdG9jb2wubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vR2FtZVByb3RvY29sLm1vZHVsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiZXhwb3J0IHZhciB0cmltR2FtZXMgPSBmdW5jdGlvbiAoZ2FtZXNBcnJheSkge1xuICAgIHZhciByZW5kZXJBcnJheSA9IFtdO1xuICAgIHZhciByZWNlbnRHYW1lcyA9IGdhbWVzQXJyYXlcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIEdhbWVTdGF0dXMgPSBfYS5HYW1lU3RhdHVzO1xuICAgICAgICByZXR1cm4gR2FtZVN0YXR1cyA9PT0gMTtcbiAgICB9KVxuICAgICAgICAuc2xpY2UoLTYpO1xuICAgIHZhciBuZXh0R2FtZSA9IGdhbWVzQXJyYXlcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIEdhbWVTdGF0dXMgPSBfYS5HYW1lU3RhdHVzO1xuICAgICAgICByZXR1cm4gR2FtZVN0YXR1cyA9PT0gMDtcbiAgICB9KVswXTtcbiAgICByZWNlbnRHYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChnYW1lKSB7XG4gICAgICAgIHJlbmRlckFycmF5LnVuc2hpZnQoZ2FtZSk7XG4gICAgfSk7XG4gICAgcmVuZGVyQXJyYXkudW5zaGlmdChuZXh0R2FtZSk7XG4gICAgcmV0dXJuIHJlbmRlckFycmF5O1xufTtcbiIsImV4cG9ydCB7IEdhbWVCYXIgfSBmcm9tICcuL3VpL0dhbWVCYXInO1xuIl0sIm5hbWVzIjpbIl9fYXNzaWduIiwiT2JqZWN0IiwiYXNzaWduIiwidCIsInMiLCJpIiwibiIsImFyZ3VtZW50cyIsImxlbmd0aCIsInAiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJhcHBseSIsIl9fYXdhaXRlciIsInRoaXNBcmciLCJfYXJndW1lbnRzIiwiUCIsImdlbmVyYXRvciIsImFkb3B0IiwidmFsdWUiLCJyZXNvbHZlIiwiUHJvbWlzZSIsInJlamVjdCIsImZ1bGZpbGxlZCIsInN0ZXAiLCJuZXh0IiwiZSIsInJlamVjdGVkIiwicmVzdWx0IiwiZG9uZSIsInRoZW4iLCJfX2dlbmVyYXRvciIsImJvZHkiLCJfIiwibGFiZWwiLCJzZW50IiwidHJ5cyIsIm9wcyIsImYiLCJ5IiwiZyIsInZlcmIiLCJTeW1ib2wiLCJpdGVyYXRvciIsInYiLCJvcCIsIlR5cGVFcnJvciIsInBvcCIsInB1c2giLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwibWFpbkFwaSIsInVzZVByb3RvY29sIiwiX3RoaXMiLCJfYSIsImlzT3BlbiIsImdhbWVJZCIsImdhbWVJbmZvIiwiZ2FtZURhdGEiLCJwcm90b2NvbFN0YXRlIiwic2V0UHJvdG9jb2xTdGF0ZSIsImZldGNoR2FtZSIsImdldEdhbWVQcm90b2NvbCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJqc3giLCJfanN4IiwianN4cyIsIl9qc3hzIiwiY2xhc3NOYW1lcyIsImNscyIsIkJ1dHRvbiIsIlRoZW1lQnV0dG9uIiwiU3RhdEljb24iLCJHYW1lIiwicHJvcHMiLCJnYW1lIiwiY2xhc3NOYW1lIiwiR2FtZUlEIiwiRGlzcGxheURhdGVUaW1lTXNrIiwiVGVhbUxvZ29BIiwiVGVhbUxvZ29CIiwiU2NvcmVBIiwiU2NvcmVCIiwib25TdGF0T3BlbiIsImNoaWxkcmVuIiwiR2FtZV9fdGl0bGUiLCJHYW1lX19nYW1lQ29udGFpbmVyIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjb25jYXQiLCJHYW1lX190ZWFtSW1hZ2UiLCJHYW1lX19zY29yZSIsIm9uQ2xpY2siLCJ0aGVtZSIsIlBPWl9HQU1FIiwiR2FtZV9fc3RhdEljb24iLCJHaWYiLCJHaWZfX2l0ZW0iLCJ2aWV3Qm94IiwiZ2lmX19jYXJkIiwieCIsIndpZHRoIiwiaGVpZ2h0IiwicngiLCJHaWZfX2NhcmQiLCJHaWZfX2hhbmQiLCJkIiwiUGVyc29uUHJvdG9jb2wiLCJQbGF5ZXJOdW1iZXIiLCJQZXJzb25JRCIsIlBlcnNvbk5hbWVSdSIsIlBsYXllZFRpbWUiLCJQb2ludHMiLCJTaG90czEiLCJTaG90czIiLCJTaG90czMiLCJHb2FsMiIsIkdvYWwzIiwiU2hvdDIiLCJTaG90MyIsIkRlZlJlYm91bmQiLCJPZmZSZWJvdW5kIiwiUmVib3VuZCIsIkFzc2lzdCIsIlN0ZWFsIiwiVHVybm92ZXIiLCJCbG9ja3MiLCJGb3VsIiwiT3Bwb25lbnRGb3VsIiwiUGx1c01pbnVzIiwicHJvdG9jb2wiLCJQZXJzb25Qcm90b2NvbF9faXRlbSIsIlBlcnNvblByb3RvY29sX19zaGlydCIsIlBlcnNvblByb3RvY29sX19pbWFnZSIsIl9fcmVzdCIsImluZGV4T2YiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsImNyZWF0ZUVsZW1lbnQiLCJfY3JlYXRlRWxlbWVudCIsIlNlY3Rpb25UaXRsZSIsIlRhYmxlIiwibG9nb1RlYW0iLCJuYW1lVGVhbSIsIlNjb3JlIiwiU2hvdDFQZXJjZW50IiwiU2hvdDJQZXJjZW50IiwiU2hvdDNQZXJjZW50IiwiUGxheWVycyIsIlRhYmxlX19oZWFkaW5nIiwiVGFibGVfX2xvZ28iLCJzcmMiLCJhbHQiLCJUYWJsZV9fdGVhbSIsIlRhYmxlX19jb250YWluZXIiLCJUYWJsZV9fcm93Iiwicm93U3BhbiIsImNvbFNwYW4iLCJUYWJsZV9fdGl0bGUiLCJ0aXRsZSIsIm1hcCIsImluZGV4IiwicGxheWVyUHJvcHMiLCJrZXkiLCJUYWJsZV9faXRlbSIsInRvRml4ZWQiLCJHYW1lc0NvbnRleHQiLCJ1c2VDb250ZXh0IiwidHJpbUdhbWVzIiwiR2FtZUJhciIsImdhbWVzQXJyYXkiLCJyZW5kZXJHYW1lcyIsInNldFJlbmRlckdhbWVzIiwiaWQiLCJHYW1lQmFyX193aWRnZXQiLCJHYW1lQmFyX19pdGVtIiwiRnJhZ21lbnQiLCJfRnJhZ21lbnQiLCJMb2FkZXIiLCJHYW1lUHJvdG9jb2wiLCJtb2RzIiwib3BlbmVkIiwiY2xvc2VQb3B1cCIsIm9uQ29udGVudENsaWNrIiwic3RvcFByb3BhZ2F0aW9uIiwiR2FtZVByb3RvY29sX19vdmVybGF5IiwiR2FtZVByb3RvY29sX19jb250ZW50IiwiR2FtZVRlYW1zIiwiVGVhbU5hbWVBcnUiLCJUZWFtTmFtZUJydSJdLCJzb3VyY2VSb290IjoiIn0=
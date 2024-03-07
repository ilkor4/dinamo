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
          case 1:
            return [2 /*return*/, _a.sent()];
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

/***/ "./src/entities/Game/Game.tsx":
/*!************************************!*\
  !*** ./src/entities/Game/Game.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Game: () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var _Game_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Game.module.scss */ "./src/entities/Game/Game.module.scss");
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

/***/ "./src/entities/Gif/Gif.tsx":
/*!**********************************!*\
  !*** ./src/entities/Gif/Gif.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gif: () => (/* binding */ Gif)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var _Gif_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Gif.module.scss */ "./src/entities/Gif/Gif.module.scss");



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

/***/ "./src/entities/PersonProtocol/PersonProtocol.tsx":
/*!********************************************************!*\
  !*** ./src/entities/PersonProtocol/PersonProtocol.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PersonProtocol: () => (/* binding */ PersonProtocol)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var _PersonProtocol_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PersonProtocol.module.scss */ "./src/entities/PersonProtocol/PersonProtocol.module.scss");



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
/* harmony import */ var entities_Game_Game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! entities/Game/Game */ "./src/entities/Game/Game.tsx");
/* harmony import */ var entities_Gif_Gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! entities/Gif/Gif */ "./src/entities/Gif/Gif.tsx");
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
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(entities_Gif_Gif__WEBPACK_IMPORTED_MODULE_4__.Gif, {
      className: _GameBar_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].GameBar__gif
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", {
      className: _GameBar_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].GameBar__widget,
      children: renderGames.map(function (game, index) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
          className: _GameBar_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].GameBar__item,
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(entities_Game_Game__WEBPACK_IMPORTED_MODULE_3__.Game, {
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
/* harmony import */ var widgets_Table_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! widgets/Table/Table */ "./src/widgets/Table/Table.tsx");
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
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(widgets_Table_Table__WEBPACK_IMPORTED_MODULE_3__.Table, {
            gameData: protocolState.gameData.GameTeams[0],
            logoTeam: protocolState.gameInfo.TeamLogoA,
            nameTeam: protocolState.gameInfo.TeamNameAru
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(widgets_Table_Table__WEBPACK_IMPORTED_MODULE_3__.Table, {
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

/***/ "./src/widgets/Table/Table.tsx":
/*!*************************************!*\
  !*** ./src/widgets/Table/Table.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Table: () => (/* binding */ Table)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/lib/classNames/classNames */ "./src/shared/lib/classNames/classNames.ts");
/* harmony import */ var _Table_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Table.module.scss */ "./src/widgets/Table/Table.module.scss");
/* harmony import */ var shared_ui_SectionTitle_SectionTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/ui/SectionTitle/SectionTitle */ "./src/shared/ui/SectionTitle/SectionTitle.tsx");
/* harmony import */ var entities_PersonProtocol_PersonProtocol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! entities/PersonProtocol/PersonProtocol */ "./src/entities/PersonProtocol/PersonProtocol.tsx");
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
          return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(entities_PersonProtocol_PersonProtocol__WEBPACK_IMPORTED_MODULE_5__.PersonProtocol, __assign({}, playerProps, {
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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Game/Game.module.scss":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Game/Game.module.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, `.src-entities-Game-Game-module__Game--_R1D0 {
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
.src-entities-Game-Game-module__Game__title--xWUCz {
  font: var(--font-s);
  font-weight: var(--font-weight-s);
  color: var(--text-secondary-color);
}
.src-entities-Game-Game-module__Game__gameContainer--KuZyi {
  display: flex;
  align-items: center;
  gap: 40px;
}
.src-entities-Game-Game-module__Game__teamImage--NZ4bH {
  width: 50px;
  height: 50px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
.src-entities-Game-Game-module__Game__score--E7PYU {
  font: var(--font-l);
  font-weight: var(--font-weight-s);
  color: var(--text-secondary-color);
}
.src-entities-Game-Game-module__Game__statIcon--ym4bD {
  fill: var(--secondary-color);
  width: 30px;
  height: 30px;
}`, "",{"version":3,"sources":["webpack://./src/entities/Game/Game.module.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,wBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,SAAA;EACA,sCAAA;EACA,wBAAA;EACA,wBAAA;EACA,uDAAA;EACA,mBAAA;AACF;AACE;EACE,mBAAA;EACA,iCAAA;EACA,kCAAA;AACJ;AAEE;EACE,aAAA;EACA,mBAAA;EACA,SAAA;AAAJ;AAGE;EACE,WAAA;EACA,YAAA;EACA,wBAAA;EACA,2BAAA;EACA,4BAAA;AADJ;AAIE;EACE,mBAAA;EACA,iCAAA;EACA,kCAAA;AAFJ;AAKE;EACE,4BAAA;EACA,WAAA;EACA,YAAA;AAHJ","sourcesContent":[".Game {\n  padding: 10px;\n  width: var(--game-width);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  background-color: var(--primary-color);\n  scroll-snap-align: start;\n  scroll-snap-stop: always;\n  transform: translateX(calc(100% - var(--game-width)) / 2);\n  border-radius: 10px;\n\n  &__title {\n    font: var(--font-s);\n    font-weight: var(--font-weight-s);\n    color: var(--text-secondary-color);\n  }\n\n  &__gameContainer {\n    display: flex;\n    align-items: center;\n    gap: 40px;\n  }\n\n  &__teamImage {\n    width: 50px;\n    height: 50px;\n    background-size: contain;\n    background-position: center;\n    background-repeat: no-repeat;\n  }\n\n  &__score {\n    font: var(--font-l);\n    font-weight: var(--font-weight-s);\n    color: var(--text-secondary-color);\n  }\n\n  &__statIcon {\n    fill: var(--secondary-color);\n    width: 30px;\n    height: 30px;\n  }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Game": `src-entities-Game-Game-module__Game--_R1D0`,
	"Game__title": `src-entities-Game-Game-module__Game__title--xWUCz`,
	"Game__gameContainer": `src-entities-Game-Game-module__Game__gameContainer--KuZyi`,
	"Game__teamImage": `src-entities-Game-Game-module__Game__teamImage--NZ4bH`,
	"Game__score": `src-entities-Game-Game-module__Game__score--E7PYU`,
	"Game__statIcon": `src-entities-Game-Game-module__Game__statIcon--ym4bD`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Gif/Gif.module.scss":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Gif/Gif.module.scss ***!
  \***************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `@keyframes src-entities-Gif-Gif-module__scroll-hand--Pm5sM {
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
@keyframes src-entities-Gif-Gif-module__scroll-card--ZXeet {
  0%, 60% {
    transform: translateX(0);
  }
  80%, 100% {
    transform: translateX(-240px);
  }
}
.src-entities-Gif-Gif-module__Gif--JTB5b {
  width: var(--game-width);
  display: flex;
  flex-direction: row-reverse;
}
.src-entities-Gif-Gif-module__Gif__item--ACdgD {
  width: 42px;
  height: 42px;
}
.src-entities-Gif-Gif-module__Gif__hand--NpxAl {
  fill: var(--primary-color);
  animation: src-entities-Gif-Gif-module__scroll-hand--Pm5sM 2s infinite;
}
.src-entities-Gif-Gif-module__Gif__card--z_4xi {
  fill: rgba(255, 255, 255, 0.3);
  animation: src-entities-Gif-Gif-module__scroll-card--ZXeet 2s infinite;
}`, "",{"version":3,"sources":["webpack://./src/entities/Gif/Gif.module.scss"],"names":[],"mappings":"AAAA;EACE;IACE,oCAAA;IACA,UAAA;EACF;EAEA;IACE,oCAAA;IACA,UAAA;EAAF;EAGA;IACE,uCAAA;IACA,UAAA;EADF;EAIA;IACE,qCAAA;IACA,UAAA;EAFF;EAKA;IACE,qCAAA;IACA,UAAA;EAHF;AACF;AAMA;EACE;IACE,wBAAA;EAJF;EAOA;IACE,6BAAA;EALF;AACF;AAQA;EACE,wBAAA;EACA,aAAA;EACA,2BAAA;AANF;AAQE;EACE,WAAA;EACA,YAAA;AANJ;AASE;EACE,0BAAA;EACA,sEAAA;AAPJ;AAUE;EACE,8BAAA;EACA,sEAAA;AARJ","sourcesContent":["@keyframes scroll-hand {\n  0% {\n    transform: translateX(80px) scale(1);\n    opacity: 0;\n  }\n\n  10% {\n    transform: translateX(80px) scale(1);\n    opacity: 1\n  }\n\n  20%, 60% {\n    transform: translateX(175px) scale(.6);\n    opacity: 1;\n  }\n\n  80% {\n    transform: translateX(5px) scale(.6);\n    opacity: 1;\n  }\n\n  100% {\n    transform: translateX(5px) scale(.6);\n    opacity: 0;\n  }\n}\n\n@keyframes scroll-card {\n  0%, 60% {\n    transform: translateX(0)\n  }\n\n  80%, 100% {\n    transform: translateX(-240px)\n  }\n}\n\n.Gif {\n  width: var(--game-width);\n  display: flex;\n  flex-direction: row-reverse;\n\n  &__item {\n    width: 42px;\n    height: 42px;\n  }\n\n  &__hand {\n    fill: var(--primary-color);\n    animation: scroll-hand 2s infinite\n  }\n\n  &__card {\n    fill: rgba(255 255 255 / 30%);\n    animation: scroll-card 2s infinite\n  }\n\n}\n\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Gif": `src-entities-Gif-Gif-module__Gif--JTB5b`,
	"Gif__item": `src-entities-Gif-Gif-module__Gif__item--ACdgD`,
	"Gif__hand": `src-entities-Gif-Gif-module__Gif__hand--NpxAl`,
	"scroll-hand": `src-entities-Gif-Gif-module__scroll-hand--Pm5sM`,
	"Gif__card": `src-entities-Gif-Gif-module__Gif__card--z_4xi`,
	"scroll-card": `src-entities-Gif-Gif-module__scroll-card--ZXeet`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/PersonProtocol/PersonProtocol.module.scss":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/PersonProtocol/PersonProtocol.module.scss ***!
  \*************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.src-entities-PersonProtocol-PersonProtocol-module__PersonProtocol__shirt--wchvb {
  width: 30px;
  aspect-ratio: 69/89;
  background-size: contain;
}
.src-entities-PersonProtocol-PersonProtocol-module__PersonProtocol__image--fpYla {
  width: 30px;
  height: 30px;
  background-size: contain;
  border-radius: 100%;
}
.src-entities-PersonProtocol-PersonProtocol-module__PersonProtocol__item--o1ndx {
  padding: 5px;
  text-align: center;
  box-sizing: border-box;
  width: max-content;
  font: var(--font-s);
  color: var(--text-primary-color);
  border: 1px solid var(--inverted-bg-color);
}`, "",{"version":3,"sources":["webpack://./src/entities/PersonProtocol/PersonProtocol.module.scss"],"names":[],"mappings":"AACE;EACE,WAAA;EACA,mBAAA;EACA,wBAAA;AAAJ;AAGE;EACE,WAAA;EACA,YAAA;EACA,wBAAA;EACA,mBAAA;AADJ;AAIE;EACE,YAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,mBAAA;EACA,gCAAA;EACA,0CAAA;AAFJ","sourcesContent":[".PersonProtocol {\n  &__shirt {\n    width: 30px;\n    aspect-ratio: 69/89;\n    background-size: contain;\n  }\n\n  &__image {\n    width: 30px;\n    height: 30px;\n    background-size: contain;\n    border-radius: 100%;\n  }\n\n  &__item {\n    padding: 5px;\n    text-align: center;\n    box-sizing: border-box;\n    width: max-content;\n    font: var(--font-s);\n    color: var(--text-primary-color);\n    border: 1px solid var(--inverted-bg-color);\n  }\n\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"PersonProtocol__shirt": `src-entities-PersonProtocol-PersonProtocol-module__PersonProtocol__shirt--wchvb`,
	"PersonProtocol__image": `src-entities-PersonProtocol-PersonProtocol-module__PersonProtocol__image--fpYla`,
	"PersonProtocol__item": `src-entities-PersonProtocol-PersonProtocol-module__PersonProtocol__item--o1ndx`
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
  width: 95%;
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
  padding: 100px 0 0;
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

@media screen and (width <= 1100px) {
  .src-widgets-GameBar-ui-GameBar-module__GameBar__widget--HJp5R {
    width: var(--game-width);
  }
  .src-widgets-GameBar-ui-GameBar-module__vertical--ezTC5 .src-widgets-GameBar-ui-GameBar-module__GameBar__widget--HJp5R {
    width: var(--game-width);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    overflow: unset;
    scroll-snap-type: unset;
  }
}`, "",{"version":3,"sources":["webpack://./src/widgets/GameBar/ui/GameBar.module.scss"],"names":[],"mappings":"AAAA;EACE,WAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;AACF;AACE;EACE,SAAA;EACA,UAAA;EACA,gBAAA;EACA,UAAA;EACA,sBAAA;EACA,aAAA;EACA,UAAA;EACA,gBAAA;EACA,6BAAA;AACJ;AAEE;EACE,kBAAA;AAAJ;;AAIA;EACE,kBAAA;EACA,SAAA;EACA,gBAAA;EACA,sBAAA;AADF;AAGE;EACE,UAAA;EACA,aAAA;EACA,qCAAA;EACA,mBAAA;EACA,uBAAA;EACA,SAAA;EACA,eAAA;EACA,uBAAA;AADJ;AAIE;EACE,kBAAA;EACA,oBAAA;AAFJ;AAKE;EACE,aAAA;AAHJ;;AAOA;EACE;IACE,wBAAA;EAJF;EAQE;IACE,wBAAA;IACA,aAAA;IACA,sBAAA;IACA,mBAAA;IACA,SAAA;IACA,eAAA;IACA,uBAAA;EANJ;AACF","sourcesContent":[".GameBar {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  &__widget {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    width: 95%;\n    box-sizing: border-box;\n    display: flex;\n    gap: 100px;\n    overflow: scroll;\n    scroll-snap-type: x mandatory;\n  }\n\n  &__item {\n    width: min-content;\n  }\n}\n\n.vertical {\n  padding: 100px 0 0;\n  gap: 30px;\n  overflow: hidden;\n  box-sizing: border-box;\n\n  .GameBar__widget {\n    width: 95%;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    align-items: center;\n    justify-content: center;\n    gap: 40px;\n    overflow: unset;\n    scroll-snap-type: unset;\n  }\n\n  .GameBar__item {\n    align-self: center;\n    justify-self: center;\n  }\n\n  .GameBar__gif {\n    display: none;\n  }\n}\n\n@media screen and (width <= 1100px) {\n  .GameBar__widget {\n    width: var(--game-width);\n  }\n\n  .vertical {\n    .GameBar__widget {\n      width: var(--game-width);\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      gap: 30px;\n      overflow: unset;\n      scroll-snap-type: unset;\n    }\n  }\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Table/Table.module.scss":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Table/Table.module.scss ***!
  \******************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.src-widgets-Table-Table-module__Table--ieXWk {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.src-widgets-Table-Table-module__Table__heading--ZM_sH {
  width: 100%;
  display: flex;
  gap: 20px;
  align-items: center;
}
.src-widgets-Table-Table-module__Table__logo--wkfPU {
  width: 50px;
  height: 50px;
}
.src-widgets-Table-Table-module__Table__container--itn5s {
  align-self: flex-start;
  width: 100%;
  border-collapse: collapse;
}
.src-widgets-Table-Table-module__Table__row--_K5Hw {
  border: 1px solid var(--inverted-bg-color);
}
.src-widgets-Table-Table-module__Table__title--bAgY2 {
  padding: 5px;
  box-sizing: border-box;
  width: max-content;
  border: 1px solid var(--inverted-bg-color);
  font: var(--font-m);
  font-weight: var(--font-weight-l);
  color: var(--text-primary-color);
}
.src-widgets-Table-Table-module__Table__item--w_jRy {
  padding: 5px;
  text-align: center;
  box-sizing: border-box;
  font: var(--font-s);
  color: var(--text-primary-color);
  width: max-content;
  border: 1px solid var(--inverted-bg-color);
}`, "",{"version":3,"sources":["webpack://./src/widgets/Table/Table.module.scss"],"names":[],"mappings":"AAAA;EACE,WAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,SAAA;AACF;AACE;EACE,WAAA;EACA,aAAA;EACA,SAAA;EACA,mBAAA;AACJ;AAEE;EACE,WAAA;EACA,YAAA;AAAJ;AAGE;EACE,sBAAA;EACA,WAAA;EACA,yBAAA;AADJ;AAIE;EACE,0CAAA;AAFJ;AAKE;EACE,YAAA;EACA,sBAAA;EACA,kBAAA;EACA,0CAAA;EACA,mBAAA;EACA,iCAAA;EACA,gCAAA;AAHJ;AAME;EACE,YAAA;EACA,kBAAA;EACA,sBAAA;EACA,mBAAA;EACA,gCAAA;EACA,kBAAA;EACA,0CAAA;AAJJ","sourcesContent":[".Table {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n\n  &__heading {\n    width: 100%;\n    display: flex;\n    gap: 20px;\n    align-items: center;\n  }\n\n  &__logo {\n    width: 50px;\n    height: 50px;\n  }\n\n  &__container {\n    align-self: flex-start;\n    width: 100%;\n    border-collapse: collapse;\n  }\n\n  &__row {\n    border: 1px solid var(--inverted-bg-color)\n  }\n\n  &__title {\n    padding: 5px;\n    box-sizing: border-box;\n    width: max-content;\n    border: 1px solid var(--inverted-bg-color);\n    font: var(--font-m);\n    font-weight: var(--font-weight-l);\n    color: var(--text-primary-color);\n  }\n\n  &__item {\n    padding: 5px;\n    text-align: center;\n    box-sizing: border-box;\n    font: var(--font-s);\n    color: var(--text-primary-color);\n    width: max-content;\n    border: 1px solid var(--inverted-bg-color)\n  }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Table": `src-widgets-Table-Table-module__Table--ieXWk`,
	"Table__heading": `src-widgets-Table-Table-module__Table__heading--ZM_sH`,
	"Table__logo": `src-widgets-Table-Table-module__Table__logo--wkfPU`,
	"Table__container": `src-widgets-Table-Table-module__Table__container--itn5s`,
	"Table__row": `src-widgets-Table-Table-module__Table__row--_K5Hw`,
	"Table__title": `src-widgets-Table-Table-module__Table__title--bAgY2`,
	"Table__item": `src-widgets-Table-Table-module__Table__item--w_jRy`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/entities/Game/Game.module.scss":
/*!********************************************!*\
  !*** ./src/entities/Game/Game.module.scss ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Game_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./Game.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Game/Game.module.scss");

      
      
      
      
      
      
      
      
      

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
      /*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./Game.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Game/Game.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Game_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./Game.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Game/Game.module.scss");
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

/***/ "./src/entities/Gif/Gif.module.scss":
/*!******************************************!*\
  !*** ./src/entities/Gif/Gif.module.scss ***!
  \******************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Gif_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./Gif.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Gif/Gif.module.scss");

      
      
      
      
      
      
      
      
      

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
      /*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./Gif.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Gif/Gif.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Gif_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./Gif.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/Gif/Gif.module.scss");
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

/***/ "./src/entities/PersonProtocol/PersonProtocol.module.scss":
/*!****************************************************************!*\
  !*** ./src/entities/PersonProtocol/PersonProtocol.module.scss ***!
  \****************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_PersonProtocol_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./PersonProtocol.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/PersonProtocol/PersonProtocol.module.scss");

      
      
      
      
      
      
      
      
      

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
      /*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./PersonProtocol.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/PersonProtocol/PersonProtocol.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_PersonProtocol_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./PersonProtocol.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/entities/PersonProtocol/PersonProtocol.module.scss");
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

/***/ "./src/widgets/Table/Table.module.scss":
/*!*********************************************!*\
  !*** ./src/widgets/Table/Table.module.scss ***!
  \*********************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Table_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./Table.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Table/Table.module.scss");

      
      
      
      
      
      
      
      
      

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
      /*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./Table.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Table/Table.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_Table_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./Table.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Table/Table.module.scss");
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
        .slice(-11);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2FwcF9wcm92aWRlcnNfUHJvdG9jb2xQcm92aWRlcl9saWJfdXNlUHJvdG9jb2xfdHN4LXNyY193aWRnZXRzX0dhbWVQcm90b2NvbF91aV9HYW1lUHJvdG9jLWRiMGJmZi5kNzViNDVjMDhjMzVmMTcxMmFiNS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLHNCQUFzQixzRUFBc0UsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELGlDQUFpQyxrQkFBa0I7QUFDM1E7QUFDL0I7QUFDQSxzQkFBc0IsZ0RBQW1CO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyx5Q0FBeUMsZ0RBQW1CO0FBQy9EO0FBQ0EsR0FBRyxxQ0FBcUMsZ0RBQW1CO0FBQzNEO0FBQ0EsR0FBRztBQUNIO0FBQ0EsaUVBQWUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmMUIsSUFBSUEsUUFBUSxHQUFJLFNBQUksSUFBSSxTQUFJLENBQUNBLFFBQVEsSUFBSyxZQUFZO0VBQ2xEQSxRQUFRLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBTSxJQUFJLFVBQVNDLENBQUMsRUFBRTtJQUNwQyxLQUFLLElBQUlDLENBQUMsRUFBRUMsQ0FBQyxHQUFHLENBQUMsRUFBRUMsQ0FBQyxHQUFHQyxTQUFTLENBQUNDLE1BQU0sRUFBRUgsQ0FBQyxHQUFHQyxDQUFDLEVBQUVELENBQUMsRUFBRSxFQUFFO01BQ2pERCxDQUFDLEdBQUdHLFNBQVMsQ0FBQ0YsQ0FBQyxDQUFDO01BQ2hCLEtBQUssSUFBSUksQ0FBQyxJQUFJTCxDQUFDLEVBQUUsSUFBSUgsTUFBTSxDQUFDUyxTQUFTLENBQUNDLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDUixDQUFDLEVBQUVLLENBQUMsQ0FBQyxFQUMzRE4sQ0FBQyxDQUFDTSxDQUFDLENBQUMsR0FBR0wsQ0FBQyxDQUFDSyxDQUFDLENBQUM7SUFDbkI7SUFDQSxPQUFPTixDQUFDO0VBQ1osQ0FBQztFQUNELE9BQU9ILFFBQVEsQ0FBQ2EsS0FBSyxDQUFDLElBQUksRUFBRU4sU0FBUyxDQUFDO0FBQzFDLENBQUM7QUFDRCxJQUFJTyxTQUFTLEdBQUksU0FBSSxJQUFJLFNBQUksQ0FBQ0EsU0FBUyxJQUFLLFVBQVVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFQyxDQUFDLEVBQUVDLFNBQVMsRUFBRTtFQUNyRixTQUFTQyxLQUFLQSxDQUFDQyxLQUFLLEVBQUU7SUFBRSxPQUFPQSxLQUFLLFlBQVlILENBQUMsR0FBR0csS0FBSyxHQUFHLElBQUlILENBQUMsQ0FBQyxVQUFVSSxPQUFPLEVBQUU7TUFBRUEsT0FBTyxDQUFDRCxLQUFLLENBQUM7SUFBRSxDQUFDLENBQUM7RUFBRTtFQUMzRyxPQUFPLEtBQUtILENBQUMsS0FBS0EsQ0FBQyxHQUFHSyxPQUFPLENBQUMsRUFBRSxVQUFVRCxPQUFPLEVBQUVFLE1BQU0sRUFBRTtJQUN2RCxTQUFTQyxTQUFTQSxDQUFDSixLQUFLLEVBQUU7TUFBRSxJQUFJO1FBQUVLLElBQUksQ0FBQ1AsU0FBUyxDQUFDUSxJQUFJLENBQUNOLEtBQUssQ0FBQyxDQUFDO01BQUUsQ0FBQyxDQUFDLE9BQU9PLENBQUMsRUFBRTtRQUFFSixNQUFNLENBQUNJLENBQUMsQ0FBQztNQUFFO0lBQUU7SUFDMUYsU0FBU0MsUUFBUUEsQ0FBQ1IsS0FBSyxFQUFFO01BQUUsSUFBSTtRQUFFSyxJQUFJLENBQUNQLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQ0UsS0FBSyxDQUFDLENBQUM7TUFBRSxDQUFDLENBQUMsT0FBT08sQ0FBQyxFQUFFO1FBQUVKLE1BQU0sQ0FBQ0ksQ0FBQyxDQUFDO01BQUU7SUFBRTtJQUM3RixTQUFTRixJQUFJQSxDQUFDSSxNQUFNLEVBQUU7TUFBRUEsTUFBTSxDQUFDQyxJQUFJLEdBQUdULE9BQU8sQ0FBQ1EsTUFBTSxDQUFDVCxLQUFLLENBQUMsR0FBR0QsS0FBSyxDQUFDVSxNQUFNLENBQUNULEtBQUssQ0FBQyxDQUFDVyxJQUFJLENBQUNQLFNBQVMsRUFBRUksUUFBUSxDQUFDO0lBQUU7SUFDN0dILElBQUksQ0FBQyxDQUFDUCxTQUFTLEdBQUdBLFNBQVMsQ0FBQ0wsS0FBSyxDQUFDRSxPQUFPLEVBQUVDLFVBQVUsSUFBSSxFQUFFLENBQUMsRUFBRVUsSUFBSSxDQUFDLENBQUMsQ0FBQztFQUN6RSxDQUFDLENBQUM7QUFDTixDQUFDO0FBQ0QsSUFBSU0sV0FBVyxHQUFJLFNBQUksSUFBSSxTQUFJLENBQUNBLFdBQVcsSUFBSyxVQUFVakIsT0FBTyxFQUFFa0IsSUFBSSxFQUFFO0VBQ3JFLElBQUlDLENBQUMsR0FBRztNQUFFQyxLQUFLLEVBQUUsQ0FBQztNQUFFQyxJQUFJLEVBQUUsU0FBQUEsS0FBQSxFQUFXO1FBQUUsSUFBSWpDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTUEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUFFLE9BQU9BLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFBRSxDQUFDO01BQUVrQyxJQUFJLEVBQUUsRUFBRTtNQUFFQyxHQUFHLEVBQUU7SUFBRyxDQUFDO0lBQUVDLENBQUM7SUFBRUMsQ0FBQztJQUFFckMsQ0FBQztJQUFFc0MsQ0FBQztFQUNoSCxPQUFPQSxDQUFDLEdBQUc7SUFBRWYsSUFBSSxFQUFFZ0IsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUFFLE9BQU8sRUFBRUEsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUFFLFFBQVEsRUFBRUEsSUFBSSxDQUFDLENBQUM7RUFBRSxDQUFDLEVBQUUsT0FBT0MsTUFBTSxLQUFLLFVBQVUsS0FBS0YsQ0FBQyxDQUFDRSxNQUFNLENBQUNDLFFBQVEsQ0FBQyxHQUFHLFlBQVc7SUFBRSxPQUFPLElBQUk7RUFBRSxDQUFDLENBQUMsRUFBRUgsQ0FBQztFQUN4SixTQUFTQyxJQUFJQSxDQUFDcEMsQ0FBQyxFQUFFO0lBQUUsT0FBTyxVQUFVdUMsQ0FBQyxFQUFFO01BQUUsT0FBT3BCLElBQUksQ0FBQyxDQUFDbkIsQ0FBQyxFQUFFdUMsQ0FBQyxDQUFDLENBQUM7SUFBRSxDQUFDO0VBQUU7RUFDakUsU0FBU3BCLElBQUlBLENBQUNxQixFQUFFLEVBQUU7SUFDZCxJQUFJUCxDQUFDLEVBQUUsTUFBTSxJQUFJUSxTQUFTLENBQUMsaUNBQWlDLENBQUM7SUFDN0QsT0FBT04sQ0FBQyxLQUFLQSxDQUFDLEdBQUcsQ0FBQyxFQUFFSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUtaLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFQSxDQUFDLEVBQUUsSUFBSTtNQUMxQyxJQUFJSyxDQUFDLEdBQUcsQ0FBQyxFQUFFQyxDQUFDLEtBQUtyQyxDQUFDLEdBQUcyQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHTixDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUdNLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBR04sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUNyQyxDQUFDLEdBQUdxQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUtyQyxDQUFDLENBQUNTLElBQUksQ0FBQzRCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHQSxDQUFDLENBQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQ3ZCLENBQUMsR0FBR0EsQ0FBQyxDQUFDUyxJQUFJLENBQUM0QixDQUFDLEVBQUVNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFaEIsSUFBSSxFQUFFLE9BQU8zQixDQUFDO01BQzVKLElBQUlxQyxDQUFDLEdBQUcsQ0FBQyxFQUFFckMsQ0FBQyxFQUFFMkMsRUFBRSxHQUFHLENBQUNBLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUzQyxDQUFDLENBQUNpQixLQUFLLENBQUM7TUFDdkMsUUFBUTBCLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDVCxLQUFLLENBQUM7UUFBRSxLQUFLLENBQUM7VUFBRTNDLENBQUMsR0FBRzJDLEVBQUU7VUFBRTtRQUN4QixLQUFLLENBQUM7VUFBRVosQ0FBQyxDQUFDQyxLQUFLLEVBQUU7VUFBRSxPQUFPO1lBQUVmLEtBQUssRUFBRTBCLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFBRWhCLElBQUksRUFBRTtVQUFNLENBQUM7UUFDdkQsS0FBSyxDQUFDO1VBQUVJLENBQUMsQ0FBQ0MsS0FBSyxFQUFFO1VBQUVLLENBQUMsR0FBR00sRUFBRSxDQUFDLENBQUMsQ0FBQztVQUFFQSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7VUFBRTtRQUN4QyxLQUFLLENBQUM7VUFBRUEsRUFBRSxHQUFHWixDQUFDLENBQUNJLEdBQUcsQ0FBQ1UsR0FBRyxDQUFDLENBQUM7VUFBRWQsQ0FBQyxDQUFDRyxJQUFJLENBQUNXLEdBQUcsQ0FBQyxDQUFDO1VBQUU7UUFDeEM7VUFDSSxJQUFJLEVBQUU3QyxDQUFDLEdBQUcrQixDQUFDLENBQUNHLElBQUksRUFBRWxDLENBQUMsR0FBR0EsQ0FBQyxDQUFDSyxNQUFNLEdBQUcsQ0FBQyxJQUFJTCxDQUFDLENBQUNBLENBQUMsQ0FBQ0ssTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUtzQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJQSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFBRVosQ0FBQyxHQUFHLENBQUM7WUFBRTtVQUFVO1VBQzNHLElBQUlZLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQzNDLENBQUMsSUFBSzJDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRzNDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTJDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRzNDLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQyxFQUFFO1lBQUUrQixDQUFDLENBQUNDLEtBQUssR0FBR1csRUFBRSxDQUFDLENBQUMsQ0FBQztZQUFFO1VBQU87VUFDckYsSUFBSUEsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSVosQ0FBQyxDQUFDQyxLQUFLLEdBQUdoQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFBRStCLENBQUMsQ0FBQ0MsS0FBSyxHQUFHaEMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUFFQSxDQUFDLEdBQUcyQyxFQUFFO1lBQUU7VUFBTztVQUNwRSxJQUFJM0MsQ0FBQyxJQUFJK0IsQ0FBQyxDQUFDQyxLQUFLLEdBQUdoQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFBRStCLENBQUMsQ0FBQ0MsS0FBSyxHQUFHaEMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUFFK0IsQ0FBQyxDQUFDSSxHQUFHLENBQUNXLElBQUksQ0FBQ0gsRUFBRSxDQUFDO1lBQUU7VUFBTztVQUNsRSxJQUFJM0MsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFK0IsQ0FBQyxDQUFDSSxHQUFHLENBQUNVLEdBQUcsQ0FBQyxDQUFDO1VBQ3JCZCxDQUFDLENBQUNHLElBQUksQ0FBQ1csR0FBRyxDQUFDLENBQUM7VUFBRTtNQUN0QjtNQUNBRixFQUFFLEdBQUdiLElBQUksQ0FBQ3JCLElBQUksQ0FBQ0csT0FBTyxFQUFFbUIsQ0FBQyxDQUFDO0lBQzlCLENBQUMsQ0FBQyxPQUFPUCxDQUFDLEVBQUU7TUFBRW1CLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRW5CLENBQUMsQ0FBQztNQUFFYSxDQUFDLEdBQUcsQ0FBQztJQUFFLENBQUMsU0FBUztNQUFFRCxDQUFDLEdBQUdwQyxDQUFDLEdBQUcsQ0FBQztJQUFFO0lBQ3pELElBQUkyQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU1BLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFBRSxPQUFPO01BQUUxQixLQUFLLEVBQUUwQixFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUdBLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7TUFBRWhCLElBQUksRUFBRTtJQUFLLENBQUM7RUFDcEY7QUFDSixDQUFDO0FBQ3dEO0FBQ047QUFDNUMsU0FBU3dCLFdBQVdBLENBQUEsRUFBRztFQUMxQixJQUFJQyxLQUFLLEdBQUcsSUFBSTtFQUNoQixJQUFJQyxFQUFFLEdBQUdKLCtDQUFRLENBQUM7TUFDZEssTUFBTSxFQUFFLEtBQUs7TUFDYkMsTUFBTSxFQUFFLElBQUk7TUFDWkMsUUFBUSxFQUFFLElBQUk7TUFDZEMsUUFBUSxFQUFFO0lBQ2QsQ0FBQyxDQUFDO0lBQUVDLGFBQWEsR0FBR0wsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUFFTSxnQkFBZ0IsR0FBR04sRUFBRSxDQUFDLENBQUMsQ0FBQztFQUNuRCxJQUFJTyxTQUFTLEdBQUdiLGtEQUFXLENBQUMsWUFBWTtJQUFFLE9BQU9wQyxTQUFTLENBQUN5QyxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsWUFBWTtNQUMxRixPQUFPdkIsV0FBVyxDQUFDLElBQUksRUFBRSxVQUFVd0IsRUFBRSxFQUFFO1FBQ25DLFFBQVFBLEVBQUUsQ0FBQ3JCLEtBQUs7VUFDWixLQUFLLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLFdBQVdrQiw2REFBTyxDQUFDVyxlQUFlLENBQUNILGFBQWEsQ0FBQ0gsTUFBTSxDQUFDLENBQUM7VUFDM0UsS0FBSyxDQUFDO1lBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxZQUFZRixFQUFFLENBQUNwQixJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzVDO01BQ0osQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0VBQUUsQ0FBQyxFQUFFLENBQUN5QixhQUFhLENBQUNILE1BQU0sQ0FBQyxDQUFDO0VBQzlCUCxnREFBUyxDQUFDLFlBQVk7SUFDbEIsSUFBSVUsYUFBYSxDQUFDSixNQUFNLEVBQUU7TUFDdEJNLFNBQVMsQ0FBQyxDQUFDLENBQ05oQyxJQUFJLENBQUMsVUFBVTZCLFFBQVEsRUFBRTtRQUFFRSxnQkFBZ0IsQ0FBQzlELFFBQVEsQ0FBQ0EsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFNkQsYUFBYSxDQUFDLEVBQUU7VUFBRUQsUUFBUSxFQUFFQTtRQUFTLENBQUMsQ0FBQyxDQUFDO01BQUUsQ0FBQyxDQUFDLFNBQ3pHLENBQUMsVUFBVUssR0FBRyxFQUFFO1FBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHLENBQUM7TUFBRSxDQUFDLENBQUM7SUFDcEQ7RUFDSixDQUFDLEVBQUUsQ0FBQ0YsU0FBUyxFQUFFRixhQUFhLENBQUNKLE1BQU0sQ0FBQyxDQUFDO0VBQ3JDLE9BQU87SUFDSEksYUFBYSxFQUFFQSxhQUFhO0lBQzVCQyxnQkFBZ0IsRUFBRUE7RUFDdEIsQ0FBQztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUVBLElBQUk5RCxRQUFRLEdBQUksU0FBSSxJQUFJLFNBQUksQ0FBQ0EsUUFBUSxJQUFLLFlBQVk7RUFDbERBLFFBQVEsR0FBR0MsTUFBTSxDQUFDQyxNQUFNLElBQUksVUFBU0MsQ0FBQyxFQUFFO0lBQ3BDLEtBQUssSUFBSUMsQ0FBQyxFQUFFQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQyxDQUFDLEdBQUdDLFNBQVMsQ0FBQ0MsTUFBTSxFQUFFSCxDQUFDLEdBQUdDLENBQUMsRUFBRUQsQ0FBQyxFQUFFLEVBQUU7TUFDakRELENBQUMsR0FBR0csU0FBUyxDQUFDRixDQUFDLENBQUM7TUFDaEIsS0FBSyxJQUFJSSxDQUFDLElBQUlMLENBQUMsRUFBRSxJQUFJSCxNQUFNLENBQUNTLFNBQVMsQ0FBQ0MsY0FBYyxDQUFDQyxJQUFJLENBQUNSLENBQUMsRUFBRUssQ0FBQyxDQUFDLEVBQzNETixDQUFDLENBQUNNLENBQUMsQ0FBQyxHQUFHTCxDQUFDLENBQUNLLENBQUMsQ0FBQztJQUNuQjtJQUNBLE9BQU9OLENBQUM7RUFDWixDQUFDO0VBQ0QsT0FBT0gsUUFBUSxDQUFDYSxLQUFLLENBQUMsSUFBSSxFQUFFTixTQUFTLENBQUM7QUFDMUMsQ0FBQztBQUM4RDtBQUNEO0FBQ3pCO0FBQ3lCO0FBQ0w7QUFDbEQsSUFBSXNFLElBQUksR0FBRyxTQUFQQSxJQUFJQSxDQUFhQyxLQUFLLEVBQUU7RUFDL0IsSUFBSUMsSUFBSSxHQUFHRCxLQUFLLENBQUNDLElBQUk7SUFBRUMsU0FBUyxHQUFHRixLQUFLLENBQUNFLFNBQVM7SUFBRWxCLGdCQUFnQixHQUFHZ0IsS0FBSyxDQUFDaEIsZ0JBQWdCO0lBQUVELGFBQWEsR0FBR2lCLEtBQUssQ0FBQ2pCLGFBQWE7RUFDbEksSUFBSW9CLE1BQU0sR0FBR0YsSUFBSSxDQUFDRSxNQUFNO0lBQUVDLGtCQUFrQixHQUFHSCxJQUFJLENBQUNHLGtCQUFrQjtJQUFFQyxTQUFTLEdBQUdKLElBQUksQ0FBQ0ksU0FBUztJQUFFQyxTQUFTLEdBQUdMLElBQUksQ0FBQ0ssU0FBUztJQUFFQyxNQUFNLEdBQUdOLElBQUksQ0FBQ00sTUFBTTtJQUFFQyxNQUFNLEdBQUdQLElBQUksQ0FBQ08sTUFBTTtFQUMxSyxJQUFJQyxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBQSxFQUFlO0lBQ3pCekIsZ0JBQWdCLENBQUM5RCxRQUFRLENBQUNBLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTZELGFBQWEsQ0FBQyxFQUFFO01BQUVKLE1BQU0sRUFBRSxJQUFJO01BQUVDLE1BQU0sRUFBRXVCLE1BQU07TUFBRXRCLFFBQVEsRUFBRW9CO0lBQUssQ0FBQyxDQUFDLENBQUM7RUFDN0csQ0FBQztFQUNELE9BQVFSLHVEQUFLLENBQUMsU0FBUyxFQUFFO0lBQUVTLFNBQVMsRUFBRVIsNEVBQVUsQ0FBQ0MseURBQUcsQ0FBQ0ksSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUNHLFNBQVMsS0FBSyxJQUFJLElBQUlBLFNBQVMsS0FBSyxLQUFLLENBQUMsR0FBR0EsU0FBUyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQUVRLFFBQVEsRUFBRSxDQUFDbkIsc0RBQUksQ0FBQyxJQUFJLEVBQUU7TUFBRVcsU0FBUyxFQUFFUCx5REFBRyxDQUFDZ0IsV0FBVztNQUFFRCxRQUFRLEVBQUVOO0lBQW1CLENBQUMsQ0FBQyxFQUFFWCx1REFBSyxDQUFDLEtBQUssRUFBRTtNQUFFUyxTQUFTLEVBQUVQLHlEQUFHLENBQUNpQixtQkFBbUI7TUFBRUYsUUFBUSxFQUFFLENBQUNuQixzREFBSSxDQUFDLEtBQUssRUFBRTtRQUFFc0IsS0FBSyxFQUFFO1VBQUVDLGVBQWUsRUFBRSxNQUFNLENBQUNDLE1BQU0sQ0FBQ1YsU0FBUyxFQUFFLEdBQUc7UUFBRSxDQUFDO1FBQUVILFNBQVMsRUFBRVAseURBQUcsQ0FBQ3FCO01BQWdCLENBQUMsQ0FBQyxFQUFFekIsc0RBQUksQ0FBQyxLQUFLLEVBQUU7UUFBRVcsU0FBUyxFQUFFUCx5REFBRyxDQUFDc0IsV0FBVztRQUFFUCxRQUFRLEVBQUUsRUFBRSxDQUFDSyxNQUFNLENBQUNSLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQ1EsTUFBTSxDQUFDUCxNQUFNO01BQUUsQ0FBQyxDQUFDLEVBQUVqQixzREFBSSxDQUFDLEtBQUssRUFBRTtRQUFFc0IsS0FBSyxFQUFFO1VBQUVDLGVBQWUsRUFBRSxNQUFNLENBQUNDLE1BQU0sQ0FBQ1QsU0FBUyxFQUFFLEdBQUc7UUFBRSxDQUFDO1FBQUVKLFNBQVMsRUFBRVAseURBQUcsQ0FBQ3FCO01BQWdCLENBQUMsQ0FBQztJQUFFLENBQUMsQ0FBQyxFQUFFdkIsdURBQUssQ0FBQ0csMkRBQU0sRUFBRTtNQUFFc0IsT0FBTyxFQUFFVCxVQUFVO01BQUVVLEtBQUssRUFBRXRCLGdFQUFXLENBQUN1QixRQUFRO01BQUVWLFFBQVEsRUFBRSxDQUFDbkIsc0RBQUksQ0FBQ08seUVBQVEsRUFBRTtRQUFFSSxTQUFTLEVBQUVQLHlEQUFHLENBQUMwQjtNQUFlLENBQUMsQ0FBQyxFQUFFLGtJQUFrSTtJQUFFLENBQUMsQ0FBQztFQUFFLENBQUMsQ0FBQztBQUM1MUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QjhEO0FBQ0Q7QUFDMUI7QUFDN0IsSUFBSUMsR0FBRyxHQUFHLFNBQU5BLEdBQUdBLENBQWE1QyxFQUFFLEVBQUU7RUFDM0IsSUFBSXdCLFNBQVMsR0FBR3hCLEVBQUUsQ0FBQ3dCLFNBQVM7RUFDNUIsT0FBUVgsc0RBQUksQ0FBQyxLQUFLLEVBQUU7SUFBRVcsU0FBUyxFQUFFUiw0RUFBVSxDQUFDQyx3REFBRyxDQUFDMkIsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUNwQixTQUFTLEtBQUssSUFBSSxJQUFJQSxTQUFTLEtBQUssS0FBSyxDQUFDLEdBQUdBLFNBQVMsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUFFUSxRQUFRLEVBQUVqQix1REFBSyxDQUFDLEtBQUssRUFBRTtNQUFFUyxTQUFTLEVBQUVQLHdEQUFHLENBQUM0QixTQUFTO01BQUVDLE9BQU8sRUFBRSxhQUFhO01BQUVkLFFBQVEsRUFBRSxDQUFDbkIsc0RBQUksQ0FBQyxNQUFNLEVBQUU7UUFBRVcsU0FBUyxFQUFFUCx3REFBRyxDQUFDOEIsU0FBUztRQUFFQyxDQUFDLEVBQUUsS0FBSztRQUFFQyxLQUFLLEVBQUUsSUFBSTtRQUFFQyxNQUFNLEVBQUUsS0FBSztRQUFFQyxFQUFFLEVBQUU7TUFBSSxDQUFDLENBQUMsRUFBRXRDLHNEQUFJLENBQUMsTUFBTSxFQUFFO1FBQUVXLFNBQVMsRUFBRVAsd0RBQUcsQ0FBQ21DLFNBQVM7UUFBRXBFLENBQUMsRUFBRSxHQUFHO1FBQUVpRSxLQUFLLEVBQUUsS0FBSztRQUFFQyxNQUFNLEVBQUUsS0FBSztRQUFFQyxFQUFFLEVBQUU7TUFBSSxDQUFDLENBQUMsRUFBRXRDLHNEQUFJLENBQUMsTUFBTSxFQUFFO1FBQUVXLFNBQVMsRUFBRVAsd0RBQUcsQ0FBQ21DLFNBQVM7UUFBRUosQ0FBQyxFQUFFLEtBQUs7UUFBRUMsS0FBSyxFQUFFLEtBQUs7UUFBRUMsTUFBTSxFQUFFLEtBQUs7UUFBRUMsRUFBRSxFQUFFO01BQUksQ0FBQyxDQUFDLEVBQUV0QyxzREFBSSxDQUFDLE1BQU0sRUFBRTtRQUFFVyxTQUFTLEVBQUVQLHdEQUFHLENBQUNvQyxTQUFTO1FBQ3ZmO1FBQ0FDLENBQUMsRUFBRTtNQUErYixDQUFDLENBQUM7SUFBRSxDQUFDO0VBQUUsQ0FBQyxDQUFDO0FBQy9kLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUjhEO0FBQ0Q7QUFDZjtBQUN4QyxJQUFJQyxjQUFjLEdBQUcsU0FBQUEsZUFBVUEsZUFBYyxFQUFFO0VBQ2xELElBQUlDLFlBQVksR0FBR0QsZUFBYyxDQUFDQyxZQUFZO0lBQUVDLFFBQVEsR0FBR0YsZUFBYyxDQUFDRSxRQUFRO0lBQUVDLFlBQVksR0FBR0gsZUFBYyxDQUFDRyxZQUFZO0lBQUVDLFVBQVUsR0FBR0osZUFBYyxDQUFDSSxVQUFVO0lBQUVDLE1BQU0sR0FBR0wsZUFBYyxDQUFDSyxNQUFNO0lBQUVDLE1BQU0sR0FBR04sZUFBYyxDQUFDTSxNQUFNO0lBQUVDLE1BQU0sR0FBR1AsZUFBYyxDQUFDTyxNQUFNO0lBQUVDLE1BQU0sR0FBR1IsZUFBYyxDQUFDUSxNQUFNO0lBQUVDLEtBQUssR0FBR1QsZUFBYyxDQUFDUyxLQUFLO0lBQUVDLEtBQUssR0FBR1YsZUFBYyxDQUFDVSxLQUFLO0lBQUVDLEtBQUssR0FBR1gsZUFBYyxDQUFDVyxLQUFLO0lBQUVDLEtBQUssR0FBR1osZUFBYyxDQUFDWSxLQUFLO0lBQUVDLFVBQVUsR0FBR2IsZUFBYyxDQUFDYSxVQUFVO0lBQUVDLFVBQVUsR0FBR2QsZUFBYyxDQUFDYyxVQUFVO0lBQUVDLE9BQU8sR0FBR2YsZUFBYyxDQUFDZSxPQUFPO0lBQUVDLE1BQU0sR0FBR2hCLGVBQWMsQ0FBQ2dCLE1BQU07SUFBRUMsS0FBSyxHQUFHakIsZUFBYyxDQUFDaUIsS0FBSztJQUFFQyxRQUFRLEdBQUdsQixlQUFjLENBQUNrQixRQUFRO0lBQUVDLE1BQU0sR0FBR25CLGVBQWMsQ0FBQ21CLE1BQU07SUFBRUMsSUFBSSxHQUFHcEIsZUFBYyxDQUFDb0IsSUFBSTtJQUFFQyxZQUFZLEdBQUdyQixlQUFjLENBQUNxQixZQUFZO0lBQUVDLFNBQVMsR0FBR3RCLGVBQWMsQ0FBQ3NCLFNBQVM7RUFDaHdCLE9BQVE5RCx1REFBSyxDQUFDLElBQUksRUFBRTtJQUFFUyxTQUFTLEVBQUVSLDRFQUFVLENBQUNDLG1FQUFHLENBQUM2RCxRQUFRLENBQUM7SUFBRTlDLFFBQVEsRUFBRSxDQUFDbkIsc0RBQUksQ0FBQyxJQUFJLEVBQUU7TUFBRVcsU0FBUyxFQUFFUCxtRUFBRyxDQUFDOEQsb0JBQW9CO01BQUUvQyxRQUFRLEVBQUVuQixzREFBSSxDQUFDLEtBQUssRUFBRTtRQUFFVyxTQUFTLEVBQUVQLG1FQUFHLENBQUMrRCxxQkFBcUI7UUFBRTdDLEtBQUssRUFBRTtVQUN6S0MsZUFBZSxFQUFFLG1EQUFtRCxDQUFDQyxNQUFNLENBQUNtQixZQUFZLEVBQUUsa0VBQWtFO1FBQ2hLO01BQUUsQ0FBQztJQUFFLENBQUMsQ0FBQyxFQUFFM0Msc0RBQUksQ0FBQyxJQUFJLEVBQUU7TUFBRVcsU0FBUyxFQUFFUCxtRUFBRyxDQUFDOEQsb0JBQW9CO01BQUUvQyxRQUFRLEVBQUVuQixzREFBSSxDQUFDLEtBQUssRUFBRTtRQUFFVyxTQUFTLEVBQUVQLG1FQUFHLENBQUNnRSxxQkFBcUI7UUFBRTlDLEtBQUssRUFBRTtVQUM1SEMsZUFBZSxFQUFFLHNEQUFzRCxDQUFDQyxNQUFNLENBQUNvQixRQUFRLEVBQUUsdUNBQXVDO1FBQ3BJO01BQUUsQ0FBQztJQUFFLENBQUMsQ0FBQyxFQUFFNUMsc0RBQUksQ0FBQyxJQUFJLEVBQUU7TUFBRVcsU0FBUyxFQUFFUCxtRUFBRyxDQUFDOEQsb0JBQW9CO01BQUUvQyxRQUFRLEVBQUUwQjtJQUFhLENBQUMsQ0FBQyxFQUFFN0Msc0RBQUksQ0FBQyxJQUFJLEVBQUU7TUFBRVcsU0FBUyxFQUFFUCxtRUFBRyxDQUFDOEQsb0JBQW9CO01BQUUvQyxRQUFRLEVBQUUyQixVQUFVLEtBQUssSUFBSSxJQUFJQTtJQUFXLENBQUMsQ0FBQyxFQUFFOUMsc0RBQUksQ0FBQyxJQUFJLEVBQUU7TUFBRVcsU0FBUyxFQUFFUCxtRUFBRyxDQUFDOEQsb0JBQW9CO01BQUUvQyxRQUFRLEVBQUU0QixNQUFNLEtBQUssSUFBSSxJQUFJQTtJQUFPLENBQUMsQ0FBQyxFQUFFL0Msc0RBQUksQ0FBQyxJQUFJLEVBQUU7TUFBRVcsU0FBUyxFQUFFUCxtRUFBRyxDQUFDOEQsb0JBQW9CO01BQUUvQyxRQUFRLEVBQUU4QixNQUFNLEtBQUssSUFBSSxJQUFJQTtJQUFPLENBQUMsQ0FBQyxFQUFFakQsc0RBQUksQ0FBQyxJQUFJLEVBQUU7TUFBRVcsU0FBUyxFQUFFUCxtRUFBRyxDQUFDOEQsb0JBQW9CO01BQUUvQyxRQUFRLEVBQUUrQixNQUFNLEtBQUssSUFBSSxJQUFJQTtJQUFPLENBQUMsQ0FBQyxFQUFFbEQsc0RBQUksQ0FBQyxJQUFJLEVBQUU7TUFBRVcsU0FBUyxFQUFFUCxtRUFBRyxDQUFDOEQsb0JBQW9CO01BQUUvQyxRQUFRLEVBQUcsQ0FBQ2tDLEtBQUssR0FBR0MsS0FBSyxNQUFNLElBQUksSUFDM2hCLEVBQUUsQ0FBQzlCLE1BQU0sQ0FBQzJCLEtBQUssR0FBR0MsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDNUIsTUFBTSxDQUFDNkIsS0FBSyxHQUFHQyxLQUFLO0lBQUUsQ0FBQyxDQUFDLEVBQUV0RCxzREFBSSxDQUFDLElBQUksRUFBRTtNQUFFVyxTQUFTLEVBQUVQLG1FQUFHLENBQUM4RCxvQkFBb0I7TUFBRS9DLFFBQVEsRUFBRTZCLE1BQU0sS0FBSyxJQUFJLElBQUlBO0lBQU8sQ0FBQyxDQUFDLEVBQUVoRCxzREFBSSxDQUFDLElBQUksRUFBRTtNQUFFVyxTQUFTLEVBQUVQLG1FQUFHLENBQUM4RCxvQkFBb0I7TUFBRS9DLFFBQVEsRUFBRW9DLFVBQVUsS0FBSyxJQUFJLElBQUlBO0lBQVcsQ0FBQyxDQUFDLEVBQUV2RCxzREFBSSxDQUFDLElBQUksRUFBRTtNQUFFVyxTQUFTLEVBQUVQLG1FQUFHLENBQUM4RCxvQkFBb0I7TUFBRS9DLFFBQVEsRUFBRXFDLFVBQVUsS0FBSyxJQUFJLElBQUlBO0lBQVcsQ0FBQyxDQUFDLEVBQUV4RCxzREFBSSxDQUFDLElBQUksRUFBRTtNQUFFVyxTQUFTLEVBQUVQLG1FQUFHLENBQUM4RCxvQkFBb0I7TUFBRS9DLFFBQVEsRUFBRXNDLE9BQU8sS0FBSyxJQUFJLElBQUlBO0lBQVEsQ0FBQyxDQUFDLEVBQUV6RCxzREFBSSxDQUFDLElBQUksRUFBRTtNQUFFVyxTQUFTLEVBQUVQLG1FQUFHLENBQUM4RCxvQkFBb0I7TUFBRS9DLFFBQVEsRUFBRXVDLE1BQU0sS0FBSyxJQUFJLElBQUlBO0lBQU8sQ0FBQyxDQUFDLEVBQUUxRCxzREFBSSxDQUFDLElBQUksRUFBRTtNQUFFVyxTQUFTLEVBQUVQLG1FQUFHLENBQUM4RCxvQkFBb0I7TUFBRS9DLFFBQVEsRUFBRXdDLEtBQUssS0FBSyxJQUFJLElBQUlBO0lBQU0sQ0FBQyxDQUFDLEVBQUUzRCxzREFBSSxDQUFDLElBQUksRUFBRTtNQUFFVyxTQUFTLEVBQUVQLG1FQUFHLENBQUM4RCxvQkFBb0I7TUFBRS9DLFFBQVEsRUFBRXlDLFFBQVEsS0FBSyxJQUFJLElBQUlBO0lBQVMsQ0FBQyxDQUFDLEVBQUU1RCxzREFBSSxDQUFDLElBQUksRUFBRTtNQUFFVyxTQUFTLEVBQUVQLG1FQUFHLENBQUM4RCxvQkFBb0I7TUFBRS9DLFFBQVEsRUFBRTBDLE1BQU0sS0FBSyxJQUFJLElBQUlBO0lBQU8sQ0FBQyxDQUFDLEVBQUU3RCxzREFBSSxDQUFDLElBQUksRUFBRTtNQUFFVyxTQUFTLEVBQUVQLG1FQUFHLENBQUM4RCxvQkFBb0I7TUFBRS9DLFFBQVEsRUFBRTJDLElBQUksS0FBSyxJQUFJLElBQUlBO0lBQUssQ0FBQyxDQUFDLEVBQUU5RCxzREFBSSxDQUFDLElBQUksRUFBRTtNQUFFVyxTQUFTLEVBQUVQLG1FQUFHLENBQUM4RCxvQkFBb0I7TUFBRS9DLFFBQVEsRUFBRTRDLFlBQVksS0FBSyxJQUFJLElBQUlBO0lBQWEsQ0FBQyxDQUFDLEVBQUUvRCxzREFBSSxDQUFDLElBQUksRUFBRTtNQUFFVyxTQUFTLEVBQUVQLG1FQUFHLENBQUM4RCxvQkFBb0I7TUFBRS9DLFFBQVEsRUFBRTZDLFNBQVMsS0FBSyxJQUFJLElBQUlBO0lBQVUsQ0FBQyxDQUFDO0VBQUUsQ0FBQyxDQUFDO0FBQzlrQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1grQztBQUNjO0FBQ2pCO0FBQ3RDLElBQUlLLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFhbEYsRUFBRSxFQUFFO0VBQ3BDLElBQUl5QyxLQUFLLEdBQUd6QyxFQUFFLENBQUN5QyxLQUFLO0lBQUVqQixTQUFTLEdBQUd4QixFQUFFLENBQUN3QixTQUFTO0lBQUVRLFFBQVEsR0FBR2hDLEVBQUUsQ0FBQ2dDLFFBQVE7RUFDdEUsT0FBUW5CLHNEQUFJLENBQUMsSUFBSSxFQUFFO0lBQUVXLFNBQVMsRUFBRVIsNEVBQVUsQ0FBQ0MsaUVBQUcsQ0FBQ2lFLFlBQVksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDakUsaUVBQUcsQ0FBQ3dCLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFBRVQsUUFBUSxFQUFFQTtFQUFTLENBQUMsQ0FBQztBQUN6RyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOOEQ7QUFDRDtBQUN0QjtBQUNFO0FBQ0g7QUFDcUM7QUFDcEI7QUFDRztBQUNRO0FBQzVELElBQUlzRCxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBYWhFLEtBQUssRUFBRTtFQUNsQyxJQUFJdEIsRUFBRTtFQUNOLElBQUl1RixVQUFVLEdBQUdqRSxLQUFLLENBQUNpRSxVQUFVO0lBQUUvRCxTQUFTLEdBQUdGLEtBQUssQ0FBQ0UsU0FBUztJQUFFbEIsZ0JBQWdCLEdBQUdnQixLQUFLLENBQUNoQixnQkFBZ0I7SUFBRUQsYUFBYSxHQUFHaUIsS0FBSyxDQUFDakIsYUFBYTtFQUM5SSxJQUFJbUYsVUFBVSxHQUFHSixpREFBVSxDQUFDRCxzRkFBWSxDQUFDO0VBQ3pDLElBQUlNLEVBQUUsR0FBRzdGLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUU4RixXQUFXLEdBQUdELEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFBRUUsY0FBYyxHQUFHRixFQUFFLENBQUMsQ0FBQyxDQUFDO0VBQ2xFOUYsZ0RBQVMsQ0FBQyxZQUFZO0lBQ2xCLElBQUk2RixVQUFVLENBQUN4SSxNQUFNLEtBQUssQ0FBQyxFQUFFO01BQ3pCMkksY0FBYyxDQUFDTix5RUFBUyxDQUFDRyxVQUFVLENBQUMsQ0FBQztJQUN6QztFQUNKLENBQUMsRUFBRSxDQUFDQSxVQUFVLENBQUMsQ0FBQztFQUNoQixJQUFJSSxJQUFJLElBQUk1RixFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQ2ZBLEVBQUUsQ0FBQ2lCLDREQUFHLENBQUM0RSxRQUFRLENBQUMsR0FBR04sVUFBVSxFQUM3QnZGLEVBQUUsQ0FBQztFQUNQLE9BQVFlLHVEQUFLLENBQUMsU0FBUyxFQUFFO0lBQUVTLFNBQVMsRUFBRVIsNEVBQVUsQ0FBQ0MsNERBQUcsQ0FBQ3FFLE9BQU8sRUFBRU0sSUFBSSxFQUFFLENBQUNwRSxTQUFTLEtBQUssSUFBSSxJQUFJQSxTQUFTLEtBQUssS0FBSyxDQUFDLEdBQUdBLFNBQVMsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUFFc0UsRUFBRSxFQUFFLFNBQVM7SUFBRTlELFFBQVEsRUFBRSxDQUFDbkIsc0RBQUksQ0FBQ3FFLDZFQUFZLEVBQUU7TUFBRXpDLEtBQUssRUFBRSx1QkFBdUIsQ0FBQztNQUFrQ1QsUUFBUSxFQUFFO0lBQXlELENBQUMsQ0FBQyxFQUFFbkIsc0RBQUksQ0FBQytCLGlEQUFHLEVBQUU7TUFBRXBCLFNBQVMsRUFBRVAsNERBQUcsQ0FBQzhFO0lBQWEsQ0FBQyxDQUFDLEVBQUVsRixzREFBSSxDQUFDLElBQUksRUFBRTtNQUFFVyxTQUFTLEVBQUVQLDREQUFHLENBQUMrRSxlQUFlO01BQUVoRSxRQUFRLEVBQUUwRCxXQUFXLENBQUNPLEdBQUcsQ0FBQyxVQUFVMUUsSUFBSSxFQUFFMkUsS0FBSyxFQUFFO1FBQUUsT0FBUXJGLHNEQUFJLENBQUMsSUFBSSxFQUFFO1VBQUVXLFNBQVMsRUFBRVAsNERBQUcsQ0FBQ2tGLGFBQWE7VUFBRW5FLFFBQVEsRUFBRW5CLHNEQUFJLENBQUNRLG9EQUFJLEVBQUU7WUFBRUUsSUFBSSxFQUFFQSxJQUFJO1lBQUVqQixnQkFBZ0IsRUFBRUEsZ0JBQWdCO1lBQUVELGFBQWEsRUFBRUE7VUFBYyxDQUFDO1FBQUUsQ0FBQyxFQUFFNkYsS0FBSyxDQUFDO01BQUcsQ0FBQztJQUFFLENBQUMsQ0FBQztFQUFFLENBQUMsQ0FBQztBQUMxbkIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCRCxJQUFJMUosUUFBUSxHQUFJLFNBQUksSUFBSSxTQUFJLENBQUNBLFFBQVEsSUFBSyxZQUFZO0VBQ2xEQSxRQUFRLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBTSxJQUFJLFVBQVNDLENBQUMsRUFBRTtJQUNwQyxLQUFLLElBQUlDLENBQUMsRUFBRUMsQ0FBQyxHQUFHLENBQUMsRUFBRUMsQ0FBQyxHQUFHQyxTQUFTLENBQUNDLE1BQU0sRUFBRUgsQ0FBQyxHQUFHQyxDQUFDLEVBQUVELENBQUMsRUFBRSxFQUFFO01BQ2pERCxDQUFDLEdBQUdHLFNBQVMsQ0FBQ0YsQ0FBQyxDQUFDO01BQ2hCLEtBQUssSUFBSUksQ0FBQyxJQUFJTCxDQUFDLEVBQUUsSUFBSUgsTUFBTSxDQUFDUyxTQUFTLENBQUNDLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDUixDQUFDLEVBQUVLLENBQUMsQ0FBQyxFQUMzRE4sQ0FBQyxDQUFDTSxDQUFDLENBQUMsR0FBR0wsQ0FBQyxDQUFDSyxDQUFDLENBQUM7SUFDbkI7SUFDQSxPQUFPTixDQUFDO0VBQ1osQ0FBQztFQUNELE9BQU9ILFFBQVEsQ0FBQ2EsS0FBSyxDQUFDLElBQUksRUFBRU4sU0FBUyxDQUFDO0FBQzFDLENBQUM7QUFDcUY7QUFDeEI7QUFDakI7QUFDRDtBQUNLO0FBQzFDLElBQUl5SixZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBYWxGLEtBQUssRUFBRTtFQUN2QyxJQUFJdEIsRUFBRTtFQUNOLElBQUlLLGFBQWEsR0FBR2lCLEtBQUssQ0FBQ2pCLGFBQWE7SUFBRUMsZ0JBQWdCLEdBQUdnQixLQUFLLENBQUNoQixnQkFBZ0I7SUFBRWtCLFNBQVMsR0FBR0YsS0FBSyxDQUFDRSxTQUFTO0VBQy9HLElBQUlvRSxJQUFJLElBQUk1RixFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQ2ZBLEVBQUUsQ0FBQ2lCLGlFQUFHLENBQUN3RixNQUFNLENBQUMsR0FBR3BHLGFBQWEsQ0FBQ0osTUFBTSxFQUNyQ0QsRUFBRSxDQUFDO0VBQ1AsSUFBSTBHLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFBLEVBQWU7SUFDekJwRyxnQkFBZ0IsQ0FBQzlELFFBQVEsQ0FBQ0EsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFNkQsYUFBYSxDQUFDLEVBQUU7TUFBRUgsTUFBTSxFQUFFLElBQUk7TUFBRUUsUUFBUSxFQUFFLElBQUk7TUFBRUQsUUFBUSxFQUFFLElBQUk7TUFBRUYsTUFBTSxFQUFFO0lBQU0sQ0FBQyxDQUFDLENBQUM7SUFDeEhTLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixhQUFhLENBQUM7RUFDOUIsQ0FBQztFQUNELElBQUlzRyxjQUFjLEdBQUcsU0FBakJBLGNBQWNBLENBQWF4SSxDQUFDLEVBQUU7SUFDOUJBLENBQUMsQ0FBQ3lJLGVBQWUsQ0FBQyxDQUFDO0VBQ3ZCLENBQUM7RUFDRCxPQUFRL0Ysc0RBQUksQ0FBQyxLQUFLLEVBQUU7SUFBRVcsU0FBUyxFQUFFUiw0RUFBVSxDQUFDQyxpRUFBRyxDQUFDdUYsWUFBWSxFQUFFWixJQUFJLEVBQUUsQ0FBQ3BFLFNBQVMsS0FBSyxJQUFJLElBQUlBLFNBQVMsS0FBSyxLQUFLLENBQUMsR0FBR0EsU0FBUyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQUVRLFFBQVEsRUFBRW5CLHNEQUFJLENBQUMsS0FBSyxFQUFFO01BQUVXLFNBQVMsRUFBRVAsaUVBQUcsQ0FBQzRGLHFCQUFxQjtNQUFFckUsT0FBTyxFQUFFa0UsVUFBVTtNQUFFMUUsUUFBUSxFQUFFbkIsc0RBQUksQ0FBQyxLQUFLLEVBQUU7UUFBRVcsU0FBUyxFQUFFUCxpRUFBRyxDQUFDNkYscUJBQXFCO1FBQUV0RSxPQUFPLEVBQUVtRSxjQUFjO1FBQUUzRSxRQUFRLEVBQUczQixhQUFhLENBQUNGLFFBQVEsS0FBSyxJQUFJLElBQUlFLGFBQWEsQ0FBQ0QsUUFBUSxLQUFLLElBQUksR0FDeldXLHVEQUFLLENBQUNzRix1REFBUyxFQUFFO1VBQUVyRSxRQUFRLEVBQUUsQ0FBQ25CLHNEQUFJLENBQUN5RixzREFBSyxFQUFFO1lBQUVsRyxRQUFRLEVBQUVDLGFBQWEsQ0FBQ0QsUUFBUSxDQUFDMkcsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUFFQyxRQUFRLEVBQUUzRyxhQUFhLENBQUNGLFFBQVEsQ0FBQ3dCLFNBQVM7WUFBRXNGLFFBQVEsRUFBRTVHLGFBQWEsQ0FBQ0YsUUFBUSxDQUFDK0c7VUFBWSxDQUFDLENBQUMsRUFBRXJHLHNEQUFJLENBQUN5RixzREFBSyxFQUFFO1lBQUVsRyxRQUFRLEVBQUVDLGFBQWEsQ0FBQ0QsUUFBUSxDQUFDMkcsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUFFQyxRQUFRLEVBQUUzRyxhQUFhLENBQUNGLFFBQVEsQ0FBQ3lCLFNBQVM7WUFBRXFGLFFBQVEsRUFBRTVHLGFBQWEsQ0FBQ0YsUUFBUSxDQUFDZ0g7VUFBWSxDQUFDLENBQUM7UUFBRSxDQUFDLENBQUMsR0FDcFZ0RyxzREFBSSxDQUFDMEYsMkRBQU0sRUFBRSxDQUFDLENBQUM7TUFBRSxDQUFDO0lBQUUsQ0FBQztFQUFFLENBQUMsQ0FBQztBQUMvQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ0QsSUFBSS9KLFFBQVEsR0FBSSxTQUFJLElBQUksU0FBSSxDQUFDQSxRQUFRLElBQUssWUFBWTtFQUNsREEsUUFBUSxHQUFHQyxNQUFNLENBQUNDLE1BQU0sSUFBSSxVQUFTQyxDQUFDLEVBQUU7SUFDcEMsS0FBSyxJQUFJQyxDQUFDLEVBQUVDLENBQUMsR0FBRyxDQUFDLEVBQUVDLENBQUMsR0FBR0MsU0FBUyxDQUFDQyxNQUFNLEVBQUVILENBQUMsR0FBR0MsQ0FBQyxFQUFFRCxDQUFDLEVBQUUsRUFBRTtNQUNqREQsQ0FBQyxHQUFHRyxTQUFTLENBQUNGLENBQUMsQ0FBQztNQUNoQixLQUFLLElBQUlJLENBQUMsSUFBSUwsQ0FBQyxFQUFFLElBQUlILE1BQU0sQ0FBQ1MsU0FBUyxDQUFDQyxjQUFjLENBQUNDLElBQUksQ0FBQ1IsQ0FBQyxFQUFFSyxDQUFDLENBQUMsRUFDM0ROLENBQUMsQ0FBQ00sQ0FBQyxDQUFDLEdBQUdMLENBQUMsQ0FBQ0ssQ0FBQyxDQUFDO0lBQ25CO0lBQ0EsT0FBT04sQ0FBQztFQUNaLENBQUM7RUFDRCxPQUFPSCxRQUFRLENBQUNhLEtBQUssQ0FBQyxJQUFJLEVBQUVOLFNBQVMsQ0FBQztBQUMxQyxDQUFDO0FBQ0QsSUFBSXFLLE1BQU0sR0FBSSxTQUFJLElBQUksU0FBSSxDQUFDQSxNQUFNLElBQUssVUFBVXhLLENBQUMsRUFBRXVCLENBQUMsRUFBRTtFQUNsRCxJQUFJeEIsQ0FBQyxHQUFHLENBQUMsQ0FBQztFQUNWLEtBQUssSUFBSU0sQ0FBQyxJQUFJTCxDQUFDLEVBQUUsSUFBSUgsTUFBTSxDQUFDUyxTQUFTLENBQUNDLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDUixDQUFDLEVBQUVLLENBQUMsQ0FBQyxJQUFJa0IsQ0FBQyxDQUFDa0osT0FBTyxDQUFDcEssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUMvRU4sQ0FBQyxDQUFDTSxDQUFDLENBQUMsR0FBR0wsQ0FBQyxDQUFDSyxDQUFDLENBQUM7RUFDZixJQUFJTCxDQUFDLElBQUksSUFBSSxJQUFJLE9BQU9ILE1BQU0sQ0FBQzZLLHFCQUFxQixLQUFLLFVBQVUsRUFDL0QsS0FBSyxJQUFJekssQ0FBQyxHQUFHLENBQUMsRUFBRUksQ0FBQyxHQUFHUixNQUFNLENBQUM2SyxxQkFBcUIsQ0FBQzFLLENBQUMsQ0FBQyxFQUFFQyxDQUFDLEdBQUdJLENBQUMsQ0FBQ0QsTUFBTSxFQUFFSCxDQUFDLEVBQUUsRUFBRTtJQUNwRSxJQUFJc0IsQ0FBQyxDQUFDa0osT0FBTyxDQUFDcEssQ0FBQyxDQUFDSixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSUosTUFBTSxDQUFDUyxTQUFTLENBQUNxSyxvQkFBb0IsQ0FBQ25LLElBQUksQ0FBQ1IsQ0FBQyxFQUFFSyxDQUFDLENBQUNKLENBQUMsQ0FBQyxDQUFDLEVBQzFFRixDQUFDLENBQUNNLENBQUMsQ0FBQ0osQ0FBQyxDQUFDLENBQUMsR0FBR0QsQ0FBQyxDQUFDSyxDQUFDLENBQUNKLENBQUMsQ0FBQyxDQUFDO0VBQ3pCO0VBQ0osT0FBT0YsQ0FBQztBQUNaLENBQUM7QUFDdUQ7QUFDTztBQUNEO0FBQ3hCO0FBQzZCO0FBQ0s7QUFDakUsSUFBSTJKLEtBQUssR0FBRyxTQUFSQSxLQUFLQSxDQUFhaEYsS0FBSyxFQUFFO0VBQ2hDLElBQUkwRixRQUFRLEdBQUcxRixLQUFLLENBQUMwRixRQUFRO0lBQUVDLFFBQVEsR0FBRzNGLEtBQUssQ0FBQzJGLFFBQVE7SUFBRTdHLFFBQVEsR0FBR2tCLEtBQUssQ0FBQ2xCLFFBQVE7RUFDbkYsSUFBSXVELFVBQVUsR0FBR3ZELFFBQVEsQ0FBQ3VELFVBQVU7SUFBRStELEtBQUssR0FBR3RILFFBQVEsQ0FBQ3NILEtBQUs7SUFBRTdELE1BQU0sR0FBR3pELFFBQVEsQ0FBQ3lELE1BQU07SUFBRUMsTUFBTSxHQUFHMUQsUUFBUSxDQUFDMEQsTUFBTTtJQUFFQyxNQUFNLEdBQUczRCxRQUFRLENBQUMyRCxNQUFNO0lBQUU0RCxZQUFZLEdBQUd2SCxRQUFRLENBQUN1SCxZQUFZO0lBQUVDLFlBQVksR0FBR3hILFFBQVEsQ0FBQ3dILFlBQVk7SUFBRUMsWUFBWSxHQUFHekgsUUFBUSxDQUFDeUgsWUFBWTtJQUFFekQsVUFBVSxHQUFHaEUsUUFBUSxDQUFDZ0UsVUFBVTtJQUFFQyxVQUFVLEdBQUdqRSxRQUFRLENBQUNpRSxVQUFVO0lBQUVDLE9BQU8sR0FBR2xFLFFBQVEsQ0FBQ2tFLE9BQU87SUFBRUMsTUFBTSxHQUFHbkUsUUFBUSxDQUFDbUUsTUFBTTtJQUFFQyxLQUFLLEdBQUdwRSxRQUFRLENBQUNvRSxLQUFLO0lBQUVDLFFBQVEsR0FBR3JFLFFBQVEsQ0FBQ3FFLFFBQVE7SUFBRUMsTUFBTSxHQUFHdEUsUUFBUSxDQUFDc0UsTUFBTTtJQUFFQyxJQUFJLEdBQUd2RSxRQUFRLENBQUN1RSxJQUFJO0lBQUVDLFlBQVksR0FBR3hFLFFBQVEsQ0FBQ3dFLFlBQVk7SUFBRVosS0FBSyxHQUFHNUQsUUFBUSxDQUFDNEQsS0FBSztJQUFFQyxLQUFLLEdBQUc3RCxRQUFRLENBQUM2RCxLQUFLO0lBQUVDLEtBQUssR0FBRzlELFFBQVEsQ0FBQzhELEtBQUs7SUFBRUMsS0FBSyxHQUFHL0QsUUFBUSxDQUFDK0QsS0FBSztJQUFFMkQsT0FBTyxHQUFHMUgsUUFBUSxDQUFDMEgsT0FBTztFQUM5bkIsT0FBUS9HLHVEQUFLLENBQUMsS0FBSyxFQUFFO0lBQUVTLFNBQVMsRUFBRVAsMERBQUcsQ0FBQ3FGLEtBQUs7SUFBRXRFLFFBQVEsRUFBRSxDQUFDakIsdURBQUssQ0FBQyxLQUFLLEVBQUU7TUFBRVMsU0FBUyxFQUFFUCwwREFBRyxDQUFDOEcsY0FBYztNQUFFL0YsUUFBUSxFQUFFLENBQUNuQixzREFBSSxDQUFDLEtBQUssRUFBRTtRQUFFVyxTQUFTLEVBQUVQLDBEQUFHLENBQUMrRyxXQUFXO1FBQUVDLEdBQUcsRUFBRWpCLFFBQVE7UUFBRWtCLEdBQUcsRUFBRWpCO01BQVMsQ0FBQyxDQUFDLEVBQUVwRyxzREFBSSxDQUFDcUUsNkVBQVksRUFBRTtRQUFFMUQsU0FBUyxFQUFFUiw0RUFBVSxDQUFDQywwREFBRyxDQUFDa0gsV0FBVyxDQUFDO1FBQUUxRixLQUFLLEVBQUUsb0JBQW9CLENBQUM7UUFBK0JULFFBQVEsRUFBRWlGO01BQVMsQ0FBQyxDQUFDO0lBQUUsQ0FBQyxDQUFDLEVBQUVsRyx1REFBSyxDQUFDLE9BQU8sRUFBRTtNQUFFUyxTQUFTLEVBQUVQLDBEQUFHLENBQUNtSCxnQkFBZ0I7TUFBRXBHLFFBQVEsRUFBRSxDQUFDakIsdURBQUssQ0FBQyxPQUFPLEVBQUU7UUFBRWlCLFFBQVEsRUFBRSxDQUFDakIsdURBQUssQ0FBQyxJQUFJLEVBQUU7VUFBRVMsU0FBUyxFQUFFUCwwREFBRyxDQUFDb0gsVUFBVTtVQUFFckcsUUFBUSxFQUFFLENBQUNuQixzREFBSSxDQUFDLElBQUksRUFBRTtZQUFFeUgsT0FBTyxFQUFFLENBQUM7WUFBRUMsT0FBTyxFQUFFLENBQUM7WUFBRS9HLFNBQVMsRUFBRVAsMERBQUcsQ0FBQ3VILFlBQVk7WUFBRXhHLFFBQVEsRUFBRTtVQUF1QyxDQUFDLENBQUMsRUFBRW5CLHNEQUFJLENBQUMsSUFBSSxFQUFFO1lBQUV5SCxPQUFPLEVBQUUsQ0FBQztZQUFFRyxLQUFLLEVBQUUsdUZBQXVGO1lBQUVqSCxTQUFTLEVBQUVQLDBEQUFHLENBQUN1SCxZQUFZO1lBQUV4RyxRQUFRLEVBQUU7VUFBZSxDQUFDLENBQUMsRUFBRW5CLHNEQUFJLENBQUMsSUFBSSxFQUFFO1lBQUV5SCxPQUFPLEVBQUUsQ0FBQztZQUFFRyxLQUFLLEVBQUUsaUZBQWlGO1lBQUVqSCxTQUFTLEVBQUVQLDBEQUFHLENBQUN1SCxZQUFZO1lBQUV4RyxRQUFRLEVBQUU7VUFBMkIsQ0FBQyxDQUFDLEVBQUVuQixzREFBSSxDQUFDLElBQUksRUFBRTtZQUFFMEgsT0FBTyxFQUFFLENBQUM7WUFBRS9HLFNBQVMsRUFBRVAsMERBQUcsQ0FBQ3VILFlBQVk7WUFBRXhHLFFBQVEsRUFBRTtVQUF1QyxDQUFDLENBQUMsRUFBRW5CLHNEQUFJLENBQUMsSUFBSSxFQUFFO1lBQUUwSCxPQUFPLEVBQUUsQ0FBQztZQUFFL0csU0FBUyxFQUFFUCwwREFBRyxDQUFDdUgsWUFBWTtZQUFFeEcsUUFBUSxFQUFFO1VBQTZDLENBQUMsQ0FBQyxFQUFFbkIsc0RBQUksQ0FBQyxJQUFJLEVBQUU7WUFBRXlILE9BQU8sRUFBRSxDQUFDO1lBQUVHLEtBQUssRUFBRSw2RkFBNkY7WUFBRWpILFNBQVMsRUFBRVAsMERBQUcsQ0FBQ3VILFlBQVk7WUFBRXhHLFFBQVEsRUFBRTtVQUFlLENBQUMsQ0FBQyxFQUFFbkIsc0RBQUksQ0FBQyxJQUFJLEVBQUU7WUFBRXlILE9BQU8sRUFBRSxDQUFDO1lBQUVHLEtBQUssRUFBRSx3REFBd0Q7WUFBRWpILFNBQVMsRUFBRVAsMERBQUcsQ0FBQ3VILFlBQVk7WUFBRXhHLFFBQVEsRUFBRTtVQUFlLENBQUMsQ0FBQyxFQUFFbkIsc0RBQUksQ0FBQyxJQUFJLEVBQUU7WUFBRXlILE9BQU8sRUFBRSxDQUFDO1lBQUVHLEtBQUssRUFBRSxzQ0FBc0M7WUFBRWpILFNBQVMsRUFBRVAsMERBQUcsQ0FBQ3VILFlBQVk7WUFBRXhHLFFBQVEsRUFBRTtVQUFlLENBQUMsQ0FBQyxFQUFFbkIsc0RBQUksQ0FBQyxJQUFJLEVBQUU7WUFBRXlILE9BQU8sRUFBRSxDQUFDO1lBQUVHLEtBQUssRUFBRSxrREFBa0Q7WUFBRWpILFNBQVMsRUFBRVAsMERBQUcsQ0FBQ3VILFlBQVk7WUFBRXhHLFFBQVEsRUFBRTtVQUFlLENBQUMsQ0FBQyxFQUFFbkIsc0RBQUksQ0FBQyxJQUFJLEVBQUU7WUFBRXlILE9BQU8sRUFBRSxDQUFDO1lBQUVHLEtBQUssRUFBRSwwQkFBMEI7WUFBRWpILFNBQVMsRUFBRVAsMERBQUcsQ0FBQ3VILFlBQVk7WUFBRXhHLFFBQVEsRUFBRTtVQUFTLENBQUMsQ0FBQyxFQUFFbkIsc0RBQUksQ0FBQyxJQUFJLEVBQUU7WUFBRXlILE9BQU8sRUFBRSxDQUFDO1lBQUVHLEtBQUssRUFBRSxpRkFBaUY7WUFBRWpILFNBQVMsRUFBRVAsMERBQUcsQ0FBQ3VILFlBQVk7WUFBRXhHLFFBQVEsRUFBRTtVQUFlLENBQUMsQ0FBQyxFQUFFbkIsc0RBQUksQ0FBQyxJQUFJLEVBQUU7WUFBRXlILE9BQU8sRUFBRSxDQUFDO1lBQUVHLEtBQUssRUFBRSx5REFBeUQ7WUFBRWpILFNBQVMsRUFBRVAsMERBQUcsQ0FBQ3VILFlBQVk7WUFBRXhHLFFBQVEsRUFBRTtVQUFNLENBQUMsQ0FBQztRQUFFLENBQUMsQ0FBQyxFQUFFakIsdURBQUssQ0FBQyxJQUFJLEVBQUU7VUFBRVMsU0FBUyxFQUFFUCwwREFBRyxDQUFDb0gsVUFBVTtVQUFFckcsUUFBUSxFQUFFLENBQUNuQixzREFBSSxDQUFDLElBQUksRUFBRTtZQUFFNEgsS0FBSyxFQUFFLHlHQUF5RztZQUFFakgsU0FBUyxFQUFFUCwwREFBRyxDQUFDdUgsWUFBWTtZQUFFeEcsUUFBUSxFQUFFO1VBQXVCLENBQUMsQ0FBQyxFQUFFbkIsc0RBQUksQ0FBQyxJQUFJLEVBQUU7WUFBRTRILEtBQUssRUFBRSx5R0FBeUc7WUFBRWpILFNBQVMsRUFBRVAsMERBQUcsQ0FBQ3VILFlBQVk7WUFBRXhHLFFBQVEsRUFBRTtVQUF1QixDQUFDLENBQUMsRUFBRW5CLHNEQUFJLENBQUMsSUFBSSxFQUFFO1lBQUU0SCxLQUFLLEVBQUUsc0VBQXNFO1lBQUVqSCxTQUFTLEVBQUVQLDBEQUFHLENBQUN1SCxZQUFZO1lBQUV4RyxRQUFRLEVBQUU7VUFBUyxDQUFDLENBQUMsRUFBRW5CLHNEQUFJLENBQUMsSUFBSSxFQUFFO1lBQUU0SCxLQUFLLEVBQUUsdUZBQXVGO1lBQUVqSCxTQUFTLEVBQUVQLDBEQUFHLENBQUN1SCxZQUFZO1lBQUV4RyxRQUFRLEVBQUU7VUFBZSxDQUFDLENBQUMsRUFBRW5CLHNEQUFJLENBQUMsSUFBSSxFQUFFO1lBQUU0SCxLQUFLLEVBQUUsaUhBQWlIO1lBQUVqSCxTQUFTLEVBQUVQLDBEQUFHLENBQUN1SCxZQUFZO1lBQUV4RyxRQUFRLEVBQUU7VUFBZSxDQUFDLENBQUMsRUFBRW5CLHNEQUFJLENBQUMsSUFBSSxFQUFFO1lBQUU0SCxLQUFLLEVBQUUsaUhBQWlIO1lBQUVqSCxTQUFTLEVBQUVQLDBEQUFHLENBQUN1SCxZQUFZO1lBQUV4RyxRQUFRLEVBQUU7VUFBZSxDQUFDLENBQUMsRUFBRW5CLHNEQUFJLENBQUMsSUFBSSxFQUFFO1lBQUU0SCxLQUFLLEVBQUUsMkVBQTJFO1lBQUVqSCxTQUFTLEVBQUVQLDBEQUFHLENBQUN1SCxZQUFZO1lBQUV4RyxRQUFRLEVBQUU7VUFBZSxDQUFDLENBQUM7UUFBRSxDQUFDLENBQUM7TUFBRSxDQUFDLENBQUMsRUFBRW5CLHNEQUFJLENBQUMsT0FBTyxFQUFFO1FBQUVtQixRQUFRLEVBQUU4RixPQUFPLENBQUM3QixHQUFHLENBQUMsVUFBVWpHLEVBQUUsRUFBRWtHLEtBQUssRUFBRTtVQUMxOUcsSUFBSXdDLFdBQVcsR0FBR3RCLE1BQU0sQ0FBQ3BILEVBQUUsRUFBRSxFQUFFLENBQUM7VUFDaEMsT0FBUXlILG9EQUFjLENBQUNsRSxrRkFBYyxFQUFFL0csUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFa00sV0FBVyxFQUFFO1lBQUVDLEdBQUcsRUFBRXpDO1VBQU0sQ0FBQyxDQUFDLENBQUM7UUFDckYsQ0FBQztNQUFFLENBQUMsQ0FBQyxFQUFFckYsc0RBQUksQ0FBQyxPQUFPLEVBQUU7UUFBRW1CLFFBQVEsRUFBRWpCLHVEQUFLLENBQUMsSUFBSSxFQUFFO1VBQUVTLFNBQVMsRUFBRVAsMERBQUcsQ0FBQ29ILFVBQVU7VUFBRXJHLFFBQVEsRUFBRSxDQUFDbkIsc0RBQUksQ0FBQyxJQUFJLEVBQUU7WUFBRVcsU0FBUyxFQUFFUCwwREFBRyxDQUFDMkgsV0FBVztZQUFFTCxPQUFPLEVBQUUsQ0FBQztZQUFFdkcsUUFBUSxFQUFFO1VBQWtDLENBQUMsQ0FBQyxFQUFFbkIsc0RBQUksQ0FBQyxJQUFJLEVBQUU7WUFBRVcsU0FBUyxFQUFFUCwwREFBRyxDQUFDMkgsV0FBVztZQUFFNUcsUUFBUSxFQUFFMkI7VUFBVyxDQUFDLENBQUMsRUFBRTlDLHNEQUFJLENBQUMsSUFBSSxFQUFFO1lBQUVXLFNBQVMsRUFBRVAsMERBQUcsQ0FBQzJILFdBQVc7WUFBRTVHLFFBQVEsRUFBRTBGO1VBQU0sQ0FBQyxDQUFDLEVBQUUzRyx1REFBSyxDQUFDLElBQUksRUFBRTtZQUFFUyxTQUFTLEVBQUVQLDBEQUFHLENBQUMySCxXQUFXO1lBQUU1RyxRQUFRLEVBQUUsQ0FBQzhCLE1BQU0sRUFBRSxHQUFHLEVBQUVqRCxzREFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFK0csWUFBWSxFQUFFLEdBQUc7VUFBRSxDQUFDLENBQUMsRUFBRTdHLHVEQUFLLENBQUMsSUFBSSxFQUFFO1lBQUVTLFNBQVMsRUFBRVAsMERBQUcsQ0FBQzJILFdBQVc7WUFBRTVHLFFBQVEsRUFBRSxDQUFDK0IsTUFBTSxFQUFFLEdBQUcsRUFBRWxELHNEQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUVnSCxZQUFZLEVBQUUsR0FBRztVQUFFLENBQUMsQ0FBQyxFQUFFOUcsdURBQUssQ0FBQyxJQUFJLEVBQUU7WUFBRVMsU0FBUyxFQUFFUCwwREFBRyxDQUFDMkgsV0FBVztZQUFFNUcsUUFBUSxFQUFFLENBQUNnQyxLQUFLLEdBQUdDLEtBQUssRUFBRSxHQUFHLEVBQUVDLEtBQUssR0FBR0MsS0FBSyxFQUFFdEQsc0RBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUNtRCxLQUFLLEdBQUdDLEtBQUssSUFBSSxHQUFHLElBQUlDLEtBQUssR0FBR0MsS0FBSyxDQUFDLEVBQUUwRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRztVQUFFLENBQUMsQ0FBQyxFQUFFOUgsdURBQUssQ0FBQyxJQUFJLEVBQUU7WUFBRVMsU0FBUyxFQUFFUCwwREFBRyxDQUFDMkgsV0FBVztZQUFFNUcsUUFBUSxFQUFFLENBQUM2QixNQUFNLEVBQUUsR0FBRyxFQUFFaEQsc0RBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRThHLFlBQVksRUFBRSxHQUFHO1VBQUUsQ0FBQyxDQUFDLEVBQUU5RyxzREFBSSxDQUFDLElBQUksRUFBRTtZQUFFVyxTQUFTLEVBQUVQLDBEQUFHLENBQUMySCxXQUFXO1lBQUU1RyxRQUFRLEVBQUVvQztVQUFXLENBQUMsQ0FBQyxFQUFFdkQsc0RBQUksQ0FBQyxJQUFJLEVBQUU7WUFBRVcsU0FBUyxFQUFFUCwwREFBRyxDQUFDMkgsV0FBVztZQUFFNUcsUUFBUSxFQUFFcUM7VUFBVyxDQUFDLENBQUMsRUFBRXhELHNEQUFJLENBQUMsSUFBSSxFQUFFO1lBQUVXLFNBQVMsRUFBRVAsMERBQUcsQ0FBQzJILFdBQVc7WUFBRTVHLFFBQVEsRUFBRXNDO1VBQVEsQ0FBQyxDQUFDLEVBQUV6RCxzREFBSSxDQUFDLElBQUksRUFBRTtZQUFFVyxTQUFTLEVBQUVQLDBEQUFHLENBQUMySCxXQUFXO1lBQUU1RyxRQUFRLEVBQUV1QztVQUFPLENBQUMsQ0FBQyxFQUFFMUQsc0RBQUksQ0FBQyxJQUFJLEVBQUU7WUFBRVcsU0FBUyxFQUFFUCwwREFBRyxDQUFDMkgsV0FBVztZQUFFNUcsUUFBUSxFQUFFd0M7VUFBTSxDQUFDLENBQUMsRUFBRTNELHNEQUFJLENBQUMsSUFBSSxFQUFFO1lBQUVXLFNBQVMsRUFBRVAsMERBQUcsQ0FBQzJILFdBQVc7WUFBRTVHLFFBQVEsRUFBRXlDO1VBQVMsQ0FBQyxDQUFDLEVBQUU1RCxzREFBSSxDQUFDLElBQUksRUFBRTtZQUFFVyxTQUFTLEVBQUVQLDBEQUFHLENBQUMySCxXQUFXO1lBQUU1RyxRQUFRLEVBQUUwQztVQUFPLENBQUMsQ0FBQyxFQUFFN0Qsc0RBQUksQ0FBQyxJQUFJLEVBQUU7WUFBRVcsU0FBUyxFQUFFUCwwREFBRyxDQUFDMkgsV0FBVztZQUFFNUcsUUFBUSxFQUFFMkM7VUFBSyxDQUFDLENBQUMsRUFBRTlELHNEQUFJLENBQUMsSUFBSSxFQUFFO1lBQUVXLFNBQVMsRUFBRVAsMERBQUcsQ0FBQzJILFdBQVc7WUFBRTVHLFFBQVEsRUFBRTRDO1VBQWEsQ0FBQyxDQUFDLEVBQUUvRCxzREFBSSxDQUFDLElBQUksRUFBRTtZQUFFVyxTQUFTLEVBQUVQLDBEQUFHLENBQUMySDtVQUFZLENBQUMsQ0FBQztRQUFFLENBQUM7TUFBRSxDQUFDLENBQUM7SUFBRSxDQUFDLENBQUM7RUFBRSxDQUFDLENBQUM7QUFDeDZDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DRDtBQUNnSDtBQUNqQjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHFHQUFxRyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsZ0NBQWdDLGtCQUFrQiw2QkFBNkIsa0JBQWtCLDJCQUEyQix3QkFBd0IsY0FBYywyQ0FBMkMsNkJBQTZCLDZCQUE2Qiw4REFBOEQsd0JBQXdCLGdCQUFnQiwwQkFBMEIsd0NBQXdDLHlDQUF5QyxLQUFLLHdCQUF3QixvQkFBb0IsMEJBQTBCLGdCQUFnQixLQUFLLG9CQUFvQixrQkFBa0IsbUJBQW1CLCtCQUErQixrQ0FBa0MsbUNBQW1DLEtBQUssZ0JBQWdCLDBCQUEwQix3Q0FBd0MseUNBQXlDLEtBQUssbUJBQW1CLG1DQUFtQyxrQkFBa0IsbUJBQW1CLEtBQUssR0FBRyxtQkFBbUI7QUFDMTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdER2QztBQUNnSDtBQUNqQjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sbUdBQW1HLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLGlEQUFpRCxRQUFRLDJDQUEyQyxpQkFBaUIsS0FBSyxXQUFXLDJDQUEyQyxxQkFBcUIsZ0JBQWdCLDZDQUE2QyxpQkFBaUIsS0FBSyxXQUFXLDJDQUEyQyxpQkFBaUIsS0FBSyxZQUFZLDJDQUEyQyxpQkFBaUIsS0FBSyxHQUFHLDRCQUE0QixhQUFhLG1DQUFtQyxpQkFBaUIsd0NBQXdDLEdBQUcsVUFBVSw2QkFBNkIsa0JBQWtCLGdDQUFnQyxlQUFlLGtCQUFrQixtQkFBbUIsS0FBSyxlQUFlLGlDQUFpQyw2Q0FBNkMsZUFBZSxvQ0FBb0MsNkNBQTZDLEtBQUssdUJBQXVCO0FBQ3oyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEdkM7QUFDZ0g7QUFDakI7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHlIQUF5SCxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVywwQ0FBMEMsY0FBYyxrQkFBa0IsMEJBQTBCLCtCQUErQixLQUFLLGdCQUFnQixrQkFBa0IsbUJBQW1CLCtCQUErQiwwQkFBMEIsS0FBSyxlQUFlLG1CQUFtQix5QkFBeUIsNkJBQTZCLHlCQUF5QiwwQkFBMEIsdUNBQXVDLGlEQUFpRCxLQUFLLEtBQUssbUJBQW1CO0FBQ3R5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CdkM7QUFDbUg7QUFDakI7QUFDbEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHNIQUFzSCxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyx3Q0FBd0Msd0JBQXdCLHVDQUF1QyxxQ0FBcUMsMEJBQTBCLDhCQUE4QixlQUFlLDJCQUEyQixLQUFLLGtCQUFrQix1Q0FBdUMsZ0NBQWdDLEtBQUsscUJBQXFCLDBDQUEwQyxLQUFLLEtBQUssbUJBQW1CO0FBQzVxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0J2QztBQUNtSDtBQUNqQjtBQUNsRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDZHQUE2RyxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxLQUFLLG1DQUFtQyxnQkFBZ0Isa0JBQWtCLDJCQUEyQix3QkFBd0IsaUJBQWlCLGdCQUFnQixpQkFBaUIsdUJBQXVCLGlCQUFpQiw2QkFBNkIsb0JBQW9CLGlCQUFpQix1QkFBdUIsb0NBQW9DLEtBQUssZUFBZSx5QkFBeUIsS0FBSyxHQUFHLGVBQWUsdUJBQXVCLGNBQWMscUJBQXFCLDJCQUEyQix3QkFBd0IsaUJBQWlCLG9CQUFvQiw0Q0FBNEMsMEJBQTBCLDhCQUE4QixnQkFBZ0Isc0JBQXNCLDhCQUE4QixLQUFLLHNCQUFzQix5QkFBeUIsMkJBQTJCLEtBQUsscUJBQXFCLG9CQUFvQixLQUFLLEdBQUcseUNBQXlDLHNCQUFzQiwrQkFBK0IsS0FBSyxpQkFBaUIsd0JBQXdCLGlDQUFpQyxzQkFBc0IsK0JBQStCLDRCQUE0QixrQkFBa0Isd0JBQXdCLGdDQUFnQyxPQUFPLEtBQUssR0FBRyxtQkFBbUI7QUFDcHhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFdkM7QUFDbUg7QUFDakI7QUFDbEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sdUhBQXVILFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyx3Q0FBd0Msb0JBQW9CLFdBQVcsY0FBYyxZQUFZLGFBQWEseUJBQXlCLGVBQWUseUJBQXlCLGdCQUFnQixrQkFBa0Isa0JBQWtCLG1CQUFtQixvQkFBb0IsOEJBQThCLDBCQUEwQiwyQ0FBMkMsS0FBSyxrQkFBa0Isb0JBQW9CLHFCQUFxQixzQkFBc0Isb0JBQW9CLDZCQUE2QixnQkFBZ0IsMkJBQTJCLDJCQUEyQix3Q0FBd0MsMEJBQTBCLHVCQUF1QixLQUFLLEdBQUcsYUFBYSxlQUFlLGtDQUFrQyx5QkFBeUIsOEJBQThCLDBCQUEwQixLQUFLLEdBQUcscUJBQXFCO0FBQ3p5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckR2QztBQUNnSDtBQUNqQjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHNHQUFzRyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsaUNBQWlDLGdCQUFnQixrQkFBa0IsMkJBQTJCLHdCQUF3QixjQUFjLGtCQUFrQixrQkFBa0Isb0JBQW9CLGdCQUFnQiwwQkFBMEIsS0FBSyxlQUFlLGtCQUFrQixtQkFBbUIsS0FBSyxvQkFBb0IsNkJBQTZCLGtCQUFrQixnQ0FBZ0MsS0FBSyxjQUFjLHFEQUFxRCxnQkFBZ0IsbUJBQW1CLDZCQUE2Qix5QkFBeUIsaURBQWlELDBCQUEwQix3Q0FBd0MsdUNBQXVDLEtBQUssZUFBZSxtQkFBbUIseUJBQXlCLDZCQUE2QiwwQkFBMEIsdUNBQXVDLHlCQUF5QixxREFBcUQsR0FBRyxtQkFBbUI7QUFDbDZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekR2QyxNQUFxRztBQUNyRyxNQUEyRjtBQUMzRixNQUFrRztBQUNsRyxNQUFxSDtBQUNySCxNQUE4RztBQUM5RyxNQUE4RztBQUM5RyxNQUEwTDtBQUMxTDtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDBKQUFPOzs7QUFHeEIsSUFBSSxJQUFVO0FBQ2QsT0FBTywwSkFBTyxXQUFXLFVBQVU7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMEpBQU87QUFDaEMsb0NBQW9DLCtJQUFXLEdBQUcsMEpBQU87O0FBRXpELElBQUksaUJBQWlCO0FBQ3JCLE1BQU0sa1NBQTZJO0FBQ25KLE1BQU07QUFBQTtBQUNOLHNEQUFzRCwrSUFBVyxHQUFHLDBKQUFPO0FBQzNFLGdCQUFnQixVQUFVOztBQUUxQjtBQUNBOztBQUVBLDBDQUEwQywrSUFBVyxHQUFHLDBKQUFPOztBQUUvRCxxQkFBcUIsMEpBQU87QUFDNUIsT0FBTztBQUNQO0FBQ0E7O0FBRUEsRUFBRSxVQUFVO0FBQ1o7QUFDQSxHQUFHO0FBQ0g7OztBQUc0SjtBQUM1SixPQUFPLGlFQUFlLDBKQUFPLElBQUksMEpBQU8sVUFBVSwwSkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RTdFLE1BQXFHO0FBQ3JHLE1BQTJGO0FBQzNGLE1BQWtHO0FBQ2xHLE1BQXFIO0FBQ3JILE1BQThHO0FBQzlHLE1BQThHO0FBQzlHLE1BQXlMO0FBQ3pMO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMseUpBQU87OztBQUd4QixJQUFJLElBQVU7QUFDZCxPQUFPLHlKQUFPLFdBQVcsVUFBVTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix5SkFBTztBQUNoQyxvQ0FBb0MsOElBQVcsR0FBRyx5SkFBTzs7QUFFekQsSUFBSSxpQkFBaUI7QUFDckIsTUFBTSwrUkFBNEk7QUFDbEosTUFBTTtBQUFBO0FBQ04sc0RBQXNELDhJQUFXLEdBQUcseUpBQU87QUFDM0UsZ0JBQWdCLFVBQVU7O0FBRTFCO0FBQ0E7O0FBRUEsMENBQTBDLDhJQUFXLEdBQUcseUpBQU87O0FBRS9ELHFCQUFxQix5SkFBTztBQUM1QixPQUFPO0FBQ1A7QUFDQTs7QUFFQSxFQUFFLFVBQVU7QUFDWjtBQUNBLEdBQUc7QUFDSDs7O0FBRzJKO0FBQzNKLE9BQU8saUVBQWUseUpBQU8sSUFBSSx5SkFBTyxVQUFVLHlKQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVFN0UsTUFBcUc7QUFDckcsTUFBMkY7QUFDM0YsTUFBa0c7QUFDbEcsTUFBcUg7QUFDckgsTUFBOEc7QUFDOUcsTUFBOEc7QUFDOUcsTUFBb007QUFDcE07QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxvS0FBTzs7O0FBR3hCLElBQUksSUFBVTtBQUNkLE9BQU8sb0tBQU8sV0FBVyxVQUFVO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG9LQUFPO0FBQ2hDLG9DQUFvQyx5SkFBVyxHQUFHLG9LQUFPOztBQUV6RCxJQUFJLGlCQUFpQjtBQUNyQixNQUFNLGdVQUF1SjtBQUM3SixNQUFNO0FBQUE7QUFDTixzREFBc0QseUpBQVcsR0FBRyxvS0FBTztBQUMzRSxnQkFBZ0IsVUFBVTs7QUFFMUI7QUFDQTs7QUFFQSwwQ0FBMEMseUpBQVcsR0FBRyxvS0FBTzs7QUFFL0QscUJBQXFCLG9LQUFPO0FBQzVCLE9BQU87QUFDUDtBQUNBOztBQUVBLEVBQUUsVUFBVTtBQUNaO0FBQ0EsR0FBRztBQUNIOzs7QUFHc0s7QUFDdEssT0FBTyxpRUFBZSxvS0FBTyxJQUFJLG9LQUFPLFVBQVUsb0tBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUU3RSxNQUF3RztBQUN4RyxNQUE4RjtBQUM5RixNQUFxRztBQUNyRyxNQUF3SDtBQUN4SCxNQUFpSDtBQUNqSCxNQUFpSDtBQUNqSCxNQUF3TTtBQUN4TTtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLGtLQUFPOzs7QUFHeEIsSUFBSSxJQUFVO0FBQ2QsT0FBTyxrS0FBTyxXQUFXLFVBQVU7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsa0tBQU87QUFDaEMsb0NBQW9DLHVKQUFXLEdBQUcsa0tBQU87O0FBRXpELElBQUksaUJBQWlCO0FBQ3JCLE1BQU0saVVBQTJKO0FBQ2pLLE1BQU07QUFBQTtBQUNOLHNEQUFzRCx1SkFBVyxHQUFHLGtLQUFPO0FBQzNFLGdCQUFnQixVQUFVOztBQUUxQjtBQUNBOztBQUVBLDBDQUEwQyx1SkFBVyxHQUFHLGtLQUFPOztBQUUvRCxxQkFBcUIsa0tBQU87QUFDNUIsT0FBTztBQUNQO0FBQ0E7O0FBRUEsRUFBRSxVQUFVO0FBQ1o7QUFDQSxHQUFHO0FBQ0g7OztBQUcwSztBQUMxSyxPQUFPLGlFQUFlLGtLQUFPLElBQUksa0tBQU8sVUFBVSxrS0FBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RTdFLE1BQXdHO0FBQ3hHLE1BQThGO0FBQzlGLE1BQXFHO0FBQ3JHLE1BQXdIO0FBQ3hILE1BQWlIO0FBQ2pILE1BQWlIO0FBQ2pILE1BQW1NO0FBQ25NO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsNkpBQU87OztBQUd4QixJQUFJLElBQVU7QUFDZCxPQUFPLDZKQUFPLFdBQVcsVUFBVTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw2SkFBTztBQUNoQyxvQ0FBb0Msa0pBQVcsR0FBRyw2SkFBTzs7QUFFekQsSUFBSSxpQkFBaUI7QUFDckIsTUFBTSxtVEFBc0o7QUFDNUosTUFBTTtBQUFBO0FBQ04sc0RBQXNELGtKQUFXLEdBQUcsNkpBQU87QUFDM0UsZ0JBQWdCLFVBQVU7O0FBRTFCO0FBQ0E7O0FBRUEsMENBQTBDLGtKQUFXLEdBQUcsNkpBQU87O0FBRS9ELHFCQUFxQiw2SkFBTztBQUM1QixPQUFPO0FBQ1A7QUFDQTs7QUFFQSxFQUFFLFVBQVU7QUFDWjtBQUNBLEdBQUc7QUFDSDs7O0FBR3FLO0FBQ3JLLE9BQU8saUVBQWUsNkpBQU8sSUFBSSw2SkFBTyxVQUFVLDZKQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVFN0UsTUFBd0c7QUFDeEcsTUFBOEY7QUFDOUYsTUFBcUc7QUFDckcsTUFBd0g7QUFDeEgsTUFBaUg7QUFDakgsTUFBaUg7QUFDakgsTUFBd007QUFDeE07QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxrS0FBTzs7O0FBR3hCLElBQUksSUFBVTtBQUNkLE9BQU8sa0tBQU8sV0FBVyxVQUFVO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGtLQUFPO0FBQ2hDLG9DQUFvQyx1SkFBVyxHQUFHLGtLQUFPOztBQUV6RCxJQUFJLGlCQUFpQjtBQUNyQixNQUFNLGtVQUEySjtBQUNqSyxNQUFNO0FBQUE7QUFDTixzREFBc0QsdUpBQVcsR0FBRyxrS0FBTztBQUMzRSxnQkFBZ0IsVUFBVTs7QUFFMUI7QUFDQTs7QUFFQSwwQ0FBMEMsdUpBQVcsR0FBRyxrS0FBTzs7QUFFL0QscUJBQXFCLGtLQUFPO0FBQzVCLE9BQU87QUFDUDtBQUNBOztBQUVBLEVBQUUsVUFBVTtBQUNaO0FBQ0EsR0FBRztBQUNIOzs7QUFHMEs7QUFDMUssT0FBTyxpRUFBZSxrS0FBTyxJQUFJLGtLQUFPLFVBQVUsa0tBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUU3RSxNQUFxRztBQUNyRyxNQUEyRjtBQUMzRixNQUFrRztBQUNsRyxNQUFxSDtBQUNySCxNQUE4RztBQUM5RyxNQUE4RztBQUM5RyxNQUEyTDtBQUMzTDtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDJKQUFPOzs7QUFHeEIsSUFBSSxJQUFVO0FBQ2QsT0FBTywySkFBTyxXQUFXLFVBQVU7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMkpBQU87QUFDaEMsb0NBQW9DLGdKQUFXLEdBQUcsMkpBQU87O0FBRXpELElBQUksaUJBQWlCO0FBQ3JCLE1BQU0sb1NBQThJO0FBQ3BKLE1BQU07QUFBQTtBQUNOLHNEQUFzRCxnSkFBVyxHQUFHLDJKQUFPO0FBQzNFLGdCQUFnQixVQUFVOztBQUUxQjtBQUNBOztBQUVBLDBDQUEwQyxnSkFBVyxHQUFHLDJKQUFPOztBQUUvRCxxQkFBcUIsMkpBQU87QUFDNUIsT0FBTztBQUNQO0FBQ0E7O0FBRUEsRUFBRSxVQUFVO0FBQ1o7QUFDQSxHQUFHO0FBQ0g7OztBQUc2SjtBQUM3SixPQUFPLGlFQUFlLDJKQUFPLElBQUksMkpBQU8sVUFBVSwySkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDN0V0RTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCdUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kaW5hbW8vLi9zcmMvc2hhcmVkL2Fzc2V0cy9pY29ucy9zdGF0LWljb24uc3ZnIiwid2VicGFjazovL2RpbmFtby8uL3NyYy9hcHAvcHJvdmlkZXJzL1Byb3RvY29sUHJvdmlkZXIvbGliL3VzZVByb3RvY29sLnRzeCIsIndlYnBhY2s6Ly9kaW5hbW8vLi9zcmMvZW50aXRpZXMvR2FtZS9HYW1lLnRzeCIsIndlYnBhY2s6Ly9kaW5hbW8vLi9zcmMvZW50aXRpZXMvR2lmL0dpZi50c3giLCJ3ZWJwYWNrOi8vZGluYW1vLy4vc3JjL2VudGl0aWVzL1BlcnNvblByb3RvY29sL1BlcnNvblByb3RvY29sLnRzeCIsIndlYnBhY2s6Ly9kaW5hbW8vLi9zcmMvc2hhcmVkL3VpL1NlY3Rpb25UaXRsZS9TZWN0aW9uVGl0bGUudHN4Iiwid2VicGFjazovL2RpbmFtby8uL3NyYy93aWRnZXRzL0dhbWVCYXIvdWkvR2FtZUJhci50c3giLCJ3ZWJwYWNrOi8vZGluYW1vLy4vc3JjL3dpZGdldHMvR2FtZVByb3RvY29sL3VpL0dhbWVQcm90b2NvbC50c3giLCJ3ZWJwYWNrOi8vZGluYW1vLy4vc3JjL3dpZGdldHMvVGFibGUvVGFibGUudHN4Iiwid2VicGFjazovL2RpbmFtby8uL3NyYy9lbnRpdGllcy9HYW1lL0dhbWUubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZGluYW1vLy4vc3JjL2VudGl0aWVzL0dpZi9HaWYubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZGluYW1vLy4vc3JjL2VudGl0aWVzL1BlcnNvblByb3RvY29sL1BlcnNvblByb3RvY29sLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2RpbmFtby8uL3NyYy9zaGFyZWQvdWkvU2VjdGlvblRpdGxlL1NlY3Rpb25UaXRsZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9kaW5hbW8vLi9zcmMvd2lkZ2V0cy9HYW1lQmFyL3VpL0dhbWVCYXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZGluYW1vLy4vc3JjL3dpZGdldHMvR2FtZVByb3RvY29sL3VpL0dhbWVQcm90b2NvbC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9kaW5hbW8vLi9zcmMvd2lkZ2V0cy9UYWJsZS9UYWJsZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9kaW5hbW8vLi9zcmMvZW50aXRpZXMvR2FtZS9HYW1lLm1vZHVsZS5zY3NzPzQ3ODMiLCJ3ZWJwYWNrOi8vZGluYW1vLy4vc3JjL2VudGl0aWVzL0dpZi9HaWYubW9kdWxlLnNjc3M/MzliNyIsIndlYnBhY2s6Ly9kaW5hbW8vLi9zcmMvZW50aXRpZXMvUGVyc29uUHJvdG9jb2wvUGVyc29uUHJvdG9jb2wubW9kdWxlLnNjc3M/MTdkNyIsIndlYnBhY2s6Ly9kaW5hbW8vLi9zcmMvc2hhcmVkL3VpL1NlY3Rpb25UaXRsZS9TZWN0aW9uVGl0bGUubW9kdWxlLnNjc3M/ZmNiYyIsIndlYnBhY2s6Ly9kaW5hbW8vLi9zcmMvd2lkZ2V0cy9HYW1lQmFyL3VpL0dhbWVCYXIubW9kdWxlLnNjc3M/NzVmMiIsIndlYnBhY2s6Ly9kaW5hbW8vLi9zcmMvd2lkZ2V0cy9HYW1lUHJvdG9jb2wvdWkvR2FtZVByb3RvY29sLm1vZHVsZS5zY3NzP2UzMzEiLCJ3ZWJwYWNrOi8vZGluYW1vLy4vc3JjL3dpZGdldHMvVGFibGUvVGFibGUubW9kdWxlLnNjc3M/Zjk2NCIsIndlYnBhY2s6Ly9kaW5hbW8vLi9zcmMvc2hhcmVkL2xpYi90cmltR2FtZXMvdHJpbUdhbWVzLnRzIiwid2VicGFjazovL2RpbmFtby8uL3NyYy93aWRnZXRzL0dhbWVCYXIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9wYXRoLCBfcGF0aDI7XG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduID8gT2JqZWN0LmFzc2lnbi5iaW5kKCkgOiBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xudmFyIFN2Z1N0YXRJY29uID0gZnVuY3Rpb24gU3ZnU3RhdEljb24ocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIF9leHRlbmRzKHtcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgIHdpZHRoOiAyNSxcbiAgICBoZWlnaHQ6IDI1LFxuICAgIHZpZXdCb3g6IFwiMCAwIDUxMiA1MTJcIlxuICB9LCBwcm9wcyksIF9wYXRoIHx8IChfcGF0aCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMjM0LjUgNDIuMWMtNDEuNSA0LjItODIuNiAyMS4zLTExNC43IDQ3LjctOC45IDcuMy0yNC44IDIzLjQtMzEuOSAzMi4yLTIxLjUgMjYuOS0zNi45IDYwLjgtNDMuNCA5NS43LTExLjIgNjAuMSA1LjMgMTI1IDQzLjkgMTcyLjkgNi43IDguNCAyMi44IDI0LjYgMzEuNCAzMS42IDUyLjYgNDMuMyAxMjMuNCA1OC44IDE5MC4xIDQxLjggNTkuNi0xNS4yIDExMi01Ny45IDEzOS0xMTMuNCAyMi42LTQ2LjQgMjcuOS05OC40IDE1LjEtMTQ4LjUtNy40LTI5LTIyLjUtNTguOC00MS44LTgyLjMtNy4zLTguOS0yMy40LTI0LjgtMzIuMi0zMS45LTQzLTM0LjQtMTAwLjgtNTEuNC0xNTUuNS00NS44TTM1OSAyNTZ2MTMzSDE1M1YxMjNoMjA2elwiXG4gIH0pKSwgX3BhdGgyIHx8IChfcGF0aDIgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTE4NSAxNzcuNXY3LjVoMTQydi0xNUgxODV6TTE4NS40IDIwNC4zYy0uMy44LS40IDQuMy0uMiA3LjhsLjMgNi40aDE0MXYtMTVsLTcwLjMtLjNjLTU4LjUtLjItNzAuMyAwLTcwLjggMS4xTTE4NS43IDIzNy43Yy0uNC4zLS43IDMuNy0uNyA3LjV2Ni44aDc3di0xNWgtMzcuOGMtMjAuOCAwLTM4LjIuMy0zOC41LjdNMjg4IDMxNC41VjM1N2wxOS4zLS4yIDE5LjItLjMuMy00Mi4zLjItNDIuMmgtMzl6TTE4NS4yIDMyMy4ybC4zIDMzLjMgMTkuMy4zIDE5LjIuMnYtNjdoLTM5ek0yMzcgMzM0djIzaDM4di00NmgtMzh6XCJcbiAgfSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBTdmdTdGF0SWNvbjsiLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWluQXBpIH0gZnJvbSAnZmVhdHVyZXMvTWFpbkFwaS9NYWluQXBpJztcbmV4cG9ydCBmdW5jdGlvbiB1c2VQcm90b2NvbCgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciBfYSA9IHVzZVN0YXRlKHtcbiAgICAgICAgaXNPcGVuOiBmYWxzZSxcbiAgICAgICAgZ2FtZUlkOiBudWxsLFxuICAgICAgICBnYW1lSW5mbzogbnVsbCxcbiAgICAgICAgZ2FtZURhdGE6IG51bGxcbiAgICB9KSwgcHJvdG9jb2xTdGF0ZSA9IF9hWzBdLCBzZXRQcm90b2NvbFN0YXRlID0gX2FbMV07XG4gICAgdmFyIGZldGNoR2FtZSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgbWFpbkFwaS5nZXRHYW1lUHJvdG9jb2wocHJvdG9jb2xTdGF0ZS5nYW1lSWQpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiAvKnJldHVybiovLCBfYS5zZW50KCldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTsgfSwgW3Byb3RvY29sU3RhdGUuZ2FtZUlkXSk7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHByb3RvY29sU3RhdGUuaXNPcGVuKSB7XG4gICAgICAgICAgICBmZXRjaEdhbWUoKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChnYW1lRGF0YSkgeyBzZXRQcm90b2NvbFN0YXRlKF9fYXNzaWduKF9fYXNzaWduKHt9LCBwcm90b2NvbFN0YXRlKSwgeyBnYW1lRGF0YTogZ2FtZURhdGEgfSkpOyB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7IGNvbnNvbGUubG9nKGVycik7IH0pO1xuICAgICAgICB9XG4gICAgfSwgW2ZldGNoR2FtZSwgcHJvdG9jb2xTdGF0ZS5pc09wZW5dKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm90b2NvbFN0YXRlOiBwcm90b2NvbFN0YXRlLFxuICAgICAgICBzZXRQcm90b2NvbFN0YXRlOiBzZXRQcm90b2NvbFN0YXRlXG4gICAgfTtcbn1cbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgY2xhc3NOYW1lcyB9IGZyb20gJ3NoYXJlZC9saWIvY2xhc3NOYW1lcy9jbGFzc05hbWVzJztcbmltcG9ydCBjbHMgZnJvbSAnLi9HYW1lLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IEJ1dHRvbiwgVGhlbWVCdXR0b24gfSBmcm9tICdzaGFyZWQvdWkvQnV0dG9uL0J1dHRvbic7XG5pbXBvcnQgU3RhdEljb24gZnJvbSAnc2hhcmVkL2Fzc2V0cy9pY29ucy9zdGF0LWljb24uc3ZnJztcbmV4cG9ydCB2YXIgR2FtZSA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciBnYW1lID0gcHJvcHMuZ2FtZSwgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLCBzZXRQcm90b2NvbFN0YXRlID0gcHJvcHMuc2V0UHJvdG9jb2xTdGF0ZSwgcHJvdG9jb2xTdGF0ZSA9IHByb3BzLnByb3RvY29sU3RhdGU7XG4gICAgdmFyIEdhbWVJRCA9IGdhbWUuR2FtZUlELCBEaXNwbGF5RGF0ZVRpbWVNc2sgPSBnYW1lLkRpc3BsYXlEYXRlVGltZU1zaywgVGVhbUxvZ29BID0gZ2FtZS5UZWFtTG9nb0EsIFRlYW1Mb2dvQiA9IGdhbWUuVGVhbUxvZ29CLCBTY29yZUEgPSBnYW1lLlNjb3JlQSwgU2NvcmVCID0gZ2FtZS5TY29yZUI7XG4gICAgdmFyIG9uU3RhdE9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNldFByb3RvY29sU3RhdGUoX19hc3NpZ24oX19hc3NpZ24oe30sIHByb3RvY29sU3RhdGUpLCB7IGlzT3BlbjogdHJ1ZSwgZ2FtZUlkOiBHYW1lSUQsIGdhbWVJbmZvOiBnYW1lIH0pKTtcbiAgICB9O1xuICAgIHJldHVybiAoX2pzeHMoXCJhcnRpY2xlXCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGNscy5HYW1lLCB7fSwgW2NsYXNzTmFtZSAhPT0gbnVsbCAmJiBjbGFzc05hbWUgIT09IHZvaWQgMCA/IGNsYXNzTmFtZSA6ICcnXSksIGNoaWxkcmVuOiBbX2pzeChcImgzXCIsIHsgY2xhc3NOYW1lOiBjbHMuR2FtZV9fdGl0bGUsIGNoaWxkcmVuOiBEaXNwbGF5RGF0ZVRpbWVNc2sgfSksIF9qc3hzKFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbHMuR2FtZV9fZ2FtZUNvbnRhaW5lciwgY2hpbGRyZW46IFtfanN4KFwiZGl2XCIsIHsgc3R5bGU6IHsgYmFja2dyb3VuZEltYWdlOiBcInVybChcIi5jb25jYXQoVGVhbUxvZ29BLCBcIilcIikgfSwgY2xhc3NOYW1lOiBjbHMuR2FtZV9fdGVhbUltYWdlIH0pLCBfanN4KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbHMuR2FtZV9fc2NvcmUsIGNoaWxkcmVuOiBcIlwiLmNvbmNhdChTY29yZUEsIFwiIDogXCIpLmNvbmNhdChTY29yZUIpIH0pLCBfanN4KFwiZGl2XCIsIHsgc3R5bGU6IHsgYmFja2dyb3VuZEltYWdlOiBcInVybChcIi5jb25jYXQoVGVhbUxvZ29CLCBcIilcIikgfSwgY2xhc3NOYW1lOiBjbHMuR2FtZV9fdGVhbUltYWdlIH0pXSB9KSwgX2pzeHMoQnV0dG9uLCB7IG9uQ2xpY2s6IG9uU3RhdE9wZW4sIHRoZW1lOiBUaGVtZUJ1dHRvbi5QT1pfR0FNRSwgY2hpbGRyZW46IFtfanN4KFN0YXRJY29uLCB7IGNsYXNzTmFtZTogY2xzLkdhbWVfX3N0YXRJY29uIH0pLCBcIlxcdTA0MUZcXHUwNDNFXFx1MDQzQlxcdTA0M0RcXHUwNDMwXFx1MDQ0RiBcXHUwNDQxXFx1MDQ0MlxcdTA0MzBcXHUwNDQyXFx1MDQzOFxcdTA0NDFcXHUwNDQyXFx1MDQzOFxcdTA0M0FcXHUwNDMwIFxcdTA0M0NcXHUwNDMwXFx1MDQ0MlxcdTA0NDdcXHUwNDMwXCJdIH0pXSB9KSk7XG59O1xuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IGNsYXNzTmFtZXMgfSBmcm9tICdzaGFyZWQvbGliL2NsYXNzTmFtZXMvY2xhc3NOYW1lcyc7XG5pbXBvcnQgY2xzIGZyb20gJy4vR2lmLm1vZHVsZS5zY3NzJztcbmV4cG9ydCB2YXIgR2lmID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIGNsYXNzTmFtZSA9IF9hLmNsYXNzTmFtZTtcbiAgICByZXR1cm4gKF9qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZXMoY2xzLkdpZiwge30sIFtjbGFzc05hbWUgIT09IG51bGwgJiYgY2xhc3NOYW1lICE9PSB2b2lkIDAgPyBjbGFzc05hbWUgOiAnJ10pLCBjaGlsZHJlbjogX2pzeHMoXCJzdmdcIiwgeyBjbGFzc05hbWU6IGNscy5HaWZfX2l0ZW0sIHZpZXdCb3g6IFwiMCAwIDMyMCAzMDBcIiwgY2hpbGRyZW46IFtfanN4KFwicmVjdFwiLCB7IGNsYXNzTmFtZTogY2xzLmdpZl9fY2FyZCwgeDogXCI0ODBcIiwgd2lkdGg6IFwiNDBcIiwgaGVpZ2h0OiBcIjIwMFwiLCByeDogXCI1XCIgfSksIF9qc3goXCJyZWN0XCIsIHsgY2xhc3NOYW1lOiBjbHMuR2lmX19jYXJkLCB5OiBcIjBcIiwgd2lkdGg6IFwiMjAwXCIsIGhlaWdodDogXCIyMDBcIiwgcng6IFwiNVwiIH0pLCBfanN4KFwicmVjdFwiLCB7IGNsYXNzTmFtZTogY2xzLkdpZl9fY2FyZCwgeDogXCIyNDBcIiwgd2lkdGg6IFwiMjAwXCIsIGhlaWdodDogXCIyMDBcIiwgcng6IFwiNVwiIH0pLCBfanN4KFwicGF0aFwiLCB7IGNsYXNzTmFtZTogY2xzLkdpZl9faGFuZCwgXG4gICAgICAgICAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuICovXG4gICAgICAgICAgICAgICAgICAgIGQ6IFwiTTc4Ljk1NzkgMjg1LjdDNzguOTU3OSAyODUuNyAzNy44NTc5IDIxMi41IDIwLjU1NzkgMTgwLjhDLTIuNDQyMDkgMTM4LjYgLTYuMjQyMiAxMjAuOCA5LjY1NzkgMTEyQzE5LjU1NzkgMTA2LjUgMzMuMjU3OSAxMDguOCA0MS42NTc5IDEyMy40TDYxLjI1NzkgMTU0LjZWMzIuM0M2MS4yNTc5IDMyLjMgNjAuMDU3OSAwIDgzLjA1NzkgMEMxMDcuNTU4IDAgMTA1LjQ1OCAzMi4zIDEwNS40NTggMzIuM1Y5MS43QzEwNS40NTggOTEuNyAxMTguMzU4IDgyLjQgMTMzLjQ1OCA4Ni42QzE0MS4xNTggODguNyAxNTAuMTU4IDkyLjQgMTU0Ljk1OCAxMDQuNkMxNTQuOTU4IDEwNC42IDE4NS42NTggODkuNyAyMDAuOTU4IDEyMS40QzIwMC45NTggMTIxLjQgMjM2LjM1OCAxMTQuNCAyMzYuMzU4IDE1MS4xQzIzNi4zNTggMTg3LjggMTkyLjE1OCAyODUuNyAxOTIuMTU4IDI4NS43SDc4Ljk1NzlaXCIgfSldIH0pIH0pKTtcbn07XG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgY2xhc3NOYW1lcyB9IGZyb20gJ3NoYXJlZC9saWIvY2xhc3NOYW1lcy9jbGFzc05hbWVzJztcbmltcG9ydCBjbHMgZnJvbSAnLi9QZXJzb25Qcm90b2NvbC5tb2R1bGUuc2Nzcyc7XG5leHBvcnQgdmFyIFBlcnNvblByb3RvY29sID0gZnVuY3Rpb24gKFBlcnNvblByb3RvY29sKSB7XG4gICAgdmFyIFBsYXllck51bWJlciA9IFBlcnNvblByb3RvY29sLlBsYXllck51bWJlciwgUGVyc29uSUQgPSBQZXJzb25Qcm90b2NvbC5QZXJzb25JRCwgUGVyc29uTmFtZVJ1ID0gUGVyc29uUHJvdG9jb2wuUGVyc29uTmFtZVJ1LCBQbGF5ZWRUaW1lID0gUGVyc29uUHJvdG9jb2wuUGxheWVkVGltZSwgUG9pbnRzID0gUGVyc29uUHJvdG9jb2wuUG9pbnRzLCBTaG90czEgPSBQZXJzb25Qcm90b2NvbC5TaG90czEsIFNob3RzMiA9IFBlcnNvblByb3RvY29sLlNob3RzMiwgU2hvdHMzID0gUGVyc29uUHJvdG9jb2wuU2hvdHMzLCBHb2FsMiA9IFBlcnNvblByb3RvY29sLkdvYWwyLCBHb2FsMyA9IFBlcnNvblByb3RvY29sLkdvYWwzLCBTaG90MiA9IFBlcnNvblByb3RvY29sLlNob3QyLCBTaG90MyA9IFBlcnNvblByb3RvY29sLlNob3QzLCBEZWZSZWJvdW5kID0gUGVyc29uUHJvdG9jb2wuRGVmUmVib3VuZCwgT2ZmUmVib3VuZCA9IFBlcnNvblByb3RvY29sLk9mZlJlYm91bmQsIFJlYm91bmQgPSBQZXJzb25Qcm90b2NvbC5SZWJvdW5kLCBBc3Npc3QgPSBQZXJzb25Qcm90b2NvbC5Bc3Npc3QsIFN0ZWFsID0gUGVyc29uUHJvdG9jb2wuU3RlYWwsIFR1cm5vdmVyID0gUGVyc29uUHJvdG9jb2wuVHVybm92ZXIsIEJsb2NrcyA9IFBlcnNvblByb3RvY29sLkJsb2NrcywgRm91bCA9IFBlcnNvblByb3RvY29sLkZvdWwsIE9wcG9uZW50Rm91bCA9IFBlcnNvblByb3RvY29sLk9wcG9uZW50Rm91bCwgUGx1c01pbnVzID0gUGVyc29uUHJvdG9jb2wuUGx1c01pbnVzO1xuICAgIHJldHVybiAoX2pzeHMoXCJ0clwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjbHMucHJvdG9jb2wpLCBjaGlsZHJlbjogW19qc3goXCJ0ZFwiLCB7IGNsYXNzTmFtZTogY2xzLlBlcnNvblByb3RvY29sX19pdGVtLCBjaGlsZHJlbjogX2pzeChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xzLlBlcnNvblByb3RvY29sX19zaGlydCwgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoaHR0cHM6Ly9ydXNzaWFiYXNrZXQucnUvZ2FtZXMvdW5pZm9ybT9udW1iZXI9XCIuY29uY2F0KFBsYXllck51bWJlciwgXCImYW1wO2NvbG9yMT0lMjNGRkZGRkYmYW1wO2NvbG9yMj0lMjMwMDAwMDAmYW1wO2NvbG9yMz0lMjMwMDAwMDApXCIpXG4gICAgICAgICAgICAgICAgICAgIH0gfSkgfSksIF9qc3goXCJ0ZFwiLCB7IGNsYXNzTmFtZTogY2xzLlBlcnNvblByb3RvY29sX19pdGVtLCBjaGlsZHJlbjogX2pzeChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xzLlBlcnNvblByb3RvY29sX19pbWFnZSwgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoaHR0cHM6Ly9vcmcuaW5mb2Jhc2tldC5zdS9XaWRnZXQvR2V0UGVyc29uUGhvdG8vXCIuY29uY2F0KFBlcnNvbklELCBcIj9kPTEmYW1wO2NvbXBJZD00MjczOCZhbXA7dGVhbUlkPTc1OClcIilcbiAgICAgICAgICAgICAgICAgICAgfSB9KSB9KSwgX2pzeChcInRkXCIsIHsgY2xhc3NOYW1lOiBjbHMuUGVyc29uUHJvdG9jb2xfX2l0ZW0sIGNoaWxkcmVuOiBQZXJzb25OYW1lUnUgfSksIF9qc3goXCJ0ZFwiLCB7IGNsYXNzTmFtZTogY2xzLlBlcnNvblByb3RvY29sX19pdGVtLCBjaGlsZHJlbjogUGxheWVkVGltZSAhPT0gbnVsbCAmJiBQbGF5ZWRUaW1lIH0pLCBfanN4KFwidGRcIiwgeyBjbGFzc05hbWU6IGNscy5QZXJzb25Qcm90b2NvbF9faXRlbSwgY2hpbGRyZW46IFBvaW50cyAhPT0gbnVsbCAmJiBQb2ludHMgfSksIF9qc3goXCJ0ZFwiLCB7IGNsYXNzTmFtZTogY2xzLlBlcnNvblByb3RvY29sX19pdGVtLCBjaGlsZHJlbjogU2hvdHMyICE9PSBudWxsICYmIFNob3RzMiB9KSwgX2pzeChcInRkXCIsIHsgY2xhc3NOYW1lOiBjbHMuUGVyc29uUHJvdG9jb2xfX2l0ZW0sIGNoaWxkcmVuOiBTaG90czMgIT09IG51bGwgJiYgU2hvdHMzIH0pLCBfanN4KFwidGRcIiwgeyBjbGFzc05hbWU6IGNscy5QZXJzb25Qcm90b2NvbF9faXRlbSwgY2hpbGRyZW46ICgoU2hvdDIgfCBTaG90MykgIT09IG51bGwpICYmXG4gICAgICAgICAgICAgICAgICAgIFwiXCIuY29uY2F0KEdvYWwyICsgR29hbDMsIFwiL1wiKS5jb25jYXQoU2hvdDIgKyBTaG90MykgfSksIF9qc3goXCJ0ZFwiLCB7IGNsYXNzTmFtZTogY2xzLlBlcnNvblByb3RvY29sX19pdGVtLCBjaGlsZHJlbjogU2hvdHMxICE9PSBudWxsICYmIFNob3RzMSB9KSwgX2pzeChcInRkXCIsIHsgY2xhc3NOYW1lOiBjbHMuUGVyc29uUHJvdG9jb2xfX2l0ZW0sIGNoaWxkcmVuOiBEZWZSZWJvdW5kICE9PSBudWxsICYmIERlZlJlYm91bmQgfSksIF9qc3goXCJ0ZFwiLCB7IGNsYXNzTmFtZTogY2xzLlBlcnNvblByb3RvY29sX19pdGVtLCBjaGlsZHJlbjogT2ZmUmVib3VuZCAhPT0gbnVsbCAmJiBPZmZSZWJvdW5kIH0pLCBfanN4KFwidGRcIiwgeyBjbGFzc05hbWU6IGNscy5QZXJzb25Qcm90b2NvbF9faXRlbSwgY2hpbGRyZW46IFJlYm91bmQgIT09IG51bGwgJiYgUmVib3VuZCB9KSwgX2pzeChcInRkXCIsIHsgY2xhc3NOYW1lOiBjbHMuUGVyc29uUHJvdG9jb2xfX2l0ZW0sIGNoaWxkcmVuOiBBc3Npc3QgIT09IG51bGwgJiYgQXNzaXN0IH0pLCBfanN4KFwidGRcIiwgeyBjbGFzc05hbWU6IGNscy5QZXJzb25Qcm90b2NvbF9faXRlbSwgY2hpbGRyZW46IFN0ZWFsICE9PSBudWxsICYmIFN0ZWFsIH0pLCBfanN4KFwidGRcIiwgeyBjbGFzc05hbWU6IGNscy5QZXJzb25Qcm90b2NvbF9faXRlbSwgY2hpbGRyZW46IFR1cm5vdmVyICE9PSBudWxsICYmIFR1cm5vdmVyIH0pLCBfanN4KFwidGRcIiwgeyBjbGFzc05hbWU6IGNscy5QZXJzb25Qcm90b2NvbF9faXRlbSwgY2hpbGRyZW46IEJsb2NrcyAhPT0gbnVsbCAmJiBCbG9ja3MgfSksIF9qc3goXCJ0ZFwiLCB7IGNsYXNzTmFtZTogY2xzLlBlcnNvblByb3RvY29sX19pdGVtLCBjaGlsZHJlbjogRm91bCAhPT0gbnVsbCAmJiBGb3VsIH0pLCBfanN4KFwidGRcIiwgeyBjbGFzc05hbWU6IGNscy5QZXJzb25Qcm90b2NvbF9faXRlbSwgY2hpbGRyZW46IE9wcG9uZW50Rm91bCAhPT0gbnVsbCAmJiBPcHBvbmVudEZvdWwgfSksIF9qc3goXCJ0ZFwiLCB7IGNsYXNzTmFtZTogY2xzLlBlcnNvblByb3RvY29sX19pdGVtLCBjaGlsZHJlbjogUGx1c01pbnVzICE9PSBudWxsICYmIFBsdXNNaW51cyB9KV0gfSkpO1xufTtcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBjbGFzc05hbWVzIH0gZnJvbSAnc2hhcmVkL2xpYi9jbGFzc05hbWVzL2NsYXNzTmFtZXMnO1xuaW1wb3J0IGNscyBmcm9tICcuL1NlY3Rpb25UaXRsZS5tb2R1bGUuc2Nzcyc7XG5leHBvcnQgdmFyIFNlY3Rpb25UaXRsZSA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciB0aGVtZSA9IF9hLnRoZW1lLCBjbGFzc05hbWUgPSBfYS5jbGFzc05hbWUsIGNoaWxkcmVuID0gX2EuY2hpbGRyZW47XG4gICAgcmV0dXJuIChfanN4KFwiaDJcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZXMoY2xzLlNlY3Rpb25UaXRsZSwge30sIFtjbHNbdGhlbWVdXSksIGNoaWxkcmVuOiBjaGlsZHJlbiB9KSk7XG59O1xuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IGNsYXNzTmFtZXMgfSBmcm9tICdzaGFyZWQvbGliL2NsYXNzTmFtZXMvY2xhc3NOYW1lcyc7XG5pbXBvcnQgY2xzIGZyb20gJy4vR2FtZUJhci5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyBHYW1lIH0gZnJvbSAnZW50aXRpZXMvR2FtZS9HYW1lJztcbmltcG9ydCB7IEdpZiB9IGZyb20gJ2VudGl0aWVzL0dpZi9HaWYnO1xuaW1wb3J0IHsgR2FtZXNDb250ZXh0IH0gZnJvbSAnYXBwL3Byb3ZpZGVycy9HYW1lc1Byb3ZpZGVyL2xpYi9HYW1lc0NvbnRleHQnO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHRyaW1HYW1lcyB9IGZyb20gJ3NoYXJlZC9saWIvdHJpbUdhbWVzL3RyaW1HYW1lcyc7XG5pbXBvcnQgeyBTZWN0aW9uVGl0bGUgfSBmcm9tICdzaGFyZWQvdWkvU2VjdGlvblRpdGxlL1NlY3Rpb25UaXRsZSc7XG5leHBvcnQgdmFyIEdhbWVCYXIgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgX2E7XG4gICAgdmFyIGlzVmVydGljYWwgPSBwcm9wcy5pc1ZlcnRpY2FsLCBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsIHNldFByb3RvY29sU3RhdGUgPSBwcm9wcy5zZXRQcm90b2NvbFN0YXRlLCBwcm90b2NvbFN0YXRlID0gcHJvcHMucHJvdG9jb2xTdGF0ZTtcbiAgICB2YXIgZ2FtZXNBcnJheSA9IHVzZUNvbnRleHQoR2FtZXNDb250ZXh0KTtcbiAgICB2YXIgX2IgPSB1c2VTdGF0ZShbXSksIHJlbmRlckdhbWVzID0gX2JbMF0sIHNldFJlbmRlckdhbWVzID0gX2JbMV07XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGdhbWVzQXJyYXkubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICBzZXRSZW5kZXJHYW1lcyh0cmltR2FtZXMoZ2FtZXNBcnJheSkpO1xuICAgICAgICB9XG4gICAgfSwgW2dhbWVzQXJyYXldKTtcbiAgICB2YXIgbW9kcyA9IChfYSA9IHt9LFxuICAgICAgICBfYVtjbHMudmVydGljYWxdID0gaXNWZXJ0aWNhbCxcbiAgICAgICAgX2EpO1xuICAgIHJldHVybiAoX2pzeHMoXCJzZWN0aW9uXCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGNscy5HYW1lQmFyLCBtb2RzLCBbY2xhc3NOYW1lICE9PSBudWxsICYmIGNsYXNzTmFtZSAhPT0gdm9pZCAwID8gY2xhc3NOYW1lIDogJyddKSwgaWQ6IFwiZ2FtZUJhclwiLCBjaGlsZHJlbjogW19qc3goU2VjdGlvblRpdGxlLCB7IHRoZW1lOiBcIlNlY3Rpb25UaXRsZV9wb3pfbWFpblwiIC8qIFNlY3Rpb25UaXRsZVRoZW1lLlBPWl9NQUlOICovLCBjaGlsZHJlbjogXCJcXHUwNDFBXFx1MDQzMFxcdTA0M0JcXHUwNDM1XFx1MDQzRFxcdTA0MzRcXHUwNDMwXFx1MDQ0MFxcdTA0NENcIiB9KSwgX2pzeChHaWYsIHsgY2xhc3NOYW1lOiBjbHMuR2FtZUJhcl9fZ2lmIH0pLCBfanN4KFwidWxcIiwgeyBjbGFzc05hbWU6IGNscy5HYW1lQmFyX193aWRnZXQsIGNoaWxkcmVuOiByZW5kZXJHYW1lcy5tYXAoZnVuY3Rpb24gKGdhbWUsIGluZGV4KSB7IHJldHVybiAoX2pzeChcImxpXCIsIHsgY2xhc3NOYW1lOiBjbHMuR2FtZUJhcl9faXRlbSwgY2hpbGRyZW46IF9qc3goR2FtZSwgeyBnYW1lOiBnYW1lLCBzZXRQcm90b2NvbFN0YXRlOiBzZXRQcm90b2NvbFN0YXRlLCBwcm90b2NvbFN0YXRlOiBwcm90b2NvbFN0YXRlIH0pIH0sIGluZGV4KSk7IH0pIH0pXSB9KSk7XG59O1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBGcmFnbWVudCBhcyBfRnJhZ21lbnQsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IGNsYXNzTmFtZXMgfSBmcm9tICdzaGFyZWQvbGliL2NsYXNzTmFtZXMvY2xhc3NOYW1lcyc7XG5pbXBvcnQgY2xzIGZyb20gJy4vR2FtZVByb3RvY29sLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSAnd2lkZ2V0cy9UYWJsZS9UYWJsZSc7XG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tICdzaGFyZWQvdWkvTG9hZGVyL0xvYWRlcic7XG5leHBvcnQgdmFyIEdhbWVQcm90b2NvbCA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciBfYTtcbiAgICB2YXIgcHJvdG9jb2xTdGF0ZSA9IHByb3BzLnByb3RvY29sU3RhdGUsIHNldFByb3RvY29sU3RhdGUgPSBwcm9wcy5zZXRQcm90b2NvbFN0YXRlLCBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWU7XG4gICAgdmFyIG1vZHMgPSAoX2EgPSB7fSxcbiAgICAgICAgX2FbY2xzLm9wZW5lZF0gPSBwcm90b2NvbFN0YXRlLmlzT3BlbixcbiAgICAgICAgX2EpO1xuICAgIHZhciBjbG9zZVBvcHVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzZXRQcm90b2NvbFN0YXRlKF9fYXNzaWduKF9fYXNzaWduKHt9LCBwcm90b2NvbFN0YXRlKSwgeyBnYW1lSWQ6IG51bGwsIGdhbWVEYXRhOiBudWxsLCBnYW1lSW5mbzogbnVsbCwgaXNPcGVuOiBmYWxzZSB9KSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb3RvY29sU3RhdGUpO1xuICAgIH07XG4gICAgdmFyIG9uQ29udGVudENsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9O1xuICAgIHJldHVybiAoX2pzeChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjbHMuR2FtZVByb3RvY29sLCBtb2RzLCBbY2xhc3NOYW1lICE9PSBudWxsICYmIGNsYXNzTmFtZSAhPT0gdm9pZCAwID8gY2xhc3NOYW1lIDogJyddKSwgY2hpbGRyZW46IF9qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNscy5HYW1lUHJvdG9jb2xfX292ZXJsYXksIG9uQ2xpY2s6IGNsb3NlUG9wdXAsIGNoaWxkcmVuOiBfanN4KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbHMuR2FtZVByb3RvY29sX19jb250ZW50LCBvbkNsaWNrOiBvbkNvbnRlbnRDbGljaywgY2hpbGRyZW46IChwcm90b2NvbFN0YXRlLmdhbWVJbmZvICE9PSBudWxsICYmIHByb3RvY29sU3RhdGUuZ2FtZURhdGEgIT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgID8gX2pzeHMoX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBbX2pzeChUYWJsZSwgeyBnYW1lRGF0YTogcHJvdG9jb2xTdGF0ZS5nYW1lRGF0YS5HYW1lVGVhbXNbMF0sIGxvZ29UZWFtOiBwcm90b2NvbFN0YXRlLmdhbWVJbmZvLlRlYW1Mb2dvQSwgbmFtZVRlYW06IHByb3RvY29sU3RhdGUuZ2FtZUluZm8uVGVhbU5hbWVBcnUgfSksIF9qc3goVGFibGUsIHsgZ2FtZURhdGE6IHByb3RvY29sU3RhdGUuZ2FtZURhdGEuR2FtZVRlYW1zWzFdLCBsb2dvVGVhbTogcHJvdG9jb2xTdGF0ZS5nYW1lSW5mby5UZWFtTG9nb0IsIG5hbWVUZWFtOiBwcm90b2NvbFN0YXRlLmdhbWVJbmZvLlRlYW1OYW1lQnJ1IH0pXSB9KVxuICAgICAgICAgICAgICAgICAgICA6IF9qc3goTG9hZGVyLCB7fSkgfSkgfSkgfSkpO1xufTtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IGFzIF9jcmVhdGVFbGVtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgY2xhc3NOYW1lcyB9IGZyb20gJ3NoYXJlZC9saWIvY2xhc3NOYW1lcy9jbGFzc05hbWVzJztcbmltcG9ydCBjbHMgZnJvbSAnLi9UYWJsZS5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyBTZWN0aW9uVGl0bGUgfSBmcm9tICdzaGFyZWQvdWkvU2VjdGlvblRpdGxlL1NlY3Rpb25UaXRsZSc7XG5pbXBvcnQgeyBQZXJzb25Qcm90b2NvbCB9IGZyb20gJ2VudGl0aWVzL1BlcnNvblByb3RvY29sL1BlcnNvblByb3RvY29sJztcbmV4cG9ydCB2YXIgVGFibGUgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgbG9nb1RlYW0gPSBwcm9wcy5sb2dvVGVhbSwgbmFtZVRlYW0gPSBwcm9wcy5uYW1lVGVhbSwgZ2FtZURhdGEgPSBwcm9wcy5nYW1lRGF0YTtcbiAgICB2YXIgUGxheWVkVGltZSA9IGdhbWVEYXRhLlBsYXllZFRpbWUsIFNjb3JlID0gZ2FtZURhdGEuU2NvcmUsIFNob3RzMSA9IGdhbWVEYXRhLlNob3RzMSwgU2hvdHMyID0gZ2FtZURhdGEuU2hvdHMyLCBTaG90czMgPSBnYW1lRGF0YS5TaG90czMsIFNob3QxUGVyY2VudCA9IGdhbWVEYXRhLlNob3QxUGVyY2VudCwgU2hvdDJQZXJjZW50ID0gZ2FtZURhdGEuU2hvdDJQZXJjZW50LCBTaG90M1BlcmNlbnQgPSBnYW1lRGF0YS5TaG90M1BlcmNlbnQsIERlZlJlYm91bmQgPSBnYW1lRGF0YS5EZWZSZWJvdW5kLCBPZmZSZWJvdW5kID0gZ2FtZURhdGEuT2ZmUmVib3VuZCwgUmVib3VuZCA9IGdhbWVEYXRhLlJlYm91bmQsIEFzc2lzdCA9IGdhbWVEYXRhLkFzc2lzdCwgU3RlYWwgPSBnYW1lRGF0YS5TdGVhbCwgVHVybm92ZXIgPSBnYW1lRGF0YS5UdXJub3ZlciwgQmxvY2tzID0gZ2FtZURhdGEuQmxvY2tzLCBGb3VsID0gZ2FtZURhdGEuRm91bCwgT3Bwb25lbnRGb3VsID0gZ2FtZURhdGEuT3Bwb25lbnRGb3VsLCBHb2FsMiA9IGdhbWVEYXRhLkdvYWwyLCBHb2FsMyA9IGdhbWVEYXRhLkdvYWwzLCBTaG90MiA9IGdhbWVEYXRhLlNob3QyLCBTaG90MyA9IGdhbWVEYXRhLlNob3QzLCBQbGF5ZXJzID0gZ2FtZURhdGEuUGxheWVycztcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbHMuVGFibGUsIGNoaWxkcmVuOiBbX2pzeHMoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNscy5UYWJsZV9faGVhZGluZywgY2hpbGRyZW46IFtfanN4KFwiaW1nXCIsIHsgY2xhc3NOYW1lOiBjbHMuVGFibGVfX2xvZ28sIHNyYzogbG9nb1RlYW0sIGFsdDogbmFtZVRlYW0gfSksIF9qc3goU2VjdGlvblRpdGxlLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjbHMuVGFibGVfX3RlYW0pLCB0aGVtZTogXCJTZWN0aW9uVGl0bGVfY2xlYXJcIiAvKiBTZWN0aW9uVGl0bGVUaGVtZS5DTEVBUiAqLywgY2hpbGRyZW46IG5hbWVUZWFtIH0pXSB9KSwgX2pzeHMoXCJ0YWJsZVwiLCB7IGNsYXNzTmFtZTogY2xzLlRhYmxlX19jb250YWluZXIsIGNoaWxkcmVuOiBbX2pzeHMoXCJ0aGVhZFwiLCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJ0clwiLCB7IGNsYXNzTmFtZTogY2xzLlRhYmxlX19yb3csIGNoaWxkcmVuOiBbX2pzeChcInRoXCIsIHsgcm93U3BhbjogMiwgY29sU3BhbjogMywgY2xhc3NOYW1lOiBjbHMuVGFibGVfX3RpdGxlLCBjaGlsZHJlbjogXCJcXHUwNDE4XFx1MDQzM1xcdTA0NDBcXHUwNDNFXFx1MDQzQVxcdTA0MzhcIiB9KSwgX2pzeChcInRoXCIsIHsgcm93U3BhbjogMiwgdGl0bGU6IFwiXFx1MDQyMVxcdTA0NEJcXHUwNDMzXFx1MDQ0MFxcdTA0MzBcXHUwNDNEXFx1MDQzRFxcdTA0M0VcXHUwNDM1IFxcdTA0MzJcXHUwNDQwXFx1MDQzNVxcdTA0M0NcXHUwNDRGXCIsIGNsYXNzTmFtZTogY2xzLlRhYmxlX190aXRsZSwgY2hpbGRyZW46IFwiXFx1MDQyMVxcdTA0MTJcIiB9KSwgX2pzeChcInRoXCIsIHsgcm93U3BhbjogMiwgdGl0bGU6IFwiXFx1MDQxRFxcdTA0MzBcXHUwNDMxXFx1MDQ0MFxcdTA0MzBcXHUwNDNEXFx1MDQzRFxcdTA0NEJcXHUwNDM1IFxcdTA0M0VcXHUwNDQ3XFx1MDQzQVxcdTA0MzhcIiwgY2xhc3NOYW1lOiBjbHMuVGFibGVfX3RpdGxlLCBjaGlsZHJlbjogXCJcXHUwNDFFXFx1MDQ0N1xcdTA0M0FcXHUwNDM4XCIgfSksIF9qc3goXCJ0aFwiLCB7IGNvbFNwYW46IDQsIGNsYXNzTmFtZTogY2xzLlRhYmxlX190aXRsZSwgY2hpbGRyZW46IFwiXFx1MDQxMVxcdTA0NDBcXHUwNDNFXFx1MDQ0MVxcdTA0M0FcXHUwNDM4XCIgfSksIF9qc3goXCJ0aFwiLCB7IGNvbFNwYW46IDMsIGNsYXNzTmFtZTogY2xzLlRhYmxlX190aXRsZSwgY2hpbGRyZW46IFwiXFx1MDQxRlxcdTA0M0VcXHUwNDM0XFx1MDQzMVxcdTA0M0VcXHUwNDQwXFx1MDQ0QlwiIH0pLCBfanN4KFwidGhcIiwgeyByb3dTcGFuOiAyLCB0aXRsZTogXCJcXHUwNDEzXFx1MDQzRVxcdTA0M0JcXHUwNDM1XFx1MDQzMlxcdTA0NEJcXHUwNDM1IFxcdTA0M0ZcXHUwNDM1XFx1MDQ0MFxcdTA0MzVcXHUwNDM0XFx1MDQzMFxcdTA0NDdcXHUwNDM4XCIsIGNsYXNzTmFtZTogY2xzLlRhYmxlX190aXRsZSwgY2hpbGRyZW46IFwiXFx1MDQxM1xcdTA0MUZcIiB9KSwgX2pzeChcInRoXCIsIHsgcm93U3BhbjogMiwgdGl0bGU6IFwiXFx1MDQxRlxcdTA0MzVcXHUwNDQwXFx1MDQzNVxcdTA0NDVcXHUwNDMyXFx1MDQzMFxcdTA0NDJcXHUwNDRCXCIsIGNsYXNzTmFtZTogY2xzLlRhYmxlX190aXRsZSwgY2hpbGRyZW46IFwiXFx1MDQxRlxcdTA0MjVcIiB9KSwgX2pzeChcInRoXCIsIHsgcm93U3BhbjogMiwgdGl0bGU6IFwiXFx1MDQxRlxcdTA0M0VcXHUwNDQyXFx1MDQzNVxcdTA0NDBcXHUwNDM4XCIsIGNsYXNzTmFtZTogY2xzLlRhYmxlX190aXRsZSwgY2hpbGRyZW46IFwiXFx1MDQxRlxcdTA0MjJcIiB9KSwgX2pzeChcInRoXCIsIHsgcm93U3BhbjogMiwgdGl0bGU6IFwiXFx1MDQxMVxcdTA0M0JcXHUwNDNFXFx1MDQzQVxcdTA0NDhcXHUwNDNFXFx1MDQ0MlxcdTA0NEJcIiwgY2xhc3NOYW1lOiBjbHMuVGFibGVfX3RpdGxlLCBjaGlsZHJlbjogXCJcXHUwNDExXFx1MDQyOFwiIH0pLCBfanN4KFwidGhcIiwgeyByb3dTcGFuOiAyLCB0aXRsZTogXCJcXHUwNDI0XFx1MDQzRVxcdTA0M0JcXHUwNDRCXCIsIGNsYXNzTmFtZTogY2xzLlRhYmxlX190aXRsZSwgY2hpbGRyZW46IFwiXFx1MDQyNFwiIH0pLCBfanN4KFwidGhcIiwgeyByb3dTcGFuOiAyLCB0aXRsZTogXCJcXHUwNDI0XFx1MDQzRVxcdTA0M0JcXHUwNDRCIFxcdTA0NDFcXHUwNDNFXFx1MDQzRlxcdTA0MzVcXHUwNDQwXFx1MDQzRFxcdTA0MzhcXHUwNDNBXFx1MDQzMFwiLCBjbGFzc05hbWU6IGNscy5UYWJsZV9fdGl0bGUsIGNoaWxkcmVuOiBcIlxcdTA0MjRcXHUwNDIxXCIgfSksIF9qc3goXCJ0aFwiLCB7IHJvd1NwYW46IDIsIHRpdGxlOiBcIlxcdTA0MUZcXHUwNDNCXFx1MDQ0RVxcdTA0NDEvXFx1MDQzQ1xcdTA0MzhcXHUwNDNEXFx1MDQ0M1xcdTA0NDFcIiwgY2xhc3NOYW1lOiBjbHMuVGFibGVfX3RpdGxlLCBjaGlsZHJlbjogXCIrLy1cIiB9KV0gfSksIF9qc3hzKFwidHJcIiwgeyBjbGFzc05hbWU6IGNscy5UYWJsZV9fcm93LCBjaGlsZHJlbjogW19qc3goXCJ0aFwiLCB7IHRpdGxlOiBcIlxcdTA0MTRcXHUwNDMyXFx1MDQ0M1xcdTA0NDVcXHUwNDNFXFx1MDQ0N1xcdTA0M0FcXHUwNDNFXFx1MDQzMlxcdTA0NEJcXHUwNDM1IFxcdTA0MzFcXHUwNDQwXFx1MDQzRVxcdTA0NDFcXHUwNDNBXFx1MDQzOFwiLCBjbGFzc05hbWU6IGNscy5UYWJsZV9fdGl0bGUsIGNoaWxkcmVuOiBcIjItXFx1MDQzRVxcdTA0NDdcXHUwNDNBXCIgfSksIF9qc3goXCJ0aFwiLCB7IHRpdGxlOiBcIlxcdTA0MjJcXHUwNDQwXFx1MDQzNVxcdTA0NDVcXHUwNDNFXFx1MDQ0N1xcdTA0M0FcXHUwNDNFXFx1MDQzMlxcdTA0NEJcXHUwNDM1IFxcdTA0MzFcXHUwNDQwXFx1MDQzRVxcdTA0NDFcXHUwNDNBXFx1MDQzOFwiLCBjbGFzc05hbWU6IGNscy5UYWJsZV9fdGl0bGUsIGNoaWxkcmVuOiBcIjMtXFx1MDQzRVxcdTA0NDdcXHUwNDNBXCIgfSksIF9qc3goXCJ0aFwiLCB7IHRpdGxlOiBcIlxcdTA0MTFcXHUwNDQwXFx1MDQzRVxcdTA0NDFcXHUwNDNBXFx1MDQzOCBcXHUwNDQxIFxcdTA0MzhcXHUwNDMzXFx1MDQ0MFxcdTA0NEJcIiwgY2xhc3NOYW1lOiBjbHMuVGFibGVfX3RpdGxlLCBjaGlsZHJlbjogXCJcXHUwNDE4XCIgfSksIF9qc3goXCJ0aFwiLCB7IHRpdGxlOiBcIlxcdTA0MjhcXHUwNDQyXFx1MDQ0MFxcdTA0MzBcXHUwNDQ0XFx1MDQzRFxcdTA0NEJcXHUwNDM1IFxcdTA0MzFcXHUwNDQwXFx1MDQzRVxcdTA0NDFcXHUwNDNBXFx1MDQzOFwiLCBjbGFzc05hbWU6IGNscy5UYWJsZV9fdGl0bGUsIGNoaWxkcmVuOiBcIlxcdTA0MjhcXHUwNDExXCIgfSksIF9qc3goXCJ0aFwiLCB7IHRpdGxlOiBcIlxcdTA0MUZcXHUwNDNFXFx1MDQzNFxcdTA0MzFcXHUwNDNFXFx1MDQ0MFxcdTA0NEIgXFx1MDQzRFxcdTA0MzAgXFx1MDQ0MVxcdTA0MzJcXHUwNDNFXFx1MDQzNVxcdTA0M0MgXFx1MDQ0OVxcdTA0MzhcXHUwNDQyXFx1MDQzNVwiLCBjbGFzc05hbWU6IGNscy5UYWJsZV9fdGl0bGUsIGNoaWxkcmVuOiBcIlxcdTA0MjFcXHUwNDI5XCIgfSksIF9qc3goXCJ0aFwiLCB7IHRpdGxlOiBcIlxcdTA0MUZcXHUwNDNFXFx1MDQzNFxcdTA0MzFcXHUwNDNFXFx1MDQ0MFxcdTA0NEIgXFx1MDQzRFxcdTA0MzAgXFx1MDQ0N1xcdTA0NDNcXHUwNDM2XFx1MDQzRVxcdTA0M0MgXFx1MDQ0OVxcdTA0MzhcXHUwNDQyXFx1MDQzNVwiLCBjbGFzc05hbWU6IGNscy5UYWJsZV9fdGl0bGUsIGNoaWxkcmVuOiBcIlxcdTA0MjdcXHUwNDI5XCIgfSksIF9qc3goXCJ0aFwiLCB7IHRpdGxlOiBcIlxcdTA0MUZcXHUwNDNFXFx1MDQzNFxcdTA0MzFcXHUwNDNFXFx1MDQ0MFxcdTA0NEIgXFx1MDQzMlxcdTA0NDFcXHUwNDM1XFx1MDQzM1xcdTA0M0VcIiwgY2xhc3NOYW1lOiBjbHMuVGFibGVfX3RpdGxlLCBjaGlsZHJlbjogXCJcXHUwNDEyXFx1MDQyMVwiIH0pXSB9KV0gfSksIF9qc3goXCJ0Ym9keVwiLCB7IGNoaWxkcmVuOiBQbGF5ZXJzLm1hcChmdW5jdGlvbiAoX2EsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBsYXllclByb3BzID0gX19yZXN0KF9hLCBbXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChfY3JlYXRlRWxlbWVudChQZXJzb25Qcm90b2NvbCwgX19hc3NpZ24oe30sIHBsYXllclByb3BzLCB7IGtleTogaW5kZXggfSkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pIH0pLCBfanN4KFwidGZvb3RcIiwgeyBjaGlsZHJlbjogX2pzeHMoXCJ0clwiLCB7IGNsYXNzTmFtZTogY2xzLlRhYmxlX19yb3csIGNoaWxkcmVuOiBbX2pzeChcInRkXCIsIHsgY2xhc3NOYW1lOiBjbHMuVGFibGVfX2l0ZW0sIGNvbFNwYW46IDMsIGNoaWxkcmVuOiBcIlxcdTA0MTJcXHUwNDIxXFx1MDQxNVxcdTA0MTNcXHUwNDFFOlwiIH0pLCBfanN4KFwidGRcIiwgeyBjbGFzc05hbWU6IGNscy5UYWJsZV9faXRlbSwgY2hpbGRyZW46IFBsYXllZFRpbWUgfSksIF9qc3goXCJ0ZFwiLCB7IGNsYXNzTmFtZTogY2xzLlRhYmxlX19pdGVtLCBjaGlsZHJlbjogU2NvcmUgfSksIF9qc3hzKFwidGRcIiwgeyBjbGFzc05hbWU6IGNscy5UYWJsZV9faXRlbSwgY2hpbGRyZW46IFtTaG90czIsIFwiIFwiLCBfanN4KFwiYnJcIiwge30pLCBTaG90MlBlcmNlbnQsIFwiJVwiXSB9KSwgX2pzeHMoXCJ0ZFwiLCB7IGNsYXNzTmFtZTogY2xzLlRhYmxlX19pdGVtLCBjaGlsZHJlbjogW1Nob3RzMywgXCIgXCIsIF9qc3goXCJiclwiLCB7fSksIFNob3QzUGVyY2VudCwgXCIlXCJdIH0pLCBfanN4cyhcInRkXCIsIHsgY2xhc3NOYW1lOiBjbHMuVGFibGVfX2l0ZW0sIGNoaWxkcmVuOiBbR29hbDIgKyBHb2FsMywgXCIvXCIsIFNob3QyICsgU2hvdDMsIF9qc3goXCJiclwiLCB7fSksICgoR29hbDIgKyBHb2FsMykgKiAxMDAgLyAoU2hvdDIgKyBTaG90MykpLnRvRml4ZWQoMSksIFwiJVwiXSB9KSwgX2pzeHMoXCJ0ZFwiLCB7IGNsYXNzTmFtZTogY2xzLlRhYmxlX19pdGVtLCBjaGlsZHJlbjogW1Nob3RzMSwgXCIgXCIsIF9qc3goXCJiclwiLCB7fSksIFNob3QxUGVyY2VudCwgXCIlXCJdIH0pLCBfanN4KFwidGRcIiwgeyBjbGFzc05hbWU6IGNscy5UYWJsZV9faXRlbSwgY2hpbGRyZW46IERlZlJlYm91bmQgfSksIF9qc3goXCJ0ZFwiLCB7IGNsYXNzTmFtZTogY2xzLlRhYmxlX19pdGVtLCBjaGlsZHJlbjogT2ZmUmVib3VuZCB9KSwgX2pzeChcInRkXCIsIHsgY2xhc3NOYW1lOiBjbHMuVGFibGVfX2l0ZW0sIGNoaWxkcmVuOiBSZWJvdW5kIH0pLCBfanN4KFwidGRcIiwgeyBjbGFzc05hbWU6IGNscy5UYWJsZV9faXRlbSwgY2hpbGRyZW46IEFzc2lzdCB9KSwgX2pzeChcInRkXCIsIHsgY2xhc3NOYW1lOiBjbHMuVGFibGVfX2l0ZW0sIGNoaWxkcmVuOiBTdGVhbCB9KSwgX2pzeChcInRkXCIsIHsgY2xhc3NOYW1lOiBjbHMuVGFibGVfX2l0ZW0sIGNoaWxkcmVuOiBUdXJub3ZlciB9KSwgX2pzeChcInRkXCIsIHsgY2xhc3NOYW1lOiBjbHMuVGFibGVfX2l0ZW0sIGNoaWxkcmVuOiBCbG9ja3MgfSksIF9qc3goXCJ0ZFwiLCB7IGNsYXNzTmFtZTogY2xzLlRhYmxlX19pdGVtLCBjaGlsZHJlbjogRm91bCB9KSwgX2pzeChcInRkXCIsIHsgY2xhc3NOYW1lOiBjbHMuVGFibGVfX2l0ZW0sIGNoaWxkcmVuOiBPcHBvbmVudEZvdWwgfSksIF9qc3goXCJ0ZFwiLCB7IGNsYXNzTmFtZTogY2xzLlRhYmxlX19pdGVtIH0pXSB9KSB9KV0gfSldIH0pKTtcbn07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNyYy1lbnRpdGllcy1HYW1lLUdhbWUtbW9kdWxlX19HYW1lLS1fUjFEMCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiB2YXIoLS1nYW1lLXdpZHRoKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0O1xuICBzY3JvbGwtc25hcC1zdG9wOiBhbHdheXM7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKDEwMCUgLSB2YXIoLS1nYW1lLXdpZHRoKSkvMik7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uc3JjLWVudGl0aWVzLUdhbWUtR2FtZS1tb2R1bGVfX0dhbWVfX3RpdGxlLS14V1VDeiB7XG4gIGZvbnQ6IHZhcigtLWZvbnQtcyk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1zKTtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcbn1cbi5zcmMtZW50aXRpZXMtR2FtZS1HYW1lLW1vZHVsZV9fR2FtZV9fZ2FtZUNvbnRhaW5lci0tS3VaeWkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDQwcHg7XG59XG4uc3JjLWVudGl0aWVzLUdhbWUtR2FtZS1tb2R1bGVfX0dhbWVfX3RlYW1JbWFnZS0tTlo0Ykgge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbi5zcmMtZW50aXRpZXMtR2FtZS1HYW1lLW1vZHVsZV9fR2FtZV9fc2NvcmUtLUU3UFlVIHtcbiAgZm9udDogdmFyKC0tZm9udC1sKTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXMpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xufVxuLnNyYy1lbnRpdGllcy1HYW1lLUdhbWUtbW9kdWxlX19HYW1lX19zdGF0SWNvbi0teW00YkQge1xuICBmaWxsOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2VudGl0aWVzL0dhbWUvR2FtZS5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLHNDQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtFQUNBLHVEQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNFO0VBQ0UsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGtDQUFBO0FBQ0o7QUFFRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFBSjtBQUdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUFESjtBQUlFO0VBQ0UsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGtDQUFBO0FBRko7QUFLRTtFQUNFLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFISlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuR2FtZSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgd2lkdGg6IHZhcigtLWdhbWUtd2lkdGgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBzY3JvbGwtc25hcC1hbGlnbjogc3RhcnQ7XFxuICBzY3JvbGwtc25hcC1zdG9wOiBhbHdheXM7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYygxMDAlIC0gdmFyKC0tZ2FtZS13aWR0aCkpIC8gMik7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcbiAgJl9fdGl0bGUge1xcbiAgICBmb250OiB2YXIoLS1mb250LXMpO1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtcyk7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeS1jb2xvcik7XFxuICB9XFxuXFxuICAmX19nYW1lQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA0MHB4O1xcbiAgfVxcblxcbiAgJl9fdGVhbUltYWdlIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICB9XFxuXFxuICAmX19zY29yZSB7XFxuICAgIGZvbnQ6IHZhcigtLWZvbnQtbCk7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1zKTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIH1cXG5cXG4gICZfX3N0YXRJY29uIHtcXG4gICAgZmlsbDogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiR2FtZVwiOiBgc3JjLWVudGl0aWVzLUdhbWUtR2FtZS1tb2R1bGVfX0dhbWUtLV9SMUQwYCxcblx0XCJHYW1lX190aXRsZVwiOiBgc3JjLWVudGl0aWVzLUdhbWUtR2FtZS1tb2R1bGVfX0dhbWVfX3RpdGxlLS14V1VDemAsXG5cdFwiR2FtZV9fZ2FtZUNvbnRhaW5lclwiOiBgc3JjLWVudGl0aWVzLUdhbWUtR2FtZS1tb2R1bGVfX0dhbWVfX2dhbWVDb250YWluZXItLUt1WnlpYCxcblx0XCJHYW1lX190ZWFtSW1hZ2VcIjogYHNyYy1lbnRpdGllcy1HYW1lLUdhbWUtbW9kdWxlX19HYW1lX190ZWFtSW1hZ2UtLU5aNGJIYCxcblx0XCJHYW1lX19zY29yZVwiOiBgc3JjLWVudGl0aWVzLUdhbWUtR2FtZS1tb2R1bGVfX0dhbWVfX3Njb3JlLS1FN1BZVWAsXG5cdFwiR2FtZV9fc3RhdEljb25cIjogYHNyYy1lbnRpdGllcy1HYW1lLUdhbWUtbW9kdWxlX19HYW1lX19zdGF0SWNvbi0teW00YkRgXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGtleWZyYW1lcyBzcmMtZW50aXRpZXMtR2lmLUdpZi1tb2R1bGVfX3Njcm9sbC1oYW5kLS1QbTVzTSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoODBweCkgc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg4MHB4KSBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDIwJSwgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTc1cHgpIHNjYWxlKDAuNik7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICA4MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpIHNjYWxlKDAuNik7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KSBzY2FsZSgwLjYpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3JjLWVudGl0aWVzLUdpZi1HaWYtbW9kdWxlX19zY3JvbGwtY2FyZC0tWlhlZXQge1xuICAwJSwgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbiAgODAlLCAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI0MHB4KTtcbiAgfVxufVxuLnNyYy1lbnRpdGllcy1HaWYtR2lmLW1vZHVsZV9fR2lmLS1KVEI1YiB7XG4gIHdpZHRoOiB2YXIoLS1nYW1lLXdpZHRoKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xufVxuLnNyYy1lbnRpdGllcy1HaWYtR2lmLW1vZHVsZV9fR2lmX19pdGVtLS1BQ2RnRCB7XG4gIHdpZHRoOiA0MnB4O1xuICBoZWlnaHQ6IDQycHg7XG59XG4uc3JjLWVudGl0aWVzLUdpZi1HaWYtbW9kdWxlX19HaWZfX2hhbmQtLU5weEFsIHtcbiAgZmlsbDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGFuaW1hdGlvbjogc3JjLWVudGl0aWVzLUdpZi1HaWYtbW9kdWxlX19zY3JvbGwtaGFuZC0tUG01c00gMnMgaW5maW5pdGU7XG59XG4uc3JjLWVudGl0aWVzLUdpZi1HaWYtbW9kdWxlX19HaWZfX2NhcmQtLXpfNHhpIHtcbiAgZmlsbDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBhbmltYXRpb246IHNyYy1lbnRpdGllcy1HaWYtR2lmLW1vZHVsZV9fc2Nyb2xsLWNhcmQtLVpYZWV0IDJzIGluZmluaXRlO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2VudGl0aWVzL0dpZi9HaWYubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRTtJQUNFLG9DQUFBO0lBQ0EsVUFBQTtFQUNGO0VBRUE7SUFDRSxvQ0FBQTtJQUNBLFVBQUE7RUFBRjtFQUdBO0lBQ0UsdUNBQUE7SUFDQSxVQUFBO0VBREY7RUFJQTtJQUNFLHFDQUFBO0lBQ0EsVUFBQTtFQUZGO0VBS0E7SUFDRSxxQ0FBQTtJQUNBLFVBQUE7RUFIRjtBQUNGO0FBTUE7RUFDRTtJQUNFLHdCQUFBO0VBSkY7RUFPQTtJQUNFLDZCQUFBO0VBTEY7QUFDRjtBQVFBO0VBQ0Usd0JBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7QUFORjtBQVFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFOSjtBQVNFO0VBQ0UsMEJBQUE7RUFDQSxzRUFBQTtBQVBKO0FBVUU7RUFDRSw4QkFBQTtFQUNBLHNFQUFBO0FBUkpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGtleWZyYW1lcyBzY3JvbGwtaGFuZCB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg4MHB4KSBzY2FsZSgxKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIDEwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg4MHB4KSBzY2FsZSgxKTtcXG4gICAgb3BhY2l0eTogMVxcbiAgfVxcblxcbiAgMjAlLCA2MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTc1cHgpIHNjYWxlKC42KTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIDgwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpIHNjYWxlKC42KTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KSBzY2FsZSguNik7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2Nyb2xsLWNhcmQge1xcbiAgMCUsIDYwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKVxcbiAgfVxcblxcbiAgODAlLCAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yNDBweClcXG4gIH1cXG59XFxuXFxuLkdpZiB7XFxuICB3aWR0aDogdmFyKC0tZ2FtZS13aWR0aCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcblxcbiAgJl9faXRlbSB7XFxuICAgIHdpZHRoOiA0MnB4O1xcbiAgICBoZWlnaHQ6IDQycHg7XFxuICB9XFxuXFxuICAmX19oYW5kIHtcXG4gICAgZmlsbDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICAgIGFuaW1hdGlvbjogc2Nyb2xsLWhhbmQgMnMgaW5maW5pdGVcXG4gIH1cXG5cXG4gICZfX2NhcmQge1xcbiAgICBmaWxsOiByZ2JhKDI1NSAyNTUgMjU1IC8gMzAlKTtcXG4gICAgYW5pbWF0aW9uOiBzY3JvbGwtY2FyZCAycyBpbmZpbml0ZVxcbiAgfVxcblxcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJHaWZcIjogYHNyYy1lbnRpdGllcy1HaWYtR2lmLW1vZHVsZV9fR2lmLS1KVEI1YmAsXG5cdFwiR2lmX19pdGVtXCI6IGBzcmMtZW50aXRpZXMtR2lmLUdpZi1tb2R1bGVfX0dpZl9faXRlbS0tQUNkZ0RgLFxuXHRcIkdpZl9faGFuZFwiOiBgc3JjLWVudGl0aWVzLUdpZi1HaWYtbW9kdWxlX19HaWZfX2hhbmQtLU5weEFsYCxcblx0XCJzY3JvbGwtaGFuZFwiOiBgc3JjLWVudGl0aWVzLUdpZi1HaWYtbW9kdWxlX19zY3JvbGwtaGFuZC0tUG01c01gLFxuXHRcIkdpZl9fY2FyZFwiOiBgc3JjLWVudGl0aWVzLUdpZi1HaWYtbW9kdWxlX19HaWZfX2NhcmQtLXpfNHhpYCxcblx0XCJzY3JvbGwtY2FyZFwiOiBgc3JjLWVudGl0aWVzLUdpZi1HaWYtbW9kdWxlX19zY3JvbGwtY2FyZC0tWlhlZXRgXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNyYy1lbnRpdGllcy1QZXJzb25Qcm90b2NvbC1QZXJzb25Qcm90b2NvbC1tb2R1bGVfX1BlcnNvblByb3RvY29sX19zaGlydC0td2NodmIge1xuICB3aWR0aDogMzBweDtcbiAgYXNwZWN0LXJhdGlvOiA2OS84OTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuLnNyYy1lbnRpdGllcy1QZXJzb25Qcm90b2NvbC1QZXJzb25Qcm90b2NvbC1tb2R1bGVfX1BlcnNvblByb3RvY29sX19pbWFnZS0tZnBZbGEge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG4uc3JjLWVudGl0aWVzLVBlcnNvblByb3RvY29sLVBlcnNvblByb3RvY29sLW1vZHVsZV9fUGVyc29uUHJvdG9jb2xfX2l0ZW0tLW8xbmR4IHtcbiAgcGFkZGluZzogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgZm9udDogdmFyKC0tZm9udC1zKTtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeS1jb2xvcik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWludmVydGVkLWJnLWNvbG9yKTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9lbnRpdGllcy9QZXJzb25Qcm90b2NvbC9QZXJzb25Qcm90b2NvbC5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FBQUo7QUFHRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtBQURKO0FBSUU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLDBDQUFBO0FBRkpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLlBlcnNvblByb3RvY29sIHtcXG4gICZfX3NoaXJ0IHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGFzcGVjdC1yYXRpbzogNjkvODk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIH1cXG5cXG4gICZfX2ltYWdlIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgfVxcblxcbiAgJl9faXRlbSB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIGZvbnQ6IHZhcigtLWZvbnQtcyk7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnktY29sb3IpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pbnZlcnRlZC1iZy1jb2xvcik7XFxuICB9XFxuXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIlBlcnNvblByb3RvY29sX19zaGlydFwiOiBgc3JjLWVudGl0aWVzLVBlcnNvblByb3RvY29sLVBlcnNvblByb3RvY29sLW1vZHVsZV9fUGVyc29uUHJvdG9jb2xfX3NoaXJ0LS13Y2h2YmAsXG5cdFwiUGVyc29uUHJvdG9jb2xfX2ltYWdlXCI6IGBzcmMtZW50aXRpZXMtUGVyc29uUHJvdG9jb2wtUGVyc29uUHJvdG9jb2wtbW9kdWxlX19QZXJzb25Qcm90b2NvbF9faW1hZ2UtLWZwWWxhYCxcblx0XCJQZXJzb25Qcm90b2NvbF9faXRlbVwiOiBgc3JjLWVudGl0aWVzLVBlcnNvblByb3RvY29sLVBlcnNvblByb3RvY29sLW1vZHVsZV9fUGVyc29uUHJvdG9jb2xfX2l0ZW0tLW8xbmR4YFxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zcmMtc2hhcmVkLXVpLVNlY3Rpb25UaXRsZS1TZWN0aW9uVGl0bGUtbW9kdWxlX19TZWN0aW9uVGl0bGUtLVMxOGFNIHtcbiAgZm9udDogdmFyKC0tZm9udC1sKTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXhsKTtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeS1jb2xvcik7XG4gIGxldHRlci1zcGFjaW5nOiAxLjRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5zcmMtc2hhcmVkLXVpLVNlY3Rpb25UaXRsZS1TZWN0aW9uVGl0bGUtbW9kdWxlX19TZWN0aW9uVGl0bGVfY2xlYXItLVBwbVN4IHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG4uc3JjLXNoYXJlZC11aS1TZWN0aW9uVGl0bGUtU2VjdGlvblRpdGxlLW1vZHVsZV9fU2VjdGlvblRpdGxlX3Bvel9tYWluLS1oalNpXyB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnktY29sb3IpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLnNyYy1zaGFyZWQtdWktU2VjdGlvblRpdGxlLVNlY3Rpb25UaXRsZS1tb2R1bGVfX1NlY3Rpb25UaXRsZV9wb3pfcm9hc3Rlci0tRENPbkYge1xuICBjb2xvcjogdmFyKC0tdGV4dC1xdWF0cmVuYXJ5LWNvbG9yKTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zaGFyZWQvdWkvU2VjdGlvblRpdGxlL1NlY3Rpb25UaXRsZS5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFDRjtBQUNFO0VBQ0Usb0JBQUE7QUFDSjtBQUVFO0VBQ0UsZ0NBQUE7RUFDQSx5QkFBQTtBQUFKO0FBR0U7RUFDRSxtQ0FBQTtBQURKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5TZWN0aW9uVGl0bGUge1xcbiAgZm9udDogdmFyKC0tZm9udC1sKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC14bCk7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5LWNvbG9yKTtcXG4gIGxldHRlci1zcGFjaW5nOiAxLjRweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuXFxuICAmX2NsZWFyIHtcXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICB9XFxuXFxuICAmX3Bvel9tYWluIHtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeS1jb2xvcik7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICB9XFxuXFxuICAmX3Bvel9yb2FzdGVyIHtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtcXVhdHJlbmFyeS1jb2xvcik7XFxuICB9XFxuXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIlNlY3Rpb25UaXRsZVwiOiBgc3JjLXNoYXJlZC11aS1TZWN0aW9uVGl0bGUtU2VjdGlvblRpdGxlLW1vZHVsZV9fU2VjdGlvblRpdGxlLS1TMThhTWAsXG5cdFwiU2VjdGlvblRpdGxlX2NsZWFyXCI6IGBzcmMtc2hhcmVkLXVpLVNlY3Rpb25UaXRsZS1TZWN0aW9uVGl0bGUtbW9kdWxlX19TZWN0aW9uVGl0bGVfY2xlYXItLVBwbVN4YCxcblx0XCJTZWN0aW9uVGl0bGVfcG96X21haW5cIjogYHNyYy1zaGFyZWQtdWktU2VjdGlvblRpdGxlLVNlY3Rpb25UaXRsZS1tb2R1bGVfX1NlY3Rpb25UaXRsZV9wb3pfbWFpbi0taGpTaV9gLFxuXHRcIlNlY3Rpb25UaXRsZV9wb3pfcm9hc3RlclwiOiBgc3JjLXNoYXJlZC11aS1TZWN0aW9uVGl0bGUtU2VjdGlvblRpdGxlLW1vZHVsZV9fU2VjdGlvblRpdGxlX3Bvel9yb2FzdGVyLS1EQ09uRmBcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc3JjLXdpZGdldHMtR2FtZUJhci11aS1HYW1lQmFyLW1vZHVsZV9fR2FtZUJhci0tQTZIUDYge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zcmMtd2lkZ2V0cy1HYW1lQmFyLXVpLUdhbWVCYXItbW9kdWxlX19HYW1lQmFyX193aWRnZXQtLUhKcDVSIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICB3aWR0aDogOTUlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwMHB4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBzY3JvbGwtc25hcC10eXBlOiB4IG1hbmRhdG9yeTtcbn1cbi5zcmMtd2lkZ2V0cy1HYW1lQmFyLXVpLUdhbWVCYXItbW9kdWxlX19HYW1lQmFyX19pdGVtLS1IMW5xVCB7XG4gIHdpZHRoOiBtaW4tY29udGVudDtcbn1cblxuLnNyYy13aWRnZXRzLUdhbWVCYXItdWktR2FtZUJhci1tb2R1bGVfX3ZlcnRpY2FsLS1lelRDNSB7XG4gIHBhZGRpbmc6IDEwMHB4IDAgMDtcbiAgZ2FwOiAzMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLnNyYy13aWRnZXRzLUdhbWVCYXItdWktR2FtZUJhci1tb2R1bGVfX3ZlcnRpY2FsLS1lelRDNSAuc3JjLXdpZGdldHMtR2FtZUJhci11aS1HYW1lQmFyLW1vZHVsZV9fR2FtZUJhcl9fd2lkZ2V0LS1ISnA1UiB7XG4gIHdpZHRoOiA5NSU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDQwcHg7XG4gIG92ZXJmbG93OiB1bnNldDtcbiAgc2Nyb2xsLXNuYXAtdHlwZTogdW5zZXQ7XG59XG4uc3JjLXdpZGdldHMtR2FtZUJhci11aS1HYW1lQmFyLW1vZHVsZV9fdmVydGljYWwtLWV6VEM1IC5zcmMtd2lkZ2V0cy1HYW1lQmFyLXVpLUdhbWVCYXItbW9kdWxlX19HYW1lQmFyX19pdGVtLS1IMW5xVCB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG4uc3JjLXdpZGdldHMtR2FtZUJhci11aS1HYW1lQmFyLW1vZHVsZV9fdmVydGljYWwtLWV6VEM1IC5zcmMtd2lkZ2V0cy1HYW1lQmFyLXVpLUdhbWVCYXItbW9kdWxlX19HYW1lQmFyX19naWYtLWFQNzVJIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKHdpZHRoIDw9IDExMDBweCkge1xuICAuc3JjLXdpZGdldHMtR2FtZUJhci11aS1HYW1lQmFyLW1vZHVsZV9fR2FtZUJhcl9fd2lkZ2V0LS1ISnA1UiB7XG4gICAgd2lkdGg6IHZhcigtLWdhbWUtd2lkdGgpO1xuICB9XG4gIC5zcmMtd2lkZ2V0cy1HYW1lQmFyLXVpLUdhbWVCYXItbW9kdWxlX192ZXJ0aWNhbC0tZXpUQzUgLnNyYy13aWRnZXRzLUdhbWVCYXItdWktR2FtZUJhci1tb2R1bGVfX0dhbWVCYXJfX3dpZGdldC0tSEpwNVIge1xuICAgIHdpZHRoOiB2YXIoLS1nYW1lLXdpZHRoKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDMwcHg7XG4gICAgb3ZlcmZsb3c6IHVuc2V0O1xuICAgIHNjcm9sbC1zbmFwLXR5cGU6IHVuc2V0O1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvd2lkZ2V0cy9HYW1lQmFyL3VpL0dhbWVCYXIubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBQUNKO0FBRUU7RUFDRSxrQkFBQTtBQUFKOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQURGO0FBR0U7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUFESjtBQUlFO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtBQUZKO0FBS0U7RUFDRSxhQUFBO0FBSEo7O0FBT0E7RUFDRTtJQUNFLHdCQUFBO0VBSkY7RUFRRTtJQUNFLHdCQUFBO0lBQ0EsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7SUFDQSxTQUFBO0lBQ0EsZUFBQTtJQUNBLHVCQUFBO0VBTko7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuR2FtZUJhciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICZfX3dpZGdldCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMDBweDtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgc2Nyb2xsLXNuYXAtdHlwZTogeCBtYW5kYXRvcnk7XFxuICB9XFxuXFxuICAmX19pdGVtIHtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgfVxcbn1cXG5cXG4udmVydGljYWwge1xcbiAgcGFkZGluZzogMTAwcHggMCAwO1xcbiAgZ2FwOiAzMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFxuICAuR2FtZUJhcl9fd2lkZ2V0IHtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNDBweDtcXG4gICAgb3ZlcmZsb3c6IHVuc2V0O1xcbiAgICBzY3JvbGwtc25hcC10eXBlOiB1bnNldDtcXG4gIH1cXG5cXG4gIC5HYW1lQmFyX19pdGVtIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5HYW1lQmFyX19naWYge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAod2lkdGggPD0gMTEwMHB4KSB7XFxuICAuR2FtZUJhcl9fd2lkZ2V0IHtcXG4gICAgd2lkdGg6IHZhcigtLWdhbWUtd2lkdGgpO1xcbiAgfVxcblxcbiAgLnZlcnRpY2FsIHtcXG4gICAgLkdhbWVCYXJfX3dpZGdldCB7XFxuICAgICAgd2lkdGg6IHZhcigtLWdhbWUtd2lkdGgpO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGdhcDogMzBweDtcXG4gICAgICBvdmVyZmxvdzogdW5zZXQ7XFxuICAgICAgc2Nyb2xsLXNuYXAtdHlwZTogdW5zZXQ7XFxuICAgIH1cXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiR2FtZUJhclwiOiBgc3JjLXdpZGdldHMtR2FtZUJhci11aS1HYW1lQmFyLW1vZHVsZV9fR2FtZUJhci0tQTZIUDZgLFxuXHRcIkdhbWVCYXJfX3dpZGdldFwiOiBgc3JjLXdpZGdldHMtR2FtZUJhci11aS1HYW1lQmFyLW1vZHVsZV9fR2FtZUJhcl9fd2lkZ2V0LS1ISnA1UmAsXG5cdFwiR2FtZUJhcl9faXRlbVwiOiBgc3JjLXdpZGdldHMtR2FtZUJhci11aS1HYW1lQmFyLW1vZHVsZV9fR2FtZUJhcl9faXRlbS0tSDFucVRgLFxuXHRcInZlcnRpY2FsXCI6IGBzcmMtd2lkZ2V0cy1HYW1lQmFyLXVpLUdhbWVCYXItbW9kdWxlX192ZXJ0aWNhbC0tZXpUQzVgLFxuXHRcIkdhbWVCYXJfX2dpZlwiOiBgc3JjLXdpZGdldHMtR2FtZUJhci11aS1HYW1lQmFyLW1vZHVsZV9fR2FtZUJhcl9fZ2lmLS1hUDc1SWBcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc3JjLXdpZGdldHMtR2FtZVByb3RvY29sLXVpLUdhbWVQcm90b2NvbC1tb2R1bGVfX0dhbWVQcm90b2NvbC0tUm9sbjMge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcbiAgei1pbmRleDogLTE7XG59XG4uc3JjLXdpZGdldHMtR2FtZVByb3RvY29sLXVpLUdhbWVQcm90b2NvbC1tb2R1bGVfX0dhbWVQcm90b2NvbF9fb3ZlcmxheS0tUmNWZEgge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuLnNyYy13aWRnZXRzLUdhbWVQcm90b2NvbC11aS1HYW1lUHJvdG9jb2wtbW9kdWxlX19HYW1lUHJvdG9jb2xfX2NvbnRlbnQtLXZzdzVaIHtcbiAgcGFkZGluZzogMjBweDtcbiAgbWF4LXdpZHRoOiA5MCU7XG4gIG1heC1oZWlnaHQ6IDcwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyMHB4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4uc3JjLXdpZGdldHMtR2FtZVByb3RvY29sLXVpLUdhbWVQcm90b2NvbC1tb2R1bGVfX29wZW5lZC0tSWNjcjYge1xuICBvcGFjaXR5OiAxO1xuICB6LWluZGV4OiB2YXIoLS1tb2RhbC16LWluZGV4KTtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG59XG4uc3JjLXdpZGdldHMtR2FtZVByb3RvY29sLXVpLUdhbWVQcm90b2NvbC1tb2R1bGVfX29wZW5lZC0tSWNjcjYgLnNyYy13aWRnZXRzLUdhbWVQcm90b2NvbC11aS1HYW1lUHJvdG9jb2wtbW9kdWxlX19HYW1lUHJvdG9jb2xfX2NvbnRlbnQtLXZzdzVaIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy93aWRnZXRzL0dhbWVQcm90b2NvbC91aS9HYW1lUHJvdG9jb2wubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQUNGO0FBQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7QUFDSjtBQUVFO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFJQTtFQUNFLFVBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBO0FBREY7QUFHRTtFQUNFLG1CQUFBO0FBREpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLkdhbWVQcm90b2NvbCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiAuNHMgZWFzZTtcXG4gIHotaW5kZXg6IC0xO1xcblxcbiAgJl9fb3ZlcmxheSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDYwJSk7XFxuICB9XFxuXFxuICAmX19jb250ZW50IHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgbWF4LXdpZHRoOiA5MCU7XFxuICAgIG1heC1oZWlnaHQ6IDcwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC41KTtcXG4gICAgdHJhbnNpdGlvbjogLjRzIGVhc2U7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gIH1cXG59XFxuXFxuLm9wZW5lZCB7XFxuICBvcGFjaXR5OiAxO1xcbiAgei1pbmRleDogdmFyKC0tbW9kYWwtei1pbmRleCk7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG5cXG4gIC5HYW1lUHJvdG9jb2xfX2NvbnRlbnQge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJHYW1lUHJvdG9jb2xcIjogYHNyYy13aWRnZXRzLUdhbWVQcm90b2NvbC11aS1HYW1lUHJvdG9jb2wtbW9kdWxlX19HYW1lUHJvdG9jb2wtLVJvbG4zYCxcblx0XCJHYW1lUHJvdG9jb2xfX292ZXJsYXlcIjogYHNyYy13aWRnZXRzLUdhbWVQcm90b2NvbC11aS1HYW1lUHJvdG9jb2wtbW9kdWxlX19HYW1lUHJvdG9jb2xfX292ZXJsYXktLVJjVmRIYCxcblx0XCJHYW1lUHJvdG9jb2xfX2NvbnRlbnRcIjogYHNyYy13aWRnZXRzLUdhbWVQcm90b2NvbC11aS1HYW1lUHJvdG9jb2wtbW9kdWxlX19HYW1lUHJvdG9jb2xfX2NvbnRlbnQtLXZzdzVaYCxcblx0XCJvcGVuZWRcIjogYHNyYy13aWRnZXRzLUdhbWVQcm90b2NvbC11aS1HYW1lUHJvdG9jb2wtbW9kdWxlX19vcGVuZWQtLUljY3I2YFxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zcmMtd2lkZ2V0cy1UYWJsZS1UYWJsZS1tb2R1bGVfX1RhYmxlLS1pZVhXayB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDIwcHg7XG59XG4uc3JjLXdpZGdldHMtVGFibGUtVGFibGUtbW9kdWxlX19UYWJsZV9faGVhZGluZy0tWk1fc0gge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAyMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNyYy13aWRnZXRzLVRhYmxlLVRhYmxlLW1vZHVsZV9fVGFibGVfX2xvZ28tLXdrZlBVIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cbi5zcmMtd2lkZ2V0cy1UYWJsZS1UYWJsZS1tb2R1bGVfX1RhYmxlX19jb250YWluZXItLWl0bjVzIHtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG4uc3JjLXdpZGdldHMtVGFibGUtVGFibGUtbW9kdWxlX19UYWJsZV9fcm93LS1fSzVIdyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWludmVydGVkLWJnLWNvbG9yKTtcbn1cbi5zcmMtd2lkZ2V0cy1UYWJsZS1UYWJsZS1tb2R1bGVfX1RhYmxlX190aXRsZS0tYkFnWTIge1xuICBwYWRkaW5nOiA1cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW52ZXJ0ZWQtYmctY29sb3IpO1xuICBmb250OiB2YXIoLS1mb250LW0pO1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbCk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnktY29sb3IpO1xufVxuLnNyYy13aWRnZXRzLVRhYmxlLVRhYmxlLW1vZHVsZV9fVGFibGVfX2l0ZW0tLXdfalJ5IHtcbiAgcGFkZGluZzogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQ6IHZhcigtLWZvbnQtcyk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnktY29sb3IpO1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWludmVydGVkLWJnLWNvbG9yKTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy93aWRnZXRzL1RhYmxlL1RhYmxlLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUNGO0FBQ0U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQUNKO0FBRUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUFKO0FBR0U7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQURKO0FBSUU7RUFDRSwwQ0FBQTtBQUZKO0FBS0U7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0FBSEo7QUFNRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7QUFKSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuVGFibGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuXFxuICAmX19oZWFkaW5nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gICZfX2xvZ28ge1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgfVxcblxcbiAgJl9fY29udGFpbmVyIHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICB9XFxuXFxuICAmX19yb3cge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pbnZlcnRlZC1iZy1jb2xvcilcXG4gIH1cXG5cXG4gICZfX3RpdGxlIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWludmVydGVkLWJnLWNvbG9yKTtcXG4gICAgZm9udDogdmFyKC0tZm9udC1tKTtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWwpO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5LWNvbG9yKTtcXG4gIH1cXG5cXG4gICZfX2l0ZW0ge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udDogdmFyKC0tZm9udC1zKTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeS1jb2xvcik7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW52ZXJ0ZWQtYmctY29sb3IpXFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIlRhYmxlXCI6IGBzcmMtd2lkZ2V0cy1UYWJsZS1UYWJsZS1tb2R1bGVfX1RhYmxlLS1pZVhXa2AsXG5cdFwiVGFibGVfX2hlYWRpbmdcIjogYHNyYy13aWRnZXRzLVRhYmxlLVRhYmxlLW1vZHVsZV9fVGFibGVfX2hlYWRpbmctLVpNX3NIYCxcblx0XCJUYWJsZV9fbG9nb1wiOiBgc3JjLXdpZGdldHMtVGFibGUtVGFibGUtbW9kdWxlX19UYWJsZV9fbG9nby0td2tmUFVgLFxuXHRcIlRhYmxlX19jb250YWluZXJcIjogYHNyYy13aWRnZXRzLVRhYmxlLVRhYmxlLW1vZHVsZV9fVGFibGVfX2NvbnRhaW5lci0taXRuNXNgLFxuXHRcIlRhYmxlX19yb3dcIjogYHNyYy13aWRnZXRzLVRhYmxlLVRhYmxlLW1vZHVsZV9fVGFibGVfX3Jvdy0tX0s1SHdgLFxuXHRcIlRhYmxlX190aXRsZVwiOiBgc3JjLXdpZGdldHMtVGFibGUtVGFibGUtbW9kdWxlX19UYWJsZV9fdGl0bGUtLWJBZ1kyYCxcblx0XCJUYWJsZV9faXRlbVwiOiBgc3JjLXdpZGdldHMtVGFibGUtVGFibGUtbW9kdWxlX19UYWJsZV9faXRlbS0td19qUnlgXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9HYW1lLm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vR2FtZS5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9HYW1lLm1vZHVsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vR2lmLm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vR2lmLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0dpZi5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1BlcnNvblByb3RvY29sLm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vUGVyc29uUHJvdG9jb2wubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vUGVyc29uUHJvdG9jb2wubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TZWN0aW9uVGl0bGUubW9kdWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwO1xuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TZWN0aW9uVGl0bGUubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU2VjdGlvblRpdGxlLm1vZHVsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vR2FtZUJhci5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHA7XG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0dhbWVCYXIubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vR2FtZUJhci5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0dhbWVQcm90b2NvbC5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHA7XG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0dhbWVQcm90b2NvbC5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9HYW1lUHJvdG9jb2wubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9UYWJsZS5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHA7XG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1RhYmxlLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1RhYmxlLm1vZHVsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiZXhwb3J0IHZhciB0cmltR2FtZXMgPSBmdW5jdGlvbiAoZ2FtZXNBcnJheSkge1xuICAgIHZhciByZW5kZXJBcnJheSA9IFtdO1xuICAgIHZhciByZWNlbnRHYW1lcyA9IGdhbWVzQXJyYXlcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIEdhbWVTdGF0dXMgPSBfYS5HYW1lU3RhdHVzO1xuICAgICAgICByZXR1cm4gR2FtZVN0YXR1cyA9PT0gMTtcbiAgICB9KVxuICAgICAgICAuc2xpY2UoLTExKTtcbiAgICB2YXIgbmV4dEdhbWUgPSBnYW1lc0FycmF5XG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBHYW1lU3RhdHVzID0gX2EuR2FtZVN0YXR1cztcbiAgICAgICAgcmV0dXJuIEdhbWVTdGF0dXMgPT09IDA7XG4gICAgfSlbMF07XG4gICAgcmVjZW50R2FtZXMuZm9yRWFjaChmdW5jdGlvbiAoZ2FtZSkge1xuICAgICAgICByZW5kZXJBcnJheS51bnNoaWZ0KGdhbWUpO1xuICAgIH0pO1xuICAgIHJlbmRlckFycmF5LnVuc2hpZnQobmV4dEdhbWUpO1xuICAgIHJldHVybiByZW5kZXJBcnJheTtcbn07XG4iLCJleHBvcnQgeyBHYW1lQmFyIH0gZnJvbSAnLi91aS9HYW1lQmFyJztcbiJdLCJuYW1lcyI6WyJfX2Fzc2lnbiIsIk9iamVjdCIsImFzc2lnbiIsInQiLCJzIiwiaSIsIm4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJwIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiYXBwbHkiLCJfX2F3YWl0ZXIiLCJ0aGlzQXJnIiwiX2FyZ3VtZW50cyIsIlAiLCJnZW5lcmF0b3IiLCJhZG9wdCIsInZhbHVlIiwicmVzb2x2ZSIsIlByb21pc2UiLCJyZWplY3QiLCJmdWxmaWxsZWQiLCJzdGVwIiwibmV4dCIsImUiLCJyZWplY3RlZCIsInJlc3VsdCIsImRvbmUiLCJ0aGVuIiwiX19nZW5lcmF0b3IiLCJib2R5IiwiXyIsImxhYmVsIiwic2VudCIsInRyeXMiLCJvcHMiLCJmIiwieSIsImciLCJ2ZXJiIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJ2Iiwib3AiLCJUeXBlRXJyb3IiLCJwb3AiLCJwdXNoIiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIm1haW5BcGkiLCJ1c2VQcm90b2NvbCIsIl90aGlzIiwiX2EiLCJpc09wZW4iLCJnYW1lSWQiLCJnYW1lSW5mbyIsImdhbWVEYXRhIiwicHJvdG9jb2xTdGF0ZSIsInNldFByb3RvY29sU3RhdGUiLCJmZXRjaEdhbWUiLCJnZXRHYW1lUHJvdG9jb2wiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwianN4IiwiX2pzeCIsImpzeHMiLCJfanN4cyIsImNsYXNzTmFtZXMiLCJjbHMiLCJCdXR0b24iLCJUaGVtZUJ1dHRvbiIsIlN0YXRJY29uIiwiR2FtZSIsInByb3BzIiwiZ2FtZSIsImNsYXNzTmFtZSIsIkdhbWVJRCIsIkRpc3BsYXlEYXRlVGltZU1zayIsIlRlYW1Mb2dvQSIsIlRlYW1Mb2dvQiIsIlNjb3JlQSIsIlNjb3JlQiIsIm9uU3RhdE9wZW4iLCJjaGlsZHJlbiIsIkdhbWVfX3RpdGxlIiwiR2FtZV9fZ2FtZUNvbnRhaW5lciIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiY29uY2F0IiwiR2FtZV9fdGVhbUltYWdlIiwiR2FtZV9fc2NvcmUiLCJvbkNsaWNrIiwidGhlbWUiLCJQT1pfR0FNRSIsIkdhbWVfX3N0YXRJY29uIiwiR2lmIiwiR2lmX19pdGVtIiwidmlld0JveCIsImdpZl9fY2FyZCIsIngiLCJ3aWR0aCIsImhlaWdodCIsInJ4IiwiR2lmX19jYXJkIiwiR2lmX19oYW5kIiwiZCIsIlBlcnNvblByb3RvY29sIiwiUGxheWVyTnVtYmVyIiwiUGVyc29uSUQiLCJQZXJzb25OYW1lUnUiLCJQbGF5ZWRUaW1lIiwiUG9pbnRzIiwiU2hvdHMxIiwiU2hvdHMyIiwiU2hvdHMzIiwiR29hbDIiLCJHb2FsMyIsIlNob3QyIiwiU2hvdDMiLCJEZWZSZWJvdW5kIiwiT2ZmUmVib3VuZCIsIlJlYm91bmQiLCJBc3Npc3QiLCJTdGVhbCIsIlR1cm5vdmVyIiwiQmxvY2tzIiwiRm91bCIsIk9wcG9uZW50Rm91bCIsIlBsdXNNaW51cyIsInByb3RvY29sIiwiUGVyc29uUHJvdG9jb2xfX2l0ZW0iLCJQZXJzb25Qcm90b2NvbF9fc2hpcnQiLCJQZXJzb25Qcm90b2NvbF9faW1hZ2UiLCJTZWN0aW9uVGl0bGUiLCJHYW1lc0NvbnRleHQiLCJ1c2VDb250ZXh0IiwidHJpbUdhbWVzIiwiR2FtZUJhciIsImlzVmVydGljYWwiLCJnYW1lc0FycmF5IiwiX2IiLCJyZW5kZXJHYW1lcyIsInNldFJlbmRlckdhbWVzIiwibW9kcyIsInZlcnRpY2FsIiwiaWQiLCJHYW1lQmFyX19naWYiLCJHYW1lQmFyX193aWRnZXQiLCJtYXAiLCJpbmRleCIsIkdhbWVCYXJfX2l0ZW0iLCJGcmFnbWVudCIsIl9GcmFnbWVudCIsIlRhYmxlIiwiTG9hZGVyIiwiR2FtZVByb3RvY29sIiwib3BlbmVkIiwiY2xvc2VQb3B1cCIsIm9uQ29udGVudENsaWNrIiwic3RvcFByb3BhZ2F0aW9uIiwiR2FtZVByb3RvY29sX19vdmVybGF5IiwiR2FtZVByb3RvY29sX19jb250ZW50IiwiR2FtZVRlYW1zIiwibG9nb1RlYW0iLCJuYW1lVGVhbSIsIlRlYW1OYW1lQXJ1IiwiVGVhbU5hbWVCcnUiLCJfX3Jlc3QiLCJpbmRleE9mIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJjcmVhdGVFbGVtZW50IiwiX2NyZWF0ZUVsZW1lbnQiLCJTY29yZSIsIlNob3QxUGVyY2VudCIsIlNob3QyUGVyY2VudCIsIlNob3QzUGVyY2VudCIsIlBsYXllcnMiLCJUYWJsZV9faGVhZGluZyIsIlRhYmxlX19sb2dvIiwic3JjIiwiYWx0IiwiVGFibGVfX3RlYW0iLCJUYWJsZV9fY29udGFpbmVyIiwiVGFibGVfX3JvdyIsInJvd1NwYW4iLCJjb2xTcGFuIiwiVGFibGVfX3RpdGxlIiwidGl0bGUiLCJwbGF5ZXJQcm9wcyIsImtleSIsIlRhYmxlX19pdGVtIiwidG9GaXhlZCJdLCJzb3VyY2VSb290IjoiIn0=
"use strict";
(self["webpackChunkdinamo"] = self["webpackChunkdinamo"] || []).push([["src_pages_AboutPage_ui_AboutPage_tsx"],{

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
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "player",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          className: "name",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
            children: PersonNameRu
          })
        })
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
      className: _PersonProtocol_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].PersonProtocol__item,
      children: PlayedTime && PlayedTime
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
      className: _PersonProtocol_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].PersonProtocol__item,
      children: Points && Points
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
      className: _PersonProtocol_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].PersonProtocol__item,
      children: Shots2 && Shots2
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
      className: _PersonProtocol_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].PersonProtocol__item,
      children: Shots3 && Shots3
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
      className: _PersonProtocol_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].PersonProtocol__item,
      children: Shots1 && Shots1
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
      className: _PersonProtocol_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].PersonProtocol__item,
      children: DefRebound && DefRebound
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
      className: _PersonProtocol_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].PersonProtocol__item,
      children: OffRebound && OffRebound
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
      className: _PersonProtocol_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].PersonProtocol__item,
      children: Rebound && Rebound
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
      className: _PersonProtocol_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].PersonProtocol__item,
      children: Assist && Assist
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
      className: _PersonProtocol_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].PersonProtocol__item,
      children: Steal && Steal
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
      className: _PersonProtocol_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].PersonProtocol__item,
      children: Turnover && Turnover
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
      className: _PersonProtocol_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].PersonProtocol__item,
      children: Blocks && Blocks
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
      className: _PersonProtocol_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].PersonProtocol__item,
      children: Foul && Foul
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
      className: _PersonProtocol_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].PersonProtocol__item,
      children: OpponentFoul && OpponentFoul
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
      className: _PersonProtocol_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].PersonProtocol__item,
      children: PlusMinus && PlusMinus
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
      className: _PersonProtocol_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].PersonProtocol__item
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

/***/ "./src/pages/AboutPage/ui/AboutPage.tsx":
/*!**********************************************!*\
  !*** ./src/pages/AboutPage/ui/AboutPage.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AboutPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var app_providers_ProtocolProvider_lib_useProtocol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/providers/ProtocolProvider/lib/useProtocol */ "./src/app/providers/ProtocolProvider/lib/useProtocol.tsx");
/* harmony import */ var widgets_GameBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! widgets/GameBar */ "./src/widgets/GameBar/index.ts");
/* harmony import */ var widgets_GameProtocol_ui_GameProtocol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! widgets/GameProtocol/ui/GameProtocol */ "./src/widgets/GameProtocol/ui/GameProtocol.tsx");




function AboutPage() {
  var _a = (0,app_providers_ProtocolProvider_lib_useProtocol__WEBPACK_IMPORTED_MODULE_1__.useProtocol)(),
    protocolState = _a.protocolState,
    setProtocolState = _a.setProtocolState;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "about-page",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(widgets_GameBar__WEBPACK_IMPORTED_MODULE_2__.GameBar, {
      protocolState: protocolState,
      setProtocolState: setProtocolState
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(widgets_GameProtocol_ui_GameProtocol__WEBPACK_IMPORTED_MODULE_3__.GameProtocol, {
      protocolState: protocolState,
      setProtocolState: setProtocolState
    })]
  });
}
;

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
      isOpen: false
    }));
    console.log(protocolState);
  };
  var onOverlayClick = function onOverlayClick(e) {
    e.stopPropagation();
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: (0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__.classNames)(_GameProtocol_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].GameProtocol, mods, [className !== null && className !== void 0 ? className : '']),
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: _GameProtocol_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].GameProtocol__overlay,
      onClick: closePopup,
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: _GameProtocol_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].GameProtocol__content,
        onClick: onOverlayClick,
        children: protocolState.gameInfo && protocolState.gameData ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
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
  border: 1px solid var(--inverted-bg-color);
}`, "",{"version":3,"sources":["webpack://./src/components/PersonProtocol/PersonProtocol.module.scss"],"names":[],"mappings":"AACE;EACE,WAAA;EACA,mBAAA;EACA,wBAAA;AAAJ;AAGE;EACE,WAAA;EACA,YAAA;EACA,wBAAA;EACA,mBAAA;AADJ;AAIE;EACE,YAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,0CAAA;AAFJ","sourcesContent":[".PersonProtocol {\n  &__shirt {\n    width: 30px;\n    aspect-ratio: 69/89;\n    background-size: contain;\n  }\n\n  &__image {\n    width: 30px;\n    height: 30px;\n    background-size: contain;\n    border-radius: 100%;\n  }\n\n  &__item {\n    padding: 5px;\n    text-align: center;\n    box-sizing: border-box;\n    width: max-content;\n    border: 1px solid var(--inverted-bg-color);\n  }\n\n}"],"sourceRoot":""}]);
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
}
.src-components-Table-Table-module__Table__item--aBYG0 {
  padding: 5px;
  text-align: center;
  box-sizing: border-box;
  width: max-content;
  border: 1px solid var(--inverted-bg-color);
}`, "",{"version":3,"sources":["webpack://./src/components/Table/Table.module.scss"],"names":[],"mappings":"AAAA;EACE,WAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,SAAA;AACF;AACE;EACE,WAAA;EACA,aAAA;EACA,SAAA;EACA,mBAAA;AACJ;AAEE;EACE,WAAA;EACA,YAAA;AAAJ;AAGE;EACE,sBAAA;EACA,WAAA;EACA,yBAAA;AADJ;AAIE;EACE,0CAAA;AAFJ;AAKE;EACE,YAAA;EACA,sBAAA;EACA,kBAAA;EACA,0CAAA;AAHJ;AAME;EACE,YAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,0CAAA;AAJJ","sourcesContent":[".Table {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n\n  &__heading {\n    width: 100%;\n    display: flex;\n    gap: 20px;\n    align-items: center;\n  }\n\n  &__logo {\n    width: 50px;\n    height: 50px;\n  }\n\n  &__container {\n    align-self: flex-start;\n    width: 100%;\n    border-collapse: collapse;\n  }\n\n  &__row {\n    border: 1px solid var(--inverted-bg-color)\n  }\n\n  &__title {\n    padding: 5px;\n    box-sizing: border-box;\n    width: max-content;\n    border: 1px solid var(--inverted-bg-color)\n  }\n\n  &__item {\n    padding: 5px;\n    text-align: center;\n    box-sizing: border-box;\n    width: max-content;\n    border: 1px solid var(--inverted-bg-color)\n  }\n}"],"sourceRoot":""}]);
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
  color: var(--text-secondary-color);
  text-shadow: 0.7px 0.7px 0 var(--text-primary-color), -0.7px 0.7px 0 var(--text-primary-color), 0.7px -0.7px 0 var(--text-primary-color), -0.7px -0.7px 0 var(--text-primary-color);
  letter-spacing: 4px;
}
.src-shared-ui-SectionTitle-SectionTitle-module__SectionTitle_poz_roaster--DCOnF {
  color: var(--text-quatrenary-color);
}`, "",{"version":3,"sources":["webpack://./src/shared/ui/SectionTitle/SectionTitle.module.scss"],"names":[],"mappings":"AAAA;EACE,mBAAA;EACA,kCAAA;EACA,gCAAA;EACA,qBAAA;EACA,yBAAA;AACF;AACE;EACE,oBAAA;AACJ;AAEE;EACE,kCAAA;EACA,mLACQ;EAIR,mBAAA;AAJJ;AAOE;EACE,mCAAA;AALJ","sourcesContent":[".SectionTitle {\n  font: var(--font-l);\n  font-weight: var(--font-weight-xl);\n  color: var(--text-primary-color);\n  letter-spacing: 1.4px;\n  text-transform: uppercase;\n\n  &_clear {\n    text-transform: none;\n  }\n\n  &_poz_main {\n    color: var(--text-secondary-color);\n    text-shadow:\n            .7px .7px 0 var(--text-primary-color),\n            -.7px .7px 0 var(--text-primary-color),\n            .7px -.7px 0 var(--text-primary-color),\n            -.7px -.7px 0 var(--text-primary-color);\n    letter-spacing: 4px;\n  }\n\n  &_poz_roaster {\n    color: var(--text-quatrenary-color);\n  }\n\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX0Fib3V0UGFnZV91aV9BYm91dFBhZ2VfdHN4Ljk3OGI5MzM3ODU0Mzg1NDBjOWE5LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0Esc0JBQXNCLHNFQUFzRSxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsaUNBQWlDLGtCQUFrQjtBQUMzUTtBQUMvQjtBQUNBLHNCQUFzQixnREFBbUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLHlDQUF5QyxnREFBbUI7QUFDL0Q7QUFDQSxHQUFHLHFDQUFxQyxnREFBbUI7QUFDM0Q7QUFDQSxHQUFHO0FBQ0g7QUFDQSxpRUFBZSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2YxQixJQUFJQSxRQUFRLEdBQUksU0FBSSxJQUFJLFNBQUksQ0FBQ0EsUUFBUSxJQUFLLFlBQVk7RUFDbERBLFFBQVEsR0FBR0MsTUFBTSxDQUFDQyxNQUFNLElBQUksVUFBU0MsQ0FBQyxFQUFFO0lBQ3BDLEtBQUssSUFBSUMsQ0FBQyxFQUFFQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQyxDQUFDLEdBQUdDLFNBQVMsQ0FBQ0MsTUFBTSxFQUFFSCxDQUFDLEdBQUdDLENBQUMsRUFBRUQsQ0FBQyxFQUFFLEVBQUU7TUFDakRELENBQUMsR0FBR0csU0FBUyxDQUFDRixDQUFDLENBQUM7TUFDaEIsS0FBSyxJQUFJSSxDQUFDLElBQUlMLENBQUMsRUFBRSxJQUFJSCxNQUFNLENBQUNTLFNBQVMsQ0FBQ0MsY0FBYyxDQUFDQyxJQUFJLENBQUNSLENBQUMsRUFBRUssQ0FBQyxDQUFDLEVBQzNETixDQUFDLENBQUNNLENBQUMsQ0FBQyxHQUFHTCxDQUFDLENBQUNLLENBQUMsQ0FBQztJQUNuQjtJQUNBLE9BQU9OLENBQUM7RUFDWixDQUFDO0VBQ0QsT0FBT0gsUUFBUSxDQUFDYSxLQUFLLENBQUMsSUFBSSxFQUFFTixTQUFTLENBQUM7QUFDMUMsQ0FBQztBQUNELElBQUlPLFNBQVMsR0FBSSxT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YTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsa0tBQU87OztBQUd4QixJQUFJLElBQVU7QUFDZCxPQUFPLGtLQUFPLFdBQVcsVUFBVTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixrS0FBTztBQUNoQyxvQ0FBb0MsdUpBQVcsR0FBRyxrS0FBTzs7QUFFekQsSUFBSSxpQkFBaUI7QUFDckIsTUFBTSxrVUFBMko7QUFDakssTUFBTTtBQUFBO0FBQ04sc0RBQXNELHVKQUFXLEdBQUcsa0tBQU87QUFDM0UsZ0JBQWdCLFVBQVU7O0FBRTFCO0FBQ0E7O0FBRUEsMENBQTBDLHVKQUFXLEdBQUcsa0tBQU87O0FBRS9ELHFCQUFxQixrS0FBTztBQUM1QixPQUFPO0FBQ1A7QUFDQTs7QUFFQSxFQUFFLFVBQVU7QUFDWjtBQUNBLEdBQUc7QUFDSDs7O0FBRzBLO0FBQzFLLE9BQU8saUVBQWUsa0tBQU8sSUFBSSxrS0FBTyxVQUFVLGtLQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUM3RXRFO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEJ1QyIsInNvdXJjZXMiOlsid2VicGFjazovL2RpbmFtby8uL3NyYy9zaGFyZWQvYXNzZXRzL2ljb25zL3N0YXQtaWNvbi5zdmciLCJ3ZWJwYWNrOi8vZGluYW1vLy4vc3JjL2FwcC9wcm92aWRlcnMvUHJvdG9jb2xQcm92aWRlci9saWIvdXNlUHJvdG9jb2wudHN4Iiwid2VicGFjazovL2RpbmFtby8uL3NyYy9jb21wb25lbnRzL0dhbWUvR2FtZS50c3giLCJ3ZWJwYWNrOi8vZGluYW1vLy4vc3JjL2NvbXBvbmVudHMvR2lmL0dpZi50c3giLCJ3ZWJwYWNrOi8vZGluYW1vLy4vc3JjL2NvbXBvbmVudHMvUGVyc29uUHJvdG9jb2wvUGVyc29uUHJvdG9jb2wudHN4Iiwid2VicGFjazovL2RpbmFtby8uL3NyYy9jb21wb25lbnRzL1RhYmxlL1RhYmxlLnRzeCIsIndlYnBhY2s6Ly9kaW5hbW8vLi9zcmMvcGFnZXMvQWJvdXRQYWdlL3VpL0Fib3V0UGFnZS50c3giLCJ3ZWJwYWNrOi8vZGluYW1vLy4vc3JjL3NoYXJlZC91aS9TZWN0aW9uVGl0bGUvU2VjdGlvblRpdGxlLnRzeCIsIndlYnBhY2s6Ly9kaW5hbW8vLi9zcmMvd2lkZ2V0cy9HYW1lQmFyL3VpL0dhbWVCYXIudHN4Iiwid2VicGFjazovL2RpbmFtby8uL3NyYy93aWRnZXRzL0dhbWVQcm90b2NvbC91aS9HYW1lUHJvdG9jb2wudHN4Iiwid2VicGFjazovL2RpbmFtby8uL3NyYy9jb21wb25lbnRzL0dhbWUvR2FtZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9kaW5hbW8vLi9zcmMvY29tcG9uZW50cy9HaWYvR2lmLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2RpbmFtby8uL3NyYy9jb21wb25lbnRzL1BlcnNvblByb3RvY29sL1BlcnNvblByb3RvY29sLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2RpbmFtby8uL3NyYy9jb21wb25lbnRzL1RhYmxlL1RhYmxlLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2RpbmFtby8uL3NyYy9zaGFyZWQvdWkvU2VjdGlvblRpdGxlL1NlY3Rpb25UaXRsZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9kaW5hbW8vLi9zcmMvd2lkZ2V0cy9HYW1lQmFyL3VpL0dhbWVCYXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZGluYW1vLy4vc3JjL3dpZGdldHMvR2FtZVByb3RvY29sL3VpL0dhbWVQcm90b2NvbC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9kaW5hbW8vLi9zcmMvY29tcG9uZW50cy9HYW1lL0dhbWUubW9kdWxlLnNjc3M/MDFjMSIsIndlYnBhY2s6Ly9kaW5hbW8vLi9zcmMvY29tcG9uZW50cy9HaWYvR2lmLm1vZHVsZS5zY3NzPzcyMTkiLCJ3ZWJwYWNrOi8vZGluYW1vLy4vc3JjL2NvbXBvbmVudHMvUGVyc29uUHJvdG9jb2wvUGVyc29uUHJvdG9jb2wubW9kdWxlLnNjc3M/MTVmZSIsIndlYnBhY2s6Ly9kaW5hbW8vLi9zcmMvY29tcG9uZW50cy9UYWJsZS9UYWJsZS5tb2R1bGUuc2Nzcz8zMjIwIiwid2VicGFjazovL2RpbmFtby8uL3NyYy9zaGFyZWQvdWkvU2VjdGlvblRpdGxlL1NlY3Rpb25UaXRsZS5tb2R1bGUuc2Nzcz9mY2JjIiwid2VicGFjazovL2RpbmFtby8uL3NyYy93aWRnZXRzL0dhbWVCYXIvdWkvR2FtZUJhci5tb2R1bGUuc2Nzcz83NWYyIiwid2VicGFjazovL2RpbmFtby8uL3NyYy93aWRnZXRzL0dhbWVQcm90b2NvbC91aS9HYW1lUHJvdG9jb2wubW9kdWxlLnNjc3M/ZTMzMSIsIndlYnBhY2s6Ly9kaW5hbW8vLi9zcmMvc2hhcmVkL2xpYi90cmltR2FtZXMvdHJpbUdhbWVzLnRzIiwid2VicGFjazovL2RpbmFtby8uL3NyYy93aWRnZXRzL0dhbWVCYXIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9wYXRoLCBfcGF0aDI7XG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduID8gT2JqZWN0LmFzc2lnbi5iaW5kKCkgOiBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xudmFyIFN2Z1N0YXRJY29uID0gZnVuY3Rpb24gU3ZnU3RhdEljb24ocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIF9leHRlbmRzKHtcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgIHdpZHRoOiAyNSxcbiAgICBoZWlnaHQ6IDI1LFxuICAgIHZpZXdCb3g6IFwiMCAwIDUxMiA1MTJcIlxuICB9LCBwcm9wcyksIF9wYXRoIHx8IChfcGF0aCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMjM0LjUgNDIuMWMtNDEuNSA0LjItODIuNiAyMS4zLTExNC43IDQ3LjctOC45IDcuMy0yNC44IDIzLjQtMzEuOSAzMi4yLTIxLjUgMjYuOS0zNi45IDYwLjgtNDMuNCA5NS43LTExLjIgNjAuMSA1LjMgMTI1IDQzLjkgMTcyLjkgNi43IDguNCAyMi44IDI0LjYgMzEuNCAzMS42IDUyLjYgNDMuMyAxMjMuNCA1OC44IDE5MC4xIDQxLjggNTkuNi0xNS4yIDExMi01Ny45IDEzOS0xMTMuNCAyMi42LTQ2LjQgMjcuOS05OC40IDE1LjEtMTQ4LjUtNy40LTI5LTIyLjUtNTguOC00MS44LTgyLjMtNy4zLTguOS0yMy40LTI0LjgtMzIuMi0zMS45LTQzLTM0LjQtMTAwLjgtNTEuNC0xNTUuNS00NS44TTM1OSAyNTZ2MTMzSDE1M1YxMjNoMjA2elwiXG4gIH0pKSwgX3BhdGgyIHx8IChfcGF0aDIgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTE4NSAxNzcuNXY3LjVoMTQydi0xNUgxODV6TTE4NS40IDIwNC4zYy0uMy44LS40IDQuMy0uMiA3LjhsLjMgNi40aDE0MXYtMTVsLTcwLjMtLjNjLTU4LjUtLjItNzAuMyAwLTcwLjggMS4xTTE4NS43IDIzNy43Yy0uNC4zLS43IDMuNy0uNyA3LjV2Ni44aDc3di0xNWgtMzcuOGMtMjAuOCAwLTM4LjIuMy0zOC41LjdNMjg4IDMxNC41VjM1N2wxOS4zLS4yIDE5LjItLjMuMy00Mi4zLjItNDIuMmgtMzl6TTE4NS4yIDMyMy4ybC4zIDMzLjMgMTkuMy4zIDE5LjIuMnYtNjdoLTM5ek0yMzcgMzM0djIzaDM4di00NmgtMzh6XCJcbiAgfSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBTdmdTdGF0SWNvbjsiLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWluQXBpIH0gZnJvbSAnZmVhdHVyZXMvTWFpbkFwaS9NYWluQXBpJztcbmV4cG9ydCBmdW5jdGlvbiB1c2VQcm90b2NvbCgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciBfYSA9IHVzZVN0YXRlKHtcbiAgICAgICAgaXNPcGVuOiBmYWxzZSxcbiAgICAgICAgZ2FtZUlkOiBudWxsLFxuICAgICAgICBnYW1lSW5mbzogbnVsbCxcbiAgICAgICAgZ2FtZURhdGE6IG51bGxcbiAgICB9KSwgcHJvdG9jb2xTdGF0ZSA9IF9hWzBdLCBzZXRQcm90b2NvbFN0YXRlID0gX2FbMV07XG4gICAgdmFyIGZldGNoR2FtZSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgbWFpbkFwaS5nZXRHYW1lUHJvdG9jb2wocHJvdG9jb2xTdGF0ZS5nYW1lSWQpXTsgLyog0JrQvtGB0YLRi9C70YwgKi9cbiAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbMiAvKnJldHVybiovLCBfYS5zZW50KCldOyAvKiDQmtC+0YHRgtGL0LvRjCAqL1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTsgfSwgW3Byb3RvY29sU3RhdGUuZ2FtZUlkXSk7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHByb3RvY29sU3RhdGUuaXNPcGVuKSB7XG4gICAgICAgICAgICBmZXRjaEdhbWUoKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChnYW1lRGF0YSkgeyBzZXRQcm90b2NvbFN0YXRlKF9fYXNzaWduKF9fYXNzaWduKHt9LCBwcm90b2NvbFN0YXRlKSwgeyBnYW1lRGF0YTogZ2FtZURhdGEgfSkpOyB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7IGNvbnNvbGUubG9nKGVycik7IH0pO1xuICAgICAgICB9XG4gICAgfSwgW2ZldGNoR2FtZSwgcHJvdG9jb2xTdGF0ZS5pc09wZW5dKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm90b2NvbFN0YXRlOiBwcm90b2NvbFN0YXRlLFxuICAgICAgICBzZXRQcm90b2NvbFN0YXRlOiBzZXRQcm90b2NvbFN0YXRlXG4gICAgfTtcbn1cbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgY2xhc3NOYW1lcyB9IGZyb20gJ3NoYXJlZC9saWIvY2xhc3NOYW1lcy9jbGFzc05hbWVzJztcbmltcG9ydCBjbHMgZnJvbSAnLi9HYW1lLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IEJ1dHRvbiwgVGhlbWVCdXR0b24gfSBmcm9tICdzaGFyZWQvdWkvQnV0dG9uL0J1dHRvbic7XG5pbXBvcnQgU3RhdEljb24gZnJvbSAnc2hhcmVkL2Fzc2V0cy9pY29ucy9zdGF0LWljb24uc3ZnJztcbmV4cG9ydCB2YXIgR2FtZSA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciBnYW1lID0gcHJvcHMuZ2FtZSwgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLCBzZXRQcm90b2NvbFN0YXRlID0gcHJvcHMuc2V0UHJvdG9jb2xTdGF0ZSwgcHJvdG9jb2xTdGF0ZSA9IHByb3BzLnByb3RvY29sU3RhdGU7XG4gICAgdmFyIEdhbWVJRCA9IGdhbWUuR2FtZUlELCBEaXNwbGF5RGF0ZVRpbWVNc2sgPSBnYW1lLkRpc3BsYXlEYXRlVGltZU1zaywgVGVhbUxvZ29BID0gZ2FtZS5UZWFtTG9nb0EsIFRlYW1Mb2dvQiA9IGdhbWUuVGVhbUxvZ29CLCBTY29yZUEgPSBnYW1lLlNjb3JlQSwgU2NvcmVCID0gZ2FtZS5TY29yZUI7XG4gICAgdmFyIG9uU3RhdE9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNldFByb3RvY29sU3RhdGUoX19hc3NpZ24oX19hc3NpZ24oe30sIHByb3RvY29sU3RhdGUpLCB7IGlzT3BlbjogdHJ1ZSwgZ2FtZUlkOiBHYW1lSUQsIGdhbWVJbmZvOiBnYW1lIH0pKTtcbiAgICAgICAgY29uc29sZS5sb2cocHJvdG9jb2xTdGF0ZSk7XG4gICAgfTtcbiAgICByZXR1cm4gKF9qc3hzKFwiYXJ0aWNsZVwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjbHMuR2FtZSwge30sIFtjbGFzc05hbWUgIT09IG51bGwgJiYgY2xhc3NOYW1lICE9PSB2b2lkIDAgPyBjbGFzc05hbWUgOiAnJ10pLCBjaGlsZHJlbjogW19qc3goXCJoM1wiLCB7IGNsYXNzTmFtZTogY2xzLkdhbWVfX3RpdGxlLCBjaGlsZHJlbjogRGlzcGxheURhdGVUaW1lTXNrIH0pLCBfanN4cyhcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xzLkdhbWVfX2dhbWVDb250YWluZXIsIGNoaWxkcmVuOiBbX2pzeChcImRpdlwiLCB7IHN0eWxlOiB7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIuY29uY2F0KFRlYW1Mb2dvQSwgXCIpXCIpIH0sIGNsYXNzTmFtZTogY2xzLkdhbWVfX3RlYW1JbWFnZSB9KSwgX2pzeChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xzLkdhbWVfX3Njb3JlLCBjaGlsZHJlbjogXCJcIi5jb25jYXQoU2NvcmVBLCBcIiA6IFwiKS5jb25jYXQoU2NvcmVCKSB9KSwgX2pzeChcImRpdlwiLCB7IHN0eWxlOiB7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIuY29uY2F0KFRlYW1Mb2dvQiwgXCIpXCIpIH0sIGNsYXNzTmFtZTogY2xzLkdhbWVfX3RlYW1JbWFnZSB9KV0gfSksIF9qc3hzKEJ1dHRvbiwgeyBvbkNsaWNrOiBvblN0YXRPcGVuLCB0aGVtZTogVGhlbWVCdXR0b24uUE9aX0dBTUUsIGNoaWxkcmVuOiBbX2pzeChTdGF0SWNvbiwgeyBjbGFzc05hbWU6IGNscy5HYW1lX19zdGF0SWNvbiB9KSwgXCJcXHUwNDFGXFx1MDQzRVxcdTA0M0JcXHUwNDNEXFx1MDQzMFxcdTA0NEYgXFx1MDQ0MVxcdTA0NDJcXHUwNDMwXFx1MDQ0MlxcdTA0MzhcXHUwNDQxXFx1MDQ0MlxcdTA0MzhcXHUwNDNBXFx1MDQzMCBcXHUwNDNDXFx1MDQzMFxcdTA0NDJcXHUwNDQ3XFx1MDQzMFwiXSB9KV0gfSkpO1xufTtcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBjbGFzc05hbWVzIH0gZnJvbSAnc2hhcmVkL2xpYi9jbGFzc05hbWVzL2NsYXNzTmFtZXMnO1xuaW1wb3J0IGNscyBmcm9tICcuL0dpZi5tb2R1bGUuc2Nzcyc7XG5leHBvcnQgdmFyIEdpZiA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBjbGFzc05hbWUgPSBfYS5jbGFzc05hbWU7XG4gICAgcmV0dXJuIChfanN4KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGNscy5HaWYsIHt9LCBbY2xhc3NOYW1lICE9PSBudWxsICYmIGNsYXNzTmFtZSAhPT0gdm9pZCAwID8gY2xhc3NOYW1lIDogJyddKSwgY2hpbGRyZW46IF9qc3hzKFwic3ZnXCIsIHsgY2xhc3NOYW1lOiBjbHMuR2lmX19pdGVtLCB2aWV3Qm94OiBcIjAgMCAzMjAgMzAwXCIsIGNoaWxkcmVuOiBbX2pzeChcInJlY3RcIiwgeyBjbGFzc05hbWU6IGNscy5naWZfX2NhcmQsIHg6IFwiNDgwXCIsIHdpZHRoOiBcIjQwXCIsIGhlaWdodDogXCIyMDBcIiwgcng6IFwiNVwiIH0pLCBfanN4KFwicmVjdFwiLCB7IGNsYXNzTmFtZTogY2xzLkdpZl9fY2FyZCwgeTogXCIwXCIsIHdpZHRoOiBcIjIwMFwiLCBoZWlnaHQ6IFwiMjAwXCIsIHJ4OiBcIjVcIiB9KSwgX2pzeChcInJlY3RcIiwgeyBjbGFzc05hbWU6IGNscy5HaWZfX2NhcmQsIHg6IFwiMjQwXCIsIHdpZHRoOiBcIjIwMFwiLCBoZWlnaHQ6IFwiMjAwXCIsIHJ4OiBcIjVcIiB9KSwgX2pzeChcInBhdGhcIiwgeyBjbGFzc05hbWU6IGNscy5HaWZfX2hhbmQsIFxuICAgICAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlbiAqL1xuICAgICAgICAgICAgICAgICAgICBkOiBcIk03OC45NTc5IDI4NS43Qzc4Ljk1NzkgMjg1LjcgMzcuODU3OSAyMTIuNSAyMC41NTc5IDE4MC44Qy0yLjQ0MjA5IDEzOC42IC02LjI0MjIgMTIwLjggOS42NTc5IDExMkMxOS41NTc5IDEwNi41IDMzLjI1NzkgMTA4LjggNDEuNjU3OSAxMjMuNEw2MS4yNTc5IDE1NC42VjMyLjNDNjEuMjU3OSAzMi4zIDYwLjA1NzkgMCA4My4wNTc5IDBDMTA3LjU1OCAwIDEwNS40NTggMzIuMyAxMDUuNDU4IDMyLjNWOTEuN0MxMDUuNDU4IDkxLjcgMTE4LjM1OCA4Mi40IDEzMy40NTggODYuNkMxNDEuMTU4IDg4LjcgMTUwLjE1OCA5Mi40IDE1NC45NTggMTA0LjZDMTU0Ljk1OCAxMDQuNiAxODUuNjU4IDg5LjcgMjAwLjk1OCAxMjEuNEMyMDAuOTU4IDEyMS40IDIzNi4zNTggMTE0LjQgMjM2LjM1OCAxNTEuMUMyMzYuMzU4IDE4Ny44IDE5Mi4xNTggMjg1LjcgMTkyLjE1OCAyODUuN0g3OC45NTc5WlwiIH0pXSB9KSB9KSk7XG59O1xuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IGNsYXNzTmFtZXMgfSBmcm9tICdzaGFyZWQvbGliL2NsYXNzTmFtZXMvY2xhc3NOYW1lcyc7XG5pbXBvcnQgY2xzIGZyb20gJy4vUGVyc29uUHJvdG9jb2wubW9kdWxlLnNjc3MnO1xuZXhwb3J0IHZhciBQZXJzb25Qcm90b2NvbCA9IGZ1bmN0aW9uIChQZXJzb25Qcm90b2NvbCkge1xuICAgIHZhciBQbGF5ZXJOdW1iZXIgPSBQZXJzb25Qcm90b2NvbC5QbGF5ZXJOdW1iZXIsIFBlcnNvbklEID0gUGVyc29uUHJvdG9jb2wuUGVyc29uSUQsIFBlcnNvbk5hbWVSdSA9IFBlcnNvblByb3RvY29sLlBlcnNvbk5hbWVSdSwgUGxheWVkVGltZSA9IFBlcnNvblByb3RvY29sLlBsYXllZFRpbWUsIFBvaW50cyA9IFBlcnNvblByb3RvY29sLlBvaW50cywgU2hvdHMxID0gUGVyc29uUHJvdG9jb2wuU2hvdHMxLCBTaG90czIgPSBQZXJzb25Qcm90b2NvbC5TaG90czIsIFNob3RzMyA9IFBlcnNvblByb3RvY29sLlNob3RzMywgR29hbDIgPSBQZXJzb25Qcm90b2NvbC5Hb2FsMiwgR29hbDMgPSBQZXJzb25Qcm90b2NvbC5Hb2FsMywgU2hvdDIgPSBQZXJzb25Qcm90b2NvbC5TaG90MiwgU2hvdDMgPSBQZXJzb25Qcm90b2NvbC5TaG90MywgRGVmUmVib3VuZCA9IFBlcnNvblByb3RvY29sLkRlZlJlYm91bmQsIE9mZlJlYm91bmQgPSBQZXJzb25Qcm90b2NvbC5PZmZSZWJvdW5kLCBSZWJvdW5kID0gUGVyc29uUHJvdG9jb2wuUmVib3VuZCwgQXNzaXN0ID0gUGVyc29uUHJvdG9jb2wuQXNzaXN0LCBTdGVhbCA9IFBlcnNvblByb3RvY29sLlN0ZWFsLCBUdXJub3ZlciA9IFBlcnNvblByb3RvY29sLlR1cm5vdmVyLCBCbG9ja3MgPSBQZXJzb25Qcm90b2NvbC5CbG9ja3MsIEZvdWwgPSBQZXJzb25Qcm90b2NvbC5Gb3VsLCBPcHBvbmVudEZvdWwgPSBQZXJzb25Qcm90b2NvbC5PcHBvbmVudEZvdWwsIFBsdXNNaW51cyA9IFBlcnNvblByb3RvY29sLlBsdXNNaW51cztcbiAgICByZXR1cm4gKF9qc3hzKFwidHJcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZXMoY2xzLnByb3RvY29sKSwgY2hpbGRyZW46IFtfanN4KFwidGRcIiwgeyBjbGFzc05hbWU6IGNscy5QZXJzb25Qcm90b2NvbF9faXRlbSwgY2hpbGRyZW46IF9qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNscy5QZXJzb25Qcm90b2NvbF9fc2hpcnQsIHN0eWxlOiB7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoaHR0cHM6Ly9ydXNzaWFiYXNrZXQucnUvZ2FtZXMvdW5pZm9ybT9udW1iZXI9XCIuY29uY2F0KFBsYXllck51bWJlciwgXCImYW1wO2NvbG9yMT0lMjNGRkZGRkYmYW1wO2NvbG9yMj0lMjMwMDAwMDAmYW1wO2NvbG9yMz0lMjMwMDAwMDApXCIpIH0gfSkgfSksIF9qc3goXCJ0ZFwiLCB7IGNsYXNzTmFtZTogY2xzLlBlcnNvblByb3RvY29sX19pdGVtLCBjaGlsZHJlbjogX2pzeChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xzLlBlcnNvblByb3RvY29sX19pbWFnZSwgc3R5bGU6IHsgYmFja2dyb3VuZEltYWdlOiBcInVybChodHRwczovL29yZy5pbmZvYmFza2V0LnN1L1dpZGdldC9HZXRQZXJzb25QaG90by9cIi5jb25jYXQoUGVyc29uSUQsIFwiP2Q9MSZhbXA7Y29tcElkPTQyNzM4JmFtcDt0ZWFtSWQ9NzU4KVwiKSB9IH0pIH0pLCBfanN4KFwidGRcIiwgeyBjbGFzc05hbWU6IGNscy5QZXJzb25Qcm90b2NvbF9faXRlbSwgY2hpbGRyZW46IF9qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwicGxheWVyXCIsIGNoaWxkcmVuOiBfanN4KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcIm5hbWVcIiwgY2hpbGRyZW46IF9qc3goXCJzcGFuXCIsIHsgY2hpbGRyZW46IFBlcnNvbk5hbWVSdSB9KSB9KSB9KSB9KSwgX2pzeChcInRkXCIsIHsgY2xhc3NOYW1lOiBjbHMuUGVyc29uUHJvdG9jb2xfX2l0ZW0sIGNoaWxkcmVuOiBQbGF5ZWRUaW1lICYmIFBsYXllZFRpbWUgfSksIF9qc3goXCJ0ZFwiLCB7IGNsYXNzTmFtZTogY2xzLlBlcnNvblByb3RvY29sX19pdGVtLCBjaGlsZHJlbjogUG9pbnRzICYmIFBvaW50cyB9KSwgX2pzeChcInRkXCIsIHsgY2xhc3NOYW1lOiBjbHMuUGVyc29uUHJvdG9jb2xfX2l0ZW0sIGNoaWxkcmVuOiBTaG90czIgJiYgU2hvdHMyIH0pLCBfanN4KFwidGRcIiwgeyBjbGFzc05hbWU6IGNscy5QZXJzb25Qcm90b2NvbF9faXRlbSwgY2hpbGRyZW46IFNob3RzMyAmJiBTaG90czMgfSksIF9qc3goXCJ0ZFwiLCB7IGNsYXNzTmFtZTogY2xzLlBlcnNvblByb3RvY29sX19pdGVtLCBjaGlsZHJlbjogU2hvdHMxICYmIFNob3RzMSB9KSwgX2pzeChcInRkXCIsIHsgY2xhc3NOYW1lOiBjbHMuUGVyc29uUHJvdG9jb2xfX2l0ZW0sIGNoaWxkcmVuOiBEZWZSZWJvdW5kICYmIERlZlJlYm91bmQgfSksIF9qc3goXCJ0ZFwiLCB7IGNsYXNzTmFtZTogY2xzLlBlcnNvblByb3RvY29sX19pdGVtLCBjaGlsZHJlbjogT2ZmUmVib3VuZCAmJiBPZmZSZWJvdW5kIH0pLCBfanN4KFwidGRcIiwgeyBjbGFzc05hbWU6IGNscy5QZXJzb25Qcm90b2NvbF9faXRlbSwgY2hpbGRyZW46IFJlYm91bmQgJiYgUmVib3VuZCB9KSwgX2pzeChcInRkXCIsIHsgY2xhc3NOYW1lOiBjbHMuUGVyc29uUHJvdG9jb2xfX2l0ZW0sIGNoaWxkcmVuOiBBc3Npc3QgJiYgQXNzaXN0IH0pLCBfanN4KFwidGRcIiwgeyBjbGFzc05hbWU6IGNscy5QZXJzb25Qcm90b2NvbF9faXRlbSwgY2hpbGRyZW46IFN0ZWFsICYmIFN0ZWFsIH0pLCBfanN4KFwidGRcIiwgeyBjbGFzc05hbWU6IGNscy5QZXJzb25Qcm90b2NvbF9faXRlbSwgY2hpbGRyZW46IFR1cm5vdmVyICYmIFR1cm5vdmVyIH0pLCBfanN4KFwidGRcIiwgeyBjbGFzc05hbWU6IGNscy5QZXJzb25Qcm90b2NvbF9faXRlbSwgY2hpbGRyZW46IEJsb2NrcyAmJiBCbG9ja3MgfSksIF9qc3goXCJ0ZFwiLCB7IGNsYXNzTmFtZTogY2xzLlBlcnNvblByb3RvY29sX19pdGVtLCBjaGlsZHJlbjogRm91bCAmJiBGb3VsIH0pLCBfanN4KFwidGRcIiwgeyBjbGFzc05hbWU6IGNscy5QZXJzb25Qcm90b2NvbF9faXRlbSwgY2hpbGRyZW46IE9wcG9uZW50Rm91bCAmJiBPcHBvbmVudEZvdWwgfSksIF9qc3goXCJ0ZFwiLCB7IGNsYXNzTmFtZTogY2xzLlBlcnNvblByb3RvY29sX19pdGVtLCBjaGlsZHJlbjogUGx1c01pbnVzICYmIFBsdXNNaW51cyB9KSwgX2pzeChcInRkXCIsIHsgY2xhc3NOYW1lOiBjbHMuUGVyc29uUHJvdG9jb2xfX2l0ZW0gfSldIH0pKTtcbn07XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCBhcyBfY3JlYXRlRWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IGNsYXNzTmFtZXMgfSBmcm9tICdzaGFyZWQvbGliL2NsYXNzTmFtZXMvY2xhc3NOYW1lcyc7XG5pbXBvcnQgY2xzIGZyb20gJy4vVGFibGUubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHsgU2VjdGlvblRpdGxlIH0gZnJvbSAnc2hhcmVkL3VpL1NlY3Rpb25UaXRsZS9TZWN0aW9uVGl0bGUnO1xuaW1wb3J0IHsgUGVyc29uUHJvdG9jb2wgfSBmcm9tICdjb21wb25lbnRzL1BlcnNvblByb3RvY29sL1BlcnNvblByb3RvY29sJztcbmV4cG9ydCB2YXIgVGFibGUgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgbG9nb1RlYW0gPSBwcm9wcy5sb2dvVGVhbSwgbmFtZVRlYW0gPSBwcm9wcy5uYW1lVGVhbSwgZ2FtZURhdGEgPSBwcm9wcy5nYW1lRGF0YTtcbiAgICB2YXIgUGxheWVkVGltZSA9IGdhbWVEYXRhLlBsYXllZFRpbWUsIFNjb3JlID0gZ2FtZURhdGEuU2NvcmUsIFNob3RzMSA9IGdhbWVEYXRhLlNob3RzMSwgU2hvdHMyID0gZ2FtZURhdGEuU2hvdHMyLCBTaG90czMgPSBnYW1lRGF0YS5TaG90czMsIFNob3QxUGVyY2VudCA9IGdhbWVEYXRhLlNob3QxUGVyY2VudCwgU2hvdDJQZXJjZW50ID0gZ2FtZURhdGEuU2hvdDJQZXJjZW50LCBTaG90M1BlcmNlbnQgPSBnYW1lRGF0YS5TaG90M1BlcmNlbnQsIERlZlJlYm91bmQgPSBnYW1lRGF0YS5EZWZSZWJvdW5kLCBPZmZSZWJvdW5kID0gZ2FtZURhdGEuT2ZmUmVib3VuZCwgUmVib3VuZCA9IGdhbWVEYXRhLlJlYm91bmQsIEFzc2lzdCA9IGdhbWVEYXRhLkFzc2lzdCwgU3RlYWwgPSBnYW1lRGF0YS5TdGVhbCwgVHVybm92ZXIgPSBnYW1lRGF0YS5UdXJub3ZlciwgQmxvY2tzID0gZ2FtZURhdGEuQmxvY2tzLCBGb3VsID0gZ2FtZURhdGEuRm91bCwgT3Bwb25lbnRGb3VsID0gZ2FtZURhdGEuT3Bwb25lbnRGb3VsLCBHb2FsMiA9IGdhbWVEYXRhLkdvYWwyLCBHb2FsMyA9IGdhbWVEYXRhLkdvYWwzLCBTaG90MiA9IGdhbWVEYXRhLlNob3QyLCBTaG90MyA9IGdhbWVEYXRhLlNob3QzLCBQbGF5ZXJzID0gZ2FtZURhdGEuUGxheWVycztcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbHMuVGFibGUsIGNoaWxkcmVuOiBbX2pzeHMoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNscy5UYWJsZV9faGVhZGluZywgY2hpbGRyZW46IFtfanN4KFwiaW1nXCIsIHsgY2xhc3NOYW1lOiBjbHMuVGFibGVfX2xvZ28sIHNyYzogbG9nb1RlYW0sIGFsdDogbmFtZVRlYW0gfSksIF9qc3goU2VjdGlvblRpdGxlLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjbHMuVGFibGVfX3RlYW0pLCB0aGVtZTogXCJTZWN0aW9uVGl0bGVfY2xlYXJcIiAvKiBTZWN0aW9uVGl0bGVUaGVtZS5DTEVBUiAqLywgY2hpbGRyZW46IG5hbWVUZWFtIH0pXSB9KSwgX2pzeHMoXCJ0YWJsZVwiLCB7IGNsYXNzTmFtZTogY2xzLlRhYmxlX19jb250YWluZXIsIGNoaWxkcmVuOiBbX2pzeHMoXCJ0aGVhZFwiLCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJ0clwiLCB7IGNsYXNzTmFtZTogY2xzLlRhYmxlX19yb3csIGNoaWxkcmVuOiBbX2pzeChcInRoXCIsIHsgcm93U3BhbjogMiwgY29sU3BhbjogMywgY2xhc3NOYW1lOiBjbHMuVGFibGVfX3RpdGxlLCBjaGlsZHJlbjogXCJcXHUwNDE4XFx1MDQzM1xcdTA0NDBcXHUwNDNFXFx1MDQzQVxcdTA0MzhcIiB9KSwgX2pzeChcInRoXCIsIHsgcm93U3BhbjogMiwgdGl0bGU6IFwiXFx1MDQyMVxcdTA0NEJcXHUwNDMzXFx1MDQ0MFxcdTA0MzBcXHUwNDNEXFx1MDQzRFxcdTA0M0VcXHUwNDM1IFxcdTA0MzJcXHUwNDQwXFx1MDQzNVxcdTA0M0NcXHUwNDRGXCIsIGNsYXNzTmFtZTogY2xzLlRhYmxlX190aXRsZSwgY2hpbGRyZW46IFwiXFx1MDQyMVxcdTA0MTJcIiB9KSwgX2pzeChcInRoXCIsIHsgcm93U3BhbjogMiwgdGl0bGU6IFwiXFx1MDQxRFxcdTA0MzBcXHUwNDMxXFx1MDQ0MFxcdTA0MzBcXHUwNDNEXFx1MDQzRFxcdTA0NEJcXHUwNDM1IFxcdTA0M0VcXHUwNDQ3XFx1MDQzQVxcdTA0MzhcIiwgY2xhc3NOYW1lOiBjbHMuVGFibGVfX3RpdGxlLCBjaGlsZHJlbjogXCJcXHUwNDFFXFx1MDQ0N1xcdTA0M0FcXHUwNDM4XCIgfSksIF9qc3goXCJ0aFwiLCB7IGNvbFNwYW46IDQsIGNsYXNzTmFtZTogY2xzLlRhYmxlX190aXRsZSwgY2hpbGRyZW46IFwiXFx1MDQxMVxcdTA0NDBcXHUwNDNFXFx1MDQ0MVxcdTA0M0FcXHUwNDM4XCIgfSksIF9qc3goXCJ0aFwiLCB7IGNvbFNwYW46IDMsIGNsYXNzTmFtZTogY2xzLlRhYmxlX190aXRsZSwgY2hpbGRyZW46IFwiXFx1MDQxRlxcdTA0M0VcXHUwNDM0XFx1MDQzMVxcdTA0M0VcXHUwNDQwXFx1MDQ0QlwiIH0pLCBfanN4KFwidGhcIiwgeyByb3dTcGFuOiAyLCB0aXRsZTogXCJcXHUwNDEzXFx1MDQzRVxcdTA0M0JcXHUwNDM1XFx1MDQzMlxcdTA0NEJcXHUwNDM1IFxcdTA0M0ZcXHUwNDM1XFx1MDQ0MFxcdTA0MzVcXHUwNDM0XFx1MDQzMFxcdTA0NDdcXHUwNDM4XCIsIGNsYXNzTmFtZTogY2xzLlRhYmxlX190aXRsZSwgY2hpbGRyZW46IFwiXFx1MDQxM1xcdTA0MUZcIiB9KSwgX2pzeChcInRoXCIsIHsgcm93U3BhbjogMiwgdGl0bGU6IFwiXFx1MDQxRlxcdTA0MzVcXHUwNDQwXFx1MDQzNVxcdTA0NDVcXHUwNDMyXFx1MDQzMFxcdTA0NDJcXHUwNDRCXCIsIGNsYXNzTmFtZTogY2xzLlRhYmxlX190aXRsZSwgY2hpbGRyZW46IFwiXFx1MDQxRlxcdTA0MjVcIiB9KSwgX2pzeChcInRoXCIsIHsgcm93U3BhbjogMiwgdGl0bGU6IFwiXFx1MDQxRlxcdTA0M0VcXHUwNDQyXFx1MDQzNVxcdTA0NDBcXHUwNDM4XCIsIGNsYXNzTmFtZTogY2xzLlRhYmxlX190aXRsZSwgY2hpbGRyZW46IFwiXFx1MDQxRlxcdTA0MjJcIiB9KSwgX2pzeChcInRoXCIsIHsgcm93U3BhbjogMiwgdGl0bGU6IFwiXFx1MDQxMVxcdTA0M0JcXHUwNDNFXFx1MDQzQVxcdTA0NDhcXHUwNDNFXFx1MDQ0MlxcdTA0NEJcIiwgY2xhc3NOYW1lOiBjbHMuVGFibGVfX3RpdGxlLCBjaGlsZHJlbjogXCJcXHUwNDExXFx1MDQyOFwiIH0pLCBfanN4KFwidGhcIiwgeyByb3dTcGFuOiAyLCB0aXRsZTogXCJcXHUwNDI0XFx1MDQzRVxcdTA0M0JcXHUwNDRCXCIsIGNsYXNzTmFtZTogY2xzLlRhYmxlX190aXRsZSwgY2hpbGRyZW46IFwiXFx1MDQyNFwiIH0pLCBfanN4KFwidGhcIiwgeyByb3dTcGFuOiAyLCB0aXRsZTogXCJcXHUwNDI0XFx1MDQzRVxcdTA0M0JcXHUwNDRCIFxcdTA0NDFcXHUwNDNFXFx1MDQzRlxcdTA0MzVcXHUwNDQwXFx1MDQzRFxcdTA0MzhcXHUwNDNBXFx1MDQzMFwiLCBjbGFzc05hbWU6IGNscy5UYWJsZV9fdGl0bGUsIGNoaWxkcmVuOiBcIlxcdTA0MjRcXHUwNDIxXCIgfSksIF9qc3goXCJ0aFwiLCB7IHJvd1NwYW46IDIsIHRpdGxlOiBcIlxcdTA0MUZcXHUwNDNCXFx1MDQ0RVxcdTA0NDEvXFx1MDQzQ1xcdTA0MzhcXHUwNDNEXFx1MDQ0M1xcdTA0NDFcIiwgY2xhc3NOYW1lOiBjbHMuVGFibGVfX3RpdGxlLCBjaGlsZHJlbjogXCIrLy1cIiB9KV0gfSksIF9qc3hzKFwidHJcIiwgeyBjbGFzc05hbWU6IGNscy5UYWJsZV9fcm93LCBjaGlsZHJlbjogW19qc3goXCJ0aFwiLCB7IHRpdGxlOiBcIlxcdTA0MTRcXHUwNDMyXFx1MDQ0M1xcdTA0NDVcXHUwNDNFXFx1MDQ0N1xcdTA0M0FcXHUwNDNFXFx1MDQzMlxcdTA0NEJcXHUwNDM1IFxcdTA0MzFcXHUwNDQwXFx1MDQzRVxcdTA0NDFcXHUwNDNBXFx1MDQzOFwiLCBjbGFzc05hbWU6IGNscy5UYWJsZV9fdGl0bGUsIGNoaWxkcmVuOiBcIjItXFx1MDQzRVxcdTA0NDdcXHUwNDNBXCIgfSksIF9qc3goXCJ0aFwiLCB7IHRpdGxlOiBcIlxcdTA0MjJcXHUwNDQwXFx1MDQzNVxcdTA0NDVcXHUwNDNFXFx1MDQ0N1xcdTA0M0FcXHUwNDNFXFx1MDQzMlxcdTA0NEJcXHUwNDM1IFxcdTA0MzFcXHUwNDQwXFx1MDQzRVxcdTA0NDFcXHUwNDNBXFx1MDQzOFwiLCBjbGFzc05hbWU6IGNscy5UYWJsZV9fdGl0bGUsIGNoaWxkcmVuOiBcIjMtXFx1MDQzRVxcdTA0NDdcXHUwNDNBXCIgfSksIF9qc3goXCJ0aFwiLCB7IHRpdGxlOiBcIlxcdTA0MTFcXHUwNDQwXFx1MDQzRVxcdTA0NDFcXHUwNDNBXFx1MDQzOCBcXHUwNDQxIFxcdTA0MzhcXHUwNDMzXFx1MDQ0MFxcdTA0NEJcIiwgY2xhc3NOYW1lOiBjbHMuVGFibGVfX3RpdGxlLCBjaGlsZHJlbjogXCJcXHUwNDE4XCIgfSksIF9qc3goXCJ0aFwiLCB7IHRpdGxlOiBcIlxcdTA0MjhcXHUwNDQyXFx1MDQ0MFxcdTA0MzBcXHUwNDQ0XFx1MDQzRFxcdTA0NEJcXHUwNDM1IFxcdTA0MzFcXHUwNDQwXFx1MDQzRVxcdTA0NDFcXHUwNDNBXFx1MDQzOFwiLCBjbGFzc05hbWU6IGNscy5UYWJsZV9fdGl0bGUsIGNoaWxkcmVuOiBcIlxcdTA0MjhcXHUwNDExXCIgfSksIF9qc3goXCJ0aFwiLCB7IHRpdGxlOiBcIlxcdTA0MUZcXHUwNDNFXFx1MDQzNFxcdTA0MzFcXHUwNDNFXFx1MDQ0MFxcdTA0NEIgXFx1MDQzRFxcdTA0MzAgXFx1MDQ0MVxcdTA0MzJcXHUwNDNFXFx1MDQzNVxcdTA0M0MgXFx1MDQ0OVxcdTA0MzhcXHUwNDQyXFx1MDQzNVwiLCBjbGFzc05hbWU6IGNscy5UYWJsZV9fdGl0bGUsIGNoaWxkcmVuOiBcIlxcdTA0MjFcXHUwNDI5XCIgfSksIF9qc3goXCJ0aFwiLCB7IHRpdGxlOiBcIlxcdTA0MUZcXHUwNDNFXFx1MDQzNFxcdTA0MzFcXHUwNDNFXFx1MDQ0MFxcdTA0NEIgXFx1MDQzRFxcdTA0MzAgXFx1MDQ0N1xcdTA0NDNcXHUwNDM2XFx1MDQzRVxcdTA0M0MgXFx1MDQ0OVxcdTA0MzhcXHUwNDQyXFx1MDQzNVwiLCBjbGFzc05hbWU6IGNscy5UYWJsZV9fdGl0bGUsIGNoaWxkcmVuOiBcIlxcdTA0MjdcXHUwNDI5XCIgfSksIF9qc3goXCJ0aFwiLCB7IHRpdGxlOiBcIlxcdTA0MUZcXHUwNDNFXFx1MDQzNFxcdTA0MzFcXHUwNDNFXFx1MDQ0MFxcdTA0NEIgXFx1MDQzMlxcdTA0NDFcXHUwNDM1XFx1MDQzM1xcdTA0M0VcIiwgY2xhc3NOYW1lOiBjbHMuVGFibGVfX3RpdGxlLCBjaGlsZHJlbjogXCJcXHUwNDEyXFx1MDQyMVwiIH0pXSB9KV0gfSksIF9qc3goXCJ0Ym9keVwiLCB7IGNoaWxkcmVuOiBQbGF5ZXJzLm1hcChmdW5jdGlvbiAoX2EsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBsYXllclByb3BzID0gX19yZXN0KF9hLCBbXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChfY3JlYXRlRWxlbWVudChQZXJzb25Qcm90b2NvbCwgX19hc3NpZ24oe30sIHBsYXllclByb3BzLCB7IGtleTogaW5kZXggfSkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pIH0pLCBfanN4KFwidGZvb3RcIiwgeyBjaGlsZHJlbjogX2pzeHMoXCJ0clwiLCB7IGNsYXNzTmFtZTogY2xzLlRhYmxlX19yb3csIGNoaWxkcmVuOiBbX2pzeChcInRkXCIsIHsgY29sU3BhbjogMywgY2hpbGRyZW46IFwiXFx1MDQxMlxcdTA0MjFcXHUwNDE1XFx1MDQxM1xcdTA0MUU6XCIgfSksIF9qc3goXCJ0ZFwiLCB7IGNsYXNzTmFtZTogY2xzLlRhYmxlX19pdGVtLCBjaGlsZHJlbjogUGxheWVkVGltZSB9KSwgX2pzeChcInRkXCIsIHsgY2xhc3NOYW1lOiBjbHMuVGFibGVfX2l0ZW0sIGNoaWxkcmVuOiBTY29yZSB9KSwgX2pzeHMoXCJ0ZFwiLCB7IGNsYXNzTmFtZTogY2xzLlRhYmxlX19pdGVtLCBjaGlsZHJlbjogW1Nob3RzMiwgXCIgXCIsIF9qc3goXCJiclwiLCB7fSksIFNob3QyUGVyY2VudCwgXCIlXCJdIH0pLCBfanN4cyhcInRkXCIsIHsgY2xhc3NOYW1lOiBjbHMuVGFibGVfX2l0ZW0sIGNoaWxkcmVuOiBbU2hvdHMzLCBcIiBcIiwgX2pzeChcImJyXCIsIHt9KSwgU2hvdDNQZXJjZW50LCBcIiVcIl0gfSksIF9qc3hzKFwidGRcIiwgeyBjbGFzc05hbWU6IGNscy5UYWJsZV9faXRlbSwgY2hpbGRyZW46IFtHb2FsMiArIEdvYWwzLCBcIi9cIiwgU2hvdDIgKyBTaG90MywgX2pzeChcImJyXCIsIHt9KSwgKChHb2FsMiArIEdvYWwzKSAqIDEwMCAvIChTaG90MiArIFNob3QzKSkudG9GaXhlZCgxKSwgXCIlXCJdIH0pLCBfanN4cyhcInRkXCIsIHsgY2xhc3NOYW1lOiBjbHMuVGFibGVfX2l0ZW0sIGNoaWxkcmVuOiBbU2hvdHMxLCBcIiBcIiwgX2pzeChcImJyXCIsIHt9KSwgU2hvdDFQZXJjZW50LCBcIiVcIl0gfSksIF9qc3goXCJ0ZFwiLCB7IGNsYXNzTmFtZTogY2xzLlRhYmxlX19pdGVtLCBjaGlsZHJlbjogRGVmUmVib3VuZCB9KSwgX2pzeChcInRkXCIsIHsgY2xhc3NOYW1lOiBjbHMuVGFibGVfX2l0ZW0sIGNoaWxkcmVuOiBPZmZSZWJvdW5kIH0pLCBfanN4KFwidGRcIiwgeyBjbGFzc05hbWU6IGNscy5UYWJsZV9faXRlbSwgY2hpbGRyZW46IFJlYm91bmQgfSksIF9qc3goXCJ0ZFwiLCB7IGNsYXNzTmFtZTogY2xzLlRhYmxlX19pdGVtLCBjaGlsZHJlbjogQXNzaXN0IH0pLCBfanN4KFwidGRcIiwgeyBjbGFzc05hbWU6IGNscy5UYWJsZV9faXRlbSwgY2hpbGRyZW46IFN0ZWFsIH0pLCBfanN4KFwidGRcIiwgeyBjbGFzc05hbWU6IGNscy5UYWJsZV9faXRlbSwgY2hpbGRyZW46IFR1cm5vdmVyIH0pLCBfanN4KFwidGRcIiwgeyBjbGFzc05hbWU6IGNscy5UYWJsZV9faXRlbSwgY2hpbGRyZW46IEJsb2NrcyB9KSwgX2pzeChcInRkXCIsIHsgY2xhc3NOYW1lOiBjbHMuVGFibGVfX2l0ZW0sIGNoaWxkcmVuOiBGb3VsIH0pLCBfanN4KFwidGRcIiwgeyBjbGFzc05hbWU6IGNscy5UYWJsZV9faXRlbSwgY2hpbGRyZW46IE9wcG9uZW50Rm91bCB9KSwgX2pzeChcInRkXCIsIHsgY2xhc3NOYW1lOiBjbHMuVGFibGVfX2l0ZW0gfSldIH0pIH0pXSB9KV0gfSkpO1xufTtcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyB1c2VQcm90b2NvbCB9IGZyb20gJ2FwcC9wcm92aWRlcnMvUHJvdG9jb2xQcm92aWRlci9saWIvdXNlUHJvdG9jb2wnO1xuaW1wb3J0IHsgR2FtZUJhciB9IGZyb20gJ3dpZGdldHMvR2FtZUJhcic7XG5pbXBvcnQgeyBHYW1lUHJvdG9jb2wgfSBmcm9tICd3aWRnZXRzL0dhbWVQcm90b2NvbC91aS9HYW1lUHJvdG9jb2wnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXRQYWdlKCkge1xuICAgIHZhciBfYSA9IHVzZVByb3RvY29sKCksIHByb3RvY29sU3RhdGUgPSBfYS5wcm90b2NvbFN0YXRlLCBzZXRQcm90b2NvbFN0YXRlID0gX2Euc2V0UHJvdG9jb2xTdGF0ZTtcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImFib3V0LXBhZ2VcIiwgY2hpbGRyZW46IFtfanN4KEdhbWVCYXIsIHsgcHJvdG9jb2xTdGF0ZTogcHJvdG9jb2xTdGF0ZSwgc2V0UHJvdG9jb2xTdGF0ZTogc2V0UHJvdG9jb2xTdGF0ZSB9KSwgX2pzeChHYW1lUHJvdG9jb2wsIHsgcHJvdG9jb2xTdGF0ZTogcHJvdG9jb2xTdGF0ZSwgc2V0UHJvdG9jb2xTdGF0ZTogc2V0UHJvdG9jb2xTdGF0ZSB9KV0gfSkpO1xufVxuO1xuIiwiaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IGNsYXNzTmFtZXMgfSBmcm9tICdzaGFyZWQvbGliL2NsYXNzTmFtZXMvY2xhc3NOYW1lcyc7XG5pbXBvcnQgY2xzIGZyb20gJy4vU2VjdGlvblRpdGxlLm1vZHVsZS5zY3NzJztcbmV4cG9ydCB2YXIgU2VjdGlvblRpdGxlID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIHRoZW1lID0gX2EudGhlbWUsIGNsYXNzTmFtZSA9IF9hLmNsYXNzTmFtZSwgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbjtcbiAgICByZXR1cm4gKF9qc3goXCJoMlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjbHMuU2VjdGlvblRpdGxlLCB7fSwgW2Nsc1t0aGVtZV1dKSwgY2hpbGRyZW46IGNoaWxkcmVuIH0pKTtcbn07XG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgY2xhc3NOYW1lcyB9IGZyb20gJ3NoYXJlZC9saWIvY2xhc3NOYW1lcy9jbGFzc05hbWVzJztcbmltcG9ydCBjbHMgZnJvbSAnLi9HYW1lQmFyLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IEdhbWUgfSBmcm9tICdjb21wb25lbnRzL0dhbWUvR2FtZSc7XG5pbXBvcnQgeyBHaWYgfSBmcm9tICdjb21wb25lbnRzL0dpZi9HaWYnO1xuaW1wb3J0IHsgR2FtZXNDb250ZXh0IH0gZnJvbSAnYXBwL3Byb3ZpZGVycy9HYW1lc1Byb3ZpZGVyL2xpYi9HYW1lc0NvbnRleHQnO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHRyaW1HYW1lcyB9IGZyb20gJ3NoYXJlZC9saWIvdHJpbUdhbWVzL3RyaW1HYW1lcyc7XG5pbXBvcnQgeyBTZWN0aW9uVGl0bGUgfSBmcm9tICdzaGFyZWQvdWkvU2VjdGlvblRpdGxlL1NlY3Rpb25UaXRsZSc7XG5leHBvcnQgdmFyIEdhbWVCYXIgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLCBzZXRQcm90b2NvbFN0YXRlID0gcHJvcHMuc2V0UHJvdG9jb2xTdGF0ZSwgcHJvdG9jb2xTdGF0ZSA9IHByb3BzLnByb3RvY29sU3RhdGU7XG4gICAgdmFyIGdhbWVzQXJyYXkgPSB1c2VDb250ZXh0KEdhbWVzQ29udGV4dCk7XG4gICAgdmFyIF9hID0gdXNlU3RhdGUoW10pLCByZW5kZXJHYW1lcyA9IF9hWzBdLCBzZXRSZW5kZXJHYW1lcyA9IF9hWzFdO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChnYW1lc0FycmF5Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgc2V0UmVuZGVyR2FtZXModHJpbUdhbWVzKGdhbWVzQXJyYXkpKTtcbiAgICAgICAgfVxuICAgIH0sIFtnYW1lc0FycmF5XSk7XG4gICAgcmV0dXJuIChfanN4cyhcInNlY3Rpb25cIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZXMoY2xzLkdhbWVCYXIsIHt9LCBbY2xhc3NOYW1lICE9PSBudWxsICYmIGNsYXNzTmFtZSAhPT0gdm9pZCAwID8gY2xhc3NOYW1lIDogJyddKSwgY2hpbGRyZW46IFtfanN4KFNlY3Rpb25UaXRsZSwgeyB0aGVtZTogXCJTZWN0aW9uVGl0bGVfcG96X21haW5cIiAvKiBTZWN0aW9uVGl0bGVUaGVtZS5QT1pfTUFJTiAqLywgY2hpbGRyZW46IFwiXFx1MDQxQVxcdTA0MzBcXHUwNDNCXFx1MDQzNVxcdTA0M0RcXHUwNDM0XFx1MDQzMFxcdTA0NDBcXHUwNDRDXCIgfSksIF9qc3goR2lmLCB7fSksIF9qc3goXCJ1bFwiLCB7IGNsYXNzTmFtZTogY2xzLkdhbWVCYXJfX3dpZGdldCwgY2hpbGRyZW46IHJlbmRlckdhbWVzLm1hcChmdW5jdGlvbiAoZ2FtZSwgaW5kZXgpIHsgcmV0dXJuIChfanN4KFwibGlcIiwgeyBjbGFzc05hbWU6IGNscy5HYW1lQmFyX19pdGVtLCBjaGlsZHJlbjogX2pzeChHYW1lLCB7IGdhbWU6IGdhbWUsIHNldFByb3RvY29sU3RhdGU6IHNldFByb3RvY29sU3RhdGUsIHByb3RvY29sU3RhdGU6IHByb3RvY29sU3RhdGUgfSkgfSwgaW5kZXgpKTsgfSkgfSldIH0pKTtcbn07XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIEZyYWdtZW50IGFzIF9GcmFnbWVudCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgY2xhc3NOYW1lcyB9IGZyb20gJ3NoYXJlZC9saWIvY2xhc3NOYW1lcy9jbGFzc05hbWVzJztcbmltcG9ydCBjbHMgZnJvbSAnLi9HYW1lUHJvdG9jb2wubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHsgVGFibGUgfSBmcm9tICdjb21wb25lbnRzL1RhYmxlL1RhYmxlJztcbmltcG9ydCB7IExvYWRlciB9IGZyb20gJ3NoYXJlZC91aS9Mb2FkZXIvTG9hZGVyJztcbmV4cG9ydCB2YXIgR2FtZVByb3RvY29sID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIF9hO1xuICAgIHZhciBwcm90b2NvbFN0YXRlID0gcHJvcHMucHJvdG9jb2xTdGF0ZSwgc2V0UHJvdG9jb2xTdGF0ZSA9IHByb3BzLnNldFByb3RvY29sU3RhdGUsIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZTtcbiAgICB2YXIgbW9kcyA9IChfYSA9IHt9LFxuICAgICAgICBfYVtjbHMub3BlbmVkXSA9IHByb3RvY29sU3RhdGUuaXNPcGVuLFxuICAgICAgICBfYSk7XG4gICAgdmFyIGNsb3NlUG9wdXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNldFByb3RvY29sU3RhdGUoX19hc3NpZ24oX19hc3NpZ24oe30sIHByb3RvY29sU3RhdGUpLCB7IGlzT3BlbjogZmFsc2UgfSkpO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm90b2NvbFN0YXRlKTtcbiAgICB9O1xuICAgIHZhciBvbk92ZXJsYXlDbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfTtcbiAgICByZXR1cm4gKF9qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZXMoY2xzLkdhbWVQcm90b2NvbCwgbW9kcywgW2NsYXNzTmFtZSAhPT0gbnVsbCAmJiBjbGFzc05hbWUgIT09IHZvaWQgMCA/IGNsYXNzTmFtZSA6ICcnXSksIGNoaWxkcmVuOiBfanN4KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbHMuR2FtZVByb3RvY29sX19vdmVybGF5LCBvbkNsaWNrOiBjbG9zZVBvcHVwLCBjaGlsZHJlbjogX2pzeChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xzLkdhbWVQcm90b2NvbF9fY29udGVudCwgb25DbGljazogb25PdmVybGF5Q2xpY2ssIGNoaWxkcmVuOiAocHJvdG9jb2xTdGF0ZS5nYW1lSW5mbyAmJiBwcm90b2NvbFN0YXRlLmdhbWVEYXRhKVxuICAgICAgICAgICAgICAgICAgICA/IF9qc3hzKF9GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3goVGFibGUsIHsgZ2FtZURhdGE6IHByb3RvY29sU3RhdGUuZ2FtZURhdGEuR2FtZVRlYW1zWzBdLCBsb2dvVGVhbTogcHJvdG9jb2xTdGF0ZS5nYW1lSW5mby5UZWFtTG9nb0EsIG5hbWVUZWFtOiBwcm90b2NvbFN0YXRlLmdhbWVJbmZvLlRlYW1OYW1lQXJ1IH0pLCBfanN4KFRhYmxlLCB7IGdhbWVEYXRhOiBwcm90b2NvbFN0YXRlLmdhbWVEYXRhLkdhbWVUZWFtc1sxXSwgbG9nb1RlYW06IHByb3RvY29sU3RhdGUuZ2FtZUluZm8uVGVhbUxvZ29CLCBuYW1lVGVhbTogcHJvdG9jb2xTdGF0ZS5nYW1lSW5mby5UZWFtTmFtZUJydSB9KV0gfSlcbiAgICAgICAgICAgICAgICAgICAgOiBfanN4KExvYWRlciwge30pIH0pIH0pIH0pKTtcbn07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNyYy1jb21wb25lbnRzLUdhbWUtR2FtZS1tb2R1bGVfX0dhbWUtLWE4R2l3IHtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IHZhcigtLWdhbWUtd2lkdGgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBzY3JvbGwtc25hcC1hbGlnbjogc3RhcnQ7XG4gIHNjcm9sbC1zbmFwLXN0b3A6IGFsd2F5cztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGMoMTAwJSAtIHZhcigtLWdhbWUtd2lkdGgpKS8yKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5zcmMtY29tcG9uZW50cy1HYW1lLUdhbWUtbW9kdWxlX19HYW1lX190aXRsZS0tWmc4Y2Ige1xuICBmb250OiB2YXIoLS1mb250LXMpO1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtcyk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeS1jb2xvcik7XG59XG4uc3JjLWNvbXBvbmVudHMtR2FtZS1HYW1lLW1vZHVsZV9fR2FtZV9fZ2FtZUNvbnRhaW5lci0tUlJPd0wge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDQwcHg7XG59XG4uc3JjLWNvbXBvbmVudHMtR2FtZS1HYW1lLW1vZHVsZV9fR2FtZV9fdGVhbUltYWdlLS1oTDM5ViB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLnNyYy1jb21wb25lbnRzLUdhbWUtR2FtZS1tb2R1bGVfX0dhbWVfX3Njb3JlLS1FMmV1cyB7XG4gIGZvbnQ6IHZhcigtLWZvbnQtbCk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1zKTtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcbn1cbi5zcmMtY29tcG9uZW50cy1HYW1lLUdhbWUtbW9kdWxlX19HYW1lX19zdGF0SWNvbi0tWVNJYW8ge1xuICBmaWxsOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvR2FtZS9HYW1lLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0Esc0NBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0EsdURBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0Esa0NBQUE7QUFDSjtBQUVFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUFKO0FBR0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQURKO0FBSUU7RUFDRSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0Esa0NBQUE7QUFGSjtBQUtFO0VBQ0UsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUhKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5HYW1lIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB3aWR0aDogdmFyKC0tZ2FtZS13aWR0aCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIHNjcm9sbC1zbmFwLWFsaWduOiBzdGFydDtcXG4gIHNjcm9sbC1zbmFwLXN0b3A6IGFsd2F5cztcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKDEwMCUgLSB2YXIoLS1nYW1lLXdpZHRoKSkgLyAyKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFxuICAmX190aXRsZSB7XFxuICAgIGZvbnQ6IHZhcigtLWZvbnQtcyk7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1zKTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIH1cXG5cXG4gICZfX2dhbWVDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDQwcHg7XFxuICB9XFxuXFxuICAmX190ZWFtSW1hZ2Uge1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIH1cXG5cXG4gICZfX3Njb3JlIHtcXG4gICAgZm9udDogdmFyKC0tZm9udC1sKTtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXMpO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnktY29sb3IpO1xcbiAgfVxcblxcbiAgJl9fc3RhdEljb24ge1xcbiAgICBmaWxsOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJHYW1lXCI6IGBzcmMtY29tcG9uZW50cy1HYW1lLUdhbWUtbW9kdWxlX19HYW1lLS1hOEdpd2AsXG5cdFwiR2FtZV9fdGl0bGVcIjogYHNyYy1jb21wb25lbnRzLUdhbWUtR2FtZS1tb2R1bGVfX0dhbWVfX3RpdGxlLS1aZzhjYmAsXG5cdFwiR2FtZV9fZ2FtZUNvbnRhaW5lclwiOiBgc3JjLWNvbXBvbmVudHMtR2FtZS1HYW1lLW1vZHVsZV9fR2FtZV9fZ2FtZUNvbnRhaW5lci0tUlJPd0xgLFxuXHRcIkdhbWVfX3RlYW1JbWFnZVwiOiBgc3JjLWNvbXBvbmVudHMtR2FtZS1HYW1lLW1vZHVsZV9fR2FtZV9fdGVhbUltYWdlLS1oTDM5VmAsXG5cdFwiR2FtZV9fc2NvcmVcIjogYHNyYy1jb21wb25lbnRzLUdhbWUtR2FtZS1tb2R1bGVfX0dhbWVfX3Njb3JlLS1FMmV1c2AsXG5cdFwiR2FtZV9fc3RhdEljb25cIjogYHNyYy1jb21wb25lbnRzLUdhbWUtR2FtZS1tb2R1bGVfX0dhbWVfX3N0YXRJY29uLS1ZU0lhb2Bcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAa2V5ZnJhbWVzIHNyYy1jb21wb25lbnRzLUdpZi1HaWYtbW9kdWxlX19zY3JvbGwtaGFuZC0tTFk2ekwge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDgwcHgpIHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoODBweCkgc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAyMCUsIDYwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE3NXB4KSBzY2FsZSgwLjYpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgODAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KSBzY2FsZSgwLjYpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCkgc2NhbGUoMC42KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNyYy1jb21wb25lbnRzLUdpZi1HaWYtbW9kdWxlX19zY3JvbGwtY2FyZC0tTDBDZDQge1xuICAwJSwgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbiAgODAlLCAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI0MHB4KTtcbiAgfVxufVxuLnNyYy1jb21wb25lbnRzLUdpZi1HaWYtbW9kdWxlX19HaWYtLV9ydzdwIHtcbiAgd2lkdGg6IHZhcigtLWdhbWUtd2lkdGgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG59XG4uc3JjLWNvbXBvbmVudHMtR2lmLUdpZi1tb2R1bGVfX0dpZl9faXRlbS0tT002Y2kge1xuICB3aWR0aDogNDJweDtcbiAgaGVpZ2h0OiA0MnB4O1xufVxuLnNyYy1jb21wb25lbnRzLUdpZi1HaWYtbW9kdWxlX19HaWZfX2hhbmQtLW9GR1ptIHtcbiAgZmlsbDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGFuaW1hdGlvbjogc3JjLWNvbXBvbmVudHMtR2lmLUdpZi1tb2R1bGVfX3Njcm9sbC1oYW5kLS1MWTZ6TCAycyBpbmZpbml0ZTtcbn1cbi5zcmMtY29tcG9uZW50cy1HaWYtR2lmLW1vZHVsZV9fR2lmX19jYXJkLS1FRFlhYyB7XG4gIGZpbGw6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgYW5pbWF0aW9uOiBzcmMtY29tcG9uZW50cy1HaWYtR2lmLW1vZHVsZV9fc2Nyb2xsLWNhcmQtLUwwQ2Q0IDJzIGluZmluaXRlO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvR2lmL0dpZi5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFO0lBQ0Usb0NBQUE7SUFDQSxVQUFBO0VBQ0Y7RUFFQTtJQUNFLG9DQUFBO0lBQ0EsVUFBQTtFQUFGO0VBR0E7SUFDRSx1Q0FBQTtJQUNBLFVBQUE7RUFERjtFQUlBO0lBQ0UscUNBQUE7SUFDQSxVQUFBO0VBRkY7RUFLQTtJQUNFLHFDQUFBO0lBQ0EsVUFBQTtFQUhGO0FBQ0Y7QUFNQTtFQUNFO0lBQ0Usd0JBQUE7RUFKRjtFQU9BO0lBQ0UsNkJBQUE7RUFMRjtBQUNGO0FBUUE7RUFDRSx3QkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtBQU5GO0FBUUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQU5KO0FBU0U7RUFDRSwwQkFBQTtFQUNBLHdFQUFBO0FBUEo7QUFVRTtFQUNFLDhCQUFBO0VBQ0Esd0VBQUE7QUFSSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAa2V5ZnJhbWVzIHNjcm9sbC1oYW5kIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDgwcHgpIHNjYWxlKDEpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcblxcbiAgMTAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDgwcHgpIHNjYWxlKDEpO1xcbiAgICBvcGFjaXR5OiAxXFxuICB9XFxuXFxuICAyMCUsIDYwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNzVweCkgc2NhbGUoLjYpO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgODAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCkgc2NhbGUoLjYpO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpIHNjYWxlKC42KTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzY3JvbGwtY2FyZCB7XFxuICAwJSwgNjAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApXFxuICB9XFxuXFxuICA4MCUsIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI0MHB4KVxcbiAgfVxcbn1cXG5cXG4uR2lmIHtcXG4gIHdpZHRoOiB2YXIoLS1nYW1lLXdpZHRoKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuXFxuICAmX19pdGVtIHtcXG4gICAgd2lkdGg6IDQycHg7XFxuICAgIGhlaWdodDogNDJweDtcXG4gIH1cXG5cXG4gICZfX2hhbmQge1xcbiAgICBmaWxsOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgYW5pbWF0aW9uOiBzY3JvbGwtaGFuZCAycyBpbmZpbml0ZVxcbiAgfVxcblxcbiAgJl9fY2FyZCB7XFxuICAgIGZpbGw6IHJnYmEoMjU1IDI1NSAyNTUgLyAzMCUpO1xcbiAgICBhbmltYXRpb246IHNjcm9sbC1jYXJkIDJzIGluZmluaXRlXFxuICB9XFxuXFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIkdpZlwiOiBgc3JjLWNvbXBvbmVudHMtR2lmLUdpZi1tb2R1bGVfX0dpZi0tX3J3N3BgLFxuXHRcIkdpZl9faXRlbVwiOiBgc3JjLWNvbXBvbmVudHMtR2lmLUdpZi1tb2R1bGVfX0dpZl9faXRlbS0tT002Y2lgLFxuXHRcIkdpZl9faGFuZFwiOiBgc3JjLWNvbXBvbmVudHMtR2lmLUdpZi1tb2R1bGVfX0dpZl9faGFuZC0tb0ZHWm1gLFxuXHRcInNjcm9sbC1oYW5kXCI6IGBzcmMtY29tcG9uZW50cy1HaWYtR2lmLW1vZHVsZV9fc2Nyb2xsLWhhbmQtLUxZNnpMYCxcblx0XCJHaWZfX2NhcmRcIjogYHNyYy1jb21wb25lbnRzLUdpZi1HaWYtbW9kdWxlX19HaWZfX2NhcmQtLUVEWWFjYCxcblx0XCJzY3JvbGwtY2FyZFwiOiBgc3JjLWNvbXBvbmVudHMtR2lmLUdpZi1tb2R1bGVfX3Njcm9sbC1jYXJkLS1MMENkNGBcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc3JjLWNvbXBvbmVudHMtUGVyc29uUHJvdG9jb2wtUGVyc29uUHJvdG9jb2wtbW9kdWxlX19QZXJzb25Qcm90b2NvbF9fc2hpcnQtLW80cnBJIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGFzcGVjdC1yYXRpbzogNjkvODk7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cbi5zcmMtY29tcG9uZW50cy1QZXJzb25Qcm90b2NvbC1QZXJzb25Qcm90b2NvbC1tb2R1bGVfX1BlcnNvblByb3RvY29sX19pbWFnZS0tVGIwamcge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG4uc3JjLWNvbXBvbmVudHMtUGVyc29uUHJvdG9jb2wtUGVyc29uUHJvdG9jb2wtbW9kdWxlX19QZXJzb25Qcm90b2NvbF9faXRlbS0teXdZS3Uge1xuICBwYWRkaW5nOiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pbnZlcnRlZC1iZy1jb2xvcik7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9QZXJzb25Qcm90b2NvbC9QZXJzb25Qcm90b2NvbC5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FBQUo7QUFHRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtBQURKO0FBSUU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7QUFGSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuUGVyc29uUHJvdG9jb2wge1xcbiAgJl9fc2hpcnQge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgYXNwZWN0LXJhdGlvOiA2OS84OTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgfVxcblxcbiAgJl9faW1hZ2Uge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICB9XFxuXFxuICAmX19pdGVtIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW52ZXJ0ZWQtYmctY29sb3IpO1xcbiAgfVxcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJQZXJzb25Qcm90b2NvbF9fc2hpcnRcIjogYHNyYy1jb21wb25lbnRzLVBlcnNvblByb3RvY29sLVBlcnNvblByb3RvY29sLW1vZHVsZV9fUGVyc29uUHJvdG9jb2xfX3NoaXJ0LS1vNHJwSWAsXG5cdFwiUGVyc29uUHJvdG9jb2xfX2ltYWdlXCI6IGBzcmMtY29tcG9uZW50cy1QZXJzb25Qcm90b2NvbC1QZXJzb25Qcm90b2NvbC1tb2R1bGVfX1BlcnNvblByb3RvY29sX19pbWFnZS0tVGIwamdgLFxuXHRcIlBlcnNvblByb3RvY29sX19pdGVtXCI6IGBzcmMtY29tcG9uZW50cy1QZXJzb25Qcm90b2NvbC1QZXJzb25Qcm90b2NvbC1tb2R1bGVfX1BlcnNvblByb3RvY29sX19pdGVtLS15d1lLdWBcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc3JjLWNvbXBvbmVudHMtVGFibGUtVGFibGUtbW9kdWxlX19UYWJsZS0tYURlb3Ege1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xufVxuLnNyYy1jb21wb25lbnRzLVRhYmxlLVRhYmxlLW1vZHVsZV9fVGFibGVfX2hlYWRpbmctLUtDUjI5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMjBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zcmMtY29tcG9uZW50cy1UYWJsZS1UYWJsZS1tb2R1bGVfX1RhYmxlX19sb2dvLS16dmF5UCB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG4uc3JjLWNvbXBvbmVudHMtVGFibGUtVGFibGUtbW9kdWxlX19UYWJsZV9fY29udGFpbmVyLS1pZk1aUyB7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuLnNyYy1jb21wb25lbnRzLVRhYmxlLVRhYmxlLW1vZHVsZV9fVGFibGVfX3Jvdy0tVVg4bGcge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pbnZlcnRlZC1iZy1jb2xvcik7XG59XG4uc3JjLWNvbXBvbmVudHMtVGFibGUtVGFibGUtbW9kdWxlX19UYWJsZV9fdGl0bGUtLW1ZV1RnIHtcbiAgcGFkZGluZzogNXB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWludmVydGVkLWJnLWNvbG9yKTtcbn1cbi5zcmMtY29tcG9uZW50cy1UYWJsZS1UYWJsZS1tb2R1bGVfX1RhYmxlX19pdGVtLS1hQllHMCB7XG4gIHBhZGRpbmc6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWludmVydGVkLWJnLWNvbG9yKTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL1RhYmxlL1RhYmxlLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUNGO0FBQ0U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQUNKO0FBRUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUFKO0FBR0U7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQURKO0FBSUU7RUFDRSwwQ0FBQTtBQUZKO0FBS0U7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0FBSEo7QUFNRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtBQUpKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5UYWJsZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG5cXG4gICZfX2hlYWRpbmcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgJl9fbG9nbyB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICB9XFxuXFxuICAmX19jb250YWluZXIge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIH1cXG5cXG4gICZfX3JvdyB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWludmVydGVkLWJnLWNvbG9yKVxcbiAgfVxcblxcbiAgJl9fdGl0bGUge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW52ZXJ0ZWQtYmctY29sb3IpXFxuICB9XFxuXFxuICAmX19pdGVtIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW52ZXJ0ZWQtYmctY29sb3IpXFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIlRhYmxlXCI6IGBzcmMtY29tcG9uZW50cy1UYWJsZS1UYWJsZS1tb2R1bGVfX1RhYmxlLS1hRGVvcWAsXG5cdFwiVGFibGVfX2hlYWRpbmdcIjogYHNyYy1jb21wb25lbnRzLVRhYmxlLVRhYmxlLW1vZHVsZV9fVGFibGVfX2hlYWRpbmctLUtDUjI5YCxcblx0XCJUYWJsZV9fbG9nb1wiOiBgc3JjLWNvbXBvbmVudHMtVGFibGUtVGFibGUtbW9kdWxlX19UYWJsZV9fbG9nby0tenZheVBgLFxuXHRcIlRhYmxlX19jb250YWluZXJcIjogYHNyYy1jb21wb25lbnRzLVRhYmxlLVRhYmxlLW1vZHVsZV9fVGFibGVfX2NvbnRhaW5lci0taWZNWlNgLFxuXHRcIlRhYmxlX19yb3dcIjogYHNyYy1jb21wb25lbnRzLVRhYmxlLVRhYmxlLW1vZHVsZV9fVGFibGVfX3Jvdy0tVVg4bGdgLFxuXHRcIlRhYmxlX190aXRsZVwiOiBgc3JjLWNvbXBvbmVudHMtVGFibGUtVGFibGUtbW9kdWxlX19UYWJsZV9fdGl0bGUtLW1ZV1RnYCxcblx0XCJUYWJsZV9faXRlbVwiOiBgc3JjLWNvbXBvbmVudHMtVGFibGUtVGFibGUtbW9kdWxlX19UYWJsZV9faXRlbS0tYUJZRzBgXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNyYy1zaGFyZWQtdWktU2VjdGlvblRpdGxlLVNlY3Rpb25UaXRsZS1tb2R1bGVfX1NlY3Rpb25UaXRsZS0tUzE4YU0ge1xuICBmb250OiB2YXIoLS1mb250LWwpO1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQteGwpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5LWNvbG9yKTtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLnNyYy1zaGFyZWQtdWktU2VjdGlvblRpdGxlLVNlY3Rpb25UaXRsZS1tb2R1bGVfX1NlY3Rpb25UaXRsZV9jbGVhci0tUHBtU3gge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cbi5zcmMtc2hhcmVkLXVpLVNlY3Rpb25UaXRsZS1TZWN0aW9uVGl0bGUtbW9kdWxlX19TZWN0aW9uVGl0bGVfcG96X21haW4tLWhqU2lfIHtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcbiAgdGV4dC1zaGFkb3c6IDAuN3B4IDAuN3B4IDAgdmFyKC0tdGV4dC1wcmltYXJ5LWNvbG9yKSwgLTAuN3B4IDAuN3B4IDAgdmFyKC0tdGV4dC1wcmltYXJ5LWNvbG9yKSwgMC43cHggLTAuN3B4IDAgdmFyKC0tdGV4dC1wcmltYXJ5LWNvbG9yKSwgLTAuN3B4IC0wLjdweCAwIHZhcigtLXRleHQtcHJpbWFyeS1jb2xvcik7XG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XG59XG4uc3JjLXNoYXJlZC11aS1TZWN0aW9uVGl0bGUtU2VjdGlvblRpdGxlLW1vZHVsZV9fU2VjdGlvblRpdGxlX3Bvel9yb2FzdGVyLS1EQ09uRiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXF1YXRyZW5hcnktY29sb3IpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3NoYXJlZC91aS9TZWN0aW9uVGl0bGUvU2VjdGlvblRpdGxlLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQUNGO0FBQ0U7RUFDRSxvQkFBQTtBQUNKO0FBRUU7RUFDRSxrQ0FBQTtFQUNBLG1MQUNRO0VBSVIsbUJBQUE7QUFKSjtBQU9FO0VBQ0UsbUNBQUE7QUFMSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuU2VjdGlvblRpdGxlIHtcXG4gIGZvbnQ6IHZhcigtLWZvbnQtbCk7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQteGwpO1xcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeS1jb2xvcik7XFxuICBsZXR0ZXItc3BhY2luZzogMS40cHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcblxcbiAgJl9jbGVhciB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgfVxcblxcbiAgJl9wb3pfbWFpbiB7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeS1jb2xvcik7XFxuICAgIHRleHQtc2hhZG93OlxcbiAgICAgICAgICAgIC43cHggLjdweCAwIHZhcigtLXRleHQtcHJpbWFyeS1jb2xvciksXFxuICAgICAgICAgICAgLS43cHggLjdweCAwIHZhcigtLXRleHQtcHJpbWFyeS1jb2xvciksXFxuICAgICAgICAgICAgLjdweCAtLjdweCAwIHZhcigtLXRleHQtcHJpbWFyeS1jb2xvciksXFxuICAgICAgICAgICAgLS43cHggLS43cHggMCB2YXIoLS10ZXh0LXByaW1hcnktY29sb3IpO1xcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xcbiAgfVxcblxcbiAgJl9wb3pfcm9hc3RlciB7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXF1YXRyZW5hcnktY29sb3IpO1xcbiAgfVxcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJTZWN0aW9uVGl0bGVcIjogYHNyYy1zaGFyZWQtdWktU2VjdGlvblRpdGxlLVNlY3Rpb25UaXRsZS1tb2R1bGVfX1NlY3Rpb25UaXRsZS0tUzE4YU1gLFxuXHRcIlNlY3Rpb25UaXRsZV9jbGVhclwiOiBgc3JjLXNoYXJlZC11aS1TZWN0aW9uVGl0bGUtU2VjdGlvblRpdGxlLW1vZHVsZV9fU2VjdGlvblRpdGxlX2NsZWFyLS1QcG1TeGAsXG5cdFwiU2VjdGlvblRpdGxlX3Bvel9tYWluXCI6IGBzcmMtc2hhcmVkLXVpLVNlY3Rpb25UaXRsZS1TZWN0aW9uVGl0bGUtbW9kdWxlX19TZWN0aW9uVGl0bGVfcG96X21haW4tLWhqU2lfYCxcblx0XCJTZWN0aW9uVGl0bGVfcG96X3JvYXN0ZXJcIjogYHNyYy1zaGFyZWQtdWktU2VjdGlvblRpdGxlLVNlY3Rpb25UaXRsZS1tb2R1bGVfX1NlY3Rpb25UaXRsZV9wb3pfcm9hc3Rlci0tRENPbkZgXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNyYy13aWRnZXRzLUdhbWVCYXItdWktR2FtZUJhci1tb2R1bGVfX0dhbWVCYXItLUE2SFA2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cbi5zcmMtd2lkZ2V0cy1HYW1lQmFyLXVpLUdhbWVCYXItbW9kdWxlX19HYW1lQmFyX193aWRnZXQtLUhKcDVSIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICB3aWR0aDogdmFyKC0tZ2FtZS13aWR0aCk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTAwcHg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIHNjcm9sbC1zbmFwLXR5cGU6IHggbWFuZGF0b3J5O1xufVxuLnNyYy13aWRnZXRzLUdhbWVCYXItdWktR2FtZUJhci1tb2R1bGVfX0dhbWVCYXJfX2l0ZW0tLUgxbnFUIHtcbiAgd2lkdGg6IG1pbi1jb250ZW50O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3dpZGdldHMvR2FtZUJhci91aS9HYW1lQmFyLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUNGO0FBQ0U7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBQUNKO0FBRUU7RUFDRSxrQkFBQTtBQUFKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5HYW1lQmFyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcblxcbiAgJl9fd2lkZ2V0IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICB3aWR0aDogdmFyKC0tZ2FtZS13aWR0aCk7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTAwcHg7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIHNjcm9sbC1zbmFwLXR5cGU6IHggbWFuZGF0b3J5O1xcbiAgfVxcblxcbiAgJl9faXRlbSB7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiR2FtZUJhclwiOiBgc3JjLXdpZGdldHMtR2FtZUJhci11aS1HYW1lQmFyLW1vZHVsZV9fR2FtZUJhci0tQTZIUDZgLFxuXHRcIkdhbWVCYXJfX3dpZGdldFwiOiBgc3JjLXdpZGdldHMtR2FtZUJhci11aS1HYW1lQmFyLW1vZHVsZV9fR2FtZUJhcl9fd2lkZ2V0LS1ISnA1UmAsXG5cdFwiR2FtZUJhcl9faXRlbVwiOiBgc3JjLXdpZGdldHMtR2FtZUJhci11aS1HYW1lQmFyLW1vZHVsZV9fR2FtZUJhcl9faXRlbS0tSDFucVRgXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNyYy13aWRnZXRzLUdhbWVQcm90b2NvbC11aS1HYW1lUHJvdG9jb2wtbW9kdWxlX19HYW1lUHJvdG9jb2wtLVJvbG4zIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XG4gIHotaW5kZXg6IC0xO1xufVxuLnNyYy13aWRnZXRzLUdhbWVQcm90b2NvbC11aS1HYW1lUHJvdG9jb2wtbW9kdWxlX19HYW1lUHJvdG9jb2xfX292ZXJsYXktLVJjVmRIIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cbi5zcmMtd2lkZ2V0cy1HYW1lUHJvdG9jb2wtdWktR2FtZVByb3RvY29sLW1vZHVsZV9fR2FtZVByb3RvY29sX19jb250ZW50LS12c3c1WiB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1heC13aWR0aDogOTAlO1xuICBtYXgtaGVpZ2h0OiA3MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjBweDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuLnNyYy13aWRnZXRzLUdhbWVQcm90b2NvbC11aS1HYW1lUHJvdG9jb2wtbW9kdWxlX19vcGVuZWQtLUljY3I2IHtcbiAgb3BhY2l0eTogMTtcbiAgei1pbmRleDogdmFyKC0tbW9kYWwtei1pbmRleCk7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuLnNyYy13aWRnZXRzLUdhbWVQcm90b2NvbC11aS1HYW1lUHJvdG9jb2wtbW9kdWxlX19vcGVuZWQtLUljY3I2IC5zcmMtd2lkZ2V0cy1HYW1lUHJvdG9jb2wtdWktR2FtZVByb3RvY29sLW1vZHVsZV9fR2FtZVByb3RvY29sX19jb250ZW50LS12c3c1WiB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvd2lkZ2V0cy9HYW1lUHJvdG9jb2wvdWkvR2FtZVByb3RvY29sLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUFDRjtBQUNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0FBQ0o7QUFFRTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBSUE7RUFDRSxVQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtBQURGO0FBR0U7RUFDRSxtQkFBQTtBQURKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5HYW1lUHJvdG9jb2wge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogLjRzIGVhc2U7XFxuICB6LWluZGV4OiAtMTtcXG5cXG4gICZfX292ZXJsYXkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCA2MCUpO1xcbiAgfVxcblxcbiAgJl9fY29udGVudCB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIG1heC13aWR0aDogOTAlO1xcbiAgICBtYXgtaGVpZ2h0OiA3MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSguNSk7XFxuICAgIHRyYW5zaXRpb246IC40cyBlYXNlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICB9XFxufVxcblxcbi5vcGVuZWQge1xcbiAgb3BhY2l0eTogMTtcXG4gIHotaW5kZXg6IHZhcigtLW1vZGFsLXotaW5kZXgpO1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuXFxuICAuR2FtZVByb3RvY29sX19jb250ZW50IHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiR2FtZVByb3RvY29sXCI6IGBzcmMtd2lkZ2V0cy1HYW1lUHJvdG9jb2wtdWktR2FtZVByb3RvY29sLW1vZHVsZV9fR2FtZVByb3RvY29sLS1Sb2xuM2AsXG5cdFwiR2FtZVByb3RvY29sX19vdmVybGF5XCI6IGBzcmMtd2lkZ2V0cy1HYW1lUHJvdG9jb2wtdWktR2FtZVByb3RvY29sLW1vZHVsZV9fR2FtZVByb3RvY29sX19vdmVybGF5LS1SY1ZkSGAsXG5cdFwiR2FtZVByb3RvY29sX19jb250ZW50XCI6IGBzcmMtd2lkZ2V0cy1HYW1lUHJvdG9jb2wtdWktR2FtZVByb3RvY29sLW1vZHVsZV9fR2FtZVByb3RvY29sX19jb250ZW50LS12c3c1WmAsXG5cdFwib3BlbmVkXCI6IGBzcmMtd2lkZ2V0cy1HYW1lUHJvdG9jb2wtdWktR2FtZVByb3RvY29sLW1vZHVsZV9fb3BlbmVkLS1JY2NyNmBcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0dhbWUubW9kdWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwO1xuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9HYW1lLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0dhbWUubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9HaWYubW9kdWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwO1xuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9HaWYubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vR2lmLm1vZHVsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vUGVyc29uUHJvdG9jb2wubW9kdWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwO1xuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9QZXJzb25Qcm90b2NvbC5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9QZXJzb25Qcm90b2NvbC5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1RhYmxlLm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vVGFibGUubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vVGFibGUubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TZWN0aW9uVGl0bGUubW9kdWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwO1xuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TZWN0aW9uVGl0bGUubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU2VjdGlvblRpdGxlLm1vZHVsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vR2FtZUJhci5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHA7XG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0dhbWVCYXIubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vR2FtZUJhci5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0dhbWVQcm90b2NvbC5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHA7XG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0dhbWVQcm90b2NvbC5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9HYW1lUHJvdG9jb2wubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJleHBvcnQgdmFyIHRyaW1HYW1lcyA9IGZ1bmN0aW9uIChnYW1lc0FycmF5KSB7XG4gICAgdmFyIHJlbmRlckFycmF5ID0gW107XG4gICAgdmFyIHJlY2VudEdhbWVzID0gZ2FtZXNBcnJheVxuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgR2FtZVN0YXR1cyA9IF9hLkdhbWVTdGF0dXM7XG4gICAgICAgIHJldHVybiBHYW1lU3RhdHVzID09PSAxO1xuICAgIH0pXG4gICAgICAgIC5zbGljZSgtNik7XG4gICAgdmFyIG5leHRHYW1lID0gZ2FtZXNBcnJheVxuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgR2FtZVN0YXR1cyA9IF9hLkdhbWVTdGF0dXM7XG4gICAgICAgIHJldHVybiBHYW1lU3RhdHVzID09PSAwO1xuICAgIH0pWzBdO1xuICAgIHJlY2VudEdhbWVzLmZvckVhY2goZnVuY3Rpb24gKGdhbWUpIHtcbiAgICAgICAgcmVuZGVyQXJyYXkudW5zaGlmdChnYW1lKTtcbiAgICB9KTtcbiAgICByZW5kZXJBcnJheS51bnNoaWZ0KG5leHRHYW1lKTtcbiAgICByZXR1cm4gcmVuZGVyQXJyYXk7XG59O1xuIiwiZXhwb3J0IHsgR2FtZUJhciB9IGZyb20gJy4vdWkvR2FtZUJhcic7XG4iXSwibmFtZXMiOlsiX19hc3NpZ24iLCJPYmplY3QiLCJhc3NpZ24iLCJ0IiwicyIsImkiLCJuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImFwcGx5IiwiX19hd2FpdGVyIiwidGhpc0FyZyIsIl9hcmd1bWVudHMiLCJQIiwiZ2VuZXJhdG9yIiwiYWRvcHQiLCJ2YWx1ZSIsInJlc29sdmUiLCJQcm9taXNlIiwicmVqZWN0IiwiZnVsZmlsbGVkIiwic3RlcCIsIm5leHQiLCJlIiwicmVqZWN0ZWQiLCJyZXN1bHQiLCJkb25lIiwidGhlbiIsIl9fZ2VuZXJhdG9yIiwiYm9keSIsIl8iLCJsYWJlbCIsInNlbnQiLCJ0cnlzIiwib3BzIiwiZiIsInkiLCJnIiwidmVyYiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwidiIsIm9wIiwiVHlwZUVycm9yIiwicG9wIiwicHVzaCIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJtYWluQXBpIiwidXNlUHJvdG9jb2wiLCJfdGhpcyIsIl9hIiwiaXNPcGVuIiwiZ2FtZUlkIiwiZ2FtZUluZm8iLCJnYW1lRGF0YSIsInByb3RvY29sU3RhdGUiLCJzZXRQcm90b2NvbFN0YXRlIiwiZmV0Y2hHYW1lIiwiZ2V0R2FtZVByb3RvY29sIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImpzeCIsIl9qc3giLCJqc3hzIiwiX2pzeHMiLCJjbGFzc05hbWVzIiwiY2xzIiwiQnV0dG9uIiwiVGhlbWVCdXR0b24iLCJTdGF0SWNvbiIsIkdhbWUiLCJwcm9wcyIsImdhbWUiLCJjbGFzc05hbWUiLCJHYW1lSUQiLCJEaXNwbGF5RGF0ZVRpbWVNc2siLCJUZWFtTG9nb0EiLCJUZWFtTG9nb0IiLCJTY29yZUEiLCJTY29yZUIiLCJvblN0YXRPcGVuIiwiY2hpbGRyZW4iLCJHYW1lX190aXRsZSIsIkdhbWVfX2dhbWVDb250YWluZXIiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImNvbmNhdCIsIkdhbWVfX3RlYW1JbWFnZSIsIkdhbWVfX3Njb3JlIiwib25DbGljayIsInRoZW1lIiwiUE9aX0dBTUUiLCJHYW1lX19zdGF0SWNvbiIsIkdpZiIsIkdpZl9faXRlbSIsInZpZXdCb3giLCJnaWZfX2NhcmQiLCJ4Iiwid2lkdGgiLCJoZWlnaHQiLCJyeCIsIkdpZl9fY2FyZCIsIkdpZl9faGFuZCIsImQiLCJQZXJzb25Qcm90b2NvbCIsIlBsYXllck51bWJlciIsIlBlcnNvbklEIiwiUGVyc29uTmFtZVJ1IiwiUGxheWVkVGltZSIsIlBvaW50cyIsIlNob3RzMSIsIlNob3RzMiIsIlNob3RzMyIsIkdvYWwyIiwiR29hbDMiLCJTaG90MiIsIlNob3QzIiwiRGVmUmVib3VuZCIsIk9mZlJlYm91bmQiLCJSZWJvdW5kIiwiQXNzaXN0IiwiU3RlYWwiLCJUdXJub3ZlciIsIkJsb2NrcyIsIkZvdWwiLCJPcHBvbmVudEZvdWwiLCJQbHVzTWludXMiLCJwcm90b2NvbCIsIlBlcnNvblByb3RvY29sX19pdGVtIiwiUGVyc29uUHJvdG9jb2xfX3NoaXJ0IiwiUGVyc29uUHJvdG9jb2xfX2ltYWdlIiwiX19yZXN0IiwiaW5kZXhPZiIsImdldE93blByb3BlcnR5U3ltYm9scyIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiY3JlYXRlRWxlbWVudCIsIl9jcmVhdGVFbGVtZW50IiwiU2VjdGlvblRpdGxlIiwiVGFibGUiLCJsb2dvVGVhbSIsIm5hbWVUZWFtIiwiU2NvcmUiLCJTaG90MVBlcmNlbnQiLCJTaG90MlBlcmNlbnQiLCJTaG90M1BlcmNlbnQiLCJQbGF5ZXJzIiwiVGFibGVfX2hlYWRpbmciLCJUYWJsZV9fbG9nbyIsInNyYyIsImFsdCIsIlRhYmxlX190ZWFtIiwiVGFibGVfX2NvbnRhaW5lciIsIlRhYmxlX19yb3ciLCJyb3dTcGFuIiwiY29sU3BhbiIsIlRhYmxlX190aXRsZSIsInRpdGxlIiwibWFwIiwiaW5kZXgiLCJwbGF5ZXJQcm9wcyIsImtleSIsIlRhYmxlX19pdGVtIiwidG9GaXhlZCIsIkdhbWVCYXIiLCJHYW1lUHJvdG9jb2wiLCJBYm91dFBhZ2UiLCJHYW1lc0NvbnRleHQiLCJ1c2VDb250ZXh0IiwidHJpbUdhbWVzIiwiZ2FtZXNBcnJheSIsInJlbmRlckdhbWVzIiwic2V0UmVuZGVyR2FtZXMiLCJHYW1lQmFyX193aWRnZXQiLCJHYW1lQmFyX19pdGVtIiwiRnJhZ21lbnQiLCJfRnJhZ21lbnQiLCJMb2FkZXIiLCJtb2RzIiwib3BlbmVkIiwiY2xvc2VQb3B1cCIsIm9uT3ZlcmxheUNsaWNrIiwic3RvcFByb3BhZ2F0aW9uIiwiR2FtZVByb3RvY29sX19vdmVybGF5IiwiR2FtZVByb3RvY29sX19jb250ZW50IiwiR2FtZVRlYW1zIiwiVGVhbU5hbWVBcnUiLCJUZWFtTmFtZUJydSJdLCJzb3VyY2VSb290IjoiIn0=
// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"index.js":[function(require,module,exports) {
// 1.Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».
var firstBtn = document.getElementById('first'); //достаю кнопку из html файла 

firstBtn.addEventListener('click', function () {
  // при нажатии на клик выполняется действие 
  var name = prompt('Как вас зовут ?'); // запрашиваю имя

  alert("\u041F\u0440\u0438\u0432\u0435\u0442, ".concat(name, "!")); // Выдаю имя 
}); // 2.Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.

var secondBtn = document.getElementById('second');
secondBtn.addEventListener('click', function () {
  var sizeOfSquare = prompt('Введите длину стороны квадрата.', 20);
  var sumSquare = 4 * sizeOfSquare;
  alert(sumSquare);
}); // 3.Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.

var thirdBtn = document.getElementById('third');
thirdBtn.addEventListener('click', function () {
  var yearYourBirthday = prompt('В каком году вы родились ?', 1900);
  var today = new Date();
  var yourAge = today.getFullYear() - yearYourBirthday;
  alert("\u0412\u0430\u043C ".concat(yourAge, " \u043B\u0435\u0442!"));
}); // 4.Запросите у пользователя радиус окружности и выведите площадь такой окружности.

var fourthBtn = document.getElementById('fourth');
fourthBtn.addEventListener('click', function () {
  var r = prompt('Задайте радиус окружности?', 30);
  var p = 3.1415926535;
  var areaOfCircle = p * Math.pow(r, 2);
  areaOfCircle = Math.floor(areaOfCircle);
  alert("\u041F\u043B\u043E\u0449\u0430\u0434\u044C \u043E\u043A\u0440\u0443\u0436\u043D\u043E\u0441\u0442\u0438 ".concat(areaOfCircle, "!"));
}); // 5.Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.

var fifthBtn = document.getElementById('fifth');
fifthBtn.addEventListener('click', function () {
  var distance = prompt('Какая дистанция между точкой А и Б?', 340);
  var timeToMove = prompt('За сколько времени вы планируете добраться ?', 6);
  var speed = distance / timeToMove;
  speed = Math.floor(speed);
  alert("\u0412\u0430\u043C \u043D\u0443\u0436\u043D\u043E \u0434\u0432\u0438\u0433\u0430\u0442\u044C\u0441\u044F \u0441\u043E \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C ".concat(speed, "\u043A\u043C/\u0447"));
}); // 6.Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.

var sixthBtn = document.getElementById('sixth');
sixthBtn.addEventListener('click', function () {
  var USD = prompt("\u041A\u0430\u043A\u0443\u044E \u0441\u0443\u043C\u043C\u0443 \u0434\u043E\u043B\u043B\u043E\u0440\u043E\u0432 \u0432\u044B \u0436\u0435\u043B\u0430\u0435\u0442\u0435 \u043F\u043E\u043C\u0435\u043D\u044F\u0442\u044C ?", 1000);
  var EUR = 0.85;
  var sumMoney = USD * EUR;
  alert("\u041C\u0435\u043D\u044F\u044F ".concat(USD, " \u0434\u043E\u043B\u043B\u0430\u0440\u043E\u0432, \u0443 \u0432\u0430\u0441 \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442\u0441\u044F ").concat(sumMoney, " \u0435\u0432\u0440\u043E!"));
}); // 7.Пользователь указывает объем флешки в Гб. Программа должна посчитать, сколько файлов размером в 820 Мб помещается на флешку.

var seventhBtn = document.getElementById('seventh');
seventhBtn.addEventListener('click', function () {
  var memory = prompt('Какой у вас обьем флешки в ГБ?', 16);
  var files = memory * 1000 / 820;
  files = Math.floor(files);
  var residue = memory * 1000 % 820;
  alert("\u041D\u0430 \u0432\u0430\u0448\u0443 \u0444\u043B\u0435\u0448\u043A\u0443 \u0441 \u043E\u0431\u044C\u0435\u043C\u043E\u043C ".concat(memory, ", \u0432\u044B \u0441\u043C\u043E\u0436\u0435\u0442\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C ").concat(files, " \u0444\u0430\u0439\u043B\u043E\u0432 \u043F\u043E 820\u043C\u0431. \u0410 \u0435\u0449\u0435 \u0443 \u0432\u0430\u0441 \u043E\u0441\u0442\u0430\u043D\u0435\u0442\u0441\u044F ").concat(residue, "\u043C\u0431\uD83D\uDE0A"));
}); // 8.Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит, сколько шоколадок может купить пользователь, и сколько сдачи у него останется.

var eighthBtn = document.getElementById('eighth');
eighthBtn.addEventListener('click', function () {
  var amountOfMoney = prompt('Сколько у вас есть денег ?', 200);
  var chokolate = prompt('Цена одной шоколадки?', 28.5);
  var pieces = amountOfMoney / chokolate;
  pieces = Math.floor(pieces);
  var surrender = amountOfMoney % chokolate;
  var currency = 'гривен';
  alert("\u041D\u0430 ".concat(amountOfMoney, "\u0433\u0440\u0438\u0432\u0435\u043D \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043A\u0443\u043F\u0438\u0442\u044C ").concat(pieces, " \u0448\u043E\u043A\u043E\u043B\u0430\u0434\u043E\u043A. \u0418 \u0443 \u0432\u0430\u0441 \u043E\u0441\u0442\u0430\u043D\u0435\u0442\u0441\u044F ").concat(surrender, " ").concat(currency, "!"));
}); // 9.Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).

var ninthBtn = document.getElementById('ninth');
ninthBtn.addEventListener('click', function () {
  var num = prompt('Введите любое число! Желательно трехзначное!', 598);

  function getReversedNum(num) {
    var result = 0;

    while (num) {
      result = result * 10 + num % 10;
      num = Math.floor(num / 10);
    }

    return result;
  }

  alert(getReversedNum(num));
}); // 10.Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых. Вывести сумму начисленных процентов.

var tenthBtn = document.getElementById('tenth');
tenthBtn.addEventListener('click', function () {
  var num = prompt('Введите сумму вклада!');
  var months = prompt('На сколько месяцев вы хотите внести сумму ?');
  var sum = num * 0.05 / 12 * months;
  sum = Math.floor(sum);
  alert("\u0417\u0430 ".concat(months, " \u043C\u0435\u0441\u044F\u0446\u0430, \u0432\u0430\u043C \u0431\u0443\u0434\u0435\u0442 \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u043E ").concat(sum, " \u0433\u0440\u0438\u0432\u043D\u0443."));
}); //1.1 Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).

var firstOne = document.getElementById('firstOne');
firstOne.addEventListener('click', function () {
  var age = +prompt('Сколько вам лет?');

  if (age < 12) {
    alert('Вы еще ребенок👶');
  } else if (age < 18) {
    alert('Вы все еще подросток 👦');
  } else if (age < 60) {
    alert('Поздравляю, вы уже взрослый 👱‍♂️');
  } else if (age <= 100) {
    alert('Вы уже пенсионер 👴 еще чуть чуть ...');
  } else {
    alert('Странно, вы все еще живы🤔');
  }

  console.log(TypeOf.age);
});
},{}],"../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52784" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/js-modules.e31bb0bc.js.map
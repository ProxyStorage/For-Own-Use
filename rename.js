/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}

function getNum(str) {
    var reg = /([0-9]\d*\.?\d*)|(0\.\d*[0-9])$/;
    var result = reg.exec(str);
    return result ? result[0] : '';
}
function reName(str, actionObject) {
    var returnResult = {
        origin: str,
        location: str,
        modified: '',
        action: 'rename',
        flag: ''
    };
    var locationList = actionObject.locationList, modifiedList = actionObject.modifiedList, deleteList = actionObject.deleteList;
    for (var i = 0; i < deleteList.length; i++) {
        var modifiedReg = new RegExp(deleteList[i].reg, 'gi');
        if (modifiedReg.test(str)) {
            returnResult.modified = deleteList[i].enShort;
            returnResult.action = 'delete';
            break;
        }
    }
    for (var i = 0; i < locationList.length; i++) {
        var locationReg = new RegExp(locationList[i].reg, 'gi');
        if (locationReg.test(str)) {
            returnResult.location = locationList[i].custom || locationList[i].enFull;
            returnResult.flag = locationList[i].flag || '';
            break;
        }
    }
    for (var i = 0; i < modifiedList.length; i++) {
        var modifiedReg = new RegExp(modifiedList[i].reg, 'gi');
        if (modifiedReg.test(str)) {
            returnResult.modified = modifiedList[i].custom || modifiedList[i].enShort;
            if (returnResult.action !== 'rename') {
                returnResult.action = modifiedList[i].action;
            }
            break;
        }
    }
    return returnResult;
}

var locationList = [
    {
        zh: '懒人节点',
        enShort: 'lazy',
        enFull: 'lazy person',
        reg: '懒人',
        custom: 'lazy',
        flag: '🏴‍☠️'
    },
    {
        zh: '香港',
        enShort: 'HK',
        enFull: 'Hong Kong',
        reg: 'HK|Hong Kong|HK|Hongkong|Hong Kong|HongKong|HONG KONG|香港|深港|沪港|呼港|HKT|HKBN|HGC|WTT|CMI|穗港|京港|港',
        custom: 'HK',
        flag: '🇭🇰'
    },
    {
        zh: '澳门',
        enShort: 'MO',
        enFull: 'Macao',
        reg: 'MO|Macao|MO|Macao|澳门|澳門|CTM',
        custom: 'MO',
        flag: '🇲🇴'
    },
    {
        zh: '台湾',
        enShort: 'TW',
        enFull: 'Taiwan',
        reg: 'TW|Taiwan|TW|Taiwan|TAIWAN|台湾|台北|台中|新北|彰化|CHT|台|HINET|Taipei',
        custom: 'TW',
        flag: '🇹🇼'
    },
    {
        zh: '日本',
        enShort: 'JP',
        enFull: 'Japan',
        reg: 'JP|Japan|JP|Japan|JAPAN|日本|东京|大阪|埼玉|沪日|穗日|川日|中日|泉日|杭日|深日|辽日|广日|大坂|Osaka|Tokyo',
        custom: 'JP',
        flag: '🇯🇵'
    },
    {
        zh: '韩国',
        enShort: 'KR',
        enFull: 'Korea',
        reg: 'KR|Korea|KR|Korea|KOR|韩国|首尔|韩|韓|春川|Chuncheon|Seoul',
        custom: 'KR',
        flag: '🇰🇷'
    },
    {
        zh: '新加坡',
        enShort: 'SG',
        enFull: 'Singapore',
        reg: 'SG|Singapore|SG|Singapore|SINGAPORE|新加坡|狮城|沪新|京新|泉新|穗新|深新|杭新|广新|廣新|滬新',
        custom: 'SG',
        flag: '🇸🇬'
    },
    {
        zh: '美国',
        enShort: 'US',
        enFull: 'United States',
        reg: 'US|United States|US|USA|America|United States|美国|美|京美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|矽谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|沪美|哥伦布|纽约|Los Angeles|San Jose|Sillicon Valley|Michigan',
        custom: 'US',
        flag: '🇺🇸'
    },
    {
        zh: '英国',
        enShort: 'UK',
        enFull: 'United Kingdom',
        reg: 'UK|United Kingdom|England|United Kingdom|英国|伦敦|英|London',
        custom: 'UK',
        flag: '🇬🇧'
    },
    {
        zh: '法国',
        enShort: 'FR',
        enFull: 'France',
        reg: 'FR|France|FR|France|法国|法國|巴黎',
        custom: 'FR',
        flag: '🇫🇷'
    },
    {
        zh: '德国',
        enShort: 'DE',
        enFull: 'Germany',
        reg: 'DE|Germany|DE|German|GERMAN|德国|德國|法兰克福|京德|滬德|廣德|沪德|广德|Frankfurt',
        custom: 'DE',
        flag: '🇩🇪'
    },
    {
        zh: '澳大利亚',
        enShort: 'AU',
        enFull: 'Australia',
        reg: 'AU|Australia|AU|Australia|Sydney|澳大利亚|澳洲|墨尔本|悉尼|土澳|京澳|廣澳|滬澳|沪澳|广澳',
        custom: 'AU',
        flag: '🇦🇺'
    },
    { zh: '阿富汗', enShort: 'AF', enFull: 'Afghanistan', reg: 'AF|Afghanistan' },
    {
        zh: '阿尔巴尼亚',
        enShort: 'AL',
        enFull: 'Albania',
        reg: 'AL|Albania|阿爾巴尼亞|阿尔巴尼亚',
        flag: '🇦🇱'
    },
    { zh: '阿尔及利亚', enShort: 'DZ', enFull: 'Algeria', reg: 'DZ|Algeria' },
    { zh: '安哥拉', enShort: 'AO', enFull: 'Angola', reg: 'AO|Angola' },
    {
        zh: '阿根廷',
        enShort: 'AR',
        enFull: 'Argentina',
        reg: 'AR|Argentina|AR|阿根廷',
        flag: '🇦🇷'
    },
    { zh: '亚美尼亚', enShort: 'AM', enFull: 'Armenia', reg: 'AM|Armenia' },
    {
        zh: '奥地利',
        enShort: 'AT',
        enFull: 'Austria',
        reg: 'AT|Austria|奥地利|奧地利|Austria|维也纳',
        flag: '🇦🇹'
    },
    {
        zh: '阿塞拜疆',
        enShort: 'AZ',
        enFull: 'Azerbaijan',
        reg: 'AZ|Azerbaijan|阿塞拜疆',
        flag: '🇦🇿'
    },
    {
        zh: '巴林',
        enShort: 'BH',
        enFull: 'Bahrain',
        reg: 'BH|Bahrain|BH|巴林',
        flag: '🇧🇭'
    },
    {
        zh: '比利时',
        enShort: 'BE',
        enFull: 'Belgium',
        reg: 'BE|Belgium|BE|比利時|比利时',
        flag: '🇧🇪'
    },
    { zh: '伯利兹', enShort: 'BZ', enFull: 'Belize', reg: 'BZ|Belize' },
    { zh: '贝宁', enShort: 'BJ', enFull: 'Benin', reg: 'BJ|Benin' },
    { zh: '不丹', enShort: 'BT', enFull: 'Bhutan', reg: 'BT|Bhutan' },
    { zh: '玻利维亚', enShort: 'BO', enFull: 'Bolivia', reg: 'BO|Bolivia' },
    {
        zh: '波黑',
        enShort: 'BA',
        enFull: 'Bosnia and Herzegovina',
        reg: 'BA|Bosnia and Herzegovina|波黑共和国|波黑',
        flag: '🇧🇦'
    },
    { zh: '博茨瓦纳', enShort: 'BW', enFull: 'Botswana', reg: 'BW|Botswana' },
    {
        zh: '巴西',
        enShort: 'BR',
        enFull: 'Brazil',
        reg: 'BR|Brazil|BR|Brazil|巴西|圣保罗',
        flag: '🇧🇷'
    },
    {
        zh: '英属维京群岛',
        enShort: 'VG',
        enFull: 'British Virgin Islands',
        reg: 'VG|British Virgin Islands'
    },
    { zh: '文莱', enShort: 'BN', enFull: 'Brunei', reg: 'BN|Brunei' },
    {
        zh: '保加利亚',
        enShort: 'BG',
        enFull: 'Bulgaria',
        reg: 'BG|Bulgaria|保加利亚|保加利亞|Bulgaria',
        flag: '🇧🇬'
    },
    {
        zh: '布基纳法索',
        enShort: 'BF',
        enFull: 'Burkina-faso',
        reg: 'BF|Burkina-faso'
    },
    { zh: '布隆迪', enShort: 'BI', enFull: 'Burundi', reg: 'BI|Burundi' },
    {
        zh: '柬埔寨',
        enShort: 'KH',
        enFull: 'Cambodia',
        reg: 'KH|Cambodia|柬埔寨',
        flag: '🇰🇭'
    },
    { zh: '喀麦隆', enShort: 'CM', enFull: 'Cameroon', reg: 'CM|Cameroon' },
    {
        zh: '加拿大',
        enShort: 'CA',
        enFull: 'Canada',
        reg: 'CA|Canada|Canada|CANADA|CAN|Waterloo|加拿大|蒙特利尔|温哥华|楓葉|枫叶|滑铁卢|多伦多|CA',
        flag: '🇨🇦'
    },
    { zh: '佛得角', enShort: 'CV', enFull: 'Cape Verde', reg: 'CV|Cape Verde' },
    {
        zh: '开曼群岛',
        enShort: 'KY',
        enFull: 'Cayman Islands',
        reg: 'KY|Cayman Islands'
    },
    {
        zh: '中非共和国',
        enShort: 'CF',
        enFull: 'Central African Republic',
        reg: 'CF|Central African Republic'
    },
    { zh: '乍得', enShort: 'TD', enFull: 'Chad', reg: 'TD|Chad' },
    {
        zh: '智利',
        enShort: 'CL',
        enFull: 'Chile',
        reg: 'CL|Chile|智利',
        flag: '🇨🇱'
    },
    {
        zh: '中国',
        enShort: 'CN',
        enFull: 'China',
        reg: 'CN|China|CN|China|回国|中国|中國|江苏|北京|上海|广州|深圳|杭州|徐州|青岛|宁波|镇江|back',
        custom: 'CN',
        flag: '🇨🇳'
    },
    {
        zh: '哥伦比亚',
        enShort: 'CO',
        enFull: 'Colombia',
        reg: 'CO|Colombia|哥伦比亚',
        flag: '🇨🇴'
    },
    { zh: '科摩罗', enShort: 'KM', enFull: 'Comoros', reg: 'KM|Comoros' },
    {
        zh: '刚果(布)',
        enShort: 'CG',
        enFull: 'Congo - Brazzaville',
        reg: 'CG|Congo - Brazzaville'
    },
    {
        zh: '刚果(金)',
        enShort: 'CD',
        enFull: 'Congo - Kinshasa',
        reg: 'CD|Congo - Kinshasa'
    },
    {
        zh: '哥斯达黎加',
        enShort: 'CR',
        enFull: 'Costa Rica',
        reg: 'CR|Costa Rica|CR|哥斯达黎加',
        flag: '🇨🇷'
    },
    {
        zh: '克罗地亚',
        enShort: 'HR',
        enFull: 'Croatia',
        reg: 'HR|Croatia|克罗地亚|HR|克羅地亞',
        flag: '🇭🇷'
    },
    {
        zh: '塞浦路斯',
        enShort: 'CY',
        enFull: 'Cyprus',
        reg: 'CY|Cyprus|CY|塞浦路斯',
        flag: '🇨🇾'
    },
    {
        zh: '捷克共和国',
        enShort: 'CZ',
        enFull: 'Czech Republic',
        reg: 'CZ|Czech Republic|Czechia|捷克',
        flag: '🇨🇿'
    },
    {
        zh: '丹麦',
        enShort: 'DK',
        enFull: 'Denmark',
        reg: 'DK|Denmark|DK|DNK|丹麦|丹麥',
        flag: '🇩🇰'
    },
    { zh: '吉布提', enShort: 'DJ', enFull: 'Djibouti', reg: 'DJ|Djibouti' },
    {
        zh: '多米尼加共和国',
        enShort: 'DO',
        enFull: 'Dominican Republic',
        reg: 'DO|Dominican Republic'
    },
    {
        zh: '厄瓜多尔',
        enShort: 'EC',
        enFull: 'Ecuador',
        reg: 'EC|Ecuador|EC|厄瓜多尔',
        flag: '🇪🇨'
    },
    {
        zh: '埃及',
        enShort: 'EG',
        enFull: 'Egypt',
        reg: 'EG|Egypt|埃及',
        flag: '🇪🇬'
    },
    {
        zh: '萨尔瓦多',
        enShort: 'SV',
        enFull: 'EI Salvador',
        reg: 'SV|EI Salvador'
    },
    {
        zh: '赤道几内亚',
        enShort: 'GQ',
        enFull: 'Equatorial Guinea',
        reg: 'GQ|Equatorial Guinea'
    },
    { zh: '厄立特里亚', enShort: 'ER', enFull: 'Eritrea', reg: 'ER|Eritrea' },
    {
        zh: '爱沙尼亚',
        enShort: 'EE',
        enFull: 'Estonia',
        reg: 'EE|Estonia|爱沙尼亚',
        flag: '🇪🇪'
    },
    { zh: '埃塞俄比亚', enShort: 'ET', enFull: 'Ethiopia', reg: 'ET|Ethiopia' },
    { zh: '斐济', enShort: 'FJ', enFull: 'Fiji', reg: 'FJ|Fiji' },
    {
        zh: '芬兰',
        enShort: 'FI',
        enFull: 'Finland',
        reg: 'FI|Finland|Finland|芬兰|芬蘭|赫尔辛基',
        flag: '🇫🇮'
    },
    { zh: '加蓬', enShort: 'GA', enFull: 'Gabon', reg: 'GA|Gabon' },
    { zh: '冈比亚', enShort: 'GM', enFull: 'Gambia', reg: 'GM|Gambia' },
    {
        zh: '格鲁吉亚',
        enShort: 'GE',
        enFull: 'Georgia',
        reg: 'GE|Georgia|格魯吉亞|格鲁吉亚',
        flag: '🇬🇪'
    },
    { zh: '加纳', enShort: 'GH', enFull: 'Ghana', reg: 'GH|Ghana' },
    {
        zh: '希腊',
        enShort: 'GR',
        enFull: 'Greece',
        reg: 'GR|Greece|希腊|希臘',
        flag: '🇬🇷'
    },
    { zh: '格陵兰', enShort: 'GL', enFull: 'Greenland', reg: 'GL|Greenland' },
    { zh: '危地马拉', enShort: 'GT', enFull: 'Guatemala', reg: 'GT|Guatemala' },
    { zh: '几内亚', enShort: 'GN', enFull: 'Guinea', reg: 'GN|Guinea' },
    { zh: '圭亚那', enShort: 'GY', enFull: 'Guyana', reg: 'GY|Guyana' },
    { zh: '海地', enShort: 'HT', enFull: 'Haiti', reg: 'HT|Haiti' },
    { zh: '洪都拉斯', enShort: 'HN', enFull: 'Honduras', reg: 'HN|Honduras' },
    {
        zh: '匈牙利',
        enShort: 'HU',
        enFull: 'Hungary',
        reg: 'HU|Hungary|匈牙利|Hungary',
        flag: '🇭🇺'
    },
    {
        zh: '冰岛',
        enShort: 'IS',
        enFull: 'Iceland',
        reg: 'IS|Iceland|IS|ISL|冰岛|冰島',
        flag: '🇮🇸'
    },
    {
        zh: '印度',
        enShort: 'IN',
        enFull: 'India',
        reg: 'IN|India|India|IND|INDIA|印度|孟买|MFumbai',
        flag: '🇮🇳'
    },
    {
        zh: '印度尼西亚',
        enShort: 'ID',
        enFull: 'Indonesia',
        reg: 'ID|Indonesia|Indonesia|印尼|印度尼西亚|雅加达',
        flag: '🇮🇩'
    },
    {
        zh: '伊朗',
        enShort: 'IR',
        enFull: 'Iran',
        reg: 'IR|Iran|IR|伊朗',
        flag: '🇮🇷'
    },
    { zh: '伊拉克', enShort: 'IQ', enFull: 'Iraq', reg: 'IQ|Iraq' },
    {
        zh: '爱尔兰',
        enShort: 'IE',
        enFull: 'Ireland',
        reg: 'Ireland|Ireland|IRELAND|爱尔兰|愛爾蘭|都柏林',
        flag: '🇮🇪'
    },
    {
        zh: '马恩岛',
        enShort: 'IM',
        enFull: 'Isle of Man',
        reg: 'IM|Isle of Man|马恩岛|馬恩島',
        flag: '🇮🇲'
    },
    {
        zh: '以色列',
        enShort: 'IL',
        enFull: 'Israel',
        reg: 'IL|Israel|Israel|以色列',
        flag: '🇮🇱'
    },
    {
        zh: '意大利',
        enShort: 'IT',
        enFull: 'Italy',
        reg: 'IT|Italy|Italy|IT|Nachash|意大利|米兰|義大利',
        flag: '🇮🇹'
    },
    {
        zh: '科特迪瓦',
        enShort: 'CI',
        enFull: 'Ivory Coast',
        reg: 'CI|Ivory Coast'
    },
    { zh: '牙买加', enShort: 'JM', enFull: 'Jamaica', reg: 'JM|Jamaica' },
    {
        zh: '约旦',
        enShort: 'JO',
        enFull: 'Jordan',
        reg: 'JO|Jordan|JO|约旦',
        flag: '🇯🇴'
    },
    {
        zh: '哈萨克斯坦',
        enShort: 'KZ',
        enFull: 'Kazakstan',
        reg: 'KZ|Kazakstan|哈萨克斯坦|哈萨克',
        flag: '🇰🇿'
    },
    {
        zh: '肯尼亚',
        enShort: 'KE',
        enFull: 'Kenya',
        reg: 'KE|Kenya|KE|肯尼亚',
        flag: '🇰🇪'
    },
    { zh: '科威特', enShort: 'KW', enFull: 'Kuwait', reg: 'KW|Kuwait' },
    {
        zh: '吉尔吉斯斯坦',
        enShort: 'KG',
        enFull: 'Kyrgyzstan',
        reg: 'KG|Kyrgyzstan'
    },
    { zh: '老挝', enShort: 'LA', enFull: 'Laos', reg: 'LA|Laos' },
    {
        zh: '拉脱维亚',
        enShort: 'LV',
        enFull: 'Latvia',
        reg: 'LV|Latvia|Latvia|Latvija|拉脱维亚',
        flag: '🇱🇻'
    },
    { zh: '黎巴嫩', enShort: 'LB', enFull: 'Lebanon', reg: 'LB|Lebanon' },
    { zh: '莱索托', enShort: 'LS', enFull: 'Lesotho', reg: 'LS|Lesotho' },
    { zh: '利比里亚', enShort: 'LR', enFull: 'Liberia', reg: 'LR|Liberia' },
    { zh: '利比亚', enShort: 'LY', enFull: 'Libya', reg: 'LY|Libya' },
    {
        zh: '立陶宛',
        enShort: 'LT',
        enFull: 'Lithuania',
        reg: 'LT|Lithuania|LT|立陶宛',
        flag: '🇱🇹'
    },
    {
        zh: '卢森堡',
        enShort: 'LU',
        enFull: 'Luxembourg',
        reg: 'LU|Luxembourg|卢森堡',
        flag: '🇱🇺'
    },
    {
        zh: '马其顿',
        enShort: 'MK',
        enFull: 'Macedonia',
        reg: 'MK|Macedonia|马其顿|馬其頓',
        flag: '🇲🇰'
    },
    {
        zh: '马达加斯加',
        enShort: 'MG',
        enFull: 'Madagascar',
        reg: 'MG|Madagascar'
    },
    { zh: '马拉维', enShort: 'MW', enFull: 'Malawi', reg: 'MW|Malawi' },
    {
        zh: '马来西亚',
        enShort: 'MY',
        enFull: 'Malaysia',
        reg: 'MY|Malaysia|马来西亚',
        flag: '🇲🇾'
    },
    { zh: '马尔代夫', enShort: 'MV', enFull: 'Maldives', reg: 'MV|Maldives' },
    { zh: '马里', enShort: 'ML', enFull: 'Mali', reg: 'ML|Mali' },
    {
        zh: '马耳他',
        enShort: 'MT',
        enFull: 'Malta',
        reg: 'MT|Malta|马耳他',
        flag: '🇲🇹'
    },
    {
        zh: '毛利塔尼亚',
        enShort: 'MR',
        enFull: 'Mauritania',
        reg: 'MR|Mauritania'
    },
    { zh: '毛里求斯', enShort: 'MU', enFull: 'Mauritius', reg: 'MU|Mauritius' },
    {
        zh: '墨西哥',
        enShort: 'MX',
        enFull: 'Mexico',
        reg: 'MX|Mexico|MEX|MX|墨西哥',
        flag: '🇲🇽'
    },
    {
        zh: '摩尔多瓦',
        enShort: 'MD',
        enFull: 'Moldova',
        reg: 'MD|Moldova|摩爾多瓦|MD|摩尔多瓦',
        flag: '🇲🇩'
    },
    { zh: '摩纳哥', enShort: 'MC', enFull: 'Monaco', reg: 'MC|Monaco' },
    {
        zh: '蒙古',
        enShort: 'MN',
        enFull: 'Mongolia',
        reg: 'MN|Mongolia|蒙古',
        flag: '🇲🇳'
    },
    {
        zh: '黑山共和国',
        enShort: 'ME',
        enFull: 'Montenegro',
        reg: 'ME|Montenegro'
    },
    {
        zh: '摩洛哥',
        enShort: 'MA',
        enFull: 'Morocco',
        reg: 'MA|Morocco|MA|摩洛哥',
        flag: '🇲🇦'
    },
    { zh: '莫桑比克', enShort: 'MZ', enFull: 'Mozambique', reg: 'MZ|Mozambique' },
    {
        zh: '缅甸',
        enShort: 'MM',
        enFull: 'Myanmar(Burma)',
        reg: 'MM|Myanmar(Burma)',
        flag: '🇲🇲'
    },
    { zh: '纳米比亚', enShort: 'NA', enFull: 'Namibia', reg: 'NA|Namibia' },
    {
        zh: '尼泊尔',
        enShort: 'NP',
        enFull: 'Nepal',
        reg: 'NP|Nepal|尼泊尔',
        flag: '🇳🇵'
    },
    {
        zh: '荷兰',
        enShort: 'NL',
        enFull: 'Netherlands',
        reg: 'NL|Netherlands|NL|Netherlands|荷兰|荷蘭|尼德蘭|阿姆斯特丹',
        flag: '🇳🇱'
    },
    {
        zh: '新西兰',
        enShort: 'NZ',
        enFull: 'New Zealand',
        reg: 'NZ|New Zealand|新西蘭|新西兰',
        flag: '🇳🇿'
    },
    { zh: '尼加拉瓜', enShort: 'NI', enFull: 'Nicaragua', reg: 'NI|Nicaragua' },
    { zh: '尼日尔', enShort: 'NE', enFull: 'Niger', reg: 'NE|Niger' },
    {
        zh: '尼日利亚',
        enShort: 'NG',
        enFull: 'Nigeria',
        reg: 'NG|Nigeria|尼日利亚|NG|尼日利亞',
        flag: '🇳🇬'
    },
    {
        zh: '朝鲜',
        enShort: 'KP',
        enFull: 'North Korea',
        reg: 'KP|North Korea|KP|朝鲜',
        flag: '🇰🇵'
    },
    {
        zh: '挪威',
        enShort: 'NO',
        enFull: 'Norway',
        reg: 'NO|Norway|Norway|挪威|NO',
        flag: '🇳🇴'
    },
    { zh: '阿曼', enShort: 'OM', enFull: 'Oman', reg: 'OM|Oman' },
    {
        zh: '巴基斯坦',
        enShort: 'PK',
        enFull: 'Pakistan',
        reg: 'PK|Pakistan|巴基斯坦',
        flag: '🇵🇰'
    },
    {
        zh: '巴拿马',
        enShort: 'PA',
        enFull: 'Panama',
        reg: 'PA|Panama|PA|巴拿马',
        flag: '🇵🇦'
    },
    { zh: '巴拉圭', enShort: 'PY', enFull: 'Paraguay', reg: 'PY|Paraguay' },
    {
        zh: '秘鲁',
        enShort: 'PE',
        enFull: 'Peru',
        reg: 'PE|Peru|秘鲁|祕魯',
        flag: '🇵🇪'
    },
    {
        zh: '菲律宾',
        enShort: 'PH',
        enFull: 'Philippines',
        reg: 'PH|Philippines|PH|Philippines|菲律宾|菲律賓',
        flag: '🇵🇭'
    },
    {
        zh: '波兰',
        enShort: 'PL',
        enFull: 'Poland',
        reg: 'Poland|POL|波兰|波蘭',
        flag: '🇵🇱'
    },
    {
        zh: '葡萄牙',
        enShort: 'PT',
        enFull: 'Portugal',
        reg: 'PT|Portugal|葡萄牙',
        flag: '🇵🇹'
    },
    {
        zh: '波多黎各',
        enShort: 'PR',
        enFull: 'Puerto Rico',
        reg: 'PR|Puerto Rico|PR|波多黎各',
        flag: '🇵🇷'
    },
    { zh: '卡塔尔', enShort: 'QA', enFull: 'Qatar', reg: 'QA|Qatar' },
    { zh: '留尼旺', enShort: 'RE', enFull: 'Reunion', reg: 'RE|Reunion' },
    {
        zh: '罗马尼亚',
        enShort: 'RO',
        enFull: 'Romania',
        reg: 'RO|Romania|RO|罗马尼亚',
        flag: '🇷🇴'
    },
    {
        zh: '白俄罗斯',
        enShort: 'BY',
        enFull: 'Belarus',
        reg: 'BY|Belarus|BY|白俄|白俄罗斯',
        flag: '🇧🇾'
    },
    {
        zh: '俄罗斯',
        enShort: 'RU',
        enFull: 'Russia',
        reg: 'RU|Russia|RU|Russia|俄罗斯|俄国|俄羅斯|伯力|莫斯科|圣彼得堡|西伯利亚|新西伯利亚|京俄|杭俄|廣俄|滬俄|广俄|沪俄|Moscow',
        flag: '🇷🇺'
    },
    { zh: '卢旺达', enShort: 'RW', enFull: 'Rwanda', reg: 'RW|Rwanda' },
    { zh: '圣马力诺', enShort: 'SM', enFull: 'San Marino', reg: 'SM|San Marino' },
    {
        zh: '沙特阿拉伯',
        enShort: 'SA',
        enFull: 'Saudi Arabia',
        reg: 'SA|Saudi Arabia'
    },
    { zh: '塞内加尔', enShort: 'SN', enFull: 'Senegal', reg: 'SN|Senegal' },
    {
        zh: '塞尔维亚',
        enShort: 'RS',
        enFull: 'Serbia',
        reg: 'RS|Serbia|RS|塞尔维亚',
        flag: '🇷🇸'
    },
    {
        zh: '塞拉利昂',
        enShort: 'SL',
        enFull: 'Sierra Leone',
        reg: 'SL|Sierra Leone'
    },
    {
        zh: '斯洛伐克',
        enShort: 'SK',
        enFull: 'Slovakia',
        reg: 'SK|Slovakia|斯洛伐克|SK',
        flag: '🇸🇰'
    },
    {
        zh: '斯洛文尼亚',
        enShort: 'SI',
        enFull: 'Slovenia',
        reg: 'SI|Slovenia|SI|斯洛文尼亚',
        flag: '🇸🇮'
    },
    { zh: '索马里', enShort: 'SO', enFull: 'Somalia', reg: 'SO|Somalia' },
    {
        zh: '南非',
        enShort: 'ZA',
        enFull: 'South Africa',
        reg: 'ZA|South Africa|South Africa|南非',
        flag: '🇿🇦'
    },
    {
        zh: '西班牙',
        enShort: 'ES',
        enFull: 'Spain',
        reg: 'ES|Spain|ES|西班牙|Spain',
        flag: '🇪🇸'
    },
    { zh: '斯里兰卡', enShort: 'LK', enFull: 'Sri Lanka', reg: 'LK|Sri Lanka' },
    { zh: '苏丹', enShort: 'SD', enFull: 'Sudan', reg: 'SD|Sudan' },
    { zh: '苏里南', enShort: 'SR', enFull: 'Suriname', reg: 'SR|Suriname' },
    { zh: '斯威士兰', enShort: 'SZ', enFull: 'Swaziland', reg: 'SZ|Swaziland' },
    {
        zh: '瑞典',
        enShort: 'SE',
        enFull: 'Sweden',
        reg: 'SE|Sweden|SE|Sweden|瑞典',
        flag: '🇸🇪'
    },
    {
        zh: '瑞士',
        enShort: 'CH',
        enFull: 'Switzerland',
        reg: 'CH|Switzerland|瑞士|苏黎世|Switzerland|Zurich',
        flag: '🇨🇭'
    },
    { zh: '叙利亚', enShort: 'SY', enFull: 'Syria', reg: 'SY|Syria' },
    { zh: '塔吉克斯坦', enShort: 'TJ', enFull: 'Tajikstan', reg: 'TJ|Tajikstan' },
    { zh: '坦桑尼亚', enShort: 'TZ', enFull: 'Tanzania', reg: 'TZ|Tanzania' },
    {
        zh: '泰国',
        enShort: 'TH',
        enFull: 'Thailand',
        reg: 'TH|Thailand|TH|Thailand|泰国|泰國|曼谷',
        flag: '🇹🇭'
    },
    { zh: '多哥', enShort: 'TG', enFull: 'Togo', reg: 'TG|Togo' },
    { zh: '汤加', enShort: 'TO', enFull: 'Tonga', reg: 'TO|Tonga' },
    {
        zh: '特立尼达和多巴哥',
        enShort: 'TT',
        enFull: 'Trinidad and Tobago',
        reg: 'TT|Trinidad and Tobago'
    },
    {
        zh: '突尼斯',
        enShort: 'TN',
        enFull: 'Tunisia',
        reg: 'TN|Tunisia|TN|突尼斯',
        flag: '🇹🇳'
    },
    {
        zh: '土耳其',
        enShort: 'TR',
        enFull: 'Turkey',
        reg: 'TR|Turkey|TR|Turkey|土耳其|伊斯坦布尔',
        flag: '🇹🇷'
    },
    {
        zh: '土库曼斯坦',
        enShort: 'TM',
        enFull: 'Turkmenistan',
        reg: 'TM|Turkmenistan'
    },
    {
        zh: '美属维尔京群岛',
        enShort: 'VI',
        enFull: 'U.S. Virgin Islands',
        reg: 'VI|U.S. Virgin Islands'
    },
    { zh: '乌干达', enShort: 'UG', enFull: 'Uganda', reg: 'UG|Uganda' },
    {
        zh: '乌克兰',
        enShort: 'UA',
        enFull: 'Ukraine',
        reg: 'UA|Ukraine|烏克蘭|乌克兰',
        flag: '🇺🇦'
    },
    {
        zh: '阿联酋',
        enShort: 'AE',
        enFull: 'United Arab Emirates',
        reg: 'AE|United Arab Emirates|United Arab Emirates|阿联酋|迪拜|阿联酉|阿拉伯联合酋长国',
        flag: '🇦🇪'
    },
    {
        zh: '乌拉圭',
        enShort: 'UY',
        enFull: 'Uruguay',
        reg: 'UY|Uruguay|UY|乌拉圭',
        flag: '🇺🇾'
    },
    {
        zh: '乌兹别克斯坦',
        enShort: 'UZ',
        enFull: 'Uzbekistan',
        reg: 'UZ|Uzbekistan'
    },
    {
        zh: '梵蒂冈城',
        enShort: 'VA',
        enFull: 'Vatican City',
        reg: 'VA|Vatican City'
    },
    {
        zh: '委内瑞拉',
        enShort: 'VE',
        enFull: 'Venezuela',
        reg: 'VE|Venezuela|VE|委内瑞拉',
        flag: '🇻🇪'
    },
    {
        zh: '越南',
        enShort: 'VN',
        enFull: 'Vietnam',
        reg: 'VN|Vietnam|VN|越南|胡志明市',
        flag: '🇻🇳'
    },
    { zh: '也门', enShort: 'YE', enFull: 'Yemen', reg: 'YE|Yemen', flag: '🇾🇪' },
    { zh: '南斯拉夫', enShort: 'YU', enFull: 'Yugoslavia', reg: 'YU|Yugoslavia' },
    { zh: '扎伊尔', enShort: 'ZR', enFull: 'Zaire', reg: 'ZR|Zaire' },
    { zh: '赞比亚', enShort: 'ZM', enFull: 'Zambia', reg: 'ZM|Zambia' },
    { zh: '津巴布韦', enShort: 'ZW', enFull: 'Zimbabwe', reg: 'ZW|Zimbabwe' },
    {
        zh: '孟加拉国',
        enShort: 'BD',
        enFull: 'Bangladesh',
        reg: 'BD|Bangladesh|BD|孟加拉',
        flag: '🇧🇩'
    },
    {
        zh: '密歇根',
        enShort: 'Michigan',
        enFull: 'Michigan',
        reg: 'Michigan|Michigan'
    },
    {
        zh: '孟买',
        enShort: 'Mumbai',
        enFull: 'Mumbai',
        reg: 'Mumbai|Mumbai|India|IND|INDIA|印度|孟买|MFumbai',
        flag: '🇮🇳'
    },
    {
        zh: '法兰克福',
        enShort: 'Frankfurt',
        enFull: 'Frankfurt',
        reg: 'Frankfurt|Frankfurt|DE|German|GERMAN|德国|德國|法兰克福|京德|滬德|廣德|沪德|广德|Frankfurt',
        flag: '🇩🇪'
    },
    {
        zh: '苏黎世',
        enShort: 'Zurich',
        enFull: 'Zurich',
        reg: 'Zurich|Zurich|瑞士|苏黎世|Switzerland|Zurich',
        flag: '🇨🇭'
    }
];
var modifiedList = [
    {
        zh: '实验',
        enShort: 'EXP',
        enFull: 'EXP',
        custom: 'EXP',
        reg: '实验',
        action: 'rename'
    },
    {
        zh: '标准',
        enShort: 'STD',
        enFull: 'STD',
        custom: 'STD',
        reg: '标准',
        action: 'rename'
    },
    {
        zh: '高级',
        enShort: 'PRO',
        enFull: 'PRO',
        custom: 'PRO',
        reg: '高级',
        action: 'rename'
    },
    {
        zh: '购物',
        enShort: 'Shop',
        enFull: 'Shoping',
        custom: 'Shop',
        reg: '购物',
        action: 'rename'
    },
    {
        zh: 'Premium',
        enShort: 'Pre',
        enFull: 'Premium',
        custom: 'Premium',
        reg: 'Premium',
        action: 'rename'
    },
    {
        zh: '直连',
        enShort: 'Direct',
        enFull: 'Direct',
        custom: 'Direct',
        reg: '直连',
        action: 'rename'
    },
    {
        zh: '沪日',
        enShort: 'SH',
        enFull: 'SH-Japan',
        custom: 'Shanghai',
        reg: '沪日',
        action: 'rename'
    },
    {
        zh: '沪韩',
        enShort: 'SH',
        enFull: 'SH-Korea',
        custom: 'Shanghai',
        reg: '沪韩',
        action: 'rename'
    },
    {
        zh: '沪美',
        enShort: 'SH',
        enFull: 'SH-United States',
        custom: 'Shanghai',
        reg: '沪美',
        action: 'rename'
    },
    {
        zh: '广港',
        enShort: 'GZ',
        enFull: 'GZ-Hong Kong',
        custom: 'Guang',
        reg: '广港',
        action: 'rename'
    },
    {
        zh: '广新',
        enShort: 'GZ',
        enFull: 'GZ-Singapore',
        custom: 'Guang',
        reg: '广新',
        action: 'rename'
    },
    {
        zh: '深港',
        enShort: 'SZ',
        enFull: 'SZ-Hong Kong',
        custom: 'Shen',
        reg: '深港',
        action: 'rename'
    },
    {
        zh: '莞港',
        enShort: 'DG',
        enFull: 'DG-Hong Kong',
        custom: 'Wan',
        reg: '莞港',
        action: 'rename'
    },
    {
        zh: '负载均衡',
        enShort: 'LB',
        enFull: 'Load Balanced',
        custom: 'LB',
        reg: 'Load Balanced|LB',
        action: 'rename'
    },
    {
        zh: '专线',
        enShort: 'Spec',
        enFull: 'Spec',
        custom: 'Spec',
        reg: '专线|IPLC',
        action: 'rename'
    },
    {
        zh: '核心',
        enShort: 'Kern',
        enFull: 'Kern',
        custom: 'Kern',
        reg: '核心',
        action: 'rename'
    },
    {
        zh: '边缘',
        enShort: 'Edge',
        enFull: 'Edge',
        custom: 'Edge',
        reg: '边缘',
        action: 'rename'
    },
    {
        zh: '商宽',
        enShort: 'BIZ',
        enFull: 'BIZ',
        custom: 'BIZ',
        reg: '商宽',
        action: 'rename'
    },
    {
        zh: '家宽',
        enShort: 'FAM',
        enFull: 'FAM',
        custom: 'FAM',
        reg: '家宽',
        action: 'rename'
    },
    {
        zh: '流媒体',
        enShort: 'Stream',
        enFull: 'Stream',
        custom: 'Stream',
        reg: 'stream|懒人',
        action: 'rename'
    }
];
var deleteList = [
    {
        zh: '无用节点',
        enFull: '',
        enShort: '',
        reg: '过期|流量|时间|应急|expire|traffic|更新|测速|官网|http'
    }
];
var actionObject = {
    locationList: locationList,
    modifiedList: modifiedList,
    deleteList: deleteList
};

function operator(proxies) {
    var counter = {};
    var nameMap = {};
    var airport = '';
    var test = false;
    if ($arguments) {
        airport = $arguments['airport'];
        test = $arguments['test'];
    }
    var testResultList = [];
    var resultList = [];
    for (var i = 0; i < proxies.length; i++) {
        var proxy = proxies[i];
        var number = getNum(proxy.name);
        var reResult = reName(proxy.name, actionObject);
        if (reResult.action === 'delete') {
            testResultList.push(reResult);
            continue;
        }
        if (!number) {
            if (counter[reResult.location]) {
                counter[reResult.location] += 1;
            }
            else {
                counter[reResult.location] = 1;
            }
            number = counter[reResult.location];
        }
        var proxyName = "".concat(reResult.flag).concat(airport ? '「' + airport + '」' : '', " ").concat(reResult.location, " ").concat(reResult.modified, " ").concat(reResult.origin === reResult.location ? '' : number);
        if (nameMap[proxyName]) {
            nameMap[proxyName] += 1;
            proxy.name = proxyName + '_' + nameMap[proxyName];
        }
        else {
            nameMap[proxyName] = 1;
            proxy.name = proxyName;
        }
        resultList.push(proxy);
        testResultList.push(__assign(__assign({}, reResult), { name: proxy.name }));
    }
    if (test) {
        return testResultList;
    }
    else {
        return resultList;
    }
}

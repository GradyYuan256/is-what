## 介绍

这是一个快速帮助你判断数据类型的 JavaScript 的库。

## 安装

```bash
npm install is-what-is
```

## 使用

```javascript
// use in node.js
const iwi =  require('is-what-is');

console.log(iwi.isArray([]));
console.log(iwi.isNumber(666));

// use in browser with module script
import {isArray} from 'is-what-is'

console.log(isArray([]))
console.log(isNumber([]))
```

## API

### General
- `isNull(value)`
- `isUndefined(value)`
- `isDefined(value)`
- `isNullOrUndefined`
- `isPrimitive(value)`
- `isInfinity(value)`
- `isEmpty(value)`

### Number
- `isNumber(value)`

### String
- `isString(value)`

### Boolean
- `isBoolean(value)`

### BigInt
- `isBigInt(value)`

### Symbol
- `isSymbol(value)`

### Object
- `isObject(value)`

### Array
- `isArray(value)`
- `isArguments(value)`

### Function
- `isFunction(value)`

### RegExp
- `isRegExp(value)`

### Date
- `isDate(value)`

### Map
- `isMap(value)`

### WeakMap
- `isWeakMap(value)`

### Set
- `isSet(value)`

### WeakSet
- `isWeakSet(value)`

### Error
- `isError(value)`

### Promise
- `isPromise(value)`

### Base64
- `isBase64(value)`

### Hex
- `isHex(value)`

### Html & Node
- `isWindow(value)`
- `isHTMLDocument(value)`
- `isHTMLCollection(value)`
- `isNodeList(value)`
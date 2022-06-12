const base64Regex = /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/;
const hexRegex = /^[A-Fa-f0-9]+$/;

export const isNumber =  (value) => {
    return getType(value) === 'Number'
}

export const isString =  (value) => {
    return getType(value) === 'String'
}

export const isBoolean =  (value) => {
    return getType(value) === 'Boolean'
}

export const isBigInt =  (value) => {
    return getType(value) === 'BigInt'
}

export const isNull =  (value) => {
    return getType(value) === 'Null'
}

export const isUndefined =  (value) => {
    return getType(value) === 'Undefined'
}

export const isSymbol =  (value) => {
    return getType(value) === 'Symbol'
}

export const isObject =  (value) => {
    return getType(value) === 'Object'
}

export const isArray =  (value) => {
    return getType(value) === 'Array'
}

export const isArguments =  (value) => {
    return getType(value) === 'Arguments'
}

export const isFunction =  (value) => {
    return getType(value) === 'Function'
}

export const isRegExp =  (value) => {
    return getType(value) === 'RegExp'
}

export const isDate =  (value) => {
    return getType(value) === 'Date'
}

export const isMap =  (value) => {
    return getType(value) === 'Map'
}

export const isWeakMap =  (value) => {
    return getType(value) === 'WeakMap'
}

export const isSet =  (value) => {
    return getType(value) === 'Set'
}

export const isWeakSet =  (value) => {
    return getType(value) === 'WeakSet'
}

export const isError =  (value) => {
    return getType(value) === 'Error'
}

export const isPromise =  (value) => {
    return getType(value) === 'Promise'
}

export const isDefined =  (value) => {
    return !isUndefined(value)
}

export const isWindow =  (value) => {
    return getType(value) === 'Window'
}

export const isHTMLDocument =  (value) => {
    return getType(value) === 'HTMLDocument'
}

export const isHTMLCollection =  (value) => {
    return getType(value) === 'HTMLCollection'
}

export const isNodeList =  (value) => {
    return getType(value) === 'NodeList'
}

export const isNullOrUndefined = (value) => {
    return IsNull(value) || IsUndefined(value)
}

export const isPrimitive = (value) => {
    if (!value) {
        return true;
    }
    if (typeof value === 'object' || isObject(value) || isFunction(value)) {
        return false;
    }
    return true;
}

export const isInfinity = (value) => {
    return value === Infinity || value === -Infinity;
}

export const isEmpty = (value) => {
    if (isArray(value) || isArguments(value) || isString(value)) {
        return value.length === 0;
    }

    if (isObject(value)) {
        const own = Object.prototype.hasOwnProperty
        for (key in value) {
            if (own.call(value, key)) {
                return false;
            }
        }
        return true;
    }

    return !value;
}

export const isBase64 = (value) => {
    return isString(value) && (!value || base64Regex.test(value))
}

export const isHex = (value) => {
    return isString(value) && (!value || hexRegex.test(value))
}

export const getType = (value) => {
    const originType = Object.prototype.toString.call(value);
    const spaceIndex = originType.indexOf(' ');
    return originType.slice(spaceIndex + 1, -1);
}

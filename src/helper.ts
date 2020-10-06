const AsyncFunction = Object.getPrototypeOf(async () => {}).constructor;

export { AsyncFunction };

export function isUndefined(v: any){
  return undefined === v;
}

export function isNull(v: any){
  return null === v;
}

export function isValue(v){
  return !isUndefined(v) && !isNull(v);
}

export function isString(str: any){
  return isValue(str) && str.constructor === String;
}

export function isNumber(num){
  return isValue(num) && typeof num === 'number';
}

export function isAsync(fn){
  return isValue(fn) && fn.constructor === AsyncFunction;
}

export function isFunction(fn: any){
  return !!fn && (fn.constructor === Function || isAsync(fn));
}

export function isArray(arr: any){
  return Array.isArray(arr);
}

export function isObject(obj: any){
  return typeof obj === 'object' && !isNull(obj) && !isArray(obj);
}

export function isBoolean(bool){
  return !!~[ !1, !0 ].indexOf(bool);
}
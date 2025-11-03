export function canInvoke(obj, methodName) {
  return (
    obj !== null && obj !== undefined && typeof obj[methodName] === 'function'
  );
}

/**
 * This is taken from Ember.js source code https://github.com/emberjs/ember.js/blob/v3.28.12/packages/%40ember/-internals/utils/lib/invoke.ts#L21
 */
export function tryInvoke(obj, methodName, args) {
  if (canInvoke(obj, methodName)) {
    let method = obj[methodName];
    return method.apply(obj, args);
  }
}

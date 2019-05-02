export function elementWidth(ref) {
  return ref && ref instanceof Element ? ref.clientWidth : 0;
}

export function breakPointName(size) {
  if (typeof size === 'number' && isFinite(size)) {
    if (size < 480) {
      return 'smaller';
    } else if (size < 768) {
      return 'small';
    } else if (size < 1680) {
      return 'medium';
    }
  }
  return 'large';
}

export function sizeValidator(value, withAuto = false, withCustom = false) {
  let options = ['large', 'medium', 'small', 'smaller'];
  if (withAuto) {
    options = [...options, 'auto'];
  }
  if (withCustom) {
    options = [...options, 'custom'];
  }
  return options.includes(value);
}

export function hasAlternativeMaximizedUrl(portletDesc) {
  return portletDesc?.parameters?.alternativeMaximizedLink?.value;
}

export function getRenderUrl(portletDesc, context) {
  return portletDesc?.parameters?.alternativeMaximizedLink?.value
    ? portletDesc.parameters.alternativeMaximizedLink.value
    : context + '/p/' + portletDesc.fname;
}

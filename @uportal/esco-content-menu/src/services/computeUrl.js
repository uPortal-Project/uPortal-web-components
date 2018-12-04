export default function computeUrl(url) {
  if (url != null && !url.startsWith('http')) {
    return process.env.VUE_APP_PORTAL_BASE_URL + url;
  }
  return url;
}

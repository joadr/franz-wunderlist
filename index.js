module.exports = Franz =>
  class Wunderlist extends Franz {
    overrideUserAgent() {
      return window.navigator.userAgent.replace(/(Franz|Electron)([^\s]+\s)/g, '')
    }
  }

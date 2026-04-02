const modelTargetData = require('./targets/model-target.js')
const videoTargetData = require('./targets/video-target.js')

const onxrloaded = () => {
  if (typeof XR8 === 'undefined' || !XR8.XrController) {
    console.log('XR8 not loaded')
    return
  }
  console.log('XR8 loaded')
  XR8.XrController.configure({
    imageTargetData: [modelTargetData, videoTargetData],
  })
}
window.XR8 ? onxrloaded() : window.addEventListener('xrloaded', onxrloaded)

const onxrloaded = () => {
    XR8.XrController.configure({
        imageTargetData: [
        require('targets/model-target.json'),
        require('targets/video-target.json'),
        ],
    })
}
window.XR8 ? onxrloaded() : window.addEventListener('xrloaded', onxrloaded)
var classNames = [];
var mobile =false;
var loaded = false;
if (navigator.userAgent.match(/(iPad|iPhone|iPod)/i)) {
    classNames.push('device-ios');
    mobile = false;
}
if (navigator.userAgent.match(/android/i))  {
    classNames.push('device-android');
    mobile = false;
}

var html = document.getElementsByTagName('html')[0];

if (classNames.length) classNames.push('on-device');
if (html.classList) html.classList.add.apply(html.classList, classNames);
window.showIframe = function() {
    if(loaded) {
        return;
    }
    var URL = 'demo';
    if(mobile ) {
        location.href=URL;
        return;
    }
    document.getElementById('tablet-content').innerHTML='<iframe border="0" src="' + URL +  '"></iframe>';
    loaded = true;
}
var classNames = [];
var mobile =false;
var loaded = false;
if (navigator.userAgent.match(/(iPad|iPhone|iPod)/i)) {
    classNames.push('device-ios');
    mobile = true;
}
if (navigator.userAgent.match(/android/i))  {
    classNames.push('device-android');
    mobile = true;
}

var html = document.getElementsByTagName('html')[0];

if (classNames.length) classNames.push('on-device');
if (html.classList) html.classList.add.apply(html.classList, classNames);
function doScrolling(elementY, duration) {
    var startingY = window.pageYOffset;
    var diff = elementY - startingY;
    var start;

    // Bootstrap our animation - it will get called right before next frame shall be rendered.
    window.requestAnimationFrame(function step(timestamp) {
        if (!start) start = timestamp;
        // Elapsed milliseconds since start of scrolling.
        var time = timestamp - start;
        // Get percent of completion in range [0, 1].
        var percent = Math.min(time / duration, 1);

        window.scrollTo(0, startingY + diff * percent);

        // Proceed with animation as long as we wanted it to.
        if (time < duration) {
            window.requestAnimationFrame(step);
        }
    })
}
window.showIframe = function() {
    if(loaded) {
        return;
    }
    var URL = 'demo';
    if(navigator.userAgent.match(/(iPad|iPhone|iPod)/i) || navigator.userAgent.match(/android/i) ) {
        location.href=URL;
        return;
    }
    document.getElementById('tablet-content').innerHTML='<iframe border="0" src="' + URL +  '"></iframe>';
    loaded = true;
}
window.showDemo = function() {
    doScrolling(document.getElementById('tablet-content').getBoundingClientRect().y,200);
    showIframe();
}
$(document).ready(function(){
    function calcPageHeight (doc) {
        var	sHeight = Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight);
        return sHeight.toString();
    };
    calcPageHeight(document);

    if (top && top.location !== self.location) {
        if ((navigator.appName === 'Microsoft Internet Explorer' 
            && navigator.appVersion .split(';')[1].replace(/[ ]/g, '') === 'MSIE7.0') 
            ||
            (navigator.appName === 'Microsoft Internet Explorer' 
                && navigator.appVersion .split(';')[1].replace(/[ ]/g, '') === 'MSIE6.0')) {
            if (top.name) {
                top.name = calcPageHeight(document);
            }
        } else {
            if (top.postMessage) {
                window.attachEvent ? window.attachEvent('onmessage', function (event) {
                    top.postMessage(calcPageHeight(document) + 'px', '*');
                }) : window.addEventListener('message', function (event) {
                    top.postMessage(calcPageHeight(document) + 'px', '*');
                }, false);
                top.postMessage(0, '*');
            } else if (top.name) {
                top.name = calcPageHeight(document);
            }
        }
    }
})


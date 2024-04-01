var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

if (screenWidth !== 1440) {
    var scale = 1440 / screenWidth;
    document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=1440, initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
}
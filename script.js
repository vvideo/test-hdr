    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    function print(text) {
        document.querySelector('#console').innerHTML += text + '<br/>';
    }

    function getColor() {
        context.drawImage(video, 0, 0);
        return context.getImageData(0, 0, 1, 1).data;
    }

    var video = document.querySelector('video');
    video.onerror = function() {
        var error = document.querySelector('#error');
        error.innerText = video.error.code + ' ' +  video.error.message;
    };

    video.onerror = function() {
        var error = document.querySelector('#error');
        error.innerText = video.error.code + ' ' +  video.error.message;
    };

    video.onplaying = function() {
        print('onplaying');
    }

    video.oncanplay = function() {
        print('oncanplay');
    }

    video.oncanplaythrough = function() {
        print('oncanplaythrough');
        video.play();
    }

    video.ontimeupdate = function() {
        print('ontimeupdate: ' + video.currentTime + ' ' + JSON.stringify(getColor()));
    }

    video.onended = function() {
        print('onended');
    }

    video.onsuspend = function() {
        print('onsuspend');
    }

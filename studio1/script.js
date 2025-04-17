(function(){
    'use strict';
    console.log('reading js');

    const myVideo = document.querySelector('#myVideo');
    const line1 = document.querySelector('#line1');
    const line2 = document.querySelector('#line2');
    const line3 = document.querySelector('#line3');

    const poem = {
    start: [0, 5, 8],
    stop: [4, 7, 10],
    line: [line1, line2, line3]
    }

    const intervalID = setInterval(checkTime, 1000);

    function checkTime() {
        console.log(parseInt(myVideo.currentTime));
      
        for (let i = 0; i < poem.start.length; i++) {
          if (poem.start[i] < myVideo.currentTime && myVideo.currentTime < poem.stop[i]) {
            poem.line[i].className = "showing";
          } else {
            poem.line[i].className = "hidden";
          }
        }
      }

    
      myVideo.addEventListener('mousemove', function(event) {
        var saturation = event.clientX/ window.innerWidth;
        myVideo.style.filter = "saturate(" + saturation + ")";
    });
      
}());
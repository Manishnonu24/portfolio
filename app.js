const video1 = document.getElementById('pv1');
const video2 = document.getElementById('pv2');
const video3 = document.getElementById('pv3');
const hoverSign = document.querySelector(".hover-sign")

const videoList = [video1 , video2 , video3];

videoList.forEach(function(video){
    video.addEventListener('mouseover' , function(){
        video.play();
        hoverSign.classList.add("active")
    })

    video.addEventListener('mousedown' , function(){
        video.pause();
        hoverSign.classList.remove("active")
    })
})
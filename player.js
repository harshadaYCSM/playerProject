const json1 = 'video.json';
const json2 = 'player1.json';

const playButton = document.getElementById('playButton');
playButton.addEventListener('click', function(){
    videoContent.play();
    playerState = "contentPlayback";
    checkButtonState();
});

const pauseButton = document.getElementById('pauseButton');
pauseButton.addEventListener('click', function(){ videoContent.pause() });

const volumeUp = document.getElementById('volumeUp');
volumeUp.addEventListener('click', function(){
    if (videoContent.volume === 1) {
        console.log("max volume")
    } else {
        videoContent.volume += 0.1;
    }
    console.log(videoContent.volume);
    /* vol.innerText = "Volume : " + parseInt(videoContent.volume * 10);*/
});

const volumeDown = document.getElementById('volumeDown');
volumeDown.addEventListener('click', function(){
    if (videoContent.volume  < 0.1) {
        console.log("min volume")
    } else {
        videoContent.volume -= 0.1;
    }
    console.log(videoContent.volume)
    /*vol.innerText = "Volume : " + parseInt(videoContent.volume * 10);*/
});

const speedPlus = document.getElementById('speedPlus');
speedPlus.addEventListener('click', function(){
    if (videoContent.playbackRate < 15) {
        videoContent.playbackRate += 1; //max play back rate = 15
    }
    console.log(videoContent.playbackRate);
});

const speedMinus = document.getElementById('speedMinus');
speedMinus.addEventListener('click', function(){
    if (videoContent.playbackRate < 15) {
        videoContent.playbackRate += 1; //max play back rate = 15
    }
    console.log(videoContent.playbackRate);
});
playerInit();

function playerInit() {
    loadJSON(json2,function(response) {
        const playerInfo = JSON.parse(response); //JSON info
        console.log(playerInfo);
        videoContent.volume = playerInfo.volume;
    })
}

function checkButtonState() {
    if(playerState === "adPlayback") {
        playButton.disabled = true;
    } else if(playerState === "videoPlayback") {
        playButton.disabled = false;
    }
}

loadJSON(json1,function(response) {
    const videoInfo = JSON.parse(response); //JSON info
    console.log(videoInfo);
    videoContent.src = videoInfo.src1
});
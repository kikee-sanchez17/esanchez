let myimage = ['myImage1', 'myImage2', 'myImage3', 'myImage4', 'myImage5', 'myImage6', 'myImage7', 'myImage8', 'myImage9'];
let aleatori2=null;
let score=0;
function pam(index) {
   
    if (aleatori2-1===index) {
        score+=10;
        document.getElementById('score').innerHTML=score;
        var audio = document.getElementById("boing");   
        audio.play();
        document.getElementById(myimage[index]).src = 'topoNo.jpg';
    }else{
        score-=10;
        document.getElementById('score').innerHTML=score;
    }
    document.getElementById(myimage[index]).src = 'topoPam.jpg';
}

function talp() {
    for (let i = 0; i < myimage.length; i++) {
        document.getElementById(myimage[i]).src = 'topoNo.jpg';
    }
     aleatori2 = Math.trunc((Math.random() * 9) + 1);
    document.getElementById(myimage[aleatori2-1]).src = 'topoSi.jpg';
}
setInterval(talp, 1000);



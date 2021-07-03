var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start (){
    document.getElementById("textbox").innerHTML = "";
    recgonition.start();
}
recognition.onresult = function(event){
    console.log(event);
    var Content = event.result[0][0].trascript;
    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if( Content == "take my selfie" ){
        speak();
        console.log("taking your selfie");
    }
}
function speak (){
    var synth = window.speechSynthesis;
    var sech = "Taking your selfie in 5 seconds";
    var ipa = new SpeechSynthesisUtterance(sech);
    synth.speak(ipa);
    Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
        save();
    } ,5000);
}
Webcam.set({
    width:320,
    height:240,
    image_format:'png',
    png_quality:90
});
camera = document.getElementById("camera");
function take_snapshot (){
    Webcam.snap(function(data_uri){
document.getElementById("output").innerHTML = '<img id="heer" src="'+data_uri+'">';
    });
}
function save(){
    link=document.getElementById("link");
    img=document.getElementById("heer").src;
    link.href = img;
    link.click();
}
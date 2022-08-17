x = 0;
y = 0;
draw_circle = "";
draw_rect = "";

var Speechrecognition = window.webkitSpeechRecognition;

var recognition = new Speechrecognition();

function start() {
    document.getElementById("status").innerHTML = "I am Listening. Go Ahead And Speak ";
    recognition.start();
}

recognition.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "I think you said :" + content;
    if (content == "circle") {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 500);
        document.getElementById("status").innerHTML = "Drawing The Circle";
        draw_circle = "set";
    }
    if (content == "rectangle") {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 500);
        document.getElementById("status").innerHTML = "Drawing The Rectangle";
        draw_rect = "set";
    }
}

function setup(){
    canvas = createCanvas(900, 500);
}

function draw(){
    if(draw_circle == "set"){
        radius = Math.floor(Math.random() * 100);
        circle(x, y, radius)
        document.getElementById("status").innerHTML = "Done Drawing";
        draw_circle = "";
    }
    if(draw_rect == "set"){
        rect(x, y, 70, 50)
        document.getElementById("status").innerHTML = "Done Drawing";
        draw_rect = "";
    }
}

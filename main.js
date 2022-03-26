noseXred= 0;
noseYred= 0;
noseXbrown= 0;
noseYbrown= 0;
noseXorange= 0;
noseYorange= 0;
lipcolor=" ";

function preload(){
red_lips= loadImage('https://i.postimg.cc/tg5jgdXp/image-removebg-preview.png');
brown_lips= loadImage('https://i.postimg.cc/sfQBQb7x/6-sepia-liquid-lipstick-83878-1606429112-1280-1280-removebg-preview.png');
orange_lips= loadImage('https://i.postimg.cc/25CmQ96P/21k-Yupk-Iw-OL-QL70-ML2-removebg-preview.png');
}

function setup(){
canvas= createCanvas(300,300);
canvas.position(500,250);
video= createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet= ml5.poseNet(video,modelLoaded);
poseNet.on('pose', gotPoses);

}

function draw(){
image(video,0,0,300,300);
if(lipcolor=='red'){
    image(red_lips,noseXred,noseYred,60,30);
}
else if(lipcolor=='brown'){
    image(brown_lips,noseXbrown,noseYbrown,70,60);
}

else if(lipcolor=='orange'){
    image(orange_lips,noseXorange,noseYorange,70,60);
}
else{
    image(brown_lips,noseXbrown,noseYbrown,70,60); 
}


}

function take_snapshot(){
save('lipstick_image');
}

function modelLoaded(){
    console.log('model is loaded');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log('x of nose- ' + results[0].pose.nose.x);
        console.log('y of the nose'+ results[0].pose.nose.y);
        noseXred= results[0].pose.nose.x-25;
        noseYred= results[0].pose.nose.y+20;
        noseXbrown= results[0].pose.nose.x-30;
        noseYbrown= results[0].pose.nose.y+7;
        noseXorange= results[0].pose.nose.x-30;
        noseYorange= results[0].pose.nose.y+7;
    }
}

function red1(){
    lipcolor="red"
}

function brown1(){
    lipcolor="brown"
}

function orange1(){
    lipcolor="orange"
}

function take_snapshot(){
    save('lipcolor.png')
}
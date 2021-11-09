Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:100
    
});
camera=document.getElementById("camera");
Webcam.attach('#camera')
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'">';
    });
}
function takepic(){
    document.getElementById("result2").innerHTML='<input id="imagee" type="file">';

}
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/bfEVItWVu/model.json',modelLoaded);
function modelLoaded(){
    console.log("Model Loaded!");
}
function check(){
    img=document.getElementById("selfie_image");
    imgw=document.getElementById("imagee");
    classifier.classify(imgw,gotResult)
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("object").innerHTML=results[0].label;
        document.getElementById("result_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}
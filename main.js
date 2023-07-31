
camera = document.getElementById("webcam");
Webcam.attach( '#camera' );
Webcam.set({
    width:300,
    height:300,
    image_format: 'png',
    png_quality:90
});

    



function capture()
{
    Webcam.snap(function(data_url) {
        document.getElementById("webcamCapture").innerHTML = '<img id = "captured_image" src = "' + data_url+'"/>';
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/cmk8ePQq5/model.json', modelLoaded)

function modelLoaded()
{
    console.log("Model Loaded!")
}

function check()
{
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("familyMemberName").innerHTML = results[0].label;
        document.getElementById("familyMemberAccuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}
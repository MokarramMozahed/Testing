function welcomeBtn(){

    alert("Welcome to Study Task Manager!");
}

/* Images */

let images = [

"https://images.unsplash.com/photo-1522202176988-66273c2fd55f",

"https://images.unsplash.com/photo-1516321318423-f06f85e504b3",

"https://images.unsplash.com/photo-1523240795612-9a054b0db644",

"https://images.unsplash.com/photo-1498050108023-c5249f4df085",

"https://images.unsplash.com/photo-1515879218367-8466d910aaa4",

"https://images.unsplash.com/photo-1504384308090-c894fdcc538d"

];

let currentImage = 0;

/* Show Image */

function showImage(){

    document.getElementById("sliderImage").src =
    images[currentImage];
}

/* Next Button */

function nextImage(){

    currentImage++;

    if(currentImage >= images.length){

        currentImage = 0;
    }

    showImage();
}

/* Previous Button */

function previousImage(){

    currentImage--;

    if(currentImage < 0){

        currentImage = images.length - 1;
    }

    showImage();
}
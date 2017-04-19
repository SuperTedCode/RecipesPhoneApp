//***************** Load changes on startup *******************

//***************** Local storage in browser ********************
var myFunction = function() {
if(localStorage.lunchCount===undefined) {
  localStorage.setItem("lunchCount", 0);
}

if(localStorage.dessertImgURL===undefined) {
  localStorage.setItem("dessertImgURL", "img\\cheesecake.png");
 
}

if(localStorage.dessertName===undefined) {
  localStorage.setItem("dessertName", "Baked raspberry & lemon cheesecake");

}

if(localStorage.dessertDesc===undefined) {
  localStorage.setItem("dessertDesc", "A rich and creamy baked cheesecake that makes a great dinner party dessert");
}

}
window.onload=myFunction

//********************************************************************************************

var scan = function() {
     cordova.plugins.barcodeScanner.scan(
      function (result) {
          alert("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled + "\n");           
      alert(fields);
      }, 
      function (error) {
          alert("Scanning failed: " + error);
      }
   );
}


//********************************************************************************************

var pic = function () {
  var name = prompt("Enter a name for your Recipe");
  var desc = prompt("Enter a desc for your Recipe");
  var count = parseInt(localStorage.getItem("lunchCount"));
  var newCount = count+1;
  $("div[id='"+count+"']").after("<div id=\""+newCount+"\" class=\"card item-text-wrap\"><ion-item><img class=\"front\" id=\""+newCount+"\"><br><h2 id=\""+newCount+"\"></h2><p id=\""+newCount+"\"></p></ion-item></div>");
  $("h2[id='"+newCount+"']").html(name);
  $("p[id='"+newCount+"']").html(desc);

  localStorage.lunchCount = Number(localStorage.lunchCount) + 1;

  navigator.camera.getPicture(function(imageURI) {

    // imageURI is the URL of the image that we can use for
    // an <img> element or backgroundImage.
   $("img[id='"+newCount+"']").attr("src", imageURI);
   localStorage.setItem('photo'+ newCount, imageURI);
   
  /*
  //Grab the file name of the photo in the temporary directory
  var currentName = imagePath.replace(/^.*[\\\/]/, '');
 
  //Create a new name for the photo
  var d = new Date(),
      n = d.getDate().toString()+(d.getMonth()+1).toString()+d.getFullYear()+d.getHours().toString()+d.getMinutes().toString()+d.getSeconds().toString();
      newFileName = n + ".jpg";

 
  //Move the file to permanent storage
  navigator.File.moveFile(cordova.file.tempDirectory, imageURI, cordova.file.dataDirectory, newFileName).then(function(success){
 
    //success.nativeURL will contain the path to the photo in permanent storage, do whatever you wish with it, e.g:
    //createPhoto(success.nativeURL);
    $("#last").append("<img class=\"front\" src=\""+success.nativeURL+"\"><br><h2 id=\""+success.nativeURL+"\"></h2><br><p id=\""+success.nativeURL+"\"></p>");
    var name = prompt("Enter a name for your Recipe");
    var desc = prompt("Enter a desc for your Recipe");
    $("h2[id='"+success.nativeURL+"']").html(name);
    $("p[id='"+success.nativeURL+"']").html(desc);
    
}, function(error){
    //an error occured
    alert("Error in moving picture to storage");
  });
  */

  }, function(err) {

    // Ruh-roh, something bad happened
    alert("Error running camera");
  }, { 
  quality: 100,
  destinationType: Camera.DestinationType.FILE_URI,
  sourceType: Camera.PictureSourceType.CAMERA,
  encodingType: Camera.EncodingType.JPEG,
  cameraDirection: 0,
  saveToPhotoAlbum: true
})
}


//*************************************************************************************************************


var gal = function () {
 
  navigator.camera.getPicture(function(imageURI) {


  }, function(err) {

    // Ruh-roh, something bad happened
    alert("Error running camera");
  }, { 
  quality: 100,
  destinationType: Camera.DestinationType.FILE_URI,
  sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
  encodingType: Camera.EncodingType.JPEG,
})
}


//***************************************************************************************************************


var editPic = function(){

  var x = parseInt(prompt("Choose 1 for camera or 2 for photo Album"));
  if (x===1) {

  navigator.camera.getPicture(function(imageURI) {
   $("img[id='dessertOne']").attr("src", imageURI);
   localStorage.dessertImgURL= imageURI;
 
  }, function(err) {

    // Ruh-roh, something bad happened
    alert("Error running camera");
  }, { 
  quality: 100,
  destinationType: Camera.DestinationType.FILE_URI,
  sourceType: Camera.PictureSourceType.CAMERA,
  encodingType: Camera.EncodingType.JPEG,
  cameraDirection: 0,
  saveToPhotoAlbum: true
})
}

else if(x===2) {
  navigator.camera.getPicture(function(imageURI) {
    $("img[id='dessertOne']").attr("src", imageURI);
    localStorage.dessertImgURL= imageURI;

  }, function(err) {

    // Ruh-roh, something bad happened
    alert("Error running camera");
  }, { 
  quality: 100,
  destinationType: Camera.DestinationType.FILE_URI,
  sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
  encodingType: Camera.EncodingType.JPEG,
})
}
else {alert("You did not select 1 or 2. Action canccelled!!")}
}


//***************************************************************************************************************

var editDesc = function() {
  localStorage.dessertName=(prompt("Enter a new name for the dessert!"));
  localStorage.dessertDesc=(prompt("Enter a new desc for the dessert!"));
  $("h2[id='dessertOne']").html(localStorage.dessertName);
  $("p[id='dessertOne']").html(localStorage.dessertDesc);
}


//***************************************************************************************************************
var calc = function ()
{
  var choice = parseInt(prompt("Enter 1 to convert to grams or 2 to convert to oz"));
  var grams = "";
  var oz = "";
  switch(choice)
  {
    case 1:
    oz = parseInt(prompt("Please enter the oz"));
    if(isNaN(oz))
    {
      alert("You did not enter a valid num!");
    }
    else {
    grams = oz * 28.3495;
    alert(oz+" Oz is equal to "+grams.toFixed(4)+" grams");
    }
    break;

    case 2:
    grams = parseInt(prompt("Please enter the grams"));
    if(isNaN(grams))
    {
      alert("You did not enter a valid num!");
    }
    else {
    oz = grams * 0.035274;
    alert(grams+" Grams is equal to "+oz.toFixed(4)+" oz");
    }
    break;

    default:
    alert ("You did not enter 1 or 2. Action canccelled!!");
    break;
  }
};
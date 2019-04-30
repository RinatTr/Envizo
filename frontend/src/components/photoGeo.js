

window.onload = getExif;

function getExif() {
  var img1 = document.getElementById("img1");
  EXIF.getData(img1, function () {
    var make = EXIF.getTag(this, "Make");
    var model = EXIF.getTag(this, "Model");
    var makeAndModel = document.getElementById("makeAndModel");
    makeAndModel.innerHTML = `${make} ${model}`;
  });

  var img2 = document.getElementById("img2");
  EXIF.getData(img2, function () {
    var allMetaData = EXIF.getAllTags(this);
    var allMetaDataSpan = document.getElementById("allMetaDataSpan");
    allMetaDataSpan.innerHTML = JSON.stringify(allMetaData, null, "\t");
  });
}
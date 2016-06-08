$(document).ready(function(){
  var request = $.get("https://lit-fortress-6467.herokuapp.com/object", function(data, status){
    var covArt = []
    for (var i = 0; i < 5; i++) {
      covArt.push(data.results[i].cover_art);
    }
    var infoHere=document.getElementById('info')
    for (var i = 0; i < covArt.length; i++) {
      var div = document.createElement('div')
      div.className = "allCovs"
      div.id = data.results[i].id
      var img = document.createElement('img');
      img.className = 'coverImg'
      img.src= "images/"+covArt[i]
      $(div).append(img)
      $("#scroll").append(div)
      div.addEventListener("click", function(){
        var capture = document.createElement("div")
        capture.className = "capture"
        for (var i = 0; i < covArt.length; i++) {
          if(data.results[i].id==this.id){
            capture.innerHTML= data.results[i].artist+" : "+data.results[i].title
            infoHere.appendChild(capture)
          }
        }
      })
    }
    var clear = document.getElementById("clear")
    clear.addEventListener("click", function(){
      infoHere.innerHTML=""
    })
  })
  $("#submit").click(function(){
    $.post("https://lit-fortress-6467.herokuapp.com/post", function(data, status){
      console.log(data);
    })
  })
})

$(document).ready(function(){
  var request = $.get("https://lit-fortress-6467.herokuapp.com/object", function(data, status){
    console.log(data);
    var covArt = []
    for (var i = 0; i < 5; i++) {
      covArt.push(data.results[i].cover_art);
    }
    console.log(covArt);
    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    }
    shuffle(covArt);
    console.log(covArt);
    $("#cov1").append("<img src= '/Users/michaelcoulter/workspace/playlist/images/"+covArt[0]+"' id= 'cover1'></img>")
    $("#cov2").append("<img src= '/Users/michaelcoulter/workspace/playlist/images/"+covArt[1]+"' id= 'cover2'></img>")
    $("#cov3").append("<img src= '/Users/michaelcoulter/workspace/playlist/images/"+covArt[2]+"' id= 'cover3'></img>")

    $("#choose").click(function() {
      window.location = "/Users/michaelcoulter/workspace/playlist/index2.html"
    })

})
})

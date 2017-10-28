$(document).keyup(function (event) {
  
    if (event.which == 37) {
        $(".selected")
        $(".selected").removeClass("selected");
        console.log("left");
    }
    else if (event.which == 38) {
        console.log("up");
    }
     else if(event.which == 39) {
        console.log("right");
    }
    else if (event.which == 40) {
        console.log("down");
    }
});
 $(document).keyup(function (event) {
     $(".selected").removeClass("selected");
     if (event.which == 37 && column > 1) {
         console.log("left");
         column--;
     }
     else if (event.which == 38 && row > 1) {
         console.log("up");
         row--;
     }
     else if (event.which == 39 && column < 3) {
         console.log("right");
         column++;
     }
     else if (event.which == 40 && row < 3) {
         console.log("down");
         row++;
     }
     $("#cell" + row + "_" + column).addClass("selected");
 });
 let row = 2;
 let column = 2;
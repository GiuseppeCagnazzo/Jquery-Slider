$(document).ready(function() {

  // next slide: select ul -> door gaan en +1 to next slide
  // prev slide: go back door -1


  var myList = $("ul li");
  // console.log(mylist);
  var currentIndex = 0;

  function next() {
    // hide element (of display: hidden)
    myList.eq(currentIndex).hide();
    // volgende slide: currentIndex +1
    currentIndex++
    // huidige index gelijk is aan lengte van de array ga naar 1ste slide
    if (currentIndex === myList.length) {
      // ga terug naar de eerste slide
      currentIndex = 0;
    }
    // show this slide
    myList.eq(currentIndex).show();
  }

  // Vorige Slide
  function previous() {
    // hides the picture
    myList.eq(currentIndex).hide();
    // go to previous slide
    currentIndex--
    // als de currentIndex kleiner is dan 0
    if (currentIndex < 0) {
      currentIndex = myList.length - 1;
    }
    // show this slide
    myList.eq(currentIndex).show();
  };

  // Autoscroll functie
  var autoscroll = function() {
    setTimeout(function() {
      previous();
      autoscroll(); //restarts the function
    }, 2300);
  };

  // Aanroepen functie
  autoscroll();

  // click for next function.
  $("#next").click(function() {
    next();
  })

  // click for previous function.
  $("#prev").click(function() {
    previous();
  })

});

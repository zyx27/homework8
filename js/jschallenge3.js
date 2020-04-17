$(document).ready(function(){
  $("#ch3form").submit(function(e){
    standingLen = $("input[name='standing']:checked").length;
    gradDateLen = $("input[name='gradDate']:checked").length;
    if ((standingLen != 0) && (gradDateLen != 0)) {
      // console.log("both checked");
    }
    else if (standingLen == 0) {
      if (gradDateLen == 0) {
        alert("You must select a class standing and graduation date!");
        e.preventDefault();
      }
      else {
        alert("You must select a class standing!");
        e.preventDefault();
      }
    }
    else {
      alert("You must select a graduation date!");
      e.preventDefault();
    }
  })
  // The logic in answers is more clear.
})
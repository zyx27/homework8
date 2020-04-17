$(document).ready(function(){
  $("#subscribe").change(function(){
    // console.log(this);
    if (this.checked) {
      $("#emailDiv").show(1500);
    }
    else {
      $("#emailDiv").hide(1500);
    }
  })
})
$(document).ready(function(){
  $("#sameAddress").change(function(){
    if (this.checked) {
      // console.log("checked");
      billAddText = $("#bill").val(); //val is the conten of input field
      // console.log(billAddText);
      $("#home").val(billAddText);
      $("#home").css("background-color", "#d1d1d1");
      $("#home").prop("disabled", true);
    }
    else {
      // console.log("unchecked");
      $("#home").val("");
      $("#home").css("background-color", "white");
      $("#home").prop("disabled", false);
      // why "false" didn't work
    }
  })

})

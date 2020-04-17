$(document).ready(function() {
  $("#challenge4_form").submit(function(e) {
    name = $("#name").val();
    addr = $("#addr").val();

    if (name.length == 0) {
      $("#nameError").show();
      e.preventDefault();
    }
    else {
      $("#nameError").hide();
    }
    if (addr.length == 0) {
        $("#addrError").show();
        e.preventDefault();
    }
    else {
      $("#addrError").hide();
    }
  })
})
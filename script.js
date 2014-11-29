$(document).ready(function(){
  $("#button").click(function(){
    var toAdd = $("input[name=checkListItem]").val();
    $("#remove-instruct").remove();
    $(".list").append('<div class="item">' + toAdd + '</div>');
  });
  $(document).on("click", ".item", function(){
    $(this).remove();
  });
});

$(function() {
  $(".delete-burger").on("click", function(event) {
    event.preventDefault();

    var id = $(this).data("id");
    var isEaten = { devoured:1 };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: isEaten
    }).then(
      function() {
        console.log("changed devoured to", isEaten);
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      name: $("#ca").val().trim(),
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        location.reload();
      }
    );
  });
});
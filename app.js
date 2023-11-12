document.addEventListener("DOMContentLoaded", function() {
    var searchButton = document.getElementById("searchButton")
    searchButton.addEventListener("click", function() {
        $.ajax({
            url: 'superheroes.php',
            method: 'GET', 
            success: function(response) {
              alert(response);
            },
            error: function(error) {
              alert(error);
            }
          });
    });
}); 

  
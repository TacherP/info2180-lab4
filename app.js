document.addEventListener("DOMContentLoaded", function() {
    var searchButton = document.getElementById("searchButton")
    searchButton.addEventListener("click", function() {
        var searchTerm = $('#searchInput').val();
        $.ajax({
            url: 'superheroes.php',
            method: 'GET', 
            data: {
                query: searchTerm
            },
            success: function(response) {
                $('#result').html(response);
            },
            error: function(error) {
              alert(error);
            }
          });
    });
}); 

  
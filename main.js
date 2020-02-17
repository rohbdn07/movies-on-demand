$(document).ready(() => {
  $("#searchForm").on("submit", e => {
    let searchText = $("#searchText").val();
    getMovies(searchText);
    e.preventDefault();
  });
});

function getMovies(searchText) {
  // Make a request for a user with a given ID
  axios
    .get(`http://www.omdbapi.com/?s=${searchText}&apikey=9b6562a4`)
    .then(function(response) {
      // handle success
      console.log(response);
      let movies = response.data.Search;
      let output = "";
      $.each(movies, (index, movie) => {
        output += `<div class="col-md-3">
                    <div class="well text-center">
                    <img src="${movie.Poster}">
                    <h5>${movie.Title}</h5>
                    <h6> released on:${movie.Year}</h6>
                    <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie details</a>
                    </div>
                    </div>
                    `;
      });
      $("#movies").html(output);
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });
}

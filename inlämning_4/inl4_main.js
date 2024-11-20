"use strict";

/**
 * it tries to get movie from API, when the form is submitted by the user.
 * 
 * */
function getMovieFromAPI(event) {
    event.preventDefault();
    const movieName = document.querySelector("input[name='query']").value;

    // if the user does not enter any movie name, we alert the user to enter a movie name.
    if(movieName.length <= 0) {
        alert("Please enter a movie name!");
        return;
    }

    // movieName is not empty, we fetch the movies from the API
    if (movieName) {
        fetchMovies(movieName);
    }
}

async function fetchMovies(title) {

    const apiKey = "41059430";
    const apiUrl = `http://www.omdbapi.com/?s=${title}&type=movie&apikey=${apiKey}`;

    try {
        // we are using fetch to get data from the API
        const response = await fetch(apiUrl); 
        const responseData = await response.json(); 
       // console.log(responseData);

        // if the respond from the API is True, we display the results
        if (responseData.Response === "True") {
            displayResults(responseData);
        } else {
            alert("No movies found!");
        }
    } catch (error) {
        alert("Error occurred while fetching movies:", error);
    }
}

// we are displaying the results of movies, based on the data we get from the API for the given movie.
function displayResults(data) {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ""; // clearing the previous results
    console.log(data);

    data.Search.forEach(movie => {
        const movieElement = document.createElement("h3");
        movieElement.innerHTML = `${movie.Title} : ${movie.Year}`; 
        resultDiv.appendChild(movieElement);
    });

}
"use strict";

function getMovieFromAPI(event) {
    event.preventDefault();
    const movieName = document.querySelector("input[name='query']").value;

    if (movieName) {
        fetchMovies(movieName);
    }
}

function fetchMovies(title) {
    const apiKey = "41059430";
    const apiUrl = `http://www.omdbapi.com/?s=${title}&type=movie&apikey=${apiKey}`;
    
    const xhr = new XMLHttpRequest();
    
    xhr.addEventListener("load", function() {
        const responseData = JSON.parse(this.responseText);
        console.log(responseData); 

        if (responseData.Response == "True") {
            displayResults(responseData);
        } 
    });
    
    xhr.open("GET", apiUrl, true);
    xhr.send();
}

function displayResults(data) {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ""; 

    data.Search.forEach(movie => {
        const movieElement = document.createElement("div");
        movieElement.innerHTML = `
            <h3>${movie.Title} : ${movie.Year}</h3>
        `;
        resultDiv.appendChild(movieElement);
    });
}
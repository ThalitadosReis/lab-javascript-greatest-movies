// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    return moviesArray.map((film) => film.director); // Iteration 1: All directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    } else {
        let dramaArr = moviesArray.filter((movie) =>
            movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'));
        return dramaArr.length;
    }
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    } else {
        let scores = moviesArray.map(film => film.score);
        let onlyNumbers = scores.filter(score => typeof(score) === 'number');
        let total = scores.length;
        let sumScore = onlyNumbers.reduce((scoreOne, scoreTwo) => scoreOne + scoreTwo, 0);
        
        return parseFloat((sumScore / total).toFixed(2));
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(avgDrama => avgDrama.genre.includes('Drama'));
    return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesArr = Array.from(moviesArray);
    moviesArr.sort((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title);
        } else {
            return a.year - b.year;
        }
    });
    return moviesArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesArray2 = Array.from(moviesArray);
    return moviesArray2.sort((a,b) => a.title.localeCompare(b.title)).slice(0, 20).map(movie => movie.title);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

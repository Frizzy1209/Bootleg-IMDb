
fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    .then(response => response.json())
    .then(movieData => {
        console.log(movieData);

        // Show the amount of movies

        const moviesFetched = document.querySelector('h1')

        function renderMoviesFetched () {
            moviesFetched.innerHTML = "Get the Title, release year & rating for "
                + movieData.length + " different movies!"
        }
        renderMoviesFetched()



        // Show movie info

        const displayMovie = document.querySelector('.movieInfo')

        function getArray (movieData){
            displayMovie.innerHTML = "The title of the movie is " + movieData.title
                + ", the rating of the movie is " + movieData.rating
                + " and the movie was released in " + movieData.year + "."
        }
        getArray(movieData[3048])




        // Button to show movies

        const theList = document.querySelector('.listOfTheMovies')
        const showAllMovies = document.querySelector('#btn1')
        const ratingOver8 = document.querySelector('#btn2')
        const ratingUnder3 = document.querySelector('#btn3')


        showAllMovies.addEventListener('click', function (){
            theList.innerHTML = " "

            const listText = document.createElement('p')
            listText.innerHTML = "List of all the movies"
            theList.appendChild(listText)

            for (let i = 0; i < movieData.length; i++) {
                const movieList = document.createElement('li')
                movieList.innerHTML =
                    "Title: " + movieData[i].title + " - Year: " + movieData[i].year + " - Rating: " + movieData[i].rating
                theList.appendChild(movieList)
            }
        })



        ratingOver8.addEventListener('click', function (){
            theList.innerHTML = " "

            const listText = document.createElement('p')
            listText.innerHTML = "Movies with a rating over 8.5"
            theList.appendChild(listText)

            for (let i = 0; i < movieData.length; i++) {
                if (movieData[i].rating >= 8.5){
                    const movieList = document.createElement('li')
                    movieList.innerHTML =
                        "Title: " + movieData[i].title + " - Year: " + movieData[i].year + " - Rating: " + movieData[i].rating
                    theList.appendChild(movieList)
                }
            }
        })



        ratingUnder3.addEventListener('click', function (){
            theList.innerHTML = " "

            const listText = document.createElement('p')
            listText.innerHTML = "Movies with a rating under 3"
            theList.appendChild(listText)

            for (let i = 0; i < movieData.length; i++) {
                if (movieData[i].rating <= 3){
                    const movieList = document.createElement('li')
                    movieList.innerHTML =
                        "Title: " + movieData[i].title + " - Year: " + movieData[i].year + " - Rating: " + movieData[i].rating
                    theList.appendChild(movieList)
                }
            }
        })

    });



function movies(arr) {
    let allMovies = []
    //{"name":"Fast and Furious","date":"30.07.2018","director":"Rob Cohen"} 

    for (const line of arr) {

        if (line.includes(`addMovie`)) {
            let currentMovie = {}
            let name = line.substring(9)
            currentMovie.name = name
            allMovies.push(currentMovie)

        } else if (line.includes(` directedBy `)) {
            let [movie, director] = line.split(` directedBy `)
            let myMovie = allMovies.find(x => x.name == movie)
            
            if (myMovie){
                myMovie.director = director
            }
        } else {
            let [movie, movieDate] = line.split(` onDate `)
            let myMovie = allMovies.find(x => x.name == movie)
            if (myMovie){
                myMovie.date = movieDate
            }
        }
    }
allMovies.forEach (movie=>{
    if (movie.name && movie.director && movie.date){
        console.log(JSON.stringify(movie));
    }
})
}




movies(['addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'])
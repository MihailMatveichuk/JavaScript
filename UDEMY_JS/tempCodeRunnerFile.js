let numberOfFilms;

// Создаю объект personalMovieDB и помещаю в него свойства count, movies, 
// actors, genres, privat


const personalMovieDB = {
    start: function(){
        numberOfFilms = +prompt('Сколько фильмов вы уже смотрели?', '');
        while(numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)){
            numberOfFilms = +prompt('Сколько фильмов вы уже смотрели?', '');
        }
    },
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    rememberMyFilms: function(){
        for(let i = 0; i < 2; i++){
            const a = prompt("Один из последних просмотренных фильмов?", ''),
                  b = prompt("На сколько оцените его?", '');
                  if(a != null && b != null && a != '' && b != '' && a.length < 50){
                    personalMovieDB.movies[a] = b;
                  } else {
                    console.log('error');
                    i--;
                  } 
            }
    },
    detectPersonLevel: function(){
        if(personalMovieDB.count < 10){
            console.log("Просмотрено довольо мало фильмов");
        } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log("Вы классический зверь");
        } else if(personalMovieDB.count >=30){
            console.log("Киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function(hidden){
        if(!hidden){
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function(){
        for(let i = 1; i < 4; i++){
            personalMovieDB.genres[i - 1]  = prompt(`Ваш любимый жанр под номером ${i}`, '');
        }
    },
    toggleVisibleMyDB: function(){
        if(this.privat === false){
            this.privat = true;
        } else {
            this.privat = false;
        }
    }
};
// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonLevel();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.toggleVisibleMyDB(personalMovieDB.privat);
// personalMovieDB.writeYourGenres();

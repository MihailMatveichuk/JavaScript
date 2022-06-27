'use strict';

// 1) Создаю переменную numberOfFilms и помещаю в нее ответ от пользователя на вопрос
let numberOfFilms;

// Создаю объект personalMovieDB и помещаю в него свойства count, movies, 
// actors, genres, privat

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже смотрели?', '');
    while(numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже смотрели?', '');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms(){
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
}
rememberMyFilms();

function detectPersonLevel(){
    if(personalMovieDB.count < 10){
        console.log("Просмотрено довольо мало фильмов");
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log("Вы классический зверь");
    } else if(personalMovieDB.count >=30){
        console.log("Киноман");
    } else {
        console.log("Произошла ошибка");
    }
}
detectPersonLevel();

function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres(){
    for(let i = 1; i < 4; i++){
        personalMovieDB.genres[i - 1]  = prompt(`Ваш любимый жанр под номером ${i}`, '');
    }
}
writeYourGenres();

'use strict';

// 1) Создаю переменную numberOfFilms и помещаю в нее ответ от пользователя на вопрос
const numberOfFilms = +prompt('Сколько фильмов вы уже смотрели?', '');

// Создаю объект personalMovieDB и помещаю в него свойства count, movies, 
// actors, genres, privat
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const a = prompt("Один из последних просмотренных фильмов?", ''),
    b = prompt("На сколько оцените его?", ''),
    c = prompt("Один из последних просмотренных фильмов?", ''),
    d = prompt("На сколько оцените его?", '');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
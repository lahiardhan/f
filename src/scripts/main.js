import './components/trending-list.js';
import './components/popular-movie-list.js';
import './components/popular-series-list.js';
import DataSource from './data/data-source.js';
import {async} from 'regenerator-runtime';

function main() {
   const API_TRENDING = 'trending/all/day';
   const API_POPMOVIE = 'movie/popular';
   const API_POPSERIES = 'tv/popular';

   const trendingListElement = document.querySelector('trending-list');
   const popMovieListElement = document.querySelector('popular-movie-list');
   const popSeriesListElement = document.querySelector('popular-series-list');

   const getMovieList = async (api_method, element) => {
      try {
         const movies = await DataSource.getMovies(api_method);
         element.movies = movies;
      } catch (error) {
         console.log(error);
      }
   }

   getMovieList(API_TRENDING, trendingListElement);
   getMovieList(API_POPMOVIE, popMovieListElement);
   getMovieList(API_POPSERIES, popSeriesListElement);

   // search element
   const searchElement = document.querySelector('#searchElement');

   searchElement.addEventListener('input', (event) => {
      console.log(event.target.value)
   });
}

export default main;
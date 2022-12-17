import './movie-item.js';

class PopularMovieList extends HTMLElement {
   set movies(movies) {
      this._movies = movies;
      this.render();
   }

   render() {
      this.innerHTML = `
         <section class="popular-movie-list flex flex-nowrap space-x-4 overflow-x-scroll pb-8 hide-scroll-bar">
         </section>
      `;
      this._movies.forEach(movie => {
         const popMovieListElement = document.querySelector('.popular-movie-list')
         const movieItemElement = document.createElement('movie-item');
         movieItemElement.movie = movie;

         popMovieListElement.appendChild(movieItemElement);
      })
   }
}

customElements.define('popular-movie-list', PopularMovieList);
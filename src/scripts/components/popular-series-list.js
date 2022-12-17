import './movie-item.js';

class PopularSeriesList extends HTMLElement {
   set movies(movies) {
      this._movies = movies;
      this.render();
   }

   render() {
      this.innerHTML = `
         <section class="popular-series-list flex flex-nowrap space-x-4 overflow-x-scroll mb-8 hide-scroll-bar">
         </section>
      `;
      this._movies.forEach(movie => {
         const popSeriesListElement = document.querySelector('.popular-series-list')
         const movieItemElement = document.createElement('movie-item');
         movieItemElement.movie = movie;

         popSeriesListElement.appendChild(movieItemElement);
      })
   }
}

customElements.define('popular-series-list', PopularSeriesList);
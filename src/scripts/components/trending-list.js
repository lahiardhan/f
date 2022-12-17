import './movie-item.js';

class TrendingList extends HTMLElement {
   set movies(movies) {
      this._movies = movies;
      this.render();
   }

   render() {
      this.innerHTML = `
         <section class="trending-list flex flex-nowrap space-x-4 overflow-x-scroll mb-8 hide-scroll-bar">
         </section>
      `;
      this._movies.forEach(movie => {
         const trendingListElement = document.querySelector('.trending-list')
         const movieItemElement = document.createElement('movie-item');
         movieItemElement.movie = movie;

         trendingListElement.appendChild(movieItemElement);
      })
   }
}

customElements.define('trending-list', TrendingList);
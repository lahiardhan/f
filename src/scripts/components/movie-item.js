class MovieItem extends HTMLElement {
	set movie(movie) {
		this._movie = movie;
		this.render();
	}

	render() {
      const getColor = (value) => {
         if(value >= 7) {
            return 'text-[#01EB7A]';
         } else if(value >= 4) {
            return 'text-yellow-400';
         } else {
            return 'text-red-600';
         }
      }

		this.innerHTML = `
         <div class="movie-item inline-block w-36 lg:w-56 max-w-xs">
            <div class="overflow-hidden rounded-lg relative">
               <img class="w-full h-60 lg:h-80 object-cover" alt="movie-poster"
                  src="https://www.themoviedb.org/t/p/w220_and_h330_face/${this._movie.poster_path}">
               
               <div class="overview absolute left-0 right-0 bottom-0 bg-black bg-opacity-40 backdrop-blur-sm p-2 lg:p-4 h-full">
                  <p class="text-sm lg:text-lg font-semibold mb-1 lg:mb-2">Overview</p>
                  <p class="text-[8px] lg:text-xs">
                     ${this._movie.overview}
                  </p>
               </div>
               <span class="${getColor(this._movie.vote_average)} self-center rounded-tl-full bg-gray-700 text-xs lg:text-sm pl-2 pr-1 py-0.5 lg:pl-4 lg:pr-1.5 lg:py-1 ml-1 absolute right-0 bottom-0">${this._movie.vote_average}</span>
            </div>
            <div class="movie-info flex justify-between text-xs lg:text-lg pt-1 pb-2 lg:pt-2 lg:pb-4">
               <p class="self-center font-semibold">${this._movie.title || this._movie.name}</p>
            </div>
         </div>
      `;
	}
}

customElements.define("movie-item", MovieItem);

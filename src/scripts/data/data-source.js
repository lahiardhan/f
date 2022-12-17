class DataSource {
   static getMovies(api_method) {
      return fetch(`https://api.themoviedb.org/3/${api_method}?&api_key=837ebedcdfebd429720cb2fef7f40943`)
         .then(response => {
            return response.json();
         })
         .then(responseJson => {
            return responseJson.results
         })
   }
}

export default DataSource;
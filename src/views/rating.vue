<template>
 <div class='rating'>
    <h1>Rating of movie {{resultMovie.title}}</h1>
    <h2>Enter a movie id to choose the movie</h2>
    <input v-model='query' @keyup='getMovieAndReview(query) + postRating(query)'>
    <p>The movie {{resultMovie.title}} have a rating average of {{resultMovie.vote_average}}/10</p>
    <h2>Enter a rating between 0 and 10 for this movie</h2>
    <form > 
        <input v-model='queryRating' @keyup='postRating(ratingNumber)'>
        <h2></h2>
        <input type="submit" value="Rate this movie">
    </form>
    </div>
</template>


<script>
import axios from 'axios'
export default {
 name: 'rating',
 data () {
  return {
   query: '',
   results: '',
   resultMovie:''
  }
 },
 methods: {
  postRating(query) {
   axios.post('http://api.themoviedb.org/3/movie/'+ query + '/reviews?api_key=af89ad743d30d1a6a0ad07e7c49d215b?session_id=').then(response => { this.results = response.data.results })
     console.log(this.results)
   },
  getMovieAndReview(query) {
  axios.get('https://api.themoviedb.org/3/movie/' + query + '?api_key=af89ad743d30d1a6a0ad07e7c49d215b').then(response => { this.resultMovie = response.data})
     console.log(this.resultMovie)
   }
 }
}
</script>

<style scoped>
    .rating {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 100px;
        text-align: center;
        padding: 20px;
    }
</style>
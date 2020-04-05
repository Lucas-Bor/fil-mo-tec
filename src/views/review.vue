<template>
 <div class='review'>
  <h1>Review of a movie named : {{result}} </h1>
  <h2>(Enter a movie's id : for exemple 012)</h2>
  <input v-model='query' @keyup='getMovieName(query) + getReview(query)'>
  <div v-for='results in results' :key='results'>
   <h3>{{results.author}}</h3>
   <p>{{results.content}}</p>
  </div>
 </div>
</template>


<script>
import axios from 'axios'
export default {
 name: 'review',
 data () {
  return {
   query: '',
   results: '',
   result: ''
  }
 },
 methods: {
  getReview(query) {
   axios.get('http://api.themoviedb.org/3/movie/'+ query + '/reviews?api_key=af89ad743d30d1a6a0ad07e7c49d215b').then(response => { this.results = response.data.results })
     console.log(this.results)
   },
   getMovieName(query) {
   axios.get('https://api.themoviedb.org/3/movie/' + query + '?api_key=af89ad743d30d1a6a0ad07e7c49d215b').then(response => { this.result = response.data.original_title })
     console.log(this.result)
   }
 }
}
</script>


<style scoped>
    .review {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 100px;
        text-align: center;
        padding: 20px;
    }
</style>
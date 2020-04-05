<template>
 <div class='search'>
  <h1>Searching for a movie ?</h1>
  <h2>(Enter a movie's name)</h2>
  <input type='text' v-model='query' @keyup='getResult(query)'>
  <div v-for='result in results' :key='result.id'>
   <h3>{{result.title}}</h3>
   <img v-bind:src="'http://image.tmdb.org/t/p/w500/' +    result.poster_path" width='100px'>
  </div>
 </div>
</template>


<script>
import axios from 'axios'
export default {
 name: 'search',
 data () {
  return {
   query: '',
   results: '',
  }
 },
 methods: {
  getResult(query) {
   axios.get('https://api.themoviedb.org/3/search/movie?api_key=af89ad743d30d1a6a0ad07e7c49d215b&query=' + query).then(response => { this.results = response.data.results })
   },
   getAuthorName(key) {
   axios.get('https://api.themoviedb.org/3/movie/' + key + '?api_key=af89ad743d30d1a6a0ad07e7c49d215b').then(response => { this.result = response.data })
     console.log(this.result)
     console.log(this.key)
   }
 }
}
</script>


<style scoped>
    .search {
       width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 100px;
        text-align: center;
        padding: 20px;
    }
</style>
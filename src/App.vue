<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
<!--  <HelloWorld msg="Welcome to Your Vue.js "/> -->
<!-- 	<router-link :to="{path: '/new_file'}"> Country list </router-link> -->
	<router-link :to="{path: '/country'}"> Country and region list </router-link>----
	<router-link :to="{path: '/weather'}"> weather </router-link>


	<router-view></router-view>
  </div>
</template>

<script>
import weather from './components/weather.vue'
import Country from './components/country.vue'
import holiday from './components/holiday.vue'

// getCountry(){
//   const options = {
//     method: 'GET',
//     url: 'https://restcountries.eu/rest/v2/all',
//   };

//   axios.request(options).then(response=> {
//     this.list = response.data

//     console.log(this.list)
//     this.$forceUpdate()
//   }).catch(function (error) {
//     console.error(error);
//   });
// }


export default {
  name: 'app',
  components: {
	weather,
	Country,holiday
  },
  // data(){
	 //  return{
	 //  	a: ''	  
	 //  }
  // },
  // methods:{
	 //  getCountry(){
		  
	 //  }
  // },
  // created{
	 //  this.getCountry()
  // }
  
}
</script>

<script>

  export default {
    name:'test',

    data () {
      return {
        info: ''
      }
    },
    methods: {
      getVehicle(){
        this.$axios.post('url')
          .then((response)=>(this.info = response))
      }
    }

  }
</script>






<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

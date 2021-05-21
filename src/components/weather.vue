<template>
	<div>
		<button @click="getWeather">Weather</button>
	</div>
</template>

<script>
	
var axios = require("axios").default;


	
export default {
  methods: {
    getWeather() {
		var options = {
		  method: 'GET',
		  url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
		  params: {q: 'London', days: '3'},
		  headers: {
		    'x-rapidapi-key': 'c021e0a0eamsha26d3a2b7bceb1dp1506fejsn26cbec05e0f1',
		    'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
		  }
		};
		
		axios.request(options).then(function (response) {
			console.log(response.data);
		}).catch(function (error) {
			console.error(error);
		});
    },
  },
};
	
</script>

<style>
</style>

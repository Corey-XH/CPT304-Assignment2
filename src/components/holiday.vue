<template>
	<div>
		

		<!-- <button @click="getHoliday()">check</button> -->
	    This is the news page.the transform param is {{this.$route.params.CountryCode}}
		
		<p  v-for="(user) in holidaylist">{{user.date}}-----{{user.name}}</p>
		
		
	</div>

</template>

<script>
	
	var axios = require("axios").default;

	export default {
	
	  data(){
		  return {
		  	holidaylist:'',
			code:'',
		  }
	  }
	  ,
	  created() {
	        this.getHoliday()
	      },
	  methods: {
		  // routerTo(){
			 //  this.$router.push({ path: '/news', query: { userId: 123 }});
		  // },
		  
	    getHoliday() {
			
			var that = this
			const co = this.$route.params.CountryCode
			var options = {
			  method: 'GET',
			  url: 'https://public-holiday.p.rapidapi.com/2020/'+co,
			  headers: {
				'x-rapidapi-key': 'c021e0a0eamsha26d3a2b7bceb1dp1506fejsn26cbec05e0f1',
				'x-rapidapi-host': 'public-holiday.p.rapidapi.com'
			  }
			};
	
axios.request(options).then(function (response) {

	console.log(response.data);
	that.holidaylist = response.data;
}).catch(function (error) {
	console.error(error);
});
	    },
	  },
	  
	};
		
</script>

<style>
</style>

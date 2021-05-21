<template>
	<div>
		
		<!-- <button @click="getCountry">Country</button> -->
<!-- 		<p v-for="(item,i) in list">--索引值--{{i}}   --每一项--{{item}}</p -->
		<p span="8" width="100px;" style="float:left;" v-for="(user) in list":key="list.value"> 
		  <router-link :to="{ name: 'holiday', params: { CountryCode:user.key}}">{{user.value}}</router-link>
		  ----
		  </p>
<!-- 		<router-link :to="{path: '/country'}"> Country list </router-link> -->
		
		<!-- <router-link :to="{ path: '/holiday', query: { userId: 1111}}">click to news page</router-link> -->
		


<!-- 		<p>{{list[1].value}}</p> -->
	</div>
</template>

<script>

var axios = require("axios").default;


	
export default {

  data(){
	  return {
	  	list:'',
	  }
  }
  ,
  created() {
        this.getCountry()
      },
  methods: {
	  // routerTo(){
		 //  this.$router.push({ path: '/news', query: { userId: 123 }});
	  // },
	  
    getCountry() {
		
		var that = this
		var options = {
  method: 'GET',
  url: 'https://referential.p.rapidapi.com/v1/country',
  params: {
    fields: 'currency,currency_num_code,currency_code,continent_code,currency,iso_a3,dial_code'
  },
  headers: {
    'x-rapidapi-key': 'c021e0a0eamsha26d3a2b7bceb1dp1506fejsn26cbec05e0f1',
    'x-rapidapi-host': 'referential.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
	that.list = response.data;

	
}).catch(function (error) {
	console.error(error);
});
    },
  },
  
};
	
</script>

<style>
</style>

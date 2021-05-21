import Vue from "vue";
import VueRouter from 'vue-router';

// import Content from "../components/Content";
// import Holiday from "../components/Holiday";
// import Weather from "../components/Weather";
// import Accommodation_selectArea from "../components/Accommodation_selectArea";
// import Accommodation from "../components/Accommodation";
// import Homepage from "../components/Homepage";
// import Weather_selectCountry from "../components/Weather_selectCountry";
// import Accommodation_selectCountry from "../components/Accommodation_selectCountry";
// import Weather_selectArea from "../components/Weather_selectArea";


import weather from "../components/weather.vue";
import country from "../components/country.vue";
import holiday from "../components/holiday.vue";


Vue.use(VueRouter)
	

export default new VueRouter({
  
  
  routes: [	

	{
	  //path
	  path: '/weather',
	  name: 'weather',
	  //Component
	  component: weather
	},
	{
	  //path
	  path: '/country',
	  name: 'country',
	  //Component
	  component: country
	},
	{
	  //path
	  path: '/holiday',
	  name: 'holiday',
	  //Component
	  component: holiday
	},

  ]
});

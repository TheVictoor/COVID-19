<template>
  <div id="mainCard" class="card">
    <div class="card-header">
      <countryComponent v-if="country.name" :label="country.name" :image="country.flag"></countryComponent>
    </div>
    <div class="card-body">
      <informativoComponent v-if="stats.confirmed" label='Confirmed' :number='stats.confirmed'/>
      <informativoComponent v-if="stats.deaths" label='Deaths' :number='stats.deaths'/>
      <informativoComponent v-if="stats.recovered" label='Recovered' :number='stats.recovered'/>
    </div>
    <div class="card-footer bg-transparent">{{ lastUpdate || "" }}</div>
  </div>
</template>

<script>
import countryComponent from "./Country";
import informativoComponent from "./Information";
import services from "./../services";

export default {
  name: "Home",
  components: {
		countryComponent,
		informativoComponent
  },
  data() {
    return {
      country: {
				name: null,
				flag: null,
			},
			stats: {},
			lastUpdate: null
    }
  },
  methods: {},
  async created() {
		let index = 0;
		const countries = process.env.VUE_APP_COUNTRIES.split(",");
		const changeData = async () => {
      const country = countries[index];
      const flag = await services.country.get(country);
      const stats = await services.covid.get(country);

      this.country.name = country;
      this.country.flag = flag;
			this.stats = stats;
			
			console.log(this.country);
			console.log(this.stats);

			const update = new Date(stats.lastUpdate);

			this.lastUpdate = `Day ${update.getDate()} At ${update.getHours()}:${update.getMinutes()}`;

      index++;
			if (index === countries.length) index = 0;
		};
	
		await changeData();
  },
}
</script>

<style scoped>
.card {
  width: 300px;
  position: relative;
  align-content: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.card-footer {
  font-size: 10px;
}
</style>
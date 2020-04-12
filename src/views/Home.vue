<template>
  <div class="container-fluid d-flex flex-column justify-content-center">
    <HeaderComponent 
      @update="updateNext()"
      v-if="country.flag" 
      :countryFlag="country.flag" 
      :countryLabel="country.name"
    ></HeaderComponent>
    <div class="row">
      <InfoComponent
      :v-if="this.stats"
      :number="stats.confirmed"
      label="Confirmed"
      ></InfoComponent>
      <InfoComponent
        :v-if="this.stats"
        :number="stats.deaths"
        label="Deaths"
      ></InfoComponent>
      <InfoComponent
        :v-if="this.stats"
        :number="stats.recovered"
        label="Recovered"
      ></InfoComponent>
    </div>
  </div>
</template>

<script>
import InfoComponent from "../components/Information";
import HeaderComponent from "../components/Header";
import services from "./../services";

export default {
  name: "Home",
  components: {
    InfoComponent,
    HeaderComponent,
  },
  data() {
    return {
      country: {
        name: null,
        flag: null,
      },
      stats: {},
			lastUpdate: null,
			timeoutId: null,
			countryIndex: 0,
    }
  },
  methods: {
    extractDate(serializedDate) {
      const date = new Date(serializedDate)
      const fill = s => (s.toString().length === 1 ? "0" + s.toString() : s)
      const extracted = `${fill(date.getDate())}/${fill(
        date.getMonth() + 1,
      )} at ${fill(date.getHours())}:${fill(date.getMinutes())}`
      return extracted
    },
    updateNext() {
      clearTimeout(this.timeoutId);
      this.startTimerUpdateStats();
    },
		async startTimerUpdateStats(){
      const countries = process.env.VUE_APP_COUNTRIES.split(",")
			const changeData = async () => {
				const country = countries[this.countryIndex]
				const flag = await services.country.get(country)
				const stats = await services.covid.get(country)

				this.lastUpdate = this.extractDate(stats.lastUpdate)
				this.country.name = country
				this.country.flag = flag
				this.stats = stats

				this.countryIndex++
				if (this.countryIndex === countries.length) this.countryIndex = 0

				this.timeoutId = setTimeout(function() {
					changeData();
				}, 10000)
			}

			await changeData()
		}
  },
  async created() {
		this.startTimerUpdateStats();
  },
}

</script>

<style scoped>

  .container-fluid {
    height: 100vh;
  }

</style>
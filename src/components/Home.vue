<template>
	<div class="container-dash d-flex justify-content-center align-items-center">
		<div class="card card-style">
			<div class="card-header text-center">
				<img class="image-country" v-if="country.flag" :src="country.flag" :alt="`bandeira do pais ${country.name}`">
				<h3 class="label-country">
					{{ country.name || "" }}
				</h3>
			</div>
			<div class="card-body">
				<informativoComponent class="mt-4" v-if="stats.confirmed" label='Confirmed' :number='stats.confirmed'/>
				<informativoComponent class="mt-4" v-if="stats.deaths" label='Deaths' :number='stats.deaths'/>
				<informativoComponent class="mt-4" v-if="stats.recovered" label='Recovered' :number='stats.recovered'/>
			</div>
			<div class="card-footer bg-transparent text-right">
				{{ lastUpdate || "" }}
			</div>
		</div>
	</div>
</template>

<script>
import informativoComponent from "./Information";
import services from "./../services";

export default {
  name: "Home",
  components: {
		informativoComponent
  },
  data() {
    return {
      country: {
        name: null,
        flag: null,
      },
      stats: {},
      lastUpdate: null,
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
  },
  async created() {
    let index = 0
    const countries = process.env.VUE_APP_COUNTRIES.split(",")
    const changeData = async () => {
      const country = countries[index]
      const flag = await services.country.get(country)
      const stats = await services.covid.get(country)

      this.lastUpdate = this.extractDate(stats.lastUpdate)
      this.country.name = country
      this.country.flag = flag
      this.stats = stats

      index++
      if (index === countries.length) index = 0

      setTimeout(function() {
        changeData()
      }, 15000)
    }

		await changeData()
  },
}

</script>

<style scoped>

	.container-dash {
		width: 100vw;
		height: 100vh;
	}

	.card-style {
		width: 400px;
		background: rgba(255, 255, 255, .9);
	}

	.card-footer {
		font-size: 10px;
	}

	.image-country {
		width: 70px;
		border-radius: 10px;
		position: relative;
		top: -35px;
	}

	.label-country {
		position: relative;
		top: -25px;
	}

	.card-header {
		height: 80px;
	}

</style>
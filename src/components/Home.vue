<template>
<<<<<<< HEAD
	<div class="container-dash d-flex justify-content-center align-items-center">
		<div class="card card-style">
			<div class="card-header text-center">
				<img class="image-country" v-if="country.flag" :src="country.flag" :alt="`bandeira do pais ${country.name}`">
				<h3 class="label-country">
					{{ country.name || "" }}
				</h3>
			</div>
			<div class="card-body">
				<informativoComponent v-if="stats.confirmed" label='Confirmed' :number='stats.confirmed'/>
				<informativoComponent v-if="stats.deaths" label='Deaths' :number='stats.deaths'/>
				<informativoComponent v-if="stats.recovered" label='Recovered' :number='stats.recovered'/>
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
=======
  <div class="container-dash d-flex justify-content-center align-items-center">
    <div>
      <canvas></canvas>
      <div class="card card-style">
        <div class="card-header text-center">
          <img
            class="image-country"
            v-if="country.flag"
            :src="country.flag"
            :alt="`bandeira do pais ${country.name}`"
          />
          <h3 class="label-country">{{ country.name || "" }}</h3>
        </div>
        <div class="card-body">
          <informativoComponent v-if="stats.confirmed" label="Confirmed" :number="stats.confirmed" />
          <informativoComponent v-if="stats.deaths" label="Deaths" :number="stats.deaths" />
          <informativoComponent v-if="stats.recovered" label="Recovered" :number="stats.recovered" />
        </div>
        <div class="card-footer bg-transparent text-right">{{ lastUpdate || "" }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import informativoComponent from "./Information"
import services from "./../services"
>>>>>>> 740b314947d391654cd14b75784ada2f2bada633

export default {
  name: "Home",
  components: {
<<<<<<< HEAD
		informativoComponent
=======
    informativoComponent,
>>>>>>> 740b314947d391654cd14b75784ada2f2bada633
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

		startVirus()
		await changeData()
  },
}

function startVirus() {
  var canvas, ctx, ban
  canvas = document.getElementsByTagName("canvas")[0]
  ctx = canvas.getContext("2d")
  canvas.width = canvas.height = 500
  main()

  function main() {
    var tim
    ctx.globalCompositeOperation = "source-over"
    ctx.fillStyle = "rgb(0,0,0)"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    tim = new Date().getTime() / 5000
    ban = 0
    rus(200, 200, 1, tim, 0)
    requestAnimationFrame(main)
  }

  function rus(x, y, s, r, k) {
    var a, px, py, r1, r2, han
    han = 50
    if (k > 2) {
      a = (k * 5 + 200) % 360
      ctx.globalCompositeOperation = "lighter"
      ctx.fillStyle = "hsla(" + a + ",60%,50%,0.1)"
      ctx.beginPath()
      ctx.arc(x, y, han * s * 2, 0, Math.PI * 2, 0)
      ctx.fill()
      ctx.globalCompositeOperation = "source-over"
      ctx.fillStyle = "hsl(" + a + ",60%,30%)"
      ctx.beginPath()
      ctx.arc(x, y, han * s, 0, Math.PI * 2, 0)
      ctx.fill()
    }
    ban++
    if (s < 0.3) return
    k++
    r1 = 0.87
    r2 = 1 - r1
    r += ban
    px = Math.cos(r)
    py = Math.sin(r)
    rus(x + px * han * r2 * s, y + py * han * r2 * s, s * r1, r * 1.2, k)
    r += ban
    px = Math.cos(r)
    py = Math.sin(r)
    r1 = 0.82
    rus(x + px * han * (1 + r1) * s, y + py * han * (1 + r1) * s, s * r1, -r, k)
  }
}
</script>

<style scoped>
.container-dash {
  width: 100vw;
  height: 100vh;
}

.card-style {
  width: 300px;
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

.card-style {
  background: rgba(255, 255, 255, 0.8);
  position: relative;
  top: -50vh;
}

canvas {
  position: relative;
  top: 50%;
  left: 50%;
  margin-left: -50vmin;
  width: 100vmin;
  height: 100vmin;
  overflow: hidden;
}
</style>
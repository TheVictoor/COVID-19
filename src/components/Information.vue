<template>
	<div class="col-12 p-3 d-flex flex-column align-items-center justify-content-center">
		<div class="container-data d-flex flex-column align-items-center">
			<div class="h2" :key="label">
				{{ label }}
			</div>
			<div class="data" :key="number">
				{{ number }}
			</div>
		</div>
		<div class="container-effect" :class="[label.toLowerCase()]"></div>
	</div>		
</template>

<script>
	import Icons from '../assets/icons';
	export default {
		name: "information",
		props: ["label", "number"],
		data() {
			return {
				Icons
			}
		}
	}
</script>

<style scoped>
	
	.container-data {
		width: 98%;
		z-index: 2;
		background-color: #fff;
	}

	.container-effect {
		position: relative;
		z-index: 1 !important;	
		top: -10px;
		height: 14px;
		width: 100%;
	}

	.confirmed {
		background-color: #66f;
	}

	.deaths {
		background-color: #f66;
	}

	.recovered {
		background-color: #6f6;
	}


</style>
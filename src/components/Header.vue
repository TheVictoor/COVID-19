<template>
	<div class="row">
		<div class="col-12 col-md-3 offset-md-3 text-center p-2">
			<img
				@dblclick="update()"
				class="country-flag"
				v-if="countryFlag"
				:src="countryFlag"
				:alt="`${countryLabel}'s flag`"
			/>
		</div>
		<div class="col-12 col-md-3 d-flex justify-content-center align-items-center p-2 country-label">
			<h1> {{ countryLabel }} </h1>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['countryFlag', 'countryLabel'],
		methods: {
			update(){
				this.$emit('update');
			}
		},
	}
</script>

<style>

	.country-flag {
		height: 100px;
		border-radius: 10px;
		box-shadow: 2px 2px 6px #888;
	}

</style>
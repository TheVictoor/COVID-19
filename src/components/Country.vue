<template>
	<div class="info-contai">
		<div class="d-flex justify-content-center align-items-center">
			<span>
				<img class="image-country" :src="image" :alt="`bandeira do pais ${label}`">
			</span>
			<span class="label-country ml-4">{{ label }}</span>
		</div>
	</div>
</template>

<script>

export default {
	name: 'country',
	props: ['label', 'image'],
	data() {
		return {}
	}
}

</script>

<style scoped>

  .image-country {
    width: 50px !important;
    border-radius: 5px;
  }

	.label-country {
		font-size: 24px;
		font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
	}

</style>

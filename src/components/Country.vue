<template>
	<div class="info-contai">
		<p>
			<span>
				<img width="60px" :src="image" :alt="`bandeira do pais ${label}`">
			</span>
			<span>{{ label }}</span>
		</p>
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

</style>
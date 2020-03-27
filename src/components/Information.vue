<template>
	<div class="d-flex justify-content-between align-items-center">
		<span class="d-flex align-items-center">
			<span class="icon" v-html="Icons.icons[label]"></span>
			<span class="labelInformation">{{ label }}</span>
		</span>
		<span class="numberInformation">{{ number }}</span>
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
	.labelInformation {
		font-size: 18px;
		font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
		padding-right: 40px;
	}

	.numberInformation {
		font-size: 18px;
		font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
		color: red !important;
	}

	.card {
		width: 350px !important;
	}
	.icon{
		padding-right: 5px;
	}
</style>
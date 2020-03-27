<template>
  <div class="d-flex justify-content-between align-items-center">
    <span class="labelInformation">{{ label }}</span>
    <span class="numberInformation">{{ number }}</span>
  </div>
</template>

<script>
export default {
  name: "information",
  props: ["label", "number"],
  data() {
    return {}
  },
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
</style>
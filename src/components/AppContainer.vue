<template lang="pug">

	.app-container
		slot

</template>

<script>

export default {

	name: 'AppContainer'

};

</script>

<style lang="scss" scoped>

.app-container {
	background-color: rgba(167,210,236,0.75);
	padding: 0px;
	overflow: hidden;
	height: 100%;
	width: 100%;
	overflow-x: hidden;
	border-radius: 0px;
	display: inline-flex;
	align-items: flex-start;
	padding-bottom: 6em;
}

</style>

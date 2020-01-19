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
	height: 100%;
	width: 100%;
	padding: 0px;
	overflow: hidden;
	border-radius: 0px;
	display: inline-flex;
	align-items: flex-start;
	padding-bottom: 4em; // here 4em is === height of app-header
}

</style>

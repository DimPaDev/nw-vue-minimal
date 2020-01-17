<template lang="pug">

	.app-header
		slot

</template>

<script>

export default {

	name: 'AppHeader'

};

</script>

<style lang="scss" scoped>

.app-header {
	width: 100%;
	height: 4em;
	background-color: #c6e2f3d9;
	display: block;
	border-left: 1px solid #f1f1f1;
	border-right: 1px solid #f1f1f1;
	padding: .8em;
}

</style>

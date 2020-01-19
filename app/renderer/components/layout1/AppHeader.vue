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
	background-color: #00000012;
	border-bottom: 1px solid #969595;
	box-shadow: 0px 1px 2px 1px #7d7d7d57;
	display: flex;
	align-items: center;
	font-size: 100%;
	font-weight: 500;
	font-family: Segoe Ui, Ubuntu, sans-serif;
	padding-left: 1.5em;
	padding-right: 1.5em;
}

</style>

<template lang="pug">

	.app-content
		slot

</template>

<script>

export default {

	name: 'AppContent'

};

</script>

<style lang="scss" scoped>

.app-content {
	height: 100%;
	width: inherit;
}

</style>

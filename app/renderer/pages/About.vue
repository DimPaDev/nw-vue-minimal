<template lang="pug">

	#About

		img.logo(src='~@/assets/logo.png', height = '128', alt = 'logo')
		div.nwVersion {{ nwVersion }}

</template>

<script>

export default {

	name: 'About',

	data: () => ({
		nwVersion : global.process.versions['nw']
	}),

	components: {

	}

};

</script>

<style lang="scss" scoped>

	#About {

		height: inherit;
    display: grid;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align: center;

	}

	.nwVersion {
		font-size: 44px;
    font-family: Segoe Ui, Ubuntu, sans-serif;
    font-weight: 600;
    text-shadow: 1px 1px 1px white;
	}

</style>

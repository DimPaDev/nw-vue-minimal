<template lang="pug">

	#Home

		app-header
			img.logo-header(src='~@/assets/logo.png', height = '32', alt = 'logo-header' )
			div.title {{ title }}

		app-container

			app-side-bar
				img.logo(src='~@/assets/logo.png', height = '64', alt = 'logo')
				img.logo(src='~@/assets/logo.png', height = '64', alt = 'logo')
				img.logo(src='~@/assets/logo.png', height = '64', alt = 'logo')
				img.logo(src='~@/assets/logo.png', height = '64', alt = 'logo')

			nw-values-list

</template>

<script>
// Layout Components
import AppContainer from '@components/layout1/AppContainer';
import AppHeader from '@components/layout1/AppHeader';
import AppSideBar from '@components/layout1/AppSidebar';

import NwValuesList from '@components/NwValuesList';

export default {

	name: 'Home',

	data: () => ({
		title: 'Welcome to the Home Page of your App'
	}),

	components: {
		'app-header': AppHeader,
		'app-container': AppContainer,
		'app-side-bar': AppSideBar,
		'nw-values-list': NwValuesList
	}

};

</script>

<style lang="scss" scoped>

	#Home {

    height: inherit;
    width: inherit;

		.logo-header {
			margin-right: 1em;
		}

	}

</style>

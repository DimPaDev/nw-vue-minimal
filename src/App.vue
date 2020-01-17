<template lang="pug">

	#App
		app-title-bar
		app-header
		app-container
			app-side-bar
			nw-values-list

</template>

<script>
import AppContainer from '@components/AppContainer';
import AppTitleBar from '@components/AppTitleBar';
import AppHeader from '@components/AppHeader';
import AppSideBar from '@components/AppSidebar';
import NwValuesList from '@components/NwValuesList';

export default {

	name: 'App',

	components: {
		'app-header': AppHeader,
		'app-container': AppContainer,
		'app-title-bar': AppTitleBar,
		'app-side-bar': AppSideBar,
		'nw-values-list': NwValuesList
	}

};

</script>

<style lang="scss">

#App {
	height: 100%;
	overflow: hidden;
	border-radius: 6px;
}

</style>

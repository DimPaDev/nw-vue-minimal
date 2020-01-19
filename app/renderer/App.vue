<template lang="pug">

	#App
		app-title-bar
		app-content: router-view

</template>

<script>
import AppTitleBar from '@components/base/AppTitleBar';
import AppContent from '@components/base/AppContent';

export default {

	name: 'App',

	components: {
		'app-title-bar': AppTitleBar,
		'app-content': AppContent
	}

};

</script>

<style lang="scss">

	@import '~@/styles/global.scss';

	#App {

    height: 100%;
    overflow: hidden;
    border-radius: 0px;
    background-color: rgba(250,252,255,0.8);
		border: 1px solid #a0a0a0;

	}

</style>

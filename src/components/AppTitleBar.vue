<template lang="pug">

	.app-titlebar
		.titlebar-text {{ titlebarText }}
		.titlebar-controls
			.titlebar-control-btn.titlebar-min( @click="onMinimizeWin" ) -
			.titlebar-control-btn.titlebar-max( @click="onMaximizeWin" ) O
			.titlebar-control-btn.titlebar-close( @click="onCloseWin" ) X

</template>

<script>

export default {

	name: 'AppTitleBar',

	data: () => ({
		titlebarText: 'Hello Vue.js!'
	}),

	methods: {

		onMinimizeWin() {
			console.log('Minimize Window');
			nw.Window.get().minimize();
		},
		onMaximizeWin() {
			console.log('Maximize Window');
			nw.Window.get().maximize();
		},
		onCloseWin() {
			console.log('Close Window');
			nw.Window.get().close();
		}

	}

};

</script>

<style lang="scss" scoped>

.app-titlebar {
	-webkit-app-region: drag;
	font-family: Segoe Ui, Ubuntu, sans-serif;
	background-color: rgba(230, 230, 230, 0.92);
	height: 2em;
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-height: 2em;
	box-shadow: inset 0px 0px 1px 1px #f7f7f770, 0px 0px 5px 1px #00000052;
	border-radius: 5px 5px 0px 0px;
}

.titlebar-text {
	color: #2f2f2f;
	text-shadow: 1px 1px 1px whitesmoke;
	padding-left: 10px;
}

.titlebar-controls {
	-webkit-app-region: no-drag;
	user-select: none;
	height: inherit;
	display: flex;
	align-items: center;
	width: 100px;
	justify-content: center;
}

.titlebar-control-btn {
	width: 33.3%;
	height: inherit;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 10px;
	font-weight: 700;
	text-shadow: 1px 1px 1px white;
	color: #585858;
	border-left: 1px solid #c7c7c7;
}

.titlebar-control-btn:hover {
	background-color: #dedede;
}

</style>

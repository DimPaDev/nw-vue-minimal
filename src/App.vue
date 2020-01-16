<template lang="pug">

	#App

		.app-titlebar
			.titlebar-text {{ titlebarText }}
			.titlebar-controls
				.titlebar-control-btn.titlebar-min( @click="onMinimizeWin" ) -
				.titlebar-control-btn.titlebar-max( @click="onMaximizeWin" ) O
				.titlebar-control-btn.titlebar-close( @click="onCloseWin" ) X

		span.app-header Headerrrr

		.app-container

			app-world

			.nwjs-values
				.item( v-for="item in nwValues" )
					.item-key {{ item.label }}
					.item-value {{ item.value }}

</template>

<script>
import AppWorld from '@components/AppWorld.vue';

export default {

    name: 'App',

    components: {
			'app-world': AppWorld
    },

    data: () => ({
        titlebarText: 'Hello Vue.js!',
        nwValues: [
					{ label: 'Nw.Js Version', value: global.process.versions['nw'] },
					{ label: 'Nw.Js Flavor', value: global.process.versions['nw-flavor'] },
					{ label: 'Chromium Version', value: global.process.versions['chromium'] },
					{ label: 'Node.Js Version', value: global.process.version },
					{ label: 'Platform', value: global.process.platform },
					{ label: 'Session Desktop', value: global.process.env['XDG_SESSION_DESKTOP'] },
					{ label: 'Session Type', value: global.process.env['XDG_SESSION_TYPE'] },
					{ label: 'Chromium Arguments', value: nw.App.manifest["chromium-args"] },
					{ label: 'Is Native Frame', value: nw.App.manifest.window.frame },
					{ label: 'Is Transparent Window', value: nw.App.manifest.window.transparent }
        ]
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
    
    },

    mounted() {
      console.log('App Mounted!');
    }

};

</script>

<style lang="scss">

#App {

		height: 100%;
		overflow: hidden;
		border-radius: 6px;

}
		
.app-titlebar {
    -webkit-app-region: drag;
    font-family: Segoe Ui, Ubuntu, sans-serif;
    background-color: rgba(230, 230, 230, 0.92);
    height: 2em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-height: 2em;
    box-shadow: inset 0px 0px 1px 1px #fdfdfd70, 0px 0px 5px 1px #00000052;
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
    padding-bottom: 5em;
}

.app-header {
	width: 100%;
	background-color: red;
	display: block;
	height: 3em;
	// display: none;
}

.nwjs-values {
    opacity: 1;
    overflow-y: auto;
    height: 100%;
    width: inherit;
    transition: opacity .6s;
}

.item {
    background-color: #ffffffe6;
    margin: 10px;
    padding: 0px;
    font-size: 18px;
    border: 1px solid #6d6d6d;
    display: flex;
    justify-content: space-between;
    border-radius: 3px;
    box-shadow: 0px 0px 2px 1px #ffffff24;
    user-select: none;
    font-family: Segoe Ui, Ubuntu, sans-serif;
}

.item-key {
    display: flex;
    align-items: center;
    padding-left: 10px;
    font-size: 16px;
    font-weight: 600;
    text-shadow: 1px 1px 1px white;
}

.item-value {
    background-color: #94949440;
    padding: 10px;
    border-radius: 0px 4px 4px 0px;
    border-left: 1px solid #c3c3c3;
    color: #093a6d;
    text-shadow: 1px 1px 1px white;
    font-size: 16px;
}

</style>
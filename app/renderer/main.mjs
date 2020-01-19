import Vue from 'vue';
import App from '@/App';
import router from '@/router';
import { initNwWindow } from '@/modules/nw-base';

new Vue({
	el: '#App',
	router,
	render: h => h( App ),
	mounted: () => initNwWindow()
});

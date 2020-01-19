import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/pages/Home';
import Calculator from '@/pages/Calculator';
import About from '@/pages/About';

Vue.use(VueRouter);

const router = new VueRouter({
	routes: [
		{ path: '/about', name: 'About', component: About },
		{ path: '/home', name: 'Home', component: Home },
		{ path: '/calculator', name: 'Calculator', component: Calculator }
	]
});

// initial router view
router.push('about');

export default router;

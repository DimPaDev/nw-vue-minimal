export default [
	{ label: 'Nw.Js Version', value: global.process.versions['nw'] },
	{ label: 'Nw.Js Flavor', value: global.process.versions['nw-flavor'] },
	{ label: 'Chromium Version', value: global.process.versions['chromium'] },
	{ label: 'Node.Js Version', value: global.process.version },
	{ label: 'Platform', value: global.process.platform },
	{ label: 'Session Desktop', value: global.process.env['XDG_SESSION_DESKTOP'] },
	{ label: 'Session Type', value: global.process.env['XDG_SESSION_TYPE'] },
	// { label: 'Chromium Arguments', value: nw.App.manifest["chromium-args"] },
	{ label: 'Is Native Frame', value: nw.App.manifest.window.frame },
	{ label: 'Is Transparent Window', value: nw.App.manifest.window.transparent }
];

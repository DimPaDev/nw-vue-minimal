console.log('Initialize NW.js app....');

/* This JS file will be executed by NW.js in the background page
	on start and no window is opened by default.
	Usually you can do some initialization here and
	open the main window manually later. */

	const DEBUG = false;
	const manifest = nw.App.manifest;
	// const isDev = process.env.NODE_ENV === 'development';
	const winURL = 'index.html';

	global.isNwFramelessTransparentEnabled = true;

	// The Renderer Window (loaded by index.html) shows the rendering result
	// of the transpiled vue.js application
	nw.Window.open(winURL, {
		id: '0',
		title: 'App Title',
		icon: manifest.window.icon,
		show: manifest.window.show,
		show_in_taskbar: manifest.window.show_in_taskbar,
		position: manifest.window.position,
		min_width: manifest.window.min_width,
		min_height: manifest.window.min_height,
		width: manifest.window.width,
		height: manifest.window.height,
		fullscreen: manifest.window.fullscreen,
		frame: !global.isNwFramelessTransparentEnabled,
		transparent: global.isNwFramelessTransparentEnabled,
		resizable: manifest.window.resizable,
		always_on_top: manifest.window.always_on_top,
		kiosk: manifest.window.kiosk
	}, win => {
		if (DEBUG) win.showDevTools();
		win.on('loaded', () => win.show());
	});

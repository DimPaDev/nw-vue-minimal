const initNwWindow = () => {

	if (typeof global.nw !== undefined) {
		const win = nw.Window.get();
		const doc = win.window.document;
		const appTitlebar = doc.querySelector('.app-titlebar');
		const appContent = doc.querySelector('.app-content');
		if (global.isNwFramelessTransparentEnabled) {
			// WINDOW WITH CUSTOM FRAME
			doc.documentElement.style.cssText = `
				box-shadow: 0px 0px 4px 3px #0000004d;
				border-radius: 7px;
				height: calc(100% - 14px);
				margin: 7px;`;
			doc.body.style.cssText = `
				border: 6px solid #e8e8e882;
				box-shadow: inset 0px 0px 1px 1px #000000;
				border-radius: 7px;`;
			appTitlebar.style.display = 'flex';
			const contentHeight = doc.querySelector('.app-titlebar').offsetHeight / 2;
			appContent.style.height = `calc(100% - ${contentHeight}px)`;
		}
		else {
			// NATIVE WINDOW WITH FRAME
			appTitlebar.style.display = 'none';
			appContent.style.height = '100%';
		}
	}

};

export { initNwWindow }

(function () {
	try {
		let node = document.getElementById('main-video');
		let bounds = node.getBoundingClientRect();
		return {
			'top': bounds.top,
			'left': bounds.left,
			'right': bounds.right,
			'bottom': bounds.bottom,
			'width': bounds.width,
			'height': bounds.height
		};
		;
	} catch (err) {
		return {'error': err.message};
	}
})();
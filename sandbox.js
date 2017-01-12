(function () {
	try {
		(function () {
			var node = document.getElementsByTagName('body')[0];
			var newNode = document.createElement('div');
			newNode.innerHTML = '<div id="root"> <video></video></div>';
			node.appendChild(newNode);
		})();
		(function () {
			debugger;
			var node = document.getElementById(root);
			debugger;
			while (node.firstChild) {
				debugger;
				node.removeChild(node.firstChild);
			}
		})();
		(function () {
			var node = document.getElementById(root);
			var newNode = document.createElement('div');
			newNode.innerHTML = '<div> <span></span></div>';
			node.appendChild(newNode);
		})();
		;
		return true;
	} catch (err) {
		return err.message;
	}
})();
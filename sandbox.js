(function () {
	try {
		{
			let element = document.getElementById('second-video');
			let attribute = element.getAttribute('autoplay');
			return {'attributeName': 'autoplay', 'attributeValue': attribute};
		}
		;
	} catch (err) {
		return {'error': err.message};
	}
})();
function send(event, php) {
	console.log("Отправка запроса");
	event.preventDefault ? event.preventDefault() : event.returnValue = false;
	var req = new XMLHttpRequest();
	req.open('POST', php, true);

	req.onerror = function () {
		console.log("Ошибка отправки запроса");
	};
	req.send(new FormData(event.target));
}
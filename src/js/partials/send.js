function send(event, php) {
	console.log("Отправка запроса");
	event.preventDefault ? event.preventDefault() : event.returnValue = false;
	var req = new XMLHttpRequest();
	req.open('POST', php, true);
	req.onload = function () {
		if (req.status >= 200 && req.status < 400) {
			json = JSON.parse(this.response);
			console.log(json);

			if (json.result == "success") {
				console.log("Сообщение отправлено");
			} else {
				console.log("Сообщение не отправлено");
			}
		} else {
			console.log("Ошибка сервера " + req.status);
		}
	};

	req.onerror = function () {
		console.log("Ошибка отправки запроса");
	};
	req.send(new FormData(event.target));
}
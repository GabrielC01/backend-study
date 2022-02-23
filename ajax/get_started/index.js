var httpRequest;

document.querySelector('#ajaxButton').onclick = () => { makeRequest('test.xml') };

function makeRequest(url) {
	if (window.XMLHttpRequest) {
		httpRequest = new XMLHttpRequest();
	} else if (window.ActiveXObject) {
		try {
			httpRequest = ActiveXObject('Msxml12.XMLHTTP');
		} catch (e) {
			try {
				httpRequest = new ActiveXObject('Microsoft.XMLHTTP');
			} catch (e) {}
		}
	}

	if (!httpRequest) {
		alert('No XMLHTTP instance.');
		return false;
	}

	httpRequest.onreadystatechange = alertContents;
	httpRequest.open('GET', url, true);
	httpRequest.send();
}

function alertContents() {
	if (httpRequest.readyState === 4) {
		if (httpRequest.status === 200) {
			var xmldoc = httpRequest.responseXML;
			var root_node = xmldoc.getElementsByTagName('root').item(0);
			alert(root_node.firstChild.data);
		} else {
			alert('Problem with the request.');
		}
	}
}

// This module requires jQuery. In Node.JS, jsdom and xmlhttprequest are also required.

try {
	// Enable module to work with jQuery in Node.JS
	var jsdom = require('jsdom');
	var window = jsdom.jsdom().createWindow();
	var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

	var $ = require('jquery')(window);
	$.support.cors = true;
	$.ajaxSettings.xhr = function() {
		return new XMLHttpRequest;
	}
}
catch(e) {
	console.log(e);
}

var TriviaCrackApi = {};


TriviaCrackApi.getCardMachines = function (userId, timestamp, callback) {
	var type = 'GET';

	var headers = {
		"Origin": "https://preguntados.com",
		"Accept": "application/json, text/javascript, */*; q=0.01",
		"Eter-Session": "ap_session=@sessionId@",
		"etergames-referer": "true",
		"User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36",
		"Referer": "https://preguntados.com/game/?ref=br_tf",
		"Connection": "keep-alive",
		"Host": "api.preguntados.com",
		"Accept-Encoding": "gzip, deflate, sdch, br",
		"Accept-Language": "en-US,en;q=0.8",
		"Eter-Agent": "1|Web-FB|Chrome 53.0.2785.143|0|Windows|0|1.20.1|en|en||1",
		"Content-Type": "application/json",
	};

	var queryString = "?" + "_" + "=" + encodeURIComponent(timestamp) + "&";

	var data = "";

	var url = "https://api.preguntados.com/api/users/" + userId + "/machines" + queryString;

	$.ajax({
		type: type,
		url: url,
		headers: headers,
		data: data,
		beforeSend: function(xmlHttpRequest) {
			// Requires node-XMLHttpRequest version 1.5.1 or later to set some headers in Node.js
			if(xmlHttpRequest.setDisableHeaderCheck) xmlHttpRequest.setDisableHeaderCheck(true);
			return true;
		}
	})
	.always(
		function (response, error) {
			response = response || '';

			if (!response.responseText) {
				try {
					var $html = $(toStaticHTML(response));
				}
				catch(e) {
					var $html = $(response);
				}
			}
			else response = response.responseText;

			var fullResponse = {
				response: response,
			};

			callback(null, fullResponse);

		}
	);
};
if(typeof(exports) != "undefined") exports.getCardMachines = TriviaCrackApi.getCardMachines; // For nodeJS

TriviaCrackApi.purchaseCardFromMachine = function (machineId, userId, callback) {
	var type = 'POST';

	var headers = {
		"Origin": "https://preguntados.com",
		"Accept": "application/json, text/javascript, */*; q=0.01",
		"Eter-Session": "ap_session=@sessionId@",
		"etergames-referer": "true",
		"User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36",
		"Referer": "https://preguntados.com/game/?ref=br_tf",
		"Connection": "keep-alive",
		"Host": "api.preguntados.com",
		"Accept-Encoding": "gzip, deflate, br",
		"Accept-Language": "en-US,en;q=0.8",
		"Eter-Agent": "1|Web-FB|Chrome 53.0.2785.143|0|Windows|0|1.20.1|en|en||1",
		"Content-Type": "application/json",
	};

	var queryString = "?";

	var data = "";

	var url = "https://api.preguntados.com/api/users/" + userId + "/machines/" + machineId + "/cards" + queryString;

	$.ajax({
		type: type,
		url: url,
		headers: headers,
		data: data,
		beforeSend: function(xmlHttpRequest) {
			// Requires node-XMLHttpRequest version 1.5.1 or later to set some headers in Node.js
			if(xmlHttpRequest.setDisableHeaderCheck) xmlHttpRequest.setDisableHeaderCheck(true);
			return true;
		}
	})
	.always(
		function (response, error) {
			response = response || '';

			if (!response.responseText) {
				try {
					var $html = $(toStaticHTML(response));
				}
				catch(e) {
					var $html = $(response);
				}
			}
			else response = response.responseText;

			var fullResponse = {
				response: response,
			};

			callback(null, fullResponse);

		}
	);
};
if(typeof(exports) != "undefined") exports.purchaseCardFromMachine = TriviaCrackApi.purchaseCardFromMachine; // For nodeJS

TriviaCrackApi.getCardAlbum = function (userId, timestamp, callback) {
	var type = 'GET';

	var headers = {
		"Origin": "https://preguntados.com",
		"Accept": "application/json, text/javascript, */*; q=0.01",
		"Eter-Session": "ap_session=@sessionId@",
		"etergames-referer": "true",
		"User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36",
		"Referer": "https://preguntados.com/game/?ref=br_tf",
		"Connection": "keep-alive",
		"Host": "api.preguntados.com",
		"Accept-Encoding": "gzip, deflate, sdch, br",
		"Accept-Language": "en-US,en;q=0.8",
		"Eter-Agent": "1|Web-FB|Chrome 53.0.2785.143|0|Windows|0|1.20.1|en|en||1",
		"Content-Type": "application/json",
	};

	var queryString = "?" + "_" + "=" + encodeURIComponent(timestamp) + "&";

	var data = "";

	var url = "https://api.preguntados.com/api/users/" + userId + "/album" + queryString;

	$.ajax({
		type: type,
		url: url,
		headers: headers,
		data: data,
		beforeSend: function(xmlHttpRequest) {
			// Requires node-XMLHttpRequest version 1.5.1 or later to set some headers in Node.js
			if(xmlHttpRequest.setDisableHeaderCheck) xmlHttpRequest.setDisableHeaderCheck(true);
			return true;
		}
	})
	.always(
		function (response, error) {
			response = response || '';

			if (!response.responseText) {
				try {
					var $html = $(toStaticHTML(response));
				}
				catch(e) {
					var $html = $(response);
				}
			}
			else response = response.responseText;

			var fullResponse = {
				response: response,
			};

			callback(null, fullResponse);

		}
	);
};
if(typeof(exports) != "undefined") exports.getCardAlbum = TriviaCrackApi.getCardAlbum; // For nodeJS

TriviaCrackApi.getDashboard = function (userId, timestamp, callback) {
	var type = 'GET';

	var headers = {
		"Origin": "https://preguntados.com",
		"Accept": "application/json, text/javascript, */*; q=0.01",
		"Eter-Session": "ap_session=@sessionId@",
		"etergames-referer": "true",
		"User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36",
		"Referer": "https://preguntados.com/game/?fb_source=sidebar_bookmark",
		"Connection": "keep-alive",
		"Host": "api.preguntados.com",
		"Accept-Encoding": "gzip, deflate, sdch, br",
		"Accept-Language": "en-US,en;q=0.8",
		"Eter-Agent": "1|Web-FB|Chrome 53.0.2785.143|0|Windows|0|1.20.1|en|en||1",
		"Content-Type": "application/json",
	};

	var queryString = "?" + "app_config_version" + "=" + encodeURIComponent("1476940979") + "&" + "_" + "=" + encodeURIComponent(timestamp) + "&";

	var data = "";

	var url = "https://api.preguntados.com/api/users/" + userId + "/dashboard" + queryString;

	$.ajax({
		type: type,
		url: url,
		headers: headers,
		data: data,
		beforeSend: function(xmlHttpRequest) {
			// Requires node-XMLHttpRequest version 1.5.1 or later to set some headers in Node.js
			if(xmlHttpRequest.setDisableHeaderCheck) xmlHttpRequest.setDisableHeaderCheck(true);
			return true;
		}
	})
	.always(
		function (response, error) {
			response = response || '';

			if (!response.responseText) {
				try {
					var $html = $(toStaticHTML(response));
				}
				catch(e) {
					var $html = $(response);
				}
			}
			else response = response.responseText;

			var fullResponse = {
				response: response,
			};

			callback(null, fullResponse);

		}
	);
};
if(typeof(exports) != "undefined") exports.getDashboard = TriviaCrackApi.getDashboard; // For nodeJS

TriviaCrackApi.activateCardInSlot = function (slotId, userId, callback) {
	var type = 'POST';

	var headers = {
		"Origin": "https://preguntados.com",
		"Accept": "application/json, text/javascript, */*; q=0.01",
		"Eter-Session": "ap_session=@sessionId@",
		"etergames-referer": "true",
		"User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36",
		"Referer": "https://preguntados.com/game/?fb_source=rightcolumn",
		"Connection": "keep-alive",
		"Host": "api.preguntados.com",
		"Accept-Encoding": "gzip, deflate, br",
		"Accept-Language": "en-US,en;q=0.8",
		"Eter-Agent": "1|Web-FB|Chrome 53.0.2785.143|0|Windows|0|1.20.1|en|en||1",
		"Content-Type": "application/json",
	};

	var queryString = "?";

	var data = "";

	var url = "https://api.preguntados.com/api/users/" + userId + "/gacha-slots/" + slotId + "/boosts" + queryString;

	$.ajax({
		type: type,
		url: url,
		headers: headers,
		data: data,
		beforeSend: function(xmlHttpRequest) {
			// Requires node-XMLHttpRequest version 1.5.1 or later to set some headers in Node.js
			if(xmlHttpRequest.setDisableHeaderCheck) xmlHttpRequest.setDisableHeaderCheck(true);
			return true;
		}
	})
	.always(
		function (response, error) {
			response = response || '';

			if (!response.responseText) {
				try {
					var $html = $(toStaticHTML(response));
				}
				catch(e) {
					var $html = $(response);
				}
			}
			else response = response.responseText;

			var fullResponse = {
				response: response,
			};

			callback(null, fullResponse);

		}
	);
};
if(typeof(exports) != "undefined") exports.activateCardInSlot = TriviaCrackApi.activateCardInSlot; // For nodeJS

TriviaCrackApi.assignCardToSlot = function (slotId, userId, callback) {
	var type = 'POST';

	var headers = {
		"Origin": "https://preguntados.com",
		"Accept": "application/json, text/javascript, */*; q=0.01",
		"Eter-Session": "ap_session=@sessionId@",
		"etergames-referer": "true",
		"User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36",
		"Referer": "https://preguntados.com/game/?fb_source=rightcolumn",
		"Connection": "keep-alive",
		"Host": "api.preguntados.com",
		"Accept-Encoding": "gzip, deflate, br",
		"Accept-Language": "en-US,en;q=0.8",
		"Eter-Agent": "1|Web-FB|Chrome 53.0.2785.143|0|Windows|0|1.20.1|en|en||1",
		"Content-Type": "application/json",
	};

	var queryString = "?";

	var data = "";

	var url = "https://api.preguntados.com/api/users/" + userId + "/gacha-slots/" + slotId + "/cards" + queryString;

	$.ajax({
		type: type,
		url: url,
		headers: headers,
		data: data,
		beforeSend: function(xmlHttpRequest) {
			// Requires node-XMLHttpRequest version 1.5.1 or later to set some headers in Node.js
			if(xmlHttpRequest.setDisableHeaderCheck) xmlHttpRequest.setDisableHeaderCheck(true);
			return true;
		}
	})
	.always(
		function (response, error) {
			response = response || '';

			if (!response.responseText) {
				try {
					var $html = $(toStaticHTML(response));
				}
				catch(e) {
					var $html = $(response);
				}
			}
			else response = response.responseText;

			var fullResponse = {
				response: response,
			};

			callback(null, fullResponse);

		}
	);
};
if(typeof(exports) != "undefined") exports.assignCardToSlot = TriviaCrackApi.assignCardToSlot; // For nodeJS

TriviaCrackApi.GetUserData = function (UserID, TimestampInMilliseconds, callback) {
	var type = 'GET';

	var headers = {
		"Accept-Language": "en-US,en;q=0.8",
		"Host": "api.preguntados.com",
		"Referer": "https://preguntados.com/game/",
		"Accept-Encoding": "gzip, deflate, sdch",
		"User-Agent": "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.65 Safari/537.36",
		"Eter-Session": "ap_session=undefined",
		"Origin": "https://preguntados.com",
		"Connection": "keep-alive",
		"Accept": "application/json, text/javascript, */*; q=0.01",
		"Content-Type": "application/json; charset=utf-8",
		"Eter-Agent": "1|Web-FB|Chrome 39.0.2171.65|0|Windows|0|1.1||en||1",
		"etergames-referer": "true",
	};

	var queryString = "?" + "_" + "=" + encodeURIComponent(TimestampInMilliseconds) + "&";

	var data = "";

	var url = "https://api.preguntados.com/api/users/" + UserID + queryString;

	$.ajax({
		type: type,
		url: url,
		headers: headers,
		data: data,
		beforeSend: function(xmlHttpRequest) {
			// Requires node-XMLHttpRequest version 1.5.1 or later to set some headers in Node.js
			if(xmlHttpRequest.setDisableHeaderCheck) xmlHttpRequest.setDisableHeaderCheck(true);
			return true;
		}
	})
	.always(
		function (response, error) {
			response = response || '';

			if (!response.responseText) {
				try {
					var $html = $(toStaticHTML(response));
				}
				catch(e) {
					var $html = $(response);
				}
			}
			else response = response.responseText;

			var fullResponse = {
				response: response,
			};

			callback(null, fullResponse);

		}
	);
};
if(typeof(exports) != "undefined") exports.GetUserData = TriviaCrackApi.GetUserData; // For nodeJS

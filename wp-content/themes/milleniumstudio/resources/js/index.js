import "../scss/style.scss";

$(document).ready(function () {
	const _MSTheme = new MSTheme();
});

class MSTheme {
	constructor() {
		console.log("Projektowanie stron www MilleniumSutdio | http://www.milleniumstudio.pl/");
		this.initMsCookies();
		this.initHamburgerMenu();
	}

	initMsCookies() {
		window.onload = () => {
			const cookies = new MScookies();
		};
	}

	initHamburgerMenu() {
		const hamburgerButton = $("#hamburger");
		const menu = $("#menu");

		hamburgerButton.on("click", function (e) {
			e.preventDefault();
			if (hamburgerButton.hasClass("hamburger--opened") == false) {
				hamburgerButton.addClass("hamburger--opened");
				menu.addClass("menu--opened");
				$('body').css({ 'overflow': 'hidden' });
			} else {
				hamburgerButton.removeClass("hamburger--opened");
				menu.removeClass("menu--opened");
				$('body').css({ 'overflow': 'unset' });
			}
		});
	}
}

class MScookies {
	constructor() {
		this.WHCheckCookies();
	}
	WHCheckCookies() {
		if (this.WHReadCookie("cookies_accepted") != "T") {
			var message_container = document.createElement("div");
			message_container.id = "cookies-message-container";
			var html_code =
				'<div id="cookies-message" style="color: #000; padding: 10px 10px; font-size: 12px; line-height: 16px; display: flex; justify-content: space-between; align-items: center; position: fixed; bottom: 0px; right: 0; background-color: #fff; width: 100%; max-width: 320px; font-family: sans-serif; z-index: 999; box-sizing: border-box; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);">';
			html_code +=
				'<svg id="Capa_1" style="fill:#000" enable-background="new 0 0 556.235 556.235" height="30" viewBox="0 0 556.235 556.235" width="30" xmlns="http://www.w3.org/2000/svg"><path d="m278.118 0c-153.6 0-278.118 124.518-278.118 278.118s124.518 278.118 278.118 278.118c8.144 0 16.158-.533 24.126-1.218-4.327-10.325-6.743-21.652-6.743-33.547 0-24.433 10.151-46.429 26.381-62.219-5.701-12.89-8.999-27.073-8.999-42.075 0-57.6 46.694-104.294 104.294-104.294 15.002 0 29.184 3.297 42.075 8.999 15.791-16.23 37.786-26.381 62.219-26.381 11.895 0 23.222 2.415 33.547 6.741.685-7.968 1.218-15.98 1.218-24.124-.001-153.6-124.519-278.118-278.118-278.118zm-191.206 278.118c-9.599 0-17.382-7.783-17.382-17.382 0-9.601 7.783-17.382 17.382-17.382s17.382 7.781 17.382 17.382c0 9.599-7.783 17.382-17.382 17.382zm86.911 139.058c-19.201 0-34.765-15.566-34.765-34.765 0-19.201 15.564-34.765 34.765-34.765s34.765 15.564 34.765 34.765c0 19.199-15.564 34.765-34.765 34.765zm34.765-243.353c-19.201 0-34.765-15.566-34.765-34.765 0-19.201 15.564-34.765 34.765-34.765s34.765 15.564 34.765 34.765c0 19.199-15.564 34.765-34.765 34.765zm52.147 139.059c-9.599 0-17.382-7.783-17.382-17.382 0-9.601 7.783-17.382 17.382-17.382s17.382 7.781 17.382 17.382c.001 9.599-7.782 17.382-17.382 17.382zm104.294-243.353c9.599 0 17.382 7.781 17.382 17.382 0 9.599-7.783 17.382-17.382 17.382s-17.382-7.783-17.382-17.382c0-9.601 7.783-17.382 17.382-17.382zm17.383 173.824c-19.201 0-34.765-15.566-34.765-34.765 0-19.201 15.564-34.765 34.765-34.765s34.765 15.564 34.765 34.765c-.001 19.199-15.565 34.765-34.765 34.765z"/></svg>';
			html_code +=
				'<div style="display: inline-block; width: 60%; margin: 0 2%; text-align: justify;">Ta strona używa ciasteczek (cookies). ';
			html_code +=
				'<a href="' +
				privacylink +
				'" style="color: #000;">Dowiedz się więcej</a></div>';
			html_code +=
				'<a href="#" id="accept-cookies-checkbox" name="accept-cookies" style="background-color: #000; padding: 4% 7%; color: #FFF; display: inline-block; margin-left: 1%; text-decoration: none; font-size: 16px; cursor: pointer;">';
			html_code += "OK";
			html_code += "</a>";
			html_code += "</div>";
			message_container.innerHTML = html_code;
			document.body.appendChild(message_container);
			var _self = this;
			document.getElementById("accept-cookies-checkbox").addEventListener(
				"click",
				function (e) {
					e.preventDefault();
					_self.WHCloseCookiesWindow();
				},
				false
			);
		}
	}
	WHCloseCookiesWindow() {
		this.WHCreateCookie("cookies_accepted", "T", 365);
		document
			.getElementById("cookies-message-container")
			.removeChild(document.getElementById("cookies-message"));
	}
	WHReadCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(";");
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == " ") c = c.substring(1, c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
		}
		return null;
	}
	WHCreateCookie(name, value, days) {
		var date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		var expires = "; expires=" + date.toGMTString();
		document.cookie = name + "=" + value + expires + "; path=/";
	}
}



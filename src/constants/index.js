export const SIZES = Object.freeze({
	MINI:"mini",
	TINY:"tiny",
	SMALL:"small",
	MEDIUM:"medium",
	LARGE:"large",
	BIG:"big",
	HUGE:"huge",
	MASSIVE:"massive" 
});

export const COLORS = Object.freeze({
    RED: "red",
    BLUE: "blue",
	GREEN: "green",
	YELLOW: "yellow",
	TEAL: "teal",

	CUSTOM_TEAL: "#4ca5a157",
});

export const ROUTES = Object.freeze({
	HOME: "/",
	SIGNUP: "/signup",
	SERVICE_PROVIDER: "/service-provider",
	SIGNIN: "/signin",
});

export const API = Object.freeze({
	TEST_URL: () => "/api/test/url",
	ADD_URL: () => "/api/add/url",
	GET_LIST: () => "/api/urls",
	DELETE_URL: id => `/api/delete/url/${id}`,
	GET_WORDS: () => "/api/words",
	ADD_WORD: () => "/api/add/words",
	DELETE_WORD: id => `/api/delete/word/${id}`,
	REGISTER_USER: () => "/api/register/user",
	LOGIN_USER: () => "/api/login/user",
	LOGOUT_USER: () => "/api/logout/user",
	CHECK_TOKEN: () => "/api/checkToken",
});

export const PROTOCOL_TYPE = Object.freeze({
	HTTP: "HTTP",
	HTTPS: "HTTPS",
});

export const REG_EXPS = {
	URL: "^(http:\\/\\/www\\.|https:\\/\\/www\\.|http:\\/\\/|https:\\/\\/)?[a-z0-9]+([\\-\\.]{1}[a-z0-9]+)*\\.[a-z]{2,5}(:[0-9]{1,5})?(\\/.*)?$",
};
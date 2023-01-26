import { createStore } from "vuex";

const storage = createStore({
	state: { isAuthenticated: false, username: "", password: "" },
	mutations: {
		setAuthenticated(state, payload) {
			state.isAuthenticated = payload;
		},
		setUserProperty(state, payload) {
			state.username = payload.username;
			state.password = payload.password;
		},
	},
});

export default storage;

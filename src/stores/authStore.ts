import { writable } from 'svelte/store';
import type { UserInfo } from 'firebase/auth';

export enum AuthState {
	LOADING = 'LOADING',
	SIGNED_IN = 'SIGNED_IN',
	SIGN_IN = 'SIGN_IN' // (or logout)
}

const INIT_STATE = { isLoggedIn: false, firebaseControlled: false, authState: AuthState.LOADING };

function auth() {
	const { subscribe, set, update } = writable<{
		isLoggedIn: boolean;
		user?: UserInfo;
		firebaseControlled: boolean;
		authState: AuthState;
	}>(INIT_STATE);

	return {
		subscribe,
		user: (value, authState?: AuthState) =>
			update((prev) => {
				const isLoggedIn = !!value;
				return { ...prev, user: value, isLoggedIn, ...(authState && { authState }) };
			}),
		reset: () => set(INIT_STATE)
	};
}

const _auth = auth();
export default _auth;

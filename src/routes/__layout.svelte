<script lang="ts">
	import { getFirebaseApp, getFirebaseAuth } from '../firebase';
	import { onAuthStateChanged } from 'firebase/auth';
	import { onMount } from 'svelte';
	import { Container } from 'sveltestrap';
	import authStore, { AuthState } from '../stores/authStore';
	// import '../app.css';
	// import '../main.css';
	import {
		setPersistence,
		browserLocalPersistence,
		GoogleAuthProvider,
		signInWithPopup,
		signOut
	} from 'firebase/auth';

	let user = null;
	onMount(async () => {
		// const app = await getFirebaseApp();
		const auth = await getFirebaseAuth();
		await onAuthStateChanged(auth, async (newUser) => {
			if (newUser) {
				const uid = newUser.uid;
				user = newUser;
				user.idTokenResult = await user.getIdTokenResult();
			} else {
				user = null;
			}
			authStore.user(user, user ? AuthState.SIGNED_IN : AuthState.SIGN_IN);
		});
	});

	async function login() {
		const auth = await getFirebaseAuth();
		await setPersistence(auth, browserLocalPersistence);
		const provider = new GoogleAuthProvider();
		await signInWithPopup(auth, provider);
		// If we want to do page redirect we can do it here
	}

	async function logout() {
		const auth = await getFirebaseAuth();
		await signOut(auth);
	}
</script>

<div id="huro-app" class="app-wrapper">
	<!-- <nav class="navbar is-fixed-top is-transparent is-docked" aria-label="main navigation">
		<div class="navbar-brand">
			<a class="navbar-item" href="/">
				<div class="brand-icon">
					<img class="light-image-l" src="assets/img/logos/logo/logo.svg" alt="" />
					<img class="dark-image-l" src="assets/img/logos/logo/logo-light.svg" alt="" />
				</div>
			</a>

			<a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false">
				<span aria-hidden="true" />
				<span aria-hidden="true" />
				<span aria-hidden="true" />
			</a>
		</div>

		<div class="navbar-menu">
			<div class="navbar-start" />

			<div class="navbar-end">
				<div class="navbar-item">
					{#if $authStore.authState === AuthState.SIGNED_IN}
						<button on:click={logout} class="button h-button is-rounded is-primary is-raised">
							<strong>Logout</strong>
						</button>
					{:else if $authStore.authState === AuthState.SIGN_IN}
						<button on:click={login} class="button h-button is-rounded is-primary is-raised">
							<strong>Login</strong>
						</button>
					{:else}
						<p>Loading...</p>
					{/if}
				</div>
			</div>
		</div>
	</nav> -->

	<slot />
</div>

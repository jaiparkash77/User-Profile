<script lang="ts">
    // import 'bulma/css/bulma.css'
	import {
		setPersistence,
		browserLocalPersistence,
		GoogleAuthProvider,
		signInWithPopup,
		signOut
	} from 'firebase/auth';
	import authStore, { AuthState } from '../stores/authStore';
	import { getFirebaseAuth } from '../firebase';
	import Profile from '$lib/screens/Profile.svelte'
	import Button from '$lib/components/button/Button.svelte';
	import Tags from '$lib/components/tags/Tags.svelte';
	import OutlinedTags from '$lib/components/OutlinedTags/OutlinedTags.svelte';
	import Inputs from '$lib/components/inputs/Inputs.svelte';
	import BasicCards from '$lib/components/BasicCards/BasicCards.svelte';
import ColoredCard from '$lib/components/ColoredCard/ColoredCard.svelte';
import Settings from '$lib/screens/Settings/Settings.svelte';

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

<style lang="scss">
.box {
	background: $primary;
	.title {
		text-decoration: underline;
	}
}


</style>

		<!-- {#if $authStore.authState === AuthState.SIGNED_IN}
			<Profile />
		{:else}
			<p>You need to login</p>
		{/if} -->



<!-- <div class="box">
	<h1 class="title is-weight-400">
		Hello world
	</h1>
</div> -->

<Button />

<h2>Tags</h2>
<Tags />

<h2>Outlined Tags</h2>
<OutlinedTags />

<h2>Inputs</h2>
<Inputs />

<h2>BasicCards</h2>
<BasicCards />

<h2>ColoredCard</h2>
<ColoredCard />

<!-- <Settings/> -->
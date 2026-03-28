<script lang="ts">
  import Hero from '$lib/components/sections/Hero.svelte';
  import About from '$lib/components/sections/About.svelte';
  import Services from '$lib/components/sections/Services.svelte';
  import Booking from '$lib/components/sections/Booking.svelte';
  import { m } from '$lib/paraglide/messages.js';
</script>

<svelte:head>
  <title>{m.page_title()}</title>
  <meta name="description" content={m.page_description()}>
</svelte:head>

<Hero />
<About />
<Services />
<Booking />

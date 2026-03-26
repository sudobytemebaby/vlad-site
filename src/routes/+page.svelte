<script lang="ts">
  import Hero from '$lib/components/sections/Hero.svelte';
  import About from '$lib/components/sections/About.svelte';
  import Services from '$lib/components/sections/Services.svelte';
  import Booking from '$lib/components/sections/Booking.svelte';
  import Contacts from '$lib/components/sections/Contacts.svelte';
  import { t } from '$lib/i18n/index.svelte';
</script>

<svelte:head>
  <title>{t('page.title')}</title>
  <meta name="description" content="{t('page.description')}">
</svelte:head>

<Hero />
<About />
<Services />
<Booking />
<Contacts />

<script lang="ts">
  import Hero from '$lib/components/sections/Hero.svelte';
  import About from '$lib/components/sections/About.svelte';
  import Services from '$lib/components/sections/Services.svelte';
  import Booking from '$lib/components/sections/Booking.svelte';
  import Blog from '$lib/components/sections/Blog.svelte';
  import ContactForm from '$lib/components/sections/ContactForm.svelte';
  import Contacts from '$lib/components/sections/Contacts.svelte';
</script>

<svelte:head>
  <title>Нейрохирург Александр Викторович Смирнов | Москва</title>
  <meta name="description" content="Нейрохирург высшей категории в Москве. Хирургия позвоночника и головного мозга. Опыт более 15 лет. Запись на консультацию.">
</svelte:head>

<Hero />
<About />
<Services />
<Booking />
<Blog />
<ContactForm />
<Contacts />

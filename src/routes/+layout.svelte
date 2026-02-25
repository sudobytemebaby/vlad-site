<script lang="ts">
  import '../app.css';
  import Navbar from '$lib/components/layout/Navbar.svelte';
  import Footer from '$lib/components/layout/Footer.svelte';
  let { children } = $props();
</script>

<div class="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
  <Navbar />
  <main class="grow pt-16"> <!-- pt-16 to account for fixed navbar height -->
    {@render children()}
  </main>
  <Footer />
</div>

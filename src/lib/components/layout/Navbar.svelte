<script lang="ts">
  import { onMount } from 'svelte';
  import { Sun, Moon, Menu, X } from 'lucide-svelte';
  import { theme } from '$lib/stores/theme';
  
  let isMenuOpen = $state(false);
  let isScrolled = $state(false);

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function toggleTheme() {
    theme.update((current) => (current === 'light' ? 'dark' : 'light'));
  }

  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 10;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<nav
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b {isScrolled
    ? 'bg-surface/80 backdrop-blur-md border-border shadow-sm'
    : 'bg-transparent border-transparent'}"
>
  <div class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
    <!-- Logo -->
    <a href="#hero" class="text-xl font-bold font-sans text-foreground">
      Др. Смирнов
    </a>

    <!-- Desktop Navigation -->
    <div class="hidden md:flex items-center space-x-8">
      <a href="#about" class="text-sm font-medium text-muted hover:text-primary transition-colors">О враче</a>
      <a href="#services" class="text-sm font-medium text-muted hover:text-primary transition-colors">Услуги</a>
      <a href="#booking" class="text-sm font-medium text-muted hover:text-primary transition-colors">Запись</a>
      <a href="#blog" class="text-sm font-medium text-muted hover:text-primary transition-colors">Блог</a>
      <a href="#contacts" class="text-sm font-medium text-muted hover:text-primary transition-colors">Контакты</a>
    </div>

    <!-- Actions -->
    <div class="hidden md:flex items-center space-x-4">
      <button
        onclick={toggleTheme}
        class="p-2 rounded-full hover:bg-muted/10 text-foreground transition-colors cursor-pointer"
        aria-label="Toggle theme"
      >
        {#if $theme === 'dark'}
          <Sun size={20} />
        {:else}
          <Moon size={20} />
        {/if}
      </button>
      <a
        href="#booking"
        class="px-5 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm"
      >
        Записаться
      </a>
    </div>

    <!-- Mobile Menu Button -->
    <div class="md:hidden flex items-center space-x-4">
        <button
        onclick={toggleTheme}
        class="p-2 rounded-full hover:bg-muted/10 text-foreground transition-colors cursor-pointer"
        aria-label="Toggle theme"
      >
        {#if $theme === 'dark'}
          <Sun size={20} />
        {:else}
          <Moon size={20} />
        {/if}
      </button>
      <button
        onclick={toggleMenu}
        class="p-2 text-foreground hover:bg-muted/10 rounded-md transition-colors cursor-pointer"
        aria-label="Menu"
      >
        {#if isMenuOpen}
          <X size={24} />
        {:else}
          <Menu size={24} />
        {/if}
      </button>
    </div>
  </div>

  <!-- Mobile Menu Dropdown -->
  {#if isMenuOpen}
    <div class="md:hidden absolute top-full left-0 right-0 bg-surface border-b border-border shadow-lg p-4 flex flex-col space-y-4">
      <a href="#about" class="text-base font-medium text-foreground hover:text-primary" onclick={toggleMenu}>О враче</a>
      <a href="#services" class="text-base font-medium text-foreground hover:text-primary" onclick={toggleMenu}>Услуги</a>
      <a href="#booking" class="text-base font-medium text-foreground hover:text-primary" onclick={toggleMenu}>Запись</a>
      <a href="#blog" class="text-base font-medium text-foreground hover:text-primary" onclick={toggleMenu}>Блог</a>
      <a href="#contacts" class="text-base font-medium text-foreground hover:text-primary" onclick={toggleMenu}>Контакты</a>
      <a
        href="#booking"
        class="w-full text-center px-5 py-3 bg-primary text-white rounded-md text-base font-medium hover:bg-primary/90 transition-colors"
        onclick={toggleMenu}
      >
        Записаться
      </a>
    </div>
  {/if}
</nav>

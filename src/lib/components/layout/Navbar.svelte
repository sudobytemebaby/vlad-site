<script lang="ts">
  import { onMount } from 'svelte';
  import { Sun, Moon, Menu, X } from 'lucide-svelte';
  import { theme } from '$lib/stores/theme';
  import { Button } from '$lib/components/ui/button';
  
  let isMenuOpen = $state(false);
  let isScrolled = $state(false);
  let menuRef: HTMLDivElement | undefined = $state();

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function closeMenu() {
    isMenuOpen = false;
  }

  function toggleTheme() {
    theme.update((current) => (current === 'light' ? 'dark' : 'light'));
  }

  function handleClickOutside(event: MouseEvent) {
    if (menuRef && !menuRef.contains(event.target as Node) && isMenuOpen) {
      closeMenu();
    }
  }

  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 10;
    };
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
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
    <div class="hidden md:flex items-center space-x-2">
      <Button href="#about" variant="ghost" class="text-muted hover:text-primary">О враче</Button>
      <Button href="#services" variant="ghost" class="text-muted hover:text-primary">Услуги</Button>
      <Button href="#booking" variant="ghost" class="text-muted hover:text-primary">Запись</Button>
      <Button href="#blog" variant="ghost" class="text-muted hover:text-primary">Блог</Button>
      <Button href="#contacts" variant="ghost" class="text-muted hover:text-primary">Контакты</Button>
    </div>

    <!-- Actions -->
    <div class="hidden md:flex items-center space-x-4">
      <Button
        variant="ghost"
        size="icon"
        onclick={toggleTheme}
        aria-label="Toggle theme"
        class="rounded-full"
      >
        {#if $theme === 'dark'}
          <Sun size={20} />
        {:else}
          <Moon size={20} />
        {/if}
      </Button>
      
      <Button href="#booking">
        Записаться
      </Button>
    </div>

    <!-- Mobile Menu Button -->
    <div class="md:hidden flex items-center space-x-2">
      <Button
        variant="ghost"
        size="icon"
        onclick={toggleTheme}
        aria-label="Toggle theme"
        class="rounded-full"
      >
        {#if $theme === 'dark'}
          <Sun size={20} />
        {:else}
          <Moon size={20} />
        {/if}
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        onclick={toggleMenu}
        aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
      >
        {#if isMenuOpen}
          <X size={24} />
        {:else}
          <Menu size={24} />
        {/if}
      </Button>
    </div>
  </div>

  <!-- Mobile Menu Dropdown -->
  {#if isMenuOpen}
    <div id="mobile-menu" bind:this={menuRef} class="md:hidden absolute top-full left-0 right-0 bg-surface border-b border-border shadow-lg p-4 flex flex-col space-y-2">
      <Button href="#about" variant="ghost" class="w-full justify-start" onclick={closeMenu}>О враче</Button>
      <Button href="#services" variant="ghost" class="w-full justify-start" onclick={closeMenu}>Услуги</Button>
      <Button href="#booking" variant="ghost" class="w-full justify-start" onclick={closeMenu}>Запись</Button>
      <Button href="#blog" variant="ghost" class="w-full justify-start" onclick={closeMenu}>Блог</Button>
      <Button href="#contacts" variant="ghost" class="w-full justify-start" onclick={closeMenu}>Контакты</Button>
      <Button href="#booking" class="w-full" onclick={closeMenu}>
        Записаться
      </Button>
    </div>
  {/if}
</nav>

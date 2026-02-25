<script lang="ts">
  import { onMount } from 'svelte';
  import { Sun, Moon, Menu } from 'lucide-svelte';
  import { theme } from '$lib/stores/theme';
  import { Button } from '$lib/components/ui/button';
  import * as Sheet from '$lib/components/ui/sheet';
  
  let isSheetOpen = $state(false);
  let isScrolled = $state(false);

  function closeSheet() {
    isSheetOpen = false;
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
    : 'bg-background border-border'}"
>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
    <!-- Logo -->
    <a href="#hero" class="text-xl font-bold font-sans text-foreground">
     Владислав Кельмаков 
    </a>

    <!-- Desktop Navigation -->
    <div class="hidden md:flex items-center space-x-1">
      <Button href="#about" variant="ghost">О враче</Button>
      <Button href="#services" variant="ghost">Услуги</Button>
      <Button href="#booking" variant="ghost">Запись</Button>
      <Button href="#blog" variant="ghost">Блог</Button>
      <Button href="#contacts" variant="ghost">Контакты</Button>
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
      
      <Sheet.Root bind:open={isSheetOpen}>
        <Sheet.Trigger
          class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 w-10"
          aria-label="Открыть меню"
        >
          <Menu size={24} />
        </Sheet.Trigger>
        <Sheet.Content side="right" class="w-[280px] sm:w-[350px]">
          <Sheet.Header>
            <Sheet.Title class="text-left">Меню</Sheet.Title>
            <Sheet.Description class="text-left">
              Навигация по сайту
            </Sheet.Description>
          </Sheet.Header>
          
          <div class="flex flex-col space-y-2 py-6">
            <Button href="#about" variant="ghost" class="w-full justify-start" onclick={closeSheet}>О враче</Button>
            <Button href="#services" variant="ghost" class="w-full justify-start" onclick={closeSheet}>Услуги</Button>
            <Button href="#booking" variant="ghost" class="w-full justify-start" onclick={closeSheet}>Запись</Button>
            <Button href="#blog" variant="ghost" class="w-full justify-start" onclick={closeSheet}>Блог</Button>
            <Button href="#contacts" variant="ghost" class="w-full justify-start" onclick={closeSheet}>Контакты</Button>
          </div>
          
          <Sheet.Footer class="flex-col space-y-3 sm:space-y-3">
            <Button href="#booking" class="w-full" onclick={closeSheet}>
              Записаться
            </Button>
          </Sheet.Footer>
        </Sheet.Content>
      </Sheet.Root>
    </div>
  </div>
</nav>

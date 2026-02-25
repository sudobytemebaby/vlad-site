<script lang="ts">
  import { onMount } from 'svelte';
  import { Sun, Moon, Menu } from 'lucide-svelte';
  import { theme } from '$lib/stores/theme';
  import { Button } from '$lib/components/ui/button';
  import * as Sheet from '$lib/components/ui/sheet';
  
  let isSheetOpen = $state(false);
  let isScrolled = $state(false);
  let isOnHero = $state(true);

  function closeSheet() {
    isSheetOpen = false;
  }

  function toggleTheme() {
    theme.update((current) => (current === 'light' ? 'dark' : 'light'));
  }

  onMount(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      isScrolled = scrollY > 10;
      // Hero section is 100vh, so check if we're still within it
      isOnHero = scrollY < window.innerHeight - 100;
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<nav
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {isOnHero 
    ? 'bg-transparent border-transparent' 
    : isScrolled 
      ? 'bg-surface/95 backdrop-blur-md border-border shadow-sm' 
      : 'bg-transparent border-transparent'}"
>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
    <!-- Logo -->
    <a href="#hero" class="text-xl font-bold font-sans {isOnHero ? 'text-white' : 'text-foreground'}">
      Др. Смирнов
    </a>

    <!-- Desktop Navigation -->
    <div class="hidden md:flex items-center space-x-1">
      <Button href="#about" variant="ghost" class="{isOnHero ? 'text-white/90 hover:text-white hover:bg-white/10' : 'text-muted-foreground hover:text-primary'}">О враче</Button>
      <Button href="#services" variant="ghost" class="{isOnHero ? 'text-white/90 hover:text-white hover:bg-white/10' : 'text-muted-foreground hover:text-primary'}">Услуги</Button>
      <Button href="#booking" variant="ghost" class="{isOnHero ? 'text-white/90 hover:text-white hover:bg-white/10' : 'text-muted-foreground hover:text-primary'}">Запись</Button>
      <Button href="#blog" variant="ghost" class="{isOnHero ? 'text-white/90 hover:text-white hover:bg-white/10' : 'text-muted-foreground hover:text-primary'}">Блог</Button>
      <Button href="#contacts" variant="ghost" class="{isOnHero ? 'text-white/90 hover:text-white hover:bg-white/10' : 'text-muted-foreground hover:text-primary'}">Контакты</Button>
    </div>

    <!-- Actions -->
    <div class="hidden md:flex items-center space-x-4">
      <Button
        variant="ghost"
        size="icon"
        onclick={toggleTheme}
        aria-label="Toggle theme"
        class="rounded-full {isOnHero ? 'text-white hover:text-white hover:bg-white/10' : ''}"
      >
        {#if $theme === 'dark'}
          <Sun size={20} />
        {:else}
          <Moon size={20} />
        {/if}
      </Button>
      
      <Button href="#booking" variant="{isOnHero ? 'outline' : 'default'}" class="{isOnHero ? 'border-white text-white hover:bg-white hover:text-slate-950' : ''}">
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
        class="rounded-full {isOnHero ? 'text-white hover:text-white hover:bg-white/10' : ''}"
      >
        {#if $theme === 'dark'}
          <Sun size={20} />
        {:else}
          <Moon size={20} />
        {/if}
      </Button>
      
      <Sheet.Root bind:open={isSheetOpen}>
        <Sheet.Trigger>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Открыть меню"
            class="{isOnHero ? 'text-white hover:text-white hover:bg-white/10' : ''}"
          >
            <Menu size={24} />
          </Button>
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

<script lang="ts">
  import { Sun, Moon, Menu, Globe } from '@lucide/svelte';
  import { theme } from '$lib/stores/theme.svelte';
  import { locale, locales, t } from '$lib/i18n/index.svelte';
  import { Button } from '$lib/components/ui/button';
  import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
  import * as Sheet from '$lib/components/ui/sheet';
  
  let isSheetOpen = $state(false);
  let isScrolled = $state(false);

  $effect(() => {
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
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
    <a href="#hero" class="text-base sm:text-xl font-bold font-sans text-foreground truncate mr-2">
      {t('doctor.fullName')}
    </a>

    <div class="hidden md:flex items-center space-x-1">
      <Button href="#about" variant="ghost">{t('nav.about')}</Button>
      <Button href="#services" variant="ghost">{t('nav.services')}</Button>
      <Button href="#booking" variant="ghost">{t('nav.booking')}</Button>
      <Button href="#contacts" variant="ghost">{t('nav.contacts')}</Button>
    </div>

    <div class="hidden md:flex items-center space-x-2">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger aria-label="Change language" class="inline-flex items-center justify-center rounded-full h-9 w-9 hover:bg-accent hover:text-accent-foreground transition-colors">
          <Globe size={20} />
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          {#each locales as lang}
            <DropdownMenu.Item onclick={() => locale.setLocale(lang.code)} class={locale.current === lang.code ? 'font-semibold' : ''}>
              <span class="mr-2">{lang.flag}</span>
              <span>{lang.label}</span>
            </DropdownMenu.Item>
          {/each}
        </DropdownMenu.Content>
      </DropdownMenu.Root>

      <Button
        variant="ghost"
        size="icon"
        onclick={() => theme.toggleTheme()}
        aria-label="Toggle theme"
        class="rounded-full"
      >
        {#if theme.current === 'dark'}
          <Sun size={20} />
        {:else}
          <Moon size={20} />
        {/if}
      </Button>
      
      <Button href="#booking">
        {t('nav.bookNow')}
      </Button>
    </div>

    <div class="md:hidden flex items-center space-x-1">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger aria-label="Change language" class="inline-flex items-center justify-center rounded-full h-9 w-9 hover:bg-accent hover:text-accent-foreground transition-colors">
          <Globe size={20} />
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          {#each locales as lang}
            <DropdownMenu.Item onclick={() => locale.setLocale(lang.code)} class={locale.current === lang.code ? 'font-semibold' : ''}>
              <span class="mr-2">{lang.flag}</span>
              <span>{lang.label}</span>
            </DropdownMenu.Item>
          {/each}
        </DropdownMenu.Content>
      </DropdownMenu.Root>

      <Button
        variant="ghost"
        size="icon"
        onclick={() => theme.toggleTheme()}
        aria-label="Toggle theme"
        class="rounded-full"
      >
        {#if theme.current === 'dark'}
          <Sun size={20} />
        {:else}
          <Moon size={20} />
        {/if}
      </Button>
      
      <Sheet.Root>
        <Sheet.Trigger
          class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 w-10"
          aria-label="Открыть меню"
        >
          <Menu size={24} />
        </Sheet.Trigger>
        <Sheet.Content side="right" class="w-[280px] sm:w-[350px]">
          <Sheet.Header>
            <Sheet.Title class="text-left">{t('nav.menu')}</Sheet.Title>
            <Sheet.Description class="text-left">
              {t('nav.navigation')}
            </Sheet.Description>
          </Sheet.Header>
          
          <div class="flex flex-col space-y-2 py-6">
            <Button href="#about" variant="ghost" class="w-full justify-start">{t('nav.about')}</Button>
            <Button href="#services" variant="ghost" class="w-full justify-start">{t('nav.services')}</Button>
            <Button href="#booking" variant="ghost" class="w-full justify-start">{t('nav.booking')}</Button>
            <Button href="#contacts" variant="ghost" class="w-full justify-start">{t('nav.contacts')}</Button>
          </div>
          
          <Sheet.Footer class="flex-col space-y-3 sm:space-y-3">
            <Button href="#booking" class="w-full">
              {t('nav.bookNow')}
            </Button>
          </Sheet.Footer>
        </Sheet.Content>
      </Sheet.Root>
    </div>
  </div>
</nav>

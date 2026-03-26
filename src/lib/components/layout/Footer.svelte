<script lang="ts">
  import { Separator } from '$lib/components/ui/separator';
  import { t } from '$lib/i18n/index.svelte';
</script>

<footer class="bg-surface border-t border-border py-8 sm:py-12 text-center md:text-left">
  <div class="max-w-6xl mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-sm mb-6 sm:mb-8">
      <div class="space-y-2 sm:space-y-4">
        <h3 class="text-lg sm:text-xl font-display font-bold text-foreground">{t('doctor.fullName')}</h3>
        <p class="text-muted-foreground text-sm">{t('footer.neurosurgeon')}</p>
      </div>
      <nav aria-label="Footer navigation" class="space-y-2 sm:space-y-4">
        <ul class="space-y-1.5 sm:space-y-2">
          <li><a href="#about" class="text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 rounded">{t('nav.about')}</a></li>
          <li><a href="#services" class="text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 rounded">{t('nav.services')}</a></li>
          <li><a href="#booking" class="text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 rounded">{t('nav.booking')}</a></li>
          <li><a href="#contacts" class="text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 rounded">{t('nav.contacts')}</a></li>
        </ul>
      </nav>
      <div class="space-y-2 sm:space-y-4 md:text-right">
        <p class="text-muted-foreground text-xs sm:text-sm">&copy; {new Date().getFullYear()} {t('doctor.fullName')}. {t('footer.copyright')}</p>
        <a href="#" class="text-xs text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 rounded">{t('footer.policy')}</a>
      </div>
    </div>
    <Separator class="my-4 sm:my-8" />
    <div>
      <p class="text-[0.65rem] sm:text-xs text-muted-foreground/60 text-center md:text-left">
        {t('footer.disclaimer')}
      </p>
    </div>
  </div>
</footer>

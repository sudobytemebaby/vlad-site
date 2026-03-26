<script lang="ts">
  import { placeholder } from '$lib/data/placeholder';
  import { t } from '$lib/i18n/index.svelte';
  import { Phone, Mail, Send } from '@lucide/svelte';
  import { formatPhoneNumber } from '$lib/utils';
</script>

<section id="contacts" class="py-12 sm:py-16 lg:py-20 bg-background">
  <div class="max-w-6xl mx-auto px-4">
    <div class="text-center mb-8 sm:mb-12">
      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-foreground mb-3 sm:mb-4">
        {t('contacts.title')}
      </h2>
      <p class="text-sm sm:text-base text-muted-foreground">
        {t('contacts.subtitle')}
      </p>
    </div>

    <div class="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4 sm:gap-8">
      <a href="tel:{formatPhoneNumber(placeholder.doctor.contacts.phone)}" class="flex items-center gap-3 hover:text-primary transition-colors px-4 py-3 sm:p-0 rounded-xl sm:rounded-none bg-surface sm:bg-transparent">
        <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
          <Phone size={18} />
        </div>
        <span class="font-mono text-sm sm:text-base">{placeholder.doctor.contacts.phone}</span>
      </a>

      <a href="mailto:{placeholder.doctor.contacts.email}" class="flex items-center gap-3 hover:text-primary transition-colors px-4 py-3 sm:p-0 rounded-xl sm:rounded-none bg-surface sm:bg-transparent">
        <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
          <Mail size={18} />
        </div>
        <span class="text-sm sm:text-base">{placeholder.doctor.contacts.email}</span>
      </a>

      <a href="{placeholder.doctor.contacts.telegram}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 hover:text-primary transition-colors px-4 py-3 sm:p-0 rounded-xl sm:rounded-none bg-surface sm:bg-transparent">
        <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
          <Send size={18} />
        </div>
        <span class="text-sm sm:text-base">{placeholder.doctor.contacts.telegram.replace('https://t.me/', '@')}</span>
      </a>
    </div>
  </div>
</section>

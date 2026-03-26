<script lang="ts">
  import { placeholder } from '$lib/data/placeholder';
  import { t } from '$lib/i18n/index.svelte';
  import { MapPin, Phone, Clock } from '@lucide/svelte';
  import * as Card from '$lib/components/ui/card';
  import { formatPhoneNumber } from '$lib/utils';
</script>

<section id="booking" class="py-12 sm:py-16 lg:py-20 bg-surface">
  <div class="max-w-6xl mx-auto px-4">
    <div class="text-center mb-8 sm:mb-12">
      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-foreground mb-3 sm:mb-4">
        {t('booking.title')}
      </h2>
      <p class="text-sm sm:text-lg text-muted-foreground">
        {t('booking.subtitle')}
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
      <div class="space-y-4 sm:space-y-6">
        <div class="flex items-start gap-3 sm:gap-4">
          <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
            <MapPin size={18} />
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-base sm:text-lg font-sans font-semibold mb-0.5 sm:mb-1">{t('booking.address')}</p>
            <p class="text-sm sm:text-base text-muted-foreground">{placeholder.doctor.contacts.address}</p>
          </div>
        </div>

        <div class="flex items-start gap-3 sm:gap-4">
          <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
            <Clock size={18} />
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-base sm:text-lg font-sans font-semibold mb-0.5 sm:mb-1">{t('booking.hours')}</p>
            <p class="text-sm sm:text-base text-muted-foreground">{placeholder.doctor.contacts.hours}</p>
          </div>
        </div>

        <div class="inline-flex items-center gap-2.5 sm:gap-3 bg-background px-4 sm:px-6 py-3 sm:py-4 rounded-xl border border-border shadow-sm">
          <Phone size={18} class="text-primary flex-shrink-0" />
          <a href={`tel:${formatPhoneNumber(placeholder.doctor.contacts.phone)}`} class="font-mono font-semibold text-base sm:text-lg text-foreground hover:text-primary transition-colors">
            {placeholder.doctor.contacts.phone}
          </a>
        </div>
      </div>

      <Card.Root class="h-48 sm:h-64 lg:h-auto lg:min-h-[300px] flex items-center justify-center relative overflow-hidden group">
        <div class="absolute inset-0 bg-gradient-to-tr from-muted/5 to-transparent pointer-events-none"></div>
        <div class="text-center space-y-2">
          <MapPin size={40} class="text-muted-foreground/30 mx-auto" />
          <Card.Description class="font-medium text-base sm:text-lg">{t('booking.map')}</Card.Description>
        </div>
      </Card.Root>
    </div>
  </div>
</section>

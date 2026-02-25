<script lang="ts">
  import { placeholder } from '$lib/data/placeholder';
  import { formatPhoneNumber } from '$lib/utils';
  import { Calendar, Phone } from 'lucide-svelte';
  import * as Card from '$lib/components/ui/card';
</script>

<section id="booking" class="py-20 bg-surface">
  <div class="max-w-4xl mx-auto px-4 text-center">
    <div class="mb-12">
      <h2 class="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
        Записаться на консультацию
      </h2>
      <p class="text-lg text-muted-foreground">
        Выберите удобное время для приёма
      </p>
    </div>

    <!-- Booking Widget Placeholder -->
    <Card.Root class="border-2 border-dashed h-64 flex items-center justify-center mb-8 relative overflow-hidden group">
      <div class="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors pointer-events-none"></div>
      <Card.Content class="text-center p-6 space-y-4 max-w-sm mx-auto">
        <Calendar class="w-12 h-12 text-muted-foreground/50 mx-auto" />
        <p class="text-muted-foreground font-medium">
          [ Здесь будет виджет онлайн-записи ПроДокторов / НаПоправку ]
        </p>
      </Card.Content>
    </Card.Root>

    <div class="inline-flex items-center gap-2 text-muted-foreground bg-background px-6 py-3 rounded-full border border-border shadow-sm">
      <span class="text-sm">Или свяжитесь по телефону:</span>
      <a href={`tel:${formatPhoneNumber(placeholder.doctor.contacts.phone)}`} class="font-mono font-semibold text-foreground hover:text-primary transition-colors">
        {placeholder.doctor.contacts.phone}
      </a>
      <Phone size={16} class="ml-1" />
    </div>
  </div>
</section>

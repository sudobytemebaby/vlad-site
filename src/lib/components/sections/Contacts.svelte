<script lang="ts">
  import { placeholder } from '$lib/data/placeholder';
  import { formatPhoneNumber } from '$lib/utils';
  import { MapPin, Phone, Mail, Send, Clock } from 'lucide-svelte';
  import * as Card from '$lib/components/ui/card';
</script>

<section id="contacts" class="py-20 bg-background">
  <div class="max-w-6xl mx-auto px-4">
    <div class="text-center mb-12">
      <h2 class="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
        Контакты
      </h2>
      <p class="text-base text-muted-foreground">
        Принимаю пациентов в Москве.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <!-- Contact Info -->
      <div class="space-y-4">
        <Card.Root class="flex items-start gap-4 border-0 shadow-none bg-transparent">
          <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
            <MapPin size={20} />
          </div>
          <div class="flex-1">
            <Card.Title class="text-lg font-sans mb-1">Адрес приема</Card.Title>
            <Card.Description>{placeholder.doctor.contacts.address}</Card.Description>
          </div>
        </Card.Root>

        <Card.Root class="flex items-start gap-4 border-0 shadow-none bg-transparent">
          <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
            <Phone size={20} />
          </div>
          <div class="flex-1">
            <Card.Title class="text-lg font-sans mb-1">Телефон</Card.Title>
            <Card.Description>
              <a href={`tel:${formatPhoneNumber(placeholder.doctor.contacts.phone)}`} class="hover:text-primary transition-colors font-mono">
                {placeholder.doctor.contacts.phone}
              </a>
            </Card.Description>
          </div>
        </Card.Root>

        <Card.Root class="flex items-start gap-4 border-0 shadow-none bg-transparent">
          <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
            <Mail size={20} />
          </div>
          <div class="flex-1">
            <Card.Title class="text-lg font-sans mb-1">Email</Card.Title>
            <Card.Description>
              <a href={`mailto:${placeholder.doctor.contacts.email}`} class="hover:text-primary transition-colors">
                {placeholder.doctor.contacts.email}
              </a>
            </Card.Description>
          </div>
        </Card.Root>
        
        <Card.Root class="flex items-start gap-4 border-0 shadow-none bg-transparent">
          <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
            <Send size={20} />
          </div>
          <div class="flex-1">
            <Card.Title class="text-lg font-sans mb-1">Telegram</Card.Title>
            <Card.Description>
              <a href={placeholder.doctor.contacts.telegram} target="_blank" rel="noopener noreferrer" class="hover:text-primary transition-colors">
                @smirnov_neuro
              </a>
            </Card.Description>
          </div>
        </Card.Root>

        <Card.Root class="flex items-start gap-4 border-0 shadow-none bg-transparent">
          <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
            <Clock size={20} />
          </div>
          <div class="flex-1">
            <Card.Title class="text-lg font-sans mb-1">Время работы</Card.Title>
            <Card.Description>{placeholder.doctor.contacts.hours}</Card.Description>
          </div>
        </Card.Root>
      </div>

      <!-- Map Placeholder -->
      <Card.Root class="h-96 md:h-full min-h-[300px] flex items-center justify-center relative overflow-hidden group">
        <div class="absolute inset-0 bg-gradient-to-tr from-muted/5 to-transparent pointer-events-none"></div>
        <div class="text-center space-y-2">
          <MapPin size={48} class="text-muted-foreground/30 mx-auto" />
          <Card.Description class="font-medium text-lg">[ Карта ]</Card.Description>
        </div>
      </Card.Root>
    </div>
  </div>
</section>

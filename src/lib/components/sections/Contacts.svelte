<script lang="ts">
  import { placeholder } from '$lib/data/placeholder';
  import { MapPin, Phone, Mail, Send, Clock } from 'lucide-svelte';
</script>

<section id="contacts" class="py-20 bg-background">
  <div class="max-w-6xl mx-auto px-4">
    <div class="text-center mb-12">
      <h2 class="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
        Контакты
      </h2>
      <p class="text-base text-muted/90">
        Принимаю пациентов в Москве.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <!-- Contact Info -->
      <div class="space-y-8">
        <div class="flex items-start gap-4">
          <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
            <MapPin size={20} />
          </div>
          <div>
            <h3 class="text-lg font-bold font-sans text-foreground mb-1">Адрес приема</h3>
            <p class="text-muted/90">{placeholder.doctor.contacts.address}</p>
          </div>
        </div>

        <div class="flex items-start gap-4">
          <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
            <Phone size={20} />
          </div>
          <div>
            <h3 class="text-lg font-bold font-sans text-foreground mb-1">Телефон</h3>
            <a href={`tel:${placeholder.doctor.contacts.phone.replace(/[^0-9+]/g, '')}`} class="text-muted/90 hover:text-primary transition-colors font-mono">
              {placeholder.doctor.contacts.phone}
            </a>
          </div>
        </div>

        <div class="flex items-start gap-4">
          <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
            <Mail size={20} />
          </div>
          <div>
            <h3 class="text-lg font-bold font-sans text-foreground mb-1">Email</h3>
            <a href={`mailto:${placeholder.doctor.contacts.email}`} class="text-muted/90 hover:text-primary transition-colors">
              {placeholder.doctor.contacts.email}
            </a>
          </div>
        </div>
        
         <div class="flex items-start gap-4">
          <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
            <Send size={20} />
          </div>
          <div>
            <h3 class="text-lg font-bold font-sans text-foreground mb-1">Telegram</h3>
            <a href={placeholder.doctor.contacts.telegram} target="_blank" rel="noopener noreferrer" class="text-muted/90 hover:text-primary transition-colors">
              @smirnov_neuro
            </a>
          </div>
        </div>

        <div class="flex items-start gap-4">
          <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
            <Clock size={20} />
          </div>
          <div>
            <h3 class="text-lg font-bold font-sans text-foreground mb-1">Время работы</h3>
            <p class="text-muted/90">{placeholder.doctor.contacts.hours}</p>
          </div>
        </div>
      </div>

      <!-- Map Placeholder -->
      <div class="h-96 md:h-full min-h-[300px] bg-muted/10 rounded-2xl border border-border flex items-center justify-center relative overflow-hidden group">
         <div class="absolute inset-0 bg-gradient-to-tr from-muted/5 to-transparent pointer-events-none"></div>
         <div class="text-center space-y-2">
            <MapPin size={48} class="text-muted/30 mx-auto" />
            <span class="text-muted font-medium text-lg">[ Карта ]</span>
         </div>
      </div>
    </div>
  </div>
</section>

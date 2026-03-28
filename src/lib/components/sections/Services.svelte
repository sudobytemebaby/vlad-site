<script lang="ts">
  import { m } from '$lib/paraglide/messages.js';
  import { Activity, Brain, Shield, MessageSquare, Stethoscope, Heart } from '@lucide/svelte';
  import * as Card from '$lib/components/ui/card';

  const services = [
    { Icon: Activity, title: () => m.services_spine(), desc: () => m.services_spine_desc() },
    { Icon: Brain, title: () => m.services_oncology(), desc: () => m.services_oncology_desc() },
    { Icon: Shield, title: () => m.services_hernia(), desc: () => m.services_hernia_desc() },
    { Icon: MessageSquare, title: () => m.services_second_opinion(), desc: () => m.services_second_opinion_desc() },
    { Icon: Stethoscope, title: () => m.services_consultation(), desc: () => m.services_consultation_desc() },
    { Icon: Heart, title: () => m.services_rehab(), desc: () => m.services_rehab_desc() },
  ];
</script>

<section id="services" class="py-12 sm:py-16 lg:py-24 bg-background">
  <div class="max-w-6xl mx-auto px-4">
    <div class="text-center max-w-2xl mx-auto mb-8 sm:mb-12 lg:mb-16">
      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
        {m.services_title()}
      </h2>
      <p class="text-sm sm:text-base text-muted-foreground leading-relaxed">
        {m.services_subtitle()}
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
      {#each services as service}
        {@const Icon = service.Icon}
        <Card.Root class="flex flex-col h-full transition-all hover:shadow-md hover:-translate-y-1 group">
          <Card.Header class="pb-2 sm:pb-3">
            <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3 sm:mb-4">
              <Icon size={22} />
            </div>
            <Card.Title class="text-lg sm:text-xl font-sans">{service.title()}</Card.Title>
          </Card.Header>
          <Card.Content class="flex-grow pt-0">
            <Card.Description class="text-xs sm:text-sm leading-relaxed">
              {service.desc()}
            </Card.Description>
          </Card.Content>
        </Card.Root>
      {/each}
    </div>
  </div>
</section>

<script lang="ts">
  import { placeholder } from '$lib/data/placeholder';
  import { Activity, Brain, Shield, MessageSquare, Stethoscope, Heart } from 'lucide-svelte';
  import type { SvelteComponent } from 'svelte';
  import type { IconProps } from 'lucide-svelte';
  import * as Card from '$lib/components/ui/card';
  
  const iconMap: Record<string, typeof SvelteComponent<IconProps>> = {
    Activity,
    Brain,
    Shield,
    MessageSquare,
    Stethoscope,
    Heart,
  };
</script>

<section id="services" class="py-20 lg:py-24 bg-background">
  <div class="max-w-6xl mx-auto px-4">
    <div class="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
      <h2 class="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
        Мои услуги
      </h2>
      <p class="text-base text-muted-foreground leading-relaxed">
        Специализируюсь на диагностике и лечении заболеваний нервной системы, включая хирургию позвоночника и нейроонкологию.
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {#each placeholder.services as service}
        <Card.Root class="flex flex-col h-full transition-all hover:shadow-md hover:-translate-y-1 group">
          <Card.Header>
            <div class="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
              <svelte:component this={iconMap[service.icon]} size={24} />
            </div>
            <Card.Title class="text-xl font-sans">{service.title}</Card.Title>
          </Card.Header>
          <Card.Content class="flex-grow">
            <Card.Description class="text-sm leading-relaxed">
              {service.description}
            </Card.Description>
          </Card.Content>
        </Card.Root>
      {/each}
    </div>
  </div>
</section>

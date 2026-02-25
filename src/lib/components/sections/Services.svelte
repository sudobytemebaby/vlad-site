<script lang="ts">
  import { placeholder } from '$lib/data/placeholder';
  import { Activity, Brain, Shield, MessageSquare, Stethoscope, Heart } from 'lucide-svelte';
  
  const iconMap: Record<string, any> = {
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
      <p class="text-base text-muted/90 leading-relaxed">
        Специализируюсь на диагностике и лечении заболеваний нервной системы, включая хирургию позвоночника и нейроонкологию.
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {#each placeholder.services as service}
        <div class="bg-surface rounded-2xl shadow-sm border border-border/50 p-6 lg:p-8 flex flex-col h-full transition-all hover:shadow-md hover:-translate-y-1">
          <div class="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
            <svelte:component this={iconMap[service.icon]} size={24} />
          </div>
          <h3 class="text-xl font-bold font-sans text-foreground mb-3">
            {service.title}
          </h3>
          <p class="text-sm text-muted/90 flex-grow leading-relaxed">
            {service.description}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>

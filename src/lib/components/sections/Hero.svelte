<script lang="ts">
  import { placeholder } from '$lib/data/placeholder';
  import { User } from 'lucide-svelte';
  import { Button } from '$lib/components/ui/button';
  import * as Card from '$lib/components/ui/card';
</script>

<section id="hero" class="relative py-20 lg:py-32 bg-background flex items-center justify-center min-h-[90vh]">
  <div class="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    <!-- Text Content -->
    <div class="space-y-6 md:pr-12 animate-fade-in-up">
      <h1 class="text-4xl lg:text-5xl font-bold font-display text-foreground leading-tight tracking-tight">
        {placeholder.doctor.name}
      </h1>
      <p class="text-lg lg:text-xl font-medium text-muted-foreground">
        {placeholder.doctor.specialization}
      </p>
      <p class="text-base text-muted-foreground/80 max-w-prose">
        {placeholder.doctor.experience}
      </p>
      <div class="flex flex-col sm:flex-row gap-4 pt-4">
        <Button
          href="#booking"
          size="lg"
          class="text-base font-semibold shadow-md transform hover:-translate-y-0.5 transition-all"
        >
          Записаться на консультацию
        </Button>
        <Button
          href="#about"
          variant="outline"
          size="lg"
          class="text-base font-medium bg-card shadow-sm transform hover:-translate-y-0.5 transition-all"
        >
          Узнать больше
        </Button>
      </div>
    </div>

    <!-- Image Placeholder -->
    <Card.Root class="relative w-full aspect-square md:aspect-[4/5] overflow-hidden shadow-xl animate-fade-in-up animation-delay-100">
      <div class="absolute inset-0 bg-muted/10 flex items-center justify-center">
        <div class="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none"></div>
        <User size={64} class="text-muted-foreground/40" />
        <span class="sr-only">Фотография доктора</span>
      </div>
    </Card.Root>
  </div>
</section>

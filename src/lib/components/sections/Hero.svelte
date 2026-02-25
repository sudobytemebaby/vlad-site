<script lang="ts">
  import { placeholder } from '$lib/data/placeholder';
  import { User } from 'lucide-svelte';
</script>

<section id="hero" class="relative py-20 lg:py-32 bg-background flex items-center justify-center min-h-[90vh]">
  <div class="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    <!-- Text Content -->
    <div class="space-y-6 md:pr-12 animate-fade-in-up">
      <h1 class="text-4xl lg:text-5xl font-bold font-display text-foreground leading-tight tracking-tight">
        {placeholder.doctor.name}
      </h1>
      <p class="text-lg lg:text-xl font-medium text-muted">
        {placeholder.doctor.specialization}
      </p>
      <p class="text-base text-muted/80 max-w-prose">
        {placeholder.doctor.experience}
      </p>
      <div class="flex flex-col sm:flex-row gap-4 pt-4">
        <a
          href="#booking"
          class="px-8 py-3 bg-primary text-white rounded-md text-base font-semibold hover:bg-primary/90 transition-all shadow-md transform hover:-translate-y-0.5 text-center"
        >
          Записаться на консультацию
        </a>
        <a
          href="#about"
          class="px-8 py-3 border border-border bg-surface text-foreground rounded-md text-base font-medium hover:bg-muted/5 transition-all shadow-sm transform hover:-translate-y-0.5 text-center"
        >
          Узнать больше
        </a>
      </div>
    </div>

    <!-- Image Placeholder -->
    <div class="relative w-full aspect-square md:aspect-[4/5] bg-muted/10 rounded-2xl overflow-hidden shadow-xl border border-border flex items-center justify-center animate-fade-in-up delay-100">
      <div class="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none"></div>
      <User size={64} class="text-muted/40" />
      <span class="sr-only">Фотография доктора</span>
    </div>
  </div>
</section>

<style>
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
  }
  
  .delay-100 {
    animation-delay: 0.2s;
  }
</style>

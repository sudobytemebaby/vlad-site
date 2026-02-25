<script lang="ts">
  import { placeholder } from '$lib/data/placeholder';
  import { CheckCircle } from 'lucide-svelte';
</script>

<section id="about" class="py-20 bg-surface">
  <div class="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
    <!-- Biography -->
    <div class="space-y-6">
      <h2 class="text-3xl lg:text-4xl font-display font-bold text-foreground">
        О враче
      </h2>
      <p class="text-base text-muted/90 leading-relaxed max-w-prose">
        {placeholder.doctor.bio}
      </p>
      <div class="space-y-4">
        {#each placeholder.doctor.achievements as achievement}
          <div class="flex items-start gap-4 p-4 rounded-lg bg-background border border-border/50 shadow-sm transition-all hover:bg-muted/5">
            <CheckCircle class="text-primary w-6 h-6 flex-shrink-0 mt-0.5" />
            <span class="text-sm font-medium text-foreground">{achievement}</span>
          </div>
        {/each}
      </div>
    </div>

    <!-- Facts Grid -->
    <div class="grid grid-cols-2 gap-6 md:gap-8 bg-background p-6 rounded-2xl shadow-sm border border-border">
      {#each placeholder.doctor.facts as fact}
        <div class="text-center p-6 bg-surface rounded-xl shadow-sm border border-border/50 transition-transform hover:-translate-y-1">
          <p class="text-3xl lg:text-4xl font-display font-bold text-primary mb-2">
            {fact.value}
          </p>
          <p class="text-sm font-medium text-muted uppercase tracking-wider">
            {fact.label}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>

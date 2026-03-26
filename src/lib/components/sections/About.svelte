<script lang="ts">
  import { placeholder } from '$lib/data/placeholder';
  import { t } from '$lib/i18n/index.svelte';
  import * as Card from '$lib/components/ui/card';
  import { Badge } from '$lib/components/ui/badge';

  const factsKeys = ['about.yearsExp', 'about.operations'];
  const timelineKeys = [
    { key: 'about.higherEdu', descKey: 'about.higherEduDesc' },
    { key: 'about.residency', descKey: 'about.residencyDesc' },
    { key: 'about.candidate', descKey: 'about.candidateDesc' },
    { key: 'about.training', descKey: 'about.trainingDesc' },
    { key: 'about.presentTitle', descKey: 'about.presentDesc', yearKey: 'about.present' },
  ];
  const photoKeys = ['about.photo1', 'about.photo2', 'about.photo3'];
</script>

<section id="about" class="py-12 sm:py-16 lg:py-28 bg-surface overflow-hidden">
  <div class="max-w-6xl mx-auto px-4">

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-start mb-12 sm:mb-16 lg:mb-20">

      <div class="space-y-6 sm:space-y-8 animate-fade-in-left">
        <div class="space-y-3 sm:space-y-4">
          <div class="inline-block">
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-foreground">
              {t('about.title')}
            </h2>
            <div class="h-1 bg-primary rounded-full mt-2"></div>
          </div>
          <p class="text-base sm:text-lg text-foreground font-medium pt-1 sm:pt-2">
            {t('about.specialty')}
          </p>
        </div>

        <p class="text-sm sm:text-base text-muted-foreground leading-relaxed">
          {t('about.bio')}
        </p>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-4 sm:pt-6 border-t border-border">
          {#each placeholder.doctor.facts as fact, i}
            <div class="text-center sm:text-left">
              <p class="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-primary mb-0.5 sm:mb-1">
                {fact.value}
              </p>
              <p class="text-[0.65rem] sm:text-xs font-medium text-muted-foreground uppercase tracking-wider">
                {t(factsKeys[i])}
              </p>
            </div>
          {/each}
          <div class="text-center sm:text-left">
            <p class="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-primary mb-0.5 sm:mb-1">
              {t('about.degreeValue')}
            </p>
            <p class="text-[0.65rem] sm:text-xs font-medium text-muted-foreground uppercase tracking-wider">
              {t('about.degree')}
            </p>
          </div>
          <div class="text-center sm:text-left">
            <p class="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-primary mb-0.5 sm:mb-1">
              {t('about.categoryValue')}
            </p>
            <p class="text-[0.65rem] sm:text-xs font-medium text-muted-foreground uppercase tracking-wider">
              {t('about.category')}
            </p>
          </div>
        </div>
      </div>

      <div class="relative pl-6 sm:pl-8 border-l border-border/60 space-y-6 sm:space-y-10 animate-fade-in-right animation-delay-200">
        {#each placeholder.doctor.timeline as item, i}
          <div class="relative">
            <div class="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-[3px] sm:border-4 border-surface bg-primary shadow-sm z-10"></div>

            <div class="space-y-0.5 sm:space-y-1">
              <Badge variant="secondary" class="font-mono text-xs mb-1">
                {timelineKeys[i].yearKey ? t(timelineKeys[i].yearKey!) : item.year}
              </Badge>
              <h3 class="text-base sm:text-lg font-bold font-sans text-foreground">
                {t(timelineKeys[i].key)}
              </h3>
              <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-sm">
                {t(timelineKeys[i].descKey)}
              </p>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
      {#each placeholder.doctor.gallery as photo, index}
        <Card.Root class="group relative aspect-4/3 overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300">
          <div class="absolute inset-0 bg-muted/10">
            <div class="absolute inset-0 bg-linear-to-br from-muted/20 to-muted/5 group-hover:scale-105 transition-transform duration-700"></div>
            <div class="absolute inset-0 flex items-center justify-center text-muted-foreground/20 group-hover:text-muted-foreground/30 transition-colors">
              <svg class="w-12 h-12 sm:w-16 sm:h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
            </div>

            <div class="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-6 pt-8 sm:pt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
              <p class="text-white font-medium text-xs sm:text-sm translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                {t(photoKeys[index])}
              </p>
            </div>
          </div>
        </Card.Root>
      {/each}
    </div>

  </div>
</section>

<script lang="ts">
  import { placeholder } from '$lib/data/placeholder';
  import { m } from '$lib/paraglide/messages.js';
  import * as Card from '$lib/components/ui/card';
  import * as Carousel from '$lib/components/ui/carousel';
  import { Badge } from '$lib/components/ui/badge';

  const facts = [
    () => m.about_years_exp(),
    () => m.about_operations(),
  ];

  const timeline = [
    { title: () => m.about_higher_edu(), desc: () => m.about_higher_edu_desc() },
    { title: () => m.about_residency(), desc: () => m.about_residency_desc() },
    { title: () => m.about_candidate(), desc: () => m.about_candidate_desc() },
    { title: () => m.about_training(), desc: () => m.about_training_desc() },
    { title: () => m.about_present_title(), desc: () => m.about_present_desc(), year: () => m.about_present() },
  ];

  const photos = [
    () => m.about_photo1(),
    () => m.about_photo2(),
    () => m.about_photo3(),
    () => m.about_photo4(),
  ];
</script>

<section id="about" class="py-12 sm:py-16 lg:py-28 bg-surface overflow-hidden">
  <div class="max-w-6xl mx-auto px-4">

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-start mb-12 sm:mb-16 lg:mb-20">

      <div class="space-y-6 sm:space-y-8 animate-fade-in-left">
        <div class="space-y-3 sm:space-y-4">
          <div class="inline-block">
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-serif italic font-bold text-foreground">
              {m.about_title()}
            </h2>
            <div class="h-1 bg-primary rounded-full mt-2"></div>
          </div>
          <p class="text-base sm:text-lg text-foreground font-medium pt-1 sm:pt-2">
            {m.about_specialty()}
          </p>
        </div>

        <p class="text-sm sm:text-base text-muted-foreground leading-relaxed">
          {m.about_bio()}
        </p>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-y-5 sm:gap-y-0 sm:divide-x sm:divide-border pt-4 sm:pt-6 border-t border-border">
          {#each placeholder.doctor.facts as fact, i}
            <div class="text-center sm:px-4 sm:first:pl-0 sm:last:pr-0">
              <p class="text-2xl font-bold text-primary leading-none">{fact.value}</p>
              <p class="text-[0.65rem] text-muted-foreground uppercase tracking-wider mt-1.5">{facts[i]()}</p>
            </div>
          {/each}
          <div class="text-center sm:px-4">
            <p class="text-2xl font-bold text-primary leading-none">{m.about_degree_value()}</p>
            <p class="text-[0.65rem] text-muted-foreground uppercase tracking-wider mt-1.5">{m.about_degree()}</p>
          </div>
          <div class="text-center sm:px-4 sm:last:pr-0">
            <p class="text-2xl font-bold text-primary leading-none">{m.about_category_value()}</p>
            <p class="text-[0.65rem] text-muted-foreground uppercase tracking-wider mt-1.5">{m.about_category()}</p>
          </div>
        </div>
      </div>

      <div class="relative pl-6 sm:pl-8 border-l border-border/60 space-y-6 sm:space-y-10 animate-fade-in-right animation-delay-200">
        {#each placeholder.doctor.timeline as item, i}
          <div class="relative">
            <div class="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-[3px] sm:border-4 border-surface bg-primary shadow-sm z-10"></div>

            <div class="space-y-0.5 sm:space-y-1">
              <Badge variant="secondary" class="font-mono text-xs mb-1">
                {timeline[i].year ? timeline[i].year!() : item.year}
              </Badge>
              <h3 class="text-base sm:text-lg font-bold text-foreground">
                {timeline[i].title()}
              </h3>
              <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-sm">
                {timeline[i].desc()}
              </p>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <Carousel.Root
      opts={{ align: 'start', loop: true }}
      class="w-full"
    >
      <Carousel.Content class="-ms-4">
        {#each placeholder.doctor.gallery as photo, index}
          <Carousel.Item class="ps-4 basis-full sm:basis-1/2 lg:basis-1/3">
            <Card.Root class="group relative aspect-4/3 overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300">
              <img
                src={photo.src}
                alt={photos[index]()}
                class="absolute inset-0 w-full h-full object-cover {photo.position} group-hover:scale-105 transition-transform duration-700"
              />
              <div class="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 via-black/30 to-transparent p-4 pt-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p class="text-white font-medium text-xs sm:text-sm translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {photos[index]()}
                </p>
              </div>
            </Card.Root>
          </Carousel.Item>
        {/each}
      </Carousel.Content>
      <div class="flex items-center justify-center gap-4 mt-6">
        <Carousel.Previous
          size="icon"
          class="static translate-y-0 size-11 rounded-full border-border hover:border-primary hover:text-primary hover:bg-primary/5 shadow-sm transition-colors"
        />
        <Carousel.Next
          size="icon"
          class="static translate-y-0 size-11 rounded-full border-border hover:border-primary hover:text-primary hover:bg-primary/5 shadow-sm transition-colors"
        />
      </div>
    </Carousel.Root>

  </div>
</section>

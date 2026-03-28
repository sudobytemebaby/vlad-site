<script lang="ts">
  import { placeholder } from '$lib/data/placeholder';
  import { m } from '$lib/paraglide/messages.js';
  import { ChevronDown } from '@lucide/svelte';
  import { Button } from '$lib/components/ui/button';
  import { formatPhoneNumber } from '$lib/utils';
</script>

<section id="hero" class="relative min-h-[100svh] w-full overflow-hidden">
  <div
    class="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style="background-image: url('{placeholder.doctor.heroImage}');"
  ></div>

  <div class="absolute inset-0 bg-slate-950/75"></div>
  <div class="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent"></div>

  <div class="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="min-h-[100svh] flex flex-col lg:flex-row lg:items-center lg:justify-between pt-16 pb-12 sm:py-20 lg:py-0">

      <div class="flex-1 flex flex-col justify-center lg:pr-12 animate-fade-in-up">
        <div class="space-y-4 sm:space-y-6">
          <div class="space-y-1.5 sm:space-y-2">
            <p class="text-slate-400 text-sm sm:text-lg font-medium">
              {m.hero_specialty()}
            </p>
            <h1 class="font-serif italic text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium text-white">
              {m.hero_name()}<br />
              <span class="font-serif text-slate-300">{m.hero_surname()}</span>
            </h1>
          </div>

          <p class="font-sans text-sm sm:text-lg text-white/70 max-w-lg leading-relaxed">
            {m.hero_experience()}
          </p>

          <div class="flex gap-6 sm:gap-10 pt-3 sm:pt-4 border-t border-white/15">
            <div>
              <p class="text-2xl sm:text-3xl font-bold text-white leading-none">17+</p>
              <p class="text-[0.65rem] sm:text-xs text-white/55 uppercase tracking-wider mt-1.5">{m.hero_years_label()}</p>
            </div>
            <div>
              <p class="text-2xl sm:text-3xl font-bold text-white leading-none">2000+</p>
              <p class="text-[0.65rem] sm:text-xs text-white/55 uppercase tracking-wider mt-1.5">{m.hero_operations_label()}</p>
            </div>
            <div>
              <p class="text-2xl sm:text-3xl font-bold text-white leading-none">{m.about_degree_value()}</p>
              <p class="text-[0.65rem] sm:text-xs text-white/55 uppercase tracking-wider mt-1.5">{m.hero_degree_label()}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col justify-center lg:pl-12 animate-fade-in-up animation-delay-100 mt-6 lg:mt-0">
        <div class="space-y-3 lg:space-y-6">
          <p class="text-white/60 text-sm uppercase tracking-widest mb-2 hidden lg:block">
            {m.hero_cta_label()}
          </p>

          <div class="flex flex-col sm:flex-row lg:flex-col gap-3 sm:gap-4">
            <Button
              href="#booking"
              size="lg"
              class="bg-white text-slate-950 hover:bg-white/90 text-sm sm:text-base font-semibold shadow-lg px-6 sm:px-8 py-4 sm:py-6 h-auto"
            >
              {m.hero_book_btn()}
            </Button>

            <Button
              href="#about"
              variant="outline"
              size="lg"
              class="text-sm sm:text-base font-medium px-6 sm:px-8 py-4 sm:py-6 h-auto"
            >
              {m.hero_more_btn()}
            </Button>
          </div>

          <div class="hidden lg:block pt-8 text-center">
            <p class="text-white/40 text-sm">
              {m.hero_or_call()}<br />
              <a href="tel:{formatPhoneNumber(placeholder.doctor.contacts.phone)}" class="text-white/80 hover:text-white font-mono text-lg">
                {placeholder.doctor.contacts.phone}
              </a>
            </p>
          </div>
        </div>
      </div>

    </div>

    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block">
      <a href="#about" class="text-white/50 hover:text-white/80 transition-colors">
        <ChevronDown size={32} />
      </a>
    </div>
  </div>
</section>

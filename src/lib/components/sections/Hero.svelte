<script lang="ts">
  import { placeholder } from '$lib/data/placeholder';
  import { t } from '$lib/i18n/index.svelte';
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
            <p class="text-slate-400 text-sm sm:text-lg font-medium tracking-wide uppercase">
              {t('hero.specialty')}
            </p>
            <h1 class="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-white leading-[0.95] tracking-tight">
              {t('hero.name')}<br />
              <span class="text-slate-300">{t('hero.surname')}</span>
            </h1>
          </div>

          <p class="text-sm sm:text-lg text-white/70 max-w-lg leading-relaxed">
            {t('hero.experience')}
          </p>

          <div class="flex flex-wrap gap-5 sm:gap-8 pt-2 sm:pt-4">
            <div class="text-center">
              <p class="text-3xl sm:text-5xl font-display font-bold text-white">15+</p>
              <p class="text-xs sm:text-sm text-white/60 uppercase tracking-wider">{t('hero.yearsLabel')}</p>
            </div>
            <div class="text-center">
              <p class="text-3xl sm:text-5xl font-display font-bold text-white">1200+</p>
              <p class="text-xs sm:text-sm text-white/60 uppercase tracking-wider">{t('hero.operationsLabel')}</p>
            </div>
            <div class="text-center">
              <p class="text-3xl sm:text-5xl font-display font-bold text-white">{t('about.degreeValue')}</p>
              <p class="text-xs sm:text-sm text-white/60 uppercase tracking-wider">{t('hero.degreeLabel')}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col justify-center lg:pl-12 animate-fade-in-up animation-delay-100 mt-6 lg:mt-0">
        <div class="space-y-3 lg:space-y-6">
          <p class="text-white/60 text-sm uppercase tracking-widest mb-2 hidden lg:block">
            {t('hero.ctaLabel')}
          </p>

          <div class="flex flex-col sm:flex-row lg:flex-col gap-3 sm:gap-4">
            <Button
              href="#booking"
              size="lg"
              class="bg-white text-slate-950 hover:bg-white/90 text-sm sm:text-base font-semibold shadow-lg px-6 sm:px-8 py-4 sm:py-6 h-auto"
            >
              {t('hero.bookBtn')}
            </Button>

            <Button
              href="#about"
              variant="outline"
              size="lg"
              class="text-sm sm:text-base font-medium px-6 sm:px-8 py-4 sm:py-6 h-auto"
            >
              {t('hero.moreBtn')}
            </Button>
          </div>

          <div class="hidden lg:block pt-8 text-center">
            <p class="text-white/40 text-sm">
              {t('hero.orCall')}<br />
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

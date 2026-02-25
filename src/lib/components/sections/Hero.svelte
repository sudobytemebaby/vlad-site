<script lang="ts">
  import { placeholder } from '$lib/data/placeholder';
  import { Button } from '$lib/components/ui/button';
  import { ChevronDown } from 'lucide-svelte';
</script>

<section id="hero" class="relative h-screen w-full overflow-hidden">
  <!-- Background Image -->
  <div 
    class="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style="background-image: url('{placeholder.doctor.heroImage}');"
  ></div>
  
  <!-- Dark Overlay -->
  <div class="absolute inset-0 bg-slate-950/75"></div>
  
  <!-- Gradient Overlay for better text readability -->
  <div class="absolute inset-0 bg-gradient-o-r from-slate-950/90 via-slate-950/60 to-transparent"></div>
  
  <!-- Content -->
  <div class="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="h-full flex flex-col lg:flex-row lg:items-center lg:justify-between py-20 lg:py-0">
      
      <!-- Left Side: Large Typography -->
      <div class="flex-1 flex flex-col justify-center lg:pr-12 animate-fade-in-up">
        <div class="space-y-6">
          <div class="space-y-2">
            <p class="text-slate-400 text-lg font-medium tracking-wide uppercase">
              Нейрохирург высшей категории
            </p>
            <h1 class="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-white leading-[0.95] tracking-tight">
              Владислав<br />
              <span class="text-slate-300">Кельмаков</span>
            </h1>
          </div>
          
          <p class="text-base sm:text-lg text-white/70 max-w-lg leading-relaxed">
            {placeholder.doctor.experience}
          </p>
          
          <!-- Stats Row -->
          <div class="flex flex-wrap gap-8 pt-4">
            <div class="text-center">
              <p class="text-4xl sm:text-5xl font-display font-bold text-white">15+</p>
              <p class="text-sm text-white/60 uppercase tracking-wider">лет опыта</p>
            </div>
            <div class="text-center">
              <p class="text-4xl sm:text-5xl font-display font-bold text-white">1200+</p>
              <p class="text-sm text-white/60 uppercase tracking-wider">операций</p>
            </div>
            <div class="text-center">
              <p class="text-4xl sm:text-5xl font-display font-bold text-white">к.м.н.</p>
              <p class="text-sm text-white/60 uppercase tracking-wider">учёная степень</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Side: CTA Buttons -->
      <div class="flex flex-col justify-center lg:pl-12 animate-fade-in-up animation-delay-200 mt-8 lg:mt-0">
        <div class="space-y-4 lg:space-y-6">
          <p class="text-white/60 text-sm uppercase tracking-widest mb-2 hidden lg:block">
            Запишитесь на консультацию
          </p>
          
          <div class="flex flex-col sm:flex-row lg:flex-col gap-4">
            <Button
              href="#booking"
              size="lg"
              class="bg-white text-slate-950 hover:bg-white/90 text-base font-semibold shadow-lg px-8 py-6 h-auto"
            >
              Записаться на приём
            </Button>
            
            <Button
              href="#about"
              variant="outline"
              size="lg"
              class="text-base font-medium px-8 py-6 h-auto"
            >
              Подробнее о враче
            </Button>
          </div>
          
          <div class="hidden lg:block pt-8 text-center">
            <p class="text-white/40 text-sm">
              или позвоните<br />
              <a href="tel:+79991234567" class="text-white/80 hover:text-white font-mono text-lg">
                +7 (999) 123-45-67
              </a>
            </p>
          </div>
        </div>
      </div>
      
    </div>
    
    <!-- Scroll Down Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block">
      <a href="#about" class="text-white/50 hover:text-white/80 transition-colors">
        <ChevronDown size={32} />
      </a>
    </div>
  </div>
</section>

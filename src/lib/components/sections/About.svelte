<script lang="ts">
  import { placeholder } from '$lib/data/placeholder';
  import { Award, GraduationCap, Microscope } from 'lucide-svelte';
  
  // Map icons to timeline events just for visual variety (optional)
  const getIcon = (index: number) => {
    if (index === 0) return GraduationCap;
    if (index === 2) return Award;
    return Microscope;
  };
</script>

<section id="about" class="py-20 lg:py-28 bg-surface overflow-hidden">
  <div class="max-w-6xl mx-auto px-4">
    
    <!-- Top Section: Bio & Timeline -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
      
      <!-- Left Column: Bio & Key Stats -->
      <div class="space-y-8 animate-fade-in-left">
        <div class="space-y-4">
          <h2 class="text-3xl lg:text-4xl font-display font-bold text-foreground relative inline-block">
            О враче
            <span class="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
          </h2>
          <p class="text-lg text-foreground font-medium pt-2">
            {placeholder.doctor.specialization}
          </p>
        </div>
        
        <p class="text-base text-muted/90 leading-relaxed text-justify">
          {placeholder.doctor.bio}
        </p>

        <!-- Key Stats Row -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-border">
          {#each placeholder.doctor.facts as fact}
            <div class="text-center sm:text-left">
              <p class="text-2xl lg:text-3xl font-display font-bold text-primary mb-1">
                {fact.value}
              </p>
              <p class="text-xs font-medium text-muted uppercase tracking-wider">
                {fact.label}
              </p>
            </div>
          {/each}
        </div>
      </div>

      <!-- Right Column: Vertical Timeline -->
      <div class="relative pl-8 border-l border-border/60 space-y-10 animate-fade-in-right">
        {#each placeholder.doctor.timeline as item, index}
          <div class="relative">
            <!-- Dot -->
            <div class="absolute -left-[39px] top-1 w-5 h-5 rounded-full border-4 border-surface bg-primary shadow-sm z-10"></div>
            
            <div class="space-y-1">
              <span class="inline-block px-2 py-0.5 rounded-md bg-muted/10 text-xs font-mono font-medium text-muted-foreground mb-1">
                {item.year}
              </span>
              <h3 class="text-lg font-bold font-sans text-foreground">
                {item.title}
              </h3>
              <p class="text-sm text-muted/90 leading-relaxed max-w-sm">
                {item.description}
              </p>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <!-- Bottom Section: Photo Gallery -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
      {#each placeholder.doctor.gallery as photo, i}
        <div class="group relative aspect-[4/3] bg-muted/10 rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-lg transition-all duration-300">
           <!-- Placeholder Gradient/Icon for Image -->
           <div class="absolute inset-0 bg-gradient-to-br from-muted/20 to-muted/5 group-hover:scale-105 transition-transform duration-700"></div>
           <div class="absolute inset-0 flex items-center justify-center text-muted/20 group-hover:text-muted/30 transition-colors">
              <svg class="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
           </div>
           
           <!-- Overlay Caption -->
           <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 pt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
             <p class="text-white font-medium text-sm translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
               {photo.caption}
             </p>
           </div>
        </div>
      {/each}
    </div>

  </div>
</section>

<style>
  @keyframes fadeInLeft {
    from { opacity: 0; transform: translateX(-20px); }
    to { opacity: 1; transform: translateX(0); }
  }
  @keyframes fadeInRight {
    from { opacity: 0; transform: translateX(20px); }
    to { opacity: 1; transform: translateX(0); }
  }

  .animate-fade-in-left {
    animation: fadeInLeft 0.8s ease-out forwards;
  }
  .animate-fade-in-right {
    animation: fadeInRight 0.8s ease-out forwards;
    animation-delay: 0.2s;
    opacity: 0; /* Start hidden for delay */
  }
</style>

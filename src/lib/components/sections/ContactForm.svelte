<script lang="ts">
  import { CheckCircle2 } from 'lucide-svelte';
  import { Button } from '$lib/components/ui/button';

  let name = $state('');
  let phone = $state('');
  let topic = $state('Консультация');
  let agreed = $state(false);
  let submitted = $state(false);
  let loading = $state(false);

  const topics = ['Консультация', 'Второе мнение', 'Вопрос', 'Другое'];

  async function handleSubmit(event: Event) {
    event.preventDefault();
    if (!name || !phone || !agreed) return;

    loading = true;
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    loading = false;
    submitted = true;
  }
</script>

<section id="contact" class="py-20 lg:py-24 bg-surface relative overflow-hidden">
  <div class="max-w-xl mx-auto px-4 relative z-10">
    <div class="text-center mb-12 lg:mb-16">
      <h2 class="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
        Обратная связь
      </h2>
      <p class="text-base text-muted/90 max-w-lg mx-auto leading-relaxed">
        Оставьте контакт и мы свяжемся с вами для записи на консультацию. Медицинские вопросы по телефону не консультируем.
      </p>
    </div>

    {#if submitted}
      <div class="text-center bg-background rounded-2xl p-8 border border-border/50 shadow-sm animate-fade-in-up">
        <CheckCircle2 size={48} class="text-primary mx-auto mb-4" />
        <h3 class="text-xl font-bold font-sans text-foreground mb-2">Заявка отправлена!</h3>
        <p class="text-muted/90">
          Мы свяжемся с вами в ближайшее время по указанному номеру.
        </p>
      </div>
    {:else}
      <form onsubmit={handleSubmit} class="space-y-6 bg-background rounded-2xl p-6 lg:p-8 border border-border/50 shadow-lg relative">
        <div class="space-y-2">
          <label for="name" class="text-sm font-medium text-foreground">
            Ваше имя <span class="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            bind:value={name}
            required
            placeholder="Иван Иванов"
            class="w-full px-4 py-3 rounded-lg bg-surface border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-muted/40"
          />
        </div>

        <div class="space-y-2">
          <label for="phone" class="text-sm font-medium text-foreground">
            Телефон <span class="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            bind:value={phone}
            required
            placeholder="+7 (999) 000-00-00"
            class="w-full px-4 py-3 rounded-lg bg-surface border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-muted/40 font-mono"
          />
        </div>

        <div class="space-y-2">
          <label for="topic" class="text-sm font-medium text-foreground">
            Тема обращения
          </label>
          <div class="relative">
             <select
              id="topic"
              bind:value={topic}
              class="w-full px-4 py-3 rounded-lg bg-surface border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none pr-10"
            >
              {#each topics as t}
                <option value={t}>{t}</option>
              {/each}
            </select>
             <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-muted">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
             </div>
          </div>
        </div>

        <div class="flex items-start gap-3">
          <input
            id="agreed"
            type="checkbox"
            bind:checked={agreed}
            required
            class="mt-1 w-4 h-4 rounded border-border text-primary focus:ring-primary bg-surface"
          />
          <label for="agreed" class="text-xs text-muted/80 leading-snug">
            Я согласен на обработку персональных данных в соответствии с <a href="#" class="text-primary hover:underline">политикой конфиденциальности</a>.
          </label>
        </div>

        <!-- Turnstile Placeholder -->
        <div class="bg-surface/50 border border-dashed border-border rounded-lg p-4 text-center text-xs text-muted font-mono select-none pointer-events-none">
          [ Turnstile капча ]
        </div>

        <Button
          type="submit"
          disabled={loading || !agreed}
          class="w-full h-12 text-base font-semibold shadow-md"
        >
          {#if loading}
            <span class="animate-spin w-5 h-5 border-2 border-current border-t-transparent rounded-full"></span>
            Отправка...
          {:else}
            Отправить заявку
          {/if}
        </Button>
      </form>
    {/if}
  </div>
</section>

<style>
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-fade-in-up {
    animation: fadeInUp 0.5s ease-out forwards;
  }
</style>

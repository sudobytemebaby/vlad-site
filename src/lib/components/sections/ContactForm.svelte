<script lang="ts">
  import { CheckCircle2 } from 'lucide-svelte';
  import { Button } from '$lib/components/ui/button';
  import { Input } from '$lib/components/ui/input';
  import { Label } from '$lib/components/ui/label';
  import { Checkbox } from '$lib/components/ui/checkbox';
  import * as Select from '$lib/components/ui/select';
  import * as Card from '$lib/components/ui/card';

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
      <p class="text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
        Оставьте контакт и мы свяжемся с вами для записи на консультацию. Медицинские вопросы по телефону не консультируем.
      </p>
    </div>

    {#if submitted}
      <Card.Root class="animate-fade-in-up-fast">
        <Card.Content class="pt-6 text-center">
          <CheckCircle2 size={48} class="text-primary mx-auto mb-4" />
          <Card.Title class="text-xl font-sans mb-2">Заявка отправлена!</Card.Title>
          <Card.Description>
            Мы свяжемся с вами в ближайшее время по указанному номеру.
          </Card.Description>
        </Card.Content>
      </Card.Root>
    {:else}
      <Card.Root class="shadow-lg">
        <Card.Content class="pt-6">
          <form onsubmit={handleSubmit} class="space-y-6">
            <div class="space-y-2">
              <Label for="name">
                Ваше имя <span class="text-destructive">*</span>
              </Label>
              <Input
                id="name"
                type="text"
                bind:value={name}
                required
                placeholder="Иван Иванов"
              />
            </div>

            <div class="space-y-2">
              <Label for="phone">
                Телефон <span class="text-destructive">*</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                bind:value={phone}
                required
                placeholder="+7 (999) 000-00-00"
                class="font-mono"
              />
            </div>

            <div class="space-y-2">
              <Label for="topic">Тема обращения</Label>
              <Select.Root type="single" bind:value={topic}>
                <Select.Trigger class="w-full">
                  {topic}
                </Select.Trigger>
                <Select.Content>
                  <Select.Group>
                    {#each topics as t}
                      <Select.Item value={t}>{t}</Select.Item>
                    {/each}
                  </Select.Group>
                </Select.Content>
              </Select.Root>
            </div>

            <div class="flex items-start gap-3">
              <Checkbox 
                id="agreed" 
                bind:checked={agreed}
                required
                aria-required="true"
              />
              <Label for="agreed" class="text-xs text-muted-foreground leading-snug font-normal cursor-pointer">
                Я согласен на обработку персональных данных в соответствии с <a href="#" class="text-primary hover:underline">политикой конфиденциальности</a>.
              </Label>
            </div>

            <!-- Turnstile Placeholder -->
            <div class="bg-muted/50 border border-dashed border-border rounded-lg p-4 text-center text-xs text-muted-foreground font-mono select-none pointer-events-none">
              [ Turnstile капча ]
            </div>

            <Button
              type="submit"
              disabled={loading || !agreed}
              class="w-full h-12 text-base font-semibold shadow-md"
            >
              {#if loading}
                <span class="animate-spin-slow w-5 h-5 border-2 border-current border-t-transparent rounded-full"></span>
                Отправка...
              {:else}
                Отправить заявку
              {/if}
            </Button>
          </form>
        </Card.Content>
      </Card.Root>
    {/if}
  </div>
</section>

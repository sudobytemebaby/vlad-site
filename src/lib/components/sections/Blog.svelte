<script lang="ts">
  import { placeholder } from '$lib/data/placeholder';
  import { ExternalLink } from 'lucide-svelte';
  import * as Card from '$lib/components/ui/card';
</script>

<section id="blog" class="py-20 bg-background">
  <div class="max-w-6xl mx-auto px-4">
    <div class="flex items-center justify-between mb-12">
      <h2 class="text-3xl lg:text-4xl font-display font-bold text-foreground">
        Из моего Telegram канала
      </h2>
      <a
        href={placeholder.doctor.contacts.telegram}
        target="_blank"
        rel="noopener noreferrer"
        class="text-primary hover:text-primary/80 font-medium text-sm lg:text-base hidden sm:inline-flex items-center gap-2"
      >
        Перейти в канал <ExternalLink size={16} />
      </a>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
      {#each placeholder.blog as post}
        <Card.Root class="flex flex-col h-full transition-all hover:shadow-md hover:-translate-y-1">
          <Card.Header class="pb-2">
            <time class="text-xs font-mono text-muted-foreground">
              {post.date}
            </time>
          </Card.Header>
          <Card.Content class="flex-grow">
            <p class="text-sm lg:text-base line-clamp-4 leading-relaxed">
              {post.text}
            </p>
          </Card.Content>
          <Card.Footer class="pt-0">
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              Читать в Telegram <ExternalLink size={14} />
            </a>
          </Card.Footer>
        </Card.Root>
      {/each}
    </div>
    
    <div class="mt-8 text-center sm:hidden">
        <a
        href={placeholder.doctor.contacts.telegram}
        target="_blank"
        rel="noopener noreferrer"
        class="text-primary hover:text-primary/80 font-medium text-sm inline-flex items-center gap-2"
      >
        Перейти в канал <ExternalLink size={16} />
      </a>
    </div>
  </div>
</section>

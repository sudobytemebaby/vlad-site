<script lang="ts">
  import { Separator } from '$lib/components/ui/separator';
</script>

<footer class="bg-surface border-t border-border py-12 text-center md:text-left">
  <div class="max-w-6xl mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm mb-8">
      <div class="space-y-4">
        <h3 class="text-xl font-display font-bold text-foreground">Др. Смирнов</h3>
        <p class="text-muted-foreground">Нейрохирург высшей категории</p>
      </div>
      <nav aria-label="Footer navigation" class="space-y-4">
        <ul class="space-y-2">
          <li><a href="#about" class="text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 rounded">О враче</a></li>
          <li><a href="#services" class="text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 rounded">Услуги</a></li>
          <li><a href="#booking" class="text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 rounded">Запись</a></li>
          <li><a href="#contacts" class="text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 rounded">Контакты</a></li>
        </ul>
      </nav>
      <div class="space-y-4 md:text-right">
        <p class="text-muted-foreground">&copy; {new Date().getFullYear()} Др. Смирнов. Все права защищены.</p>
        <a href="#" class="text-xs text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 rounded">Политика конфиденциальности</a>
      </div>
    </div>
    <Separator class="my-8" />
    <div>
      <p class="text-xs text-muted-foreground/60 text-center md:text-left">
        Информация на сайте носит справочный характер и не является публичной офертой. 
        Консультации по телефону не ведутся.
      </p>
    </div>
  </div>
</footer>

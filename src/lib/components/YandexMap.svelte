<script lang="ts">
  import { browser } from '$app/environment';

  const YANDEX_API_KEY = 'ebf1e593-deac-4a39-a2aa-48c30abb4ac6';

  interface Props {
    coordinates: [number, number];
    zoom?: number;
    markerTitle?: string;
    markerSubtitle?: string;
    class?: string;
  }

  let {
    coordinates,
    zoom = 16,
    markerTitle = '',
    markerSubtitle = '',
    class: className = '',
  }: Props = $props();

  let mapContainer: HTMLDivElement | undefined = $state();
  let mapState: 'loading' | 'ready' | 'fallback' = $state('loading');

  const iframeSrc = $derived(
    `https://yandex.ru/map-widget/v1/?ll=${coordinates[0]},${coordinates[1]}&z=${zoom}&pt=${coordinates[0]},${coordinates[1]},pm2blm`
  );

  function loadScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (typeof ymaps3 !== 'undefined') {
        resolve();
        return;
      }
      const existing = document.querySelector('script[src*="api-maps.yandex.ru"]');
      if (existing) {
        existing.addEventListener('load', () => resolve());
        existing.addEventListener('error', () => reject());
        return;
      }
      const script = document.createElement('script');
      script.src = `https://api-maps.yandex.ru/v3/?apikey=${YANDEX_API_KEY}&lang=ru_RU`;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Failed to load Yandex Maps'));
      document.head.appendChild(script);
    });
  }

  async function initMap() {
    if (!browser || !mapContainer) return;

    try {
      await loadScript();
      await ymaps3.ready;

      const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } = ymaps3;
      const { YMapDefaultMarker } = await ymaps3.import('@yandex/ymaps3-default-ui-theme');

      const map = new YMap(mapContainer, {
        location: { center: coordinates, zoom },
      });

      map.addChild(new YMapDefaultSchemeLayer());
      map.addChild(new YMapDefaultFeaturesLayer());
      map.addChild(new YMapDefaultMarker({
        coordinates,
        title: markerTitle,
        subtitle: markerSubtitle,
        color: '#1d4ed8',
      }));

      mapState = 'ready';
    } catch {
      mapState = 'fallback';
    }
  }

  $effect(() => {
    if (mapContainer) {
      initMap();
    }
  });
</script>

<div class="relative {className}">
  {#if mapState === 'fallback'}
    <iframe
      src={iframeSrc}
      class="absolute inset-0 w-full h-full rounded-lg"
      style="border: 0;"
      allowfullscreen
      title="Yandex Map"
    ></iframe>
  {:else}
    <div bind:this={mapContainer} class="absolute inset-0 rounded-lg overflow-hidden"></div>
  {/if}

  {#if mapState === 'loading'}
    <div class="absolute inset-0 flex items-center justify-center bg-muted/10 rounded-lg">
      <div class="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
  {/if}
</div>

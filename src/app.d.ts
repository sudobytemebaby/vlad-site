// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	// Yandex Maps JS API 3.0
	// eslint-disable-next-line no-var
	var ymaps3: {
		ready: Promise<void>;
		import(module: string): Promise<any>;
		YMap: any;
		YMapDefaultSchemeLayer: any;
		YMapDefaultFeaturesLayer: any;
	};
}

export {};

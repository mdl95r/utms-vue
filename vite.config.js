/** @type {import('vite').UserConfig} */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa';

const vitePWA = VitePWA(
	{
		registerType: 'autoUpdate',
		outDir: 'dist',
		manifest: {
			name: 'utms generator',
			short_name: 'utms',
			description: 'App for generate utm parameters. Usefull for marketers.',
			theme_color: '#ffffff',
			icons: [
				{
					src: 'images/favicon-32x32.png',
					sizes: '32x32',
					type: 'image/png'
				},
				{
					src: 'images/android-chrome-192x192.png',
					sizes: '192x192',
					type: 'image/png'
				},
				{
					src: 'images/android-chrome-512x512.png',
					sizes: '512x512',
					type: 'image/png'
				}
			]
		}
	}
);

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		open: true,
		port: 3000,
	},
	plugins: [vue(), vitePWA],

	resolve: {
		alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
	},
});

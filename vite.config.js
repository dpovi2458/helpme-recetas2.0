import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "./resources/scss/app.scss";`
            }
        }
    },
    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
        react(),
    ],
    server: {
        historyApiFallback: true,
    },
    // other Vite config...
});

import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()]
} // image: {
//   domains: ["astro.build"],
//   remotePatterns:[{ protocol: 'https' }], 
// },
);
import { defineConfig } from "astro/config";
import Compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://rootenginear.github.io",
  base: "/my-common-patterns",
  integrations: [
    Compress({
      HTML: {
        "html-minifier-terser": {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
        },
      },
      Image: false,
    }),
  ],
});

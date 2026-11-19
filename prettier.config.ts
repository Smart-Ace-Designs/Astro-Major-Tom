import type { Config } from "prettier";
import type { PluginOptions } from "prettier-plugin-tailwindcss";

const config: Config & PluginOptions = {
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  tailwindStylesheet: "src/styles/global.css",
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};

export default config;

<!-- ASTRO:REMOVE:START -->

# Astro Template: Major Tom

Astro **Major Tom** is an opinionated [Astro](https://astro.build/) starter template with built-in support for Tailwind CSS, Prettier, view transitions, and aliases.

Using `create astro@latest` provides everything you need to create a basic Astro application. However, it is missing a few useful items that you might find yourself manually adding to every new Astro project. The **Major Tom** template was created to automatically include these items plus a starter `AstroWelcome` component to showcase Tailwind. This provides a great starting point with sample code for a new Astro project with Tailwind CSS.

The template includes:

- An initial Astro project structure
- Astro [View Transitions](https://docs.astro.build/en/guides/view-transitions/)
- Astro [Aliases](https://docs.astro.build/en/guides/imports/#aliases)
- [Tailwind CSS](https://tailwindcss.com/)
- [Prettier](https://prettier.io/)
- Default _.vscode_ files to properly handle Tailwind CSS, recommended extensions, and default Prettier formatters
- A default _MainLayout.astro_ layout file
- A default _global.css_ file
- A blank _README.md_ file
- A starter component to showcase Tailwind CSS
- The `dev` script set to `"astro dev --open"`

## Deployment Methods

### npm

```sh
npm create astro@latest -q -- --template smart-ace-designs/astro-major-tom project-name
```

### bun

```sh
bun create astro@latest -- --template smart-ace-designs/astro-major-tom project-name
```

### pnpm

```sh
pnpm create astro@latest --template smart-ace-designs/astro-major-tom project-name
```

### yarn

```sh
yarn create astro@latest --template smart-ace-designs/astro-major-tom project-name
```

## Project Structure

After deploying the Astro **Major Tom** template you will see the following files and directories in your project root:

```text
/
├── .vscode/
│   ├── extensions.json
│   ├── launch.json
│   └── settings.json
├── public/
│   ├── favicon.ico
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── AstroWelcome.astro
│   ├── layouts/
│   │   └── MainLayout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── .gitignore
├── .prettierignore
├── .prettierrc.mjs
├── AGENTS.md
├── astro.config.mjs
├── package.json
├── README.md
└── tsconfig.json
```

<!-- ASTRO:REMOVE:END -->

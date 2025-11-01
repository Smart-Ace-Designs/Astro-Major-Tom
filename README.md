<!-- ASTRO:REMOVE:START -->
# Astro Template: Major Tom
Astro **Major Tom** is an opinionated Astro 5 starter template with built-in support for Tailwind CSS, Prettier, view transitions, and aliases.

Using `create astro@latest` provides everything you need to create a basic Astro 5 application. However, it is missing a few useful items that you might find yourself manually adding to every new Astro project. The **Major Tom** template was created to automatically include these items plus a starter `AstroWelcome` component to showcase Tailwind. This provides a great starting point with sample code for a new Astro 5 project with Tailwind.

The template includes:
- An initial Astro project structure
- Astro [View Transitions](https://docs.astro.build/en/guides/view-transitions/)
- Astro [Aliases](https://docs.astro.build/en/guides/imports/#aliases)
- [Tailwind CSS v4.1](https://tailwindcss.com/)
- [Prettier](https://prettier.io/)
- A default _MainLayout.astro_ layout file
- A default _global.css_ file
- Default _.vscode_ files to properly handle Tailwind CSS, recommended extensions, and default Prettier formatters
- A starter component to showcase Tailwind CSS
- The `dev` script set to `"astro dev --open"`

An optional [PowerShell function](https://github.com/Smart-Ace-Designs/SmartAceDesigns.AstroLiftoff) (standalone or as part of a PowerShell module) is available to deploy the above template and provide the following additional functionality:
- Creates an additional empty folder: _assets_
- Runs the `prettier` CLI to provide an intial format of all project files
- Initializes a _Git_ repository
- Automatically navigates to the project folder and peforms an initial install
- Runs `astro update` to update the core Astro packages to the latest versions and runs your preferred package manager (npm or bun) to update the other packages
- Provides an option to launch the site and/or open the project folder with VS Code post deployment

## Deployment Methods
### npm
```sh
npm create astro@latest -- --template smart-ace-designs/astro-major-tom project-name
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
### PowerShell
The optional PowerShell function and module are available here:
[SmartAceDesigns.AstroLiftoff](https://github.com/Smart-Ace-Designs/SmartAceDesigns.AstroLiftoff)

```sh
New-AstroProject -ProjectName project-name -Location parent-directory -Template astro-major-tom
```

https://github.com/user-attachments/assets/85b9db02-0d89-4abd-9059-ac8b4b5c93e3

## Project Structure
After deploying the Astro **Major Tom** template you will see the following files and directories in your project root:

```text
/
├── .vscode/
│   ├── extensions.json
│   ├── launch.json
│   └── settings.json
├── public/
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
├── .prettierrc.mjs
├── astro.config.mjs
├── package.json
├── README.md
└── tsconfig.json
```

The optional `New-AstroProject` PowerShell function will add this additional directory to your project root:

```text
/
└── src/
    └── assets/
```
<!-- ASTRO:REMOVE:END -->